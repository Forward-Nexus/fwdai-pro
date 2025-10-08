# Plan Command

**Purpose:** Universal command for creating strategic plans, roadmaps, timelines, and execution strategies - product plans, launch plans, growth plans, project plans, etc.

---

## How This Works

When a user says: `@[expert] @plan [thing]`

Example:
- `@genna @plan the product roadmap for Q1`
- `@lyna @plan the fundraising campaign`
- `@benji @plan the team expansion`
- `@ada @plan the technical migration`

---

## Process

### 1. Understand the Goal

Clarify:
- What are we planning?
- What's the ultimate goal or outcome?
- What timeframe? (weeks, months, quarters?)
- What constraints? (budget, resources, dependencies?)
- What's the current situation?

### 2. Research & Context

**Load project context:**
- Read `project/` files (founder-profile, project-kb, mission)
- Read `0-ROUNDTABLE.md` (recent work and decisions)
- Check `roundtable/workspace/` for relevant expert work

**Search for best practices:**
- "Best practices for [type of plan] 2025"
- Research similar successful plans
- Learn from failures (what to avoid)
- Find planning frameworks or methodologies

### 3. Break Down the Goal

**Decompose into phases/milestones:**
- What are the major steps?
- What's the logical sequence?
- What are the dependencies?
- What can happen in parallel?

**Example structure:**
```
Phase 1: Foundation (Weeks 1-2)
  - Milestone: X completed
  - Dependencies: None
  
Phase 2: Build (Weeks 3-6)
  - Milestone: Y shipped
  - Dependencies: Phase 1 complete
  
Phase 3: Launch (Weeks 7-8)
  - Milestone: Z live
  - Dependencies: Phase 2 complete
```

### 4. Create the Plan

**Follow workflow standards** (`checklists/workflow-standards.md`)

**Plan should include:**

**1. Executive Summary**
- Goal in one sentence
- Timeline overview
- Key milestones
- Success criteria

**2. Phases/Stages**
For each phase:
- Goal of this phase
- Key activities/tasks
- Deliverables
- Timeline
- Resources needed
- Dependencies
- Success criteria

**3. Timeline**
- Visual timeline (even ASCII is fine)
- Key dates and milestones
- Dependencies mapped
- Buffer time included

**4. Resources Needed**
- People/skills required
- Budget if applicable
- Tools/technology
- External dependencies

**5. Risks & Mitigation**
- What could go wrong?
- How likely?
- Impact if it happens?
- Mitigation strategies

**6. Success Metrics**
- How do we know we succeeded?
- What are we measuring?
- What are the targets?

**7. Contingencies**
- Plan B if things don't work
- Decision points
- When to pivot or adjust

### 5. Validate the Plan

**Sanity checks:**
- [ ] Is timeline realistic?
- [ ] Are dependencies identified?
- [ ] Are resources sufficient?
- [ ] Are risks addressed?
- [ ] Is it actionable (not just aspirational)?
- [ ] Can we actually execute this?

**Get input if needed:**
- Collaborate with relevant experts
- Check with technical experts on feasibility
- Validate with founder on priorities
- Ensure alignment with goals

### 6. Make It Actionable

**Break into tasks:**
- First 2-3 concrete tasks to start
- Clear owners for each task
- Specific deadlines
- Success criteria for each

**Create founder tasks:**
```markdown
- [ ] Review and approve plan - `roundtable/workspace/[name]-plan.md`
  - Focus on: Timeline, resources, priorities
- [ ] Assign owners for Phase 1 tasks
- [ ] Kick off planning meeting if needed
```

### 7. Document & Share

**Save plan:**
- `roundtable/workspace/[name]-plan.md`
- Use clear structure (markdown or YAML)
- Include all sections above

**Update Roundtable:**
```markdown
### [Date] - [Expert]: Created [Thing] Plan 📋

**The Goal:**
[What we're planning to achieve]

**Timeline:**
[High-level overview]

**Key Milestones:**
1. [Milestone 1] - [Date]
2. [Milestone 2] - [Date]
3. [Milestone 3] - [Date]

**Resources Needed:**
- [Resource 1]
- [Resource 2]

**Next Steps:**
- **founder:** Review and approve plan
- [First action to take]

**Plan Details:**
- `roundtable/workspace/[name]-plan.md`

**Status:** Ready for review 📋
```

