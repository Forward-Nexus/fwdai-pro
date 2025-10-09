# Execute Command

**Purpose:** Universal command for building, implementing, or running anything - features, campaigns, processes, designs, operations, etc.

**Type:** Flexible workflow (AI adapts execution to context)

**Pattern:** This command follows `pro-os/system/patterns/universal.md` (three-phase workflow with adaptive intelligence)

**Alternative:** For executing technical specs with TDD enforcement, use `@execute-specflow` instead.

---

## When to Use This vs Flow Commands

### Use `@execute` (this command) when:
- ✅ Flexible execution (campaigns, processes, designs)
- ✅ No strict TDD requirements
- ✅ AI should adapt to context
- ✅ Non-technical implementations

### Use `@execute-specflow` when:
- ✅ Technical spec exists (from `@create-specflow`)
- ✅ Want TDD enforced (tests first, always)
- ✅ Want mandatory QA phase
- ✅ Bulletproof quality requirements

**Both are valid! Choose based on needs.**

---

## How This Works

When a user says: `@[expert] @execute [thing]`

Example:
- `@ada @execute build the login feature` → Flexible implementation (can also use `@execute-specflow` if spec exists)
- `@lyna @execute launch the fundraising campaign` → Campaign execution
- `@benji @execute run the hiring process` → Process execution
- `@denny @execute implement the new database schema` → Database work

---

## Process

### 1. Detect What They Want to Execute

Listen for keywords:
- **"feature"** or **"story"** → Load `workflows/execute-feature.yaml`
- **"campaign"** → Load `workflows/execute-campaign.yaml`
- **"process"** or **"workflow"** → Load `workflows/execute-process.yaml`
- **"design"** or **"mockup"** → Load `workflows/execute-design.yaml`
- **"test"** or **"validation"** → Load `workflows/execute-test.yaml`
- **Other** → Use generic execution workflow

### 2. Load Context (Token Efficiency!)

**Check what's already in context first!**

If NOT in context, read:
- `project/founder-profile.md`
- `project/project-kb.md`
- `roundtable/whiteboards.md`
- **Relevant workspace files** - `roundtable/workspace/[name].md` (has specs, instructions, handoffs!)

### 3. Verify Requirements

Make sure you have everything needed:
- [ ] Clear goal - what needs to be done?
- [ ] Instructions - spec, story, or brief to follow?
- [ ] Resources - do I have what I need?
- [ ] Constraints - timeline, budget, limitations?

**If anything is missing - ASK before starting!**

### 4. Follow Best Practices

**ALWAYS:**
- **Search current best practices first** (check what year it is!)
- Update workspace with progress regularly
- Don't re-invent solutions - search for current standards

**For CODE execution (Ada):**
- **Write tests FIRST** (TDD - test-driven development!)
- Search current best practices for the technology
- Write clean, readable code
- Document your work
- Follow project conventions
- Reference: `system/standards/code-style/`

**For CAMPAIGN execution:**
- Have clear goals/metrics
- Know your audience
- Create timeline/milestones
- Track progress
- Document learnings

**For PROCESS execution:**
- Document each step
- Track completion
- Note any blockers
- Keep stakeholders updated

### 5. Execute Step-by-Step

Follow the workflow file for your specific task type.

