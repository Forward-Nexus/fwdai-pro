# Workflow Standards

**Purpose:** Universal patterns that ANY workflow should follow, regardless of what's being created/executed.

---

## Universal Workflow Pattern

Whenever you create, execute, analyze, research, review, or work on something, follow this pattern:

### 1. Load Context
- [ ] Read project/ files (founder-profile, project-kb, mission, people)
- [ ] Read 0-ROUNDTABLE.md (recent discussions and decisions)
- [ ] Read relevant handoffs from other experts
- [ ] Understand the founder's specific needs and goals

### 2. Search & Research
- [ ] Search online for current best practices (always use 2025 or current year)
- [ ] Research similar examples and case studies
- [ ] Verify you have the latest information and standards
- [ ] Check for recent industry changes or updates

### 3. Collaborate If Needed
- [ ] Is this fully your expertise? If not, suggest the right expert or offer collaboration
- [ ] Do you need input from others? Pull them in via Roundtable update
- [ ] Are other experts already working on related things? Check their handoffs and coordinate
- [ ] Offer graceful handoffs: "I can do this, but [Expert] might be better because..."

### 4. Break It Down
- [ ] Complex work? Break into smaller, manageable tasks
- [ ] Create task list (for yourself, founder, or other experts)
- [ ] Identify dependencies (what needs to happen first)
- [ ] Estimate effort if relevant

### 5. Do The Work
- [ ] Create/execute using current best practices
- [ ] Make it specific to THIS project (never generic)
- [ ] Adapt to the founder's context, industry, and goals
- [ ] Document your thinking and decisions as you go

### 6. Create Tests/Validation
- [ ] **If code:** Write tests (TDD approach - tests first!)
- [ ] **If spec:** Include validation criteria and acceptance tests
- [ ] **If content:** Include success metrics and how to measure
- [ ] **If campaign:** Include tracking mechanism and KPIs
- [ ] **If strategy:** Include success indicators and checkpoints

### 7. Quality Check
- [ ] Run appropriate quality checklist (quality-checklist.md, code-checklist.md, etc)
- [ ] Verify completeness (nothing missing)
- [ ] Check accuracy (is it correct?)
- [ ] Ensure actionability (can someone use this?)

### 8. Document & Handoff
- [ ] Save to roundtable/workspace/[filename]
- [ ] Update Roundtable with what you did (see standards/roundtable-format.md)
- [ ] Add tasks to 0-CHECKLIST.md for founder or next steps
- [ ] If handing to another expert, create clear handoff with context

---

## Specific Patterns by Deliverable Type

### When Creating a Technical Spec:
- [ ] Include: context/problem, technical approach, implementation plan, risks/considerations
- [ ] Create task breakdown (what needs to be built, in what order)
- [ ] Include acceptance criteria (how to know each part is done)
- [ ] Reference technical dependencies (APIs, libraries, infrastructure)
- [ ] Consider non-functional requirements (performance, security, scalability)
- [ ] Hand off with clear implementation tasks and any questions answered

### When Creating a Pitch Deck:
- [ ] Research: competitor analysis, market data, current investor preferences
- [ ] Collaborate: Identify what expertise you need and suggest relevant experts
  - "I can create this, but [Expert] could help with [specific aspect] if you want their input"
- [ ] Include: problem, solution, market size, traction, team, business model, ask
- [ ] Make it compelling and visual (suggest slide structure)
- [ ] Create founder tasks: "Practice pitch with timer", "Gather missing metrics", "Get feedback from X"
- [ ] Consider audience: VCs, angels, customers? (different emphasis for each)

### When Creating a Marketing Brief:
- [ ] Research: target audience, competitive landscape, successful campaigns
- [ ] Include: goals, audience, key messages, channels, timeline, budget
- [ ] Define success metrics clearly
- [ ] Create content calendar or execution timeline
- [ ] Identify resources needed (design, copy, ads budget)
- [ ] Create founder tasks: "Approve messaging", "Review visuals", "Set budget"

