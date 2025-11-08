#!/usr/bin/env node

/**
 * Commit Helper - Conventional Commits Generator
 * 
 * Interactive tool for creating standardized git commits
 * following the Conventional Commits specification.
 */

import inquirer from 'inquirer';
import { execSync } from 'child_process';
import chalk from 'chalk';

const COMMIT_TYPES = [
  { name: 'feat: ✨ New feature', value: 'feat' },
  { name: 'fix: 🐛 Bug fix', value: 'fix' },
  { name: 'docs: 📚 Documentation', value: 'docs' },
  { name: 'style: 💅 Code style/formatting', value: 'style' },
  { name: 'refactor: ♻️ Code refactoring', value: 'refactor' },
  { name: 'perf: ⚡ Performance improvement', value: 'perf' },
  { name: 'test: 🧪 Adding/updating tests', value: 'test' },
  { name: 'build: 📦 Build system changes', value: 'build' },
  { name: 'ci: 🔧 CI/CD changes', value: 'ci' },
  { name: 'chore: 🔨 Other changes', value: 'chore' }
];

async function generateCommit() {
  console.log(chalk.cyan.bold('\n🎯 Conventional Commit Generator\n'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'type',
      message: 'Select commit type:',
      choices: COMMIT_TYPES
    },
    {
      type: 'input',
      name: 'scope',
      message: 'Scope (optional, e.g., auth, api, ui):',
      default: ''
    },
    {
      type: 'input',
      name: 'subject',
      message: 'Short description:',
      validate: (input) => input.length > 0 || 'Description is required'
    },
    {
      type: 'input',
      name: 'body',
      message: 'Longer description (optional):',
      default: ''
    },
    {
      type: 'confirm',
      name: 'breaking',
      message: 'Is this a breaking change?',
      default: false
    },
    {
      type: 'input',
      name: 'issues',
      message: 'Issue references (e.g., #123, #456):',
      default: ''
    }
  ]);

  // Build commit message
  const scope = answers.scope ? `(${answers.scope})` : '';
  const breaking = answers.breaking ? '!' : '';
  const subject = answers.subject;
  
  let message = `${answers.type}${scope}${breaking}: ${subject}`;
  
  if (answers.body) {
    message += `\n\n${answers.body}`;
  }
  
  if (answers.breaking) {
    message += `\n\nBREAKING CHANGE: ${answers.body || subject}`;
  }
  
  if (answers.issues) {
    message += `\n\nRefs: ${answers.issues}`;
  }

  console.log(chalk.green('\n📝 Generated commit message:\n'));
  console.log(chalk.white(message));
  console.log();

  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: 'Create this commit?',
      default: true
    }
  ]);

  if (confirm) {
    try {
      execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`, { stdio: 'inherit' });
      console.log(chalk.green('\n✅ Commit created successfully!\n'));
    } catch (error) {
      console.error(chalk.red('\n❌ Failed to create commit\n'));
      process.exit(1);
    }
  } else {
    console.log(chalk.yellow('\n⚠️  Commit cancelled\n'));
  }
}

generateCommit().catch(console.error);

