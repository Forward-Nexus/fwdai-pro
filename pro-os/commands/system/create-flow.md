# System Command: Create Flow

**Command:** `@create-flow` or `@genna @create-flow`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Create a custom flow command with optional pattern definition

---

## What This Command Does

Walks you through creating a custom flow command that automates your specific workflow. If your workflow needs a unique structure, it can also create a pattern to support it.

**Creates:**
- Flow command in `pro-os/commands/flows/[your-flow].md`
- Pattern file in `pro-os/system/patterns/[your-pattern].md` (if needed)
- Proper three-phase workflow structure
- References to patterns
- Quality standards

---

## When to Use This

Create a custom flow when:
- ✅ **Repetitive structured workflow** - Same multi-step process every time
- ✅ **Quality enforcement needed** - Must follow specific standards
- ✅ **Domain-specific process** - Industry has unique workflows
- ✅ **Team coordination** - Multiple experts, specific order

**Examples:**
- Restaurant: `@create-menuflow` (concept → cost → test → photo → implement)
- Healthcare: `@create-clinicalflow` (draft → medical review → compliance → publish)
- E-commerce: `@launch-productflow` (specs → pricing → photos → listing → campaign)
- Education: `@create-lessonflow` (objectives → content → interactive → assessment)

**Different from universal commands:**
- Universal: Flexible, AI adapts
- Flow: Structured, enforced steps, repeatable

---

## How It Works

### Phase 1: Discovery & Design

#### Step 1: Understand the Workflow

```
You: @create-flow

Genna: 
🎯 Let's create a custom flow command for your workflow!

I'll help you design a structured, repeatable process that ensures
quality and coordinates experts properly.

First, tell me about your workflow:

1. What's the workflow called? (e.g., "menu item creation", "clinical content")
2. What triggers this workflow? (when do you start it?)
3. What's the end goal? (what gets delivered?)

> [Your answers]
```

#### Step 2: Map the Workflow Steps

```
Genna:
Great! Now let's map out the steps.

What are the phases/steps in your workflow? (in order)

Be specific! For example:
- Phase 1: Concept & Research
  - Define requirements
  - Research best practices
  - Get stakeholder input
- Phase 2: Design & Specification
  - Create design
  - Write specs
  - Review with team
- Phase 3: Implementation
  - Build/create
  - Test/verify
  - Deploy/publish

> [Your workflow steps]
```

#### Step 3: Identify Expert Roles

```
Genna:
Who's involved at each phase?

Available experts:
- @genna (Strategy, Architecture)
- @denny (Systems Design, Technical Specs)
- @ada (Implementation, Building)
- @lyna (External Strategy, Marketing)
- @benji (Growth, Content)
- @elle (Legal, Compliance)
- [Your domain experts]

For each phase, who should do the work?

Example:
- Phase 1: Chef Maria (concept) + Denny (specs)
- Phase 2: Ada (build) + Denny (review)
- Phase 3: Benji (marketing) + Ada (launch)

> [Expert assignments]
```

#### Step 4: Define Quality Standards

```
Genna:
What quality checks must happen? What can't be skipped?

Examples:
- Testing required (like TDD in code)
- Compliance review mandatory
- Cost validation required
- Brand standards must be met
- Stakeholder approval needed

What are your non-negotiables?

> [Quality requirements]
```

#### Step 5: Pattern Assessment

```
Genna:
Now let me check if we need a new pattern...

[AI analyzes the workflow]

Your workflow has:
- Multi-phase structure ✓
- Quality enforcement ✓
- Expert coordination ✓
- Specific steps ✓

Can we use an existing pattern?

Option A: Use existing pattern (universal.md, spec.md)
  - Three-phase workflow (Pre-Flight → Execution → Post-Flight)
  - Existing structure fits your needs
  - Faster to implement

Option B: Create new pattern
  - Your workflow has unique structure
  - Need specialized phases/steps
  - Domain-specific requirements
  - Reusable for similar workflows

Based on your workflow, I recommend: [Option]

Want to proceed with that, or prefer the other option?

> [Your choice]
```

