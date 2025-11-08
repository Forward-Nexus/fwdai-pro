#!/usr/bin/env node

/**
 * PR Description Generator
 * 
 * Analyzes git commits and generates comprehensive PR descriptions
 * with testing checklists and issue references.
 */

import { execSync } from 'child_process';
import chalk from 'chalk';

function getCommitsSinceBranch(baseBranch = 'main') {
  try {
    const commits = execSync(`git log ${baseBranch}..HEAD --pretty=format:"%s|||%b"`, { encoding: 'utf-8' });
    return commits.split('\n').filter(Boolean);
  } catch (error) {
    console.error(chalk.red('❌ Error reading git history'));
    process.exit(1);
  }
}

function parseCommits(commits) {
  const parsed = {
    feat: [],
    fix: [],
    docs: [],
    refactor: [],
    perf: [],
    test: [],
    style: [],
    chore: [],
    other: []
  };

  const issues = new Set();

  commits.forEach(commit => {
    const [subject] = commit.split('|||');
    const match = subject.match(/^(\w+)(?:\(([^)]+)\))?!?:\s*(.+)$/);
    
    if (match) {
      const [, type, scope, description] = match;
      const category = parsed[type] || parsed.other;
      category.push({ description, scope });
      
      // Extract issue references
      const issueRefs = subject.match(/#\d+/g) || [];
      issueRefs.forEach(ref => issues.add(ref));
    }
  });

  return { parsed, issues: Array.from(issues) };
}

function generatePRDescription({ parsed, issues }) {
  let description = '## 🎯 Changes\n\n';

  if (parsed.feat.length > 0) {
    description += '### ✨ Features\n';
    parsed.feat.forEach(({ description: desc, scope }) => {
      const scopeText = scope ? `**${scope}:** ` : '';
      description += `- ${scopeText}${desc}\n`;
    });
    description += '\n';
  }

  if (parsed.fix.length > 0) {
    description += '### 🐛 Bug Fixes\n';
    parsed.fix.forEach(({ description: desc, scope }) => {
      const scopeText = scope ? `**${scope}:** ` : '';
      description += `- ${scopeText}${desc}\n`;
    });
    description += '\n';
  }

  if (parsed.refactor.length > 0) {
    description += '### ♻️ Refactoring\n';
    parsed.refactor.forEach(({ description: desc }) => {
      description += `- ${desc}\n`;
    });
    description += '\n';
  }

  if (parsed.docs.length > 0) {
    description += '### 📚 Documentation\n';
    parsed.docs.forEach(({ description: desc }) => {
      description += `- ${desc}\n`;
    });
    description += '\n';
  }

  // Testing checklist
  description += '## 🧪 Testing\n';
  description += '- [ ] Unit tests pass\n';
  description += '- [ ] Integration tests pass\n';
  description += '- [ ] Manual testing complete\n';
  description += '- [ ] No breaking changes (or documented)\n\n';

  // Issue references
  if (issues.length > 0) {
    description += '## 🔗 Related Issues\n';
    description += `Closes ${issues.join(', ')}\n`;
  }

  return description;
}

function main() {
  console.log(chalk.cyan.bold('\n📋 PR Description Generator\n'));

  const currentBranch = execSync('git branch --show-current', { encoding: 'utf-8' }).trim();
  console.log(chalk.white(`Current branch: ${chalk.green(currentBranch)}\n`));

  const commits = getCommitsSinceBranch();
  
  if (commits.length === 0) {
    console.log(chalk.yellow('⚠️  No commits found since main branch\n'));
    process.exit(0);
  }

  console.log(chalk.white(`Found ${chalk.green(commits.length)} commit(s)\n`));

  const data = parseCommits(commits);
  const prDescription = generatePRDescription(data);

  console.log(chalk.green('✅ Generated PR Description:\n'));
  console.log(chalk.white('─'.repeat(60)));
  console.log(prDescription);
  console.log(chalk.white('─'.repeat(60)));
  console.log(chalk.cyan('\n💡 Copy this description to your PR!\n'));
}

main();

