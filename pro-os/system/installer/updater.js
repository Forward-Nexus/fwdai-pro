/**
 * FWD PRO Update System
 *
 * NUCLEAR APPROACH: Replace everything except user data
 * Preserves: project/, documents/, roundtable/
 * Replaces: Everything else (pro-os/, IDE configs)
 */

import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import ora from 'ora';
import inquirer from 'inquirer';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { setupIDE } from './ide-setup.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Check if FWD PRO is installed
 */
async function hasInstallation(projectPath) {
  const fwdproDir = path.join(projectPath, '.fwdpro');
  return await fs.pathExists(fwdproDir);
}

/**
 * Get installed version
 */
async function getInstalledVersion(projectPath) {
  try {
    const versionFile = path.join(projectPath, '.fwdpro', 'pro-os', 'system', '.version');
    if (await fs.pathExists(versionFile)) {
      return await fs.readFile(versionFile, 'utf-8').then(v => v.trim());
    }
    return 'unknown';
  } catch (error) {
    return 'unknown';
  }
}

/**
 * Get package version
 */
async function getPackageVersion() {
  const packageJson = await fs.readJson(path.join(__dirname, '..', '..', '..', 'package.json'));
  return packageJson.version;
}

/**
 * Detect installed IDE configs
 */
async function detectInstalledIDEs(projectPath) {
  const ides = [];

  if (await fs.pathExists(path.join(projectPath, '.cursor', 'rules'))) {
    ides.push('cursor');
  }
  if (await fs.pathExists(path.join(projectPath, '.github', 'copilot-instructions.md'))) {
    ides.push('vscode');
  }
  if (await fs.pathExists(path.join(projectPath, '.claude', 'rules'))) {
    ides.push('claude-code');
  }

  return ides;
}

/**
 * Main update function
 */
