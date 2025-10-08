# @rt-update (Weekly Review)

**Purpose:** Review all active work and provide status summary

**Experts:** All (based on active work)

**Category:** Roundtable

---

## When to Use

Use this command when:
- You want a weekly/regular status check
- You need to see what's happening across all work
- You want to catch blockers or issues early
- You're doing a planning/review session

**Frequency:**  
Recommended: Weekly or bi-weekly

---

## How It Works

### 1. Scan All Active Work

**Check all locations:**
- `roundtable/whiteboards.md` - High-level status
- `roundtable/workspace/` - All active workspaces
- `roundtable/[your-name]-checklist.md` - Action items

### 2. Analyze Each Workspace

For each active workspace:

**Check status:**
- What's the deliverable?
- What's the current status?
- Who's working on it?
- Any blockers?
- Timeline on track?

**Red flags to surface:**
- ⚠️ Status hasn't changed in >1 week
- ⚠️ Blockers present
- ⚠️ Missing key information
- ⚠️ Needs founder input but not on checklist

### 3. Check Founder Checklist

**Review action items:**
- How many items pending?
- Any high priority items?
- Any overdue items?
- Any quick wins?

### 4. Generate Summary

**Create comprehensive status report:**

```markdown
# Roundtable Update - [Date]

## 📊 Overall Status

**Active workspaces:** [Number]
**Completed this week:** [Number]
**Blockers:** [Number]
**Founder action items:** [Number]

---

## 🎯 Active Work

### In Progress:

**[Workspace 1]** - [Status %]
- **Owner:** [Expert]
- **Status:** [Brief status]
- **Next:** [What's next]
- 🚨 **Blocker:** [If any]

**[Workspace 2]** - [Status %]
- **Owner:** [Expert]
- **Status:** [Brief status]
- **Next:** [What's next]

### Recently Completed:

**[Completed 1]** ✅
- **What:** [What was delivered]
- **Location:** [File path]

**[Completed 2]** ✅
- **What:** [What was delivered]
- **Location:** [File path]

---

## 🚨 Blockers & Issues

**[Blocker 1]** - [Workspace]
- **Issue:** [What's blocked]
- **Needs:** [What's needed to unblock]
- **Impact:** [How this affects things]

**[Blocker 2]** - [Workspace]
- **Issue:** [What's blocked]
- **Needs:** [What's needed to unblock]
- **Impact:** [How this affects things]

---

## ✅ Founder Action Items

**High Priority:**
- [ ] [Item 1] - [Why it's urgent]
- [ ] [Item 2] - [Why it's urgent]

**Medium Priority:**
- [ ] [Item 3]
- [ ] [Item 4]

**Quick Wins:**
- [ ] [Item 5] - [Can be done quickly]

---

## 📈 Progress Highlights

**This week:**
- ✅ [Achievement 1]
- ✅ [Achievement 2]
- ✅ [Achievement 3]

**Momentum:**
- [What's going well]
- [What's accelerating]

**Concerns:**
- [What needs attention]
- [What's slowing down]

---

## 🎯 Next Week Focus

**Priorities:**
1. [Priority 1]
2. [Priority 2]
3. [Priority 3]

**Expected completions:**
- [Workspace 1] → Done
- [Workspace 2] → Ready for review

---

## 💡 Recommendations

**Quick wins:**
- [Easy thing to complete]
- [Low-hanging fruit]

**Decisions needed:**
- [Decision 1] - [Why it matters]
- [Decision 2] - [Why it matters]

**Resource needs:**
- [What might help]

---

## Expert Check-Ins

🎯 **Genna:** [Brief status from strategic perspective]

🔧 **Denny:** [Brief status on technical work]

💻 **Ada:** [Brief status on implementation]

🌐 **Lyna:** [Brief status on external work]

📊 **Benji:** [Brief status on growth work]

⚖️ **Elle:** [Brief status on legal/compliance]

[Domain Expert if active]

```

### 5. Update Whiteboards

Refresh `roundtable/whiteboards.md` if anything is stale.

### 6. Highlight Next Actions

**For founder:**
- Most important action items
- Decisions that are blocking progress
- Quick wins to build momentum

---

## What Makes This Command Different

**Comprehensive overview:**
- Sees everything across all experts
- Identifies patterns and trends
- Surfaces hidden blockers
- Shows overall momentum

**Proactive management:**
- Catches issues early
- Identifies stale work
- Highlights quick wins
- Prioritizes founder time

**Team coordination:**
- Every expert reports status
- Cross-functional visibility
- Dependency awareness
- Shared priorities

---

## Example Usage

### Simple:
```
@rt-update
```

### Example Output:

**Founder:** `@rt-update`

