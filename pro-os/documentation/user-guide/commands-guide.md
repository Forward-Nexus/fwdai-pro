# Commands Guide

**Complete reference for all FWD PRO commands with examples**

---

## Understanding Commands

Commands are pre-built workflows that tell experts what to do. Think of them as templates for common tasks.

### Three Types:

1. **Universal Commands** - General-purpose (create, execute, analyze)
2. **Quick Commands** - Optimized workflows (create-spec, create-feature)
3. **System Commands** - Manage FWD PRO itself (update-project, show-projects)

---

## Universal Commands

### @create

**Purpose:** Create new deliverables

**Expert:** Routes to appropriate expert

**Examples:**
```
@create technical spec for authentication
@create pitch deck for seed round
@create marketing plan for launch
@create privacy policy
@create roadmap for Q1
```

**What Happens:**
1. AI determines what you're creating
2. Routes to right expert (Denny for specs, Lyna for pitch, etc.)
3. Expert creates deliverable
4. Final output in `documents/`

**Use When:** You need something created from scratch

---

### @execute

**Purpose:** Build/implement something

**Expert:** Routes to Ada (or appropriate expert)

**Examples:**
```
@execute the auth spec Denny created
@execute this feature design
@execute migration to new database
```

**What Happens:**
1. Ada (or expert) reviews what to build
2. Asks clarifying questions
3. Implements
4. Tests
5. Delivers code + docs

**Use When:** You have a spec/plan and need implementation

---

### @analyze

**Purpose:** Research and analyze

**Expert:** Routes to appropriate expert

**Examples:**
```
@analyze our competitors in recovery apps
@analyze which database is best for our use case
@analyze user feedback from last month
@analyze fundraising landscape for mental health tech
```

**What Happens:**
1. Expert researches topic
2. Gathers data
3. Analyzes findings
4. Provides recommendations
5. Saves analysis to `documents/`

**Use When:** You need research or analysis

---

### @review

**Purpose:** Review work and provide feedback

**Expert:** Routes to appropriate expert(s)

**Examples:**
```
@review this code implementation
@review my pitch deck draft
@review our marketing copy
@review technical architecture
```

**What Happens:**
1. Expert(s) review the work
2. Provide feedback and suggestions
3. Note what's good and what needs work
4. Post review on whiteboards

**Use When:** You want expert feedback on something

---

### @update

**Purpose:** Update existing deliverables

**Expert:** Routes to original creator or appropriate expert

**Examples:**
```
@update the auth spec with social login
@update pitch deck with new metrics
@update privacy policy for GDPR
```

**What Happens:**
1. Expert loads existing deliverable
2. Asks what needs updating
3. Makes changes
4. Updates version in `documents/`

**Use When:** Existing work needs changes

---

### @fix

**Purpose:** Fix bugs, errors, problems

**Expert:** Routes to Ada (or appropriate expert)

**Examples:**
```
@fix login flow bug
@fix typos in pitch deck
@fix broken link in documentation
```

**What Happens:**
1. Expert investigates issue
2. Identifies root cause
3. Fixes problem
4. Tests to verify
5. Suggests prevention

**Use When:** Something's broken

---

### @research

**Purpose:** Deep research on any topic

**Expert:** Routes to appropriate expert

