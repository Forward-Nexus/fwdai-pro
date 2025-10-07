# Working with Existing Projects

**Install FWD PRO in a project that's already been started (brownfield adoption)**

---

## Overview

FWD PRO works great with existing projects! This guide shows you how to add FWD PRO to a project you've already been working on.

---

## The Good News

✅ FWD PRO doesn't touch your code  
✅ Everything lives in `.fwdpro/` folder  
✅ Your project structure stays the same  
✅ Git history untouched  
✅ Can uninstall cleanly if needed  

**FWD PRO adds a collaboration layer - your code stays yours!**

---

## Installation Process

### Step 1: Navigate to Project

```bash
cd ~/projects/my-existing-project/
```

### Step 2: Run Installer

```bash
npx @fwdai/pro install
```

### Step 3: Onboarding with Existing Project

**FWD PRO detects this is an existing project!**

```
🔍 Detecting existing project...

Found:
  - package.json (Node.js project)
  - React Native app
  - 1,247 commits
  - Last commit: 2 days ago

This looks like an active project! I'll scan it and pre-fill
your onboarding answers.

Continue? [Yes]
```

---

## Smart Project Scanning

FWD PRO scans your project during onboarding:

### What It Detects

**1. Project Name**
```
Found in package.json: "odat-app"
Use "ODAT" as project name? [Yes] [Edit]
```

**2. Project Description**
```
Found in README.md:
"Mobile app for addiction recovery support"

Use this description? [Yes] [Edit]
```

**3. Tech Stack**
```
Detected technologies:
✓ React Native
✓ TypeScript  
✓ Expo
✓ Supabase
✓ PostgreSQL

Correct? [Yes] [Edit]
```

**4. Current Stage**
```
Evidence suggests: Launched
  - Version: 1.2.0
  - App Store listing found
  - Production deployment detected

Stage: [Launched] [MVP] [Idea] [Scaling]
```

**5. Git History**
```
Analyzing 1,247 commits...
Recent focus areas:
  - Authentication (40 commits)
  - User profiles (28 commits)
  - Push notifications (15 commits)

Your main work types: Building features
```

**6. Team Size**
```
Git contributors: 2 people
  - Ward (95% of commits)
  - Sarah (5% of commits)

Team: [Solo + contractor] [Small team] [Edit]
```

### What You Still Need to Answer

