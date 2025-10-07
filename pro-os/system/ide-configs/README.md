# IDE Configurations

**Purpose:** Optional IDE-specific configurations that enhance FWD PRO in different AI coding tools.

---

## What's This Folder?

FWD PRO works in **any AI coding tool** out of the box. These configurations are **optional enhancements** that leverage IDE-specific features.

**Everyone gets:**
- Core `pro-os/` system (works everywhere)
- Natural `@expert` tagging
- Universal commands

**IDE configs add:**
- IDE-specific features (like Cursor's `.mdc` commands or VS Code's copilot settings)
- Optimized file structures per tool
- Enhanced integrations

---

## Supported IDEs

### 🎯 Cursor (`cursor/`)
- `.cursor/rules/` for enhanced @mentions and .mdc commands
- Optimized for Cursor's AI features

### 💻 VS Code (`vscode/`)
- `.vscode/` settings for Copilot and Cline
- Workspace configurations

### 🤖 Claude Code (`claude/`)
- `.claude/commands/` for slash commands
- Claude-specific workflows

### 🌊 Windsurf (`windsurf/`)
- `.windsurf/workflows/` for Windsurf features
- Flow-specific optimizations

### 📝 Generic (`generic/`)
- No IDE-specific folders
- Works in any AI coding tool
- Simple markdown-based

---

## How This Works

During `npx @fwdai/pro install`, the CLI:

1. Detects your IDE (or asks)
2. Copies `pro-os/` (core system - everyone gets this)
3. Optionally copies IDE-specific config from here
4. You're ready to go!

**Example:**
```bash
npx @fwdai/pro install

→ Detected: Cursor
→ Install Cursor optimizations? [Y/n]
→ ✅ Installed pro-os/ + .cursor/rules/
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

