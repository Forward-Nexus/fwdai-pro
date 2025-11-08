/**
 * Project Scanner
 * 
 * Analyzes existing projects to auto-fill onboarding answers
 * See: /onboarding/ONBOARDING-FLOW.md (Project Scanner Logic section)
 */

import fs from 'fs-extra';
import path from 'path';

/**
 * Extract title from README.md
 */
function extractTitle(readme) {
  const lines = readme.split('\n');
  for (const line of lines) {
    if (line.startsWith('# ')) {
      return line.replace('# ', '').trim();
    }
  }
  return null;
}

/**
 * Extract description from README.md
 */
function extractDescription(readme) {
  const lines = readme.split('\n');
  let foundTitle = false;
  const descLines = [];
  
  for (const line of lines) {
    if (line.startsWith('# ')) {
      foundTitle = true;
      continue;
    }
    if (foundTitle && line.trim()) {
      // First non-empty paragraph after title
      if (line.startsWith('#')) break; // Stop at next heading
      descLines.push(line.trim());
      if (descLines.length >= 3) break; // Get first few lines
    }
  }
  
  return descLines.join(' ').substring(0, 200);
}

/**
 * Detect tech stack from package.json
 */
function detectTechStackFromPackage(pkg) {
  const stack = [];
  const deps = { ...pkg.dependencies, ...pkg.devDependencies };
  
  // Frontend frameworks
  if (deps['react']) {
    if (deps['react-native']) stack.push('React Native');
    else if (deps['next']) stack.push('Next.js');
    else stack.push('React');
  }
  if (deps['vue']) stack.push('Vue.js');
  if (deps['@angular/core']) stack.push('Angular');
  if (deps['svelte']) stack.push('Svelte');
  
  // Backend frameworks
  if (deps['express']) stack.push('Express');
  if (deps['fastify']) stack.push('Fastify');
  if (deps['koa']) stack.push('Koa');
  
  // Runtime
  if (pkg.engines?.node || deps['express'] || deps['fastify']) {
    stack.push('Node.js');
  }
  
  // Databases
  if (deps['pg'] || deps['postgres']) stack.push('PostgreSQL');
  if (deps['mysql'] || deps['mysql2']) stack.push('MySQL');
  if (deps['mongodb']) stack.push('MongoDB');
  if (deps['@supabase/supabase-js']) stack.push('Supabase');
  if (deps['firebase']) stack.push('Firebase');
  
  // Other notable
  if (deps['typescript']) stack.push('TypeScript');
  if (deps['tailwindcss']) stack.push('Tailwind CSS');
  
  return stack;
}

/**
 * Detect Python tech stack
 */
async function detectPythonStack(projectPath) {
  const stack = ['Python'];
  
  try {
    const requirements = await fs.readFile(path.join(projectPath, 'requirements.txt'), 'utf-8');
    
    if (requirements.includes('django')) stack.push('Django');
    if (requirements.includes('flask')) stack.push('Flask');
    if (requirements.includes('fastapi')) stack.push('FastAPI');
    if (requirements.includes('sqlalchemy')) stack.push('SQLAlchemy');
    if (requirements.includes('postgresql') || requirements.includes('psycopg')) stack.push('PostgreSQL');
    
  } catch (error) {
    // No requirements.txt or can't read
  }
  
  return stack;
}

/**
 * Determine project stage from git history
 */
async function determineStage(projectPath) {
  try {
    const gitPath = path.join(projectPath, '.git');
    const hasGit = await fs.pathExists(gitPath);
    
    if (!hasGit) return 'idea';
    
    // Check for production indicators
    const hasDockerfile = await fs.pathExists(path.join(projectPath, 'Dockerfile'));
    const hasCI = await fs.pathExists(path.join(projectPath, '.github/workflows'));
    
    if (hasDockerfile || hasCI) return 'launched';
    
    // Check for code
    const hasSrc = await fs.pathExists(path.join(projectPath, 'src'));
    const hasApp = await fs.pathExists(path.join(projectPath, 'app'));
    
    if (hasSrc || hasApp) return 'mvp';
    
    return 'idea';
  } catch (error) {
    return 'idea';
  }
}

/**
 * Find context/guide/brief files
 */
async function findContextFiles(projectPath) {
  const contextFiles = [];
  
  try {
    const files = await fs.readdir(projectPath);
    
    // Look for guide, context, brief files
    const contextPatterns = [
      /guide/i,
      /context/i,
      /brief/i,
      /overview/i,
      /about/i
    ];
    
    for (const file of files) {
      if (file.endsWith('.md') && contextPatterns.some(pattern => pattern.test(file))) {
        contextFiles.push(file);
      }
    }
  } catch (error) {
    // Directory read failed
  }
  
  return contextFiles;
}

