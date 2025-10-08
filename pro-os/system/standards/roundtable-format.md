# Roundtable Update Format

**Purpose:** Standard format for updating `0-ROUNDTABLE.md` - our central collaboration space.

---

## Why We Update Roundtable

The Roundtable is where:
- Experts share progress and updates
- Decisions get documented
- Work gets handed off between experts
- Founder stays informed
- Team collaborates transparently

**Always update Roundtable when you complete significant work!**

---

## Standard Update Format

```markdown
### [Date] - [Expert]: [Achievement/Update] [emoji]

[2-3 sentence summary of what was done and why it matters]

**[Section heading - customize based on what you did]:**
- [Key point 1]
- [Key point 2]
- [Key point 3]

**[Another section if needed]:**
- [Detail]
- [Detail]

**Deliverable(s):**
- `roundtable/workspace/[filename]` - [Description]

**Next steps:**
- **founder:** [What founder should do - review? approve? test?]
- **[other expert]:** [If handing to another expert or needing their input]

**Status:** [Ready for review / In progress / Blocked / Complete] [emoji]
```

---

## Examples by Update Type

### When You Create Something:

```markdown
### 2025-10-06 - Denny: Created Authentication Spec 🔧

Designed a complete authentication system with email/password + biometric options. 
Focused on security while keeping UX simple.

**What I designed:**
- Supabase Auth for backend (scales well, handles JWT elegantly)
- Biometric via Expo Local Auth
- Smart offline handling (cached sessions + graceful degradation)
- Recovery-informed error messages

**Key decisions:**
1. **Biometric after first login** - Don't overwhelm new users
2. **Encrypted credential storage** - Security first, seamless UX
3. **Offline-friendly** - Cache auth state, handle token expiry gracefully

**Deliverable:**
- `roundtable/workspace/denny/handoffs/auth-spec.yaml` - Complete technical spec

**Next steps:**
- **founder:** Review the biometric flow - does "after first login" feel right?
- **ada:** Ready for you to implement once approved!

**Status:** Ready for review 🚀
```

### When You Execute/Build Something:

```markdown
### 2025-10-07 - Ada: Implemented Authentication Feature 🎉

Built the complete auth system from Denny's spec. Email/password + biometric login both working smoothly!

**What I built:**
- Login/signup flows with validation
- Biometric setup after first successful login
- Offline session persistence
- Recovery-informed error messaging ("Let's try that again ❤️")

**Testing done:**
✅ All acceptance criteria met
✅ Login flow works perfectly
✅ Biometric works on iOS/Android
✅ Offline handling tested
✅ Error messages verified

**Files created/modified:**
- `app/(auth)/login.tsx` - Login screen
- `components/auth/LoginForm.tsx` - Reusable form component
- `lib/auth.ts` - Auth logic and state management

**Next steps:**
- **founder:** Test it out! Here's how to try biometric setup
- **denny:** Would love your technical review when you have time

**Status:** Complete and ready for testing! 🎉
```

### When You Analyze Something:

```markdown
### 2025-10-08 - Genna: Analyzed Product Positioning 🔍

Deep dive on our positioning vs competitors. Found some interesting opportunities!

**Key findings:**
- Competitor A focuses on enterprise (leaving SMB open)
- Competitor B has complex onboarding (our simplicity is differentiator)
- Market gap: No one combines [X] with [Y]

**Opportunities:**
1. **Own the "simple" narrative** - Competitors are feature-bloated
2. **Target underserved SMBs** - Better fit, faster sales
3. **Unique combo**: [X] + [Y] = our moat

**Risks:**
- Enterprise has bigger contracts (but longer sales)
- SMB churn could be higher (need strong retention)

**Deliverable:**
- `roundtable/workspace/genna/handoffs/positioning-analysis.md` - Full analysis

**Next steps:**
- **founder:** Let's discuss positioning strategy - which opportunity resonates?
- **lyna:** This impacts our marketing messaging - let's coordinate

**Status:** Ready for strategic discussion 🎯
```

