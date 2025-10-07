# @create-feature

**Purpose:** Full workflow from spec to implementation (Denny → Ada)

**Experts:** Denny (Systems Architect) → Ada (Lead Engineer)

**Category:** Technical

---

## When to Use

Use this command when:
- You want a feature built from idea to working code
- You need both spec and implementation
- You want the full Denny → Ada collaboration workflow

**vs using separate commands:**
- This command: Handles entire workflow, seamless handoff, optimized for speed
- Separate commands: `@create-spec` then `@ada @execute spec` (also works!)

---

## How It Works

This is a **two-phase workflow** with automatic handoff.

### Phase 1: Denny Creates Spec

#### 1. Smart Questions (Context-Aware)

**Check what we already know:**
- If `project-kb.md` has tech stack → Don't ask
- If similar feature exists → Reference for consistency

**Required questions (always ask if not known):**
- [ ] What feature are you building?
- [ ] What problem does it solve?
- [ ] Who are the users?

**Optional questions (ask only if needed):**
- [ ] Technical constraints?
- [ ] Performance requirements?
- [ ] Integration points?

#### 2. Load Context (Token Efficiency!)

**Check what's already in context first!**

If NOT in context, read:
- `project/founder-profile.md`
- `project/project-kb.md` (tech stack!)
- `project/mission.md`
- `roundtable/whiteboards.md`

#### 3. Search Current Best Practices

**ALWAYS search for current information:**
- "[current year] [feature type] best practices"
- "[technology] [feature type] implementation patterns [current year]"
- "[current year] [framework] best practices"

#### 4. Denny Creates Spec

**Step 1: Create Workspace**
- Create `roundtable/workspace/[feature].md`
- This is where ENTIRE collaboration happens

**Step 2: Create Spec**
- Create `documents/technical/[feature]-spec.md`
- Full technical specification
- Includes all sections from spec checklist

**Step 3: Document Handoff in Workspace**

**CRITICAL:** Add complete handoff section for Ada:

```markdown
## Handoff to Ada

**Feature:** [Name]

**What to Build:**
[Clear description]

**Spec Location:** `documents/technical/[feature]-spec.md`

**Context:**
- [Key technical decision 1 and why]
- [Key technical decision 2 and why]
- [Any gotchas or tricky parts]

**Tech Stack:**
- [Languages/frameworks to use]
- [Libraries/dependencies needed]

**Key Requirements:**
1. [Requirement 1]
2. [Requirement 2]
3. [Requirement 3]

**Acceptance Criteria:**
- [ ] [Testable criterion 1]
- [ ] [Testable criterion 2]
- [ ] [Testable criterion 3]

**Testing Strategy:**
- [What types of tests]
- [Edge cases to test]

**Files to Create/Modify:**
- [Estimated file locations]

**Dependencies:**
- [What this connects to]
- [What might break]

**Questions/Clarifications:**
[Any open questions for Ada to ask about]

@ada Ready for implementation!
```

