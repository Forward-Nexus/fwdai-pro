# Expert Tech Pattern

**Version:** 1.0  
**Purpose:** Technical work workflow (specs, architecture, implementation, testing)  
**Primary users:** Denny (design), Ada (implementation)  
**Can be used by:** ANY expert doing technical work

---

## Overview

This pattern defines the workflow for ALL technical work - whether you're designing a spec, writing code, deploying infrastructure, or implementing features.

**What this covers:**
- Technical workflow standards (TDD, testing, quality)
- Spec → Implementation flow
- Denny → Ada handoff process
- Technical deliverable locations
- Technical quality standards

**What you need FIRST:**
- Always load `expert-collaboration.md` (universal workflow)
- Then load this pattern for technical work

---

## When to Use This Pattern

Load this pattern when doing:

✅ **Technical design work:**
- System architecture
- API specifications
- Database schemas
- Technical specifications
- Infrastructure design

✅ **Technical implementation:**
- Writing code
- Building features
- Deploying systems
- Configuring infrastructure

✅ **Technical review:**
- Code review
- Architecture review
- Security review
- Performance analysis

---

## Technical Workflow

### Phase 1: Technical Design (Denny's Domain)

**If you're designing a technical spec:**

#### Step 1: Understand Requirements

**Gather context:**
- What problem does this solve?
- Who's the user/audience?
- What are the constraints? (time, budget, tech stack, compliance)
- What are the acceptance criteria?

**Ask smart questions:**
- "What problem does this solve?"
- "Any specific technical requirements?"
- "Performance/security/compliance needs?"
- "Integration with existing systems?"

**Don't ask if you can infer from context!**

#### Step 2: Research Current Best Practices

**CRITICAL: Always check current year and best practices!**

```markdown
Search patterns:
- "[technology] best practices [current year]"
- "[framework] architecture patterns [current year]"
- "[problem] solutions [current year]"
- "security considerations [technology] [current year]"
```

**Examples:**
- "React state management best practices 2025"
- "Node.js API design patterns 2025"
- "PostgreSQL schema design best practices 2025"

**Why this matters:**
- Technology evolves rapidly
- Best practices change
- New security vulnerabilities discovered
- Better patterns emerge

#### Step 3: Design the System

**Create technical specification with:**

1. **Overview**
   - What we're building
   - Why we're building it
   - High-level approach

2. **Architecture**
   - System components
   - Data flow
   - Integration points
   - Technology choices (with rationale)

3. **Technical Details**
   - API endpoints/interfaces
   - Database schema
   - Key algorithms/logic
   - Error handling approach

4. **Implementation Guide**
   - Step-by-step implementation tasks
   - In priority order
   - Each task testable
   - Clear acceptance criteria

5. **Testing Strategy**
   - What needs testing
   - How to test it
   - Test scenarios/edge cases

6. **Security & Compliance**
   - Security considerations
   - Compliance requirements
   - Data privacy needs

7. **Open Questions**
   - Decisions needed from founder
   - Trade-offs to consider
   - Alternatives evaluated

**Use the spec pattern:** `system/patterns/spec.md` for detailed structure

#### Step 4: Document in Workspace

**In your workspace section:**
```markdown
## Denny's Design

**Status:** [Draft/Review/Approved]

### Design Approach:
[High-level explanation]

### Key Decisions:
- **[Decision]:** [Rationale]
- **[Technology choice]:** [Why this vs alternatives]

### Trade-offs:
- **[Trade-off]:** [Pros/cons, recommendation]

### Research:
- [Link to best practices found]
- [Link to similar implementations]

### Questions for Founder:
- [Any decisions needed]

### Handoff to @ada:
[Everything Ada needs to implement this]
```

#### Step 5: Create Deliverable

**Save spec in:** `documents/tech/`

**Spec file includes:**
- Complete technical specification
- Implementation task breakdown (TDD format if using @create-specflow)
- Testing requirements
- Acceptance criteria
- Clean, polished, ready for implementation

---

### Phase 2: Technical Implementation (Ada's Domain)

**If you're implementing technical work:**

#### Step 1: Load Spec Context

**Read the spec thoroughly:**
- Understand the design
- Review architecture decisions
- Note testing requirements
- Check for handoff notes from Denny

**If anything is unclear:**
- Ask in workspace (tag @denny)
- Don't guess or make assumptions
- Better to clarify than implement wrong

#### Step 2: Set Up TDD (Test-Driven Development)

**THE RULE: Tests FIRST, then code!**

**For each implementation task:**

1. **Write the test FIRST**
   ```markdown
   - Write failing test that defines expected behavior
   - Test should be specific and testable
   - Include edge cases and error scenarios
   ```

2. **Write minimal code to pass test**
   ```markdown
   - Implement just enough to pass the test
   - Don't over-engineer
   - Keep it simple
   ```

3. **Refactor if needed**
   ```markdown
   - Clean up code
   - Improve readability
   - Optimize if necessary
   ```

4. **Verify all tests pass**
   ```markdown
   - Run full test suite
   - Ensure no regressions
   - All tests green before moving on
   ```

