---
version: 1.0.0
purpose: Standardized templates for blockers, errors, and questions
---

# Error & Blocker Templates

## Purpose

Consistent formats for documenting blockers, errors, and questions. Copy and adapt these templates when needed.

---

## Blocker Template (In Workspace)

### Full Blocker Documentation

**Use when:** Work is blocked and can't proceed without resolution.

**In workspace markdown:**

```markdown
## ⚠️ Blockers & Issues

### [Blocker Title]

**Issue:** [One-sentence description of what's blocking progress]

**What was tried:**
1. **[Approach 1]** - [What was attempted and why it didn't work]
2. **[Approach 2]** - [What was attempted and why it didn't work]
3. **[Approach 3]** - [What was attempted and why it didn't work]

**What's needed:** [Specific information, decision, or resource required]

**Impact:** [How this blocker affects the project]
- Blocks: [What can't be done]
- Timeline: [How this affects schedule]
- Workaround: [Any temporary solution, if possible]

**Recommendation:** [Your suggested next steps or solution]

**Urgency:** 
- 🔴 Critical - Blocking all progress immediately
- 🟠 High - Blocking current task, can work on other things
- 🟡 Medium - Will block soon, needs attention this week
- 🟢 Low - Doesn't block current work, but should address

**Added:** [Date] by [Expert]
**Status:** Unresolved | In Progress | Resolved
```

**In workspace YAML:**

```yaml
blockers:
  - blocker: "[Brief description]"
    raised_by: "[expert name]"
    raised_date: "YYYY-MM-DD"
    resolved: false
    resolution: ""
    resolution_date: ""
    approaches_tried:
      - "[Approach 1 description]"
      - "[Approach 2 description]"
      - "[Approach 3 description]"
    needs: "[Specific need]"
    impact: "[Impact description]"
    urgency: "critical | high | medium | low"
    workaround: "[Temporary solution if any]"
```

---

### Example: Technical Blocker

```markdown
## ⚠️ Blockers & Issues

### Session Timeout Duration Decision

**Issue:** Cannot finalize authentication spec without session timeout decision.

**What was tried:**
1. **Researched industry standards** - Found wide range (7-90 days) depending on security needs and user convenience preferences. No single "correct" answer.
2. **Checked project KB** - No specific requirements documented for session management strategy.
3. **Reviewed similar apps** - Competitor analysis shows mixed approaches: banking apps use 7 days (high security), social apps use 30-90 days (convenience).

**What's needed:** Founder decision on security vs. convenience trade-off for this app's user base.

**Impact:**
- Blocks: Completing auth spec, starting Ada's implementation
- Timeline: 2-day delay if not decided by end of week
- Workaround: Can spec other auth features, but token refresh logic depends on this

**Recommendation:** 
Based on this being a recovery app with sensitive personal data, I recommend 30-day timeout as a balanced approach:
- **7 days** = High security but frequent re-logins (may frustrate users in vulnerable state)
- **30 days** = Industry standard, balances security with convenience
- **90 days** = Maximum convenience but increased security risk

**Urgency:** 🟠 High - Blocking auth spec completion

**Added:** 2025-10-06 by Denny
**Status:** Unresolved - Awaiting founder input
```

---

## Question Template (For Founder)

### In Founder Checklist

```markdown
### [Category] - [Priority Level]

- [ ] **[Question Title]** - [What you need to know/decide]
  - **From:** [Expert name]
  - **Context:** [Why this question matters and background]
  - **Options:** (if applicable)
    - **Option A:** [Description]
      - Pros: [Benefits]
      - Cons: [Drawbacks]
      - Cost/Time: [If relevant]
    - **Option B:** [Description]
      - Pros: [Benefits]
      - Cons: [Drawbacks]
      - Cost/Time: [If relevant]
  - **My recommendation:** [Expert's suggested choice with reasoning]
  - **Urgency:** [When decision is needed]
  - **Blocking:** [What can't proceed without this]
  - **Workspace:** [Link to workspace with full context]
  - **Date added:** YYYY-MM-DD
```

