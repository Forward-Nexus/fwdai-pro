/**
 * FWD PRO Onboarding System
 * 
 * Implements progressive disclosure:
 * - Section 1: About You (8 questions, one-time)
 * - Section 2: About Project (5-11 questions, per-project)
 * 
 * See: /onboarding/ONBOARDING-QUESTIONS.md for question design
 * See: /onboarding/ONBOARDING-FLOW.md for implementation logic
 */

import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import os from 'os';
import { scanExistingProject } from './scanner.js';

const GLOBAL_PROFILE_DIR = path.join(os.homedir(), '.fwdpro-global');

/**
 * Check if user has existing global profile
 */
async function hasGlobalProfile() {
  try {
    const files = await fs.readdir(GLOBAL_PROFILE_DIR);
    const profileFile = files.find(f => f.endsWith('-profile.md'));
    if (profileFile) {
      const profilePath = path.join(GLOBAL_PROFILE_DIR, profileFile);
      const content = await fs.readFile(profilePath, 'utf-8');
      return { exists: true, path: profilePath, content };
    }
  } catch (error) {
    // Directory doesn't exist or other error
  }
  return { exists: false };
}

/**
 * Section 1: About You (Q1-Q8)
 * One-time setup, saved globally
 */
async function askAboutYou() {
  console.log(chalk.bold.cyan('\n📋 Section 1: About You'));
  console.log(chalk.gray('(One-time setup - reusable across all projects)\n'));

  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What should we call you?',
      validate: input => input.trim() ? true : 'Please enter your name'
    },
    {
      type: 'input',
      name: 'location',
      message: 'What city/state are you in?',
      validate: input => input.trim() ? true : 'Please enter your location'
    },
    {
      type: 'checkbox',
      name: 'roles',
      message: 'What best describes your role? (select all that apply)',
      choices: [
        { name: 'Founder/entrepreneur', value: 'founder' },
        { name: 'Business person/operator', value: 'business' },
        { name: 'Creative/designer', value: 'creative' },
        { name: 'Developer/engineer', value: 'developer' },
        { name: 'Technical leader/architect', value: 'technical' },
        { name: 'Other (specify below)', value: 'other' }
      ],
      validate: input => input.length > 0 ? true : 'Please select at least one role'
    },
    {
      type: 'input',
      name: 'rolesOther',
      message: 'Please specify other role(s):',
      when: answers => answers.roles?.includes('other')
    },
    {
      type: 'list',
      name: 'techLevel',
      message: 'How comfortable are you with technical concepts?',
      choices: [
        { name: 'Not technical (I focus on business/creative, no coding)', value: 'non-technical' },
        { name: 'AI-assisted builder (I use AI to code and design systems, but can\'t code myself)', value: 'ai-assisted' },
        { name: 'Semi-technical (I understand concepts, some coding experience)', value: 'semi-technical' },
        { name: 'Technical (I code regularly without AI)', value: 'technical' },
        { name: 'Very technical (I design systems and write complex code)', value: 'very-technical' },
        { name: 'Other (please specify)', value: 'other' }
      ]
    },
    {
      type: 'input',
      name: 'techLevelOther',
      message: 'Please describe your technical level:',
      when: answers => answers.techLevel === 'other'
    },
    {
      type: 'checkbox',
      name: 'commStyle',
      message: 'How do you prefer AI experts to communicate with you? (select all that apply)',
      choices: [
        { name: 'Professional/formal - Respectful business language', value: 'professional' },
        { name: 'Conversational/friendly - Like helpful colleagues', value: 'friendly' },
        { name: 'Casual/enthusiastic - Creative energy with emojis', value: 'casual' },
        { name: 'Direct/no-fluff - Straight to the point, action-focused', value: 'direct' },
        { name: 'Encouraging - Positive reinforcement, celebrates progress', value: 'encouraging' },
        { name: 'Other (specify below)', value: 'other' }
      ],
      validate: input => input.length > 0 ? true : 'Please select at least one communication style'
    },
    {
      type: 'input',
      name: 'commStyleOther',
      message: 'Please describe your preferred communication style:',
      when: answers => answers.commStyle?.includes('other')
    },
    {
      type: 'checkbox',
      name: 'workingStyle',
      message: 'How do you work best? (select all that apply)',
      choices: [
        { name: 'I use voice dictation/voice-to-text', value: 'dictation' },
        { name: 'I prefer visual examples (diagrams, screenshots)', value: 'visual' },
        { name: 'I prefer detailed step-by-step explanations', value: 'detailed' },
        { name: 'I prefer quick summaries with clear action items', value: 'summaries' },
        { name: 'I\'m neurodivergent (ADHD, autism, dyslexia, etc.)', value: 'neurodivergent' },
        { name: 'English is my second language', value: 'esl' },
        { name: 'Other (specify below)', value: 'other' }
      ]
    },
    {
      type: 'input',
      name: 'workingStyleOther',
      message: 'Please describe how you work best:',
      when: answers => answers.workingStyle?.includes('other')
    },
    {
      type: 'checkbox',
      name: 'industries',
      message: 'What industries do you work in? (select all that apply)',
      choices: [
        { name: 'Technology / SaaS', value: 'tech' },
        { name: 'Healthcare / Medical', value: 'healthcare' },
        { name: 'Finance / Fintech', value: 'finance' },
        { name: 'E-commerce / Retail', value: 'retail' },
        { name: 'Education / EdTech', value: 'education' },
        { name: 'Other (please specify)', value: 'other' }
      ]
    },
    {
      type: 'input',
      name: 'industriesOther',
      message: 'Please specify other industries:',
      when: answers => answers.industries?.includes('other')
    },
    {
      type: 'list',
      name: 'teamSize',
      message: 'What\'s your team situation?',
      choices: [
        { name: 'Solo founder (just me)', value: 'solo' },
        { name: 'Small team (2-5 people)', value: 'small' },
        { name: 'Growing team (6-20 people)', value: 'growing' },
        { name: 'Larger organization (20+)', value: 'large' }
      ]
    }
  ]);

  return answers;
}

