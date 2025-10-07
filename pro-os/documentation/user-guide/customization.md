# Customization Guide

**Advanced configuration and customization options for FWD PRO**

---

## Overview

FWD PRO is designed to work great out-of-the-box, but you can customize it to match your workflow.

**Skill Level:** Intermediate to Advanced

---

## Configuration File

### Location

`.fwdpro/pro-os/config.yaml`

### Structure

```yaml
# FWD PRO Configuration

project:
  name: "ODAT"
  version: "1.2.0"
  stage: "launched"  # idea, mvp, launched, scaling
  
founder:
  name: "Ward"
  profile_link: "~/.fwdpro-global/ward-profile.md"
  communication_style: "c"  # a, b, c, d, e
  
work_types:
  - "building"      # Activates Denny + Ada
  - "fundraising"   # Activates Lyna
  - "marketing"     # Activates Benji
  - "legal"         # Activates Elle
  
active_experts:
  - genna           # Always active
  - denny
  - ada
  - lyna
  - bonnie-jo       # Domain expert
  
tech_stack:
  frontend:
    - "React Native"
    - "TypeScript"
    - "Expo"
  backend:
    - "Supabase"
    - "PostgreSQL"
  ai:
    - "Claude Sonnet"
    
repositories:
  primary: "."
  additional: []    # For multi-repo projects
  
paths:
  workspace: "roundtable/workspace"
  documents: "documents"
  agents: "pro-os/agents"
  commands: "pro-os/commands"
  
preferences:
  document_format: "markdown"  # markdown, notion, gdocs
  code_style: "auto"           # auto-detect from project
  test_framework: "jest"       # for Ada
  
ai_tool:
  primary: "cursor"    # cursor, claude, windsurf, vscode
  model: "sonnet"      # sonnet, opus, gpt4
  
workflow:
  three_phase: true            # Prep → Execute → Complete
  tdd: true                    # Test-driven development
  auto_review: true            # Experts auto-review handoffs
  
expert_behavior:
  collaborative: true          # Experts talk to each other
  proactive: true              # Experts suggest next steps
  ask_before_major_changes: true
  
notifications:
  founder_checklist: true      # Add items when input needed
  whiteboard_updates: true     # Update whiteboards
  handoff_complete: true       # Notify on handoffs
```

---

## Customizing Work Types

### Add Custom Work Type

```yaml
work_types:
  - "building"
  - "fundraising"
  - "customer_support"  # NEW!
```

**Then define which experts activate:**

```yaml
work_type_mappings:
  building: [denny, ada]
  fundraising: [lyna]
  marketing: [benji]
  legal: [elle]
  customer_support: [ada, benji]  # NEW!
```

---

## Customizing Communication Style

### Per-Project Override

**Global style:** Set in `@update-founder-profile`

**Per-project override:**

```yaml
founder:
  communication_style: "d"  # Direct for this project
  global_override: true     # Override global setting
```

**Use case:** Professional client project vs. personal project

---

## Custom Document Structure

### Change Document Folders

```yaml
paths:
  documents: "docs"  # Use 'docs' instead of 'documents'
  
document_categories:
  - technical
  - investor
  - marketing
  - legal
  - planning
  - research      # NEW!
  - design        # NEW!
```

**Experts will use your structure!**

---

## Custom Commands

### Create Your Own Command

**1. Copy Template:**

```bash
cp .fwdpro/pro-os/commands/quick/_TEMPLATE.md \
   .fwdpro/pro-os/commands/quick/my-workflow.md
```

**2. Define Workflow:**

```markdown
# @my-workflow

**Purpose:** Weekly product review

**Expert:** Genna coordinates, all experts participate

**Workflow:**

### Phase 1: Preparation 🎯
1. Review last week's work
2. Check metrics and KPIs
3. Identify blockers

### Phase 2: Execution 💪
1. Each expert reports status
2. Discuss priorities for next week
3. Assign tasks

### Phase 3: Completion ⭐⭐⭐
1. Update roadmap
2. Update founder-checklist
3. Post summary to whiteboards
```

