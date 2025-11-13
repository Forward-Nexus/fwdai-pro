# The Roundtable System Architecture

**Purpose:** Understand what each document type is FOR and how they work together

---

## 🎯 The Three Document Types

Think of it like a real team working at a table:

```
                WHITEBOARD (on wall)
                Everyone reads this
                ↓
    YOU (founder) ←→ EXPERTS (AI) ←→ DELIVERABLES
                ↓                        ↑
           CHECKLIST                     |
        (your tasks)                     |
                ↓                        |
           WORKSPACE                     |
        (AI's notebook) ─────────────────┘
```

---

## 📋 1. WHITEBOARD (`roundtable/whiteboards.md`)

**FOR:** Everyone (founder + all experts)

**FORMAT:** Human-readable dashboard (like Monday.com or JIRA)

**PURPOSE:** Project overview - what's happening right now

**CONTAINS:**
- What each expert is working on
- Status indicators (🔄 In Progress, ⏸️ Blocked, ✅ Complete)
- Quick notes and blockers
- Links to workspaces

**WHO READS IT:**
- Founder checks it to see what's happening
- Experts check it to see what others are doing
- First thing to read in a new thread (catch up on project state)

**WHO WRITES IT:**
- Experts update their own sections
- Keep it CLEAN and CURRENT
- Remove completed items regularly

**EXAMPLE:**
```markdown
## 🔧 Denny's Board

**Current Work:**
- 🔄 User Authentication Spec (started Nov 7)
  - Status: Technical design complete
  - Next: Create implementation tasks for Ada
  - WS: `workspace/user-authentication.md`

**Completed:**
- ✅ Database schema design (Nov 5)
```

---

## ✅ 2. CHECKLIST (`roundtable/[founder-name]-checklist.md`)

**FOR:** Founder only

**FORMAT:** ADHD-friendly ticket list (scannable, actionable)

**PURPOSE:** What YOU need to DO

**CONTAINS:**
- Tasks that need founder action
- Decisions that need founder input
- Reviews that need founder approval
- Clear context for each item

