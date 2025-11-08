/**
 * Roundtable Initialization
 * 
 * Creates roundtable structure with whiteboards and founder checklist
 */

import fs from 'fs-extra';
import path from 'path';

export async function initializeRoundtable(projectPath, aboutYou, aboutProject, templatesSourcePath) {
  const fwdproDir = path.join(projectPath, '.fwdpro');
  const roundtablePath = path.join(fwdproDir, '_roundtable');
  const templatesPath = templatesSourcePath; // Now passed from setup

  // Create roundtable structure
  await fs.ensureDir(path.join(roundtablePath, 'workspace'));
  await fs.ensureDir(path.join(roundtablePath, 'workspace', 'archive'));

  // Read templates
  const whiteboardsTemplate = await fs.readFile(
    path.join(templatesPath, 'roundtable', 'whiteboards-template.md'),
    'utf-8'
  );

  const checklistTemplate = await fs.readFile(
    path.join(templatesPath, 'roundtable', 'founder-checklist-template.md'),
    'utf-8'
  );

  const name = aboutYou.existingProfile 
    ? path.basename(aboutYou.existingProfile).replace('-profile.md', '')
    : aboutYou.name;

  // Generate whiteboards.md
  const whiteboards = whiteboardsTemplate
    .replace(/\[Project Name from config\]/g, aboutProject.projectName)
    .replace(/\[Project Name\]/g, aboutProject.projectName)
    .replace(/\[Founder Name\]/g, name)
    .replace(/\[Auto-timestamp\]/g, new Date().toISOString())
    .replace('YYYY-MM-DD HH:MM', new Date().toISOString().replace('T', ' ').split('.')[0]);

  // Generate [your-name]-checklist.md
  const checklist = checklistTemplate
    .replace(/\[FOUNDER_NAME\]/g, name)
    .replace(/\[PROJECT_NAME\]/g, aboutProject.projectName);

  // Write files
  await fs.writeFile(path.join(roundtablePath, 'whiteboards.md'), whiteboards);
  
  // Use personalized checklist name
  const checklistName = `${name.toLowerCase().replace(/\s+/g, '-')}-checklist.md`;
  await fs.writeFile(path.join(roundtablePath, checklistName), checklist);

  // Create README in workspace folder
  const workspaceReadme = `# Workspace

This folder contains **workspace files** - where experts collaborate on deliverables.

Each workspace file tracks:
- Status (Draft → Approved → InProgress → Review → Done)
- Expert collaboration
- Tasks and progress
- Handoffs between experts
- Blockers and decisions

When work is complete, workspaces are archived to \`archive/YYYY-MM/\`.

The clean deliverables live in \`/documents/\`.

See: pro-os/templates/roundtable/workspace/workspace-template.yaml for structure.
`;

  await fs.writeFile(path.join(roundtablePath, 'workspace', 'README.md'), workspaceReadme);
}

