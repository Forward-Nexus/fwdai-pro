---
# FWD PRO Workspace Document (Inspired by BMAD Method)
# This is the DETAILED progress document for a work item
# It informs Whiteboards (overview) and Checklist (action items)
template:
  id: fwdpro-workspace-v2
  name: FWD PRO Workspace
  version: 2.0
  output:
    format: markdown
    filename: 0-roundtable/workspace/{{workspace_name}}.md
    title: "{{workspace_title}}"

metadata:
  title: "[Work Item Name]"
  type: "feature | campaign | spec | content | design | legal | other"
  status: "Draft | Approved | InProgress | Review | Done"
  created: "YYYY-MM-DD"
  created_by: "[expert-name]"
  updated: "YYYY-MM-DD"
  updated_by: "[expert-name]"
  deliverable: "documents/[category]/[filename]"
  collaborators: ["expert1", "expert2"]
  priority: "low | medium | high | critical"
  project: "[project name]"
---

# {{workspace_title}}

**Type:** {{type}}  
**Status:** {{status}}  
**Created:** {{created}} by {{created_by}}  
**Last Updated:** {{updated}} by {{updated_by}}  
**Deliverable:** [{{deliverable}}](../../{{deliverable}})

> **Purpose:** This workspace document tracks ALL progress, decisions, collaboration, and context for this work item. It informs the Whiteboards (high-level view) and Checklist (action items).

---

## 📊 Status

**Current Status:** {{status}}

Progress through workflow:
- [ ] **Draft** - Initial creation and planning
- [ ] **Approved** - Plan approved, ready for execution  
- [ ] **InProgress** - Active work happening ← **[Mark current phase]**
- [ ] **Review** - Complete, awaiting quality review
- [ ] **Done** - Fully complete and approved

**Status History:**
- {{date}}: Draft → Approved by {{expert}}
- {{date}}: Approved → InProgress by {{expert}}
- {{date}}: InProgress → Review by {{expert}}

---

## 🎯 Story

**As a** {{role}} (founder, user, investor, community member, etc.),  
**I want** {{action}} (what needs to be accomplished),  
**so that** {{benefit}} (why it matters, what value it provides).

**Alternative Format (Problem/Solution):**
If the user story format doesn't fit, use this:
- **Problem:** [What problem are we solving?]
- **Solution:** [What are we building/creating?]
- **Benefit:** [Why does this matter?]

**Context & Background:**
[Additional context about why this work matters, how it fits into larger project goals, any relevant history]

---

## ✅ Acceptance Criteria

What "done" looks like for this workspace (specific, testable criteria):

1. [Criterion 1 - clear and measurable]
2. [Criterion 2 - clear and measurable]
3. [Criterion 3 - clear and measurable]
4. [Criterion 4 - clear and measurable]

**How to write good AC:**
- Be specific and testable
- Focus on outcomes, not implementation
- Should be verifiable by someone other than the person who did the work

---

## 📋 Tasks / Subtasks

Break down the work into specific tasks (reference AC numbers where applicable):

### Phase 1: [Phase Name - e.g., Research & Planning]
- [ ] Task 1 (AC: 1, 2)
  - [ ] Subtask 1.1
  - [ ] Subtask 1.2
- [ ] Task 2 (AC: 3)
  - [ ] Subtask 2.1

### Phase 2: [Phase Name - e.g., Execution]
- [ ] Task 3 (AC: 4)
  - [ ] Subtask 3.1
  - [ ] Subtask 3.2

### Phase 3: [Phase Name - e.g., Review & Polish]
- [ ] Task 4 (AC: All)
  - [ ] Subtask 4.1

**Task Management:**
- Check off tasks as completed
- Add notes if a task evolved or changed
- Reference AC numbers to track which criteria each task satisfies

---

## 👥 Expert Collaboration & Progress Notes

> **This is the heart of the workspace!** Document all work, decisions, research, and context here.  
> Each expert adds their section as they work. This can be LONG - that's good!

### {{Primary Expert}}'s Work

**Role:** [Primary responsibility for this work item]  
**Date:** {{date}}  
**Status Update:** [Brief summary of current state]

**Work Completed:**
[Detailed notes on what was done - be thorough! Future you/others need this context]

