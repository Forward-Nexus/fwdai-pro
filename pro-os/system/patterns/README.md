# FWD PRO Patterns

**Purpose:** Reference guides that define workflow structures for commands

---

## What Are Patterns?

Patterns are **reference documentation** that define how commands should work. They're not templates - they're guides that AI reads to understand the proper workflow.

Think of them as the "instruction manual" for different types of work.

---

## Available Patterns

### universal.md
**For:** All universal commands (`@create`, `@execute`, `@analyze`, `@research`, `@review`, `@update`, `@fix`, `@plan`, `@brainstorm`)

**Defines:**
- Three-phase workflow (Pre-Flight → Execution → Post-Flight)
- Smart context loading
- Adaptive intelligence (adjust to complexity/type)
- Quality standards
- When to route to flow commands

**Used by:** All universal commands

---

### spec.md
**For:** Technical specifications with TDD enforcement

**Defines:**
- Comprehensive spec structure (ONE file has everything)
- TDD task format (test → implement → verify)
- Metadata, Story, AC, Technical Design, Tasks, QA, Decisions
- Progress logging format
- NO dates in folder names
- ONE file approach (no fragmentation)

**Used by:** `@create-specflow`, `@execute-specflow`

---

### workspace.md
**For:** Workspace structure decisions

**Defines:**
- Simple workspace (one file, one or more related deliverables)
- Complex workspace (folder with sub-workspaces for large systems)
- When to use each pattern
- How to choose

**Used by:** All commands that create workspaces

---

### expert-collaboration.md
**For:** Universal collaboration workflow for ALL experts

**Defines:**
- Context loading standards
- Workspace creation and management
- Whiteboard updates
- Cross-expert collaboration patterns
- Founder checklist management
- Quality standards

**Used by:** All experts, all the time (universal pattern)

---

### expert-tech.md
**For:** Technical work (code, specs, systems)

**Defines:**
- TDD requirements (tests FIRST, always)
- Code quality standards
- Technical documentation requirements
- Testing coverage goals (80%+)

**Used by:** @denny, @ada (primary pattern for technical experts)

---

### expert-content.md
**For:** Content, marketing, and business documents

**Defines:**
- Lead with emotion (external) or data (internal)
- Audience-appropriate messaging
- Content quality standards
- Legal review requirements for customer-facing content

**Used by:** @lyna, @benji (primary pattern for content/marketing experts)

---

### expert-strategy.md
**For:** Strategic planning and vision work

**Defines:**
- Long-term thinking (10-year horizon)
- "Should we build this?" decision framework
- Strategic alignment requirements
- Trade-off documentation

**Used by:** @genna, @lyna, @benji (primary pattern for strategy experts)

---

### expert-legal.md
**For:** Legal and compliance work

**Defines:**
- Risk assessment standards
- Compliance verification process
- Claims review methodology
- Accessible legal explanations

**Used by:** @elle (primary pattern for legal expert)

---

### PATTERN-LOADING-FLOW.md ⭐
**For:** Visual understanding of the entire system

**Defines:**
- System architecture hierarchy (visual diagrams)
- Pattern loading sequence
- Expert activation flow
- Pattern-to-checklist mapping
- Decision trees for pattern selection
- Complete examples of pattern loading
- Roundtable integration flow

**Used by:** System maintainers, documentation reference

**Purpose:** Comprehensive visual guide showing how patterns, experts, commands, checklists, and standards all work together.

---

## How Patterns Work

### Commands Read Patterns

```
User: @create spec for user authentication

AI reads: pro-os/system/patterns/universal.md
↓
Follows three-phase workflow:
- Pre-Flight: Load context, understand request, research
- Execution: Create workspace + deliverable, update progress
- Post-Flight: Update tracking, provide summary

AI also checks: Should this use @create-specflow instead?
↓
Offers alternative if appropriate
```

### Patterns Are References, Not Templates

**Templates** = Files you copy/fill out (like `workspace-template.md`)

**Patterns** = Guides that explain HOW to do something

**Example:**
- Template: "Here's a blank workspace to fill out"
- Pattern: "Here's when to use Simple vs Complex workspace, and here's the workflow to follow"

---

## Pattern Design Principles

### 1. Clear and Concise
Patterns explain WHAT to do and WHEN, not excessive detail

### 2. Adaptive
Patterns provide structure while allowing flexibility

### 3. Consistent
All patterns follow similar format (Overview → Structure → Best Practices)

### 4. Practical
Patterns include examples and clear decision criteria

### 5. Non-Redundant
Information appears in ONE pattern, not duplicated across multiple

---

## Adding New Patterns

**When to add a pattern:**
- New command type needs structure
- Repetitive workflow that needs standardization
- Complex decision tree that needs documentation

**When NOT to add a pattern:**
- Information already in another pattern
- Simple workflow that doesn't need documentation
- One-off case that won't repeat

**Keep it simple!** Only add patterns when they truly help.

---

## Pattern vs Template vs Command

**Pattern** = Reference guide explaining workflow
- Location: `pro-os/system/patterns/`
- Example: `universal.md`, `spec.md`, `workspace.md`
- Purpose: AI reads to understand HOW to work

**Template** = Blank structure to copy/fill
- Location: `pro-os/templates/`
- Example: `workspace-template.md`
- Purpose: Starting point for creating new files

**Command** = Executable instruction
- Location: `pro-os/commands/`
- Example: `create.md`, `execute.md`, `create-specflow.md`
- Purpose: AI executes when user invokes command
- Commands READ patterns to understand workflow

---

## Pattern vs Standard vs Checklist

**Pattern** = Workflow guide (HOW to do the work)
- Location: `pro-os/system/patterns/`
- Example: `universal.md`, `expert-collaboration.md`
- Purpose: Define workflows, processes, and structures
- When: Throughout all phases of work

**Standard** = Formatting and style rules (HOW to format)
- Location: `pro-os/system/standards/`
- Example: `expert-voice-guidelines.md`, `error-templates.md`
- Purpose: Define formatting, voice, and style
- When: When formatting communication or code

**Checklist** = Quality validation (DID I do it right?)
- Location: `pro-os/system/checklists/`
- Example: `quality-checklist.md`, `code-checklist.md`
- Purpose: Validate completeness and quality
- When: Before marking work complete (Phase 3)

---

## Version History

**v2.0** - October 9, 2025
- Enhanced universal.md with comprehensive workflow guidance
- Enhanced expert-collaboration.md with update format examples
- System-wide improvements and clarifications

**v1.0** - October 9, 2025
- Initial patterns system created

---

*Patterns provide structure without rigidity - the foundation of consistent, high-quality work.*

