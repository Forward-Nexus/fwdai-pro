# Fix Command

**Purpose:** Universal command for debugging, troubleshooting, and solving problems - bugs, errors, issues, blockers, inefficiencies, etc.

---

## How This Works

When a user says: `@[expert] @fix [problem]`

Example:
- `@ada @fix the login bug`
- `@denny @fix the slow database queries`
- `@lyna @fix the low conversion rate on the landing page`
- `@benji @fix the hiring bottleneck`

---

## Process

### 1. Understand the Problem

Clarify:
- What's broken or not working?
- What's the expected behavior vs actual behavior?
- When did it start? What changed?
- How critical is it? (blocking work vs annoying)
- Any error messages or symptoms?

### 2. Reproduce the Issue

**If possible, verify:**
- Can you replicate the problem?
- Under what conditions does it occur?
- Is it consistent or intermittent?
- What are the steps to trigger it?

### 3. Diagnose Root Cause

**Investigation approach:**
- **Search online:** "[error message] 2025" or "how to debug [issue]"
- **Check recent changes:** What was modified recently?
- **Review logs:** Any error messages or warnings?
- **Test hypotheses:** Form theories and test them
- **Isolate the problem:** Narrow down where it's happening

**Common root causes:**
- Configuration issue
- Logic error
- Missing dependency
- Integration problem
- Performance bottleneck
- User misunderstanding
- External service issue

### 4. Develop Solution

**Search for solutions:**
- Search online for similar problems and fixes
- Check current best practices for this type of issue
- Look for proven solutions, not quick hacks

**Solution approaches:**
- **Quick fix:** Addresses symptoms (temporary)
- **Proper fix:** Addresses root cause (permanent)
- **Preventive fix:** Prevents similar issues

**Always aim for proper or preventive fix when possible.**

### 5. Implement the Fix

**Follow workflow standards** (`checklists/patterns/universal.md`)

**For code fixes:**
- Create a branch
- Write a test that reproduces the bug
- Fix the code
- Verify test passes
- Run full test suite (ensure nothing else broke)
- Document the fix

**For non-code fixes:**
- Document current state
- Apply the fix
- Verify it solves the problem
- Document the solution
- Check for side effects

### 6. Test & Validate

**Verify the fix:**
- [ ] Problem is solved
- [ ] No new problems introduced
- [ ] Edge cases handled
- [ ] Performance is acceptable
- [ ] Solution is maintainable

**Test thoroughly** - bugs that come back are embarrassing!

### 7. Create Workspace + Deliverable

**A. Create Workspace**
- Save as: `roundtable/workspace/[problem]-fix-complete.md`
- Document debugging process, all things tried, root cause analysis
- Include test results and validation steps
- Track what worked and what didn't

**B. Create Clean Deliverable** (if applicable)
- For bugs: The fix is in the code itself (no separate doc needed)
- For process problems: Save as `documents/processes/[problem]-solution.md`
- Include: Problem, Root Cause, Solution, Testing, Prevention

**Files created:**
1. `roundtable/workspace/[problem]-fix-complete.md` - Debugging process, all attempts, full context
2. Code changes (for code bugs) OR process document (for process problems)

### 8. Update Whiteboards

Update your section in `roundtable/whiteboards.md` with workspace link and fix summary.

---

## Original Roundtable Update Example

**Update Roundtable:**
```markdown
### [Date] - [Expert]: Fixed [Problem] 🔧

**The issue:**
[Brief description of problem]

**Root cause:**
[What was actually wrong]

**The fix:**
[What was changed to solve it]

**Tested:**
- [Test 1]
- [Test 2]
- No regressions found

**Prevention:**
[What we're doing to prevent recurrence]

**Status:** Fixed and verified ✅
```

**Create preventive tasks if needed:**
```markdown
- [ ] Add monitoring for [thing that broke]
- [ ] Document this pattern in standards
- [ ] Refactor [area] to prevent similar issues
```

---

## Best Practices

### ✅ DO:
- **Reproduce first** - Verify you can see the problem
- **Find root cause** - Don't just patch symptoms
- **Test thoroughly** - Verify the fix works
- **Check for regressions** - Make sure nothing else broke
- **Document everything** - Future you will thank you
- **Search online** - Someone probably solved this before
- **Add tests** - Prevent it from coming back
- **Think prevention** - How do we avoid this in future?

### ❌ DON'T:
- **Don't guess** - Investigate properly
- **Don't quick-patch** - Fix the root cause
- **Don't skip testing** - Verify it's really fixed
- **Don't forget edge cases** - Test unusual scenarios
- **Don't leave it undocumented** - Explain what you did
- **Don't ignore warnings** - They often predict problems

---

## Common Fix Scenarios

### Code Bug:
```markdown
Problem: "Login fails with 'Invalid token' error"

Process:
1. Reproduce: Try to login, see error
2. Investigate: Check token generation, expiration, validation
3. Root cause: Token expiring too quickly (5 min vs 1 hour)
4. Fix: Update token expiration to 1 hour
5. Test: Login works, token persists for 1 hour
6. Add test: Verify token doesn't expire early
7. Document: Update security docs with token policy
```

### Performance Issue:
```markdown
Problem: "Database queries are slow"

Process:
1. Measure: Profile queries, identify bottleneck
2. Investigate: Check query structure, indexes, data size
3. Root cause: Missing index on frequently queried column
4. Fix: Add appropriate index
5. Test: Query speed improved 10x
6. Monitor: Set up performance monitoring
7. Document: Add indexing strategy to standards
```

### Process Problem:
```markdown
Problem: "Hiring is taking too long"

Process:
1. Analyze: Map current hiring process
2. Identify: Bottleneck in interview scheduling
3. Root cause: Too many serial steps, not enough parallel
4. Fix: Redesign process with parallel interviews
5. Test: Run next hire through new process
6. Measure: Time reduced from 6 weeks to 3 weeks
7. Document: Update hiring process doc
```

---

## Debugging Strategies

### For Code:
- Add logging at key points
- Use debugger to step through
- Simplify to isolate problem
- Check assumptions (print/log values)
- Binary search (comment out half, see if it works)

### For Systems:
- Check each component individually
- Verify connections/integrations
- Test with minimal configuration
- Review recent changes
- Check external dependencies

### For Processes:
- Map the current flow
- Identify handoffs and delays
- Talk to people involved
- Measure each step
- Look for bottlenecks

---

## When to Escalate

**Bring in help if:**
- Outside your expertise
- Can't reproduce the problem
- Root cause unclear after reasonable investigation
- Fix attempts aren't working
- Critical issue affecting users/business
- Security concern

**How to escalate:**
```markdown
Update Roundtable:

"@[expert] - Need help debugging [issue]

**What I've tried:**
- [Attempt 1]
- [Attempt 2]

**What I've learned:**
- [Finding 1]
- [Finding 2]

**Where I'm stuck:**
[Specific question or blocker]

**Impact:**
[How critical is this]

Can you take a look?"
```

---

## Graceful Handoffs

If another expert should handle this:

```markdown
I can investigate this, but [Expert Name] has deeper expertise in [area] 
and might solve this faster.

Would you like me to:
1. Continue debugging (I'm on it!)
2. Bring [Expert] in to collaborate
3. Hand this to [Expert]

Whatever you prefer! 🔧
```

---

**Remember:** Good debugging is methodical, not magical. Reproduce, investigate, fix properly, test thoroughly, and document everything. You've got this! 🔧

