# Working with Experts

**Your complete guide to collaborating with the FWD PRO expert team**

---

## Meet Your Expert Team

FWD PRO gives you 6 core experts + your custom domain expert. Each has a specific role and specialty.

---

## 🎯 Genna - Chief Architect

**Role:** Strategic leadership, system design, big-picture thinking

**When to Tag Genna:**
- Making major decisions
- Creating roadmaps
- Architecture reviews
- System-level planning
- When you're not sure who to ask

**Genna's Strengths:**
- Sees the big picture
- Coordinates between experts
- Strategic thinking
- Long-term planning
- System architecture

**Example Requests:**
```
@genna help me create a roadmap for Q4
@genna which expert should handle this?
@genna is this architecture decision sound?
@genna what should we prioritize?
```

**Genna's Style:**
- Takes time to think strategically
- Asks clarifying questions
- Considers long-term implications
- Routes work to appropriate experts
- Keeps the big picture in mind

---

## 🏗️ Denny - Systems Architect

**Role:** Technical specifications, architecture design, system planning

**When to Tag Denny:**
- Creating technical specs
- Architecture decisions
- System design
- Feature planning
- Code reviews (architecture)

**Denny's Strengths:**
- Technical depth
- Architectural thinking
- Spec creation
- System design
- Best practices

**Example Requests:**
```
@denny create a spec for authentication
@denny review this architecture
@denny how should we structure this feature?
@denny is this approach scalable?
```

**Denny's Process:**
1. Asks clarifying questions
2. Researches best practices
3. Creates detailed spec
4. Reviews with other experts
5. Hands off to Ada for implementation

**Denny's Outputs:**
- Technical specifications
- Architecture diagrams
- System design docs
- Feature requirements

---

## 💻 Ada - Lead Engineer

**Role:** Implementation, coding, debugging, testing

**When to Tag Ada:**
- Writing code
- Implementing features
- Fixing bugs
- Testing
- Code reviews (implementation)

**Ada's Strengths:**
- Clean code
- Test-driven development
- Debugging
- Implementation speed
- Attention to detail

**Example Requests:**
```
@ada implement the auth spec
@ada fix this bug
@ada add tests for this feature
@ada review this code
```

**Ada's Process:**
1. Reviews spec (from Denny)
2. Asks implementation questions
3. Writes clean, tested code
4. Documents as she goes
5. Suggests Denny for review

**Ada's Outputs:**
- Production code
- Unit tests
- Integration tests
- Implementation notes

---

## 📊 Lyna - External Strategy

**Role:** Fundraising, investor relations, external communications

**When to Tag Lyna:**
- Pitch decks
- Investor materials
- Fundraising strategy
- External messaging
- PR/Communications

**Lyna's Strengths:**
- Storytelling
- Investor mindset
- Financial modeling
- Pitch creation
- External strategy

**Example Requests:**
```
@lyna help me create a pitch deck
@lyna review my investor update
@lyna what metrics matter for VCs?
@lyna how should I tell my story?
```

**Lyna's Process:**
1. Reviews your mission and traction
2. Identifies compelling narrative
3. Creates investor materials
4. Focuses on what investors care about
5. Helps you practice pitch

**Lyna's Outputs:**
- Pitch decks
- Investor updates
- Financial models
- One-pagers
- Email templates

---

## 🚀 Benji - Internal Growth

**Role:** Marketing, user acquisition, content, growth strategy

**When to Tag Benji:**
- Marketing plans
- Content strategy
- User acquisition
- Growth experiments
- Internal communications

**Benji's Strengths:**
- Growth mindset
- Content creation
- Marketing strategy
- User psychology
- Distribution channels

**Example Requests:**
```
@benji create a marketing plan
@benji how do we get our first 1000 users?
@benji what content should we create?
@benji review this landing page copy
```

**Benji's Process:**
1. Understands your target user
2. Identifies growth channels
3. Creates actionable plan
4. Focuses on metrics that matter
5. Suggests experiments to try

**Benji's Outputs:**
- Marketing plans
- Content calendars
- Landing page copy
- Growth strategies
- User acquisition plans

---

## ⚖️ Elle - Legal Counsel

**Role:** Legal, compliance, contracts, privacy

