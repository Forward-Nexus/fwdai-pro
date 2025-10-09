# Managing Your Project

**Keep your project context current and organized with FWD PRO**

---

## Overview

FWD PRO works best when it has current information about your project. This guide shows you how to keep everything up-to-date.

---

## The @update-project Command

**Most important system command!**

### When to Run

Run `@update-project` when:
- ✅ Major milestone reached
- ✅ Tech stack changed
- ✅ Goals shifted
- ✅ Team size changed
- ✅ Stage changed (MVP → Launched)
- ✅ Every 2-4 weeks (keep fresh)

### How It Works

```
@update-project
```

**Process:**

1. **Scans Your Project:**
   - README.md for description changes
   - package.json/requirements.txt for dependencies
   - git commits for major changes
   - New files for work type changes

2. **Detects Changes:**
   ```
   Detected changes:
   - Tech stack: Added Next.js
   - New goal in README: "Launch web version"
   - New dependency: @supabase/supabase-js
   ```

3. **Asks for Confirmation:**
   ```
   Should I update project-kb.md with:
   - Tech stack: React Native + Next.js (added web)
   - Goal: Launch web version by Q1 2025
   - Using Supabase for backend
   
   [Yes] [No] [Let me edit]
   ```

4. **Updates Files:**
   - `pro-os/project/project-kb.md`
   - `pro-os/project/config.yaml`
   - Updates expert shortcuts in `0-your-experts/` if work types changed

5. **Notifies Experts:**
   ```
   ✅ Project context updated!
   All experts now have current information.
   ```

**Note:** ALL experts are ALWAYS available to tag! Work type changes just update which expert shortcuts appear in `0-your-experts/` for convenience.

---

## Manual Updates

You can also update project files manually.

### Updating project-kb.md

**File:** `.fwdpro/pro-os/project/project-kb.md`

**Sections to Update:**

```markdown
# Project Knowledge Base - ODAT

## Project Overview
**Name:** ODAT  
**Full Name:** One Day at a Time  
**Type:** Mobile app (iOS + Android)
**Industry:** Recovery/Mental Health

**What is this project?**
Mobile app for addiction recovery support through daily check-ins,
progress tracking, and AI assistance.

← UPDATE when project description changes

## Current Stage
**Stage:** Launched  
**Launch Date:** September 2024  
**Traction:** 1,500 users (as of Oct 2024)

← UPDATE regularly with metrics

## Goals
**Primary Goal:** 10,000 users by Q1 2026  
**Secondary Goals:**
- Raise seed round ($1-2M)
- Launch web version
- Expand to grief/mental health

← UPDATE when goals shift

## Tech Stack
**Frontend:** React Native, TypeScript, Expo  
**Backend:** Supabase (PostgreSQL)  
**AI:** Claude (Sonnet)  
**Hosting:** Vercel (web), EAS (mobile)

← UPDATE when tech changes

## Team
**Size:** Solo founder + 1 designer  
**Roles:**
- Ward: Founder, product, development
- Sarah: UI/UX designer (part-time)

← UPDATE when team changes

## Current Challenges
1. User retention after first week
2. Fundraising (preparing pitch)
3. Scaling infrastructure for growth

← UPDATE regularly

## Work Focus
**Current Work Types:**
- Building features (Denny + Ada shortcuts in 0-your-experts/)
- Investor materials (Lyna shortcut in 0-your-experts/)
- Marketing/growth (Benji shortcut in 0-your-experts/)

← UPDATE when focus shifts
```

**After manual edit:**
```
All experts see your changes immediately!
No command needed.
```

---

## Updating Mission

### Using @update-mission

```
@update-mission
```

**When AI asks:**
- Why this project matters to YOU
- The problem you're solving
- Your solution and what makes it different
- Vision for the future
- Success metrics

**Creates:** `project/mission.md`

