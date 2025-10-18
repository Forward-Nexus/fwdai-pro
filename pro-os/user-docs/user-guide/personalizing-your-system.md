# Personalizing Your FWD PRO System

**Your System, Your Way**

FWD PRO isn't rigid templates or "take it or leave it" AI. It's a **fully customizable system** that adapts to YOUR workflow, YOUR voice, and YOUR needs.

**Last Updated:** October 18, 2025

---

## 🎯 **What Makes FWD PRO Different**

**Most AI Systems:**
- ❌ Fixed personalities you can't change
- ❌ Rigid document structures
- ❌ "One size fits all" approach
- ❌ Take what you get

**FWD PRO:**
- ✅ **Every expert is customizable** - Change names, personalities, expertise
- ✅ **Every document structure is flexible** - Adapt to your industry/style
- ✅ **Every workflow can be modified** - Make it work for YOU
- ✅ **System adapts to your project** - Not the other way around

---

## 🎨 **What You Can Customize**

### 1. Expert Names & Personalities

**Change any expert's name:**
```markdown
Don't like "Denny"? Call them "Alex" or "Morgan" or "Chief"
Don't like "Lyna"? Call them "Sarah" or "The Strategist"
```

**How to do it:**
1. Navigate to `/pro-os/experts/[expert-name].md`
2. Change the `name:` field in the YAML frontmatter
3. Update communication style, personality traits, voice
4. The system will use your customized version

**Example:**
```yaml
---
name: Alex  # Changed from "Denny"
role: Systems Architect & Design Lead
personality: methodical, detail-oriented, loves elegant solutions
voice: Clear and precise, occasionally uses sailing metaphors
---
```

---

### 2. Expert Expertise & Domain Focus

**Adjust expertise to match YOUR project:**

**Example: Healthcare Startup**
```markdown
Lyna (External Strategy):
- Add: Healthcare investor relations, FDA fundraising context
- Add: Biotech accelerator expertise
- Keep: General investor strategy
```

**Example: B2B SaaS**
```markdown
Lyna (External Strategy):
- Add: Enterprise sales expertise
- Add: B2B pricing and packaging
- Keep: Investor relations
```

**How to do it:**
1. Open the expert's profile file
2. Find the `specializations:` section
3. Add your industry-specific skills
4. Add context about your domain
5. Save and the expert will apply this in every conversation

**Pro Tip:** You can even have the AI help you customize the expert files! Just say:
> "Help me customize Lyna's expertise for my fintech startup. I need her to understand banking regulations and B2B enterprise sales."

---

### 3. Document Structures & Templates

**Don't like our business plan structure? Change it!**

**You can customize:**
- Section order
- Section names
- Level of detail
- Format (formal vs. conversational)
- Industry-specific sections

**How to do it:**
1. Create your own template in `/pro-os/templates/`
2. Or just tell the expert: "Use THIS structure instead"
3. Save it as a standard for your project

**Example:**
```markdown
You: "Lyna, for all our business plans, I want this structure:
1. Executive Summary (1 page max)
2. Problem & Solution (combined, not separate)
3. Go-To-Market (before product details)
4. Product Overview
5. Financial Model
6. Team & Ask

This is our company standard. Use it going forward."

Lyna: "Got it! I'll use this structure for all business plans.
      Want me to update the template file so all experts use it?"
```

---

### 4. Communication Style & Voice

**Change how experts talk to you:**

**Options:**
- **Formal & Professional:** "Dr. Smith" style
- **Casual & Friendly:** "Hey, here's what I'm thinking..." style  
- **Direct & Concise:** No fluff, just facts
- **Detailed & Explanatory:** Teach as we go
- **Industry-Specific:** Use your domain's jargon

**How to set it:**

**Option A: Update expert file directly**
```yaml
communication_style: |
  - Super casual and friendly
  - Use startup/tech slang
  - Emojis are fine
  - Get to the point quickly
```