**Why TDD matters:**
- Catches bugs early
- Ensures testable code
- Documents expected behavior
- Prevents regressions
- Forces clear thinking

#### Step 3: Implement According to Spec

**Follow the spec closely:**
- Implement tasks in order
- Check off each task as completed
- Update workspace with progress
- Log any deviations with rationale

**Best practices:**
- Write clean, readable code
- Follow project style guide
- Comment complex logic
- Handle errors gracefully
- Consider edge cases
- Think about security

**Search current best practices:**
- Check latest patterns for the technology
- Review security considerations
- Look for common pitfalls
- Find optimization opportunities

#### Step 4: Test Thoroughly

**Testing requirements:**
- ✅ Unit tests (80%+ coverage)
- ✅ Integration tests (critical paths)
- ✅ Edge cases covered
- ✅ Error handling tested
- ✅ Security scenarios tested

**Run tests continuously:**
- After each change
- Before marking task complete
- Before handoff or deployment

**Document test coverage:**
- What's tested
- What's not (with rationale)
- Known limitations

#### Step 5: Document Implementation

**Update workspace with:**
```markdown
## Ada's Implementation

**Status:** [InProgress/Review/Complete]
**Test Coverage:** [X%]

### Completed:
- [Date] ✅ Task 1 - Tests passing
- [Date] ✅ Task 2 - Tests passing

### In Progress:
- [Date] 🔄 Task 3 - Writing tests

### Decisions Made:
- **[Implementation detail]:** [Why I chose this approach]

### Deviations from Spec:
- **[What changed]:** [Why and benefits]

### Tests:
- Unit tests: [X passing]
- Integration tests: [Y passing]
- Coverage: [Z%]

### Ready for Review:
[Tag @denny when ready for QA]
```

#### Step 6: Quality Assurance

**Before marking complete, verify:**

✅ **Code Quality:**
- All tests pass (100% green)
- 80%+ code coverage
- No linter errors
- Code reviewed (self or peer)
- Follows style guide

✅ **Functionality:**
- Meets acceptance criteria
- Handles edge cases
- Error handling works
- Performance acceptable

✅ **Security:**
- Input validation
- Authentication/authorization
- Data encryption (if needed)
- No security vulnerabilities

✅ **Documentation:**
- Code comments (where needed)
- API documentation (if applicable)
- README updated (if applicable)

**Run checklist:** `system/checklists/code-checklist.md`

---

## Denny → Ada Handoff Process

### Denny's Handoff Checklist:

When handing spec to Ada, include in workspace:

```markdown
### Handoff to @ada

**Spec Location:** [link to documents/tech/spec.md]

**What I've designed:**
[Brief summary]

**Key Architecture Decisions:**
- [Decision 1 and why]
- [Decision 2 and why]

**Implementation Priority:**
1. [First feature - why]
2. [Second feature - why]
3. [Third feature - why]

**Testing Focus:**
- [Critical test scenarios]
- [Edge cases to watch for]

**Watch Out For:**
- [Potential gotchas]
- [Integration challenges]

**Questions/Clarifications:**
[Anything Ada might wonder about]

**References:**
- [Link to research]
- [Link to similar implementations]
- [Link to docs/APIs needed]
```

### Ada's Handoff Back to Denny (for QA):

When ready for review, include in workspace:

```markdown
### Ready for Review - @denny

**Implementation Complete:** [link to code/PR]

**What I Built:**
[Brief summary]

**Test Coverage:**
- Unit tests: [X passing, Y total]
- Integration tests: [X passing, Y total]
- Coverage: [Z%]
- All tests green: ✅

**Implementation Notes:**
- [Followed spec closely OR]
- [Made these changes with rationale]

**Known Issues/Limitations:**
- [If any, with plan to address]

**Deployment Notes:**
- [Anything needed for deployment]
- [Environment variables, configs, etc.]

**Ready for:**
- [ ] Code review
- [ ] QA testing
- [ ] Deployment to [environment]
```

---

## Technical Deliverable Locations

### Where Technical Work Goes:

**Specifications:**
```
documents/tech/specs/
  - [feature-name]-spec.md
  - [system-name]-architecture.md
  - [api-name]-api-spec.md
```

**Code/Implementation:**
```
[Your project's code structure]
- Depends on your project
- Ada follows your existing structure
- Creates new structure if new project
```

**Technical Documentation:**
```
documents/tech/docs/
  - [feature-name]-technical-doc.md
  - [system-name]-deployment-guide.md
  - [api-name]-integration-guide.md
```

**Founder can override locations anytime!**

---

## Technical Quality Standards

### Before Marking Technical Work Complete:

**Run appropriate checklists:**
- Specs: `system/checklists/spec-checklist.md`
- Code: `system/checklists/code-checklist.md`
- All work: `system/checklists/quality-checklist.md`

### Technical Excellence Criteria:

✅ **Design Quality (Denny):**
- Clear architecture
- Well-reasoned decisions
- Testable requirements
- Security considered
- Performance considered
- Scalable approach

