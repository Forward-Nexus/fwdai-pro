# File Structure Guide

**Complete reference for where everything lives in FWD PRO**

---

## Overview

FWD PRO organizes files into clear zones with specific purposes. Understanding this structure helps you find what you need and know where to look.

---

## The Complete Structure

```
your-project/
│
├── .fwdpro/                        ← FWD PRO system (hidden folder)
│   │
│   ├── pro-os/                     ← SYSTEM CORE (don't edit directly!)
│   │   │
│   │   ├── agents/                 ← Expert definitions
│   │   │   ├── genna-architect.md
│   │   │   ├── denny-systems-architect.md
│   │   │   ├── ada-implementation.md
│   │   │   ├── lyna-external-strategy.md
│   │   │   ├── benji-internal-growth.md
│   │   │   ├── elle-legal.md
│   │   │   └── [your-domain-expert].md
│   │   │
│   │   ├── commands/               ← Command templates
│   │   │   ├── create.md           ← Universal commands
│   │   │   ├── execute.md
│   │   │   ├── analyze.md
│   │   │   ├── review.md
│   │   │   ├── update.md
│   │   │   ├── fix.md
│   │   │   ├── research.md
│   │   │   ├── brainstorm.md
│   │   │   ├── plan.md
│   │   │   ├── newthread.md
│   │   │   │
│   │   │   ├── quick/              ← Optimized workflows
│   │   │   │   ├── create-spec.md
│   │   │   │   ├── create-pitch-deck.md
│   │   │   │   ├── create-feature.md
│   │   │   │   ├── rt.md
│   │   │   │   ├── rt-update.md
│   │   │   │   └── _TEMPLATE.md    ← Create your own!
│   │   │   │
│   │   │   └── system/             ← System management
│   │   │       ├── update-project.md
│   │   │       ├── update-onboarding.md
│   │   │       ├── update-founder-profile.md
│   │   │       ├── update-mission.md
│   │   │       ├── update-people.md
│   │   │       ├── show-projects.md
│   │   │       ├── cross-project-context.md
│   │   │       └── README.md
│   │   │
│   │   ├── system/                 ← System files
│   │   │   ├── templates/          ← File templates
│   │   │   │   └── roundtable/
│   │   │   │       ├── whiteboards-template.md
│   │   │   │       ├── founder-checklist-template.md
│   │   │   │       └── workspace/
│   │   │   │           └── workspace-template.yaml
│   │   │   │
│   │   │   └── ide-configs/        ← IDE integrations
│   │   │       ├── README.md
│   │   │       ├── cursor/
│   │   │       ├── vscode/
│   │   │       ├── windsurf/
│   │   │       └── generic/
│   │   │
│   │   ├── config-template.yaml    ← Core configuration template
│   │   │
│   │   └── documentation/          ← This documentation!
│   │       ├── faqs/
│   │       │   ├── commands-faq.md
│   │       │   ├── experts-faq.md
│   │       │   └── system-faq.md
│   │       │
│   │       └── user-guide/
│   │           ├── getting-started.md
│   │           ├── understanding-the-system.md
│   │           ├── working-with-experts.md
│   │           ├── common-workflows.md
│   │           ├── commands-guide.md
│   │           ├── file-structure.md (you are here!)
│   │           ├── managing-your-project.md
│   │           ├── multi-project-usage.md
│   │           ├── working-with-existing-projects.md
│   │           ├── customization.md
│   │           └── troubleshooting.md
│   │
│   ├── your-experts/                ← YOUR FAVORITES (shortcuts to experts)
│   │   ├── README.md               ← How to add more
│   │   ├── .gitkeep-for-symlinks   ← Examples
│   │   ├── genna.md → ../pro-os/experts/genna-architect.md
│   │   ├── denny.md → ../pro-os/experts/denny-systems-architect.md
│   │   ├── ada.md → ../pro-os/experts/ada-implementation.md
│   │   └── ...                     ← (symlinks created by onboarding)
│   │
│   ├── your-commands/              ← YOUR FAVORITES (shortcuts to commands)
│   │   ├── README.md               ← How to add more
│   │   ├── .gitkeep-for-symlinks   ← Examples
│   │   ├── update-project.md → ../pro-os/commands/system/update-project.md
│   │   ├── create-spec.md → ../pro-os/commands/quick/create-spec.md
│   │   └── ...                     ← (symlinks created by onboarding)
│   │
│   ├── project/                    ← PROJECT CONTEXT (edit these!)
│   │   ├── project-kb.md           ← Project knowledge base
│   │   ├── founder-profile.md      ← Link to your global profile
│   │   ├── mission.md              ← Your "why"
│   │   └── people.md               ← Team, advisors, investors
│   │
│   ├── roundtable/                 ← COLLABORATION ZONE (messy is okay!)
│   │   ├── whiteboards.md          ← Expert collaboration dashboard
│   │   ├── [your-name]-checklist.md    ← Your action items
│   │   │
│   │   └── workspace/              ← Work-in-progress files
│   │       ├── [draft-files].md    ← Drafts, iterations
│   │       └── archive/            ← Completed work
│   │
│   ├── documents/                  ← FINAL OUTPUTS (clean & shareable!)
│   │   ├── technical/              ← Specs, architecture
│   │   │   ├── [feature]-spec.md
│   │   │   └── architecture.md
│   │   │
│   │   ├── investor/               ← Pitch decks, financials
│   │   │   ├── pitch-deck.md
│   │   │   ├── investor-update-[date].md
│   │   │   └── financial-model.md
│   │   │
│   │   ├── marketing/              ← Content, campaigns
│   │   │   ├── marketing-plan.md
│   │   │   ├── landing-page-copy.md
│   │   │   └── content-calendar.md
│   │   │
│   │   ├── legal/                  ← Contracts, policies
│   │   │   ├── privacy-policy.md
│   │   │   ├── terms-of-service.md
│   │   │   └── compliance-checklist.md
│   │   │
│   │   └── planning/               ← Roadmaps, strategies
│   │       ├── roadmap-[period].md
│   │       └── strategy.md
│   │
│   ├── add-favorite.sh             ← Helper script to add symlinks
│   ├── README.md                   ← Quick start guide
│   └── .gitignore                  ← Git configuration
│
├── ~/.fwdpro-global/               ← GLOBAL PROFILE (outside project!)
│   ├── [name]-profile.md           ← Your personal profile
│   └── projects.md                 ← All your FWD PRO projects
│
└── [your actual project files]     ← Your codebase (untouched by FWD PRO!)
    ├── src/
    ├── package.json
    └── ...
```

