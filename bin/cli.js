#!/usr/bin/env node

/**
 * FWD PRO CLI
 * 
 * Entry point for npx @fwd-ai/pro commands
 * 
 * Commands:
 *   npx @fwd-ai/pro install  - Run onboarding and setup
 *   npx @fwd-ai/pro update   - Update FWD PRO system files
 *   npx @fwd-ai/pro version  - Show version
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
  npx @fwd-ai/pro install   Install and setup FWD PRO
  npx @fwd-ai/pro update    Update system files
  npx @fwd-ai/pro version   Show version
  npx @fwd-ai/pro help      Show this help

Get started:
  npx @fwd-ai/pro install

Learn more: https://github.com/Forward-Nexus/fwdai-pro
    `);
    break;
}

