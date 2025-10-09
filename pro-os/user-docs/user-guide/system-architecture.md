# FWD PRO System Architecture

**Purpose:** Understand how the FWD PRO system works under the hood - standards, patterns, experts, and the roundtable.

**For:** Users who want to understand the system architecture or customize FWD PRO.

---

## Overview: The Three-Layer System

```
┌─────────────────────────────────────────────────────────┐
│                    LAYER 1: EXPERTS                      │
│  Who does the work (Genna, Denny, Ada, Lyna, etc.)     │
└─────────────────────────────────────────────────────────┘
                          ↓ uses
┌─────────────────────────────────────────────────────────┐
│              LAYER 2: PATTERNS & STANDARDS               │
│  HOW experts work (collaboration, domain work, quality) │
└─────────────────────────────────────────────────────────┘
                          ↓ produces
┌─────────────────────────────────────────────────────────┐
│                LAYER 3: THE ROUNDTABLE                   │
│  WHERE work happens (workspaces, whiteboards, docs)     │
└─────────────────────────────────────────────────────────┘
```

---

## Layer 1: Experts (Who)

### Core Experts (Always Available)

Located in: `pro-os/experts/`

- **Genna** (`genna-architect.md`) - Chief Architect, strategy, vision
- **Denny** (`denny-systems-architect.md`) - Systems design, specs
- **Ada** (`ada-implementation.md`) - Implementation, code, testing
- **Lyna** (`lyna-external-strategy.md`) - Fundraising, investors
- **Benji** (`benji-internal-growth.md`) - Marketing, operations, growth
- **Elle** (`elle-legal.md`) - Legal, compliance

### Domain Experts (Custom)

You can create custom experts for your industry:
- ChefMaria for restaurants
- Dr. Sarah for healthcare
- Professor Chen for education
- etc.

**How experts work:**
1. Each expert has a `.md` file with their profile
2. File includes YAML frontmatter (primary patterns, specializations)
3. When activated (@expert or @command), they load their patterns
4. They collaborate in the roundtable system

---

## Layer 2: Patterns & Standards (How)

Located in: `pro-os/system/`

### The Patterns (Workflow Guides)

