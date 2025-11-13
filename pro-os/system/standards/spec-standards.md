# FWD PRO Spec Pattern

**Purpose:** Reusable structure for comprehensive technical specifications with
TDD enforcement

---

## Overview

This is the **ONE comprehensive spec file** pattern used by FWD PRO flow
commands like `@create-specflow`.

### Key Principles

1. **ONE file has EVERYTHING** - No fragmentation across multiple files
2. **TDD Structure** - Every task: test first → implement → verify last
3. **Story-Driven** - Human context (why) + AI execution (how)
4. **Progressive Detail** - High-level story → detailed tasks
5. **QA Mandatory** - Can't skip quality phase
6. **NO dates in folder names** - Dates go in metadata only

---

## File Location Pattern

```
documents/tech/specs/[feature-name]/
  └── spec.md              ← ONE comprehensive file
```

**Examples:**

- `documents/tech/specs/user-authentication/spec.md`
- `documents/tech/specs/therapist-summary-fix/spec.md`
- `documents/tech/specs/payment-processing/spec.md`

**❌ DON'T:**

- `documents/tech/specs/2025-10-09-user-auth/` ← NO dates in folder names
- `documents/tech/specs/user-auth/spec.md` + `tasks.md` + `decisions.md` ← NO
  multiple files
- `documents/tech/specs/user-auth-v2.md` ← NO version suffixes (update original)

---

## The Spec Structure

### Complete Template

````markdown
# [Feature Name] - Technical Specification

## Metadata

```yaml
created: YYYY-MM-DD
updated: YYYY-MM-DD
owner: @[expert-name]
status: draft | in-progress | review | complete
priority: low | medium | high | critical
workspace: documents/tech/workspaces/[workspace-name]/
type: feature | bugfix | enhancement | infrastructure
tags: [tag1, tag2, tag3]
```
````

---

## Story

**As a** [role/user type]  
**I want** [capability/feature]  
**So that** [benefit/value]

**Alternative Format (Problem/Solution):**

- **Problem:** [What problem are we solving?]
- **Solution:** [What are we building?]
- **Benefit:** [Why does this matter?]

**Context & Background:** [Additional context about why this matters, how it
fits larger project goals, any relevant history]

---

## Acceptance Criteria

What "done" looks like (specific, testable, verifiable):

1. [ ] [Criterion 1 - clear and measurable]
2. [ ] [Criterion 2 - clear and measurable]
3. [ ] [Criterion 3 - clear and measurable]
4. [ ] [Criterion 4 - clear and measurable]

**How to write good AC:**

- Be specific and testable
- Use "When X, then Y" or "Given A, should B" format
- Focus on outcomes, not implementation
- Should be verifiable by someone other than implementer

---

## Technical Design

### Architecture Overview

[High-level architecture, components involved, data flow]

### System Components

- **Component 1:** [Purpose, responsibilities]
- **Component 2:** [Purpose, responsibilities]
- **Component 3:** [Purpose, responsibilities]

### Data Model

[Database schema changes, new tables, field modifications]

```yaml
# Example
table: users
fields:
  - name: email_verified
    type: boolean
    default: false
  - name: verification_token
    type: string
    nullable: true
```

### API Design

[Endpoints, request/response formats, authentication]

```yaml
# Example
endpoint: POST /api/auth/verify-email
authentication: required
request:
  verification_token: string
response:
  success: boolean
  message: string
```

### Security Considerations

- [Security requirement 1]
- [Security requirement 2]
- [Authentication/authorization approach]

### Performance Considerations

- [Performance requirement 1]
- [Scalability considerations]
- [Caching strategy if applicable]

### Integration Points

- [External service 1] - [How integrated]
- [Internal system 2] - [How integrated]

---

## Implementation Tasks

> **TDD STRUCTURE:** Every task follows Test → Implement → Verify pattern

### Phase 1: [Phase Name]

- [ ] **1.1 Write Tests for [Feature Component]** ← ALWAYS FIRST
  - **AC:** [1, 2]
  - **Tests to Create:**
    - `tests/[feature]/[component].test.js`
    - Test case 1: [Description]
    - Test case 2: [Description]
    - Test case 3: [Description]
  - **Coverage Goal:** 80%+
  - **Expected Result:** Tests FAIL (red) - feature not implemented yet

- [ ] **1.2 Implement [Feature Component]**
  - **AC:** [1, 2]
  - **Files to Create/Modify:**
    - `src/[feature]/[component].js`
    - `src/[feature]/[helper].js`
  - **Implementation Notes:**
    - [Key technical decision]
    - [Edge case to handle]
  - **Expected Result:** Tests PASS (green)

