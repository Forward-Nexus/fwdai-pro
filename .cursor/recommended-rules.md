# Recommended Cursor Rules for FWD PRO v2.1

**Copy these rules into your Cursor settings to enable v2.1 patterns!**

**How to add:**
1. Open Cursor Settings (`Cmd + ,` or `Ctrl + ,`)
2. Go to **Rules & Memories**
3. Click **"+ Add Rule"** under User Rules or Project Rules
4. Copy/paste the rules below

---

## 🎯 User Rules (Apply to ALL Projects)

### Rule 1: Package Manager
```
Always use pnpm for package management. 
When installing anything, use pnpm (not npm or yarn).
```

### Rule 2: Research Integrity (v2.1 CRITICAL)
```
For ANY statistics, benchmarks, or research claims:

1. Perform web search FIRST using web_search tool
2. Cite real sources with URLs
3. If no research exists, mark as "estimate" with clear reasoning
4. NEVER fabricate research or citations
5. Use three-tier citation standard:
   - Tier 1: Verified research (peer-reviewed, official reports)
   - Tier 2: Industry benchmarks (reputable sources)
   - Tier 3: Honest estimates (clearly marked, with methodology)

This is NON-NEGOTIABLE. One fake citation destroys credibility.
```

### Rule 3: Token Efficiency (v2.1)
```
To save user money and time:

1. Iterate in CHAT before writing to documents
2. Update documents in place (search_replace) rather than rewriting
3. Only write final approved content to files
4. Read existing documents before updating (don't duplicate)
5. Use chat for brainstorming, documents for final content

Default: UPDATE in place. Only create new versions when explicitly requested.
```

### Rule 4: Expert Collaboration (v2.1)
```
When working as an FWD PRO expert:

1. Always evaluate work through YOUR domain expertise lens
2. Check your persona file for YOUR specific domain boundaries
3. Provide proactive insights (don't wait to be asked)
4. Trust validated source documents (don't second-guess them)
5. Collaborate naturally in group chat (not formal handoffs)

Expert Lens Principle: Evaluate ONLY through YOUR domain, not generic expertise.
```

---

## 📂 Project Rules (Apply to THIS Project Only)

### Project Rule Template: FWD PRO System Development
```
This is the FWD PRO system repository.

Key Principles:
- Expert Profiles = WHO they are (personality + domain)
- System Docs = HOW they work (patterns/standards/checklists)
- Experts reference patterns, don't duplicate content (DRY)
- Update behavior once → all experts inherit it

When updating the system:
1. Standards = Formatting/style rules
2. Patterns = Workflow guides
3. Checklists = Quality validation
4. Expert profiles should only change for personality/domain updates
```

### Project Rule Template: Startup/Product Development
```
This is a [industry] startup project.

Always consider:
- [Industry-specific regulations/compliance]
- [Target market and user needs]
- [Budget constraints and token efficiency]
- [Team size and collaboration needs]

Expert Consultation:
- Architecture decisions → @denny
- Investor materials → @lyna
- Feature implementation → @ada
- Product strategy → @genna
- Growth/marketing → @benji
- Legal/compliance → @elle
```

### Project Rule Template: Healthcare/Regulated Industry
```
This is a healthcare/medical application.

MANDATORY considerations:
- HIPAA compliance for all user data
- PHI (Protected Health Information) handling
- FDA regulatory requirements (if applicable)
- Clinical validation for health claims
- Consult @elle (legal expert) for compliance questions

NEVER make health claims without:
1. Clinical research citations
2. FDA approval verification
3. Legal review
```

### Project Rule Template: Fintech/Financial Services
```
This is a fintech application.

MANDATORY considerations:
- Financial regulations (BSA/AML, KYC)
- Banking partnership requirements
- Money transmitter licensing (if applicable)
- Security standards (SOC 2, PCI DSS)
- Consult @elle (legal expert) for compliance questions

For financial projections:
- Use real market data with sources
- Mark estimates clearly as estimates
- Include risk disclosures
```

---

## 🎨 Style/Format Rules (Optional)

### Communication Style: Casual
```
Communication style: Casual and direct

- Use contractions ("we're", "let's", "you're")
- Emojis are welcome in internal docs
- Get to the point quickly
- Feel like a real teammate, not a corporate consultant
```

### Communication Style: Formal
```
Communication style: Professional and formal

- No contractions
- No emojis
- Third-person perspective for deliverables
- Conservative, business-appropriate tone
```

### Code Style
```
Code style preferences:

- TypeScript strict mode
- Use arrow functions for callbacks
- Prefer const over let
- 2-space indentation
- Semicolons required
- Single quotes for strings
```

---

## 🔬 Domain-Specific Rules

### For Web/Mobile Development
```
Technology stack:
- Next.js 14+ (App Router)
- React + TypeScript
- Tailwind CSS + shadcn/ui
- pnpm for package management
- Vitest for testing

Architecture principles:
- Component-driven development
- Server components by default
- Client components only when needed
- Test coverage required
```

### For Data/ML Projects
```
Technology stack:
- Python 3.11+
- Pandas/NumPy for data processing
- Scikit-learn/PyTorch for ML
- Jupyter notebooks for exploration

Standards:
- Document data sources
- Track experiment results
- Version control notebooks
- Reproducible research
```

---

## 📋 Quality Standards

### Testing Requirements
```
Testing standards:

- All new features require tests
- Minimum 80% code coverage
- Test edge cases and error states
- Integration tests for critical paths
- Run tests before commits
```

### Documentation Requirements
```
Documentation standards:

- All functions have docstrings
- README includes setup instructions
- Breaking changes documented
- API changes have migration guides
- Architecture decisions recorded
```

---

## 🚀 How to Use These Rules

**Step 1: Choose Your Rules**
- Start with Core Rules (Package Manager, Research Integrity, Token Efficiency)
- Add Project-Specific Rules based on your industry
- Customize Style/Format to match your preferences

**Step 2: Add to Cursor**
1. Open Cursor Settings
2. Rules & Memories
3. User Rules (for all projects) or Project Rules (for this project)
4. Click "+ Add Rule"
5. Paste the rule text

**Step 3: Test**
- Try a task that should trigger the rule
- Verify the AI follows the rule
- Adjust wording if needed

**Step 4: Maintain**
- Review rules periodically
- Remove rules that aren't helping
- Update rules based on learnings

---

## 💡 Pro Tips

**Tip 1: Start Small**
Don't add all rules at once. Start with 3-5 core rules, see how they work, then add more.

**Tip 2: Be Specific**
Vague rules like "write good code" don't help. Specific rules like "use pnpm" work great.

**Tip 3: Test Rules**
After adding a rule, test it! Does the AI actually follow it? Refine the wording if not.

**Tip 4: Document Why**
When you add a custom rule, document WHY you added it. Future you will appreciate it.

**Tip 5: Share with Team**
If your team uses FWD PRO, share your rules! Consistency across the team = better collaboration.

---

## 🎯 Quick Start: Essential 3 Rules

**If you only add 3 rules, make them these:**

1. **Package Manager** (prevents confusion)
2. **Research Integrity** (prevents fake citations)
3. **Token Efficiency** (saves money)

These three rules implement core v2.1 patterns and provide immediate value.

---

**Ready to optimize your FWD PRO experience!** 🚀

*Last updated: October 18, 2025 | FWD PRO v2.1*

