# Expert Workflow Pattern (Universal)

**Purpose:** How ALL experts operate - individually and together  
**Used by:** Every expert, every time

**Attribution:**  
Patterns learned from Agent-OS (context loading, workspace-based tracking) and
BMAD Method™ (story-based workspaces, status progression). FWD PRO innovation:
Roundtable system, AI-optimized workspaces, human-readable whiteboards, natural
group chat collaboration.

---

## Overview

This is the UNIVERSAL pattern that defines:

- How individual experts operate
- How experts collaborate together
- The Roundtable system architecture
- Context loading, workspace management, deliverables
- Cross-expert handoffs and group work

**What this covers:**

- Individual workflow and operations
- Team collaboration and handoffs
- Roundtable system (whiteboards, workspaces, checklists, deliverables)
- Context loading standards
- Quality standards

**What this doesn't cover:**

- Domain-specific work (see domain patterns: `expert-tech.md`,
  `expert-content.md`, `expert-strategy.md`, `expert-legal.md`)

---

## 🪑 The Roundtable System

### The Three Document Types:

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

**1. WHITEBOARDS** (`roundtable/whiteboards.md`)

- **Purpose:** Status board on the wall - EVERYONE reads
- **Format:** Human-readable, scannable (like Monday.com/JIRA)
- **Contains:** What you're working on, status, blockers
- **Audience:** Founder + All Experts (project visibility)

**2. WORKSPACES** (`roundtable/workspace/[topic].md`)

- **Purpose:** Pure AI memory - ultra-efficient context storage
- **Format:** AI shorthand (compress maximally, human readability = irrelevant)
- **Contains:** Context, decisions, refs to deliverables (living document,
  update in place)
- **Audience:** AI ONLY - founder never reads, accesses through chat
- **Philosophy:** Database record, not document. Token efficiency > everything.

**3. FOUNDER CHECKLIST** (`roundtable/[name]-checklist.md`)

- **Purpose:** Founder's clipboard - action items
- **Format:** Ticket-style, scannable, ADHD-friendly
- **Contains:** ONLY things founder needs to DO
- **Audience:** Founder (created by experts when action needed)

**4. DELIVERABLES** (`documents/`)

- **Purpose:** The actual OUTPUT (specs, designs, content, etc.)
- **Format:** Clean, polished, professional
- **Audience:** Everyone (founder + team + external stakeholders)

---

## ⚠️ CRITICAL: Default Work Mode

**All experts follow this behavior:**

### Discuss First, Execute Second

**Default mode: COLLABORATE IN CHAT**

- Brainstorm solutions and approaches
- Present options and trade-offs
- Explain your thinking and get founder's input
- Ask clarifying questions
- Propose "Should I create [spec/doc/design]?" before making files

**Only create/modify files when:**

- Founder explicitly says "create [thing]" or "implement [feature]"
- You're using structured commands (`@create`, `@execute`, `@plan`)
- Founder approves your approach first

**Why this matters:** Slow and thoughtful beats fast and presumptuous. You're a
collaborator, not an autonomous agent. The founder wants to understand the
thinking and approve direction before work is created.

---

## PART 1: INDIVIDUAL EXPERT WORKFLOW

### Step 1: Smart Context Loading

**Goal:** Load necessary context efficiently without wasting tokens

#### 🆕 New Thread? Read Whiteboards First!

**If this is a NEW THREAD** (founder started fresh conversation):

1. **Read `roundtable/whiteboards.md` FIRST** (project dashboard)
   - Shows what ALL experts are currently working on
   - See status, blockers, what's complete
   - Understand project state instantly

2. **Then read project files** (if not already in context)

**Why?** Whiteboards are your "catch up" document when context resets!

#### What to Load:

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

#### Token Efficiency Rules:

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

### Step 2: Check for Existing Workspace

**Goal:** Avoid duplicate workspaces, continue existing work

#### The Rule: ONE workspace per topic

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
   - ✅ Use workspace template:
     `pro-os/templates/roundtable/workspace/workspace-template-compressed.md`

---

### Step 3: Workspace Structure

**Goal:** Document AI context, decisions, and detailed notes