**Option B: Just tell them**
```markdown
You: "Hey team, going forward, everyone should be more casual.
     Use 'we' instead of 'I', skip the formalities, 
     and feel free to use emojis. We're a startup, not a law firm."

[All experts will adapt their tone]
```

---

### 5. Workflow & Process Changes

**Don't like how something works? Change the workflow!**

**Examples of what users have customized:**

**Example 1: Checklist Structure**
```markdown
You: "I don't like the master checklist approach.
     For my team, I want separate checklists by expert.
     
     So instead of one big checklist, create:
     - denny-tasks.md
     - lyna-tasks.md  
     - ada-tasks.md
     
     Each expert maintains their own task list."

System: Adapts to your new structure
```

**Example 2: Document Approval Flow**
```markdown
You: "Before ANY deliverable is finalized, I want:
     1. Draft created
     2. Internal review (by you, the AI)
     3. Send me 'Ready for Review' notification
     4. I approve
     5. Then finalize
     
     This is our new standard workflow."

System: Implements your approval gate
```

**Example 3: Version Control**
```markdown
You: "For all legal documents, keep version history.
     When Elle updates a Terms of Service, create:
     - terms-of-service-v1.md (original)
     - terms-of-service-v2.md (updated)
     - terms-of-service-CURRENT.md (symlink)
     
     This is our compliance requirement."

System: Follows your versioning system
```

---

### 6. Create Custom Experts

**Need an expert we don't have? Create one!**

**Examples of custom experts users have created:**

**Healthcare Compliance Expert:**
```yaml
---
name: Dr. Rivera
role: Healthcare Compliance & Regulatory Expert
expertise:
  - HIPAA compliance
  - FDA regulations
  - Clinical trial requirements
  - Healthcare data privacy
personality: Thorough, cautious, protective
voice: Professional medical terminology, clear explanations
---
```

**Crypto/Web3 Expert:**
```yaml
---
name: Satoshi
role: Web3 Strategy & Tokenomics Expert
expertise:
  - Token design and economics
  - DAO governance structures
  - Smart contract architecture
  - Crypto regulatory landscape
personality: Forward-thinking, tech-savvy, community-focused
voice: Web3 native, uses crypto terminology naturally
---
```

**E-commerce Operations Expert:**
```yaml
---
name: Maya
role: E-commerce Operations & Logistics Expert
expertise:
  - Supply chain optimization
  - Inventory management
  - Fulfillment strategies
  - Marketplace operations (Amazon, Shopify)
personality: Data-driven, process-oriented, practical
voice: Clear and actionable, loves metrics
---
```

**How to create a custom expert:**
1. Copy an existing expert file from `/pro-os/experts/`
2. Rename it (e.g., `maya-ecommerce.md`)
3. Customize the YAML frontmatter (name, role, expertise)
4. Define their personality and voice
5. Add any domain-specific patterns they should follow
6. Save and start using: `@maya help me optimize my supply chain`

---

## 🏗️ **Industry-Specific Customization Examples**

### Fintech Startup

**Customize Lyna (External Strategy):**
```yaml
expertise:
  - Fintech investor landscape (a16z, Ribbit, QED)
  - Banking regulations (FDIC, OCC, state licensing)
  - B2B enterprise sales to banks
  - Payment processing partnerships
```

**Customize Elle (Legal):**
```yaml
expertise:
  - Financial services compliance (BSA/AML, KYC)
  - Money transmitter licenses
  - Banking partnership agreements
  - Consumer finance regulations (CFPB)
```

**Create Custom Expert: "Marcus (Compliance Officer)"**
```yaml
expertise:
  - Day-to-day compliance operations
  - Audit preparation
  - Risk assessment
  - Regulatory filings
```

---

### Healthcare/Medical Device

**Customize Lyna (External Strategy):**
```yaml
expertise:
  - Healthcare investor relations (VC + strategic partners)
  - FDA approval process and timeline
  - Clinical trial fundraising
  - Reimbursement strategy
```

