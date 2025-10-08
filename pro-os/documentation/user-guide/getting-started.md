# Getting Started with FWD PRO

**Your complete guide to installing, onboarding, and running your first command**

---

## What Is FWD PRO?

FWD PRO is a **universal AI expert collaboration system** that gives you a team of specialized AI experts who work together like a real team.

Instead of:
- ❌ Single AI doing everything
- ❌ Starting from scratch each time
- ❌ No context about your project
- ❌ Disorganized outputs

You get:
- ✅ 6 specialized experts + your custom expert
- ✅ Persistent project knowledge
- ✅ Roundtable collaboration model
- ✅ Clean separation: workspace vs. final documents
- ✅ Cross-project awareness

---

## Installation

### Prerequisites

- Node.js 16+ installed
- Any AI coding tool (Cursor, Claude, Windsurf, VS Code with Copilot, etc.)
- A project folder (new or existing)

### Install Command

```bash
# Navigate to your project
cd your-project/

# Run installer
npx @fwd-ai/pro install
```

### What Gets Installed

```
your-project/
├── .fwdpro/              ← FWD PRO system (hidden folder)
│   ├── pro-os/           ← Core system
│   ├── your-experts/      ← Your favorite experts (shortcuts)
│   ├── your-commands/    ← Your favorite commands (shortcuts)
│   ├── project/          ← Project context
│   ├── roundtable/       ← Collaboration space
│   └── documents/        ← Clean final outputs
├── src/                  ← Your existing code (untouched!)
├── package.json
└── README.md
```

**FWD PRO lives in `.fwdpro/` - it doesn't touch your code!**

---

## Onboarding Wizard

After installation, the onboarding wizard starts automatically.

### Part 1: Your Personal Profile (8 questions)

These create your **global profile** - used across ALL your FWD PRO projects.

**Q1: What's your name?**
```
> Ward
```

**Q2: Where are you?**
```
> Austin, TX
```

**Q3: Communication style?**
```
a) Professional/Formal
b) Conversational/Friendly
c) Casual/Enthusiastic
d) Direct/No-Fluff
e) Supportive/Encouraging

> c (I like creative energy and emojis!)
```

**Q4: Working preferences?**
```
Select all that apply:
[ ] Uses dictation/voice-to-text
[ ] Prefers visual examples (diagrams, screenshots)
[ ] Needs detailed step-by-step explanations
[ ] Prefers quick summaries with action items
[ ] English is second language

> I check: dictation, visual examples, quick summaries
```

**Q5: Technical level?**
```
a) Non-technical (explain everything)
b) Technical through AI (I code via AI tools)
c) Technical developer (I write code myself)
d) Very technical (I'm a senior dev)

> b (I use AI to code but understand what's happening)
```

**Q6: Team situation?**
```
a) Solo founder (just me)
b) Small team (2-5 people)
c) Growing team (6-20)
d) Larger org (20+)

> a (solo right now)
```

**Q7: Industries/interests?**
```
> recovery/wellness, tech, mobile apps
```

**Q8: Anything else?**
```
> I'm 11 months sober, building ODAT (recovery app)
```

### Part 2: This Project (7 questions)

These create your **project-specific knowledge base**.

**Q9: Project name?**
```
> ODAT
```

**Q10: What is this project?**
```
> Mobile app for addiction recovery support
```

**Q11: Current stage?**
```
a) Idea
b) MVP
c) Launched
d) Scaling

> c (Launched with 1,200 users!)
```

**Q12: What are you working on?** (Activates experts!)
```
Select all that apply:
[ ] Building something (Denny + Ada)
[ ] Investor materials (Lyna)
[ ] Marketing/content (Benji)
[ ] Legal/compliance (Elle)
[ ] Strategic planning (Genna - always active)

> I check: Building something, Investor materials
```

**Q13: Current goals?**
```
> 10,000 users by Q1 2026, raise seed round
```

**Q14: Tech stack?**
```
Detected from your project:
  - React Native
  - TypeScript
  - Supabase
  - Expo

Correct? [Yes/Edit]
> Yes
```

