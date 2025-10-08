/**
 * Welcome Message Generator
 * 
 * Generates personalized welcome message based on onboarding
 */

import chalk from 'chalk';
import boxen from 'boxen';

export function generateWelcomeMessage(aboutYou, aboutProject) {
  const { commStyle } = aboutYou.existingProfile ? { commStyle: 'friendly' } : aboutYou;
  const { projectName, workTypes, goal } = aboutProject;

  // Emoji based on communication style
  const emoji = commStyle === 'casual' ? '🎉' : 
                commStyle === 'supportive' ? '✨' : 
                '';

  let message = '';

  // Header
  message += chalk.bold.cyan(`\n${emoji} FWD PRO is ready for ${projectName}!\n\n`);

  // Configuration summary
  message += chalk.bold('✅ System configured:\n');
  message += chalk.gray(`   - Communication: ${getCommStyleName(commStyle)}\n`);
  message += chalk.gray(`   - Focus: ${formatWorkTypes(workTypes)}\n`);
  message += chalk.gray(`   - Goal: ${goal}\n\n`);

  // Expert team
  message += chalk.bold('👥 Your expert team:\n');
  const experts = getActiveExperts(workTypes, aboutProject.domainExpert);
  experts.forEach(expert => {
    message += chalk.gray(`   - ${expert.name} (${expert.role})\n`);
  });

  // Quick access folders
  message += chalk.bold('\n🔖 Quick access folders:\n');
  message += chalk.gray('   - .fwdpro/0-your-experts/ - Shortcuts to your active experts\n');
  message += chalk.gray('   - .fwdpro/0-your-commands/ - Shortcuts to useful commands\n');
  message += chalk.dim('   (These are symlinks - always up-to-date!)\n');

  // Quick commands
  message += chalk.bold('\n⚡ Quick commands ready:\n');
  if (workTypes.includes('building')) {
    message += chalk.gray('   - @create-spec - Technical specifications\n');
    message += chalk.gray('   - @create-feature - Full spec → implementation\n');
  }
  if (workTypes.includes('investor')) {
    message += chalk.gray('   - @create-pitch-deck - Investor materials\n');
  }
  message += chalk.gray('   - @rt - Roundtable review (all experts)\n');
  message += chalk.gray('   - @update-project - Update project context\n');

  // Learn more
  message += chalk.bold('\n📖 Learn more:\n');
  message += chalk.gray('   - .fwdpro/documents/tech/tech-stack-guide.md - Tech stack help\n');
  message += chalk.gray('   - .fwdpro/0-roundtable/whiteboards.md - Current work dashboard\n');
  message += chalk.gray('   - .fwdpro/0-roundtable/[your-name]-checklist.md - Your action items\n');
  message += chalk.gray('   - .fwdpro/0-your-experts/README.md - Expert team reference\n');

  // Get started
  message += chalk.bold('\n🚀 Get started:\n');
  const firstCommand = getFirstCommand(workTypes);
  message += chalk.cyan(`   Try: ${firstCommand}\n`);

  // Pro tip
  message += chalk.bold('\n💡 Pro tip:\n');
  message += chalk.gray('   Check .fwdpro/0-your-experts/ for quick access to your team!\n');
  message += chalk.gray('   All experts read your profile and adapt to your style.\n');

  return message;
}

function getCommStyleName(style) {
  const names = {
    professional: 'Professional/formal',
    friendly: 'Conversational/friendly',
    casual: 'Casual/enthusiastic',
    direct: 'Direct/no-fluff',
    supportive: 'Supportive/encouraging'
  };
  return names[style] || 'Friendly';
}

function formatWorkTypes(workTypes) {
  const names = {
    building: 'Development',
    investor: 'Investor materials',
    marketing: 'Marketing/content',
    legal: 'Legal/compliance',
    operations: 'Operations/strategy'
  };
  return workTypes.map(wt => names[wt] || wt).join(', ');
}

function getActiveExperts(workTypes, domainExpert) {
  const experts = [
    { name: 'Genna', role: 'Chief Architect', always: true }
  ];

  if (workTypes.includes('building')) {
    experts.push(
      { name: 'Denny', role: 'Systems Architect' },
      { name: 'Ada', role: 'Lead Engineer' }
    );
  }

  if (workTypes.includes('investor')) {
    experts.push({ name: 'Lyna', role: 'External Strategy' });
  }

  if (workTypes.includes('marketing')) {
    experts.push({ name: 'Benji', role: 'Internal Growth' });
  }

  if (workTypes.includes('legal')) {
    experts.push({ name: 'Elle', role: 'Legal Counsel' });
  }

  if (domainExpert) {
    experts.push({ 
      name: domainExpert.expertName, 
      role: domainExpert.domain 
    });
  }

  return experts;
}

function getFirstCommand(workTypes) {
  if (workTypes.includes('building')) {
    return '"@denny let\'s review the current architecture"';
  } else if (workTypes.includes('investor')) {
    return '"@lyna help me with my pitch deck"';
  } else if (workTypes.includes('marketing')) {
    return '"@benji let\'s plan our launch campaign"';
  } else {
    return '"@genna help me create a roadmap"';
  }
}

