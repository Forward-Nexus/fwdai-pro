# @rt (Roundtable Review)

**Purpose:** All experts review a deliverable and provide feedback

**Experts:** Multiple (all relevant experts)

**Category:** Roundtable

---

## When to Use

Use this command when:

- You want multiple expert perspectives on something
- You need comprehensive review before launching/shipping
- You want to catch issues from different angles
- You need validation from the whole team

**vs individual expert review:**

- This command: All relevant experts weigh in, comprehensive feedback
- Individual review: Single perspective (still valuable!)

---

## How It Works

### 1. Identify What to Review

**Founder specifies:**

```
@rt pitch-deck
@rt auth-feature
@rt marketing-campaign
@rt legal-doc
```

### 2. Load the Deliverable

**Check where it is:**

- Workspace: `roundtable/workspace/[name].md`
- Deliverable: `documents/[category]/[name].md`
- Or founder provides file

### 3. Determine Relevant Experts

**Based on deliverable type:**

**Pitch deck → All business experts:**

- 🎯 Genna (strategic alignment)
- 🌐 Lyna (investor appeal, narrative)
- 📊 Benji (market/growth claims)
- ⚖️ Elle (legal compliance)

**Technical spec/feature → Technical experts:**

- 🎯 Genna (strategic fit)
- 🔧 Denny (technical soundness)
- 💻 Ada (implementation feasibility)
- ⚖️ Elle (compliance if needed)

**Marketing campaign → Growth experts:**

- 🎯 Genna (brand alignment)
- 🌐 Lyna (positioning, messaging)
- 📊 Benji (campaign strategy)
- ⚖️ Elle (legal compliance)

**Auto-detect relevant experts based on deliverable type!**

### 4. Each Expert Reviews

**Each relevant expert:**

**Step 1: Read the Deliverable**

- Open workspace (has context)
- Read deliverable itself
- Understand the goal

**Step 2: Review from Their Perspective**

- Genna: Strategic alignment, long-term fit
- Denny: Technical soundness, feasibility
- Ada: Implementation quality, maintainability
- Lyna: External appeal, positioning, narrative
- Benji: Growth potential, market fit
- Elle: Legal compliance, risk assessment

**Step 3: Add Review to Workspace**

Each expert adds their section:

```markdown
## [Expert]'s Review

**Overall:** [Looks great / Needs work / Major concerns]

**Strengths:**

- [What's working well]
- [What's working well]

**Issues/Concerns:**

- ⚠️ [Issue 1] - [Why it matters]
- ⚠️ [Issue 2] - [Why it matters]

**Recommendations:**

1. [Priority recommendation]
2. [Priority recommendation]

**Approval:** [Approved / Approved with changes / Needs revision]
```

### 5. Synthesize Feedback

**After all experts review:**

Create summary in workspace:

```markdown
## Roundtable Review Summary

**Reviewed by:** [List of experts]

**Overall Consensus:** [Strong approval / Conditional approval / Needs work]

**Key Strengths:**

- [What multiple experts praised]

**Key Issues to Address:**

1. **[Issue]** - Raised by [expert(s)]
   - Impact: [Why it matters]
   - Recommendation: [How to fix]

2. **[Issue]** - Raised by [expert(s)]
   - Impact: [Why it matters]
   - Recommendation: [How to fix]

**Next Steps:**

- [ ] [Action item 1]
- [ ] [Action item 2]

**Ready to:** [Ship / Revise / Needs founder decision]
```

### 6. Update Roundtable

Update `roundtable/whiteboards.md`:

- Note that roundtable review completed
- Link to workspace with full reviews
- Add to `roundtable/[your-name]-checklist.md` if action needed

---

## What Makes This Command Different

**Multi-expert coordination:**

- Brings all relevant perspectives
- Catches issues one expert might miss
- Comprehensive feedback
- Builds consensus

**Efficient process:**

- All experts review in parallel
- Reviews documented in workspace
- Synthesis shows consensus/conflicts
- Clear next steps

**Quality multiplication:**

- Technical + strategic + legal + market perspectives
- Each expert focuses on their domain
- Cross-functional validation

---

## How @rt Leverages Group Chat Pattern

**@rt activates multiple experts simultaneously** - not sequential handoffs!

### What This Means:

✅ **All experts see full conversation** - Shared context from the start  
✅ **Natural group discussion** - Experts can respond to each other's reviews  
✅ **User orchestrates** - Founder decides who participates  
✅ **Parallel processing** - Multiple perspectives at once, not one-by-one

### How It Works in Practice:

```
Founder: "@rt review this pitch deck"

[System loads pitch deck, identifies relevant experts]

Genna: [Reads deck, provides strategic perspective]
Lyna: [Reads deck, provides investor perspective]
Elle: [Reads deck, flags legal issue with claim on Slide 7]
Lyna: "Good catch Elle - I'll revise that claim"
Genna: "Agree with both - also the market size slide needs work"

[Natural group discussion, all experts active together]
```