**3. Use It:**

```
@my-workflow
```

### Example Custom Commands

**@weekly-review:**
- Review progress
- Plan next week
- Update stakeholders

**@launch-checklist:**
- Technical ready? (Denny/Ada)
- Legal ready? (Elle)
- Marketing ready? (Benji)
- Go/no-go decision

**@customer-interview-analysis:**
- Collect interview notes
- Analyze patterns
- Extract insights
- Recommend features

---

## Custom Domain Expert

### Modify Existing Domain Expert

**Location:** `.fwdpro/pro-os/experts/[name].md`

**Example: Enhance Bonnie Jo**

```markdown
# Bonnie Jo - Recovery Specialist

## Role
Expert in addiction recovery, peer support, and clinical best practices

## Strengths
- 12-step program knowledge
- Peer support facilitation
- Relapse prevention
- Trauma-informed care
- Harm reduction principles  # NEW!
- Family systems            # NEW!

## Custom Guidelines
- Always use "person in recovery" not "addict"
- Celebrate small wins (1 day = as important as 90 days)
- Understand triggers and cravings
- Know the difference between slip and relapse
- Reference SAMHSA guidelines  # NEW!

## When to Tag
- Recovery-specific feature design
- Language/tone review
- Clinical compliance
- Peer support features
- Crisis intervention features  # NEW!
```

---

## Multi-Repo Configuration

### For Monorepo Projects

```yaml
repositories:
  primary: "."
  structure: "monorepo"
  packages:
    - name: "mobile"
      path: "packages/mobile"
      tech: ["React Native"]
    - name: "web"
      path: "packages/web"
      tech: ["Next.js"]
    - name: "api"
      path: "packages/api"
      tech: ["Node.js"]
      
expert_routing:
  mobile: [denny, ada]
  web: [denny, ada]
  api: [denny, ada]
```

**Experts know which package they're working in!**

### For Multi-Repo Projects

```yaml
repositories:
  primary: "~/projects/odat-app"
  additional:
    - path: "~/projects/odat-api"
      purpose: "Backend API"
    - path: "~/projects/odat-admin"
      purpose: "Admin dashboard"
      
cross_repo_awareness: true  # Experts see all repos
```

---

## IDE-Specific Customization

### Cursor Configuration

**Location:** `.fwdpro/pro-os/system/ide-configs/cursor/`

**Customize:**
```json
{
  "fwdpro.tagFormat": "@expert",
  "fwdpro.autoLoadContext": true,
  "fwdpro.showWhiteboards": true,
  "fwdpro.quickCommands": [
    "@create-spec",
    "@create-feature",
    "@rt"
  ]
}
```

### VS Code Configuration

**Location:** `.fwdpro/pro-os/system/ide-configs/vscode/`

**Customize:**
```json
{
  "fwdpro.enabled": true,
  "fwdpro.contextFiles": [
    ".fwdpro/project/project-kb.md",
    ".fwdpro/roundtable/whiteboards.md"
  ]
}
```

---

## Workflow Customization

### Change Three-Phase Workflow

**Default:** Preparation → Execution → Completion

**Customize:**

```yaml
workflow:
  phases:
    - name: "Discovery"
      focus: "Understanding requirements"
    - name: "Planning"
      focus: "Creating approach"
    - name: "Implementation"
      focus: "Building solution"
    - name: "Validation"
      focus: "Testing and review"
    - name: "Delivery"
      focus: "Documentation and handoff"
```

**5-phase workflow for complex work!**

### Test-Driven Development

**Strict TDD:**

```yaml
workflow:
  tdd:
    enabled: true
    require_tests_first: true   # NEW!
    min_coverage: 80            # NEW!
    
ada_behavior:
  always_write_tests: true
  test_before_implementation: true  # TDD!
  test_frameworks: ["jest", "vitest"]
```

---

## Expert Behavior Customization

### Make Experts More/Less Proactive