**`patterns/universal.md`** - Universal command workflow:
- 3-phase workflow (Pre-flight → Execute → Post-flight)
- Token efficiency (don't re-read files)
- Current best practices search (always check 2025 standards)
- 3-attempt blocker rule
- TDD for code (tests FIRST)
- Update existing files (no v2 versions)

**`patterns/expert-collaboration.md`** - Universal collaboration workflow:
- How workspaces work (structure, lifecycle)
- How whiteboards work (updates, status)
- How checklists work (when to add items)
- Update format standards with examples
- Human-in-the-loop philosophy

### The Standards (Formatting & Style)

**`standards/expert-voice-guidelines.md`** - Voice and communication style
**`standards/error-templates.md`** - User-facing error message formats
**`standards/helper-functions.md`** - Reusable code snippets
**`standards/code-style/`** - Code formatting standards

**`standards/expert-voice-guidelines.md`** - Communication:
- First-person voice ("I" not "Denny thinks")
- Tone and style
- How to adapt to founder

**`standards/code-style/`** - Code standards:
- JavaScript, CSS, HTML, general code style

### The Patterns (Domain-specific work)

**`patterns/expert-collaboration.md`** - Universal (ALL experts):
- Context loading
- Workspace creation/management
- Cross-expert collaboration
- Handoffs
- Quality checks

**`patterns/expert-tech.md`** - Technical work:
- For Denny (specs) and Ada (code)
- TDD requirements
- Code quality standards
- Architecture principles

**`patterns/expert-content.md`** - Content/marketing:
- For Lyna (external) and Benji (internal)
- Lead with emotion (external) or data (internal)
- Audience-appropriate tone

**`patterns/expert-strategy.md`** - Strategic work:
- For Genna, Lyna, Benji
- Think 10 years ahead
- "Should we build this?" question

**`patterns/expert-legal.md`** - Legal/compliance:
- For Elle
- Protect AND enable
- Risk assessment
- Accessible explanations

**`patterns/spec.md`** - Technical spec structure:
- Used by @create-specflow and @execute-specflow
- TDD enforcement
- Mandatory QA

**`patterns/universal.md`** - Universal commands:
- Used by @create, @execute, @analyze, etc.
- Flexible workflow

### The Checklists (Quality gates)

**`checklists/spec-checklist.md`** - Technical specs
**`checklists/code-checklist.md`** - Code implementation
**`checklists/content-checklist.md`** - Content/marketing
**`checklists/legal-review-checklist.md`** - Legal review
**`checklists/quality-checklist.md`** - Universal quality (always run)

---

## Layer 3: The Roundtable (Where)

Located in: `.fwdpro/0-roundtable/`

### 1. Workspaces (`workspace/`)

**Purpose:** Detailed collaboration space

**Characteristics:**
- ONE workspace per major topic
- Comprehensive (can be LONG)
- Each expert adds their section
- Documents decisions, progress, handoffs
- Status tracking (Draft → Approved → InProgress → Review → Done)

**Structure:**
```markdown
## Status
## Story
## Acceptance Criteria
## Tasks/Subtasks
## Expert Collaboration (each expert's section)
## Key Decisions
## Blockers & Issues
## Quality Review
## Completion Summary
```

### 2. Whiteboards (`whiteboards.md`)

**Purpose:** High-level team dashboard

**Each expert has a section:**
- Active Work (with status emojis)
- Completed This Week
- Upcoming

**Status Emojis:**
- ⚪ Draft
- 🔄 InProgress  
- 📋 Review
- ✅ Done

### 3. Founder Checklist (`[name]-checklist.md`)

**Purpose:** Your action items

**When experts add items:**
- Review needed
- Decision needed
- Information needed
- Action needed

**Priority levels:**
- 🔴 HIGH - Blocking
- 🟡 MEDIUM - Affects timeline
- 🟢 LOW - Nice to have

---

## How It All Works Together

### Example: @denny creates authentication spec

```
1. EXPERT ACTIVATION
   ↓
   @denny is called
   
2. PATTERN LOADING
   ↓
   • expert-collaboration.md (universal - all experts)
   • expert-tech.md (Denny's primary pattern)
   • spec.md (if using @create-specflow)
   
3. WORKFLOW EXECUTION (3-phase from patterns/universal.md)
   ↓
   Phase 1: Pre-Flight
   • Check context (already have project-kb?)
   • Search "authentication best practices 2025"
   • Check for existing workspace
   
   Phase 2: Execute
   • Create workspace: 0-roundtable/workspace/auth-spec.md
   • Design architecture
   • Document decisions
   • Create deliverable: documents/tech/auth-spec.md
   
   Phase 3: Post-Flight (MANDATORY)
   • Run spec-checklist.md
   • Update workspace status
   • Update whiteboards
   • Add handoff for Ada
   
4. ROUNDTABLE UPDATES (following patterns/expert-collaboration.md)
   ↓
   • Workspace has complete context
   • Whiteboards show "📋 Review - Ready for Ada"
   • Founder checklist: "Review auth approach"
   
5. RESULT
   ↓
   • Clean spec in documents/tech/
   • Full context in workspace
   • Visible status on whiteboards
   • Action item for founder
```

### Example: @ada implements the spec

```
1. EXPERT ACTIVATION
   ↓
   @ada @execute-specflow authentication
   
2. PATTERN LOADING
   ↓
   • expert-collaboration.md (universal)
   • expert-tech.md (Ada's primary)
   • spec.md (TDD enforcement)
   
3. WORKFLOW EXECUTION
   ↓
   Phase 1: Pre-Flight
   • Read Denny's spec from workspace
   • Check whiteboards for context
   • Understand requirements
   
   Phase 2: Execute (TDD ENFORCED)
   • Write tests FIRST
   • Implement to pass tests
   • Run tests continuously
   • Update workspace progress
   
   Phase 3: Post-Flight
   • Run code-checklist.md
   • Update workspace → Review
   • Update whiteboards → "Ready for Denny QA"
   • Handoff to Denny
   
4. ROUNDTABLE UPDATES
   ↓
   • Workspace: Ada's implementation section added
   • Whiteboards: "📋 Review - QA needed"
   • Founder checklist: "Test auth feature"
   
5. RESULT
   ↓
   • Working code in src/
   • Tests in tests/
   • Full implementation notes in workspace
   • Ready for QA
```

---

## The Information Flow

```
┌────────────────────────────────────────────────────────┐
│                   FOUNDER REQUEST                       │
│              "@denny create auth spec"                  │
└────────────────────┬───────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────┐
│              EXPERT LOADS PATTERNS                      │
│  • expert-collaboration.md (collaboration & roundtable) │
│  • expert-tech.md (technical work standards)           │
│  • universal.md (3-phase workflow for commands)        │
└────────────────────┬───────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────┐
│             EXPERT FOLLOWS STANDARDS                    │
│  • Loads context efficiently (token efficiency)        │
│  • Searches current best practices                     │
│  • Creates/opens workspace                             │
│  • Does the work                                        │
│  • Runs quality checklist                              │
└────────────────────┬───────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────┐
│            ROUNDTABLE GETS UPDATED                      │
│  • Workspace: Detailed progress and context           │
│  • Deliverable: Clean output in documents/            │
│  • Whiteboards: High-level status                     │
│  • Checklist: Action items for founder (if needed)    │
└────────────────────┬───────────────────────────────────┘
                     │
                     ▼
┌────────────────────────────────────────────────────────┐
│              FOUNDER STAYS INFORMED                     │
│  Check whiteboards.md → See all expert progress       │
│  Check [name]-checklist.md → See your action items    │
│  Read workspace → Get full context if needed          │
└────────────────────────────────────────────────────────┘
```

---

## File Structure Map

```
.fwdpro/
├── *welcome.md                      ← Start here
│
├── pro-os/                          SYSTEM CORE
│   ├── experts/                     WHO (expert profiles)
│   │   ├── genna-architect.md
│   │   ├── denny-systems-architect.md
│   │   ├── ada-implementation.md
│   │   ├── lyna-external-strategy.md
│   │   ├── benji-internal-growth.md
│   │   ├── elle-legal.md
│   │   └── [your-domain-expert].md
│   │
│   ├── commands/                    WHAT (commands)
│   │   ├── create.md, execute.md, analyze.md, etc.
│   │   ├── flows/ (create-specflow, execute-specflow, rt)
│   │   └── system/ (update-project, update-fp, etc.)
│   │
│   ├── system/                      HOW (standards & patterns)
│   │   ├── patterns/                Domain-specific work
│   │   │   ├── expert-collaboration.md (universal)
│   │   │   ├── expert-tech.md
│   │   │   ├── expert-content.md
│   │   │   ├── expert-strategy.md
│   │   │   ├── expert-legal.md
│   │   │   ├── spec.md
│   │   │   └── universal.md
│   │   │
│   │   ├── standards/               Formatting & style
│   │   │   ├── expert-voice-guidelines.md
│   │   │   ├── error-templates.md
│   │   │   ├── helper-functions.md
│   │   │   └── code-style/
│   │   │
│   │   └── checklists/              Quality gates
│   │       ├── spec-checklist.md
│   │       ├── code-checklist.md
│   │       ├── content-checklist.md
│   │       ├── legal-review-checklist.md
│   │       └── quality-checklist.md
│   │
│   ├── project/                     YOUR PROJECT CONTEXT
│   │   ├── config.yaml
│   │   ├── project-kb.md
│   │   ├── founder-profile.md
│   │   ├── mission.md
│   │   └── people.md
│   │
│   └── user-docs/                   DOCUMENTATION
│       ├── user-guide/ (this file!)
│       └── faqs/
│
├── 0-your-experts/                  SHORTCUTS (symlinks)
├── 0-your-commands/                 SHORTCUTS (symlinks)
│
├── 0-roundtable/                    WHERE WORK HAPPENS
│   ├── whiteboards.md               Dashboard
│   ├── [name]-checklist.md          Your action items
│   └── workspace/                   Detailed collaboration
│       ├── [topic].md               Active work
│       └── archive/                 Completed work
│
└── documents/                       FINAL OUTPUTS
    ├── tech/
    ├── investor/
    ├── marketing/
    ├── legal/
    └── planning/
```

---

## Key Principles

### 1. Separation of Concerns

**Standards** (workflow, roundtable) = Core principles ALL experts follow
**Patterns** (collaboration, tech, content, etc.) = Domain-specific work methods
**Checklists** = Quality gates for specific deliverable types

### 2. Layered Loading

1. Expert loaded → Reads their profile
2. Universal pattern loaded → expert-collaboration.md
3. Primary patterns loaded → From expert's frontmatter
4. Task-specific patterns loaded → Based on work type
5. Standards referenced → As needed throughout work
6. Checklists run → Before marking complete

### 3. Token Efficiency

- Check context before re-reading files
- Load only what's needed
- Reference standards, don't re-read them constantly

### 4. Quality Enforcement

- 3-phase workflow (Pre-flight → Execute → Post-flight mandatory)
- TDD for code (tests FIRST, always)
- Checklists before completion
- Human approval for key decisions

### 5. Transparent Collaboration

- Everything visible in roundtable
- Workspaces show full context
- Whiteboards show status
- Checklist shows action items

---

## Customization Points

### For Founders

**You can customize:**
- `pro-os/project/founder-profile.md` - Your preferences
- `pro-os/project/config.yaml` - Expert behavior
- `0-your-experts/` - Which expert shortcuts to have
- `0-your-commands/` - Which command shortcuts to have

**Don't edit (system will overwrite):**
- `pro-os/experts/` - Core expert files
- `pro-os/system/patterns/` - Pattern files
- `pro-os/system/standards/` - Standards files

### For Advanced Users

**You can create:**
- Custom domain experts in `pro-os/experts/`
- Custom commands in `pro-os/commands/custom/`
- Project-specific patterns

**Copy templates from:**
- `pro-os/templates/experts/DOMAIN-EXPERT-TEMPLATE.md`
- `pro-os/templates/commands/`

---

## Update & Maintenance

### When You Run `npx @fwd-ai/pro update`:

**Updates (overwrites):**
- ✅ Expert definitions (`pro-os/experts/`)
- ✅ Commands (`pro-os/commands/`)
- ✅ Patterns (`pro-os/system/patterns/`)
- ✅ Standards (`pro-os/system/standards/`)
- ✅ Checklists (`pro-os/system/checklists/`)
- ✅ Documentation (`pro-os/user-docs/`)

**Preserves (your data):**
- ✅ Project context (`pro-os/project/`)
- ✅ Roundtable (`0-roundtable/`)
- ✅ Documents (`documents/`)
- ✅ Your shortcuts (`0-your-experts/`, `0-your-commands/`)

---

## Summary

**FWD PRO is a three-layer system:**

1. **Experts** (who) - Specialized AI team members
2. **Patterns & Standards** (how) - How experts work and collaborate
3. **Roundtable** (where) - Transparent collaboration space

**The magic happens when:**
- Experts load appropriate patterns for their work
- Follow standards for consistency and quality
- Collaborate transparently in the roundtable
- Produce clean deliverables in documents/

**You stay informed via:**
- `0-roundtable/whiteboards.md` - High-level dashboard
- `0-roundtable/[name]-checklist.md` - Your action items
- `0-roundtable/workspace/` - Full context when needed

---

**Related Docs:**
- `understanding-the-system.md` - How the roundtable model works
- `working-with-experts.md` - How to work with your expert team
- `commands-guide.md` - All available commands
- `common-workflows.md` - Real-world usage examples

---

*Now you understand the architecture! The system is designed to be powerful yet understandable, with clear separation between who does work (experts), how they do it (patterns/standards), and where it happens (roundtable).*

