# Understanding the FWD PRO System

**Learn how the Roundtable model works and where everything lives**

---

## The Roundtable Concept

FWD PRO is built on the **Roundtable model** - experts collaborate like a real team.

### Traditional AI:
```
You → Single AI → Output

Problems:
- Jack of all trades, master of none
- No specialization
- No collaboration
- Starts from scratch each time
```

### FWD PRO Roundtable:
```
You → Team of Experts → Collaborative Output

Benefits:
✅ Specialized experts
✅ They collaborate with each other
✅ Persistent knowledge
✅ Clean handoffs between experts
✅ Cross-project awareness
```

---

## How the Roundtable Works

### 1. You Make a Request

```
@create-feature user authentication
```

### 2. Experts Activate

**Genna (Chief Architect)** sees the request:
> "Authentication feature - this is architecture + implementation. I'll route to Denny for spec, then Ada for code."

### 3. Denny Creates Spec

**Denny (Systems Architect)** asks questions:
> "What type of auth? JWT? OAuth? Session-based?"

You answer, Denny creates technical spec in `workspace/`

### 4. Experts Review

**On the whiteboards:**

**Genna:** "Spec looks good. Ada, ready to implement?"

**Ada:** "I can start Monday. Will need 3 days."

**Elle:** "Make sure we're GDPR compliant on password storage."

**Denny:** "Good catch Elle, I'll add that to the spec."

### 5. Ada Implements

**Ada (Lead Engineer)** builds the feature:
- References Denny's spec
- Writes clean code
- Adds tests
- Documents as she goes

### 6. Handoff for Review

**Ada on her whiteboard:**
> "Authentication complete. @denny please review for architecture compliance. @elle please verify GDPR requirements met."

### 7. Final Deliverable

Clean code goes to your codebase.  
Clean spec goes to `documents/technical/auth-spec.md`.  
All the collaboration notes stay in `roundtable/`.

---

## The Three Zones

FWD PRO organizes work into three zones:

### Zone 1: Roundtable (Collaboration)

**Location:** `.fwdpro/roundtable/`

**Purpose:** Where experts collaborate

**Contains:**
- `whiteboards.md` - Expert notes, handoffs, blockers
- `workspace/` - Work-in-progress files
- `founder-checklist.md` - Your action items

**Think of it as:** A conference room with whiteboards

