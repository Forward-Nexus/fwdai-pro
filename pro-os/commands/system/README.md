# System Commands

**Purpose:** Commands for managing FWD PRO itself (configuration, setup, updates)

---

## What Are System Commands?

System commands manage your FWD PRO setup, not your project work. They handle:
- Configuration updates
- Onboarding changes
- Expert activation
- Profile updates
- System maintenance

**These are different from:**
- **Universal commands** (@create, @execute, @analyze) - For doing work
- **Quick commands** (@create-spec, @create-pitch-deck) - Optimized workflows

---

## Available System Commands

### **@update-project** ⭐ Most Common
**Expert:** Genna  
**Purpose:** Scan project and update context (stage, goals, tech stack, team size)

**Use when:**
- Stage changed (MVP → Launched)
- Goals shifted
- Tech stack changed
- Major milestone reached
- Project feels out of date

**What it does:**
- Scans project for changes (README, git, dependencies)
- Asks clarifying questions
- Updates project-kb.md, config.yaml
- Activates/deactivates experts as needed

**Plain language works too:**
- "update my project context"
- "scan project for changes"
- "my project stage changed"

---

### **@update-onboarding**
**Expert:** Genna  
**Purpose:** Re-run onboarding wizard to reconfigure FWD PRO

**Use when:**
- Work types changed (started fundraising, stopped coding)
- Communication style changed globally
- Need to add domain expert
- Major project pivot
- Want to reconfigure everything

**What it does:**
- Re-runs onboarding questions (quick or full)
- Updates configuration
- Activates/deactivates experts
- Preserves all your work

**Plain language works too:**
- "re-run onboarding"
- "reconfigure FWD PRO"
- "I want to change my work types"
- "add domain expert"

---

### **@update-founder-profile**
**Expert:** Genna  
**Purpose:** Update your personal preferences and working style (global)

**Use when:**
- Communication style evolved
- Working preferences changed
- Technical level changed
- Team situation changed (solo → team)
- Life changes affecting how you work

**What it does:**
- Reviews current founder-profile.md (global file)
- Asks what changed
- Updates your profile
- ALL experts adapt immediately across ALL projects

**Plain language works too:**
- "update my profile"
- "change how experts talk to me"
- "update my communication style"
- "I'm more technical now"

---

### **@update-mission**
**Expert:** Genna  
**Purpose:** Update your project's mission and vision

**Use when:**
- Vision clarified
- Purpose evolved
- Story deepened
- Want to articulate "why"
- Preparing for investors (need clear mission)
- Onboarding team (need mission doc)

**What it does:**
- Reviews current mission (or creates if missing)
- Asks deep questions about your "why"
- Helps you articulate purpose
- Updates mission.md
- Helps Lyna with investor narrative
- Helps Benji with marketing positioning

**Plain language works too:**
- "update my mission"
- "help me clarify my vision"
- "my why has evolved"
- "write my mission statement"

---

### **@update-people**
**Expert:** Genna  
**Purpose:** Update team, advisors, investors, key relationships

**Use when:**
- Hired someone
- Got an advisor
- Raised money (investors)
- Key customer/partner
- Someone left
- Role changes

**What it does:**
- Asks about new people
- Updates people.md
- Helps experts understand your network
- Experts can suggest involving right people
- Tracks team growth

**Plain language works too:**
- "add team member"
- "I hired someone"
- "update my team"
- "we got an advisor"
- "we raised money"

---

### **@show-projects**
**Expert:** Genna  
**Purpose:** View all your FWD PRO projects in one dashboard

**Use when:**
- Want to see all projects at once
- Switching between projects
- Checking what's active
- Portfolio review
- See expert distribution

**What it does:**
- Shows all projects using your founder profile
- Current activity across projects
- Expert allocation
- Quick links to any project
- Recent activity timeline

**Plain language works too:**
- "show my projects"
- "what am I working on"
- "list my projects"
- "portfolio view"

---

## How System Commands Work

### Natural Language Understanding

FWD PRO experts understand plain language! You don't need exact command syntax:

**These all work:**
```
@genna update my project
@update-project
@genna my project changed, can you update it?
@genna scan my project for updates
```

**These all work:**
```
@update-onboarding
@genna re-run onboarding
@genna I want to change my work types
```

**Command files help AI understand:**
- What you're trying to do
- What questions to ask
- What files to update
- Best workflow to follow

---

## When to Use Each

| You Want To... | Use This Command |
|----------------|------------------|
| Update project facts (stage, goals, tech) | `@update-project` |
| Change work types (add/remove experts) | `@update-onboarding` |
| Change communication style | `@update-onboarding` or `@update-founder-profile` |
| Add domain expert | `@update-onboarding` |
| Update team/advisors/investors | `@update-people` |
| Update vision/purpose | `@update-mission` |
| Full reconfiguration | `@update-onboarding` (full) |

---

## System Commands vs. Work Commands

**System commands** = Configure FWD PRO
- Update setup
- Change experts
- Update context
- Manage configuration

**Work commands** = Get work done
- Create deliverables
- Build features
- Analyze data
- Review content

**Example:**
```
@update-project              ← System command (update setup)
@create-spec authentication  ← Work command (create deliverable)
```

---

## File Locations

System commands are in:
```
pro-os/commands/system/
├── README.md (this file)
├── update-project.md
├── update-onboarding.md
├── update-founder-profile.md
├── update-mission.md
└── update-people.md
```

---

## Safety

**All system commands are safe:**
- ✅ Never delete your work (workspaces, documents)
- ✅ Always ask before making changes
- ✅ Show preview of what will change
- ✅ Can undo by editing files manually
- ✅ Back up config before major changes

**Your work is protected:**
- roundtable/ - Never touched by system commands
- documents/ - Never touched by system commands
- Only configuration files are updated

---

## Related Documentation

- **User Guide:** `user-guide/managing-your-project.md`
- **Commands Guide:** `user-guide/commands-guide.md`
- **Quick Commands:** `commands/quick/`
- **Universal Commands:** `commands/`

---

**System commands keep FWD PRO configured for YOU as your project evolves!** ⚙️

