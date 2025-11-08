#!/usr/bin/env node

/**
 * Changelog Generator
 * 
 * Generates CHANGELOG.md from git history following Keep a Changelog format.
 */

import { execSync } from 'child_process';
import fs from 'fs-extra';
import chalk from 'chalk';

function getLatestTag() {
  try {
    return execSync('git describe --tags --abbrev=0', { encoding: 'utf-8' }).trim();
  } catch {
    return null;
  }
}

function getCommitsSinceTag(tag) {
  const range = tag ? `${tag}..HEAD` : 'HEAD';
  try {
    const commits = execSync(`git log ${range} --pretty=format:"%s"`, { encoding: 'utf-8' });
    return commits.split('\n').filter(Boolean);
  } catch (error) {
    console.error(chalk.red('❌ Error reading git history'));
    process.exit(1);
  }
}

function parseCommitsForChangelog(commits) {
  const changes = {
    added: [],
    changed: [],
    deprecated: [],
    removed: [],
    fixed: [],
    security: []
  };

  commits.forEach(commit => {
    const match = commit.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.+)$/);
    
    if (match) {
      const [, type, scope, description] = match;
      const scopeText = scope ? `**${scope}:** ` : '';
      const text = `${scopeText}${description}`;
      
      switch (type) {
        case 'feat':
          changes.added.push(text);
          break;
        case 'fix':
          changes.fixed.push(text);
          break;
        case 'refactor':
        case 'perf':
          changes.changed.push(text);
          break;
        case 'docs':
          // Skip docs in changelog
          break;
        default:
          changes.changed.push(text);
      }
    }
  });

  return changes;
}

function generateChangelogEntry(version, date, changes) {
  let entry = `## [${version}] - ${date}\n\n`;

  if (changes.added.length > 0) {
    entry += '### Added\n';
    changes.added.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  if (changes.changed.length > 0) {
    entry += '### Changed\n';
    changes.changed.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  if (changes.fixed.length > 0) {
    entry += '### Fixed\n';
    changes.fixed.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  if (changes.deprecated.length > 0) {
    entry += '### Deprecated\n';
    changes.deprecated.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  if (changes.removed.length > 0) {
    entry += '### Removed\n';
    changes.removed.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  if (changes.security.length > 0) {
    entry += '### Security\n';
    changes.security.forEach(item => entry += `- ${item}\n`);
    entry += '\n';
  }

  return entry;
}

async function main() {
  console.log(chalk.cyan.bold('\n📝 Changelog Generator\n'));

  const latestTag = getLatestTag();
  const nextVersion = latestTag ? `v${parseInt(latestTag.replace(/\D/g, '')) + 1}.0.0` : 'v1.0.0';
  const today = new Date().toISOString().split('T')[0];

  console.log(chalk.white(`Latest tag: ${latestTag || chalk.yellow('none')}`));
  console.log(chalk.white(`Next version: ${chalk.green(nextVersion)}\n`));

  const commits = getCommitsSinceTag(latestTag);
  
  if (commits.length === 0) {
    console.log(chalk.yellow('⚠️  No new commits since last tag\n'));
    process.exit(0);
  }

  console.log(chalk.white(`Found ${chalk.green(commits.length)} commit(s)\n`));

  const changes = parseCommitsForChangelog(commits);
  const entry = generateChangelogEntry(nextVersion, today, changes);

  // Read existing changelog or create header
  let changelog = '';
  if (await fs.pathExists('CHANGELOG.md')) {
    changelog = await fs.readFile('CHANGELOG.md', 'utf-8');
  } else {
    changelog = '# Changelog\n\nAll notable changes to this project will be documented in this file.\n\n';
  }

  // Insert new entry after header
  const lines = changelog.split('\n');
  const headerEndIndex = lines.findIndex((line, i) => i > 0 && line.startsWith('##'));
  
  if (headerEndIndex > 0) {
    lines.splice(headerEndIndex, 0, entry);
    changelog = lines.join('\n');
  } else {
    changelog += entry;
  }

  await fs.writeFile('CHANGELOG.md', changelog);

  console.log(chalk.green('✅ CHANGELOG.md updated!\n'));
  console.log(chalk.white('New entry:\n'));
  console.log(chalk.white('─'.repeat(60)));
  console.log(entry);
  console.log(chalk.white('─'.repeat(60) + '\n'));
}

main().catch(console.error);

