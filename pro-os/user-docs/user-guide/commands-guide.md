# Commands Guide

**Complete reference for all FWD PRO commands with examples**

---

## Understanding Commands

Commands are pre-built workflows that help you work with experts efficiently. Think of them as structured templates for common tasks.

### Three Types:

1. **Universal Commands** - Flexible, AI-inferred workflows (create, execute, analyze, update, fix, research, brainstorm, plan)
2. **Flow Commands** - Structured, pattern-based workflows with enforced quality gates (create-specflow, execute-specflow, rt)
3. **System Commands** - Manage FWD PRO itself (update-project, create-expert, create-flow, etc.)

**What's the difference?**
- **Universal** = AI figures out the structure based on your request, flexible and adaptive
- **Flow** = Follows a specific predefined pattern with mandatory quality checks for consistency

---

## How Command Activation Works (Behind the Scenes)

**When you type `@create` or any command, here's what happens automatically:**

```
@create authentication spec
  ↓
.cursor/rules/commands/create.mdc (TRIGGERS)
  ↓
LOADS:
- create.md (command workflow)
- quality-checklist.md (quality enforcement)
- spec-checklist.md (for specs)
- research-citation-standards.md (if making claims)
  ↓
Command executes with quality enforcement built-in!
```

**This happens for ALL commands:**
- `@create` → Loads workflow + quality checklists
- `@execute` → Loads workflow + code/content checklists
- `@create-specflow` → Loads workflow + **MANDATORY** spec checklist (no skipping!)
- `@execute-specflow` → Loads workflow + **MANDATORY** code checklist + tests required
- `@research` → Loads workflow + **MANDATORY** citation standards (no fake research!)

**Quality is automatically enforced!** You don't need to remember to run checklists - the system loads them automatically.

**Where are these `.mdc` files?**
- Command triggers: `.cursor/rules/commands/*.mdc`
- Flow triggers: `.cursor/rules/commands/flows/*.mdc`

**You usually don't need to edit these!** They're part of the FWD PRO system.

---

## How Commands Work with Experts

**IMPORTANT:** Universal commands work with ANY expert. They don't "route" automatically.

**How to use commands:**

### Option 1: Tag an expert + command
```
@denny @create authentication spec
@ada @fix the login bug
@lyna @research seed funding landscape
```

### Option 2: Just describe what you need
```
I need a technical spec for authentication
Can someone fix the login bug?
Help me research the seed funding landscape
```

The AI will understand and engage the right expert based on context.

### Option 3: Use command standalone
```
@create authentication spec
@fix login bug
```

The AI will determine which expert should handle it based on your project context and active experts.

**Key principle:** YOU control who does the work by tagging them, or let AI route based on context.

---

## Universal Commands

Universal commands are flexible workflows that ANY expert can use. The expert you tag (or that AI selects) will adapt the command to fit the task.

---

### @create

**Purpose:** Create new deliverables