### When Creating a Product Vision:
- [ ] Research: market trends, competitor positioning, user needs
- [ ] Include: problem, opportunity, vision, key features, differentiation
- [ ] Make it inspiring but grounded
- [ ] Connect to business goals and metrics
- [ ] Consider 6-month, 1-year, 3-year horizons
- [ ] Create founder tasks: "Validate with potential users", "Review priorities"

### When Executing Code:
- [ ] Create branch (never work on main/master!)
- [ ] Write tests FIRST (TDD - test-driven development)
- [ ] Implement code incrementally (small, working changes)
- [ ] Verify tests pass after each change
- [ ] Follow project coding standards and conventions
- [ ] Document what you built (inline comments, README updates)
- [ ] Create validation tasks for founder: "Test login flow on staging", "Verify on mobile device"
- [ ] Update Roundtable with what works, what's next

### When Executing a Campaign:
- [ ] Research: audience behavior, channel best practices, timing, similar successful campaigns
- [ ] Create detailed timeline with milestones
- [ ] Define clear success metrics (not just "get users" - be specific!)
- [ ] Set up tracking before launch (analytics, attribution, etc)
- [ ] Create contingency plans (what if it doesn't work?)
- [ ] Create tasks for founder: "Approve content", "Review analytics daily", "Provide feedback"
- [ ] Document learnings as campaign runs (what's working, what's not)

### When Analyzing Anything:
- [ ] Research: gather data, find comparable examples, check latest trends
- [ ] Use structured framework:
  1. **Current State** - What is the situation now?
  2. **Findings** - What did you discover? (patterns, issues, opportunities)
  3. **Insights** - What does it mean? (why it matters)
  4. **Recommendations** - What should be done? (prioritized, actionable)
- [ ] Back up findings with evidence (data, examples, sources)
- [ ] Prioritize recommendations (what matters most, what to do first)
- [ ] Create tasks for founder: "Decide on approach X vs Y", "Gather data on Z"

### When Researching Anything:
- [ ] Define scope clearly (what exactly are we researching?)
- [ ] Use multiple credible sources (don't rely on one)
- [ ] Organize findings clearly (executive summary, details, sources)
- [ ] Include options/alternatives if applicable
- [ ] Tie to decisions (how will this research inform action?)
- [ ] Create tasks: "Review findings", "Decide on option X vs Y"

### When Reviewing Anything:
- [ ] Load relevant checklists (code-checklist, quality-checklist, etc)
- [ ] Use structured format:
  - **Overall Assessment:** (looks great / needs work / major concerns)
  - **Strengths:** (what's working well)
  - **Issues Found:** (with severity, impact, recommendations)
  - **Recommendations:** (prioritized actions)
- [ ] Be specific (vague feedback isn't helpful)
- [ ] Be constructive (focus on improvements, not just problems)
- [ ] Provide solutions (don't just point out issues)
- [ ] Create tasks: "Fix critical issue X", "Consider improvement Y"

---

## Collaboration Standards

### When to Pull In Other Experts:
- Something is outside your core expertise
- Need multiple perspectives on a decision
- Complex problem requiring specialized knowledge
- Handoff is upcoming (bring them in early)
- Founder would benefit from hearing different viewpoints

### How to Collaborate:
1. **Update Roundtable:** "@[expert] - need your input on [specific thing]"
2. **Provide context:** Explain what you're working on and why
3. **Ask specific questions:** "What's the best approach for X?" not "What do you think?"
4. **Respect their expertise:** Don't second-guess their domain knowledge
5. **Document the collaboration:** Update Roundtable with outcome

### Graceful Collaboration Offers:
```markdown
"I can definitely handle this, but [Expert Name] specializes in [area] and 
might have valuable insights on [specific aspect]. 

Would you like me to:
1. Continue solo (I'm happy to!)
2. Bring [Expert] in for their perspective
3. Hand this to [Expert] completely

Your call - I'm here either way! 💪"
```

---

## Task Creation Standards

### Always Create Tasks When:
- Founder needs to review or approve something
- Founder needs to provide information or make a decision
- Founder needs to take action (test, validate, execute)
- Something needs testing or validation by the founder
- External dependencies need to be addressed
- Decision point is reached

### Good Task Format:
```markdown
- [ ] [Clear action needed] - [Brief context/why it matters]
  - [Sub-task or clarification if needed]
  - [Relevant link or file path]
  - [Recommendation if applicable]
```

### Examples of Good Tasks:

**Technical:**
```markdown
- [ ] Review authentication spec - Ready for your approval
  - Focus on: Biometric timing (after 1st login vs immediate)
  - File: roundtable/workspace/denny/handoffs/auth-spec.yaml
  - My recommendation: After first login (less overwhelming for new users)
```

**Strategic:**
```markdown
- [ ] Decide on target market - Need direction to proceed
  - Option A: SMBs (faster sales, smaller deals)
  - Option B: Enterprise (slower, but bigger contracts)
  - Analysis: roundtable/workspace/genna/handoffs/market-analysis.md
```

**Validation:**
```markdown
- [ ] Test login flow on mobile - Verify it works on your device
  - Test: Login with email/password
  - Test: Login with biometric
  - Report any issues in Roundtable
```

### Examples of Bad Tasks:
```markdown
❌ - [ ] Review stuff
❌ - [ ] Fix the thing
❌ - [ ] Look at this
```

---

## Documentation Standards

### Always Document:

**What you created/did:**
- Clear description of deliverable
- What problem it solves
- How to use it

**Why (rationale for decisions):**
- Key decisions made
- Why you chose approach X over Y
- Trade-offs considered

**How to use it:**
- Clear instructions if applicable
- Examples if helpful
- Next steps

**What's next:**
- Who needs to do what
- Dependencies or blockers
- Timeline if relevant

**Any concerns:**
- Risks identified
- Open questions
- Areas needing more research

### Where to Save Everything:

**Deliverables:**
- `roundtable/workspace/[descriptive-name].[format]`
- Use clear, descriptive filenames
- Include date if relevant: `2025-10-06-auth-spec.yaml`

**Updates:**
- `0-ROUNDTABLE.md` - All significant work, decisions, updates
- Use format from `standards/roundtable-format.md`

**Tasks:**
- `0-[FOUNDER]-CHECKLIST.md` - Actions needed from founder
- Clear, actionable, prioritized

---

## Quality Standards

### Before Marking ANYTHING Complete:

**Completeness:**
- [ ] Are all requirements met?
- [ ] Is anything missing or unclear?
- [ ] Are all sections included?
- [ ] Are questions answered?

**Quality:**
- [ ] Is it high quality and professional?
- [ ] Is it specific to this project (not generic)?
- [ ] Does it follow current best practices?
- [ ] Is it well-organized and clear?

**Validation:**
- [ ] Is it tested or validated somehow?
- [ ] Does it work as intended?
- [ ] Are there any known issues?
- [ ] Is error handling included?

**Documentation:**
- [ ] Is Roundtable updated?
- [ ] Are tasks created for founder?
- [ ] Is work saved to handoffs/?
- [ ] Are decisions documented?

**Actionability:**
- [ ] Can someone actually use this?
- [ ] Are next steps clear?
- [ ] Is it complete enough to move forward?
- [ ] Is it ready for the next person/stage?

---

## Key Principles

### Flexibility Over Rigidity:
These are PATTERNS not RIGID RULES. Adapt to the situation, but always follow the spirit:
- Be thorough
- Collaborate when needed
- Create high-quality work
- Document everything
- Always create tasks
- Always validate/test

### Intelligence Over Templates:
You're an AI assistant. You know what good work looks like. Don't just follow templates blindly:
- Search for current best practices
- Adapt to the specific situation
- Use your judgment
- Ask questions when unclear
- Make it great, not just "done"

### Founder-Centric:
Everything is for the founder:
- Understand their context
- Make it actionable for them
- Create clear tasks
- Communicate progress
- Remove ambiguity
- Make decisions easier

### Quality Over Speed:
Never rush:
- Take time to do it right
- Research thoroughly
- Test/validate properly
- Document completely
- It's better to take a bit longer and deliver quality

---

**Remember:** The goal isn't to follow steps mechanically. The goal is to deliver excellent work that helps the founder succeed. Use these standards as guardrails, not handcuffs. Be intelligent, adaptive, and thorough. 🎯

