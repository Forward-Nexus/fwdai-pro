# Market Research Workflow Pattern

**Created:** October 17, 2025  
**Purpose:** Define the "Research-First" workflow for creating investor
materials with verified data  
**For:** FWD PRO System Implementation  
**Pattern Type:** Core System Workflow

---

## 🎯 THE PROBLEM THIS SOLVES

**Traditional AI Content Creation (Broken):**

```
User: "Create business plan"
  ↓
AI: [Generates plan with plausible-sounding numbers from training data]
  ↓
User: "Are these numbers accurate?"
  ↓
AI: "Uhhhh... maybe? They sound right?" 🤷
  ↓
User: [Has to fact-check everything, wastes hours]
  ↓
RESULT: Can't trust AI output, numbers are made up, investors catch lies
```

**FWD PRO Research-First Workflow (Solution):**

```
User: "Create business plan"
  ↓
Lyna: "Before I write content, let me research the numbers.
       Give me 20 minutes to verify market size, retention,
       and unit economics."
  ↓
[Lyna web searches, documents sources in research file]
  ↓
Lyna: "Research complete! Here's what I found: [research doc link]
       Market size verified, retention benchmarks found,
       competitive pricing documented.

       Want me to proceed with business plan using ONLY
       these verified numbers?"
  ↓
User: [Reviews research doc, approves]
  ↓
Lyna: [Writes business plan extracting from research doc]
  ↓
RESULT: Every number is traceable, verifiable, defensible
```

**Key Difference: USER SEES THE RESEARCH BEFORE THE CONTENT.**

---

## 📁 DOCUMENT STRUCTURE PATTERN

### The Three-Document System

**1. RESEARCH DOCUMENT (Source of Truth)**

```
Location: /documents/market-research/[project]-market-research-verified-data.md

Purpose:
- Authoritative source for ALL statistics
- Every claim is web-searched and cited
- Clear verification status (✅ VERIFIED / ⚠️ ESTIMATE / ❌ UNVERIFIED)
- Updated as new research emerges

Content:
- Market size & growth projections
- Industry benchmarks (retention, churn, CAC, LTV)
- Competitive analysis (pricing, features)
- Research methodology documentation
- Source citations with URLs
- Verification dates
- Task ownership (Lyna vs Benji)
```

**2. BUSINESS PLAN (Extracts from Research)**

```
Location: /documents/business-plan/[project]-business-plan-FINAL.md

Purpose:
- Comprehensive investor-ready business plan
- Uses ONLY numbers from research document
- Links to research doc for transparency

Header includes:
"Research Source: [Link to market-research-verified-data.md]
All statistics verified as of: [Date]"

Content:
- Pulls verified numbers from research doc
- Cites same sources
- Marks estimates clearly
- Maintains single source of truth
```

**3. PITCH DECK (Extracts from Research)**

```
Location: /documents/pitch-deck/[project]-pitch-deck-content.md

Purpose:
- Visual investor presentation
- Uses same verified numbers as business plan
- Maintains consistency through research doc

Header includes:
"All statistics sourced from: [Link to research doc]"

Content:
- Same numbers as business plan (consistency)
- Same sources cited
- Visual format adaptation
```

---

## 👥 EXPERT ROLES & DIVISION OF LABOR

### Lyna (External Strategy - Investor-Facing Metrics)

**Expertise:** Fundraising, investor relations, strategic positioning

**Research Responsibilities:**

- ✅ Market size & growth projections
- ✅ Industry retention/churn benchmarks
- ✅ LTV:CAC ratio standards (SaaS/B2C)
- ✅ Competitive positioning & pricing
- ✅ Fundraising statistics (average raises, valuations)
- ✅ Investment thesis validation
- ✅ ROI projections and comparable company data

**Deliverables:**

- Market research document (investor-facing sections)
- Business plan (all 14 sections)
- Pitch deck content
- Investor materials

**When to Engage:**

- Creating business plans or pitch decks
- Preparing for fundraising
- Updating investor materials
- Competitive analysis for positioning

---

### Benji (Growth & Marketing - Acquisition Metrics)

**Expertise:** User acquisition, growth strategy, marketing

**Research Responsibilities:**

- ✅ Customer acquisition cost (CAC) by channel
- ✅ Conversion rate benchmarks (landing page, app store, trial-to-paid)
- ✅ Viral coefficient and referral program data
- ✅ Marketing channel performance (paid ads, organic, content, social)
- ✅ User onboarding and drop-off patterns
- ✅ Feature adoption and engagement drivers
- ✅ Growth metrics (k-factor, payback period)

