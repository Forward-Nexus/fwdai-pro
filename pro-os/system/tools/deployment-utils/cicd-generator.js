#!/usr/bin/env node

/**
 * CI/CD Pipeline Generator
 * 
 * Creates GitHub Actions, GitLab CI, or CircleCI configs
 */

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function generateCICD() {
  console.log(chalk.cyan.bold('\n⚙️  CI/CD Pipeline Generator\n'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'platform',
      message: 'CI/CD Platform:',
      choices: ['GitHub Actions', 'GitLab CI', 'CircleCI']
    },
    {
      type: 'checkbox',
      name: 'jobs',
      message: 'Include jobs:',
      choices: ['Lint', 'Test', 'Build', 'Deploy']
    }
  ]);

  if (answers.platform === 'GitHub Actions') {
    const workflow = `name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
${answers.jobs.includes('Lint') ? `  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm lint

` : ''}${answers.jobs.includes('Test') ? `  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm test

` : ''}${answers.jobs.includes('Build') ? `  build:
    runs-on: ubuntu-latest
    needs: [${answers.jobs.includes('Lint') ? 'lint, ' : ''}${answers.jobs.includes('Test') ? 'test' : ''}]
    steps:
      - uses: actions/checkout@v4
      - uses: pnpm/action-setup@v2
        with:
          version: 8
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'pnpm'
      - run: pnpm install
      - run: pnpm build

` : ''}${answers.jobs.includes('Deploy') ? `  deploy:
    runs-on: ubuntu-latest
    needs: [build]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v4
      - name: Deploy to production
        run: echo "Add your deployment commands here"
        env:
          DEPLOY_TOKEN: \${{ secrets.DEPLOY_TOKEN }}
` : ''}}`;

    await fs.ensureDir('.github/workflows');
    await fs.writeFile('.github/workflows/ci.yml', workflow);

    console.log(chalk.green('\n✅ GitHub Actions workflow created!\n'));
    console.log(chalk.white('File: .github/workflows/ci.yml\n'));
  }

  console.log(chalk.cyan('Next steps:'));
  console.log(chalk.white('1. Commit and push the workflow file'));
  console.log(chalk.white('2. Check Actions tab in GitHub'));
  console.log(chalk.white('3. Add secrets in repository settings\n'));
}

generateCICD().catch(console.error);

