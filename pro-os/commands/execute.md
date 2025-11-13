# Execute Command

**Command:** `@execute`  
**Type:** Universal execution/implementation command  
**Purpose:** Build, implement, or run anything based on context

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @execute [thing]`

**Examples:**

- `@ada @execute build the login feature`
- `@lyna @execute launch the fundraising campaign`
- `@benji @execute run the hiring process`
- `@denny @execute implement the database schema`

---

## AI Instructions

### Step 1: Understand What to Execute

**Parse the request:**

- Feature/code → Technical implementation
- Campaign → Marketing execution
- Process → Operational execution
- Design → Design implementation
- Plan → Strategic execution

**Check for existing spec/plan:**

- Look in `roundtable/workspace/` for context
- Look in `documents/` for specs/plans
- If spec exists, use it as guide

### Step 2: Load Context (Token Efficient)

**Check what's already in context FIRST!**

**Load only if NOT in context:**

- `project/founder-profile.md`
- `project/project-kb.md`
- `roundtable/whiteboards.md`
- Relevant workspace files (contain specs, instructions, handoffs)

**If spec/plan exists:**

- Load and read thoroughly
- This is your implementation guide

### Step 3: Verify Requirements

**Ensure you have:**

- Clear goal (what needs to be done)
- Instructions (spec, story, or brief to follow)
- Resources (everything needed to execute)
- Constraints (timeline, budget, limitations)

**If missing - ask before starting!**

### Step 4: Research Current Best Practices

**Before implementing:**

- Check current year
- Search: "[technology/approach] best practices [year]"
- Apply latest patterns, not outdated approaches

**For code execution:**

- Search current best practices for the technology
- Check security standards
- Review performance patterns

### Step 5: Execute

**General execution pattern:**

1. **Plan approach** (don't just dive in)
2. **Execute incrementally** (small steps, validate as you go)
3. **Test/validate continuously** (catch issues early)
4. **Document progress** (update workspace regularly)
5. **Handle blockers immediately** (don't hide problems)

**For CODE specifically:**

- **Write tests FIRST** (TDD - mandatory)
- Implement to pass tests
- Run full test suite
- No skipping tests!

**For campaigns/content:**

- Clear goals and metrics
- Know the audience
- Create timeline
- Track execution

**For processes:**

- Document each step
- Track completion
- Note blockers
- Keep stakeholders updated

### Step 6: Handle Blockers

**If blocked:**

**STOP and report clearly:**

- What you're blocked on
- What you need to proceed
- Impact of the blocker
- What you're doing meanwhile

**Add to founder checklist if action needed.**

### Step 7: Quality Validation

**Before marking complete:**

- All requirements met
- Tests pass (if code)
- Works as expected
- No known issues
- Ready to ship/use

**Quality standards applied automatically via command .mdc**

### Step 8: Update Tracking

**Update workspace:**

- What was done
- Decisions made
- Issues encountered
- Status complete

**Update whiteboard:**

- Mark work complete ✅
- Show what's next (if applicable)

### Step 9: Deliver

**Present completed work:**

- What was built/executed
- How it works
- Testing/validation done
- Files/deliverables created
- Next steps (if any)

---

## Key Behaviors

**Follow domain expertise:**

- Code → TDD mandatory, quality standards
- Campaigns → Metrics, audience targeting
- Processes → Documentation, step tracking

**Incremental execution:**

- Don't do everything at once
- Validate as you go
- Update progress regularly

**Quality first:**

- Don't skip validation
- Test thoroughly
- Handle errors gracefully

**Transparency:**

- Surface blockers immediately
- Document decisions
- Keep tracking updated

---

## Routing to Flow Commands

**If executing from technical spec with TDD:** Suggest:
`@execute-specflow [feature]` - enforced TDD with mandatory QA

**Otherwise:** This command handles flexible execution across all domains.

---

## Notes

- Expert workflow patterns loaded via expert .mdc
- Quality standards/checklists loaded via command .mdc
- Adapts to expert's domain automatically
- Workspace contains all context needed for execution