**Example Output:**
```markdown
# Your Project Mission & Purpose

## Why This Project Exists
After 14 years trying to get sober, I finally made it on 9/26/24.
I built what I needed - daily support for the hardest journey of my life.

## The Problem
People in recovery are alone between meetings. At 2am when you're
struggling, there's nothing. You need something EVERY DAY.

## Our Solution
AI companion who knows your story, celebrates day 3
differently than day 300, and is WITH you one day at a time.

## Vision
Life navigation for everyone - recovery, mental health, grief, chronic
illness. Anywhere you need to navigate life one day at a time.

## Success
When someone says: "I made it through today because of this app."
(Goal: 10,000 users by Q1 2026, but real metric is lives changed)
```

**Used By:**
- Lyna (investor pitches)
- Benji (marketing messaging)
- All experts (understanding your "why")

---

## Updating Team & People

### Using @update-people

```
@update-people
```

**AI asks about:**
- Team members
- Advisors/mentors
- Investors
- Key customers
- Industry connections

**Example Interaction:**
```
Did you hire anyone? [Yes] [No]
> Yes

Great! Tell me about them:
Name: Sarah Chen
Role: Designer
Started: Oct 1, 2024
Context: UI/UX designer, 5 years experience, redesigning app

Got an advisor? [Yes] [No]
> Yes

Name: John Smith
Area: Technical architecture
Background: Former CTO at TechCo, scaled to 1M users
Value: Reviews Denny's architecture, scaling strategy
```

**Creates:** `project/people.md`

**Experts Can Now Reference:**
```
@denny: "Have Sarah (your designer) create the UI for this"
@genna: "Want to run this by John (your technical advisor)?"
@lyna: "Sarah Johnson (your angel) could intro you to VCs"
```

---

## Updating Founder Profile

### Your Global Profile

**Location:** `~/.fwdpro-global/[your-name]-profile.md`

This profile is created during onboarding and applies to ALL your FWD PRO projects.

### What It Contains

```yaml
About You:
- Name and location
- Communication style preferences
- Working preferences
- Technical level
- Team situation
- Industries you work in
```

### When to Update

Update when your preferences change:
- Communication style evolved
- Working style changed
- Technical skills increased
- Team situation different (solo → hired team)

### How to Update

**Option 1: Edit directly**
```bash
# Edit your global profile
vim ~/.fwdpro-global/[your-name]-profile.md
```

**Option 2: Ask AI**
```
I want to update my communication preferences - I prefer more direct communication now
```

The AI will help update your profile.

**Changes apply to ALL your FWD PRO projects!**

---

## Regular Maintenance

### Daily Tasks

**Check your checklist:**
```bash
# Open your action items
open .fwdpro/0-roundtable/[your-name]-checklist.md
```

**Look for:**
- 🔥 High priority items needing your decision
- 📋 Regular tasks from experts
- Questions experts have for you

**Check whiteboards:**
```bash
# See what experts are working on
open .fwdpro/0-roundtable/whiteboards.md
```

**Look for:**
- What each expert is working on
- Handoffs between experts
- Blockers or questions
- Progress updates

### Weekly Tasks

**Review progress:**
```
Open .fwdpro/0-roundtable/whiteboards.md
```

See:
- What got completed this week
- What's in progress
- What's blocked
- What's planned for next week

### Monthly Tasks

**First of month:**
```
@update-project

→ Scan for changes
→ Update context
→ Keep experts current
```

**If fundraising:**
```
@lyna create monthly investor update

→ Metrics, wins, asks
→ Keep investors informed
```

### Quarterly Tasks

**Start of quarter:**
```
@genna help me plan roadmap for [quarter]

→ Strategic planning
→ Set priorities
→ Align on goals
```

---

## Keeping Whiteboards Current

**Experts manage whiteboards automatically**, but you should check them regularly.

### Check Whiteboards Daily

**Location:** `.fwdpro/0-roundtable/whiteboards.md`

**Look for:**
- What experts are working on
- Handoffs waiting for you
- Questions experts have
- Blockers you can help with

### Respond to Expert Questions

**On whiteboards, experts post questions:**

**Denny:**
> "Should we use JWT or session-based auth?"

**You respond:**
> "@denny let's go with JWT - we'll need mobile + web"

**Denny updates:**
> "Got it! Proceeding with JWT."

---

## Managing Your Checklist

**Location:** `.fwdpro/0-roundtable/[your-name]-checklist.md`

### Review Daily

