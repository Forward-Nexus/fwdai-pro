/**
 * FWD PRO Update System
 * 
 * Handles updating existing FWD PRO installations
 * CONSERVATIVE APPROACH: Only updates files that changed in the version
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
import {
  getChangelog,
  getChangeSummary,
  shouldUpdateFile,
  isForceUpdate
} from './version-changelog.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const FWD_PRO_SOURCE = path.join(__dirname, '..', '..', 'pro-os');
const FWD_PRO_ROOT = path.join(__dirname, '..', '..');

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

    // Get changelog for this update
    const changelog = getChangelog(installedVersion, packageVersion);
    const summary = getChangeSummary(installedVersion, packageVersion);
    
    // Show what will be updated
    console.log(chalk.bold.cyan('📋 Changes in this update:\n'));
    
    if (summary.descriptions.length > 0) {
      summary.descriptions.forEach(desc => {
        console.log(chalk.gray(`  • ${desc}`));
      });
      console.log();
    }
    
    console.log(chalk.gray(`  Files added: ${summary.stats.added}`));
    console.log(chalk.gray(`  Files modified: ${summary.stats.modified}`));
    console.log(chalk.gray(`  Files removed: ${summary.stats.removed}`));
    if (summary.stats.force_update > 0) {
      console.log(chalk.yellow(`  Critical fixes: ${summary.stats.force_update}`));
    }
    console.log();
    
    console.log(chalk.bold.green('✓ Your customizations will be preserved!\n'));
    console.log(chalk.gray('Only files that changed in this version will be updated.\n'));

    const fwdproDir = path.join(projectPath, '.fwdpro');

    // Step 1: Remove deprecated files
    if (changelog.removed.length > 0) {
      let spinner = ora('Removing deprecated files...').start();
      
      for (const filePath of changelog.removed) {
        const fullPath = path.join(projectPath, filePath);
        if (await fs.pathExists(fullPath)) {
          await fs.remove(fullPath);
          spinner.text = `Removing deprecated files... ${chalk.gray(filePath)}`;
        }
      }
      
      spinner.succeed(chalk.green('✓ Deprecated files removed'));
    }

    // Step 2: Backup files that will be modified (in case of user customization)
    let spinner = ora('Backing up files to be updated...').start();
    
    const backupDir = path.join(projectPath, '.fwdpro-backup');
    await fs.ensureDir(backupDir);
    
    // Backup all files that will be modified
    const filesToBackup = [
      ...changelog.modified,
      ...changelog.added.filter(f => {
        // Only backup added files if they already exist (user created same file)
        const fullPath = path.join(fwdproDir, f);
        return fs.pathExistsSync(fullPath);
      })
    ];
    
    for (const filePath of filesToBackup) {
      const sourcePath = path.join(fwdproDir, filePath);
      if (await fs.pathExists(sourcePath)) {
        const targetPath = path.join(backupDir, filePath);
        await fs.ensureDir(path.dirname(targetPath));
        await fs.copy(sourcePath, targetPath);
      }
    }
    
    spinner.succeed(chalk.green('✓ Files backed up'));

    // Step 3: Update only changed files
    spinner = ora('Updating changed files...').start();
    
    const updatedFiles = [];
    const mergeConflicts = [];
    
    // Process added files
    for (const filePath of changelog.added) {
      // Determine source path (root files like .cursorignore vs pro-os files)
      const isRootFile = filePath.startsWith('.cursor') || filePath === '.cursorignore';
      const sourcePath = isRootFile 
        ? path.join(FWD_PRO_ROOT, filePath)
        : path.join(FWD_PRO_SOURCE, filePath.replace('pro-os/', ''));
      
      // Root files go to project root, pro-os files go to .fwdpro
      const targetPath = isRootFile
        ? path.join(projectPath, filePath)
        : path.join(fwdproDir, filePath);
      
      if (await fs.pathExists(sourcePath)) {
        await fs.ensureDir(path.dirname(targetPath));
        
        // If file already exists, user created it - need to check for conflicts
        if (await fs.pathExists(targetPath)) {
          const hasConflict = await handleFileConflict(
            sourcePath, 
            targetPath, 
            backupDir, 
            filePath,
            installedVersion,
            packageVersion
          );
          
          if (hasConflict) {
            mergeConflicts.push(filePath);
          }
        } else {
          // New file, just copy it
          await fs.copy(sourcePath, targetPath);
          updatedFiles.push(filePath);
        }
      }
    }
    
    // Process modified files
    for (const filePath of changelog.modified) {
      const sourcePath = path.join(FWD_PRO_SOURCE, filePath.replace('pro-os/', ''));
      const targetPath = path.join(fwdproDir, filePath);
      
      if (!await fs.pathExists(sourcePath)) {
        continue; // Source doesn't exist (might be installer file)
      }
      
      if (!await fs.pathExists(targetPath)) {
        // File was deleted by user, skip updating
        spinner.text = chalk.yellow(`Skipping ${filePath} (removed by user)`);
        continue;
      }
      
      // Check if file was customized
      const backupPath = path.join(backupDir, filePath);
      
      if (await fs.pathExists(backupPath)) {
        const userContent = await fs.readFile(backupPath, 'utf8');
        const newContent = await fs.readFile(sourcePath, 'utf8');
        
        // Check if it's a force update (security/critical)
        const forceUpdate = isForceUpdate(filePath, installedVersion, packageVersion);
        
        if (forceUpdate) {
          // Critical update - force it but preserve user's project-specific sections
          await handleCriticalUpdate(
            sourcePath,
            targetPath,
            userContent,
            newContent,
            filePath,
            installedVersion,
            packageVersion
          );
          updatedFiles.push(`${filePath} (critical fix)`);
        } else {
          // Check if user customized this file
          const hasConflict = await handleFileConflict(
            sourcePath, 
            targetPath, 
            backupDir, 
            filePath,
            installedVersion,
            packageVersion,
            userContent,
            newContent
          );
          
          if (hasConflict) {
            mergeConflicts.push(filePath);
          } else {
            updatedFiles.push(filePath);
          }
        }
      } else {
        // No backup means file didn't exist before, just copy
        await fs.copy(sourcePath, targetPath, { overwrite: true });
        updatedFiles.push(filePath);
      }
    }
    
    spinner.succeed(chalk.green(`✓ Updated ${updatedFiles.length} files`));

    // Step 4: Run version-specific migrations
    await runMigrations(projectPath, installedVersion, packageVersion);

    // Step 5: Update version file
    spinner = ora('Updating version...').start();
    
    await fs.writeFile(
      path.join(fwdproDir, 'pro-os', 'system', '.version'),
      packageVersion
    );
    
    // Remove old version file if it exists (migration from 1.1.1)
    const oldVersionFile = path.join(fwdproDir, '.version');
    if (await fs.pathExists(oldVersionFile)) {
      await fs.remove(oldVersionFile);
    }

    spinner.succeed(chalk.green('✓ Version updated'));

    // Step 6: Clean up backup
    spinner = ora('Cleaning up...').start();
    await fs.remove(backupDir);
    spinner.succeed(chalk.green('✓ Cleanup complete'));

    // Success message
    console.log(
      chalk.bold.green(`\n✅ Successfully updated to v${packageVersion}!\n`)
    );

    if (updatedFiles.length > 0) {
      console.log(chalk.gray('Files updated:'));
      updatedFiles.slice(0, 10).forEach(file => {
        console.log(chalk.gray(`  • ${file}`));
      });
      if (updatedFiles.length > 10) {
        console.log(chalk.gray(`  ... and ${updatedFiles.length - 10} more`));
      }
      console.log();
    }
    
    console.log(chalk.bold.green('✓ All your customizations have been preserved!\n'));
    console.log(chalk.gray('Only files that changed in this version were updated.\n'));
    
    // If merge conflicts were detected, show resolution instructions
    if (mergeConflicts.length > 0) {
      console.log(chalk.bold.yellow('⚠️  MERGE CONFLICTS DETECTED\n'));
      console.log(chalk.yellow('You customized some files that also received updates:'));
      
      mergeConflicts.forEach(file => {
        console.log(chalk.yellow(`  • ${file}`));
      });
      
      console.log(chalk.gray('\nThese files now contain conflict markers:\n'));
      console.log(chalk.cyan('  <<<<<<< YOUR CUSTOMIZATIONS'));
      console.log(chalk.gray('  [your version]'));
      console.log(chalk.cyan('  ======='));
      console.log(chalk.gray('  [new version with improvements]'));
      console.log(chalk.cyan('  >>>>>>> FWD PRO UPDATE\n'));
      
      console.log(chalk.bold.cyan('How to Resolve:\n'));
      console.log(chalk.gray('1. Open each file and search for "<<<<<<" '));
      console.log(chalk.gray('2. Choose which version to keep or merge them'));
      console.log(chalk.gray('3. Delete the conflict markers'));
      console.log(chalk.gray('4. Save the file\n'));
      
      console.log(chalk.gray('Clean backups saved in: .fwdpro-merge-conflicts/\n'));
    }

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

/**
 * Handle file conflicts intelligently
 */
