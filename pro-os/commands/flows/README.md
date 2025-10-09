# FWD PRO Flow Commands

**Version:** 1.0  
**Purpose:** Structured workflow commands with bulletproof quality enforcement

---

## Overview

Flow commands are **structured workflows** that enforce quality standards like TDD and mandatory QA. They complement (don't replace) the flexible universal commands.

### The Hybrid Approach

**FWD PRO has TWO types of commands:**

1. **Universal Commands** (`@create`, `@execute`) - Flexible, AI infers structure
2. **Flow Commands** (`@create-specflow`, `@execute-specflow`) - Structured, enforces patterns

**Both are valid!** Choose based on your needs.

---

## When to Use Flow Commands

### Use Flow Commands When:
- ✅ Building technical features (code)
- ✅ Want TDD enforced (tests first, always)
- ✅ Want mandatory QA (can't skip)
- ✅ Need bulletproof quality
- ✅ Want consistent spec structure
- ✅ Implementing critical features (auth, payments, data integrity)

### Use Universal Commands When:
- ✅ Creating content (docs, strategies, campaigns)
- ✅ Want flexibility (AI adapts to context)
- ✅ Exploratory work (research, brainstorming)
- ✅ Non-technical deliverables
- ✅ Quick iterations (prototypes, experiments)

**Rule of thumb:** If it's code and quality is critical, use flow commands. Otherwise, universal commands work great.

---

## Available Flow Commands

### Technical Workflows

#### `@create-specflow [feature-name]`

**Purpose:** Create comprehensive technical specification with TDD structure

**What it does:**
- Creates ONE comprehensive spec file (no fragmentation)
- Enforces TDD task structure (test → implement → verify)
- Includes mandatory QA phase
- Documents decisions with rationale
- Creates linked workspace
- Updates whiteboards

**Example:**
```
@create-specflow user-authentication
@denny @create-specflow password-reset
```

**Outputs:**
- `documents/tech/specs/[feature-name]/spec.md` - Comprehensive spec
- `documents/tech/workspaces/[feature-name]/workspace.md` - Linked workspace

**See:** `pro-os/commands/flows/create-specflow.md`

---

### `@execute-specflow [feature-name]`

**Purpose:** Execute technical specification with TDD enforcement and mandatory QA

**What it does:**
- Loads existing spec (from `@create-specflow`)
- Enforces TDD workflow (tests first, no exceptions)
- Updates progress in real-time (spec + workspace)
- Mandatory QA phase (can't skip)
- Comprehensive testing + manual QA + code quality review
- Documentation updates
- Completion report

**Example:**
```
@execute-specflow user-authentication
@ada @execute-specflow password-reset
```

**Requires:** Spec already exists (create with `@create-specflow` first)

**See:** `pro-os/commands/flows/execute-specflow.md`

---

### Collaboration Workflows

#### `@rt [topic/deliverable]`

**Purpose:** Multi-expert roundtable review and collaboration

**What it does:**
- Brings in relevant experts based on topic
- Each expert provides their perspective
- Identifies issues, opportunities, improvements
- Collaborative decision-making
- Documents all perspectives in workspace

**Example:**
```
@rt review authentication spec
@rt this pitch deck needs feedback
```

**See:** `pro-os/commands/flows/rt.md`

**Note:** For status overview, use whiteboards (`roundtable/whiteboards.md`) instead of trying to review all work at once.

---

## How Flow Commands Work

### Three-Phase Workflow

**All flow commands follow this pattern:**

**Phase 1: Pre-Flight**
- Load context (conditional, token efficient)
- Verify requirements clear
- Ask clarifying questions if needed
- Research current best practices
- Set up structure

**Phase 2: Execution**
- Follow defined workflow
- Update progress in real-time
- Document decisions as made
- Keep going (DON'T STOP mid-flow)

**Phase 3: Post-Flight (MANDATORY)**
- Quality review
- Update all tracking (workspace, whiteboards, checklist)
- Completion summary
- Handoff documentation

**Critical:** All three phases MUST complete. No stopping after Phase 2.

---

## Flow Patterns

**Flow commands reference reusable patterns:**

### Spec Pattern
**File:** `pro-os/system/patterns/spec.md`

**Defines:**
- Comprehensive spec structure (ONE file has everything)
- TDD task format
- Progress logging format
- Decision documentation format
- QA requirements

**Used by:** `@create-specflow`, `@execute-specflow`

---

### Workspace Pattern
**File:** `pro-os/system/patterns/workspace.md`

**Defines:**
- Simple workspace (one file, one or more related deliverables)
- Complex workspace (folder with multiple sub-workspaces for large systems)
- When to use each pattern

**Used by:** All commands that create workspaces

---

## Key Design Decisions

### Decision 1: NO Dates in Folder Names ✅

**Pattern:**
```
✅ documents/tech/specs/user-authentication/
❌ documents/tech/specs/2025-10-09-user-authentication/
```

**Why:** No duplicates, cleaner structure, dates in metadata instead.

---

### Decision 2: ONE Comprehensive Spec File ✅

**Pattern:**
```
✅ ONE file: spec.md (has EVERYTHING)
❌ Multiple files: spec.md, tasks.md, decisions.md, etc.
```

**Why:** Single source of truth, no duplication, easier to maintain.

---

### Decision 3: TDD Non-Negotiable ✅

**Pattern:**
```markdown
EVERY task follows:
- [ ] X.1 Write Tests ← FIRST
- [ ] X.2 Implement
- [ ] X.3 Verify ← LAST
```

**Why:** Can't skip tests, quality built-in, red-green-refactor enforced.

---

### Decision 4: QA Phase Mandatory ✅

**Pattern:**
```markdown
Phase 3: QA (MANDATORY)
- Comprehensive testing
- Manual QA checklist
- Code quality review
- Integration testing
- Documentation updates
```

**Why:** Production-quality code, no shortcuts, complete validation.

---

### Decision 5: Flexible Workspace Patterns ✅

**Pattern:**
```
Simple: 1 workspace → 1 deliverable
Campaign: 1 workspace → multiple deliverables
Complex: workspace folder → sub-workspaces
```

**Why:** Real work doesn't fit rigid templates, AI chooses right pattern.

---

## Comparison: Flow vs Universal

| Aspect | Universal Commands | Flow Commands |
|--------|-------------------|---------------|
| **Structure** | AI infers | Defined patterns |
| **TDD** | Optional | Enforced |
| **QA** | Flexible | Mandatory |
| **Best For** | Content, strategy, exploration | Technical features |
| **Speed** | Faster (less structure) | Thorough (more checks) |
| **Quality** | Good | Bulletproof |
| **When to Use** | Flexible creation | Critical code |

**Both have a place!** Use the right tool for the job.

---

## Usage Examples

### Example 1: Technical Feature (Use Flow)

```
Founder: We need user authentication for the app

AI: I'll create a comprehensive spec with TDD enforcement:
    @create-specflow user-authentication
    
[Creates spec with TDD structure, mandatory QA]

Founder: Looks good, let's build it

AI: @execute-specflow user-authentication

[Implements with TDD enforcement, mandatory QA, updates all tracking]

Result: Production-quality feature, fully tested, documented
```

---

### Example 2: Marketing Campaign (Use Universal)

```
Founder: Plan our Kickstarter campaign

AI: I'll create a campaign plan:
    @lyna @create kickstarter campaign strategy
    
[Creates flexible campaign plan, adapts to needs]

Founder: Great, now execute it

AI: @lyna @execute kickstarter campaign

[Executes campaign with flexibility, adapts as needed]

Result: Successful campaign launch, adapted to real-world feedback
```

---

### Example 3: Hybrid Approach

```
Founder: Build a chat feature and create launch content

AI (Technical): @create-specflow realtime-chat
AI (Content): @lyna @create launch-announcement
    
[Uses flow for code, universal for content]

Founder: Build the feature and launch it

AI (Technical): @execute-specflow realtime-chat
AI (Content): @lyna @execute launch-announcement

Result: Quality code + flexible content = best of both worlds
```

---

## Future Flow Commands (Optional)

### `@create-flow`

**Purpose:** Create your own custom flow commands for domain-specific workflows

**Status:** Optional - can use `@create-specflow` then `@execute-specflow` separately

**Why optional:** Natural break point for review between spec and implementation

---

### `@create-pitchdeckflow`

**Purpose:** Structured pitch deck creation workflow

**Status:** Example content workflow (can build later)

---

## Quality Standards

### Before Using Flow Commands:

- [ ] Understand the difference between flow and universal commands
- [ ] Choose the right command for the work type
- [ ] Have requirements clear (or be ready to clarify)
- [ ] Understand TDD will be enforced (if using spec flows)
- [ ] QA is mandatory (can't skip)

### Flow Command Benefits:

- ✅ Consistent quality across all features
- ✅ TDD enforced (can't implement without tests)
- ✅ QA mandatory (can't skip quality checks)
- ✅ Complete documentation (progress tracked)
- ✅ Bulletproof implementation (tests + QA)

---

## Getting Started

### For Technical Features:

1. **Create spec:** `@create-specflow [feature-name]`
2. **Review spec** (optional but recommended)
3. **Execute spec:** `@execute-specflow [feature-name]`
4. **Deploy** when complete

### For Content/Strategy:

1. **Create:** `@create [what you need]`
2. **Execute:** `@execute [what you need]`
3. **Iterate** as needed

### For Campaigns:

1. **Plan:** `@create campaign for [goal]`
2. **Execute:** `@execute campaign`
3. **Adapt** based on results

---

## Expert Ownership

### Flow Commands Are Primarily Used By:

**@denny (Systems Architect):**
- Creates specs (`@create-specflow`)
- Can execute if system-level work

**@ada (Implementation Expert):**
- Executes specs (`@execute-specflow`)
- Implements features with TDD

**@genna (Architect):**
- Uses for strategic technical specs
- System-level architecture

**Any Expert Can:**
- Call flow commands when appropriate
- Mix flow and universal commands
- Choose right tool for the job

---

## Version History

**v1.0** - October 9, 2025
- Initial flow command system created
- `@create-specflow` and `@execute-specflow` implemented
- Spec, workspace, and TDD patterns defined
- Hybrid system (flow + universal) established

---

## Resources

**Command Files:**
- `create-specflow.md` - Spec creation flow
- `execute-specflow.md` - Spec execution flow
- `rt.md` - Multi-expert roundtable review

**Pattern Files:**
- `../system/patterns/spec.md` - Spec structure with TDD
- `../system/patterns/workspace.md` - Simple vs Complex workspaces
- `../system/patterns/universal.md` - Universal command workflow

**Related Commands:**
- `../create.md` - Universal create command
- `../execute.md` - Universal execute command

**Guides:**
- `../../system/patterns/expert-collaboration.md` - Roundtable system standards
- `../../system/patterns/universal.md` - Core workflow principles

---

*Flow commands bring bulletproof quality enforcement to FWD PRO while maintaining the flexibility that makes the system great.*

