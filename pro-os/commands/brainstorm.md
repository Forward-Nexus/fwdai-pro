# Brainstorm Command

**Command:** `@brainstorm`  
**Type:** Universal ideation command  
**Purpose:** Generate and explore ideas for anything

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @brainstorm [thing]`

**Examples:**

- `@genna @brainstorm product features for our MVP`
- `@lyna @brainstorm marketing campaign ideas`
- `@denny @brainstorm solutions for the scaling problem`
- `@benji @brainstorm ways to improve team collaboration`

---

## AI Instructions

### Step 1: Frame the Challenge

**Clarify:**

- What are we brainstorming?
- What's the goal/problem?
- Any constraints? (budget, time, tech, etc.)
- Any must-haves or must-avoids?

### Step 2: Load Context (Token Efficient)

**Check context first!**

**Load:**

- `project/founder-profile.md`
- `project/project-kb.md`
- `project/mission.md`
- `roundtable/whiteboards.md` (recent discussions)
- Related workspace files

### Step 3: Research Inspiration

**Before brainstorming:**

- Search: "[topic] ideas [current year]"
- Look at what others are doing
- Find current trends
- Understand what's possible

### Step 4: Generate Ideas

**Brainstorming approach:**

1. **Start broad** - quantity over quality initially
2. **Mix safe and bold** - conventional + innovative
3. **Build on previous** - combine and expand ideas
4. **Consider different angles** - multiple approaches
5. **Don't filter too early** - capture everything first

**Aim for:** 10-20 initial ideas, then narrow to 3-5 strong options

**Apply domain lens:**

- Technical brainstorm → Architecture patterns, tech solutions
- Marketing brainstorm → Campaigns, channels, messaging
- Product brainstorm → Features, UX improvements, innovations
- Strategy brainstorm → Approaches, positioning, opportunities

### Step 5: Evaluate & Refine

**For each promising idea:**

**Pros:** What makes this good? **Cons:** What are the downsides?
**Feasibility:** Can we actually do this? **Impact:** How much would this help?
**Effort:** How hard would this be?

**Score or rank ideas** to identify top options

### Step 6: Present Options

**Structure:**

1. **Quick list** - All ideas generated (for reference)
2. **Top 3-5 ideas** - Most promising options
3. **For each top idea:**
   - Description
   - Pros/cons
   - Feasibility
   - Why it's interesting
   - Next steps if pursued

**Recommend** - Which idea(s) you'd pursue and why

### Step 7: Document

**Create workspace:** `roundtable/workspace/[name]-brainstorm.md`

- All ideas generated
- Evaluation notes
- Recommendation

**If proceeding:** Create deliverable with refined ideas

### Step 8: Next Steps

**After brainstorming:**

- Get founder's input
- If idea selected, use `@plan` or `@create` to develop it
- If needs more exploration, iterate

---

## Key Behaviors

**Divergent then convergent:**

- Generate broadly first
- Narrow down second
- Don't judge too early

**Domain expertise:**

- Technical expert thinks in technical solutions
- Marketing expert thinks in campaigns/channels
- Strategic expert thinks long-term

**Actionable:**

- Ideas should be concrete enough to evaluate
- Not "make it better" but "specific approach X"

**Balanced:**

- Mix safe and innovative
- Consider constraints
- Be realistic about feasibility

---

## Notes

- Brainstorm scope adapts to request
- Expert domain guides type of ideas generated
- Quantity first, quality second
- Evaluation helps narrow to best options