```yaml
expert_behavior:
  proactive: true               # Suggest next steps
  proactive_threshold: "major"  # Only for major decisions
  
  # Options: "always", "major", "ask", "never"
  suggest_improvements: "major"
  suggest_refactoring: "ask"
  suggest_features: "never"
```

### Collaboration Style

```yaml
expert_behavior:
  collaborative: true
  
  # How much experts talk to each other
  collaboration_level: "high"  # high, medium, low
  
  # Auto-involve relevant experts
  auto_tag_experts: true
  
  # Example: Denny auto-tags Elle for security
  auto_tagging:
    security: [elle]
    performance: [denny]
    user_experience: [benji]
```

---

## Notification Customization

### Founder Checklist Behavior

```yaml
notifications:
  founder_checklist:
    enabled: true
    priority_threshold: "high"     # Only high-priority items
    group_similar: true            # Group related items
    daily_digest: false            # Real-time updates
```

### Whiteboard Updates

```yaml
notifications:
  whiteboard_updates:
    enabled: true
    frequency: "real-time"  # real-time, hourly, daily
    notify_on:
      - handoffs
      - blockers
      - questions
    # Don't notify on:
    skip:
      - minor_updates
      - status_only
```

---

## Document Format Customization

### Use Different Formats

```yaml
preferences:
  document_format: "notion"  # markdown, notion, gdocs, docx
  
  export_formats:
    technical: "markdown"
    investor: "gdocs"      # Easier for sharing
    marketing: "notion"
    legal: "docx"          # For lawyers
```

---

## Context Loading Optimization

### For Large Projects

```yaml
context:
  auto_load:
    - "project/project-kb.md"
    - "project/mission.md"
    - "roundtable/whiteboards.md"
  
  load_on_demand:
    - "project/people.md"
    - "documents/**"
  
  cache_duration: "1 hour"
  
  # For token efficiency
  summarize_if_larger_than: "10KB"
```

---

## Custom Folder Structure

### Reorganize Folders

```yaml
paths:
  # Default structure
  workspace: "roundtable/workspace"
  documents: "documents"
  
  # Custom structure
  drafts: "work-in-progress"       # Instead of workspace
  finals: "deliverables"           # Instead of documents
  specs: "deliverables/specs"      # Custom subfolder
  pitches: "deliverables/investor" # Custom subfolder
```

**Update paths, FWD PRO adapts!**

---

## Performance Optimization

### For Large Codebases

```yaml
performance:
  # Limit files scanned
  scan_limit: 1000
  
  # Exclude patterns
  scan_exclude:
    - "node_modules/"
    - "build/"
    - "dist/"
    - ".next/"
    - "coverage/"
  
  # Cache expensive operations
  cache_file_analysis: true
  cache_duration: "6 hours"
  
  # Parallel processing
  parallel_analysis: true
  max_workers: 4
```

---

## Team Customization

### Team-Specific Settings

```yaml
team:
  size: 3
  
  members:
    - name: "Ward"
      role: "Founder / Developer"
      expert_access: "all"
      
    - name: "Sarah"
      role: "Designer"
      expert_access: [ada, benji]  # Limited
      
    - name: "John"
      role: "Advisor"
      expert_access: "read-only"
  
  # Permissions
  permissions:
    edit_config: ["Ward"]
    create_experts: ["Ward"]
    update_context: ["Ward", "Sarah"]
```

---

## Advanced: Expert Modification

### Modify Core Expert Behavior

**⚠️ Advanced users only!**

**Location:** `.fwdpro/pro-os/experts/denny-systems-architect.md`

**Example: Add Custom Guidelines**

```markdown
## Custom Guidelines for This Project

### Our Specific Conventions
- Use Supabase RLS for all database access
- JWT tokens expire after 7 days
- All APIs must be versioned (/api/v1/)
- Use React Query for state management
- TypeScript strict mode always

### Our Tech Decisions
- Prefer serverless functions over long-running servers
- Use Expo managed workflow (not bare)
- Store files in Supabase Storage
- Use Stripe for payments

### Our Preferences
- Detailed specs (3-5 pages minimum)
- Include sequence diagrams for complex flows
- Always consider mobile-first
- Security review required for auth/payments
```

