# Quick Command: Create Expert

**Command:** `@create-expert` or `@genna @create-expert`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Create a new custom expert for your team with guided questions

---

## What This Command Does

Walks you through creating a custom domain expert tailored to your project's needs. The AI will ask guided questions and generate:

**Two files created:**
1. **Expert personality file** (`.md`) - Who they are, domain expertise, communication style
2. **Expert activation rule** (`.mdc`) - When/how to load the expert

**What you get:**
- Personality and communication style
- Specialized knowledge areas
- Domain-specific patterns assigned
- Quality standards
- Example interactions

---

## When to Use This

Create a new expert when:
- ✅ **Need specialized expertise** - Your project needs domain knowledge not covered by core experts
- ✅ **Industry-specific guidance** - You need someone who knows your specific industry
- ✅ **Quality review** - You want someone to review work through a specialized lens
- ✅ **Custom workflows** - You need an expert with specific processes for your work

**Examples:**
- Restaurant owner building an app → Create "Chef Maria" for hospitality operations
- Healthcare startup → Create "Dr. Chen" for clinical validation
- Real estate platform → Create "Broker Sam" for property market expertise
- Education app → Create "Professor Lee" for learning design

---

## How It Works

### Step 1: Initiate Creation
```
You: @create-expert

Genna:
🎯 Let's create a custom expert for your team!

I'll ask you some questions to build a detailed expert profile. This will be 
similar to how Bonnie Jo was created for ODAT - a full persona with expertise, 
personality, and review frameworks.

Ready? Let's go!
```

### Step 2: Guided Questions

Genna will ask:

**1. Expert Name**
```
What should we name your expert?
Example: "Chef Maria Rodriguez" or "Dr. Sarah Chen" or "Sam Torres"

> [Your answer]
```

**2. Domain/Expertise**
```
What's their area of expertise?
Example: "Restaurant Operations" or "Clinical Psychology" or "Real Estate"

> [Your answer]
```

**3. Why You Need Them**
```
Why do you need this expertise for your project? What will they help with?
Example: "Review menu designs and kitchen workflows" or "Validate clinical claims"

> [Your answer]
```

**4. Personality Style**
```
What personality should they have?
- Professional and formal?
- Casual and friendly?
- Direct and no-nonsense?
- Warm and encouraging?
- Technical and data-driven?

> [Your answer]
```

**5. Key Responsibilities**
```
What should they review or guide you on?
Example: "Review marketing materials, validate medical claims, ensure HIPAA compliance"

> [Your answer]
```

**6. Red Flags to Watch**
```
What mistakes or risks should they catch?
Example: "Overpromising results, ignoring regulations, cultural insensitivity"

> [Your answer]
```

### Step 3: AI Generates Expert Files

```
Genna:
Perfect! I'm creating [Expert Name] with [domain] expertise...

Generated:
- ✅ Expert personality file (.md)
  - Profile with credentials
  - Personality and communication style  
  - Specialized knowledge areas
  - Domain adaptation examples
  - Key questions they ask
  - Example interactions

- ✅ Expert activation rule (.mdc)
  - Trigger: @[shortname]
  - Loads expert personality
  - Loads expert-workflow.md (how to operate)
  - Loads expert-collaboration.md (how to work with others)
  - Loads domain patterns (tech/content/strategy/legal)

📁 Files saved:
- .cursor/rules/experts/[shortname].mdc
- .fwdpro/pro-os/experts/[expert-name-domain].md

**Patterns automatically assigned:**
- Technical domains → expert-tech.md
- Legal domains → expert-legal.md
- Content/marketing → expert-content.md
- Strategic work → expert-strategy.md

You can now use @[shortname] anytime you need [domain] expertise!

Want to customize further? Edit the expert file directly or ask me to refine sections.
```

### Step 4: Add to Your Quick Access (Optional)

```
Genna:
Want to add [Expert Name] to your 0-your-experts/ folder for quick access?

[Yes] [No]

> Yes

✓ Created symlink in .fwdpro/0-your-experts/
```

---

## Example Interaction

**Creating a Restaurant Expert:**

