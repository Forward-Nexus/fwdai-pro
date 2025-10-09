# FWD PRO Workspace Patterns

**Version:** 2.0  
**Purpose:** Simple guide for when to use Simple vs Complex workspace structures

---

## The Two Patterns

FWD PRO workspaces come in two forms:

### 1. Simple Workspace (Most Common)

**ONE workspace file for ONE topic**

**Structure:**
```
roundtable/workspace/user-authentication.md
```

**Use when:**
- Single deliverable (one spec, one feature, one document)
- OR multiple related deliverables for one goal (campaign with video + emails + landing page)
- Work is focused and manageable in one file

**Examples:**
- Password reset feature → Simple workspace
- Kickstarter campaign (video + emails + page) → Simple workspace with multiple deliverables
- Pitch deck → Simple workspace
- Authentication spec → Simple workspace

**The workspace can be LONG** - that's fine! Include everything related to the topic.

---

### 2. Complex Workspace (For Big Systems)

**FOLDER with multiple sub-workspaces**

**Structure:**
```
roundtable/workspace/ai-chat-system/
  ├── _main.md                    (coordination)
  ├── realtime-messaging.md       (feature 1)
  ├── typing-indicators.md        (feature 2)
  └── message-persistence.md      (feature 3)
```

**Use when:**
- Large multi-feature system
- Each piece is substantial enough to need its own workspace
- Features have dependencies between them
- Long-term development spanning multiple sprints

**Examples:**
- AI chat system with multiple features → Complex workspace
- Complete authentication system (login + 2FA + SSO + recovery) → Complex workspace
- E-commerce platform (products + cart + checkout + payments) → Complex workspace

---

## How to Choose

**Start with Simple.**

Most work fits in a Simple workspace. Even campaigns with multiple deliverables (video + emails + landing page for Kickstarter) work fine as ONE workspace.

**Only use Complex when:**
- Each piece is substantial (multiple days of work each)
- Features are independently valuable
- System will grow over time
- Need to track dependencies between features

**If unsure:** Start Simple, can always evolve to Complex later if needed.

---

## Simple Workspace - Multiple Deliverables Example

**Kickstarter Campaign Workspace:**

```markdown
# Kickstarter Campaign - Workspace

**Deliverables:**
- Video script ✅ Complete
- Visuals 🔄 In Progress  
- Landing page copy 🔄 In Progress
- Email sequence ⏸️ Not Started

[Rest of workspace tracks all deliverables in one place]
```

**Why Simple works here:** 
- All deliverables serve ONE goal (launch Kickstarter)
- Coordinated timeline
- One workspace keeps everything together

---

## Complex Workspace - System Example

**AI Chat System (Main Workspace):**

```markdown
# AI Chat System - Main Workspace

**Features:**
- Real-time messaging → [workspace](realtime-messaging.md) 🔄
- Typing indicators → [workspace](typing-indicators.md) ⏸️
- Message persistence → [workspace](message-persistence.md) ✅

[Tracks system-level coordination]
```

**Sub-workspace (realtime-messaging.md):**
```markdown
# Real-time Messaging - Workspace

**Part of:** AI Chat System
**Deliverable:** [Spec](../../documents/tech/specs/realtime-messaging/spec.md)

[Tracks this specific feature in detail]
```

**Why Complex works here:**
- Each feature is substantial (multiple days each)
- Features can be built independently
- System grows over time
- Need to track dependencies

---

## Key Principles

1. **ONE workspace per topic** - Don't fragment related work
2. **Simple by default** - Most work fits in one file
3. **Complex when substantial** - Only for large systems
4. **Can evolve** - Start Simple, convert to Complex if needed
5. **Workspaces can be LONG** - That's the point! Full context preserved

---

## Integration with Existing Template

**We already have a great workspace template:**
- `pro-os/templates/roundtable/workspace/workspace-template.md`

**This pattern guide just helps AI decide:**
- Use template as-is for Simple workspace
- Use template for EACH workspace in Complex pattern

---

## Version History

**v2.0** - October 9, 2025
- Simplified from three patterns to two (Simple vs Complex)
- Campaign is now an example of Simple (not a separate pattern)
- Clearer decision criteria
- Removed redundant documentation

---

*Simple by default. Complex when needed. Let the work dictate the structure.*
