# Expert Workflow Pattern

**Purpose:** How an individual expert operates (context, workspace, whiteboard, deliverables)  
**Used by:** Every expert, every time  

**Attribution:**  
Patterns learned from Agent-OS (context loading, workspace-based tracking) and BMAD Method™ (story-based workspaces, status progression). FWD PRO innovation: Roundtable system, AI-optimized workspaces, human-readable whiteboards.

---

## 🪑 The Roundtable System

**The Three Document Types:**

**1. WHITEBOARDS** (`roundtable/whiteboards.md`)
- **Purpose:** Status board on the wall - EVERYONE reads
- **Format:** Human-readable, scannable (like Monday.com/JIRA)
- **Contains:** What you're working on, status, blockers
- **Audience:** Founder + All Experts (project visibility)

**2. WORKSPACES** (`roundtable/workspace/[topic].md`)
- **Purpose:** Your notebook - AI context only
- **Format:** AI-optimized (shorthand, abbreviations OK!)
- **Contains:** Detailed context, decisions, history, thread refs
- **Audience:** AI only (founder NEVER reads these)

**3. FOUNDER CHECKLIST** (`roundtable/[name]-checklist.md`)
- **Purpose:** Founder's clipboard - action items
- **Format:** Ticket-style, scannable, ADHD-friendly
- **Contains:** ONLY things founder needs to DO
- **Audience:** Founder (created by experts when action needed)

---

## Overview

This pattern defines how YOU (an individual expert) operate within the FWD PRO system:
- Loading context efficiently
- Managing your workspace
- Updating your whiteboard
- Creating deliverables
- Maintaining quality

**What this covers:**
- Individual workflow and operations
- Context loading standards
- Workspace management (AI-optimized)
- Whiteboard updates (human-readable)
- Deliverable creation
- Quality standards

**What this doesn't cover:**
- Team collaboration (see `expert-collaboration.md`)
- Domain-specific work (see domain patterns: tech, content, strategy, legal)

---

## Step 1: Smart Context Loading

**Goal:** Load necessary context efficiently without wasting tokens

### 🆕 New Thread? Read Whiteboards First!

**If this is a NEW THREAD** (founder started fresh conversation):

1. **Read `roundtable/whiteboards.md` FIRST** (project dashboard)
   - Shows what ALL experts are currently working on
   - See status, blockers, what's complete
   - Understand project state instantly

2. **Then read project files** (if not already in context)

**Why?** Whiteboards are your "catch up" document when context resets!

### What to Load:

**ALWAYS check what's already in context first!**

If NOT already in context, load these files:

```markdown
Required Files:
- roundtable/whiteboards.md (FIRST - current work overview)
- project/founder-profile.md (who the founder is, communication preferences)
- project/project-kb.md (project facts, stage, goals, constraints, project type)
- project/mission.md (why this project matters)

Optional Files (load as needed):
- project/people.md (team members, advisors, investors - if relevant)
- roundtable/workspace/[relevant files] (if continuing existing work)
- documents/[relevant files] (if reviewing/updating existing deliverables)
```

### Token Efficiency Rules:

✅ **DO:**
- Check if files are already in context before re-reading
- Load only what's needed for the current task
- Scan whiteboards to see what other experts are working on
- Read whiteboards FIRST in new threads (instant project status)

❌ **DON'T:**
- Re-read files that are already in context
- Load every file "just in case"
- Read entire workspace history if you only need current status

---

## Step 2: Check for Existing Workspace

**Goal:** Avoid duplicate workspaces, continue existing work

### The Rule: ONE workspace per topic

**Process:**

1. **Search `roundtable/workspace/` for existing workspace on this topic**
   - Look for similar names
   - Check whiteboard for related work
   - Ask founder if unsure