**Examples:**
```
@research best practices for authentication
@research mental health app market size
@research HIPAA compliance requirements
@research competitor pricing strategies
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

**Expert:** Routes to appropriate expert (often Genna)

**Examples:**
```
@brainstorm features for v2.0
@brainstorm marketing channels to try
@brainstorm ways to improve retention
@brainstorm potential pivot options
```

**What Happens:**
1. Expert explores the problem space
2. Generates multiple ideas
3. Evaluates each option
4. Presents with pros/cons
5. Doesn't decide - gives you options

**Use When:** You need creative ideas

---

### @plan

**Purpose:** Create project plans and roadmaps

**Expert:** Routes to Genna (strategy)

**Examples:**
```
@plan roadmap for Q1 2025
@plan launch strategy
@plan fundraising timeline
@plan hiring plan for next 6 months
```

**What Happens:**
1. Genna reviews goals and constraints
2. Consults relevant experts
3. Creates comprehensive plan
4. Includes timeline, milestones, dependencies
5. Saves to `documents/planning/`

**Use When:** You need strategic planning

---

### @newthread

**Purpose:** Start fresh context

**Expert:** System command (no specific expert)

**Examples:**
```
@newthread
The AI seems confused, let's start fresh
```

**What Happens:**
1. Clears conversation context
2. Starts new thread
3. System still remembers project context (from files)
4. Good for when conversation gets tangled

**Use When:** AI seems confused or off-track

---

## Quick Commands

Pre-built optimized workflows for common tasks.

### @create-spec

**Purpose:** Create technical specification

**Expert:** Denny (with expert reviews)

**Usage:**
```
@create-spec authentication
@create-spec payment processing
@create-spec real-time notifications
```

**Workflow:**
1. Denny asks clarifying questions
2. Creates detailed technical spec
3. Other experts review (Elle for security, Ada for feasibility)
4. Denny finalizes
5. Spec saved to `documents/technical/[name]-spec.md`

**Output:** Professional technical specification

**Timeline:** Same day to 1 day

---

### @create-pitch-deck

**Purpose:** Create investor pitch deck

**Expert:** Lyna (with Benji for messaging)

**Usage:**
```
@create-pitch-deck
@create-pitch-deck for seed round
```

**Workflow:**
1. Lyna reviews mission, traction, goals
2. Asks about fundraising (amount, timeline, target investors)
3. Creates deck outline
4. Benji reviews messaging
5. Lyna creates full deck
6. Deck saved to `documents/investor/pitch-deck.md`

**Output:** Slide-by-slide investor pitch deck

**Timeline:** 2-3 days

---

### @create-feature

**Purpose:** Full feature development workflow

**Expert:** Genna → Denny → Ada (coordinated)

**Usage:**
```
@create-feature user authentication
@create-feature payment integration
@create-feature real-time chat
```

**Workflow:**
1. Genna coordinates overall feature
2. Denny creates technical spec
3. Experts review spec
4. Ada implements feature
5. Denny reviews implementation
6. Ada delivers code
7. Spec in `documents/technical/`, code in your repo

**Output:** Complete feature (spec + code)

**Timeline:** 3-5 days

---

### @rt

**Purpose:** Roundtable review (all experts weigh in)

**Expert:** All active experts

**Usage:**
```
@rt review this product spec
@rt what do you think of this approach?
@rt should we pivot to B2B?
```

**Workflow:**
1. All active experts review the question/work
2. Each provides their perspective:
   - Genna: Strategic
   - Denny: Technical
   - Ada: Implementation
   - Lyna: Investor angle
   - Benji: Market fit
   - Elle: Legal/compliance
   - Domain expert: Industry-specific
3. Genna synthesizes feedback
4. You get comprehensive view

**Output:** Multi-perspective feedback

**Timeline:** Same day

---

### @rt-update

**Purpose:** Weekly status check

**Expert:** All active experts

**Usage:**
```
@rt-update
```

**Workflow:**
1. Each expert reports:
   - What they completed
   - What they're working on
   - Any blockers
   - What they need from you
2. Genna facilitates discussion
3. Priorities identified for next week
4. Updates posted on whiteboards

**Output:** Team status update

**Timeline:** 15-30 minutes

**Tip:** Run this every Monday!

---

## System Commands

Commands that manage FWD PRO itself.

### @update-project ⭐ Most Common

**Purpose:** Scan project and update context

**Expert:** Genna

**Usage:**
```
@update-project
```

**Workflow:**
1. Genna scans your project:
   - README.md for description changes
   - package.json/requirements.txt for tech stack
   - git commits for major changes
   - New files for work type changes
2. Identifies potential updates
3. Asks you to confirm:
   - "Tech stack changed from X to Y?"
   - "New goal detected: [goal]?"
   - "Should we activate [expert]?"
4. Updates:
   - project/project-kb.md
   - pro-os/config.yaml
   - Activates/deactivates experts
5. All experts notified of changes

**When to Use:**
- After major milestones
- When tech stack changes
- When goals shift
- Every few weeks (keep context current)

**Timeline:** 10-15 minutes

---

### @update-founder-profile

**Purpose:** Update your personal preferences

**Expert:** Genna

**Usage:**
```
@update-founder-profile
```

**Workflow:**
1. Reviews your current global profile
2. Asks what changed:
   - Communication style?
   - Working preferences?
   - Technical level?
   - Team situation?
3. Updates `~/.fwdpro-global/[name]-profile.md`
4. Changes apply to ALL your projects
5. All experts adapt immediately

**When to Use:**
- Communication style evolved
- Team situation changed (solo → hired people)
- Working preferences changed
- Every 3-6 months

**Timeline:** 10-15 minutes

---

### @update-mission

**Purpose:** Update project mission and vision

**Expert:** Genna

**Usage:**
```
@update-mission
```

**Workflow:**
1. Reviews current mission (or starts fresh)
2. Asks deep questions:
   - "Why does THIS matter to YOU?"
   - "What problem are you solving?"
   - "What makes you different?"
   - "What does success look like?"
3. Creates compelling mission narrative
4. Saves to `project/mission.md`
5. Lyna uses for investor materials
6. Benji uses for marketing

**When to Use:**
- Vision clarified
- Story deepened
- Preparing for investors
- Onboarding team

**Timeline:** 30 minutes to 1 hour

---

### @update-people

**Purpose:** Update team, advisors, investors

**Expert:** Genna

**Usage:**
```
@update-people
```

**Workflow:**
1. Reviews current `project/people.md`
2. Asks what changed:
   - Hired someone?
   - Got an advisor?
   - Raised money?
   - Key customer?
3. Adds new people with context
4. Experts can now reference them:
   - "Have Sarah (your designer) do the UI"
   - "Run this by John (your technical advisor)"

**When to Use:**
- Hired team member
- Got advisor/mentor
- Raised money
- Important customer/partner

**Timeline:** 10-15 minutes

---

### @update-onboarding

**Purpose:** Re-run onboarding wizard

**Expert:** Genna

**Usage:**
```
@update-onboarding
```

**Workflow:**
1. Explains impact (will overwrite sections)
2. Asks what to update:
   - Global profile (Q1-Q8)?
   - Project details (Q9-Q15)?
   - Domain expert (Q16)?
3. Re-runs relevant questions
4. Updates appropriate files
5. Activates/deactivates experts if work types changed

**When to Use:**
- Work types changed dramatically
- Want to add domain expert
- Major project pivot
- Need to reconfigure everything

**Timeline:** 15-30 minutes

---

### @show-projects

**Purpose:** View all your FWD PRO projects

**Expert:** Genna

**Usage:**
```
@show-projects
```

**Output:**
```
📊 Your FWD PRO Project Portfolio

