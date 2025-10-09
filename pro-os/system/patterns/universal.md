# FWD PRO Universal Command Pattern

**Version:** 2.0  
**Purpose:** Structured workflow pattern for flexible universal commands  
**Last Updated:** October 9, 2025

**Attribution:**  
Patterns learned from Agent-OS (pre/post-flight, context loading, three-phase execution, blocking system, TDD) and BMAD Method™ (quality checklists, story-based workflows, status progression). FWD PRO innovation: Universal application (not just code), Roundtable collaboration, workspace-based tracking.

---

## Overview

Universal commands (`@create`, `@execute`, `@analyze`, `@research`, `@review`, `@update`, `@fix`, `@plan`, `@brainstorm`) are **flexible and adaptive** - but they still benefit from structure.

This pattern defines the consistent workflow all universal commands should follow, while allowing them to adapt to context.

---

## The Three-Phase Pattern

**All universal commands follow this structure:**

### Phase 1: Pre-Flight (Understand & Prepare)

**Goal:** Load context, understand the request, prepare for work

#### Step 1.1: Smart Context Loading
```markdown
**Check what's already in context FIRST** (token efficiency!)

If NOT in context, load:
- project/founder-profile.md (who the founder is)
- project/project-kb.md (what the project is about)
- project/mission.md (why we're building this)
- roundtable/whiteboards.md (current work overview)
- Relevant roundtable/workspace/ files (if they exist for this topic)

**Don't re-read files already loaded!**
```

#### Step 1.2: Understand the Request
```markdown
**Detect what they actually want:**

Listen for signals:
- Type of deliverable (spec, campaign, analysis, etc.)
- Domain (technical, marketing, legal, strategy)
- Complexity (simple deliverable, multiple deliverables for one goal, or large multi-feature system)
- Urgency/priority indicated

**Infer structure based on context:**
- If technical spec mentioned → Consider routing to @create-specflow
- If multiple deliverables for one goal (like campaign) → Simple workspace, multiple outputs
- If large multi-feature system → Consider complex workspace pattern
```

#### Step 1.3: Ask Smart Questions (If Needed)
```markdown
**Only ask if truly unclear:**

Good questions:
- "What problem does this solve?" (for specs/features)
- "Who's the audience?" (for content/campaigns)
- "What's the goal?" (for strategy/planning)
- "Any specific requirements or constraints?"

**Don't ask if you can infer from context!**
```

#### Step 1.4: Research Current Best Practices
```markdown
**ALWAYS check the year and search current best practices:**

- Check what year it is! (Critical!)
- Search: "[topic] best practices [current year]"
- Review current standards/approaches
- Don't rely on outdated information

**Examples:**
- "React state management best practices 2025"
- "Pitch deck structure best practices 2025"
- "Email campaign strategies 2025"
```

#### Step 1.5: Decide on Routing (If Applicable)
```markdown
**Should this use a flow command instead?**

Route to @create-specflow if:
- Technical specification requested
- User wants bulletproof quality (TDD + QA)
- Feature implementation that needs rigor

Route to @execute-specflow if:
- Spec exists and needs implementation
- Technical work requiring TDD enforcement

**If routing, explain why:**
"This looks like a technical spec. I recommend @create-specflow for 
bulletproof TDD enforcement. Or I can create it flexibly with @create. 
Your choice!"

**Otherwise, proceed with universal command.**
```

---

### Phase 2: Execution (Do the Work)

**Goal:** Create/execute/analyze while documenting progress

#### Step 2.1: Determine Workspace Pattern
```markdown
**Choose the right workspace structure:**

Simple workspace (most common):
- One focused topic
- One deliverable OR multiple related deliverables for single goal
- Examples: 
  - Password reset feature (one deliverable)
  - Kickstarter campaign (video + emails + landing page for one goal)
  - Product launch (multiple assets for one launch)

Complex workspace (for big systems):
- Multiple substantial features/specs
- Each piece needs its own sub-workspace
- Long-term multi-phase development
- Example: AI chat system with 5+ features

**Default to Simple unless it's a large multi-feature system.**
```

#### Step 2.2: Create Workspace
```markdown
**Check for existing workspace first!**
- Search roundtable/workspace/ for related work
- If exists: OPEN and add your section
- If not: Create new workspace using template

**Location:** roundtable/workspace/[descriptive-name].md

**Use template:** pro-os/templates/roundtable/workspace/workspace-template.md

**Document in workspace:**
- Story/Problem (why this matters)
- Your work (detailed notes)
- Decisions made (with rationale)
- Research performed (what you found)
- Progress updates (as you work)
```