**NOT like this:**

```
Expert 1 reviews → writes formal handoff → waits
Expert 2 reviews → writes formal handoff → waits
Expert 3 reviews → etc.
[Sequential, formal, slow]
```

### Reference:

See `system/patterns/expert-workflow.md` Part 2 (Expert Collaboration section)
for complete group chat pattern documentation.

**@rt is the PERFECT use case for group chat collaboration** - brings the whole
team together naturally!

---

## Example Usage

### Simple:

```
@rt pitch-deck
```

### With file path:

```
@rt documents/investor/pitch-deck.md
```

### Example Flow:

**Founder:** `@rt pitch-deck`

**AI:**

```
Initiating roundtable review of pitch deck...

Bringing in: Genna, Lyna, Benji, Elle

Reading: roundtable/workspace/investor-pitch.md
Reading: documents/investor/pitch-deck.md

---

🎯 **Genna (Strategic Alignment):**

Overall: Strong! ✅

Strengths:
- Vision aligns with long-term strategy
- Problem/solution is compelling
- Market opportunity is real

Concerns:
- ⚠️ Roadmap slide might be too ambitious for seed stage
- Consider focusing on MVP + next 6 months only

Recommendation: Tone down long-term roadmap, emphasize near-term wins

Approval: Approved with minor changes

---

🌐 **Lyna (Investor Appeal):**

Overall: Looks great! ✅

Strengths:
- Story is compelling and memorable
- Traction slide is strong
- Team credibility is clear

Concerns:
- ⚠️ Slide 3 has too much text - investors won't read it
- ⚠️ Competition slide could be more differentiated

Recommendations:
1. Simplify slide 3 to 3 bullet points max
2. Add "unique advantages" to competition slide

Approval: Approved with changes

---

📊 **Benji (Growth/Market):**

Overall: Solid! ✅

Strengths:
- Market size is well-researched
- Growth metrics are impressive
- Unit economics make sense

Concerns:
- ⚠️ Customer acquisition strategy could be more specific
- Consider adding a customer testimonial or case study

Recommendation: Add 1-2 slides on go-to-market strategy

Approval: Approved with additions

---

⚖️ **Elle (Legal Compliance):**

Overall: Looks good! ✅

Strengths:
- No misleading claims
- Financial projections are reasonable
- IP position is clear

Concerns:
- ⚠️ Verify competitor claims are accurate (could be challenged)
- ⚠️ "Fastest growing" claim - do you have data to back this?

Recommendation: Soften superlative claims or add citations

Approval: Approved with minor edits

---

## Roundtable Review Summary

**Reviewed by:** Genna, Lyna, Benji, Elle

**Overall Consensus:** Strong approval with minor improvements ✅

**Key Strengths:**
- Compelling story and vision
- Strong traction and metrics
- Credible team
- Clear market opportunity

**Key Issues to Address:**
1. **Slide 3 text overload** - Raised by Lyna
   - Impact: Investors won't read it
   - Fix: Simplify to 3 bullets max

2. **Roadmap too ambitious** - Raised by Genna
   - Impact: Might seem unrealistic for seed stage
   - Fix: Focus on MVP + 6-month plan

3. **Claims need backup** - Raised by Elle
   - Impact: Could be challenged by investors
   - Fix: Add citations or soften language

**Next Steps:**
- [ ] Simplify slide 3
- [ ] Adjust roadmap to near-term focus
- [ ] Verify/cite competitor claims
- [ ] Consider adding customer testimonial (Benji's suggestion)

**Ready to:** Revise and re-review (or founder's call to ship as-is)

---

✅ Roundtable review complete! All feedback in workspace.
```

---

## Quality Standards

### For This Command:

- ✅ All relevant experts participate
- ✅ Each expert reviews from their domain
- ✅ Reviews are specific and actionable
- ✅ Consensus is synthesized clearly
- ✅ Next steps are documented
- ✅ Workspace contains full reviews

---

## When to Use vs Individual Review

**Use `@rt` when:**

- ✅ High-stakes deliverable (pitch, launch, legal)
- ✅ Need comprehensive validation
- ✅ Want to catch issues from all angles
- ✅ Building consensus before action

**Use individual expert review when:**

- ✅ Need specific domain feedback only
- ✅ Iterating quickly
- ✅ Don't need full team input

---

## Notes

- **Parallel reviews** - experts review simultaneously
- **Workspace captures all** - full reviews documented
- **Synthesis shows consensus** - clear what everyone agrees on
- **Conflicts highlighted** - if experts disagree, shows both views

---

## References

- Individual review: `commands/review.md`
- Workflow standards: `system/patterns/universal.md`
- Quality checklists: `system/checklists/`

---

**Remember:** Roundtable reviews catch what individual reviews miss. Multiple
perspectives make better decisions. Use this for high-stakes work! 🎯