You have 3 projects using FWD PRO:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 PROJECT 1: ODAT App (MOST ACTIVE)
Location: ~/GitHub/odat-app/
Stage: Launched | Goal: 10K users by Q1 2026
Active: 5 days ago

Current Work:
  • authentication-feature (Ada - InProgress)
  • pitch-deck-v2 (Lyna - Draft)

Active Experts: Genna, Denny, Ada, Lyna
Quick Link: ~/GitHub/odat-app/.fwdpro/roundtable/whiteboards.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 PROJECT 2: Telecom Tool
Location: ~/GitHub/telecom-tool/
Stage: MVP | Goal: 5 pilot customers
Active: 8 days ago

... [additional projects]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CROSS-PROJECT INSIGHTS
Most Active: ODAT App
Expert Distribution: [breakdown]
Recent Activity: [timeline]
```

**When to Use:**
- Morning check: what needs attention?
- Before switching projects
- Portfolio review
- After being away

**Timeline:** Instant

---

## Creating Custom Commands

You can create your own commands!

### Template Location:
`.fwdpro/pro-os/commands/quick/_TEMPLATE.md`

### Steps:

1. **Copy template:**
```bash
cp pro-os/commands/quick/_TEMPLATE.md pro-os/commands/quick/my-workflow.md
```

2. **Define your workflow:**
```markdown
# @my-workflow

**Purpose:** [What this does]

**Expert:** [Who runs it]

**Workflow:**

### Phase 1: Preparation
- [Steps]

### Phase 2: Execution
- [Steps]

### Phase 3: Completion
- [Steps]
```

3. **Use it:**
```
@my-workflow
```

### Example Custom Commands:

**@weekly-review:**
- Review last week's work
- Plan next week
- Update stakeholders

**@launch-checklist:**
- Technical readiness (Denny/Ada)
- Legal docs (Elle)
- Marketing ready (Benji)
- PR plan (Lyna)

**@monthly-investor-update:**
- Gather metrics
- Lyna creates update
- Benji adds marketing wins

---

## Command Tips

### 1. Start Simple

```
@create-spec authentication
→ Better than trying to explain everything upfront
```

### 2. Commands Can Be Plain Language

```
@create pitch deck
@create-pitch-deck
@lyna create pitch deck

