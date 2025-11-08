# IDE Configurations

**Purpose:** Documentation and guides for using FWD PRO with different AI coding tools.

---

## What's This Folder?

FWD PRO works in **any AI coding tool** out of the box. These are **setup guides** for different IDEs.

**Everyone gets:**
- Core `pro-os/` system (works everywhere)
- Natural `@expert` tagging
- Universal commands

**IDE-specific setups:**
- Cursor: Automatic `.mdc` rules installation (experts + commands)
- VS Code: Settings and extensions recommendations
- Claude/Windsurf/Generic: Usage guides

---

## ✅ Cursor (Automated Setup)

**Status:** Fully automated! 🎉

When you run `npx @fwd-ai/pro install` and select "Cursor", the installer automatically copies:
- `.cursor/rules/experts/` (all expert `.mdc` files)
- `.cursor/rules/commands/` (all command `.mdc` files)

**You get:**
- `@denny`, `@ada`, `@lyna`, `@genna`, `@benji`, `@elle` - All experts ready
- `@create`, `@execute`, `@plan`, `@research`, etc. - All commands ready

**See:** `cursor/README.md` for setup details and MCP recommendations

---

## 🔄 Other IDEs (Coming Soon)

### 💻 VS Code
**Status:** Documentation only  
**See:** `vscode/README.md` for manual setup instructions

### 🤖 Claude Code  
**Status:** Documentation only  
**See:** `claude/README.md` for manual setup instructions

### 🌊 Windsurf
**Status:** Documentation only  
**See:** `windsurf/README.md` for manual setup instructions

### 📝 Generic
**Status:** Documentation only  
**See:** `generic/README.md` for any AI coding tool

---

## How Cursor Setup Works

During `npx @fwd-ai/pro install`:

1. **Detects your IDE** (or asks which you're using)
2. **Copies core system** (`pro-os/` - everyone gets this)
3. **If Cursor:** Automatically copies `.cursor/rules/` from package
4. **You're ready!** Start using `@denny`, `@ada`, etc. immediately

**Example:**
```bash
npx @fwd-ai/pro install

→ Which AI coding tool are you using?
→ Selected: Cursor
→ ✅ Installed pro-os/ (core system)
→ ✅ Cursor rules installed (.cursor/rules/)
→ You can now use @denny, @ada, @lyna, etc. in Cursor!
```

---

## Adding New IDEs

Want to add support for a new IDE? 

1. Create folder: `ide-configs/[ide-name]/`
2. Add the IDE-specific files/structure
3. Update installer to detect and copy
4. Submit PR!

Community contributions welcome! 🎉

---

## File Structure

```
ide-configs/
  cursor/
    .cursor/
      rules/
        [expert and command files]
  
  vscode/
    .vscode/
      [settings and configs]
  
  claude/
    .claude/
      commands/
        [command files]
  
  windsurf/
    .windsurf/
      workflows/
        [workflow files]
  
  generic/
    README.md (instructions for generic use)
```

---

**Note:** All configs reference the same core `pro-os/` system. IDE configs are just different ways to invoke the same experts and commands.