**Works with:** Any expert (you choose, or AI routes based on what you're creating)

**Examples:**
```
@denny @create technical spec for authentication
@lyna @create pitch deck for seed round
@benji @create marketing plan for launch
@elle @create privacy policy
@genna @create roadmap for Q1
```

**Or just:**
```
@create authentication spec
→ AI routes to appropriate expert (likely Denny for tech spec)
```

**What Happens:**
1. Expert asks clarifying questions
2. Researches best practices
3. Creates deliverable in workspace
4. Finalizes clean version in `documents/`
5. Updates whiteboards

**Use When:** You need something created from scratch

---

### @execute

**Purpose:** Build/implement something

**Works with:** Any expert (commonly Ada for code, but others can execute plans/strategies)

**Examples:**
```
@ada @execute the auth spec Denny created
@ada @execute this feature design
@benji @execute the marketing campaign we planned
```

**What Happens:**
1. Expert reviews what to build
2. Asks clarifying questions
3. Implements according to spec/plan
4. Tests/validates
5. Delivers result + documentation

**Use When:** You have a spec/plan and need implementation

---

### @analyze

**Purpose:** Research and analyze data, situations, or options

**Works with:** Any expert

**Examples:**
```
@benji @analyze our competitors in recovery apps
@denny @analyze which database is best for our use case
@lyna @analyze fundraising landscape for mental health tech
@genna @analyze whether we should pivot to B2B
```

**What Happens:**
1. Expert researches topic thoroughly
2. Gathers data and sources
3. Analyzes findings
4. Provides recommendations
5. Saves analysis to `documents/`

**Use When:** You need research or analysis on a topic

---

### @review

**Purpose:** Review work and provide feedback

**Works with:** Any expert (tag specific expert for their domain expertise)

**Examples:**
```
@denny @review this code architecture
@lyna @review my pitch deck draft
@benji @review our marketing copy
@elle @review this contract
```

**What Happens:**
1. Expert reviews the work
2. Provides feedback and suggestions
3. Notes strengths and areas for improvement
4. Documents review in workspace

**Use When:** You want expert feedback on something

**Note:** For multi-expert review, use `@rt` (roundtable) instead.

---

### @update

**Purpose:** Update existing deliverables

**Works with:** Any expert (often original creator, but can be anyone)

**Examples:**
```
@denny @update the auth spec with social login
@lyna @update pitch deck with new metrics
@elle @update privacy policy for GDPR
```

**What Happens:**
1. Expert loads existing deliverable
2. Asks what needs updating
3. Makes changes
4. Updates version in `documents/`
5. Documents changes in workspace

**Use When:** Existing work needs changes

---

### @fix

**Purpose:** Fix bugs, errors, problems

**Works with:** Any expert (commonly Ada for code bugs, but others fix process/content issues)

**Examples:**
```
@ada @fix login flow bug
@lyna @fix low conversion rate on pitch
@benji @fix the hiring bottleneck
@denny @fix the slow database queries
```

**What Happens:**
1. Expert investigates issue
2. Identifies root cause
3. Fixes problem properly (not just quick patch)
4. Tests to verify
5. Suggests prevention measures

**Use When:** Something's broken or not working

---

### @research

**Purpose:** Deep research on any topic

**Works with:** Any expert

**Examples:**
```
@denny @research best practices for authentication
@lyna @research venture capital firms in our space
@benji @research hiring platforms for technical roles
@elle @research HIPAA compliance requirements
```

**What Happens:**
1. Expert conducts thorough research
2. Gathers sources and data
3. Synthesizes findings
4. Provides summary with sources
5. Saves research to `documents/`

**Use When:** You need deep knowledge on a topic

---

### @brainstorm

**Purpose:** Generate ideas and explore options

**Works with:** Any expert (commonly Genna for strategic brainstorming)

**Examples:**
```
@genna @brainstorm features for v2.0
@benji @brainstorm marketing channels to try
@lyna @brainstorm ways to improve pitch
@denny @brainstorm potential pivot options
```

**What Happens:**
1. Expert explores the problem space
2. Generates multiple ideas
3. Evaluates each option with pros/cons
4. Presents options (doesn't decide for you)
5. Documents in workspace

**Use When:** You need creative ideas or want to explore options

---

### @plan

**Purpose:** Create project plans, roadmaps, timelines

**Works with:** Any expert (commonly Genna for strategic plans)

**Examples:**
```
@genna @plan roadmap for Q1 2025
@lyna @plan fundraising campaign
@benji @plan team expansion
@ada @plan technical migration
```

**What Happens:**
1. Expert reviews goals and constraints
2. Researches best practices for this type of plan
3. Creates comprehensive plan with timeline
4. Includes milestones, resources, risks
5. Saves to `documents/planning/`

**Use When:** You need strategic planning or roadmapping

---

## Flow Commands

Flow commands follow predefined patterns from `pro-os/system/patterns/` for consistent, high-quality workflows. They enforce specific structures like TDD and mandatory QA.

**When to use Flow vs Universal:**
- **Flow** = Need rigorous structure and enforced quality gates
- **Universal** = Need flexibility and quick iteration

---

### @create-specflow

**Purpose:** Create technical specification with TDD structure enforcement

**Pattern:** `patterns/spec.md`  
**Primary Expert:** Denny (but any technical expert can run it)

**Usage:**
```
@create-specflow authentication system
@create-specflow payment processing
@denny @create-specflow real-time notifications
```

**Workflow (3 Phases):**

**Phase 1 - Pre-Flight:**
1. Load context (project files, existing specs)
2. Clarify requirements with founder
3. Search current best practices (always uses current year!)
4. Identify expert collaboration needs

**Phase 2 - Execution:**
1. Create spec with TDD task structure
2. Define acceptance criteria
3. Document technical decisions
4. Get expert reviews (security, feasibility)
5. Update based on feedback

**Phase 3 - Post-Flight:**
1. Quality check against `spec-checklist.md`
2. Update workspace file with complete context
3. Mark ready for `@execute-specflow`

**Output:** 
- `documents/tech/[name]-spec.md` - Comprehensive technical specification
- TDD task structure (test requirements defined BEFORE implementation)
- Ready for Ada (or any implementer) to execute

**Key Difference from @create:**
- Enforces TDD structure (tests first!)
- Mandatory expert reviews
- Structured quality gates
- Ready for direct execution

---

### @execute-specflow

**Purpose:** Implement technical specification with TDD + mandatory QA

**Pattern:** `patterns/spec.md` + `patterns/expert-tech.md`  
**Primary Expert:** Ada (but any implementer can run it)

**Usage:**
```
@execute-specflow auth-spec
@ada @execute-specflow payment-processing
```

**Workflow (3 Phases):**

**Phase 1 - Pre-Flight:**
1. Load and review spec
2. Clarify any ambiguities
3. Set up test environment
4. Plan implementation order

**Phase 2 - Execution (TDD ENFORCED):**
1. **Write tests FIRST** (for each task)
2. Run tests (they should fail initially)
3. Implement code
4. Run tests (until they pass)
5. Refactor if needed
6. Update progress in workspace

**Phase 3 - Post-Flight (MANDATORY QA):**
1. Run full test suite (must have 80%+ coverage)
2. Quality check against `code-checklist.md`
3. Linter/formatter checks
4. Update documentation
5. Mark complete in workspace

**Output:**
- Fully tested, production-ready code
- 80%+ test coverage
- Documentation updated
- QA completed

**Key Difference from @execute:**
- TDD strictly enforced (tests absolutely first!)
- Mandatory QA phase (cannot skip)
- Must pass quality gates
- Higher confidence in code quality

---

### @rt (Roundtable Review)

**Purpose:** Multi-expert collaborative review with natural group discussion

**Pattern:** `patterns/expert-collaboration.md` (Step 7: Group Chat Pattern)  
**Experts:** ALL relevant experts participate **simultaneously** (v2.1)

**Usage:**
```
@rt review the pitch deck
@rt review authentication spec
@rt should we pivot to B2B?
```

**What Happens (v2.1 Group Chat):**
1. All relevant experts load context **at the same time**
2. Each reviews from their domain perspective:
   - Genna: Strategic fit, big picture
   - Denny: Technical feasibility
   - Ada: Implementation complexity
   - Lyna: Investor/external appeal
   - Benji: Market fit, growth potential
   - Elle: Legal/compliance
   - Your domain expert: Industry best practices
3. **Experts discuss naturally with each other** (not sequential handoffs!)
4. Cross-validate each other's perspectives
5. You see authentic expert collaboration
6. Synthesized recommendations
7. Documented review in workspace

**What's New in v2.1:**
- ✅ **Parallel, not sequential** - All experts active together
- ✅ **Natural discussion** - Experts respond to each other
- ✅ **Cross-validation** - They catch each other's blind spots
- ✅ **You learn** - Watch experts debate tradeoffs

**Use When:**
- Major decisions requiring multiple perspectives
- Cross-domain review needed
- High-stakes deliverable
- Want to see experts collaborate authentically
- Want to catch issues from all angles

**Output:**
- Comprehensive multi-perspective feedback
- Consensus and dissenting views documented
- Clear next steps
- All reviews in workspace

---

## System Commands

Commands that manage FWD PRO itself. These can be run standalone or with any expert you're currently working with.

---

### @update-project

**Purpose:** Scan project and update context after things have changed

**Usage:**
```
@update-project
@denny @update-project
@ada @update-project
```

**Works with:** Any expert (or standalone)

**What It Does:**
1. Scans your project for changes (README, package.json, git commits)
2. Identifies potential updates (stage, goals, tech stack, team)
3. Asks you to confirm changes
4. Updates `project/project-kb.md`, `project/people.md`, etc.
5. Notifies all experts of changes

**When to Use:**
- After major milestones
- When tech stack changes
- When goals shift
- Team member hired/left
- Every few weeks (keep context current)

**Timeline:** 10-15 minutes

---

### @update-mission

**Purpose:** Update project mission and vision

**Usage:**
```
@update-mission
@genna @update-mission
```

**Works with:** Any expert (commonly Genna for strategic work)

**What It Does:**
1. Reviews current mission (or starts fresh)
2. Asks deep questions about your "why"
3. Creates compelling mission narrative
4. Saves to `project/mission.md`
5. Other experts use for context (Lyna for pitches, Benji for marketing)

**When to Use:**
- Vision clarified or evolved
- Preparing for investors
- Onboarding team
- Annual reflection

**Timeline:** 30 minutes to 1 hour

---

### @update-people

**Purpose:** Update team, advisors, investors

**Usage:**
```
@update-people
```

**Works with:** Any expert

**What It Does:**
1. Reviews current `project/people.md`
2. Asks what changed (hired, got advisor, raised money)
3. Adds new people with context
4. Experts can now reference them in their work

**When to Use:**
- Hired team member
- Got advisor/mentor
- Raised money
- Important customer/partner joined

**Timeline:** 10-15 minutes

---

### @create-expert

**Purpose:** Create a custom domain expert for your team

**Usage:**
```
@create-expert
@genna @create-expert
```

**Works with:** Any expert (commonly Genna)

**What It Does:**
Walks you through creating a specialized expert with guided questions:
- What's their name?
- What's their domain/expertise?
- What personality should they have?
- What should they review?
- What red flags should they catch?

Then generates a complete expert profile.

**Result:** Full expert file in `pro-os/experts/[expert-name-domain].md`

**When to Use:**
- Need specialized industry expertise
- Standard experts don't understand your domain
- Want someone to review work through specific lens

**See Full Guide:** `pro-os/commands/system/create-expert.md`

---

### @create-flow

**Purpose:** Create a custom flow command workflow

**Usage:**
```
@create-flow
@genna @create-flow
```

**Works with:** Any expert (commonly Genna)

**What It Does:**
Walks you through creating a custom structured workflow:
- What should we call it?
- What does it do?
- What are the workflow steps?
- Which experts are involved?
- What quality checks are required?
- What gets delivered?

Then generates:
- Flow command file in `pro-os/commands/flows/[your-flow].md`
- Pattern file in `pro-os/system/patterns/[your-pattern].md` (if workflow is unique)

**When to Use:**
- Have a repetitive multi-step process
- Need specific quality enforcement
- Domain-specific workflow
- Team coordination in specific order

**How It Works:**
1. AI walks you through workflow design
2. Decides if existing pattern fits OR creates new pattern
3. Generates flow command that references pattern
4. You can then use: `@your-flow [item]`

**Note:** This is NOT about copying templates manually - it's a guided AI-driven creation process.

**See Full Guide:** `pro-os/commands/system/create-flow.md`

---

## Tips for Using Commands

### 1. Tag the Expert You Want

```
@denny @create auth spec
@ada @fix the bug
@lyna @research VCs
```

Clear and explicit - you control who does the work.

### 2. Or Let AI Route

```
@create auth spec
→ AI routes to appropriate expert based on context
```

### 3. Plain Language Works

```
I need a technical specification for authentication
Help me research seed funding
Can someone fix this bug?
```

Commands are helpful but not required - just describe what you need!

### 4. Add Context

```
@denny @create auth spec for mobile app, need social login (Google/Apple), must be HIPAA compliant
```

More context = better output.

### 5. Use Flows for Rigor

```
@create-specflow authentication
@execute-specflow authentication
```

When you need bulletproof quality with enforced gates.

### 6. Add Favorites (Just Ask!)

Want quick access to commands?

```
"Add @create-specflow to my favorites"
"Add @update-project to my favorites"
```

AI will create shortcuts in `your-commands/` for you.

---

## Command Reference Table

| Command | Type | Works With | Timeline | Output |
|---------|------|------------|----------|--------|
| @create | Universal | Any expert | Varies | Deliverable |
| @execute | Universal | Any expert | 1-3 days | Implementation |
| @analyze | Universal | Any expert | 1 day | Analysis |
| @review | Universal | Any expert | Same day | Feedback |
| @update | Universal | Any expert | Hours-1 day | Updated doc |
| @fix | Universal | Any expert | Hours-1 day | Fixed issue |
| @research | Universal | Any expert | 1 day | Research doc |
| @brainstorm | Universal | Any expert | Hours | Ideas |
| @plan | Universal | Any expert | 1-2 days | Plan/roadmap |
| @create-specflow | Flow | Any tech expert | 1 day | Technical spec |
| @execute-specflow | Flow | Any implementer | 3-5 days | Spec + code |
| @rt | Flow | Multiple experts | Same day | Multi-perspective feedback |
| @update-project | System | Any expert | 15 min | Updated context |
| @update-mission | System | Any expert | 1 hour | Mission doc |
| @update-people | System | Any expert | 15 min | People doc |
| @create-expert | System | Any expert | 15-30 min | Custom expert |
| @create-flow | System | Any expert | 15-30 min | Custom flow |

---

## Common Workflows

### Build a Feature (Full Cycle)
```
1. @create-specflow user-authentication
2. @execute-specflow user-authentication
3. @rt review authentication implementation
```

### Get Strategic Help
```
1. @genna @plan roadmap for Q1
2. @rt review the roadmap
3. @genna @update-project (after milestones)
```

### Create Investor Materials
```
1. @lyna @create pitch deck for seed round
2. @rt review pitch deck
3. @lyna @update pitch deck with feedback
```

### Fix a Bug
```
1. @ada @fix the login bug
2. @denny @review the fix for architecture concerns
```

### Research & Decide
```
1. @research best authentication approaches
2. @brainstorm authentication options
3. @rt should we use OAuth or custom?
```

---

## Troubleshooting Commands

### Command Not Working?

**Try:**
1. Tag an expert explicitly: `@denny @create auth spec`
2. Give more context: `@create auth spec for mobile app with social login`
3. Use plain language: `I need a technical specification for authentication`

### Not Sure Which Command?

Just describe what you need:
```
"I need help with authentication"
"Can someone fix this bug?"
"Help me create a pitch deck"
```

The AI will figure it out!

### Want to Change Approach Mid-Way?

Just say so:
```
"Actually, let's use @create-specflow instead for more structure"
"Can @lyna take over this research instead?"
```

---

## Next Steps

**Learn the system:**
→ Read `understanding-the-system.md`

**Work with experts:**
→ Read `working-with-experts.md`

**Try workflows:**
→ Read `common-workflows.md`

**Understand the system:**
→ Read `understanding-the-system.md`

---

**Commands make collaboration structured and efficient - but plain language works too! Just tell the experts what you need.** 🚀

"I need help with authentication"
"Can someone fix this bug?"
"Help me create a pitch deck"
```

The AI will figure it out!

### Want to Change Approach Mid-Way?

Just say so:
```
"Actually, let's use @create-specflow instead for more structure"
"Can @lyna take over this research instead?"
```

---

## Next Steps

**Learn the system:**
→ Read `understanding-the-system.md`

**Work with experts:**
→ Read `working-with-experts.md`

**Try workflows:**
→ Read `common-workflows.md`

**Understand the system:**
→ Read `understanding-the-system.md`

---

**Commands make collaboration structured and efficient - but plain language works too! Just tell the experts what you need.** 🚀
