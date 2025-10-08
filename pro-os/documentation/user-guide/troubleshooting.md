# Troubleshooting Guide

**Solutions to common issues with FWD PRO**

---

## Quick Fixes

### Issue: Expert Seems Confused

**Symptoms:**
- Wrong expert responding
- Expert doesn't understand context
- Repeating old information

**Solutions:**

**1. Start Fresh:**
```
@newthread

→ Clears conversation context
→ Project files remain intact
```

**2. Update Context:**
```
@update-project

→ Refreshes all project info
→ Expert gets current state
```

**3. Correct Directly:**
```
@genna FYI - we changed tech stack last week to Next.js
```

---

### Issue: Command Not Working

**Symptoms:**
- `@command` doesn't trigger
- Wrong expert responds
- Nothing happens

**Solutions:**

**1. Check Command Name:**
```
# Wrong
@spec

# Right
@create-spec
```

**2. Give More Context:**
```
# Vague
@create spec

# Better
@create-spec authentication for mobile app
```

**3. Tag Expert Directly:**
```
@denny create an authentication spec
```

---

### Issue: Experts Disagree

**Symptoms:**
- Denny and Ada suggest different approaches
- Conflicting recommendations
- Unclear which to follow

**Solutions:**

**1. Ask Genna to Mediate:**
```
@genna @denny and @ada have different opinions on this. Can you decide?
```

**2. Get More Perspectives:**
```
@rt what's the best approach here?

→ All experts weigh in
→ Genna synthesizes
```

**3. Make Executive Decision:**
```
Thanks for the input. Let's go with Denny's approach.
```

---

## Installation Issues

### Issue: Installation Fails

**Error:** `npx @fwd-ai/pro install` fails

**Solutions:**

**1. Check Node Version:**
```bash
node --version
# Need 16+
```

**2. Clear NPM Cache:**
```bash
npm cache clean --force
npx @fwd-ai/pro install
```

**3. Check Permissions:**
```bash
# Make sure you can write to directory
ls -la
```

---

### Issue: Onboarding Crashes

**Error:** Onboarding wizard exits unexpectedly

**Solutions:**

**1. Restart Onboarding:**
```bash
npx @fwd-ai/pro install --reset
```

**2. Skip Auto-Scan:**
```bash
npx @fwd-ai/pro install --no-scan

→ Manual answers only
```

**3. Check Project Files:**
```bash
# Ensure these exist and are readable
cat package.json
cat README.md
```

---

## Context Issues

### Issue: Old Information

**Symptoms:**
- Experts reference outdated facts
- Don't know about recent changes
- Using old tech stack

**Solutions:**

**1. Update Project:**
```
@update-project

→ Scans for changes
→ Updates context files
```

**2. Check Last Update:**
```bash
ls -la .fwdpro/project/project-kb.md

# If old, update manually or via command
```

**3. Manual Correction:**
```bash
vim .fwdpro/project/project-kb.md

# Edit directly
# Experts see changes immediately
```

---

### Issue: Experts Don't Know About Team

**Symptoms:**
- Don't reference team members
- Suggest you do everything
- Don't know about advisors

**Solution:**

```
@update-people

→ Add team, advisors, investors
→ Experts can now reference them
```

---

### Issue: Context Drift

**Symptoms:**
- Experts gradually get more confused
- Recommendations become generic
- Lost track of project goals

**Solution:**

**Set Regular Updates:**
```bash
# Weekly
@rt-update  (every Monday)

# Monthly
@update-project

# Quarterly
@update-mission
@update-people
@update-founder-profile
```

---

## Expert Behavior Issues

### Issue: Expert Too Verbose

**Symptoms:**
- Long rambling responses
- Too much explanation
- Overwhelming detail

**Solutions:**

**1. Change Communication Style:**
```
@update-founder-profile

→ Choose "Direct/no-fluff" (d)
```

