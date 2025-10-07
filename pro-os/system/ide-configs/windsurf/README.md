# Windsurf Configuration

**These files enhance FWD PRO when using Windsurf (Codeium's AI IDE).**

---

## What Gets Installed

When you choose Windsurf during onboarding, FWD PRO will:

1. **Set up project context**
   - Optimizes Windsurf's file awareness
   - Configures workspace for FWD PRO structure
   - Enables smooth expert collaboration

2. **Prepare workflow integration** (future)
   - `.windsurf/workflows/` structure ready
   - Can add Windsurf-specific flows later
   - Integrated with FWD PRO system

---

## How to Use in Windsurf

### Flow Mode with Experts

Windsurf's "Flow" mode works great with FWD PRO:

```
Can you act as @denny (the systems architect) and create 
a technical spec for user authentication?

Let's check the roundtable whiteboards and see what's in progress.

As @ada, implement the authentication feature from the spec.
```

### Natural Conversations

```
Read denny-systems-architect.md and design a payment system

Check the founder checklist - what should I work on next?

Update the roundtable with progress on the authentication feature
```

### Multi-Step Workflows

Windsurf excels at multi-step tasks:

```
1. Read the authentication spec from Denny
2. Create implementation plan as Ada
3. Update the whiteboards with progress
4. Add any questions to the founder checklist
```

---

## File Structure

```
your-project/
├── .windsurf/
│   ├── workflows/           (future: custom workflows)
│   └── README.md
│
├── .fwdpro/
│   ├── pro-os/
│   │   ├── experts/         ← Windsurf reads from here
│   │   └── commands/
│   └── roundtable/
│       ├── whiteboards.md
│       └── workspace/
```

---

## Windsurf's Strengths with FWD PRO

✅ **Flow mode** - Great for multi-step expert collaboration  
✅ **Context awareness** - Remembers expert roles across conversation  
✅ **Fast execution** - Quick file reads and updates  
✅ **Smooth UX** - Natural chat interface works well with @mentions  

---

## Tips for Using Windsurf

### 1. Use Flow Mode for Complex Work

Start a flow with multiple experts:

```
Flow: Create authentication system

1. @genna - define authentication strategy
2. @denny - create technical spec
3. @ada - implement the system
4. Update whiteboards at each step
```

### 2. Reference Files Explicitly

```
Read .fwdpro/pro-os/experts/denny-systems-architect.md

Open .fwdpro/roundtable/whiteboards.md and show Denny's section
```

### 3. Leverage Windsurf's Memory

Windsurf remembers context well:

```
Continue as Denny working on that spec

Add this to Ada's whiteboard

What's on my founder checklist?
```

---

## Future: Custom Workflows

We're planning `.windsurf/workflows/` integration:

```yaml
workflows/denny-create-spec.yaml
workflows/ada-implement.yaml
workflows/roundtable-sync.yaml
```

This will let you trigger expert workflows with Windsurf's native features!

---

## Configuration (Optional)

You can customize Windsurf's behavior with a config file:

`.windsurf/config.yaml`
```yaml
project:
  name: "Your Project"
  fwd_pro: true
  
context_paths:
  - .fwdpro/pro-os/experts
  - .fwdpro/roundtable
  - .fwdpro/config

workflows:
  - path: .windsurf/workflows
  
preferences:
  default_expert: "denny"
  auto_update_whiteboards: true
```

*(Note: This is aspirational - actual Windsurf config may differ)*

---

## Integration Ideas

### Windsurf Commands + FWD PRO

```
/flow create-feature with @denny and @ada

/expert @lyna create pitch deck

/roundtable sync and show status
```

### Workspace Actions

```
/workspace open .fwdpro/roundtable

/open expert @denny

/checklist show
```

---

## No Windsurf? No Problem!

FWD PRO works in **any AI coding tool**. Windsurf is just one great option!

Also works in:
- Cursor
- VS Code (Copilot, Cline)
- Claude Code
- Any AI assistant

---

**Surf's up!** 🌊

