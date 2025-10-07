# Review Command

**Purpose:** Universal command for reviewing anything - code, designs, documents, strategies, campaigns, legal terms, etc.

---

## How This Works

When a user says: `@[expert] @review [thing]`

Example:
- `@ada @review the authentication code`
- `@elle @review these terms of service`
- `@denny @review this system architecture`
- `@lyna @review the pitch deck content`

---

## Process

### 1. Understand What to Review

Clarify:
- What needs review?
- What's the focus? (quality, accuracy, completeness, risk?)
- What's the goal? (approve, improve, identify issues?)
- Any specific concerns?

### 2. Load Context (Token Efficiency!)

**Check what's already in context first!**

Read:
- The thing being reviewed (from `documents/` or `roundtable/workspace/`)
- Related context (workspace has specs, requirements!)
- Project goals and constraints (if not already loaded)
- Relevant checklists from `system/checklists/`

### 3. Conduct Review

**Review Framework:**
1. **Quality Check** - Is it well-done?
2. **Completeness** - Is anything missing?
3. **Accuracy** - Is it correct?
4. **Risks** - Any problems or concerns?
5. **Improvements** - How could it be better?

Use relevant checklist from `system/checklists/` if one exists.

### 4. Provide Feedback

**Format:**
```markdown
## Review: [Thing]

**Overall Assessment:** [Looks great / Needs work / Major concerns]

**Strengths:**
- [What's working well]
- [What's working well]

**Issues Found:**
- [ ] **[Severity]** [Issue description]
  - Impact: [How this affects things]
  - Recommendation: [How to fix]

**Recommendations:**
1. [Priority action]
2. [Priority action]

**Approval Status:**
- [ ] Approved as-is
- [ ] Approved with minor changes
- [ ] Needs revision
- [ ] Not approved - major issues
```

### 5. Document & Update

**Add review to workspace:**
- Open `roundtable/workspace/[name].md`
- Add your review section with findings
- Update status if needed

**Or create new workspace if reviewing something without one:**
- Create `roundtable/workspace/[name]-review.md`
- Document findings and recommendations

Update `roundtable/whiteboards.md` with review status.

---

## Review Types

### Code Review (Ada):
- [ ] Follows conventions
- [ ] Has tests
- [ ] No bugs/errors
- [ ] Well-documented
- [ ] Secure
- [ ] Performant

### Legal Review (Elle):
- [ ] Legally sound
- [ ] Risks identified
- [ ] Compliance met
- [ ] Clear language
- [ ] Protected interests

### Strategy Review (Genna/Lyna/Benji):
- [ ] Aligned with goals
- [ ] Feasible
- [ ] Well-reasoned
- [ ] Considers risks
- [ ] Clear next steps

### Design Review (Denny):
- [ ] Sound architecture
- [ ] Scalable
- [ ] Maintainable
- [ ] Follows best practices
- [ ] Complete

---

## Best Practices

### ✅ DO:
- **Be thorough** - don't rush
- **Be specific** - vague feedback isn't helpful
- **Be constructive** - focus on improvements
- **Prioritize issues** - what matters most?
- **Provide solutions** - don't just point out problems
- **Use checklists** - ensure completeness

### ❌ DON'T:
- **Don't be vague** - "needs work" isn't actionable
- **Don't skip severity** - mark critical vs nice-to-have
- **Don't just criticize** - acknowledge strengths too
- **Don't approve blindly** - take time to review properly
- **Don't skip documentation** - record your findings

---

**Remember:** Good reviews improve quality and catch problems early. Be thorough, be helpful, be clear! ✅

