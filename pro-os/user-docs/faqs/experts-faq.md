# Experts - Quick Facts

**Quick reference for all FWD PRO experts**

---

## The Core Team

### Genna - Chief Architect
**Role:** Strategic leadership, system design, big-picture decisions  
**Tag:** `@genna`  
**When:** Major decisions, roadmaps, architecture reviews, system commands

### Denny - Systems Architect
**Role:** Technical specifications, architecture, system design  
**Tag:** `@denny`  
**When:** Building features, technical specs, architecture decisions, code reviews

### Ada - Lead Engineer
**Role:** Implementation, coding, debugging, testing  
**Tag:** `@ada`  
**When:** Writing code, implementing features, fixing bugs, QA

### Lyna - External Strategy
**Role:** Fundraising, investor relations, external communications  
**Tag:** `@lyna`  
**When:** Pitch decks, investor updates, fundraising strategy, external messaging

### Benji - Internal Growth
**Role:** Marketing, user acquisition, content, growth strategy  
**Tag:** `@benji`  
**When:** Marketing plans, content strategy, user growth, internal communications

### Elle - Legal Counsel
**Role:** Legal, compliance, contracts, privacy  
**Tag:** `@elle`  
**When:** Legal docs, compliance (GDPR, HIPAA), contracts, terms of service

---

## Domain Experts

**Custom experts YOU create during onboarding**

Examples:
- Dr. Sarah Chen (HealthTech Expert) - For healthcare/medical apps
- Alex Rodriguez (FinTech Expert) - For banking/payments apps
- Jamie Parker (EdTech Expert) - For education/learning platforms

**Tag:** `@[expert-name]`  
**When:** Domain-specific questions, specialized knowledge, industry best practices

---

## How to Tag Experts

### Direct Tag:
```
@denny create an auth spec
@lyna help with pitch deck
@ada implement the login feature
```

### Plain Language:
```
I need a technical specification
Help me with investor materials
Can someone implement this feature?
```

FWD PRO routes to the right expert automatically!

---

## Expert Shortcuts

**ALL experts are always available to tag!**

**Where to find them:**
- All 6 core experts: `pro-os/experts/` (can @mention any anytime)
- Your shortcuts: `0-your-experts/` (convenient quick access)

**During onboarding, based on your work types, shortcuts are created in `0-your-experts/`:**
- Building something → Denny + Ada shortcuts
- Investor materials → Lyna shortcut
- Marketing/content → Benji shortcut
- Legal/compliance → Elle shortcut
- Genna always gets a shortcut (chief architect)

**Want to add/remove shortcuts?**
Just ask! Examples:
- "Add a shortcut to @elle in my experts folder"
- "Remove the @benji shortcut"

The AI will create/remove symlinks for you!

---

## Expert Collaboration

### Workspaces:
```
Experts collaborate in workspace files:
- roundtable/workspace/[feature-name].md
- All experts can work in the same workspace
- Progress tracked in real-time
- Decisions and context documented
```

### Roundtable Review:
```
@rt review this feature spec

→ Multiple experts weigh in
→ Each provides their perspective
→ Comprehensive feedback in workspace
```

### How Experts Work Together:
```
You: @denny create auth spec
→ Denny creates spec in workspace
→ Updates progress in workspace file

You: @ada implement the auth spec
→ Ada reads Denny's workspace
→ Implements based on spec
→ Documents progress in workspace
```

---

## Where Experts Live

- **All 6 core experts:** `pro-os/experts/` (always available)
- **Your shortcuts:** `0-your-experts/` (convenient quick access)
- **Domain experts:** Created with `@create-expert` (also in `pro-os/experts/`)

---

## Pattern System

**Experts use pattern files for workflows:**
- All patterns in: `pro-os/system/patterns/`
- Universal pattern: `expert-collaboration.md` (all experts use)
- Domain patterns: `expert-tech.md`, `expert-content.md`, `expert-strategy.md`, `expert-legal.md`

**Experts load patterns based on the task:**
- Technical work → `expert-tech.md`
- Content/marketing → `expert-content.md`
- Strategic planning → `expert-strategy.md`
- Legal work → `expert-legal.md`

**For more details:** See `user-docs/user-guide/understanding-the-system.md`

---

**For detailed guides, see:** `user-docs/user-guide/`

