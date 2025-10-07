# Claude Code Configuration

**These files enhance FWD PRO when using Claude Code (formerly Claude Dev).**

---

## What Gets Installed

When you choose Claude Code during onboarding, FWD PRO will:

1. **Set up project context**
   - Ensures Claude can find expert files
   - Optimizes file reading patterns
   - Configures workspace awareness

2. **Prepare for slash commands** (future)
   - `.claude/commands/` structure ready
   - Can add custom commands later
   - Integrated with FWD PRO experts

---

## How to Use in Claude Code

### Natural Language with Experts

Claude Code works beautifully with natural language:

```
Can you read the denny-systems-architect.md file and create 
a technical spec for user authentication?

Let's check the roundtable whiteboards and see what work is in progress.

@ada can you implement the feature in workspace/auth-feature.md?
```

### Reference FWD PRO Files

```
Read .fwdpro/roundtable/whiteboards.md and give me a status update

Check denny's whiteboard section and continue that work

Look at the founder checklist and help me with the next task
```

### Expert Collaboration

```
Act as @denny and create a technical specification for payment processing

Act as @genna and help me define our 5-year product vision

Act as @lyna and create a pitch deck outline for investors
```

---

## File Structure

```
your-project/
├── .claude/
│   ├── commands/            (future: custom slash commands)
│   └── README.md
│
├── .fwdpro/
│   ├── pro-os/
│   │   ├── experts/         ← Claude reads from here
│   │   └── commands/
│   └── roundtable/
│       ├── whiteboards.md
│       └── workspace/
```

---

## Claude's Strengths with FWD PRO

✅ **Excellent context awareness** - Claude naturally tracks conversation across files  
✅ **Strong with markdown** - Reads and writes FWD PRO files beautifully  
✅ **Natural role-playing** - "Act as @denny" works very well  
✅ **Long context window** - Can hold entire expert profiles and workspaces  

---

## Tips for Using Claude Code

### 1. Reference Expert Files Explicitly

```
Read .fwdpro/pro-os/experts/denny-systems-architect.md then 
create a spec for authentication following Denny's approach.
```

### 2. Use the Roundtable

```
Update .fwdpro/roundtable/whiteboards.md with the progress 
on the authentication spec. Add it to Denny's section.
```

### 3. Leverage Claude's Memory

Claude remembers context well, so you can say:

```
Continue working as Denny on that authentication spec

Add this task to the founder checklist

Update my whiteboard with the latest progress
```

---

## Future: Custom Slash Commands

We're planning to add `.claude/commands/` integration:

```
/denny-create-spec "user authentication"

/ada-implement workspace/auth-feature.md

/roundtable-update
```

This will make FWD PRO even more seamless in Claude Code!

---

## Configuration (Optional)

You can create a `.claude/config.json` to customize behavior:

```json
{
  "projectContext": [
    ".fwdpro/pro-os/experts",
    ".fwdpro/roundtable",
    ".fwdpro/config"
  ],
  "preferredExpert": "denny",
  "autoUpdateWhiteboards": true
}
```

*(Note: This is aspirational - actual Claude Code config may differ)*

---

## No Claude? No Problem!

FWD PRO works in any AI coding tool. Claude Code is just one option!

Works great in:
- Cursor
- VS Code (Copilot, Cline)
- Windsurf
- Any AI assistant

---

**Let's build!** 🤖