**2. Request Summaries:**
```
@denny can you give me the TL;DR version?
```

**3. Set Preference:**
```
@genna please be more concise going forward
```

---

### Issue: Expert Not Proactive Enough

**Symptoms:**
- Only answers direct questions
- Doesn't suggest next steps
- Passive responses

**Solutions:**

**1. Ask for Recommendations:**
```
@denny what should we do next?
@genna what are the next priorities?
```

**2. Enable Proactive Mode:**
```yaml
# In config.yaml
expert_behavior:
  proactive: true
  suggest_next_steps: true
```

---

### Issue: Wrong Expert Responding

**Symptoms:**
- Asked Denny, Ada responds
- Unclear who should handle what

**Solutions:**

**1. Tag Specific Expert:**
```
@denny (not Ada) - create the spec
```

**2. Clarify Roles:**
```
@genna who should handle this - Denny or Ada?
```

**3. Direct Handoff:**
```
@ada this is actually for Denny
@denny please take this one
```

---

## File & Folder Issues

### Issue: Can't Find Files

**Symptoms:**
- Looking for deliverables
- Don't know where things are
- Folder structure unclear

**Solutions:**

**1. Check Standard Locations:**
```
documents/         ← Final deliverables
roundtable/        ← Collaboration space
project/           ← Project context
```

**2. Search:**
```bash
find .fwdpro -name "*spec*"
find .fwdpro -name "*pitch*"
```

**3. Ask Expert:**
```
@genna where did Denny save the auth spec?
```

---

### Issue: Files Not Updating

**Symptoms:**
- Expert said they updated a file
- File looks the same
- Changes not visible

**Solutions:**

**1. Check Correct Location:**
```bash
# Draft might be in workspace
ls .fwdpro/roundtable/workspace/

# Final should be in documents
ls .fwdpro/documents/technical/
```

**2. Refresh/Reopen File:**
```bash
# Close and reopen in editor
```

**3. Check Git Status:**
```bash
git status .fwdpro/
git diff .fwdpro/
```

---

### Issue: Workspace Too Messy

**Symptoms:**
- Too many draft files
- Can't find current work
- Cluttered workspace

**Solution:**

**Clean Up:**
```bash
# Move old drafts to archive
mv .fwdpro/roundtable/workspace/old*.md \
   .fwdpro/roundtable/workspace/archive/
```

**Ask Expert:**
```
@genna please clean up the workspace

→ Genna archives completed work
→ Keeps only active drafts
```

---

## Workflow Issues

### Issue: Work Stuck in Draft

**Symptoms:**
- Spec in workspace, never finalized
- Expert keeps iterating
- Never moves to documents

**Solutions:**

**1. Ask for Completion:**
```
@denny is the auth spec done? Can you finalize it?
```

**2. Approve Draft:**
```
@denny the draft looks good, please move it to documents/
```

**3. Manual Move:**
```bash
mv .fwdpro/roundtable/workspace/auth-spec-draft.md \
   .fwdpro/documents/technical/auth-spec.md
```

---

### Issue: Handoff Not Happening

**Symptoms:**
- Denny finished spec, Ada not starting
- Work sitting on whiteboard
- No progress

**Solutions:**

**1. Check Whiteboards:**
```bash
cat .fwdpro/roundtable/whiteboards.md

# Look for handoff section
```

**2. Explicit Handoff:**
```
@denny please hand off to Ada
@ada please pick up the auth spec from Denny
```

**3. Check Checklist:**
```bash
cat .fwdpro/roundtable/[your-name]-checklist.md

# Might be waiting for your approval
```

---

### Issue: Experts Not Collaborating

**Symptoms:**
- Experts work in isolation
- No cross-expert discussion
- Missing handoffs

**Solutions:**

**1. Enable Collaboration:**
```yaml
# In config.yaml
expert_behavior:
  collaborative: true
  auto_tag_experts: true
```

