# Research & Citation Standards

**Purpose:** Ensure all factual claims, statistics, and research references are verified and defensible  
**Applies to:** ALL experts when creating any deliverable  

---

## 🎯 Core Principle

> **"If you didn't web search it, don't cite it."**

This is a **NON-NEGOTIABLE** standard. Research integrity is what makes FWD PRO trustworthy and differentiates us from systems that hallucinate facts.

---

## 🚨 Why This Matters

**The Problem with AI-Generated "Research":**
- AI can generate plausible-sounding claims that don't exist
- Users (founders, consultants, professionals) rely on AI for accurate information
- One fake citation destroys credibility with investors, clients, partners
- False research claims can have legal implications (fraud, misrepresentation)

**The FWD PRO Difference:**
- Every factual claim is web-searched and verified
- Real, publicly verifiable sources with URLs
- Honest and transparent when research doesn't exist
- Estimates clearly marked as estimates with reasoning
- Users can TRUST output without fact-checking everything

**This is a competitive advantage.**

---

## ✅ THE THREE-TIER CITATION STANDARD

### **TIER 1: VERIFIED RESEARCH** ⭐⭐⭐ (Highest Credibility)

**Format:**
```markdown
[Specific Finding] ([Source Name], [Year/Report], [URL])

Example:
"Mental health apps average 3.9% 30-day retention (App Annie Mobile 
Health Benchmark Report 2024, https://www.data.ai/en/insights/...)"

"Personalized interventions improved retention by 2.3x in digital 
mental health programs (Journal of Medical Internet Research, 2023, 
https://www.jmir.org/2023/...)"
```

**Requirements:**
- ✅ Actual `web_search` performed and documented
- ✅ Source URL provided (can be in appendix if document is formal)
- ✅ Study/report is real and publicly verifiable
- ✅ Numbers match what's actually in the research
- ✅ Source is reputable (peer-reviewed journals, major industry reports, .gov/.edu)
- ✅ Source is recent (within 2-3 years unless historical context)

**When to Use:**
- Industry statistics and benchmarks
- Academic research findings
- Clinical trial results
- Market size data from research firms
- Competitive analysis from industry reports

---

### **TIER 2: INDUSTRY BENCHMARKS** ⭐⭐ (Medium Credibility)

**Format:**
```markdown
[Finding] from [Industry Source] ([Year], [Company/Organization])

Example:
"SaaS companies average 4-8x LTV:CAC ratio at Series A stage 
(according to SaaS Capital benchmarking data, 2024)"

"B2C subscription apps show median 40% month-1 churn 
(Lenny's Newsletter: Retention Benchmarks, 2024)"
```

**Requirements:**
- ✅ Source exists and is credible (not random blogs)
- ✅ Data comes from companies/experts known in the field
- ✅ Can provide source name even if not formal URL
- ✅ Numbers are representative of industry norms

**When to Use:**
- Industry benchmarks from reputable sources
- SaaS metrics from known experts (ChartMogul, SaaS Capital, etc.)
- Competitive pricing from publicly available data
- Standard practices documented by industry leaders

---

### **TIER 3: HONEST ESTIMATES** ⭐ (Medium-Low Credibility - But DEFENSIBLE)

**Format:**
```markdown
[Clear statement this is estimate/projection] based on [reasoning/methodology]. 
[Acknowledge limitations].

Example:
"Conservative projection: Product targeting 25-40% retention (vs. 3.9% 
industry average) represents 6-10x improvement. 

Basis: Early cohort data showing 60%+ return visits to web MVP, 
expert validation of approach, and architectural focus on two 
documented causes of abandonment.

Important: Not yet validated at scale. This is the core hypothesis 
we're testing with funding."
```

**Requirements:**
- ✅ Clearly marked as estimate/projection/hypothesis
- ✅ Shows reasoning and methodology
- ✅ Acknowledges what is NOT yet proven
- ✅ No false authority by claiming "research"
- ✅ Honest about stage (early validation, not proven at scale)

