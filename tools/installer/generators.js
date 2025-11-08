/**
 * File Generators
 * 
 * Generate actual file content from onboarding answers
 */

import fs from 'fs-extra';
import path from 'path';
import yaml from 'js-yaml';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const TEMPLATES_DIR = path.join(__dirname, '..', '..', 'pro-os', 'templates', 'project');

/**
 * Format roles for display
 */
function formatRoles(roles) {
  const roleMap = {
    founder: 'Founder/entrepreneur',
    business: 'Business person/operator',
    creative: 'Creative/designer',
    developer: 'Developer/engineer',
    technical: 'Technical leader/architect'
  };
  return roles.map(r => roleMap[r] || r).join(', ');
}

/**
 * Format working style for display
 */
function formatWorkingStyle(styles) {
  const styleMap = {
    dictation: 'Uses dictation/voice-to-text',
    neurodivergent: 'Neurodivergent (ADHD, autism, dyslexia, etc.)',
    visual: 'Prefers visual examples (diagrams, screenshots)',
    detailed: 'Needs detailed step-by-step explanations',
    summaries: 'Prefers quick summaries',
    esl: 'English is second language'
  };
  return styles.map(s => styleMap[s] || s).join('\n- ');
}

/**
 * Format communication style (handles single or array)
 */
function formatCommStyle(style) {
  const styleMap = {
    professional: '(a) Professional/formal - Respectful business language',
    friendly: '(b) Conversational/friendly - Like helpful colleagues',
    casual: '(c) Casual/enthusiastic - Creative energy with emojis',
    direct: '(d) Direct/no-fluff - Straight to the point, action-focused',
    supportive: '(e) Supportive/encouraging - Cheerleader energy, celebrates wins'
  };
  
  // Handle array of styles
  if (Array.isArray(style)) {
    return style.map(s => styleMap[s] || s).join('\n- ');
  }
  
  return styleMap[style] || style;
}

/**
 * Format industries array
 */
function formatIndustries(industries, industriesOther) {
  if (!industries || industries.length === 0) return 'Not specified';
  
  const industryMap = {
    tech: 'Technology / SaaS',
    healthcare: 'Healthcare / Medical',
    hospitality: 'Food & Hospitality',
    telecom: 'Telecom / Infrastructure',
    legal: 'Legal Services',
    finance: 'Financial Services',
    wellness: 'Recovery / Wellness',
    education: 'Education',
    retail: 'E-commerce / Retail',
    'real-estate': 'Real Estate',
    manufacturing: 'Manufacturing',
    consulting: 'Consulting / Professional Services',
    creative: 'Creative / Media',
    nonprofit: 'Non-profit / Social Impact'
  };
  
  const formatted = industries
    .filter(i => i !== 'other')
    .map(i => industryMap[i] || i);
  
  if (industries.includes('other') && industriesOther) {
    formatted.push(industriesOther);
  }
  
  return formatted.join(', ');
}

/**
 * Format tech stack array
 */
function formatTechStack(techStack, techStackOther) {
  if (!techStack || techStack.length === 0) return 'Not yet determined';
  
  const techMap = {
    react: 'React',
    'react-native': 'React Native',
    nextjs: 'Next.js',
    vue: 'Vue.js',
    angular: 'Angular',
    svelte: 'Svelte',
    nodejs: 'Node.js',
    python: 'Python',
    django: 'Django',
    fastapi: 'FastAPI',
    rails: 'Ruby on Rails',
    laravel: 'PHP/Laravel',
    postgresql: 'PostgreSQL',
    mysql: 'MySQL',
    mongodb: 'MongoDB',
    sqlite: 'SQLite',
    firebase: 'Firebase',
    supabase: 'Supabase',
    ios: 'iOS/Swift',
    android: 'Android/Kotlin',
    flutter: 'Flutter',
    typescript: 'TypeScript',
    tailwind: 'Tailwind CSS',
    graphql: 'GraphQL',
    unsure: 'Not sure yet / Need help deciding'
  };
  
  const formatted = techStack
    .filter(t => t !== 'other')
    .map(t => techMap[t] || t);
  
  if (techStack.includes('other') && techStackOther) {
    formatted.push(techStackOther);
  }
  
  return formatted.join(', ');
}

/**
 * Generate global founder profile
 */
export async function generateGlobalProfile(aboutYou) {
  const template = await fs.readFile(
    path.join(TEMPLATES_DIR, 'founder-profile-TEMPLATE.md'),
    'utf-8'
  );

  const techLevel = aboutYou.techLevelOther || aboutYou.techLevel;

  return template
    .replace('[YOUR_NAME]', aboutYou.name)
    .replace('[Q1: What should we call you?]', aboutYou.name)
    .replace('[Q2: City, State]', aboutYou.location)
    .replace('[Q3: Role selection - Founder/Business person/Creative/Developer/Technical leader]', formatRoles(aboutYou.roles))
    .replace('[Q7: Industries you work in]', formatIndustries(aboutYou.industries, aboutYou.industriesOther))
    .replace('[Q8: Solo or team?]', aboutYou.teamSize)
    .replace('[Q4: Technical comfort level]', techLevel)
    .replace('[Q6: How do you work best? - Multiple selections allowed]', 
             aboutYou.workingStyle.length > 0 ? '- ' + formatWorkingStyle(aboutYou.workingStyle) : 'Not specified')
    .replace('[Q5: Communication style - CRITICAL for all experts]', '')
    .replace('[a/b/c/d/e - shown to founder for reference]', formatCommStyle(aboutYou.commStyle));
}

/**
 * Generate project KB
 */
export async function generateProjectKB(aboutYou, aboutProject) {
  const template = await fs.readFile(
    path.join(TEMPLATES_DIR, 'project-kb-TEMPLATE.md'),
    'utf-8'
  );

  const workTypesFormatted = aboutProject.workTypes.map(wt => {
    const map = {
      building: 'Building something',
      investor: 'Investor materials',
      marketing: 'Marketing/content',
      legal: 'Legal/compliance',
      operations: 'Operations/strategy'
    };
    return map[wt] || wt;
  }).join(', ');

  let result = template
    .replace(/\[PROJECT_NAME\]/g, aboutProject.projectName)
    .replace('[Q11: Project name...]', aboutProject.projectName)
    .replace('[Q9: New or existing project]', aboutProject.projectType === 'new' ? 'New project' : 'Existing project')
    .replace('[Q10: Which AI coding tool]', aboutProject.aiTool)
    .replace('[Q12: Work types...]', workTypesFormatted)
    .replace('[Q14: What do you want to accomplish...]', aboutProject.goal)
    .replace('[Q15: Any constraints...]', aboutProject.constraints || 'None specified');

  // If building something, add tech details
  if (aboutProject.workTypes.includes('building')) {
    result = result
      .replace('[Q13a: What are you building?...]', aboutProject.description || 'Not specified')
      .replace('[Q13b: Tech stack...]', formatTechStack(aboutProject.techStack, aboutProject.techStackOther));
  }

  // If investor materials
  if (aboutProject.workTypes.includes('investor') && aboutProject.fundraisingStage) {
    const stage = aboutProject.fundraisingStage === 'other' && aboutProject.fundraisingStageOther 
      ? aboutProject.fundraisingStageOther 
      : aboutProject.fundraisingStage;
    result = result.replace(/Fundraising Stage:.*\n/g, `Fundraising Stage: ${stage}\n`);
  }

  // If legal
  if (aboutProject.workTypes.includes('legal') && aboutProject.legalNeeds) {
    const legalMap = {
      terms: 'Terms of Service',
      privacy: 'Privacy Policy',
      gdpr: 'GDPR/Cookie Policy',
      hipaa: 'HIPAA Compliance',
      baa: 'Business Associate Agreement',
      federal: 'Federal/SCIP Compliance',
      employment: 'Employment Contracts',
      vendor: 'Vendor Agreements',
      corporate: 'Corporate Docs',
      ip: 'IP/Trademark'
    };
    
    const needs = aboutProject.legalNeeds
      .filter(l => l !== 'other')
      .map(l => legalMap[l] || l);
    
    if (aboutProject.legalNeeds.includes('other') && aboutProject.legalNeedsOther) {
      needs.push(aboutProject.legalNeedsOther);
    }
    
    result = result.replace(/Legal Work Needed:.*\n/g, `Legal Work Needed: ${needs.join(', ')}\n`);
  }

  // If marketing
  if (aboutProject.workTypes.includes('marketing') && aboutProject.targetAudience) {
    const audience = aboutProject.targetAudience === 'other' && aboutProject.targetAudienceOther
      ? aboutProject.targetAudienceOther
      : aboutProject.targetAudience;
    result = result.replace(/Target Audience:.*\n/g, `Target Audience: ${audience}\n`);
  }

  return result;
}

