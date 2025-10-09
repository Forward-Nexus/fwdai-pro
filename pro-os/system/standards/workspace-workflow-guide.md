# Workspace & Whiteboard Workflow Guide for Experts

**Version:** 2.0  
**Date:** October 8, 2025  
**Purpose:** Standard workflow for all FWD PRO experts on workspaces and whiteboards

---

## 🎯 The System Architecture

```
WORKSPACES (detailed progress story)
    ↓ informs
WHITEBOARDS (high-level dashboard)
    ↓ informs
CHECKLIST (action items for founder)
```

**Your Role as an Expert:**
- Work IN workspaces (detailed documentation)
- Update whiteboards (high-level status)
- Add to checklist when founder input needed

---

## 📋 What Are Workspaces?

**Workspaces are comprehensive progress documents inspired by BMAD Method story documents.**

### Key Principles:

1. **ONE workspace per major topic** - Consolidate, don't fragment
2. **COMPREHENSIVE** - Include ALL related work, decisions, context
3. **BMAD-Inspired Structure** - Story, AC, Tasks, Expert Collaboration
4. **Living Documents** - Update as work progresses
5. **Can be LONG** - That's the point! Full context preserved

### Workspace Structure (BMAD-Inspired):

```markdown
## Status - Track workflow progression
## Story - "As a/I want/so that" OR "Problem/Solution/Benefit"
## Acceptance Criteria - What "done" looks like
## Tasks/Subtasks - Breakdown with AC references
## Expert Collaboration - Your work + handoffs
## Key Decisions - Decision log with rationale
## Blockers & Issues - Track what's preventing progress
## Quality Review - Formal QA before Done
## Completion Summary - Wrap-up and lessons learned
```

---

## 🔄 Expert Workflow

### Step 1: Check for Existing Workspace

**Before creating a new workspace, ALWAYS check if one exists:**

```bash
# Look in 0-roundtable/workspace/
# Search for topic-related files
```

**If workspace exists:**
- OPEN it and ADD your section
- DON'T create a second workspace for the same topic

**If no workspace exists:**
- Create ONE comprehensive workspace
- Name it descriptively: `topic-name-complete.md`
- Use template: `pro-os/templates/roundtable/workspace/workspace-template.md`

---

### Step 2: Add Your Expert Section

**Every expert gets their own section in the workspace:**

```markdown
### {{Your Name}}'s Work

**Role:** [Your specific contribution]  
**Date:** {{date}}  
**Status Update:** [Current state]

**Work Completed:**
[Detailed notes - can be LONG! That's good!]

**Key Decisions Made:**
- Decision 1 with rationale
- Decision 2 with rationale

**Research & References:**
- Best practices researched
- Resources consulted

**Progress on Tasks:**
- ✅ Task X - Complete
- 🔄 Task Y - In progress

**Notes & Context:**
[Important context for future collaborators]
```

**Your section can be as LONG as needed** - include ALL:
- Work you did
- Research you performed
- Decisions you made and WHY
- Options you considered
- Context others need to understand

---

### Step 3: Hand Off Work (If Applicable)

**When passing work to another expert:**

```markdown
### Handoff to {{Next Expert}}

Hey {{expert}}! [Brief status]

**Complete Context:**
[LONG context dump - everything they need]

**What's Been Done:**
- ✅ Item 1 (AC: #)
- ✅ Item 2 (AC: #)

**What You Need to Do:**
- [ ] Next step 1 (AC: #, Task: #)
- [ ] Next step 2 (AC: #, Task: #)

**Important Considerations:**
- ⚠️ Thing to watch for
- 💡 Helpful tip

**Resources:**
- File/link 1: [location]
- File/link 2: [location]

**Questions?** Tag me! - {{your name}}
```

**Handoffs should be COMPLETE, not brief** - err on side of too much context.

---

### Step 4: Update Status & Tasks

**As you work, update the workspace:**

1. **Status Section** - Check off workflow progression
2. **Tasks Section** - Check off completed tasks
3. **Change Log** - Add entry for your updates

```markdown
## Status
- [x] Draft
- [x] Approved
- [x] InProgress ← **CURRENT** ({{your name}} working)
- [ ] Review
- [ ] Done
```

```markdown
## Tasks
- [x] Task 1 - Complete by {{your name}}
- [x] Task 2 - Complete by {{your name}}
- [ ] Task 3 - Assigned to {{next expert}}
```

---

### Step 5: Document Decisions

**Every significant decision should be logged:**

```markdown
## Key Decisions Log

| Date | Decision | Rationale | Trade-offs | Decided By | Related AC |
|------|----------|-----------|------------|------------|------------|
| {{date}} | [What decided] | [Why] | [What rejected] | {{your name}} | AC: 1 |
```

**What counts as a decision:**
- Choosing approach A over approach B
- Setting a specific direction or strategy
- Making trade-off choices
- Anything future collaborators need to understand "why"

---

### Step 6: Track Blockers

**If something prevents progress:**

