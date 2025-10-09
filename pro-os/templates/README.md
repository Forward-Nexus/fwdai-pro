# FWD PRO Templates

**Purpose:** Templates used by the installer and as reference documentation  
**Location:** `/pro-os/templates/`

---

## Template Types

### 🔧 ACTIVE TEMPLATES
These templates are **actively used** by the installer during project setup. **DO NOT DELETE.**

#### Roundtable Templates
- **`roundtable/whiteboards-template.md`**
  - Used by: `tools/installer/roundtable.js`
  - Purpose: Creates initial whiteboards.md for expert collaboration
  - Personalized with: Project name, founder name, timestamp

- **`roundtable/founder-checklist-template.md`**
  - Used by: `tools/installer/roundtable.js`
  - Purpose: Creates personalized founder checklist
  - Personalized with: Founder name, project name

- **`roundtable/workspace/workspace-template.md`**
  - Used by: Referenced in system as structure guide
  - Purpose: Shows workspace file structure for experts
  - Status: REFERENCE (not directly filled, but referenced)

- **`roundtable/workspace/workspace-template.yaml`**
  - Used by: Referenced by workspace README
  - Purpose: Defines workspace YAML frontmatter structure
  - Status: REFERENCE (schema definition)

#### Project Templates
- **`project/founder-profile-TEMPLATE.md`**
  - Used by: `tools/installer/generators.js` → `generateGlobalProfile()`
  - Purpose: Creates global founder profile in `~/.fwdpro-global/`
  - Personalized with: Onboarding answers (name, location, roles, tech level, comm style, industries)

- **`project/project-kb-TEMPLATE.md`**
  - Used by: `tools/installer/generators.js` → `generateProjectKB()`
  - Purpose: Creates project knowledge base
  - Personalized with: Project info, work types, tech stack, goals, constraints

---

### 📚 REFERENCE TEMPLATES (Not Used by Installer)
These templates are **documentation only** - they show structure but aren't actively used by installer tools.

#### Reference-Only Templates
- **`project/mission-TEMPLATE.md`**
  - Status: REFERENCE ONLY (not used by installer)
  - Reason: `generateMission()` in generators.js builds mission.md programmatically
  - Why it exists: Shows expected structure for manual updates
  - When to update: If mission.md structure changes

- **`project/people-TEMPLATE.md`**
  - Status: REFERENCE ONLY (not used by installer)
  - Reason: `generatePeople()` in generators.js builds people.md programmatically
  - Why it exists: Shows expected structure for manual updates
  - When to update: If people.md structure changes

- **`roundtable/team-checklist-template.md`**
  - Status: REFERENCE (feature not yet implemented)
  - Purpose: For multi-founder projects (future feature)
  - Current: Only founder checklist is used

---

### ⚠️ OUTDATED/UNCLEAR TEMPLATES
These templates need attention.

- **`config-template.yaml`** (root of templates/)
  - Status: ⚠️ OUTDATED
  - Issue: Structure doesn't match current config.yaml
  - Reason unused: `generateConfig()` builds config.yaml programmatically
  - Recommendation: UPDATE to match current structure or DELETE

- **`config/config-TEMPLATE.yaml`**
  - Status: ⚠️ DUPLICATE
  - Issue: Duplicate of `config-template.yaml`
  - Recommendation: DELETE (duplicate)

- **`project/founder-profile-PROJECT-TEMPLATE.md`**
  - Status: ❓ UNCLEAR
  - Issue: Seems redundant with `founder-profile-TEMPLATE.md`
  - Recommendation: CLARIFY purpose or DELETE

- **`project/global-projects-TEMPLATE.md`**
  - Status: ❓ UNCLEAR
  - Issue: Purpose unknown, not referenced in installer
  - Recommendation: CLARIFY purpose or DELETE

---

## How Templates Are Used

### Active Template Flow

```
User runs: npx @fwd-ai/pro install
    ↓
Onboarding collects answers
    ↓
Generators use templates:
    1. generateGlobalProfile() reads founder-profile-TEMPLATE.md
       → Replaces [Q1], [Q2], etc. with answers
       → Writes to ~/.fwdpro-global/[name]-profile.md
    
    2. generateProjectKB() reads project-kb-TEMPLATE.md
       → Replaces [PROJECT_NAME], [Q11], etc.
       → Writes to .fwdpro/pro-os/project/project-kb.md
    
    3. initializeRoundtable() reads:
       - whiteboards-template.md
       - founder-checklist-template.md
       → Personalizes with project/founder info
       → Writes to .fwdpro/0-roundtable/
```

### Programmatic Generation (No Template)

Some files are built **programmatically** (no template used):

