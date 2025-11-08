# FWD PRO Production Utilities

**Complete toolkit for professional software development - from documents to deployment.**

---

## 🎯 Overview

FWD PRO includes 30+ production-ready utilities across 9 categories, covering everything you need to build, test, deploy, and monitor professional applications.

**All utilities work with any AI coding tool** (Cursor, VS Code, Claude, Windsurf, or generic).

---

## 📦 Utility Categories

### 1. 📄 Document Processing
**Always installed** - Read, write, and convert business documents.

- PDF read/write (pdf-lib, pdf-parse)
- Word document handling (docx, mammoth)
- Excel read/write (xlsx)

**Location:** `document-utils/`  
**See:** [Document Utils README](document-utils/README.md)

---

### 2. 💰 Financial Utilities  
**Always installed** - Calculate metrics for investor reporting and budgeting.

- Unit economics (LTV, CAC, payback period, churn)
- ARR/MRR calculations
- Burn rate and runway tracking

**Location:** `financial-utils/`  
**See:** [Financial Utils README](financial-utils/README.md)

---

### 3. 🔀 Git & Version Control
Professional git workflows with conventional commits and automation.

- `commit-helper.js` - Interactive conventional commit generator
- `pr-generator.js` - Generate PR descriptions from commits
- `changelog.js` - Auto-generate CHANGELOG.md

**Location:** `git-utils/`  
**See:** [Git Utils README](git-utils/README.md)

---

### 4. 🧪 Testing & QA
Automated testing workflows and quality gates.

- `test-runner.js` - Universal test runner (Vitest, Jest, Mocha, etc.)
- `quality-gate.js` - Enforce coverage and quality thresholds
- `test-report.js` - Generate human-readable test reports

**Location:** `testing-utils/`  
**See:** [Testing Utils README](testing-utils/README.md)

---

### 5. 🔐 Environment & Secrets
Environment variable management and security scanning.

- `env-generator.js` - Create .env.example templates
- `env-validator.js` - Validate required environment variables
- `secret-scanner.js` - Scan for accidentally committed secrets

**Location:** `env-utils/`  
**See:** [Environment Utils README](env-utils/README.md)

---

### 6. 💾 Database Utilities
Database management for all major databases.

- `migrate.js` - Run migrations (Prisma, Drizzle, Knex, TypeORM)
- `seed.js` - Populate database with test data
- `backup.js` - Create database backups (PostgreSQL, MySQL, SQLite, MongoDB)

**Location:** `database-utils/`  
**See:** [Database Utils README](database-utils/README.md)

---

### 7. 🔌 API & Integration
Build robust API integrations and webhook handlers.

- `api-client-generator.js` - Generate type-safe API clients from OpenAPI specs
- `webhook-tester.js` - Local webhook testing and validation
- `rate-limit-checker.js` - Monitor API usage and prevent rate limit errors

**Location:** `api-utils/`  
**See:** [API Utils README](api-utils/README.md)

---

### 8. 🚀 Deployment
Automated deployment configuration for any platform.

- `vercel-setup.js` - Generate Vercel configuration
- `docker-setup.js` - Create Dockerfile and docker-compose.yml
- `cicd-generator.js` - Generate CI/CD pipelines (GitHub Actions, GitLab, CircleCI)

**Location:** `deployment-utils/`  
**See:** [Deployment Utils README](deployment-utils/README.md)

---

### 9. 📊 Analytics & Monitoring
Error tracking, product analytics, and performance monitoring.

- `sentry-setup.js` - Configure Sentry error tracking
- `posthog-setup.js` - Set up PostHog analytics and feature flags
- `performance-setup.js` - Add Web Vitals and performance monitoring

**Location:** `monitoring-utils/`  
**See:** [Monitoring Utils README](monitoring-utils/README.md)

---

## 🎯 How Experts Use These Tools

### Ada (Implementation):
```markdown
**Ada:** Building the auth feature...
*implements code*
Running tests... ✅
Checking quality gates... ✅
Creating commit with conventional format...
Generated: feat(auth): add OAuth 2.0 login (#42)
```

### Denny (Systems Architect):
```markdown
**Denny:** Setting up deployment configuration...
*uses docker-setup.js*
Docker files created!
*uses cicd-generator.js*
CI/CD pipeline configured for GitHub Actions.
```

### Elle (Legal):
```markdown
**Elle:** Scanning for accidentally committed secrets...
*uses secret-scanner.js*
✅ No secrets detected! Safe to proceed.
```

