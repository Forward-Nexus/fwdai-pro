# Update Command

**Purpose:** Universal command for modifying or improving existing work - specs, code, documents, strategies, campaigns, etc.

---

## How This Works

When a user says: `@[expert] @update [thing]`

Example:
- `@denny @update the spec with new requirements`
- `@ada @update the login feature to add 2FA`
- `@lyna @update the pitch deck with new metrics`
- `@genna @update the product roadmap`

---

## Process

### 1. Understand What to Update

Clarify:
- What specifically needs updating?
- What's changing? (new requirements, improvements, fixes?)
- Why the update? (new information, feedback, change in direction?)
- How extensive? (minor tweak vs major revision?)

### 2. Load Current Version

**⚠️ CRITICAL: Update the EXISTING file - don't create a v2!**

Find and read the existing work:
- Check `documents/[category]/` for the deliverable
- Check `roundtable/workspace/` for the collaboration file
- Read the existing content thoroughly
- Understand what's there now

**NEVER create:**
- ❌ `pitch-deck-v2.md`
- ❌ `auth-spec-updated.md`
- ❌ `design-final.md`

**ALWAYS update:**
- ✅ `pitch-deck.md` (the existing file)
- ✅ `auth-spec.md` (directly)
- ✅ Git handles version history, not filenames!

### 3. Understand the Changes

**What's changing:**
- New requirements?
- Updated information?
- Addressing feedback?
- Improving quality?
- Adding features?
- Removing things?

**Search if needed:**
- **Check what year it is!**
- Search for "[current year] best practices" for the new requirements
- Research new approaches if adding functionality
- Verify current standards (not outdated info!)

### 4. Make the Updates

**Follow workflow standards** (`checklists/workflow-standards.md`)

**Update approach:**
- Preserve what's working (don't change unnecessarily)
- Make changes clearly (document what changed and why)
- Maintain consistency (with the rest of the document/project)
- Test/validate changes (especially for code)
- Update related documentation

**For code updates:**
- Create a new branch
- Write/update tests
- Make changes incrementally
- Verify tests pass
- Document changes

**For document updates:**
- Track what changed (version history or change notes)
- Ensure consistency throughout
- Update related sections
- Maintain quality standards

### 5. Document Changes

**In the updated file, include:**
```yaml
# At top or in metadata
updated: 2025-10-06
updated_by: [expert]
changes:
  - Added 2FA requirements
  - Updated security considerations
  - Revised implementation timeline
```

Or for major updates:
```markdown
## Change History

### 2025-10-06 Update
- **Added:** 2FA support with biometric option
- **Changed:** Authentication flow to accommodate 2FA
- **Removed:** Simple password-only login
- **Rationale:** Security requirements increased based on user feedback
```

### 6. Quality Check

- [ ] Are all requested changes made?
- [ ] Is it still consistent/coherent?
- [ ] Does it maintain quality standards?
- [ ] Are tests updated/passing? (if code)
- [ ] Is nothing accidentally broken?

Use `checklists/quality-checklist.md` or domain-specific checklist.

### 7. Save & Communicate

**Save updated version:**
- Same location: `roundtable/workspace/[filename]`
- Or create versioned copy if major changes: `[filename]-v2.yaml`

**Update Roundtable:**
```markdown
### [Date] - [Expert]: Updated [Thing] 🔄

**What changed:**
- [Change 1]
- [Change 2]

**Why:**
[Rationale for updates]

**Impact:**
[What this affects or enables]

**File:**
- `roundtable/workspace/[filename]`

**Next steps:**
- **founder:** [Review changes? Test? Approve?]
- **[other expert]:** [If affects their work]

**Status:** Updated and ready for review ✅
```

**Create tasks if needed:**
```markdown
- [ ] Review updated [thing] - [What to focus on]
- [ ] Test [specific changes] - [What to verify]
```

---

## Best Practices

### ✅ DO:
- **Understand the current state** - Read thoroughly before changing
- **Document what changed** - Make it clear what's different
- **Test thoroughly** - Especially for code updates
- **Preserve what works** - Don't change unnecessarily
- **Communicate changes** - Update Roundtable clearly
- **Follow standards** - Use workflow-standards.md pattern

### ❌ DON'T:
- **Don't change blindly** - Understand the impact
- **Don't break existing functionality** - Test carefully
- **Don't lose history** - Document what changed
- **Don't skip validation** - Verify it still works
- **Don't forget related docs** - Update everything affected

---

## Common Update Scenarios

### Updating Based on Feedback:
```markdown
Founder says: "The spec looks good but we need to add mobile support"

Process:
1. Read current spec
2. Research mobile best practices
3. Add mobile requirements throughout
4. Update implementation plan
5. Revise timeline if needed
6. Document changes
7. Update Roundtable
```

### Updating for New Information:
```markdown
Founder says: "We just learned competitors have feature X"

Process:
1. Research competitor's feature X
2. Determine if/how to adapt
3. Update strategy/spec accordingly
4. Document competitive analysis
5. Adjust roadmap if needed
6. Update Roundtable with findings
```

### Updating to Fix Issues:
```markdown
Founder says: "The pitch deck is missing our traction numbers"

Process:
1. Get traction numbers from founder
2. Update relevant slides
3. Ensure consistency throughout
4. Verify all numbers are current
5. Update Roundtable
```

---

## Graceful Handoffs

If another expert should handle the update:

```markdown
I can update this, but [Expert Name] created the original and might be better 
positioned to make these specific changes because [reason].

Would you like me to:
1. Update it myself (happy to!)
2. Collaborate with [Expert]
3. Hand this update to [Expert]

What works best? 🔄
```

---

**Remember:** Updates are about improving existing work while maintaining quality and consistency. Be thoughtful about what changes, document everything, and keep everyone informed! 🔄