---

## Key Folders Explained

### pro-os/ (System Core)

**Purpose:** FWD PRO's operating system

**Don't Edit:** System updates might overwrite changes

**Do Read:** Great for understanding how things work

**Contains:**
- Expert definitions
- Command templates
- System configuration
- Documentation

---

### your-experts/ (Your Favorites)

**Purpose:** Quick access to experts you use often

**Edit:** Yes! Add/remove shortcuts as you like

**How it Works:** Symlinks (shortcuts) to real expert files

**Created By:** Onboarding (based on your work types)

**Add More:**
```bash
./add-favorite.sh
→ Choose expert to add
```

**Example:**
```
your-experts/
├── genna.md → ../pro-os/experts/genna-architect.md
├── denny.md → ../pro-os/experts/denny-systems-architect.md
└── ada.md → ../pro-os/experts/ada-implementation.md
```

These are just shortcuts - the real files are in `pro-os/experts/`

---

### your-commands/ (Your Favorites)

**Purpose:** Quick access to commands you use often

**Edit:** Yes! Add/remove shortcuts as you like

**How it Works:** Symlinks (shortcuts) to real command files

**Created By:** Onboarding (based on your work types)

**Add More:**
```bash
./add-favorite.sh
→ Choose command to add
```

**Example:**
```
your-commands/
├── update-project.md → ../pro-os/commands/system/update-project.md
├── create-spec.md → ../pro-os/commands/quick/create-spec.md
└── rt.md → ../pro-os/commands/quick/rt.md
```

These are just shortcuts - the real files are in `pro-os/commands/`

---

### project/ (Project Context)

**Purpose:** Information about THIS project

**Edit:** Yes! Keep this current!

**Updated By:**
- You manually
- `@update-project` command
- `@update-mission` command
- `@update-people` command

**Files:**