#### Step 2.3: Create Deliverable(s)
```markdown
**Create clean output in documents/:**

AI organizes intuitively:
- documents/tech/ (specs, designs, architecture)
- documents/marketing/ (campaigns, content, strategies)
- documents/legal/ (contracts, policies)
- documents/strategy/ (vision, planning, roadmaps)
- documents/[category]/ (AI infers appropriate location)

**Founder can override location anytime.**

**⚠️ CRITICAL: Update Files, Don't Create Versions**

**NEVER do this:**
- ❌ Create `pitch-deck-v2.md` instead of updating `pitch-deck.md`
- ❌ Create `auth-spec-updated.md` instead of updating `auth-spec.md`
- ❌ Create `system-design-final.md` instead of updating `system-design.md`

**ALWAYS do this:**
- ✅ Update the existing file directly
- ✅ Note changes in workspace/changelog
- ✅ Use version control (git) for history, not file versioning

**Why:** Prevents file proliferation, keeps deliverables findable, version history lives in git.

**For multiple deliverables:**
- Create all deliverables
- Link all from workspace
- Track progress on each
```

#### Step 2.4: Do the Work (Adapt to Type)
```markdown
**For @create:**
- Research thoroughly (current best practices)
- Draft deliverable with quality
- Get feedback if needed
- Iterate to final version

**For @execute:**
- Follow spec/brief/instructions (if exists)
- Build/implement/launch
- Test as you go (code should be tested!)
- Update progress in real-time
- Coordinate multiple pieces if needed (like campaign with multiple deliverables)

**For @analyze:**
- Deep dive into topic
- Consider multiple angles
- Document findings
- Provide insights and recommendations

**For @research:**
- Search current information
- Evaluate sources
- Synthesize findings
- Present clear summary

**For @review:**
- Assess against standards
- Identify issues/improvements
- Provide constructive feedback
- Suggest specific changes

**For @update:**
- Locate existing deliverable
- Make requested changes
- Maintain consistency
- Update version/date

**For @fix:**
- Diagnose issue thoroughly
- Identify root cause
- Implement fix
- Verify fix works

**For @plan:**
- Define goals and outcomes
- Break into phases/milestones
- Identify dependencies
- Create timeline/roadmap

**For @brainstorm:**
- Generate diverse ideas
- Evaluate options
- Present pros/cons
- Recommend direction
```

#### Step 2.5: Handle Blockers Intelligently (Three-Attempt Rule)
```markdown
**If you get stuck on something:**

**Three-Attempt Rule:**
1. **Attempt #1:** Try your primary approach
2. **Attempt #2:** Try alternative approach  
3. **Attempt #3:** Try completely different approach

**After 3 attempts without success:**
- Document the blocker in workspace
- Add to founder checklist if founder input needed
- Move on to next task

**Don't waste time spinning on blockers - document and delegate!**
```

#### Step 2.6: Test-Driven Development (For Code Only)
```markdown
**ONLY applies when implementing code (not specs, content, or strategy):**

**Phase A: Write Tests FIRST**
1. Write ALL tests before any implementation
2. Tests should FAIL (feature doesn't exist yet)
3. Cover:
   - **Happy path:** Normal usage, expected behavior
   - **Edge cases:** Unusual inputs, boundary conditions
   - **Error cases:** What breaks, how it fails gracefully
   - **Integration:** How it connects with other code

**Why first:** Tests define success criteria. Code makes tests pass.

**Phase B: Implement Features**
1. Write minimal code to make first test pass
2. Run tests, see progress (Red → Green)
3. Implement next piece
4. Run tests again
5. Repeat until all tests pass ✅

**Incremental approach:** Small steps, constant validation.

**Phase C: Refactor**
1. All tests passing ✅
2. Improve code quality (readability, structure, patterns)
3. Run tests (ensure still passing)
4. Final test run

**Why TDD:**
- Tests guide implementation (clear definition of "done")
- Catch bugs early (before they compound)
- Confidence in changes (tests prevent regressions)
- Better design (testable code is well-structured code)

**Note:** TDD is for CODE implementation only. Specs, pitch decks, and other deliverables use checklists for quality validation.
```

#### Step 2.7: Update Progress in Real-Time
```markdown
**As you work, update workspace:**

Add to your expert section:
- What you're doing
- Decisions being made
- Issues encountered
- Blockers and how you handled them
- Progress on tasks

**Keep it current, not after-the-fact.**
```

#### Step 2.8: Quality Check (Before Finishing)
```markdown
**Run appropriate checklist:**

From pro-os/system/checklists/:
- spec-checklist.md (for technical specs)
- code-checklist.md (for implementations)
- content-checklist.md (for content/documents)
- quality-checklist.md (general quality)
- legal-review-checklist.md (if legal content)

**Minimum standards:**
- Clear and well-structured
- Addresses the need/request
- References project context appropriately
- Ready to be used/shared/implemented
```

