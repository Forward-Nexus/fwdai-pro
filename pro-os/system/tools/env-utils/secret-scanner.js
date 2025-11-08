#!/usr/bin/env node

/**
 * Secret Scanner
 * 
 * Scans codebase for accidentally committed secrets, API keys, tokens
 */

import { execSync } from 'child_process';
import chalk from 'chalk';

const SECRET_PATTERNS = [
  { name: 'AWS Access Key', regex: /AKIA[0-9A-Z]{16}/ },
  { name: 'AWS Secret Key', regex: /aws_secret_access_key\s*=\s*['"][^'"]+['"]/ },
  { name: 'GitHub Token', regex: /ghp_[a-zA-Z0-9]{36}/ },
  { name: 'Stripe Secret Key', regex: /sk_live_[0-9a-zA-Z]{24}/ },
  { name: 'Stripe Publishable Key', regex: /pk_live_[0-9a-zA-Z]{24}/ },
  { name: 'OpenAI API Key', regex: /sk-[a-zA-Z0-9]{48}/ },
  { name: 'Generic API Key', regex: /api[_-]?key\s*[:=]\s*['"][a-zA-Z0-9]{20,}['"]/ },
  { name: 'Generic Secret', regex: /secret\s*[:=]\s*['"][a-zA-Z0-9]{20,}['"]/ },
  { name: 'Private Key', regex: /-----BEGIN (RSA |EC |DSA )?PRIVATE KEY-----/ },
  { name: 'JWT Token', regex: /eyJ[a-zA-Z0-9_-]{20,}\.eyJ[a-zA-Z0-9_-]{20,}\.[a-zA-Z0-9_-]{20,}/ }
];

function scanFile(filePath) {
  try {
    const content = execSync(`cat "${filePath}"`, { encoding: 'utf-8' });
    const findings = [];

    SECRET_PATTERNS.forEach(({ name, regex }) => {
      const matches = content.match(regex);
      if (matches) {
        findings.push({ file: filePath, type: name, match: matches[0] });
      }
    });

    return findings;
  } catch {
    return [];
  }
}

function scanRepository() {
  console.log(chalk.cyan.bold('\n🔍 Secret Scanner\n'));

  // Get all tracked files (excluding common ignore patterns)
  const files = execSync('git ls-files', { encoding: 'utf-8' })
    .split('\n')
    .filter(Boolean)
    .filter(f => !f.match(/\.(png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/))
    .filter(f => !f.match(/^(node_modules|dist|build|coverage|\.next)\//));

  console.log(chalk.white(`Scanning ${files.length} files...\n`));

  const allFindings = [];

  files.forEach(file => {
    const findings = scanFile(file);
    allFindings.push(...findings);
  });

  if (allFindings.length === 0) {
    console.log(chalk.green('✅ No secrets detected!\n'));
    return;
  }

  console.log(chalk.red.bold(`❌ Found ${allFindings.length} potential secret(s):\n`));

  allFindings.forEach(({ file, type, match }) => {
    console.log(chalk.red(`📁 ${file}`));
    console.log(chalk.yellow(`   Type: ${type}`));
    console.log(chalk.white(`   Found: ${match.substring(0, 50)}...`));
    console.log();
  });

  console.log(chalk.red.bold('⚠️  CRITICAL: Remove these secrets from your repository!\n'));
  console.log(chalk.white('Steps to fix:'));
  console.log(chalk.white('1. Move secrets to .env file'));
  console.log(chalk.white('2. Add .env to .gitignore'));
  console.log(chalk.white('3. Remove from git history: git filter-branch'));
  console.log(chalk.white('4. Rotate/regenerate the compromised secrets\n'));

  process.exit(1);
}

scanRepository();