**Characteristics:**
- ❌ Messy (that's okay!)
- ❌ Drafts and iterations
- ✅ Real collaboration
- ✅ You can see expert thinking
- ✅ Handoffs and reviews visible

### Zone 2: Documents (Final Outputs)

**Location:** `.fwdpro/documents/`

**Purpose:** Clean, shareable deliverables

**Contains:**
- `technical/` - Specs, architecture docs
- `investor/` - Pitch decks, financial models
- `marketing/` - Content, campaigns
- `legal/` - Contracts, policies
- `planning/` - Roadmaps, strategies

**Think of it as:** Polished presentations

**Characteristics:**
- ✅ Clean and professional
- ✅ Ready to share
- ✅ No AI clutter
- ✅ Organized by type

### Zone 3: Pro-OS (System Core)

**Location:** `.fwdpro/pro-os/`

**Purpose:** FWD PRO system files

**Contains:**
- `experts/` - Expert definitions
- `commands/` - Command templates
- `system/` - Core system files
- `config.yaml` - Configuration

**Think of it as:** The operating system

**Characteristics:**
- ⚠️ Don't edit directly
- ⚠️ System updates might overwrite
- ✅ Read for reference
- ✅ Copy templates to customize

---

## File Structure Explained

```
your-project/
├── .fwdpro/                    FWD PRO system
│   │
│   ├── pro-os/                 SYSTEM CORE
│   │   ├── agents/             Expert definitions
│   │   │   ├── genna-architect.md
│   │   │   ├── denny-systems-architect.md
│   │   │   ├── ada-implementation.md
│   │   │   ├── lyna-external-strategy.md
│   │   │   ├── benji-internal-growth.md
│   │   │   ├── elle-legal.md
│   │   │   └── [your-domain-expert].md
│   │   │
│   │   ├── commands/           Command templates
│   │   │   ├── create.md       Universal commands
│   │   │   ├── execute.md
│   │   │   ├── analyze.md
│   │   │   ├── quick/          Optimized workflows
│   │   │   │   ├── create-spec.md
│   │   │   │   ├── create-feature.md
│   │   │   │   └── rt.md
│   │   │   └── system/         System management
│   │   │       ├── update-project.md
│   │   │       ├── show-projects.md
│   │   │       └── update-onboarding.md
│   │   │
│   │   ├── system/             System files
│   │   │   ├── templates/      File templates
│   │   │   └── ide-configs/    IDE integrations
│   │   │
│   │   └── config.yaml         System configuration
│   │
│   ├── your-experts/            YOUR FAVORITES (shortcuts)
│   │   ├── README.md
│   │   ├── genna.md → ../pro-os/experts/genna-architect.md
│   │   ├── denny.md → ../pro-os/experts/denny-systems-architect.md
│   │   └── ...                 (symlinks to active experts)
│   │
│   ├── your-commands/          YOUR FAVORITES (shortcuts)
│   │   ├── README.md
│   │   ├── update-project.md → ../pro-os/commands/system/update-project.md
│   │   ├── create-spec.md → ../pro-os/commands/quick/create-spec.md
│   │   └── ...                 (symlinks to useful commands)
│   │
│   ├── project/                PROJECT CONTEXT
│   │   ├── project-kb.md       Project knowledge base
│   │   ├── founder-profile.md  Link to global profile
│   │   ├── mission.md          Your "why"
│   │   └── people.md           Team, advisors, investors
│   │
│   ├── roundtable/             COLLABORATION ZONE
│   │   ├── whiteboards.md      Expert collaboration dashboard
│   │   ├── founder-checklist.md Your action items
│   │   └── workspace/          Work-in-progress
│   │       ├── [draft-files]
│   │       └── archive/        Completed work
│   │
│   └── documents/              FINAL OUTPUTS
│       ├── technical/          Specs, architecture
│       ├── investor/           Pitch decks, financials
│       ├── marketing/          Content, campaigns
│       ├── legal/              Contracts, policies
│       └── planning/           Roadmaps, strategies
│
└── ~/.fwdpro-global/           GLOBAL PROFILE (outside project)
    ├── [name]-profile.md       Your personal profile
    └── projects.md             All your FWD PRO projects
```

---

## How Information Flows

### 1. You Tag an Expert

```
@denny create auth spec
```

### 2. Expert Reads Context

Denny automatically reads:
- `project/project-kb.md` - What this project is
- `project/mission.md` - Why you're building it
- `roundtable/whiteboards.md` - Current work
- `~/.fwdpro-global/[name]-profile.md` - How you like to work

### 3. Expert Works

Denny creates `workspace/auth-spec-draft.md`

Updates his whiteboard:
```markdown
## 🏗️ Denny's Architecture Whiteboard

**Current Focus:**
- Authentication specification

**Active Workspaces:**
- auth-spec-draft.md (In Progress)

**Questions for Ward:**
- JWT or session-based?
- Social login needed?

**Handoffs:**
- [ ] Will hand to Ada for implementation once approved
```

### 4. You Review & Approve

You check `workspace/auth-spec-draft.md`, give feedback.

Denny revises based on your input.

### 5. Expert Finalizes

Denny moves spec to `documents/technical/auth-spec.md`

Updates his whiteboard:
```markdown
**Completed:**
- ✅ auth-spec.md (Ready for Ada)

**Handoffs:**
- [ ] @ada please implement this spec
```

### 6. Next Expert Picks Up

Ada sees the handoff on whiteboards:
```markdown
## 💻 Ada's Implementation Board

**Incoming:**
- [ ] Authentication (from Denny)

**Status:** Starting implementation
```

### 7. Cycle Continues

Ada implements → Denny reviews → Clean code delivered.

---

## The Whiteboards

Think of `whiteboards.md` as a **shared workspace** where experts:
- Post updates
- Request handoffs
- Note blockers
- Ask questions
- Coordinate work

### Example Whiteboards Structure:

```markdown
# FWD PRO Roundtable - ODAT

Last updated: Oct 6, 2024 4:30pm

---

## 🎯 Genna's Strategic Whiteboard

**Current Focus:** Q4 2024 roadmap

**Active Decisions:**
- Authentication architecture (waiting on Denny's spec)
- Fundraising timeline (working with Lyna)

**Notes:**
- Ward wants 10K users by Q1 2026
- Need to balance product dev with fundraising

**Handoffs:**
- [ ] Lyna: When should we start fundraising conversations?

---

## 🏗️ Denny's Architecture Whiteboard

**Current Focus:** Authentication specification

**Active Workspaces:**
- auth-spec-draft.md (Rev 2, awaiting Ward approval)

**Technical Decisions:**
- JWT with 7-day refresh tokens
- Social login: Google + Apple
- HIPAA-compliant password storage

**Handoffs:**
- [ ] Ada: Ready for implementation once Ward approves
- [ ] Elle: Please review HIPAA compliance

**Blockers:** None

---

## 💻 Ada's Implementation Board

**Current Status:** Waiting for auth spec approval

**Queue:**
1. Authentication system (from Denny)
2. User profile updates
3. Push notifications

**Notes:**
- Can start auth Monday if spec approved by EOD Friday

---

## 📊 Lyna's External Strategy

**Current Focus:** Pitch deck preparation

**Research:**
- Recovery/mental health funding landscape
- Comparable exits (BetterHelp, Headspace)
- Ward's traction story (1,200 users is solid!)

**Questions for Ward:**
- [ ] User retention metrics?
- [ ] Monthly active users vs. total?
- [ ] Revenue model decided?

**Next Steps:**
- Create pitch deck draft once I have metrics

---

## 🎯 Bonnie Jo's Recovery Expertise

**Current Focus:** Clinical review of LiNa's language

**Notes:**
- LiNa's tone is good - supportive without being preachy
- "One day at a time" messaging is on point
- Suggest adding more sobriety date celebration

**Recommendations for Ward:**
- [ ] Consider adding "90-day milestone" special feature
- [ ] Review trigger warning placement

---

## 📋 Open Items

1. **Authentication spec** (Denny → Ward → Ada)
2. **Pitch deck metrics** (Ward → Lyna)
3. **HIPAA review** (Denny → Elle)
4. **LiNa language review** (Bonnie Jo → Ward)

---

## 🔥 Blockers

None currently!

---

## ⭐ Recent Wins

- ✅ User profiles feature shipped (Ada)
- ✅ Roadmap Q4 finalized (Genna)
- ✅ App Store optimization complete (Benji)
```

**This is your team's central dashboard!**

---

## The Founder Checklist

`founder-checklist.md` is where experts add items that need **your** input.

### Example:

```markdown
# Ward's Action Items

## 🔥 High Priority

- [ ] **Approve auth spec** (from Denny)
  - Location: workspace/auth-spec-draft.md
  - Needed by: EOD Friday so Ada can start Monday

- [ ] **Provide user metrics** (for Lyna)
  - Monthly active users
  - Retention rate
  - Needed by: This week for pitch deck

## 📋 Regular Priority

- [ ] **Review LiNa language** (from Bonnie Jo)
  - Location: workspace/lina-language-review.md
  - When you have time

- [ ] **Test new user profiles** (from Ada)
  - Deployed to staging
  - Please test on your phone

## 💡 For Later

- [ ] **Consider 90-day milestone feature** (Bonnie Jo's suggestion)
- [ ] **Think about which VCs to approach** (Lyna)
- [ ] **Review competitor apps** (Benji)

---

**Last updated:** Oct 6, 2024 4:30pm
```

**Experts manage this FOR you - they know what you need to see!**

---

## Communication Between Experts

Experts can "talk" to each other on the whiteboards:

**Denny:**
> "@ada FYI - this auth spec includes social login. Will need OAuth libraries."

**Ada:**
> "@denny Got it. I'll add expo-auth-session to dependencies."

**Elle:**
> "@denny Just reviewed the auth spec. HIPAA looks good, but add password complexity requirements to match NIST guidelines."

**Denny:**
> "@elle Added! Rev 3 ready. Thanks for the catch."

**This collaboration happens IN THE CONTEXT, visible to you!**

---

## Workspace vs. Documents

### Workspace (Drafts)

**Location:** `roundtable/workspace/`

**Contents:**
- First drafts
- Iterations
- Work-in-progress
- Review versions

**Example:**
```
workspace/
├── auth-spec-draft.md          (Denny working)
├── pitch-deck-outline-v1.md    (Lyna iterating)
├── lina-language-review.md     (Bonnie Jo notes)
└── archive/
    └── old-roadmap-draft.md    (Completed, archived)
```

**Characteristics:**
- Messy is okay!
- Multiple versions
- Expert notes and comments
- Gets archived when done

### Documents (Finals)

**Location:** `documents/`

**Contents:**
- Approved deliverables
- Clean, polished
- Ready to share
- Organized by category

**Example:**
```
documents/
├── technical/
│   ├── auth-spec.md            (Final, from Denny)
│   └── architecture.md
├── investor/
│   ├── pitch-deck.md           (Final, from Lyna)
│   └── financial-model.md
└── planning/
    └── roadmap-q4-2024.md      (Final, from Genna)
```

**Characteristics:**
- Clean and professional
- Single source of truth
- No AI clutter
- Share with team/investors

---

## How Context Persists

### Project Knowledge Base

`project/project-kb.md` stores:
- What this project is
- Current stage
- Goals
- Tech stack
- Challenges

**Updated with:** `@update-project`

### Mission

`project/mission.md` stores:
- Why you're building this
- Your personal story
- Vision
- Success metrics

**Updated with:** `@update-mission`

### People

`project/people.md` stores:
- Team members
- Advisors
- Investors
- Key customers

**Updated with:** `@update-people`

### Global Profile

`~/.fwdpro-global/[name]-profile.md` stores:
- Your personal info
- Communication style
- Working preferences
- Applies to ALL projects

**Updated with:** `@update-founder-profile`

---

## Cross-Project Awareness

Experts can see ALL your FWD PRO projects!

**Example:**
```
You're in: odat-app/
Working on: Authentication

@denny create auth spec

Denny:
Hey! I see you built authentication in your telecom-tool project.
That was JWT with 7-day refresh tokens, right?

Want to use a similar approach here? Or different requirements
for ODAT since it's healthcare/HIPAA?
```

**Denny knows about your other project!**

**How:** Experts read `~/.fwdpro-global/projects.md`

**See:** `multi-project-usage.md` for more

---

## System Updates

FWD PRO updates automatically when you run:

```bash
npx @fwd-ai/pro update
```

**What gets updated:**
- ✅ Expert definitions
- ✅ Command templates
- ✅ System files

**What stays unchanged:**
- ✅ Your project context
- ✅ Your work in roundtable/
- ✅ Your documents/
- ✅ Your configuration

---

## Key Principles

**1. Separation of Concerns**
- Workspace = Messy collaboration
- Documents = Clean outputs

**2. Persistent Context**
- Project knowledge survives sessions
- Experts remember your project

**3. Expert Specialization**
- Each expert has a role
- They collaborate with each other

**4. Transparent Collaboration**
- You can see expert thinking
- Handoffs are explicit
- Nothing hidden

**5. Clean Deliverables**
- Final work is professional
- No AI clutter
- Ready to share

---

## Next Steps

**Learn the experts:**
→ Read `working-with-experts.md`

**Try workflows:**
→ Read `common-workflows.md`

**Explore commands:**
→ Read `commands-guide.md`

**Dive deeper:**
→ Read `file-structure.md` for complete file reference

---

**Now you understand how FWD PRO works! 🎯**