**Q15: Biggest challenges?**
```
> User retention, fundraising, scaling infrastructure
```

### Part 3: Domain Expert (Optional)

**Q16: Want to create a custom expert?**
```
Do you need a domain expert for your industry?
[Yes] [No, maybe later]

> Yes

Great! What should we call this expert?
> Bonnie Jo

What's their specialty?
> Addiction recovery, peer support, clinical best practices

Perfect! I'll create Bonnie Jo (Recovery Specialist) for you.
She'll understand recovery-specific language, clinical protocols,
and can advise on peer support features.
```

---

## What Onboarding Creates

### Global Profile
```
~/.fwdpro-global/
└── ward-profile.md    ← Your personal profile (all projects)
```

### Project Files
```
.fwdpro/
├── project/
│   ├── project-kb.md           ← Project knowledge base
│   ├── founder-profile.md      ← Link to global profile
│   ├── mission.md              ← Your "why" (optional, add later)
│   └── people.md               ← Team/advisors (optional, add later)
├── roundtable/
│   ├── whiteboards.md          ← Expert collaboration space
│   ├── founder-checklist.md    ← Your action items
│   └── workspace/              ← Work-in-progress files
└── pro-os/
    └── config.yaml             ← System configuration
```

### Your Favorites (Shortcuts)
```
your-experts/
├── genna.md           → pro-os/experts/genna-architect.md
├── denny.md           → pro-os/experts/denny-systems-architect.md
├── ada.md             → pro-os/experts/ada-implementation.md
├── lyna.md            → pro-os/experts/lyna-external-strategy.md
└── bonnie-jo.md       → pro-os/experts/bonnie-jo.md

your-commands/
├── update-project.md  → pro-os/commands/system/update-project.md
├── create-spec.md     → pro-os/commands/quick/create-spec.md
├── create-feature.md  → pro-os/commands/quick/create-feature.md
├── create-pitch-deck.md → pro-os/commands/quick/create-pitch-deck.md
└── rt.md              → pro-os/commands/quick/rt.md
```

**These are shortcuts (symlinks) to the real files - always up-to-date!**

---

## Welcome Message

After onboarding completes, you'll see:

```
🎉 FWD PRO is ready for ODAT!

✅ System configured for:
   - Communication: Casual/enthusiastic (c)
   - Focus: Building something, Investor materials

👥 Your team:
   - Genna (Chief Architect) - Strategic leadership
   - Denny (Systems Architect) - Technical specs
   - Ada (Lead Engineer) - Implementation
   - Lyna (External Strategy) - Fundraising
   - Bonnie Jo (Recovery Specialist) - Domain expert

🔖 Quick access folders created:
   - your-experts/ - Shortcuts to 5 active experts
   - your-commands/ - Shortcuts to 5 useful commands
   (These are symlinks to the real files - always up-to-date!)

⚡ Quick commands ready:
   - @create-spec - Technical specifications
   - @create-feature - Full spec → implementation
   - @create-pitch-deck - Investor materials
   - @rt - Roundtable review
   - @update-project - Update project context

📖 Learn more:
   - README.md - System overview
   - roundtable/whiteboards.md - Current work dashboard
   - roundtable/founder-checklist.md - Your action items
   - your-experts/README.md - How to add more expert shortcuts
   - your-commands/README.md - How to add more command shortcuts

🚀 Get started:
Try: "@denny let's review the current architecture"
Try: "@create-feature [feature name]"

💡 Pro tip: Check your-experts/ and your-commands/ for quick access!
```

---

## Your First Command

Let's run your first command!

### Option 1: Ask Genna for a Roadmap

```
@genna help me create a roadmap for the next 3 months
```

**What happens:**
1. Genna (Chief Architect) responds
2. Asks clarifying questions about your goals
3. Creates a strategic roadmap
4. Saves to `roundtable/workspace/roadmap-draft.md`
5. When finalized, moves to `documents/planning/roadmap.md`

### Option 2: Create a Technical Spec

```
@create-spec authentication system
```

**What happens:**
1. Denny asks about your auth requirements
2. Creates detailed technical specification
3. Other experts review and comment
4. Final spec goes to `documents/technical/auth-spec.md`