---

### Phase 2: Creation

#### If Using Existing Pattern:

```
Genna:
✅ Using existing pattern: [pattern-name].md

Creating your flow command with this structure...

[Creates flow command that references existing pattern]

✅ Created: pro-os/commands/flows/[your-flow].md

Your flow follows the [pattern-name] structure:
- Pre-Flight: [what happens]
- Execution: [what happens]
- Post-Flight: [what happens] (MANDATORY)

All standard quality checks included!
```

#### If Creating New Pattern:

```
Genna:
📋 Creating new pattern: [pattern-name].md

This pattern will define:
1. Workflow structure (phases/steps)
2. Quality standards (what's required)
3. Expert coordination (who does what)
4. Completion criteria (what "done" means)

Your pattern will be reusable for similar workflows!

Creating pattern and flow command...

✅ Created: pro-os/system/patterns/[pattern-name].md
✅ Created: pro-os/commands/flows/[your-flow].md

Your flow now has a dedicated pattern that defines exactly how
this type of work should be done. You can use this pattern for
other similar flows too!
```

---

### Phase 3: Documentation & Usage

```
Genna:
🎉 Your flow command is ready!

**Command:** @[your-flow]
**Pattern:** [pattern-name].md (existing or new)
**Location:** pro-os/commands/flows/[your-flow].md

**How to use:**
@[your-flow] [what you're creating]

Example: @create-menuflow spicy tuna roll

**What happens when you use it:**
1. Pre-Flight: Loads context, asks questions, verifies requirements
2. Execution: Follows your defined phases with expert coordination
3. Post-Flight: Quality checks, documentation, completion (MANDATORY)

**Quality enforcement:**
[Lists the quality checks that can't be skipped]

**Expert coordination:**
[Shows which experts are involved at each phase]

Want to test it now or customize further?
```

---

## What Gets Created

### Flow Command File Structure

**Location:** `pro-os/commands/flows/[your-flow].md`

**Contains:**
1. **Header**
   - Command name
   - Purpose
   - When to use vs alternatives

2. **Three-Phase Workflow**
   - Pre-Flight (preparation, questions, verification)
   - Execution (the actual work, following pattern)
   - Post-Flight (quality checks, documentation, completion - MANDATORY)

3. **Pattern Reference**
   - Links to pattern file
   - Explains structure
   - Quality standards

4. **Expert Ownership**
   - Primary expert
   - Collaborators
   - Availability conditions

5. **Quality Standards**
   - Non-negotiable checks
   - Checklists to run
   - Completion criteria

6. **Examples**
   - Usage examples
   - Expected outputs
   - Common scenarios

---

### Pattern File Structure (If Created)

**Location:** `pro-os/system/patterns/[pattern-name].md`

**Contains:**
1. **Overview**
   - What this pattern is for
   - When to use it
   - Key principles

2. **Workflow Structure**
   - Phases defined
   - Steps within phases
   - Decision points

3. **Quality Standards**
   - What must be checked
   - What can't be skipped
   - Validation criteria

4. **Expert Coordination**
   - Roles and responsibilities
   - Handoff patterns
   - Collaboration notes

5. **Best Practices**
   - Do's and don'ts
   - Common pitfalls
   - Tips for success

---

## Examples

### Example 1: Restaurant Menu Item Flow

**User answers:**
- Workflow: Menu item creation
- Steps: Concept → Cost → Test → Photo → Menu entry
- Experts: Chef Maria (concept/test), Denny (specs), Ada (POS), Benji (description)
- Quality: Cost < 30%, tested 3x, photos approved, description reviewed

**AI decision:** Create new pattern (restaurant-menu-item.md)

**Creates:**
- `patterns/restaurant-menu-item.md` - Defines menu item creation structure
- `flows/create-menuflow.md` - Command that uses the pattern

**Usage:** `@create-menuflow spicy tuna roll`

---

### Example 2: Healthcare Clinical Content

