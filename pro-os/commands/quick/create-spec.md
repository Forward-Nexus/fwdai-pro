# @create-spec

**Purpose:** Create a technical specification with optimized workflow

**Expert:** Denny (Systems Architect)

**Category:** Technical

---

## When to Use

Use this command when:
- You need a technical specification for a feature/system
- You want detailed requirements before implementation
- You're handing off to Ada for implementation

**vs using `@denny @create spec`:**
- This command: Optimized spec workflow, knows exact spec questions, auto-runs spec checklist
- Universal command: Still works, but more generic

---

## How It Works

### 1. Smart Questions (Context-Aware)

**Check what we already know:**
- If `project-kb.md` has tech stack → Don't ask about tech
- If similar spec exists → Reference it for consistency
- If `founder-profile.md` has technical preferences → Use them

**Required questions (always ask if not known):**
- [ ] What feature/system are you building?
- [ ] What problem does it solve?
- [ ] Who are the users?

**Optional questions (ask only if needed):**
- [ ] Technical constraints? (if not in project-kb)
- [ ] Performance requirements? (if system is complex/high-load)
- [ ] Integration points? (if connecting to other systems)
- [ ] Security requirements? (if handling sensitive data)

**Never ask if we already know it from context!**

### 2. Load Context (Token Efficiency!)

**Check what's already in context first!**

If NOT in context, read:
- `project/founder-profile.md`
- `project/project-kb.md` (tech stack, constraints)
- `project/mission.md`
- `roundtable/whiteboards.md`
- Any related specs in `documents/technical/`

### 3. Search Current Best Practices

**ALWAYS search for current information:**
- "[current year] technical specification best practices"
- "[technology] spec standards [current year]"
- "[feature type] specification examples [current year]"
- "Current [industry] technical documentation standards"

**Example searches:**
- "2025 API specification best practices"
- "React component spec standards 2025"
- "Database schema specification examples 2025"

### 4. Follow Optimized Spec Workflow

**Step 1: Understand the Feature**
- Clarify the problem being solved
- Identify user needs
- Understand technical context

**Step 2: Define Scope**
- What's IN scope?
- What's OUT of scope (explicitly state!)
- MVP vs future enhancements

**Step 3: Create Workspace + Spec**
- Create `roundtable/workspace/[feature]-spec.md`
- Create `documents/technical/[feature]-spec.md`
- Document process, decisions, and trade-offs IN workspace

**Step 4: Write Specification**

Include in spec deliverable:
- **Overview** - What and why
- **Requirements** - Functional and non-functional
- **Technical Approach** - How it works
- **Data Models** - Entities, schemas, relationships
- **API/Interfaces** - Endpoints, methods, contracts
- **User Flow** - How users interact
- **Edge Cases** - Error handling, edge scenarios
- **Acceptance Criteria** - How to know it's done
- **Dependencies** - What it needs/affects
- **Security** - Auth, permissions, data protection
- **Testing Strategy** - How to test it

**Step 5: Quality Check**
- Run checklist: `system/checklists/spec-checklist.md`
- Verify: All requirements addressed
- Verify: Acceptance criteria are testable
- Verify: Technical approach is sound
- Verify: Dependencies identified

**Step 6: Prepare for Handoff**
- If Ada will implement: Add complete handoff section in workspace
- Include ALL context Ada needs
- Reference this spec in handoff

**Step 7: Update Roundtable**
- Update `roundtable/whiteboards.md` (Denny's section)
- Add to `roundtable/[your-name]-checklist.md` for review

### 5. Deliverable Location

**Workspace:** `roundtable/workspace/[feature]-spec.md`  
**Deliverable:** `documents/technical/[feature]-spec.md`

---

## What Makes This Quick Command Different

**Optimizations for specs:**
- Knows exact spec sections needed
- Auto-searches current tech spec standards
- Runs spec checklist automatically
- Prepares handoff to Ada if implementation follows

**Smart defaults:**
- Knows to include acceptance criteria
- Remembers to document edge cases
- Includes testing strategy
- Documents security considerations

**Efficiency gains:**
- Denny knows this is a spec workflow
- Asks spec-specific questions only
- Uses spec template automatically
- Sets up for implementation handoff

---

## Quality Standards

### Before Marking Complete:
- ✅ Follow: `system/standards/workflow-standards.md`
- ✅ Run: `system/checklists/spec-checklist.md`
- ✅ All requirements clearly defined
- ✅ Acceptance criteria are testable
- ✅ Technical approach is feasible
- ✅ Edge cases documented
- ✅ Security/compliance addressed
- ✅ Dependencies identified
- ✅ Current best practices researched and applied
- ✅ Workspace updated with final status
- ✅ Whiteboards updated
- ✅ Handoff documented (if going to Ada)
- ✅ Clean spec in documents/technical/

---

## Example Usage

### Simple:
```
@create-spec authentication
```

### With Context:
```
@create-spec for user authentication with 2FA
```

### Example Flow:

**Founder:** `@create-spec authentication system`

**AI (Denny):**
```
Creating auth spec! Quick questions:

1. What type of auth? (OAuth, email/password, biometric)
   [Checks project-kb - sees you're using React/Node]

2. Any specific security requirements?
   (e.g., 2FA, session timeout, password rules)

[Searching "2025 authentication specification best practices"...]
[Searching "Node.js auth spec standards 2025"...]

Creating workspace + spec...

✅ Done! 

Workspace: roundtable/workspace/auth-spec.md (process, decisions)
Spec: documents/technical/auth-spec.md (clean spec)

Ready for your review! When approved, I can hand off to Ada for implementation.
```

---

## Notes

- This is a **shortcut** - `@denny @create spec` also works
- **Optimized workflow** specifically for technical specs
- **Smart questions** know what specs need
- **Auto-runs spec checklist** for quality

---

## References

- Universal command: `commands/create.md`
- Workflow standards: `system/standards/workflow-standards.md`
- Spec checklist: `system/checklists/spec-checklist.md`
- Expert file: `agents/denny-systems-architect.md`

---

**Remember:** Great specs are clear, complete, and testable. They make implementation smooth and prevent misunderstandings. Take your time, search current best practices, and make it thorough! 🔧