→ All work!
```

### 3. Check Your Favorites

Look in `your-commands/` for shortcuts to commands you use often

### 4. Add Favorites

```bash
./add-favorite.sh
→ Add any command to your-commands/
```

### 5. Combine with Expert Tags

```
@create-spec authentication
→ Then: @ada implement this spec
```

### 6. Use System Commands Regularly

```
@update-project  # Every few weeks
@rt-update       # Every Monday
@show-projects   # When switching contexts
```

---

## Command Reference Table

| Command | Type | Expert | Timeline | Output |
|---------|------|--------|----------|--------|
| @create | Universal | Routes | Varies | Deliverable |
| @execute | Universal | Ada | 1-3 days | Code |
| @analyze | Universal | Routes | 1 day | Analysis |
| @review | Universal | Routes | Same day | Feedback |
| @update | Universal | Original | 1 day | Updated doc |
| @fix | Universal | Ada | Hours | Fixed code |
| @research | Universal | Routes | 1 day | Research doc |
| @brainstorm | Universal | Genna | Hours | Ideas |
| @plan | Universal | Genna | 1-2 days | Plan/roadmap |
| @newthread | Universal | System | Instant | Fresh context |
| @create-spec | Quick | Denny | 1 day | Technical spec |
| @create-pitch-deck | Quick | Lyna | 2-3 days | Pitch deck |
| @create-feature | Quick | Multi | 3-5 days | Spec + code |
| @rt | Quick | All | Same day | Feedback |
| @rt-update | Quick | All | 30 min | Status report |
| @update-project | System | Genna | 15 min | Updated context |
| @update-founder-profile | System | Genna | 15 min | Updated profile |
| @update-mission | System | Genna | 1 hour | Mission doc |
| @update-people | System | Genna | 15 min | People doc |
| @update-onboarding | System | Genna | 30 min | Reconfigured |
| @show-projects | System | Genna | Instant | Portfolio view |
| @create-expert | System | Genna | 15-30 min | Custom expert |
| @create-command | System | Genna | 15-30 min | Custom command |

---

## Customization Commands

### @create-expert

**Purpose:** Create a custom domain expert for your team

**Use When:**
- Need specialized expertise not covered by core experts
- Industry-specific knowledge required
- Want someone to review work through a specific lens

**Example:**
```
@create-expert

Genna will ask guided questions:
- What's their name?
- What's their domain/expertise?
- Why do you need them?
- What personality should they have?
- What should they review?
- What red flags should they catch?

Then generates a complete expert profile with:
- Personality and communication style
- Specialized knowledge areas
- Review frameworks
- Quality standards
- Example interactions
```

**Result:** Full expert file like Bonnie Jo (comprehensive, with personality, frameworks, and examples)

**Location:** `.fwdpro/pro-os/experts/[expert-name-domain].md`

**See Full Guide:** `pro-os/commands/system/create-expert.md`

---

### @create-command

**Purpose:** Create a custom command workflow for your specific needs

**Use When:**
- Have a repetitive multi-step process
- Custom industry workflow
- Need multiple experts to collaborate in a specific order
- Want consistent quality gates

**Example:**
```
@create-command

Genna will ask guided questions:
- What should we call it?
- What does it do?
- When to use it?
- What are the workflow steps?
- Which experts are involved?
- What quality checks?
- What gets delivered?

Then generates a complete command workflow with:
- Step-by-step process
- Expert collaboration pattern
- Quality checklist
- Example interactions
```

**Result:** Custom command file with your specific workflow

**Location:** `.fwdpro/pro-os/commands/custom/[command-name].md`

**See Full Guide:** `pro-os/commands/system/create-command.md`

---

## Troubleshooting Commands

### Command Not Working?

**Try:**
1. Use full command name: `@create-spec` not `@spec`
2. Give more context: `@create-spec authentication for mobile app`
3. Tag expert directly: `@denny create auth spec`

### Wrong Expert Responded?

**Fix:**
```
Actually, @denny this is more your area
```

### Need to Cancel?

**Say:**
```
@genna never mind, let's not do that
```

### Command Taking Too Long?

**Check:**
```
@genna status on [command]?
@denny where are we on the spec?
```

---

## Next Steps

**Learn the system:**
→ Read `understanding-the-system.md`

**Work with experts:**
→ Read `working-with-experts.md`

**Try workflows:**
→ Read `common-workflows.md`

**Explore files:**
→ Read `file-structure.md`

---

**You now know all the commands! Start building! 🚀**

