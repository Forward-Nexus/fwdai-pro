# Cursor IDE Configuration

**These files enhance FWD PRO when using Cursor AI.**

---

## What Gets Installed

When you choose Cursor during onboarding, FWD PRO will:

1. **Copy expert files to `.cursor/rules/`**
   - Enables Cursor's native @mention feature
   - Example: `@denny-systems-architect` or `@genna-architect`
   - Cursor reads these files when you @mention them

2. **Create symlinks to active experts**
   - Only copies experts you're actually using
   - Based on your work types (building, marketing, legal, etc.)
   - Keeps `.cursor/rules/` clean and focused

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
npx @fwdai/pro setup-ide

# Option 2: Manual copy
cp .fwdpro/pro-os/experts/denny-systems-architect.md .cursor/rules/
```

---

## Benefits of Cursor Integration

✅ **Native @mention autocomplete** - Cursor suggests experts as you type  
✅ **Focused context** - Only includes active experts (saves tokens)  
✅ **Familiar UX** - Works like Cursor's built-in @mentions  
✅ **Still uses roundtable** - Full FWD PRO system works normally  

---

## No Cursor? No Problem!

FWD PRO works perfectly without `.cursor/rules/`. Just use:

```
@denny create a spec for authentication
```

Cursor (or any AI tool) will find `denny` in your `.fwdpro/pro-os/experts/` folder.

The `.cursor/rules/` integration is just an **optional enhancement** for Cursor users.

---

**Ready to build!** 🚀

