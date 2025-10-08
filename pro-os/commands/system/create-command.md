# Quick Command: Create Command

**Command:** `@create-command` or `@genna @create-command`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Create a custom command workflow tailored to your specific needs

---

## What This Command Does

Walks you through creating a custom command that automates your specific workflow. The AI will ask guided questions and generate a complete command document with:
- Clear purpose and use cases
- Step-by-step workflow
- Expert collaboration patterns
- Example interactions
- When to use guidance

---

## When to Use This

Create a custom command when:
- ✅ **Repetitive workflow** - You do the same multi-step process often
- ✅ **Custom process** - Your industry has specific workflows not in standard commands
- ✅ **Team handoffs** - Multiple experts need to collaborate in a specific order
- ✅ **Quality gates** - You have a review process that needs to happen consistently

**Examples:**
- Restaurant: `@create-menu-item` (design → cost → photo → implementation)
- Healthcare: `@create-clinical-content` (draft → medical review → compliance check)
- E-commerce: `@launch-product` (listing → photos → pricing → launch)
- Education: `@create-lesson` (learning objectives → content → assessment)

---

## How It Works

### Step 1: Initiate Creation
```
You: @create-command

Genna:
🎯 Let's create a custom command for your workflow!

I'll help you design a command that automates your specific process, 
coordinates experts, and ensures quality.

What workflow do you want to streamline?
```

### Step 2: Guided Questions

Genna will ask:

**1. Command Name**
```
What should we call this command?
Use format: @[action]-[thing]

Examples: @create-menu-item, @launch-product, @review-clinical-content

> [Your answer]
```

**2. Purpose**
```
What does this command do? (One sentence)
Example: "Create a new menu item from concept to implementation"

> [Your answer]
```

**3. When to Use**
```
When should someone use this command? What triggers it?
Example: "When adding a new dish to the menu" or "Before launching a new product"

> [Your answer]
```

**4. Workflow Steps**
```
What are the steps in this workflow? (In order)

Example:
1. Define the concept
2. Calculate costs
3. Test recipe
4. Take photos
5. Write description
6. Add to menu system

> [Your answers]
```

**5. Which Experts Involved**
```
Which experts should collaborate on this?

Available: Genna, Denny, Ada, Benji, Lyna, Elle, [your domain expert]

Example: "Chef Maria (design), Denny (specs), Ada (implementation)"

> [Your answer]
```

**6. Quality Checks**
```
What needs to be verified before this is complete?

Example: "Cost margins acceptable, photos meet brand standards, description is accurate"

> [Your answer]
```

**7. Deliverables**
```
What gets created/delivered at the end?

Example: "Menu item specification, cost sheet, photos, menu system entry"

> [Your answer]
```

### Step 3: AI Generates Command

```
Genna:
Perfect! Creating your @[command-name] workflow...

Generated:
- ✅ Command documentation with clear purpose
- ✅ Step-by-step workflow
- ✅ Expert collaboration pattern
- ✅ Quality checklist
- ✅ Example interactions
- ✅ When to use guidance

📁 Saved to: .fwdpro/pro-os/commands/custom/[command-name].md

You can now use @[command-name] anytime you need this workflow!

Want to customize further? Edit the command file or ask me to refine it.
```

### Step 4: Add to Quick Access (Optional)

```
Genna:
Want to add @[command-name] to your 0-your-commands/ folder for quick access?

[Yes] [No]

> Yes

✓ Created symlink in .fwdpro/0-your-commands/
```

---

## Example Interaction

**Creating a Restaurant Menu Item Command:**

```
You: @create-command

Genna: What should we call this command?
You: @create-menu-item

Genna: What does this command do?
You: Creates a new menu item from concept through implementation

Genna: When should someone use this command?
You: When adding a new dish to the restaurant menu

Genna: What are the workflow steps?
You: 
1. Define the dish concept and ingredients
2. Calculate food cost and pricing
3. Design plating and presentation
4. Test recipe and adjust
5. Take professional photos
6. Write menu description
7. Add to POS system

Genna: Which experts should collaborate?
You: Chef Maria (concept & recipe), Denny (specs & process), 
Ada (POS implementation), Benji (marketing description)

Genna: What needs to be verified before complete?
You: Food cost under 30%, photos meet brand standards, recipe tested 3x, 
description approved, added to POS

Genna: What gets delivered?
You: Menu item spec, cost sheet, recipe card, plating photo, menu description, 
POS entry

Genna:
Perfect! Creating @create-menu-item workflow...

✅ Generated complete command workflow
📁 Saved to: .fwdpro/pro-os/commands/custom/create-menu-item.md

You can now use @create-menu-item anytime you add a dish to your menu!

Try: @create-menu-item [dish name]
```