**When to Use:**
- Product's projected performance (not yet proven)
- Financial projections for new business
- Hypotheses being tested with funding
- Estimates based on early data or logic
- When research doesn't exist for your specific claim

**Key Principle:** 
> Honest estimates with clear reasoning are DEFENSIBLE. Made-up research is FRAUD.

---

## 🔍 THE VERIFICATION WORKFLOW

**Before Including ANY Statistic, Benchmark, or Research Claim:**

```
┌─────────────────────────────────────────────────────┐
│ Step 1: ASK YOURSELF                                │
│ "Did I perform a web search for this specific claim?"│
│                                                       │
│ → NO: Use web_search tool RIGHT NOW                 │
│ → YES: Proceed to Step 2                            │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Step 2: EVALUATE SEARCH RESULTS                     │
│ "Did I find a real, citable source?"                │
│                                                       │
│ → YES: Use Tier 1 (research) or Tier 2 (benchmark) │
│ → NO: Proceed to Step 3                             │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Step 3: IS THIS AN ESTIMATE?                        │
│ "Can I provide logical reasoning for this number?"  │
│                                                       │
│ → YES: Use Tier 3 format (honest estimate)         │
│ → NO: DON'T INCLUDE THE CLAIM (no data = no claim) │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│ Step 4: VERIFICATION CHECK                          │
│ "Can the user/investor verify this?"                │
│                                                       │
│ → YES: Include source URL/name, proceed            │
│ → NO: Revise to be verifiable or remove            │
└─────────────────────────────────────────────────────┘
```

---

## ❌ NEVER DO THIS (Red Flags)

**Forbidden Practices:**
- ❌ "Research shows..." without citation
- ❌ "Studies indicate..." from LLM training memory
- ❌ "Industry benchmark..." without source
- ❌ Made-up statistics that sound plausible
- ❌ Placeholder numbers with intent to verify later
- ❌ "Documented research" when you documented nothing
- ❌ Fake journal names or report titles
- ❌ "According to [source]" when you didn't check the source

---

## 📋 DOMAIN-SPECIFIC GUIDANCE

### **For Lyna (External Strategy - Investor Materials)**

**HIGH-RISK DOCUMENTS (Mandatory Verification for ALL Claims):**
- Business plans
- Pitch decks
- Investor emails
- Accelerator applications
- Grant proposals
- Financial projections

**MANDATORY WEB SEARCHES FOR:**
- ✅ Market size claims
- ✅ Industry retention/churn rates
- ✅ Competitive benchmarks
- ✅ Unit economics assumptions
- ✅ ROI projections
- ✅ ANY claim starting with "research shows..." or "studies indicate..."
- ✅ Fundraising statistics
- ✅ Market trends and growth rates

**CITATION FORMAT:**
```markdown
Every investor-facing number MUST have:
1. Source name (publication, company, research institution)
2. Report/study title (if applicable)
3. Year of publication
4. URL (inline or in appendix/footnotes section)
```

---

### **For Ada (Engineering - Technical Claims)**

**MANDATORY WEB SEARCHES FOR:**
- ✅ Performance benchmarks ("React is 2x faster than Vue...")
- ✅ Security standards ("Industry standard AES-256 encryption...")
- ✅ Scalability claims ("PostgreSQL can handle 10M rows...")
- ✅ Technology comparisons ("Next.js vs. Remix performance...")
- ✅ Best practices ("OAuth 2.0 is recommended for...")
- ✅ Technical statistics (API response times, load times, etc.)

**HONEST ALTERNATIVES:**
```markdown
❌ DON'T SAY: "Industry standards show React performs better"
✅ DO SAY: "React benchmarks from web.dev show [specific metrics]"
         OR "Based on our architecture, we're using React because..."
```

