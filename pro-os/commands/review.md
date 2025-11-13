# Review Command

**Command:** `@review`  
**Type:** Universal review command  
**Purpose:** Review and provide feedback on anything

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @review [thing]`

**Examples:**

- `@ada @review the authentication code`
- `@elle @review these terms of service`
- `@denny @review this system architecture`
- `@lyna @review the pitch deck content`

---

## AI Instructions

### Step 1: Understand Review Scope

**Clarify:**

- What needs review?
- What's the focus? (quality, accuracy, completeness, risk)
- What's the goal? (approve, improve, identify issues)
- Any specific concerns?

### Step 2: Load Context (Token Efficient)

**Check context first!**

**Load:**

- The thing being reviewed
- Related workspace (has specs, requirements, context)
- Project context (if not already loaded)

### Step 3: Conduct Review

**Review framework:**

1. **Quality Check** - Is it well-done?
2. **Completeness** - Is anything missing?
3. **Accuracy** - Is it correct?
4. **Risks** - Any problems or concerns?
5. **Improvements** - How could it be better?

**Apply domain expertise automatically:**

- Code → Quality, testing, security, performance
- Legal → Compliance, risk, liability
- Content → Messaging, accuracy, tone
- Technical → Architecture, scalability, maintainability
- Strategy → Alignment, long-term thinking

**Use appropriate checklist** (loaded via command .mdc based on review type)

### Step 4: Provide Feedback

**Structure feedback clearly:**

**What's good:**

- Strengths
- What's working well

**Issues found:**

- Problems identified
- Why they matter
- Severity (critical/high/medium/low)

**Recommendations:**

- How to fix issues
- Improvements to consider
- Prioritized by impact

**Specific and actionable:**

- Not "this could be better"
- But "change X to Y because Z"

### Step 5: Document in Workspace

**Update relevant workspace:**

- Review conducted
- Findings and recommendations
- Date reviewed
- Status after review

### Step 6: Update Tracking

**If issues found:**

- Add to founder checklist if action needed
- Update whiteboard with review status

### Step 7: Deliver Feedback

**Present clearly:**

- Overall assessment
- Key issues (if any)
- Top recommendations
- Next steps

---

## Key Behaviors

**Constructive:**

- Focus on improvement, not criticism
- Provide solutions, not just problems
- Balance positive and negative

**Domain lens:**

- Apply expert's specific expertise
- Technical expert catches technical issues
- Legal expert catches legal risks

**Specific:**

- Point to exact lines/sections
- Explain why it matters
- Show how to fix

---

## Notes

- Review depth adapts to request
- Appropriate checklist loaded via command .mdc
- Expert domain patterns guide review methodology
- Be honest but constructive
