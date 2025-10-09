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

### Update Command

```bash
# Update to the latest version (preserves all your data)
npx @fwd-ai/pro update
```

Updates work like app updates on your phone - your documents, workspace, and configuration are automatically preserved while system files (commands, experts, standards) are updated to the latest version.

### What Gets Installed

```
your-project/
├── .fwdpro/              ← FWD PRO system (hidden folder)
│   ├── *welcome.md       ← Start here!
│   ├── pro-os/           ← Core system
│   │   └── project/      ← Project context (config, KB, mission, people)
│   ├── 0-your-experts/   ← Your favorite experts (shortcuts)
│   ├── 0-your-commands/  ← Your favorite commands (shortcuts)
│   ├── 0-roundtable/     ← Collaboration space
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
> Tyler, TX
```

**Q3: Communication style?**
```
How do you prefer AI experts to communicate with you? (select all that apply)

[ ] Professional/formal - Respectful business language
[ ] Conversational/friendly - Like helpful colleagues
[ ] Casual/enthusiastic - Creative energy with emojis
[ ] Direct/no-fluff - Straight to the point, action-focused
[ ] Encouraging - Positive reinforcement, celebrates progress

> I select: Conversational/friendly, Casual/enthusiastic
```

**Q4: Working style?**
```
How do you work best? (select all that apply)

[ ] I use voice dictation/voice-to-text
[ ] I prefer visual examples (diagrams, screenshots)
[ ] I prefer detailed step-by-step explanations
[ ] I prefer quick summaries with clear action items
[ ] I'm neurodivergent (ADHD, autism, dyslexia, etc.)
[ ] English is my second language

> I select: dictation, visual, summaries
```

**Q5: Technical level?**
```
How comfortable are you with technical concepts?

a) Not technical (I focus on business/creative, no coding)
b) AI-assisted builder (I use AI to code, but can't code myself)
c) Semi-technical (I understand concepts, some coding experience)
d) Technical (I code regularly without AI)
e) Very technical (I design systems and write complex code)

> b (AI-assisted builder)
```

**Q6: Your role?**
```
What best describes your role? (select all that apply)

[ ] Founder/entrepreneur
[ ] Business person/operator
[ ] Creative/designer
[ ] Developer/engineer
[ ] Technical leader/architect

> I select: Founder/entrepreneur
```

**Q7: Industries?**
```
What industries do you work in? (select all that apply)

[ ] Technology / SaaS
[ ] Healthcare / Medical
[ ] Finance / Fintech
[ ] E-commerce / Retail
[ ] Education / EdTech
[ ] Other (please specify)

> I select: Technology / SaaS, Healthcare / Medical
```

**Q8: Team situation?**
```
a) Solo founder (just me)
b) Small team (2-5 people)
c) Growing team (6-20 people)
d) Larger organization (20+)

> a (solo right now)
```

### Part 2: This Project (5-11 questions)

These create your **project-specific knowledge base**.

**Q9: Project name?**
```
> ODAT
```

**Q10: What is this project?**
```
> Mobile app for addiction recovery support
```

**Q11: What are you working on?** (Activates experts!)
```
Select all that apply:
[ ] Building something (Denny + Ada)
[ ] Investor materials (Lyna)
[ ] Marketing/content (Benji)
[ ] Legal/compliance (Elle)
[ ] Strategic planning (Genna - always active)

> I check: Building something, Investor materials
```

**Q12a-d: Progressive questions based on work types**

If you selected "Building something":
```
→ What exactly are you building?
> Mobile app for addiction recovery support

→ Do you know what tech stack you need?
> Yes, I know what I'm using

→ What technologies are you using?
> React Native, TypeScript, Supabase, Expo
```

If you selected "Investor materials":
```
→ What's your focus?
> Seed fundraising ($500K - $2M)
```

**Q13: Main goal?**
```
> 10,000 users by Q1 2026, raise seed round
```

**Q14: Constraints? (optional)**
```
> Need HIPAA compliance for health data
```

### Part 3: Domain Expert (Optional)