**Step 4: Update Roundtable**
- Update `roundtable/whiteboards.md` (Denny's section)
- Note: "Spec complete, handed to Ada"

---

### Phase 2: Ada Implements

#### 1. Ada Reads Handoff

Ada opens workspace, reads Denny's complete handoff section.

#### 2. Search Current Best Practices

**Ada searches for implementation best practices:**
- "[current year] [technology] best practices"
- "[current year] [framework] patterns"
- "[feature type] implementation examples [current year]"

#### 3. TDD Implementation

**CRITICAL: Write tests FIRST!**

**Step 1: Write Tests**
- Write tests that implement acceptance criteria
- Tests will FAIL initially (that's good!)

**Step 2: Implement Feature**
- Write code to make tests pass
- Follow current best practices (just researched!)
- Follow code style standards

**Step 3: Run Tests**
- All tests must pass
- No linter errors
- Edge cases covered

**Step 4: Update Workspace**

Add implementation section to workspace:

```markdown
## Ada's Implementation

**Status:** Complete ✅

**What I Built:**
- [Summary of implementation]

**Files Created/Modified:**
- `[file1]` - [what it does]
- `[file2]` - [what it does]

**Tests:**
- ✅ All acceptance criteria tests passing
- ✅ Edge cases covered
- ✅ No linter errors

**Technical Notes:**
- [Any implementation decisions]
- [Any deviations from spec and why]

**Ready for:** [Denny's QA / Founder review / Deployment]
```

#### 4. Quality Check

- Run checklist: `system/checklists/code-checklist.md`
- All tests passing
- No linter errors
- Code is clean and maintainable

#### 5. Update Roundtable

- Update `roundtable/whiteboards.md` (Ada's section)
- Note: "Feature complete, tests passing"
- Add to `roundtable/founder-checklist.md` if founder should test

---

## What Makes This Quick Command Different

**Full workflow optimization:**
- Seamless Denny → Ada handoff
- Complete context transfer in workspace
- TDD enforced automatically
- Quality checks at both phases

**Smart defaults:**
- Knows to create comprehensive handoff
- Ada knows to write tests first
- Both search current best practices
- Workspace keeps all collaboration in one place

**Efficiency gains:**
- One command = spec + implementation
- No context loss between experts
- Optimized for speed and quality
- Automatic quality checks

---

## Quality Standards

### Phase 1 (Denny) - Before Handoff:
- ✅ Spec checklist: `system/checklists/spec-checklist.md`
- ✅ Complete handoff section in workspace
- ✅ All acceptance criteria defined
- ✅ Current best practices researched

### Phase 2 (Ada) - Before Complete:
- ✅ Code checklist: `system/checklists/code-checklist.md`
- ✅ **All tests written FIRST and passing**
- ✅ No linter errors
- ✅ Code follows style standards
- ✅ Implementation matches spec
- ✅ Workspace updated with completion notes

---

## Example Usage

### Simple:
```
@create-feature login
```

### With Context:
```
@create-feature user authentication with 2FA
```

### Example Flow:

**Founder:** `@create-feature login system`

**AI (Denny):**
```
Creating login feature! This will be a full spec → implementation workflow.

Quick questions:
1. Auth type? (Email/password, OAuth, magic link)
2. Any specific security requirements?

[Checks project-kb - React/Node stack]

[Searching "2025 authentication best practices"...]

Phase 1: Creating spec...
✅ Spec complete: documents/technical/login-spec.md
✅ Workspace created: roundtable/workspace/login-feature.md
✅ Handoff prepared for Ada

Handing off to Ada for implementation...
```

**AI (Ada):**
```
Got it! Reading Denny's handoff...

[Searching "2025 React authentication patterns"...]
[Searching "2025 Node.js auth implementation"...]

Phase 2: Implementing with TDD...

Step 1: Writing tests...
✅ Auth tests written (currently failing - as expected!)

Step 2: Implementing feature...
✅ Login component created
✅ Auth API endpoints created
✅ Session management implemented

Step 3: Running tests...
✅ All tests passing
✅ No linter errors
✅ Edge cases covered

✅ Feature complete!

Check:
- Workspace: roundtable/workspace/login-feature.md
- Code: [file locations]
- Tests: All passing ✅

Ready for you to test!
```

---

## Timeline

**Typical feature creation:**
- Phase 1 (Spec): 15-30 min
- Phase 2 (Implementation): 30-90 min
- **Total:** 45 min - 2 hours for complete feature

(Varies based on complexity)

---

## Notes

- This is a **shortcut** for the full workflow
- Creates **one workspace** for both phases
- **Complete handoff** - no context lost
- **TDD enforced** - tests written first
- **Quality built-in** - both experts run checklists

---

## When NOT to Use

**Don't use this command if:**
- ❌ You just want a spec (use `@create-spec`)
- ❌ Spec already exists (use `@ada @execute spec`)
- ❌ Feature is extremely complex (break into phases manually)

---

## References

- Spec creation: `commands/quick/create-spec.md`
- Execution: `commands/execute.md`
- Workflow standards: `system/standards/workflow-standards.md`
- Spec checklist: `system/checklists/spec-checklist.md`
- Code checklist: `system/checklists/code-checklist.md`
- Denny: `agents/denny-systems-architect.md`
- Ada: `agents/ada-implementation.md`

---

**Remember:** This is the POWER command - from idea to working code in one shot. Denny specs it, Ada builds it, tests prove it works. Ship it! 🚢