export async function updateInstallation() {
  const projectPath = process.cwd();

  console.clear();
  console.log(chalk.bold.cyan('\n🔄 FWD PRO Update System\n'));

  // Check if installation exists
  if (!(await hasInstallation(projectPath))) {
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

    // Explain update strategy
    console.log(chalk.bold.cyan('📋 Update Strategy:\n'));
    console.log(chalk.green('  ✅ PRESERVED (Your Work):'));
    console.log(
      chalk.gray('     • .fwdpro/pro-os/project/ (founder profile, project KB, mission, people)')
    );
    console.log(chalk.gray('     • .fwdpro/documents/ (all your deliverables)'));
    console.log(chalk.gray('     • .fwdpro/_roundtable/ (whiteboards, workspaces, checklists)'));
    console.log(chalk.gray('     • .fwdpro/_your-experts/ (custom domain experts)'));
    console.log(chalk.gray('     • .fwdpro/_your-commands/ (custom commands)\n'));

    console.log(chalk.yellow('  🔄 REPLACED (Fresh Install):'));
    console.log(chalk.gray('     • .fwdpro/pro-os/experts/ (core experts)'));
    console.log(chalk.gray('     • .fwdpro/pro-os/commands/ (command workflows)'));
    console.log(
      chalk.gray('     • .fwdpro/pro-os/system/ (patterns, standards, checklists, tools)')
    );
    console.log(chalk.gray('     • .fwdpro/pro-os/user-docs/ (documentation)'));
    console.log(chalk.gray('     • .cursor/rules/ (Cursor IDE config)'));
    console.log(chalk.gray('     • .github/copilot-instructions.md (VS Code config)'));
    console.log(chalk.gray('     • .claude/rules/ (Claude Code config)\n'));

    console.log(chalk.bold('  This is a CLEAN INSTALL - no merge conflicts!\n'));

    // Confirm update
    const { confirmUpdate } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'confirmUpdate',
        message: 'Proceed with update?',
        default: true,
      },
    ]);

    if (!confirmUpdate) {
      console.log(chalk.gray('\nUpdate cancelled.\n'));
      return;
    }

    const fwdproDir = path.join(projectPath, '.fwdpro');

    // Step 1: No backup needed - we'll preserve in place
    const spinner = ora('Preparing update...').start();

    // User directories that will NOT be touched:
    // - .fwdpro/pro-os/project/
    // - .fwdpro/documents/
    // - .fwdpro/_roundtable/
    // - .fwdpro/_your-experts/
    // - .fwdpro/_your-commands/

    spinner.succeed(chalk.green('✓ Ready to update'));

    // Step 2: Detect installed IDEs (before we delete them)
    spinner.start('Detecting installed IDEs...');
    const installedIDEs = await detectInstalledIDEs(projectPath);
    spinner.succeed(chalk.green(`✓ Found: ${installedIDEs.join(', ') || 'none'}`));

    // Step 3: Remove only what we're replacing (NOT IDE configs - we'll overwrite those)
    spinner.start('Removing old system files...');

    // Remove pro-os subdirectories (but NOT project/)
    const proOsPath = path.join(fwdproDir, 'pro-os');
    const dirsToRemove = ['experts', 'commands', 'system', 'user-docs'];

    for (const dir of dirsToRemove) {
      const dirPath = path.join(proOsPath, dir);
      if (await fs.pathExists(dirPath)) {
        await fs.remove(dirPath);
      }
    }

    spinner.succeed(chalk.green('✓ Old system files removed'));

    // Step 4: Copy fresh pro-os directories
    spinner.start('Installing fresh FWD PRO system...');
    const sourceProOS = path.join(__dirname, '..', '..');
    const targetProOS = path.join(fwdproDir, 'pro-os');

    // Copy each directory we removed (templates not copied - only used during install)
    const dirsToCopy = ['experts', 'commands', 'system', 'user-docs'];

    for (const dir of dirsToCopy) {
      const sourcePath = path.join(sourceProOS, dir);
      const targetPath = path.join(targetProOS, dir);

      if (await fs.pathExists(sourcePath)) {
        await fs.copy(sourcePath, targetPath, {
          filter: src => {
            // For system/ folder, skip installer and ide-configs
            if (dir === 'system') {
              const relativePath = path.relative(sourcePath, src);
              if (relativePath.startsWith('installer')) return false;
              if (relativePath.startsWith('ide-configs')) return false;
            }
            return true;
          },
        });
      }
    }

    // Write version file
    await fs.writeFile(path.join(targetProOS, 'system', '.version'), packageVersion);

    spinner.succeed(chalk.green('✓ FWD PRO system installed'));

    // Step 5: Verify user data is intact (no restore needed - never touched!)
    spinner.start('Verifying user data...');

    // Just verify key directories exist
    const projectDir = path.join(fwdproDir, 'pro-os', 'project');
    if (await fs.pathExists(projectDir)) {
      spinner.succeed(chalk.green('✓ User data intact'));
    } else {
      spinner.warn(chalk.yellow('⚠ Some user directories not found (may be fresh install)'));
    }

    // Step 6: Update IDE configs (overwrite with fresh versions)
    if (installedIDEs.length > 0) {
      spinner.start('Updating IDE configs...');
      await setupIDE(projectPath, installedIDEs);
      spinner.succeed(chalk.green('✓ IDE configs updated'));
    }

    // Step 7: Done (no cleanup needed)
    spinner.succeed(chalk.green('✓ Update complete'));

    // Success!
    console.log(chalk.bold.green(`\n✨ Successfully updated to v${packageVersion}!\n`));

    console.log(chalk.bold('What changed:'));
    console.log(chalk.gray('  • Fresh experts, commands, patterns'));
    console.log(chalk.gray('  • Updated system tools'));
    console.log(chalk.gray('  • Latest IDE configs\n'));

    console.log(chalk.bold('Your work is safe:'));
    console.log(chalk.gray('  • All project context preserved'));
    console.log(chalk.gray('  • All documents preserved'));
    console.log(chalk.gray('  • All roundtable workspaces preserved'));
    console.log(chalk.gray('  • All custom experts & commands preserved\n'));
  } catch (error) {
    console.error(chalk.red('\n❌ Update failed:'), error.message);
    console.log(chalk.yellow("\nYour project data was never touched - it's safe!"));
    console.log(chalk.gray('The update only modifies system files.\n'));
    process.exit(1);
  }
}
