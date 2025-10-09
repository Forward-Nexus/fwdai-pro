# Commands - Quick Facts

**Quick reference for all FWD PRO commands**

---

## Universal Commands

**@create** - Create new deliverables (specs, docs, designs, etc.)

**@execute** - Build/implement something (code, features, systems)

**@analyze** - Research and analyze topics, competitors, data

**@review** - Review work and provide feedback

**@update** - Update existing deliverables

**@fix** - Fix bugs, errors, or problems

**@research** - Deep research on any topic

**@brainstorm** - Generate ideas and explore options

**@plan** - Create project plans and roadmaps

---

## Flow Commands

**@create-specflow** - Create technical specification with TDD structure

**@execute-specflow** - Implement spec with TDD enforcement and mandatory QA

**@rt** - Roundtable review (all experts weigh in)

---

## System Commands

**@update-project** - Scan project and update ALL project documents (kb, mission, people, config)

**@update-kb** - Update just the knowledge base document

**@update-founder-profile** - Update your personal preferences (global)

**@update-mission** - Update project mission and vision

**@update-people** - Update team, advisors, investors

**@create-expert** - Create custom domain expert for your project

**@create-flow** - Create custom workflow command

---

## How to Use Commands

### Tag Format:
```
@command-name do the thing
@denny create auth spec
@create-specflow + @execute-specflow user authentication
```

### Plain Language Works Too:
```
create a technical spec for authentication
help me with my pitch deck
update my project context
```

---

## Where Commands Live

**ALL commands are always available!**

**Where to find them:**
- Universal commands: `pro-os/commands/` (create, execute, analyze, etc.)
- Flow commands: `pro-os/commands/flows/` (create-specflow, rt, etc.)
- System commands: `pro-os/commands/system/` (update-project, create-expert, etc.)
- Your shortcuts: `0-your-commands/` (convenient quick access)

**During onboarding, based on your work types, shortcuts are created in `0-your-commands/`:**
- Roundtable (always): rt
- Building-specific flow commands: create-specflow, execute-specflow

**System commands don't get shortcuts** - they're always available in `pro-os/commands/system/`

**Want to add/remove shortcuts?**
Just ask! Examples:
- "Add a shortcut to @analyze in my commands folder"
- "Add @research to my command shortcuts"
- "Remove the create-specflow shortcut"

The AI will create/remove symlinks for you!

---

## Creating Custom Commands

See: `pro-os/commands/system/create-flow.md`

Build your own optimized workflows!

---

**For detailed guides, see:** `user-docs/user-guide/`

