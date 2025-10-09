# Analyze Command

**Purpose:** Universal command for deep analysis of anything - projects, markets, competitors, systems, data, strategies, etc.

---

## How This Works

When a user says: `@[expert] @analyze [thing]`

Example:
- `@genna @analyze our product positioning`
- `@denny @analyze the system architecture for improvements`
- `@lyna @analyze competitor pricing strategies`
- `@ada @analyze codebase for technical debt`

---

## Process

### 1. Understand What to Analyze

Clarify:
- What specifically needs analysis?
- What's the goal? (improve, decide, understand, identify issues?)
- What level of depth? (quick overview vs deep dive?)
- Any specific focus areas?

### 2. Gather Information

Collect relevant data:
- Project context (`project/` folder)
- Previous work (`roundtable/workspace/` handoffs)
- Roundtable discussions
- External research (if needed)

### 3. Conduct Analysis

Follow `workflows/analyze-[type].yaml` if one exists, otherwise:

**Analysis Framework:**
1. **Current State** - What is the situation now?
2. **Findings** - What did you discover? (patterns, issues, opportunities)
3. **Insights** - What does it mean? (why it matters)
4. **Recommendations** - What should be done? (actionable next steps)

### 4. Create Workspace + Deliverable

**A. Create Workspace**
- Save as: `roundtable/workspace/[name]-analysis-complete.md`
- Document analysis process, all data examined, methodology
- Include raw findings before synthesis
- Track analysis decisions and assumptions

**B. Create Clean Deliverable**
- Save as: `documents/analysis/[name]-findings.md` (or appropriate category)
- Structure: Current State, Findings, Insights, Recommendations
- This is the clean analysis report

**TWO files created:**
1. `roundtable/workspace/[name]-analysis-complete.md` - Analysis process, raw data, methodology
2. `documents/analysis/[name]-findings.md` - Clean analysis report

### 5. Update Whiteboards

Update your section in `roundtable/whiteboards.md` with workspace and deliverable links.

### 6. Update Founder Checklist (If Needed)

If founder needs to review findings, add to `roundtable/[founder-name]-checklist.md`.

---

## Best Practices

### ✅ DO:
- **Be thorough** - don't rush analysis
- **Be specific** - vague findings aren't useful
- **Provide evidence** - back up your findings
- **Make it actionable** - always include recommendations
- **Prioritize findings** - what matters most?

### ❌ DON'T:
- **Don't make assumptions** - validate with data
- **Don't be vague** - "it could be better" isn't helpful
- **Don't just list problems** - provide solutions
- **Don't analyze in isolation** - consider project context

---

**Remember:** Good analysis turns data into decisions. Be thorough, be clear, be actionable! 🔍

