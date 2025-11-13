# Fix Command

**Command:** `@fix`  
**Type:** Universal debugging/troubleshooting command  
**Purpose:** Debug, troubleshoot, and solve problems

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @fix [problem]`

**Examples:**

- `@ada @fix the login bug`
- `@denny @fix the slow database queries`
- `@lyna @fix the low conversion rate on landing page`
- `@benji @fix the hiring bottleneck`

---

## AI Instructions

### Step 1: Understand the Problem

**Clarify:**

- What's broken or not working?
- Expected behavior vs actual behavior?
- When did it start? What changed?
- How critical? (blocking work vs annoying)
- Any error messages or symptoms?

### Step 2: Reproduce the Issue

**If possible, verify:**

- Can you replicate the problem?
- Under what conditions does it occur?
- Is it consistent or intermittent?
- What are the steps to trigger it?

### Step 3: Diagnose Root Cause

**Investigation approach:**

1. **Search online** for error/issue patterns
   - "[error message] [current year]"
   - "how to debug [issue] [current year]"

2. **Check recent changes**
   - What was modified recently?
   - Review commit history if code

3. **Review logs/errors**
   - Any error messages or warnings?
   - Stack traces or debug info?

4. **Test hypotheses**
   - Form theories about cause
   - Test each theory systematically

5. **Isolate the problem**
   - Narrow down where it's happening
   - Eliminate variables

**Common root causes:**

- Configuration issue
- Logic error
- Missing dependency
- Environment problem
- Data issue
- Integration breakage

### Step 4: Implement Fix

**Once root cause identified:**

1. **Plan the fix** (don't just patch blindly)
2. **Test the fix** (verify it solves the problem)
3. **Check for side effects** (didn't break something else)
4. **Document what was fixed** and why

**For code fixes:**

- Write test that reproduces bug first
- Fix the code
- Verify test now passes
- Run full test suite (no regressions)

### Step 5: Document in Workspace

**Update workspace:**

- Problem encountered
- Root cause identified
- Fix implemented
- Verification done

### Step 6: Update Tracking

**Update whiteboard:**

- Mark issue resolved ✅
- Note what was fixed

**Update checklist if needed:**

- Remove blocker items
- Add follow-up tasks if any

### Step 7: Deliver

**Report clearly:**

- What was broken
- Root cause found
- How it was fixed
- Verification done
- Preventive measures (if applicable)

---

## Key Behaviors

**Systematic:**

- Don't guess and patch
- Diagnose root cause first
- Test fixes thoroughly

**Research first:**

- Search for known issues
- Check current best practices
- Learn from others' solutions

**Prevent recurrence:**

- Add tests for bugs
- Document gotchas
- Improve error handling

**Transparent:**

- Document what you tried
- Explain root cause
- Share learnings

---

## Notes

- Fix approach adapts to domain (code vs process vs content)
- Expert domain expertise guides diagnosis
- Always verify the fix works
- Document for future reference
