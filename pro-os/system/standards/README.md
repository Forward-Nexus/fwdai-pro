# FWD PRO Standards

**Purpose:** Formatting and style standards for voice, code, and messaging

---

## What Are Standards?

Standards are **formatting and style guides** that define HOW to format and present work. They're not workflows (those are in `patterns/`) - they're style rules.

Think of them as "formatting rules" for consistent presentation.

---

## 📂 Folder Purpose (After Consolidation)

**Standards folder contains:**
- Voice and communication style guides
- Code formatting standards
- Error message templates
- Reusable helper functions

**Standards folder does NOT contain:**
- Workflow processes → See `patterns/`
- Quality validation → See `checklists/`

---

## Available Standards

### expert-voice-guidelines.md
**For:** All experts, all communication

**Defines:**
- First person voice (speak as "I/me", not "Denny thinks")
- File management behavior (update files, don't create v2)
- Collaboration behavior (work IN workspaces)
- Communication tone and style

**Used by:** All experts when communicating

---

### error-templates.md
**For:** User-facing error messages

**Defines:**
- Standard error message formats
- Recovery-informed messaging
- Empathetic error communication
- Clear action guidance

**Used by:** When creating user-facing error messages

---

### helper-functions.md
**For:** Reusable code patterns

**Defines:**
- Common utility functions
- Reusable code snippets
- Standard implementations
- Best practice code patterns

**Used by:** Technical implementation work

---

### code-style/ (Directory)
**For:** Code formatting standards

**Contains:**
- `general-code-style.md` - Universal code standards
- `javascript-style.md` - JavaScript/TypeScript formatting
- `html-style.md` - HTML formatting
- `css-style.md` - CSS formatting

**Used by:** All code implementation work

---


## How to Use Standards

### During Work
Reference standards when formatting or styling:
- Check voice guidelines before communication
- Use error templates for user messages
- Follow code style for implementation
- Use helper functions for common patterns

### Standards ≠ Workflow
- **Standards** tell you HOW to format (voice, style, templates)
- **Patterns** tell you HOW to work (workflow, process, structure)
- **Checklists** tell you IF it's complete (validation, quality)

---

## Adding New Standards

**When to add a standard:**
- New formatting rules needed (e.g., API response format)
- Style guide for new domain (e.g., design standards)
- Reusable templates or patterns (e.g., email templates)

**When NOT to add a standard:**
- Workflow/process documentation → That goes in patterns/
- Quality validation → That goes in checklists/
- One-off formatting (just note in workspace)

**Keep it focused!** Only add standards that define reusable formatting/style rules.

---

## Standard vs Pattern vs Checklist

**Standard** = Formatting and style rules
- Location: `pro-os/system/standards/`
- Example: `expert-voice-guidelines.md`, `error-templates.md`
- Purpose: Define HOW to format and present

**Pattern** = Workflow guide
- Location: `pro-os/system/patterns/`
- Example: `universal.md`, `expert-collaboration.md`
- Purpose: Define HOW to work and collaborate

**Checklist** = Quality validation
- Location: `pro-os/system/checklists/`
- Example: `quality-checklist.md`, `code-checklist.md`
- Purpose: Validate IF work is complete and correct

---

## Version History

**v2.0** - October 9, 2025
- Clarified folder purpose: formatting and style standards only
- Updated README structure

**v1.0** - October 9, 2025
- Initial standards system created

---

*Standards define formatting and style. Patterns define workflow. Together they create consistent, professional work.*

