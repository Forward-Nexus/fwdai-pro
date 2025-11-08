#!/usr/bin/env node

/**
 * Database Backup Utility
 * 
 * Creates database backups (PostgreSQL, MySQL, SQLite, MongoDB)
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import chalk from 'chalk';

function detectDatabaseType() {
  const packageJson = fs.readJsonSync('package.json', { throws: false });
  if (!packageJson) return null;

  const deps = { ...packageJson.dependencies, ...packageJson.devDependencies };

  if (deps.pg || deps['@vercel/postgres']) return 'postgres';
  if (deps.mysql || deps.mysql2) return 'mysql';
  if (deps.sqlite3 || deps['better-sqlite3']) return 'sqlite';
  if (deps.mongodb || deps.mongoose) return 'mongodb';

  return null;
}

function createBackup(dbType) {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const backupDir = 'backups';
  
  fs.ensureDirSync(backupDir);

  const commands = {
    postgres: `pg_dump $DATABASE_URL > ${backupDir}/backup-${timestamp}.sql`,
    mysql: `mysqldump -u root -p $DATABASE_NAME > ${backupDir}/backup-${timestamp}.sql`,
    sqlite: `cp ./database.sqlite ${backupDir}/backup-${timestamp}.sqlite`,
    mongodb: `mongodump --uri="$MONGODB_URI" --out=${backupDir}/backup-${timestamp}`
  };

  const command = commands[dbType];
  if (!command) {
    console.error(chalk.red(`❌ Unknown database type: ${dbType}`));
    process.exit(1);
  }

  console.log(chalk.cyan(`\n💾 Creating ${dbType} backup...\n`));

  try {
    execSync(command, { stdio: 'inherit' });
    console.log(chalk.green(`\n✅ Backup created: ${backupDir}/backup-${timestamp}\n`));
    return true;
  } catch (error) {
    console.error(chalk.red('\n❌ Backup failed\n'));
    console.log(chalk.yellow('Note: Make sure database credentials are set in environment variables\n'));
    return false;
  }
}

async function main() {
  console.log(chalk.cyan.bold('\n💾 Database Backup Utility\n'));

  const dbType = detectDatabaseType();

  if (!dbType) {
    console.log(chalk.yellow('⚠️  No database driver detected'));
    console.log(chalk.white('\nSupported databases:'));
    console.log(chalk.white('  - PostgreSQL (pg)'));
    console.log(chalk.white('  - MySQL (mysql/mysql2)'));
    console.log(chalk.white('  - SQLite (sqlite3/better-sqlite3)'));
    console.log(chalk.white('  - MongoDB (mongodb/mongoose)\n'));
    process.exit(1);
  }

  const success = createBackup(dbType);
  process.exit(success ? 0 : 1);
}

main().catch(console.error);

