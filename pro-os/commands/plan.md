# Plan Command

**Command:** `@plan`  
**Type:** Universal planning command  
**Purpose:** Create strategic plans, roadmaps, timelines, and execution
strategies

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @plan [thing]`

**Examples:**

- `@genna @plan the product roadmap for Q1`
- `@lyna @plan the fundraising campaign`
- `@benji @plan the team expansion`
- `@ada @plan the technical migration`

---

## AI Instructions

### Step 1: Understand the Goal

**Clarify:**

- What are we planning?
- What's the ultimate goal or outcome?
- What timeframe? (weeks, months, quarters)
- What constraints? (budget, resources, dependencies)
- What's the current situation?

### Step 2: Load Context (Token Efficient)

**Check context first!**

**Load if needed:**

- `project/founder-profile.md`
- `project/project-kb.md`
- `project/mission.md`
- `roundtable/whiteboards.md` (current work and decisions)
- Relevant workspace files

### Step 3: Research Best Practices

**Before planning:**

- Search: "[type of plan] best practices [current year]"
- Research similar successful plans
- Learn from failures (what to avoid)
- Find planning frameworks or methodologies

### Step 4: Break Down the Goal

**Decompose into phases/milestones:**

- What are the major steps?
- What's the logical sequence?
- What are the dependencies?
- What can happen in parallel?

**Create timeline:**

- Define phases or milestones
- Estimate durations
- Identify critical path
- Build in buffer for unknowns

### Step 5: Identify Resources

**What's needed:**

- People/team members
- Budget/funding
- Tools/technology
- Time/capacity
- External dependencies

**What's available:**

- Check current resources
- Identify gaps
- Plan for acquisition

### Step 6: Assess Risks

**Identify potential issues:**

- What could go wrong?
- What are the dependencies?
- What are the blockers?
- How to mitigate risks?

### Step 7: Create the Plan

**Structure:**

1. **Executive Summary** - Goal, timeline, key milestones
2. **Current State** - Where we are now
3. **Goal State** - Where we want to be
4. **Strategy** - How we'll get there
5. **Phases/Milestones** - Breakdown with timeline
6. **Resources** - What's needed
7. **Risks & Mitigation** - What could go wrong, how to handle
8. **Success Metrics** - How we measure progress
9. **Next Steps** - Immediate actions

**Apply domain expertise:**

- Technical plan → Architecture, migration strategy, technical dependencies
- Growth plan → Metrics, channels, scaling strategy
- Fundraising plan → Targets, timeline, preparation requirements
- Product plan → Features, priorities, user value

### Step 8: Document

**Create workspace:** `roundtable/workspace/[name]-plan.md` **Create
deliverable:** `documents/[category]/[name]-plan.md`

### Step 9: Update Tracking

**Update whiteboard and checklist.**

### Step 10: Deliver

**Present plan clearly:**

- Goal and timeline
- Key milestones
- Critical dependencies
- Resources needed
- Next immediate steps

---

## Key Behaviors

**Realistic:**

- Don't over-promise
- Build in buffers
- Consider constraints

**Structured:**

- Clear phases
- Dependencies mapped
- Timeline reasonable

**Risk-aware:**

- Identify blockers
- Plan mitigation
- Have contingencies

**Actionable:**

- Clear next steps
- Assignments defined
- Success metrics set

---

## Notes

- Plan complexity adapts to timeframe and scope
- Expert domain expertise guides planning methodology
- Creates both workspace (context) and deliverable (plan)
- Timeline realistic based on constraints