### When You Hit a Blocker:

```markdown
### 2025-10-09 - Ada: Blocker on Payment Integration ⚠️

Hit a technical blocker on the payment system. Need help to move forward.

**What I'm blocked on:**
Stripe webhooks aren't firing in development environment

**What I've tried:**
- Checked webhook configuration (looks correct)
- Verified endpoint is accessible (it is)
- Reviewed Stripe dashboard logs (no events showing)

**What I need:**
- Stripe test account credentials (to verify webhook setup)
- OR: Guidance on local webhook testing (Stripe CLI?)

**Impact:**
Can't test payment flow without webhooks working. Blocking "paid plan" feature.

**What I'm doing meanwhile:**
Working on analytics dashboard (not blocked)

**Status:** Blocked - need input to proceed ⚠️
```

### When You Collaborate:

```markdown
### 2025-10-10 - Lyna: Pitch Deck Draft (Collaboration Needed) 🤝

Created first draft of investor pitch deck. Need input from team!

**What I created:**
10-slide deck covering: problem, solution, market, traction, team, ask

**What's working:**
- Strong problem/solution narrative
- Compelling market opportunity
- Clear ask ($500K seed)

**Where I need help:**
- **@genna:** Product vision slide - is this framing accurate?
- **@denny:** Technical approach slide - did I explain it correctly?
- **@benji:** Traction metrics - can you provide latest numbers?

**Deliverable:**
- `roundtable/workspace/lyna/handoffs/investor-deck-draft.md` - Current draft

**Next steps:**
- **founder:** Review overall narrative and messaging
- **team:** Provide input on your respective areas

**Status:** Draft complete, need team input 🤝
```

---

## Section Headings to Use

Customize based on what you did, but here are good options:

**For creating:**
- What I created
- What I designed
- Key features
- Key decisions
- Technical approach

**For executing:**
- What I built
- What I implemented
- Testing done
- Files created/modified
- How it works

**For analyzing:**
- Key findings
- Insights
- Opportunities
- Risks
- Recommendations

**For researching:**
- What I found
- Key insights
- Options evaluated
- Recommendation

**For problem-solving:**
- The issue
- Root cause
- The fix
- Testing/validation
- Prevention

**For collaboration:**
- What I created
- What's working
- Where I need help
- Who I need input from

---

## Emojis for Status

Use these to make status scannable:

- 🎨 Creating/designing
- 💻 Coding/implementing
- 🔍 Analyzing/researching
- 🤝 Collaborating
- 📋 Planning
- 🔧 Fixing/debugging
- 🔄 Updating/iterating
- ✅ Complete
- 🚀 Ready for review/launch
- ⚠️ Blocked/issue
- 🎉 Shipped/launched
- 💡 Idea/brainstorm
- 📊 Metrics/results

---

## Best Practices

### ✅ DO:
- **Update regularly** - Don't go silent for days
- **Be specific** - Clear what you did and why
- **Include files/links** - Make it easy to find your work
- **Tag relevant people** - Use @name when needing input
- **Explain decisions** - Why you chose approach X
- **Create tasks** - Tell founder what they need to do

### ❌ DON'T:
- **Don't be vague** - "Working on stuff" isn't helpful
- **Don't skip updates** - If it took significant time, document it
- **Don't forget deliverables** - Always link to your work
- **Don't leave founder hanging** - Always include next steps
- **Don't use third person** - Speak as yourself (see expert-voice-guidelines.md)

---

## Update Frequency

**Update when:**
- You complete something significant
- You hit a milestone
- You discover something important
- You need input or collaboration
- You're blocked
- You make a key decision
- It's been more than a day of work

**Don't need to update for:**
- Tiny bug fixes
- Minor tweaks
- Exploratory work that didn't pan out
- Reading/research (unless findings are significant)

---

**Remember:** The Roundtable is our team's shared consciousness. Keep it updated, keep it clear, keep everyone informed! 🤝