---

### Phase 3: Post-Flight (Close the Loop) - MANDATORY

**Goal:** Update all tracking, provide summary, complete the work

#### Step 3.1: Finalize Workspace
```markdown
**Complete your expert section:**
- Mark tasks complete
- Document final decisions
- Add completion notes
- Update status to appropriate stage

**If handing off to another expert:**
- Create complete handoff section
- Provide ALL context they need
- Link to resources/files
- Note any open questions
```

#### Step 3.2: Update Whiteboards
```markdown
**Location:** roundtable/whiteboards.md

Find your expert section and update:

### Active Work
- **[Work Title]** - [emoji] [Status]
  - Workspace: [link](workspace/name.md)
  - Deliverable: [link](../documents/category/file.md)
  - Quick note: [One-line status]
  - Next: [What's next]

**Status emojis:**
- ⚪ Draft
- ✅ Approved  
- 🔄 InProgress
- 📋 Review
- ✅ Done

**Move to "Completed This Month" when done.**
```

#### Step 3.3: Update Founder Checklist (If Needed)
```markdown
**Location:** roundtable/[founder-name]-checklist.md

**Only add if founder MUST do something:**
- Review/approve work
- Make a decision
- Provide input
- Take action

**Don't clutter with FYI items.**

Use table format:
| ☐ | **[Action]** | [From] | [What to do] | [Link] | [Date] |
```

#### Step 3.4: Provide Clear Summary
```markdown
**Give founder a complete summary:**

✅ [Work Type] Complete: [Title]

**What was created/done:**
- [Brief description]
- [Key outcomes]

**Location(s):**
- Deliverable: [link]
- Workspace: [link]

**Key decisions made:**
- [Decision 1]
- [Decision 2]

**Next steps:**
- [What should happen next]

**Questions/needs:**
- [Anything founder needs to know]
```

---

## DON'T STOP - Complete All Three Phases

**Critical:** Always complete ALL THREE PHASES.

**Don't stop after:**
- ❌ Creating the deliverable (need to update tracking)
- ❌ Doing the work (need to document and close loop)
- ❌ Updating workspace (need to update whiteboards too)

**Must complete:**
- ✅ Deliverable finalized
- ✅ Workspace complete
- ✅ Whiteboards updated
- ✅ Checklist updated (if needed)
- ✅ Clear summary provided

---

## Adaptive Intelligence

**Universal commands are FLEXIBLE:**

### Adapt Depth to Complexity
```markdown
Simple request: Lighter documentation, faster execution
Complex request: Thorough documentation, careful execution

**Let the work dictate the detail level.**
```

### Adapt Structure to Type
```markdown
Technical work: Consider TDD, testing, quality rigor
Content work: Focus on messaging, audience, clarity
Strategy work: Focus on vision, options, trade-offs
Analysis work: Focus on insights, data, recommendations

**Let the domain dictate the approach.**
```

### Adapt Documentation to Audience
```markdown
For implementers (Ada): Technical depth, complete context
For founder: Clear summary, accessible language
For collaborators: Relevant context, handoff notes

**Let the audience dictate the detail.**
```

### Offer Better Alternatives When Appropriate
```markdown
If technical spec requested:
"I can create this flexibly, OR use @create-specflow for 
bulletproof TDD enforcement. Recommend the latter for 
critical features. Your choice!"

**Offer, don't force. Founder decides.**
```

---

## Best Practices

### ✅ DO:

1. **Check context first** - Don't re-read files (token efficiency)
2. **Ask smart questions** - Only if truly needed, infer when possible
3. **Research current practices** - Always check the year!
4. **Use existing workspace template** - Don't reinvent structure
5. **Update as you work** - Real-time, not after-the-fact
6. **Complete all phases** - Don't stop early
7. **Adapt to context** - Flexible intelligence
8. **Offer better tools** - Suggest flow commands when appropriate
9. **Document decisions** - The "why" matters
10. **Provide clear summaries** - Founder needs closure

### ❌ DON'T:

1. **Don't guess** - Ask if unclear
2. **Don't skip quality checks** - Use checklists
3. **Don't stop mid-flow** - Complete all phases
4. **Don't re-read loaded files** - Wasteful
5. **Don't use outdated info** - Research current year
6. **Don't skip whiteboards** - Always update
7. **Don't create duplicate workspaces** - Check for existing
8. **Don't over-document simple work** - Adapt detail level
9. **Don't under-document complex work** - Capture context
10. **Don't forget the summary** - Close the loop

---

## Command-Specific Adaptations

### @create
**Focus:** Understanding need, researching best practices, crafting solution