**When to Tag Elle:**
- Legal documents
- Compliance (GDPR, HIPAA, etc.)
- Terms of service
- Privacy policies
- Contracts

**Elle's Strengths:**
- Legal knowledge
- Compliance expertise
- Risk assessment
- Clear documentation
- Practical advice

**Example Requests:**
```
@elle review this contract
@elle do we need HIPAA compliance?
@elle create a privacy policy
@elle is this legal?
```

**Elle's Process:**
1. Assesses legal requirements
2. Identifies risks
3. Creates compliant documents
4. Explains in plain English
5. Suggests when to hire a lawyer

**Elle's Outputs:**
- Privacy policies
- Terms of service
- Compliance checklists
- Contract templates
- Legal risk assessments

**Elle's Disclaimer:**
> I'm an AI expert, not a lawyer. For serious legal matters, consult a licensed attorney. I help with templates and guidance, not legal advice.

---

## 🌟 Your Domain Expert

**Role:** Industry-specific expertise (you create this!)

**Examples:**
- Dr. Sarah Chen (HealthTech Expert) - Healthcare/medical apps
- Alex Rodriguez (FinTech Expert) - Banking/payments apps
- Jamie Parker (EdTech Expert) - Education/learning platforms
- Alex (EdTech) - Educational technology
- Jamie (FinTech) - Financial services

**When to Tag Your Domain Expert:**
- Domain-specific questions
- Industry best practices
- Specialized knowledge
- Compliance in your industry
- Terminology and language

**Example Requests (using domain expert):**
```
@sarah-chen is this HIPAA compliant?
@sarah-chen what clinical workflows should we support?
@sarah-chen review patient privacy in this feature
@sarah-chen is this medical terminology correct?
```

**Your Domain Expert's Value:**
- Deep industry knowledge
- Specialized terminology
- Best practices in your domain
- Cultural awareness
- Credibility with your audience

---

## How Expert Activation Works (Behind the Scenes)

**When you type `@denny`, here's what happens automatically:**

```
@denny
  ↓
.cursor/rules/experts/denny.mdc (TRIGGERS)
  ↓
LOADS:
- denny-systems-architect.md (personality)
- expert-workflow.md (how to work)
- expert-collaboration.md (team patterns)
- expert-tech.md (domain expertise)
- project context (your project info)
  ↓
Denny responds with FULL context!
```

**This happens for ALL experts:**
- `@genna` → Loads Genna's personality + strategy patterns
- `@lyna` → Loads Lyna's personality + content/strategy patterns
- `@ada` → Loads Ada's personality + tech patterns
- `@elle` → Loads Elle's personality + legal patterns
- `@benji` → Loads Benji's personality + content patterns

**You don't need to do anything!** Just type `@expert-name` and the system loads everything they need.

---

## How to Tag Experts

### Direct Tag (Recommended)

```
@denny create authentication spec
@ada implement user profiles
@lyna help with pitch deck
```

### Multiple Experts

```
@denny @ada let's discuss authentication approach

→ Both Denny and Ada engage in conversation
```

### Roundtable (All Experts)

```
@rt review this feature spec

→ All active experts provide feedback
```

### Plain Language (AI Routes)

```
I need a technical specification for authentication

→ AI routes to Denny automatically
```

---

## Expert Collaboration

Experts work together, not in isolation.

### Example: Feature Development

**You:** `@create-specflow + @execute-specflow user authentication`

**Genna:** Kicks off the workflow
> "Authentication feature - Denny will spec, Ada will implement, Elle should review for security."

**Denny:** Creates spec
> Working on auth spec. Questions: JWT or session-based? Social login needed?

**You:** Answer questions

**Denny:** Finalizes spec
> Spec complete. @ada ready for implementation. @elle please review security.

**Elle:** Reviews
> Security looks good. Add rate limiting on login attempts.

**Denny:** Updates spec
> Added rate limiting. @ada updated spec ready.

**Ada:** Implements
> Starting implementation Monday. Will take 3 days. Using Denny's spec.

**Ada:** (3 days later)
> Implementation complete. @denny please review architecture. Code in PR #123.

**Denny:** Reviews
> Architecture is solid. Approved! Ship it.

**All of this happens in Roundtable - you see the collaboration!**

---

## Expert Handoffs

Experts hand work to each other explicitly.

