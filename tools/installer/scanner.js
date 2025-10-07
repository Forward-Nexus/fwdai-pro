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
    existingAssets: []
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

  } catch (error) {
    console.error('Scanner error:', error.message);
  }

  return findings;
}

