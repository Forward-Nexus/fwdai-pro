/**
 * Version Changelog System
 * 
 * Tracks which files changed in each version so updates only touch what's necessary
 */

/**
 * Changelog of file changes per version
 * 
 * Structure:
 * - 'added': New files that were added in this version
 * - 'modified': Files that were changed/improved in this version
 * - 'removed': Files that should be deleted in this version
 * - 'force_update': Files that MUST be updated (security/critical fixes)
 * 
 * For files not listed, they will be preserved as-is (user customizations maintained)
 */
export const VERSION_CHANGELOG = {
  '2.1.0': {
    description: 'The Roundtable Architecture - Research integrity, token efficiency, group chat',
    added: [
      '.cursorignore',
      '.cursor/recommended-rules.md',
      '.cursor/recommended-mcps.json',
      'pro-os/system/patterns/deliverable-types.md',
      'pro-os/system/patterns/market-research-workflow.md',
      'pro-os/system/standards/research-citation-standards.md',
      'pro-os/user-docs/user-guide/personalizing-your-system.md',
      'pro-os/user-docs/user-guide/recommended-integrations.md'
    ],
    modified: [
      'pro-os/commands/flows/rt.md',
      'pro-os/system/patterns/expert-collaboration.md',
      'pro-os/system/patterns/expert-content.md',
      'pro-os/system/patterns/expert-tech.md',
      'pro-os/system/patterns/expert-strategy.md',
      'pro-os/system/patterns/expert-legal.md',
      'pro-os/system/patterns/README.md',
      'pro-os/system/standards/expert-voice-guidelines.md',
      'pro-os/system/checklists/quality-checklist.md',
      'pro-os/system/checklists/spec-checklist.md',
      'pro-os/system/checklists/content-checklist.md',
      'pro-os/system/checklists/legal-review-checklist.md',
      'pro-os/system/ide-configs/cursor/README.md',
      'pro-os/user-docs/user-guide/getting-started.md',
      'pro-os/user-docs/user-guide/working-with-experts.md',
      'pro-os/user-docs/user-guide/understanding-the-system.md',
      'pro-os/user-docs/user-guide/commands-guide.md',
      'pro-os/user-docs/user-guide/common-workflows.md',
      'pro-os/user-docs/user-guide/system-architecture.md',
      'pro-os/user-docs/user-guide/workspace-usage-guide.md',
      'pro-os/user-docs/faqs/system-faq.md',
      'pro-os/user-docs/faqs/experts-faq.md',
      'tools/installer/setup.js'
    ],
    removed: [],
    force_update: [
      'pro-os/system/patterns/expert-collaboration.md',
      'tools/installer/setup.js'
    ]
  },
  
  '2.0.5': {
    description: 'Expert chat-style response format for better UX',
    added: [],
    modified: [
      'pro-os/system/standards/expert-voice-guidelines.md',
      'pro-os/system/patterns/expert-collaboration.md'
    ],
    removed: [],
    force_update: []
  },
  
  '2.0.4': {
    description: 'Conservative updater that preserves user customizations',
    added: [
      'tools/installer/version-changelog.js',
      'tools/installer/test-updater.js'
    ],
    modified: [
      'tools/installer/updater.js'
    ],
    removed: [],
    force_update: []
  },
  
  '2.0.3': {
    description: 'Previous version',
    added: [],
    modified: [],
    removed: [],
    force_update: []
  },
  
  '2.0.2': {
    description: 'Bug fixes and stability improvements',
    added: [],
    modified: [
      'pro-os/commands/execute.md',
      'pro-os/experts/ada-implementation.md'
    ],
    removed: [],
    force_update: []
  },
  
  '2.0.1': {
    description: 'Removed .cursor folder, added IDE configs',
    added: [
      'pro-os/system/ide-configs/cursor/README.md',
      'pro-os/system/ide-configs/vscode/README.md',
      'pro-os/system/ide-configs/windsurf/README.md',
      'pro-os/system/ide-configs/claude/README.md',
      'pro-os/system/ide-configs/generic/README.md'
    ],
    modified: [
      'pro-os/user-docs/user-guide/getting-started.md'
    ],
    removed: [
      '.cursor'
    ],
    force_update: []
  },
  
  '2.0.0': {
    description: 'Major refactor - new command structure',
    added: [
      'pro-os/commands/flows/README.md',
      'pro-os/commands/system/README.md'
    ],
    modified: [
      'pro-os/commands/create.md',
      'pro-os/commands/execute.md',
      'pro-os/commands/plan.md',
      'pro-os/commands/analyze.md',
      'pro-os/commands/brainstorm.md',
      'pro-os/commands/research.md',
      'pro-os/commands/review.md',
      'pro-os/commands/fix.md',
      'pro-os/commands/update.md'
    ],
    removed: [
      'pro-os/commands/newthread.md',
      'pro-os/system/standards/workflow-standards.md',
      'pro-os/system/standards/roundtable-standards.md'
    ],
    force_update: []
  }
};