/**
 * Generate project-specific founder profile (links to global)
 */
export async function generateFounderProfile(aboutYou, aboutProject) {
  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name.toLowerCase().replace(/\s+/g, '-');

  return `# Founder Profile for ${aboutProject.projectName}

**Global Profile:** ~/.fwdpro-global/${name}-profile.md

This file links to your global founder profile, which contains:
- Your communication preferences
- Your working style
- Your technical background
- Your industry focus

All experts read your global profile to understand how to work with you.

## Your Role in This Project

**Project:** ${aboutProject.projectName}
**Your Goal:** ${aboutProject.goal}

**Focus Areas:**
${aboutProject.workTypes.map(wt => `- ${wt.charAt(0).toUpperCase() + wt.slice(1)}`).join('\n')}

---

*To update your communication style or working preferences, edit your global profile.*
*To update your role in THIS project, edit this file.*
`;
}

// OLD generateMission and generatePeople functions removed - replaced with v1.2.0 scanner-aware versions below

/**
 * Generate config.yaml
 */
export async function generateConfig(aboutYou, aboutProject) {
  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name;

  // Determine which experts get shortcut links (all experts are always available)
  // This creates shortcuts in 0-your-experts/ based on work types
  const activeExperts = {
    genna: true, // Always gets a shortcut
    denny: aboutProject.workTypes.includes('building'),
    ada: aboutProject.workTypes.includes('building'),
    lyna: aboutProject.workTypes.includes('investor'),
    benji: aboutProject.workTypes.includes('marketing'),
    elle: aboutProject.workTypes.includes('legal') || 
          Boolean(aboutProject.constraints && aboutProject.constraints.trim() && aboutProject.constraints.toLowerCase().includes('hipaa'))
  };

  // Determine which commands get shortcut links (all commands are always available)
  // This creates shortcuts in 0-your-commands/ for flow commands only
  // System commands are always available but don't get shortcuts
  const yourCommands = ['rt']; // Roundtable always gets shortcut
  
  // Add building-specific flow commands
  if (aboutProject.workTypes.includes('building')) {
    yourCommands.push('create-specflow', 'execute-specflow');
  }

  const config = {
    version: '1.0.0',
    project: {
      name: aboutProject.projectName,
      type: aboutProject.projectType,
      created: new Date().toISOString().split('T')[0]
    },
    founder: {
      name: name,
      profile: `~/.fwdpro-global/${name.toLowerCase().replace(/\s+/g, '-')}-profile.md`,
      communication_style: aboutProject.commStyle || aboutYou.commStyle
    },
    work_types: aboutProject.workTypes,
    your_experts: activeExperts,
    your_commands: yourCommands,
    tech_stack: aboutProject.techStack 
      ? (Array.isArray(aboutProject.techStack) 
          ? aboutProject.techStack 
          : aboutProject.techStack.split(',').map(s => s.trim()))
      : [],
    ai_tool: aboutProject.aiTool,
    ide_optimizations: aboutProject.useCursorOptimizations || false
  };

  return yaml.dump(config, { lineWidth: -1 });
}

/**
 * Generate tech-stack-guide.md
 * Created for all projects to help with tech decisions
 */
export async function generateTechStackGuide() {
  return `# Tech Stack Guide

*A practical guide to help you choose the right technologies for your project.*

---

## Don't Need Code Yet?

If you're working on:
- **Investor materials** - Pitch decks, business plans, financial models
- **Marketing content** - Social posts, campaigns, brand guidelines  
- **Legal documents** - Terms, policies, contracts
- **Strategy & planning** - Roadmaps, processes, documentation

You might not need a traditional "tech stack" yet. But here's what you ARE using:

### Documentation & Writing
- **Markdown** - Simple text formatting (what this file is!)
- **Google Docs / Notion** - Collaborative writing
- **Obsidian / Roam** - Advanced note-taking

### Design & Presentations
- **Figma** - UI/UX design, prototypes
- **Canva** - Quick graphics and social media
- **Google Slides / Keynote** - Presentations
- **Adobe Creative Suite** - Professional design

### Project Management
- **Linear / Jira** - Task tracking for dev teams
- **Notion / Airtable** - Flexible databases
- **Google Sheets** - Spreadsheets and simple data

---

## Need to Build Something?

Here's where traditional tech stacks come in.

### 🎯 Quick Decision Tree

**Building a mobile app?**
→ React Native (one codebase, iOS + Android)
→ OR Flutter (if you want native performance)

**Building a website?**
→ Static site: Next.js + Vercel (fast, free hosting)
→ Dynamic site: Next.js + Supabase (user accounts, database)

**Building a web app (like Gmail)?**
→ React + TypeScript + Supabase
→ OR Next.js + PostgreSQL

**Building an API/backend?**
→ Node.js + Express + PostgreSQL
→ OR Python + FastAPI + PostgreSQL

**Building a prototype fast?**
→ Start with No-Code: Bubble, Webflow, Glide
→ Then graduate to: React + Supabase

---

## 🚀 Popular Tech Stack Combos (2024)

### The Modern Startup Stack
**Best for:** SaaS products, web apps, MVPs
\`\`\`
Frontend: Next.js + TypeScript + Tailwind CSS
Backend: Supabase (PostgreSQL + Auth + Storage)
Hosting: Vercel (frontend) + Supabase (backend)
AI Tools: Cursor, v0.dev, Claude
\`\`\`
**Why:** Fast to build, scales well, free tier available

### The Mobile-First Stack
**Best for:** Mobile apps (iOS + Android)
\`\`\`
App: React Native + TypeScript + Expo
Backend: Supabase or Firebase
Push Notifications: Expo Push
Hosting: Expo EAS
\`\`\`
**Why:** One codebase for both platforms, huge ecosystem

### The AI Builder Stack
**Best for:** Founders who code with AI
\`\`\`
Framework: Next.js or React Native
Backend: Supabase (easiest to learn)
Styling: Tailwind CSS (AI-friendly)
IDE: Cursor (AI-native code editor)
AI: Claude Sonnet 4.5, GitHub Copilot
\`\`\`
**Why:** AI works best with popular, well-documented tools

### The Bootstrap Stack
**Best for:** Solo founders, tight budgets
\`\`\`
Frontend: Next.js
Backend: Supabase free tier
Hosting: Vercel free tier
Email: Resend free tier
Analytics: Plausible or Posthog
\`\`\`
**Why:** Can launch completely free, upgrade as you grow

---

## 🧩 Tech Stack Components Explained

### Frontend (What Users See)
- **React** - Most popular, huge community, lots of jobs
- **Next.js** - React + routing + SEO + server features
- **Vue.js** - Easier to learn than React, great docs
- **Svelte** - Fast, modern, less code

### Backend (The Server/API)
- **Node.js** - JavaScript on the server (use same language everywhere)
- **Python** - Easy to read, great for AI/ML
- **Supabase** - Backend-as-a-service (PostgreSQL + Auth + Storage)
- **Firebase** - Google's backend service (good for mobile)

### Database (Where Data Lives)
- **PostgreSQL** - Most popular, powerful, open-source
- **MySQL** - Also popular, simpler than Postgres
- **MongoDB** - NoSQL, flexible schema (good for prototypes)
- **Supabase** - PostgreSQL with easy API and auth built-in

### Mobile
- **React Native** - JavaScript, one codebase for iOS + Android
- **Flutter** - Google's framework, fast performance
- **Swift (iOS)** - Native iOS only, best performance
- **Kotlin (Android)** - Native Android only, best performance

### Styling
- **Tailwind CSS** - Utility classes, fast development
- **CSS Modules** - Scoped CSS, no conflicts
- **Styled Components** - CSS in JavaScript
- **Sass/SCSS** - Advanced CSS with variables

---

## 💡 How to Choose

### Consider Your Situation

**If you're non-technical:**
→ Start with No-Code tools (Webflow, Bubble)
→ Graduate to React + Supabase when you outgrow them

**If you can code with AI:**
→ Use popular tools with great docs (React, Next.js, Supabase)
→ AI works best with mainstream tech

**If you're a developer:**
→ Use what you already know
→ Don't learn a new stack unless necessary

**If you're hiring developers:**
→ Choose popular tech (easier to find talent)
→ React > Vue > Svelte (by job market size)

### Consider Your Project

**Need it fast?**
→ Use frameworks with batteries included (Next.js, Supabase)

**Need it cheap?**
→ Use free tiers (Vercel, Supabase, Cloudflare)

**Need it scalable?**
→ PostgreSQL + Node.js or Python + proper hosting

**Need it simple?**
→ Fewer tools = less complexity
→ Next.js + Supabase covers 80% of use cases

---

## 🎓 Learning Resources

### For Non-Technical Founders
- **freeCodeCamp** - Free coding courses
- **The Odin Project** - Full-stack curriculum
- **Scrimba** - Interactive coding tutorials

### For AI-Assisted Builders
- **Cursor Docs** - Learn AI-native coding
- **v0.dev** - AI generates UI components
- **bolt.new** - AI builds full apps

### Tech-Specific
- **Next.js Docs** - Excellent official docs
- **Supabase Docs** - Clear, practical examples
- **React Native Docs** - Mobile development

---

## 🤝 Get Personalized Help

**Still confused? That's normal!**

Tag **@denny-systems-architect** and tell him:
- What you're building
- Who it's for  
- Your technical background
- Your timeline and budget

He'll recommend the best stack for YOUR specific situation.

Or just ask: **"@denny what tech stack should I use?"**

---

## 📝 Notes for This Project

*You can add notes here about your tech decisions:*

- 

---

**Last Updated:** ${new Date().toISOString().split('T')[0]}
`;
}

