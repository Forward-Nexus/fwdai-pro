/**
 * IDE Setup
 * 
 * Configure IDE-specific optimizations (Cursor, VS Code, etc.)
 * Creates .mdc command shortcuts following the agent-os pattern
 */

import fs from 'fs-extra';
import path from 'path';

export async function setupIDE(projectPath, aiTool, workTypes) {
  // IDE-specific setup if needed in the future
  // Currently, 0-your-commands/ symlinks work for all IDEs
  // No special .mdc or .cursor/ setup needed - keeps it simple!
}

/**
 * DEPRECATED: Cursor setup removed
 * Reason: .mdc files are confusing and unnecessary
 * Solution: Users can @mention files in 0-your-commands/ directly
 * 
 * Keeping this function commented out for reference
 */
/* 
async function setupCursor(projectPath, workTypes) {
  const cursorCommandsPath = path.join(projectPath, '.cursor', 'commands');
  const cursorRulesPath = path.join(projectPath, '.cursor', 'rules');
  await fs.ensureDir(cursorCommandsPath);
  await fs.ensureDir(cursorRulesPath);

  // Create .mdc shortcuts for FWD PRO commands
  const commandShortcuts = [];

  // Universal commands (always available)
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
      name: 'update',
      title: 'Update',
      description: 'Update or modify existing work',
      commandPath: '.fwdpro/pro-os/commands/update.md'
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
      commandPath: '.fwdpro/pro-os/commands/system/update-project.md'
    },
    {
      name: 'create-expert',
      title: 'Create Expert',
      description: 'Create a new domain expert for your project',
      commandPath: '.fwdpro/pro-os/commands/system/create-expert.md'
    },
    {
      name: 'create-flow',
      title: 'Create Flow',
      description: 'Create a new custom flow command',
      commandPath: '.fwdpro/pro-os/commands/system/create-flow.md'
    }
  );

  // Flow commands based on work types
  if (workTypes.includes('building')) {
    commandShortcuts.push(
      {
        name: 'create-specflow',
        title: 'Create Spec Flow',
        description: 'Create a technical specification with TDD structure',
        commandPath: '.fwdpro/pro-os/commands/flows/create-specflow.md'
      },
      {
        name: 'execute-specflow',
        title: 'Execute Spec Flow',
        description: 'Implement a spec with TDD enforcement and mandatory QA',
        commandPath: '.fwdpro/pro-os/commands/flows/execute-specflow.md'
      }
    );
  }

  // Roundtable command (always)
  commandShortcuts.push({
    name: 'rt',
    title: 'Roundtable',
    description: 'Call a multi-expert roundtable discussion',
    commandPath: '.fwdpro/pro-os/commands/flows/rt.md'
  });

  // Create .mdc files for each command in .cursor/commands/
  for (const cmd of commandShortcuts) {
    const mdcContent = `---
alwaysApply: false
---

# ${cmd.title}

${cmd.description}

Refer to @${cmd.commandPath}
`;
    await fs.writeFile(path.join(cursorCommandsPath, `${cmd.name}.mdc`), mdcContent);
  }

  // Create project rules in .cursor/rules/
  // (Users can add their own rules here)

  // Create README for commands
  const commandsReadme = `# Cursor Commands

These are FWD PRO command shortcuts for Cursor's @mention feature.

## Available Commands

Type \`@\` in Cursor to see these shortcuts:

### Universal Commands (Always Available)
- \`@create\` - Create new content, features, or materials
- \`@execute\` - Execute tasks or implement features
- \`@update\` - Update or modify existing work
- \`@plan\` - Plan features, roadmaps, or strategies
- \`@analyze\` - Analyze code, systems, or problems
- \`@review\` - Review work, code, or deliverables
- \`@brainstorm\` - Brainstorm ideas or solutions
- \`@research\` - Research technologies or best practices
- \`@fix\` - Fix bugs or issues

### System Commands
- \`@update-project\` - Update project configuration
- \`@create-expert\` - Create a new domain expert
- \`@create-flow\` - Create a custom flow command

### Flow Commands
${workTypes.includes('building') ? '- `@create-specflow` - Create technical spec with TDD structure\n- `@execute-specflow` - Implement spec with TDD + QA enforcement\n' : ''}- \`@rt\` - Call a multi-expert roundtable discussion

### Your Experts
${expertShortcuts.map(e => `- \`@${e.name}\` - ${e.title}`).join('\n')}

## How It Works

These \`.mdc\` files reference the actual command files in \`.fwdpro/pro-os/commands/\`.

When you use a shortcut, Cursor loads the full command instructions.

**Note:** You can also access commands directly via \`.fwdpro/0-your-commands/\` shortcuts!

## Expert @mentions

You can @mention experts directly from \`.fwdpro/pro-os/experts/\` or \`.fwdpro/0-your-experts/\`:
- \`@genna-architect\` or \`@genna\` - Chief Architect
- \`@denny-systems-architect\` or \`@denny\` - Systems Architect  
- \`@ada-implementation\` or \`@ada\` - Lead Engineer
- \`@lyna-external-strategy\` or \`@lyna\` - External Strategy
- \`@benji-internal-growth\` or \`@benji\` - Internal Growth
- \`@elle-legal\` or \`@elle\` - Legal Counsel
- And any custom domain experts you've created

## Pattern System (v4.0)

All experts use a pattern-based workflow system. Patterns are in \`.fwdpro/pro-os/system/patterns/\`:
- \`expert-collaboration.md\` - Universal workflow (all experts)
- \`expert-tech.md\` - Technical work
- \`expert-content.md\` - Content/marketing
- \`expert-strategy.md\` - Strategic planning
- \`expert-legal.md\` - Legal/compliance

## Updates

These files are auto-generated during installation. To update:
1. Run \`npx @fwd-ai/pro update\` to get latest commands
2. Or modify \`.mdc\` files manually
`;

  await fs.writeFile(path.join(cursorCommandsPath, 'README.md'), commandsReadme);

  // Create README for rules folder
  const rulesReadme = `# Cursor Rules

Project-specific rules that are always applied by Cursor.

## Adding Custom Rules

You can add your own \`.mdc\` files here with \`alwaysApply: true\` to enforce project standards.

**Examples:**
- Package manager preference: \`use-pnpm.mdc\`, \`use-npm.mdc\`
- Code style rules: \`no-console-logs.mdc\`
- Project conventions: \`test-before-commit.mdc\`

**Format:**
\`\`\`
---
alwaysApply: true
---
Your rule description here
\`\`\`
`;
  await fs.writeFile(path.join(cursorRulesPath, 'README.md'), rulesReadme);
}
*/

/**
 * DEPRECATED: VS Code setup removed
 * Reason: Not needed - 0-your-commands/ works universally
 */
/* 
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
*/
