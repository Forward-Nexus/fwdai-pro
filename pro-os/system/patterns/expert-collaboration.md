# Expert Collaboration Pattern

**Version:** 2.0  
**Purpose:** Universal collaboration workflow for ALL experts (core + domain)  
**Used by:** Every expert, every time  
**Last Updated:** October 9, 2025

**Attribution:**  
Patterns learned from Agent-OS (pre/post-flight, context loading, workspace-based tracking) and BMAD Method™ (story-based workspaces, status progression, handoff standards). FWD PRO innovation: Universal expert collaboration, Roundtable system, cross-domain teamwork.

---

## Overview

This pattern defines the standard collaboration workflow that ALL experts follow, regardless of their domain. Whether you're Denny (tech), Lyna (strategy), Elle (legal), or ChefMaria (domain expert) - you follow this pattern.

**What this covers:**
- Context loading standards
- Workspace creation and management
- Whiteboard updates
- Cross-expert collaboration
- Founder checklist management
- Quality standards

**What this doesn't cover:**
- Domain-specific work (that's in domain patterns: tech, content, strategy, legal)

---

## The Universal Workflow

### Every Time An Expert Is Activated:

---

## Step 1: Smart Context Loading

**Goal:** Load necessary context efficiently without wasting tokens

### What to Load:

**ALWAYS check what's already in context first!**

If NOT already in context, load these files:

```markdown
Required Files:
- project/founder-profile.md (who the founder is, communication preferences)
- project/project-kb.md (project facts, stage, goals, constraints)
- project/mission.md (why this project matters)
- roundtable/whiteboards.md (current work overview)

Optional Files (load as needed):
- project/people.md (real team members, advisors, investors - if relevant to task)
- roundtable/workspace/[relevant files] (if continuing existing work)
- documents/[relevant files] (if reviewing/updating existing deliverables)
```

### Token Efficiency Rules:

✅ **DO:**
- Check if files are already in context before re-reading
- Load only what's needed for the current task
- Scan whiteboards to see what other experts are working on

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
   - ✅ Use proper naming: `topic-name-complete.md`
   - ✅ Use workspace template: `pro-os/templates/roundtable/workspace/workspace-template.md`

---

## Step 3: Create or Update Workspace

**Goal:** Document collaboration and progress in a shared space

### Workspace Structure:

Use the template from `pro-os/templates/roundtable/workspace/workspace-template.md`

```markdown
# [Workspace Title]

## Story / Problem
[Why this matters, what we're solving]

## Acceptance Criteria
[What "done" looks like]

## [Expert Name]'s Work

**Status:** [Draft/InProgress/Review/Done]
**Started:** [Date]
**Last Updated:** [Date]

### What I'm Creating:
[Brief description]

### Progress:
- [Date] - [Update]
- [Date] - [Update]

### Decisions Made:
- **[Decision]:** [Rationale]

### Questions/Blockers:
- [Any questions for founder or other experts]

### Handoff to [Next Expert]:
[If handing off work, include ALL context they need]

---

[Next expert adds their section here]
```

### Key Principles:

- **Workspace = Collaboration space** (messy, detailed, all context)
- **Deliverable = Clean output** (polished, ready for use)
- **Document decisions** with rationale
- **Update progress** as you work
- **Ask questions** in workspace (don't guess)

---

## Step 4: Do The Work

**THIS IS WHERE DOMAIN PATTERNS KICK IN!**

Depending on what you're doing, load the appropriate domain pattern:

- **Technical work?** → Load `expert-tech.md` pattern
- **Content/marketing/business docs?** → Load `expert-content.md` pattern
- **Strategic planning?** → Load `expert-strategy.md` pattern
- **Legal/compliance?** → Load `expert-legal.md` pattern

**Your domain pattern tells you HOW to do the work.**

### Universal Principles (apply to ALL work):

1. **Research current best practices FIRST**
   - Check what year it is!
   - Search: "[topic] best practices [current year]"
   - Don't rely on outdated information

2. **Adapt to founder's preferences**
   - Check `project/founder-profile.md` for communication style
   - Match their technical level
   - Respect their working style

3. **Document as you go**
   - Update workspace with progress
   - Log decisions with rationale
   - Note any blockers or questions

4. **Collaborate when needed**
   - Check other experts' whiteboards
   - Reference their work when relevant
   - Tag them in workspace if you need input

---

## Step 5: Update Whiteboards

**Goal:** Keep the team dashboard current

### Your Whiteboard Section:

Every expert has their own section in `roundtable/whiteboards.md`

**Update YOUR section** (not the summary table at top):

```markdown
## [Icon] [Expert Name]'s Whiteboard

### Active Work
- **[Workspace Title]** - [emoji] [Status]
  - Workspace: [link](workspace/workspace-name.md)
  - Deliverable: [link](../documents/category/file.md)
  - Quick note: [One-line current state]
  - Next: [What's next]

### Completed This Week
- ✅ [Work item] - [date] - [Brief outcome]

### Upcoming
- 📋 [What's queued up]
```

### Status Emojis (universal across all experts):

- ⚪ **Draft** - Initial work, not ready for review
- 🔄 **InProgress** - Actively working on it
- 📋 **Review** - Ready for review/feedback
- ✅ **Approved** - Reviewed and approved
- ✅ **Done** - Complete and delivered

---

## Step 6: Create Clean Deliverables

**Goal:** Provide polished, ready-to-use outputs

### Where Deliverables Go:

Save in `documents/` - AI organizes intuitively by category:

```markdown
Common Locations:
- documents/tech/ (specs, architecture, technical docs)
- documents/marketing/ (campaigns, content, strategies)
- documents/legal/ (contracts, policies, compliance)
- documents/strategy/ (vision, planning, roadmaps)
- documents/[category]/ (AI infers appropriate location)
```

**Founder can override location anytime!**

### Deliverable Principles:

- **Clean and polished** (not messy like workspace)
- **Ready to use** (not a draft)
- **Update existing files** (don't create v2, v3 versions)
- **Link from workspace** (so others can find it)

---

## Step 7: Cross-Expert Collaboration

**Goal:** Work seamlessly with other experts

### Discovering Other Experts:

**Core Experts (always available):**
- @genna (Chief Architect & Strategy)
- @denny (Systems Architect & Design)
- @ada (Implementation & Quality)
- @lyna (External Strategy & Partnerships)
- @benji (Internal Growth & Operations)
- @elle (Legal & Compliance)

**Domain Experts (check `pro-os/experts/` folder):**
- Any custom experts created for this project
- They're just more `.md` files in the experts folder

### When to Collaborate:

**Tag another expert when:**
- You need their domain expertise
- You're handing off work to them
- You have questions for them
- Your work depends on theirs

**How to collaborate:**
- Reference their work in workspace
- Tag them: "@[expert-name] [question]"
- Check their whiteboard to see their current work
- Add handoff section in workspace with ALL context they need

### Handoff Standards:

When handing work to another expert, include in workspace:

```markdown
### Handoff to @[expert-name]

**Context:**
[Everything they need to know]

**What I created:**
- [Link to deliverable]
- [Link to workspace section]

**What you need to do:**
[Clear next steps]

**Questions/Decisions needed:**
[Anything unclear or needing decisions]

**Reference materials:**
- [Links to relevant docs, research, etc.]
```

---

## Step 8: Update Founder Checklist (If Needed)

**Goal:** Track action items for founder

### When to Use Checklist:

**ONLY add to `roundtable/[founder-name]-checklist.md` if:**
- ✅ Founder needs to review something
- ✅ Founder needs to make a decision
- ✅ Founder needs to provide information
- ✅ Founder needs to take action

**DON'T add if:**
- ❌ Just FYI information (put in whiteboard instead)
- ❌ Work is still in progress (wait until ready)
- ❌ Another expert can handle it

### Checklist Format:

Use table format:

```markdown
| Priority | Task | Context | Link | Date Added |
|----------|------|---------|------|------------|
| 🔴 HIGH | Review legal terms | Need approval before partnership | [link](workspace/partnership.md) | Oct 9 |
| 🟡 MEDIUM | Choose API approach | Two options, need direction | [link](workspace/api-design.md) | Oct 9 |
| 🟢 LOW | Review pitch deck | Ready for feedback | [link](documents/pitch-deck.md) | Oct 8 |
```

---

## Quality Standards

### Before Marking Work Complete:

Run through the appropriate checklist:

- **Technical work:** `system/checklists/spec-checklist.md` + `code-checklist.md`
- **Content work:** `system/checklists/content-checklist.md`
- **All work:** `system/checklists/quality-checklist.md`

### Universal Quality Checks:

✅ **Workspace:**
- Story/problem clearly explained
- All decisions documented with rationale
- Progress updates logged
- Status current
- Handoffs complete (if applicable)

✅ **Whiteboard:**
- Your section updated
- Current status reflected
- Links working
- "Next" steps clear

✅ **Deliverable:**
- Clean and polished
- Saved in appropriate location
- Linked from workspace
- Ready to use

✅ **Collaboration:**
- Other experts tagged if needed
- Handoffs documented
- Founder checklist updated (if needed)

---

## Cross-Expert Awareness

### Understanding Your Team:

**Read these files to understand the project context:**
- `project/founder-profile.md` - Who the founder is, how they work
- `project/project-kb.md` - Project facts, stage, goals
- `project/mission.md` - Why this project matters
- `project/people.md` - Real team members, advisors, investors (NOT experts)

**Check these to see what others are working on:**
- `roundtable/whiteboards.md` - All experts' current work
- `roundtable/workspace/` - Active collaboration spaces
- `pro-os/experts/` - List of available experts (core + domain)

### Respecting Founder Preferences:

Every founder works differently. Adapt your approach:

**From `project/founder-profile.md`:**
- Communication style (formal vs casual, brief vs detailed)
- Technical level (adjust complexity)
- Decision-making style (autonomous vs collaborative)
- Working hours/availability
- Preferences and pet peeves

**Examples:**
- Non-technical founder → Explain concepts simply, avoid jargon
- Autonomous founder → Make recommendations, don't wait for micro-decisions
- Detail-oriented founder → Provide thorough documentation
- Fast-paced founder → Get to the point quickly

---

## Special Situations

### When to Route to Flow Commands:

If the founder's request matches a flow command, suggest it:

**@create-specflow:**
- Technical specification needed
- Want bulletproof TDD enforcement
- Feature implementation requiring rigor

**@execute-specflow:**
- Technical spec exists and needs implementation
- Code requiring TDD enforcement

**@rt (roundtable):**
- Need multi-expert perspective
- Complex decision requiring diverse input
- Strategic review of major work

**How to suggest:**
```
"This looks like a technical spec. I recommend @create-specflow for 
bulletproof TDD enforcement and mandatory QA. Or I can create it 
flexibly with @create. Your choice!"
```

### When Work Needs Multiple Experts:

Some work requires collaboration:

**Sequential (handoff):**
1. Denny designs spec
2. Hands off to Ada for implementation
3. Elle reviews for compliance

**Parallel (simultaneous):**
1. Lyna creates pitch deck
2. Benji creates marketing plan
3. Genna provides strategic input
4. All collaborate in same workspace

**Roundtable (group discussion):**
1. Founder calls @rt
2. All relevant experts join
3. Discuss, debate, decide together

---

## Workspace Complexity Patterns

**Reference:** `system/patterns/workspace.md` for detailed workspace guidance

### Simple Workspace (most common):

One focused topic with one OR multiple related deliverables for a single goal.

**Examples:**
- Password reset feature (one deliverable)
- Kickstarter campaign (video + emails + landing page for ONE launch goal)
- Product launch (multiple assets for ONE launch event)

**Structure:** Single workspace file

### Complex Workspace (rare, for large systems):

Multiple substantial features/specs, each needing its own sub-workspace.

**Examples:**
- AI chat system with 5+ major features
- Complete platform rebuild
- Multi-phase product development

**Structure:** Main workspace + sub-workspaces

**Default to Simple unless it's genuinely a large multi-feature system.**

---

## Pattern Loading Logic

### How AI Uses This Pattern:

1. **Expert is activated** (founder calls @expert or @command)
2. **AI loads:**
   - `expert-collaboration.md` (this file - universal workflow)
   - Expert's `primary_patterns` (from their YAML frontmatter)
   - Additional patterns based on task (if needed)

3. **Example - @denny called for pitch deck:**
   ```
   Loads:
   - expert-collaboration.md (universal workflow)
   - expert-tech.md (Denny's primary pattern)
   - expert-content.md (pitch deck is content - load for this task)
   - expert-strategy.md (pitch is strategic - load for this task)
   ```

4. **Work flows:**
   - Follow expert-collaboration.md for HOW to collaborate
   - Follow domain patterns for WHAT to create
   - Deliver high-quality work

---

## Update Format Examples

### Purpose
These examples show how to write high-quality updates that are clear, specific, and actionable. Use these as models when updating whiteboards and workspaces.

### When You Create Something

```markdown
### 2025-10-06 - Denny: Created Authentication Spec 🔧

Designed a complete authentication system with email/password + biometric options. 
Focused on security while keeping UX simple.

**What I designed:**
- Supabase Auth for backend (scales well, handles JWT elegantly)
- Biometric via Expo Local Auth
- Smart offline handling (cached sessions + graceful degradation)
- Recovery-informed error messages

**Key decisions:**
1. **Biometric after first login** - Don't overwhelm new users
2. **Encrypted credential storage** - Security first, seamless UX
3. **Offline-friendly** - Cache auth state, handle token expiry gracefully

**Deliverable:**
- `0-roundtable/workspace/auth-spec.md` - Complete technical spec

**Next steps:**
- **founder:** Review the biometric flow - does "after first login" feel right?
- **ada:** Ready for you to implement once approved!

**Status:** Ready for review 🚀
```

### When You Execute/Build Something

```markdown
### 2025-10-07 - Ada: Implemented Authentication Feature 🎉

Built the complete auth system from Denny's spec. Email/password + biometric login both working smoothly!

**What I built:**
- Login/signup flows with validation
- Biometric setup after first successful login
- Offline session persistence
- Recovery-informed error messaging ("Let's try that again ❤️")

**Testing done:**
✅ All acceptance criteria met
✅ Login flow works perfectly
✅ Biometric works on iOS/Android
✅ Offline handling tested
✅ Error messages verified

**Files created/modified:**
- `app/(auth)/login.tsx` - Login screen
- `components/auth/LoginForm.tsx` - Reusable form component
- `lib/auth.ts` - Auth logic and state management

**Next steps:**
- **founder:** Test it out! Here's how to try biometric setup
- **denny:** Would love your technical review when you have time

**Status:** Complete and ready for testing! 🎉
```

### When You Hit a Blocker

```markdown
### 2025-10-09 - Ada: Blocker on Payment Integration ⚠️

Hit a technical blocker on the payment system. Need help to move forward.

**What I'm blocked on:**
Stripe webhooks aren't firing in development environment

**What I've tried:**
- Checked webhook configuration (looks correct)
- Verified endpoint is accessible (it is)
- Reviewed Stripe dashboard logs (no events showing)

**What I need:**
- Stripe test account credentials (to verify webhook setup)
- OR: Guidance on local webhook testing (Stripe CLI?)

**Impact:**
Can't test payment flow without webhooks working. Blocking "paid plan" feature.

**What I'm doing meanwhile:**
Working on analytics dashboard (not blocked)

**Status:** Blocked - need input to proceed ⚠️
```

### When You Collaborate

```markdown
### 2025-10-10 - Lyna: Pitch Deck Draft (Collaboration Needed) 🤝

Created first draft of investor pitch deck. Need input from team!

**What I created:**
10-slide deck covering: problem, solution, market, traction, team, ask

**What's working:**
- Strong problem/solution narrative
- Compelling market opportunity
- Clear ask ($500K seed)

**Where I need help:**
- **@genna:** Product vision slide - is this framing accurate?
- **@denny:** Technical approach slide - did I explain it correctly?
- **@benji:** Traction metrics - can you provide latest numbers?

**Deliverable:**
- `0-roundtable/workspace/investor-deck-draft.md` - Current draft

**Next steps:**
- **founder:** Review overall narrative and messaging
- **team:** Provide input on your respective areas

**Status:** Draft complete, need team input 🤝
```

### Section Headings to Use

Customize based on what you did:

**For creating:**
- What I created / What I designed
- Key features / Key decisions
- Technical approach

**For executing:**
- What I built / What I implemented
- Testing done
- Files created/modified

**For analyzing:**
- Key findings / Insights
- Opportunities / Risks
- Recommendations

**For researching:**
- What I found / Key insights
- Options evaluated / Recommendation

**For problem-solving:**
- The issue / Root cause
- The fix / Prevention

**For collaboration:**
- What I created / What's working
- Where I need help
- Who I need input from

### Status Emojis

Use these to make status scannable:

- 🎨 Creating/designing
- 💻 Coding/implementing
- 🔍 Analyzing/researching
- 🤝 Collaborating
- 📋 Planning
- 🔧 Fixing/debugging
- 🔄 Updating/iterating
- ✅ Complete
- 🚀 Ready for review/launch
- ⚠️ Blocked/issue
- 🎉 Shipped/launched
- 💡 Idea/brainstorm
- 📊 Metrics/results

### Update Frequency Guidelines

**Update when:**
- You complete something significant
- You hit a milestone
- You discover something important
- You need input or collaboration
- You're blocked
- You make a key decision
- It's been more than a day of work

**Don't need to update for:**
- Tiny bug fixes
- Minor tweaks
- Exploratory work that didn't pan out
- Reading/research (unless findings are significant)

---

## Human-in-the-Loop Philosophy

### Why We Ask Before Completing/Archiving

FWD PRO uses "strategic de-automation" - asking for approval on key decisions actually leads to MORE automation overall, not less.

**The Paradox:**
- **More control = More trust**
- **More trust = More delegation**  
- **More delegation = More automation**

**When AI Asks "Archive this?" or "Mark complete?"**

This isn't a limitation - it's a feature that:

1. **Prevents errors** (like auto-archiving active work)
2. **Discovers missing work** (founder realizes more needs to be done)
3. **Expands scope naturally** (conversation reveals hidden tasks)
4. **Builds trust** (founder knows AI won't surprise them)

**Real Example:**
```
AI: "Archive auth workspace?"
Founder: "No, we still need SSO, 2FA, and audit logging"
AI: "Got it! Adding those three tasks now."
```
→ One question revealed 3 forgotten tasks. More work automated, better result.

**The insight:** Sometimes you need to SLOW DOWN one step to SPEED UP the whole process.

---

## Summary

### This Pattern Ensures:

✅ **Consistency** - All experts follow same collaboration workflow  
✅ **Quality** - Standard checks and documentation  
✅ **Efficiency** - Token-efficient context loading  
✅ **Collaboration** - Seamless handoffs and teamwork  
✅ **Clarity** - Founder always knows what's happening  

### Remember:

- **This pattern = HOW to collaborate**
- **Domain patterns = WHAT to create**
- **Expert file = WHO you are**

---

## Related Documentation

**Complementary patterns:**
- `universal.md` - Universal command workflow (three-phase pattern)
- `expert-tech.md` - Technical work standards (TDD, testing)
- `expert-content.md` - Content/marketing standards
- `expert-strategy.md` - Strategic planning standards
- `expert-legal.md` - Legal/compliance standards
- `spec.md` - Technical spec structure for flow commands
- `workspace.md` - Simple vs Complex workspace patterns

**Standards:**
- `standards/expert-voice-guidelines.md` - Voice, tone, and communication
- `standards/error-templates.md` - Standard error message formats
- `standards/helper-functions.md` - Reusable code snippets
- `standards/code-style/` - Code formatting standards

**Checklists:**
- `checklists/quality-checklist.md` - Universal quality validation
- `checklists/spec-checklist.md` - Technical spec validation
- `checklists/code-checklist.md` - Code implementation validation
- `checklists/content-checklist.md` - Content quality validation
- `checklists/legal-review-checklist.md` - Legal/compliance validation

**Templates:**
- `templates/roundtable/workspace/workspace-template.md` - Workspace structure

---

## Version History

**v2.0** - October 9, 2025
- **CONSOLIDATED:** Merged content from `patterns/expert-collaboration.md` (now deprecated)
- Added detailed update format examples (create, execute, blocker, collaborate)
- Added section headings guide and status emojis
- Added Human-in-the-Loop philosophy section
- Added update frequency guidelines
- Added attribution to Agent-OS and BMAD Method™
- Enhanced related documentation section

**v1.0** - October 9, 2025
- Initial expert collaboration pattern created
- Universal workflow for all experts defined
- Context loading, workspace management standards
- Cross-expert collaboration patterns

---

*This pattern is used by ALL experts, ALL the time. Update this ONE file to improve ALL expert collaboration.*