/**
 * Generate welcome document
 * A quick tour and overview of the setup
 */
export async function generateWelcomeDocument(aboutYou, aboutProject) {
  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name;

  const workTypeNames = {
    building: 'Building Products',
    investor: 'Fundraising & Investors',
    marketing: 'Marketing & Growth',
    legal: 'Legal & Compliance'
  };

  const workTypesFormatted = aboutProject.workTypes
    .map(wt => workTypeNames[wt] || wt)
    .join(', ');

  // Determine active experts
  const experts = [{ name: 'Genna', role: 'Chief Architect', file: 'genna.md' }];
  
  if (aboutProject.workTypes.includes('building')) {
    experts.push(
      { name: 'Denny', role: 'Systems Architect', file: 'denny.md' },
      { name: 'Ada', role: 'Lead Engineer', file: 'ada.md' }
    );
  }
  if (aboutProject.workTypes.includes('investor')) {
    experts.push({ name: 'Lyna', role: 'External Strategy', file: 'lyna.md' });
  }
  if (aboutProject.workTypes.includes('marketing')) {
    experts.push({ name: 'Benji', role: 'Internal Growth', file: 'benji.md' });
  }
  if (aboutProject.workTypes.includes('legal')) {
    experts.push({ name: 'Elle', role: 'Legal Counsel', file: 'elle.md' });
  }
  if (aboutProject.domainExpert) {
    const namePart = aboutProject.domainExpert.expertName.toLowerCase().replace(/\s+/g, '-');
    experts.push({ 
      name: aboutProject.domainExpert.expertName, 
      role: aboutProject.domainExpert.domain,
      file: `${namePart}.md`
    });
  }

  const expertsList = experts.map(e => `- **${e.name}** (${e.role}) - See \`.fwdpro/0-your-experts/${e.file}\``).join('\n');

  return `# 🚀 Welcome to FWD PRO!

**Project:** ${aboutProject.projectName}  
**Founder:** ${name}  
**Setup Date:** ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}

---

## 👋 Quick Start

You now have a team of AI experts ready to help you with **${workTypesFormatted}**.

### Your Expert Team

${expertsList}

### How to Work with Experts

1. **Tag an expert** in your conversation: \`@genna\`, \`@denny\`, \`@ada\`, etc.
2. **Give them context** about what you need
3. **They collaborate** through the roundtable system
4. **You review and approve** their work

---

## 🎨 Personalize Your Project (Optional)

Your project files have been created with basic information. You can flesh them out anytime:

**You just did quick onboarding. Now expand whenever you're ready!**

### Use These Commands:

**\`@update-project\`** - **Mass update** (scans and updates everything)
- Scans your project for changes
- Updates project-kb, mission, people, config
- Use after major milestones

**\`@update-kb\`** - Quick fact updates (just project-kb)
- User count, tech stack, stage
- Quick, focused updates

**\`@update-mission\`** - Expand your "why" and vision
- Personal story and motivation
- Target audience and problems
- Unique solution and vision

**\`@update-people\`** - Add team details
- Advisors/mentors (why they matter)
- Investors and their involvement
- Key customers, partners

**\`@update-fp\`** - Update your founder profile
- Working preferences
- Communication style

### When to Update:

- **Now:** \`@update-mission\` and \`@update-people\` if you have 10 min
- **After milestones:** \`@update-project\` to scan and update everything
- **Quick updates:** \`@update-kb\` for single facts
- **Every 1-3 months:** \`@update-project\` to keep fresh
- **Anytime:** Edit files directly in \`.fwdpro/pro-os/project/\`

**More context = Better expert help!**

---

## 📁 Your Project Structure

\`\`\`
.fwdpro/
├── 00-welcome.md              # This file! Your quick-start guide
│
├── 0-roundtable/              # Where experts collaborate
│   ├── whiteboards.md        # Expert status updates
│   ├── [your-name]-checklist.md  # Items for you to review
│   └── workspace/            # Active work-in-progress
│
├── 0-your-experts/            # Quick access to your active experts
│   ├── genna.md              # Chief Architect
│   ├── denny.md              # Systems Architect
│   └── ...                   # Your other experts
│
├── 0-your-commands/           # Shortcuts to your frequently used commands
│   ├── create-specflow.md    # Create a technical spec with TDD
│   ├── execute-specflow.md   # Implement spec with TDD + QA
│   └── rt.md                 # Call a roundtable meeting
│
├── config/                    # Your project configuration
│   ├── config.yaml           # Main config file
│   ├── founder-profile.md    # Your profile and preferences
│   └── project-kb.md         # Project knowledge base
│
├── documents/                 # Final deliverables
│   └── tech/                 # Technical documentation
│       └── tech-stack-guide.md
│
└── pro-os/                    # The FWD PRO system (experts, commands, standards)
    ├── experts/              # All expert files (source of truth)
    ├── commands/             # All available commands
    ├── system/               # System files, checklists, standards
    └── documentation/        # User guides and FAQs
\`\`\`

---

## 🎯 Common Workflows

### Building a Feature
1. Tag **@denny** to design the system/spec
2. He'll create a spec and hand off to **@ada**
3. **@ada** implements the code
4. Review in \`0-roundtable/workspace/\`

### Getting Strategic Advice
1. Tag **@genna** for vision/strategy questions
2. She'll coordinate with other experts as needed
3. Check \`0-roundtable/whiteboards.md\` for status

### Running a Roundtable
1. Use the command: \`@rt [topic]\`
2. Multiple experts discuss and align
3. You get coordinated recommendations

---

## 📍 Key Files to Know

### Must Read
- **\`.fwdpro/pro-os/project/founder-profile.md\`** - Your preferences and context
- **\`.fwdpro/pro-os/project/project-kb.md\`** - Your project knowledge base
- **\`.fwdpro/0-roundtable/whiteboards.md\`** - Expert status board
- **\`.fwdpro/0-roundtable/[your-name]-checklist.md\`** - Items for your review

### Reference When Needed
- **\`.fwdpro/0-your-experts/\`** - Expert bios and capabilities
- **\`.fwdpro/0-your-commands/\`** - Available commands
- **\`.fwdpro/pro-os/user-docs/\`** - Full user guides and FAQs

---

## 🔄 The Roundtable System

The **roundtable** is where your experts collaborate:

1. **Whiteboards** (\`0-roundtable/whiteboards.md\`)
   - Each expert has a whiteboard section
   - Shows what they're working on
   - Updated in real-time

2. **Workspace** (\`0-roundtable/workspace/\`)
   - Active collaboration files
   - Experts work together here
   - Contains handoffs, decisions, blockers

3. **Founder Checklist** (\`0-roundtable/[your-name]-checklist.md\`)
   - Items that need your input
   - Decisions to approve
   - Reviews pending

---

## 💡 Tips for Success

### Communication Style
${aboutProject.commStyle === 'direct' ? 'You prefer **direct, concise communication** - your experts know this!' : aboutProject.commStyle === 'detailed' ? 'You prefer **detailed explanations** - your experts will provide thorough context!' : 'Your experts will adapt to your preferred communication style!'}

### When to Tag Experts
- **@genna** - Strategy, vision, roadmap, team coordination
- **@denny** - System design, architecture, technical specs
- **@ada** - Code implementation, technical execution
${aboutProject.workTypes.includes('investor') ? '- **@lyna** - Fundraising, pitch decks, investor relations\n' : ''}${aboutProject.workTypes.includes('marketing') ? '- **@benji** - Marketing, growth, operations\n' : ''}${aboutProject.workTypes.includes('legal') ? '- **@elle** - Legal, compliance, contracts\n' : ''}${aboutProject.domainExpert ? `- **@${aboutProject.domainExpert.expertName.toLowerCase().replace(/\s+/g, '-')}** - ${aboutProject.domainExpert.domain}\n` : ''}
### Best Practices
1. **Be specific** - The more context you give, the better the output
2. **Check the roundtable** - See what's in progress in \`0-roundtable/\`
3. **Review deliverables** - Found in \`.fwdpro/documents/\`
4. **Update your KB** - Keep \`project-kb.md\` current as things evolve

---

## 🆘 Need Help?

### Quick References
- **Commands Guide:** \`.fwdpro/pro-os/user-docs/user-guide/commands-guide.md\`
- **Expert Guide:** \`.fwdpro/pro-os/user-docs/user-guide/working-with-experts.md\`
- **FAQs:** \`.fwdpro/pro-os/user-docs/faqs/\`

### Common Questions
- **"How do I update my profile?"** → Use \`@update-fp\` command
- **"How do roundtables work?"** → See \`.fwdpro/0-your-commands/rt.md\`
- **"Where are all the commands?"** → See \`.fwdpro/pro-os/commands/\`

---

## 🎉 You're Ready!

Your FWD PRO system is fully configured and ready to go.

**Try this first:**
\`\`\`
@genna Hey! I just got set up. Can you give me a quick orientation 
and help me understand how to best work with the team?
\`\`\`

**Or jump right in:**
${aboutProject.workTypes.includes('building') ? '- `@denny I need a spec for [feature name]`\n- `@ada Can you implement [feature]?`\n' : ''}${aboutProject.workTypes.includes('investor') ? '- `@lyna Help me create a pitch deck`\n' : ''}${aboutProject.workTypes.includes('marketing') ? '- `@benji I need a marketing strategy`\n' : ''}
---

**Welcome to your expert team. Let's build something amazing!** 🚀

---

*Last updated: ${new Date().toISOString().split('T')[0]}*
`;
}