**Deliverables:**

- Market research document (growth/marketing sections)
- Go-to-market strategy
- User acquisition plans
- Growth projections

**When to Engage:**

- Planning user acquisition strategy
- Calculating marketing budget needs
- Validating growth projections
- Optimizing conversion funnels

---

### Collaboration Areas (Lyna + Benji)

**Unit Economics:**

- **Lyna:** Provides LTV:CAC framework and investor expectations
- **Benji:** Verifies CAC estimates by acquisition channel
- **Together:** Validate projections are realistic and defensible

**Retention/Churn Analysis:**

- **Lyna:** Finds industry retention benchmarks for investor framing
- **Benji:** Analyzes user behavior patterns and engagement drivers
- **Together:** Assess product's retention targets against industry

**Competitive Analysis:**

- **Lyna:** Competitive positioning and pricing strategy for investors
- **Benji:** Competitor marketing channels and acquisition tactics
- **Together:** Identify competitive advantages, moats, and market gaps

**Example Collaboration:**

```
User: "What should our customer acquisition cost be?"

Lyna: "Industry benchmarks show mental health apps average
       $75-150 CAC. For investors, we need to show 4-8x LTV:CAC
       ratio. @benji can you verify those CAC numbers and break
       down by channel?"

Benji: "Researching now. Found:
       - Paid social: $80-120 per user
       - Content marketing: $40-60 per user
       - Referral: $20-30 per user

       Blended CAC of $50-70 is achievable with smart channel mix.
       Here's breakdown..."

Lyna: "Perfect. That gives us 5-8x LTV:CAC at $9.99/mo pricing
       with projected retention. Updating research doc and business
       plan with your findings."
```

---

## 🔄 THE RESEARCH-FIRST WORKFLOW (SCIENTIFIC METHOD FOR BUSINESS DOCS)

### Overview: The 5-Step Research Integrity Process

**This workflow mirrors the scientific method:**

```
SCIENCE CLASS                    FWD PRO RESEARCH-FIRST
─────────────────────────────────────────────────────────────
1. Ask Questions            →    1. Define Research Questions
2. Do Background Research   →    2. Source Collection (Raw Data)
3. Observe & Document       →    3. Findings Summary (What Sources Say)
4. Analyze & Interpret      →    4. Analysis & Synthesis (What It Means)
5. Report Conclusions       →    5. Integration (Apply to Business Docs)
```

**KEY PRINCIPLE: Separate DATA from ANALYSIS at every step.**

---

### Phase 1: Define Research Questions

**Step 1: Identify What We Need to Know**

When user requests investor materials (business plan, pitch deck, etc.):

```markdown
Lyna: "Before I create the [deliverable], I need to verify the numbers. Let me
start by defining what questions we need to answer:

       Research Questions:
       1. How big is the market and how fast is it growing?
       2. What are industry retention benchmarks?
       3. What do competitors charge?
       4. What unit economics do investors expect?
       5. What causes users to abandon apps?

       Priority 1 (Critical - 30-40 mins):
       - Questions 1-4 above

       Priority 2 (If needed):
       - Question 5 + deeper competitive analysis

       This will take 30-40 minutes. Sound good?"
```

**Document Format:** Create:
`/documents/market-research/[project]-research-questions.md` (optional)

- List all questions BEFORE searching
- No assumptions, no guessing
- Pure inquiry

**Don't start research until questions are defined.**

---

### Phase 2: Source Collection (Raw Data Only)

**Step 2: Gather All the Receipts**

**Document:**
`/documents/market-research/[project]-market-research-verified-data.md`

**Purpose:** Archive of ALL research sources with findings summaries

```markdown
Lyna's Process:

1. For each research question:
   - Perform web_search with specific query
   - Evaluate source credibility
   - Document: URL, publication date, author/org, methodology
   - Extract ONLY what the source says (no interpretation yet)
2. Organize by category:
   - Market Size & Growth
   - Retention & Abandonment
   - Competitive Pricing
   - Unit Economics Benchmarks
3. For each source, document:
   - URL (verify it works!)
   - Key Finding (what does THIS source say?)
   - Verification Date (when did we check this?)

During research:

- Document search queries used (reproducibility)
- Note limitations or caveats from sources
- Assess recency of data (prefer 2-3 years max)
- Prioritize reputable sources (.gov/.edu > journals > research firms)
- KEEP RAW - no analysis or conclusions yet
```