/**
 * Extract mission/vision from markdown content
 */
function extractMission(content) {
  const mission = {
    statement: null,
    targetAudience: null,
    problemSolving: null,
    why: null,
    values: []
  };
  
  // Look for mission/purpose sections
  const missionPatterns = [
    /##?\s*(?:project\s+)?mission/i,
    /##?\s*(?:core\s+)?purpose/i,
    /##?\s*what\s+we['']?re\s+solving/i,
    /##?\s*the\s+vision/i
  ];
  
  const lines = content.split('\n');
  let inMissionSection = false;
  const sectionContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    // Check if entering mission section
    if (missionPatterns.some(p => p.test(line))) {
      inMissionSection = true;
      continue;
    }
    
    // Check if leaving section (next heading)
    if (inMissionSection && /^##?\s+/.test(line) && !missionPatterns.some(p => p.test(line))) {
      break;
    }
    
    if (inMissionSection && line.trim()) {
      sectionContent.push(line.trim());
    }
  }
  
  if (sectionContent.length > 0) {
    mission.statement = sectionContent.join(' ').substring(0, 500);
  }
  
  // Extract target audience
  const audienceMatch = content.match(/(?:target audience|for whom|who (?:is )?this (?:is )?for)[:\s-]+([^\n]+)/i);
  if (audienceMatch) {
    mission.targetAudience = audienceMatch[1].trim();
  }
  
  // Extract problem solving
  const problemMatch = content.match(/(?:problem|challenge|pain point|solving)[:\s-]+([^\n]+)/i);
  if (problemMatch) {
    mission.problemSolving = problemMatch[1].trim();
  }
  
  // Extract "why"
  const whyMatch = content.match(/(?:why|purpose|mission)[:\s-]+([^\n]+)/i);
  if (whyMatch && !mission.statement) {
    mission.why = whyMatch[1].trim();
  }
  
  return mission;
}

/**
 * Extract team/people information from markdown content
 */
