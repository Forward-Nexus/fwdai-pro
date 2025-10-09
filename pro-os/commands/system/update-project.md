# Quick Command: Update Project

**Command:** `@update-project` or `@genna @update-project`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Review and update project information after things have changed

---

## What This Command Does

Scans your project, reviews current context, identifies what's changed, and helps you update:
- `project/project-kb.md` - Project facts, goals, stage, tech stack
- `project/founder-profile.md` - Your preferences (if needed)
- `project/mission.md` - Vision and purpose (if evolved)
- `project/people.md` - Team, advisors, investors
- `.fwdpro/config.yaml` - System configuration

---

## When to Use This

Run `@update-project` when:
- ✅ **Stage changed** - MVP → Launched → Scaling
- ✅ **Goal shifted** - Changed timeline, pivoted direction
- ✅ **Raised money** - Got funding, need to update budget/stage
- ✅ **Team changed** - Hired someone, got advisor, added partner
- ✅ **Tech stack changed** - Switched frameworks, added tools
- ✅ **Work focus changed** - Started fundraising, added marketing
- ✅ **Major milestone** - Launched, hit user goal, closed deal
- ✅ **Context drift** - Project KB feels outdated

---

## How It Works

### Step 1: Scan & Review
```
User: @update-project

Genna:
🔍 Scanning project for changes...

Current project context (from project-kb.md):
  - Stage: MVP
  - Goal: Launch by end of year
  - Users: 50 beta testers
  - Tech: React Native, Node.js, PostgreSQL
  - Last updated: 3 months ago

Detected changes:
  ✓ Found 500+ commits since last update
  ✓ Found new dependencies in package.json
  ✓ Found README mentions "launched" and "1,200 users"
  ✓ Found pitch-deck.md in documents/investor-materials/

Potential updates needed:
  1. Stage: MVP → Launched ✓
  2. Users: 50 → 1,200 ✓
  3. Work types: Add "investor_materials" (found pitch deck) ✓
  4. Tech stack: Added TypeScript ✓
  5. Goal: May need update (launch complete?)

Review current files? [Yes] [Skip to questions]
```

### Step 2: Ask Clarifying Questions
```
Genna:
Let me confirm what's changed:

1. **Stage Update**
   Current: MVP
   Detected: Launched (from README)
   Update to "Launched"? [Yes] [No] [Other]
   > Yes

2. **User Count**
   Current: 50 beta testers
   Detected: 1,200 users (from README)
   Update to "1,200 users"? [Yes] [No] [Other]
   > Yes

3. **Goal**
   Current: "Launch by end of year"
   You've launched! What's the new goal?
   > Get to 10,000 users by Q1 2026

4. **Work Types**
   Current: Building something ✓
   Detected: Investor materials (found pitch-deck.md)
   Add "investor_materials" work type? [Yes] [No]
   > Yes

5. **Team Changes**
   Any new team members, advisors, or investors? [Yes] [No]
   > Yes - hired a designer, got an advisor

Tell me about them:
   > Sarah (Designer), John Smith (advisor - former CTO at TechCo)

6. **Tech Stack**
   Current: React Native, Node.js, PostgreSQL
   Detected: Added TypeScript
   Update to "React Native, Node.js, PostgreSQL, TypeScript"? [Yes]
   > Yes

7. **Budget/Funding**
   Any funding changes? [No change] [Raised money] [Other]
   > No change

8. **Constraints**
   Current: "Need HIPAA compliance, launching by end of year"
   Launch complete! Remove deadline constraint? [Yes] [Keep] [Update]
   > Yes, remove deadline. Keep HIPAA.
```

### Step 3: Confirm Changes
```
Genna:
📋 Summary of updates:

project-kb.md:
  - Stage: MVP → Launched
  - Users: 50 → 1,200
  - Goal: "Launch by end of year" → "Get to 10,000 users by Q1 2026"
  - Work types: Add "investor_materials"
  - Tech stack: Add "TypeScript"
  - Constraints: Remove launch deadline, keep HIPAA

people.md:
  - Add: Sarah (Designer)
  - Add: John Smith (advisor - former CTO at TechCo)

config.yaml:
  - Activate Lyna (funding strategist) - investor work detected

Apply these updates? [Yes] [No] [Let me edit]
> Yes
```

### Step 4: Execute Updates
```
Genna:
✅ Updated project-kb.md
✅ Updated people.md
✅ Updated config.yaml (activated Lyna)
✅ Added update to changelog

📢 Notifying experts of changes...
  - Denny: Tech stack updated (TypeScript added)
  - Ada: Tech stack updated
  - Lyna: Activated! Ready to help with investor materials
  - All experts: New goal, stage, and context

Your project context is now up to date! 🎉

Next steps:
  - Review updated files (if you want to adjust anything)
  - Lyna is now available for investor work (@lyna)
  - Consider updating mission.md if your vision has evolved
```

---

## Example Usage

### Scenario 1: Just Launched
```
@update-project

→ Genna scans, detects launch
→ Updates stage, users, goal
→ Removes launch deadline
→ Done!
```

### Scenario 2: Raised Funding
```
@update-project

→ Genna asks about funding
→ You: "Raised $500K seed"
→ Updates budget, stage
→ Adds investors to people.md
→ Done!
```

### Scenario 3: Tech Stack Change
```
@update-project

→ Genna detects new dependencies
→ Confirms tech stack changes
→ Updates project-kb.md
→ Notifies Denny/Ada
→ Done!
```

### Scenario 4: Pivot
```
@update-project

→ You explain the pivot
→ Genna updates goal, description
→ May update work types
→ Updates mission.md if needed
→ Done!
```

---

## What Gets Updated

### Always Scanned:
- ✅ README.md (for project changes)
- ✅ package.json / dependencies (for tech changes)
- ✅ Git history (for activity/stage)
- ✅ Documents folder (for new work types)
- ✅ Current project-kb.md (compare to reality)

### May Update:
- ✅ `project/project-kb.md` - Most common
- ✅ `project/people.md` - If team changed
- ✅ `project/mission.md` - If vision evolved
- ✅ `.fwdpro/config.yaml` - If work types changed
- ✅ System changelog - Always logs updates

### Won't Touch:
- ❌ `founder-profile.md` (global, rarely changes - update manually)
- ❌ `roundtable/` files (active work, not context)
- ❌ `documents/` (your deliverables)

---

## Tips

**Run periodically:**
- After major milestones
- Every 1-3 months (if lots of activity)
- When context feels stale
- Before starting new major work

**Be honest in answers:**
- Genna uses this to help ALL experts understand your project
- Accurate context = better expert advice
- It's okay if things changed dramatically (that's growth!)

**You can always edit manually:**
- If you prefer direct editing, go for it
- This command is for convenience
- Experts read the files, not the command history

**Activates/Deactivates experts:**
- If you add "investor_materials" work type → Lyna activates
- If you remove work type → Expert stays available but less active
- Can always override in config.yaml

---

## Alternative: Manual Update

Prefer to update manually? Just edit:
- `project/project-kb.md`
- `project/people.md`
- `project/mission.md`
- `.fwdpro/config.yaml`

Experts automatically see changes!

---

## Related Commands

- `@genna review project context` - Review without updating
- `@create pitch deck` - If adding investor work
- `@rt check status` - Weekly status check (different focus)

---

**Keep your project context current, keep your experts effective!** 🚀