### Example: Decision Question

```markdown
## ⚠️ High Priority - This Week

- [ ] **Authentication session timeout duration** - How long should users stay logged in?
  - **From:** Denny
  - **Context:** Finalizing authentication spec. Need to balance security (shorter sessions) with user convenience (longer sessions). This determines how often users need to re-login.
  - **Options:**
    - **7 days (High Security)**
      - Pros: Better security, follows banking app standards
      - Cons: Users re-login weekly, could frustrate users in recovery
      - Best for: Apps with highly sensitive data
    - **30 days (Balanced) ⭐**
      - Pros: Industry standard, good security-convenience balance
      - Cons: Slightly less secure than 7-day
      - Best for: Most consumer apps including ODAT
    - **90 days (Maximum Convenience)**
      - Pros: Users rarely need to re-login
      - Cons: Increased security risk if device stolen
      - Best for: Low-risk apps prioritizing convenience
  - **My recommendation:** 30 days - It's the industry standard and balances your users' needs for both security and convenience. Recovery app users may be in vulnerable states, so we don't want frequent login friction, but we also need to protect their sensitive data.
  - **Urgency:** Need decision by Friday to stay on schedule
  - **Blocking:** Can't complete auth spec or start implementation without this
  - **Workspace:** [roundtable/workspace/auth-feature.md](roundtable/workspace/auth-feature.md)
  - **Date added:** 2025-10-06
```

---

## Error Report Template

### For Code Errors

```markdown
## 🔴 Error Report

**Error:** [Error name/type]

**When:** [When does this error occur?]

**Expected behavior:** [What should happen]

**Actual behavior:** [What actually happens]

**Error message:**
```
[Paste exact error message here]
```

**Stack trace:** (if available)
```
[Paste stack trace]
```

**Steps to reproduce:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Environment:**
- OS: [Operating system]
- Node version: [Version]
- Browser: [If applicable]
- Other relevant: [Dependencies, etc.]

**What I've tried:**
- [Attempt 1] - [Result]
- [Attempt 2] - [Result]

**Possible cause:** [Your hypothesis]

**Impact:** [How severe is this?]
- [ ] Blocks all work
- [ ] Blocks current feature
- [ ] Minor issue, workaround available
- [ ] Low priority bug

**Added:** [Date] by [Expert]
```

---

## Warning Template

### For Potential Issues

```markdown
## ⚠️ Warning: [Issue Title]

**What:** [Brief description of potential issue]

**Why it matters:** [Impact if not addressed]

**Risk level:**
- 🔴 High - Could cause major problems
- 🟡 Medium - Should address soon
- 🟢 Low - Keep in mind for future

**Recommendation:** [What should be done]

**Timeline:** [When this should be addressed]

**Noted by:** [Expert] on [Date]
```

### Example: Technical Debt Warning

```markdown
## ⚠️ Warning: Authentication Code Duplication

**What:** Auth validation logic is duplicated across 3 services (user, admin, api). Currently manageable but will become maintenance burden.

**Why it matters:** 
- Bug fixes need to be applied in 3 places
- Inconsistencies could create security gaps
- Harder to update auth logic in future

**Risk level:** 🟡 Medium - Not urgent but should address in next refactor

**Recommendation:** Extract to shared auth utility module in next sprint. Estimated 4 hours of work.

**Timeline:** Address in next refactoring sprint (not blocking current work)

**Noted by:** Ada on 2025-10-06
```

---

## Clarification Request Template

### When You Need More Information

```markdown
## ❓ Clarification Needed: [Topic]

**What I'm working on:** [Current task/deliverable]

**What's unclear:** [Specific thing that needs clarification]

**Why I'm asking:** [How this affects the work]

**Questions:**
1. [Question 1]?
2. [Question 2]?
3. [Question 3]?

**Current assumption:** 
[What I'm assuming if no answer - so work can continue]

**Impact if assumption is wrong:**
[What would need to change]

**Asked by:** [Expert] on [Date]
**Urgency:** High / Medium / Low
```