- [ ] **1.3 Verify Tests Pass** ← ALWAYS LAST
  - **AC:** [1, 2]
  - **Verification Steps:**
    - Run new tests (should pass)
    - Run full test suite (no regressions)
    - Check coverage (meets goal)
  - **Expected Result:** All tests green, coverage good

### Phase 2: [Phase Name]

[Repeat TDD structure for each phase]

### Phase 3: Quality Assurance (MANDATORY)

- [ ] **3.1 Comprehensive Testing**
  - [ ] Run full test suite
  - [ ] All tests passing
  - [ ] No regressions introduced
  - [ ] Coverage meets goals (80%+)
- [ ] **3.2 Manual QA Checklist**
  - [ ] Feature works as specified
  - [ ] All AC verified manually
  - [ ] No obvious bugs or issues
  - [ ] Performance acceptable
  - [ ] UI/UX feels right (if applicable)
- [ ] **3.3 Code Quality Review**
  - [ ] Follows code style standards
  - [ ] No linter errors
  - [ ] Properly documented
  - [ ] No security vulnerabilities
  - [ ] Error handling comprehensive
- [ ] **3.4 Integration Testing**
  - [ ] Works with existing features
  - [ ] No breaking changes
  - [ ] APIs backward compatible (if applicable)
- [ ] **3.5 Documentation**
  - [ ] Code comments clear
  - [ ] API docs updated (if applicable)
  - [ ] README updated (if needed)
  - [ ] Migration guide (if breaking changes)

---

## Key Decisions

> Document architectural and design decisions with rationale

### Decision 1: [Decision Title]

**Context:** [What situation prompted this decision]

**Options Considered:**

- **Option A:** [Description] - Pros: [X] - Cons: [Y]
- **Option B:** [Description] - Pros: [X] - Cons: [Y]
- **Option C:** [Description] - Pros: [X] - Cons: [Y]

**Decision:** [What was chosen]

**Rationale:** [Why this option]

