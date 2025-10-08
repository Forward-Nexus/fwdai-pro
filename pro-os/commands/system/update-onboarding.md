# System Command: Update Onboarding

**Command:** `@update-onboarding` or `@genna @update-onboarding`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Re-run the onboarding wizard to update your setup

---

## What This Command Does

Re-runs the FWD PRO onboarding process to update:
- Your work types (activate/deactivate experts)
- Your communication style
- Your project information
- Your goals and constraints
- Domain expert creation

This is essentially "re-onboarding" but keeps your existing work intact.

---

## When to Use This

Run `@update-onboarding` when:
- ✅ **Major project change** - Completely different direction
- ✅ **Work type shift** - Started fundraising, stopped coding, added legal work
- ✅ **Communication style changed** - Want experts to communicate differently
- ✅ **Need domain expert** - Didn't create one initially, now you want one
- ✅ **Complete reset** - Want to reconfigure everything

---

## How It Works

```
User: @update-onboarding

Genna:
🔄 Re-running FWD PRO onboarding wizard...

I'll ask you the setup questions again. Your current work will be preserved.

Current setup:
  - Work types: Building something
  - Active experts: Genna, Denny, Ada
  - Communication style: Casual/enthusiastic
  - Domain expert: None

Would you like to:
  1. Update work types only (quick)
  2. Update communication style only (quick)
  3. Add/change domain expert only (quick)
  4. Full re-onboarding (all questions)

> 1 - Update work types

Great! What are you working on now? (select all that apply)
[ ] Building something (app, website, platform, code)
[✓] Investor materials (pitch deck, business plan)  ← NEW!
[ ] Marketing/content (landing page, campaigns, social)
[ ] Legal/compliance (contracts, policies, filings)
[ ] Operations/strategy (planning, processes, hiring)

> Selected: Building something, Investor materials

Perfect! This will:
  - Keep Genna, Denny, Ada active
  - Activate Lyna (Funding Strategist) ← NEW!
  - Update config.yaml
  - Update project-kb.md

Apply changes? [Yes] [No]
> Yes

✅ Updated work types
✅ Activated Lyna
✅ Updated config.yaml
✅ Updated project-kb.md

Lyna is now available! Try: @lyna help me with my pitch deck

Your existing work is preserved:
  - roundtable/workspace/ - All workspaces intact
  - documents/ - All deliverables intact
  - Experts just have updated context
```

---

## What Gets Updated

### Quick Updates (Options 1-3):
- **Work types only:** Activates/deactivates experts
- **Communication style only:** Changes how all experts talk to you
- **Domain expert only:** Creates/replaces domain expert

### Full Re-onboarding (Option 4):
- All onboarding questions again
- Can change everything
- Like fresh install but keeps your work

### Always Preserved:
- ✅ `roundtable/workspace/` - All your active work
- ✅ `roundtable/workspace/archive/` - All completed work
- ✅ `documents/` - All your deliverables
- ✅ Whiteboards and checklists

### Gets Updated:
- ✅ `.fwdpro/config.yaml` - System configuration
- ✅ `project/project-kb.md` - Project context
- ✅ `project/founder-profile.md` - Your preferences (if changed)
- ✅ Active expert list

---

## Example Scenarios

### Scenario 1: Started Fundraising
```
@update-onboarding

→ Select: Update work types
→ Add "investor_materials"
→ Lyna activates
→ Done! @lyna is ready
```

### Scenario 2: Communication Style Change
```
@update-onboarding

→ Select: Update communication style
→ Was: Casual/enthusiastic
→ Now: Direct/no-fluff
→ All experts adjust tone immediately
```

### Scenario 3: Need Domain Expert
```
@update-onboarding

→ Select: Add/change domain expert
→ Create "recovery specialist"
→ Expert generated and activated
→ Done! @bonnie-jo is ready
```

### Scenario 4: Complete Pivot
```
@update-onboarding

→ Select: Full re-onboarding
→ Answer all questions again
→ Everything reconfigures
→ Work preserved, context updated
```

---

## Quick Updates vs. Full Re-onboarding

| Change Needed | Use Quick Update | Use Full Re-onboarding |
|---------------|------------------|------------------------|
| Add/remove work type | ✅ Quick (option 1) | |
| Change communication style | ✅ Quick (option 2) | |
| Create domain expert | ✅ Quick (option 3) | |
| Change project name | | ✅ Full |
| Change founder profile | | ✅ Full |
| Change AI tool | | ✅ Full |
| Change everything | | ✅ Full |

---

## Alternative: Manual Changes

Prefer to edit manually?
- Work types: Edit `.fwdpro/config.yaml` (work_types section)
- Communication style: Edit `project/founder-profile.md`
- Domain expert: Use `@genna create domain expert for [domain]`

This command is for convenience!

---

## Safety

**Your work is safe:**
- This command NEVER deletes workspaces or documents
- Only updates configuration and context
- Can always undo by editing files manually
- Previous config backed up to `.fwdpro/config.backup.yaml`

**Can't break anything:**
- If something goes wrong, edit files manually
- Or run `@update-onboarding` again
- Or reinstall FWD PRO (preserves work)

---

## Related Commands

- `@update-project` - Update project facts (stage, goals, etc.)
- `@genna create domain expert` - Just add domain expert
- CLI: `npx @fwd-ai/pro configure` - CLI version (future)

---

**Need to reconfigure? Re-onboarding is safe and easy!** 🚀

