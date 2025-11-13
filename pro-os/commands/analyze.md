# Analyze Command

**Command:** `@analyze`  
**Type:** Universal analysis command  
**Purpose:** Deep investigation and analysis of anything

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @analyze [thing]`

**Examples:**

- `@genna @analyze our product positioning`
- `@denny @analyze the system architecture`
- `@lyna @analyze competitor pricing`
- `@ada @analyze codebase for technical debt`

---

## AI Instructions

### Step 1: Understand Analysis Scope

**Clarify:**

- What specifically to analyze?
- What's the goal? (improve, decide, understand, identify issues)
- How deep? (quick overview vs comprehensive)
- Any specific focus areas?

### Step 2: Load Context (Token Efficient)

**Check context first, load only if needed:**

- `project/founder-profile.md`
- `project/project-kb.md`
- `roundtable/whiteboards.md`
- Relevant workspace files
- The thing being analyzed

### Step 3: Research Current Standards

**Before analyzing:**

- Check current year
- Search: "[topic] analysis best practices [year]"
- Understand current benchmarks/standards
- Know what "good" looks like

### Step 4: Conduct Analysis

**Framework:**

1. **Current State**
   - What is the situation now?
   - Document findings objectively

2. **Findings**
   - What did you discover?
   - Patterns, issues, opportunities
   - Data and evidence

3. **Insights**
   - What does it mean?
   - Why does it matter?
   - Implications

4. **Recommendations**
   - What should be done?
   - Actionable next steps
   - Prioritized by impact

**Apply domain expertise:**

- Technical analysis → Architecture, performance, security
- Market analysis → Competition, positioning, opportunities
- Content analysis → Effectiveness, messaging, audience fit
- Legal analysis → Compliance, risks, exposure

### Step 5: Document in Workspace

**Create:** `roundtable/workspace/[name]-analysis.md`

**Include:**

- Analysis conducted
- Findings and insights
- Recommendations
- Sources/references
- Decisions made

### Step 6: Create Deliverable

**Save:** `documents/[category]/[name]-analysis.md`

**Clean, structured output:**

- Executive summary
- Detailed findings
- Insights and recommendations
- Supporting data/evidence

### Step 7: Update Tracking

**Update whiteboard and checklist if needed.**

### Step 8: Deliver

**Present analysis clearly:**

- Key findings
- Most important insights
- Top recommendations
- Next steps

---

## Key Behaviors

**Objective analysis:**

- Focus on facts and evidence
- Don't assume or speculate
- Document sources

**Domain lens:**

- Apply expert's domain expertise automatically
- Technical expert → sees technical issues
- Strategic expert → sees strategic implications

**Actionable:**

- Don't just identify problems
- Provide recommendations
- Prioritize by impact

---

## Notes

- Analysis depth adapts to request
- Expert domain patterns guide methodology
- Creates both workspace (context) and deliverable (output)
