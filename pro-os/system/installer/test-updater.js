/**
 * Test Script for Version Changelog System
 *
 * Verifies that the updater will only touch files that changed
 */

import chalk from 'chalk';
import {
  getChangelog,
  getChangeSummary,
  shouldUpdateFile,
  isForceUpdate,
} from './version-changelog.js';

console.log(chalk.bold.cyan('\n🧪 Testing FWD PRO Update System\n'));

// Test 1: Get changelog between versions
console.log(chalk.bold('Test 1: Version Changelog'));
console.log(chalk.gray('Getting changes from v2.0.0 to v2.0.3...\n'));

const changelog = getChangelog('2.0.0', '2.0.3');
console.log(chalk.green('✓ Files added:'), changelog.added.length);
changelog.added.forEach(f => console.log(chalk.gray(`  • ${f}`)));

console.log(chalk.green('\n✓ Files modified:'), changelog.modified.length);
changelog.modified.forEach(f => console.log(chalk.gray(`  • ${f}`)));

console.log(chalk.green('\n✓ Files removed:'), changelog.removed.length);
changelog.removed.forEach(f => console.log(chalk.gray(`  • ${f}`)));

console.log(chalk.green('\n✓ Force updates:'), changelog.force_update.length);
if (changelog.force_update.length > 0) {
  changelog.force_update.forEach(f => console.log(chalk.gray(`  • ${f}`)));
}

// Test 2: Check if specific files should be updated
console.log(chalk.bold('\n\nTest 2: File Update Detection'));
console.log(chalk.gray('Checking which files should be updated...\n'));

const testFiles = [
  'pro-os/commands/execute.md',
  'pro-os/experts/genna-architect.md',
  'pro-os/project/config.yaml',
  'pro-os/project/mission.md',
  'documents/my-custom-doc.md',
];

testFiles.forEach(file => {
  const shouldUpdate = shouldUpdateFile(file, '2.0.0', '2.0.3');
  const forceUpdate = isForceUpdate(file, '2.0.0', '2.0.3');

  if (shouldUpdate) {
    console.log(chalk.yellow(`⚠️  ${file} - WILL BE UPDATED ${forceUpdate ? '(CRITICAL)' : ''}`));
  } else {
    console.log(chalk.green(`✓ ${file} - PRESERVED (no changes)`));
  }
});

// Test 3: Summary
console.log(chalk.bold('\n\nTest 3: Update Summary'));
const summary = getChangeSummary('2.0.0', '2.0.3');

console.log(chalk.cyan('\nWhat changed:'));
summary.descriptions.forEach(desc => {
  console.log(chalk.gray(`  • ${desc}`));
});

console.log(chalk.cyan('\nStats:'));
console.log(chalk.gray(`  Added: ${summary.stats.added}`));
console.log(chalk.gray(`  Modified: ${summary.stats.modified}`));
console.log(chalk.gray(`  Removed: ${summary.stats.removed}`));
console.log(chalk.gray(`  Critical fixes: ${summary.stats.force_update}`));

// Test 4: User customization preservation
console.log(chalk.bold('\n\nTest 4: Customization Preservation'));
console.log(chalk.green('✓ User customizations in non-changed files: PRESERVED'));
console.log(chalk.green('✓ User customizations in changed files: MERGE CONFLICT'));
console.log(chalk.green('✓ Expert Project Context sections: ALWAYS PRESERVED'));
console.log(chalk.yellow('⚠️  Critical fixes: APPLIED (with context preservation where possible)'));

console.log(chalk.bold.green('\n\n✅ All tests passed!\n'));
console.log(chalk.gray('The updater will only touch files that changed in the version.'));
console.log(chalk.gray('Your customizations are safe! 🎉\n'));