---

## What Gets Created

### Command File Structure

Your new command will have:

1. **Command Header**
   - Command name and alias
   - Expert who handles it
   - Purpose

2. **What This Command Does**
   - Clear explanation
   - What gets created

3. **When to Use This**
   - Specific use cases
   - Triggers and scenarios

4. **How It Works**
   - Step-by-step workflow
   - Expert collaboration
   - Handoff patterns

5. **Quality Checklist**
   - Verification steps
   - Completion criteria

6. **Example Interactions**
   - Shows actual usage
   - Sample output

7. **Deliverables**
   - What files/documents get created
   - Where they're saved

8. **Related Commands**
   - Similar workflows
   - Follow-up commands

---

## After Creation

### Using Your New Command

```
@[command-name]
@[command-name] [specific item]
@genna @[command-name] [with context]
```

### Customizing Further

Your command is fully editable:

**Option 1: Edit directly**
```
Open: .fwdpro/pro-os/commands/custom/[command-name].md
Edit any section to refine the workflow
```

**Option 2: Ask AI to refine**
```
@genna Can you add [step] to the @[command-name] workflow?
@genna Update @[command-name] to include [expert] in the process
```

**Option 3: Iterate with usage**
```
As you use the command, note what works/doesn't
Ask Genna to refine based on real usage
```

---

## Tips for Great Commands

### 1. Be Workflow-Specific
❌ Generic: "@create-thing"  
✅ Specific: "@create-menu-item" or "@launch-product-listing"

### 2. Define Clear Steps
❌ Vague: "Make it happen"  
✅ Clear: "1. Design, 2. Cost, 3. Test, 4. Photo, 5. Implement"

### 3. Assign Experts Logically
❌ Random: "Everyone helps"  
✅ Logical: "Maria designs → Denny specs → Ada implements"

### 4. Set Quality Gates
❌ Loose: "Make it good"  
✅ Specific: "Cost < 30%, tested 3x, photos approved, description reviewed"

---

## Example Custom Commands

### Healthcare App
**@create-clinical-content**
1. Draft content (Medical Writer)
2. Clinical review (Dr. Chen)
3. Compliance check (Elle)
4. Patient readability test
5. Publish

### E-commerce Platform
**@launch-product**
1. Product specs (Denny)
2. Pricing strategy (Lyna/Benji)
3. Photos and copy (Benji)
4. Listing creation (Ada)
5. Marketing campaign (Benji)
6. Launch

### Education Platform
**@create-lesson**
1. Learning objectives (Professor Lee)
2. Content outline (Genna)
3. Interactive elements (Denny)
4. Implementation (Ada)
5. Assessment design (Professor Lee)
6. Publish

### SaaS Startup
**@prepare-pitch**
1. Deck outline (Genna/Lyna)
2. Financial projections (Lyna)
3. Market research (Benji)
4. Design slides (Ada)
5. Legal review (Elle)
6. Practice run

---

## Commands vs. Roundtables

**Commands** = Predefined workflow
- Same steps each time
- Clear expert sequence
- Repeatable process
- Example: `@create-menu-item`

**Roundtables** = Open collaboration
- Flexible discussion
- Experts self-coordinate
- Complex problem-solving
- Example: `@rt-brainstorm`

**When to use which:**
- Repetitive task → Command
- New problem → Roundtable
- Standard process → Command
- Strategic decision → Roundtable

---

## Command Organization

### Standard Commands
Location: `pro-os/commands/`
- Shipped with FWD PRO
- General purpose
- Cross-industry

### Custom Commands
Location: `pro-os/commands/custom/`
- Created by you
- Industry-specific
- Workflow-specific

### Quick Access
Location: `0-your-commands/`
- Symlinks to frequently used commands
- Your personal shortcut folder
- Customize anytime

---

## Related Commands

- `@create-expert` - Create custom domain expert
- `@show-commands` - See all available commands
- `@help` - Command overview
- `@rt` - Call roundtable for open collaboration

---

**Ready to automate your workflows? Use `@create-command` to build custom processes!** ⚡

