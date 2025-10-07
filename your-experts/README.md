# Your Favorite Experts

**Purpose:** Quick access to your most-used experts  
**How it works:** Symlinks (shortcuts) to experts you tag frequently

---

## What Is This Folder?

This is your personal "favorites" folder for experts. Instead of navigating to `pro-os/experts/` every time, put symlinks here for quick access.

**These are shortcuts, not copies.** Changes to the original expert file are reflected here automatically.

---

## How to Add More Experts

**Onboarding already created shortcuts for your active experts!**

Want to add more? Here's how:

### Option 1: Helper Script (Easiest!)
```bash
# From project root, run:
./add-favorite.sh

# Follow the prompts to add any expert!
```

### Option 2: Manual Terminal Command
```bash
# Navigate to this folder
cd your-experts/

# Create shortcut to any expert
ln -s ../pro-os/experts/elle-legal.md elle.md

# Now elle.md appears here as a shortcut!
```

### Option 3: Drag & Drop (May Not Work)

**Note:** Most IDEs will COPY the file instead of creating a shortcut!

If your IDE supports it:
1. Open `pro-os/experts/` folder in sidebar
2. Drag the expert to `your-experts/` folder
3. If it gets copied (not linked), delete it and use Option 1 or 2 instead

---

## Example Setup

**If you mostly use Denny, Ada, and your domain expert:**

```
your-experts/
├── README.md (this file)
├── denny.md -> ../pro-os/experts/denny-systems-architect.md
├── ada.md -> ../pro-os/experts/ada-implementation.md
└── bonnie-jo.md -> ../pro-os/experts/bonnie-jo.md
```

Now you can quickly open these without navigating deep into `pro-os/`.

---

## Why Symlinks?

**Symlinks (shortcuts) mean:**
- ✅ Always up-to-date (points to real file)
- ✅ No duplicate files
- ✅ Changes to expert = reflected here
- ✅ Quick access for AI tools

**Not copies:**
- ❌ Don't copy/paste expert files here
- ❌ That creates duplicates
- ❌ Changes won't sync

---

## Default Experts (All Available)

All experts are in: `pro-os/experts/`

**Core Team:**
- `genna-architect.md` - Chief Architect
- `denny-systems-architect.md` - Systems Architect  
- `ada-implementation.md` - Lead Engineer
- `lyna-external-strategy.md` - Funding Strategist
- `benji-internal-growth.md` - Growth Strategist
- `elle-legal.md` - Legal Counsel

**Your Domain Expert:**
- `[your-expert-name].md` - Created during onboarding (if you made one)

---

## Tips

**Add your most-used experts:**
- Building a lot? → Denny + Ada
- Fundraising focus? → Lyna + Genna
- Marketing heavy? → Benji + Genna
- Domain work? → Your custom expert

**Keep it light:**
- Only symlink what you use often
- You can always access others from `pro-os/experts/`
- This is just for convenience

**AI tools can read from here:**
- Many AI tools let you reference files quickly
- Having favorites here makes tagging faster

---

**Quick access to your expert team!** 👥
