# @create-specflow Command

**Purpose:** Create a comprehensive technical specification using the FWD PRO
spec pattern with TDD enforcement

**When to Use:**

- Building a new feature that needs technical specification
- Want structured spec with mandatory TDD and QA
- Need bulletproof quality enforcement
- Implementing code (not content/strategy)

**When NOT to Use:**

- For flexible content creation → use `@create` instead
- For strategy documents → use `@create` instead
- For campaigns/pitches → use flow-specific commands or `@create`
- For simple updates → use `@update` instead

---

## How It Works

**User says:**

```
@create-specflow user-authentication
@create-specflow password-reset
@denny @create-specflow therapist-summary-fix
```

**What happens:**

1. Pre-Flight: Load context, clarify requirements, verify readiness
2. Execution: Create spec using pattern, fill all sections, structure TDD tasks
3. Post-Flight: Review quality, link workspace, update tracking (MANDATORY)

---

## Three-Phase Workflow

### Phase 1: Pre-Flight (Setup & Clarification)

#### Step 1.1: Context Loading (Conditional - Token Efficient!)

**Check what's already in context FIRST:**

- If `project/founder-profile.md` NOT in context → load it
- If `project/project-kb.md` NOT in context → load it
- If `project/mission.md` exists and NOT in context → load it
- If related specs mentioned → load those

**Don't re-read files already loaded!**

#### Step 1.2: Feature Understanding

**Ask clarifying questions if ANY of these are unclear:**

**Required Information:**

1. **What user problem does this solve?** (for Story)
2. **What are the acceptance criteria?** (what "done" looks like)
3. **Any technical constraints or requirements?** (tech stack, performance,
   security)

**Optional but Helpful:** 4. Related to existing features? 5. Any dependencies
or blockers? 6. Priority level? 7. Timeline considerations?

**Smart Questioning:**

- Don't ask if you can infer from context
- Don't ask for information already in loaded files
- DO ask if requirements are ambiguous
- DO confirm technical approach if unclear

**Example conversation:**

```
User: @create-specflow user-authentication

AI: I'll create a spec for user authentication. Quick questions:

1. What type of auth? (email/password, OAuth, magic link, or multi-option?)
2. Any specific security requirements? (2FA, SSO, etc.)
3. This integrates with the existing user system in `src/users/`, correct?

Let me know and I'll structure the complete spec!
```

#### Step 1.3: Research Current Best Practices

**ALWAYS search for current best practices FIRST:**

- Check what year it is! (This is critical - tech changes fast)
- Search: "[technology] [feature] best practices [current year]"
- Example: "Node.js authentication best practices 2025"
- Example: "React state management patterns 2025"
- Review current security standards
- Check for deprecated approaches

**Why:** We implement using CURRENT standards, not outdated patterns.

#### Step 1.4: Readiness Verification

**Before proceeding, verify:**

- [ ] Feature purpose is clear
- [ ] Acceptance criteria defined (or can define them)
- [ ] Technical approach identified
- [ ] No critical unknowns blocking spec creation
- [ ] Current best practices researched

**IF NOT READY:** Ask questions, don't proceed with partial information.

---

### Phase 2: Execution (Create the Spec)

#### Step 2.1: Create Folder Structure

**Pattern:**

```
documents/tech/specs/[feature-name]/
  └── spec.md
```

**Naming:**

- Use descriptive, URL-friendly names
- Lowercase, hyphens for spaces
- ❌ NO dates in folder names
- ❌ NO version numbers

**Examples:**

- ✅ `documents/tech/specs/user-authentication/spec.md`
- ✅ `documents/tech/specs/password-reset/spec.md`
- ✅ `documents/tech/specs/therapist-summary-fix/spec.md`
- ❌ `documents/tech/specs/2025-10-09-user-auth/spec.md`
- ❌ `documents/tech/specs/user-auth-v2/spec.md`

#### Step 2.2: Use Spec Pattern

**Load and follow:** `pro-os/system/standards/spec-standards.md`

**Create spec.md with ALL sections:**

1. **Metadata**

   ```yaml
   created: [today's date]
   updated: [today's date]
   owner: [expert creating this]
   status: draft
   priority: [low/medium/high/critical]
   type: [feature/bugfix/enhancement/infrastructure]
   ```

2. **Story** (Human Context - WHY)
   - "As a [user type], I want [capability], so that [benefit]"
   - OR Problem/Solution/Benefit format
   - Include background context

