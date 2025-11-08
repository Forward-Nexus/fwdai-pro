# Cursor MCP Recommendations for FWD PRO

**Purpose:** Recommended Model Context Protocol (MCP) servers to enhance FWD PRO capabilities

**Installation:** MCPs must be enabled through Cursor Settings → Features → Model Context Protocol

---

## 🎯 Core Recommendations (For Everyone)

### 1. **Filesystem MCP** ⭐ Essential
**What it does:** Enhanced file operations, search, and navigation  
**Why:** Helps experts navigate your project more efficiently  
**Setup:** Usually enabled by default in Cursor

### 2. **GitHub MCP** 
**What it does:** Read repositories, issues, PRs, documentation  
**Why:** Experts can reference external codebases and documentation  
**Good for:** Ada (implementation patterns), Denny (architecture research)

### 3. **Web Browser MCP** ⭐ Essential
**What it does:** Browse websites and extract content  
**Why:** Critical for research, competitor analysis, and fact-checking  
**Good for:** Lyna (market research), Benji (competitor analysis), Elle (legal research)

---

## 💼 For Business & Investor Work

### 4. **Google Drive MCP**
**What it does:** Access Google Docs, Sheets, Slides  
**Why:** Read/write investor materials, financial models, presentations  
**Good for:** Lyna (pitch decks), Genna (strategy docs)  
**Setup:** Requires Google OAuth authentication

### 5. **Notion MCP**
**What it does:** Access Notion databases and pages  
**Why:** If you use Notion for documentation, roadmaps, or project management  
**Good for:** All experts referencing company knowledge base

### 6. **Slack MCP**
**What it does:** Read Slack messages and channels  
**Why:** Context from team discussions  
**Good for:** Understanding team decisions and context

---

## 🔧 For Technical Projects

### 7. **PostgreSQL MCP**
**What it does:** Query and manage PostgreSQL databases  
**Why:** Database architecture, debugging, data analysis  
**Good for:** Denny (schema design), Ada (implementation)  
**Setup:** Requires database connection string

### 8. **Git MCP** ⭐ Recommended
**What it does:** Enhanced Git operations  
**Why:** Better commit history, branch management  
**Good for:** Ada (implementation), Denny (architecture decisions)

### 9. **Docker MCP**
**What it does:** Manage Docker containers and images  
**Why:** Infrastructure and deployment  
**Good for:** Ada (DevOps), Denny (infrastructure)

---

## 📊 For Data & Analytics

### 10. **SQLite MCP**
**What it does:** Query SQLite databases  
**Why:** Local data storage and analysis  
**Good for:** Data analysis, testing, prototyping

### 11. **Pandas MCP**
**What it does:** Data analysis and manipulation  
**Why:** Financial modeling, data processing  
**Good for:** Lyna (financial projections), Benji (analytics)

---

## ⚖️ For Legal & Compliance

### 12. **Puppeteer MCP**
**What it does:** Browser automation for web scraping  
**Why:** Research regulations, case law, legal precedents  
**Good for:** Elle (legal research)  
**Note:** Use responsibly and respect robots.txt

---

## 📦 Recommended Setup by Project Type

### Software Development Project
**Essential:**
- Filesystem MCP
- Git MCP
- Web Browser MCP

**Recommended:**
- GitHub MCP
- PostgreSQL/SQLite MCP
- Docker MCP

### Investor Materials Project
**Essential:**
- Filesystem MCP
- Web Browser MCP
- Google Drive MCP

**Recommended:**
- GitHub MCP (reference similar companies)
- Notion MCP (if using Notion)

### Legal/Compliance Project
**Essential:**
- Filesystem MCP
- Web Browser MCP

**Recommended:**
- Google Drive MCP (contracts storage)
- Puppeteer MCP (legal research)

### Full-Stack App Project
**Essential:**
- Filesystem MCP
- Git MCP
- Web Browser MCP
- PostgreSQL MCP

**Recommended:**
- GitHub MCP
- Docker MCP
- Slack MCP (team context)

---

## 🚀 How to Enable MCPs in Cursor

### Step 1: Open Cursor Settings
`Cursor > Settings > Features > Model Context Protocol`

### Step 2: Enable Recommended MCPs
Click "+" to add new MCP servers

### Step 3: Configure Authentication (if needed)
Some MCPs require API keys or OAuth:
- Google Drive → Google OAuth
- GitHub → Personal Access Token
- Slack → OAuth token
- PostgreSQL → Connection string

### Step 4: Test the Connection
Ask in chat: `@ada test MCP connection to [service]`

---

## 💡 Pro Tips

### FWD PRO + MCPs = Powerful Combo

**Example workflows:**

**Lyna + Web Browser MCP:**
```
User: "@lyna research our competitors"
Lyna: *uses Web Browser MCP to visit competitor sites*
      *extracts pricing, features, positioning*
      *creates competitive analysis*
```

**Ada + GitHub MCP:**
```
User: "@ada how do other projects implement this pattern?"
Ada: *uses GitHub MCP to search similar projects*
     *finds implementation examples*
     *adapts best practices*
```

**Elle + Web Browser MCP:**
```
User: "@elle check if our privacy policy is compliant"
Elle: *uses Web Browser MCP to research latest regulations*
      *compares to industry standards*
      *flags gaps and provides recommendations*
```

---

## ⚠️ Important Notes

### MCPs vs FWD PRO

**FWD PRO provides:**
- Expert system and collaboration
- Document processing (PDF, Word, Excel)
- Financial utilities
- Organized workflow

**MCPs provide:**
- External data access (GitHub, Google Drive, databases)
- Web browsing and research
- Integration with external tools

**Together:** Complete development environment with expert guidance AND external data access

### Security

- MCPs require authentication tokens
- Store tokens securely (use environment variables)
- Review MCP permissions before granting access
- Some MCPs can access sensitive data (databases, Slack, etc.)

### Performance

- More MCPs = more context for AI
- But also = slower responses and higher token usage
- Enable only MCPs you actually use

---

## 📚 Learn More

**Cursor MCP Documentation:**
https://docs.cursor.com/context/context-mcp

**MCP Server Registry:**
https://github.com/modelcontextprotocol/servers

**FWD PRO Integration:**
- Experts automatically use enabled MCPs
- No additional configuration needed in FWD PRO
- Just enable in Cursor and experts will use them naturally

---

## 🎯 Quick Setup Checklist

For most FWD PRO users, start with these:

- [ ] **Filesystem MCP** (usually default)
- [ ] **Web Browser MCP** (essential for research)
- [ ] **Git MCP** (if building software)
- [ ] **Google Drive MCP** (if using Google Workspace)
- [ ] **PostgreSQL MCP** (if using PostgreSQL)

Advanced users can add:
- [ ] GitHub MCP
- [ ] Notion MCP
- [ ] Slack MCP
- [ ] Docker MCP

---

**Remember:** FWD PRO works great without MCPs! MCPs just enhance expert capabilities with external data access.