async function handleFileConflict(
  sourcePath, 
  targetPath, 
  backupDir, 
  filePath,
  installedVersion,
  packageVersion,
  userContent = null,
  newContent = null
) {
  try {
    // Read contents if not provided
    if (!userContent) {
      userContent = await fs.readFile(targetPath, 'utf8');
    }
    if (!newContent) {
      newContent = await fs.readFile(sourcePath, 'utf8');
    }
    
    // Check if files are identical
    if (userContent === newContent) {
      // No changes, just use new version
      await fs.copy(sourcePath, targetPath, { overwrite: true });
      return false;
    }
    
    // Check if it's an expert file - handle specially
    if (filePath.includes('/experts/') && filePath.endsWith('.md')) {
      return await handleExpertFileConflict(
        userContent,
        newContent,
        targetPath,
        filePath,
        backupDir,
        installedVersion,
        packageVersion
      );
    }
    
    // Check if user made ANY customizations
    const userNormalized = userContent.replace(/\s+/g, ' ').trim();
    const newNormalized = newContent.replace(/\s+/g, ' ').trim();
    
    if (userNormalized === newNormalized) {
      // Just whitespace differences, use new version
      await fs.copy(sourcePath, targetPath, { overwrite: true });
      return false;
    }
    
    // User customized it! Create merge conflict
    const mergedContent = `<<<<<<< YOUR CUSTOMIZATIONS (from v${installedVersion})
${userContent}
=======
${newContent}
>>>>>>> FWD PRO UPDATE (v${packageVersion})
`;
    
    await fs.writeFile(targetPath, mergedContent);
    
    // Save clean copies for reference
    const conflictDir = path.join(path.dirname(path.dirname(backupDir)), '.fwdpro-merge-conflicts');
    await fs.ensureDir(conflictDir);
    
    const fileName = path.basename(filePath);
    await fs.writeFile(
      path.join(conflictDir, `${fileName}.YOUR_VERSION`),
      userContent
    );
    await fs.writeFile(
      path.join(conflictDir, `${fileName}.NEW_VERSION`),
      newContent
    );
    
    return true;
    
  } catch (error) {
    console.log(chalk.yellow(`⚠️  Could not merge ${filePath}: ${error.message}`));
    // On error, just use the new version
    await fs.copy(sourcePath, targetPath, { overwrite: true });
    return false;
  }
}