```markdown
## Blockers & Issues

| # | Blocker | Raised By | Date | Urgency | Status |
|---|---------|-----------|------|---------|--------|
| 1 | [Description] | {{your name}} | {{date}} | High | Open |

**Blocker Details:**
- **Description:** [Full explanation]
- **Impact:** [What's affected]
- **Needs:** [What's required to resolve]
- **Assigned To:** [Who's resolving]
```

---

### Step 7: Update YOUR Whiteboard Section

**After updating workspace, update whiteboards:**

Location: `0-roundtable/whiteboards.md`

Find your expert section and update:

```markdown
## {{Your Icon}} {{Your Name}}'s Whiteboard

### Active Work
- **{{Workspace Title}}** - {{status emoji}} {{status}}
  - Workspace: [link](workspace/workspace-name.md)
  - Deliverable: [link](../documents/category/file.md)
  - Quick note: [One-line current status]
  - Next: [What's next]

### Completed This Month
- ✅ {{Completed work}} - {{date}} - [Brief outcome]
```

**Status Emojis:**
- ⚪ Draft
- ✅ Approved
- 🔄 InProgress
- 📋 Review
- ✅ Done

---

### Step 8: Add to Checklist (If Needed)

**If founder needs to take action:**

Location: `0-roundtable/{{founder-name}}-checklist.md`

Add to appropriate priority section:

```markdown
| ✓ | Task | From | What to Do | Link/Notes | Added |
|---|------|------|------------|------------|-------|
| ☐ | **{{Action needed}}** | {{Your name}} | [Clear instructions] | [Workspace link] | {{date}} |
```

**Only add to checklist if founder MUST do something** - don't clutter with FYI items.

#### Team vs Individual Checklists

**Individual Checklist** (`{{person-name}}-checklist.md`):
- One specific person needs to do something
- Decision from that person only
- Action specific to their role
- Their personal todo list

**Team Checklist** (`team-checklist.md`):
- Multiple people need to coordinate
- Decision requires 2+ people
- Handoff between team members
- Blocking multiple people
- Team meeting/discussion needed
- Shared coordination items

**Examples:**

*Individual:* "Ward: Review campaign messaging" → `ward-checklist.md`  
*Team:* "Ward + Sarah: Decide on auth provider" → `team-checklist.md`  
*Team:* "Handoff: Denny → Ada (spec ready)" → `team-checklist.md`

**Note:** Solo projects won't have `team-checklist.md` - everything goes to the founder's individual checklist.

---

## 🎨 Whiteboard Quick Reference

### Expert Activity At-A-Glance Table

**You should NOT update this table** - it's a high-level summary.  
**DO update your detailed whiteboard section below it.**

### Your Expert Whiteboard Section

**Location:** Find your section in `whiteboards.md`

**Update when:**
- ✅ You start work on a new workspace
- ✅ Status changes (Draft → InProgress → Review → Done)
- ✅ Work is completed
- ✅ Major progress or blockers occur