**Q15: Want to create a custom expert?**
```
🎯 Want to create a specialized expert for your project?
[Yes] [No]

> Yes

What should we call this expert?
a) BJ (default)
b) Custom name (I'll choose)

> b (Custom name)

Enter expert name:
> Dr. Sarah

What pronouns should this expert use?
a) They/them (neutral)
b) She/her
c) He/him

> b (She/her)

What should this expert specialize in?
> Addiction recovery, peer support, clinical best practices

What personality should this expert have?
a) Warm & supportive - Encouraging and empathetic
b) Professional & formal - Business-focused and polished
c) Direct & no-nonsense - Straight shooter
d) Enthusiastic & energetic - Passionate and motivating
e) Wise & thoughtful - Contemplative and measured
f) Let AI decide based on domain

> a (Warm & supportive)

✓ Perfect! I'll create Dr. Sarah (Recovery Specialist) for you.
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
├── pro-os/
│   └── project/
│       ├── config.yaml             ← System configuration
│       ├── project-kb.md           ← Project knowledge base
│       ├── founder-profile.md      ← Link to global profile
│       ├── mission.md              ← Your "why" (optional, add later)
│       └── people.md               ← Team/advisors (optional, add later)
└── 0-roundtable/
    ├── whiteboards.md              ← Expert collaboration space
    ├── [your-name]-checklist.md    ← Your action items
    └── workspace/                  ← Work-in-progress files
```

### Your Favorites (Shortcuts)
```
.fwdpro/
├── 0-your-experts/
│   ├── genna.md           → ../pro-os/experts/genna-architect.md
│   ├── denny.md           → ../pro-os/experts/denny-systems-architect.md
│   ├── ada.md             → ../pro-os/experts/ada-implementation.md
│   ├── lyna.md            → ../pro-os/experts/lyna-external-strategy.md
│   └── dr-sarah.md        → ../pro-os/experts/dr-sarah-healthtech.md
│
└── 0-your-commands/
    ├── create-specflow.md    → ../pro-os/commands/flows/create-specflow.md
    ├── execute-specflow.md   → ../pro-os/commands/flows/execute-specflow.md
    └── rt.md                 → ../pro-os/commands/flows/rt.md
```

**These are shortcuts (symlinks) to the real files - always up-to-date!**

**Note:** Which commands appear depends on your work types (e.g., "building" adds spec/execute flows)

---

## Welcome Message

After onboarding completes, you'll see:

```
🎉 FWD PRO is ready for ODAT!

✅ System configured for:
   - Communication: Conversational/friendly, Casual/enthusiastic
   - Focus: Building something, Investor materials

👥 Your team:
   - Genna (Chief Architect) - Strategic leadership
   - Denny (Systems Architect) - Technical specs
   - Ada (Lead Engineer) - Implementation
   - Lyna (External Strategy) - Fundraising
   - Dr. Sarah (Recovery Specialist) - Domain expert

🔖 Quick access folders created:
   - 0-your-experts/ - Shortcuts to 5 active experts
   - 0-your-commands/ - Shortcuts to 5 useful commands
   (These are symlinks - always up-to-date!)

⚡ Flow commands ready:
   - @create-specflow - Create technical spec (TDD structure)
   - @execute-specflow - Implement spec (TDD + QA enforced)
   - @rt - Roundtable review (multi-expert)

📖 Learn more:
   - *welcome.md - Start here guide
   - 0-roundtable/whiteboards.md - Current work dashboard
   - 0-roundtable/[your-name]-checklist.md - Your action items
   - 0-your-experts/README.md - How to add more expert shortcuts
   - 0-your-commands/README.md - How to add more command shortcuts

🚀 Get started:
Try: "@denny let's review the current architecture"
Try: "@create-specflow [feature name]" (for building)

💡 Pro tip: Check 0-your-experts/ and 0-your-commands/ for quick access!
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
4. Saves to `0-roundtable/workspace/roadmap-draft.md`
5. When finalized, moves to `documents/planning/roadmap.md`

### Option 2: Create a Technical Spec

```
@create-specflow authentication system
```

**What happens:**
1. Denny asks about your auth requirements
2. Creates detailed technical specification
3. Other experts review and comment
4. Final spec goes to `documents/tech/auth-spec.md`

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

Open `.fwdpro/0-roundtable/whiteboards.md` to see:

```markdown
# Whiteboards: MyProject

