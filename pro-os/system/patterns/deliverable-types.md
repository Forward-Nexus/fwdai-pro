# Deliverable Types & Document Lifecycle

**Purpose:** Define different document types and how to work with them efficiently  
**Applies to:** All experts creating deliverables  
**Last Updated:** October 17, 2025

---

## 🎯 The Three Document Types

Understanding what type of document you're creating determines how you manage it throughout its lifecycle.

### **1. LIVING DOCUMENTS** 📝

**Definition:** Documents that capture strategic thinking and decision context. They evolve during work, then stabilize as reference material.

**Characteristics:**
- ✅ Captures strategic thinking and rationale
- ✅ Preserves decision journey (tried X, rejected because Y)
- ✅ Provides context for future similar work
- ✅ Doesn't need constant updates after initial decisions
- ❌ Is NOT a copy of final implementation
- ❌ Is NOT a spec that duplicates codebase

**Examples:**
- Landing page audits (why we chose Billy Mays style)
- Messaging strategy reviews (tone decisions, rejected approaches)
- Design decisions documents (what we tested, what didn't work)
- Business strategy documents
- Product positioning documents

**Key Features:**
- **Quick Glance section** (action items, status, key decisions)
- **Options for review** (multiple choices to pick from)
- **Decision Matrix** (mark choices)
- **Rationale captured** (WHY things were approved/rejected)

**Future Value:**
- 3 months later updating pitch deck? Reference this for tone consistency
- 6 months later updating landing page? See WHY original choices made
- New team member onboarding? Read decision context

**Update Pattern:**
- During work: Update sections in place, don't duplicate
- After decisions: Clean up into reference format, archive iteration work
- Future: Rarely updated unless strategy changes

---

### **2. WORKING DOCUMENTS** ⚙️

**Definition:** Documents actively being developed. High iteration, frequent changes, collaborative editing.

**Characteristics:**
- ✅ In active development
- ✅ Frequent updates and iterations
- ✅ Multiple contributors
- ✅ Status tracking embedded
- ✅ May have temporary sections
- ✅ Will eventually become Fixed or Living

**Examples:**
- Specs in progress
- Draft business plans
- Content being reviewed
- Collaborative brainstorming docs
- Project plans under development

**Key Features:**
- **Status indicators** (draft, in-review, approved)
- **To-do lists embedded** (what needs work)
- **Version notes** (what changed when)
- **Iteration tracking** (rounds of feedback)

**Update Pattern:**
- During work: Iterate in CHAT, update document with approved changes
- Use search_replace to update specific sections
- Add version notes: "(Updated Oct 17 - revised based on feedback)"
- Don't rewrite entire document repeatedly

**Eventually becomes:**
- Living Document (if it's strategic/reference material)
- Fixed Document (if it's final deliverable)

---

### **3. FIXED DOCUMENTS** 🔒

**Definition:** Final output that doesn't change much after approval. Versioned carefully.

**Characteristics:**
- ✅ Final approved content
- ✅ Rarely changes after approval
- ✅ Versioned carefully (change log)
- ✅ The actual thing being used
- ✅ Locked unless legal/factual updates needed

**Examples:**
- Legal documents (ToS, Privacy Policy)
- Final content (blog posts, scripts)
- Reference docs (brand guidelines)
- Published whitepapers
- Contracts and agreements

**Key Features:**
- **Effective Date** + Last Updated
- **Standard structure** for document type
- **Change Log** (track updates)
- **Version numbers** (if applicable)

**Update Pattern:**
- Create once, lock down
- Changes require approval
- Document WHY changes were made
- Maintain change log

---

## 🔀 Decision Tree: Which Type Am I Creating?

```
START: What's the PURPOSE of this document?

Q1: Will this be used directly by end users/clients?
 → YES: Go to Q2
 → NO: Go to Q3

Q2: Is this content final and approved?
 → YES: FIXED DOCUMENT
        (Legal doc, published content, brand guidelines)
 → NO: WORKING DOCUMENT
       (Draft content, spec in progress)

Q3: Is this documenting strategic decisions/thinking?
 → YES: LIVING DOCUMENT
        (Audit, strategy review, design decisions)
 → NO: Go to Q4

Q4: Is this actively being developed/iterated?
 → YES: WORKING DOCUMENT
        (Spec in progress, collaborative plan)
 → NO: FIXED DOCUMENT
       (Internal reference, process doc)
```

**Examples Through Decision Tree:**

- **Business Plan (in development)** → Working Doc (Q1: NO, Q3: YES but still drafting, Q4: YES)
- **Business Plan (finalized)** → Living Doc (Q1: NO, Q3: YES, captures strategy)
- **Landing Page Audit** → Living Doc (Q1: NO, Q3: YES, decision context)
- **Privacy Policy** → Fixed Doc (Q1: YES, Q2: YES, final legal content)
- **Blog Post Draft** → Working Doc (Q1: YES, Q2: NO, still iterating)
- **Published Blog Post** → Fixed Doc (Q1: YES, Q2: YES, approved content)

---

## 💰 Token Efficiency: Update vs. Rewrite

### **The AI Bias: Why AI Prefers Rewrites**

AI systems often suggest "creating a revised version" or "rewriting the document" instead of updating in place.

**Why AI thinks this is better:**
- Seems cleaner/easier
- Avoids modifying existing structure
- Can start fresh without constraints
- Pattern matching from training data (people often create v2 files)

**Why This is ACTUALLY WORSE:**

**Problem #1: Information Loss**
- AI naturally skips details when rewriting
- "Forgets" to include things that were in original
- Loses context and nuance from original version
- Has to re-read anyway, so no time savings

**Problem #2: Token Waste**
- Still has to read original document
- Then writes entirely new document (double tokens)
- User pays for both read AND full rewrite
- Update-in-place only pays for the changes

**Problem #3: Structural Problems**
- May reorganize in unhelpful ways
- Breaks existing links/references
- Changes structure user was familiar with
- Creates "which version?" confusion

---

### **The Correct Approach**

✅ **GOOD Process (Update in Place):**
```
1. Read existing document
2. Have conversation about changes in CHAT
3. Once approved, update specific sections using search_replace
4. Preserve structure, just improve content
5. Add version notes if useful: "(Updated Oct 17 - revised framing)"
```

**Benefits:**
- Preserves what works
- Only changes what needs changing
- No information loss
- Token efficient (only pay for changes)
- Maintains familiar structure
- Clear version history

❌ **BAD Process (Rewrite):**
```
1. Read existing document
2. Create entirely new document
3. Try to remember everything from original
4. User pays for full document rewrite
5. Things inevitably get missed
6. Now have to figure out what to keep from both versions
```

---

### **When Each Approach IS Appropriate**

**✅ Update-in-Place (search_replace) - BEST FOR:**
- Living documents (docs that evolve continuously)
- Working documents (specs, plans, audits in progress)
- Internal documentation (system patterns, standards)
- Budget-conscious projects (minimize token costs)
- Preserving structure/references
- Small to medium changes

**✅ Create New Version - BEST FOR:**
- Version control scenarios (v1 → v2 with both preserved)
- Major structural overhauls
- A/B testing different approaches
- Client deliverables (show before/after)
- Merging multiple documents
- Complete content refresh
- User explicitly wants to compare versions

**Context-Specific Considerations:**

**Cursor/IDE Context:**
- Version control systems EXPECT versioned files
- Git tracks changes anyway
- Sometimes cleaner to see "old vs new" in diff
- Makes sense for formal releases

**AI Chat Context (FWD PRO):**
- No built-in version control
- User pays per token
- Chat history shows evolution already
- Structure preservation matters
- Less "compare" need (chat shows discussion)

**The Real Principle:**
It's not "rewrites are always bad" - it's **"choose the right tool for the context."**

**FWD PRO Default (AI chat, budget-conscious, iterative work):**
- Default: UPDATE in place
- Exception: When versioning/comparison is the actual goal

**Key Questions to Decide:**
1. **Do I need to preserve the old version?** → Create new
2. **Is structure itself broken?** → Create new
3. **Am I iterating in chat?** → Update in place
4. **Is this a deliverable clients will compare?** → Create new
5. **Is user on a budget?** → Update in place
6. **Does structure work, just content outdated?** → Update in place

---

## ⚙️ Workflow Patterns by Document Type

### **Working with Living Documents**

**Phase 1: Initial Creation**
1. Set up structure with Quick Glance section
2. Add strategic foundation
3. Identify what needs work
4. Mark with status indicators

**Phase 2: Iteration (CHAT - Save Tokens!)**
1. Discuss options in chat
2. Get user feedback in chat
3. Refine in chat
4. Show examples in chat
5. Get approval in chat

**Phase 3: Implementation (Document)**
1. Write ONLY final approved content to document
2. Update existing sections (don't add duplicates)
3. Remove outdated content

**Phase 4: Closeout (Document)**
1. Restructure into clean reference format
2. Archive messy iteration work (use `<details>` tags)
3. Add completion summary
4. Update all related documents (workspace, checklist)

**Example Closeout Structure:**
```markdown
# [Audit Name]

**Status:** LIVING DOCUMENT - Reference for Future Work
**Purpose:** [What decisions this informs]

## 📋 QUICK GLANCE
- Key Decisions Made
- Strategic Direction Chosen
- Links to Related Work

## Executive Summary
- What was done, why, outcome

## Strategic Foundation
- Philosophy/approach (timeless)

## Key Decisions Made
- Section by section with rationale

## Final Approved Content
- Source of truth for what's live

---
---
---

# ARCHIVE: Iteration Work

> ⚠️ WARNING: Historical only. Final content above.

<details>
<summary>Click to expand archived work</summary>

[All the messy back-and-forth]

</details>
```

---

### **Working with Working Documents**

**Phase 1: Active Development**
1. Create structure
2. Iterate in CHAT (save tokens)
3. Update sections with search_replace
4. Add version notes as you go

**Phase 2: Review Cycles**
1. Mark sections needing review
2. Get feedback in chat
3. Update specific sections
4. Track rounds of revision

**Phase 3: Transition**
1. Determine if becoming Living or Fixed
2. Clean up temporary sections
3. Finalize structure
4. Add appropriate metadata

**Token Efficiency Tips:**
- **Chat:** Brainstorming, options, iteration, feedback loops
- **Document:** Final approved content, decisions made, source of truth
- Save ~80-90% of tokens by iterating in chat

---

### **Working with Fixed Documents**

**Phase 1: Creation**
1. Get all requirements upfront
2. Create complete draft
3. Get approval (may iterate in chat first)

**Phase 2: Finalization**
1. Lock down content
2. Add version info
3. Document approval process
4. Publish/deliver

**Phase 3: Maintenance**
1. Only change when necessary (legal updates, factual corrections)
2. Document every change in change log
3. Update version date
4. Get re-approval if needed

---

## 🚫 Common Anti-Patterns to Avoid

### **Anti-Pattern 1: Creating Duplicate Documents**

**Problem:** Created separate "copy options" doc when it should be in audit doc.

**Rule:** Keep related work in ONE document, use sections.

**When to Create Separate Document:**
- ✅ Different audience (legal doc vs marketing doc)
- ✅ Different purpose (spec vs implementation)
- ✅ Different lifecycle (living doc vs fixed doc)

**When to Use Sections Instead:**
- ✅ Related to same project
- ✅ Same audience
- ✅ Part of same decision process
- ✅ Will be referenced together

**Example:**
```
✅ GOOD: One landing page audit with:
- Analysis section
- Copy options section
- Screenshot audit section
- Decision matrix section

❌ BAD: Four separate documents:
- landing-page-analysis.md
- landing-page-copy-options.md
- landing-page-screenshots.md
- landing-page-decisions.md
```

---

### **Anti-Pattern 2: Not Reading Before Updating**

**Problem:** AI writes new section without reading existing document, creating duplicates.

**Rule:** Before writing ANY content to an existing document, READ IT FIRST.

```
❌ BAD Process:
1. User asks for update
2. AI writes new section
3. Adds to bottom of document
4. Old content still there (now outdated)

✅ GOOD Process:
1. User asks for update
2. AI reads existing document
3. Identifies what needs to change
4. REPLACES old content with new (using search_replace)
5. Only adds new section if truly new topic
```

---

### **Anti-Pattern 3: Rewriting Instead of Updating**

**Problem:** AI rewrites entire document when user asks for update, wasting tokens and losing information.

**Rule:** Use search_replace to update specific sections. Only rewrite when structure is broken.

---

### **Anti-Pattern 4: Not Closing Out Documents**

**Problem:** Document stays messy after work is done, hard to use as reference later.

**Rule:** When work is complete, restructure into clean format, archive messy work.

---

### **Anti-Pattern 5: Forgetting Related Documents**

**Problem:** Update deliverable but forget to update workspace/checklist/whiteboard.

**Closeout Checklist:**
- [ ] Update the deliverable (final content)
- [ ] Update workspace status to "Done"
- [ ] Add completion summary to workspace
- [ ] Update founder's checklist (move to "Recently Completed")
- [ ] Update checklist stats
- [ ] Update whiteboard if major milestone
- [ ] Link everything together

---

## 📚 Quick Reference

### **Quick Glance Template (For Living Documents)**

```markdown
## 📋 QUICK GLANCE

**What [User] Needs to Do:**
- [ ] [Action item with clickable link to section]
- [ ] [Action item with clickable link to section]

**Current Status:**
- ✅ What's complete
- 📋 What's waiting
- 🔄 What's next

**Key Decisions Made:**
- ✅ Approved items
- ❌ Rejected items

**Strategic Direction:**
- Core philosophy/approach
```

---

### **Decision Tree Summary**

```
PURPOSE → AUDIENCE → STATUS = DOCUMENT TYPE

Strategic thinking → Internal → Reference = LIVING
Active development → Any → In progress = WORKING
Final approved → External → Delivered = FIXED
```

---

### **Token Efficiency Summary**

```
PHASE 1: Research (Document Read)
PHASE 2: Iteration (CHAT - saves 80-90% tokens)
PHASE 3: Implementation (Document Write - approved content only)
PHASE 4: Closeout (Document Cleanup)
```

---

**Last Updated:** October 17, 2025  
**Referenced By:** expert-content.md, expert-strategy.md, expert-collaboration.md  
**Status:** ACTIVE - use for all deliverable work

