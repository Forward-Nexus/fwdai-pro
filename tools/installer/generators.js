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

const TEMPLATES_DIR = path.join(__dirname, '..', '..', 'pro-os', 'project');

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

/**
 * Generate config.yaml
 */
export async function generateConfig(aboutYou, aboutProject) {
  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name;

  // Determine active experts based on work types
  const activeExperts = {
    genna: true, // Always active
    denny: aboutProject.workTypes.includes('building'),
    ada: aboutProject.workTypes.includes('building'),
    lyna: aboutProject.workTypes.includes('investor'),
    benji: aboutProject.workTypes.includes('marketing'),
    elle: aboutProject.workTypes.includes('legal') || 
          Boolean(aboutProject.constraints && aboutProject.constraints.trim() && aboutProject.constraints.toLowerCase().includes('hipaa'))
  };

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
    active_experts: activeExperts,
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

## 📁 Your Project Structure

\`\`\`
.fwdpro/
├── 00-welcome.md              # This file! Your quick-start guide
│
├── 0-roundtable/              # Where experts collaborate
│   ├── whiteboards.md        # Expert status updates
│   ├── founder-checklist.md  # Items for you to review
│   └── workspace/            # Active work-in-progress
│
├── 0-your-experts/            # Quick access to your active experts
│   ├── genna.md              # Chief Architect
│   ├── denny.md              # Systems Architect
│   └── ...                   # Your other experts
│
├── 0-your-commands/           # Quick commands for common tasks
│   ├── create-spec.md        # Create a technical spec
│   ├── create-feature.md     # Build a new feature
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
- **\`.fwdpro/config/founder-profile.md\`** - Your preferences and context
- **\`.fwdpro/config/project-kb.md\`** - Your project knowledge base
- **\`.fwdpro/0-roundtable/whiteboards.md\`** - Expert status board
- **\`.fwdpro/0-roundtable/founder-checklist.md\`** - Items for your review

### Reference When Needed
- **\`.fwdpro/0-your-experts/\`** - Expert bios and capabilities
- **\`.fwdpro/0-your-commands/\`** - Available commands
- **\`.fwdpro/pro-os/documentation/\`** - Full user guides and FAQs

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

3. **Founder Checklist** (\`0-roundtable/founder-checklist.md\`)
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
- **Commands Guide:** \`.fwdpro/pro-os/documentation/user-guide/commands-guide.md\`
- **Expert Guide:** \`.fwdpro/pro-os/documentation/user-guide/working-with-experts.md\`
- **FAQs:** \`.fwdpro/pro-os/documentation/faqs/\`

### Common Questions
- **"How do I update my profile?"** → Use \`@update-founder-profile\` command
- **"How do I see all my projects?"** → Use \`@show-projects\` command
- **"How do roundtables work?"** → See \`.fwdpro/0-your-commands/rt.md\`

---

## 🎉 You're Ready!

Your FWD PRO system is fully configured and ready to go.

**Try this first:**
\`\`\`
@genna Hey! I just got set up. Can you give me a quick orientation 
and help me understand how to best work with the team?
\`\`\`

**Or jump right in:**
${aboutProject.workTypes.includes('building') ? '- \`@denny I need a spec for [feature name]\`\n- \`@ada Can you implement [feature]?\`\n' : ''}${aboutProject.workTypes.includes('investor') ? '- \`@lyna Help me create a pitch deck\`\n' : ''}${aboutProject.workTypes.includes('marketing') ? '- \`@benji I need a marketing strategy\`\n' : ''}
---

**Welcome to your expert team. Let's build something amazing!** 🚀

---

*Last updated: ${new Date().toISOString().split('T')[0]}*
`;
}

/**
 * Generate domain expert from template
 */
export async function generateDomainExpert(domainExpert, projectPath) {
  const templatePath = path.join(projectPath, '.fwdpro', 'pro-os', 'documentation', 'DOMAIN-EXPERT-TEMPLATE.md');
  const template = await fs.readFile(templatePath, 'utf-8');
  
  const expertName = domainExpert.expertName;
  const domain = domainExpert.domain;
  const expertDetails = domainExpert.expertDetails || '';
  
  // Create kebab-case ID from name and domain
  const namePart = expertName.toLowerCase().replace(/\s+/g, '-');
  const domainPart = domain.toLowerCase().replace(/\s+/g, '-');
  const expertId = `${namePart}-${domainPart}`;
  
  // Determine a good emoji based on domain keywords
  const domainLower = domain.toLowerCase();
  let icon = '🎯'; // default
  if (domainLower.includes('health') || domainLower.includes('medical') || domainLower.includes('recovery')) icon = '🏥';
  else if (domainLower.includes('restaurant') || domainLower.includes('food') || domainLower.includes('hospitality')) icon = '🍽️';
  else if (domainLower.includes('finance') || domainLower.includes('banking')) icon = '💰';
  else if (domainLower.includes('education') || domainLower.includes('learning')) icon = '📚';
  else if (domainLower.includes('real estate') || domainLower.includes('property')) icon = '🏘️';
  else if (domainLower.includes('legal') || domainLower.includes('compliance')) icon = '⚖️';
  else if (domainLower.includes('telecom') || domainLower.includes('network')) icon = '📡';
  else if (domainLower.includes('retail') || domainLower.includes('ecommerce')) icon = '🛍️';
  
  // Generate expert file with placeholders filled in
  let expertContent = template
    .replace(/\[EXPERT_NAME\]/g, expertName)
    .replace(/\[expert-id\]/g, expertId)
    .replace(/\[Expert Name\]/g, expertName)
    .replace(/\[EMOJI\]/g, icon)
    .replace(/\[Industry\/Domain\]/g, domain)
    .replace(/\[shortname\]/g, expertName.split(' ')[0].toLowerCase())
    .replace(/\[nickname\]/g, expertName.toLowerCase());
  
  // Add custom details if provided
  if (expertDetails) {
    expertContent = expertContent.replace(
      /\[Additional personality note\]/,
      `Additional context: ${expertDetails}`
    );
  }
  
  return {
    filename: `${expertId}.md`,
    content: expertContent
  };
}