function extractPeople(content) {
  const people = {
    founder: null,
    founderBackground: null,
    team: [],
    advisors: [],
    investors: []
  };
  
  // Extract founder info
  const founderMatch = content.match(/(?:founder|ceo)[:\s-]+([^\n]+)/i);
  if (founderMatch) {
    people.founder = founderMatch[1].trim();
  }
  
  // Look for team section
  const teamSection = content.match(/##?\s*team[\s\S]{0,500}/i);
  if (teamSection) {
    const teamText = teamSection[0];
    // Extract names from markdown lists
    const teamMatches = teamText.match(/[-*]\s*\*\*([^*]+)\*\*/g);
    if (teamMatches) {
      people.team = teamMatches.map(m => m.replace(/[-*]\s*\*\*([^*]+)\*\*/, '$1').trim());
    }
  }
  
  // Look for advisors
  const advisorSection = content.match(/##?\s*advisor[\s\S]{0,500}/i);
  if (advisorSection) {
    const advisorText = advisorSection[0];
    const advisorMatches = advisorText.match(/[-*]\s*\*\*([^*]+)\*\*/g);
    if (advisorMatches) {
      people.advisors = advisorMatches.map(m => m.replace(/[-*]\s*\*\*([^*]+)\*\*/, '$1').trim());
    }
  }
  
  return people;
}

/**
 * Extract founder story/background
 */
function extractFounderStory(content) {
  const story = {
    background: null,
    story: null,
    workingStyle: null
  };
  
  // Look for background section
  const backgroundPatterns = [
    /##?\s*(?:founder|background|about)/i,
    /##?\s*(?:the\s+)?story/i,
    /##?\s*(?:how\s+)?(?:this|it)\s+started/i
  ];
  
  const lines = content.split('\n');
  let inStorySection = false;
  const sectionContent = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    
    if (backgroundPatterns.some(p => p.test(line))) {
      inStorySection = true;
      continue;
    }
    
    if (inStorySection && /^##?\s+/.test(line) && !backgroundPatterns.some(p => p.test(line))) {
      break;
    }
    
    if (inStorySection && line.trim()) {
      sectionContent.push(line.trim());
    }
  }
  
  if (sectionContent.length > 0) {
    story.story = sectionContent.join(' ').substring(0, 1000);
  }
  
  // Look for working style mentions
  const workingStyleMatch = content.match(/(?:communication|working\s+style|how\s+(?:I|we)\s+work)[:\s-]+([\s\S]{0,300})/i);
  if (workingStyleMatch) {
    story.workingStyle = workingStyleMatch[1].trim().substring(0, 300);
  }
  
  return story;
}

/**
 * Deep scan context files for rich information
 */
async function deepScanContextFiles(projectPath, contextFiles) {
  const deepContext = {
    mission: null,
    people: null,
    founderStory: null,
    goals: [],
    values: []
  };
  
  for (const file of contextFiles) {
    try {
      const filePath = path.join(projectPath, file);
      const content = await fs.readFile(filePath, 'utf-8');
      
      // Extract mission
      const mission = extractMission(content);
      if (mission.statement || mission.targetAudience || mission.problemSolving) {
        deepContext.mission = { ...deepContext.mission, ...mission };
      }
      
      // Extract people
      const people = extractPeople(content);
      if (people.founder || people.team.length > 0) {
        deepContext.people = { ...deepContext.people, ...people };
      }
      
      // Extract founder story
      const story = extractFounderStory(content);
      if (story.story || story.background) {
        deepContext.founderStory = { ...deepContext.founderStory, ...story };
      }
      
    } catch (error) {
      // Skip files that can't be read
    }
  }
  
  return deepContext;
}

/**
 * Main scanner function
 */
export async function scanExistingProject(projectPath) {
  const findings = {
    projectName: null,
    description: null,
    techStack: [],
    stage: 'idea',
    workTypes: [],
    codeLocation: null,
    existingAssets: [],
    // NEW: Deep context from guide/context files
    deepContext: {
      mission: null,
      people: null,
      founderStory: null,
      contextFiles: []
    }
  };

  try {
    // 1. Check for README
    const readmePath = path.join(projectPath, 'README.md');
    if (await fs.pathExists(readmePath)) {
      const readme = await fs.readFile(readmePath, 'utf-8');
      findings.projectName = extractTitle(readme);
      findings.description = extractDescription(readme);
      findings.existingAssets.push('README.md');
    }

    // 2. Check for package.json
    const packagePath = path.join(projectPath, 'package.json');
    if (await fs.pathExists(packagePath)) {
      const pkg = await fs.readJson(packagePath);
      // Only use package.json if README didn't provide name/description
      if (!findings.projectName) findings.projectName = pkg.name;
      if (!findings.description) findings.description = pkg.description;
      findings.techStack = detectTechStackFromPackage(pkg);
      findings.existingAssets.push('package.json');
    }

    // 3. Check for Python
    if (await fs.pathExists(path.join(projectPath, 'requirements.txt'))) {
      const pythonStack = await detectPythonStack(projectPath);
      findings.techStack.push(...pythonStack);
      findings.existingAssets.push('requirements.txt');
    }

    // 4. Check for code folders
    const codeFolders = ['src', 'app', 'lib', 'components', 'pages'];
    for (const folder of codeFolders) {
      if (await fs.pathExists(path.join(projectPath, folder))) {
        findings.codeLocation = 'here';
        break;
      }
    }

    // 5. Determine stage
    findings.stage = await determineStage(projectPath);

    // 6. Auto-suggest work types
    if (findings.codeLocation === 'here' || findings.techStack.length > 0) {
      findings.workTypes.push('building');
    }

    // Check for investor materials
    const investorFiles = ['pitch-deck.md', 'business-plan.md', 'investor-deck.pdf'];
    for (const file of investorFiles) {
      if (await fs.pathExists(path.join(projectPath, file))) {
        findings.workTypes.push('investor');
        break;
      }
    }

    // Check for marketing materials
    if (await fs.pathExists(path.join(projectPath, 'marketing'))) {
      findings.workTypes.push('marketing');
    }

    // Check for legal docs
    if (await fs.pathExists(path.join(projectPath, 'legal'))) {
      findings.workTypes.push('legal');
    }

    // 7. NEW: Deep scan for context files (guide, brief, context, etc.)
    const contextFiles = await findContextFiles(projectPath);
    if (contextFiles.length > 0) {
      findings.deepContext.contextFiles = contextFiles;
      findings.existingAssets.push(...contextFiles);
      
      // Deep scan these files for mission, people, founder story
      const deepContext = await deepScanContextFiles(projectPath, contextFiles);
      findings.deepContext = { ...findings.deepContext, ...deepContext };
    }

  } catch (error) {
    console.error('Scanner error:', error.message);
  }

  return findings;
}

