# IDE Configurations

**Purpose:** Documentation and guides for using FWD PRO with different AI coding
tools.

---

## What's This Folder?

FWD PRO works in **any AI coding tool** out of the box. These are **setup
guides** for different IDEs.

**Everyone gets:**

- Core `pro-os/` system (works everywhere)
- Natural `@expert` tagging
- Universal commands

**IDE-specific setups:**

- Cursor: Automatic `.mdc` rules installation (experts + commands)
- VS Code: GitHub Copilot instructions (master routing)
- Claude Code: Custom rules (experts + commands)

---

## ✅ Cursor (Automated Setup)

**Status:** Fully automated! 🎉

When you run `npx @fwd-ai/pro install` and select "Cursor", the installer
automatically copies:

- `.cursor/rules/experts/` (all expert `.mdc` files)
- `.cursor/rules/commands/` (all command `.mdc` files)

**You get:**

- `@denny`, `@ada`, `@lyna`, `@genna`, `@benji`, `@elle` - All experts ready
- `@create`, `@execute`, `@plan`, `@research`, etc. - All commands ready

**Format:** Native `.mdc` files with automatic activation

**See:** `cursor/README.md` for setup details and MCP recommendations

---

## 🔄 Other IDEs (Ready to Install)

### 💻 VS Code

**Status:** Ready! GitHub Copilot instructions available  
**Format:** `.github/copilot-instructions.md` (master routing document)  
**See:** `vscode/README.md` for usage guide

### 🤖 Claude Code

**Status:** Ready! Custom commands available  
**Format:** `.claude/rules/` (experts + commands)  
**See:** `claude-code/README.md` for usage guide

---

## How Installation Works

During `npx @fwd-ai/pro install`:

1. **Detects your IDE** (or asks which you're using)
2. **Copies core system** (`.fwdpro/pro-os/` - everyone gets this)
3. **Copies IDE-specific config** based on your selection:
   - **Cursor:** Copies `ide-configs/cursor/.cursor/` to project root
   - **VS Code:** Copies `ide-configs/vscode/.github/` to project root
   - **Claude Code:** Copies `ide-configs/claude-code/.claude/` to project root
4. **You're ready!** Start using experts and commands immediately

**Example:**

```bash
npx @fwd-ai/pro install

→ Which AI coding tool are you using?
→ Selected: Cursor
→ ✅ Installed .fwdpro/pro-os/ (core system)
→ ✅ Installed .cursor/rules/ (activation rules)
→ You can now use @denny, @ada, @lyna, etc. in Cursor!
```

---

## Supported IDEs

FWD PRO currently supports these AI coding environments:

✅ **Cursor** - Native `.mdc` rules  
✅ **VS Code** - GitHub Copilot instructions  
✅ **Claude Code** - Custom slash commands

**Want to add another IDE?**

1. IDE must support local file system access and AI assistants
2. Create folder: `ide-configs/[ide-name]/`
3. Add activation system (dotfolder structure)
4. Update installer logic
5. Submit PR!

Community contributions welcome! 🎉

---

## File Structure

**In the FWD PRO repo:**

```
pro-os/system/ide-configs/
  cursor/
    .cursor/
      rules/
        experts/      (denny.mdc, ada.mdc, genna.mdc, lyna.mdc, benji.mdc, elle.mdc)
        commands/     (create.mdc, execute.mdc, analyze.mdc, research.mdc, etc.)
    README.md

  vscode/
    .github/
      copilot-instructions.md    (master routing for all experts/commands)
    README.md

  claude-code/
    .claude/
      rules/
        experts/      (denny.md, ada.md, genna.md, lyna.md, benji.md, elle.md)
        commands/     (create.md, execute.md, analyze.md, research.md, etc.)
      settings.json
    README.md
```

**After installation in user's project:**

```
your-project/
  .cursor/rules/           (if Cursor selected)
  .github/                 (if VS Code selected)
  .claude/rules/           (if Claude Code selected)
  .fwdpro/pro-os/          (everyone gets this - core system)
```

---

**Note:** All configs reference the same core `pro-os/` system. IDE configs are
just different ways to invoke the same experts and commands.