/**
 * Get all file changes between two versions
 * 
 * @param {string} fromVersion - Starting version (e.g., "2.0.0")
 * @param {string} toVersion - Target version (e.g., "2.0.3")
 * @returns {Object} Aggregated changes { added: [], modified: [], removed: [], force_update: [] }
 */
export function getChangelog(fromVersion, toVersion) {
  const from = parseVersion(fromVersion);
  const to = parseVersion(toVersion);
  
  const aggregated = {
    added: new Set(),
    modified: new Set(),
    removed: new Set(),
    force_update: new Set(),
    descriptions: []
  };
  
  // Get all versions between from and to
  const versions = Object.keys(VERSION_CHANGELOG)
    .map(v => ({ version: v, parsed: parseVersion(v) }))
    .filter(v => {
      // Only include versions greater than 'from' and less than or equal to 'to'
      return isVersionGreater(v.parsed, from) && isVersionLessOrEqual(v.parsed, to);
    })
    .sort((a, b) => compareVersions(a.parsed, b.parsed))
    .map(v => v.version);
  
  // Aggregate changes
  for (const version of versions) {
    const changelog = VERSION_CHANGELOG[version];
    
    if (changelog.description) {
      aggregated.descriptions.push(`v${version}: ${changelog.description}`);
    }
    
    if (changelog.added) {
      changelog.added.forEach(file => aggregated.added.add(file));
    }
    
    if (changelog.modified) {
      changelog.modified.forEach(file => aggregated.modified.add(file));
    }
    
    if (changelog.removed) {
      changelog.removed.forEach(file => aggregated.removed.add(file));
    }
    
    if (changelog.force_update) {
      changelog.force_update.forEach(file => {
        aggregated.force_update.add(file);
        aggregated.modified.add(file); // Force updates are also modifications
      });
    }
  }
  
  return {
    added: Array.from(aggregated.added),
    modified: Array.from(aggregated.modified),
    removed: Array.from(aggregated.removed),
    force_update: Array.from(aggregated.force_update),
    descriptions: aggregated.descriptions
  };
}

/**
 * Check if a file should be updated based on changelog
 */
export function shouldUpdateFile(filePath, fromVersion, toVersion) {
  const changelog = getChangelog(fromVersion, toVersion);
  
  // Normalize path separators
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  // Check if file is in any update list
  return (
    changelog.added.some(p => normalizedPath.includes(p.replace(/\\/g, '/'))) ||
    changelog.modified.some(p => normalizedPath.includes(p.replace(/\\/g, '/'))) ||
    changelog.force_update.some(p => normalizedPath.includes(p.replace(/\\/g, '/')))
  );
}

/**
 * Check if a file is marked for forced update (security/critical)
 */
export function isForceUpdate(filePath, fromVersion, toVersion) {
  const changelog = getChangelog(fromVersion, toVersion);
  const normalizedPath = filePath.replace(/\\/g, '/');
  
  return changelog.force_update.some(p => normalizedPath.includes(p.replace(/\\/g, '/')));
}

/**
 * Parse semantic version
 */
function parseVersion(version) {
  const [major, minor, patch] = version.split('.').map(Number);
  return { major: major || 0, minor: minor || 0, patch: patch || 0 };
}

/**
 * Compare two parsed versions
 * Returns: -1 if a < b, 0 if a === b, 1 if a > b
 */
function compareVersions(a, b) {
  if (a.major !== b.major) return a.major - b.major;
  if (a.minor !== b.minor) return a.minor - b.minor;
  return a.patch - b.patch;
}

/**
 * Check if version a is greater than version b
 */
function isVersionGreater(a, b) {
  return compareVersions(a, b) > 0;
}

/**
 * Check if version a is less than or equal to version b
 */
function isVersionLessOrEqual(a, b) {
  return compareVersions(a, b) <= 0;
}

/**
 * Get list of files that need removal
 */
export function getFilesToRemove(fromVersion, toVersion) {
  const changelog = getChangelog(fromVersion, toVersion);
  return changelog.removed;
}

/**
 * Get a summary of changes for display
 */
export function getChangeSummary(fromVersion, toVersion) {
  const changelog = getChangelog(fromVersion, toVersion);
  
  return {
    descriptions: changelog.descriptions,
    stats: {
      added: changelog.added.length,
      modified: changelog.modified.length,
      removed: changelog.removed.length,
      force_update: changelog.force_update.length
    }
  };
}