**project-kb.md** - Project knowledge base
- What this project is
- Current stage
- Goals
- Tech stack
- Challenges
- *Update with:* `@update-project`

**founder-profile.md** - Link to your global profile
- Points to `~/.fwdpro-global/[name]-profile.md`
- Your communication style
- Working preferences
- *Update with:* `@update-founder-profile`

**mission.md** - Your "why"
- Why this project exists
- Your personal story
- Vision
- Success metrics
- *Update with:* `@update-mission`

**people.md** - Team, advisors, investors
- Core team members
- Advisors/mentors
- Investors
- Key customers
- *Update with:* `@update-people`

---

### roundtable/ (Collaboration Zone)

**Purpose:** Where experts collaborate

**Edit:** Read-only (experts update this)

**Messy is OK:** This is a working zone!

**Files:**

**whiteboards.md** - Expert collaboration dashboard
- Each expert's current work
- Handoffs between experts
- Blockers
- Questions for you
- Team coordination

**[your-name]-checklist.md** - Your action items
- High priority items
- Regular tasks
- Ideas for later
- Experts add items when they need your input

**workspace/** - Work-in-progress
- Draft files
- Iterations
- Review versions
- Gets cleaned up regularly

**workspace/archive/** - Completed work
- Old drafts
- Historical versions
- Reference if needed

---

### documents/ (Final Outputs)

**Purpose:** Clean, shareable deliverables

**Edit:** Read-only (generated by experts)

**Share These:** Professional quality, ready for stakeholders

**Folders:**

**technical/** - Specs, architecture
- Feature specifications
- Architecture documents
- Technical designs
- API documentation

**investor/** - Pitch decks, financials
- Pitch decks
- Investor updates
- Financial models
- One-pagers

**marketing/** - Content, campaigns
- Marketing plans
- Landing page copy
- Blog posts
- Content calendars

**legal/** - Contracts, policies
- Privacy policies
- Terms of service
- Compliance checklists
- Contract templates

**planning/** - Roadmaps, strategies
- Product roadmaps
- Strategic plans
- Launch plans
- Growth strategies

---

### ~/.fwdpro-global/ (Global Profile)

**Purpose:** Your info across ALL projects

**Location:** Outside your project (in home directory)

**Edit:** Via `@update-founder-profile` or manually

**Files:**

**[name]-profile.md** - Your personal profile
- Name, location
- Communication style
- Working preferences
- Technical level
- Team situation
- Industry focus
- Applies to ALL your FWD PRO projects

**projects.md** - All your FWD PRO projects
- Complete portfolio
- Project summaries
- Activity across projects
- Expert distribution
- Cross-project insights
- Enables meta-awareness

---

## File Naming Conventions

### Markdown Files

**Specs:**
- `[feature]-spec.md`
- Example: `auth-spec.md`, `payment-spec.md`

**Plans:**
- `[type]-plan.md`
- Example: `marketing-plan.md`, `launch-plan.md`

**Updates:**
- `[type]-update-[date].md`
- Example: `investor-update-oct-2024.md`

**Roadmaps:**
- `roadmap-[period].md`
- Example: `roadmap-q1-2025.md`

### Drafts (workspace/)

**Naming:**
- `[name]-draft.md`
- Example: `pitch-deck-draft.md`

**Versions:**
- `[name]-v1.md`, `[name]-v2.md`
- Example: `spec-v1.md`, `spec-v2.md`

---

## What Gets Git Tracked?

### Tracked (Committed to Git):
- ✅ `pro-os/` - System files
- ✅ `your-experts/README.md` - Instructions
- ✅ `your-commands/README.md` - Instructions
- ✅ `project/` - Project context
- ✅ `roundtable/whiteboards.md` - Team dashboard
- ✅ `roundtable/[your-name]-checklist.md` - Your todos
- ✅ `documents/` - Final deliverables
- ✅ `add-favorite.sh` - Helper script
- ✅ `README.md` - Quick start

### Not Tracked (In .gitignore):
- ❌ `your-experts/*` (except README) - Personal shortcuts
- ❌ `your-commands/*` (except README) - Personal shortcuts
- ❌ `roundtable/workspace/*` - Work-in-progress
- ❌ `~/.fwdpro-global/` - Personal profile

**Why:** Symlinks are personal preference, workspace is messy, global profile is private

---

## File Permissions

### You Can Edit:
- ✅ `project/*` - Your project context
- ✅ `your-experts/*` - Your shortcuts
- ✅ `your-commands/*` - Your shortcuts
- ✅ `documents/*` - Final deliverables (if you need to tweak)

### Don't Edit Directly:
- ⚠️ `pro-os/` - Use commands to update instead
- ⚠️ `roundtable/whiteboards.md` - Experts manage this
- ⚠️ `roundtable/[your-name]-checklist.md` - Experts manage this

### Read-Only Reference:
- 📖 `pro-os/experts/*` - Expert definitions
- 📖 `pro-os/commands/*` - Command templates
- 📖 `pro-os/user-docs/*` - Documentation

---

## Finding Things Quickly

### Looking for an Expert?
1. Check `your-experts/` (your shortcuts)
2. Or browse `pro-os/experts/`

### Looking for a Command?
1. Check `your-commands/` (your shortcuts)
2. Or browse `pro-os/commands/`
3. See `documentation/faqs/commands-faq.md` for quick reference

### Looking for Project Info?
- Check `project/project-kb.md`

### Looking for Current Work?
- Check `roundtable/whiteboards.md`

### Looking for What You Need to Do?
- Check `roundtable/[your-name]-checklist.md`

### Looking for a Final Deliverable?
- Check `documents/[category]/`

### Looking for Documentation?
- Check `pro-os/user-docs/`

---

## Backup & Sync

### What to Backup:
- ✅ `project/` - Project context (important!)
- ✅ `documents/` - Final work (important!)
- ✅ `roundtable/whiteboards.md` - Team state
- ✅ `~/.fwdpro-global/` - Your global profile

### Git Handles:
- ✅ Most files tracked automatically
- ✅ Commit regularly
- ✅ Push to remote repo

### Cloud Sync (Optional):
- Dropbox/Google Drive for extra backup
- `~/.fwdpro-global/` especially (it's outside Git)

---

## Cleaning Up

### Safe to Delete:
- ✅ `roundtable/workspace/archive/*` - Old drafts
- ✅ Old files in `documents/` (if superseded)
- ✅ Unused symlinks in `your-experts/` or `your-commands/`

### Don't Delete:
- ❌ `pro-os/` - System files
- ❌ `project/` - You'll lose context!
- ❌ Current `roundtable/whiteboards.md`
- ❌ Current `documents/` (active work)

### Archive Instead:
Move old work to `roundtable/workspace/archive/` instead of deleting

---

## Customizing Structure

### Add Your Own Folders:

**In documents/:**
```
documents/
├── research/          ← Your custom category
├── design/            ← Your custom category
└── operations/        ← Your custom category
```

**In workspace/:**
```
workspace/
├── experiments/       ← Try new ideas
├── references/        ← External resources
└── notes/             ← Random notes
```

Experts will adapt to your structure!

---

## Multi-Project Structure

If you have multiple FWD PRO projects:

```
~/
├── project-a/
│   └── .fwdpro/       ← FWD PRO for project A
│
├── project-b/
│   └── .fwdpro/       ← FWD PRO for project B
│
└── .fwdpro-global/    ← SHARED across all projects!
    ├── ward-profile.md
    └── projects.md    ← Lists all projects
```

**Each project has its own `.fwdpro/` but shares global profile!**

See: `multi-project-usage.md`

---

## File Size Guidelines

### Keep Files Reasonable:

**Project Context:**
- project-kb.md: 1-3 pages
- mission.md: 1-2 pages
- people.md: 1-2 pages

**Specs:**
- Technical specs: 3-10 pages
- Simple features: 1-3 pages
- Complex systems: 10-20 pages

**Plans:**
- Marketing plans: 3-5 pages
- Roadmaps: 2-5 pages
- Strategy docs: 5-10 pages

**Too Long?** Split into multiple files!

---

## Next Steps

**Manage your project:**
→ Read `managing-your-project.md`

**Use multiple projects:**
→ Read `multi-project-usage.md`

**Adopt existing projects:**
→ Read `working-with-existing-projects.md`

**Customize system:**
→ Read `customization.md`

---

**Now you know where everything lives! 🗂️**

