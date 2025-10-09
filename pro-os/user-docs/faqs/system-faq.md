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

**Command** - Pre-built workflow or instruction (@create-spec, @rt, etc.)

**Domain Expert** - Custom expert YOU create for your industry

**Global Profile** - Your personal preferences across ALL projects

**Project KB** - Project-specific knowledge base

---

## File Structure (Quick)

```
.fwdpro/
├── pro-os/              System core (don't touch!)
├── your-experts/         Your favorite expert shortcuts
├── your-commands/       Your favorite command shortcuts
├── project/             Project context & config
├── roundtable/          Collaboration space
└── documents/           Final clean outputs
```

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

- Building something (Denny + Ada)
- Investor materials (Lyna)
- Marketing/content (Benji)
- Legal/compliance (Elle)
- Strategic planning (Genna)

Determines which experts activate!

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

**@update-project** - Scan & update project context (most common!)  
**@update-founder-profile** - Change communication/preferences  
**@update-mission** - Update your "why"  
**@update-people** - Update team/advisors  
**@show-projects** - Portfolio dashboard  
**@update-onboarding** - Re-run setup wizard

---

## Quick Start

```bash
# Install
npx @fwd-ai/pro install

# First command
@genna help me create a roadmap

# Check status
@rt-update

# Update context
@update-project
```

---

**For detailed guides, see:** `documentation/user-guide/`

