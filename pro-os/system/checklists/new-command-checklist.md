# New Command Creation Checklist

**Version:** 1.0  
**Purpose:** Ensure new commands are properly structured with correct pattern references, three-phase workflow, and system alignment

---

## Instructions

Use this checklist when creating a **new command** (universal or flow command).

Go through each section systematically. Mark items as:
- `[x]` Done - Item is complete and verified
- `[ ]` Not Done - Item needs attention
- `[N/A]` Not Applicable - Item doesn't apply to this command

---

## 1. Command Type Determination ✅

### Command Classification
- [ ] Determined if this is a **universal command** or **flow command**

**Universal Command:**
- Flexible, AI-infers structure
- Adapts to context
- Examples: @create, @execute, @analyze

**Flow Command:**
- Structured, enforced workflow
- TDD enforcement (if technical)
- Mandatory QA phase
- Examples: @create-specflow, @execute-specflow

**Decision:**
- [ ] Universal Command
- [ ] Flow Command

---

## 2. File Structure ✅

### File Location
- [ ] Universal command: Created in `/pro-os/commands/`
- [ ] Flow command: Created in `/pro-os/commands/flows/`
- [ ] Filename format: `[command-name].md` (lowercase, hyphens)

**Examples:**
- ✅ `create.md`
- ✅ `execute.md`
- ✅ `create-specflow.md`
- ❌ `Create_Command.md`

---

## 3. Command Header ✅