/**
 * Section 2: About This Project (Q9-16)
 * Per-project setup with progressive disclosure
 */
async function askAboutProject() {
  console.log(chalk.bold.cyan('\n🚀 Section 2: About This Project\n'));

  // Q9: New or existing?
  const { projectType } = await inquirer.prompt([
    {
      type: 'list',
      name: 'projectType',
      message: 'Is this a new project or an existing one?',
      choices: [
        { name: 'Existing project - Analyze my codebase/docs', value: 'existing' },
        { name: 'New project - Starting from scratch', value: 'new' }
      ]
    }
  ]);

  let scanFindings = null;

  // If existing, scan the project
  if (projectType === 'existing') {
    console.log(chalk.gray('\nScanning project...'));
    scanFindings = await scanExistingProject(process.cwd());
    
    if (scanFindings.projectName || scanFindings.description || scanFindings.techStack.length > 0) {
      console.log(chalk.green('\n✓ Found project information:'));
      if (scanFindings.projectName) console.log(chalk.gray(`  - Project: ${scanFindings.projectName}`));
      if (scanFindings.description) console.log(chalk.gray(`  - Description: ${scanFindings.description.substring(0, 60)}...`));
      if (scanFindings.techStack.length > 0) console.log(chalk.gray(`  - Tech stack: ${scanFindings.techStack.join(', ')}`));
      
      const { confirmScan } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'confirmScan',
          message: 'Use this information?',
          default: true
        }
      ]);

      if (!confirmScan) {
        scanFindings = null;
      }
    }
  }

  // Q10: AI tool
  const { aiTool, useCursorOptimizations } = await inquirer.prompt([
    {
      type: 'list',
      name: 'aiTool',
      message: 'Which AI coding tool are you using?',
      choices: [
        { name: 'Cursor', value: 'cursor' },
        { name: 'VS Code (with Copilot/Cline)', value: 'vscode' },
        { name: 'Claude Code', value: 'claude' },
        { name: 'Windsurf', value: 'windsurf' },
        { name: 'Other/Multiple tools', value: 'other' },
        { name: 'Not sure - use generic setup', value: 'generic' }
      ]
    },
    {
      type: 'confirm',
      name: 'useCursorOptimizations',
      message: 'Install Cursor-specific optimizations (.cursor/rules/)?',
      when: answers => answers.aiTool === 'cursor',
      default: true
    }
  ]);

  // Q11: Project name
  const { projectName } = await inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What do you call this project?',
      default: scanFindings?.projectName || '',
      validate: input => input.trim() ? true : 'Please enter a project name'
    }
  ]);

  // Q11a: Funding status (Optional)
  const { fundingStatus, fundingStatusOther } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'fundingStatus',
      message: 'What\'s your funding situation? (select all that apply - optional)',
      choices: [
        { name: 'Bootstrapped / Self-funded (current status)', value: 'bootstrapped' },
        { name: 'Friends & Family funding (received help)', value: 'friends-family' },
        { name: 'Pre-seed/Angel ($100K-$500K raised)', value: 'pre-seed' },
        { name: 'Seed round ($500K-$2M raised)', value: 'seed' },
        { name: 'Series A+ ($2M+ raised)', value: 'series-a-plus' },
        { name: 'Grant funded', value: 'grant' },
        { name: 'Revenue funded (profitable/cash flow positive)', value: 'revenue' },
        { name: 'Other (please specify)', value: 'other' }
      ]
    },
    {
      type: 'input',
      name: 'fundingStatusOther',
      message: 'Please specify other funding details:',
      when: answers => answers.fundingStatus?.includes('other')
    }
  ]);

  // Q11b: Team members (Optional)
  const { teamMembers } = await inquirer.prompt([
    {
      type: 'input',
      name: 'teamMembers',
      message: 'Who else is working on this project? (optional)\n  Examples: "Just me", "Co-founder Sarah (CTO), contractor Mike"\n  > ',
      default: ''
    }
  ]);

  // Q12: Work types (CRITICAL - determines progressive questions)
  const { workTypes } = await inquirer.prompt([
    {
      type: 'checkbox',
      name: 'workTypes',
      message: 'What will you be working on here? (select all that apply)',
      choices: [
        { name: 'Building something (app, website, platform, code)', value: 'building' },
        { name: 'Investor/partnership materials (pitch decks, proposals)', value: 'investor' },
        { name: 'Marketing/growth (customer acquisition, content, campaigns)', value: 'marketing' },
        { name: 'Legal/compliance (contracts, policies, filings)', value: 'legal' },
        { name: 'Operations/strategy (planning, processes, hiring)', value: 'operations' }
      ],
      default: scanFindings?.workTypes || [],
      validate: input => input.length > 0 ? true : 'Please select at least one work type'
    }
  ]);

  // Progressive questions based on work types
  let progressiveAnswers = {};

  // IF "building" selected
  if (workTypes.includes('building')) {
    console.log(chalk.gray('\n→ You selected "Building something", asking follow-up questions...\n'));
    
    const buildingAnswers = await inquirer.prompt([
      {
        type: 'input',
        name: 'description',
        message: 'What exactly are you building?',
        default: scanFindings?.description || '',
        validate: input => input.trim() ? true : 'Please describe what you\'re building'
      },
      {
        type: 'list',
        name: 'knowsTechStack',
        message: 'Do you know what tech stack you need?',
        choices: [
          { name: 'Yes, I know what I\'m using', value: 'yes' },
          { name: 'No, I need help deciding', value: 'no' }
        ],
        default: scanFindings?.techStack && scanFindings.techStack.length > 0 ? 'yes' : 'no'
      },
      {
        type: 'input',
        name: 'techStack',
        message: 'What technologies are you using?',
        when: answers => answers.knowsTechStack === 'yes',
        default: scanFindings?.techStack ? scanFindings.techStack.join(', ') : '',
        transformer: input => chalk.gray('Examples: "React Native, Node.js, PostgreSQL"\n> ') + input
      },
      {
        type: 'list',
        name: 'codeLocation',
        message: 'Do you have a code repository?',
        choices: [
          { name: 'Yes, it\'s here in this project', value: 'here' },
          { name: 'Yes, it\'s elsewhere (provide path)', value: 'elsewhere' },
          { name: 'Not yet, starting fresh', value: 'none' }
        ],
        default: scanFindings?.codeLocation === 'here' ? 'here' : 'none'
      },
      {
        type: 'input',
        name: 'codeLocationPath',
        message: 'Where is your code?',
        when: answers => answers.codeLocation === 'elsewhere'
      }
    ]);

    progressiveAnswers = { ...progressiveAnswers, ...buildingAnswers };
  }

  // IF "investor" selected
  if (workTypes.includes('investor')) {
    console.log(chalk.gray('\n→ You selected "Investor/partnership materials", asking follow-up questions...\n'));
    
    const investorAnswers = await inquirer.prompt([
      {
        type: 'list',
        name: 'fundraisingStage',
        message: 'What\'s your focus?',
        choices: [
          { name: 'Pre-seed fundraising (friends & family, <$100K)', value: 'pre-seed' },
          { name: 'Seed fundraising ($500K - $2M)', value: 'seed' },
          { name: 'Series A+ fundraising ($2M+)', value: 'series-a-plus' },
          { name: 'Strategic partnerships (not fundraising)', value: 'partnerships' },
          { name: 'Not active yet, just prep materials', value: 'prep-only' },
          { name: 'Other (please specify)', value: 'other' }
        ]
      },
      {
        type: 'input',
        name: 'fundraisingStageOther',
        message: 'Please specify:',
        when: answers => answers.fundraisingStage === 'other'
      }
    ]);

    progressiveAnswers = { ...progressiveAnswers, ...investorAnswers };
  }

  // IF "legal" selected
  if (workTypes.includes('legal')) {
    console.log(chalk.gray('\n→ You selected "Legal/compliance", asking follow-up questions...\n'));
    
    const legalAnswers = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'legalNeeds',
        message: 'What legal/compliance work do you need? (select all that apply)',
        choices: [
          { name: 'Website/App basics (Terms, Privacy, Cookie/GDPR)', value: 'web-basics' },
          { name: 'Healthcare compliance (HIPAA, BAA)', value: 'healthcare' },
          { name: 'Business formation (Incorporation, Founder/Operating agreements)', value: 'formation' },
          { name: 'SaaS/Tech compliance (DPA, SLA, SOC 2, CCPA)', value: 'saas-compliance' },
          { name: 'IP protection (Trademarks, Copyrights, Patents)', value: 'ip' },
          { name: 'Other (please specify)', value: 'other' }
        ],
        validate: input => input.length > 0 ? true : 'Please select at least one legal need'
      },
      {
        type: 'input',
        name: 'legalNeedsOther',
        message: 'Please specify other legal needs:',
        when: answers => answers.legalNeeds?.includes('other')
      }
    ]);

    progressiveAnswers = { ...progressiveAnswers, ...legalAnswers };
  }

  // IF "marketing" selected
  if (workTypes.includes('marketing')) {
    console.log(chalk.gray('\n→ You selected "Marketing/growth", asking follow-up questions...\n'));
    
    const marketingAnswers = await inquirer.prompt([
      {
        type: 'list',
        name: 'targetAudience',
        message: 'Who are you trying to reach/acquire?',
        choices: [
          { name: 'Consumers (B2C)', value: 'b2c' },
          { name: 'Businesses (B2B)', value: 'b2b' },
          { name: 'Both consumers and businesses', value: 'b2b2c' },
          { name: 'Mixed / Multiple customer types', value: 'mixed' },
          { name: 'Not sure yet / Need help defining', value: 'unsure' },
          { name: 'Other (please specify)', value: 'other' }
        ]
      },
      {
        type: 'input',
        name: 'targetAudienceOther',
        message: 'Please specify your target customers:',
        when: answers => answers.targetAudience === 'other'
      }
    ]);

    progressiveAnswers = { ...progressiveAnswers, ...marketingAnswers };
  }

  // Q14: Goal
  const { goal } = await inquirer.prompt([
    {
      type: 'input',
      name: 'goal',
      message: 'What\'s your main goal for THIS project?',
      transformer: input => chalk.gray('Examples: Launch MVP by Q4, Raise seed round by Q2, Get to 1,000 users, Build and ship it\n> ') + input,
      validate: input => input.trim() ? true : 'Please enter your project goal'
    }
  ]);

  // Q15: Constraints (optional)
  const { constraints } = await inquirer.prompt([
    {
      type: 'input',
      name: 'constraints',
      message: 'Any constraints or requirements? (optional)',
      default: '',
      transformer: input => chalk.gray('Examples: Need HIPAA compliance, Budget is tight, Deadline: Dec 31st\n> ') + input
    }
  ]);

  // Q16: Project expert (optional)
  const { wantsDomainExpert } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'wantsDomainExpert',
      message: '🎯 Want to create a specialized expert for your project?',
      default: false
    }
  ]);

  let domainExpert = null;
  if (wantsDomainExpert) {
    domainExpert = await inquirer.prompt([
      {
        type: 'input',
        name: 'domain',
        message: 'What should this expert specialize in?',
        transformer: input => chalk.gray('Examples: Addiction recovery, Restaurant operations, Federal compliance\n> ') + input,
        validate: input => input.trim() ? true : 'Please describe the specialization'
      },
      {
        type: 'list',
        name: 'expertNameChoice',
        message: 'What should we call this expert?',
        choices: [
          { name: 'BJ (default)', value: 'default' },
          { name: 'Custom name (I\'ll choose)', value: 'custom' }
        ]
      },
      {
        type: 'input',
        name: 'expertName',
        message: 'Enter expert name:',
        when: answers => answers.expertNameChoice === 'custom',
        validate: input => input.trim() ? true : 'Please enter a name'
      },
      {
        type: 'input',
        name: 'expertDetails',
        message: 'Any other details about what they should know or focus on? (optional)',
        default: ''
      }
    ]);
    
    // Set default name if user chose default
    if (domainExpert.expertNameChoice === 'default') {
      domainExpert.expertName = 'BJ';
    }
  }

  // Q17: Mission questions (opt-in)
  const { wantsMissionInfo } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'wantsMissionInfo',
      message: '📝 Want to add mission details now? (you can use @update-mission later)',
      default: false
    }
  ]);

  let missionAnswers = {};
  if (wantsMissionInfo) {
    console.log(chalk.gray('\n→ Great! Let\'s build your mission document...\n'));
    
    missionAnswers = await inquirer.prompt([
      {
        type: 'input',
        name: 'targetAudience',
        message: 'Who is this for? (target audience/customer)',
        default: '',
        transformer: input => chalk.gray('Examples: "Small businesses", "People in recovery", "Restaurant owners"\n> ') + input
      },
      {
        type: 'input',
        name: 'problemSolving',
        message: 'What problem are you solving?',
        default: '',
        transformer: input => chalk.gray('Example: "They can\'t track their goals effectively"\n> ') + input
      },
      {
        type: 'input',
        name: 'yourWhy',
        message: 'Why does THIS project matter to YOU personally? (your "why")',
        default: '',
        transformer: input => chalk.gray('This helps experts understand your passion and motivation\n> ') + input
      }
    ]);
  }

  // Q18: People/Team questions (opt-in)
  const { wantsTeamInfo } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'wantsTeamInfo',
      message: '👥 Want to add team/advisors now? (you can use @update-people later)',
      default: false
    }
  ]);

  let peopleInfo = null;
  if (wantsTeamInfo) {
    peopleInfo = await inquirer.prompt([
      {
        type: 'input',
        name: 'advisors',
        message: 'Any advisors or mentors helping you? (optional)',
        default: '',
        transformer: input => chalk.gray('Example: "Sarah (marketing mentor), John (technical advisor)"\n> ') + input
      },
      {
        type: 'input',
        name: 'investors',
        message: 'Any investors or financial supporters? (optional)',
        default: '',
        transformer: input => chalk.gray('Example: "Angel investor Mike, Friends & family"\n> ') + input
      },
      {
        type: 'input',
        name: 'keyConnections',
        message: 'Any other key people to mention? (optional)',
        default: '',
        transformer: input => chalk.gray('Example: "Early customer Lisa, Industry contact Tom"\n> ') + input
      }
    ]);
  }

  return {
    projectType,
    aiTool,
    useCursorOptimizations,
    projectName,
    fundingStatus,
    fundingStatusOther,
    teamMembers,
    workTypes,
    goal,
    constraints,
    domainExpert,
    scanFindings,
    ...progressiveAnswers,
    ...missionAnswers,
    peopleInfo
  };
}

/**
 * Main onboarding flow
 */
export async function runOnboarding() {
  // Check for existing global profile
  const profile = await hasGlobalProfile();

  let aboutYou;
  if (profile.exists) {
    console.log(chalk.green(`\n✓ Found your profile: ${path.basename(profile.path)}\n`));
    const { useExisting } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'useExisting',
        message: 'Use your existing profile?',
        default: true
      }
    ]);

    if (!useExisting) {
      aboutYou = await askAboutYou();
    } else {
      // Parse existing profile (we'll implement this)
      aboutYou = { existingProfile: profile.path };
    }
  } else {
    aboutYou = await askAboutYou();
  }

  // Always ask about current project
  const aboutProject = await askAboutProject();

  return {
    aboutYou,
    aboutProject
  };
}

