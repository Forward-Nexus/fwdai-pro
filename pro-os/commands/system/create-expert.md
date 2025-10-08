# Quick Command: Create Expert

**Command:** `@create-expert` or `@genna @create-expert`  
**Expert:** Genna (Chief Architect)  
**Purpose:** Create a new custom expert for your team with guided questions

---

## What This Command Does

Walks you through creating a custom domain expert tailored to your project's needs. The AI will ask guided questions and generate a complete expert profile with:
- Personality and communication style
- Specialized knowledge areas
- Review frameworks
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

### Step 3: AI Generates Expert Profile

```
Genna:
Perfect! I'm creating [Expert Name] with [domain] expertise...

Generated:
- ✅ Expert profile with credentials
- ✅ Personality and communication style  
- ✅ Specialized knowledge areas
- ✅ Review framework for their domain
- ✅ Quality standards and red flags
- ✅ Example interactions
- ✅ Signature sign-off format

📁 Saved to: .fwdpro/pro-os/experts/[expert-name-domain].md

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

✅ Generated comprehensive expert profile
📁 Saved to: .fwdpro/pro-os/experts/chef-maria-rodriguez-restaurant-operations.md

You can now use @maria anytime you need restaurant operations expertise!

Try: @maria @review [your kitchen workflow design]
```

---

## What Gets Created

### Expert File Structure

Your new expert will have:

1. **Agent Metadata** (YAML front matter)
   - Name, ID, aliases
   - Role and hierarchy
   - Specializations
   - Commands they respond to

2. **Origin Story**
   - Why this expert exists for YOUR project
   - Project-specific context

3. **Expert Profile**
   - Credentials and background (AI generates appropriate ones)
   - Philosophy and approach

4. **Personality & Voice**
   - Communication style
   - Phrases they use
   - How they interact

5. **Core Expertise Areas**
   - Primary focus areas
   - Specialized knowledge
   - Domain-specific skills

6. **Review Framework**
   - Standards checklist
   - Best practices validation
   - Quality assessment process

7. **Standards & Red Flags**
   - What makes work great in this domain
   - What to avoid
   - Warning signs to catch

8. **Signature Sign-Off**
   - Consistent review format
   - How they deliver feedback

9. **Example Interaction**
   - Shows how to work with them
   - Sample review output

---

## After Creation

### Using Your New Expert

```
@[shortname] @review [work item]
@[shortname] @guidance [question]
@[shortname] @help
```

### Customizing Further

Your expert profile is fully editable:

**Option 1: Edit directly**
```
Open: .fwdpro/pro-os/experts/[expert-name].md
Edit any section to customize
```

**Option 2: Ask AI to refine**
```
@genna Can you update [Expert Name]'s personality to be more [style]?
@genna Add [specific expertise] to [Expert Name]'s knowledge areas
```

**Option 3: Update through command**
```
@update-onboarding (can update domain expert details)
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