**User answers:**
- Workflow: Clinical content creation
- Steps: Draft → Medical review → Compliance check → Publish
- Experts: Writer (draft), Dr. Chen (review), Elle (compliance), Ada (publish)
- Quality: Medical accuracy verified, compliance approved, readability score > 80

**AI decision:** Create new pattern (clinical-content.md)

**Creates:**
- `patterns/clinical-content.md` - Defines clinical content workflow
- `flows/create-clinicalflow.md` - Command that uses the pattern

**Usage:** `@create-clinicalflow diabetes management guide`

---

### Example 3: E-commerce Product Launch

**User answers:**
- Workflow: Product launch
- Steps: Specs → Pricing → Photos → Listing → Campaign
- Experts: Denny (specs), Lyna (pricing), Benji (photos/campaign), Ada (listing)
- Quality: Margin > 40%, photos on-brand, listing optimized, campaign planned

**AI decision:** Use existing universal.md pattern (fits three-phase workflow)

**Creates:**
- `flows/launch-productflow.md` - Command using universal pattern

**Usage:** `@launch-productflow wireless earbuds`

---

## Pattern Decision Logic

**Use EXISTING pattern when:**
- ✅ Fits three-phase workflow (Pre-Flight → Execution → Post-Flight)
- ✅ No unique structure requirements
- ✅ Standard quality checks work
- ✅ Universal or spec pattern covers it

**CREATE NEW pattern when:**
- ✅ Unique phase structure (not just 3 phases)
- ✅ Domain-specific steps required
- ✅ Special quality standards needed
- ✅ Will be reused for similar workflows
- ✅ Industry has specific methodology

**Genna decides based on your workflow description!**

---

## After Creation

### Using Your Flow

```bash
@[your-flow] [item]
@[expert] @[your-flow] [item with context]
```

### Refining Your Flow

**Option 1: Edit directly**
```
Edit: pro-os/commands/flows/[your-flow].md
Edit: pro-os/system/patterns/[pattern].md (if you created one)
```

**Option 2: Ask AI to refine**
```
@genna add [step] to @[your-flow]
@genna update [pattern] to include [requirement]
```

**Option 3: Learn from usage**
```
Use the flow a few times
Note what works / doesn't
Ask Genna to improve based on real experience
```

---

## Integration with System

### Your flow automatically:
- ✅ Shows in expert command lists (if assigned to expert)
- ✅ References appropriate patterns
- ✅ Uses quality checklists
- ✅ Updates workspaces and whiteboards
- ✅ Follows three-phase structure
- ✅ Enforces quality standards

### Your pattern (if created):
- ✅ Available for other flows to reference
- ✅ Documents your domain methodology
- ✅ Reusable across similar workflows
- ✅ Can be refined over time

---

## Best Practices

### ✅ DO:

1. **Be specific** - "Create menu item" not "make food thing"
2. **Define clear phases** - Distinct steps, logical order
3. **Assign experts logically** - Right person for each phase
4. **Set quality gates** - Specific, measurable standards
5. **Think reusability** - Will this pattern work for similar workflows?
6. **Test and refine** - Use it, learn, improve

### ❌ DON'T:

1. **Don't be too generic** - Defeats purpose of structured flow
2. **Don't skip quality standards** - That's what makes flows valuable
3. **Don't over-complicate** - If universal command works, use that
4. **Don't create flow for one-time use** - Flows are for repetition
5. **Don't ignore pattern decision** - Trust Genna's recommendation

---

## Related Commands

- `@create-expert` - Create domain expert to use in your flow
- `@rt` - Roundtable review (for unstructured collaboration)
- Universal commands - For flexible, non-repetitive work

---

## Flow vs Universal Commands

**Universal Commands** (`@create`, `@execute`):
- Flexible, AI adapts
- Different every time
- No enforced structure
- Quick and easy

**Flow Commands** (`@create-specflow`, `@your-flow`):
- Structured, consistent
- Same process every time
- Enforced quality standards
- Repeatable workflows

**Both have their place!** Use flows for repetitive processes, universal for everything else.

---

**Ready to create your custom flow? Use `@create-flow` to build structured, repeatable workflows!** ⚡