### On Whiteboards:

**Denny:**
```markdown
**Handoffs:**
- [x] Spec complete → Ada for implementation
- [ ] @ada please implement auth-spec.md
```

**Ada:**
```markdown
**Incoming:**
- [ ] Authentication (from Denny) - Starting Monday
```

**You can see the workflow progress!**

---

## When Experts Need You

Experts add items to your checklist when they need input.

### Your Checklist Example:

```markdown
# Your Action Items

## 🔥 High Priority

- [ ] **Approve auth spec** (from Denny)
  - He needs your approval to hand off to Ada
  
- [ ] **Provide user metrics** (for Lyna)
  - She needs this for pitch deck

## 📋 Regular Priority

- [ ] **Test staging deployment** (from Ada)
  - New feature ready to test
```

**Check this regularly!**

---

## Expert Communication Styles

Each expert has a unique personality:

**Genna:** Strategic, big-picture, thoughtful
> "Let's step back and think about the long-term implications..."

**Denny:** Technical, detailed, thorough
> "Here's the spec with three implementation options. Option 2 is most scalable..."

**Ada:** Practical, action-oriented, clear
> "I can start Monday. Will take 3 days. Need Denny's spec first."

**Lyna:** Persuasive, story-focused, investor-minded
> "Investors love traction stories. Your 1,200 users is compelling!"

**Benji:** Creative, growth-focused, experimental
> "Let's try 3 channels and see what works: Product Hunt, Reddit, cold email."

**Elle:** Careful, risk-aware, clear
> "You need GDPR compliance. Here's a checklist. For serious issues, hire a lawyer."

**Your Domain Expert:** (Depends on their specialty!)

---

## Managing Expert Shortcuts

### How Expert Shortcuts Work

**Important:** ALL experts are ALWAYS available to tag, regardless of your work types!

Based on your work types (from onboarding), shortcuts are created in `0-your-experts/`:
- **Building something** → Denny + Ada shortcuts
- **Investor materials** → Lyna shortcut
- **Marketing/content** → Benji shortcut
- **Legal/compliance** → Elle shortcut
- **Strategic planning** → Genna (always has shortcut)

**This is just for convenience!** You can always tag any expert directly:

```
@elle do I need a privacy policy?

→ Elle responds even without a shortcut in 0-your-experts/
```

### Update Your Shortcuts

```
@update-project

→ If your work types change
→ Expert shortcuts in 0-your-experts/ update automatically
```

You can also add shortcuts anytime:

```
"Add Elle to my expert favorites"

→ AI creates shortcut for you
```

---

## Expert Specialties

### Technical Work

**Denny** - Specs, architecture, system design  
**Ada** - Code, implementation, debugging

**Tag:** `@denny` for planning, `@ada` for building

### External Work

**Lyna** - Investors, fundraising, external comms  
**Benji** - Marketing, growth, content

**Tag:** `@lyna` for fundraising, `@benji` for marketing

### Support Work

**Genna** - Strategy, coordination, big decisions  
**Elle** - Legal, compliance, contracts

**Tag:** `@genna` for leadership, `@elle` for legal

### Domain Work

**Your Domain Expert** - Industry-specific knowledge

**Tag:** `@[expert-name]` for specialized questions

---

## Common Workflows

### Create a Feature

```
@create-specflow + @execute-specflow user authentication

→ Genna coordinates
→ Denny specs
→ Elle reviews security
→ Ada implements
→ Denny reviews
→ Done!
```

### Get Investor Help

```
@lyna help me with pitch deck

→ Lyna reviews your mission
→ Asks about traction
→ Creates pitch deck
→ Benji might weigh in on messaging
→ Done!
```

### Make a Big Decision

```
@genna should we pivot to B2B?

→ Genna analyzes pros/cons
→ Asks clarifying questions
→ Consults other experts
→ Provides recommendation
→ You decide!
```

### Fix a Bug

```
@ada there's a bug in the login flow

→ Ada investigates
→ Finds root cause
→ Fixes bug
→ Adds test to prevent regression
→ Done!
```

---

## Expert Limitations

### What Experts Can Do:
- ✅ Create specs and plans
- ✅ Write code
- ✅ Provide guidance
- ✅ Review work
- ✅ Collaborate with each other
- ✅ Learn your project over time