**Key Decisions Made:**
- **Decision 1:** [What was decided] - [Why/rationale] - [Impact on AC: #]
- **Decision 2:** [What was decided] - [Why/rationale] - [Impact on AC: #]

**Research & References:**
- [Best practices researched] - [Link/source]
- [Resources consulted] - [Key findings]
- [Subject matter experts consulted]

**Progress on Tasks:**
- ✅ Task 1.1 - [Notes on completion]
- ✅ Task 1.2 - [Notes on completion]
- 🔄 Task 2.1 - [In progress, current status]

**Notes & Context:**
[Important context, constraints, things to remember, gotchas, anything future collaborators need to know]

---

### Handoff to {{Next Expert}}

> **Handoffs preserve context between experts**

Hey {{expert}}! [Brief status of where things are]

**Complete Context:**
[LONG context dump - everything they need to understand the work, decisions made, why things are the way they are]

**What's Been Done:**
- ✅ [Completed item 1] (AC: #)
- ✅ [Completed item 2] (AC: #)
- ✅ [Completed item 3] (Tasks: #)

**What You Need to Do:**
- [ ] [Next step 1] (AC: #, Task: #)
- [ ] [Next step 2] (AC: #, Task: #)
- [ ] [Next step 3]

**Important Considerations:**
- ⚠️ [Thing to watch out for]
- ⚠️ [Constraint or requirement]
- 💡 [Helpful tip or suggestion]

**Where to Find Things:**
- [Resource/File 1]: [location/link] - [What it contains]
- [Resource/File 2]: [location/link] - [What it contains]

**Open Questions:**
- [Question 1 that needs your input]
- [Question 2 to discuss]

**Questions?** Tag me anytime! - {{handoff_from}}

---

### {{Collaborator Expert}}'s Work

**Role:** [Their contribution to this work item]  
**Date:** {{date}}

**Work Completed:**
[What this expert added, modified, reviewed]

**Feedback/Review:**
[Their perspective, suggestions, concerns, domain expertise]

**Verdict:** 
- [ ] ✅ Approved - Ready to proceed
- [ ] ⚠️ Approved with Changes - [Changes requested below]
- [ ] ❌ Needs Rework - [Major concerns below]

**Changes Requested/Made:**
- [Change 1] - [Why] - [Status: Done/Pending]
- [Change 2] - [Why] - [Status: Done/Pending]

**Progress on Tasks:**
- ✅ [Task completed by this expert]
- 🔄 [Task in progress]

**Notes:**
[Context or decisions from this expert's perspective]

---

### {{Another Expert}}'s Input

[Repeat structure above for each collaborating expert]

---

## 📝 Expert Notes & Context

> **Critical information for implementing this work** (pulled from project docs, architecture, prior work)

### Project Context
- **Project Type:** [from project-kb.md]
- **Tech Stack/Tools:** [relevant technical details]
- **Key Constraints:** [budget, timeline, technical, business]
- **Success Metrics:** [how we'll measure success]

### Architecture & Design Notes
[Relevant architecture decisions, design patterns, technical approaches that apply to this work]

### Related Work & Dependencies
- **Previous Workspaces:** [Related prior work] - [Key learnings to apply]
- **Dependencies:** [What this work depends on]
- **Impacts:** [What depends on this work]

### Domain-Specific Guidance
[If domain expert (like recovery specialist, legal expert, etc.) has specific guidance]

### Best Practices to Follow
- [Practice 1 relevant to this work]
- [Practice 2 relevant to this work]

---

## ⚠️ Blockers & Issues

> **Track anything preventing progress**

### Current Blockers

| # | Blocker | Raised By | Date | Urgency | Status |
|---|---------|-----------|------|---------|--------|
| 1 | [Description] | [Expert] | YYYY-MM-DD | High/Med/Low | Open |
| 2 | [Description] | [Expert] | YYYY-MM-DD | High/Med/Low | Open |

**Blocker Details:**

**#1: [Blocker Title]**
- **Description:** [Full description of what's blocked]
- **Impact:** [What can't progress because of this]
- **Needs:** [What's needed to resolve - decision, information, resource]
- **Approaches Tried:** [What's been attempted]
- **Assigned To:** [Who's working to resolve]
- **Resolution:** [How it was resolved - fill in when done]
- **Resolved Date:** [When resolved]

### Resolved Blockers
- **[Blocker]** - Resolved on [date] by [expert] - [How resolved] - [Impact on timeline/scope]

---

## 📊 Key Decisions Log

> **Track important decisions - the "why" behind the "what"**

| Date | Decision | Rationale | Trade-offs Considered | Decided By | Related AC/Task |
|------|----------|-----------|----------------------|------------|-----------------|
| YYYY-MM-DD | [What was decided] | [Why this choice] | [What was rejected & why] | [Expert/Founder] | AC: 1, Task: 2.1 |
| YYYY-MM-DD | [What was decided] | [Why this choice] | [What was rejected & why] | [Expert/Founder] | AC: 3 |

**Decision Details:**

**Decision 1: [Title]**
- **Context:** [What situation prompted this decision]
- **Options Considered:**
  - Option A: [Pros/Cons]
  - Option B: [Pros/Cons]
  - Option C: [Pros/Cons]
- **Final Choice:** [What was chosen]
- **Rationale:** [Why this option]
- **Implications:** [How this affects future work]

---

## 🔄 Change Log

> **Track how this workspace evolved**

| Date | Version | What Changed | Changed By | Reason | Related AC/Task |
|------|---------|--------------|------------|--------|-----------------|
| YYYY-MM-DD | 0.1 | Initial workspace created | [Expert] | Starting new work | - |
| YYYY-MM-DD | 0.2 | [Specific change] | [Expert] | [Why changed] | AC: 1 |
| YYYY-MM-DD | 1.0 | Marked complete | [Expert] | All AC met | All |

---

## 🔍 Quality Review

> **Formal review before marking as Done**

### Pre-Review Checklist
- [ ] All acceptance criteria met
- [ ] All tasks completed
- [ ] All blockers resolved
- [ ] Deliverable finalized in `documents/`
- [ ] Expert reviews complete (if multi-expert)
- [ ] Whiteboards updated
- [ ] Checklist updated (if action items for founder)

### Quality Standards Applied
**Checklist Used:** [Which checklist from `pro-os/system/checklists/`]
- [ ] Quality checklist
- [ ] Code checklist (if applicable)
- [ ] Content checklist (if applicable)
- [ ] Legal review checklist (if applicable)
- [ ] Spec checklist (if applicable)

### QA Results

**Reviewed By:** [Expert]  
**Review Date:** YYYY-MM-DD  
**Verdict:** 
- [ ] ✅ Passed - Ready for Done
- [ ] ⚠️ Passed with Minor Issues - [Note below]
- [ ] ❌ Needs Fixes - [Issues below]

**Issues Found:**
1. [Issue 1] - Severity: High/Med/Low - Related to AC: #
2. [Issue 2] - Severity: High/Med/Low - Related to AC: #

**Resolution:**
- Issue 1: [How addressed] - Resolved by [expert] on [date]
- Issue 2: [How addressed] - Resolved by [expert] on [date]

**Final Approval:** [Expert] on [date]

---

## 🎉 Completion Summary

> **Fill this out when marking workspace as Done**

### What Was Accomplished

**Summary:**
[High-level summary of what was delivered, key outcomes, impact]

**Acceptance Criteria Results:**
- AC 1: ✅ Met - [Brief note on how]
- AC 2: ✅ Met - [Brief note on how]
- AC 3: ✅ Met - [Brief note on how]
- AC 4: ✅ Met - [Brief note on how]

**Deliverables Created:**
- [Deliverable 1]: [link] - [Description]
- [Deliverable 2]: [link] - [Description]

**Metrics/Results:**
[If applicable - performance metrics, user feedback, business impact]

### Follow-Up Work Needed

**Immediate:**
- [Follow-up item 1] - [Why needed] - [Assigned to]
- [Follow-up item 2] - [Why needed] - [Assigned to]

**Future Considerations:**
- [Enhancement idea 1]
- [Enhancement idea 2]

### Lessons Learned

**What Went Well:**
- [Success 1] - [Why it worked]
- [Success 2] - [Why it worked]

**What Could Be Improved:**
- [Challenge 1] - [How to improve next time]
- [Challenge 2] - [How to improve next time]

**Process Improvements:**
- [Process change recommendation 1]
- [Process change recommendation 2]

**Knowledge to Preserve:**
- [Important learning 1 for future work]
- [Important learning 2 for future work]

### Archive Information

**Archive Date:** YYYY-MM-DD  
**Archive Location:** `0-roundtable/workspace/archive/YYYY-MM/{{workspace_name}}.md`  
**Deliverable Location:** `documents/{{category}}/{{filename}}`

---

## 📚 References & Resources

**Project Context:**
- [Project KB](../../pro-os/project/project-kb.md) - Core project information
- [Mission](../../pro-os/project/mission.md) - Project vision and philosophy
- [People](../../pro-os/project/people.md) - Stakeholders and relationships
- [Founder Profile](../../pro-os/project/founder-profile.md) - Founder context

**Related Workspaces:**
- [Related Workspace 1](./related-workspace.md) - [How it relates]
- [Related Workspace 2](./related-workspace.md) - [How it relates]

**Related Deliverables:**
- [Deliverable 1](../../documents/category/file.md) - [Relationship]
- [Deliverable 2](../../documents/category/file.md) - [Relationship]

**External Resources:**
- [Resource Name]: [URL] - [What it is, why referenced]
- [Resource Name]: [URL] - [What it is, why referenced]

**Code/File References:**
- `path/to/file.ext` - [What this file is, why relevant]
- `path/to/directory/` - [What this contains, why relevant]

---

## 📈 Whiteboard & Checklist Updates

> **How this workspace informs other roundtable documents**

### For Whiteboards
**Expert Whiteboard Section to Update:**
```markdown
### Active Work
- **{{workspace_title}}** - {{status_emoji}} {{status}}
  - Workspace: [link](workspace/{{workspace_name}}.md)
  - Deliverable: [link](../documents/{{deliverable}})
  - Quick note: [One-line current status]
  - Next: [What's next]
```

**Status Emojis:**
- ⚪ Draft
- ✅ Approved
- 🔄 InProgress
- 📋 Review
- ✅ Done

### For Founder Checklist
**Items to Add (if founder input needed):**
- [ ] **[Action needed]** - [What founder needs to do]
  - **From:** {{expert}}
  - **Context:** [Why needed]
  - **Workspace:** [link to this workspace]
  - **Date added:** YYYY-MM-DD

---

**Last Updated:** {{updated}} by {{updated_by}}

> **Remember:** This workspace is the detailed story. Keep it updated as work progresses. It informs your Whiteboards (overview) and Checklist (actions).

