# FWD PRO Patterns

**Purpose:** Expert behavior workflows - HOW experts work

---

## What Are Patterns?

Patterns define **expert workflows** - how experts operate, collaborate, and
deliver work.

**Patterns are ONLY for experts.** Commands, standards, and checklists live
elsewhere.

---

## Available Patterns

### expert-workflow.md (UNIVERSAL) ⭐

**For:** ALL experts

**Defines:**

- Individual expert workflow (7 steps: context → workspace → deliverables →
  tracking)
- Expert collaboration (group chat, handoffs, multi-expert work)
- The Roundtable System (whiteboards, workspaces, checklists, deliverables)
- Cross-expert awareness and coordination
- Division of labor
- Quality standards

**Used by:** Every expert, every time

**Note:** Consolidated from `expert-collaboration.md` and
`roundtable-system.md` - single universal operating system for all experts.

---

### expert-tech.md (DOMAIN)

**For:** Technical work (code, specs, systems)

**Defines:**

- TDD requirements (tests FIRST, always)
- Code quality standards
- Technical documentation requirements
- Testing coverage goals (80%+)
- Denny → Ada handoff process

**Used by:** @denny (design), @ada (implementation)

---

### expert-content.md (DOMAIN)

**For:** Content, marketing, and business documents

**Defines:**

- Content creation workflow
- Audience-appropriate messaging
- Content quality standards
- Legal review requirements for customer-facing content
- Lead with emotion (external) or data (internal)

**Used by:** @benji (internal growth), @lyna (external strategy - pitch decks,
investor materials)

---

### expert-strategy.md (DOMAIN)

**For:** Strategic planning and vision work

**Defines:**

- Long-term thinking (10-year horizon)
- "Should we build this?" decision framework
- Strategic alignment requirements
- Trade-off documentation
- Strategic thinking frameworks

**Used by:** @genna (chief strategist), @benji (growth strategy), @lyna
(external strategy)

---

### expert-legal.md (DOMAIN)

**For:** Legal and compliance work

**Defines:**

- Risk assessment standards
- Compliance verification process
- Claims review methodology
- Accessible legal explanations
- Legal workflow and frameworks

**Used by:** @elle (legal counsel)

---

## Pattern Loading Architecture

### Expert .mdc Rules Load:

```
Step 1: Personality (WHO I am)
    ↓
Step 2: Domain Pattern (WHAT I know)
    ↓
Step 3: Universal Workflow (HOW I work)
    ↓
Step 4: Then respond
```

**Example - Denny:**

1. `denny-systems-architect.md` (personality)
2. `expert-tech.md` (domain expertise)
3. `expert-workflow.md` (universal workflow)
4. Respond as Denny

---

## Pattern Philosophy

**Patterns = Expert behavior (not document structure)**

```
PATTERNS (Expert Workflows)
├── expert-workflow.md (universal - all experts)
└── expert-[domain].md (specialized - per domain)

STANDARDS (Document Structure)
├── spec-standards.md
├── investor-materials-standards.md
└── code-style/

CHECKLISTS (Quality Gates)
├── spec-checklist.md
├── code-checklist.md
└── quality-checklist.md
```

**Like professional training:**

- **Universal pattern** = Foundational training all experts get
- **Domain pattern** = Specialized expertise filtered through universal workflow
- **Standards** = Document structure/format requirements
- **Checklists** = Quality validation

---

## Adding New Patterns

**Only add patterns for expert workflows.**

### When to Add:

- New expert domain needs behavior definition
- Universal workflow needs enhancement
- Expert collaboration needs new process

### When NOT to Add:

- Document structure rules → goes in `standards/`
- Quality validation → goes in `checklists/`
- Command behavior → goes in `commands/`

---

## Version History

**v3.0** - November 13, 2025

- **MAJOR ARCHITECTURE CLEANUP:**
  - Consolidated expert-workflow.md + expert-collaboration.md +
    roundtable-system.md → ONE universal pattern
  - Moved spec.md → standards/spec-standards.md
  - Moved document-processing.md → standards/document-processing-standards.md
  - Moved market-research-workflow.md →
    standards/investor-materials-standards.md
  - **Patterns now ONLY contain expert workflows**
  - Standards contain document structure/format
  - Checklists contain quality validation
  - Clear separation of concerns

**v2.1** - October 18, 2025

- Added deliverable-types.md, market-research-workflow.md
- Enhanced expert-collaboration.md with research integrity
- Created research-citation-standards.md

**v2.0** - October 9, 2025

- Enhanced universal.md and expert-collaboration.md
- System-wide improvements

**v1.0** - October 9, 2025

- Initial patterns system created

---

_Patterns are the expert operating system - they define HOW we work, not WHAT we
produce._