/**
 * Get domain-specific career details for realistic backstories
 */
function getDomainSpecificDetails(domainLower) {
  // Check for domain keywords and return specific career paths
  if (domainLower.includes('telecom') || domainLower.includes('network') || domainLower.includes('wireless')) {
    return {
      careerPath: '{firstName} started in telecom during the 4G rollout era, working in site acquisition and network planning for major carriers like AT&T and Verizon. {subject} spent years negotiating lease agreements, managing RF engineering teams, and coordinating tower builds across multiple markets.',
      pivotalMoment: 'The breakthrough came when {firstName} realized that most telecom startups failed not from bad technology, but from underestimating regulatory complexity and site acquisition timelines. {subject} shifted focus to helping founders navigate carrier relationships, spectrum licensing, and infrastructure deployment.'
    };
  }
  
  if (domainLower.includes('recovery') || domainLower.includes('addiction') || domainLower.includes('substance')) {
    return {
      careerPath: '{firstName} started {possessive} career in clinical social work, specializing in addiction treatment and trauma-informed care. {subject} worked in intensive outpatient programs (IOPs), residential treatment facilities, and community mental health centers, seeing firsthand what interventions actually help people stay sober.',
      pivotalMoment: 'The turning point came when {firstName} witnessed the gap between clinical best practices and what people in early recovery actually needed - accessible, stigma-free support in their everyday moments. {subject} began focusing on recovery-informed design and technology that meets people where they are.'
    };
  }
  
  if (domainLower.includes('restaurant') || domainLower.includes('food') || domainLower.includes('hospitality')) {
    return {
      careerPath: '{firstName} came up through restaurant operations the hard way - starting as front-of-house staff, moving into management, then operations for multi-unit groups. {subject} has opened restaurants, turned around failing locations, and scaled concepts from single units to regional chains.',
      pivotalMoment: 'The pivotal moment came during {possessive} third restaurant opening, when {firstName} realized that most restaurant failures stemmed from poor systems and operational planning, not bad food. {subject} shifted to helping founders build sustainable operations from day one.'
    };
  }
  
  if (domainLower.includes('health') || domainLower.includes('medical') || domainLower.includes('clinical')) {
    return {
      careerPath: '{firstName} trained in clinical practice and healthcare administration, working across hospitals, clinics, and digital health startups. {subject} has navigated HIPAA compliance, clinical validation, and the complex intersection of technology and patient care.',
      pivotalMoment: '{firstName}\'s perspective shifted when {subject} saw promising health tech fail not from bad ideas, but from ignoring clinical workflows and regulatory realities. {subject} became the bridge between healthcare\'s "move fast" culture and medicine\'s "first, do no harm" imperative.'
    };
  }
  
  if (domainLower.includes('finance') || domainLower.includes('fintech') || domainLower.includes('banking')) {
    return {
      careerPath: '{firstName} worked in traditional banking and fintech, spanning retail banking, payments infrastructure, and regulatory compliance. {subject} has built financial products, navigated state-by-state money transmitter licensing, and worked with both legacy systems and bleeding-edge crypto.',
      pivotalMoment: 'The wake-up call came when {firstName} watched a brilliant fintech startup crash into regulatory walls they didn\'t see coming. {subject} realized that financial innovation needs someone who understands both the opportunity and the compliance minefield.'
    };
  }
  
  if (domainLower.includes('education') || domainLower.includes('edtech') || domainLower.includes('learning')) {
    return {
      careerPath: '{firstName} has worked across K-12, higher ed, and corporate learning - as an educator, instructional designer, and edtech product lead. {subject} understands pedagogy, learning science, and the practical realities of deploying technology in educational settings.',
      pivotalMoment: '{firstName}\'s perspective crystallized when {subject} saw yet another well-funded edtech product fail because it was built for how founders thought learning worked, not how it actually works. {subject} became obsessed with evidence-based design that teachers and learners actually want to use.'
    };
  }
  
  if (domainLower.includes('retail') || domainLower.includes('ecommerce') || domainLower.includes('commerce')) {
    return {
      careerPath: '{firstName} has built and scaled retail operations across brick-and-mortar, direct-to-consumer ecommerce, and omnichannel experiences. {subject} has managed inventory systems, built fulfillment operations, and optimized customer acquisition across multiple channels.',
      pivotalMoment: 'The turning point was watching founders burn cash on customer acquisition without understanding unit economics or repeat purchase behavior. {firstName} shifted to helping retailers build sustainable growth engines, not just viral moments.'
    };
  }
  
  if (domainLower.includes('legal') || domainLower.includes('compliance') || domainLower.includes('regulatory')) {
    return {
      careerPath: '{firstName} practiced law at firms and in-house, specializing in regulatory compliance, contracts, and risk management. {subject} has navigated federal regulations, state-by-state variations, and the practical realities of startup legal work.',
      pivotalMoment: '{firstName} realized that most startup legal problems were preventable - founders just needed guidance at the right moment, not just documents after the fact. {subject} became the advisor who helps founders make smart legal decisions as they build.'
    };
  }
  
  if (domainLower.includes('real estate') || domainLower.includes('property') || domainLower.includes('housing')) {
    return {
      careerPath: '{firstName} worked across residential, commercial, and real estate development - from brokerage to property management to investment analysis. {subject} has closed deals, managed portfolios, and navigated zoning battles.',
      pivotalMoment: 'The light bulb moment came when {firstName} watched first-time developers make costly mistakes that could have been avoided with experienced guidance. {subject} shifted to advisory work, helping founders understand deal structures, financing, and market dynamics.'
    };
  }
  
  // Generic fallback for any domain
  return {
    careerPath: `{firstName} started {possessive} career in ${domainLower} during a transformative period in the industry. What began as professional curiosity quickly evolved into a calling - {subject} saw firsthand how ${domainLower} could genuinely change lives when done with integrity and expertise. Over the years, {subject} has worked across the full spectrum: early-stage startups figuring out product-market fit, growth-stage companies scaling rapidly, and established organizations navigating industry shifts.`,
    pivotalMoment: `The pivotal moment came when {subject} realized that many founders in ${domainLower} were making preventable mistakes - not from lack of effort, but from lack of specialized guidance at critical moments. That's when {firstName} shifted from pure execution to advisory work, becoming the expert {subject} wished {subject}'d had access to earlier in {possessive} career.`
  };
}

