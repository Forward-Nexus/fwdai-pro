# New Expert Creation Checklist

**Version:** 1.0  
**Purpose:** Ensure new experts are properly configured with correct pattern references, workflow integration, and system alignment

---

## Instructions

Use this checklist when creating a **new expert** (core or domain-specific).

Go through each section systematically. Mark items as:
- `[x]` Done - Item is complete and verified
- `[ ]` Not Done - Item needs attention
- `[N/A]` Not Applicable - Item doesn't apply to this expert

---

## 1. Expert File Structure ✅

### File Location
- [ ] Expert file created in `/pro-os/experts/`
- [ ] Filename format: `[name]-[role].md` (e.g., `denny-systems-architect.md`)
- [ ] Lowercase with hyphens (not underscores or spaces)

### Frontmatter (YAML)
- [ ] Contains `agent:` section with all required fields
- [ ] `name:` defined (display name)
- [ ] `id:` defined (unique identifier, matches filename)
- [ ] `aliases:` defined (how expert can be called, e.g., `[denny, denny-cto]`)
- [ ] `title:` defined (expert's title/role)
- [ ] `icon:` defined (emoji representing expert)
- [ ] `role:` defined (role identifier)

**Example:**
```yaml
agent:
  name: Denny
  id: denny-systems-architect
  aliases: [denny, denny-cto]
  title: Systems Architect & Design Lead
  icon: 🔧
  role: systems-architect
```

---

## 2. Primary Patterns Configuration ✅

### Pattern References
- [ ] `primary_patterns:` section exists in frontmatter
- [ ] Lists domain-specific pattern(s) expert always uses
- [ ] Pattern files exist in `/pro-os/system/patterns/`
- [ ] Comment explains which patterns can be loaded as needed

**Valid primary patterns:**
- `expert-tech.md` - Technical work
- `expert-content.md` - Content/marketing/business docs
- `expert-strategy.md` - Strategic planning
- `expert-legal.md` - Legal/compliance

**Example:**
```yaml
primary_patterns:
  - expert-tech.md  # Technical work (always)

# Can also load these patterns when task requires:
# - expert-content.md (when creating technical documentation)
# - expert-strategy.md (when doing technical roadmap/strategy)
```

**Notes on pattern selection:**
- Technical experts → `expert-tech.md`
- Content/marketing experts → `expert-content.md`, `expert-strategy.md`
- Legal experts → `expert-legal.md`
- Strategic experts → `expert-strategy.md`
- Can specify multiple primary patterns if expert works across domains

---

## 3. Persona Configuration ✅

### Persona Section
- [ ] `persona:` section exists in frontmatter
- [ ] `style:` defined (expert's signature phrase)
- [ ] `focus:` defined (what expert focuses on)
- [ ] `identity:` defined (who this expert is)
- [ ] `voice: first_person` set (CRITICAL - always first person)
- [ ] `adaptive_communication:` defined
- [ ] `domain_adaptive: true` set (if expert adapts to project type)

**Example:**
```yaml
persona:
  style: "Here's how we should build this..."
  focus: System design, architecture, and specifications
  identity: Systems architect who designs HOW things should be built
  voice: first_person  # CRITICAL: Speak as "I/me" not "Denny thinks"
  adaptive_communication: "Technical for specs, accessible for founder"
  domain_adaptive: true
```

---

## 4. Hierarchy & Collaboration ✅

### Hierarchy Section
- [ ] `hierarchy:` section exists in frontmatter
- [ ] `reports_to:` defined (who expert reports to)
- [ ] `manages:` defined (who expert manages, if anyone)
- [ ] `collaborates_with:` defined (other experts this expert works with)

**Example:**
```yaml
hierarchy:
  reports_to: [founder, genna-architect]
  manages: [ada-implementation]
  collaborates_with: [lyna-external-strategy, benji-internal-growth, elle-legal]
```

---

## 5. Specializations & Skills ✅

### Specializations Section
- [ ] `specializations:` section exists in frontmatter
- [ ] `universal_role:` defined (core role across all projects)
- [ ] `core_skills:` listed (6-8 universal skills)
- [ ] `adapts_to_project: true` set (if expert adapts)

**Example:**
```yaml
specializations:
  universal_role: "Design systems and create specifications for HOW to build things"
  core_skills:
    - System architecture and design
    - Technical/operational specifications
    - Process and workflow design
    - Requirements analysis
    - Design documentation
    - Quality standards and best practices
  adapts_to_project: true
```

---

## 6. Commands Configuration ✅

### Commands Section
- [ ] `commands:` section exists in frontmatter
- [ ] Includes all universal commands expert can use
- [ ] Includes any expert-specific commands
- [ ] Includes `exit:` command

**Standard commands for all experts:**
- `help`, `create`, `execute`, `analyze`, `research`, `review`, `brainstorm`, `update`, `fix`, `plan`, `exit`

**Example:**
```yaml
commands:
  - help: "Show all available commands"
  - create: "Create anything - I'll adapt"
  - execute: "Build or implement systems/processes"
  - analyze: "Deep dive analysis"
  - research: "Investigate approaches"
  - review: "Review work"
  - brainstorm: "Explore ideas"
  - update: "Modify existing work"
  - fix: "Debug and solve problems"
  - plan: "Strategic planning"
  - exit: "Leave expert mode"
```

---

## 7. Workspace Integration ✅

### Workspace Section
- [ ] `workspace:` section exists in frontmatter
- [ ] `reads_from:` defined (what files expert reads)
- [ ] `writes_to:` defined (what files/locations expert writes)
- [ ] Includes standard roundtable references

**Standard reads_from:**
```yaml
reads_from:
  - project/founder-profile.md
  - project/project-kb.md
  - project/mission.md (if exists)
  - roundtable/whiteboards.md
  - roundtable/workspace/ (active work)
```

**Standard writes_to:**
```yaml
writes_to:
  - roundtable/workspace/ (collaboration)
  - roundtable/whiteboards.md (updates)
  - roundtable/[your-name]-checklist.md (tasks)
  - documents/ (deliverables - AI organizes)
```

---

## 8. Expert Profile & Personality ✅

### Profile Section
- [ ] Expert profile disclaimer present
- [ ] Fictional profile with credentials defined
- [ ] Profile explains "why this persona" for AI context
- [ ] Personality & working style section included
- [ ] Communication style explained
- [ ] Unique voice and approach described

**Must include disclaimer:**
```markdown
> **Disclaimer:** This profile is a fictional persona designed to provide 
> context and expertise training for the AI expert. All credentials, 
> experiences, and background details are creative characterizations that 
> help shape communication style and domain knowledge. This is an AI 
> assistant, not a real person - but the persona helps me serve you better!
```

---

## 9. Voice Rule Emphasis ✅

### First-Person Voice
- [ ] **⚠️ CRITICAL VOICE RULE** section exists
- [ ] Emphasizes first-person ("I/me/my") usage
- [ ] Shows correct vs wrong examples
- [ ] Rule is CLEARLY marked as critical

**Required section:**
```markdown
## Personality & Voice

**⚠️ CRITICAL VOICE RULE:** I always speak in **first person** 
("I/me/my"), NEVER third person ("Expert thinks/from Expert's perspective").

✅ **Correct:** "I recommend we structure this as..."  
❌ **Wrong:** "Let me look at this through [Expert]'s lens..."
```

---

## 10. Domain Adaptation ✅

### Adaptation Sections
- [ ] "How I Adapt to YOUR Project" section exists
- [ ] Shows 3-5 different project types
- [ ] For each type: Focus Areas, What I Create, My Expertise
- [ ] Universal adaptation statement for "ANY Other Business"

**Example structure:**
```markdown
### For Software/Tech Projects:
**Focus Areas:** [list]
**What I Create:** [list]
**My Expertise:** [list]

### For [Industry] Projects:
**Focus Areas:** [list]
**What I Create:** [list]
**My Expertise:** [list]

### For ANY Other Business:
**I adapt!** My core skills apply universally: [explanation]
```

---

## 11. Workflow & Quality Standards ✅

### Standards Section
- [ ] "Workflow & Quality Standards" section exists
- [ ] References `expert-collaboration.md` pattern
- [ ] References domain-specific pattern(s)
- [ ] Lists appropriate checklists to run
- [ ] Quality standards clearly defined

**Required references:**
```markdown
**📚 My workflow is defined in these patterns:**
- **`system/patterns/expert-collaboration.md`** - Universal workflow
- **`system/patterns/expert-[domain].md`** - Domain-specific work

**Before marking work complete:**
- ✅ Run appropriate checklists:
  - `system/checklists/[domain]-checklist.md`
  - `system/checklists/quality-checklist.md`
- ✅ Follow patterns referenced above
- ✅ [Domain-specific quality checks]
- ✅ Workspace and whiteboards updated
```

---

## 12. Collaboration Patterns ✅

### Collaboration Sections
- [ ] "When to Tag Me" section exists
- [ ] Natural request examples provided
- [ ] Specific command examples provided (if any)
- [ ] "Collaboration with Other Experts" section exists
- [ ] "I Commonly Hand Off To" defined
- [ ] "I Commonly Receive From" defined

---

## 13. Success Metrics ✅

### Metrics Section
- [ ] "Success Metrics I Track" section exists
- [ ] Universal metrics defined (adapt to any project)
- [ ] Project-specific metrics examples provided
- [ ] Metrics aligned with expert's role

---

## 14. Project Context ✅

### Customization Section
- [ ] "Project Context (Auto-Generated from Onboarding)" section exists
- [ ] YAML example provided showing how context is set
- [ ] Note that founder can edit this section
- [ ] Example aligns with expert's domain

**Example:**
```yaml
project_type: software_saas
tech_stack: [React Native, Supabase, TypeScript]
focus_areas:
  - Mobile app architecture
  - Backend API design
```

---

## 15. Documentation Quality ✅

### Content Quality
- [ ] All sections use proper markdown formatting
- [ ] Headers follow hierarchy (# → ## → ###)
- [ ] Examples provided where helpful
- [ ] Consistent voice throughout
- [ ] No typos or grammatical errors
- [ ] Links properly formatted
- [ ] Code blocks use appropriate syntax highlighting

---

## 16. System Integration ✅

### Pattern Loading
- [ ] Expert properly loads `expert-collaboration.md` (verified in docs)
- [ ] Expert's primary patterns are documented
- [ ] Pattern loading logic makes sense
- [ ] No conflicting pattern references

### Checklist Integration
- [ ] Appropriate checklists referenced
- [ ] Checklist files exist in `/pro-os/system/checklists/`
- [ ] Quality standards mention checklist usage

### Standards Integration
- [ ] References patterns/universal.md appropriately
- [ ] Code style standards referenced (if technical expert)
- [ ] Voice guidelines followed

---

## 17. Testing & Validation ✅

### Expert Testing
- [ ] Test expert activation: `@[expert-name]`
- [ ] Test with alias: `@[alias]`
- [ ] Test command execution: `@[expert] @create [something]`
- [ ] Verify pattern loading works correctly
- [ ] Verify workspace creation works
- [ ] Verify deliverable creation works

### Integration Testing
- [ ] Test handoff to another expert
- [ ] Test workspace collaboration
- [ ] Test whiteboard updates
- [ ] Test founder checklist updates

---

## 18. Documentation Updates ✅

### README Updates
- [ ] Add expert to `/pro-os/experts/README.md`
- [ ] Include expert name, role, and icon
- [ ] List when to use this expert
- [ ] Update expert count if adding core expert

### Pattern References
- [ ] If new pattern needed, create it
- [ ] Update pattern loading documentation if needed

---

## Final Verification ✅

- [ ] **All sections above marked complete**
- [ ] **Expert file follows structure of existing experts**
- [ ] **No critical items marked [N/A] without justification**
- [ ] **Expert tested and working correctly**
- [ ] **Documentation updated**
- [ ] **Ready for production use**

---

## Checklist Completed By:

**Creator:** [Your name]  
**Date:** [YYYY-MM-DD]  
**Expert Created:** [Expert name and ID]  
**File Location:** `/pro-os/experts/[filename].md`

---

## Notes:

[Any important notes, decisions, or context about this expert]

---

**Remember:** A well-configured expert follows patterns, integrates properly, and serves the founder effectively. Take the time to get it right! ✨