```
You: @create-expert

Genna: Let's create a custom expert! What should we name them?
You: Chef Maria Rodriguez

Genna: What's their area of expertise?
You: Restaurant operations and hospitality

Genna: Why do you need this expertise?
You: I'm building a restaurant management app and need someone who knows 
kitchen workflows, menu design, and service operations

Genna: What personality should Maria have?
You: Direct and practical, with lots of real-world kitchen experience. 
No-nonsense but warm.

Genna: What should Maria review or guide you on?
You: Kitchen workflow designs, menu structures, service processes, 
restaurant-specific features

Genna: What red flags should Maria watch for?
You: Unrealistic workflows, ignoring health codes, over-complicating simple 
processes, missing industry standards

Genna:
Perfect! Creating Chef Maria Rodriguez...

✅ Generated expert files:
📁 .cursor/rules/experts/maria.mdc (activation rule)
📁 .fwdpro/pro-os/experts/maria-restaurant-operations.md (personality & expertise)

**Patterns assigned:**
- expert-workflow.md (how Maria operates)
- expert-collaboration.md (how Maria works with others)
- expert-content.md (for menu/marketing content)
- expert-strategy.md (for operational strategy)

You can now use @maria anytime you need restaurant operations expertise!

Try: @maria Can you review my kitchen workflow design?
```

---

## What Gets Created

### File 1: Expert Activation Rule (`.mdc`)

**Location:** `.cursor/rules/experts/[shortname].mdc`

**Contains:**
- Trigger definition (@[shortname])
- Load order (personality → workflow → collaboration → domain patterns)
- Context loading instructions
- Domain pattern assignments

**Example:**
```markdown
---
description: "Maria - Restaurant Operations Expert"
alwaysApply: false
---

# Maria - Restaurant Operations Activation

**Trigger:** User mentions `@maria`

## Load Order:
1. .fwdpro/pro-os/experts/maria-restaurant-operations.md
2. .fwdpro/pro-os/system/patterns/expert-workflow.md
3. .fwdpro/pro-os/system/patterns/expert-collaboration.md  
4. .fwdpro/pro-os/system/patterns/expert-content.md
5. .fwdpro/pro-os/system/patterns/expert-strategy.md
```

### File 2: Expert Personality File (`.md`)

**Location:** `.fwdpro/pro-os/experts/[name-domain].md`

**Contains:**

1. **Universal Role**
   - Core purpose across all projects
   - What problems they solve

2. **Expert Profile** (Fictional Credentials)
   - Background and credentials (AI-generated)
   - Why this persona helps
   - Disclaimer that it's fictional

3. **Personality & Working Style**
   - Communication approach
   - Unique voice and phrases
   - How they interact

4. **Domain Adaptation**
   - How expertise applies to different project types
   - Focus areas for each type
   - What they create/deliver

5. **Communication Style**
   - When formal vs casual
   - How to explain concepts
   - Adaptation to founder's preferences

6. **Core Skills**
   - Universal skills across projects
   - Domain-specific expertise

7. **Key Questions They Ask**
   - Universal questions
   - Domain-specific questions

8. **Collaboration Patterns**
   - Who they commonly work with
   - When to bring them in

9. **Project Context** (Auto-Generated)
   - Customized during onboarding
   - Project-specific focus areas

---

## After Creation

### Using Your New Expert

```
@[shortname] @review [work item]
@[shortname] @guidance [question]
@[shortname] @help
```

### Customizing Further

Your expert is fully customizable:

**Option 1: Edit personality file**
```
Open: .fwdpro/pro-os/experts/[expert-name].md
Edit any section to customize personality, expertise, communication style
```

**Option 2: Edit activation rule**
```
Open: .cursor/rules/experts/[shortname].mdc
Adjust pattern loading, add conditional logic, customize behavior
```

**Option 3: Ask AI to refine**
```
@genna Can you update [Expert Name]'s personality to be more [style]?
@genna Add [specific expertise] to [Expert Name]'s knowledge areas
```

---

## Tips for Great Experts

### 1. Be Specific About Domain
❌ Generic: "Business expert"  
✅ Specific: "SaaS pricing and monetization strategist"

### 2. Define Clear Role
❌ Vague: "Help with stuff"  
✅ Clear: "Review pitch decks for investor readiness and messaging clarity"

### 3. Give Them Personality
❌ Bland: "Professional expert"  
✅ Vivid: "No-nonsense industry veteran who's seen it all and gives straight talk"

### 4. Define Red Flags
❌ Generic: "Catch mistakes"  
✅ Specific: "Flag HIPAA violations, overpromised outcomes, missing informed consent"

---

## Multiple Experts

You can create as many custom experts as you need:

**Examples:**
- **Legal compliance expert** for healthcare regulations
- **UX research expert** for user testing
- **SEO expert** for content strategy
- **Supply chain expert** for logistics
- **Community management expert** for user engagement

**Each expert:**
- Lives in `pro-os/experts/`
- Can be added to `0-your-experts/` for quick access
- Has their own specialized knowledge and frameworks
- Collaborates with other experts through roundtable

---

## Related Commands

- `@show-experts` - See all available experts
- `@update-onboarding` - Update domain expert details
- `@create-command` - Create custom command workflows
- `@help` - See all available commands

---

**Ready to build your perfect expert team? Use `@create-expert` anytime you need specialized knowledge!** 🎯