**Adapt to:**
- Specs → Consider routing to @create-specflow for TDD
- Content → Focus on messaging and audience
- Strategy → Present options and trade-offs
- Designs → Visual and structural thinking

---

### @execute
**Focus:** Following instructions, building/implementing, testing, delivering

**Adapt to:**
- Features → Consider routing to @execute-specflow for TDD
- Campaigns → Coordinate multiple deliverables
- Processes → Step-by-step execution
- Launches → Coordination and timing

---

### @analyze
**Focus:** Deep investigation, multiple angles, insights, recommendations

**Depth:** More thorough than research, provides interpretation

**Output:** Analysis document with findings and recommendations

---

### @research
**Focus:** Finding current information, evaluating sources, synthesizing

**Depth:** Information gathering and summary

**Output:** Research brief with sources and key findings

---

### @review
**Focus:** Assessing quality, identifying issues, constructive feedback

**Adapt to:**
- Code → Technical quality, standards, security
- Content → Messaging, clarity, audience fit
- Strategy → Alignment, feasibility, completeness
- Specs → Completeness, clarity, implementability

---

### @update
**Focus:** Modifying existing work, maintaining consistency

**Process:**
- Find existing deliverable
- Understand current state
- Make requested changes
- Update version/date
- Maintain quality

---

### @fix
**Focus:** Diagnosing and resolving issues

**Process:**
- Understand the problem
- Reproduce if possible
- Identify root cause
- Implement fix
- Verify fix works
- Document solution

---

### @plan
**Focus:** Strategic planning, roadmaps, timelines

**Output:**
- Goals and outcomes
- Phases/milestones
- Dependencies
- Timeline
- Resource requirements

---

### @brainstorm
**Focus:** Exploring options, generating ideas

**Process:**
- Diverge (many ideas)
- Converge (best options)
- Evaluate pros/cons
- Recommend direction
- But founder decides

---

## Integration with Flow Commands

### When to Route to Flow Commands

**Offer @create-specflow when:**
- Technical specification requested
- Feature requires bulletproof quality
- TDD enforcement would help
- Mandatory QA appropriate

**Offer @execute-specflow when:**
- Spec exists for implementation
- Technical work needs TDD rigor
- Quality is critical

**How to offer:**
```markdown
"This looks like [technical spec/feature]. I can:

1. Create it flexibly with @create (faster, adaptive)
2. Use @create-specflow for bulletproof TDD enforcement (rigorous)

Recommend option 2 for critical features. Your choice!"
```

**Don't force - offer and explain, then respect founder's choice.**

---

## Quality Standards

### Before Completing Any Universal Command:

- [ ] All three phases completed (Pre-Flight, Execution, Post-Flight)
- [ ] Context loaded efficiently (no re-reading)
- [ ] Current best practices researched (checked year)
- [ ] Deliverable(s) created and finalized
- [ ] Workspace created/updated (using template)
- [ ] Quality checklist run (appropriate one)
- [ ] Whiteboards updated (your section)
- [ ] Checklist updated (if founder action needed)
- [ ] Clear summary provided
- [ ] Work actually complete (no half-done)

---

## Related Documentation

**Complementary patterns:**
- `expert-collaboration.md` - How experts collaborate in the Roundtable
- `expert-tech.md` - Technical work standards (TDD, testing)
- `expert-content.md` - Content/marketing standards
- `expert-strategy.md` - Strategic planning standards
- `expert-legal.md` - Legal/compliance standards
- `spec.md` - Technical spec structure for flow commands
- `workspace.md` - Simple vs Complex workspace patterns

**Standards:**
- `standards/expert-voice-guidelines.md` - Voice, tone, and communication
- `standards/error-templates.md` - Standard error message formats
- `standards/helper-functions.md` - Reusable code snippets
- `standards/code-style/` - Code formatting standards

**Checklists:**
- `checklists/quality-checklist.md` - Universal quality validation
- `checklists/spec-checklist.md` - Technical spec validation
- `checklists/code-checklist.md` - Code implementation validation
- `checklists/content-checklist.md` - Content quality validation
- `checklists/legal-review-checklist.md` - Legal/compliance validation

---

## Version History

**v2.0** - October 9, 2025
- **CONSOLIDATED:** Merged content from `patterns/universal.md` (now deprecated)
- Added detailed blocker handling (three-attempt rule)
- Expanded TDD section with phases A, B, C
- Added file versioning warnings (don't create v2!)
- Added attribution to Agent-OS and BMAD Method™
- Enhanced related documentation section

**v1.0** - October 9, 2025
- Initial universal command pattern created
- Three-phase workflow defined
- Adaptive intelligence documented
- Integration with flow commands defined

---

*Universal commands are flexible, but structure ensures quality. Adapt intelligently, but always complete the loop.*

