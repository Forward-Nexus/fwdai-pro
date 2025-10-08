# VS Code Configuration

**These files enhance FWD PRO when using VS Code with Copilot or Cline.**

---

## What Gets Installed

When you choose VS Code during onboarding, FWD PRO will:

1. **Create `.vscode/settings.json`**
   - Optimizes markdown file handling
   - Configures workspace for FWD PRO files
   - Improves preview behavior

2. **Configure file associations**
   - Ensures `.md` files open correctly
   - Proper syntax highlighting for YAML frontmatter
   - Better editing experience

---

## settings.json Configuration

```json
{
  "files.associations": {
    "*.md": "markdown"
  },
  "markdown.preview.doubleClickToSwitchToEditor": false,
  "workbench.editor.enablePreview": false,
  "files.exclude": {
    "**/.fwdpro/pro-os/roundtable/workspace/**": true
  }
}
```

**What this does:**
- Ensures markdown files are recognized properly
- Disables preview-only mode (opens files for editing immediately)
- Hides memory folders from file explorer (reduces clutter)

---

## How to Use in VS Code

### With GitHub Copilot

```
@workspace explain the FWD PRO system

Can you help me work with @denny to create a technical spec?
```

### With Cline

Cline works naturally with FWD PRO:

```
@denny create a spec for user authentication

Let's check the roundtable and see what experts are working on
```

### Tag Experts

```
@denny can you design the authentication system?

@ada let's implement the login feature

@genna what should our long-term product vision be?
```

---

## File Structure

```
your-project/
├── .vscode/
│   └── settings.json         (workspace settings)
│
├── .fwdpro/
│   ├── pro-os/
│   │   ├── experts/
│   │   └── commands/
│   └── roundtable/
│       ├── whiteboards.md
│       └── workspace/
```

---

## Recommended VS Code Extensions

While not required, these enhance the FWD PRO experience:

- **GitHub Copilot** - AI pair programming
- **Cline** - AI coding assistant with agentic capabilities
- **Markdown All in One** - Better markdown editing
- **YAML** - Syntax highlighting for config files

---

## Customizing Settings

You can add your own VS Code settings to `.vscode/settings.json`. FWD PRO only sets up markdown and file handling basics.

**Common additions:**
```json
{
  "editor.wordWrap": "on",
  "markdown.preview.breaks": true,
  "[markdown]": {
    "editor.quickSuggestions": true
  }
}
```

---

## No VS Code? No Problem!

FWD PRO works in **any AI coding tool**. The `.vscode/` configuration just optimizes the experience for VS Code users.

You can use FWD PRO in:
- Cursor
- Claude Code
- Windsurf
- Any AI tool with file access

---

**Ready to code!** 💻

