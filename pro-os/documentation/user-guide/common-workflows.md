# Common Workflows

**Workflows for different types of work with FWD PRO**

---

## Overview

FWD PRO shines when you use workflows that leverage multiple experts. This guide shows you the most common workflows and how to execute them.

---

## Building Features

### Workflow: Full Feature Development

**Best for:** New features that need spec → implementation → review

**Command:** `@create-feature [feature name]`

**Steps:**

1. **You initiate:**
```
@create-feature user authentication
```

2. **Genna coordinates:**
> "Authentication feature - I'll have Denny spec it, then Ada implement."

3. **Denny creates spec:**
> "What type of auth? JWT? OAuth? Social login needed?"

4. **You answer questions**

5. **Denny finalizes spec:**
> workspace/auth-spec-draft.md → documents/technical/auth-spec.md

6. **Experts review:**
- Elle: Security/compliance check
- Ada: Implementation feasibility

7. **Ada implements:**
> "Starting Monday. Will take 3 days."

8. **Ada delivers:**
> Code in your repo + implementation notes

9. **Denny reviews:**
> Architecture approval

10. **Feature complete!**

**Timeline:** 3-5 days (depending on complexity)

---

### Workflow: Quick Spec Only

**Best for:** You just need a technical spec, will implement yourself

**Command:** `@create-spec [feature name]`

**Steps:**

1. **You initiate:**
```
@create-spec payment processing
```

2. **Denny asks questions:**
> "Stripe? PayPal? Subscription or one-time?"

3. **You answer**

4. **Denny creates spec:**
> Detailed technical specification

5. **Experts review** (optional):
```
@rt review this spec
```

6. **Spec delivered:**
> documents/technical/payment-spec.md

**Timeline:** Same day to 1 day

---

### Workflow: Bug Fixing

**Best for:** Something's broken, need it fixed

**Steps:**

1. **You report:**
```
@ada there's a bug in the login flow - users can't reset passwords
```

2. **Ada investigates:**
> "Found it! The reset token expires too quickly."

3. **Ada suggests fix:**
> "I can extend token lifetime to 1 hour and add better error handling."

4. **You approve**

5. **Ada implements fix:**
> Code + test to prevent regression

6. **Ada suggests review:**
> "@denny please verify this doesn't break anything"

7. **Denny reviews:**
> "Looks good! Ship it."

**Timeline:** Few hours to 1 day

---

### Workflow: Code Review

**Best for:** You wrote code, want expert review

**Steps:**

1. **You request:**
```
@denny @ada please review my auth implementation
Location: src/auth/
```

2. **Denny reviews architecture:**
> "Architecture is solid. Concerns: token storage could be more secure."

3. **Ada reviews implementation:**
> "Code is clean! Suggestions: add more error handling, test edge cases."

4. **You address feedback**

5. **Experts re-review:**
> "Looks great! Approved."

**Timeline:** Few hours

---

## Investor Materials

### Workflow: Create Pitch Deck

**Best for:** Fundraising, need investor materials

**Command:** `@create-pitch-deck`

**Steps:**

1. **You initiate:**
```
@lyna help me create a pitch deck for seed round
```

2. **Lyna reviews context:**
> Reads your mission, project-kb, traction

3. **Lyna asks questions:**
> "How much are you raising? Target close date? Key metrics?"

4. **You provide info**

5. **Lyna creates outline:**
> workspace/pitch-deck-outline.md

6. **You review outline**

7. **Lyna creates full deck:**
> Slide-by-slide content

8. **Benji reviews messaging:**
> "Traction story is strong. Suggest leading with problem/solution."

9. **Lyna revises**

10. **Final deck delivered:**
> documents/investor/pitch-deck.md

**Timeline:** 2-3 days

---

### Workflow: Investor Update

**Best for:** Monthly/quarterly updates to investors

**Steps:**

1. **You initiate:**
```
@lyna create monthly investor update
```

2. **Lyna asks:**
> "Key wins this month? Metrics update? Any asks?"

3. **You provide:**
> "1,500 users (up from 1,200). Shipped user profiles. Need intro to healthcare VCs."

4. **Lyna creates update:**
> Professional format with wins, metrics, asks

5. **Final update:**
> documents/investor/update-oct-2024.md

**Timeline:** Few hours

---

