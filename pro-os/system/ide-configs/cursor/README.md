# Cursor IDE Configuration for FWD PRO v2.1

**Supercharge FWD PRO with Cursor-specific optimizations!**

---

## 🚀 Quick Setup (3 Steps)

### Step 1: Performance Optimization
**Already done!** FWD PRO includes `.cursorignore` at the root to exclude large folders from indexing.

### Step 2: Add Recommended Rules
1. Open `.cursor/recommended-rules.md`
2. Copy the rules you want
3. Add them in Cursor Settings → Rules & Memories

**Essential 3 Rules:**
- Package Manager (use pnpm)
- Research Integrity (v2.1 requirement)
- Token Efficiency (save money)

### Step 3: Install MCP Servers (Optional)
1. Open `.cursor/recommended-mcps.json`
2. Pick MCPs for your use case
3. Add them in Cursor Settings → Tools & MCP

**Highly Recommended:**
- `shadcn-ui` (for React/Next.js development)
- `brave-search` (for research verification)

---

## 📁 What's Included

```
your-project/
├── .cursorignore              ← Performance: Excludes large folders
├── .cursor/
│   ├── rules/                 ← Empty (for future use)
│   ├── recommended-rules.md   ← Copy/paste rules template
│   └── recommended-mcps.json  ← MCP server configurations
└── .fwdpro/
    └── pro-os/experts/        ← Your FWD PRO experts
```

---

## How to Use in Cursor

### @Mention Experts Directly

Cursor's @mention feature will autocomplete your experts:

```
@genna-architect what should our product vision be?

@denny-systems-architect create a spec for authentication

@ada-implementation let's build the login feature
```

### Read from Roundtable

Your experts still use `.fwdpro/roundtable/` for collaboration:

```
@denny can you check the whiteboards and continue the auth spec?
```

### Access Commands

Commands work the same way:

```
@denny @create spec for payment processing

@ada @execute the feature in workspace/auth-feature.md
```

---

## File Structure

```
your-project/
├── .cursor/
│   └── rules/
│       ├── genna-architect.md          (copied from pro-os/experts/)
│       ├── denny-systems-architect.md   (if building)
│       ├── ada-implementation.md        (if building)
│       ├── lyna-external-strategy.md    (if fundraising)
│       ├── benji-internal-growth.md     (if marketing)
│       ├── elle-legal.md                (if legal work)
│       └── README.md
│
├── .fwdpro/
│   ├── pro-os/
│   │   ├── experts/  ← Source of truth
│   │   └── commands/
│   └── roundtable/
│       ├── whiteboards.md
│       └── workspace/
```

---

## Updating Experts

If you customize expert files in `.fwdpro/pro-os/experts/`, you'll need to copy them to `.cursor/rules/` again:

```bash
# Option 1: Re-run IDE setup
npx @fwd-ai/pro setup-ide

# Option 2: Manual copy
cp .fwdpro/pro-os/experts/denny-systems-architect.md .cursor/rules/
```

---

## 🎯 Benefits of Cursor Optimization

✅ **Faster Performance** - `.cursorignore` excludes large folders from indexing  
✅ **v2.1 Patterns Built-In** - Rules enforce research integrity & token efficiency  
✅ **Extended Capabilities** - MCP servers give experts superpowers  
✅ **Native @mention** - Cursor suggests experts as you type  
✅ **Cost Savings** - Token-efficient workflows save money  

---

## 🔧 Advanced: Background Agents

**Enable in Cursor Settings → Background Agents:**

**GitHub Integration** ⭐ RECOMMENDED
- Automatically create PRs
- Manage issues and code reviews
- Requires: GitHub OAuth connection

**Slack Integration**
- Notify team when work is complete
- Share code snippets
- Requires: Slack OAuth connection

---

## 💡 Pro Tips

### Tip 1: Start with Core Rules
Add these 3 rules first, test them, then add more:
1. Package Manager
2. Research Integrity
3. Token Efficiency

### Tip 2: Install MCPs Gradually
Don't install all MCPs at once. Start with:
- `shadcn-ui` (if building React apps)
- `brave-search` (for research verification)

### Tip 3: Test Rules
After adding a rule, test it! Ask the AI to do something that should trigger the rule.

### Tip 4: Customize for Your Project
Use Project Rules for project-specific requirements (industry, compliance, team preferences).

### Tip 5: Share with Your Team
If multiple people use FWD PRO, share your rules & MCP configs for consistency!

---

## 📚 Resources

**Configuration Files:**
- `.cursorignore` - Performance optimization (root of repo)
- `.cursor/recommended-rules.md` - Rules template
- `.cursor/recommended-mcps.json` - MCP configurations

**Documentation:**
- [Recommended Integrations Guide](/pro-os/user-docs/user-guide/recommended-integrations.md)
- [Personalizing Your System](/pro-os/user-docs/user-guide/personalizing-your-system.md)
- [Cursor Official Docs](https://cursor.com/features)

---

## 🆘 Troubleshooting

**Issue: Cursor is slow**
- Check if `.cursorignore` exists at repo root
- Add large folders to `.cursorignore`
- Reduce context window in settings

**Issue: Rules not working**
- Verify rule is added in Cursor Settings → Rules & Memories
- Check if rule is marked as "User Rule" or "Project Rule"
- Test with a specific prompt that should trigger the rule

**Issue: MCP not showing**
- Restart Cursor after adding MCP
- Check MCP configuration JSON syntax
- Verify API keys are correct (if required)

---

## No Cursor? No Problem!

FWD PRO works perfectly in any AI IDE (Claude, Windsurf, VS Code with Copilot, etc.).

These Cursor-specific optimizations are **optional enhancements**, not requirements!

---

**Ready to build with optimized Cursor + FWD PRO v2.1!** 🚀

*Last updated: October 18, 2025*

