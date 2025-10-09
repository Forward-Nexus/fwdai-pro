# FWD PRO Quality Checklists

**Purpose:** Quick reference quality checks for final validation before marking work complete

---

## What Are Checklists?

Checklists are **quick quality checks** to run before completing work. They're not workflows (those are in `patterns/`) - they're validation lists.

Think of them as "Did I do everything?" checks before shipping.

---

## Available Checklists

### quality-checklist.md (Universal)
**For:** ALL deliverables (docs, specs, strategies, plans, content)

**Use when:** Completing any work to verify quality

**Covers:**
- Completeness
- Quality standards
- Accuracy
- Actionability
- Communication
- Documentation

**Used by:** All universal commands in Phase 3 (Post-Flight)

---

### spec-checklist.md
**For:** Technical specifications and architecture documents

**Use when:** Creating/completing specs (especially with `@create-specflow`)

**Covers:**
- Completeness (requirements, technical details, implementation guidance)
- Clarity (language, terminology, examples)
- Accuracy (best practices, research, validation)
- Actionability (ready to implement)
- TDD structure (if flow command)
- Quality standards

**Used by:** `@create-specflow` Phase 3

---

### code-checklist.md
**For:** Code implementations and technical features

**Use when:** Completing implementations (especially with `@execute-specflow`)

**Covers:**
- Functionality (works, requirements met, edge cases)
- Testing (TDD followed, tests pass, coverage, no regressions)
- Code quality (clean, no smells, DRY)
- Standards & conventions
- Performance
- Security
- Documentation

**Used by:** `@execute-specflow` Phase 3 (mandatory QA)

---

### content-checklist.md
**For:** Content deliverables (docs, copy, campaigns, materials)

**Use when:** Creating content, marketing materials, documentation

**Covers:**
- Message clarity
- Audience fit
- Quality standards
- Accuracy
- Tone and voice
- Structure

**Used by:** Content creation commands

---

### legal-review-checklist.md
**For:** Legal documents, contracts, policies, compliance materials

**Use when:** Creating legal/compliance content or reviewing for legal issues

**Covers:**
- Legal accuracy
- Compliance requirements
- Risk assessment
- Clarity for legal interpretation
- Required disclosures

**Used by:** Legal document creation, compliance reviews

---

### new-expert-checklist.md
**For:** Creating new experts (core or domain-specific)

**Use when:** Adding a new expert to the system

**Covers:**
- File structure and location
- Frontmatter configuration (patterns, persona, hierarchy)
- Voice rules and personality
- Workspace integration
- Command configuration
- Quality standards and checklist references
- Domain adaptation sections
- Testing and validation

**Used by:** System maintainers creating new experts

---

### new-command-checklist.md
**For:** Creating new commands (universal or flow)

**Use when:** Adding a new command to the system

**Covers:**
- Command type determination (universal vs flow)
- Three-phase workflow implementation
- Pattern references and integration
- Checklist integration
- Workspace and deliverable patterns
- Best practices and examples
- Error handling
- Testing and validation

**Used by:** System maintainers creating new commands

---

## How to Use Checklists

### During Work (Optional)
Reference checklists as you work to keep quality in mind

### Before Completion (Required)
Run appropriate checklist(s) before marking work complete:
- Universal work → `quality-checklist.md`
- Specs → `spec-checklist.md` + `quality-checklist.md`
- Code → `code-checklist.md` + `quality-checklist.md`
- Content → `content-checklist.md` + `quality-checklist.md`
- Legal → `legal-review-checklist.md` + `quality-checklist.md`

### In Phase 3 (Post-Flight)
All commands with three-phase workflow use checklists in Phase 3:
- Universal commands → Check appropriate checklist
- `@create-specflow` → `spec-checklist.md`
- `@execute-specflow` → `code-checklist.md` (mandatory QA)

---

## Checklists vs Patterns

**Checklists** = Quality validation ("Did I do everything?")
- Location: `pro-os/system/checklists/`
- Purpose: Quick reference quality checks
- When: Before marking work complete (Phase 3)

**Patterns** = Workflow guides ("How do I do this?")
- Location: `pro-os/system/patterns/`
- Purpose: Define workflows and structures
- When: Throughout work (Phases 1-3)

**Example:**
- Pattern tells you HOW to create a spec (structure, workflow, steps)
- Checklist tells you IF your spec is complete and ready (validation)

---


## Adding New Checklists

**When to add:**
- New domain needs specific quality checks (e.g., design-checklist.md)
- Quality standards unique to that domain
- Can't be covered by existing checklists

**When NOT to add:**
- Workflow/process documentation (that goes in patterns/)
- Redundant with existing checklists
- One-off validation (just note it in workspace)

**Keep it simple!** Only add checklists that provide clear validation value.

---

## Version History

**v2.0** - October 9, 2025
- Updated references to patterns and standards
- Clarified folder boundaries

**v1.0** - October 9, 2025
- Initial checklists system created

---

*Checklists ensure quality. Patterns define workflows. Standards define formatting. Together they create consistent, high-quality work.*