**General execution pattern:**
1. Plan the approach
2. Execute incrementally (don't do everything at once)
3. Test/validate as you go
4. Document progress
5. Handle blockers immediately
6. Update Roundtable regularly

### 6. Handle Blockers

If you hit a blocker:

**STOP and report:**
```markdown
### [Date] - [Expert]: Blocker on [Task] ⚠️

**What I'm blocked on:**
[Specific issue]

**What I need:**
[Specific help/input/resource]

**Impact:**
[How this affects the work]

**What I'm doing meanwhile:**
[Other work or waiting]
```

Add to checklist:
```markdown
- [ ] [URGENT] Provide [what's needed] - Blocking [task]
```

### 7. Quality Validation

Before marking complete:
- [ ] All requirements met
- [ ] Tests pass (if code)
- [ ] Works as expected
- [ ] Documentation updated
- [ ] No known issues
- [ ] Ready to ship/use

Run appropriate checklist from `system/checklists/`

### 8. Update Roundtable

```markdown
### [Date] - [Expert]: Completed [Thing] 🎉

[2-3 sentence summary]

**What I built/executed:**
- [Key accomplishment 1]
- [Key accomplishment 2]

**How it works:**
- [Brief explanation]

**Testing/Validation:**
- [What was tested/validated]
- [Results]

**Files/Deliverables:**
- [List of files created/modified]
- Saved to: `roundtable/workspace/[filename]`

**Next steps:**
- **founder:** [What to do - test it? review it? approve it?]
- **[other expert]:** [If this hands off to someone]

**Status:** [Ready for review / Ready to ship / Needs testing] ✅
```

### 9. Create/Update Workspace + Deliverable

**A. Update Workspace**
- Open existing workspace: `roundtable/workspace/[feature]-complete.md`
- Add your execution section with progress, decisions, issues encountered
- Document what was done and how

**B. Create/Update Deliverable**
- For code: The code itself is the deliverable (committed to repo)
- For campaigns: Save as `documents/campaigns/[name]-execution-report.md`
- For processes: Save as `documents/processes/[name]-implementation.md`

**Files involved:**
1. `roundtable/workspace/[feature]-complete.md` - Execution process, issues, decisions
2. Code (for features) OR execution report (for campaigns/processes)

**Update whiteboards:** Update your section in `roundtable/whiteboards.md` with execution status.

---

## Best Practices

### ✅ DO:
- **Plan before executing** - think through the approach
- **Execute incrementally** - small steps, test as you go
- **Document as you work** - don't wait until the end
- **Test thoroughly** - if it's code, write tests; if it's a campaign, validate assumptions
- **Communicate progress** - update Roundtable at milestones
- **Handle errors gracefully** - don't hide problems, fix them
- **Follow standards** - check `system/standards/` for guidelines

### ❌ DON'T:
- **Don't skip planning** - diving in without a plan causes problems
- **Don't work on main** - always branch for code work
- **Don't skip tests** - untested code = broken code
- **Don't go silent** - if it takes time, update progress
- **Don't ignore blockers** - surface them immediately
- **Don't ship broken work** - quality over speed

---

## Domain-Specific Execution

### For Software (Ada):
```yaml
execution_checklist:
  - Create feature branch
  - Write failing tests first (TDD)
  - Implement code
  - Make tests pass
  - Refactor for quality
  - Run full test suite
  - Update documentation
  - Create PR / mark ready for review
```

### For Campaigns (Lyna/Benji):
```yaml
execution_checklist:
  - Set clear goals/metrics
  - Define target audience
  - Create content/materials
  - Set timeline/milestones
  - Execute launch
  - Track metrics
  - Iterate based on results
  - Document learnings
```

### For Operations (Denny/Benji):
```yaml
execution_checklist:
  - Document current state
  - Define new process
  - Test with small group
  - Gather feedback
  - Refine process
  - Roll out fully
  - Train team
  - Monitor and iterate
```

---

## Graceful Handoffs

If another expert should handle this:

```markdown
I can definitely execute this, but [Expert Name] is really the specialist here because [reason].

Would you like me to:
1. Execute it myself (happy to!)
2. Collaborate with [Expert]
3. Hand this to [Expert] completely

Whatever works best for you! 💪
```

---

## Examples

### Example 1: Execute Feature

**User:** `@ada @execute implement the authentication feature`

**Ada:**
1. Reads `roundtable/workspace/auth-feature-complete.md` (Denny's section)
2. Creates feature branch
3. Writes tests for login flow
4. Implements login UI and logic
5. Makes tests pass
6. Tests manually
7. Updates Roundtable with progress
8. Marks ready for review
9. "Auth feature complete and tested! Ready for your review."

### Example 2: Execute Campaign

**User:** `@lyna @execute launch the investor outreach campaign`

**Lyna:**
1. Reads `roundtable/workspace/investor-campaign-complete.md` (Lyna's section)
2. Creates investor list (50 VCs)
3. Crafts personalized outreach emails
4. Sets up tracking spreadsheet
5. Schedules send timeline
6. Sends first batch (10 investors)
7. Updates Roundtable with metrics
8. "Campaign launched! First 10 emails sent, tracking responses."

---

## Notes

- **This is a router command** - detects what to execute and loads the right workflow
- **Quality matters most** - don't rush, do it right
- **Test as you go** - don't wait until the end
- **Communicate actively** - keep founder informed
- **Handle problems fast** - blockers compound if ignored

---

## Related Commands & Patterns

**Flow Commands (Structured Workflows):**
- `@execute-specflow [feature]` - Execute technical spec with TDD enforcement and mandatory QA
- `@create-specflow [feature]` - Create spec before executing

**Patterns (Reference):**
- `pro-os/system/patterns/universal.md` - Universal command workflow (this command follows this)
- `pro-os/system/patterns/spec.md` - Comprehensive spec pattern (includes TDD: test → implement → verify)
- `pro-os/system/patterns/workspace.md` - Simple vs Complex workspaces

**Universal Commands (Flexible Workflows):**
- `@create` - Create anything
- `@analyze` - Deep analysis
- `@review` - Review work
- `@update` - Modify existing work

---

**Remember:** Execution is where ideas become reality. Take it seriously, do it well, and keep everyone informed. You've got this! 💪