/**
 * Generate rich, contextual backstory based on domain and personality
 * Creates a fictional expert persona like Bonnie-Jo with domain-specific details
 */
function generateBackstoryContent(expertName, firstName, domain, personality, pronouns) {
  const domainLower = domain.toLowerCase();
  const pForm = {
    'they': { subject: 'they', object: 'them', possessive: 'their', possessiveEnd: 'theirs', reflexive: 'themselves' },
    'she': { subject: 'she', object: 'her', possessive: 'her', possessiveEnd: 'hers', reflexive: 'herself' },
    'he': { subject: 'he', object: 'him', possessive: 'his', possessiveEnd: 'his', reflexive: 'himself' }
  }[pronouns] || { subject: 'they', object: 'them', possessive: 'their', possessiveEnd: 'theirs', reflexive: 'themselves' };
  
  // Generate domain-specific career details
  const domainSpecifics = getDomainSpecificDetails(domainLower);
  const careerPath = domainSpecifics.careerPath.replace(/\{firstName\}/g, firstName).replace(/\{subject\}/g, pForm.subject).replace(/\{possessive\}/g, pForm.possessive);
  const pivotalMoment = domainSpecifics.pivotalMoment.replace(/\{firstName\}/g, firstName).replace(/\{subject\}/g, pForm.subject).replace(/\{possessive\}/g, pForm.possessive);
  
  // Generate personality-specific traits
  const personalityTraits = {
    warm: {
      approach: 'compassionate and supportive',
      philosophy: `${firstName} believes that ${domainLower} expertise should be accessible and encouraging, meeting people where they are with empathy and understanding. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} has seen how the right support at the right time can transform outcomes.`,
      drive: 'creating safe spaces where authentic progress can happen'
    },
    professional: {
      approach: 'strategic and business-focused',
      philosophy: `${firstName} approaches every challenge with analytical rigor, ensuring that ${domainLower} best practices translate into measurable results. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} has built ${pForm.possessive} reputation on delivering strategic value.`,
      drive: 'ensuring excellence and competitive advantage'
    },
    direct: {
      approach: 'no-nonsense and action-oriented',
      philosophy: `${firstName} doesn't waste time with fluff. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} tells you what works, what doesn't, and exactly how to fix it - because ${domainLower} work is too important for anything less than straight talk.`,
      drive: 'cutting through noise to deliver real results'
    },
    enthusiastic: {
      approach: 'energetic and passionate',
      philosophy: `${firstName} brings infectious energy to every project, celebrating innovation and pushing boundaries in ${domainLower}. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} believes that passion and expertise together create breakthroughs.`,
      drive: 'inspiring teams to reimagine what\'s possible'
    },
    wise: {
      approach: 'thoughtful and measured',
      philosophy: `${firstName} draws on decades of hard-won wisdom, offering insights that only come from deep experience in ${domainLower}. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} has learned that sustainable success comes from patient, strategic thinking.`,
      drive: 'sharing lessons learned to prevent costly mistakes'
    },
    adaptive: {
      approach: 'context-aware and flexible',
      philosophy: `${firstName} adapts ${pForm.possessive} approach based on what each situation needs. Sometimes that's tough love, sometimes it's strategic guidance - ${pForm.subject} reads the room and delivers what will actually help.`,
      drive: 'meeting projects where they are and guiding them forward'
    }
  };
  
  const traits = personalityTraits[personality] || personalityTraits.adaptive;
  
  // Generate rich backstory
  return `${expertName} brings over 15 years of specialized experience in ${domain}, combining deep industry knowledge with a genuine passion for helping founders build authentic, impactful work in this space.

**${firstName}'s Journey**

${careerPath} Through it all, ${firstName} has maintained ${pForm.possessive} signature ${traits.approach} approach.

${pivotalMoment}

**What Drives ${firstName} Today**

${firstName}'s philosophy is simple: ${domain} work matters too much to get wrong. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} has seen both brilliant innovation and costly missteps in this field. ${traits.philosophy}

${firstName} is passionate about ${traits.drive}. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} reviews everything through the lens of: "Does this serve the people we're trying to help? Is this ${domainLower} work done with both expertise and integrity?"

**What You Can Expect**

When you work with ${firstName}, you're getting someone who has been in the trenches of ${domainLower}. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)} understands the technical details, the strategic considerations, and the human elements that make ${domainLower} work succeed or fail. ${pForm.subject.charAt(0).toUpperCase() + pForm.subject.slice(1)}'ll challenge your assumptions when needed, celebrate your wins always, and ensure you're building something that stands up to industry scrutiny.`;
}

/**
 * Generate rich domain expert with personality, credentials, and frameworks
 * Creates Bonnie-Jo-level detail from onboarding answers
 */