---

## Best Practices

### ✅ DO:
- **Start with the end** - Know what success looks like
- **Be realistic** - Pad timelines, things take longer than expected
- **Identify dependencies** - What blocks what?
- **Include buffers** - Things go wrong, plan for it
- **Think risks** - What could derail this?
- **Make it actionable** - Clear tasks, owners, deadlines
- **Collaborate** - Get input from relevant experts
- **Research** - Learn from similar successful plans
- **Visualize** - Timeline, roadmap, or diagram helps

### ❌ DON'T:
- **Don't be overly optimistic** - It always takes longer
- **Don't skip dependencies** - They'll bite you
- **Don't ignore risks** - Hope is not a strategy
- **Don't make it too detailed** - Plans need flexibility
- **Don't plan in isolation** - Get input from team
- **Don't forget resources** - Time, people, money all matter
- **Don't skip metrics** - How do you know if it worked?

---

## Planning Frameworks to Consider

### For Product Plans:
- Now/Next/Later framework
- Quarterly OKRs
- Feature prioritization (RICE, MoSCoW)
- User story mapping

### For Launch Plans:
- Pre-launch / Launch / Post-launch phases
- GTM (Go-To-Market) framework
- Launch checklist approach
- Soft launch → Full launch

### For Growth Plans:
- Pirate Metrics (AARRR)
- Growth loops
- Experimentation framework
- Channel strategy

### For Technical Plans:
- Migration strategy (parallel run → cutover)
- Phased rollout
- Feature flags approach
- Rollback strategy

**Search online for whichever is relevant to your plan!**

---

## Common Plan Types

### Product Roadmap:
```markdown
Q1 2025: Foundation
- User auth system
- Core feature set
- Basic analytics
Goal: 100 users, feedback gathered

Q2 2025: Growth
- Advanced features
- Mobile app
- Integrations
Goal: 1,000 users, revenue started

Q3 2025: Scale
- Enterprise features
- API platform
- Advanced analytics
Goal: 10,000 users, profitable
```

### Launch Plan:
```markdown
Phase 1: Pre-Launch (4 weeks)
- Build waitlist
- Beta testing
- PR outreach
- Content creation

Phase 2: Soft Launch (2 weeks)
- Limited release
- Gather feedback
- Fix issues
- Refine messaging

Phase 3: Full Launch (1 week)
- Public announcement
- PR push
- Community outreach
- Monitor metrics
```

### Hiring Plan:
```markdown
Month 1: Define & Prepare
- Define roles needed
- Create job descriptions
- Set up hiring process
- Budget approved

Month 2-3: Recruit
- Post jobs
- Source candidates
- Screen applications
- First interviews

Month 4: Hire
- Final interviews
- Make offers
- Negotiate
- Onboard
```

---

## When Plans Need Updating

Plans are living documents. Update when:
- Priorities change
- Timeline slips
- New information emerges
- Resources change
- Risks materialize

**Document changes:**
```markdown
## Plan Updates

### 2025-10-15 Update
- Pushed Phase 2 by 2 weeks (technical blocker)
- Added budget for contractor (resource need)
- Deprioritized Feature X (founder decision)
```

---

## Collaborative Planning

If multiple experts should contribute:

```markdown
"This plan would benefit from input from multiple experts:

- @[expert1] for [their area]
- @[expert2] for [their area]

Want me to:
1. Draft the plan and then get their input
2. Bring them in now to plan together

What works better? 📋"
```

---

## Graceful Handoffs

If another expert should own planning:

```markdown
I can create this plan, but [Expert Name] has more experience with [area]
and might create a more realistic/effective plan.

Would you like me to:
1. Create the plan myself (happy to!)
2. Collaborate with [Expert]
3. Hand this to [Expert]

Your call! 📋
```

---

**Remember:** Good plans are realistic, actionable, and flexible. Plan for success but prepare for challenges. Keep it simple, keep it clear, and keep it achievable! 📋

