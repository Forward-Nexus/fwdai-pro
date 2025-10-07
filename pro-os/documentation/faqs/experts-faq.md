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
- Bonnie Jo (Recovery Specialist) - For addiction recovery apps
- Dr. Martinez (Clinical Psychology) - For mental health platforms
- Sarah (E-commerce) - For retail/shopping features

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

**During onboarding, based on your work types, shortcuts are created in `your-experts/`:**
- Building something → Denny + Ada shortcuts
- Investor materials → Lyna shortcut
- Marketing/content → Benji shortcut
- Legal/compliance → Elle shortcut
- Genna always gets a shortcut (chief architect)

**You can still tag ANY expert even if they don't have a shortcut!**

---

## Multiple Experts

### Roundtable Review:
```
@rt review this feature spec

→ All active experts weigh in
→ Each provides their perspective
→ Comprehensive feedback
```

### Handoffs:
```
@denny create auth spec
→ Denny creates spec
→ Automatically hands off to Ada for implementation

@ada implement this
→ Ada builds it
→ Suggests Denny for review
```

---

## Where Experts Live

- **Core team:** `pro-os/experts/`
- **Domain experts:** `pro-os/experts/[name].md`
- **Your favorites:** `your-experts/` (shortcuts!)

---

## Adding/Removing Experts

**Add to favorites:**
```bash
./add-favorite.sh
```

**Activate/deactivate:**
```
@update-onboarding
→ Change work types
→ Experts activate/deactivate automatically
```

---

**For detailed guides, see:** `documentation/user-guide/`

