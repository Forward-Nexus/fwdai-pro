# System Command: Update KB

**Command:** `@update-kb` or `@genna @update-kb`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Update your project knowledge base with new facts and context

---

## What This Command Does

Updates `project/project-kb.md` with new project facts:
- Project description and type
- Current stage and goals
- Tech stack and tools
- Team size and structure
- Work focus and constraints
- Recent milestones

**Note:** For comprehensive updates that scan your whole project and update multiple files, use `@update-project` instead.

---

## When to Use This

Use `@update-kb` when you just need to update project facts:
- ✅ Quick fact updates
- ✅ Single section changes
- ✅ Minor corrections

Use `@update-project` when:
- ✅ Major changes (stage, team, goals)
- ✅ Want AI to scan and detect changes
- ✅ Multiple files need updating

---

## How It Works

### Step 1: Genna Opens Current KB
```
User: @update-kb

Genna:
📖 Opening your project knowledge base...

Current facts:
- Stage: Launched
- Users: 1,200 active users
- Tech: React Native, Node.js
- Goal: 10K users by Q1 2026

What needs updating?
```

### Step 2: You Describe Changes
```
User: We just hit 2,500 users and added TypeScript

Genna:
Got it! Updating:
- Users: 1,200 → 2,500 active users
- Tech: Adding TypeScript to stack

Anything else to update?
> No, that's it
```

### Step 3: Genna Updates KB
```
Genna:
✅ Updated project-kb.md

Changes made:
- Users: 2,500 active users
- Tech stack: React Native, Node.js, TypeScript

Your project KB is up to date! 🎉
```

---

## Example Usage

### Scenario 1: User Count Update
```
@update-kb

We just hit 5,000 users!

→ Genna updates user count
→ Done!
```

### Scenario 2: Tech Stack Addition
```
@update-kb

Added Supabase for backend

→ Genna adds to tech stack
→ Done!
```

### Scenario 3: Goal Update
```
@update-kb

New goal: Launch web version by Q2

→ Genna updates goals
→ Done!
```

---

## What Gets Updated

**Always:**
- ✅ `project/project-kb.md` - Project facts only

**Won't Touch:**
- ❌ `project/mission.md` (use `@update-mission`)
- ❌ `project/people.md` (use `@update-people`)
- ❌ `project/founder-profile.md` (use `@update-fp`)

---

## Tips

**For quick updates:**
- Use `@update-kb` for single facts
- Fast and focused

**For comprehensive updates:**
- Use `@update-project` to scan and update everything
- Genna detects changes automatically
- Updates multiple files as needed

**For manual edits:**
- Just edit `project/project-kb.md` directly
- Experts will see changes automatically

---

## Related Commands

- `@update-project` - Comprehensive scan and update (all files)
- `@update-mission` - Update vision and mission
- `@update-people` - Update team and relationships
- `@update-fp` - Update founder profile

---

**Keep your project facts current!** 📊

