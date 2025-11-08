#!/usr/bin/env node

/**
 * Environment File Generator
 * 
 * Creates .env.example from .env file (without sensitive values)
 */

import fs from 'fs-extra';
import chalk from 'chalk';

async function generateEnvExample() {
  console.log(chalk.cyan.bold('\n🔧 Environment Example Generator\n'));

  if (!await fs.pathExists('.env')) {
    console.log(chalk.yellow('⚠️  No .env file found\n'));
    process.exit(1);
  }

  const envContent = await fs.readFile('.env', 'utf-8');
  const lines = envContent.split('\n');

  let exampleContent = '# Environment Variables\n';
  exampleContent += '# Copy this file to .env and fill in your values\n\n';

  lines.forEach(line => {
    const trimmed = line.trim();

    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) {
      exampleContent += line + '\n';
      return;
    }

    // Parse key=value
    const match = trimmed.match(/^([^=]+)=(.*)$/);
    if (match) {
      const [, key] = match;
      exampleContent += `${key}=\n`;
    }
  });

  await fs.writeFile('.env.example', exampleContent);

  console.log(chalk.green('✅ .env.example created!\n'));
  console.log(chalk.white('Generated template with placeholders for:'));
  
  const keys = exampleContent.match(/^[A-Z_]+=$/gm) || [];
  keys.forEach(key => {
    console.log(chalk.white(`  - ${key.replace('=', '')}`));
  });
  
  console.log();
}

generateEnvExample().catch(console.error);