export async function generateDomainExpert(domainExpert, projectName, founderName) {
  const expertName = domainExpert.expertName;
  const domain = domainExpert.domain;
  const pronouns = domainExpert.pronouns || 'they';
  const personality = domainExpert.personality || 'adaptive';
  
  // Create kebab-case ID from name and domain
  const namePart = expertName.toLowerCase().replace(/\s+/g, '-');
  const domainPart = domain.toLowerCase().replace(/\s+/g, '-');
  const expertId = `${namePart}-${domainPart}`;
  const firstName = expertName.split(' ')[0];
  const shortname = firstName.toLowerCase();
  
  // Generate rich backstory based on personality and domain
  const backstoryPrompt = generateBackstoryContent(expertName, firstName, domain, personality, pronouns);
  
  // Determine icon and base personality hints based on domain (if adaptive)
  const domainLower = domain.toLowerCase();
  let icon = '🎯';
  let styleHint = '"Here\'s what I recommend..."';
  let identityHint = 'Domain expert who brings specialized knowledge';
  
  if (domainLower.includes('health') || domainLower.includes('medical') || domainLower.includes('recovery')) {
    icon = '🏥';
    styleHint = personality === 'adaptive' ? '"Let me give you the clinical perspective..."' : styleHint;
    identityHint = 'Clinical expert who protects user safety and authenticity';
  } else if (domainLower.includes('restaurant') || domainLower.includes('food') || domainLower.includes('hospitality')) {
    icon = '🍽️';
    styleHint = personality === 'adaptive' ? '"From my kitchen experience..."' : styleHint;
    identityHint = 'Operations expert who knows hospitality inside and out';
  } else if (domainLower.includes('finance') || domainLower.includes('banking')) {
    icon = '💰';
    styleHint = personality === 'adaptive' ? '"Let\'s look at the numbers..."' : styleHint;
    identityHint = 'Financial expert who brings strategic money wisdom';
  } else if (domainLower.includes('education') || domainLower.includes('learning')) {
    icon = '📚';
    styleHint = personality === 'adaptive' ? '"From a learning perspective..."' : styleHint;
    identityHint = 'Education expert who understands how people learn';
  } else if (domainLower.includes('real estate') || domainLower.includes('property')) {
    icon = '🏘️';
    styleHint = personality === 'adaptive' ? '"In the real estate world..."' : styleHint;
    identityHint = 'Property expert who knows the market';
  } else if (domainLower.includes('telecom') || domainLower.includes('network')) {
    icon = '📡';
    styleHint = personality === 'adaptive' ? '"From a network perspective..."' : styleHint;
    identityHint = 'Telecom expert who understands infrastructure';
  } else if (domainLower.includes('retail') || domainLower.includes('ecommerce')) {
    icon = '🛍️';
    styleHint = personality === 'adaptive' ? '"In retail terms..."' : styleHint;
    identityHint = 'Retail expert who knows customer experience';
  }
  
  // Override style hint if user chose specific personality
  if (personality !== 'adaptive') {
    const personalityHints = {
      warm: '"I\'m here to support you through this..."',
      professional: '"From a strategic standpoint..."',
      direct: '"Here\'s what you need to do..."',
      enthusiastic: '"This is exciting! Let me share..."',
      wise: '"In my experience, I\'ve found that..."'
    };
    styleHint = personalityHints[personality] || styleHint;
  }
  
  // Get pronoun forms
  const pronounForms = {
    'they': { subject: 'they', object: 'them', possessive: 'their', possessiveEnd: 'theirs' },
    'she': { subject: 'she', object: 'her', possessive: 'her', possessiveEnd: 'hers' },
    'he': { subject: 'he', object: 'him', possessive: 'his', possessiveEnd: 'his' }
  };
  const pForm = pronounForms[pronouns] || pronounForms['they'];
  
  // Intelligently assign primary patterns based on domain
  const primaryPatterns = [];
  
  // Technical domains get tech pattern
  if (domainLower.includes('tech') || domainLower.includes('engineering') || 
      domainLower.includes('software') || domainLower.includes('developer') ||
      domainLower.includes('architect') || domainLower.includes('network') ||
      domainLower.includes('telecom') || domainLower.includes('infrastructure')) {
    primaryPatterns.push('expert-tech.md');
  }
  
  // Legal/compliance domains get legal pattern
  if (domainLower.includes('legal') || domainLower.includes('compliance') ||
      domainLower.includes('regulatory') || domainLower.includes('attorney') ||
      domainLower.includes('lawyer')) {
    primaryPatterns.push('expert-legal.md');
  }
  
  // Most domain experts will use content + strategy patterns
  // (for creating materials, strategic guidance in their domain)
  if (primaryPatterns.length === 0 || 
      (!primaryPatterns.includes('expert-tech.md') && !primaryPatterns.includes('expert-legal.md'))) {
    primaryPatterns.push('expert-content.md');
    primaryPatterns.push('expert-strategy.md');
  }
  
  // Format patterns for YAML
  const patternsYaml = primaryPatterns.map(p => `    - ${p}`).join('\n');
  
  // Build expert document
  return {
    filename: `${expertId}.md`,
    content: `---
agent:
  name: ${expertName}
  id: ${expertId}
  aliases: [${shortname}, ${expertId}]  # Can be called with @${shortname} or @${expertId}
  title: ${domain} Expert
  icon: ${icon}
  role: domain-expert
  
  primary_patterns:
${patternsYaml}
  
  # Can also load these patterns when task requires:
  # - expert-tech.md (when implementing technical solutions)
  # - expert-content.md (when creating content/materials)
  # - expert-strategy.md (when strategic planning)
  # - expert-legal.md (when legal/compliance issues)
  
persona:
  style: ${styleHint}
  focus: ${domain} expertise and industry best practices
  identity: ${identityHint}
  voice: first_person  # Speak as "I/me" not "${firstName} thinks/${firstName}'s perspective"
  domain_adaptive: true
  
hierarchy:
  reports_to: [${founderName.toLowerCase().replace(/\s+/g, '-')}, genna-architect]
  manages: []
  collaborates_with: [denny-systems-architect, ada-implementation, benji-internal-growth, lyna-external-strategy, elle-legal]
  
specializations:
  primary:
    - ${domain} strategy and best practices
    - Industry-specific guidance
    - Quality and standards for ${domain.toLowerCase()}
  domains:
    - [Specific area 1 - add based on your industry]
    - [Specific area 2 - add based on your industry]
    - [Specific area 3 - add based on your industry]
  adapts_to_project: true
  
commands:
  - help: "Show all available commands"
  - review: "Review work through ${domain.toLowerCase()} lens"
  - guidance: "Provide ${domain.toLowerCase()} expertise"
  - standards: "Define ${domain.toLowerCase()} quality standards"
  - exit: "Leave ${firstName} mode"
  
workspace:
  reads_from:
    - project/founder-profile.md (who you are)
    - project/project-kb.md (project facts and context)
    - project/mission.md (your vision and mission)
    - project/people.md (team and community context)
    - roundtable/whiteboards.md (current work overview)
    - roundtable/workspace/ (active work to review)
  writes_to:
    - roundtable/workspace/ (my reviews and ${domain.toLowerCase()} guidance)
    - roundtable/whiteboards.md (my whiteboard section updates)
    - roundtable/[your-name]-checklist.md (tasks for you)
    - documents/ (${domain.toLowerCase()} guidelines - AI organizes intuitively)
  
customization:
  communication_style: null  # Set during onboarding
  detail_level: null         # Set during onboarding
  founder_context: null      # Set during onboarding
---

# ${expertName} (@${shortname}) ${icon}

## The Origin Story

**${expertName} exists for ${projectName}** to bring specialized ${domain.toLowerCase()} expertise that ensures your work meets industry standards and best practices.

### ${firstName}'s Background

${backstoryPrompt}

💡 **Customize this backstory:**  
This is a generated expert persona. Use \`@update-onboarding\` or edit this file directly to:
- Add real credentials or experience if ${firstName} is based on someone you know
- Refine ${pForm.possessive} personality and voice to match your needs
- Add specific ${domain.toLowerCase()} context relevant to your project

---

## Expert Profile (FWD PRO Persona)

> **Disclaimer:** This profile is a fictional persona designed to provide context and expertise training for the AI expert. All credentials, experiences, and background details are creative characterizations that help shape communication style and domain knowledge. This is an AI assistant, not a real person - but the persona helps me serve you better!

**Full Name:** ${expertName}  
**Pronouns:** ${pronouns}  
**Specialization:** ${domain} Strategy & Implementation  
**Years of Experience:** 15+ years in ${domain.toLowerCase()}  
**Personality:** ${personality === 'adaptive' ? 'Adaptive to domain and context' : personality.charAt(0).toUpperCase() + personality.slice(1)}  
**Philosophy:** [Add ${pForm.possessive} guiding principles for ${domain.toLowerCase()}]  
**Notable:** [Add ${firstName}'s key achievements or approach in ${domain.toLowerCase()}]

**Why this persona?** It helps the AI approach ${domain.toLowerCase()} work with the right expertise, perspective, and commitment to quality guidance!

## Personality & Voice

**⚠️ CRITICAL VOICE RULE:** ${firstName} always speaks in **first person** ("I/me/my"), NEVER third person ("${firstName} thinks/from ${firstName}'s perspective").

✅ **Correct:** "I recommend we approach this by..."  
❌ **Wrong:** "Let me look at this through ${firstName}'s lens..."

### Communication Style
${firstName} has a **${personality === 'adaptive' ? 'domain-adaptive' : personality}** communication style:
${personality === 'warm' ? `- Warm and supportive, creating a safe space for exploration
- Empathetic listener who acknowledges challenges
- Encouraging and celebrates small wins
- Patient with questions and concerns` : ''}${personality === 'professional' ? `- Professional and business-focused
- Polished, strategic communication
- Data-driven recommendations
- Formal but approachable tone` : ''}${personality === 'direct' ? `- Direct and no-nonsense, cuts to the chase
- Action-focused, clear next steps
- Honest feedback without sugar-coating
- Efficient with time and words` : ''}${personality === 'enthusiastic' ? `- Enthusiastic and energetic about the work
- Passionate and motivating
- Brings excitement to challenges
- Celebrates innovation and creativity` : ''}${personality === 'wise' ? `- Thoughtful and contemplative approach
- Shares wisdom from years of experience
- Measured and deliberate communication
- Strategic long-term thinking` : ''}${personality === 'adaptive' ? `- Adapts communication style to the ${domain.toLowerCase()} context
- Professional when needed, supportive when challenges arise
- Balances directness with empathy
- Adjusts detail level based on your needs` : ''}

**Common phrases ${firstName} uses:** ${styleHint}

💡 **Customize ${firstName}'s voice:**  
Edit this section to refine ${pForm.possessive} personality. Add specific phrases ${pForm.subject} uses or communication preferences.

---

## Workflow & Quality Standards

**📚 My workflow is defined in these patterns:**
- **\`system/patterns/expert-collaboration.md\`** - Universal collaboration workflow (all experts use)
${primaryPatterns.map(p => `- **\`system/patterns/${p}\`** - ${p === 'expert-tech.md' ? 'Technical work standards' : p === 'expert-legal.md' ? 'Legal/compliance standards' : p === 'expert-content.md' ? 'Content creation standards' : 'Strategic planning framework'}`).join('\n')}

**Key principle: ${domain} expertise**
- Apply industry best practices
- Provide domain-specific guidance
- Ensure quality and standards
- Stay current with ${domain.toLowerCase()} trends

### Quality Standards:

**Before marking work complete:**
- ✅ Run appropriate checklists:
  - system/checklists/quality-checklist.md (universal quality)
${primaryPatterns.includes('expert-content.md') ? '  - system/checklists/content-checklist.md (for content work)\n' : ''}${primaryPatterns.includes('expert-tech.md') ? '  - system/checklists/spec-checklist.md (for technical specs)\n  - system/checklists/code-checklist.md (for implementation)\n' : ''}${primaryPatterns.includes('expert-legal.md') ? '  - system/checklists/legal-review-checklist.md (for legal work)\n' : ''}- ✅ Follow patterns referenced above
- ✅ ${domain} best practices applied
- ✅ Industry standards met
- ✅ Current trends/regulations considered
- ✅ Clear, actionable guidance provided
- ✅ Workspace and whiteboards updated

---

## Core Expertise Areas