**2. Explicitly Tag Multiple:**
```
@denny @ada let's discuss this together
```

**3. Use Roundtable:**
```
@rt everyone review this approach
```

---

## Command Issues

### Issue: Custom Command Not Working

**Symptoms:**
- Created custom command
- `@my-command` does nothing

**Solutions:**

**1. Check File Location:**
```bash
ls .fwdpro/pro-os/commands/quick/my-command.md

# Should exist
```

**2. Check File Format:**
```markdown
# Needs this header
# @my-command

**Purpose:** ...
**Expert:** ...
**Workflow:** ...
```

**3. Try Full Path:**
```
@genna execute the workflow in pro-os/commands/quick/my-command.md
```

---

### Issue: @rt Taking Too Long

**Symptoms:**
- Roundtable review never completes
- Waiting forever
- No response

**Solutions:**

**1. Tag Specific Experts:**
```
# Instead of @rt (all experts)
@denny @ada review this spec

# Faster with fewer experts
```

**2. Check What You're Asking:**
```
# Too vague
@rt thoughts?

# More specific
@rt is this architecture sound?
```

**3. Start Fresh:**
```
@newthread
@rt review this specific thing: [clear description]
```

---

## Git & Version Control

### Issue: Merge Conflicts in .fwdpro/

**Symptoms:**
- Git merge conflicts
- Files in .fwdpro/ conflicting

**Solutions:**

**1. Keep Your Version:**
```bash
# If working alone
git checkout --ours .fwdpro/project/project-kb.md
```

**2. Merge Manually:**
```bash
# Open file
vim .fwdpro/project/project-kb.md

# Resolve conflicts
# Run update
@update-project
```

**3. Reset if Needed:**
```bash
git checkout HEAD .fwdpro/roundtable/workspace/
# Workspace can be reset safely
```

---

### Issue: Too Many Changes to Commit

**Symptoms:**
- `git status` shows tons of files
- Workspace files changing constantly

**Solution:**

**Check .gitignore:**
```bash
cat .fwdpro/.gitignore

# Should exclude:
roundtable/workspace/*
your-experts/*
your-commands/*
```

**Update .gitignore if needed:**
```bash
echo "roundtable/workspace/*" >> .fwdpro/.gitignore
```

---

## Performance Issues

### Issue: Slow Responses

**Symptoms:**
- Experts take long to respond
- Commands hang
- System feels sluggish

**Solutions:**

**1. Reduce Context:**
```yaml
# In config.yaml
context:
  summarize_if_larger_than: "5KB"  # Smaller threshold
```

**2. Clear Workspace:**
```bash
# Archive old drafts
mv .fwdpro/roundtable/workspace/*.md \
   .fwdpro/roundtable/workspace/archive/
```

**3. Restart AI Tool:**
```
# Close and reopen Cursor/Claude/etc
```

---

### Issue: Out of Memory

**Symptoms:**
- AI tool crashes
- "Context too large" errors

**Solutions:**

**1. Use @newthread:**
```
@newthread

→ Clears conversation memory
```

**2. Reduce Auto-Load:**
```yaml
# In config.yaml
context:
  auto_load:
    - "project/project-kb.md"  # Only essential
```

**3. Summarize Large Files:**
```
@genna summarize the current project state

→ Get summary instead of loading everything
```

---

## Multi-Project Issues

### Issue: Wrong Project Context

**Symptoms:**
- Working in Project A
- Experts reference Project B

**Solutions:**

**1. Clear Context:**
```
@newthread
@genna I'm working on [Project A] now
```

**2. Check Project:**
```bash
pwd
# Make sure you're in right directory
```

**3. Update Context:**
```
@update-project

→ Refresh current project context
```

---

### Issue: Global Profile Wrong

**Symptoms:**
- Communication style wrong
- Preferences not working

**Solutions:**

**1. Check Global Profile:**
```bash
cat ~/.fwdpro-global/[name]-profile.md
```