✅ **Implementation Quality (Ada):**
- Tests written FIRST
- 80%+ test coverage
- All tests passing
- Clean, readable code
- Security best practices
- Error handling robust
- Performance optimized

✅ **Documentation Quality:**
- Clear specifications
- Implementation notes
- API documentation
- Deployment guides
- Troubleshooting info

---

## Flow Commands for Technical Work

### When to Use @create-specflow:

Use structured flow for:
- ✅ Technical specifications
- ✅ Want mandatory TDD enforcement
- ✅ Need bulletproof quality (TDD + QA)
- ✅ Complex features requiring rigor

**What it provides:**
- Structured spec creation
- TDD task formatting
- Mandatory test requirements
- Quality gates

**How to suggest:**
```
"This looks like a technical spec. I recommend @create-specflow for 
bulletproof TDD enforcement. Or I can create it flexibly with @create. 
Your choice!"
```

### When to Use @execute-specflow:

Use structured flow for:
- ✅ Technical spec exists
- ✅ Want enforced TDD (tests FIRST)
- ✅ Need mandatory QA phase
- ✅ Critical implementation requiring rigor

**What it provides:**
- Enforced TDD workflow
- Test coverage tracking
- Mandatory QA review
- Quality gates

---

## Technology Considerations

### Always Research Current Best Practices:

**Before designing/implementing:**
- Check what year it is (critical!)
- Search current best practices
- Review latest security advisories
- Check for deprecated patterns
- Find modern alternatives

**Technology evolves:**
- Frameworks update
- Languages change
- Security threats emerge
- Better patterns discovered
- Tools improve

**Don't rely on old knowledge - verify CURRENT best practices!**

### Tech Stack Considerations:

**Work with existing stack:**
- Check `project/project-kb.md` for current tech
- Use established patterns
- Match existing style
- Don't introduce new tech without reason

**When suggesting new tech:**
- Provide clear rationale
- Compare to alternatives
- Explain benefits/costs
- Get founder approval

---

## Security & Compliance

### Always Consider:

**Security checklist:**
- [ ] Input validation (all user input)
- [ ] Authentication (who can access?)
- [ ] Authorization (what can they do?)
- [ ] Data encryption (at rest, in transit)
- [ ] SQL injection prevention
- [ ] XSS prevention
- [ ] CSRF protection
- [ ] Rate limiting
- [ ] Error messages (don't leak info)
- [ ] Dependency vulnerabilities

**Compliance checklist:**
- [ ] Check `project/project-kb.md` for compliance needs
- [ ] GDPR (if EU users)
- [ ] HIPAA (if healthcare)
- [ ] PCI DSS (if payments)
- [ ] SOC 2 (if enterprise)
- [ ] Industry-specific regulations

**When in doubt:**
- Tag @elle for legal/compliance review
- Better safe than sorry
- Document compliance decisions

---

## Performance Considerations

### Design for Scale:

**Questions to ask:**
- What's the expected load?
- What are the bottlenecks?
- How will this scale?
- What's the caching strategy?
- What's the database indexing strategy?

**Performance testing:**
- Load testing (if applicable)
- Stress testing (critical paths)
- Performance benchmarks
- Identify bottlenecks

**Optimize when needed:**
- Profile first (don't guess)
- Optimize hot paths
- Cache effectively
- Use async/parallel where beneficial
- Database optimization

---

## Common Technical Patterns

### API Design:

**RESTful best practices (2025):**
- Resource-based URLs
- Proper HTTP methods
- Status codes meaningful
- Versioning strategy
- Authentication/authorization
- Rate limiting
- Error responses consistent
- Documentation (OpenAPI/Swagger)

### Database Design:

**Schema best practices:**
- Normalize appropriately
- Index strategically
- Foreign keys enforced
- Soft deletes (if needed)
- Timestamps (created, updated)
- Migration strategy
- Backup strategy

### Code Organization:

**Clean architecture:**
- Separation of concerns
- DRY (Don't Repeat Yourself)
- SOLID principles
- Testable components
- Clear dependencies
- Minimal coupling

---

## Summary

### This Pattern Ensures:

✅ **Quality** - TDD, testing, code review  
✅ **Security** - Security best practices enforced  
✅ **Clarity** - Clear specs, clean code  
✅ **Collaboration** - Smooth Denny → Ada handoff  
✅ **Excellence** - Current best practices applied  

### Remember:

- **Tests FIRST, then code** (TDD is mandatory)
- **Research current best practices** (always check the year!)
- **Follow the spec** (or document why you deviated)
- **Security matters** (every time)
- **Document everything** (specs, decisions, implementations)

---

**Related Patterns:**
- `expert-collaboration.md` - Universal workflow (load this first!)
- `spec.md` - Detailed spec structure
- `universal.md` - Universal command pattern
- Checklists: `spec-checklist.md`, `code-checklist.md`

**Related Flows:**
- `@create-specflow` - Structured spec creation with TDD
- `@execute-specflow` - Enforced TDD implementation

---

*This pattern is used for ALL technical work. Update this ONE file to improve ALL technical workflows.*