/**
 * Handle expert file conflicts with smart section merging
 */
async function handleExpertFileConflict(
  userContent,
  newContent,
  targetPath,
  filePath,
  backupDir,
  installedVersion,
  packageVersion
) {
  try {
    // Always preserve user's Project Context section
    const projectContextRegex = /## Project Context[^]*$/m;
    const userProjectContext = userContent.match(projectContextRegex)?.[0];
    
    let finalContent = newContent;
    if (userProjectContext) {
      // Replace the Project Context in new version with user's version
      finalContent = newContent.replace(projectContextRegex, userProjectContext);
    }
    
    // Check if user customized OTHER parts (not just Project Context)
    const beforeContextRegex = /^[\s\S]*?(?=## Project Context)/m;
    const userBefore = userContent.match(beforeContextRegex)?.[0] || userContent;
    const newBefore = newContent.match(beforeContextRegex)?.[0] || newContent;
    
    // Normalize for comparison
    const userNormalized = userBefore.replace(/\s+/g, ' ').trim();
    const newNormalized = newBefore.replace(/\s+/g, ' ').trim();
    
    if (userNormalized === newNormalized) {
      // User only customized Project Context - safe merge!
      await fs.writeFile(targetPath, finalContent);
      return false;
    }
    
    // User customized core content! Need manual merge
    const mergedContent = `<<<<<<< YOUR CUSTOMIZATIONS (from v${installedVersion})
${userBefore}
=======
${newBefore}
>>>>>>> FWD PRO UPDATE (v${packageVersion})

${userProjectContext || '## Project Context\n\n<!-- Your project context -->\n'}
`;
    
    await fs.writeFile(targetPath, mergedContent);
    
    // Save clean copies
    const conflictDir = path.join(path.dirname(path.dirname(backupDir)), '.fwdpro-merge-conflicts');
    await fs.ensureDir(conflictDir);
    
    const fileName = path.basename(filePath);
    await fs.writeFile(
      path.join(conflictDir, `${fileName}.YOUR_VERSION`),
      userContent
    );
    await fs.writeFile(
      path.join(conflictDir, `${fileName}.NEW_VERSION`),
      newContent
    );
    
    return true;
    
  } catch (error) {
    console.log(chalk.yellow(`⚠️  Could not merge expert file ${filePath}: ${error.message}`));
    return false;
  }
}

/**
 * Handle critical security/bug fix updates
 */
async function handleCriticalUpdate(
  sourcePath,
  targetPath,
  userContent,
  newContent,
  filePath,
  installedVersion,
  packageVersion
) {
  // For critical updates, we apply the fix but try to preserve user customizations
  
  if (filePath.includes('/experts/') && filePath.endsWith('.md')) {
    // For expert files, preserve Project Context section
    const projectContextRegex = /## Project Context[^]*$/m;
    const userProjectContext = userContent.match(projectContextRegex)?.[0];
    
    let finalContent = newContent;
    if (userProjectContext) {
      finalContent = newContent.replace(projectContextRegex, userProjectContext);
    }
    
    await fs.writeFile(targetPath, finalContent);
  } else {
    // For other files, just apply the critical fix
    await fs.copy(sourcePath, targetPath, { overwrite: true });
  }
}