3. **Acceptance Criteria** (What "Done" Looks Like)
   - Specific, testable criteria
   - Use "When X, then Y" format
   - 4-8 criteria typically
   - Focus on outcomes, not implementation

4. **Technical Design** (HOW - Architecture)
   - Architecture overview
   - System components
   - Data model (if database changes)
   - API design (if endpoints)
   - Security considerations
   - Performance considerations
   - Integration points

5. **Implementation Tasks** (AI Execution with TDD)
   - Break into phases (2-4 phases typically)
   - EVERY task follows TDD structure:
     - X.1 Write tests ← FIRST
     - X.2 Implement feature
     - X.3 Verify tests pass ← LAST
   - Clear file paths
   - Reference AC numbers
   - Include test requirements

6. **Phase 3: QA** (MANDATORY - Can't Skip)
   - Comprehensive testing checklist
   - Manual QA checklist
   - Code quality review
   - Integration testing
   - Documentation updates

7. **Key Decisions** (Document the WHY)
   - Architectural decisions
   - Options considered
   - Rationale for choices
   - Trade-offs accepted

8. **Dependencies**
   - Required before starting
   - Blocks these items
   - Related work

9. **Progress Log** (Empty initially)
   - Structure in place
   - Will be filled during execution

10. **Notes & Context**
    - Additional important information
    - Gotchas to watch for
    - Future considerations

#### Step 2.3: TDD Task Breakdown

**Critical Rule:** EVERY implementation task MUST follow this pattern:

```markdown
### Phase [#]: [Phase Name]

- [ ] [#].1 Write Tests for [Component] ← ALWAYS FIRST
  - **AC:** [1, 2]
  - **Tests to Create:**
    - `tests/[path]/[file].test.js`
    - Test case 1: [Description]
    - Test case 2: [Description]
    - Test case 3: [Description]
  - **Coverage Goal:** 80%+
  - **Expected Result:** Tests FAIL (red) - feature not implemented yet

- [ ] [#].2 Implement [Component]
  - **AC:** [1, 2]
  - **Files to Create/Modify:**
    - `src/[path]/[file].js`
    - `src/[path]/[helper].js`
  - **Implementation Notes:**
    - [Key technical decision]
    - [Edge case to handle]
  - **Expected Result:** Tests PASS (green)

- [ ] [#].3 Verify Tests Pass ← ALWAYS LAST
  - **AC:** [1, 2]
  - **Verification Steps:**
    - Run new tests (should pass)
    - Run full test suite (no regressions)
    - Check coverage (meets goal)
  - **Expected Result:** All tests green, coverage good
```

**Why this structure:**

- ✅ Enforces TDD (can't implement without writing tests first)
- ✅ Clear expectations (red → green → verified)
- ✅ Built-in verification
- ✅ Prevents "I'll write tests later" syndrome

**Example: Authentication Feature**

```markdown
### Phase 1: User Registration & Login

- [ ] 1.1 Write Tests for User Registration
  - **AC:** 1, 2
  - **Tests to Create:**
    - `tests/auth/registration.test.js`
    - Test: User can register with valid email/password
    - Test: Registration fails with duplicate email
    - Test: Password must meet security requirements
    - Test: Verification email sent on registration
  - **Coverage Goal:** 90%+
  - **Expected Result:** All tests FAIL (red)

- [ ] 1.2 Implement User Registration
  - **AC:** 1, 2
  - **Files to Create/Modify:**
    - `src/auth/register.js` - Registration logic
    - `src/auth/validation.js` - Input validation
    - `src/email/verification.js` - Email sending
    - `database/migrations/add_users_table.sql`
  - **Implementation Notes:**
    - Hash passwords with bcrypt (cost factor: 12)
    - Generate verification token (UUID v4)
    - Store token with 24hr expiry
  - **Expected Result:** All tests PASS (green)

- [ ] 1.3 Verify Registration Tests Pass
  - **AC:** 1, 2
  - **Verification Steps:**
    - Run registration tests (should pass)
    - Run full auth test suite (no regressions)
    - Check coverage (should be 90%+)
    - Manual test: Register a user successfully
  - **Expected Result:** Green tests, coverage met
```

#### Step 2.4: Mandatory QA Phase

**Always include Phase 3: QA with these tasks:**

```markdown
### Phase 3: Quality Assurance (MANDATORY)

- [ ] 3.1 Comprehensive Testing
  - [ ] Run full test suite
  - [ ] All tests passing (100%)
  - [ ] No regressions introduced
  - [ ] Coverage meets goals (80%+ minimum)
  - [ ] Performance tests pass (if applicable)

- [ ] 3.2 Manual QA Checklist
  - [ ] Feature works as specified (test all AC manually)
  - [ ] All acceptance criteria verified
  - [ ] No obvious bugs or issues
  - [ ] Error handling works correctly
  - [ ] Performance acceptable (load times, responsiveness)
  - [ ] UI/UX feels right (if applicable)
  - [ ] Works across browsers/devices (if applicable)

- [ ] 3.3 Code Quality Review
  - [ ] Follows code style standards (`pro-os/system/standards/code-style/`)
  - [ ] No linter errors or warnings
  - [ ] Code properly commented and documented
  - [ ] No console.logs or debug code left behind
  - [ ] No security vulnerabilities (run security scan if available)
  - [ ] Error handling comprehensive
  - [ ] Edge cases handled

- [ ] 3.4 Integration Testing
  - [ ] Works with existing features (no breaking changes)
  - [ ] No regressions in related features
  - [ ] APIs backward compatible (if applicable)
  - [ ] Database migrations work (forward and rollback)
  - [ ] External integrations working (if applicable)

- [ ] 3.5 Documentation
  - [ ] Code comments clear and helpful
  - [ ] API docs updated (if applicable)
  - [ ] README updated (if user-facing changes)
  - [ ] Migration guide created (if breaking changes)
  - [ ] Changelog updated
```

**This QA phase is MANDATORY and CANNOT be skipped.**

#### Step 2.5: Link Workspace

**Create or update workspace:**

**If workspace doesn't exist:**

```markdown
Create: documents/tech/workspaces/[feature-name]/workspace.md

Use template: pro-os/templates/roundtable/workspace/workspace-template.md

In workspace:

- Link to spec in deliverable
- Add initial status
- Document creation in change log
```

**If workspace already exists:**

```markdown
Update existing workspace:

- Add link to new spec
- Update status
- Add to change log
```

**In the spec metadata:**

```yaml
workspace: documents/tech/workspaces/[workspace-name]/
```

---

### Phase 3: Post-Flight (Quality Review & Updates) - MANDATORY

**Critical:** Do NOT stop after creating the spec. Post-flight is REQUIRED.

#### Step 3.1: Spec Quality Review

**Run through checklist:**

- [ ] **Story Section**
  - [ ] Clear user-focused story
  - [ ] Context and background included
  - [ ] Benefit articulated

- [ ] **Acceptance Criteria**
  - [ ] Specific and testable (not vague)
  - [ ] 4-8 criteria (right level of detail)
  - [ ] Focus on outcomes, not implementation
  - [ ] Use "When X, then Y" format

- [ ] **Technical Design**
  - [ ] Architecture overview clear
  - [ ] Components identified
  - [ ] Data model documented (if applicable)
  - [ ] API design specified (if applicable)
  - [ ] Security considerations addressed
  - [ ] Performance considerations addressed

- [ ] **TDD Tasks Structure**
  - [ ] EVERY task has: Write tests → Implement → Verify
  - [ ] Test files specified
  - [ ] Coverage goals defined
  - [ ] Expected results clear (red → green)
  - [ ] Files to create/modify listed
  - [ ] AC referenced in tasks

- [ ] **QA Phase Included**
  - [ ] Comprehensive testing checklist
  - [ ] Manual QA checklist
  - [ ] Code quality review
  - [ ] Integration testing
  - [ ] Documentation updates

- [ ] **Decisions Documented**
  - [ ] Key architectural decisions recorded
  - [ ] Options considered noted
  - [ ] Rationale provided
  - [ ] Trade-offs documented

- [ ] **Metadata Complete**
  - [ ] Created/updated dates
  - [ ] Owner assigned
  - [ ] Status set (draft)
  - [ ] Priority defined
  - [ ] Type specified

- [ ] **Dependencies Identified**
  - [ ] Required dependencies listed
  - [ ] Blocked items noted
  - [ ] Related work linked

- [ ] **File Location Correct**
  - [ ] Follows pattern: `documents/tech/specs/[feature-name]/spec.md`
  - [ ] NO dates in folder name
  - [ ] NO version suffix in filename

#### Step 3.2: Documentation Updates

**Update Workspace:**

- Add spec to workspace deliverables
- Update workspace status
- Add entry to change log

**Update Whiteboards:**

Location: `roundtable/whiteboards.md`

Find your expert section and add:

```markdown
### Active Work

- **[Feature Name] Spec** - ⚪ Draft
  - Workspace: [link](workspace/feature-name-workspace.md)
  - Spec: [link](../documents/tech/specs/feature-name/spec.md)
  - Quick note: Created comprehensive spec with TDD structure
  - Next: Ready for review, then @execute-specflow
```

**Update Checklist (If Review Needed):**

Location: `roundtable/[founder-name]-checklist.md`

Add if founder needs to review:

```markdown
| ☐ | **Review [Feature] Spec** | @denny | Review spec before implementation |
[Spec link] | [Date] |
```

#### Step 3.3: Completion Summary

**Provide clear summary to founder:**

```markdown
✅ Spec created: [Feature Name]

**Location:** documents/tech/specs/[feature-name]/spec.md

**What's included:**

- Clear story and acceptance criteria
- Comprehensive technical design
- TDD-structured implementation tasks (X tasks across Y phases)
- Mandatory QA phase
- Key decisions documented
- Dependencies identified

**Current Status:** Draft - ready for review

**Next Steps:**

1. [Optional] Review spec and provide feedback
2. When ready: @execute-specflow [feature-name]
3. Implementation will follow TDD structure with mandatory QA

**Key Decisions Made:**

- [Decision 1]
- [Decision 2]

**Timeline Estimate:** [If you can provide one based on task complexity]

Let me know if you'd like me to adjust anything or if you're ready to proceed
with implementation!
```

---

## DON'T STOP - Complete All Three Phases

**This is critical:** Complete ALL THREE PHASES before finishing.

**Do NOT stop after:**

- ❌ Creating the spec file (need post-flight)
- ❌ Filling in sections (need quality review)
- ❌ TDD structure created (need to update whiteboards/workspace)

**MUST complete:**

- ✅ Quality review checklist
- ✅ Workspace linked and updated
- ✅ Whiteboards updated
- ✅ Checklist updated (if review needed)
- ✅ Completion summary provided

**Why:** Incomplete work creates confusion. Finish the job.

---

## Quality Standards

**Before marking this command complete, verify:**

- [ ] Spec follows pattern (`flow-patterns/spec.md`)
- [ ] Story is clear and user-focused
- [ ] AC are specific and testable (4-8 criteria)
- [ ] Technical design is comprehensive
- [ ] EVERY task has TDD structure (test → implement → verify)
- [ ] QA phase included and detailed
- [ ] Key decisions documented with rationale
- [ ] Dependencies identified
- [ ] File location correct (no dates, no versions)
- [ ] Workspace created/updated and linked
- [ ] Whiteboards updated with spec status
- [ ] Checklist updated if review needed
- [ ] Completion summary provided to founder

**Checklist Reference:** `pro-os/system/checklists/spec-checklist.md`

---

## Expert Ownership

**Primary Expert:** @denny (Systems Architect)

- Creates technical specifications
- Designs system architecture
- Documents technical decisions
- This command is in Denny's available commands

**Can Collaborate With:**

- **@ada** - For implementation feasibility review
- **@elle** - For legal/compliance requirements
- **@genna** - For strategic alignment
- Domain experts - For domain-specific requirements

**Availability:**

- **Always available for:** Founders building software/technical products
- **Always available:** `@rt` (roundtable collaboration)

**Handoff To:**

- **@ada** (or other implementer) - Via `@execute-specflow [feature-name]`
- Workspace contains full handoff context

---

## Example Usage

### Example 1: Simple Feature

```
Founder: @denny @create-specflow password-reset

Denny: I'll create a spec for password reset. Quick questions:

1. Reset via email link (standard approach)?
2. Token expiry time? (I'd recommend 1 hour for security)
3. Any specific email service we're using?

Founder: Yes email link, 1 hour is fine, we use SendGrid

Denny: Perfect! Creating comprehensive spec...

[Creates spec with TDD structure]

✅ Spec created: Password Reset

Location: documents/tech/specs/password-reset/spec.md

What's included:
- User story: "As a user, I want to reset my password..."
- 5 acceptance criteria (email sent, link expires, etc.)
- Technical design (token generation, email service, password update)
- 3 phases with TDD structure (12 tasks total)
- Mandatory QA phase
- Security decisions documented

Next: When ready, run @execute-specflow password-reset
```

### Example 2: Complex Feature

```
Founder: @create-specflow realtime-chat

Denny: Creating spec for real-time chat. This is a complex feature, let me clarify:

1. WebSocket or polling approach? (I recommend WebSocket for real-time)
2. Message persistence? (store in database?)
3. Typing indicators and read receipts?
4. File sharing in chat?
5. This is between users and therapists, correct?

Founder: Yes WebSocket, persist messages, typing indicators yes, no files for now, yes user-therapist

Denny: Got it! I'll research current WebSocket best practices for 2025 and create a comprehensive spec...

[Researches current patterns]
[Creates detailed spec]

✅ Spec created: Real-time Chat System

Location: documents/tech/specs/realtime-chat/spec.md

What's included:
- User story focused on therapist-user communication
- 8 acceptance criteria (delivery speed, persistence, indicators, offline handling)
- Technical design:
  - WebSocket architecture (Socket.io recommended)
  - Message database schema
  - API design for REST + WebSocket
  - Security: authentication, message encryption
  - Performance: connection pooling, message queuing
- 4 phases with TDD structure (24 tasks total)
  - Phase 1: WebSocket server setup
  - Phase 2: Message persistence
  - Phase 3: Real-time features (typing, presence)
  - Phase 4: QA (mandatory)
- Key decisions documented (Socket.io vs native WebSocket, message storage strategy)
- Dependencies: Requires user authentication system

Timeline Estimate: 3-4 days for full implementation with TDD

Next: Review the spec, then @execute-specflow realtime-chat when ready
```

---

## Integration with Other Commands

**Works with:**

- `@execute-specflow [feature]` - Implements the spec created by this command
- `@review [spec]` - For reviewing/refining specs
- `@update [spec]` - For modifying existing specs
- `@rt review this spec` - Multi-expert review

**Differs from:**

- `@create` - Universal, flexible creation (this is structured, TDD-enforced)
- `@plan` - Strategic planning (this is technical specification)
- `@brainstorm` - Exploration (this is concrete spec)

---

## Error Handling

### IF requirements are unclear:

```markdown
I need some clarification before creating the spec:

1. [Question about user problem]
2. [Question about technical approach]
3. [Question about constraints]

These will help me create a comprehensive, accurate spec that we can execute
with confidence.
```

### IF existing spec found:

```markdown
I found an existing spec at documents/tech/specs/[feature]/spec.md

Would you like me to:

1. Update the existing spec
2. Create a new spec (different feature)
3. Review what's there first

Let me know!
```

### IF dependencies missing:

```markdown
I can create this spec, but I noticed it depends on:

- [Dependency 1] - [Status]
- [Dependency 2] - [Status]

Should we:

1. Create the spec now and note the dependencies
2. Handle the dependencies first
3. Adjust the scope to remove dependencies

Your call!
```

---

## Tips for Success

1. **Ask smart questions early** - Clarify before creating, not after
2. **Research current practices** - Check the year, use latest patterns
3. **Break into phases** - 2-4 phases, manageable chunks
4. **Be specific in tasks** - File paths, test names, clear instructions
5. **Document decisions** - Future you will thank you
6. **TDD non-negotiable** - Every implementation task: test → implement → verify
7. **QA is mandatory** - Can't skip, include detailed checklist
8. **Update all tracking** - Workspace, whiteboards, checklist
9. **Complete all phases** - Don't stop after creation

---

## Voice & Communication

**When creating specs (technical):**

- Clear, precise, complete
- Technical depth appropriate for implementers
- Think: "What does Ada need to execute this perfectly?"

**When explaining to founder:**

- Accessible language
- Explain the "why" behind decisions
- Present trade-offs clearly
- Think: "How do I help them understand without overwhelming?"

**My personality:**

- Chill but intense when designing systems
- Think in patterns and connections
- Excited about elegant solutions
- Hyper-intelligent but approachable

---

## Version History

**v1.0** - October 9, 2025

- Initial flow command created
- Three-phase workflow defined
- TDD enforcement mandatory
- QA phase mandatory
- Integration with spec pattern

---

_This command is part of the FWD PRO flow command system - structured workflows
with bulletproof quality enforcement._