**Create Custom Expert: "Dr. Rivera (Regulatory Affairs)"**
```yaml
expertise:
  - FDA 510(k) and PMA pathways
  - Clinical trial design (IRB, protocol)
  - Quality management systems (ISO 13485)
  - Post-market surveillance
```

---

### Consumer App/Marketplace

**Customize Benji (Growth):**
```yaml
expertise:
  - Two-sided marketplace dynamics
  - Network effects and liquidity
  - Viral growth loops
  - Community building
```

**Customize Lyna (External Strategy):**
```yaml
expertise:
  - Consumer app investor landscape
  - Marketplace-specific metrics (GMV, take rate)
  - Two-sided growth strategies
  - Platform partnerships
```

---

### B2B SaaS (Enterprise)

**Customize Lyna (External Strategy):**
```yaml
expertise:
  - Enterprise sales strategy
  - B2B pricing and packaging
  - Channel partnerships
  - SaaS investor metrics (ARR, NRR, CAC payback)
```

**Customize Ada (Implementation):**
```yaml
expertise:
  - Enterprise-grade security (SOC 2, ISO 27001)
  - Multi-tenancy architecture
  - SSO/SAML integration
  - Enterprise deployment models
```

**Create Custom Expert: "Taylor (Customer Success)"**
```yaml
expertise:
  - Enterprise onboarding programs
  - Customer health scoring
  - Expansion/upsell strategies
  - Churn prevention
```

---

## 🎨 **Style & Format Customization**

### Document Formats

**You can request different output formats:**

**Option 1: Formal Business Style**
```markdown
"All investor materials should be:
- Third-person perspective
- Formal language (no contractions)
- Conservative tone
- Traditional formatting"
```

**Option 2: Startup/Tech Style**
```markdown
"All documents should be:
- Conversational and direct
- Use 'we' and 'our'
- Contractions are fine
- Modern formatting with emojis in internal docs"
```

**Option 3: Academic/Research Style**
```markdown
"All technical docs should be:
- APA citation format
- Formal research language
- Hypothesis-driven structure
- Peer-review ready"
```

---

### Visual Preferences

**Customize how documents look:**

```markdown
You: "For all business plans:
     - Use teal (#0d9488) as primary brand color
     - Sans-serif fonts only (no Times New Roman)
     - Max 2-page executive summaries
     - Always include a visual table of contents
     - Financial charts should use our brand colors"

System: Applies these standards to all future deliverables
```

---

## 🔧 **How to Make Changes**

### Method 1: Direct File Editing (Power Users)

**Best for:** Permanent system-wide changes

1. Navigate to the file you want to customize:
   - Expert profiles: `/pro-os/experts/`
   - Patterns: `/pro-os/system/patterns/`
   - Standards: `/pro-os/system/standards/`
   - Templates: `/pro-os/templates/`

2. Edit the file directly (markdown + YAML)

3. Save and the changes apply immediately

4. All experts will use your customized version

---

### Method 2: Conversational Updates (Everyone)

**Best for:** Quick changes, natural conversation about your project

### 💬 **Talk Naturally - AI Updates Your Project Context**

**You can just TALK to the AI about yourself and your project!**

```markdown
You: "Oh by the way, I just hired a designer named Sarah. 
     She's joining next week to help with the rebrand."

AI: "Congrats on the new hire! I'll add Sarah (Designer) to 
     your people.md file. Should I note that rebrand work is 
     starting soon?"

You: "Yeah, and actually we're pivoting slightly. Instead of 
     just B2C, we're targeting small businesses now too."

AI: "Got it! I'll update:
     - project-kb.md: Add B2B SMB as target market
     - mission.md: Expand to include small business impact
     
     Want me to update Lyna's investor materials to reflect 
     this expanded market?"
```

**The AI will:**
- Listen for project updates in natural conversation
- Offer to update relevant files (project-kb, mission, people)
- Ask if you want to approve before updating
- Keep context current automatically

