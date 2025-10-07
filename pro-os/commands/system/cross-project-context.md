# System Command: Cross-Project Context

**Command:** Automatic / `@genna reference my other projects`  
**Expert:** Any expert  
**Purpose:** Experts are aware of ALL your projects, even when working in just one

---

## The Magic: Meta-Awareness

When you're working in **any** FWD PRO project, experts can see:
- ✅ All your other FWD PRO projects
- ✅ What you're building across projects
- ✅ Similar work you've done before
- ✅ Experts available in other projects
- ✅ Domain knowledge from other projects

**This is automatic.** Experts read `~/.fwdpro-global/projects.md` and are **meta-aware**.

---

## How This Changes Everything

### Scenario 1: Reusing Architecture
```
You're in: Project A (telecom tool)
Working on: Authentication system

@denny create auth spec

Denny:
Hey! I see you built authentication in your ODAT app
(checking ~/GitHub/odat-app/documents/technical/feature-auth-spec.md)

That was JWT with refresh tokens, right? Want to use a 
similar approach here, or different requirements?

Based on your ODAT experience:
  ✓ JWT worked well
  ✓ 7-day refresh tokens
  ✓ Role-based access
  
Should I adapt that pattern for telecom, or start fresh?
```

**Denny knows about your other project!**

---

### Scenario 2: Learning from Past Decisions
```
You're in: Project B (new SaaS app)
Working on: Database choice

@denny help me choose a database

Denny:
Looking at your other projects:
  • ODAT app: PostgreSQL (working well for 1,200 users)
  • Telecom tool: Supabase (good for MVP speed)

For this SaaS app, what's your priority?
  - Scale like ODAT? → PostgreSQL
  - Speed like Telecom? → Supabase
  - Something else?

You've had good experience with both. I can help you decide.
```

**Denny references your history!**

---

### Scenario 3: Activating Domain Experts Across Projects
```
You're in: Project C (healthcare app)
Working on: Compliance

@elle we need HIPAA compliance

Elle:
I see you have HIPAA experience from your ODAT app
(recovery/mental health - also HIPAA regulated).

Want me to reference those compliance docs as a starting point?

Your ODAT HIPAA docs:
  • BAA template (documents/legal/baa.md)
  • Privacy Policy (HIPAA-compliant)
  • Data handling procedures

I can adapt these for healthcare. Sound good?
```

**Elle sees your other work!**

---

### Scenario 4: Reusing Domain Experts
```
You're in: Project D (mental health platform)
Working on: Recovery content

@genna I need help with recovery-specific content

Genna:
Perfect! I see you have Bonnie Jo (Recovery Specialist) 
active in your ODAT app. She has deep domain knowledge 
about addiction recovery and mental wellness.

Want me to activate Bonnie Jo for this project too?
She could help with:
  • Recovery-appropriate language
  • Clinical best practices
  • Peer support features
  • Relapse prevention

[Activate Bonnie Jo] [Create different expert] [Just Genna]
```

**Genna knows about your custom experts!**

---

### Scenario 5: Portfolio-Level Insights
```
You're in: Project A (ODAT)
Working on: Growth strategy

@benji help me prioritize where to focus

Benji:
Looking at your full portfolio:

ODAT (this project):
  • 1,200 users, launched, growing
  • Most active project (5 commands this week)
  • Investor materials being created (Lyna active)
  
Telecom Tool:
  • 2 pilot customers, MVP stage
  • Less active (last work 8 days ago)
  
Consulting Site:
  • Paused for 47 days
  
My recommendation:
  1. **Focus on ODAT** - It's working! You have traction.
  2. Keep telecom simmering (minimal effort)
  3. Pause consulting until ODAT hits 10K users
  
You're spread across 3 projects. ODAT is your winner. 
Double down there?
```

**Benji sees your WHOLE portfolio!**

---

### Scenario 6: Cross-Project Code Reference
```
You're in: Project B (new app)
Working on: API structure

@denny design API endpoints

Denny:
Checking your other projects for API patterns...

ODAT app has a mature API structure:
  • RESTful design
  • /api/v1/ versioning
  • JWT authentication
  • Rate limiting implemented
  
Can I reference that as a template? Or different approach?

I can also pull specific patterns from:
  ~/GitHub/odat-app/src/api/
  
Want me to adapt that structure here?
```