**Keep updated:**
- Active Work list
- Completed This Month list
- Handoffs section (what you're passing to others)

---

## 📝 Quality Standards

### Before Marking Workspace as "Review" or "Done":

- [ ] All your work documented in expert section
- [ ] All decisions logged with rationale
- [ ] All tasks you completed are checked off
- [ ] Handoff section complete (if handing off)
- [ ] Blockers documented (if any)
- [ ] Whiteboard updated with current status
- [ ] Checklist updated (if founder action needed)
- [ ] Change log entry added

### When Handing Off:

- [ ] Complete context provided (not just brief notes)
- [ ] All files/resources linked
- [ ] Clear next steps defined
- [ ] Referenced AC and Task numbers
- [ ] Open questions noted

### Before Marking "Done":

- [ ] All acceptance criteria met
- [ ] All tasks completed
- [ ] Quality review performed (if applicable)
- [ ] Completion summary written
- [ ] Deliverable finalized in `documents/`
- [ ] Whiteboard moved to "Completed This Month"

---

## ❌ Common Mistakes to Avoid

### DON'T:
- ❌ Create multiple workspaces for same topic - CONSOLIDATE
- ❌ Make handoffs too brief - provide COMPLETE context
- ❌ Forget to update whiteboards after workspace changes
- ❌ Skip documenting decisions and "why"
- ❌ Work without a workspace on complex deliverables
- ❌ Leave blockers undocumented
- ❌ Update only workspace OR whiteboard (update both!)

### DO:
- ✅ Check for existing workspace before creating new one
- ✅ Add comprehensive notes in your expert section
- ✅ Update workspace AS you work (not after)
- ✅ Document all decisions with rationale
- ✅ Provide complete handoff context
- ✅ Update both workspace AND whiteboard
- ✅ Add to checklist only when founder action truly needed

---

## 🔍 Examples

### Example 1: Starting Work on Existing Workspace

1. Open `workspace/kickstarter-campaign-complete.md`
2. Find "Expert Collaboration" section
3. Add your section: `### Benji's Work (Campaign Page)`
4. Document your work as you do it
5. Update status when you start: InProgress
6. Update your whiteboard section
7. Continue updating as you progress

### Example 2: Handing Off Work

1. Complete your section with ALL context
2. Add handoff section: `### Handoff to Ada`
3. Provide COMPLETE context (can be long!)
4. List what's done and what's next
5. Update workspace status if appropriate
6. Update whiteboard to show handoff
7. Tag next expert in workspace or notify them

### Example 3: Completing Work

1. Check all your tasks are complete
2. Verify all AC met (your portion)
3. Add completion notes to your section
4. Update status (Review or Done as appropriate)
5. Update whiteboard: move to "Completed This Month"
6. Add completion summary if final expert

---

## 🎯 Completion & Archival

**CRITICAL RULE:** Experts NEVER mark work as ✅ Complete OR archive workspaces without explicit founder approval.

### When Founder Approves Work:

**Step 1: Clean the Deliverable**
- Remove ALL progress notes
- Remove "Notes (Remove when approved)" sections  
- Update status: ✅ Complete
- Add completion date and founder approval

**Step 2: Update Workspace**

**Multi-deliverable workspace:**
- Move completed section to bottom under "✅ Completed Items"
- Keep workspace active (no archival needed)
- Continue with remaining work

**Single-deliverable workspace:**
- Mark workspace as complete
- **ASK founder:** "This workspace is complete. Would you like me to archive it?"
- **If founder says YES:** Move to `workspace/_archive/[name].md`
- **If founder says NO:** Keep active for reference
- **NEVER archive without explicit permission**

**Step 3: Update Whiteboard**
- Remove from active work
- Add to "Completed This Month"
- Update at-a-glance table (or let it be updated)

**Step 4: Update Checklist**
- Mark related checklist items as ✅ complete
- Move to "Recently Completed" section

### Why Ask Before Archiving?

- Founder might want to reference it frequently
- Founder might want to add notes later
- **Founder might remember missing work** → Discovers new tasks!
- Archival is OPTIONAL, not automatic

**Example conversation:**
```
AI: "This workspace is complete. Archive it?"
Founder: "Wait, did we handle password reset emails?"
AI: "No, I'll add that task now!"
→ One question revealed forgotten work
```

### Status Lifecycle:

⚪ Draft → 🔄 InProgress → 📋 Review (Expert done, awaiting approval) → **Founder approves** → ✅ Complete → (Optional) Archive

---

## 🤝 Philosophy: Human-in-the-Loop

**Why we ask before archiving/completing:**

FWD PRO uses "strategic de-automation" - asking for approval on key decisions actually leads to MORE automation overall, not less.

### The Paradox:
- **More control = More trust**
- **More trust = More delegation**  
- **More delegation = More automation**

### When AI Asks "Archive this?" or "Mark complete?"

This isn't a limitation - it's a feature that:

1. **Prevents errors** (like auto-archiving active work or auto-denying insurance claims)
2. **Discovers missing work** (founder realizes more needs to be done)
3. **Expands scope naturally** (conversation reveals hidden tasks)
4. **Builds trust** (founder knows AI won't surprise them)

### The Result:

Founders who feel in control delegate MORE to AI, not less. Strategic check-ins lead to better outcomes than full automation.

**Real Example:**
```
AI: "Archive auth workspace?"
Founder: "No, we still need SSO, 2FA, and audit logging"
AI: "Got it! Adding those three tasks now."
```
→ One question revealed 3 forgotten tasks. More work automated, better result.

### The UnitedHealthcare Lesson:

**Their mistake:**
- AI auto-denies claims (no human review)
- Result: Wrong decisions, lawsuits, deaths

**FWD PRO approach:**
- AI proposes, human approves
- Result: Trust, better outcomes, more delegation

**The insight:** Sometimes you need to SLOW DOWN one step to SPEED UP the whole process.

---

## 📚 Reference Documents

**Workspace Template:**
- `pro-os/templates/roundtable/workspace/workspace-template.md`

**Detailed Guides:**
- `pro-os/user-docs/user-guide/workspace-usage-guide.md` - Complete usage guide
- `documents/tech/whiteboards-checklist-enhancements.md` - Whiteboard structure

**Standards & Checklists:**
- `pro-os/system/standards/workflow-standards.md`
- `pro-os/system/checklists/` - Various quality checklists

**Expert Profiles:**
- Your profile: `pro-os/experts/{{your-name}}.md`
- All experts: `pro-os/experts/`

---

## 🎯 Quick Checklist

**Every time you work:**

1. [ ] Check if workspace exists (don't duplicate!)
2. [ ] Open/create workspace using template
3. [ ] Add/update your expert section
4. [ ] Document work, decisions, context
5. [ ] Update status and tasks
6. [ ] Update YOUR whiteboard section
7. [ ] Add to checklist if founder action needed
8. [ ] Hand off with complete context if passing work

**Remember:** Workspaces are COMPREHENSIVE and can be LONG - that's the point!

---

**Last Updated:** October 8, 2025  
**For:** All FWD PRO Experts  
**Version:** 2.0 (BMAD-Inspired Structure)

