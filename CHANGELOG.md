# Changelog

All notable changes to FWD PRO will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [2.0.2] - 2025-10-09

### 🔧 Three-Way Merge for Expert Customizations

**Major Updater Enhancement:**
- **Git-style merge conflicts** for customized expert files
  - Detects when you've customized experts (beyond Project Context)
  - Creates conflict markers: `<<<<<<< YOUR / ======= / >>>>>>> NEW`
  - YOU decide what to keep, merge, or update
  - Clean reference files saved in `.fwdpro-merge-conflicts/`
  - Transparent and explicit - no silent data loss!
  
**Why This Matters:**
- If you customized Ada's personality, commands, or workflow
- You get updates/bug fixes while keeping your customizations
- Industry-standard Git merge workflow (familiar to developers)
- Full control over what changes you accept
- Can't lose work - everything is backed up

---

## [2.0.1] - 2025-10-09

### 🧹 Installer & Updater Improvements

**Installer Changes:**
- Removed `.cursor/commands/` and `.cursor/rules/` setup (unnecessary complexity)
- Removed `.mdc` files (confusing and redundant with `.md` files)
- Removed hardcoded `use-pnpm.mdc` preference (was forcing creator's preference on all users)
- Removed IDE-specific setup functions (not needed)
- Fixed outdated command examples in welcome message (`create-feature`, `create-spec` → `create-specflow`)
- Fixed reference to non-existent `@show-projects` command

**Updater Improvements (Major Fix!):**
- **Nuclear update approach:** Completely removes and replaces system folders
- **Three-way merge with conflict markers:** Professional Git-style merge for customized experts
  - Automatically merges "Project Context" sections (your project settings preserved)
  - Detects if you've customized other parts of expert files
  - Creates **Git-style conflict markers** (<<<<<<< / ======= / >>>>>>>)  
  - Shows YOUR version vs NEW version side-by-side
  - YOU choose what to keep, update, or merge
  - Clean reference copies saved in `.fwdpro-merge-conflicts/`
  - Transparent, explicit, and safe - no silent overwrites!
- Ensures zero stale files from old versions (no more ghost commands!)
- Auto-regenerates `0-your-commands/` and `0-your-experts/` shortcuts
- Removes legacy `.cursor/` artifacts automatically
- Safely preserves all user data (documents, workspace, config)

**Why These Changes:**
- `.mdc` and `.md` files are treated identically by Cursor (caused confusion)
- Users can `@mention` files in `0-your-commands/` directly (simpler!)
- Works universally across all IDEs (Cursor, VS Code, Windsurf, etc.)
- No proprietary file formats - just standard markdown
- Users choose their own package manager preferences
- Nuclear update ensures clean state (no accumulation of old files)

**Impact:**
- Cleaner installation (no hidden `.cursor/` folder)
- Updates now properly clean up old commands/docs
- Less confusion for users
- Better cross-IDE compatibility
- Respects user preferences instead of forcing creator's choices

---

## [2.0.0] - 2025-10-09

### 🎉 Major Release: Pattern-Based Expert System & Flow Commands

This is a major architectural upgrade that introduces a pattern-based workflow system, simplifies expert files, and consolidates command structures while maintaining full backward compatibility for universal commands.

### Added

**Pattern System:**
- Created 5 core workflow patterns in `pro-os/system/patterns/`:
  - `expert-collaboration.md` - Universal workflow for all experts
  - `expert-tech.md` - Technical work patterns (TDD, QA enforcement)
  - `expert-content.md` - Content/marketing/business document patterns
  - `expert-strategy.md` - Strategic planning patterns
  - `expert-legal.md` - Legal/compliance patterns
- `spec.md` - Comprehensive technical specification pattern
- `workspace.md` - Flexible workspace patterns (simple vs. complex)
- `universal.md` - Universal three-phase workflow pattern

**Flow Commands:**
- `@create-specflow` - Create technical specification with TDD structure
- `@execute-specflow` - Implement spec with TDD enforcement + mandatory QA
- `@rt` - Multi-expert roundtable collaboration (moved from quick/)
- `@create-flow` - Create custom flow commands (extensibility)

**System Commands:**
- `@create-expert` - Create new domain experts with auto-assigned patterns

### Changed

**Expert System:**
- All 6 core experts updated with `primary_patterns` field
- Removed duplicated workflow sections (~400 lines saved, 12% reduction)
- Experts now dynamically load patterns based on task type
- Task-based pattern selection (experts can work cross-domain)
- Simplified expert files focus on identity and specialization

**Command Structure:**
- Renamed `commands/quick/` → `commands/flows/` for clarity
- Updated installer to create correct symlinks to `flows/` commands
- `.mdc` Cursor rules now reference actual commands in `pro-os/commands/`
- Universal commands updated to reference pattern system

**Documentation:**
- Updated all user guides to explain pattern system
- Added comprehensive FAQ sections about patterns
- Fixed project-specific examples (generic placeholders)
- Clarified "activates experts" → ALL experts always available
- Updated customization guide for pattern-based domain experts

**Installer:**
- `favorites.js` - Updated to create symlinks to `flows/` instead of `quick/`
- `ide-setup.js` - Updated `.mdc` generation to reference actual command paths
- `generators.js` - Domain experts auto-assigned appropriate patterns
- `welcome.js` - Updated welcome message with flow command names

### Deprecated

- `@create-spec` → Use `@create-specflow`
- `@create-feature` → Use `@create-specflow` + `@execute-specflow`
- `@create-pitch-deck` → Use `@create` (users should customize their own)
- `@rt-update` → Removed (too overwhelming for AI)

### Removed

**Commands:**
- `commands/quick/` folder (replaced by `commands/flows/`)
- `commands/system/show-projects.md` (premature feature)
- `commands/system/cross-project-context.md` (over-complicated)

**Checklists:**
- `checklists/handoff-checklist.md` (now handled in workspace stories)
- `checklists/workspace-complete-checklist.md` (covered by universal pattern)

**Standards (Consolidated into Patterns):**
- `standards/workflow-standards.md` → Merged into `patterns/universal.md`
- `standards/roundtable-standards.md` → Merged into `patterns/expert-collaboration.md`
- Content preserved and enhanced with better examples and organization
- Clear folder boundaries: patterns (workflow), standards (formatting), checklists (validation)

### Fixed

- Installer now creates correct command shortcuts
- `.mdc` files reference actual source files, not shortcuts
- Removed all project-specific examples from documentation
- Fixed "activates experts" misleading language throughout docs
- Expert files no longer duplicate workflow instructions

### Migration Notes

**For existing projects:**
- Old commands still work (universal commands unchanged)
- New flow commands available immediately
- Expert shortcuts in `0-your-experts/` unchanged
- Command shortcuts in `0-your-commands/` will update to new paths

**No breaking changes for users:**
- Universal commands (`@create`, `@execute`, etc.) work exactly the same
- Expert @mentions work the same
- All existing work preserved

---

## [1.0.6] - 2025-10-08

### Fixed
- Fixed template path resolution - templates are now correctly located in `pro-os/templates/`
- Fixed installer crash when generating project-kb files

---

## [1.0.5] - 2025-10-08

### Added
- Complete CLI installer with progressive disclosure onboarding (Q1-16)
- Existing project scanner (auto-fills tech stack, project info)
- Global founder profile system (reusable across projects)
- Project-specific configuration and knowledge base
- Roundtable initialization (whiteboards, checklist, workspace)
- IDE optimizations (Cursor .cursor/rules/, VS Code settings)
- Favorites system (symlinks to active experts/commands)
- 6 core universal experts (Genna, Denny, Ada, Lyna, Benji, Elle)
- 10 universal commands (create, execute, analyze, research, review, etc.)
- 5 quick commands (create-spec, create-feature, create-pitch-deck, rt, rt-update)
- Domain expert template for custom industry experts
- Smart work-type detection (activates relevant experts)
- Communication style customization (5 styles: professional, friendly, casual, direct, supportive)
- Complete documentation system (11 user guides, 3 FAQs)
- Project templates (founder-profile, project-kb, mission, people)
- Workflow standards (3-phase: Preparation, Execution, Completion)
- Quality checklists (spec, code, content, legal, handoff, workspace)
- Beautiful CLI with colors, spinners, and progress indicators

### Changed
- N/A (first release)

### Deprecated
- N/A

### Removed
- N/A

### Fixed
- N/A

### Security
- N/A

---

## Version History

### [1.0.0] - TBD

**First public release of FWD PRO!**

Universal AI expert collaboration system for founders building ANY type of business.

**Key Features:**
- Progressive disclosure onboarding (14-19 questions based on work type)
- Reusable global profiles
- Smart project scanning
- Expert team activation based on work types
- Roundtable collaboration system
- IDE-specific optimizations
- Comprehensive documentation

**Inspired by:**
- BMAD-METHOD™ - Quality systems and workflow patterns
- Agent-OS - Context management and three-phase workflows

---

[Unreleased]: https://github.com/wardbox/fwdpro-build/compare/v1.0.0...HEAD
[1.0.0]: https://github.com/wardbox/fwdpro-build/releases/tag/v1.0.0