### Lyna (External Strategy):
```markdown
**Lyna:** Calculating unit economics for investor deck...
*uses unit-economics.js*
LTV: $420, CAC: $105, LTV:CAC ratio: 4.0 ✅
Metrics look strong for Series A!
```

---

## 🚀 Quick Start

### Using NPM Scripts (Recommended)

FWD PRO includes npm scripts for all utilities - just run them like any other npm command:

```bash
# Git & Version Control
npm run tools:commit          # Interactive commit generator
npm run tools:pr              # Generate PR description
npm run tools:changelog       # Update CHANGELOG.md

# Testing & QA
npm run tools:test            # Run tests with coverage
npm run tools:quality         # Check quality gates

# Environment & Secrets
npm run tools:env-check       # Validate environment variables
npm run tools:env-gen         # Generate .env.example
npm run tools:secrets         # Scan for exposed secrets

# Database
npm run tools:migrate         # Run migrations
npm run tools:seed            # Seed database
npm run tools:backup          # Backup database

# API & Integration
npm run tools:webhook         # Start webhook tester
npm run tools:api-gen         # Generate API client

# Deployment
npm run tools:vercel          # Setup Vercel config
npm run tools:docker          # Generate Docker files
npm run tools:cicd            # Generate CI/CD pipeline

# Monitoring
npm run tools:sentry          # Setup Sentry
npm run tools:posthog         # Setup PostHog
npm run tools:perf            # Setup performance monitoring
```

### Or Use Direct Paths

```bash
# From your project root:
node .fwdpro/pro-os/system/tools/[category]/[tool].js
```

---

## 📋 What's Included

### Core Dependencies (Always Installed)
- Document processing: `pdf-lib`, `pdf-parse`, `mammoth`, `docx`, `xlsx`
- CLI utilities: `inquirer`, `chalk`, `ora`, `boxen`
- File system: `fs-extra`
- YAML parsing: `js-yaml`

### No Additional Setup Required
All utilities use dependencies already included with FWD PRO. Just run the scripts!

---

## 🎨 Philosophy

**Professional tools for every stage:**
1. **Development** - Testing, environment management, database utilities
2. **Version Control** - Git workflows, commit standards, changelogs
3. **Integration** - API clients, webhooks, rate limiting
4. **Deployment** - Docker, CI/CD, platform configuration
5. **Production** - Error tracking, analytics, performance monitoring

**Universal compatibility:**
- Works in any IDE (Cursor, VS Code, Claude, Windsurf, generic)
- Auto-detects frameworks and databases
- Integrates with your existing tools

---

## 💡 Pro Tips

### Tip 1: Chain Utilities Together
```bash
# Development workflow
npm test && \
node .fwdpro/pro-os/system/tools/testing-utils/quality-gate.js && \
node .fwdpro/pro-os/system/tools/git-utils/commit-helper.js
```

### Tip 2: Add to package.json Scripts
```json
{
  "scripts": {
    "commit": "node .fwdpro/pro-os/system/tools/git-utils/commit-helper.js",
    "validate": "node .fwdpro/pro-os/system/tools/env-utils/env-validator.js",
    "quality": "node .fwdpro/pro-os/system/tools/testing-utils/quality-gate.js"
  }
}
```

### Tip 3: Use in CI/CD
```yaml
# .github/workflows/ci.yml
- name: Validate environment
  run: node .fwdpro/pro-os/system/tools/env-utils/env-validator.js

- name: Quality gates
  run: node .fwdpro/pro-os/system/tools/testing-utils/quality-gate.js

- name: Scan for secrets
  run: node .fwdpro/pro-os/system/tools/env-utils/secret-scanner.js
```

---

## 📚 Documentation

Each utility category has detailed documentation:

- [Document Utils](document-utils/README.md)
- [Financial Utils](financial-utils/README.md)
- [Git Utils](git-utils/README.md)
- [Testing Utils](testing-utils/README.md)
- [Environment Utils](env-utils/README.md)
- [Database Utils](database-utils/README.md)
- [API Utils](api-utils/README.md)
- [Deployment Utils](deployment-utils/README.md)
- [Monitoring Utils](monitoring-utils/README.md)

---

## 🆘 Support

**Issues or questions?**
- Check individual utility READMEs
- Review expert pattern documentation
- Submit issues on GitHub

---

**30+ production-ready utilities. Zero additional setup. Works everywhere.** 🚀

*Built by founders, for founders. Used to build ODAT and FWD PRO itself.*