**Example checklist:**
```markdown
# Your Action Items

## 🔥 High Priority - Needs Your Decision
| ✓ | Task | From | What to Do | Added |
|---|------|------|------------|-------|
| ☐ | **Approve auth spec** | Denny | Review and approve spec for Ada | Oct 9 |
| ☐ | **Provide user metrics** | Lyna | Need MAU, retention for pitch | Oct 9 |

## 📋 Regular Priority - This Week
| ✓ | Task | From | What to Do | Added |
|---|------|------|------------|-------|
| ☐ | **Test staging** | Ada | New feature ready to test | Oct 8 |
| ☐ | **Review copy** | Benji | Landing page needs approval | Oct 8 |

## 💡 Nice to Have - Optional
- [ ] Consider 90-day milestone feature (Bonnie Jo's suggestion)
- [ ] Think about which VCs to approach (Lyna)
```

### Complete Items

**Check them off in the file:**
```markdown
| ✓ | Task | From | What to Do | Added |
|---|------|------|------------|-------|
| ✅ | **Approve auth spec** | Denny | Approved! | Oct 9 |
```

**Or tell the AI:**
```
I approved the auth spec - let Denny know
```

**Experts see your completion and can proceed with their work.**

---

## Workspace Hygiene

### Clean Up Regularly

**Monthly cleanup:**
```bash
# Move completed workspaces to archive
mv .fwdpro/0-roundtable/workspace/old-spec-draft.md \
   .fwdpro/0-roundtable/workspace/archive/
```

### What to Keep

**Keep in workspace/:**
- ✅ Current drafts
- ✅ Active iterations
- ✅ Work in progress

**Move to archive/:**
- 📦 Completed workspaces (after founder approval)
- 📦 Old versions
- 📦 Superseded work

### What to Delete

**Safe to delete:**
- Very old archived files (6+ months)
- Duplicate files
- Test files

**Don't delete:**
- Current workspaces
- Recent archives (may need reference)
- Completed deliverables in `documents/`

---

## Documents Organization

### Keep Documents Organized

```
documents/
├── technical/
│   ├── auth-spec.md
│   ├── payment-spec.md
│   └── architecture.md
│
├── investor/
│   ├── pitch-deck.md
│   ├── investor-update-oct-2024.md
│   └── investor-update-nov-2024.md
│
├── marketing/
│   ├── marketing-plan.md
│   └── landing-page-copy.md
│
└── planning/
    ├── roadmap-q4-2024.md
    └── roadmap-q1-2025.md
```

### Version Control

**For important docs, keep versions:**
```
investor/
├── pitch-deck-v1.md (original)
├── pitch-deck-v2.md (after feedback)
└── pitch-deck.md (current)
```

**Or use Git:**
```bash
git log -- .fwdpro/documents/investor/pitch-deck.md
→ See full history
```

---

## Context Drift Prevention

### What is Context Drift?

**Problem:** Over time, FWD PRO's knowledge gets stale
- Goals changed, but project-kb.md is outdated
- Tech stack evolved, specs reflect old stack
- Team grew, but people.md isn't updated

**Solution:** Regular updates!

### Prevention Strategy

**Every 2-4 weeks:**
```
@update-project
→ 15 minutes to keep everything current
```

**When major changes happen:**
```
@update-project  # Tech/goals
@update-people   # Team changes
@update-mission  # Vision evolved
```

**Monthly review:**
```
Check .fwdpro/0-roundtable/whiteboards.md
→ Are we aligned?
→ Any confusion from experts?
```

---

## Multi-Project Management

### Working on Multiple Projects

If you have multiple projects using FWD PRO:

**Each project is separate:**
```
~/projects/odat-app/.fwdpro/          # Project A
~/projects/telecom-tool/.fwdpro/      # Project B
```

**Your global profile is shared:**
```
~/.fwdpro-global/[your-name]-profile.md
→ Communication preferences apply to all projects
```

### Switching Between Projects

**Open different workspace/window:**
- Each project has its own IDE workspace
- Open the project you want to work on
- Experts automatically load that project's context

