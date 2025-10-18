# Recommended Integrations & Extensions

**Purpose:** Supercharge FWD PRO with tools, libraries, and integrations tailored to your use case

**Last Updated:** October 18, 2025

---

## 🎯 Quick Start by Use Case

**Jump to your primary use case:**
- [1. Coding & Development](#1-coding--development)
- [2. Fundraising & Business Planning](#2-fundraising--business-planning)
- [3. Operations & Marketing](#3-operations--marketing)
- [4. Visioning & Brainstorming](#4-visioning--brainstorming)
- [5. Compliance & Legal](#5-compliance--legal)
- [6. Custom Integrations](#6-custom-integrations)

---

## 1. Coding & Development

**Primary Experts:** Denny (Systems Architect), Ada (Implementation)

### Essential Tools

**shadcn/ui Components** ⭐ HIGHLY RECOMMENDED
```bash
# Initialize shadcn in your project
npx shadcn@latest init

# Add specific components
npx shadcn@latest add button
npx shadcn@latest add form
npx shadcn@latest add dialog
```

**What it does:** Pre-built, customizable React components (Radix UI + Tailwind CSS)  
**Why you need it:** Speeds up UI development, accessible by default, fully customizable  
**Used by:** Ada (implementation), Denny (architecture)  
**Best for:** Next.js, React, Tailwind CSS projects

---

**Cursor MCP for shadcn/ui** ✨ NEW
```bash
# Already available in Cursor!
# Access via MCP servers in Cursor settings
```

**What it does:** shadcn component integration directly in Cursor  
**Why you need it:** Ada can browse and add shadcn components without leaving the IDE  
**Used by:** Ada (fast component selection), Denny (architecture reviews)

---

**Prettier + ESLint**
```bash
pnpm add -D prettier eslint
```

**What it does:** Code formatting and linting  
**Why you need it:** Consistent code style, catch errors early  
**Used by:** Ada (ensures quality), Denny (enforces standards)

---

**Vitest (Testing)**
```bash
pnpm add -D vitest @testing-library/react
```

**What it does:** Fast unit testing framework  
**Why you need it:** TDD workflow (Denny and Ada enforce tests-first)  
**Used by:** Ada (writes tests), Denny (validates coverage)

---

### Advanced Integrations

**GitHub MCP Server** (Future)
- Create PRs from FWD PRO
- Manage issues and code reviews
- Automated deployment workflows

**Supabase MCP** (Future)
- Database schema management
- Auth configuration
- Edge function deployment

---

## 2. Fundraising & Business Planning

**Primary Experts:** Lyna (External Strategy), Genna (Product Vision), Benji (Growth)

### Essential Tools

**Recharts** ⭐ HIGHLY RECOMMENDED
```bash
pnpm add recharts
```

**What it does:** Beautiful charts for pitch decks  
**Why you need it:** Investors love visual data (revenue graphs, user growth, unit economics)  
**Used by:** Lyna (pitch decks), Benji (growth metrics), Genna (product roadmaps)  
**Best for:** Financial projections, market size, traction slides

**Examples:**
- Revenue growth charts
- User acquisition funnels
- CAC/LTV visualizations
- Retention curves
- Market size TAM/SAM/SOM

---

**xlsx (Excel Operations)**
```bash
pnpm add xlsx
```

**What it does:** Read/write Excel files  
**Why you need it:** Financial models, unit economics, investor data rooms  
**Used by:** Lyna (financials), Benji (growth models)  
**Best for:** Importing financial data, exporting to investor-friendly formats

---

**python-pptx** (PowerPoint Generation)
```bash
pip install python-pptx
```

**What it does:** Generate PowerPoint presentations programmatically  
**Why you need it:** Automate pitch deck creation from research data  
**Used by:** Lyna (pitch decks), Genna (product presentations)  
**Best for:** Creating investor decks with consistent branding

---

**python-docx** (Word Documents)
```bash
pip install python-docx
```

**What it does:** Generate Word documents  
**Why you need it:** Business plans, legal docs, formal proposals  
**Used by:** Lyna (business plans), Elle (legal documents)  
**Best for:** Investor-ready business plans, term sheets, proposals

---

**Markdown to PDF**
```bash
pnpm add markdown-pdf
# OR
pip install markdown-pdf
```

**What it does:** Convert markdown to professional PDFs  
**Why you need it:** Most FWD PRO docs are markdown - convert to investor-ready PDFs  
**Used by:** Lyna (polished deliverables), Genna (presentations)

---

### Advanced Integrations

**Airtable MCP** (Future)
- Track investor pipeline
- Manage fundraising CRM
- Sync research data

**Google Slides API** (Future)
- Generate slide decks
- Update presentations dynamically
- Share with investors

---

## 3. Operations & Marketing

**Primary Experts:** Benji (Growth), Lyna (External Strategy)

### Essential Tools

**Analytics & Tracking**
```bash
pnpm add @vercel/analytics
pnpm add posthog-js
```

**What it does:** User analytics and product tracking  
**Why you need it:** Measure growth, understand user behavior  
**Used by:** Benji (growth metrics), Genna (product decisions)

---

**Email Tools**
```bash
pnpm add @sendgrid/mail
# OR
pnpm add nodemailer
```

**What it does:** Send transactional and marketing emails  
**Why you need it:** User onboarding, marketing campaigns, notifications  
**Used by:** Benji (growth campaigns), Lyna (investor updates)

---

**Social Media APIs**
```bash
# Install as needed
npm install twitter-api-v2
npm install @slack/web-api
```

**What it does:** Automate social media posting  
**Why you need it:** Content distribution, community engagement  
**Used by:** Benji (marketing automation)

---

### Advanced Integrations

**Slack MCP Server** ⭐ RECOMMENDED
- Post updates to team channels
- Notify on milestone completion
- Share deliverables with team

**Linear/Jira MCP** ⭐ OPTIONAL (FWD PRO has built-in project management)
- **Note:** FWD PRO provides project management via Whiteboards (project dashboard) and Checklist (task manager)
- **Use JIRA/Linear if:** Your team already uses it, company requires it, or you need external reporting
- **How it works:** Experts manually mirror checklist items ↔ JIRA tickets, whiteboard status ↔ JIRA board
- Expert-facilitated sync (not automatic)
- FWD PRO remains source of truth for AI collaboration

**Google Calendar MCP**
- Schedule milestones
- Track deadlines
- Coordinate team meetings

---

## 4. Visioning & Brainstorming

**Primary Experts:** Genna (Product Architect), Denny (Systems Architect), Lyna (Strategy)

### Essential Tools

**Mermaid Diagrams**
```bash
pnpm add mermaid
```

**What it does:** Create flowcharts, architecture diagrams, user journeys  
**Why you need it:** Visual brainstorming, system design, roadmaps  
**Used by:** Genna (product flows), Denny (architecture), Lyna (strategy maps)  
**Best for:** Whiteboards, technical specs, business model canvases

---

**Excalidraw (Future Integration)**
- Collaborative whiteboarding
- Hand-drawn style diagrams
- Visual brainstorming

---

**FigJam/Figjam API (Future)**
- Interactive design sessions
- Product wireframes
- Team collaboration

---

## 5. Compliance & Legal

**Primary Expert:** Elle (Legal Counsel)

### Essential Tools

**Document Templates**
```bash
pip install python-docx
```

**What it does:** Generate legal documents from templates  
**Why you need it:** Terms of service, privacy policies, contracts  
**Used by:** Elle (legal documents), Lyna (investor agreements)

---

**PDF Tools**
```bash
pip install PyPDF2
pip install pdfplumber
```

**What it does:** Read and analyze PDF documents  
**Why you need it:** Review contracts, extract terms, analyze agreements  
**Used by:** Elle (contract review)

---

### Advanced Integrations

**Legal Research APIs** (Future)
- LexisNexis integration
- Case law search
- Regulatory compliance checking

---

## 6. Custom Integrations

### MCP Servers (Model Context Protocol)

**What are MCP Servers?**
AI-accessible tools and data sources that extend what FWD PRO experts can do.

**How to Add MCP Servers in Cursor:**

1. Open Cursor Settings (`Cmd + ,`)
2. Go to **Tools & MCP**
3. Click **"New MCP Server"**
4. Add server configuration:

```json
{
  "mcpServers": {
    "shadcn-ui": {
      "command": "npx",
      "args": [
        "@jplsnice/shadcn-ui-mcp-server"
      ]
    }
  }
}
```

**Recommended MCP Servers:**

**shadcn-ui MCP** ⭐ HIGHLY RECOMMENDED
```json
{
  "shadcn-ui": {
    "command": "npx",
    "args": ["@jplsnice/shadcn-ui-mcp-server"]
  }
}
```
**What it does:** Ada can browse and add shadcn components directly  
**Best for:** React/Next.js UI development

---

**GitHub MCP** ⭐ RECOMMENDED
```json
{
  "github": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-github"],
    "env": {
      "GITHUB_PERSONAL_ACCESS_TOKEN": "<your-token>"
    }
  }
}
```
**What it does:** Create issues, PRs, manage repos  
**Best for:** Project management, code review

---

**Filesystem MCP** (Built-in to Cursor)
**What it does:** Read/write files, search codebase  
**Best for:** File operations (already active!)

---

**Brave Search MCP** (Web Search)
```json
{
  "brave-search": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-brave-search"],
    "env": {
      "BRAVE_API_KEY": "<your-api-key>"
    }
  }
}
```
**What it does:** Web search for research verification  
**Best for:** Research integrity (v2.1 requirement!)

---

**PostgreSQL MCP** (Database Access)
```json
{
  "postgres": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-postgres", "postgresql://localhost/mydb"]
  }
}
```
**What it does:** Query and manage database  
**Best for:** Data analysis, schema management

---

**Google Drive MCP**
```json
{
  "gdrive": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-gdrive"]
  }
}
```
**What it does:** Access Google Drive files  
**Best for:** Collaborative document management

---

**Slack MCP**
```json
{
  "slack": {
    "command": "npx",
    "args": ["-y", "@modelcontextprotocol/server-slack"],
    "env": {
      "SLACK_BOT_TOKEN": "<your-token>",
      "SLACK_TEAM_ID": "<your-team-id>"
    }
  }
}
```
**What it does:** Send messages, manage channels  
**Best for:** Team notifications and collaboration

---

### Background Agents (Cursor Pro Feature)

**What are Background Agents?**
Automated integrations that work behind the scenes.

**How to Enable:**

1. Open Cursor Settings (`Cmd + ,`)
2. Go to **Background Agents**
3. Enable integrations:

**GitHub Integration** ⭐ HIGHLY RECOMMENDED
- **Required:** Connect GitHub repo
- **What it does:** 
  - Creates pull requests automatically
  - Manages issues
  - Code review assistance
- **Best for:** Team development workflows

**Slack Integration** ⭐ RECOMMENDED
- **What it does:**
  - Notify team when work is complete
  - Share code snippets
  - Collaborative discussions
- **Best for:** Remote teams

**How to Connect:**
1. Click **"Connect"** next to integration
2. Authorize with OAuth
3. Select repos/channels
4. Background agents activate automatically

---

### Rules & Memories (Cursor Pro Feature)

**What are Rules?**
Custom instructions that tell FWD PRO experts how to behave in YOUR project.

**How to Add Rules:**

1. Open Cursor Settings (`Cmd + ,`)
2. Go to **Rules & Memories**
3. Add rules at two levels:

**User Rules** (Apply to ALL projects)
```
Example User Rules:
- "always use pnpm" 
- "When you are installing anything, always use pnpm"
- "Use TypeScript strict mode"
- "Follow our company code style guide"
```

**Project Rules** (Apply to THIS project only)
```
Example Project Rules:
- "This is a healthcare app - always consider HIPAA compliance"
- "Use shadcn/ui components for all UI"
- "All financial calculations must have unit tests"
- "Follow the business plan structure in /docs/templates/"
```

**How to Create Project Rules:**

Click **"+ Add Rule"** under Project Rules:

```markdown
Example Project Rule:

Title: "Healthcare Compliance"
Rule: "This is a healthcare startup. Always consider:
- HIPAA compliance for any user data
- PHI (Protected Health Information) handling
- FDA regulatory requirements for features
- Consult Elle (legal expert) for compliance questions"
```

---

**Recommended Rules for FWD PRO:**

**Rule 1: Package Manager**
```
"Always use pnpm for package management"
```

**Rule 2: Expert Consultation**
```
"When making architectural decisions, consult @denny first.
When creating investor materials, consult @lyna first.
When implementing features, work with @ada."
```

**Rule 3: Research Integrity** (v2.1)
```
"For ANY statistics, benchmarks, or research claims:
1. Perform web search FIRST
2. Cite real sources with URLs
3. If no research exists, mark as 'estimate' with reasoning
4. Never fabricate research or citations"
```

**Rule 4: Token Efficiency** (v2.1)
```
"Iterate in chat before writing to documents.
Update documents in place (search_replace) rather than rewriting.
Only write final approved content to files."
```

**Rule 5: Industry-Specific** (Customize!)
```
"This is a [fintech/healthcare/B2B SaaS] startup.
Always consider [industry-specific regulations/standards].
Use [industry] terminology naturally."
```

---

**Memories Feature:**

**What it does:** Cursor learns your preferences automatically

**Example Memories:**
- Code style preferences (you like arrow functions)
- Architectural decisions (you prefer monorepo)
- Communication style (you like casual tone)
- Domain knowledge (your product details)

**How to manage:**
1. Go to **Rules & Memories**
2. Click **"Show"** under Saved Memories
3. Review or remove memories

---

### Building Custom MCP Servers

**When to Build Your Own:**
- You have a proprietary tool/system
- Industry-specific integration needed
- Custom automation workflows
- No existing MCP meets your needs

**Resources:**
- [MCP Specification](https://github.com/anthropics/mcp)
- [MCP Server SDK](https://github.com/anthropics/mcp-typescript)
- Community MCP servers: [mcp.pizza](https://mcp.pizza)

**Example Custom MCP Server:**
```typescript
// custom-crm-mcp-server.ts
import { MCPServer } from '@anthropic/mcp-sdk';

const server = new MCPServer({
  name: 'custom-crm',
  version: '1.0.0',
  tools: [
    {
      name: 'search_customers',
      description: 'Search CRM for customers',
      parameters: { /* ... */ }
    }
  ]
});
```

---

## 🚀 Installation Priority Guide

### Phase 1: Start Here (Everyone)

```bash
# For coding projects
npx shadcn@latest init
pnpm add -D prettier eslint vitest

# For fundraising projects
pnpm add recharts xlsx
pip install python-docx python-pptx

# For marketing/ops projects
pnpm add @vercel/analytics
```

---

### Phase 2: Add When Needed

**When you have a team:**
- Slack MCP Server
- Linear/Jira MCP Server
- Google Calendar integration

**When you need automation:**
- Email tools (SendGrid/Nodemailer)
- Social media APIs
- Custom Python agents

---

### Phase 3: Advanced Users

- Build custom MCP servers
- Industry-specific integrations
- Advanced automation workflows

### Future: Agent-Based Architecture

**Note:** Advanced agent frameworks (like Google ADK) are being explored for future versions of FWD PRO as a standalone product with features like:
- Multi-agent orchestration
- Persistent memory across sessions
- Direct agent-to-agent communication
- Built-in state management

**Current FWD PRO:** Works great in Cursor/Claude/Windsurf with built-in tools - no additional frameworks needed!

---

## 💡 How Integrations Work with FWD PRO

### Example: Recharts with Lyna

```markdown
Lyna: "I'm creating your pitch deck and see you have financial 
       projections. Want me to generate visual charts?
       
       [Detects recharts installed]
       
       I can create:
       - Revenue growth chart (2024-2027)
       - User acquisition funnel
       - Unit economics visualization (LTV vs CAC)
       
       Should I add these to the deck?"
```

---

### Example: shadcn with Ada

```markdown
Ada: "I'm implementing the dashboard. I'll use shadcn components 
      for consistency and accessibility.
      
      [Browses shadcn MCP]
      
      Adding:
      - Card component for metrics
      - Chart component for analytics
      - DataTable for user list
      
      All components will match your design system."
```

---

### Example: Linear MCP with Genna

```markdown
Genna: "I've updated your product roadmap with Q1 2025 milestones.
       
       [Linear MCP detected]
       
       Want me to sync these to Linear as epics? I can:
       - Create initiatives with proper hierarchy
       - Link to project docs
       - Set target dates
       - Assign to cycles
       
       Sync to Linear?"
```

---

## 💰 Cost Considerations

### Free & Open Source

✅ **Completely Free:**
- shadcn/ui (MIT license)
- Recharts, xlsx, python-docx, python-pptx (all free npm/pip packages)
- Most MCP servers (open source)
- Prettier, ESLint, Vitest (dev tools)

### Paid Services

💰 **May Require Paid Accounts:**
- Slack (free tier available, paid for large teams)
- Linear (paid plans start $8/user/month)
- Jira (paid plans start $7.75/user/month)
- SendGrid (free tier: 100 emails/day, paid for scale)
- Analytics tools (varies by provider)

### API Rate Limits

⚠️ **Watch for Rate Limits:**
- Google Calendar API (free tier limits)
- Twitter API (paid tiers for high volume)
- GitHub API (rate limits apply)

**Note:** FWD PRO works amazingly without ANY paid integrations! Only add when you have a specific need.

---

## 🎓 Integration Best Practices

### 1. Start Simple
- Install only what you need NOW
- Don't add tools "just in case"
- FWD PRO is powerful without ANY extensions

### 2. Test Before Committing
- Try integrations on small projects first
- Ensure they fit your workflow
- Check documentation quality

### 3. Keep Dependencies Updated
```bash
# Check for updates
pnpm outdated

# Update safely
pnpm update
```

### 4. Security First
- Audit dependencies regularly
- Use environment variables for API keys
- Never commit secrets to git

---

## 📚 Resources

### Official Docs
- [shadcn/ui Components](https://ui.shadcn.com/)
- [Recharts Documentation](https://recharts.org/)
- [MCP Specification](https://github.com/anthropics/mcp)

### FWD PRO Specific
- [Expert Profiles](/pro-os/experts/) - See what each expert specializes in
- [System Patterns](/pro-os/system/patterns/) - How experts work
- [Getting Started](/pro-os/user-docs/user-guide/getting-started.md)

---

## 🤝 Community Integrations

**Have a great integration to share?**
- Submit via GitHub discussions
- Share your custom MCP servers
- Help others in the community

---

## 📋 Quick Reference: Integration by Expert

| Expert | Primary Tools | Optional Tools |
|--------|--------------|----------------|
| **Denny** | shadcn/ui, Vitest, ESLint | GitHub MCP, Supabase MCP |
| **Ada** | shadcn/ui, Prettier, Vitest | GitHub MCP |
| **Lyna** | Recharts, python-docx, xlsx | Google Slides API, Airtable |
| **Genna** | Mermaid, Recharts | Excalidraw, FigJam |
| **Benji** | Analytics tools, Email APIs | Slack MCP, Social APIs |
| **Elle** | python-docx, PDF tools | Legal research APIs |

---

## ✨ Next Steps

1. **Identify your primary use case** (coding, fundraising, ops, etc.)
2. **Install Phase 1 tools** for your use case
3. **Test with a small project** to validate workflow
4. **Add Phase 2 integrations** when you have specific needs
5. **Share feedback** to help improve this guide

---

**Remember:** FWD PRO is designed to work great out of the box. These integrations are performance enhancers, not requirements!

---

*Last updated: October 18, 2025 | FWD PRO v2.1*