**Personal info** (can't detect!):
- Communication style
- Working preferences
- Your "why" / mission
- Goals and challenges

**The rest is pre-filled!**

---

## After Installation

### What Got Created

```
my-existing-project/
├── .fwdpro/                  ← NEW! FWD PRO system
│   ├── pro-os/
│   ├── your-experts/
│   ├── your-commands/
│   ├── project/
│   │   └── project-kb.md     ← Pre-filled from scan!
│   ├── roundtable/
│   └── documents/
│
├── src/                      ← UNTOUCHED! Your code
├── package.json              ← UNTOUCHED!
├── README.md                 ← UNTOUCHED!
└── .git/                     ← UNTOUCHED!
```

**Only `.fwdpro/` was added!**

---

## First Steps with Existing Project

### 1. Review What Was Detected

Check `.fwdpro/project/project-kb.md`:

```markdown
# Project Knowledge Base - ODAT

## Project Overview
**Name:** ODAT
**Type:** Mobile app (React Native)
**Industry:** Recovery/Mental Health

← Auto-detected from scan

## Tech Stack
**Frontend:** React Native, TypeScript, Expo
**Backend:** Supabase (PostgreSQL)

← Auto-detected from dependencies

## Current Stage
**Stage:** Launched
**Version:** 1.2.0
**Evidence:** App Store listing, production deployment

← Auto-detected from git history
```

**Correct anything that's wrong!**

### 2. Add Context the Scanner Couldn't Know

**Your Mission:**
```
@update-mission

→ Tell your story
→ Why you're building this
→ Vision
```

**Your Team:**
```
@update-people

→ Add advisors
→ Add investors
→ Add key customers
```

**Current Goals:**
```
Edit project-kb.md:
→ Add specific goals
→ Add current challenges
→ Clarify priorities
```

### 3. Review Architecture with Denny

```
@denny review my current architecture

Location: src/
```

**Denny will:**
- Analyze your code structure
- Note architecture patterns
- Suggest improvements
- Document current state

**Output:** `documents/technical/architecture-review.md`

### 4. Get Expert Recommendations

```
@rt what should we focus on next?

→ All experts review your project
→ Each suggests priorities
→ Genna synthesizes recommendations
```

---

## Common Scenarios

### Scenario 1: Mid-Build Project

**Situation:** Halfway through building MVP

**After Install:**
```
@denny document our current progress

→ Denny creates:
  - Feature inventory
  - What's built
  - What's planned
  - Tech debt notes
```

```
@genna help me prioritize remaining work

→ Genna creates roadmap for completion
```

### Scenario 2: Launched Product

**Situation:** App is live with users

**After Install:**
```
@lyna I need to raise money

→ Lyna reviews traction
→ Creates pitch deck
→ Leverages existing metrics
```

```
@benji create growth plan

→ Benji analyzes current users
→ Suggests acquisition channels
```

### Scenario 3: Technical Debt Cleanup

**Situation:** Works but messy codebase

**After Install:**
```
@denny audit our codebase for tech debt

→ Denny identifies issues
→ Prioritizes what to fix
→ Creates cleanup plan
```

```
@ada help me refactor [module]

→ Ada refactors code
→ Maintains functionality
→ Improves structure
```

### Scenario 4: Pivot Planning

**Situation:** Considering major pivot

**After Install:**
```
@genna we're thinking about pivoting to B2B

→ Genna analyzes implications
→ Consults all experts
→ Provides recommendation
```

```
@lyna how does this affect fundraising?
@denny what's the technical lift?
@benji what's the market opportunity?
```

---

## Integrating with Existing Workflows

### You Already Have Documentation?

**Great! Reference it:**

```markdown
<!-- In project-kb.md -->

## Existing Documentation
- Technical docs: docs/technical/
- API docs: docs/api/
- Architecture: docs/architecture.md

Experts can reference these!
```

### You Already Have a Roadmap?

**Import it:**

```bash
cp docs/roadmap.md .fwdpro/documents/planning/roadmap.md
```

**Then:**
```
@genna review our existing roadmap

→ Genna provides feedback
→ Suggests updates
→ Helps refine
```

### You Already Have Team Processes?

**Document them:**

```markdown
<!-- In project-kb.md -->

## Team Processes
- Code review: All PRs reviewed by Ward
- Deployment: Tuesdays & Thursdays
- Standup: Mon/Wed/Fri 9am
- Sprint: 2-week cycles

Experts will respect these processes!
```

---

## Handling Legacy Code

### Let Experts Analyze Gradually

**Don't try to document everything at once!**

**Instead:**
```
@denny review the auth module

→ Denny analyzes just that module
→ Creates spec for just that area
```

**Then:**
```
@denny review the payment module

→ Build up documentation over time
```

### Modernization Strategy

**If code is old:**

```
@denny audit our codebase

→ Denny identifies:
  - What's good
  - What's outdated
  - What needs refactoring
  - Priority order
```

```
@genna create modernization roadmap

→ Genna plans incremental updates
→ Balances new features + tech debt
```

---

## Migration from Other Systems

### From BMAD

**Similar model!**

**Key differences:**
- BMAD: Single markdown file
- FWD PRO: Folder structure + commands

**Migration:**
```bash
# Your BMAD file might have project context
# Copy relevant sections to project-kb.md

# Copy mission/vision
vim .fwdpro/project/mission.md

# Import any specs to documents/
cp bmad-specs/*.md .fwdpro/documents/technical/
```

### From Agent/OS

**If you used Agent/OS:**

**Migration:**
```bash
# Agent definitions → Can inspire domain expert
# Copy workflows → Can become custom commands
# Project knowledge → Goes to project-kb.md
```

### From Cursor/Claude Alone

**If you've been using AI without structure:**

**Now you get:**
- ✅ Organized outputs
- ✅ Persistent context
- ✅ Multiple expert perspectives
- ✅ Clean collaboration space

**Ask experts to document what exists:**
```
@denny please document our current architecture
@lyna create pitch deck from what we have
```

---

## .gitignore Configuration

FWD PRO comes with `.gitignore` configured, but review it:

```bash
# View what's tracked
cat .fwdpro/.gitignore
```

**Typically tracked:**
- ✅ Project context (project-kb, mission, people)
- ✅ Roundtable (whiteboards, checklist)
- ✅ Documents (final deliverables)
- ✅ System files (experts, commands)

**Typically ignored:**
- ❌ Workspace drafts (too messy)
- ❌ Your favorite symlinks (personal preference)
- ❌ Global profile (private)

**Adjust as needed for your team!**

---

## Team Onboarding

**If you have a team, onboard them:**

### For Team Members

**Share:**
1. `.fwdpro/README.md` - Quick start
2. `documentation/user-guide/getting-started.md` - Full guide
3. `roundtable/whiteboards.md` - Current work

**Show them:**
```
Check whiteboards.md daily
Check founder-checklist.md for your tasks
Use @create-spec, @create-feature commands
```

### For Contractors/Part-Time

**Give access to:**
- Documents folder (final outputs)
- Their specific workspace files
- Relevant specs

**They don't need:**
- Full FWD PRO access
- To understand the whole system
- To interact with experts (unless they want to!)

---

## Measuring Success

### After 1 Week

**Check:**
- [ ] Context updated (project-kb, mission, people)
- [ ] Experts reviewed current work
- [ ] First spec or document created
- [ ] Whiteboards actively used

### After 1 Month

**Check:**
- [ ] Regular @rt-update every Monday
- [ ] Multiple deliverables in documents/
- [ ] Team using experts effectively
- [ ] Experts have current project knowledge

### After 3 Months

**Check:**
- [ ] Experts feel like team members
- [ ] Context always current
- [ ] Clean deliverables regularly produced
- [ ] Fewer "AI got confused" moments

---

## Troubleshooting Adoption

### Experts Don't Understand Legacy Code

**Solution:**
```
@denny spend time learning our codebase

→ Read through gradually
→ Ask questions about patterns
→ Document as you learn
```

**Be patient** - understanding existing code takes time!

### Too Much Technical Debt

**Solution:**
```
@genna balance new features with tech debt cleanup

→ Genna creates balanced roadmap
→ Allocate time for both
```

**Don't stop everything** - incremental improvement!

### Team Resistant to Change

**Solution:**
- Start with just you using FWD PRO
- Share useful outputs with team
- Let them see value before pushing adoption
- Gradual rollout better than forcing it

---

## Uninstalling (If Needed)

**FWD PRO is easy to remove:**

```bash
# Simply delete the folder
rm -rf .fwdpro/

# Your code is completely untouched!
```

**What you lose:**
- Expert collaboration layer
- Organized outputs
- Persistent context

**What stays:**
- All your code
- Git history
- Everything else

**Tip:** Backup documents/ first if you want to keep deliverables!

---

## Best Practices

### 1. Start Small

Don't try to document everything day 1!

**Week 1:** Get experts familiar with your project  
**Week 2-3:** Create specs for new work  
**Month 2:** Gradually document existing systems

### 2. Update Context Immediately

```
@update-project

→ Run right after install
→ Keep current as you go
```

### 3. Let Experts Learn

**Experts learn your project over time:**
- First suggestions might be generic
- As they see more code, they get specific
- Context builds with each interaction

**Be patient!**

### 4. Leverage for New Work First

**Don't refactor everything!**

**Instead:**
- Use FWD PRO for NEW features
- Gradually document EXISTING code
- Prioritize what matters most

### 5. Import Existing Docs

**Don't recreate what you have!**

```bash
# Import existing documentation
cp -r docs/technical/*.md .fwdpro/documents/technical/
cp -r docs/planning/*.md .fwdpro/documents/planning/
```

**Experts can reference and update!**

---

## Success Stories

### Example: ODAT App

**Before FWD PRO:**
- 6 months of development
- Some mess in the code
- Good product, unclear next steps
- Solo founder juggling everything

**After FWD PRO Install:**
1. **Week 1:** Denny documented architecture
2. **Week 2:** Lyna created pitch deck (raised $50K)
3. **Week 3:** Benji created marketing plan
4. **Month 2:** Regular expert collaboration
5. **Month 3:** Feels like having a team!

**Key:** Didn't stop to refactor - used for new work!

---

## Quick Reference

### First Day Checklist

- [ ] Install: `npx @fwdai/pro install`
- [ ] Complete onboarding (auto-scans project)
- [ ] Review project-kb.md (correct any errors)
- [ ] Add mission: `@update-mission`
- [ ] Add people: `@update-people`
- [ ] Architecture review: `@denny review architecture`

### First Week Checklist

- [ ] Create first spec: `@create-spec [feature]`
- [ ] Get expert recommendations: `@rt what to focus on?`
- [ ] Set up weekly review: `@rt-update` every Monday
- [ ] Import existing docs to documents/

### First Month Checklist

- [ ] Regular @update-project
- [ ] Several deliverables in documents/
- [ ] Team using experts effectively
- [ ] Whiteboards actively managed

---

## Next Steps

**Master project management:**
→ Read `managing-your-project.md`

**Use multiple projects:**
→ Read `multi-project-usage.md`

**Customize your setup:**
→ Read `customization.md`

**Fix issues:**
→ Read `troubleshooting.md`

---

**FWD PRO works great with existing projects - your code stays yours, experts add collaboration! 🚀**

