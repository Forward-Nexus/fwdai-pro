#!/usr/bin/env node

/**
 * Environment Validator
 * 
 * Validates all required environment variables are set
 */

import fs from 'fs-extra';
import chalk from 'chalk';

async function validateEnvironment() {
  console.log(chalk.cyan.bold('\n✅ Environment Validator\n'));

  // Load required vars from .env.example
  if (!await fs.pathExists('.env.example')) {
    console.log(chalk.yellow('⚠️  No .env.example found'));
    console.log(chalk.white('Create one first:\n'));
    console.log(chalk.white('  node .fwdpro/pro-os/system/tools/env-utils/env-generator.js\n'));
    process.exit(1);
  }

  const exampleContent = await fs.readFile('.env.example', 'utf-8');
  const requiredVars = exampleContent
    .split('\n')
    .filter(line => line.match(/^[A-Z_]+=$/))
    .map(line => line.replace('=', '').trim());

  if (requiredVars.length === 0) {
    console.log(chalk.yellow('⚠️  No required variables found in .env.example\n'));
    process.exit(0);
  }

  console.log(chalk.white(`Checking ${requiredVars.length} required variables...\n`));

  // Check if .env exists
  if (!await fs.pathExists('.env')) {
    console.log(chalk.red('❌ .env file not found!\n'));
    console.log(chalk.white('Copy .env.example to .env and fill in values:\n'));
    console.log(chalk.white('  cp .env.example .env\n'));
    process.exit(1);
  }

  // Load current .env
  const envContent = await fs.readFile('.env', 'utf-8');
  const envVars = {};
  
  envContent.split('\n').forEach(line => {
    const match = line.match(/^([^=]+)=(.*)$/);
    if (match) {
      const [, key, value] = match;
      envVars[key.trim()] = value.trim();
    }
  });

  // Validate each required var
  const missing = [];
  const empty = [];
  const valid = [];

  requiredVars.forEach(varName => {
    if (!(varName in envVars)) {
      missing.push(varName);
    } else if (!envVars[varName]) {
      empty.push(varName);
    } else {
      valid.push(varName);
    }
  });

  // Report results
  if (valid.length > 0) {
    console.log(chalk.green('✅ Valid:'));
    valid.forEach(v => console.log(chalk.green(`   ${v}`)));
    console.log();
  }

  if (empty.length > 0) {
    console.log(chalk.yellow('⚠️  Empty (need values):'));
    empty.forEach(v => console.log(chalk.yellow(`   ${v}`)));
    console.log();
  }

  if (missing.length > 0) {
    console.log(chalk.red('❌ Missing:'));
    missing.forEach(v => console.log(chalk.red(`   ${v}`)));
    console.log();
  }

  if (missing.length > 0 || empty.length > 0) {
    console.log(chalk.red('❌ Environment validation failed\n'));
    process.exit(1);
  }

  console.log(chalk.green.bold('✅ All environment variables valid!\n'));
}

validateEnvironment().catch(console.error);