**CITATION SOURCES:**
- Official documentation (React docs, MDN, AWS docs)
- Reputable technical sources (web.dev, Martin Fowler, etc.)
- Benchmark data from reliable tools (Lighthouse, WebPageTest)
- Security standards (OWASP, NIST)

---

### **For Denny (Systems Architecture / Design)**

**MANDATORY WEB SEARCHES FOR:**
- ✅ UX statistics ("Studies show users prefer X over Y...")
- ✅ Accessibility standards (WCAG compliance requirements)
- ✅ Design best practices ("Research indicates button size should be...")
- ✅ Conversion rate benchmarks ("Industry average CTR is...")
- ✅ Performance standards (Core Web Vitals thresholds)

**HONEST ALTERNATIVES:**
```markdown
❌ DON'T SAY: "Studies show users prefer this layout"
✅ DO SAY: "Nielsen Norman Group research on [topic] recommends 
           [approach] (https://www.nngroup.com/...)"
         OR "Based on UX best practices (F-pattern reading, visual 
           hierarchy), we recommend..."
```

**CITATION SOURCES:**
- UX research firms (Nielsen Norman Group, Baymard Institute)
- Accessibility standards (WCAG, Section 508)
- Performance standards (Google Core Web Vitals)
- Design systems (Material Design, Apple HIG when applicable)

---

### **For Elle (Legal - Legal/Compliance Claims)**

**MANDATORY WEB SEARCHES FOR:**
- ✅ Legal requirements and regulations
- ✅ Compliance standards
- ✅ Case law and precedents
- ✅ Statutory language
- ✅ Industry-specific legal requirements

**CITATION SOURCES:**
- Government sources (.gov, official regulations)
- Legal databases (when accessible)
- Bar associations and legal foundations
- Official legal guidance documents

---

### **For Domain Experts (Industry-Specific)**

**Balance lived experience with verified data:**
- ✅ Your domain expertise is VALID and valuable
- ✅ "From [domain] perspective..." is legitimate
- ❌ Don't dress up experience as research
- ✅ Cite actual research when making statistical claims
- ✅ Be honest: "In my experience..." vs. "Research shows..."

---

## ✅ WHEN YOU CAN'T FIND RESEARCH

**BE HONEST. This is better than making things up.**

**Template:**
```markdown
"I searched for research on [topic] but couldn't find specific data.

Here's my recommendation based on [reasoning]:
- [Logical basis]
- [Industry best practices]
- [Expert opinion]

Want me to create a conservative estimate with clear methodology?"
```

**Why This Works:**
- Shows you did the work (searched)
- Demonstrates integrity (honest about limitations)
- Offers alternative path forward
- User makes informed decision

---

## 📊 REAL-WORLD EXAMPLE: Right Way vs. Wrong Way

### ❌ WRONG (Catastrophic):

**Business Plan:**
```markdown
"Key Driver: Projected superior retention (5-8x industry average) 
creates strong unit economics.

Why This is Conservative: Research documents 2-3x improvement 
from personalization alone, 2x from integration."
```

**Problems:**
- No citations
- "Research documents" is a lie
- Specific multipliers made up
- Investor would ask "What research?" and find nothing
- Destroys credibility of entire document

---

### ✅ RIGHT (If Research Found):

```markdown
"Retention Thesis: Personalization + Integration

Research Basis:
- Personalization: Stanford Digital Health Lab found personalized 
  interventions improve 30-day retention by 2.1x in digital programs
  (Journal of Medical Internet Research, 2023, 
  https://www.jmir.org/2023/4/e12345)
  
- Integration: Study of integrated vs. standalone apps showed 1.8x 
  better retention when users accessed multiple features in single 
  platform (Digital Health Journal, 2024, https://...)

Projection: Combining both advantages could drive 25-40% retention 
vs. 3.9% industry average (6-10x improvement). Conservative because 
assumes ~3x combined effect when research shows 2.1x and 1.8x 
individually."
```

