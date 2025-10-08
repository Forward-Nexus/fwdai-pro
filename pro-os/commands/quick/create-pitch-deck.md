# @create-pitch-deck

**Purpose:** Create an investor pitch deck with optimized workflow

**Expert:** Lyna (External Strategy)

**Category:** Business

---

## When to Use

Use this command when:
- You need to raise funding
- You're pitching to VCs, angels, or investors
- You want a compelling, professional investor presentation

**vs using `@lyna @create pitch deck`:**
- This command: Optimized pitch workflow, knows exact investor questions, searches current pitch trends
- Universal command: Still works, but more generic

---

## How It Works

### 1. Smart Questions (Context-Aware)

**Check what we already know:**
- If `project-kb.md` has traction metrics → Use them
- If `mission.md` exists → Use for problem/solution
- If `founder-profile.md` has investor preferences → Tailor to them

**Required questions (always ask if not known):**
- [ ] Who's the audience? (VCs, angels, seed funds, series A, etc.)
- [ ] What stage? (Pre-seed, seed, Series A, etc.)
- [ ] How much are you raising?

**Optional questions (ask only if needed):**
- [ ] Any specific investor focus? (if targeting specific VCs)
- [ ] Traction to highlight? (if not in project-kb)
- [ ] Team to feature? (if not in founder-profile)
- [ ] Competitive advantages? (if not obvious from context)

**Never ask if we already know it from context!**

### 2. Load Context (Token Efficiency!)

**Check what's already in context first!**

If NOT in context, read:
- `project/founder-profile.md` (team, background)
- `project/project-kb.md` (traction, metrics, stage)
- `project/mission.md` (vision, problem, solution)
- `roundtable/whiteboards.md`
- Any existing pitch materials in `documents/investor/`

### 3. Search Current Best Practices

**ALWAYS search for current information:**
- "[current year] pitch deck best practices"
- "[current year] VC pitch deck trends"
- "[stage] pitch deck examples [current year]"
- "[current year] investor presentation standards"

**Example searches:**
- "2025 seed stage pitch deck best practices"
- "VC pitch deck trends 2025"
- "Y Combinator pitch deck format 2025"

### 4. Follow Optimized Pitch Deck Workflow

**Step 1: Understand the Context**
- Who's the audience? (different for VCs vs angels)
- What stage? (seed vs Series A needs different focus)
- What's the goal? (meeting, funding decision, warm intro)

**Step 2: Research Current Investor Trends**
- What are investors looking for in [current year]?
- What metrics matter for [stage]?
- What's the current fundraising environment?

**Step 3: Create Workspace + Deck**
- Create `roundtable/workspace/investor-pitch.md`
- Create `documents/investor/pitch-deck.md`
- Document strategy and decisions IN workspace

**Step 4: Structure the Deck**

Standard pitch deck flow (adapt based on research):
1. **Hook** - Compelling opening (problem or traction)
2. **Problem** - What problem exists? (make it real)
3. **Solution** - How you solve it (your product)
4. **Why Now** - Market timing and opportunity
5. **Market Size** - TAM/SAM/SOM
6. **Product** - How it works (demo if possible)
7. **Traction** - Proof it's working (metrics, growth)
8. **Business Model** - How you make money
9. **Competition** - Market landscape (you're different because...)
10. **Team** - Why you're the ones to build this
11. **Financials** - Revenue, burn, runway
12. **Ask** - What you're raising and why

**Step 5: Write with Impact**
- Lead with emotion for investor presentations
- Support with data and credibility
- Tell a compelling story
- Keep slides visual and scannable
- Use founder voice (authentic, not corporate)

**Step 6: Quality Check**
- Run checklist: `system/checklists/content-checklist.md`
- Verify: Story is compelling
- Verify: Data supports claims
- Verify: Ask is clear
- Verify: Slide flow makes sense

**Step 7: Update Roundtable**
- Update `roundtable/whiteboards.md` (Lyna's section)
- Add to `roundtable/[your-name]-checklist.md` for review

### 5. Deliverable Location

**Workspace:** `roundtable/workspace/investor-pitch.md`  
**Deliverable:** `documents/investor/pitch-deck.md`

---

## What Makes This Quick Command Different

**Optimizations for pitch decks:**
- Knows standard pitch deck structure
- Searches current investor trends automatically
- Adapts to stage (seed vs Series A)
- Uses persuasive, story-driven approach

**Smart defaults:**
- Knows to lead with emotion + data
- Remembers market size, competition, traction
- Includes "the ask" clearly
- Tailors to audience

**Efficiency gains:**
- Lyna knows this is investor material
- Asks pitch-specific questions only
- Uses current pitch deck standards
- Optimizes for investor mindset

---

## Quality Standards

### Before Marking Complete:
- ✅ Follow: `system/standards/workflow-standards.md`
- ✅ Run: `system/checklists/content-checklist.md`
- ✅ Story is compelling and memorable
- ✅ Problem is clear and relatable
- ✅ Solution is differentiated
- ✅ Traction/metrics are impressive
- ✅ Market opportunity is large
- ✅ Team is credible
- ✅ Ask is specific and justified
- ✅ Current investor trends researched
- ✅ Workspace updated with strategy notes
- ✅ Whiteboards updated
- ✅ Clean deck in documents/investor/

---

## Example Usage

### Simple:
```
@create-pitch-deck
```

### With Context:
```
@create-pitch-deck for seed round
```

### Example Flow:

**Founder:** `@create-pitch-deck`

**AI (Lyna):**
```
Creating your investor pitch deck! Quick questions:

1. Who's the audience?
   a) Seed VCs
   b) Angel investors
   c) Series A funds
   d) Other: _____

2. How much are you raising?

[Checks project-kb - sees you have 1,000 users, $10K MRR]

[Searching "2025 seed pitch deck best practices"...]
[Searching "VC pitch deck trends 2025"...]
[Searching "current investor priorities 2025"...]

Creating workspace + deck...

✅ Done! 

Workspace: roundtable/workspace/investor-pitch.md (strategy, notes)
Deck: documents/investor/pitch-deck.md (presentation content)

I've structured it with your traction front-and-center (that $10K MRR growth is 🔥). 
The deck emphasizes market timing and your unique approach.

Ready for your review! Want me to refine any specific slides?
```

---

## Notes

- This is a **shortcut** - `@lyna @create pitch deck` also works
- **Optimized workflow** specifically for investor pitches
- **Searches current trends** - what investors want RIGHT NOW
- **Story-driven approach** - emotion + data

---

## Pro Tips

### For Different Stages:
- **Pre-seed/Seed:** Focus on problem, solution, team
- **Series A:** Focus on traction, unit economics, growth
- **Series B+:** Focus on scale, market leadership, financials

### Investor Psychology:
- First 3 slides make or break it
- Traction beats everything
- Team credibility matters immensely
- Clear ask shows you're organized

### Common Mistakes to Avoid:
- ❌ Too much text on slides
- ❌ Unclear problem or solution
- ❌ No traction/proof
- ❌ Vague "ask"
- ❌ Ignoring competition

---

## References

- Universal command: `commands/create.md`
- Workflow standards: `system/standards/workflow-standards.md`
- Content checklist: `system/checklists/content-checklist.md`
- Expert file: `agents/lyna-external-strategy.md`

---

**Remember:** Great pitch decks tell a story that makes investors WANT to be part of your journey. Search current trends, lead with emotion, support with data, and make the ask clear. You've got this! 🚀