**Example Entry:**

```markdown
**Source 5: Adjust - Mobile App Retention Benchmarks for 2023**

- **URL:**
  https://www.adjust.com/blog/get-the-mobile-app-retention-benchmarks-for-2023/
- **Key Finding:** Health & fitness apps: 7% Day 30 retention (2022 data)
- **Verified:** October 18, 2025
```

**What NOT to include:**

- ❌ "This means [Project] can do better"
- ❌ "Our 25-40% target is achievable because..."
- ❌ Any interpretation or connection to your product

**JUST THE FACTS FROM SOURCES.**

---

### Phase 3: Findings Summary (What the Research Actually Says)

**Step 3: Summarize Research Findings**

**Still in:**
`/documents/market-research/[project]-market-research-verified-data.md`

**Add section:** "ChatGPT Research Process Documentation"

```markdown
Purpose:

- Summarize patterns across sources
- Note what each source contributes
- Still NO product-specific analysis
- Keep it descriptive, not prescriptive

Include ChatGPT conversations:

- Full research request/response
- Show research process
- Document methodology
- Preserve raw findings

Example Summary: "Mobile health apps face high user drop-off rates. A recent
scoping review of 18 studies (2014–2022) found 70% of users discontinued within
the first 100 days. Industry data show 66–69% of health & fitness app users stop
within 90 days. Recovery-focused apps tend to see even faster abandonment."

[Source citations inline]
```

**What to include:**

- ✅ What multiple sources agree on
- ✅ Where sources conflict (note discrepancies)
- ✅ Data ranges and averages
- ✅ Methodology notes (study size, date range)

**What NOT to include:**

- ❌ "[Project] solves this by..."
- ❌ Projections about your product
- ❌ Competitive positioning claims

**STILL RAW DATA, JUST ORGANIZED.**

---

### Phase 4: Analysis & Synthesis (What This MEANS for Your Product)

**Step 4: Connect Research to Product**

**NEW Document:**
`/documents/market-research/[project]-market-research-references.md`

**Purpose:** Investor-ready analysis connecting research to your product

```markdown
Lyna's Process:

1. Read verified data document (source of truth)
2. NOW make connections to your product:
   - "Industry retention is 7%, our target is 25-40% because..."
   - "Competitors charge $19-24/mo, we start at $9.99 to..."
   - "6 documented abandonment causes, [Project] addresses..."
3. Create investor-ready claims:
   - Backed by research from verified data doc
   - Clear citations (link to sources)
   - Projections marked as projections
   - Reasoning transparent
4. Structure for investor consumption:
   - Executive Summary
   - Research Methodology
   - Verified Market Data
   - [Project] Projections (with basis)
   - Bibliography

Format Example: "Industry Benchmark: Health & fitness apps average 7% Day 30
retention (Adjust, 2023). Recovery apps perform worse, with faster abandonment
rates (JMIR, 2024).

[Project] Target: 25-40% Day 30 retention

Basis for Projection:

- Early validation: 50+ users, high engagement (daily usage)
- Professional endorsement: Domain experts recommending unprompted
- Architecture addresses all 6 documented abandonment causes
- Built-in stickiness: Personalization, memory, emotional connection

Risk Acknowledgment: Target is 3-5x top competitors. While early signals support
this, scale validation is needed. Conservative projection: 20-25% retention."
```

**This is where project-specific analysis lives.**

**User reviews this BEFORE it goes into business plan/pitch deck.**

---

### Phase 5: Integration (Apply to Business Documents)

**Step 5: Extract Analysis into Deliverables**

**Documents:** Business Plan, Pitch Deck, Investor Materials

```markdown
Lyna's Process:

1. Read references document (investor-ready analysis)
2. Extract claims with citations for deliverable
3. Adapt language for format:
   - Business Plan: Narrative with detail
   - Pitch Deck: Visual highlights with key stats
   - One-Pager: Executive summary version
4. Link back to references doc in header
5. Maintain consistency across all deliverables

Business Plan Header Example: "Research Source:
/documents/market-research/[project]-market-research-references.md All
statistics verified as of: October 18, 2025"

Content Example: "The mental health app market is projected to grow from $6.63B
(2024) to $26.50B (2033) at 16.65% CAGR (Market Data Forecast, 2024). Within
this market, retention remains a critical challenge—industry average is just 7%
Day 30 retention, with recovery apps performing worse (Adjust 2023, JMIR 2024).

[Project] targets 25-40% Day 30 retention based on early validation: 50+ users
with high engagement, therapist endorsements, and architecture addressing all 6
documented abandonment causes."
```