**Denny now follows your project's conventions!**

---

## Export/Import Configurations

### Export Your Configuration

```bash
# Export current config
cp .fwdpro/pro-os/config.yaml ~/my-fwdpro-config.yaml

# Export custom experts
cp .fwdpro/pro-os/experts/my-domain-expert.md ~/
```

### Import to New Project

```bash
# In new project, after install
cp ~/my-fwdpro-config.yaml .fwdpro/pro-os/config.yaml
cp ~/my-domain-expert.md .fwdpro/pro-os/experts/

# Update project
@update-onboarding
```

**Reuse your setup across projects!**

---

## Advanced Workflows

### Conditional Workflows

```yaml
workflows:
  - name: "feature-development"
    trigger: "@create-feature"
    conditions:
      if: "work_type == 'building'"
      then: [denny, ada, elle]
      else: [genna]
  
  - name: "hotfix"
    trigger: "@fix critical"
    skip_review: true      # Emergency bypass
    experts: [ada]
    notify: [denny]
```

---

## Troubleshooting Customization

### Validate Configuration

```
@genna validate my configuration

→ Checks config.yaml for errors
→ Suggests improvements
```

### Reset to Defaults

```bash
# Backup your config
cp .fwdpro/pro-os/config.yaml ~/config-backup.yaml

# Reset to defaults
npx @fwdai/pro reset-config

# Restore if needed
cp ~/config-backup.yaml .fwdpro/pro-os/config.yaml
```

---

## Best Practices

### 1. Start with Defaults

Don't customize until you understand the system!

**Timeline:**
- Week 1-2: Use defaults
- Month 1: Minor tweaks
- Month 2+: Custom workflows

### 2. Document Your Changes

```yaml
# config.yaml

# CUSTOM: Changed for our team
communication_style: "d"  # We prefer direct

# CUSTOM: Added for client work
work_types:
  - "client_reporting"  # Added Dec 2024
```

### 3. Version Control Config

```bash
git add .fwdpro/pro-os/config.yaml
git commit -m "Custom FWD PRO config for our team"
```

### 4. Test Changes

After major config changes:

```
@rt-update

→ Verify experts behave as expected
```

### 5. Share with Team

If team uses FWD PRO, document your customizations:

```markdown
# Our FWD PRO Setup

## Custom Work Types
- client_reporting: Benji + Lyna

## Custom Commands
- @weekly-review: Every Friday
- @client-update: Monthly reports

## Custom Experts
- Alex (Client Relations): For client-facing work
```

---

## Examples

### Example 1: Agency Configuration

```yaml
# agency-config.yaml

project:
  type: "agency"
  
team:
  size: 10
  structure: "pods"
  
work_types:
  - "client_work"
  - "internal"
  - "proposals"
  
workflows:
  - name: "client-approval"
    phases:
      - internal_review
      - client_review
      - revisions
      - delivery
```

### Example 2: Enterprise Configuration

```yaml
# enterprise-config.yaml

project:
  compliance_required: true
  
expert_behavior:
  ask_before_major_changes: true
  require_approval: ["security", "architecture"]
  
document_format: "docx"  # Corporate standard

notifications:
  cc_team: true
  slack_integration: true
```

### Example 3: Solo Founder Speed Mode

```yaml
# speed-config.yaml

expert_behavior:
  proactive: "always"
  auto_approve_minor: true
  
workflow:
  skip_unnecessary_reviews: true
  
communication_style: "d"  # Direct, fast
```

---

## Next Steps

**Fix issues:**
→ Read `troubleshooting.md`

**Back to basics:**
→ Read `getting-started.md`

**Master project management:**
→ Read `managing-your-project.md`

---

**Customize FWD PRO to match your workflow - it's your system! ⚙️**

