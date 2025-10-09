# Workspace Usage Guide

**Version:** 1.0  
**Date:** October 8, 2025  
**Purpose:** Ensure FWD PRO workspaces are being created and used for all collaborative work

---

## What Are Workspaces?

**Workspaces are detailed progress documents that track ALL work, decisions, and context for a work item.**

Think of it like this:

```
WORKSPACES (detailed progress story)
    ↓ informs
WHITEBOARDS (high-level dashboard)
    ↓ informs
CHECKLIST (action items for founder)
```

- **Workspaces** = Detailed story of work happening (can be long, that's good!)
- **Whiteboards** = High-level overview of all expert activity
- **Checklist** = Specific action items for founder
- **Documents** = Clean final deliverables that come out of the work

---

## Why Workspaces Matter

### Without Workspaces:
- ❌ Work happens scattered across conversations
- ❌ Context gets lost between sessions
- ❌ Hard to track who did what and why
- ❌ Difficult to hand off work between experts
- ❌ No clear status tracking

### With Workspaces:
- ✅ All collaboration in one place
- ✅ Complete context preserved
- ✅ Clear ownership and status
- ✅ Easy handoffs between experts
- ✅ Decision history tracked
- ✅ Progress visible on whiteboards

---

## When to Create a Workspace

**Create ONE COMPREHENSIVE workspace for each major topic/deliverable that consolidates ALL related work.**

### Key Principle:
**Workspaces should be COMPREHENSIVE, not fragmentary.**

A workspace is the MASTER document for everything related to that topic:
- All strategy and research
- All content and drafts
- All decisions and rationale
- All expert collaboration
- All progress and blockers
- References to ALL related files

### Example Workspaces:

1. **Feature Development** (`user-authentication-complete.md`)
   - Consolidates: Spec, implementation, testing, all decisions
   - References: All technical docs, code files
   - Captures: Denny's spec, Ada's implementation, QA results
   - ONE workspace for EVERYTHING auth-related

2. **Marketing Campaign** (`product-launch-campaign-complete.md`)
   - Consolidates: Strategy, content, channels, timeline, results
   - References: All marketing materials, analytics
   - ONE workspace for EVERYTHING campaign-related

3. **Investor Materials** (`pitch-deck-complete.md`)
   - Consolidates: Deck structure, content, design, presentation strategy
   - References: All pitch deck documents, versions
   - ONE workspace for EVERYTHING pitch-related

4. **Business Planning** (`q4-strategic-plan-complete.md`)
   - Consolidates: Goals, metrics, resource allocation, timeline
   - References: All planning documents
   - ONE workspace for EVERYTHING planning-related

### General Rules:

**DO Create a Workspace When:**
- ✅ Major deliverable or project area (campaign, feature, document)
- ✅ Multiple experts will collaborate
- ✅ Work spans multiple sessions
- ✅ Lots of related documents/content exist
- ✅ Need to track decisions and context

**Workspace Naming:**
- Use descriptive names: `kickstarter-campaign-complete.md` (not just `campaign.md`)
- Use `-complete` suffix for comprehensive workspaces
- One workspace per topic (don't split unnecessarily)

**DON'T Create Multiple Workspaces For:**
- ❌ The same topic split into pieces (consolidate instead!)
- ❌ Simple tasks that don't need tracking
- ❌ One-off quick changes

---

## Workspace Lifecycle

```
1. CREATE workspace (Draft status)
   ↓
2. APPROVE plan (Approved status)
   ↓
3. DO THE WORK (InProgress status)
   ↓
4. REVIEW quality (Review status)
   ↓
5. COMPLETE (Done status)
   ↓
6. ASK FOUNDER → If yes, ARCHIVE to workspace/archive/
```

**Important:** Experts always ask before archiving - founder might remember missing work!

---

## How to Use Workspaces

### Step 1: Create Comprehensive Workspace File

**Location:** `.fwdpro/0-roundtable/workspace/[name].md`

**Naming Convention:**
- Use kebab-case: `product-launch-campaign-complete.md`
- Be specific: `mobile-app-authentication.md` (not just `auth.md`)
- Use `-complete` suffix for comprehensive workspaces
- ONE workspace per major topic (consolidate, don't fragment!)

**Before Creating:**
1. Check if a workspace already exists for this topic
2. If it does, UPDATE it (don't create a second one)
3. Search all project documents related to this topic
4. Plan to consolidate ALL related work into ONE workspace

**Initial Setup:**
- Start with the template: `pro-os/templates/roundtable/workspace/workspace-template.md`
- Fill in the Story, Acceptance Criteria, and initial Tasks
- Reference ALL related documents in the References section
- Plan Expert Collaboration sections for everyone who will contribute

### Step 2: Fill Out Header

```yaml
---
metadata:
  title: "User Authentication Feature"
  type: "feature"
  status: "InProgress"
  created: "2025-10-08"
  created_by: "denny"
  deliverable: "documents/technical/auth-spec.md"
  collaborators: ["denny", "ada", "elle"]
  priority: "high"
---
```

### Step 3: Document Expert Work

Each expert adds their section:

```markdown
### Denny's Work (System Architecture)

**Role:** Technical specification and architecture design

**Work completed:**
- Researched authentication best practices
- Designed JWT token architecture
- Created database schema
- Defined API endpoints

**Key decisions:**
- Use JWT with refresh tokens (not sessions)
- 30-day token expiry (balanced security/UX)
- OAuth 2.0 for social login
```

### Step 4: Hand Off Work

When passing to another expert:

```markdown
### Handoff to Ada

Hey Ada! Spec is complete. Here's what you need:

**Context:**
We're implementing JWT-based authentication with refresh tokens.
Security was top priority but also needed good UX.

**What's been done:**
- Spec finalized
- Database schema designed
- API endpoints defined
- Security requirements documented

**What you need to do:**
- Implement auth endpoints
- Create database migrations
- Write tests (TDD approach)
- Handle edge cases in spec

**Questions?** Tag me! - Denny
```

### Step 5: Update Status

Track progress through the workflow:

```markdown
## 📊 Status Progress

- [x] **Draft** - Denny - Oct 1
  - Initial spec and research
  
- [x] **Approved** - Genna - Oct 2
  - Approved architecture approach
  
- [x] **InProgress** - Ada - Oct 5 ← **CURRENT**
  - Implementing authentication system
  
- [ ] **Review** - Denny - [Date]
  - QA review pending
  
- [ ] **Done** - [Date]
  - Complete and deployed
```

### Step 6: Update Whiteboard

When status changes, update your expert section in `whiteboards.md`:

```markdown
### Active Work
- **User Authentication** - 🔄 InProgress
  - Workspace: [link](workspace/user-authentication-complete.md)
  - Deliverable: [Auth Spec](../documents/technical/auth-spec.md)
  - Quick note: Implementation 70% complete, tests passing
  - Next: Complete password reset flow
```

---

## Workspace Structure

### Essential Sections:

1. **📊 Status Progress** - Workflow tracking
2. **🎯 Story** - What and why (user story format)
3. **✅ Acceptance Criteria** - What "done" looks like
4. **📋 Tasks** - Specific to-dos broken down by phase
5. **👥 Expert Collaboration** - Who did what, with full context
6. **📊 Key Decisions Log** - Decision history with rationale
7. **⚠️ Blockers** - What's blocking progress
8. **📚 References** - Links to related work

### Optional Sections:

- **🔄 Roundtable Review** - If `@rt` was used
- **🔍 Quality Review** - Formal QA before Done
- **🎉 Completion Summary** - Wrap-up when complete

---

## Best Practices

### DO:
✅ Create ONE comprehensive workspace per major topic  
✅ Consolidate ALL related work into the workspace  
✅ Reference ALL related documents and files  
✅ Update workspace as you work (real-time collaboration)  
✅ Include COMPLETE context in expert sections (long is good!)  
✅ Document decisions and WHY they were made  
✅ Track ALL progress, blockers, and context  
✅ Update whiteboards when workspace status changes  
✅ Archive when complete (don't delete!)  

### DON'T:
❌ Create multiple workspaces for the same topic (consolidate!)  
❌ Wait until work is done to create workspace  
❌ Make handoffs too brief (missing context)  
❌ Work without a workspace for complex deliverables  
❌ Forget to update status as you progress  
❌ Leave blockers undocumented  
❌ Skip the "why" behind decisions  
❌ Forget to reference related documents  

---

## Integration with Whiteboards

**Workspaces show up on expert whiteboards:**

```markdown
## 💻 Ada's Whiteboard

### Active Work
- **User Authentication** - 🔄 InProgress
  - Workspace: [user-authentication-complete.md](workspace/user-authentication-complete.md)
  - Deliverable: [Auth Spec](../documents/technical/auth-spec.md)
  - Quick note: Implementation 70% complete
  - Next: Password reset flow
```

This makes it easy to:
- See what each expert is working on
- Jump to the workspace for details
- Access the deliverable directly
- Understand status at a glance

---

## Templates

**Use the workspace template:**
`.fwdpro/pro-os/templates/roundtable/workspace/workspace-template.md`

**Or have AI create from template:**
```
@[expert] create workspace for [topic]
```

---

## Troubleshooting

### "I forgot to create a workspace"
→ Create it now! Better late than never. Document what's been done so far.

### "Work is already complete"
→ Still create it! Document what was done for future reference.

### "Not sure if I need a workspace"
→ Ask: Will this span multiple sessions? Will multiple experts collaborate?
   If yes to either → create workspace.

### "Workspace feels too formal"
→ It's a working document! It can be messy. That's the point.
   Write notes as you go, don't wait for perfection.

---

## Archive Process

**CRITICAL:** Experts NEVER archive without founder approval!

When workspace is DONE:

1. Expert marks status as "Done" in workspace
2. **Expert asks founder:** "This workspace is complete. Would you like me to archive it?"
3. **If founder says YES:**
   - Move workspace file to `workspace/archive/`
   - Update whiteboard (move to "Completed This Month")
4. **If founder says NO:**
   - Keep workspace active for reference
5. Keep deliverable in `documents/` (don't archive that)

**Archive structure:**
```
workspace/
  archive/
    user-authentication-complete.md
    marketing-campaign-complete.md
    pitch-deck-complete.md
```

**Why ask first?** Founder might remember missing work or want to reference it frequently!

---

## Quick Reference

| Element | Location | Purpose |
|---------|----------|---------|
| **Workspace** | `.fwdpro/0-roundtable/workspace/[name].md` | Collaboration hub |
| **Deliverable** | `.fwdpro/documents/[category]/[file].md` | Clean final output |
| **Whiteboard** | `.fwdpro/0-roundtable/whiteboards.md` | Status overview |
| **Checklist** | `.fwdpro/0-roundtable/[founder-name]-checklist.md` | Action items for founder |
| **Archive** | `.fwdpro/0-roundtable/workspace/archive/` | Completed workspaces |

---

## Key Takeaway

**Workspaces are WHERE the work happens.**  
**Documents are WHAT comes out of the work.**

Without workspaces, you lose context, history, and collaboration clarity.
With workspaces, everything is organized, tracked, and preserved.

---

**Last Updated:** October 8, 2025  
**Author:** FWD PRO Team  
**For:** All FWD PRO Users  
**Status:** Active guidance document

