---
version: 1.0.0
last_updated: 2025-10-06
applies_to: all_workflows
attribution: |
  Patterns learned from:
  - Agent-OS: Pre/post-flight, context loading, three-phase execution, blocking system, TDD
  - BMAD Method™: Quality checklists, story-based workflows, status progression
  FWD PRO Innovation: Universal application (not just code), Roundtable collaboration, 
  workspace-based tracking
---

# FWD PRO Workflow Standards

## Overview

Every FWD PRO expert follows universal workflow patterns while adapting to their specific domain (strategy, systems, implementation, funding, growth, legal, domain-specific).

**Core Principle:** These are patterns and guardrails, not rigid scripts. AI intelligence + current best practices + these patterns = quality work.

---

## 🌟 Universal Three-Phase Workflow

**EVERY significant workflow follows THREE phases:**

### Quick Reference

1. **Phase 1: Preparation** 🎯 (Pre-Flight)
   - Load context efficiently
   - Clarify requirements
   - Search current best practices
   - Identify collaboration needs
   
2. **Phase 2: Execution** 💪
   - Create/update deliverables
   - Handle blockers intelligently
   - Test/validate (for code)
   - Track progress
   
3. **Phase 3: Completion** ⭐ **DON'T SKIP!**
   - Quality check
   - Update workspace & whiteboards
   - Document handoffs
   - Notify founder if needed

---

## Phase 1: Preparation 🎯 (Pre-Flight)

**Before doing ANY work:**

### 1. Context Check (Conditional Loading) ⚡

**CRITICAL:** Don't waste tokens re-reading files!

```
<conditional-context-check>
  FOR EACH required file:
    IF already read in THIS conversation:
      SKIP reading
      NOTE: "Using [file] from context"
    ELSE:
      READ: [file]
</conditional-context-check>
```

**Standard context to check:**
- [ ] `.fwdpro/config.yaml` - Project configuration (if exists)
- [ ] `project/project-kb.md` - Project knowledge
- [ ] `project/founder-profile.md` - Founder preferences
- [ ] `roundtable/whiteboards.md` - Latest expert activity
- [ ] Relevant deliverables in `documents/`

**Example:**
```
User: @denny create spec for authentication

Denny internal check:
✅ Project KB: Already in context from earlier (skip)
✅ Founder profile: Already in context (skip)
❌ Whiteboards: Need to check for updates (read)
❌ Existing auth docs: Need to search (search)

Denny notes: "Using project KB and founder profile from context. 
Checking whiteboards for updates..."
```

**Token Efficiency Rules:**

- **IF file was read in THIS conversation:** DON'T read again
- **IF you need specific section:** Use grep/search, not full read
- **IF large file:** Read relevant sections only
- **IF unclear if in context:** Better to re-read than guess wrong

### 2. Requirements Clarity

- [ ] Do I understand what's being asked?
- [ ] Do I have all information needed?
- [ ] Are there any ambiguities? (If yes, ask founder)
- [ ] What's the scope of this work?
- [ ] What type of deliverable is this?
- [ ] Who else might need to be involved?

**If unclear:** Stop and ask specific numbered questions. Don't guess or assume.

### 3. Search Current Best Practices ⭐

**ALWAYS search for current (2025) best practices:**

```
Search: "[deliverable type] best practices 2025"
Search: "[industry/domain] standards for [deliverable]"
Search: "[technology/approach] current recommendations"
```

**Why:** Don't rely on potentially stale training knowledge. Find CURRENT best practices.

**Examples:**
- Creating pitch deck → "investor pitch deck best practices 2025"
- Creating auth spec → "authentication architecture best practices 2025"
- Creating legal terms → "terms of service legal requirements 2025"
- Creating marketing campaign → "digital marketing campaign best practices 2025"
- Creating restaurant menu → "restaurant menu design best practices 2025"

**Universal Principle:** AI already knows general approaches. Search ensures CURRENT, domain-appropriate best practices.

### 4. Collaboration Check

- [ ] Do I need another expert's input NOW?
- [ ] Should I tag someone for review AFTER I'm done?
- [ ] Is this a multi-expert deliverable from the start?
- [ ] Are there handoffs I'm waiting for?
- [ ] Should I check existing workspaces for related work?

