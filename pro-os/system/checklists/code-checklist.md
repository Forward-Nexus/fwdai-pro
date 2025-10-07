# Code Quality Checklist

**Purpose:** Quality standards specific to code, technical implementations, and software development.

Use this IN ADDITION to `quality-checklist.md` for any coding work.

---

## Functionality

- [ ] **Works as expected** - Feature does what it's supposed to do
- [ ] **All requirements met** - Implements all acceptance criteria
- [ ] **Edge cases handled** - Unusual inputs/scenarios work correctly
- [ ] **Error handling** - Graceful failures, helpful error messages
- [ ] **No known bugs** - All discovered issues fixed

---

## Testing

- [ ] **Tests written** - Unit tests for core logic
- [ ] **Tests pass** - All tests green
- [ ] **Good coverage** - Key paths and edge cases tested
- [ ] **Integration tested** - Works with other parts of system
- [ ] **Manually tested** - Actually used the feature
- [ ] **No regressions** - Existing functionality still works

---

## Code Quality

- [ ] **Clean code** - Readable, well-structured, follows conventions
- [ ] **No code smells** - No obvious anti-patterns or bad practices
- [ ] **DRY** - No unnecessary duplication
- [ ] **Simple** - As simple as possible (but no simpler)
- [ ] **Commented** - Complex logic explained (why, not what)
- [ ] **Named well** - Variables, functions have clear, descriptive names

---

## Standards & Conventions

- [ ] **Project conventions** - Follows established patterns
- [ ] **Consistent style** - Formatting matches codebase
- [ ] **No linter errors** - Passes linting checks
- [ ] **Best practices** - Follows current development best practices
- [ ] **Framework idioms** - Uses framework/library correctly

---

## Performance

- [ ] **Acceptable speed** - Responds quickly enough for users
- [ ] **No obvious bottlenecks** - Queries, loops, operations optimized
- [ ] **Resource efficient** - Doesn't waste memory, CPU, bandwidth
- [ ] **Scales reasonably** - Works with realistic data volumes

---

## Security

- [ ] **Input validated** - User input sanitized/validated
- [ ] **No injection risks** - SQL, XSS, etc prevented
- [ ] **Auth/permissions** - Proper authorization checks
- [ ] **Secrets safe** - No hardcoded passwords, API keys
- [ ] **Dependencies safe** - No known vulnerable packages

---

## Documentation

- [ ] **Code documented** - Complex parts explained
- [ ] **README updated** - If new feature/change affects it
- [ ] **API docs updated** - If API changed
- [ ] **Comments current** - No outdated comments
- [ ] **Examples provided** - If complex feature, show how to use

---

## Git/Version Control

- [ ] **On feature branch** - Not on main/master
- [ ] **Commits logical** - Clear, focused commits
- [ ] **Commit messages clear** - Explain what and why
- [ ] **No debug code** - console.logs, debuggers removed
- [ ] **No commented code** - Dead code removed

---

## Integration

- [ ] **Doesn't break builds** - CI/CD passes
- [ ] **Dependencies added** - package.json, requirements.txt updated
- [ ] **Migrations included** - Database changes scripted
- [ ] **Config documented** - Environment variables documented
- [ ] **Deployment notes** - Special deploy steps noted

---

## Before Marking Complete

### Run These Checks:
```bash
# Lint
npm run lint  # or equivalent

# Tests
npm test  # or equivalent

# Build
npm run build  # or equivalent

# Manual test
# Actually use the feature yourself
```

### Ask Yourself:
- Would I want to maintain this code in 6 months?
- Would a new developer understand this?
- Is this the simplest way to solve this problem?
- Am I proud of this code?

If any answer is "no" or "hesitant" - improve it before marking complete.

---

## Code Review Preparation

If handing off to another developer or expert:

- [ ] **Clean diff** - Only relevant changes in commit
- [ ] **Tests pass** - Green before review
- [ ] **Linted** - No linter errors
- [ ] **Self-reviewed** - You've reviewed your own code first
- [ ] **Context provided** - PR/handoff explains what and why
- [ ] **Questions listed** - Any areas you're unsure about

---

## Technical Debt

If you're creating technical debt (intentionally or not):

- [ ] **Documented** - // TODO or issue created
- [ ] **Justified** - Why this shortcut vs doing it right
- [ ] **Tracked** - In backlog or technical debt list
- [ ] **Time-boxed** - When will this be addressed?

**Avoid creating debt when possible. If you must, document it.**

---

**Remember:** Code is read far more than it's written. Make it good. Make it clear. Make it maintainable. Your future self will thank you. 💻