### Header Section
- [ ] Title: `# [Command Name] Command`
- [ ] **Purpose:** defined (one-line explanation)
- [ ] **Type:** defined (Flexible workflow or Structured workflow)
- [ ] **Pattern:** reference included (which pattern this follows)
- [ ] **Alternative:** noted (if there's a better option for certain use cases)

**Example:**
```markdown
# Create Command

**Purpose:** Universal command for creating anything - specs, designs, documents, 
content, strategies, briefs, etc.

**Type:** Flexible workflow (AI infers structure based on context)

**Pattern:** This command follows `pro-os/system/patterns/universal.md`

**Alternative:** For structured technical specs with TDD enforcement, use 
`@create-specflow` instead.
```

---

## 4. Use Case Distinction ✅

### When to Use Section
- [ ] Clear explanation of when to use THIS command
- [ ] Comparison with alternative commands (if applicable)
- [ ] Examples of appropriate use cases
- [ ] Examples of when NOT to use

**Example:**
```markdown
## When to Use This vs Flow Commands

### Use `@create` (this command) when:
- ✅ Flexible creation (content, strategy, documents)
- ✅ No strict TDD requirements
- ✅ AI should infer structure

### Use `@create-specflow` when:
- ✅ Technical specification needed
- ✅ Want TDD enforced
- ✅ Bulletproof quality requirements
```

---

## 5. Three-Phase Workflow ✅

### Phase 1: Pre-Flight (Preparation)
- [ ] **Step 1: Smart Context Loading** defined
- [ ] Conditional loading (check context first)
- [ ] Token efficiency emphasized
- [ ] Standard files listed (project KB, founder profile, etc.)

**Required elements:**
```markdown
**Check what's already in context FIRST** (token efficiency!)

If NOT in context, load:
- project/founder-profile.md
- project/project-kb.md
- project/mission.md
- roundtable/whiteboards.md
- Relevant workspace files

**Don't re-read files already loaded!**
```

### Phase 1 Continued
- [ ] **Step 2: Understand the Request** defined
- [ ] Shows how to detect what user wants
- [ ] Keywords/signals to listen for
- [ ] Clarifying questions guidance

- [ ] **Step 3: Ask Smart Questions (If Needed)** defined
- [ ] Only ask if truly unclear
- [ ] Examples of good questions
- [ ] Note: "Don't ask if you can infer from context"

- [ ] **Step 4: Research Current Best Practices** defined
- [ ] **ALWAYS check the year** emphasized
- [ ] Search format: "[topic] best practices [current year]"
- [ ] Examples provided
- [ ] Explains WHY this is important

**CRITICAL - Must include:**
```markdown
**ALWAYS search for current (2025) best practices:**

Search: "[deliverable type] best practices 2025"
Search: "[industry/domain] standards for [deliverable]"

**Why:** Don't rely on potentially stale training knowledge.
```

- [ ] **Step 5: Pre-Flight Checklist** defined
- [ ] All items must be checked before proceeding
- [ ] Clear verification steps

### Phase 2: Execution
- [ ] **Search for Current Best Practices** re-emphasized
- [ ] **Update Existing Files** principle stated clearly
- [ ] Never create v2/v3 versions principle
- [ ] Workspace pattern documented
- [ ] Deliverable creation documented
- [ ] Do the work (domain-specific adaptation)
- [ ] Progress tracking documented
- [ ] Quality check before moving to Phase 3

**Required principle:**
```markdown
### ⚠️ CRITICAL: Update Existing Files, Don't Create New Versions

**NEVER do this:**
- ❌ Create `pitch-deck-v2.md`
- ❌ Create `auth-spec-updated.md`

**ALWAYS do this:**
- ✅ Update the existing file directly
- ✅ Git handles version history
```

### Phase 3: Post-Flight (MANDATORY)
- [ ] **Post-Flight is MANDATORY** emphasized
- [ ] **DON'T SKIP THIS** warning included
- [ ] Quality checklist execution
- [ ] Workspace finalization
- [ ] Whiteboard updates
- [ ] Founder checklist updates (if needed)
- [ ] Clear summary provision

**Required warning:**
```markdown
## Phase 3: Post-Flight (MANDATORY) ⭐⭐⭐

**CRITICAL:** AI often stops after Phase 2. **DON'T DO THAT!**

**You MUST complete Phase 3 before ending your turn!**
```

---

## 6. Pattern References ✅

### Pattern Integration
- [ ] References appropriate pattern file(s)
- [ ] Pattern files exist in `/pro-os/system/patterns/`
- [ ] Pattern purpose explained
- [ ] Links to related patterns provided

**Universal commands reference:**
- `pro-os/system/patterns/universal.md`

**Flow commands reference:**
- `pro-os/system/patterns/spec.md` (if technical)
- Plus universal pattern

---

## 7. Checklist Integration ✅

### Quality Checklists
- [ ] Phase 3 includes checklist execution
- [ ] Lists appropriate checklists for different work types
- [ ] Checklist files exist in `/pro-os/system/checklists/`
- [ ] Instructions for running checklists

**Required:**
```markdown
**Run appropriate checklist:**

From pro-os/system/checklists/:
- spec-checklist.md (for technical specs)
- code-checklist.md (for implementations)
- content-checklist.md (for content/documents)
- quality-checklist.md (general quality)
- legal-review-checklist.md (if legal content)
```

---

## 8. Workspace & Deliverable Pattern ✅

### Workspace Creation
- [ ] Instructions for checking existing workspaces
- [ ] Template reference (`workspace-template.md`)
- [ ] Location: `roundtable/workspace/[name].md`
- [ ] Purpose: Collaboration and process documentation

### Deliverable Creation
- [ ] Location: `documents/[category]/[file].md`
- [ ] AI organizes intuitively note
- [ ] Founder can override note
- [ ] Purpose: Clean, polished output

**Required distinction:**
```markdown
**TWO files created:**
1. `roundtable/workspace/[name].md` - Collaboration & process
2. `documents/[category]/[name].md` - Clean deliverable
```

---

## 9. Best Practices Section ✅

### DO/DON'T Lists
- [ ] "✅ DO:" section with 8-10 items
- [ ] "❌ DON'T:" section with 8-10 items
- [ ] Covers key principles
- [ ] Practical and actionable

**Must include:**
- Token efficiency (check context first)
- Research current practices
- Update existing files (no v2)
- Complete all phases
- Use checklists
- Update whiteboards

---

## 10. Examples Section ✅

### Example Scenarios
- [ ] Includes 2-3 complete examples
- [ ] Shows full workflow (Pre-Flight → Execution → Post-Flight)
- [ ] Realistic scenarios
- [ ] Shows expert behavior and responses

**Example structure:**
```markdown
### Example 1: [Scenario]

**Founder:** [Request]

**Expert's Process:**
1. Pre-Flight: [What expert does]
2. Execution: [What expert creates]
3. Post-Flight: [How expert completes]

**Result:**
- Workspace: [link]
- Deliverable: [link]
- Status: [outcome]
```

---

## 11. Error Handling ✅

### Error Scenarios
- [ ] "IF requirements are unclear:" scenario
- [ ] "IF existing [thing] found:" scenario
- [ ] "IF dependencies missing:" scenario
- [ ] Clear guidance for handling each scenario

---

## 12. Related Commands Section ✅

### Integration Documentation
- [ ] "Related Commands & Patterns" section exists
- [ ] Lists flow commands (if universal)
- [ ] Lists universal commands (if flow)
- [ ] Shows how commands differ
- [ ] Explains when to use which

---

## 13. Domain-Specific Adaptations ✅

### Adaptive Intelligence
- [ ] Shows how command adapts to different deliverable types
- [ ] Examples for different domains (technical, content, strategy, etc.)
- [ ] Maintains consistency while being flexible

**For universal commands:**
```markdown
### @create
**Adapt to:**
- Specs → Consider routing to @create-specflow for TDD
- Content → Focus on messaging and audience
- Strategy → Present options and trade-offs
```

---

## 14. Special Command Requirements ✅

### For Flow Commands Only
- [ ] TDD structure explicitly defined
- [ ] Every task: test → implement → verify
- [ ] Mandatory QA phase documented
- [ ] Cannot be skipped emphasized
- [ ] Quality enforcement clear

**Required for flow commands:**
```markdown
**TDD Structure ENFORCED:**
Every implementation task MUST follow:
- X.1 Write Tests ← FIRST
- X.2 Implement Feature
- X.3 Verify Tests Pass ← LAST

**NO exceptions. NO skipping. NO "I'll write tests later."**
```

---

## 15. Completion Criteria ✅

### DON'T STOP Section
- [ ] "DON'T STOP - Complete All Three Phases" section exists
- [ ] Lists what NOT to stop after
- [ ] Lists what MUST be completed
- [ ] Explains WHY completion is critical

**Required warning:**
```markdown
## DON'T STOP - Complete All Three Phases

**Do NOT stop after:**
- ❌ Creating the deliverable
- ❌ Doing the work
- ❌ Updating workspace

**MUST complete:**
- ✅ Deliverable finalized
- ✅ Workspace complete
- ✅ Whiteboards updated
- ✅ Checklist updated (if needed)
- ✅ Clear summary provided
```

---

## 16. Expert Ownership (For Flow Commands) ✅

### Ownership Documentation
- [ ] Primary expert identified
- [ ] Collaboration patterns defined
- [ ] Handoff patterns documented
- [ ] Availability rules stated

---

## 17. Documentation Quality ✅

### Content Quality
- [ ] All sections use proper markdown formatting
- [ ] Headers follow hierarchy (# → ## → ###)
- [ ] Code blocks use appropriate syntax highlighting
- [ ] Consistent voice throughout
- [ ] No typos or grammatical errors
- [ ] Links properly formatted
- [ ] Examples are clear and complete

---

## 18. Integration Testing ✅

### Command Testing
- [ ] Test command execution with expert
- [ ] Test three-phase workflow completion
- [ ] Test workspace creation
- [ ] Test deliverable creation
- [ ] Test whiteboard updates
- [ ] Test checklist integration
- [ ] Test pattern loading

---

## 19. Documentation Updates ✅

### README Updates
- [ ] Add command to appropriate README
- [ ] Universal commands: Update `/pro-os/commands/README.md`
- [ ] Flow commands: Update `/pro-os/commands/flows/README.md`
- [ ] Include when to use this command
- [ ] Link to related commands

---

## 20. Standards Compliance ✅

### Workflow Standards
- [ ] Follows `patterns/universal.md` principles
- [ ] Token efficiency emphasized
- [ ] Current best practices search required
- [ ] Update existing files principle
- [ ] Three-phase workflow complete
- [ ] Quality checks mandatory

### Pattern Compliance
- [ ] Follows `universal.md` pattern (universal commands)
- [ ] Follows `spec.md` pattern (flow commands for specs)
- [ ] Pattern references are accurate

---

## Final Verification ✅

- [ ] **All sections above marked complete**
- [ ] **Command file follows structure of existing commands**
- [ ] **No critical items marked [N/A] without justification**
- [ ] **Command tested and working correctly**
- [ ] **Documentation updated**
- [ ] **Pattern references verified**
- [ ] **Checklist integration verified**
- [ ] **Examples tested and accurate**
- [ ] **Ready for production use**

---

## Quality Checklist ✅

### Command Completeness
- [ ] Purpose clear and well-defined
- [ ] Three-phase workflow complete
- [ ] Pattern references accurate
- [ ] Checklist integration proper
- [ ] Workspace pattern documented
- [ ] Best practices comprehensive
- [ ] Examples realistic and helpful
- [ ] Error handling documented
- [ ] Related commands listed

### System Integration
- [ ] Integrates with expert system
- [ ] Integrates with pattern system
- [ ] Integrates with checklist system
- [ ] Integrates with workspace system
- [ ] Integrates with whiteboard system
- [ ] Integrates with standards system

---

## Checklist Completed By:

**Creator:** [Your name]  
**Date:** [YYYY-MM-DD]  
**Command Created:** [Command name]  
**Command Type:** [Universal / Flow]  
**File Location:** `/pro-os/commands/[filename].md`

---

## Notes:

[Any important notes, decisions, or context about this command]

---

## Summary:

**What this command does:**
[Brief description]

**When to use it:**
[Use cases]

**Pattern followed:**
[Pattern reference]

**Quality checks:**
[Checklist references]

---

**Remember:** A well-structured command follows patterns, maintains quality, and provides value to the founder. Take the time to get it right! ✨