### 📝 **What Gets Updated in Conversation:**

**Project Knowledge Base (`project-kb.md`):**
- "We just hit 1,000 users!" → Updates metrics
- "We're changing our pricing model" → Updates business model
- "We raised $500K seed round" → Updates funding status

**Mission (`mission.md`):**
- "Actually, our 'why' is more about..." → Updates mission/vision
- "I realized we're really solving X, not Y" → Refines purpose

**People (`people.md`):**
- "I hired a designer" → Adds team member
- "Got a new advisor from Y Combinator" → Adds advisor
- "Closed our seed with Acme Ventures" → Adds investor

**Founder Profile:**
- "I prefer less formal communication" → Updates preferences
- "I've learned more about tech, treat me as semi-technical now" → Updates technical level

### **Just Talk! AI Will Ask Permission:**

```markdown
You: "So we're launching in 3 months instead of 6"

AI: "That's a significant timeline change! Want me to:
     1. Update project-kb.md with new launch date
     2. Update whiteboards with adjusted milestones
     3. Let other experts know the timeline accelerated?
     
     Or should I wait?"

You: "Yes to all!"

AI: [Updates files, notifies team]
```

**The system stays current because YOU can speak freely!** ✅

---

### Method 3: Project-Specific Overrides

**Best for:** One project needs different rules

**Create project-specific config:**

```markdown
You: "For the [Project X] project only:
     - Lyna should be extra conservative on financial projections
     - All documents need legal review before finalization
     - We're targeting healthcare investors specifically
     
     But keep the default behavior for other projects."

System: Creates project-specific rules in your workspace
```

---

## 🚀 **Real-World Customization Examples**

### Example 1: "I Want More Casual Experts"

**Original:** Professional, formal communication  
**Customized:** Friendly, startup-style communication

```yaml
# Updated in expert files:
communication_style: |
  - Super casual and friendly
  - Use contractions ("we're", "let's", "you're")
  - Emojis are welcome in internal docs
  - Get to the point quickly
  - Feel like a real teammate, not a corporate consultant
```

**Result:**
```markdown
Before: "I recommend we implement a user acquisition strategy..."
After:  "Let's get some users! Here's what I'm thinking... 🚀"
```

---

### Example 2: "I Need Industry-Specific Templates"

**Original:** Generic business plan structure  
**Customized:** Biotech business plan structure

```markdown
Custom sections added:
- Scientific Background & MOA (Mechanism of Action)
- Preclinical Data Summary
- Clinical Development Plan (Phase I/II/III timelines)
- Regulatory Strategy (FDA pathway)
- KOL (Key Opinion Leader) Engagement Plan
- Reimbursement Strategy
```

**Result:** Every business plan Lyna creates now follows biotech industry standards

---

### Example 3: "I Want Different Expert Names"

**Original Expert Names:**
- Denny (Systems Architect)
- Lyna (External Strategy)
- Ada (Implementation)
- Genna (Product Vision)
- Benji (Growth)
- Elle (Legal)

**Customized for User's Team:**
- Chief (Systems Architect) - "Feels more authoritative"
- Sarah (External Strategy) - "Personal preference"
- Ada (kept the same) - "Love the Ada Lovelace reference"
- Visionary (Product Vision) - "More descriptive"
- Rocket (Growth) - "Fun and memorable"
- Counselor (Legal) - "More formal"

**How they did it:**
- Renamed each expert file
- Updated the `name:` field in YAML
- Updated any cross-references
- **System still works perfectly** - just uses new names

---

### Example 4: "I Want Custom Approval Workflows"

**Original:** Experts deliver work directly  
**Customized:** Three-stage approval process

```markdown
New workflow:
1. Expert creates DRAFT (marked as "Draft - Not Approved")
2. Expert performs self-review using appropriate checklist
3. Expert marks as "Ready for Founder Review"
4. Founder reviews and either:
   - Approves → Status changes to "APPROVED"
   - Requests changes → Expert revises and returns to step 2
5. Only APPROVED documents are used for further work
```

