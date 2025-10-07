# Your Favorite Commands

**Purpose:** Quick access to your most-used commands  
**How it works:** Symlinks (shortcuts) to commands you use frequently

---

## What Is This Folder?

This is your personal "favorites" folder for commands. Instead of navigating to `pro-os/commands/` every time, put symlinks here for quick access.

**These are shortcuts, not copies.** Changes to the original command file are reflected here automatically.

---

## How to Add More Commands

**Onboarding already created shortcuts for relevant commands!**

Want to add more? Here's how:

### Option 1: Helper Script (Easiest!)
```bash
# From project root, run:
./add-favorite.sh

# Follow the prompts to add any command!
```

### Option 2: Manual Terminal Command
```bash
# Navigate to this folder
cd your-commands/

# Create shortcut to any command
ln -s ../pro-os/commands/quick/rt-update.md rt-update.md

# Now rt-update.md appears here as a shortcut!
```

### Option 3: Drag & Drop (May Not Work)

**Note:** Most IDEs will COPY the file instead of creating a shortcut!

If your IDE supports it:
1. Open `pro-os/commands/` folder in sidebar
2. Drag the command to `your-commands/` folder
3. If it gets copied (not linked), delete it and use Option 1 or 2 instead

### Option 4: Remove Shortcuts You Don't Use

Don't use a command? Just delete it from this folder!
```bash
rm your-commands/create-pitch-deck.md
```

This only deletes the shortcut, not the real file. The command still exists in `pro-os/commands/`!

---

## Example Setup

**If you frequently create specs and features:**

```
your-commands/
├── README.md (this file)
├── create-spec.md -> ../pro-os/commands/quick/create-spec.md
├── create-feature.md -> ../pro-os/commands/quick/create-feature.md
├── rt.md -> ../pro-os/commands/quick/rt.md
└── update-project.md -> ../pro-os/commands/system/update-project.md
```

Now you can quickly reference these without navigating deep into `pro-os/`.

---

## Why Symlinks?

**Symlinks (shortcuts) mean:**
- ✅ Always up-to-date (points to real file)
- ✅ No duplicate files
- ✅ Changes to command = reflected here
- ✅ Quick access for AI tools

**Not copies:**
- ❌ Don't copy/paste command files here
- ❌ That creates duplicates
- ❌ Changes won't sync

---

## Available Commands

### Universal Commands (`pro-os/commands/`)
- `create.md` - Create new deliverables
- `execute.md` - Build/implement something
- `analyze.md` - Research and analyze
- `review.md` - Review and provide feedback
- `update.md` - Update existing work
- `fix.md` - Fix problems
- `research.md` - Research topics
- `brainstorm.md` - Brainstorm ideas
- `plan.md` - Create plans
- `newthread.md` - Context management

### Quick Commands (`pro-os/commands/quick/`)
- `create-spec.md` - Technical specifications
- `create-pitch-deck.md` - Investor pitch decks
- `create-feature.md` - Full Denny → Ada workflow
- `rt.md` - Roundtable review (all experts)
- `rt-update.md` - Weekly status check
- `_TEMPLATE.md` - Create your own!

### System Commands (`pro-os/commands/system/`)
- `update-project.md` - Update project context
- `update-onboarding.md` - Re-run onboarding
- `update-founder-profile.md` - Update your profile
- `update-mission.md` - Update mission
- `update-people.md` - Update team/advisors
- `show-projects.md` - Portfolio view

---

## Tips

**Add commands you use daily:**
- Mostly building? → create-spec, create-feature
- Investor work? → create-pitch-deck, update-project
- System maintenance? → update-project, show-projects

**Keep it focused:**
- Only symlink what you use often
- You can always access others from `pro-os/commands/`
- This is just for convenience

**Create custom commands:**
- See `pro-os/commands/quick/_TEMPLATE.md`
- Build your own optimized workflows
- Add symlinks here for quick access

**AI tools can read from here:**
- Many AI tools let you reference files quickly
- Having favorites here makes workflows faster

---

**Quick access to your command toolkit!** ⚡
