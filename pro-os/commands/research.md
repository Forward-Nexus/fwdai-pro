# Research Command

**Purpose:** Universal command for investigating and gathering information about anything - markets, technologies, competitors, trends, best practices, etc.

---

## How This Works

When a user says: `@[expert] @research [thing]`

Example:
- `@lyna @research venture capital firms investing in our space`
- `@denny @research best database options for our use case`
- `@benji @research hiring platforms for technical roles`
- `@genna @research competitor product features`

---

## Process

### 1. Define Research Scope

Clarify:
- What exactly to research?
- What's the goal? (make decision, understand landscape, find options?)
- How deep? (quick overview vs comprehensive analysis?)
- Any constraints? (budget, timeline, location?)

### 2. Assess Research Scope (IMPORTANT)

**Before starting research, determine if Cursor AI can handle it:**

#### Can Cursor AI Handle This?

**✅ Cursor AI is GOOD for:**
- Quick overviews and summaries
- Technical documentation review
- Best practices research (1-3 sources)
- Comparing 2-3 known options
- Specific question with limited scope

**❌ Cursor AI is LIMITED for:**
- Comprehensive market research (10+ sources)
- Industry benchmark compilation
- Detailed competitive analysis (5+ competitors)
- Financial projections requiring extensive verification
- Paywalled research or industry reports
- Real-time data aggregation across multiple sites

#### When to Route to Deep Research Tools

**If research requires:**
- 10+ sources to be comprehensive
- Paywalled industry reports or academic papers
- Real-time aggregation across multiple sites
- Detailed competitive data from many companies
- Market sizing with multiple data sources
- Extensive financial benchmark verification

**→ STOP and recommend ChatGPT Deep Research or Perplexity Pro**

**Template for routing:**
```markdown
**[Expert]:** This research requires comprehensive data across multiple sources that would be better handled by a deep research tool.

**I recommend using ChatGPT with Deep Research or Perplexity Pro:**

**Research prompt to use:**
"[Specific, detailed prompt with clear scope, sources to prioritize, and format for results]"

**After you get results:**
- Share the research output back here
- I'll verify the sources and URLs
- I'll help synthesize findings into our deliverable
```

### 3. Conduct Research (If Within Cursor's Capabilities)

**Research sources:**
- Industry reports
- Competitor analysis
- Expert opinions
- Case studies
- User feedback
- Technical documentation
- Market data

### 4. Organize Findings

Structure: Clear, scannable, well-organized

**Format:**
1. **Executive Summary** - Key takeaways (3-5 bullets)
2. **Detailed Findings** - What you discovered
3. **Options/Alternatives** - If applicable
4. **Recommendations** - What to do with this information
5. **Sources** - Where you got the info

### 5. Create Workspace + Deliverable

**A. Create Workspace**
- Save as: `roundtable/workspace/[topic]-research-complete.md`
- Document research process, all sources checked, notes
- Include raw findings before synthesis
- Track research decisions and why certain sources were prioritized
- **If deep research was used:** Include raw output and verification notes

**B. Create Clean Deliverable**
- Save as: `documents/research/[topic]-findings.md` (or appropriate category)
- Format: Executive Summary, Detailed Findings, Options/Alternatives, Recommendations, Sources
- This is the clean research report
- **Mark source verification:** Note which sources were verified vs. provided by deep research tool

**TWO files created:**
1. `roundtable/workspace/[topic]-research-complete.md` - Research process, all sources, raw notes
2. `documents/research/[topic]-findings.md` - Clean research report

### 6. Update Whiteboards

Update your section in `roundtable/whiteboards.md` with workspace and deliverable links.

### 7. Update Founder Checklist (If Needed)

If founder needs to review findings, add to `roundtable/[founder-name]-checklist.md`.

---

## Best Practices

### ✅ DO:
- **Be comprehensive** - cover all relevant angles
- **Verify sources** - use credible information
- **Organize clearly** - make it easy to scan
- **Include sources** - allow for follow-up
- **Make it actionable** - tie to decisions

### ❌ DON'T:
- **Don't rely on single source** - cross-reference
- **Don't just dump info** - organize and synthesize
- **Don't skip recommendations** - so what? now what?
- **Don't present outdated info** - check dates

---

**Remember:** Good research informs smart decisions. Be thorough, be organized, be useful! 📚