**Result:** Every deliverable goes through this gate before finalization

---

## 💡 **Pro Tips for Customization**

### Tip 1: Start Small, Iterate

Don't customize everything at once. Pick ONE thing:
- Change one expert's name
- Adjust one document template
- Tweak one communication style

See how it feels, then expand.

---

### Tip 2: Document Your Customizations

Create a `CUSTOMIZATIONS.md` in your project:

```markdown
# My FWD PRO Customizations

**Expert Names:**
- Denny → Chief
- Lyna → Sarah

**Communication Style:**
- Casual and direct
- Emojis welcome
- No formal language

**Document Standards:**
- All business plans use biotech template
- All pitch decks → send-ahead format first
- Financial charts use brand colors: #0d9488, #8b5cf6

**Workflow Changes:**
- Three-stage approval process
- Slack-first collaboration
- Version control for all legal docs
```

This helps you remember what you changed!

---

### Tip 3: Use AI to Customize Itself

**You don't need to edit files manually!**

```markdown
You: "@denny I want to customize Lyna's expertise for my 
     fintech startup. She should understand:
     - Banking regulations (BSA/AML, KYC)
     - Fintech investor landscape (a16z, Ribbit, QED)
     - B2B enterprise sales to banks
     
     Can you update her profile file with these?"

Denny: "Absolutely! I'll add these to Lyna's expertise section.
       Should I also update her communication style to use 
       more fintech terminology?"
```

**The AI can modify its own expert files!**

---

### Tip 4: Create "Profiles" for Different Projects

**If you work on multiple different projects:**

```
/my-workspace/
  /healthcare-startup/
    - custom-experts/
    - project-standards.md
    - Uses: Dr. Rivera, Lyna (healthcare-focused)
  
  /b2b-saas/
    - custom-experts/
    - project-standards.md
    - Uses: Taylor (CS), Lyna (B2B-focused)
  
  /consumer-app/
    - custom-experts/
    - project-standards.md
    - Uses: Benji (growth-focused), Lyna (consumer-focused)
```

Each project can have its own customizations!

---

### Tip 5: Share Customizations with Your Team

**If multiple people use FWD PRO on your team:**

1. Customize the system for your company
2. Save those customizations to a shared repo
3. Everyone uses the same customized version
4. Consistent outputs across your whole team

**Example:**
```bash
# Your company's customized FWD PRO
git clone your-company/fwdpro-customized

# Everyone on team uses same expert names, templates, workflows
```

---

## 🎯 **Common Customization Scenarios**

### "I'm a Solo Founder - Make It Simple"

**Customizations:**
- Disable workspace/whiteboard complexity
- Simple checklist only
- Fewer handoffs between experts
- More direct communication

```markdown
You: "I'm working solo. I don't need all the collaboration 
     infrastructure. Just give me:
     - Simple checklist
     - Direct expert communication
     - No workspace handoffs
     
     Make it lightweight for a one-person team."
```

---

### "I Have a Team - Make It Collaborative"

**Customizations:**
- Enable Slack MCP for team notifications
- Multi-person checklists
- Workspace handoffs with @mentions
- Team-focused language ("we" not "I")

```markdown
You: "I have a 5-person team. We use Slack heavily. 
     Set up the system for team collaboration:
     - Notify in Slack when work is ready
     - Support multiple people's checklists
     - Collaboration-focused language"
```

---

### "I'm in a Regulated Industry"

**Customizations:**
- Mandatory approval gates
- Version control for all documents
- Compliance-focused checklists
- Conservative, formal tone
- Extensive citation requirements

```markdown
You: "We're in healthcare. Everything needs:
     - Regulatory compliance checks
     - Version control with change logs
     - Approval gates before finalization
     - Conservative, formal language
     - Citations for all claims"
```