**All numbers come FROM references doc → which comes FROM verified data doc.**

**Clear chain of custody: Sources → Analysis → Content**

---

### Phase 6: Quality Check Before Finalizing

**Step 6: Research Integrity Verification**

```markdown
Before marking deliverable as FINAL:

Research Integrity Checklist: □ Research questions document exists (or defined
in process) □ Verified data document has all source URLs (working links) □
References document connects research to product claims □ Every statistic in
business plan/pitch deck traces to references doc □ All sources have URLs or
report names □ Estimates are clearly marked as projections with reasoning □ No
"research shows" without citation in verified data doc □ User can audit entire
chain: sources → analysis → content □ References doc is linked in all
deliverable headers/footers

If ANY checkbox is unchecked → NOT FINAL
```

---

### Phase 7: Maintenance & Updates

**Step 7: Living Document Updates**

```markdown
Research documents are LIVING DOCUMENTS:

Monthly Review:

- Check for stale data (sources >3 years old)
- Search for new industry reports
- Update sections with new findings

Triggered Updates:

- Major industry report releases
- Before investor meetings (verify currency)
- User feedback on inaccurate numbers
- Competitive landscape changes

When Research Updates:

1. Update research document with new data
2. Flag sections in business plan/pitch deck that need updates
3. Update content to match new research
4. Note update date and reason

Version Control:

- Track major updates with date stamps
- Note when sources are replaced
- Maintain history of research evolution
```

---

## 📋 WORKSPACE COORDINATION

### Market Research Workspace

**File:** `/0-roundtable/workspace/market-research.md`

**Purpose:**

- Track research project status
- Coordinate between Lyna and Benji
- Link to research deliverables
- Show handoffs and dependencies

**Structure:**

```markdown
# Market Research Workspace

**Project:** [Project Name] **Status:** 🔄 IN PROGRESS / ✅ COMPLETE
**Started:** [Date] **Research Team:** Lyna + Benji

## Quick Status

**Lyna's Research:**

- ✅ Market size verified
- ✅ Industry retention verified
- 🔄 Competitive pricing (in progress)
- ❌ Unit economics (not started)

**Benji's Research:**

- ❌ CAC by channel (waiting for Lyna to complete)
- ❌ Conversion benchmarks (not started)

**Blockers:**

- None currently

**Next Actions:**

- Lyna: Complete competitive pricing research
- Benji: Start CAC research after Lyna's completion
- Founder: Review research doc once Lyna finishes Priority 1

## Deliverables

**Primary:**

- Research Document: [link]
- Status: [status]

**Derived (Using Research):**

- Business Plan: [link] - Status: Waiting for research
- Pitch Deck: [link] - Status: Waiting for research

## Handoffs

**From Lyna → Founder:**

- Research doc for review (Priority 1 complete)

**From Lyna → Benji:**

- Investor-facing metrics complete, ready for Benji's growth research

**From Lyna + Benji → Content:**

- Research complete → Business plan creation
- Research complete → Pitch deck creation

## Related Work

**Depends On:**

- None (research is foundational)

**Enables:**

- Business plan creation
- Pitch deck creation
- Investor materials
- Go-to-market strategy
```

---

### Business Plan Workspace

**File:** `/0-roundtable/workspace/[project]-business-plan.md`

**Links to Research:**

```markdown
# Business Plan Workspace

**Status:** ⚪ WAITING - Blocked by market research completion

**Prerequisites:**

- ✅ Market research Priority 1 complete (Lyna)
- ❌ Market research Priority 2 (Benji) - Optional for initial draft
- ❌ Founder approval of research findings

**Next Steps:**

1. Founder reviews research doc
2. Founder approves proceeding with verified numbers
3. Lyna creates business plan using research doc
4. Founder reviews business plan

**Research Source:**

- Primary: [link to market-research-verified-data.md]
- All numbers extracted from research doc
- No made-up statistics allowed
```

---

## 🎯 IMPLEMENTATION CHECKLIST

### For FWD PRO System

**Phase 1: Document Templates**