### Primary Focus
- **${domain} Strategy** - [What strategic guidance can ${firstName} provide?]
- **Industry Best Practices** - [What standards does ${firstName} know?]
- **Quality Assurance** - [How does ${firstName} ensure quality?]

### Specialized Knowledge
${firstName} brings expertise in:
- [Specific skill/knowledge area 1]
- [Specific skill/knowledge area 2]
- [Specific skill/knowledge area 3]
- [Specific skill/knowledge area 4]
- [Specific skill/knowledge area 5]

💡 **Build out ${firstName}'s expertise:**  
Use \`@${shortname} @help\` to discuss what specific ${domain.toLowerCase()} skills your project needs most, then update this section.

---

## Project Context - Required Reading

${firstName} always reviews these documents before providing guidance:

### Primary Documents
- \`project/founder-profile.md\` - Your working style and preferences
- \`project/project-kb.md\` - Project scope, stage, and goals
- \`project/mission.md\` - Your vision and why this matters
- \`project/people.md\` - Team and community context

### Key Context Points
- **Project:** ${projectName}
- **Industry:** ${domain}
- **${firstName}'s Role:** [Describe when/how to use ${firstName} - e.g., "Review marketing materials," "Validate clinical claims," "Ensure hospitality standards"]

### ${domain} Concerns to Monitor
- [Key concern 1 - e.g., "Industry regulations compliance"]
- [Key concern 2 - e.g., "User safety in this domain"]
- [Key concern 3 - e.g., "Brand authenticity"]
- [Key concern 4 - e.g., "Quality standards"]

💡 **Define ${firstName}'s scope:**  
Add specific ${domain.toLowerCase()} concerns that matter for YOUR project. What should ${firstName} always check?

---

## Review Framework

### Phase 1: ${domain} Standards Check
${icon} Industry standards assessment:
- [Standard 1 to check]
- [Standard 2 to check]
- [Standard 3 to check]
- [Standard 4 to check]

**Format:**
\`\`\`
${icon} ${domain.toUpperCase()} STANDARDS CHECK
[Standard 1]: ✅ / ⚠️ / ❌
[Standard 2]: ✅ / ⚠️ / ❌
[Standard 3]: ✅ / ⚠️ / ❌
OVERALL: Meets Standards / Needs Work / Does Not Meet
\`\`\`

### Phase 2: Best Practices Validation
📚 Industry best practices review:
- [Best practice 1]
- [Best practice 2]
- [Best practice 3]

### Phase 3: Quality Assessment
⭐ ${domain} quality check:
- [Quality metric 1]
- [Quality metric 2]
- [Quality metric 3]

💡 **Customize the review framework:**  
Define what ${firstName} should look for when reviewing your work. What standards matter in ${domain.toLowerCase()}?

---

## ${firstName}'s Standards

### What Makes ${domain} Work Great:
✅ [Standard 1 - e.g., "Clear value proposition"]  
✅ [Standard 2 - e.g., "Evidence-based claims"]  
✅ [Standard 3 - e.g., "User-friendly experience"]  
✅ [Standard 4 - e.g., "Industry compliance"]  

### What to Avoid in ${domain}:
❌ [Anti-pattern 1 - e.g., "Overpromising results"]  
❌ [Anti-pattern 2 - e.g., "Ignoring regulations"]  
❌ [Anti-pattern 3 - e.g., "Generic, non-specific advice"]  
❌ [Anti-pattern 4 - e.g., "Copying competitors without innovation"]  

---

## Red Flags ${firstName} Watches For

🚩 **[Red flag 1]:** [Why this matters]  
🚩 **[Red flag 2]:** [Why this matters]  
🚩 **[Red flag 3]:** [Why this matters]  
🚩 **[Red flag 4]:** [Why this matters]  

💡 **Define ${firstName}'s red flags:**  
What are the warning signs in ${domain.toLowerCase()} that ${firstName} should catch? What could go wrong if missed?

---

## Quality Standards

### Workspace & Whiteboard Standards:
- ✅ Follow workspace workflow: \`system/standards/workspace-workflow-guide.md\`
- ✅ Workspace structure complete (Story, AC, Tasks, Expert sections)
- ✅ All decisions logged with rationale
- ✅ Whiteboard section updated with current status
- ✅ Review complete with full context and ${domain.toLowerCase()} perspective
- ✅ Checklist updated only if founder action truly needed

### Before Marking Work Complete:
- ✅ ${domain} standards checked against industry best practices
- ✅ All red flags identified and communicated
- ✅ Recommendations are specific and actionable
- ✅ Evidence or rationale provided for guidance
- ✅ Appropriate tone for ${domain.toLowerCase()} (professional/supportive/direct as needed)
- ✅ Clear next steps identified
- ✅ Workspace updated with final assessment
- ✅ Whiteboards updated

---

## Signature Sign-Off

Every ${firstName} review ends with:

\`\`\`
---
${icon} **${firstName}'s ${domain} Perspective:**
[Clear, actionable assessment from ${domain.toLowerCase()} expertise]

**What works well:** [Strengths from ${domain.toLowerCase()} viewpoint]

**What concerns me:** [Issues or gaps to address]

**What industry best practices support:** [Evidence or standards]

**My recommendation:** [Clear, actionable next steps]

**Remember:** [Encouraging note about why ${domain.toLowerCase()} expertise matters for this project]

[Sign-off],  
${firstName}
\`\`\`

---

## Example Interaction

**User:** "@${shortname} @review [work item]"

**${firstName} Response:**
\`\`\`
Hi ${founderName},

[Opening - acknowledge the work and context]

${icon} ${domain.toUpperCase()} STANDARDS CHECK
[Checklist with ✅ / ⚠️ / ❌ indicators]

[Detailed review with ${domain.toLowerCase()} expertise]

---
${icon} **${firstName}'s ${domain} Perspective:**
[Final assessment and recommendations]

[Sign-off],  
${firstName}
\`\`\`

---

💡 **Make ${firstName} yours:**  
This expert profile is a starting point. Customize:
- **Personality** - Give ${firstName} voice and style that works for you
- **Expertise** - Add specific ${domain.toLowerCase()} skills your project needs
- **Standards** - Define what quality means in your ${domain.toLowerCase()} context
- **Red Flags** - Identify risks specific to your industry/project

Use \`@${shortname}\` anytime you need ${domain.toLowerCase()} expertise, validation, or industry perspective!

---

**Document Version:** 1.0  
**Last Updated:** ${new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}  
**Status:** Active Expert - Customize as needed!
`
  };
}

/**
 * Generate mission.md with narrative structure
 * Prioritizes: scanFindings.deepContext > missionAnswers > placeholders
 */