```javascript
// config.yaml - Built by generateConfig()
const config = {
  version: '1.0.0',
  project: {...},
  founder: {...},
  active_experts: {...}  // Smart activation based on work types
};

// mission.md - Built by generateMission()
// Prioritizes: scanner findings > user input > placeholders

// people.md - Built by generatePeople()
// Prioritizes: scanner findings > user input > placeholders
```

**Why no templates?** 
- More flexible (adapts to scanner findings)
- Easier to maintain (no template sync issues)
- Smarter (conditional content based on context)

---

## Template Update Guidelines

### When to Update ACTIVE Templates

1. **If onboarding questions change:**
   - Update `founder-profile-TEMPLATE.md` if Q1-Q8 change
   - Update `project-kb-TEMPLATE.md` if Q9-Q16 change

2. **If roundtable structure changes:**
   - Update `whiteboards-template.md` if whiteboard sections change
   - Update `founder-checklist-template.md` if checklist format changes

3. **If workspace structure changes:**
   - Update `workspace-template.md` if workspace sections change
   - Update `workspace-template.yaml` if frontmatter schema changes

### When to Update REFERENCE Templates

1. **If programmatic generators change:**
   - Update `mission-TEMPLATE.md` if `generateMission()` changes structure
   - Update `people-TEMPLATE.md` if `generatePeople()` changes structure

2. **Purpose:** Keep reference templates in sync with actual generated output

### Testing After Updates

After updating any ACTIVE template:
```bash
# Test installation
npx @fwd-ai/pro install

# Verify generated files
- Check .fwdpro/pro-os/project/ files
- Check 0-roundtable/ files
- Verify personalization worked
```

---

## Template Placeholder Syntax

### Replacement Patterns

All active templates use this syntax:
```markdown
[VARIABLE_NAME]           # Simple replacement
[Q1: Question text]       # Onboarding question reference
[Auto-timestamp]          # Special: current timestamp
YYYY-MM-DD HH:MM         # Date format that gets replaced
```

### Examples from Templates

```markdown
# founder-profile-TEMPLATE.md
**Name:** [Q1: What should we call you?]
**Location:** [Q2: City, State]

# project-kb-TEMPLATE.md
**Project Name:** [Q11: Project name]
**Work Types:** [Q12: Work types]

# whiteboards-template.md
**Project:** [Project Name from config]
**Last Updated:** [Auto-timestamp]
```

---

## File Organization

```
/pro-os/templates/
├── README.md                           # This file
├── config-template.yaml                # ⚠️ OUTDATED (not used)
│
├── config/
│   └── config-TEMPLATE.yaml            # ⚠️ DUPLICATE (delete)
│
├── project/
│   ├── founder-profile-TEMPLATE.md     # ✅ ACTIVE
│   ├── founder-profile-PROJECT-TEMPLATE.md  # ❓ UNCLEAR
│   ├── project-kb-TEMPLATE.md          # ✅ ACTIVE
│   ├── mission-TEMPLATE.md             # 📚 REFERENCE
│   ├── people-TEMPLATE.md              # 📚 REFERENCE
│   └── global-projects-TEMPLATE.md     # ❓ UNCLEAR
│
├── roundtable/
│   ├── whiteboards-template.md         # ✅ ACTIVE
│   ├── founder-checklist-template.md   # ✅ ACTIVE
│   ├── team-checklist-template.md      # 📚 REFERENCE (future)
│   └── workspace/
│       ├── workspace-template.md       # 📚 REFERENCE
│       └── workspace-template.yaml     # 📚 REFERENCE
│
└── experts/
    └── DOMAIN-EXPERT-TEMPLATE.md       # ❓ (need to check)
```

---

## Common Mistakes to Avoid

### ❌ DON'T:
1. Delete ACTIVE templates (breaks installer)
2. Change placeholder syntax without updating generators
3. Add templates without documenting them here
4. Assume all templates are actively used (some are reference only)

### ✅ DO:
1. Test changes with full install flow
2. Update this README when adding/removing templates
3. Mark templates as ACTIVE or REFERENCE
4. Keep reference templates in sync with generators

---

## Related Documentation

- **Installation Flow:** `/tools/installer/README.md` (if exists)
- **Generators:** `/tools/installer/generators.js`
- **Setup Logic:** `/tools/installer/setup.js`
- **Onboarding:** `/tools/installer/onboarding.js`

---

## Version History

- **v1.0** (Oct 2025) - Initial template system
- **v1.1** (Oct 2025) - Moved to programmatic generation for mission/people (scanner-aware)
- **v1.2** (Oct 2025) - Added this README for clarity

---

**Questions?** Check the source code in `/tools/installer/` or open an issue!

**Last Updated:** October 9, 2025