- [x] Create market research document template
- [x] Create workspace template for market research projects
- [ ] Add research links to business plan template
- [ ] Add research links to pitch deck template
- [ ] Update all expert personas with research workflow

**Phase 2: Expert Training**

- [ ] Add "Research-First Workflow" to Lyna's persona
- [ ] Add "Growth Metrics Research" to Benji's persona
- [ ] Document Lyna/Benji collaboration patterns
- [ ] Create research methodology guide
- [ ] Add web search best practices

**Phase 3: Workflow Integration**

- [ ] Update expert-collaboration.md with research workflow
- [ ] Update expert-content.md with "Research Before Writing" rule
- [ ] Add research integrity checklist to all workflows
- [ ] Create "Research Verification Badge" system
- [ ] Document how to maintain living research docs

**Phase 4: Quality Assurance**

- [ ] Add verification status to all deliverables (✅ VERIFIED / ⚠️ PARTIAL / ❌
      DRAFT)
- [ ] Create audit process for existing content
- [ ] Build research update trigger system
- [ ] Track research integrity metrics

---

## 📊 SUCCESS METRICS

**How We Know This Pattern Works:**

✅ **Zero fabricated citations** in investor materials  
✅ **Research doc exists** before business plan/pitch deck  
✅ **Every number traceable** to research doc  
✅ **Users approve research** before content creation  
✅ **Investors can verify** all claims  
✅ **Updates are systematic** (research → content)  
✅ **Experts collaborate efficiently** (Lyna → Benji handoffs smooth)  
✅ **Users trust output** without fact-checking

---

## 🚀 COMPETITIVE ADVANTAGE

### Why This Makes FWD PRO Different

**Most AI Systems:**

- Generate content with plausible-sounding "facts"
- No distinction between verified data and hallucinations
- Users must fact-check everything
- No accountability for false information

**FWD PRO with Research-First:**

- Research documented BEFORE content creation
- Clear verification status on all claims
- User sees and approves research
- Single source of truth (research doc)
- Every number is traceable and verifiable
- Updates are systematic and documented

**The Marketing Message:**

> **"FWD PRO: The AI That Shows Its Work"**
>
> "Every business plan, pitch deck, and investor material is built on verified
> research—not plausible-sounding fiction.
>
> Our Research-First workflow means you see the sources before we write the
> content. Every statistic is traceable. Every claim is defensible.
>
> When research doesn't exist, we tell you—and provide honest, well-reasoned
> estimates instead.
>
> Research integrity isn't a feature. It's our foundation."

**Who This Appeals To:**

- Founders raising capital (need defensible numbers for investors)
- Consultants (need to trust AI output with clients)
- Academics (proper research and citations matter)
- Legal teams (accurate claims avoid liability)
- Anyone who values truth over bullshit

**This is a GENUINE competitive moat.**

---

## 🎓 KEY PRINCIPLES

### The Research-First Mindset

**1. Research Before Writing**

- Never generate content with statistics before verifying them
- Create research doc first, content second
- User approves research before content creation begins

**2. Single Source of Truth**

- Research doc is authoritative for all numbers
- Business plan and pitch deck extract from research doc
- Updates to research trigger content updates
- No duplicate sources of data

**3. Transparent Verification**

- Mark status on all claims (✅ VERIFIED / ⚠️ ESTIMATE / ❌ UNVERIFIED)
- Document search queries (reproducibility)
- Show methodology and limitations
- User sees confidence level for all data

**4. Honest Estimates**

- When research doesn't exist, SAY SO
- Provide reasoning for projections
- Acknowledge what's not proven
- Clear distinction from verified data

**5. Living Documents**

- Research gets stale over time
- Regular reviews and updates
- Version control with dates
- Trigger updates when research changes

**6. Expert Collaboration**

- Lyna handles investor-facing metrics
- Benji handles growth/marketing metrics
- Clear handoffs and dependencies
- Both work from same research doc

---

## 📚 RELATED PATTERNS

**This Pattern Connects To:**

1. **Source of Truth Principle** (fwdpro-system-improvements.md)
   - Research doc is source of truth for statistics
   - Business plan/pitch deck extract from it
   - No second-guessing verified sources

2. **Research Integrity Protocol** (fwdpro-system-improvements.md)
   - Three-tier citation standard
   - Verification workflow
   - Never cite without web searching

