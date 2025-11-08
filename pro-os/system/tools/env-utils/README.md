# Environment Setup Utilities

**Purpose:** Environment variable management, validation, and secrets handling for secure application configuration.

---

## 🚀 Quick Start

```bash
# Generate .env.example from .env
node .fwdpro/pro-os/system/tools/env-utils/env-generator.js

# Validate environment variables
node .fwdpro/pro-os/system/tools/env-utils/env-validator.js

# Check for exposed secrets
node .fwdpro/pro-os/system/tools/env-utils/secret-scanner.js
```

---

## 📁 Available Tools

### 1. `env-generator.js` - .env.example Generator
Creates `.env.example` template from your `.env` file (without sensitive values).

### 2. `env-validator.js` - Environment Validator
Checks all required environment variables are set before deployment.

### 3. `secret-scanner.js` - Secret Scanner
Scans codebase for accidentally committed API keys or secrets.

---

## 🎯 Expert Usage

**Ada:** "Validating environment configuration..."  
**Elle:** "Scanning for exposed secrets... ✅ No leaks detected"

---

**Keep your secrets safe and environment configured correctly!** 🔐