**Example (in your IDE):**
```
File → Open Workspace → ~/projects/odat-app/
→ Work on ODAT, experts see ODAT context

File → Open Workspace → ~/projects/telecom-tool/
→ Work on telecom tool, experts see that context
```

**Projects are isolated** - working on one doesn't affect the other.

---

## Troubleshooting Context Issues

### Experts Seem Confused?

**Solution 1: Update context**
```
@update-project
→ Scans and refreshes
```

**Solution 2: Start new conversation**
```
Start a new conversation in your IDE
→ Fresh context
→ Project files remain intact
```

**Solution 3: Manually correct**
```
@genna FYI - we pivoted from B2C to B2B last month
→ Expert updates their understanding
```

### Experts Have Old Info?

**Check:**
```bash
# When was project-kb.md last updated?
ls -la .fwdpro/pro-os/project/project-kb.md
```

**Update:**
```
@update-project
```

---

## Best Practices

### 1. Update Context Regularly

Don't wait until experts are confused!

**Set reminders:**
- Daily: Check whiteboards & checklist
- Weekly: Review progress and blockers
- Monthly: `@update-project`
- Quarterly: Review all context files

### 2. Communicate Major Changes

When something big happens, tell the experts:
```
@genna FYI - we just raised $500K seed round
@genna FYI - hired 2 engineers
@genna FYI - pivoting to B2B
```

### 3. Keep Mission Current

Your "why" evolves. Update it!

```
@update-mission
→ Every 6 months or when story deepens
```

### 4. Document People

Add team, advisors, investors as you go:

```
@update-people
→ Experts can leverage your network
```

### 5. Clean Up Regularly

Don't let workspace get cluttered:
- Archive old drafts (with founder approval)
- Delete duplicates
- Keep documents organized

---

## Advanced: Manual Context Editing

### Direct File Editing

**You can edit context files directly:**

```bash
# Edit project knowledge base
vim .fwdpro/pro-os/project/project-kb.md

# Edit mission
vim .fwdpro/pro-os/project/mission.md

# Edit people
vim .fwdpro/pro-os/project/people.md
```

**Experts see changes immediately!**

---

## Quick Reference

### Update Commands

| Command | Updates | Frequency |
|---------|---------|-----------|
| @update-project | Project context | Every 2-4 weeks |
| @update-mission | Your "why" | Every 6 months |
| @update-people | Team/advisors | As changes happen |

### Files to Keep Current

| File | What | How |
|------|------|-----|
| project-kb.md | Project facts | @update-project or edit directly |
| mission.md | Your "why" | @update-mission or edit directly |
| people.md | Team/network | @update-people or edit directly |
| founder-profile.md | Your preferences (global) | Edit `~/.fwdpro-global/[name]-profile.md` |
| whiteboards.md | Team status | Experts manage automatically |

### Daily Checks

| File | Why |
|------|-----|
| `0-roundtable/whiteboards.md` | See what experts are working on |
| `0-roundtable/[your-name]-checklist.md` | See what needs your attention |

---

## Updating FWD PRO Itself

**Keep FWD PRO up to date to get new features, improvements, and bug fixes.**

### Quick Update

```bash
# Easiest way (preserves all your data)
npx @fwd-ai/pro update
```

### Using Package Managers

```bash
# Using pnpm
pnpm update @fwd-ai/pro

# Using npm
npm update @fwd-ai/pro

# Force latest version
pnpm add @fwd-ai/pro@latest
```

### What Gets Updated

✅ **System files** - Commands, expert profiles, templates  
✅ **Bug fixes** - Improvements and patches  
✅ **New features** - Latest FWD PRO capabilities  

❌ **Your data is preserved** - Documents, workspaces, settings stay intact

### When to Update

- 📢 When you see a new version announced
- 🐛 When you encounter a bug that's been fixed
- ✨ When you want new features
- 🔄 Every few months to stay current

**Updates are safe and non-destructive!** Your project files, expert customizations, and all documents are preserved.

---

## Next Steps

**Work with existing projects:**
→ Read `working-with-existing-projects.md`

**Fix issues:**
→ Read `troubleshooting.md`

**Learn all commands:**
→ Read `commands-guide.md`

---

**Keep your project context current - experts work better with fresh info! 🎯**
