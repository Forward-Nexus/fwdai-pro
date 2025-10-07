# Quick Commands

**Purpose:** Pre-configured shortcuts for common tasks with optimized workflows.

---

## What Are Quick Commands?

Quick commands are **shortcuts** that combine:
- **Specific workflow** - Optimized for that exact task
- **Smart questions** - Knows what to ask for that deliverable
- **Best practices** - Built-in current standards search
- **Right expert** - Routes to the correct expert automatically

They're convenience commands for tasks founders do frequently.

---

## Universal vs Quick Commands

### **Universal Commands** (Basic)
```
@create pitch deck
@execute launch campaign
@analyze competitors
```
- Generic and flexible
- Work for anything
- AI figures out the workflow

### **Quick Commands** (Power User)
```
@create-pitch-deck
@launch-campaign
@analyze-competitors
```
- Pre-configured workflow
- Optimized questions
- Faster and more consistent

**Both work!** Quick commands are just shortcuts.

---

## Available Quick Commands

### **Technical** 🔧
- `@create-spec` - Technical specification (Denny)
- `@create-feature` - Full workflow: spec → implementation (Denny → Ada)

### **Business** 💼
- `@create-pitch-deck` - Investor pitch deck (Lyna)
- `@analyze-competitors` - Competitive analysis (Genna/Lyna)

### **Growth** 📊
- `@launch-campaign` - Marketing campaign (Benji)

### **Roundtable** 🎯
- `@rt [deliverable]` - All experts review something
- `@rt-update` - Weekly status review across all work

---

## How to Use Quick Commands

### Simple Usage:
```
@create-spec authentication system
@create-pitch-deck
@launch-campaign for product launch
@rt pitch-deck
@rt-update
```

The command will:
1. **Ask smart questions** (only what's needed for THAT task)
2. **Search current best practices** (check what year it is!)
3. **Follow optimized workflow** (specific to that deliverable)
4. **Create workspace + deliverable** (standard pattern)
5. **Update roundtable** (whiteboards + checklist)

---

## Creating Your Own Quick Commands

Want a custom quick command for YOUR common tasks?

**Example:** `@pitch-to-vcs` (your specific VC pitch workflow)

### Steps:

1. **Copy the template:**
   ```
   cp commands/quick/_TEMPLATE.md commands/quick/pitch-to-vcs.md
   ```

2. **Define your workflow:**
   - What questions to ask?
   - What's the specific process?
   - What deliverables?
   - Which expert(s)?

3. **Reference universal standards:**
   - `system/standards/workflow-standards.md`
   - `system/checklists/[appropriate-checklist].md`
   - Current best practices search

4. **Use it:**
   ```
   @pitch-to-vcs
   ```

### Template Structure:
```markdown
# @your-command

**Purpose:** [What this command does]

**Expert:** [Which expert handles this]

## Smart Questions
[Context-aware questions - only ask what's missing]

## Workflow
[Specific optimized process for THIS task]

## Quality Standards
[Checklists and standards to follow]

## Output
[What gets created and where]
```

---

## When to Create Quick Commands

**Create a quick command when:**
- ✅ You do this task frequently (weekly/monthly)
- ✅ The task has a specific, repeatable workflow
- ✅ There are specific questions/requirements for this task
- ✅ You want consistency across iterations

**Don't create a quick command when:**
- ❌ It's a one-time task
- ❌ Universal commands work fine
- ❌ The workflow is too variable

---

## Best Practices for Quick Commands

### ✅ DO:
- **Keep it specific** - One clear purpose
- **Smart questions** - Context-aware, don't ask what you know
- **Reference standards** - Don't duplicate, reference existing
- **Test it** - Make sure it works smoothly
- **Document it** - Clear purpose and usage

### ❌ DON'T:
- **Don't duplicate universal commands** - Add value with specificity
- **Don't over-complicate** - Keep the workflow clear
- **Don't forget current best practices** - Always search for latest
- **Don't skip quality checks** - Reference appropriate checklists

---

## Examples in Action

### Example 1: @create-spec
```
Founder: @create-spec authentication system

AI (Denny):
"Creating auth spec! Quick questions:

1. What type of auth? (OAuth, email/password, biometric)
2. Any specific security requirements?

[Checks context - already knows tech stack from project-kb]

Searching current auth best practices...
Creating workspace + spec...
Done! Check documents/technical/auth-spec.md"
```

### Example 2: @rt pitch-deck
```
Founder: @rt pitch-deck

AI:
"Bringing all experts to review the pitch deck...

🎯 Genna: Strategic alignment looks good, consider emphasizing...
🔧 Denny: Technical claims are accurate, but simplify...
🌐 Lyna: Strong narrative! Suggest reordering slides...
⚖️ Elle: No legal red flags, verify competitor claims...

Review complete! See workspace for full feedback."
```

---

## Notes

- Quick commands are **optional** - universal commands work for everything
- Create quick commands for **your specific workflow**
- They're just **shortcuts** - not fundamentally different
- **Extensible** - build your own command library over time

---

**Remember:** Start with universal commands, create quick commands for tasks you do repeatedly. Keep it simple, keep it useful! ⚡