**AI:**
```
Scanning roundtable...
Checking all workspaces...
Reviewing founder checklist...

---

# Roundtable Update - October 6, 2025

## 📊 Overall Status

**Active workspaces:** 4
**Completed this week:** 2
**Blockers:** 1
**Founder action items:** 6 (2 high priority)

---

## 🎯 Active Work

### In Progress:

**Authentication Feature** - 75% Complete
- **Owner:** Ada
- **Status:** Implementation done, tests passing, needs QA
- **Next:** Denny QA review, then ready to ship

**Investor Pitch Deck** - 90% Complete  
- **Owner:** Lyna
- **Status:** First draft done, pending founder review
- **Next:** Your feedback, then final polish

**Growth Strategy** - 40% Complete
- **Owner:** Benji
- **Status:** Research done, building strategy doc
- **Next:** Complete strategy, present options

**Privacy Policy** - 60% Complete
- **Owner:** Elle
- **Status:** Draft in progress
- **Next:** Review with founder (has questions)
- 🚨 **Blocker:** Needs decision on data retention policy

### Recently Completed:

**Auth Spec** ✅
- Denny completed technical spec
- Location: documents/technical/auth-spec.md

**Competitive Analysis** ✅
- Genna + Lyna completed market analysis
- Location: documents/strategy/competitive-analysis.md

---

## 🚨 Blockers & Issues

**Privacy Policy - Data Retention**
- **Issue:** Can't complete policy without retention decision
- **Needs:** Founder to decide: 90 days, 1 year, or 2 years?
- **Impact:** Blocks privacy policy + affects system design

---

## ✅ Founder Action Items

**High Priority:**
- [ ] Review investor pitch deck - needs feedback this week
- [ ] Decide data retention policy - blocking Elle

**Medium Priority:**
- [ ] Test authentication feature - ready for QA
- [ ] Review competitive analysis - inform strategy
- [ ] Approve growth strategy - Benji needs direction
- [ ] Schedule investor meetings - deck is ready

**Quick Wins:**
- [ ] Approve auth spec - already reviewed, just needs ✅

---

## 📈 Progress Highlights

**This week:**
- ✅ Auth spec completed (ready for implementation)
- ✅ Competitive analysis done (strong insights!)
- ✅ Auth feature 75% done (ahead of schedule!)

**Momentum:**
- Technical work is moving fast
- Strong progress on multiple fronts
- No major technical blockers

**Concerns:**
- Privacy policy blocked (needs founder decision)
- Pitch deck waiting on feedback (time-sensitive?)

---

## 🎯 Next Week Focus

**Priorities:**
1. Ship authentication feature (Ada → testing → live)
2. Finalize pitch deck (get investor meetings)
3. Complete privacy policy (unblock Elle)

**Expected completions:**
- Auth feature → Shipped ✅
- Pitch deck → Finalized ✅
- Growth strategy → Ready for review ✅

---

## 💡 Recommendations

**Quick wins:**
- Approve auth spec (5 min review)
- Make data retention decision (unblocks privacy policy)

**Decisions needed:**
- Data retention policy (high impact!)
- Investor meeting timeline (pitch deck ready)

**Resource needs:**
- None currently - team is moving well!

---

## Expert Check-Ins

🎯 **Genna:** Strategic work solid. Competitive analysis shows strong positioning.

🔧 **Denny:** Auth spec done, ready to QA Ada's implementation. System design on track.

💻 **Ada:** Auth feature almost done! Tests passing, code is clean. Ready for QA this week.

🌐 **Lyna:** Pitch deck first draft complete! Waiting on your feedback to polish.

📊 **Benji:** Growth strategy research done. Building recommendations now.

⚖️ **Elle:** Privacy policy in progress but blocked on data retention decision.

---

✅ Update complete! 

**TL;DR:**
- Things are moving well! 🚀
- 1 blocker: Need data retention decision
- 2 high priority items for you
- Auth feature shipping this week!
```

---

## Quality Standards

### For This Command:
- ✅ Reviews ALL active work
- ✅ Checks ALL workspaces
- ✅ Reviews founder checklist
- ✅ Identifies blockers proactively
- ✅ Surfaces stale work
- ✅ Highlights quick wins
- ✅ Prioritizes founder time
- ✅ Clear next actions

---

## When to Use

**Weekly/Bi-weekly:**
- Regular cadence for status
- Catch issues early
- Maintain momentum

**Before planning sessions:**
- See what's actually happening
- Inform next priorities
- Identify resource needs

**When feeling overwhelmed:**
- Get clear picture of status
- Identify what needs attention
- Focus on high-impact items

---

## Notes

- **Comprehensive scan** - looks at everything
- **Action-oriented** - clear next steps
- **Blocker-focused** - surfaces what's stuck
- **Quick wins highlighted** - easy momentum builders

---

## References

- Whiteboards: `roundtable/whiteboards.md`
- Workspaces: `roundtable/workspace/`
- Founder checklist: `roundtable/[your-name]-checklist.md`
- Workflow standards: `system/standards/workflow-standards.md`

---

**Remember:** Regular @rt-updates keep you on top of everything. Weekly cadence prevents surprises and keeps momentum. 5 min investment, huge visibility gain! 📊

