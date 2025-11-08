#!/usr/bin/env node

/**
 * Database Seeder
 * 
 * Populates database with test/demo data
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

async function findSeedFile() {
  const locations = [
    'prisma/seed.ts',
    'prisma/seed.js',
    'src/db/seed.ts',
    'src/db/seed.js',
    'database/seeds/seed.ts',
    'database/seeds/seed.js',
    'seeds/index.ts',
    'seeds/index.js'
  ];

  for (const loc of locations) {
    if (await fs.pathExists(loc)) {
      return loc;
    }
  }

  return null;
}

async function runSeed(seedFile) {
  console.log(chalk.cyan(`\n🌱 Running seed file: ${seedFile}\n`));

  const ext = path.extname(seedFile);
  const command = ext === '.ts' ? `npx tsx ${seedFile}` : `node ${seedFile}`;

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(chalk.green('\n✅ Database seeded successfully!\n'));
    return true;
  } catch (error) {
    console.error(chalk.red('\n❌ Seeding failed\n'));
    return false;
  }
}

async function main() {
  console.log(chalk.cyan.bold('\n🌱 Database Seeder\n'));

  const seedFile = await findSeedFile();

  if (!seedFile) {
    console.log(chalk.yellow('⚠️  No seed file found'));
    console.log(chalk.white('\nLooked in:'));
    console.log(chalk.white('  - prisma/seed.(ts|js)'));
    console.log(chalk.white('  - src/db/seed.(ts|js)'));
    console.log(chalk.white('  - database/seeds/seed.(ts|js)'));
    console.log(chalk.white('  - seeds/index.(ts|js)\n'));
    process.exit(1);
  }

  const success = await runSeed(seedFile);
  process.exit(success ? 0 : 1);
}

main().catch(console.error);