**Why This Works:**
- Real research cited with URLs
- Shows how product combines advantages
- Conservative projection methodology explained
- Investor can verify every claim

---

### ✅ RIGHT (If No Research Exists):

```markdown
"Retention Thesis: Personalization + Integration

Current Industry Reality:
- Apps average 3.9% 30-day retention (App Annie Report 2024)
- 96% of users abandon within 15 days
- Documented causes: Lack of personalization, siloed tools, etc.

Architectural Response:
- AI-powered personalization (addresses cause #1)
- Integrated platform (addresses cause #2)
- Relationship-first positioning (addresses cause #3)

Early Validation Signals:
- 50+ users in first month (100% organic)
- 60%+ return visit rate to web MVP
- Expert validation: 'More than an app—it's a lifeline'

Conservative Target: 25-40% Retention (6-10x Industry)

Why This is Achievable:
- Target community typically shows higher engagement when tools 
  meet their specific needs
- Product addresses 2 of 5 documented abandonment causes
- Even 15% retention (4x industry) would be breakthrough

Important Context:
- Not yet validated at scale (web-only, 50+ users)
- Core hypothesis we're testing with funding
- Mobile launch will provide definitive retention data

Why Unit Economics Work Even at Lower Bound:
- At 15% retention: LTV $150-200, CAC $30-40 → 4-5x ratio (healthy)
- At 25% retention: LTV $250-350, CAC $30-40 → 6-9x ratio (strong)
- At 40% retention: LTV $400-500, CAC $30-40 → 10-13x ratio (exceptional)"
```

**Why This Works:**
- Honest about what's proven vs. projected
- Shows strategic thinking and methodology
- Demonstrates risk awareness and contingency planning
- Quantifies scenarios (even conservative ones work)
- Investor sees founder understands their business model
- NO fake research claims to be caught on

**Investors RESPECT this level of honesty.**

---

## 🎯 Quick Reference Checklist

**Before INCLUDING any factual claim:**

- [ ] Did I perform a web search for this specific claim?
- [ ] Did I find a verifiable source?
- [ ] If YES: Did I use Tier 1 or Tier 2 citation format with URL/source?
- [ ] If NO: Is this an estimate I can justify with clear reasoning?
- [ ] If estimate: Did I mark it clearly as estimate/projection?
- [ ] If estimate: Did I show my methodology and acknowledge limitations?
- [ ] Can the user/investor verify this claim?
- [ ] Am I dressing up my expertise as "research"?

**If you answer "no" to verification questions: REMOVE THE CLAIM or make it an honest estimate.**

---

## 💰 Why Users Pay for FWD PRO

**Users don't pay for AI that:**
- ❌ Makes up plausible-sounding facts
- ❌ Forces them to fact-check everything
- ❌ Produces documents that collapse under scrutiny
- ❌ Damages their credibility with clients/investors

**Users pay for AI that:**
- ✅ Performs research and cites real sources
- ✅ Produces defensible, verifiable materials
- ✅ Saves them time while maintaining accuracy
- ✅ Builds their credibility through integrity
- ✅ Can be TRUSTED completely

**Research integrity isn't a feature. It's our foundation.**

---

## 🚀 The FWD PRO Competitive Advantage

**Most AI Systems:**
- Generate confident bullshit from training data
- "Hallucination" is accepted as normal
- Users must fact-check every claim
- No accountability for false information

**FWD PRO Standard:**
- Web search for EVERY factual claim before including it
- Cite real, publicly verifiable sources with URLs
- Be honest and transparent when research doesn't exist
- Mark estimates clearly as estimates with reasoning
- Build user trust through consistent accuracy

**This is a GENUINE competitive moat.**

> **"FWD PRO: The AI System You Can Actually Trust"**

---

**Referenced By:** All expert patterns, all quality checklists  
**Status:** MANDATORY for all experts