**Trade-offs:** [What we're giving up]

**Implications:** [How this affects future work]

**Related:** AC [#], Task [#]

---

## Dependencies

### Required Before Starting

- [Dependency 1] - [Why needed] - [Status]
- [Dependency 2] - [Why needed] - [Status]

### Blocks These Items

- [Blocked item 1] - [Why blocked] - [Team/Owner]
- [Blocked item 2] - [Why blocked] - [Team/Owner]

### Related Work

- [Related spec 1] - [Relationship]
- [Related spec 2] - [Relationship]

---

## Progress Log

> Track detailed progress as work happens

### [Date] [Time] - Phase [#] Task [#] Complete ✅

**By:** [Expert name]

**What was done:**

- [Detailed notes on what was accomplished]
- Files created/modified: [list]
- Tests: [X passing, Y failing]
- Coverage: [%]

**Issues encountered:**

- [Issue 1] - [How resolved]

**Next steps:**

- [What's next]

---

### [Date] [Time] - [Status Update]

[Progress notes as work continues]

---

## Testing Strategy

### Unit Tests

- **Location:** `tests/unit/[feature]/`
- **Coverage Goal:** 80%+
- **Focus:** Individual functions, components, logic

### Integration Tests

- **Location:** `tests/integration/[feature]/`
- **Coverage Goal:** Key workflows
- **Focus:** Component interactions, API contracts

### E2E Tests (if applicable)

- **Location:** `tests/e2e/[feature]/`
- **Coverage Goal:** Critical user paths
- **Focus:** Full user workflows

### Performance Tests (if applicable)

- **Location:** `tests/performance/[feature]/`
- **Benchmarks:** [Performance targets]
- **Focus:** Load, response time, resource usage

---

## Rollout Plan

### Deployment Strategy

- [ ] Feature flags enabled
- [ ] Gradual rollout percentage: [%]
- [ ] Monitoring in place
- [ ] Rollback plan ready

### Monitoring

- **Metrics to track:**
  - [Metric 1]
  - [Metric 2]
  - [Metric 3]
- **Alerts configured:** Yes/No
- **Dashboard:** [Link if applicable]

### Rollback Plan

- **Trigger conditions:** [When to rollback]
- **Rollback steps:**
  1. [Step 1]
  2. [Step 2]
- **Data handling:** [How to handle data if rolling back]

---

## Notes & Context

[Any additional important information, gotchas, future considerations, technical
debt, etc.]

---

## Completion Checklist

Before marking this spec as COMPLETE:

- [ ] Story is clear and user-focused
- [ ] All AC are specific and testable
- [ ] Every task follows TDD pattern (test → implement → verify)
- [ ] QA phase is included and detailed
- [ ] Technical design is documented
- [ ] All decisions are explained with rationale
- [ ] Dependencies identified
- [ ] Progress log maintained
- [ ] All tests passing
- [ ] Code quality standards met
- [ ] Workspace linked and updated
- [ ] Location follows pattern: `documents/tech/specs/[feature-name]/spec.md`

---

````

---

## Usage by Commands

### `@create-specflow` uses this pattern to:
1. Create the folder structure
2. Generate spec.md with all sections
3. Fill in Story, AC, Technical Design from requirements
4. Create TDD-structured tasks
5. Include mandatory QA phase

### `@execute-specflow` uses this pattern to:
1. Read the spec
2. Follow task order (TDD structure)
3. Update Progress Log as work happens
4. Mark AC as complete
5. Execute QA phase (can't skip)

---

## TDD Task Structure Rules

**Every implementation task MUST follow this pattern:**

```markdown
- [ ] X.1 Write tests ← FIRST
  - Tests to create
  - Coverage goal
  - Expected: FAIL (red)

- [ ] X.2 Implement feature
  - Files to create/modify
  - Implementation notes
  - Expected: PASS (green)

- [ ] X.3 Verify tests pass ← LAST
  - Run tests
  - Check coverage
  - No regressions
````

**Why this structure:**

- ✅ Enforces TDD (can't implement without tests)
- ✅ Clear expectations (red → green)
- ✅ Built-in verification step
- ✅ Prevents "I'll write tests later"

---

## Best Practices

### ✅ DO:

- Make Story and AC clear before creating tasks
- Break work into phases (manageable chunks)
- Document decisions as you make them
- Update progress log in real-time
- Include QA phase (mandatory)
- Link to workspace for collaboration context
- Keep one spec per feature (consolidate)
- Update existing spec, don't create v2

### ❌ DON'T:

- Don't skip TDD structure (required)
- Don't omit QA phase (mandatory)
- Don't put dates in folder names
- Don't create multiple files (one spec has everything)
- Don't write implementation tasks without tests
- Don't mark complete without QA
- Don't create duplicate specs

---

## Integration with Workspace

**Relationship:**

- **Spec** = Source of truth (detailed, technical, TDD structure)
- **Workspace** = Collaboration hub (progress summaries, handoffs, expert notes)

**Workflow:**

1. Create spec (this pattern)
2. Create workspace (links to spec)
3. Work happens (update both)
4. Progress log (detailed in spec)
5. Progress summary (high-level in workspace)
6. Handoffs (in workspace with context)

**Workspace references spec:**

```markdown
**Deliverable:** [Spec](../../documents/tech/specs/feature-name/spec.md)
```

**Spec references workspace:**

```yaml
workspace: documents/tech/workspaces/feature-name/
```

---

## Quality Standards

### Spec Quality Checklist

Run `pro-os/system/checklists/spec-checklist.md` before marking complete.

**Quick checklist:**

- [ ] Story clear and user-focused
- [ ] AC specific and testable
- [ ] TDD structure in all tasks
- [ ] QA phase detailed
- [ ] Technical design complete
- [ ] Decisions documented
- [ ] Dependencies identified
- [ ] Progress tracking in place

---

## Examples

### Example 1: Simple Feature Spec

**Feature:** Password Reset

**Folder:** `documents/tech/specs/password-reset/spec.md`

**Story:** "As a user, I want to reset my password via email, so that I can
regain access if I forget it."

**AC:**

1. User can request password reset via email
2. Reset link expires after 1 hour
3. Password meets security requirements

**Tasks follow TDD pattern** for email sending, token generation, password
update.

### Example 2: Complex Feature Spec

**Feature:** Real-time Chat System

**Folder:** `documents/tech/specs/realtime-chat/spec.md`

**Story:** "As a user, I want to chat in real-time with my therapist, so that we
can communicate between sessions."

**AC:**

1. Messages deliver instantly (< 1s)
2. Messages persist and sync across devices
3. Typing indicators show activity
4. Offline messages queue and send when online

**Tasks span multiple phases** (backend WebSocket, frontend UI, message
persistence) - all with TDD structure.

---

## Adaptation Notes

**For Non-Code Specs:**

If creating specs for non-code work (infrastructure, processes, content), adapt
the pattern:

- Keep Story, AC, Tasks, Decisions, Progress Log
- Replace "Technical Design" with "Approach/Strategy"
- Replace "TDD structure" with "Draft → Review → Finalize" pattern
- Replace "Tests" with "Validation Criteria"
- Keep QA phase (quality review)

**Example:** Infrastructure deployment spec, operational process spec, content
creation spec.

---

## Version History

**v1.0** - October 9, 2025

- Initial pattern created
- TDD structure defined
- QA phase mandatory
- One comprehensive file approach
- No dates in folder names

---

_This pattern is used by FWD PRO flow commands to create consistent,
high-quality technical specifications with bulletproof TDD enforcement._