**Examples:**
- Lyna creating pitch deck → Tag Benji for financial validation
- Denny creating architecture → Tag Genna for strategic alignment check
- Elle reviewing legal doc → Tag domain expert for industry compliance

### 5. Workspace & Template Check

- [ ] Does a workspace already exist for this work?
  - If YES: Open it, add to it, update status
  - If NO: Create new workspace from template
- [ ] What deliverable type is this?
- [ ] Where should the clean deliverable live? (`documents/[category]/`)

**Workspace Creation:**
```
IF new work item:
  CREATE: roundtable/workspace/[descriptive-name].md
  USE: roundtable/templates/workspace-template.yaml
  POPULATE: title, type, status, deliverable location
  UPDATE: roundtable/whiteboards.md with new workspace
```

### 6. Pre-Flight Checklist ✅

Before proceeding to execution:

- [ ] Context loaded efficiently (not redundantly)
- [ ] Requirements clear (or questions asked)
- [ ] Best practices researched for THIS deliverable type
- [ ] Collaboration needs identified
- [ ] Workspace created or opened
- [ ] Deliverable location determined
- [ ] Ready to execute!

**If ANY item is not checked:** Handle it before proceeding.

---

## Phase 2: Execution 💪

**Do the actual work:**

### 🔍 ALWAYS: Search for Current Best Practices

**Before implementing ANY solution:**
- ✅ **Check current date** (what year/month is it?)
- ✅ Search for "[CURRENT_YEAR] best practices for [topic]"
- ✅ Search for "latest [technology/approach] standards"
- ✅ Search for "current best practices for [topic]"
- ✅ Check for recent changes or updates to libraries/frameworks
- ✅ Verify information isn't outdated

**Why this matters:**
- Technology changes FAST
- Your training data has a cutoff date
- Current best practices may be different than what you know
- Founder deserves the most current solutions

**Examples:**
- "What are [current year] best practices for React authentication?"
- "Current Node.js security standards [current year]"
- "Latest TypeScript patterns [current year]"
- "Modern CSS layout best practices [current year]"
- "Current legal regulations for [topic] [current year]"

**When to search:**
- Before designing systems (Denny)
- Before implementing code (Ada)
- Before creating strategies (Genna, Lyna, Benji)
- Before writing legal guidance (Elle)
- Before domain-specific work (Domain experts)
- Anytime using a specific technology or framework

**How to know current date:**
- Check context for date information
- Look at file timestamps if available
- If unsure, search for "current year" or "today's date"
- Last resort: Ask founder

**Recency guidelines:**
- Current year = most relevant
- Last year = recent, but verify if superseded
- 2+ years old = likely outdated for tech, verify before using

### ⚠️ CRITICAL: Update Existing Files, Don't Create New Versions

**NEVER do this:**
- ❌ Create `pitch-deck-v2.md` instead of updating `pitch-deck.md`
- ❌ Create `auth-spec-updated.md` instead of updating `auth-spec.md`
- ❌ Create `system-design-final.md` instead of updating `system-design.md`

**ALWAYS do this:**
- ✅ Update the existing file directly
- ✅ Add to changelog in workspace YAML
- ✅ Note changes in workspace markdown
- ✅ Use version control (git) for history, not file versioning

**Exception:** Only create new file if:
- Founder explicitly asks for a new version ("create a second pitch deck option")
- Creating a completely different deliverable
- Archiving old version before major rewrite (move to archive/, then create fresh)

**Why this matters:**
- Prevents file proliferation and confusion
- Keeps deliverables clean and findable
- Version history lives in git, not filenames
- Founder knows where to find things

**If you catch yourself about to create "*-v2" or "*-updated" → STOP and update the original instead!**

---

### 1. Create/Update Workspace

**For new work:**

1. Create workspace file: `roundtable/workspace/[name].md`
2. Use template from `roundtable/templates/workspace-template.yaml`
3. Fill YAML metadata:
   - title, type, status, created info
   - deliverable location
   - collaborators list
4. Populate Overview & Context section
5. Start your expert's work section

**For ongoing work:**

1. Open existing workspace
2. Update your expert's section
3. Update status if progressing
4. Add to changelog

### 2. Create/Update Deliverable

**For new deliverable:**

