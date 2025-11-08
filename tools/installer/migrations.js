/**
 * Version Migration System
 * 
 * Handles migrations between FWD PRO versions
 */

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';

/**
 * Run migration from old version to new version
 */
export async function runMigrations(projectPath, fromVersion, toVersion) {
  const fwdproDir = path.join(projectPath, '.fwdpro');
  const migrations = [];

  console.log(chalk.cyan(`\n🔄 Migrating from v${fromVersion} to v${toVersion}...\n`));

  // Determine which migrations to run
  if (needsMigration(fromVersion, '1.1.0')) {
    migrations.push(migrate_to_1_1_0);
  }
  
  if (needsMigration(fromVersion, '2.2.1')) {
    migrations.push(migrate_to_2_2_1);
  }

  // Run migrations in order
  for (const migration of migrations) {
    await migration(fwdproDir);
  }

  console.log(chalk.green('\n✓ Migration complete!\n'));
}

/**
 * Check if migration is needed
 */
function needsMigration(fromVersion, targetVersion) {
  const from = parseVersion(fromVersion);
  const target = parseVersion(targetVersion);
  
  // If from version is less than target, migration is needed
  if (from.major < target.major) return true;
  if (from.major === target.major && from.minor < target.minor) return true;
  if (from.major === target.major && from.minor === target.minor && from.patch < target.patch) return true;
  
  return false;
}

/**
 * Parse semantic version
 */
function parseVersion(version) {
  const [major, minor, patch] = version.split('.').map(Number);
  return { major, minor, patch };
}

/**
 * Migration: 1.0.x -> 1.1.0
 * - Remove system/memory/ folder
 * - Rename founder-checklist.md to [name]-checklist.md
 */
async function migrate_to_1_1_0(fwdproDir) {
  console.log(chalk.yellow('  → Applying 1.1.0 migration...'));

  // 1. Remove memory system
  const memoryPath = path.join(fwdproDir, 'pro-os', 'system', 'memory');
  if (await fs.pathExists(memoryPath)) {
    console.log(chalk.gray('    - Removing old memory system...'));
    await fs.remove(memoryPath);
  }

  // 2. Rename founder-checklist.md to personalized name
  const roundtablePath = path.join(fwdproDir, '0-roundtable');
  const oldChecklistPath = path.join(roundtablePath, 'founder-checklist.md');
  
  if (await fs.pathExists(oldChecklistPath)) {
    console.log(chalk.gray('    - Personalizing checklist name...'));
    
    // Read config to get founder name
    const configPath = path.join(fwdproDir, 'pro-os', 'project', 'config.yaml');
    let founderName = 'founder';
    
    try {
      const yaml = await import('js-yaml');
      const config = yaml.default.load(await fs.readFile(configPath, 'utf-8'));
      if (config.founder && config.founder.name) {
        founderName = config.founder.name.toLowerCase().replace(/\s+/g, '-');
      }
    } catch (error) {
      console.log(chalk.yellow('    - Could not read founder name, using "founder"'));
    }
    
    const newChecklistPath = path.join(roundtablePath, `${founderName}-checklist.md`);
    await fs.move(oldChecklistPath, newChecklistPath, { overwrite: true });
  }

  console.log(chalk.green('  ✓ 1.1.0 migration complete'));
}

/**
 * Migration: 2.2.0 -> 2.2.1
 * - Rename 0-roundtable/ -> _roundtable/
 * - Rename 0-your-commands/ -> _your-commands/
 * - Rename 0-your-experts/ -> _your-experts/
 * - Rename roundtable/ -> _roundtable/ (for older installs)
 */
async function migrate_to_2_2_1(fwdproDir) {
  console.log(chalk.yellow('  → Applying 2.2.1 migration (folder renaming)...'));

  const renamePairs = [
    ['0-roundtable', '_roundtable'],
    ['roundtable', '_roundtable'],
    ['0-your-commands', '_your-commands'],
    ['0-your-experts', '_your-experts']
  ];

  for (const [oldName, newName] of renamePairs) {
    const oldPath = path.join(fwdproDir, oldName);
    const newPath = path.join(fwdproDir, newName);

    if (await fs.pathExists(oldPath)) {
      console.log(chalk.gray(`    - Renaming ${oldName}/ → ${newName}/...`));
      
      // If new path already exists, merge contents
      if (await fs.pathExists(newPath)) {
        console.log(chalk.yellow(`    - ${newName}/ already exists, merging contents...`));
        await fs.copy(oldPath, newPath, { overwrite: false });
        await fs.remove(oldPath);
      } else {
        await fs.move(oldPath, newPath);
      }
    }
  }

  console.log(chalk.green('  ✓ 2.2.1 migration complete'));
}

/**
 * Check if .fwdpro installation exists
 */
export async function hasInstallation(projectPath) {
  const fwdproDir = path.join(projectPath, '.fwdpro');
  return await fs.pathExists(fwdproDir);
}

/**
 * Get installed version
 */
export async function getInstalledVersion(projectPath) {
  const versionFile = path.join(projectPath, '.fwdpro', 'pro-os', 'system', '.version');
  
  if (await fs.pathExists(versionFile)) {
    return (await fs.readFile(versionFile, 'utf-8')).trim();
  }
  
  // Check old location (pre-1.1.2) for backwards compatibility
  const oldVersionFile = path.join(projectPath, '.fwdpro', '.version');
  if (await fs.pathExists(oldVersionFile)) {
    return (await fs.readFile(oldVersionFile, 'utf-8')).trim();
  }
  
  // If no version file, assume pre-1.1.0
  return '1.0.0';
}

/**
 * Get current package version
 */
export async function getPackageVersion() {
  const packagePath = path.join(import.meta.dirname || __dirname, '..', '..', 'package.json');
  const packageJson = await fs.readJson(packagePath);
  return packageJson.version;
}