### What Experts Cannot Do:
- ❌ Execute terminal commands (you do that)
- ❌ Deploy code (you do that)
- ❌ Make final decisions (you do that)
- ❌ Provide legal advice (Elle helps, but hire a lawyer)
- ❌ Replace human expertise (they augment it)

**Experts are AI - treat them as very smart advisors, not infallible oracles!**

---

## Getting the Most from Experts

### 1. Give Context

**Less helpful:**
```
@denny create a spec
```

**More helpful:**
```
@denny create an auth spec for our mobile app. We need social login (Google, Apple) and need to be HIPAA compliant since we're in healthcare.
```

### 2. Ask Follow-Up Questions

```
@denny this spec looks good, but can you explain the refresh token strategy?
```

### 3. Involve Multiple Experts (Group Chat Pattern - v2.1)

```
@denny @elle let's discuss HIPAA compliance for authentication
```

**What happens (v2.1):**
- Both experts see the full conversation
- They can discuss with each other naturally
- Cross-validate each other's work
- You see authentic expert collaboration
- Higher quality output from multiple perspectives

**Example:**
```
You: "@denny @elle - authentication spec for healthcare app"

Denny: "I'm proposing JWT with refresh tokens, 15-min expiry..."

Elle: "Good start Denny, but for HIPAA we need to log all auth 
       events and add automatic session termination after 15 mins 
       of inactivity."

Denny: "Perfect catch Elle - updating spec with those requirements."
```

### 4. Check Whiteboards Regularly

See what experts are working on, what they need from you.

### 5. Update Context

```
@update-project

→ Experts always have current info about your project
```

---

## Troubleshooting Expert Issues

### Expert Doesn't Understand

**Solution:** Start a new conversation
```
Start a new conversation in your IDE
→ Clears confusion, starts over
→ Project files remain intact
```

### Wrong Expert Responded

**Solution:** Tag the right one
```
Actually, @denny this is more your area
```

### Experts Disagree

**Solution:** This is actually GOOD! (v2.1)

Experts discussing and even disagreeing shows authentic collaboration:

```
@genna @denny and @ada have different opinions on architecture. Can you weigh in?
```

**Or let them work it out:**
```
@denny @ada - talk through your different approaches and reach consensus
```

Watching experts debate teaches you about tradeoffs and best practices!

### Need More Detail

**Solution:** Ask for it
```
@denny this spec is high-level. Can you add more implementation detail?
```

---

## Advanced: Custom Experts

### When to Create a Domain Expert

- You have specialized industry knowledge
- Standard experts don't understand your domain
- Terminology is domain-specific
- Compliance is industry-specific

### Example Domain Experts

**HealthTech:**
- Dr. Sarah Chen (HealthTech Expert)
- HIPAA compliance, clinical workflows, patient privacy

**E-commerce:**
- Sarah (E-commerce Expert)
- Cart optimization, checkout flows, abandoned cart

**FinTech:**
- Alex (FinTech Compliance)
- Banking regulations, KYC/AML, payment processing

**EdTech:**
- Jamie (Education Technology)
- Pedagogy, learning science, accessibility

### Creating Your Domain Expert

During onboarding (Q16) or later:

```
@update-kb or @update-project

→ Answer Q16: Create domain expert
→ Name, specialty, domain knowledge
→ AI generates expert profile
→ Expert joins your team!
```

---

## Expert Favorites (Shortcuts)

Your most-used experts are in `0-your-experts/`:

```
0-your-experts/
├── genna.md → pro-os/experts/genna-architect.md
├── denny.md → pro-os/experts/denny-systems-architect.md
└── ada.md → pro-os/experts/ada-implementation.md
```

**These are shortcuts to the real files!**

### Add More Favorites

Just ask the AI:

```
"Add Elle to my expert favorites"
"Add Lyna to my shortcuts"

→ AI creates shortcut in 0-your-experts/ for you
```

---

## v2.1 Expert Collaboration Features

### Research Integrity (Mandatory)

**All experts verify their claims with real sources:**

```
You: "@lyna what's the average seed round in healthcare?"

Lyna: "Let me search for current data... [performs web search]

Based on Crunchbase 2024 data, the average healthcare seed 
round is $2.8M.

Source: [URL to actual data]"
```

