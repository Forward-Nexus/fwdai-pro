# Workspace Templates

## Quick Decision: Which Template?

### Use `workspace-template-compressed.md` (RECOMMENDED)

**When:** Most of the time  
**Why:** Ultra-efficient AI-only format  
**Token Count:** ~20 lines

```markdown
# WS:[topic]

CTX: [context] DEC: [decisions] STATUS: [status] REFS: [deliverable links]
NOTES: [AI memory]
```

### Use `workspace-template.md` (LEGACY)

**When:** Founder specifically requests detailed workspace  
**Why:** Human-readable (but founder typically doesn't read workspaces)  
**Token Count:** ~470 lines

**Note:** Most users should use the compressed template. Workspaces are AI
memory, not human deliverables.

---

## Philosophy: Workspaces are Database Records

**Workspaces = AI-only memory**

- Founder NEVER reads them
- Founder asks AI in chat if they need info
- Ultra-compress for token efficiency
- Update in place (don't append history)
- Reference deliverables (don't duplicate content)

**The relationship:**

```
Whiteboards (human status board)
    ↑
Workspaces (AI memory, per-topic)
    ↓
Deliverables (polished docs in documents/)
```

**Signal vs. Noise Test:**

- ✅ Keep: Decisions, context, status, deliverable refs
- ❌ Skip: Verbose explanations, duplicated content, historical logs

**Completion workflow:**

1. Founder says "we're done"
2. Update STATUS to ✅
3. Update whiteboard to Done
4. Move on

Workspace stays as efficient context if work resumes later.