**WHO READS IT:**
- Founder (that's it!)

**WHO WRITES IT:**
- Experts add items when they need founder action
- Experts REMOVE items when complete (keep it clean!)

**EXAMPLE:**
```markdown
## 🚨 URGENT (Do Today)

- [ ] **[DENNY] Review authentication approach**
  - Decision needed: OAuth vs JWT
  - Context: Security vs simplicity trade-off
  - Where: `workspace/user-authentication.md`
  - Due: Today (blocking Ada's implementation)
```

**IMPORTANT:**
- Only ACTIONABLE items
- Remove when done (don't accumulate)
- Tag which expert created it `[DENNY]`

---

## 📓 3. WORKSPACE (`roundtable/workspace/{topic}-ws.md`)

**FOR:** AI only (founder NEVER reads these)

**FORMAT:** AI-optimized shorthand (think: engineer's notebook)

**PURPOSE:** AI's memory, context, story, decision log for a topic

**NAMING CONVENTION:** `{topic}-ws.md` (e.g., `business-plan-ws.md`, `user-auth-ws.md`, `pitch-deck-ws.md`)

**CONTAINS:**
- Detailed context and background
- Decision log with rationale
- Thread IDs (for context switching)
- References to deliverables (NOT copies of deliverable content!)
- Collaboration notes between experts
- Progress tracking
- Upstream/downstream mapping (what this builds on / what this feeds into)
- Whatever AI needs to remember

**WHO READS IT:**
- AI experts (to understand context, continue work)
- Other experts (to see what's been done)

**WHO WRITES IT:**
- Experts working on this topic
- Multiple experts can collaborate in same workspace

**FORMAT - AI SHORTHAND IS ENCOURAGED:**
```markdown
# WS: User Authentication (or more casual: # user-auth-ws)

## CTX
- Goal: Secure auth for mobile app
- Research: OAuth 2.0 best practices 2025
- Thread: abc123 (initial design)
- Decision: Using JWT tokens (simpler for MVP, scales later)

## REFS
- D: documents/tech/user-auth-spec.md (don't copy, just reference!)
- D: src/auth/ (implementation)

## STATUS
- Design: ✅
- Spec: ✅
- Implementation: 🔄
- Testing: ❌

## COLLAB
- Denny→Ada: Spec ready, handoff complete (Nov 7)
- Ada→Denny: Question about rate limiting (see thread xyz)

## NOTES
- Tried bcrypt rounds=10, too slow. Using 12.
- Session expiry: 24h (founder preference)
- Edge case: simultaneous login handled in spec sec 7
```

**KEY PRINCIPLES:**

✅ **DO:**
- Use abbreviations (CTX, REFS, COLLAB, STATUS)
- Use shorthand (founder pref, sec 7, Nov 7)
- Reference deliverables (don't copy content)
- Include thread IDs for context switching
- Keep decisions with dates

❌ **DON'T:**
- Write in full sentences (token waste)
- Duplicate deliverable content
- Make it human-readable (it's for AI!)
- Worry about formatting (function over form)

---

## 📄 4. DELIVERABLES (`documents/`)

**FOR:** Everyone (founder + team + external stakeholders)

**FORMAT:** Clean, polished, professional

**PURPOSE:** The actual OUTPUT (specs, designs, content, etc.)

**CONTAINS:**
- Final work product
- Well-formatted and complete
- Ready for use/implementation/sharing

**WHO READS IT:**
- Founder
- Team members
- External stakeholders (investors, clients, etc.)

**WHO WRITES IT:**
- Experts create deliverables
- Reference from workspace (don't duplicate)

**LOCATION:** AI organizes intuitively
```
documents/
  tech/           (specs, architecture)
  business/       (pitch decks, plans)
  marketing/      (campaigns, content)
  legal/          (contracts, policies)
  strategy/       (roadmaps, vision)
```

---

## 🔄 How They Work Together

### The Flow:

```
1. WHITEBOARD
   ↓ "Denny is working on user auth"
   
2. WORKSPACE (AI context)
   ↓ Denny's detailed notes, decisions, progress
   ↓ References to deliverable
   
3. DELIVERABLE
   ↓ The actual spec (clean, polished)
   
4. CHECKLIST (if needed)
   ↓ "Review auth approach" added for founder
   
5. WHITEBOARD (updated)
   ↓ "User auth spec complete ✅"
```

### Example Scenario:

**Founder:** "I need user authentication designed"

**Denny:**
1. ✅ Creates workspace: `workspace/user-auth-ws.md`
2. ✅ Works in AI shorthand (CTX, decisions, notes)
3. ✅ Creates deliverable: `documents/tech/user-auth-spec.md` (polished)
4. ✅ Workspace references deliverable location (doesn't copy content!)
5. ✅ Updates whiteboard: "Auth spec complete ✅"
6. ✅ Adds checklist item: "[DENNY] Review auth approach"

**Founder:**
1. ✅ Checks whiteboard → sees auth spec is done
2. ✅ Checks checklist → sees review needed
3. ✅ Reads deliverable (the spec) → makes decision
4. ✅ Never reads workspace (that's for AI context)

**Ada (next):**
1. ✅ Checks whiteboard → sees auth ready for implementation
2. ✅ Opens workspace → reads Denny's context/decisions
3. ✅ Reads deliverable → implements from spec
4. ✅ Updates workspace with implementation progress
5. ✅ Updates whiteboard when complete

---

## 📊 The Hierarchy

```
WHITEBOARD (dashboard)
├─ Shows current work
├─ Links to workspaces
└─ High-level status

WORKSPACE (AI context)
├─ Detailed decisions and notes
├─ References deliverables
├─ Thread IDs and history
└─ Expert collaboration

DELIVERABLE (output)
├─ Polished final work
├─ Referenced by workspace
└─ Used by humans

CHECKLIST (founder tasks)
├─ Action items for founder
├─ References workspaces
└─ Removed when complete
```

---

## 🎯 Key Principles

### 1. Separation of Concerns

**WHITEBOARD** = Status dashboard (for humans)
**WORKSPACE** = AI memory (for context)
**DELIVERABLE** = Final output (for use)
**CHECKLIST** = Founder tasks (for action)

### 2. Don't Duplicate

❌ **WRONG:**
- Copy entire spec into workspace
- Duplicate whiteboard info in checklist
- Repeat context everywhere

✅ **RIGHT:**
- Workspace REFERENCES deliverable
- Whiteboard LINKS to workspace
- Checklist POINTS to workspace for context

### 3. Format for Audience

**Whiteboard** → Scannable dashboard (humans)
**Workspace** → AI shorthand (AI context)
**Deliverable** → Polished output (humans)
**Checklist** → Ticket format (founder action)

### 4. Keep It Clean

**Whiteboard:**
- Archive completed work
- Only show active/recent items
- Remove blockers when resolved

**Workspace:**
- Keep growing (it's context/history)
- Reference, don't duplicate
- Use shorthand freely

**Checklist:**
- Remove completed items immediately
- Only actionable tasks
- Don't let it accumulate

**Deliverable:**
- Update in place (not v2 files)
- Keep polished and current
- One source of truth

---

## 🔍 Checking Project State

### In a New Thread:

**Step 1:** Read whiteboard
- See what everyone is working on
- Understand current project state
- Identify what's active/blocked/complete

**Step 2:** Read relevant workspace (if continuing work)
- Get detailed context
- See decisions made
- Understand history

**Step 3:** Read deliverable (if reviewing output)
- See the actual work product
- Review for quality
- Provide feedback

### As Founder:

**Daily:**
- Check whiteboard (what's happening?)
- Check checklist (what do I need to do?)

**When Reviewing:**
- Read deliverable (the actual output)
- Don't read workspace (that's AI context)

**When Providing Feedback:**
- Comment in chat
- Experts update workspace with your feedback
- Workspace preserves decision history

---

## 💡 Why This Structure?

### Before (Messy):
- Everything in one file
- AI context mixed with human deliverables
- Hard to find things
- Duplicate information everywhere
- Founder reads AI notes (confusing)

### After (Clean):
- Clear separation of concerns
- Each document has a purpose
- Easy to find things
- No duplication (references instead)
- Founder only reads what's relevant
- AI has rich context without cluttering deliverables

---

## 📝 Real-World Examples

### Example 1: `business-plan-ws.md`
- 560 lines of AI context
- References deliverables in `documents/business-plan/new/` (doesn't copy them!)
- Decision log: "ES rewritten Oct 20 (5 pages → 1.5 pages narrative flow)"
- Cross-references: Links to 9 investor report workspaces
- Upstream/Downstream mapping clear
- **It contains the STORY of how the business plan was created**, not the business plan itself

### Example 2: `landing-page-ws.md`
- Has YAML frontmatter (metadata for tracking)
- References deliverable: `app/page.tsx` (implementation code)
- Status progression tracked (Draft → Approved → InProgress → Review → Done)
- Expert activity log (Lyna content audit, Ward approval iterations)
- **It's for AI to remember what was done and why**, not for humans to read

### Example 3: `pitch-deck-ws.md`
- Maps all 21 slides
- References deliverables in `documents/pitch-deck/new/`
- Phase tracking (Phase 1 content → Phase 2 visual → Phase 3 audit)
- Handoff notes (Lyna→Denny for React components)
- **It contains context and coordination**, deliverables contain the actual slide content

**These are messy, verbose, AI-optimized** - and that's PERFECT! Because they're not for humans, they're for AI context and memory.

---

## ✨ Summary

**Think of it like a real team:**

- **Whiteboard** = Status board on the wall (everyone glances at it)
- **Workspace** = Your notebook in front of you (your personal notes)
- **Checklist** = Founder's clipboard (action items)
- **Deliverable** = The final presentation (polished output)

**Each has a clear purpose. Don't mix them up!**

---

*This is the Roundtable system - organized, efficient, and designed for how AI experts and founders actually work together.*

