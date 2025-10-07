---
command: newthread
aliases: [continue, handoff]
purpose: "Prepare context for continuing work in a new thread"
version: 1.0
---

# New Thread (@newthread)

## Purpose

When a thread gets too long and context starts degrading, use this command to prepare a clean handoff message for the next thread.

**This command:**
1. Updates your current work in Roundtable
2. Saves your project-notes.md
3. Saves any work in progress
4. Generates a copy-pasteable message for the new thread

---

## When to Use

- Thread is getting long (losing context)
- AI responses are degrading
- Before hitting token limits
- Want a fresh start with full context

---

## How to Use

**Simple:**
```
@newthread
```

**That's it!** The current expert will wrap up and give you a message to copy.

---

## What This Command Does

### Step 1: Save Current State
- Update Roundtable with current status
- Save `project-notes.md` with latest understanding
- Save any work in progress to appropriate location
- Update Checklist if needed

### Step 2: Generate Continuation Message

Create a simple, focused message containing:

**Format:**
```markdown
✅ All saved and ready for new thread!

---

📋 **Copy this message to your new thread:**

Hey [EXPERT]! Continuing from previous thread.

**What we were working on:**
[Brief summary of current work]

**What we just completed:**
- [Specific accomplishment 1]
- [Specific accomplishment 2]

**What's next:**
[Clear next steps]

**Files you need:**
- @[file1] (why)
- @[file2] (why)
- @0-ROUNDTABLE.md (current state)

**Context notes:**
[Any important context to remember]

Ready to continue where we left off!
```

---

## Guidelines

### Keep It Simple
- Focus on what the NEXT thread needs to know
- Don't rehash old history
- Be specific about next actions

### Be Specific About Files
- List exact files to read first
- Explain WHY each file matters
- Always include Roundtable

### Clear Next Steps
- What should happen immediately?
- Any blockers or decisions needed?
- Who else needs to be involved?

### Important Context Only
- Deadlines or constraints
- Recent decisions
- Open questions
- Technical choices that matter

---

## Example Output

```markdown
✅ All saved and ready for new thread!

---

📋 **Copy this message to your new thread:**

Hey Ada! Continuing from previous thread.

**What we were working on:**
Updating the FWD PRO system to clarify the difference between handoffs/ (inter-expert communication) and documents/ (deliverables).

**What we just completed:**
- Updated all 6 expert files with correct workspace paths
- Fixed FWD-PRO-SYSTEM-DESIGN.md with proper architecture
- Clarified that deliverables go in documents/ folder (founder organizes)
- Removed "creative bestie" language for professionalism

**What's next:**
Discussing whether to create the @newthread command itself (meta!)

**Files you need:**
- @FWD-PRO-SYSTEM-DESIGN.md (system overview with latest changes)
- @fwdai-pro/pro-os/agents/ (all updated expert files)
- @0-ROUNDTABLE.md (current work status)

**Context notes:**
- We're preparing for launch, cleaning up documentation
- Focus is on professional tone while keeping warmth
- System is ~85% complete, need to implement Agent-OS learnings next

Ready to continue where we left off!
```

---

## Quality Checklist

Before generating the message, ensure:

- [ ] Roundtable is updated with current work
- [ ] Your project-notes.md reflects latest understanding
- [ ] Any in-progress work is saved
- [ ] Message is clear and actionable
- [ ] File references use @ syntax
- [ ] Next steps are specific
- [ ] No unnecessary history/context
- [ ] Easy to copy/paste

---

## Notes

- This is NOT for closing a work session (that's just updating Roundtable)
- This is NOT for expert-to-expert handoffs (that's the handoffs/ folder)
- This IS for continuing YOUR work in a fresh thread
- Keep the message SHORT - new thread will read files for details

---

**Remember:** The goal is context preservation, not comprehensive documentation. Give the next thread exactly what it needs to continue seamlessly.