### Option 3: Get Investor Pitch Help

```
@lyna help me with my pitch deck
```

**What happens:**
1. Lyna asks about your fundraising goals
2. Reviews your mission and goals
3. Creates pitch deck outline
4. Final deck goes to `documents/investor/pitch-deck.md`

---

## Check Your Roundtable

Open `.fwdpro/roundtable/whiteboards.md` to see:

```markdown
# FWD PRO Roundtable - ODAT

Last updated: [timestamp]

---

## 🎯 Genna's Strategic Whiteboard

**Current Focus:**
- Roadmap for Q4 2024

**Active Workspaces:**
- roadmap-draft.md (In Progress)

**Notes:**
- Ward wants to hit 10K users by Q1 2026
- Need to balance product development with fundraising

**Handoffs:**
- [ ] Need Lyna's input on fundraising timeline

---

## 🏗️ Denny's Architecture Whiteboard

**Current Focus:**
- Reviewing authentication system

**Notes:**
- Current auth is basic, may need to scale
- Should plan for multi-platform (iOS, Android, Web)

---

## 💻 Ada's Implementation Board

**Status:** Waiting for specs from Denny

---

## 📊 Lyna's External Strategy

**Current Focus:**
- Pitch deck preparation

**Notes:**
- Ward launching, 1,200 users - good traction story!
- Recovery/mental health is hot sector
- Need to quantify user retention metrics

---
```

**This is your collaboration dashboard!**

---

## Check Your Checklist

Open `.fwdpro/roundtable/founder-checklist.md`:

```markdown
# Ward's Action Items

## 🔥 High Priority
- [ ] Review roadmap draft from Genna
- [ ] Provide user retention metrics to Lyna

## 📋 Regular Priority
- [ ] Test authentication flow on iOS

## 💡 For Later
- [ ] Consider which VCs to approach (Lyna's suggestion)

---

**Last updated:** [timestamp]
```

**Experts add items here when they need your input!**

---

## Understanding the Workspace

### Roundtable (Collaboration)
- **whiteboards.md** - Expert notes, handoffs, blockers
- **workspace/** - Drafts, work-in-progress
- **founder-checklist.md** - Your action items

### Documents (Final Outputs)
- **Clean deliverables only**
- Share with team, investors, stakeholders
- No AI clutter

### Think of it like:
- **Roundtable** = Conference room with whiteboards
- **Documents** = Polished presentations

---

## Next Steps

### Learn the System
- Read `understanding-the-system.md` - How Roundtable works
- Read `working-with-experts.md` - How to collaborate with experts

### Try Common Workflows
- Read `common-workflows.md` - Workflows for different work types
- Try: `@create-feature [feature name]`
- Try: `@rt` to get all experts to review something

### Explore Commands
- Read `commands-guide.md` - All available commands
- Check `your-commands/` for your shortcuts
- Try: `@update-project` when things change

### Customize
- Read `customization.md` - Advanced configuration
- Add more favorite experts/commands
- Create custom commands

---

## Quick Tips

**Tag experts directly:**
```
@denny create auth spec
@ada implement login feature
@lyna review my pitch
```

**Use quick commands:**
```
@create-spec authentication
@create-feature user profiles
@rt review this spec
```

**Check status regularly:**
```
@rt-update
→ Weekly roundtable check-in
```

**Update context as you go:**
```
@update-project
→ Scans for changes, updates context
```

**Plain language works:**
```
I need a technical specification for authentication
Help me with investor materials
Can someone implement this feature?
```

---

## Getting Help

**In this guide:**
- Troubleshooting → `troubleshooting.md`
- Commands → `commands-guide.md`
- Experts → `working-with-experts.md`

**Quick facts:**
- Commands → `documentation/faqs/commands-faq.md`
- Experts → `documentation/faqs/experts-faq.md`
- System → `documentation/faqs/system-faq.md`

**Ask Genna:**
```
@genna I'm confused about [something]
@genna how do I [do something]?
```

---

**Welcome to FWD PRO! You're ready to build! 🚀**

