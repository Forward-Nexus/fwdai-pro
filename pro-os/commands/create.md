# Create Command

**Command:** `@create`  
**Type:** Universal creation command  
**Purpose:** Create any deliverable based on context and expert domain

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @create [thing]`

**Examples:**

- `@denny @create spec for authentication`
- `@lyna @create pitch deck`
- `@benji @create marketing campaign`
- `@elle @create terms of service`

---

## AI Instructions

### Step 1: Understand the Request

**Parse what's being created:**

- Spec/specification → Technical document
- Pitch deck/deck → Investor presentation
- Campaign/plan → Marketing initiative
- Document/doc → General document
- Content → Marketing/business content
- Strategy → Strategic plan

**Identify expert context:**

- Expert's domain expertise is already loaded (via expert .mdc)
- Apply domain-specific knowledge automatically

### Step 2: Load Context (Token Efficient)

**Check what's already in context FIRST - don't reload!**

**Load only if NOT in context:**

- `project/founder-profile.md` - Founder preferences
- `project/project-kb.md` - Project facts
- `project/mission.md` - Why this matters (if exists)
- `roundtable/whiteboards.md` - Current work status

**If continuing existing work:**

- Load relevant `roundtable/workspace/` files

### Step 3: Clarify Requirements

**If anything is unclear, ask:**

- What specifically should be created?
- What's the purpose/goal?
- Who is the audience?
- Any constraints or requirements?
- Preferred format?

**Don't guess - clarify first.**

### Step 4: Research Current Best Practices

**ALWAYS research before creating:**

- Check what year it is (critical!)
- Search: "[deliverable type] best practices [current year]"
- Example: "pitch deck structure 2025"
- Example: "API specification best practices 2025"
- Apply current standards, not outdated patterns

### Step 5: Create Deliverables

**Create TWO files:**

**A. Workspace** (`roundtable/workspace/[name].md`)

- AI memory/context document
- Process, decisions, collaboration notes
- Ultra-efficient format (AI shorthand encouraged)
- Founder never reads this directly
- Reference deliverables, don't duplicate content

**B. Deliverable** (`documents/[category]/[name].md`)

- Clean, polished output
- Human-readable, well-formatted
- What founder sees/uses/shares
- Category based on type (tech/, business/, marketing/, legal/, strategy/)

**Standards applied automatically:**

- Command .mdc loads relevant standards based on deliverable type
- Expert .mdc loads domain patterns for methodology

### Step 6: Update Tracking

**Update your whiteboard section:**

Location: `roundtable/whiteboards.md`

```markdown
## [Your Icon] Your Name's Board

**Current Work:**

- 🔄 [Work Name] (started [date])
  - Status: [current status]
  - Next: [what's next]
  - WS: `workspace/[name].md`
```

**Add to founder checklist if review needed:**

Location: `roundtable/[founder-name]-checklist.md`

Only add if founder needs to take action (review, approve, provide input).

### Step 7: Quality Validation

**Before marking complete:**

- Appropriate quality standards applied (loaded via command .mdc)
- Appropriate checklist used (loaded via command .mdc)
- All requirements addressed
- Ready to use/share

### Step 8: Deliver

**Present completed work clearly:**

- What was created
- Where it's located
- Key decisions made
- Next steps (if any)

---

## Key Behaviors

**Follow expert domain:**

- Technical work → Apply TDD, code standards
- Content work → Apply messaging, tone standards
- Strategy work → Apply long-term thinking
- Legal work → Apply compliance, risk assessment

**Token efficiency:**

- Check context before loading files
- Don't reload what's already there
- Update in place (no v2 files)
- Reference in workspace, don't duplicate

**Current best practices:**

- Always check the year
- Research latest standards
- Don't rely on outdated information

**Graceful routing:**

- If another expert better suited, suggest but offer to help
- If structured workflow needed, mention flow alternative

---

## Routing to Flow Commands

**If creating technical spec with TDD:** Suggest: `@create-specflow [feature]` -
structured spec with mandatory TDD/QA

**Otherwise:** This command handles flexible creation across all domains.

---

## Notes

- Expert workflow patterns loaded via expert .mdc
- Quality standards/checklists loaded via command .mdc
- This command adapts to whatever expert is using it
- Flexibility is the feature - AI infers structure based on context