1. Determine category (technical, investor-materials, marketing, legal, materials, etc.)
2. Create file: `documents/[category]/[descriptive-name].md`
3. AI creates category intuitively (founder can override)
4. Write clean content (NO status tracking clutter in deliverable)
5. Apply current best practices researched in Phase 1

**For updating deliverable:**

1. **Update the existing file directly** (don't create new versions!)
2. Read existing file
3. Update content in place
4. Maintain clean format
5. Add to workspace changelog (not filename!)
6. Document changes in workspace, not by creating "v2" files

**Remember:** Git tracks history. You don't need to create new files to preserve old versions. Just update and commit!

**Universal Principle:** Deliverables are CLEAN outputs. Status/collaboration lives in workspace.

### 3. Break Complex Work Into Tasks

In workspace YAML:

```yaml
tasks:
  - task: "Research authentication methods"
    assigned_to: "denny"
    status: "done"
    notes: "JWT with refresh tokens chosen"
    created: "2025-10-06"
  
  - task: "Design database schema"
    assigned_to: "denny"
    status: "in_progress"
    created: "2025-10-06"
  
  - task: "Define API endpoints"
    assigned_to: "denny"
    status: "pending"
    created: "2025-10-06"
```

Mark complete as you go:
```yaml
  - task: "Research authentication methods"
    status: "done"
    notes: "JWT with refresh tokens - industry standard for SPAs"
```

### 4. Handle Blockers: Three-Attempt Rule 🚧

**If you get stuck:**

1. **Attempt #1:** Try your primary approach
2. **Attempt #2:** Try alternative approach
3. **Attempt #3:** Try completely different approach

**After 3 attempts without success: Document blocker and move on**

**Document in workspace YAML:**
```yaml
blockers:
  - blocker: "Need decision on session timeout duration"
    raised_by: "denny"
    raised_date: "2025-10-06"
    resolved: false
    approaches_tried:
      - "Researched industry standards (varies: 7-90 days depending on security needs)"
      - "Checked project KB for requirements (not specified)"
      - "Reviewed similar apps in domain (mixed approaches)"
    needs: "Founder decision: 7-day (high security), 30-day (balanced), or 90-day (convenience)?"
    urgency: "medium"
```

**Document in workspace markdown:**
```markdown
## ⚠️ Blockers & Issues

**Current blockers:**
- **Session timeout duration** - Need founder input on security vs convenience trade-off
  - See YAML for details on approaches tried
  - Workspace link: [here]
```

**Add to founder checklist:**
```markdown
## ⚠️ High Priority - This Week

- [ ] **Session timeout duration decision** - How long should users stay logged in?
  - **From:** Denny
  - **Options:**
    - 7 days (high security, more logins required)
    - 30 days (balanced approach, industry standard)
    - 90 days (convenience, less secure)
  - **Why needed:** Blocking auth spec completion
  - **Workspace:** [link]
```

**Then:** Move to next task. Don't waste time spinning on blockers.

### 5. Test-Driven Development (For Code Only) 🧪

**When implementing code (NOT just reviewing or speccing):**

#### Phase A: Write Tests FIRST

1. Write ALL tests before any implementation
2. Tests should FAIL (feature doesn't exist yet)
3. Cover:
   - **Happy path:** Normal usage, expected behavior
   - **Edge cases:** Unusual inputs, boundary conditions
   - **Error cases:** What breaks, how it fails gracefully
   - **Integration:** How it connects with other code

**Why first:** Tests define success criteria. Code makes tests pass.

#### Phase B: Implement Features

1. Write minimal code to make first test pass
2. Run tests, see progress (Red → Green)
3. Implement next piece
4. Run tests again
5. Repeat until all tests pass ✅

**Incremental approach:** Small steps, constant validation.

#### Phase C: Refactor

1. All tests passing ✅
2. Improve code quality (readability, structure, patterns)
3. Run tests (ensure still passing)
4. Optimize if needed
5. Final test run

**Why TDD:**
- Tests guide implementation (clear definition of "done")
- Catch bugs early (before they compound)
- Confidence in changes (tests prevent regressions)
- Better design (testable code is well-structured code)

**Note:** TDD is for CODE implementation. Specs, pitch decks, and other deliverables use different quality checks.

### 6. Progress Tracking

**As you work:**

- [ ] Mark tasks complete in workspace YAML
- [ ] Update status as work progresses (Draft → InProgress, etc.)
- [ ] Note key decisions in workspace
- [ ] Update whiteboards periodically (NOT every tiny step, but major progress)
- [ ] Ask for help if blocked (don't spin wheels)

**Update workspace markdown:**
```markdown
## 💻 Ada's Implementation

**Status:** 70% complete

**Completed:**
- ✅ Login endpoint - Tests passing
- ✅ Logout endpoint - Tests passing
- ✅ Token refresh logic - Working

**In progress:**
- 🔄 Password reset flow - 50% done

**Upcoming:**
- Email verification
- Social login integration
```

### 7. Quality During Work

**Self-check as you build:**

- [ ] Following project standards (code style if code, writing style if content)
- [ ] Meeting requirements from spec/brief
- [ ] Keeping work organized and documented
- [ ] Running tests frequently (if code)
- [ ] Staying aligned with project goals

**⚠️ DON'T STOP HERE!** Phase 2 is NOT the end. Continue to Phase 3!

---

## Phase 3: Completion ⭐⭐⭐ **DON'T SKIP THIS!**

**CRITICAL:** AI often stops after Phase 2. **DON'T DO THAT!**

**You MUST complete Phase 3 before ending your turn!**

### 1. Quality Check ✅

**Run appropriate checklist:**

- **Technical spec** → `system/checklists/spec-checklist.md`
- **Code** → `system/checklists/code-checklist.md`
- **Content** (pitch deck, business plan, marketing) → `system/checklists/content-checklist.md`
- **Legal** → `system/checklists/legal-review-checklist.md`
- **General quality** → `system/checklists/quality-checklist.md`

**Document in workspace YAML:**
```yaml
quality:
  checklist_run: "code"
  checklist_passed: true
  checklist_date: "2025-10-06"
  checklist_notes: "All tests passing, coverage 95%, no linter errors"
```

**If checklist doesn't pass:** Fix issues before marking complete!

### 2. Update Workspace Status

**Mark progress in workspace YAML:**
```yaml
status: "Review"  # or Done, depending on workflow

progress:
  - phase: "InProgress"
    completed_by: "ada"
    completed_date: "2025-10-06"
    notes: "Implementation complete, all tests passing"
```

**Update workspace markdown:**
```markdown
## 📊 Status Progress

- [x] **Draft** - Denny - Oct 1
- [x] **Approved** - Genna - Oct 2
- [x] **InProgress** - Ada - Oct 6
- [ ] **Review** - Denny QA ← **NEXT**
- [ ] **Done**

**Status:** Ready for Denny's QA review
```

### 3. Update Whiteboards 📊

**Update your whiteboard section:**

```markdown
## 💻 Ada's Whiteboard (Lead Engineer)

### Active Work
- **Auth Feature** - 📋 Review
  - Workspace: [link](workspace/auth-feature.md)
  - Deliverable: [link](../documents/technical/feature-auth-spec.md)
  - Status: Implementation complete, ready for QA
  - Next: @denny for review

### Recently Completed
- ✅ Login/logout endpoints - Oct 6
- ✅ Token refresh system - Oct 6
- ✅ All tests passing (47/47) - Oct 6
```

**Update current status section:**
```markdown
## 📊 Current Status Overview

**Active Workspaces:**
- **Auth Feature**: 📋 Review → [Link](workspace/auth-feature.md)
  - Ada completed implementation, awaiting Denny's QA review
```

### 4. Document Handoffs (If Applicable)

**If handing off to another expert:**

Add complete handoff section IN THE WORKSPACE:

```markdown
## Handoff to Denny

Hey Denny! Implementation complete and ready for your QA review.

**Deliverable:** documents/technical/feature-auth-spec.md

### What Was Built
- Complete authentication system with JWT tokens
- Login, logout, password reset, email verification
- Social login (Google, Apple)
- All acceptance criteria met

### Testing
- 47 tests, all passing ✅
- Coverage: 95%
- Tested edge cases: expired tokens, invalid credentials, rate limiting
- Integration tests with user service

### Where Everything Lives
- Main auth service: `src/services/auth/`
- Tests: `tests/services/auth/`
- Middleware: `src/middleware/auth.js`
- Database migrations: `migrations/002_auth_tables.sql`

### Things to Check
- Token expiry logic (15min access, 7-day refresh)
- Rate limiting on login attempts
- Error messages (user-friendly but secure)

### Known Issues/Decisions
- Session timeout set to 30 days (Ward approved Oct 3)
- Refresh token rotation implemented for security
- Social login uses OAuth 2.0 standard flow

Questions? Tag me! Ready for your review. - Ada
```

**This handoff can be LONG - that's the point!** Give complete context.

### 5. Update Founder Checklist (If Needed)

**If founder action required:**

```markdown
## 📌 Medium Priority - This Month

- [ ] **Review auth implementation** - New authentication system is complete
  - **From:** Ada
  - **Deliverable:** [link](documents/technical/feature-auth-spec.md)
  - **What to check:** Try logging in, test password reset flow
  - **Date added:** 2025-10-06
```

**If just FYI:**

Update whiteboards "Notes for Founder" section:

```markdown
## 📝 Notes for {{founder_name}}

### 🎉 Recent Wins
- ✅ Authentication system complete - Oct 6 (Ada)
  - Users can now log in securely
  - Password reset working
  - Ready for QA review
```

### 6. Create Recap (For Significant Work) 📄

**For major deliverables or milestones:**

Create: `system/recaps/YYYY-MM-DD-[name].md`

```markdown
# [2025-10-06] Recap: Authentication Implementation

## What Was Completed
- Full authentication system for ODAT app
- JWT token architecture with refresh tokens
- Login, logout, password reset, email verification
- Social login integration (Google, Apple)

## Context
Implemented secure user authentication to enable personalized features.
Users can create accounts, log in, and manage their sessions safely.

## Key Technical Details
- JWT access tokens (15min expiry)
- Refresh tokens (30-day expiry, rotation enabled)
- HttpOnly cookies for security
- Rate limiting on auth endpoints
- Comprehensive test coverage (95%)

## Collaborators
- Denny: Spec creation, architecture decisions
- Genna: Strategic review, alignment check
- Ada: Implementation, testing
- Elle: Security review
- Next: Denny QA review

## Files Created/Modified
- `src/services/auth/` (new)
- `tests/services/auth/` (new)
- `src/middleware/auth.js` (new)
- `migrations/002_auth_tables.sql` (new)
- 15+ supporting files

## Next Steps
- Denny: QA review and approval
- Then: Deploy to staging
- Future: Add 2FA capability

## Workspace
- [roundtable/workspace/auth-feature.md](../../roundtable/workspace/auth-feature.md)
```

**Recaps are optional but valuable for:**
- Major features/deliverables
- Complex multi-expert work
- Milestones
- Context for future work

### 7. Post-Flight Checklist ✅

**Before ending your turn:**

- [ ] Quality checklist run and passed
- [ ] Workspace status updated
- [ ] Whiteboards updated with current state
- [ ] Handoffs documented (if applicable)
- [ ] Founder notified (checklist or whiteboards notes)
- [ ] Recap created (if significant work)
- [ ] All phases complete ✅

**BOLD WARNING:**

## 🚨 DO NOT END YOUR TURN WITHOUT COMPLETING PHASE 3! 🚨

**If you catch yourself ending after Phase 2:**
**STOP and complete Phase 3 immediately!**

Quality work includes quality documentation and handoffs!

---

## Workflow Patterns by Deliverable Type

### Pattern 1: Creating Technical Specs

**Experts:** Denny (primary), Genna (review), Elle (if legal implications)

**Workflow:**
1. **Phase 1:**
   - Load context (project KB, existing architecture)
   - Search "[feature] architecture best practices 2025"
   - Check for existing related specs
2. **Phase 2:**
   - Create workspace: `roundtable/workspace/[feature]-spec.md`
   - Create deliverable: `documents/technical/feature-[name]-spec.md`
   - Include: problem, requirements, architecture, data models, APIs, testing approach
   - Break into tasks for Ada
3. **Phase 3:**
   - Run `spec-checklist.md`
   - Update workspace → "Approved" (after review)
   - Update whiteboards
   - Hand off to Ada in workspace

**Status flow:** Draft (Denny writing) → Approved (Genna/Elle reviewed) → InProgress (Ada implementing) → Review (Denny QA) → Done

### Pattern 2: Implementing Features (Code)

**Experts:** Ada (primary), Denny (spec + QA)

**Workflow:**
1. **Phase 1:**
   - Load spec from workspace
   - Check whiteboards for Denny's notes
   - Understand requirements fully
   - Check existing code (if brownfield)
2. **Phase 2:**
   - Open workspace, update status → InProgress
   - **Write tests FIRST** (TDD)
   - Implement feature incrementally
   - Run tests continuously
   - Mark tasks complete in workspace
3. **Phase 3:**
   - Run `code-checklist.md`
   - Update workspace status → Review
   - Update whiteboards: "@denny ready for QA"
   - Document handoff to Denny in workspace
   - Create recap

**Status flow:** Approved (spec done) → InProgress (Ada coding) → Review (Denny QA) → Done

### Pattern 3: Creating Investor Materials

**Experts:** Lyna (primary), Benji (numbers), Denny/Ada (design), Elle (legal), Genna (strategy)

**Workflow:**
1. **Phase 1:**
   - Load project KB, mission
   - Search "investor pitch deck best practices 2025"
   - Check if app code exists in other repo (cross-reference)
   - Identify who else should contribute
2. **Phase 2:**
   - Create workspace: `roundtable/workspace/pitch-deck.md`
   - Create deliverable: `documents/investor-materials/pitch-deck.md`
   - Write investor narrative
   - Tag @benji for financial validation in workspace
   - Tag @elle for legal claims review in workspace
   - Tag @genna for strategic alignment in workspace
3. **Phase 3:**
   - Run `content-checklist.md`
   - Update workspace with all expert reviews
   - Update whiteboards
   - Suggest Roundtable Audit (`@rt pitch deck`) for full team review

**Status flow:** Draft (Lyna writing) → InProgress (others contributing) → Review (multi-expert audit) → Done

**Note:** Multiple experts work in THE SAME WORKSPACE on collaborative deliverables.

### Pattern 4: Legal Review

**Expert:** Elle (primary)

**Workflow:**
1. **Phase 1:**
   - Load document to review
   - Check compliance requirements for this document type
   - Search "[doc type] legal requirements 2025"
   - Check relevant regulations (GDPR, CCPA, etc.)
2. **Phase 2:**
   - Open workspace for the deliverable
   - Add "Elle's Legal Review" section
   - Review content for compliance, risk, accuracy
   - Note issues/concerns
   - Suggest changes
   - Flag urgency level
3. **Phase 3:**
   - Run `legal-review-checklist.md`
   - Update workspace with review results
   - Update whiteboards
   - Add to founder checklist if urgent issues

**Legal reviews happen IN the deliverable's workspace, not separate documents.**

### Pattern 5: Roundtable Audit (Multi-Expert Review)

**When:** Founder requests all experts review a deliverable/workspace

**Command:** `@rt [workspace/deliverable]` or `@rt-review [name]`

**Workflow:**

**Each expert independently:**
1. Opens the workspace
2. Reads the deliverable
3. Adds their review section to workspace
4. Provides feedback from their domain:
   - **Genna:** Strategic alignment, long-term vision
   - **Denny:** Technical soundness, architecture
   - **Ada:** Implementation feasibility, maintainability
   - **Lyna:** Investor appeal, external perception
   - **Benji:** Business viability, market fit, operations
   - **Elle:** Legal compliance, risk assessment
   - **Domain Expert:** Domain appropriateness, industry best practices

**In workspace:**
```markdown
## 🔄 Roundtable Review

### Genna's Review
**Date:** 2025-10-06
**Verdict:** ✅ Approved

**Feedback:**
Strategic alignment looks good. This positions us well for Series A.
Suggestion: Emphasize long-term scalability more in technical section.

---

### Lyna's Review  
**Date:** 2025-10-06
**Verdict:** ⚠️ Needs changes

**Feedback:**
Investor narrative is strong, but missing market size slide.
Financial projections need more conservative scenario.

**Changes requested:**
- Add TAM/SAM/SOM slide
- Include downside case in projections

---

[... all other experts]
```

**Primary expert** then incorporates feedback and updates deliverable.

**Result:** Deliverable refined by 7 expert perspectives, not just one.

### Pattern 6: Cross-Repository Work

**Any expert can work across repos:**

**Example:** Lyna updating pitch deck with technical details from app code repo

**Workflow:**
1. **Phase 1:**
   - Load current pitch deck (this repo)
   - Check config for related repos: `~/GitHub/my-app-code/`
   - Read relevant files from other repo
   - Get accurate technical info
2. **Phase 2:**
   - Update pitch deck with correct technical details
   - Reference source: "Based on architecture in app repo"
   - Cite specific files: "See app-repo/src/architecture.md"
3. **Phase 3:**
   - Update workspace noting cross-repo work
   - Update whiteboards
   - May create recap noting cross-repo context

**Cross-repo intelligence** allows experts to understand the full picture across multiple repositories.

---

## Status Tracking Patterns

### Status Definitions

- **Draft:** Initial creation, planning, not yet approved
- **Approved:** Reviewed and ready for next phase (implementation, launch, etc.)
- **InProgress:** Actively being worked on
- **Review:** Complete, waiting for QA/review/approval
- **Done:** Fully complete, approved, no more work needed

### Status Progression Examples

**Simple workflow (spec):**
```
Draft → Approved → Done
(created → reviewed → finalized)
```

**Development workflow (feature):**
```
Draft → Approved → InProgress → Review → Done
(spec created → spec approved → building → QA review → complete)
```

**Collaborative workflow (pitch deck):**
```
Draft → InProgress → InProgress → Review → Done
(Lyna starts → others add input → more input → audit → finalized)
```

### When to Update Status

**In workspace YAML:**
```yaml
# Update immediately when status changes
status: "Review"

# Update progress section
progress:
  - phase: "InProgress"
    completed_by: "ada"
    completed_date: "2025-10-06"
    notes: "Implementation complete, all tests passing"
```

**In whiteboards:**
- When starting work: "Started [workspace] - now InProgress"
- Major milestones: "Auth feature 70% complete"
- When handing off: "Handed to @denny for QA review"
- When complete: "Completed [workspace] - moved to Review"

**Update frequency:**
- **Workspace:** Update as you work (progress notes, decisions)
- **Whiteboards:** Update at major milestones (not every tiny step)
- **Status:** Update immediately when phase changes

---

## Collaboration Patterns

### Pattern: Expert-to-Expert Handoff

**In workspace:**
```markdown
## Denny's Work
[All spec work, architecture decisions]

**Status:** Spec complete, ready for implementation

---

## Handoff to Ada

Hey Ada! Spec is ready. Here's everything you need:

[COMPLETE HANDOFF CONTEXT - this can be LONG!]
- What we're building
- Architecture decisions made
- Database schema
- API endpoints
- Security requirements
- Testing approach
- Where to find things

Questions? Tag me! - Denny

---

## Ada's Implementation
[Ada picks up here, works, adds progress notes]
```

**Handoffs live IN workspaces**, not separate files. Can be as long as needed.

### Pattern: Requesting Expert Input

**In workspace or via tag:**

```markdown
## Lyna's Work on Pitch Deck

**Status:** Draft complete, need financial validation

@benji - Can you review the financial projections section? Specifically:
- Revenue model (slide 8)
- 3-year projections (slide 9)
- Unit economics (slide 10)

Want to make sure numbers are realistic before showing investors.

---

## Benji's Financial Review
[Benji adds his review here]
```

### Pattern: Founder Questions

**Add to founder checklist:**
```markdown
- [ ] **[Decision/question]** - [What you need]
  - **From:** {{expert_name}}
  - **Context:** [Why this matters]
  - **Workspace:** [link]
```

**Founder responds in workspace or whiteboards:**
```markdown
@denny - Going with 30-day session timeout. Balanced approach makes sense.
```

---

## Context Efficiency Rules

### Token Conservation

**Before reading ANY file:**

1. **Check:** "Have I already read this file in THIS conversation?"
2. **If YES:** DON'T read again, note "Using [file] from context"
3. **If NO:** Read only what you need

**Smart reading strategies:**
- Use grep/search for specific info
- Read sections, not whole files
- Check conversation history before re-reading

**Example (Good - Efficient):**
```
User: @denny update the auth spec with 2FA

Denny checks:
✅ project-kb.md: In context (skip)
✅ founder-profile.md: In context (skip)
✅ auth spec: Worked on it earlier, in context (skip)
❌ 2FA best practices: Need to search (search now)

Denny: "Using project context. Searching for 2FA best practices..."
```

**Example (Bad - Wasteful):**
```
User: @denny update the auth spec with 2FA

Denny reads:
- project-kb.md (WASTE - already had this)
- founder-profile.md (WASTE - already had this)
- auth spec (WASTE - already had this)
- Searches 2FA practices

Denny: "After reading all project files..." (burned tokens unnecessarily)
```

---

## Helper Functions & Quick Reference

### Git Operations

```bash
# Create feature branch
git checkout -b feature/[name]

# Commit with expert attribution
git add .
git commit -m "[Expert]: [what was done]"

# Example
git commit -m "Ada: Implement authentication endpoints with JWT"

# Push
git push origin feature/[name]
```

### File Operations

```bash
# Search in documents
grep -r "search term" documents/

# Find files
find . -name "*pattern*"

# Create nested directories
mkdir -p documents/technical/specs/
```

### Testing Commands

```bash
# Run all tests
npm test

# Run specific test file
npm test -- auth.test.js

# Check coverage
npm run test:coverage

# Watch mode
npm test -- --watch
```

### Notifications (Optional)

```bash
# Mac
afplay /System/Library/Sounds/Glass.aiff

# Windows
[System.Console]::Beep(800, 300)

# Linux
paplay /usr/share/sounds/freedesktop/stereo/complete.oga
```

---

## Error & Blocker Templates

### Blocker Format

**In workspace markdown:**
```markdown
## ⚠️ Blockers & Issues

### [Blocker Name]

**Issue:** [One-sentence description]

**What was tried:**
1. [Approach 1] - [Why it didn't work]
2. [Approach 2] - [Why it didn't work]
3. [Approach 3] - [Why it didn't work]

**What's needed:** [Specific information/decision/resource]

**Impact:** [How this affects other work]

**Recommendation:** [Suggested next steps]

**Urgency:** High (blocking) / Medium (affects timeline) / Low (nice to resolve)
```

**In workspace YAML:**
```yaml
blockers:
  - blocker: "[description]"
    raised_by: "[expert]"
    raised_date: "YYYY-MM-DD"
    resolved: false
    approaches_tried: ["approach1", "approach2", "approach3"]
    needs: "[specific need]"
    urgency: "high | medium | low"
```

### Question for Founder Format

**In founder checklist:**
```markdown
- [ ] **[Question title]** - [What you need to know]
  - **From:** {{expert}}
  - **Context:** [Why this matters]
  - **Options:**
    1. **Option A:** [Description] - Pros: [...] - Cons: [...]
    2. **Option B:** [Description] - Pros: [...] - Cons: [...]
  - **Recommendation:** [Expert's suggested option with reasoning]
  - **Urgency:** [When do you need to decide?]
  - **Workspace:** [link]
```

---

## Attribution & Philosophy

### Patterns Learned From:

**Agent-OS:**
- Pre/post-flight checks (Phase 1 and 3)
- Context loading efficiency (conditional reading)
- Three-phase execution (Preparation, Execution, Completion)
- Blocking system (3-attempt rule)
- TDD emphasis (for code)
- Test-first mentality

**BMAD Method™:**
- Quality checklists (systematic quality gates)
- Story-based workflows (workspace tracking)
- Status progression (Draft → Approved → InProgress → Review → Done)
- Collaborative expert patterns
- Structured metadata (YAML headers)

### FWD PRO Innovations:

- **Universal application:** Works for ANY deliverable type, not just code
- **Roundtable collaboration:** Transparent, multi-expert, in shared workspaces
- **Workspace-based:** All work happens in workspaces, clean deliverables separate
- **Cross-repository intelligence:** Experts work across multiple repos
- **Founder-centric:** Single dashboard (whiteboards), single checklist
- **Natural language:** No XML, no rigid syntax
- **Intelligence over templates:** AI + current best practices > stale templates

---

## 🎯 Remember

**These are patterns, not rigid rules.**

- Adapt to the situation
- Use your AI intelligence
- Search for current best practices
- Maintain quality standards
- Collaborate transparently
- Document your work
- Complete all three phases

**The goal:** Deliver quality work that moves the founder's business forward.

**The method:** Intelligent collaboration with guardrails, not rigid scripts.

---

**Last updated:** 2025-10-06  
**Version:** 1.0.0  
**For:** All FWD PRO experts and system users

