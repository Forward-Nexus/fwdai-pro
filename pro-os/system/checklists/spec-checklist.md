---
version: 1.0.0
applies_to: technical_specifications
purpose: Ensure specifications are complete, clear, and actionable
---

# Specification Checklist

## Purpose

This checklist ensures technical specifications (and similar planning documents) are complete, clear, and ready for implementation.

Use this when:
- Creating technical specifications (especially with `@create-specflow`)
- Creating architecture documents
- Creating system design documents
- Planning technical work

**Related patterns:**
- `pro-os/system/patterns/spec.md` - Comprehensive spec structure with TDD
- `pro-os/system/patterns/universal.md` - Universal command workflow

---

## Instructions

Go through each section systematically. Mark items as:
- `[x]` Done - Item is complete and verified
- `[ ]` Not Done - Item needs attention
- `[N/A]` Not Applicable - Item doesn't apply to this spec

**Be honest.** Better to identify gaps now than during implementation.

---

## 1. Completeness ✅

### Core Requirements
- [ ] Problem statement clearly defined
- [ ] User needs/use cases identified
- [ ] Success criteria specified
- [ ] Scope defined (what's included AND what's excluded)
- [ ] Assumptions documented
- [ ] Constraints identified (technical, business, time)

### Technical Details
- [ ] Architecture/system design described
- [ ] Data models/schema defined (if applicable)
- [ ] API endpoints/interfaces specified (if applicable)
- [ ] Key algorithms/logic explained (if complex)
- [ ] Technology stack decisions documented with rationale
- [ ] Dependencies identified (libraries, services, other systems)

### Implementation Guidance
- [ ] File structure/organization specified
- [ ] Naming conventions defined
- [ ] Breaking complex work into clear tasks/phases
- [ ] Priority/sequence of implementation clear
- [ ] Tasks follow TDD structure (test → implement → verify) if using `@create-specflow`
- [ ] QA phase included (mandatory for flow commands)

**Notes on missing items:**
[Explain any [ ] or [N/A] items]

---

## 2. Clarity 📖

- [ ] Written in clear, accessible language (avoid unnecessary jargon)
- [ ] Technical terms defined when first used
- [ ] Diagrams/visuals included where helpful
- [ ] Examples provided for complex concepts
- [ ] Consistent terminology throughout
- [ ] No ambiguous statements ("might", "could", "should probably")
- [ ] Decisions are stated clearly with rationale

**Notes on clarity:**
[Any sections that could be clearer?]

---

## 3. Accuracy 🎯

- [ ] Current best practices researched and applied (2025 standards)
- [ ] Technology decisions based on actual requirements (not assumptions)
- [ ] Performance/scale requirements realistic and achievable
- [ ] Security considerations appropriate for use case
- [ ] No invented or assumed technical details not supported by research
- [ ] Source references included for technical standards/patterns
- [ ] Cross-referenced with existing architecture (if brownfield)

**Research sources consulted:**
- [List best practices sources, documentation, standards referenced]

**Notes on accuracy:**
[Any areas that need validation?]

---

## 4. Actionability 🚀

- [ ] Clear enough for implementer to start immediately
- [ ] All unknowns identified (not hidden or assumed)
- [ ] Blockers/dependencies called out explicitly
- [ ] Next steps obvious
- [ ] Acceptance criteria defined (how to know when it's done)
- [ ] Testing approach specified
- [ ] Potential risks/challenges identified

**Notes on actionability:**
[Would Ada (or another implementer) have everything needed?]

---

## 5. Alignment 🎯

### Project Alignment
- [ ] Aligns with project goals (check project-kb.md)
- [ ] Fits within existing architecture/patterns
- [ ] Consistent with tech stack decisions
- [ ] Respects project constraints (timeline, budget, skills)

### Stakeholder Alignment
- [ ] Addresses founder's actual needs (check founder-profile.md)
- [ ] Considers user experience appropriately
- [ ] Legal/compliance considerations addressed (if applicable)
- [ ] Reviewed by Genna for strategic alignment (if major decision)

**Notes on alignment:**
[Any misalignments or concerns?]

---

## 6. Quality Standards 📋

- [ ] Follows FWD PRO workflow standards
- [ ] Follows spec pattern (`pro-os/system/patterns/spec.md`) if using flow commands
- [ ] TDD structure enforced (every task: test → implement → verify) if flow command
- [ ] Mandatory QA phase included if flow command
- [ ] Security considerations addressed
- [ ] Performance requirements specified
- [ ] Accessibility considerations (if user-facing)
- [ ] Error handling approach defined
- [ ] Logging/monitoring approach specified (if applicable)
- [ ] Testing strategy outlined (or TDD structure if flow command)

**Notes on quality:**
[Any quality concerns?]

---

## 7. Documentation 📝

- [ ] All decisions documented with rationale
- [ ] Trade-offs explained (pros/cons of choices made)
- [ ] Alternative approaches considered and noted
- [ ] Open questions clearly flagged
- [ ] Assumptions explicitly stated
- [ ] Changes from previous versions tracked (if updating)

**Key decisions made:**
- [Decision 1]: [Rationale]
- [Decision 2]: [Rationale]

---

## 8. Collaboration 🤝

- [ ] Other experts consulted where appropriate
  - [ ] Genna (strategy) - if major architectural decision
  - [ ] Elle (legal) - if compliance/security implications
  - [ ] Benji/Lyna - if business impact
  - [ ] Domain expert - if domain-specific patterns
- [ ] Handoff section prepared (for implementer)
- [ ] Workspace updated with spec status
- [ ] Whiteboards updated

**Collaborators:**
- [List who was consulted and what input they provided]

---

## 9. Completeness Check 🔍

**Final review:**
- [ ] Read through entire spec as if I'm the implementer
- [ ] Can I build this with just this spec + general knowledge?
- [ ] Are there any ambiguities or gaps?
- [ ] Is anything assumed but not stated?
- [ ] Would I feel confident starting implementation?

---

## 10. Workspace & Deliverable Updates ✅

- [ ] Workspace status updated
- [ ] Whiteboards updated
- [ ] Deliverable saved in correct location
- [ ] Quality metadata updated in workspace YAML
- [ ] Handoff documented (if ready for implementation)
- [ ] Founder notified if review needed

---

## Final Confirmation

- [ ] **I confirm this specification is complete, clear, accurate, and actionable.**

**Checklist completed by:** [Expert name]  
**Date:** YYYY-MM-DD  
**Spec:** [Deliverable name/location]

---

## Summary

**What this spec accomplishes:**
[Brief summary of what will be built based on this spec]

**Ready for:** 
- [ ] Implementation (Ada - can use `@execute-specflow` if TDD structure present)
- [ ] Review (Genna/Elle/other)
- [ ] Founder approval
- [ ] Further refinement (explain why)

**Notes:**
[Any important context or caveats]

---

**If any items are marked [ ] Not Done:**
- Explain why in notes
- Either: Fix them before marking spec complete, OR
- Document as known gaps with plan to address

**Remember:** A good spec saves time during implementation. Take the time to get it right!

