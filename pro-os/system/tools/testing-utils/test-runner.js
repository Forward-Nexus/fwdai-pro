#!/usr/bin/env node

/**
 * Universal Test Runner
 * 
 * Runs tests with any framework and generates coverage reports.
 * Auto-detects: Vitest, Jest, Mocha, Ava, Tape
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import chalk from 'chalk';

function detectTestFramework() {
  const packageJson = fs.readJsonSync('package.json', { throws: false });
  if (!packageJson) return null;

  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  if (deps.vitest) return 'vitest';
  if (deps.jest) return 'jest';
  if (deps.mocha) return 'mocha';
  if (deps.ava) return 'ava';
  if (deps.tape) return 'tape';

  return null;
}

function runTests(framework) {
  const commands = {
    vitest: 'vitest run --coverage',
    jest: 'jest --coverage',
    mocha: 'mocha --require @babel/register',
    ava: 'ava',
    tape: 'tape test/**/*.js'
  };

  const command = commands[framework];
  if (!command) {
    console.error(chalk.red(`❌ Unknown test framework: ${framework}`));
    process.exit(1);
  }

  console.log(chalk.cyan(`\n🧪 Running tests with ${chalk.bold(framework)}...\n`));

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(chalk.green('\n✅ All tests passed!\n'));
    return true;
  } catch (error) {
    console.error(chalk.red('\n❌ Tests failed\n'));
    return false;
  }
}

async function main() {
  console.log(chalk.cyan.bold('\n🧪 Universal Test Runner\n'));

  const framework = detectTestFramework();

  if (!framework) {
    console.log(chalk.yellow('⚠️  No test framework detected in package.json'));
    console.log(chalk.white('\nSupported frameworks:'));
    console.log(chalk.white('  - Vitest'));
    console.log(chalk.white('  - Jest'));
    console.log(chalk.white('  - Mocha'));
    console.log(chalk.white('  - Ava'));
    console.log(chalk.white('  - Tape\n'));
    process.exit(1);
  }

  const success = runTests(framework);
  process.exit(success ? 0 : 1);
}

main().catch(console.error);

