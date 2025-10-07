#!/usr/bin/env node

/**
 * FWD PRO Installer
 * 
 * Universal AI expert collaboration system installer
 * Handles onboarding, project setup, and expert configuration
 * 
 * Usage: npx @fwdai/pro install
 */

import chalk from 'chalk';
import boxen from 'boxen';
import { runOnboarding } from './onboarding.js';
import { setupProject } from './setup.js';

async function main() {
  console.clear();
  
  // Welcome message
  console.log(
    boxen(
      chalk.bold.cyan('🚀 Welcome to FWD PRO') + '\n\n' +
      chalk.white('Universal AI Expert Collaboration System\n') +
      chalk.gray('Building your team of AI experts...'),
      {
        padding: 1,
        margin: 1,
        borderStyle: 'round',
        borderColor: 'cyan'
      }
    )
  );

  try {
    // Step 1: Run onboarding
    console.log(chalk.bold('\n📋 Let\'s get to know you and your project...\n'));
    const answers = await runOnboarding();

    // Step 2: Setup project based on answers
    console.log(chalk.bold('\n⚙️  Setting up your project...\n'));
    await setupProject(answers);

    // Success message
    console.log(
      boxen(
        chalk.bold.green('✅ FWD PRO is ready!') + '\n\n' +
        chalk.white('Your expert team is standing by.\n') +
        chalk.gray('Check your project folder for next steps.'),
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'green'
        }
      )
    );

  } catch (error) {
    console.error(
      boxen(
        chalk.bold.red('❌ Installation failed') + '\n\n' +
        chalk.white(error.message),
        {
          padding: 1,
          margin: 1,
          borderStyle: 'round',
          borderColor: 'red'
        }
      )
    );
    process.exit(1);
  }
}

main();

