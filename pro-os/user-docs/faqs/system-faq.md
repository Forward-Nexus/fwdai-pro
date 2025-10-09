# System - Quick Facts

**Quick reference for FWD PRO system concepts**

---

## What Is FWD PRO?

**Universal AI expert collaboration system** for founders and small teams

- 6 core experts + your custom domain expert
- Roundtable collaboration model
- Separation of workspace (messy) and documents (clean)
- Works with any AI coding tool (Cursor, Claude, Windsurf, etc.)

---

## Key Concepts

**Roundtable** - Virtual collaboration space where experts work together

**Workspace** - Messy collaboration zone (drafts, handoffs, reviews)

**Documents** - Clean final outputs (specs, pitch decks, code)

**Expert** - AI specialist with specific role (Denny, Ada, Lyna, etc.)

**Command** - Pre-built workflow or instruction (@create-specflow, @rt, etc.)

**Domain Expert** - Custom expert YOU create for your industry

**Global Profile** - Your personal preferences across ALL projects

**Project KB** - Project-specific knowledge base

---

## File Structure (Quick)

```
.fwdpro/
├── *welcome.md          Start here!
├── pro-os/              System core (don't touch!)
│   ├── experts/         ALL experts (always available)
│   ├── commands/        ALL commands (always available)
│   └── project/         Project context & config
├── 0-your-experts/      Quick-access shortcuts
├── 0-your-commands/     Quick-access shortcuts
├── 0-roundtable/        Collaboration space
└── documents/           Final clean outputs
```

---

## Shortcuts vs All Available

**Important:** ALL 6 core experts and ALL commands are ALWAYS available!

**What are shortcuts?**
- Convenient links in `0-your-experts/` and `0-your-commands/`
- Based on your work types from onboarding
- Make frequently-used experts/commands easier to find

**Where's everything?**
- All experts: `pro-os/experts/` (can @mention any anytime)
- All commands: `pro-os/commands/` (can use any anytime)
- Your shortcuts: `0-your-experts/` and `0-your-commands/`

**Add/remove shortcuts:**
Just ask! Examples:
- "Add a shortcut to @elle in my experts folder"
- "Add @analyze to my commands shortcuts"
- "Remove the @lyna shortcut from my experts folder"

The AI will create/remove symlinks for you!

---

## Three Zones

**1. Collaboration (Roundtable)**
- `whiteboards.md` - Expert notes, blockers, handoffs
- `workspace/` - Work-in-progress files
- `[your-name]-checklist.md` - Your action items

**2. Final Outputs (Documents)**
- Clean deliverables
- No AI workspace clutter
- Share with team/investors

**3. System (Pro-OS)**
- Core FWD PRO system
- Expert definitions
- Command templates
- Don't edit directly!

---

## Communication Styles

**a) Professional/Formal** - Business language, structured  
**b) Conversational/Friendly** - Like colleagues  
**c) Casual/Enthusiastic** - Creative, emojis, energy  
**d) Direct/No-Fluff** - Straight to the point  
**e) Supportive/Encouraging** - Cheerleader energy

Set during onboarding, change with `@update-founder-profile`

---

## Work Types

- Building something (Denny + Ada get shortcuts)
- Investor materials (Lyna gets shortcut)
- Marketing/content (Benji gets shortcut)
- Legal/compliance (Elle gets shortcut)
- Strategic planning (Genna always gets shortcut)

Determines which expert shortcuts you get! (All experts are always available)

---

## How FWD PRO Works

1. **Install:** `npx @fwd-ai/pro install`
2. **Onboard:** Answer questions, system configures
3. **Tag experts:** `@denny create auth spec`
4. **Experts collaborate:** Use Roundtable, create deliverables
5. **Get clean output:** Final work in `documents/`

---

## Global vs Project

**Global Profile** (`~/.fwdpro-global/`)
- Your personal info (name, location)
- Communication style
- Working preferences
- Applies to ALL projects

**Project Context** (`.fwdpro/project/`)
- This project's details
- Tech stack, goals, team
- Project-specific only

---

## Meta-Awareness

**Experts see your whole portfolio!**

When working in Project A, experts know about:
- Project B's solutions
- Project C's tech stack
- Your history across all projects
- Domain experts from other projects

Stored in: `~/.fwdpro-global/projects.md`

---

## System Commands

**@update-project** - Scan & update ALL project documents (kb, mission, people, config)  
**@update-kb** - Update just the knowledge base document  
**@update-founder-profile** - Change communication/preferences  
**@update-mission** - Update your "why"  
**@update-people** - Update team/advisors  
**@create-expert** - Create custom domain expert  
**@create-flow** - Create custom workflow command

---

## Quick Start

```bash
# Install
npx @fwd-ai/pro install

# First command
@genna help me create a roadmap

# Check status
@rt check status

# Update context
@update-project
```

---

**For detailed guides, see:** `user-docs/user-guide/`

