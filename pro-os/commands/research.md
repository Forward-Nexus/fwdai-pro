# Research Command

**Command:** `@research`  
**Type:** Universal research command  
**Purpose:** Investigate and gather information about anything

---

## When This Command is Invoked

**Trigger:** User says `@[expert] @research [thing]`

**Examples:**

- `@lyna @research venture capital firms in our space`
- `@denny @research best database options for our use case`
- `@benji @research hiring platforms for technical roles`
- `@genna @research competitor product features`

---

## AI Instructions

### Step 1: Define Research Scope

**Clarify:**

- What exactly to research?
- What's the goal? (make decision, understand landscape, find options)
- How deep? (quick overview vs comprehensive analysis)
- Any constraints? (budget, timeline, location)

### Step 2: Assess Research Scope

**Can Cursor AI handle this?**

**Cursor AI is GOOD for:**

- Quick overviews and summaries
- Technical documentation review
- Best practices research (1-3 sources)
- Comparing 2-3 known options

**Cursor AI is LIMITED for:**

- Comprehensive market research (10+ sources)
- Industry benchmark compilation
- Detailed competitive analysis (5+ competitors)
- Financial projections requiring extensive verification
- Paywalled research or industry reports
- Real-time data aggregation

**If too complex for Cursor:** Recommend deep research tools (ChatGPT Deep
Research, Perplexity Pro) with specific prompt.

### Step 3: Conduct Research

**For research within scope:**

1. **Web search** for current information
2. **Document sources** (URLs, dates)
3. **Verify credibility** of sources
4. **Cross-reference** key claims
5. **Mark confidence** (✅ verified / ⚠️ estimate / ❌ unverified)

**Search patterns:**

- "[topic] [current year]"
- "[topic] best practices [current year]"
- "[topic] comparison [current year]"

### Step 4: Document Findings

**Create:** `roundtable/workspace/[name]-research.md`

**Include:**

- Research conducted
- Sources with URLs
- Key findings
- Verification status
- Date researched

**For investor materials:** Follow `standards/investor-materials-standards.md`
for research-backed content.

### Step 5: Create Deliverable

**Save:** `documents/research/[name]-research.md`

**Structure:**

- Executive summary
- Key findings
- Detailed research
- Sources cited
- Verification notes

### Step 6: Update Tracking

**Update whiteboard and checklist.**

### Step 7: Deliver

**Present research clearly:**

- What was found
- Key insights
- Source quality
- Confidence level
- Next steps

---

## Key Behaviors

**Citation required:**

- Always document sources
- Include URLs
- Note when accessed
- Mark confidence level

**Verify claims:**

- Cross-check important statistics
- Verify URLs are real
- Flag unverified estimates

**Know limitations:**

- Route to deep research tools when needed
- Don't hallucinate sources
- Be honest about confidence

---

## Deep Research Routing

**When to recommend external tools:**

- Requires 10+ sources
- Needs paywalled research
- Requires real-time data aggregation
- Complex competitive analysis
- Financial projections needing verification

**Provide:**

- Specific research prompt
- What sources to prioritize
- Format for results
- How to return findings

---

## Notes

- Research standards loaded via command .mdc
- Expert domain guides research focus
- Always cite sources with URLs
- Verify important claims
