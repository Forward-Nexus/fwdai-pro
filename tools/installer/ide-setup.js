/**
 * IDE Setup
 * 
 * Configure IDE-specific optimizations (Cursor, VS Code, etc.)
 * Creates .mdc command shortcuts following the agent-os pattern
 */

import fs from 'fs-extra';
import path from 'path';

export async function setupIDE(projectPath, aiTool, workTypes) {
  if (aiTool === 'cursor') {
    await setupCursor(projectPath, workTypes);
  } else if (aiTool === 'vscode') {
    await setupVSCode(projectPath);
  }
  // Other IDEs can be added here
}

/**
 * Setup Cursor optimizations
 * Creates .mdc command shortcuts following the agent-os pattern
 */
async function setupCursor(projectPath, workTypes) {
  const cursorRulesPath = path.join(projectPath, '.cursor', 'rules');
  await fs.ensureDir(cursorRulesPath);

  // Create .mdc shortcuts for FWD PRO commands
  const commandShortcuts = [];

  // Common commands (always available)
  commandShortcuts.push(
    {
      name: 'create',
      title: 'Create',
      description: 'Create new content, features, or materials',
      commandPath: '.fwdpro/pro-os/commands/create.md'
    },
    {
      name: 'execute',
      title: 'Execute',
      description: 'Execute tasks, implement features, or run processes',
      commandPath: '.fwdpro/pro-os/commands/execute.md'
    },
    {
      name: 'plan',
      title: 'Plan',
      description: 'Plan features, roadmaps, or strategies',
      commandPath: '.fwdpro/pro-os/commands/plan.md'
    },
    {
      name: 'analyze',
      title: 'Analyze',
      description: 'Analyze code, systems, or problems',
      commandPath: '.fwdpro/pro-os/commands/analyze.md'
    },
    {
      name: 'review',
      title: 'Review',
      description: 'Review work, code, or deliverables',
      commandPath: '.fwdpro/pro-os/commands/review.md'
    },
    {
      name: 'brainstorm',
      title: 'Brainstorm',
      description: 'Brainstorm ideas, solutions, or approaches',
      commandPath: '.fwdpro/pro-os/commands/brainstorm.md'
    },
    {
      name: 'research',
      title: 'Research',
      description: 'Research technologies, approaches, or best practices',
      commandPath: '.fwdpro/pro-os/commands/research.md'
    },
    {
      name: 'fix',
      title: 'Fix',
      description: 'Fix bugs, issues, or problems',
      commandPath: '.fwdpro/pro-os/commands/fix.md'
    }
  );

  // System commands (always)
  commandShortcuts.push(
    {
      name: 'update-project',
      title: 'Update Project',
      description: 'Update project configuration, mission, or context',
      commandPath: '.fwdpro/0-your-commands/update-project.md'
    },
    {
      name: 'show-projects',
      title: 'Show Projects',
      description: 'View all your FWD PRO projects and their status',
      commandPath: '.fwdpro/0-your-commands/show-projects.md'
    }
  );

  // Quick commands based on work types
  if (workTypes.includes('building')) {
    commandShortcuts.push(
      {
        name: 'create-spec',
        title: 'Create Spec',
        description: 'Create a detailed technical specification for a feature',
        commandPath: '.fwdpro/0-your-commands/create-spec.md'
      },
      {
        name: 'create-feature',
        title: 'Create Feature',
        description: 'Build a new feature from spec to implementation',
        commandPath: '.fwdpro/0-your-commands/create-feature.md'
      }
    );
  }

  if (workTypes.includes('investor')) {
    commandShortcuts.push({
      name: 'create-pitch-deck',
      title: 'Create Pitch Deck',
      description: 'Create investor pitch deck and materials',
      commandPath: '.fwdpro/0-your-commands/create-pitch-deck.md'
    });
  }

  // Roundtable commands (always)
  commandShortcuts.push(
    {
      name: 'rt',
      title: 'Roundtable',
      description: 'Call a multi-expert roundtable discussion',
      commandPath: '.fwdpro/0-your-commands/rt.md'
    },
    {
      name: 'rt-update',
      title: 'Roundtable Update',
      description: 'Get status update from all active experts',
      commandPath: '.fwdpro/0-your-commands/rt-update.md'
    }
  );

  // Create .mdc files for each command
  for (const cmd of commandShortcuts) {
    const mdcContent = `---
alwaysApply: false
---

# ${cmd.title}

${cmd.description}

Refer to @${cmd.commandPath}
`;
    await fs.writeFile(path.join(cursorRulesPath, `${cmd.name}.mdc`), mdcContent);
  }

  // Create use-pnpm.mdc rule
  const pnpmRule = `---
alwaysApply: true
---
Use pnpm when installing any dependencies.
`;
  await fs.writeFile(path.join(cursorRulesPath, 'use-pnpm.mdc'), pnpmRule);

  // Create a README
  const readme = `# Cursor Rules

These are FWD PRO command shortcuts for Cursor's @mention feature.

## Available Commands

Type \`@\` in Cursor to see these shortcuts:

### Common Commands (Always Available)
- \`@create\` - Create new content, features, or materials
- \`@execute\` - Execute tasks or implement features
- \`@plan\` - Plan features, roadmaps, or strategies
- \`@analyze\` - Analyze code, systems, or problems
- \`@review\` - Review work, code, or deliverables
- \`@brainstorm\` - Brainstorm ideas or solutions
- \`@research\` - Research technologies or best practices
- \`@fix\` - Fix bugs or issues

### System Commands
- \`@update-project\` - Update project configuration
- \`@show-projects\` - View all your projects

### Work-Type Specific Commands
${workTypes.includes('building') ? '- `@create-spec` - Create technical specification\n- `@create-feature` - Build a new feature\n' : ''}${workTypes.includes('investor') ? '- `@create-pitch-deck` - Create pitch deck\n' : ''}- \`@rt\` - Call a roundtable meeting
- \`@rt-update\` - Get status from all experts

### Project Rules
- \`@use-pnpm\` - Always use pnpm for dependencies

## How It Works

These \`.mdc\` files are Cursor-specific shortcuts that reference the actual command files in \`.fwdpro/0-your-commands/\`.

When you use a shortcut, Cursor loads the full command instructions.

## Expert @mentions

You can also @mention experts directly - they're accessible from \`.fwdpro/pro-os/experts/\`:
- \`@genna-architect\` - Chief Architect
- \`@denny-systems-architect\` - Systems Architect  
- \`@ada-implementation\` - Lead Engineer
- And any custom domain experts you've created

## Updates

To add more commands:
1. Add command to \`.fwdpro/0-your-commands/\`
2. Create a corresponding \`.mdc\` file here
3. Or just re-run the FWD PRO installer
`;

  await fs.writeFile(path.join(cursorRulesPath, 'README.md'), readme);
}

/**
 * Setup VS Code optimizations
 */
async function setupVSCode(projectPath) {
  const vscodeSettingsPath = path.join(projectPath, '.vscode');
  await fs.ensureDir(vscodeSettingsPath);

  const settings = {
    'files.associations': {
      '*.md': 'markdown'
    },
    'markdown.preview.doubleClickToSwitchToEditor': false,
    'workbench.editor.enablePreview': false
  };

  await fs.writeJson(path.join(vscodeSettingsPath, 'settings.json'), settings, { spaces: 2 });
}