## Marketing & Growth

### Workflow: Marketing Plan

**Best for:** Need growth strategy

**Steps:**

1. **You initiate:**
```
@benji create a marketing plan to get our first 1000 users
```

2. **Benji researches:**
> Reviews your product, target audience, competitors

3. **Benji asks:**
> "Who's your ideal user? Where do they hang out online? Budget?"

4. **You answer**

5. **Benji creates plan:**
> Channels, tactics, timeline, metrics

6. **Lyna weighs in** (if relevant):
> "PR could help with fundraising too"

7. **Final plan:**
> documents/marketing/acquisition-plan.md

**Timeline:** 1-2 days

---

### Workflow: Content Creation

**Best for:** Need blog posts, landing pages, emails

**Steps:**

1. **You initiate:**
```
@benji write landing page copy for ODAT
```

2. **Benji reviews:**
> Your mission, target user, value prop

3. **Benji asks:**
> "What's the main action you want? Subscribe? Download?"

4. **Benji writes copy:**
> Hero, features, social proof, CTA

5. **You review & provide feedback**

6. **Benji revises**

7. **Final copy:**
> documents/marketing/landing-page-copy.md

**Timeline:** Few hours to 1 day

---

## Strategic Planning

### Workflow: Create Roadmap

**Best for:** Planning next quarter or year

**Steps:**

1. **You initiate:**
```
@genna help me create a roadmap for Q1 2025
```

2. **Genna reviews:**
> Your goals, current state, challenges

3. **Genna asks:**
> "What are your top 3 priorities? Any constraints (time, money, team)?"

4. **You answer**

5. **Genna creates draft:**
> workspace/roadmap-q1-2025-draft.md

6. **Experts weigh in:**
- Denny: Technical feasibility
- Lyna: Fundraising timeline
- Benji: Growth milestones

7. **Genna synthesizes:**
> Balanced roadmap with all perspectives

8. **You approve**

9. **Final roadmap:**
> documents/planning/roadmap-q1-2025.md

**Timeline:** 2-3 days

---

### Workflow: Make Big Decision

**Best for:** Major strategic decisions (pivot, target market, etc.)

**Steps:**

1. **You ask:**
```
@genna should we pivot from B2C to B2B?
```

2. **Genna analyzes:**
> Pros, cons, implications

3. **Genna asks:**
> "Why are you considering this? What's not working with B2C?"

4. **You explain**

5. **Genna consults experts:**
- Lyna: Fundraising implications
- Benji: Market size, competition
- Denny: Technical complexity

6. **Genna synthesizes:**
> Recommendation with reasoning

7. **You decide!**

**Timeline:** 1-2 days

---

## Legal & Compliance

### Workflow: Create Legal Docs

**Best for:** Privacy policy, terms of service, etc.

**Steps:**

1. **You initiate:**
```
@elle create a privacy policy for ODAT
```

2. **Elle asks:**
> "What data do you collect? Any special compliance (GDPR, HIPAA)?"

3. **You answer**

4. **Elle creates policy:**
> Comprehensive, compliant template

5. **Elle adds disclaimer:**
> "Have a lawyer review before publishing"

6. **Final policy:**
> documents/legal/privacy-policy.md

**Timeline:** Few hours to 1 day

---

### Workflow: Compliance Review

**Best for:** Ensuring you meet regulations

**Steps:**

1. **You ask:**
```
@elle do we need HIPAA compliance for our recovery app?
```

2. **Elle analyzes:**
> Determines if you're handling PHI (Protected Health Information)

3. **Elle provides guidance:**
> "Yes, because you store health data. Here's a checklist."

4. **Elle creates checklist:**
> HIPAA requirements, action items

5. **Elle recommends:**
> "Hire a HIPAA compliance consultant for final audit"

6. **Checklist delivered:**
> documents/legal/hipaa-compliance-checklist.md

**Timeline:** Same day

---

## Roundtable Reviews

### Workflow: Get All Experts' Input

**Best for:** Major decisions, comprehensive feedback

**Command:** `@rt [what to review]`

**Steps:**

1. **You initiate:**
```
@rt review this product spec
Location: workspace/product-spec-draft.md
```

2. **All active experts review:**