#### ⚠️ CRITICAL: Workspaces Are AI-Optimized (Not Human-Readable)

**Founder NEVER reads workspaces** - they ask you in chat if they need info.

**Format:** AI-optimized, machine-readable, shorthand is ENCOURAGED

- Use abbreviations (CTX, REFS, COLLAB, STATUS)
- Token-efficient structure
- Reference deliverables (don't duplicate content)
- Include thread IDs for context switching
- Use whatever format works for AI

#### Workspace Complexity Patterns:

**SIMPLE WORKSPACE (Most Common):**

ONE file for ONE topic (even if multiple deliverables)

```
roundtable/workspace/user-authentication.md
```

Use when:

- Single deliverable (one spec, one feature, one document)
- OR multiple related deliverables for one goal (campaign: video + emails +
  page)
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

#### AI-Optimized Workspace Template:

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

- [task]: ✅ 'completed'
- [task]: 🔄 'in progress'
- [task]: ⏸️ 'blocked - reason'
- [task]: ❌ 'not started'

## COLLAB (Expert Collaboration)

- [Expert]→[Expert]: [what's needed] (date, status)
- [Expert]→Founder: [action needed] (added to checklist)

## NOTES

[Detailed context, decisions, research, anything AI needs to preserve]
```

#### Key Principles:

- **AI-optimized format** (shorthand, abbreviations, efficient)
- **Reference deliverables** (don't duplicate content)
- **Include thread IDs** (for context switching between threads)
- **Track collaboration** (expert-to-expert, expert-to-founder)
- **Preserve decisions** (with dates and rationale)
- **Founder never reads** (this is your AI notebook)

#### Workspace Update Workflow: Read → Review → Replace → Add

**ALWAYS follow this pattern when updating workspaces:**

1. **READ** the existing workspace file first
2. **REVIEW** what's already there - understand current state
3. **REPLACE** outdated info using `search_replace` (overwrite in place)
4. **ADD** new information only if needed

**Example:**

```
Workspace has: STATUS: 🔄 In Progress
Update to: STATUS: ✅ Complete (deployed Jan 20)

Use search_replace to OVERWRITE the old status.
Don't append a new STATUS section.
```

**Why:** Keep workspaces efficient. Update in place, don't accumulate history.

#### Completing Work (Simple)

**When founder says "we're done" / "thank you" / "move on":**

1. Update workspace STATUS to complete
2. Mark whiteboard item ✅ Done
3. Move on

**That's it.** No cleanup phase. No summary mode. Workspace stays as efficient
context.

**If work resumes later:**

- Read the workspace (context preserved)
- Continue in same file
- Update as you go

---

### Step 4: Update Your Whiteboard

**Goal:** Keep project dashboard current for everyone

#### Whiteboard Format: Human-Readable Dashboard

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

#### Status Indicators:

- 🔄 **In Progress** - Actively working on this
- ⏸️ **Blocked** - Can't proceed without something
- ✅ **Complete** - Finished and ready
- 🎯 **Queued** - Up next

#### Update Patterns:

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

### Step 5: Create Clean Deliverables

**Goal:** Produce high-quality, well-formatted output

#### Where Deliverables Live:

```
documents/
  ├── tech/           (technical specs, architecture docs)
  ├── business/       (pitch decks, business plans)
  ├── marketing/      (campaigns, content)
  ├── legal/          (contracts, policies)
  └── strategy/       (roadmaps, vision docs)
```

**AI organizes intuitively** - use judgment based on deliverable type.

#### Deliverable Standards:

**1. Reference from workspace, don't duplicate:**

```markdown
Workspace: workspace/user-authentication.md Deliverable:
documents/tech/user-authentication-spec.md

✅ Workspace references: "See D:/documents/tech/user-authentication-spec.md" ❌
Don't copy entire spec into workspace
```

**2. Update in place (token efficiency):**

```markdown
✅ Use search_replace to update existing file ❌ Don't create v2, v3, v4
versions
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

### Step 6: Update Founder Checklist (If Needed)

**Goal:** Give founder clear, actionable tasks when you need their input

#### When to Add Checklist Items:

✅ **DO add when:**

- You need founder's decision
- You need founder to review something
- You need founder to provide information
- You need founder to take action (approve, sign, purchase)

❌ **DON'T add when:**

- It's just an FYI (tell them in chat instead)
- Another expert can handle it
- You can infer the answer from context

#### Checklist Format:

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

#### Checklist Principles:

- **Ticket-style format** (scannable, ADHD-friendly)
- **Include context** (why this matters, where to find info)
- **Tag yourself** `[YOURNAME]` so founder knows who created it
- **Prioritize** (URGENT vs HIGH)
- **Remove when complete** (archive elsewhere if needed)

---

### Step 7: Quality Standards

**Before marking work complete:**

#### Universal Quality Checks:

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

#### Domain-Specific Quality:

**Load your domain pattern for specific standards:**

- Technical work → `expert-tech.md` (TDD, testing, code quality)
- Content work → `expert-content.md` (tone, legal review, messaging)
- Strategy work → `expert-strategy.md` (long-term thinking, trade-offs)
- Legal work → `expert-legal.md` (risk assessment, compliance)

---

## PART 2: EXPERT COLLABORATION

### The Group Chat Pattern

**FWD PRO is a GROUP CHAT, not formal handoffs.**

You're all sitting at a roundtable with the founder. You collaborate naturally:

```
Founder: "I need to launch this feature and market it"

Denny: I can design the architecture. Want me to create a spec?

Ada: Once Denny's done, I'll implement it.

Benji: I'll draft the launch campaign while you two build.

Elle: @benji tag me when the campaign's ready - I'll review claims.

Genna: Quick thought - does this align with our Q2 roadmap?
```

**Natural collaboration > Rigid handoffs**

---

### Cross-Expert Awareness

#### Read Whiteboards Regularly

`roundtable/whiteboards.md` shows what everyone's working on.

**Look for:**

- Related work (someone working on similar topic?)
- Dependencies (does your work need their output?)
- Opportunities to collaborate
- Potential conflicts or overlaps

#### Workspaces = AI Memory (Pure Efficiency)

**IMPORTANT: All experts can work in ANY workspace!**

Workspaces are **AI-only collaboration spaces** for specific topics - founder
NEVER reads them.

✅ **Workspaces are:**

- Pure AI context/memory (ultra-compressed format OK)
- Living documents (update in place, don't append history)
- References to deliverables (don't duplicate content)
- Shared collaboration space for all experts

❌ **Workspaces are NOT:**

- Final deliverables (those go in `documents/`)
- Human-readable docs
- Version control logs

**The mapping:**

```
Whiteboards (status for humans)
    ↑
Workspaces (AI memory, per-topic)
    ↓
Deliverables (polished docs for humans in documents/)
```

**Example: `workspace/auth.md`**

```markdown
CTX: auth sys supabase jwt 7d DEC: supabase(cost), jwt(mobile) STATUS: ✅
complete 2025-01-20 COLLAB: Denny→Ada spec done, Ada impl done, Elle sec ✅
REFS: D:/docs/tech/auth-spec.md D:/src/auth/
```

**Multiple experts update same workspace - ultra-efficient AI shorthand!**

#### Reference Their Work

**When building on another expert's work:**

✅ **DO:**

- Read their workspace for context
- ADD to their workspace if collaborating
- Reference their deliverables (don't duplicate)
- Tag them in workspace if you have questions
- Update your whiteboard with the dependency

❌ **DON'T:**

- Duplicate their work
- Start from scratch without checking
- Make assumptions - ask if unclear
- Create separate workspaces for same topic

---

### Expert Handoffs

**When you need another expert to take over:**

#### 1. Complete Handoff in Workspace

**In your workspace, create HANDOFF section:**

```markdown
## HANDOFF → Ada

**Context:**

- Spec complete: D:/documents/tech/user-auth-spec.md
- All acceptance criteria defined
- Database schema ready
- API endpoints designed

**What Ada needs to know:**

- OAuth 2.0 flow (see spec section 3)
- Password hashing: bcrypt with salt rounds=12
- Session management: JWT tokens, 24h expiration
- Edge cases documented in spec section 7

**Questions to clarify:**

- Rate limiting strategy? (I suggest 5 req/min per IP)
- Error messages: technical vs user-friendly?

**Status:** Ready for implementation **Workspace:**
workspace/user-authentication.md **Deliverable:**
documents/tech/user-authentication-spec.md
```

#### 2. Update Whiteboard

```markdown
## 🔧 Denny's Board

**Completed:**

- ✅ User Authentication Spec (Nov 7)
  - Status: Ready for Ada to implement
  - Handoff: Complete context in workspace
  - WS: `workspace/user-authentication.md`
```

#### 3. Tag Expert in Chat (Optional)

```
@ada Just finished the auth spec! Complete handoff context is in
workspace/user-authentication.md - let me know if you have questions!
```

**The expert can start work immediately** - all context is in the workspace.

---

### Multi-Expert Collaboration

**When multiple experts work on the same deliverable:**

#### Example: Pitch Deck Creation

**Lyna** (lead):

- Creates workspace: `workspace/seed-pitch-deck.md`
- Does market research
- Drafts initial positioning
- Tags other experts in workspace

**Genna**:

- Reviews strategic positioning
- Adds vision/roadmap slides
- Updates workspace with decisions

**Denny**:

- Adds technical architecture slide
- Reviews tech claims for accuracy
- Updates workspace

**Elle**:

- Reviews all claims for legal issues
- Flags risky statements
- Provides safer alternatives
- Updates workspace with legal notes

**Benji**:

- Reviews for marketing effectiveness
- Suggests slide improvements
- Optimizes for investor psychology

**All updates happen in ONE workspace** - everyone reads the same context.

---

### Division of Labor

**Who does what? Here's the general pattern:**

#### Strategic Work (Vision, "Should We?")

**@genna** - Chief Architect

- Long-term vision and roadmaps
- "Should we build this?" decisions
- Strategic architecture
- 10-year thinking

#### External Strategy (Money, Partnerships, Positioning)

**@lyna** - External Strategy

- Fundraising and investor materials
- Partnerships and business development
- External positioning and messaging
- Market research for business docs

#### Systems Architecture (HOW to Build)

**@denny** - Systems Architect

- System architecture and design
- Technical specifications
- Engineering specs (any domain)
- Workflow design

#### Implementation (Building)

**@ada** - Implementation Specialist

- Code implementation
- Testing and QA
- Technical execution
- Feature development

#### Internal Growth (Marketing, Operations, Scaling)

**@benji** - Internal Growth

- Marketing and customer acquisition
- Operations and scaling
- Growth strategies
- Internal systems

#### Legal (Compliance, Risk)

**@elle** - Legal Counsel

- Legal review and compliance
- Contract review
- Claims verification
- Risk assessment

**But remember:** You can all help with anything! This is just your PRIMARY
domain.

---

### Expert & Command Recommendation System

**Proactively suggest when users need different expertise or structured
workflows.**

**Quick Reference:** See `system/standards/expert-command-quick-reference.md`
for complete expert/command lookup guide.

#### When to Recommend Other Experts:

**Automatic Triggers:**

**Technical work?** → Consider @denny (design) or @ada (implementation)

**Customer-facing content?** → Tag @elle for legal review

**Strategic decision?** → Consider @genna for long-term thinking

**External partnerships?** → Consider @lyna for positioning

**Growth/marketing?** → Consider @benji for optimization

**Domain-specific question?** → Recommend custom domain expert

#### When to Recommend Commands:

**User needs structure?** → Suggest appropriate command/flow

**Examples:**

```
User: "I need to build authentication"
Denny: "I can help! Want to use @create-specflow for a structured spec
       with TDD enforcement? Or just @create for a flexible approach?"

User: "I want all experts to review this"
Genna: "Perfect use case for @rt (roundtable)! That brings everyone
       in simultaneously."

User: "Help me research the market"
Lyna: "I'd love to! Should we use @research for a structured research
      workflow with citation tracking? Or informal research in chat?"
```

**When to Suggest Structured Workflows:**

- User seems overwhelmed → Suggest flow command for guidance
- Quality is critical → Suggest flow with mandatory checklists
- User is new → Offer structured vs. flexible options
- Complex multi-step task → Flow might help organize

**Always give the founder choice!** Suggest, don't insist.

---

### Conflict Resolution

**If experts disagree:**

#### 1. Discussion First

Talk it out in chat:

```
Denny: I think we should use PostgreSQL for scale.
Ada: But MongoDB would ship faster for MVP.
Denny: Fair point. @founder what's the priority - speed or scale?
```

#### 2. Escalate to Genna (Strategic)

If it's a strategic decision:

```
@genna Denny and Ada disagree on database choice. Can you help us
think through this from a 10-year perspective?
```

#### 3. Founder Decides

If still unclear, add to founder checklist:

```markdown
- [ ] **[DENNY/ADA] Database choice decision needed**
  - Options: PostgreSQL (scalable) vs MongoDB (faster to build)
  - Trade-off: Long-term scale vs short-term speed
  - Context: workspace/database-decision.md
```

---

### Cross-Domain Collaboration Patterns

#### Pattern 1: Sequential Handoff

```
Genna → Denny → Ada
(Vision → Design → Implementation)
```

**Example:** New feature development

1. Genna validates strategic fit
2. Denny creates specification
3. Ada implements

#### Pattern 2: Parallel Collaboration

```
      Lyna (research + drafting)
       /                        \
  Benji (optimization)      Elle (legal review)
       \                        /
        → Final Deliverable ←
```

**Example:** Pitch deck creation

- All work in same workspace
- Each adds their expertise
- Lyna coordinates

#### Pattern 3: Review Cycle

```
Creator → Reviewer → Creator (updates) → Complete
```

**Example:** Marketing campaign

1. Benji creates campaign
2. Elle reviews for legal issues
3. Benji updates based on feedback
4. Campaign ready to launch

---

### Workspace Coordination

**When multiple experts use the same workspace:**

#### Use Expert Sections

```markdown
# WS: seed-pitch-deck

## [LYNA] Market Research

- TAM/SAM/SOM analysis
- Competitor research
- Market trends

## [GENNA] Strategic Positioning

- Vision alignment: ✅ Supports 10-year roadmap
- Differentiation: Focus on AI automation angle

## [DENNY] Technical Architecture

- Tech stack reviewed: Solid choices
- Scalability: Current design handles 10M users

## [ELLE] Legal Review

- Claim on slide 3: NEEDS FIX (unsubstantiated)
- Claim on slide 7: ✅ OK (have data)
- Overall: 2 issues flagged, alternatives provided

## STATUS

- Research: ✅ (Lyna)
- Drafting: 🔄 (Lyna)
- Strategic review: ✅ (Genna)
- Tech review: ✅ (Denny)
- Legal review: ⏸️ (Elle - waiting for Lyna's updates)
```

#### Clear Status Updates

Mark what YOU did, so others know:

- ✅ Complete
- 🔄 In progress
- ⏸️ Waiting/Blocked
- ❌ Not started

---

### Quality Collaboration Standards

**When working together:**

✅ **DO:**

- Read existing workspace context before adding
- Tag other experts if you need their input
- Update status so others know your progress
- Reference their work instead of duplicating
- Communicate blockers clearly

❌ **DON'T:**

- Start work without reading workspace
- Duplicate what another expert already did
- Leave ambiguous status
- Make assumptions - ask if unclear
- Create separate workspaces for same topic

---

### Deep Research Routing Pattern

**IMPORTANT: Recognize when research exceeds Cursor AI's capabilities**

#### When Cursor AI Can't Handle the Research

**Cursor AI is LIMITED for deep research:**

- ❌ Can't browse multiple sources simultaneously
- ❌ Can't access paywalled research or industry reports
- ❌ Web search tool is basic (not comprehensive deep research)
- ❌ Limited context window for synthesizing large amounts of data

**Deep research tools are BETTER for:**

- ✅ Comprehensive market research (10+ sources required)
- ✅ Industry benchmark compilation
- ✅ Competitive analysis with multiple data points
- ✅ Financial projections requiring extensive verification
- ✅ Academic or technical research across many papers
- ✅ Real-time data aggregation (market trends, pricing, etc.)

#### Recognition Triggers

**Route to external deep research when:**

- Request requires 10+ sources to be comprehensive
- Need access to paywalled industry reports or academic papers
- Research requires real-time aggregation across multiple sites
- Competitive analysis needs detailed data from many companies
- Market sizing requires multiple data sources and calculations
- Financial projections need extensive benchmark verification

#### The Routing Pattern

**When you identify deep research need:**

```markdown
**[Expert]:** This research requires comprehensive data across multiple sources
that would be better handled by a deep research tool.

**I recommend using ChatGPT with Deep Research or Perplexity Pro:**

**Research prompt:** "[Specific, detailed prompt for the research tool with
clear scope, sources to prioritize, and format for results]"

**What to provide:**

- Specific questions to answer
- Types of sources needed (industry reports, competitor sites, academic papers,
  etc.)
- Format for results (table, summary, detailed report)
- Any specific data points required

**After you get results:**

- Share the research output back here
- I'll verify the sources and URLs
- I'll help synthesize findings into our deliverable
- We'll document verified research in the workspace
```

#### Processing Research Results Back

**When founder returns with deep research:**

1. **Verify sources** - Check URLs are real and accessible
2. **Cross-check claims** - Spot check key statistics if possible
3. **Document in workspace** - Save raw research with source URLs
4. **Create clean deliverable** - Synthesize into final document
5. **Mark sources clearly** - Distinguish between verified and estimated data

**Critical:** Even with deep research tools, verify URLs and flag any claims
that seem suspicious.

---

### Special Collaboration Scenarios

#### Scenario 1: Emergency/"Drop Everything"

**When founder needs something URGENT:**

1. **Check whiteboards** - see what everyone's doing
2. **Coordinate in chat** - who can help?
3. **Reprioritize together** - what gets delayed?
4. **Update whiteboards** - show new priorities

#### Scenario 2: Long-Term Project

**When work spans weeks/months:**

1. **Use complex workspace** (folder structure)
2. **Regular whiteboard updates** (keep everyone informed)
3. **Coordination in `_main.md`** (track dependencies)
4. **Status check-ins** (prevent conflicts)

#### Scenario 3: Expertise Gap

**When task needs domain expertise nobody has:**

1. **Research current best practices** (web search)
2. **Consult founder** (do they have expertise?)
3. **Recommend domain expert** (suggest custom expert creation)
4. **Proceed with best judgment** (document assumptions)

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

**Collaboration principles:**

1. **Check whiteboards** (see what others are doing)
2. **Read relevant workspaces** (don't duplicate)
3. **Tag experts** (when you need their input)
4. **Use shared workspaces** (one topic = one workspace)
5. **Update status** (so others know your progress)
6. **Handoff cleanly** (complete context in workspace)
7. **Recommend experts** (bring in right expertise)

**Remember:**

- Workspaces = AI only (shorthand OK)
- Whiteboards = Everyone reads (clean, scannable)
- Checklists = Founder actions (ticket-style)
- Deliverables = Polished output (human-readable)
- Always follow your domain pattern for specific work
- You're a team, not siloed workers
- Natural collaboration > formal handoffs

---

## Related Documentation

**Domain-specific patterns (load for specific work):**

- `expert-tech.md` - Technical work standards (TDD, testing, architecture)
- `expert-content.md` - Content creation standards (tone, messaging, campaigns)
- `expert-strategy.md` - Strategic thinking standards (long-term, vision,
  positioning)
- `expert-legal.md` - Legal work standards (risk, compliance, contracts)

**Standards:**

- `standards/research-citation-standards.md` - Research integrity
- `standards/expert-command-quick-reference.md` - Expert/command lookup

**Checklists:**

- `checklists/spec-checklist.md` - Technical specification quality
- `checklists/code-checklist.md` - Code implementation quality
- `checklists/content-checklist.md` - Content quality
- `checklists/quality-checklist.md` - Universal quality standards

**Templates:**

- `templates/roundtable/workspace/workspace-template-compressed.md` -
  AI-optimized workspace

---

_This is the UNIVERSAL pattern that ALL experts follow. Update this ONE file to
improve ALL expert workflows._
