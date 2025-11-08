/**
 * Welcome Message Generator
 * 
 * Generates personalized welcome message based on onboarding
 */

import chalk from 'chalk';
import boxen from 'boxen';

export function generateWelcomeMessage(aboutYou, aboutProject) {
  const { commStyle } = aboutYou.existingProfile ? { commStyle: ['friendly'] } : aboutYou;
  const { projectName, workTypes, goal } = aboutProject;

  // Emoji based on communication style (check if array includes casual or encouraging)
  const styles = Array.isArray(commStyle) ? commStyle : [commStyle];
  const emoji = styles.includes('casual') ? '🎉' : 
                styles.includes('encouraging') ? '✨' : 
                '';

  let message = '';

  // Header
  message += chalk.bold.cyan(`\n${emoji} FWD PRO is ready for ${projectName}!\n\n`);

  // Configuration summary
  message += chalk.bold('✅ System configured:\n');
  message += chalk.gray(`   - Communication: ${formatCommStyles(commStyle)}\n`);
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
  message += chalk.gray('   - .fwdpro/_your-experts/ - Shortcuts to your active experts\n');
  message += chalk.gray('   - .fwdpro/_your-commands/ - Shortcuts to useful commands\n');
  message += chalk.dim('   (These are symlinks - always up-to-date!)\n');

  // Flow commands
  message += chalk.bold('\n⚡ Flow commands ready:\n');
  if (workTypes.includes('building')) {
    message += chalk.gray('   - @create-specflow - Create technical spec (TDD structure)\n');
    message += chalk.gray('   - @execute-specflow - Implement spec (TDD + QA enforced)\n');
  }
  message += chalk.gray('   - @rt - Roundtable review (multi-expert)\n');
  message += chalk.gray('   - @update-project - Update project context\n');
  message += chalk.gray('   - @create-expert - Create new domain expert\n');

  // Learn more
  message += chalk.bold('\n📖 Learn more:\n');
  message += chalk.gray('   - .fwdpro/documents/tech/tech-stack-guide.md - Tech stack help\n');
  message += chalk.gray('   - .fwdpro/_roundtable/whiteboards.md - Current work dashboard\n');
  message += chalk.gray('   - .fwdpro/_roundtable/[your-name]-checklist.md - Your action items\n');
  message += chalk.gray('   - .fwdpro/_your-experts/README.md - Expert team reference\n');

  // Get started
  message += chalk.bold('\n🚀 Get started:\n');
  const firstCommand = getFirstCommand(workTypes);
  message += chalk.cyan(`   Try: ${firstCommand}\n`);

  // Pro tip
  message += chalk.bold('\n💡 Pro tip:\n');
  message += chalk.gray('   Check .fwdpro/_your-experts/ for quick access to your team!\n');
  message += chalk.gray('   All experts read your profile and adapt to your style.\n');

  return message;
}

function formatCommStyles(styles) {
  const names = {
    professional: 'Professional/formal',
    friendly: 'Conversational/friendly',
    casual: 'Casual/enthusiastic',
    direct: 'Direct/no-fluff',
    encouraging: 'Encouraging'
  };
  
  // Handle both single value (legacy) and array (current)
  const styleArray = Array.isArray(styles) ? styles : [styles];
  const formatted = styleArray.map(s => names[s] || s).join(', ');
  return formatted || 'Friendly';
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