2. **If workspace EXISTS:**
   - ✅ OPEN it and add your section
   - ✅ Read existing context (don't start from scratch)
   - ✅ Continue the story
   - ❌ DON'T create a duplicate workspace

3. **If workspace DOESN'T exist:**
   - ✅ Create ONE comprehensive workspace
   - ✅ Use proper naming: `topic-name.md`
   - ✅ Use workspace template: `pro-os/templates/roundtable/workspace/workspace-template.md`

---

## Step 3: Workspace Structure

**Goal:** Document AI context, decisions, and detailed notes

### ⚠️ CRITICAL: Workspaces Are AI-Optimized (Not Human-Readable)

**Founder NEVER reads workspaces** - they ask you in chat if they need info.

**Format:** AI-optimized, machine-readable, shorthand is ENCOURAGED
- Use abbreviations (CTX, REFS, COLLAB, STATUS)
- Token-efficient structure
- Reference deliverables (don't duplicate content)
- Include thread IDs for context switching
- Use whatever format works for AI

### Workspace Complexity Patterns:

**SIMPLE WORKSPACE (Most Common):**

ONE file for ONE topic (even if multiple deliverables)

```
roundtable/workspace/user-authentication.md
```

Use when:
- Single deliverable (one spec, one feature, one document)
- OR multiple related deliverables for one goal (campaign: video + emails + page)
- Work is focused and manageable in one file

**COMPLEX WORKSPACE (For Large Systems):**

FOLDER with multiple sub-workspaces

```
roundtable/workspace/ai-chat-system/
  ├── _main.md                    (coordination)
  ├── realtime-messaging.md       (feature 1)
  ├── typing-indicators.md        (feature 2)
  └── message-persistence.md      (feature 3)
```

Use when:
- Large multi-feature system
- Each piece is substantial (multiple days of work each)
- Features have dependencies between them
- Long-term development spanning multiple sprints

**Default:** Start with Simple. Only use Complex for genuinely large systems.

### AI-Optimized Workspace Template:

```markdown
# WS:[topic-name]

## CTX (Context)
- Goal: [what we're trying to achieve]
- Research: [link to research docs if applicable]
- Thread refs: [thread IDs if need to reference conversations]
- Decision log: [key decisions with dates]

## REFS (References to Deliverables)
- D:/documents/[path] (don't copy content, just reference!)
- D:/src/[code files]
- WS:/workspace/[related workspace]

## STATUS
- [task]: ✅ (completed)
- [task]: 🔄 (in progress)
- [task]: ⏸️ (blocked - reason)
- [task]: ❌ (not started)

## COLLAB (Expert Collaboration)
- [Expert]→[Expert]: [what's needed] (date, status)
- [Expert]→Founder: [action needed] (added to checklist)

## NOTES
[Detailed context, decisions, research, anything AI needs to preserve]
```

### Key Principles:

- **AI-optimized format** (shorthand, abbreviations, efficient)
- **Reference deliverables** (don't duplicate content)
- **Include thread IDs** (for context switching between threads)
- **Track collaboration** (expert-to-expert, expert-to-founder)
- **Preserve decisions** (with dates and rationale)
- **Founder never reads** (this is your AI notebook)

---

## Step 4: Update Your Whiteboard

**Goal:** Keep project dashboard current for everyone

### Whiteboard Format: Human-Readable Dashboard

**Location:** `roundtable/whiteboards.md`

**Your section looks like this:**

```markdown
## 🔧 Denny's Board

**Current Work:**
- 🔄 User Authentication Spec (started Nov 7)
  - Status: Technical design complete
  - Next: Create implementation tasks for Ada
  - WS: `workspace/user-authentication.md`

**Completed:**
- ✅ Database schema design (Nov 5)
- ✅ API endpoint specifications (Nov 6)

**Blocked:** None

**Notes:** Auth spec on track, will hand off to Ada by EOD
```

### Status Indicators:

- 🔄 **In Progress** - Actively working on this
- ⏸️ **Blocked** - Can't proceed without something
- ✅ **Complete** - Finished and ready
- 🎯 **Queued** - Up next

### Update Patterns:

**Auto-update (don't ask):**
- Change status (🔄 → ✅)
- Add completed items
- Update notes
- Add blockers

**Ask first:**
- Remove items from whiteboard (archive)
- Major changes to project structure
- Strategic decisions

---

## Step 5: Create Clean Deliverables

**Goal:** Produce high-quality, well-formatted output

### Where Deliverables Live:

```
documents/
  ├── tech/           (technical specs, architecture docs)
  ├── business/       (pitch decks, business plans)
  ├── marketing/      (campaigns, content)
  ├── legal/          (contracts, policies)
  └── strategy/       (roadmaps, vision docs)
```

**AI organizes intuitively** - use judgment based on deliverable type.

### Deliverable Standards:

**1. Reference from workspace, don't duplicate:**
```markdown
Workspace: workspace/user-authentication.md
Deliverable: documents/tech/user-authentication-spec.md

✅ Workspace references: "See D:/documents/tech/user-authentication-spec.md"
❌ Don't copy entire spec into workspace
```

**2. Update in place (token efficiency):**
```markdown
✅ Use search_replace to update existing file
❌ Don't create v2, v3, v4 versions
```

**3. Follow domain standards:**
- Technical → TDD, testing requirements
- Content → Audience-appropriate messaging, legal review
- Strategy → Long-term thinking, trade-offs
- Legal → Risk assessment, compliance

**4. Research current best practices FIRST:**
- Check what year it is!
- Search: "[topic] best practices [current year]"
- Don't rely on outdated information

---

## Step 6: Update Founder Checklist (If Needed)

**Goal:** Give founder clear, actionable tasks when you need their input

### When to Add Checklist Items:

✅ **DO add when:**
- You need founder's decision
- You need founder to review something
- You need founder to provide information
- You need founder to take action (approve, sign, purchase)

❌ **DON'T add when:**
- It's just an FYI (tell them in chat instead)
- Another expert can handle it
- You can infer the answer from context

### Checklist Format:

**Location:** `roundtable/[founder-name]-checklist.md`

```markdown
## 🚨 URGENT (Do Today)

- [ ] **[DENNY] Review authentication approach**
  - Decision needed: OAuth vs JWT for API authentication
  - Context: Security vs simplicity trade-off
  - Impact: Affects all API endpoints
  - Where: `workspace/user-authentication.md` (Decision section)
  - Due: Today (blocking Ada's implementation)

## ⚠️ HIGH (This Week)

- [ ] **[LYNA] Approve pitch deck final draft**
  - What: Review slides 1-12, check positioning
  - Where: `documents/business/seed-pitch-deck.pdf`
  - Why: Investor meeting Nov 15
  - Blocker: None (FYI task)
```

### Checklist Principles:

- **Ticket-style format** (scannable, ADHD-friendly)
- **Include context** (why this matters, where to find info)
- **Tag yourself** `[YOURNAME]` so founder knows who created it
- **Prioritize** (URGENT vs HIGH)
- **Remove when complete** (archive elsewhere if needed)

---

## Step 7: Quality Standards

**Before marking work complete:**

### Universal Quality Checks:

✅ **Context:**
- Workspace updated with all decisions
- Whiteboard status current
- Deliverables created and referenced

✅ **Collaboration:**
- Tagged other experts if their input needed
- Added founder checklist items if decisions needed
- Documented handoffs in workspace

✅ **Quality:**
- Followed domain pattern (tech/content/strategy/legal)
- Researched current best practices
- Applied founder's preferences from profile

✅ **Documentation:**
- Decisions logged with rationale
- Progress tracked in workspace
- Thread IDs included for context switching

### Domain-Specific Quality:

**Load your domain pattern for specific standards:**
- Technical work → `expert-tech.md` (TDD, testing, code quality)
- Content work → `expert-content.md` (tone, legal review, messaging)
- Strategy work → `expert-strategy.md` (long-term thinking, trade-offs)
- Legal work → `expert-legal.md` (risk assessment, compliance)

---

## Key Principles

### 1. Source of Truth Principle

**When working with validated source documents, treat them as TRUTH.**

✅ **DO:**
- Read thoroughly FIRST
- Extract content directly
- Adapt to new format using your expertise
- Trust validated sources

❌ **DON'T:**
- Second-guess finalized documents
- Ask "is this accurate?" when it's literally in the source
- Generate from memory instead of reading

### 2. Token Efficiency

**Save founder money and speed up work:**

✅ **DO:**
- Check context before re-reading files
- Update in place (search_replace)
- Reference deliverables in workspace (don't duplicate)
- Use shorthand in workspaces

❌ **DON'T:**
- Re-read files already in context
- Create versioned files (v2, v3, v4)
- Copy entire deliverables into workspace
- Write redundant documentation

### 3. Expert Lens Principle

**Evaluate work through YOUR domain expertise automatically.**

You don't wait to be asked - you proactively:
- Flag concerns in your domain
- Suggest improvements
- Apply best practices
- Think ahead to potential issues

**Example:**
- Denny (tech) → Automatically thinks about scalability, security, edge cases
- Elle (legal) → Automatically spots legal risks, compliance issues
- Lyna (strategy) → Automatically considers market positioning, competition

---

## Summary

**Your workflow as an expert:**

1. **Load context smartly** (whiteboards first in new threads)
2. **Check for existing workspace** (continue, don't duplicate)
3. **Do the work** (follow domain patterns)
4. **Update workspace** (AI-optimized notes, decisions, progress)
5. **Update whiteboard** (human-readable status for everyone)
6. **Create deliverables** (clean, well-formatted output)
7. **Add checklist items** (if founder action needed)
8. **Quality check** (universal + domain-specific standards)

**Remember:**
- Workspaces = AI only (shorthand OK)
- Whiteboards = Everyone reads (clean, scannable)
- Checklists = Founder actions (ticket-style)
- Always follow your domain pattern for specific work

---

## Related Documentation

**Essential patterns you'll use:**
- `expert-collaboration.md` - How to work with other experts
- `expert-tech.md` - Technical work standards (TDD, testing)
- `expert-content.md` - Content creation standards (tone, messaging)
- `expert-strategy.md` - Strategic thinking standards (long-term)
- `expert-legal.md` - Legal work standards (risk, compliance)

**Standards:**
- `standards/expert-voice-guidelines.md` - Communication format
- `standards/research-citation-standards.md` - Research integrity

**Templates:**
- `templates/roundtable/workspace/workspace-template.md` - Workspace structure

---

*This pattern ensures every expert operates consistently while maintaining their unique domain expertise.*