3. **Expert Collaboration** (expert-collaboration.md)
   - Lyna and Benji division of labor
   - Handoffs and dependencies
   - Workspace coordination

4. **Living Documents** (fwdpro-system-improvements.md)
   - Research docs need maintenance
   - Regular reviews and updates
   - Version control and history

5. **Document Hierarchy** (fwdpro-system-improvements.md)
   - Research doc → Business plan → Pitch deck
   - Workspace tracks research project
   - Whiteboard shows high-level status

---

## ⚙️ IMPLEMENTATION NOTES

### For FWD PRO Team

**This pattern should be:**

- Documented in expert personas (Lyna, Benji)
- Built into workflow templates
- Enforced via quality checklists
- Tracked as success metric

**Key files to update:**

1. `lyna.md` - Add research-first workflow to responsibilities
2. `benji.md` - Add growth metrics research responsibilities
3. `expert-collaboration.md` - Add Lyna/Benji research collaboration
4. `expert-content.md` - Add "Research Before Writing" rule
5. `workspace.md` - Add market research workspace pattern
6. Create: `patterns/research-first-workflow.md` (this document)

**Success criteria:**

- Users request business plan → Expert asks to research first
- Research doc created before content
- All deliverables link to research doc
- No fabricated statistics in any output

---

## 🎯 EXAMPLE WALKTHROUGH

### Real-World Application: Example Business Plan

**User Request:**

```
Founder: "I need to create a business plan for investors.
       Here's my product info..."
```

**Lyna's Response (Research-First):**

```
Lyna: "Got it! Before I write the business plan, I need to
       verify the market data. Here's what I'll research:

       Priority 1 (30-40 mins):
       ✅ Mental health app market size & growth
       ✅ Industry retention rates (claimed 3.9% average)
       ✅ Competitive pricing ($19-24/mo claim)
       ✅ Unit economics benchmarks (LTV:CAC ratios)

       Priority 2 (If needed):
       ✅ Recovery-specific market subset
       ✅ Abandonment causes validation
       ✅ CAC benchmarks by channel

       I'll document everything in a research file with sources.
       You'll review it before I write the plan.

       Sound good?"
```

**Research Phase:**

```
[Lyna creates /documents/market-research/[project]-market-research-verified-data.md]
[Performs web searches, documents sources]
[Marks verification status]
```

**Research Presentation:**

```
Lyna: "Research complete! Here's what I found:

✅ VERIFIED:
- Market size: $23.6B → $50.5B ✅ (Grand View Research 2024, URL)
- Competitive pricing: $19-24/mo ✅ (Verified 5 competitors)
- LTV:CAC benchmark: 3-5x healthy ✅ (SaaS Capital data)

⚠️ NEEDS HONEST ESTIMATE:
- Industry retention: Found 3.9% claim but need better source
- Your retention target (25-40%): This is projection based on
  early validation, not proven at scale yet

❌ COULDN'T VERIFY:
- "Research shows 2-3x retention from personalization" -
  This claim doesn't have real research backing. Recommend
  removing OR reframing as hypothesis.

Full research doc: /documents/market-research/[project]-market-research-verified-data.md

Ready for me to write the business plan using verified numbers?"
```

**User Approval:**

```
Founder: "Yes, looks good. Use the verified numbers and honest
       estimates (marked clearly). Remove the fake research claim."
```

**Content Creation:**

```
[Lyna creates business plan]
[Extracts numbers from research doc]
[Links to research doc in header]
[Cites same sources]
[Marks estimates clearly]
```

**Result:**

- ✅ Business plan with 100% traceable statistics
- ✅ Research doc investor can review
- ✅ Clear distinction between verified data and projections
- ✅ No fabricated research claims
- ✅ Defensible to investor scrutiny
- ✅ Founder trusts the output completely

---

## 🏆 THE BOTTOM LINE

**This pattern solves the fundamental AI credibility problem:**

> **"How can users trust AI-generated content when it makes up
> plausible-sounding facts?"**

**Answer:**

> **"By making research transparent, documented, and verifiable BEFORE writing
> content."**

**Research-First means:**

- Users see the sources before the content
- Every number is traceable
- Clear confidence levels on all claims
- Honest about what isn't proven
- Updates are systematic
- Trust is earned through verification

**This is how FWD PRO becomes "The AI System You Can Actually Trust."**

---

**Pattern Status:** ✅ READY FOR IMPLEMENTATION  
**Next Steps:** Update expert personas and workflow docs