- Genna: Strategic fit, big picture
- Denny: Technical feasibility
- Ada: Implementation complexity
- Lyna: Investor appeal
- Benji: Market fit, user appeal
- Elle: Legal/compliance
- Your domain expert: Industry best practices

3. **Experts post feedback on whiteboards**

4. **Genna synthesizes:**
> "Here's the consensus and key concerns"

5. **You decide how to proceed**

**Timeline:** Same day to 1 day

---

### Workflow: Weekly Status Check

**Best for:** Regular check-ins with the team

**Command:** `@rt-update`

**Steps:**

1. **You initiate:**
```
@rt-update
```

2. **Each expert reports:**
- What they completed this week
- What they're working on
- Any blockers
- What they need from you

3. **Genna facilitates:**
> Identifies priorities for next week

4. **Update on whiteboards:**
> Current status visible to all

**Timeline:** 15-30 minutes

---

## Project Management

### Workflow: Update Project Context

**Best for:** When your project evolves

**Command:** `@update-project`

**Steps:**

1. **You initiate:**
```
@update-project
```

2. **Genna scans project:**
> Checks README, package.json, git commits, etc.

3. **Genna detects changes:**
> "I see you added Next.js. Are you building a web version?"

4. **You confirm or correct**

5. **Genna updates:**
- project-kb.md
- config.yaml
- Activates/deactivates relevant experts

6. **Experts notified:**
> All experts now have current context

**Timeline:** 10-15 minutes

---

### Workflow: Update Mission/Story

**Best for:** Refining your "why" for pitches/team

**Command:** `@update-mission`

**Steps:**

1. **You initiate:**
```
@update-mission
```

2. **Genna asks deep questions:**
> "Why does THIS project matter to YOU?"

3. **You share your story**

4. **Genna creates mission:**
> Compelling narrative with your "why"

5. **Lyna uses for investor materials**
6. **Benji uses for marketing**

**Timeline:** 30 minutes to 1 hour

---

## Multi-Expert Workflows

### Workflow: Launch Preparation

**Best for:** Preparing to launch

**Steps:**

1. **You initiate:**
```
@genna we're launching in 2 weeks. What do we need?
```

2. **Genna coordinates experts:**

- **Denny:** Technical readiness checklist
- **Ada:** QA, bug fixes, performance
- **Elle:** Legal docs (privacy, terms)
- **Benji:** Launch marketing plan
- **Lyna:** PR strategy (if fundraising)

3. **Each expert delivers their piece**

4. **Genna creates master checklist:**
> All items from all experts

5. **You work through checklist**

6. **Ready to launch!**

**Timeline:** 1-2 weeks (parallel work)

---

### Workflow: Feature Planning to Delivery

**Best for:** Complete feature lifecycle

**Steps:**

1. **Genna:** Strategic decision to build feature
2. **Denny:** Technical specification
3. **Elle:** Legal/compliance review (if needed)
4. **Ada:** Implementation
5. **Denny:** Architecture review
6. **Ada:** Testing & QA
7. **Benji:** Launch plan (if user-facing)
8. **Genna:** Final approval
9. **You:** Deploy!

**Timeline:** 1-2 weeks

---

## Custom Workflows

### Create Your Own!

See: `.fwdpro/pro-os/commands/quick/_TEMPLATE.md`

**Example custom workflows:**
- Your specific industry process
- Company-specific approval flow
- Multi-stage review process
- Recurring monthly tasks

**Steps:**
1. Copy `_TEMPLATE.md`
2. Define your workflow phases
3. Specify which experts do what
4. Save as `your-workflow.md`
5. Use: `@your-workflow`

---

## Workflow Tips

### 1. Start with Quick Commands

Use `@create-spec`, `@create-feature`, `@rt` - they're optimized!

### 2. Tag Multiple Experts

```
@denny @ada let's discuss this approach together
```

### 3. Check Whiteboards

See workflow progress, handoffs, blockers

### 4. Use Your Checklist

Experts tell you what they need from you

### 5. Update Context Regularly

```
@update-project  # Keep experts informed
```

### 6. Ask for Help

```
@genna what's the best workflow for [task]?
```

---

## Next Steps

**Learn all commands:**
→ Read `commands-guide.md`

**Understand files:**
→ Read `file-structure.md`

**Manage your project:**
→ Read `managing-your-project.md`

---

**Now you know how to work with FWD PRO! 🚀**