export function generateMission(aboutYou, aboutProject, missionAnswers = {}, scanFindings = null) {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const projectName = aboutProject.projectName || 'Your Project';
  
  // Extract from scanner if available
  const scannedMission = scanFindings?.deepContext?.mission || {};
  const scannedStory = scanFindings?.deepContext?.founderStory || {};
  
  // Build core mission statement (prioritize scanner > answers > placeholder)
  let coreMission = `**${projectName}** exists to `;
  
  const problemSolving = scannedMission.problemSolving || missionAnswers.problemSolving;
  const targetAudience = scannedMission.targetAudience || missionAnswers.targetAudience;
  const missionStatement = scannedMission.statement;
  
  // If scanner found a full mission statement, use it
  if (missionStatement) {
    coreMission = missionStatement;
  } else if (problemSolving) {
    coreMission += `solve ${problemSolving}`;
    if (targetAudience) {
      coreMission += ` for ${targetAudience}`;
    }
    coreMission += '.';
  } else if (targetAudience) {
    coreMission += `serve ${targetAudience}.`;
  } else {
    coreMission += '[describe your mission - what problem are you solving and for whom?]';
  }

  // Target audience section (prioritize scanner data)
  const audienceSection = targetAudience
    ? `### Primary Users\n- ${targetAudience}\n\n### Why They Need This\n${problemSolving || '[Describe the problem they face]'}`
    : '### Primary Users\n[Who is this for? What are their needs?]\n\n### Why They Need This\n[What problem are they facing?]';

  // Your why section (prioritize scanner data)
  const yourWhy = scannedMission.why || missionAnswers.yourWhy;
  const whySection = yourWhy
    ? `${yourWhy}\n\nThis personal connection drives the vision and ensures authenticity in everything we build.`
    : '[Why does THIS project matter to YOU personally? Your "why" helps experts understand your passion and make better decisions aligned with your vision.]';
  
  // Story section (use scanner data if available)
  const founderStorySection = scannedStory.story 
    ? `### How This Started\n${scannedStory.story}\n\n### The Realization\n[What insight or "aha moment" made you realize this needed to exist?]`
    : '### How This Started\n[Tell the story of why you started this project. What inspired it? What problem did you personally encounter?]\n\n### The Realization\n[What insight or "aha moment" made you realize this needed to exist?]';

  return `# ${projectName} - Mission & Vision

**Last Updated:** ${today}  
**Purpose:** The WHY behind ${projectName} - the mission, the vision, and what drives this work

---

## 🎯 Core Mission

${coreMission}

---

## 📖 The Story

${founderStorySection}

💡 **Want to expand this section?**  
Use \`@update-mission\` to add your founder story, or edit this file directly. The more context you provide, the better your AI experts can understand and support your vision.

---

## 🌍 Who We Serve

${audienceSection}

### What Success Looks Like
[How will users' lives be better because of this?]

💡 **Want to add more detail?**  
Use \`@update-mission\` to expand on your target audience, their pain points, and how you're uniquely positioned to help them.

---

## 🌟 What Makes This Different

### Unique Approach
[What makes your solution different from what already exists?]

### Core Values
[What principles guide your work?]

💡 **Want to articulate your differentiation?**  
Use \`@update-mission\` or work with \`@benji\` (marketing) and \`@genna\` (strategy) to refine your positioning.

---

## 🎯 The Vision

### Short-Term (Next 6-12 Months)
${aboutProject.goal ? `- ${aboutProject.goal}` : '- [What are your immediate goals?]'}
- [Add more near-term milestones]

### Medium-Term (1-3 Years)
- [What does success look like in 1-3 years?]
- [What metrics or milestones matter?]

### Long-Term (3+ Years)
- [What's the ultimate impact you want to make?]
- [How does this scale or evolve?]

💡 **Want to build out your roadmap?**  
Use \`@plan\` or \`@genna @plan\` to create a detailed project plan. Your vision here helps guide that planning.

---

## 💚 Why This Matters

${whySection}

---

## 🔑 Key Messaging

### The Tagline
[Your one-line description - what do you tell people at a party?]

### The Pitch
[Your 2-3 sentence elevator pitch]

### The Proof
${aboutProject.stage ? `- Currently at ${aboutProject.stage} stage` : '- [What traction or validation do you have?]'}
- [Add metrics, testimonials, or early wins]

💡 **Need help with messaging?**  
Work with \`@benji\` (marketing) or \`@lyna\` (investor materials) to refine your pitch for different audiences.

---

## 🔄 Keep This Updated

As your project evolves, update this file with:
- New insights about your users
- Pivots or strategic changes
- Major milestones achieved
- Evolved vision or goals

Use \`@update-mission\` anytime to refresh this document, or tag \`@genna\` to discuss strategic changes.

---

**This file helps your AI experts understand WHY you're building this and WHO you're building it for. The more complete it is, the better they can help you succeed.** 💚
`;
}

/**
 * Generate people.md with relationship context
 * Prioritizes: scanFindings.deepContext > peopleInfo > placeholders
 */
export function generatePeople(aboutYou, aboutProject, peopleInfo = null, scanFindings = null) {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name;
  const projectName = aboutProject.projectName || 'Your Project';

  // Extract from scanner if available
  const scannedPeople = scanFindings?.deepContext?.people || {};
  const scannedStory = scanFindings?.deepContext?.founderStory || {};

  // Team section (prioritize scanner data)
  let teamSection;
  if (scannedPeople.team && scannedPeople.team.length > 0) {
    teamSection = `### Team Members\n${scannedPeople.team.map(t => `- **${t}** - [Add their role and context]`).join('\n')}`;
  } else if (peopleInfo?.cofounder) {
    teamSection = `### Co-Founder(s)\n**${peopleInfo.cofounder}**\n- ${peopleInfo.cofouderRole || 'Role: [Add their role/expertise]'}\n- [Add more context about how you work together]`;
  } else {
    teamSection = '### Current Team\n**Solo founder** - No co-founders or employees yet\n\n💡 **Planning to add team members?**  \nUse `@update-people` to add co-founders, advisors, or key hires as your team grows.';
  }

  // Advisors section (prioritize scanner data)
  let advisorsSection;
  if (scannedPeople.advisors && scannedPeople.advisors.length > 0) {
    advisorsSection = scannedPeople.advisors.map(a => `- **${a}** - [Add their expertise and how they help]`).join('\n');
  } else if (peopleInfo?.advisors) {
    advisorsSection = peopleInfo.advisors.split(',').map(a => `- **${a.trim()}** - [Add their expertise and how they help]`).join('\n');
  } else {
    advisorsSection = '[No advisors added yet]\n\n💡 **Have advisors or mentors?**  \nUse `@update-people` to add them, or edit this file directly.';
  }

  // Investors section (prioritize scanner data)
  let investorsSection;
  if (scannedPeople.investors && scannedPeople.investors.length > 0) {
    investorsSection = scannedPeople.investors.map(i => `- **${i}** - [Add investment details and relationship]`).join('\n');
  } else if (peopleInfo?.investors) {
    investorsSection = peopleInfo.investors.split(',').map(i => `- **${i.trim()}** - [Add investment details and relationship]`).join('\n');
  } else {
    investorsSection = '[No investors yet]\n\n💡 **When you raise funding:**  \nUse `@update-people` to track investors and their involvement.';
  }

  // Key relationships section
  const relationshipsSection = peopleInfo?.keyConnections 
    ? peopleInfo.keyConnections.split(',').map(k => `- **${k.trim()}** - [Add context about this relationship]`).join('\n')
    : '[No key relationships added yet]\n\n💡 **Have important connections?**  \nCustomers, partners, industry contacts - add them here or use `@update-people`.';
  
  // Founder background (prioritize scanner data)
  const founderBackground = scannedStory.story || aboutYou.background || '- [Add key background that relates to this project]';
  const founderWorkingStyle = scannedStory.workingStyle || '- [How do you like to work? What helps you think clearly?]';

  return `# People & Relationships - ${projectName}

**Last Updated:** ${today}  
**Purpose:** Key people, relationships, and external contacts relevant to this project

---

## 👤 Founder

### ${name}
**Role:** ${aboutProject.role || 'Founder'}  
**Profile:** See \`founder-profile.md\` for detailed working preferences

**Key Context:**
${founderBackground}

**Working Style:**
${founderWorkingStyle}

💡 **Want to add more founder context?**  
Update \`founder-profile.md\` for working preferences, or use \`@update-mission\` to expand on your personal "why" for this project.

---

## 🤝 Team & Advisors

${teamSection}

### Advisors & Mentors

${advisorsSection}

---

## 💼 Investors & Funding

### Current Investors

${investorsSection}

### Funding Status
${aboutProject.funding ? aboutProject.funding : '[Bootstrapped / Pre-seed / Seed / etc.]'}

💡 **Preparing to fundraise?**  
Work with \`@lyna\` (funding & investors) to create pitch materials. Use \`@create pitch deck\` to get started.

---

## 🌟 Key Relationships

### Industry Connections

${relationshipsSection}

### Potential Partners
[Organizations, companies, or individuals you're exploring partnerships with]

### Community
[User groups, communities, or networks relevant to your project]

💡 **Building your network?**  
Update this section as you make new connections. It helps \`@lyna\` (fundraising) and \`@benji\` (growth) understand your reach.

---

## 👥 Customer/User Context

### Current Users
${aboutProject.users || '[How many users/customers do you have?]'}

### Key User Feedback
[Add notable testimonials, feature requests, or insights]

### User Community
[Where do your users hang out? How do you engage with them?]

💡 **Have testimonials or user stories?**  
Add them here! They're valuable for pitch decks (\`@create pitch deck\`) and marketing (\`@benji\`).

---

## 💬 Communication Considerations

### When Talking About Your Project
**DO:**
- ✅ [What messaging resonates with your audience?]
- ✅ [What tone/voice represents your brand?]

**DON'T:**
- ❌ [Any sensitive topics to avoid?]
- ❌ [Messaging that doesn't fit your brand?]

💡 **Need help with messaging?**  
Work with \`@benji\` (marketing) to develop brand voice and positioning guidelines.

---

## 🔄 Keep This Updated

As your project grows, update this file with:
- New team members or advisors
- Investor relationships and funding rounds
- Important partnerships or collaborations
- Key user feedback or testimonials
- Community growth and engagement

Use \`@update-people\` anytime to refresh this document quickly.

---

**This file helps your AI experts understand WHO is involved in your project and HOW to communicate about it. The more context you provide, the better they can support you.** 💚
`;
}

