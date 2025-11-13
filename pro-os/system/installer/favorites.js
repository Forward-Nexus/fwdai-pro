/**
 * Favorites (Symlinks)
 *
 * Create shortcuts in _your-experts/ and _your-commands/ folders
 * Based on active experts and work types
 */

import fs from 'fs-extra';
import path from 'path';

export async function createFavorites(projectPath, workTypes, domainExpert) {
  const yourExpertsPath = path.join(projectPath, '.fwdpro', '_your-experts');
  const yourCommandsPath = path.join(projectPath, '.fwdpro', '_your-commands');

  await fs.ensureDir(yourExpertsPath);
  await fs.ensureDir(yourCommandsPath);

  // Track results
  let expertsLinked = 0;
  let commandsLinked = 0;

  // === EXPERTS ===
  const expertsToLink = [];

  // Always Genna
  expertsToLink.push({
    source: '../pro-os/experts/genna-architect.md',
    target: path.join(yourExpertsPath, 'genna.md'),
    name: 'genna',
  });

  // Based on work types
  if (workTypes.includes('building')) {
    expertsToLink.push({
      source: '../pro-os/experts/denny-systems-architect.md',
      target: path.join(yourExpertsPath, 'denny.md'),
      name: 'denny',
    });
    expertsToLink.push({
      source: '../pro-os/experts/ada-implementation.md',
      target: path.join(yourExpertsPath, 'ada.md'),
      name: 'ada',
    });
  }

  if (workTypes.includes('investor')) {
    expertsToLink.push({
      source: '../pro-os/experts/lyna-external-strategy.md',
      target: path.join(yourExpertsPath, 'lyna.md'),
      name: 'lyna',
    });
  }

  if (workTypes.includes('marketing')) {
    expertsToLink.push({
      source: '../pro-os/experts/benji-internal-growth.md',
      target: path.join(yourExpertsPath, 'benji.md'),
      name: 'benji',
    });
  }

  if (workTypes.includes('legal')) {
    expertsToLink.push({
      source: '../pro-os/experts/elle-legal.md',
      target: path.join(yourExpertsPath, 'elle.md'),
      name: 'elle',
    });
  }

  // Domain expert if created
  if (domainExpert) {
    const namePart = domainExpert.expertName.toLowerCase().replace(/\s+/g, '-');
    const domainPart = domainExpert.domain.toLowerCase().replace(/\s+/g, '-');
    const expertId = `${namePart}-${domainPart}`;
    expertsToLink.push({
      source: `../pro-os/experts/${expertId}.md`,
      target: path.join(yourExpertsPath, `${namePart}.md`), // Shortcut uses just the name
      name: namePart,
    });
  }

  // Create expert symlinks
  for (const expert of expertsToLink) {
    try {
      await fs.ensureSymlink(expert.source, expert.target);
      expertsLinked++;
    } catch (error) {
      // Symlink might already exist, that's ok
      if (!error.message.includes('EEXIST')) {
        console.error(`Failed to create symlink for ${expert.name}:`, error.message);
      }
    }
  }

  // === COMMANDS ===
  const commandsToLink = [];

  // Flow commands based on work types
  if (workTypes.includes('building')) {
    commandsToLink.push(
      {
        source: '../pro-os/commands/flows/create-specflow.md',
        target: path.join(yourCommandsPath, 'create-specflow.md'),
      },
      {
        source: '../pro-os/commands/flows/execute-specflow.md',
        target: path.join(yourCommandsPath, 'execute-specflow.md'),
      }
    );
  }

  // Roundtable command (always)
  commandsToLink.push({
    source: '../pro-os/commands/flows/rt.md',
    target: path.join(yourCommandsPath, 'rt.md'),
  });

  // Create command symlinks
  for (const command of commandsToLink) {
    try {
      await fs.ensureSymlink(command.source, command.target);
      commandsLinked++;
    } catch (error) {
      if (!error.message.includes('EEXIST')) {
        console.error('Failed to create command symlink:', error.message);
      }
    }
  }

  return { expertsLinked, commandsLinked };
}
