# System Command: Show Projects

**Command:** `@show-projects` or `@genna show my projects`  
**Expert:** Genna (Chief Architect)  
**Purpose:** View all your FWD PRO projects in one dashboard

---

## What This Command Does

Shows your complete FWD PRO portfolio:
- All projects using your founder profile
- Current activity across projects
- Expert allocation
- Quick links to any project
- Recent activity timeline

This is your **multi-project dashboard**.

---

## When to Use This

Use `@show-projects` when you want to:
- ✅ See all your projects at once
- ✅ Remember what you were working on
- ✅ Switch between projects (context refresh)
- ✅ Check which projects are active
- ✅ See expert distribution
- ✅ Get quick links to any project

---

## How It Works

```
User: @show-projects

Genna:
📊 Your FWD PRO Project Portfolio

You have 3 projects using FWD PRO:

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔥 PROJECT 1: ODAT App (MOST ACTIVE)
Location: ~/GitHub/odat-app/
Stage: Launched | Goal: 10K users by Q1 2026
Active: 5 days ago

Current Work:
  • authentication-feature (Ada - InProgress)
  • pitch-deck-v2 (Lyna - Draft)

Active Experts: Genna, Denny, Ada, Lyna
Quick Link: ~/GitHub/odat-app/roundtable/whiteboards.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📱 PROJECT 2: Telecom Tool
Location: ~/GitHub/telecom-tool/
Stage: MVP | Goal: 5 pilot customers
Active: 8 days ago

Current Work:
  • site-acquisition-feature (Denny - Review)

Active Experts: Genna, Denny, Ada, Elle
Quick Link: ~/GitHub/telecom-tool/roundtable/whiteboards.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

💤 PROJECT 3: Consulting Site (INACTIVE)
Location: ~/GitHub/consulting-site/
Stage: Idea | Last active: 47 days ago

Status: Paused
Quick Link: ~/GitHub/consulting-site/.fwdpro/project/project-kb.md

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 CROSS-PROJECT INSIGHTS

Most Active: ODAT App (5 commands in 7 days)

Expert Distribution:
  • Genna: 3 projects (always active)
  • Denny: 2 projects
  • Ada: 2 projects
  • Lyna: 1 project (ODAT)
  • Elle: 1 project (Telecom)
  • Benji: 1 project (Consulting - paused)

Your Domain Experts:
  • Bonnie Jo (Recovery) - Used in ODAT App
    Can activate in other projects!

Recent Activity (Last 7 days):
  Oct 6: @ada implement login (ODAT)
  Oct 5: @denny create auth spec (ODAT)
  Oct 3: @lyna finalize pitch deck (ODAT)
  Oct 1: @update-project (ODAT)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Want to:
  • Switch projects? @genna switch to [project name]
  • Update a project? @update-project (in that project)
  • See detailed view? Open ~/.fwdpro-global/projects.md
```

---

## Example Usage

### Quick Portfolio Check
```
@show-projects

→ See all 3 projects
→ ODAT is most active
→ Telecom needs attention (8 days)
→ Consulting is paused
```

### Before Context Switching
```
I'm about to work on telecom tool, what's the status?

@show-projects

→ See telecom is in Review
→ Denny QA-ing Ada's work
→ Can jump right in: @denny status?
```

### After Being Away
```
Haven't coded in a week, what am I working on?

@show-projects

→ See ODAT has 2 active workspaces
→ Authentication in progress
→ Pitch deck in draft
→ Can resume: @ada status on auth?
```

### Check Expert Availability
```
@show-projects

→ See Lyna only in ODAT
→ Could activate Lyna in Telecom for investor work
→ Or keep focused on ODAT
```

---

## What You'll See

### For Each Project:
- 📍 **Location** - Where the project lives
- 🎯 **Stage & Goal** - Current status and target
- ⏰ **Last Active** - When you last worked on it
- 🔄 **Current Work** - Active workspaces and their status
- 👥 **Active Experts** - Which experts are helping
- 🔗 **Quick Links** - Jump to Roundtable or KB

### Cross-Project View:
- 🔥 **Most Active** - Which project is hot
- 👥 **Expert Distribution** - Where experts are allocated
- 🌟 **Domain Experts** - Reusable custom experts
- 📅 **Recent Activity** - Timeline of commands
- 📊 **Work Distribution** - What types of work you're doing

---

## The Global Projects File

This command reads from:
```
~/.fwdpro-global/projects.md
```

**Auto-updated when:**
- Create new project (`npx @fwdai/pro install`)
- Run `@update-project` in any project
- Complete major milestones
- Use system commands

**You can also:**
- Open it directly to see full detail
- Edit it manually (not recommended - auto-syncs)
- Share it (it's just markdown!)

---

## Related Commands

### Switch Project Context
```
@genna switch to telecom tool

→ Genna loads telecom context
→ Shows current status
→ Ready to work on that project
```

### Update Current Project
```
@update-project

→ Scans current project
→ Updates global projects.md
→ Keeps dashboard current
```

### List Projects (CLI)
```bash
npx @fwdai/pro list

→ Terminal view of all projects
→ Quick status check
→ Can open specific project
```

---

## Multi-Project Workflow

### Typical Pattern:
1. **Morning:** `@show-projects` - What needs attention?
2. **Work on Project A:** Do some work
3. **Context Switch:** `@genna switch to project B`
4. **Work on Project B:** Do some work
5. **End of day:** `@show-projects` - What got done?

### Project Juggling:
```
# Check portfolio
@show-projects

# See ODAT needs pitch deck work
cd ~/GitHub/odat-app
@lyna let's finish the pitch deck

# Later, switch to telecom
cd ~/GitHub/telecom-tool
@genna catch me up on telecom
@show-projects  # Refresh context
```

---

## Privacy & Sharing

**Your global dashboard includes:**
- All projects using your founder profile
- Activity across projects
- Expert allocation

**Stored locally:**
- `~/.fwdpro-global/projects.md`
- Not shared unless you share it
- Auto-syncs from individual projects

**Safe to share:**
- It's just a markdown file
- No sensitive code/data
- Just project summaries
- Good for advisors/investors to see your portfolio!

---

## Tips

**Use it daily:**
- Quick morning check: What needs attention?
- Before switching: What's the context?
- End of day: What got done?

**Inactive projects:**
- Projects show as "INACTIVE" after 30 days
- They're still there, just flagged
- Easy to see what's paused

**Expert insights:**
- See which experts are spread thin
- See which projects could share experts
- See where domain experts could help

**Portfolio thinking:**
- View all your ventures at once
- See patterns in your work
- Identify what's working
- Spot what needs attention

---

**One command, complete visibility across all your projects!** 🎯