---

## Dependency Blocker Template

### When Waiting for External Factor

```markdown
## ⏳ Dependency Blocker: [What You're Waiting For]

**Blocked task:** [What can't proceed]

**Waiting for:**
- **What:** [External dependency - API, service, approval, etc.]
- **Who:** [Person or team]
- **Expected:** [When expected to be available]
- **Status:** [Current status if known]

**What I can do meanwhile:**
- [Alternative task 1]
- [Alternative task 2]

**Impact:**
- **If available on time:** No impact
- **If delayed:** [Timeline impact]

**Workaround available:** Yes / No
- If yes: [Describe workaround]

**Added:** [Date] by [Expert]
**Following up:** [Date when you'll check status]
```

---

## Resolution Template

### When Blocker is Resolved

```markdown
## ✅ Blocker Resolved: [Blocker Title]

**Original issue:** [Brief description of blocker]

**Resolution:** [How it was resolved]

**Decided:** [What decision was made, if applicable]

**Impact:**
- Can now proceed with: [What's unblocked]
- Estimated recovery: [How long to get back on track]

**Resolved:** [Date] by [How it was resolved]
**Work resumed:** [Date] by [Expert]

---

[Update workspace YAML:]
```yaml
blockers:
  - blocker: "[description]"
    resolved: true
    resolution: "[how it was resolved]"
    resolution_date: "YYYY-MM-DD"
```
```

---

## Communication Templates

### Escalation Template

**When:** Need to escalate an issue to founder urgently.

```markdown
## 🚨 URGENT: [Issue]

**What happened:** [Brief description]

**Immediate impact:** [What's affected right now]

**Your decision needed:** [What needs to be decided/approved]

**Options:**
1. [Option 1] - [Consequence]
2. [Option 2] - [Consequence]

**My recommendation:** [Your suggestion]

**Timeline:** [How quickly decision is needed]

**Added to your checklist:** [Link]

@[founder-name] - Please advise when you have a moment.
```

---

### Status Update Template

**For major progress updates:**

```markdown
## 📊 Status Update: [Deliverable/Workspace]

**Current status:** [Phase/percentage]

**Completed since last update:**
- ✅ [Item 1]
- ✅ [Item 2]

**In progress:**
- 🔄 [Item 1] - [Status]
- 🔄 [Item 2] - [Status]

**Up next:**
- ⏭️ [Item 1]
- ⏭️ [Item 2]

**Blockers:** [None / See blocker section]

**On track:** Yes / No
- If no: [Why and recovery plan]

**Updated:** [Date] by [Expert]
```

---

## Best Practices

### When to Use Each Template

**Use Blocker Template when:**
- You've tried 3 approaches and still stuck
- Work literally cannot proceed
- You need founder decision or external input

**Use Question Template when:**
- Need founder input but not blocking
- Multiple valid options exist
- Strategic decision needed

**Use Warning Template when:**
- Potential future issue identified
- Technical debt created
- Risk assessment needed

**Use Clarification Request when:**
- Requirements unclear
- Ambiguity in spec
- Need more context

### Tips for Effective Issue Documentation

**Be specific:**
- "Need auth decision" ❌
- "Need decision on 7-day vs 30-day session timeout" ✅

**Show your work:**
- "Can't figure out API integration" ❌
- "Tried approach A (failed because X), B (failed because Y), C (failed because Z)" ✅

**Provide context:**
- "This is blocked" ❌
- "This blocks auth spec completion, which blocks Ada's implementation, delaying launch by 2 days" ✅

**Offer solutions:**
- "What should I do?" ❌
- "I recommend option B because [reasoning]. What do you think?" ✅

---

## Remember

**Good issue documentation:**
- Saves time (no back-and-forth for clarification)
- Shows professionalism (you've done your homework)
- Makes decisions easier (options are clear)
- Preserves context (future reference)

**Take the time to document well!**

