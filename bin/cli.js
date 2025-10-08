#!/usr/bin/env node

/**
 * FWD PRO CLI
 * 
 * Entry point for npx @fwdai/pro commands
 * 
 * Commands:
 *   npx @fwdai/pro install  - Run onboarding and setup
 *   npx @fwdai/pro update   - Update FWD PRO system files
 *   npx @fwdai/pro version  - Show version
 */

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get command
const command = process.argv[2] || 'help';

switch (command) {
  case 'install':
    // Dynamic import for ESM
    import('../tools/installer/index.js');
    break;

  case 'version': {
    const pkg = JSON.parse(
      readFileSync(join(__dirname, '..', 'package.json'), 'utf-8')
    );
    console.log(`FWD PRO v${pkg.version}`);
    break;
  }

  case 'help':
  default:
    console.log(`
FWD PRO - Universal AI Expert Collaboration System

Usage:
  npx @fwdai/pro install   Install and setup FWD PRO
  npx @fwdai/pro update    Update system files
  npx @fwdai/pro version   Show version
  npx @fwdai/pro help      Show this help

Get started:
  npx @fwdai/pro install

Learn more: https://github.com/Forward-Nexus/fwdai-pro
    `);
    break;
}