**Denny can reference actual code from other projects!**

---

## How It Works Technically

### Experts Read Global Dashboard
When activated in ANY project, experts automatically read:
```
~/.fwdpro-global/projects.md
```

This file contains:
- All your FWD PRO projects
- Current status of each
- Active experts per project
- Recent work
- Key facts

### Experts Can Access Other Projects
If needed, experts can:
1. **Read summaries** from global dashboard (always)
2. **Ask permission** to look at other project files
3. **Reference** specific docs if you approve
4. **Suggest patterns** from your history

### Privacy & Control
```
Denny:
I see you solved this in ODAT. Want me to look at that spec?

You:
Yes → Denny reads ~/GitHub/odat-app/.../spec.md
No  → Denny works from scratch
```

**You control cross-project access.**

---

## Powerful Use Cases

### 1. **Pattern Reuse**
Don't reinvent the wheel. If you solved authentication in Project A, adapt it for Project B.

### 2. **Learning from History**
"Last time I tried PostgreSQL it worked great. Should I use it again?"

### 3. **Domain Expert Leverage**
Custom domain experts can help across ALL relevant projects.

### 4. **Portfolio Strategy**
See which projects are working, where to focus energy.

### 5. **Consistent Architecture**
Build similar tech stacks across projects = faster development.

### 6. **Team Coordination**
If you have team members in different projects, experts know the full context.

---

## Example: Full Meta-Awareness

```
You're working on Project C (healthcare startup)

@genna help me architect this

Genna:
Looking at your portfolio, I can help you leverage past work:

Your Experience:
  • ODAT: React Native app, 1,200 users, HIPAA compliance ✓
  • Telecom: Next.js web app, Supabase backend
  
For this healthcare app, I recommend:
  • React Native (you know it well from ODAT)
  • HIPAA compliance patterns from ODAT (reuse docs)
  • Consider Supabase (worked well in Telecom) OR
  • PostgreSQL (scales well, ODAT uses it)

You also have:
  • Bonnie Jo (Recovery Specialist) - could help with mental health features
  • Elle (Legal) - already did HIPAA in ODAT
  
Want me to create an architecture that leverages your ODAT experience?

I can reference:
  - ODAT's tech stack
  - ODAT's HIPAA compliance docs
  - ODAT's data architecture
  
This will be MUCH faster than starting from zero.
```

**Genna sees EVERYTHING and connects the dots!**

---

## Commands That Use This

### Automatic (No Command Needed)
Experts automatically consider your full portfolio when:
- Making architecture decisions
- Suggesting approaches
- Identifying patterns
- Recommending technologies

### Explicit Reference
```
@denny reference my other projects
@genna what have I built before that's similar?
@ada can we reuse code from ODAT?
@benji where should I focus across all projects?
```

### Cross-Project Analysis
```
@genna analyze my portfolio
@show-projects (see the dashboard)
@benji prioritize my projects
```

---

## The Power of Meta-Awareness

**Without this:**
- Each project is isolated
- You repeat solutions
- Experts don't know your history
- No portfolio-level thinking

**With this:**
- Experts see the big picture
- Reuse proven patterns
- Learn from your history
- Strategic portfolio advice
- Domain experts work everywhere
- Consistent architecture across projects

---

## Privacy Notes

**What's shared across projects:**
- Project summaries (from global dashboard)
- High-level status and goals
- Expert activation
- Technology stacks

**What requires permission:**
- Reading specific files from other projects
- Copying code between projects
- Detailed technical information

**Always ask permission:**
```
Denny: Can I look at your ODAT auth spec?
You: Yes/No
```

---

## Configuration

### In config.yaml (per project):
```yaml
cross_project_awareness:
  enabled: true  # Experts can see global dashboard
  allow_file_access: "ask"  # ask / always / never
  reference_projects: []  # Empty = all, or list specific projects
```

### In founder profile (global):
```yaml
privacy:
  share_across_projects: true  # Enable meta-awareness
  level: "summaries"  # summaries / full / ask
```

---

**This is why FWD PRO scales with you - it remembers EVERYTHING across ALL your projects!** 🧠✨

**One founder profile = Complete context across your entire portfolio**

