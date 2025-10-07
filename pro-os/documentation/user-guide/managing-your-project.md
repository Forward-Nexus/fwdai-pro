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

**Genna's Process:**

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
   - `project/project-kb.md`
   - `pro-os/config.yaml`
   - Activates/deactivates experts if needed

5. **Notifies Experts:**
   ```
   ✅ Project context updated!
   All experts now know about your tech stack changes.
   ```

---

## Manual Updates

You can also update project files manually.

### Updating project-kb.md

**File:** `.fwdpro/project/project-kb.md`

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
progress tracking, and LiNa (AI life navigator).

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
- Building features (Denny + Ada active)
- Investor materials (Lyna active)
- Marketing/growth (Benji active)

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

**When Genna asks:**
- Why this project matters to YOU
- The problem you're solving
- Your solution and what makes it different
- Vision for the future
- Success metrics

**Creates:** `project/mission.md`

**Example Output:**
```markdown
# ODAT Mission & Purpose

## Why ODAT Exists
After 14 years trying to get sober, I finally made it on 9/26/24.
I built what I needed - daily support for the hardest journey of my life.

## The Problem
People in recovery are alone between meetings. At 2am when you're
struggling, there's nothing. You need something EVERY DAY.

## Our Solution
LiNa - an AI life navigator who knows your story, celebrates day 3
differently than day 300, and is WITH you one day at a time.

## Vision
Life navigation for everyone - recovery, mental health, grief, chronic
illness. Anywhere you need to navigate life one day at a time.

## Success
When someone says: "I made it through today because of LiNa."
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

**Genna asks about:**
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

**Experts Can Now Say:**
```
@denny: "Have Sarah (your designer) create the UI for this"
@genna: "Want to run this by John (your technical advisor)?"
@lyna: "Sarah Johnson (your angel) could intro you to VCs"
```

---

## Updating Founder Profile

### Using @update-founder-profile

```
@update-founder-profile
```

**Updates your GLOBAL profile** (applies to all projects!)

**When to Update:**
- Communication style changed
- Working preferences evolved
- Technical level increased
- Team situation changed (solo → hired people)
- Life changes affecting work

**Example:**
```
Current communication style: Casual/enthusiastic (c)
Want to change? [No] [Yes, update]
> Yes

New style:
d) Direct/no-fluff - Straight to the point

Confirmed! All experts will now be more direct.
This applies to ALL your FWD PRO projects.
```

---

## Regular Maintenance

### Weekly Tasks

**Every Monday:**
```
@rt-update

→ Team status check
→ What got done last week
→ What's planned this week
→ Any blockers
```

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
→ Align team
```

**Review:**
```
@update-founder-profile

→ Has working style changed?
→ Team situation different?
→ Communication preferences evolved?
```

---

## Keeping Whiteboards Current

**Experts manage whiteboards automatically**, but you can help:

### Check Whiteboards Daily

**Location:** `.fwdpro/roundtable/whiteboards.md`

**Look for:**
- What experts are working on
- Handoffs waiting for you
- Questions experts have
- Blockers you can help with

### Respond to Expert Questions

**On whiteboards, experts post questions:**

**Denny:**
> "Ward, should we use JWT or session-based auth?"

**You respond:**
> "@denny let's go with JWT - we'll need mobile + web"

**Denny updates:**
> "Got it! Proceeding with JWT."

---

## Managing Your Checklist

**Location:** `.fwdpro/roundtable/founder-checklist.md`

### Review Daily

```markdown
# Your Action Items

## 🔥 High Priority
- [ ] Approve auth spec (Denny needs this)
- [ ] Provide user metrics (Lyna waiting)

## 📋 Regular Priority
- [ ] Test staging deployment (Ada)
- [ ] Review landing page copy (Benji)

## 💡 For Later
- [ ] Consider 90-day milestone feature
- [ ] Think about which VCs to approach
```

### Complete Items

**Check them off:**
```markdown
- [x] Approve auth spec ✅ Approved!
```

**Experts see your completion:**
```
Denny: Great! Handing off to Ada now.
```

---

## Workspace Hygiene

### Clean Up Regularly

**Monthly cleanup:**
```bash
# Move completed drafts to archive
mv .fwdpro/roundtable/workspace/old-spec-draft.md \
   .fwdpro/roundtable/workspace/archive/
```

### What to Keep

**Keep in workspace/:**
- ✅ Current drafts
- ✅ Active iterations
- ✅ Work in progress

**Move to archive/:**
- ❌ Completed drafts
- ❌ Old versions
- ❌ Superseded work

### What to Delete

**Safe to delete:**
- Very old archived files (6+ months)
- Duplicate files
- Test files

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
- Goals changed, but experts don't know
- Tech stack evolved, specs are outdated
- Team grew, but experts don't reference them

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
@rt-update
→ Are we aligned?
→ Any drift detected?
```

---

## Multi-Project Management

**See:** `multi-project-usage.md`

**Quick version:**

### Switch Projects

```bash
cd ~/projects/odat-app/
@genna catch me up
```

```bash
cd ~/projects/telecom-tool/
@genna catch me up
```

### View Portfolio

```
@show-projects

→ See all projects
→ Which needs attention?
→ Where are experts allocated?
```

### Update Across Projects

```
@update-founder-profile

→ Changes apply to ALL projects
→ Communication style, preferences, etc.
```

---

## Troubleshooting Context Issues

### Experts Seem Confused?

**Solution 1: Update context**
```
@update-project
→ Scans and refreshes
```

**Solution 2: Start fresh**
```
@newthread
→ Clears conversation
→ Project context remains
```

**Solution 3: Manually correct**
```
@genna FYI - we pivoted from B2C to B2B last month
→ Genna updates context
```

### Experts Have Old Info?

**Check:**
```bash
# When was project-kb.md last updated?
ls -la .fwdpro/project/project-kb.md
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
- Weekly: Check whiteboards & checklist
- Monthly: `@update-project`
- Quarterly: Review all context files

### 2. Communicate Major Changes

When something big happens:
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
- Archive old drafts
- Delete duplicates
- Keep documents organized

---

## Advanced: Manual Context Editing

### Direct File Editing

**You can edit context files directly:**

```bash
# Edit project knowledge base
vim .fwdpro/project/project-kb.md

# Edit mission
vim .fwdpro/project/mission.md

# Edit people
vim .fwdpro/project/people.md
```

**Experts see changes immediately!**

### Configuration Editing

**Advanced users can edit config:**

```bash
vim .fwdpro/pro-os/config.yaml
```

**See:** `customization.md` for details

---

## Quick Reference

### Update Commands

| Command | Updates | Frequency |
|---------|---------|-----------|
| @update-project | Project context | Every 2-4 weeks |
| @update-founder-profile | Your preferences (global) | Every 3-6 months |
| @update-mission | Your "why" | Every 6 months |
| @update-people | Team/advisors | As changes happen |
| @rt-update | Team status | Every Monday |

### Files to Keep Current

| File | What | How |
|------|------|-----|
| project-kb.md | Project facts | @update-project |
| mission.md | Your "why" | @update-mission |
| people.md | Team/network | @update-people |
| founder-profile.md | Your preferences | @update-founder-profile |
| whiteboards.md | Team status | Experts manage |

---

## Next Steps

**Use multiple projects:**
→ Read `multi-project-usage.md`

**Work with existing projects:**
→ Read `working-with-existing-projects.md`

**Customize your system:**
→ Read `customization.md`

**Fix issues:**
→ Read `troubleshooting.md`

---

**Keep your project context current - experts work better with fresh info! 🎯**

