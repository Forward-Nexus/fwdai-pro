# Create Command

**Purpose:** Universal command for creating anything - specs, designs, documents, content, strategies, briefs, etc.

**Type:** Flexible workflow (AI infers structure based on context)

**Pattern:** This command follows `pro-os/system/patterns/universal.md` (three-phase workflow with adaptive intelligence)

**Alternative:** For structured technical specs with TDD enforcement, use `@create-specflow` instead.

---

## When to Use This vs Flow Commands

### Use `@create` (this command) when:
- ✅ Flexible creation (content, strategy, documents)
- ✅ No strict TDD requirements
- ✅ AI should infer structure
- ✅ Non-technical deliverables

### Use `@create-specflow` when:
- ✅ Technical specification needed
- ✅ Want TDD enforced (tests first, always)
- ✅ Want mandatory QA phase
- ✅ Bulletproof quality requirements

**Both are valid! Choose based on needs.**

---

## How This Works

When founder says: `@[expert] @create [thing]`

**Examples:**
- `@denny @create spec about authentication` → Creates spec (can also use `@create-specflow` for TDD enforcement)
- `@lyna @create pitch deck for investors` → Creates pitch deck
- `@genna @create product vision document` → Creates vision doc
- `@benji @create marketing campaign brief` → Creates campaign brief
- `@ada @create login feature` → Creates implementation

---

## Process

### 1. Load Context (Token Efficiency!)

**Check what's already in context first!**

If NOT in context, read:
- `project/founder-profile.md` - Who the founder is
- `project/project-kb.md` - What the project is about  
- `project/mission.md` - Why we're building this (if exists)
- `roundtable/whiteboards.md` - Current work overview
- Any relevant `roundtable/workspace/` files

**Don't re-read files that are already loaded!**

### 2. Understand What They Want

Listen for keywords to understand deliverable type:
- **"spec"** or **"specification"** → Technical specification
- **"design"** or **"architecture"** → System design
- **"pitch deck"** or **"deck"** → Investor presentation
- **"vision"** or **"strategy"** → Strategic document
- **"campaign"** or **"plan"** → Marketing/growth initiative
- **"feature"** or **"implement"** → Code implementation (Ada)
- **"brief"** → Strategic/tactical brief
- **Other** → Clarify what they need

### 3. Ask Clarifying Questions

If anything is unclear or missing:
- What exactly do you want me to create?
- What's the purpose/goal?
- Who is this for?
- Any specific requirements or constraints?
- What format do you prefer?

**Don't guess - ask!**

### 4. Create Workspace + Deliverable

Follow expert workflow from `system/patterns/universal.md` and `system/patterns/expert-collaboration.md`:

**A. Create Workspace**
- Use template: `roundtable/templates/workspace-template.yaml`
- Save as: `roundtable/workspace/[descriptive-name].md`
- Document process, decisions, and collaboration IN workspace

**B. Search Current Best Practices**
- Check what year it is!
- Search for latest standards/approaches
- Don't rely on outdated information

**C. Create Clean Deliverable**
- Save as: `documents/[category]/[name].md` (AI organizes intuitively)
- This is the CLEAN output (no process notes)
- Founder can override location anytime

**TWO files created:**
1. `roundtable/workspace/[name].md` - Collaboration & process
2. `documents/[category]/[name].md` - Clean deliverable

### 5. Quality Check

Before marking complete:
- ✅ Follow `system/patterns/universal.md`
- ✅ Run appropriate checklist from `system/checklists/`:
  - Spec → `spec-checklist.md`
  - Code → `code-checklist.md`
  - Content → `content-checklist.md`
  - Legal → `legal-checklist.md`
- ✅ All requirements addressed
- ✅ Clear and well-structured
- ✅ References project context appropriately
- ✅ Ready to be used/shared

### 6. Update Whiteboards

Update your section in `roundtable/whiteboards.md`:

```markdown
## [ICON] [Expert Name]'s Whiteboard ([Role])

### Active Work
- **[Workspace Name]** - [Status]
  - Workspace: [link](workspace/workspace-name.md)
  - Deliverable: [link](../documents/category/file.md)
  - Quick note: [One-line summary]
  - Next: [What's next]
```

### 7. Update Founder Checklist (If Needed)

If founder needs to review/approve, add to `roundtable/[your-name]-checklist.md`:

