#!/usr/bin/env node

/**
 * Database Migration Runner
 * 
 * Auto-detects and runs migrations for: Prisma, Drizzle, Knex, TypeORM
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import chalk from 'chalk';

function detectMigrationTool() {
  const packageJson = fs.readJsonSync('package.json', { throws: false });
  if (!packageJson) return null;

  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  if (deps.prisma || deps['@prisma/client']) return 'prisma';
  if (deps['drizzle-orm']) return 'drizzle';
  if (deps.knex) return 'knex';
  if (deps.typeorm) return 'typeorm';

  return null;
}

function runMigrations(tool) {
  const commands = {
    prisma: 'npx prisma migrate deploy',
    drizzle: 'npx drizzle-kit push',
    knex: 'npx knex migrate:latest',
    typeorm: 'npx typeorm migration:run'
  };

  const command = commands[tool];
  if (!command) {
    console.error(chalk.red(`❌ Unknown migration tool: ${tool}`));
    process.exit(1);
  }

  console.log(chalk.cyan(`\n📊 Running migrations with ${chalk.bold(tool)}...\n`));

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(chalk.green('\n✅ Migrations completed successfully!\n'));
    return true;
  } catch (error) {
    console.error(chalk.red('\n❌ Migration failed\n'));
    return false;
  }
}

async function main() {
  console.log(chalk.cyan.bold('\n📊 Database Migration Runner\n'));

  const tool = detectMigrationTool();

  if (!tool) {
    console.log(chalk.yellow('⚠️  No migration tool detected'));
    console.log(chalk.white('\nSupported tools:'));
    console.log(chalk.white('  - Prisma'));
    console.log(chalk.white('  - Drizzle ORM'));
    console.log(chalk.white('  - Knex.js'));
    console.log(chalk.white('  - TypeORM\n'));
    process.exit(1);
  }

  const success = runMigrations(tool);
  process.exit(success ? 0 : 1);
}

main().catch(console.error);

