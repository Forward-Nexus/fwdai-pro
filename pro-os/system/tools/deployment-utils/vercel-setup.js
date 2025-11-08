#!/usr/bin/env node

/**
 * Vercel Configuration Generator
 * 
 * Creates optimized vercel.json with build settings
 */

import fs from 'fs-extra';
import chalk from 'chalk';
import inquirer from 'inquirer';

async function generateVercelConfig() {
  console.log(chalk.cyan.bold('\n▲ Vercel Configuration Generator\n'));

  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'framework',
      message: 'Framework:',
      choices: ['Next.js', 'Vite', 'Create React App', 'SvelteKit', 'Astro', 'Other']
    },
    {
      type: 'input',
      name: 'buildCommand',
      message: 'Build command:',
      default: (answers) => {
        const defaults = {
          'Next.js': 'next build',
          'Vite': 'vite build',
          'Create React App': 'react-scripts build',
          'SvelteKit': 'svelte-kit build',
          'Astro': 'astro build'
        };
        return defaults[answers.framework] || 'npm run build';
      }
    },
    {
      type: 'input',
      name: 'outputDirectory',
      message: 'Output directory:',
      default: (answers) => {
        const defaults = {
          'Next.js': '.next',
          'Vite': 'dist',
          'Create React App': 'build',
          'SvelteKit': '.svelte-kit',
          'Astro': 'dist'
        };
        return defaults[answers.framework] || 'dist';
      }
    }
  ]);

  const config = {
    buildCommand: answers.buildCommand,
    outputDirectory: answers.outputDirectory,
    framework: answers.framework.toLowerCase().replace(/\s+/g, '-'),
    installCommand: 'pnpm install',
    devCommand: 'pnpm dev'
  };

  if (answers.framework === 'Next.js') {
    config.headers = [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ]
      }
    ];
  }

  await fs.writeJson('vercel.json', config, { spaces: 2 });

  console.log(chalk.green('\n✅ vercel.json created!\n'));
  console.log(chalk.white('Configuration:'));
  console.log(chalk.gray(JSON.stringify(config, null, 2)));
  console.log();
  console.log(chalk.cyan('Next steps:'));
  console.log(chalk.white('1. Install Vercel CLI: npm i -g vercel'));
  console.log(chalk.white('2. Deploy: vercel'));
  console.log();
}

generateVercelConfig().catch(console.error);