**What changed:**
- ❌ Before: Experts might cite "research shows..." from training data
- ✅ Now: Experts MUST perform web search and cite real sources
- ✅ If no data exists, they'll say "no current research available" + make educated projection

**Why this matters:**
- Investor materials have accurate, verifiable data
- Business plans cite real market research
- Technical specs reference current best practices
- No more made-up statistics!

### Token Efficiency (Saves You Money)

**Experts iterate in chat before writing to documents:**

```
You: "@denny create auth spec"

Denny: "Let me ask some questions first..."
[Discussion in chat about requirements]

Denny: "Here's my proposed approach... [describes in chat]"

You: "Yes, that works!"

Denny: "Great! Writing to workspace now." [Creates spec once approved]
```

**What changed:**
- ❌ Before: Write document → revise document → rewrite document (3x tokens)
- ✅ Now: Discuss in chat → write final document once (minimal tokens)

**Why this matters:**
- Lower AI costs for you
- Faster iteration
- Better final output (discussed before written)

### Expert Recommendation Pattern (Experts Help Each Other)

**Experts recognize when they need another expert's input:**

```
You: "@lyna create pitch deck slide about our infrastructure"

Lyna: "I can create the slide, but these scalability claims need 
       validation from @denny (systems architect) to ensure they're 
       realistic.
       
       Can you bring Denny in to cross-check these numbers?"

You: "@denny can you validate Lyna's infrastructure claims?"

Denny: [Reviews] "Looks good, just one adjustment..." [Explains]

Lyna: "Perfect! Updated the slide with Denny's architectural reality check."
```

**What changed:**
- ❌ Before: Experts worked independently, might make claims outside their expertise
- ✅ Now: Experts proactively flag when they need another expert's domain knowledge
- ✅ You know WHO to bring in and WHY

**Why this matters:**
- Cross-validated work
- No expert working outside their domain
- You learn when different expertise is needed

---

## Expert Profiles (v4.0 Pattern System)

Want to read an expert's full profile?

**Location:** `.fwdpro/pro-os/experts/[expert-name].md`

**Contains:**
- Role and responsibilities
- Identity and personality
- When to tag them
- Strengths and specialties
- **Primary patterns** (workflow references)
- Example requests
- Working style

**What Changed in v4.0:**

Experts now use a **pattern-based workflow system**. Instead of duplicating workflows in each expert file, they reference shared patterns:

**Universal Pattern (All Experts):**
- `expert-collaboration.md` - Context loading, workspace updates, collaboration

**Domain Patterns (Task-Specific):**
- `expert-tech.md` - Technical work (Denny, Ada)
- `expert-content.md` - Content/marketing (Lyna, Benji, Genna)
- `expert-strategy.md` - Strategic planning (Genna, Lyna, Benji)
- `expert-legal.md` - Legal/compliance (Elle)

**How It Works:**
1. Each expert has `primary_patterns` in their profile
2. Experts dynamically load patterns based on your task
3. Example: Ask Denny (tech expert) to write content → he loads `expert-content.md` too!

**Benefits:**
- Cleaner expert files (~12% smaller)
- Single source of truth for workflows
- Easier to maintain and update
- Experts can work across domains when needed

**Pattern Files Location:** `.fwdpro/pro-os/system/patterns/`

---

## Next Steps

**Try common workflows:**
→ Read `common-workflows.md`

**Learn commands:**
→ Read `commands-guide.md`

**Understand the system:**
→ Read `understanding-the-system.md`

---

**You now know your expert team! Time to put them to work! 💪**


1. Each expert has `primary_patterns` in their profile
2. Experts dynamically load patterns based on your task
3. Example: Ask Denny (tech expert) to write content → he loads `expert-content.md` too!

**Benefits:**
- Cleaner expert files (~12% smaller)
- Single source of truth for workflows
- Easier to maintain and update
- Experts can work across domains when needed

**Pattern Files Location:** `.fwdpro/pro-os/system/patterns/`

---

## Next Steps

**Try common workflows:**
→ Read `common-workflows.md`

**Learn commands:**
→ Read `commands-guide.md`

**Understand the system:**
→ Read `understanding-the-system.md`

---

**You now know your expert team! Time to put them to work! 💪**