---

### "I Want Maximum Speed"

**Customizations:**
- Remove approval gates (trust the AI)
- Casual, direct communication
- Minimal documentation overhead
- "Ship fast, iterate" mentality

```markdown
You: "We move fast. Set up the system for speed:
     - No approval gates
     - Direct communication
     - Ship quickly, we'll iterate
     - Don't overthink it"
```

---

## 🔮 **Advanced Customization Ideas**

### Industry-Specific Expert Teams

**Create full expert teams for your industry:**

**Fintech Team:**
- Lyna (Fintech Fundraising)
- Elle (Financial Compliance)
- Marcus (Regulatory Affairs)
- Ada (Payment Systems)
- Denny (Security Architecture)

**Healthcare Team:**
- Lyna (Healthcare Investors)
- Dr. Rivera (FDA Regulatory)
- Elle (HIPAA Compliance)
- Dr. Chen (Clinical Development)
- Ada (Healthcare IT Systems)

---

### Multilingual Customization

**Want experts to speak different languages?**

```yaml
communication_style: |
  - Primary language: Spanish
  - Technical terms: Keep in English
  - Documents: Bilingual (ES/EN)
```

---

### Brand Voice Integration

**Match your company's brand voice:**

```yaml
brand_voice: |
  Our brand is: Bold, optimistic, human-first
  
  Language we use:
  - "We believe..." not "The company believes..."
  - "You deserve..." not "Users should..."
  - Active voice, present tense
  - Emotionally intelligent, not robotic
  
  Language we avoid:
  - Jargon without explanation
  - Corporate speak
  - Passive voice
  - "Synergy", "leverage", "utilize"
```

---

## 📚 **Resources for Customization**

### Where to Learn More

**System Architecture:**
- `/pro-os/system/patterns/` - How workflows work
- `/pro-os/system/standards/` - Formatting rules
- `/pro-os/system/checklists/` - Quality validation

**Expert Profiles:**
- `/pro-os/experts/` - All expert files
- `/pro-os/experts/README.md` - Expert system overview

**Templates:**
- `/pro-os/templates/` - Document templates you can customize

**User Guides:**
- `/pro-os/user-docs/user-guide/` - All user documentation

---

### Getting Help with Customization

**Just ask the AI!**

```markdown
You: "@denny I want to customize [X] but I'm not sure how. 
     Can you help me figure out what to change and where?"

Denny: "Absolutely! Let me walk you through it..."
```

**The AI can:**
- Explain what's customizable
- Show you where files are
- Make the changes for you
- Test that everything works
- Revert if you don't like it

---

## 🎉 **The Bottom Line**

**FWD PRO is YOUR system.**

- ✅ Change expert names? **Do it.**
- ✅ Adjust communication style? **Do it.**
- ✅ Create custom experts? **Do it.**
- ✅ Modify workflows? **Do it.**
- ✅ Change document structures? **Do it.**
- ✅ Adapt to your industry? **Do it.**

**Nothing is sacred. Everything is flexible.**

If something doesn't work for you, **change it**. That's the whole point.

**FWD PRO adapts to you. Not the other way around.**

---

## 🚀 **Get Started with Customization**

**Try these easy first customizations:**

1. **Change one expert's name** (5 minutes)
   ```markdown
   Pick your favorite expert, rename them to something you like better
   ```

2. **Adjust communication style** (2 minutes)
   ```markdown
   Tell the experts: "Be more casual" or "Be more formal"
   ```

3. **Create a custom document template** (10 minutes)
   ```markdown
   "Lyna, use THIS structure for business plans going forward"
   ```

4. **Add industry expertise to an expert** (5 minutes)
   ```markdown
   "Add [your industry] expertise to Lyna's specializations"
   ```

**That's it! You're customizing FWD PRO.**

---

**Remember:** This is YOUR AI team. Make them work YOUR way.

---

*Last updated: October 18, 2025 | FWD PRO v2.1*

