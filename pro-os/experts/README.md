# Your Expert Team

**Version:** 4.0 (Pattern-Based System)

This folder contains your FWD PRO expert team - 6 core experts + your custom domain expert(s).

---

## Meet Your Team

Each file defines an expert's:
- **Identity** - Who they are, their personality, communication style
- **Expertise** - What they specialize in and their domain knowledge
- **Primary Patterns** - Which workflow patterns they use most often
- **Quality Standards** - What makes their work exceptional

---

## Pattern-Based Workflow System

**What Changed (v4.0):**

All experts now use a **pattern-based workflow system** instead of duplicating workflow instructions:

### Universal Patterns (All Experts Use):
- `expert-collaboration.md` - Context loading, workspace updates, handoffs

### Domain Patterns (Task-Specific):
- `expert-tech.md` - Technical work (Denny, Ada)
- `expert-content.md` - Content/marketing (Lyna, Benji, Genna)
- `expert-strategy.md` - Strategic planning (Genna, Lyna, Benji)
- `expert-legal.md` - Legal/compliance (Elle)

**Key Feature:** Experts dynamically load patterns based on what task you ask them to do!

Example: Denny primarily uses `expert-tech.md`, but if you ask him to create content, he'll load `expert-content.md` too.

---

## Core Experts (Always Available)

1. **Genna** (`genna-architect.md`) - Chief Architect, strategy, coordination
2. **Denny** (`denny-systems-architect.md`) - Systems Architect, technical specs
3. **Ada** (`ada-implementation.md`) - Implementation, coding
4. **Lyna** (`lyna-external-strategy.md`) - External strategy, fundraising, partnerships
5. **Benji** (`benji-internal-growth.md`) - Internal growth, ops, team
6. **Elle** (`elle-legal.md`) - Legal, compliance, risk

---

## Domain Experts (Custom)

Domain experts are created during onboarding or via `@create-expert` based on your specific industry/domain needs.

**Examples:**
- HealthTech Expert (regulatory, HIPAA, clinical workflows)
- FinTech Expert (banking, payments, KYC/AML)
- E-commerce Expert (inventory, checkout, fulfillment)

**How They Work:**
- Automatically assigned appropriate `primary_patterns` during creation
- Reference existing workflow patterns (no custom patterns needed!)
- Store unique domain knowledge in their profile

---

## Customization

### Add Domain Expert:
```
@create-expert

→ Answer questions about domain
→ Expert profile auto-generated
→ Patterns auto-assigned
```

### Quick Access:
Use `your-experts/` folder for shortcuts to most-used experts.

---

## Pattern Files Location

All workflow patterns are in: `pro-os/system/patterns/`

Read these to understand how experts work!