**2. Update It:**
```
@update-founder-profile

→ Updates global settings
```

**3. Per-Project Override:**
```yaml
# In config.yaml
founder:
  global_override: true
  communication_style: "d"  # Override for this project
```

---

## Recovery & Reset

### Issue: System Totally Broken

**Nuclear Option:**

**1. Backup Important Files:**
```bash
cp -r .fwdpro/documents ~/fwdpro-backup/
cp -r .fwdpro/project ~/fwdpro-backup/
```

**2. Reinstall:**
```bash
rm -rf .fwdpro/
npx @fwd-ai/pro install
```

**3. Restore Data:**
```bash
cp -r ~/fwdpro-backup/documents .fwdpro/
cp -r ~/fwdpro-backup/project .fwdpro/
```

---

### Issue: Want to Start Over

**Clean Slate:**

**1. Export What You Want:**
```bash
cp -r .fwdpro/documents ~/keep-these/
```

**2. Uninstall:**
```bash
rm -rf .fwdpro/
```

**3. Reinstall Fresh:**
```bash
npx @fwd-ai/pro install
```

---

## Getting Help

### Ask Genna

```
@genna I'm having trouble with [issue]
```

Genna can often debug FWD PRO itself!

### Check Documentation

```bash
ls .fwdpro/pro-os/documentation/user-guide/

# Read relevant guide
```

### Search Issues

```bash
# Search workspace for similar issues
grep -r "similar problem" .fwdpro/roundtable/
```

### Community (Future)

**Once available:**
- FWD PRO Discord
- GitHub Issues
- Documentation site

---

## Prevention Tips

### 1. Regular Maintenance

**Weekly:**
- `@rt-update` every Monday
- Check/clear founder-checklist
- Review whiteboards

**Monthly:**
- `@update-project`
- Clean up workspace
- Review context files

**Quarterly:**
- `@update-founder-profile`
- `@update-mission`
- `@update-people`

### 2. Good Habits

**Always:**
- Give context to experts
- Use specific commands
- Tag right expert
- Check whiteboards daily

**Never:**
- Let context drift
- Ignore founder-checklist
- Let workspace get too messy
- Assume experts know unstated info

### 3. Documentation

**Keep Updated:**
- project-kb.md
- mission.md
- people.md

**Experts work better with current info!**

---

## Quick Reference

### Common Issues

| Issue | Quick Fix |
|-------|-----------|
| Expert confused | `@newthread` |
| Old info | `@update-project` |
| Wrong expert | `@[right-expert]` tag directly |
| Command not working | Use full name: `@create-spec` |
| Can't find file | Check `documents/` or `workspace/` |
| Work stuck | `@expert please finalize this` |
| Too verbose | `@update-founder-profile` → Direct |
| Not proactive | `@expert what should we do next?` |
| Context drift | Regular `@update-project` |
| Merge conflicts | Resolve in project files manually |

### Emergency Commands

```
@newthread              # Start fresh
@update-project         # Refresh context
@genna help             # Ask for help
@rt status check        # What's happening?
```

---

## Diagnostic Checklist

**If something's wrong, check:**

- [ ] Is context current? (`@update-project`)
- [ ] Am I in right directory? (`pwd`)
- [ ] Is command name correct? (check spelling)
- [ ] Did expert understand? (check whiteboards)
- [ ] Is file in right place? (workspace vs documents)
- [ ] Are experts active? (check config.yaml)
- [ ] Is AI tool working? (restart if needed)
- [ ] Did I approve handoff? (check checklist)

---

## Still Stuck?

**Try this sequence:**

1. `@newthread` - Start fresh
2. `@update-project` - Refresh context
3. `@genna I need help with [specific issue]`
4. Check documentation (you're reading it!)
5. Reset and reinstall if truly broken

---

**Most issues are context or communication - FWD PRO is resilient! 🛠️**