**Last Updated:** 2024-10-09  
**Founder:** Ward  
**Quick Dashboard View** - For complete details, check individual workspace files

---

## 📊 Current Status Overview

**What's Happening Right Now:**

Project just set up! All experts ready and waiting for work.

**Active Workspaces:**
- No workspaces yet (experts will create them as you work together)

---

## 📋 Expert Activity At-A-Glance

| Expert | Status | Current Work | Next Action |
|--------|--------|--------------|-------------|
| 🎯 **Genna** | ⚪ Idle | - | Strategic direction when needed |
| 🔧 **Denny** | ⚪ Idle | - | System specs when needed |
| 💻 **Ada** | ⚪ Idle | - | Implementation when needed |
| 🚀 **Lyna** | ⚪ Idle | - | Funding materials when needed |
| 📊 **Benji** | ⚪ Idle | - | Growth work when needed |
| ⚖️ **Elle** | ⚪ Idle | - | Legal reviews when needed |

**Status Key:** ⚪ Idle • 🔄 InProgress • 📋 Review • ✅ Complete

---

## 🎯 Genna's Whiteboard (Chief Architect)

**Active Work:** None yet

**Ready for:** Strategic planning, roadmaps, architecture reviews

---

## 🔧 Denny's Whiteboard (Systems Architect)

**Active Work:** None yet

**Ready for:** Technical specs, system design, architecture

---
```

**This is your collaboration dashboard!**

Experts update this as they work - workspaces link here, status changes show progress, and you can see everything at a glance.

---

## Check Your Checklist

Open `.fwdpro/0-roundtable/[your-name]-checklist.md`:

```markdown
# Ward's Action Checklist

**Project:** MyProject  
**Last Updated:** 2024-10-09  
**Your Expert Team:** Genna, Denny, Ada, Lyna, Benji, Elle

---

## 🚨 Urgent - Needs Your Decision

**No urgent items yet**

---

## ⚠️ High Priority - This Week

| ✓ | Task | From | What to Do | Added |
|---|------|------|------------|-------|
| ☐ | **Welcome!** | System | Start by tagging an expert or trying a command | 2024-10-09 |

---

## 📌 Medium Priority - This Month

**No items yet**

---

## 💡 Nice to Have - Optional

- [ ] **Consider expanding mission.md** - Add your founder story and "why"
  - **Benefit:** Helps experts understand your deeper motivation
  - **Command:** @update-mission

---

## 🎉 Recently Completed

| ✓ | Task | Expert | Result | Completed |
|---|------|--------|--------|-----------|
| ✅ | **Initial setup** | System | FWD PRO installed and configured | 2024-10-09 |

---
```

**Experts add items here when they need your input!**

As you work together, experts will add decisions they need, reviews to approve, or questions they have. You respond by checking them off and replying in the linked workspaces.

---

## Understanding the Workspace

### Roundtable (Collaboration)
- **whiteboards.md** - Expert notes, handoffs, blockers
- **workspace/** - Drafts, work-in-progress
- **[your-name]-checklist.md** - Your action items

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
- Try: `@create-specflow [feature name]` then `@execute-specflow [feature name]`
- Try: `@rt` to get all experts to review something

### Explore Commands
- Read `commands-guide.md` - All available commands
- Check `0-your-commands/` for your flow command shortcuts
- System commands always available in `pro-os/commands/system/`

### Customize
- Add more favorite experts/commands (just ask AI!)
- Create custom commands with `@create-flow`
- Update project context as needed

---

## Quick Tips

**Tag experts directly:**
```
@denny create auth spec
@ada implement login feature
@lyna review my pitch
```

**Use flow commands:**
```
@create-specflow authentication
@execute-specflow authentication
@rt review this spec
```

**Update project context:**
```
@update-project
→ Keep context current as project evolves
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
- Commands → `user-docs/faqs/commands-faq.md`
- Experts → `user-docs/faqs/experts-faq.md`
- System → `user-docs/faqs/system-faq.md`

**Ask Genna:**
```
@genna I'm confused about [something]
@genna how do I [do something]?
```

---

**Welcome to FWD PRO! You're ready to build! 🚀**

