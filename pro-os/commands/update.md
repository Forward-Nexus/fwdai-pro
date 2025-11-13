# Update Command

**Command:** `@update`  
**Type:** Universal modification command  
**Purpose:** Modify or improve existing work

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @update [thing]`

**Examples:**

- `@denny @update the spec with new requirements`
- `@ada @update the login feature to add 2FA`
- `@lyna @update the pitch deck with new metrics`
- `@genna @update the product roadmap`

---

## AI Instructions

### Step 1: Understand What to Update

**Clarify:**

- What specifically needs updating?
- What's changing? (new requirements, improvements, fixes)
- Why the update? (new information, feedback, change in direction)
- How extensive? (minor tweak vs major revision)

### Step 2: Load Current Version

**⚠️ CRITICAL: Update the EXISTING file - don't create a v2!**

**Find and read the existing work:**

- Check `documents/[category]/` for the deliverable
- Check `roundtable/workspace/` for the collaboration file
- Read the existing content thoroughly
- Understand what's there now

**NEVER create:**

- ❌ `pitch-deck-v2.md`
- ❌ `auth-spec-updated.md`
- ❌ `design-final.md`

**ALWAYS update:**

- ✅ `pitch-deck.md` (the existing file)
- ✅ `auth-spec.md` (directly)
- ✅ Git handles version history, not filenames

### Step 3: Understand the Changes

**What's changing:**

- New information to add?
- Sections to revise?
- Content to remove?
- Structure to reorganize?

**Why it's changing:**

- Document the rationale
- Note what triggered the update

### Step 4: Research if Needed

**If new requirements or approach:**

- Search current best practices
- Check if standards have changed
- Verify new information

### Step 5: Make Updates

**Use search_replace to update existing file:**

- Modify specific sections
- Add new content
- Remove outdated information
- Update metadata (updated date, etc.)

**Maintain quality:**

- Apply appropriate standards
- Keep consistent style
- Ensure completeness

### Step 6: Document Changes

**Update workspace:**

- What was changed
- Why it was changed
- Date of update
- Who requested/approved

**If major update:**

- Note key changes in workspace
- Update whiteboard status

### Step 7: Quality Check

**Verify:**

- All requested changes made
- No unintended modifications
- Still meets original requirements plus new ones
- Quality maintained or improved

### Step 8: Deliver

**Report changes:**

- What was updated
- Key changes made
- Rationale for changes
- Ready for use/review

---

## Key Behaviors

**Update in place:**

- Modify existing files
- Don't create versions
- Git tracks history

**Understand before changing:**

- Read current version fully
- Understand why it was that way
- Don't break what works

**Document changes:**

- Note what changed and why
- Track in workspace
- Update metadata

**Maintain quality:**

- Apply standards consistently
- Preserve good parts
- Improve as you update

---

## Notes

- Update scope adapts to what's being modified
- Expert domain expertise guides how to update
- Always update existing file, never create v2
- Document rationale for changes