```markdown
## 🔴 High Priority
- [ ] Review [thing] - see workspace: `roundtable/workspace/[name].md`
  - Deliverable: `documents/[category]/[file].md`
  - Focus on: [What founder should pay attention to]
```

---

## Best Practices

### ✅ DO:
- **Check context first** - Don't re-read files already loaded (token efficiency!)
- **Ask questions** - If unclear, ask before creating
- **Search current best practices** - Check what year it is, search latest standards
- **Use workspace template** - `roundtable/templates/workspace-template.yaml`
- **Create TWO files** - Workspace (process) + Deliverable (clean output)
- **Include examples** - Show, don't just tell
- **Think about the user** - Who will use this and how?
- **Reference project context** - Connect to founder's goals
- **Update existing files** - Don't create v2 versions!

### ❌ DON'T:
- **Don't guess** - If you don't know, ask
- **Don't skip quality checks** - Use the checklists
- **Don't create generic content** - Make it specific to this project
- **Don't create versioned files** - Update `pitch-deck.md`, not `pitch-deck-v2.md`
- **Don't skip whiteboards** - Always update your section
- **Don't use outdated info** - Search for current best practices

---

## Graceful Handoffs

If another expert might be better suited:

```markdown
I can definitely create this for you, but [Expert Name] might be better suited because [reason]. 

Would you like me to:
1. Create it myself (I'm happy to!)
2. Bring [Expert] into the conversation
3. Hand this off to [Expert]

Your call - I'm here either way! 😊
```

**Never refuse** - always offer to help, but suggest better options if they exist.

---

## Examples

### Example 1: Creating a Spec

**Founder:** `@denny @create spec for authentication system`

**Denny's Process:**
1. Checks context (project files already loaded?)
2. Asks: "What type of auth? (OAuth, email/password, biometric?)"
3. Searches "current year authentication best practices"
4. Creates workspace: `roundtable/workspace/auth-spec.md`
5. Creates deliverable: `documents/tech/auth-spec.md`
6. Documents decisions and approach IN workspace
7. Runs `system/checklists/spec-checklist.md`
8. Updates `roundtable/whiteboards.md` with his section
9. Adds to `roundtable/[your-name]-checklist.md` if review needed
10. "Auth spec ready! Check `documents/tech/auth-spec.md`"

### Example 2: Creating a Pitch Deck

**Founder:** `@lyna @create pitch deck`

**Lyna's Process:**
1. Checks context (founder-profile, project-kb already loaded?)
2. Asks: "Who's the audience? (VCs, angels, customers?)"
3. Searches "current year pitch deck best practices investor trends"
4. Creates workspace: `roundtable/workspace/investor-pitch.md`
5. Creates deliverable: `documents/investor/pitch-deck.md`
6. Documents strategy and decisions IN workspace
7. Runs `system/checklists/content-checklist.md`
8. Updates `roundtable/whiteboards.md` with her section
9. Adds to `roundtable/[your-name]-checklist.md` for review
10. "Pitch deck ready! Check `documents/investor/pitch-deck.md`"

---

## Notes

- **Follow expert workflow** - Each expert has their workflow in their expert file
- **Workspace = collaboration** - Where experts document process and decisions
- **Deliverable = clean output** - What founder sees/uses/shares
- **Stay adaptable** - Create value even if there's no specific workflow for something
- **Quality matters** - Don't rush, do it right

---

## Related Commands & Patterns

**Flow Commands (Structured Workflows):**
- `@create-specflow [feature]` - Create technical spec with TDD enforcement
- `@execute-specflow [feature]` - Execute spec with mandatory QA

**Patterns (Reference):**
- `pro-os/system/patterns/universal.md` - Universal command workflow (this command follows this)
- `pro-os/system/patterns/spec.md` - Comprehensive spec pattern (includes TDD)
- `pro-os/system/patterns/workspace.md` - Simple vs Complex workspaces

**Universal Commands (Flexible Workflows):**
- `@execute` - Execute/implement anything
- `@analyze` - Deep analysis
- `@review` - Review work
- `@update` - Modify existing work

---

**Remember:** Creating something is more than just generating content - it's understanding the need, searching current best practices, crafting the right solution, documenting your process, and setting up for success. Take your time, ask questions, and make it great! ✨

