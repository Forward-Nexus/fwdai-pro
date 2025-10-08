/**
 * FWD PRO Update System
 * 
 * Handles updating existing FWD PRO installations
 */

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { 
  hasInstallation, 
  getInstalledVersion, 
  getPackageVersion,
  runMigrations 
} from './migrations.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FWD_PRO_SOURCE = path.join(__dirname, '..', '..', 'pro-os');

/**
 * Main update function
 */
export async function updateInstallation() {
  const projectPath = process.cwd();

  console.clear();
  console.log(
    chalk.bold.cyan('\n🔄 FWD PRO Update System\n')
  );

  // Check if installation exists
  if (!await hasInstallation(projectPath)) {
    console.log(chalk.red('❌ No FWD PRO installation found in this directory.'));
    console.log(chalk.gray('\nRun: npx @fwd-ai/pro install\n'));
    process.exit(1);
  }

  try {
    const installedVersion = await getInstalledVersion(projectPath);
    const packageVersion = await getPackageVersion();

    console.log(chalk.gray(`Currently installed: v${installedVersion}`));
    console.log(chalk.gray(`Package version: v${packageVersion}\n`));

    // Check if update is needed
    if (installedVersion === packageVersion) {
      console.log(chalk.green('✓ Already up to date!\n'));
      return;
    }

    console.log(chalk.yellow(`⚠️  Update available: v${installedVersion} → v${packageVersion}\n`));

    // Step 1: Backup user data
    let spinner = ora('Backing up your data...').start();
    
    const fwdproDir = path.join(projectPath, '.fwdpro');
    const backupDir = path.join(projectPath, '.fwdpro-backup');
    
    await fs.ensureDir(backupDir);
    
    // Backup critical user data
    const backupPaths = [
      'documents',
      '0-roundtable/workspace',
      'pro-os/project/config.yaml',
      'pro-os/project/project-kb.md',
      'pro-os/project/mission.md',
      'pro-os/project/people.md',
      'pro-os/project/founder-profile.md'
    ];

    for (const backupPath of backupPaths) {
      const sourcePath = path.join(fwdproDir, backupPath);
      if (await fs.pathExists(sourcePath)) {
        const targetPath = path.join(backupDir, backupPath);
        await fs.copy(sourcePath, targetPath);
      }
    }

    spinner.succeed(chalk.green('✓ Data backed up'));

    // Step 2: Update system files
    spinner = ora('Updating system files...').start();

    const updatePaths = [
      'pro-os/commands',
      'pro-os/experts',
      'pro-os/system',
      'pro-os/templates',
      'pro-os/documentation'
    ];

    for (const updatePath of updatePaths) {
      const sourcePath = path.join(FWD_PRO_SOURCE, updatePath.replace('pro-os/', ''));
      const targetPath = path.join(fwdproDir, updatePath);
      
      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, targetPath, { overwrite: true });
      }
    }

    spinner.succeed(chalk.green('✓ System files updated'));

    // Step 3: Run version-specific migrations
    await runMigrations(projectPath, installedVersion, packageVersion);

    // Step 4: Restore user data
    spinner = ora('Restoring your data...').start();

    for (const backupPath of backupPaths) {
      const sourcePath = path.join(backupDir, backupPath);
      if (await fs.pathExists(sourcePath)) {
        const targetPath = path.join(fwdproDir, backupPath);
        await fs.copy(sourcePath, targetPath, { overwrite: true });
      }
    }

    spinner.succeed(chalk.green('✓ Data restored'));

    // Step 5: Update version file
    spinner = ora('Updating version...').start();
    
    await fs.writeFile(
      path.join(fwdproDir, '.version'),
      packageVersion
    );

    spinner.succeed(chalk.green('✓ Version updated'));

    // Step 6: Clean up backup
    spinner = ora('Cleaning up...').start();
    await fs.remove(backupDir);
    spinner.succeed(chalk.green('✓ Cleanup complete'));

    // Success message
    console.log(
      chalk.bold.green(`\n✅ Successfully updated to v${packageVersion}!\n`)
    );

    console.log(chalk.gray('Your documents, workspace, and configuration have been preserved.'));
    console.log(chalk.gray('System files (commands, experts, standards) have been updated.\n'));

  } catch (error) {
    console.error(
      chalk.bold.red('\n❌ Update failed\n')
    );
    console.error(chalk.red(error.message));
    console.error(chalk.yellow('\nYour data is safe in .fwdpro-backup/'));
    console.error(chalk.gray('Please report this issue: https://github.com/Forward-Nexus/fwdai-pro/issues\n'));
    process.exit(1);
  }
}

