# Maintainer Documentation

This directory contains documentation for FWD PRO maintainers and contributors.

**These files are NOT published to npm** - they're for internal use only.

## 📚 Contents

- **[PUBLISHING-GUIDE.md](./PUBLISHING-GUIDE.md)** - Complete guide to publishing FWD PRO to npm
- **[PRE-PUBLISH-CHECKLIST.md](./PRE-PUBLISH-CHECKLIST.md)** - Checklist before each release
- **[test-local-install.sh](./test-local-install.sh)** - Script to test installation locally before publishing

## 🔒 Privacy Note

These files are in the GitHub repository but are excluded from npm publication via the `package.json` "files" array. Users who install `npx @fwdai/pro install` will NOT receive these files.

## 📦 What Gets Published

Only these directories/files go to npm (defined in `package.json`):
- `bin/` - CLI entry point
- `tools/` - Installer scripts
- `pro-os/` - Expert system
- Documentation: `README.md`, `LICENSE`, `CHANGELOG.md`, `CONTRIBUTING.md`, `ACKNOWLEDGMENTS.md`

Everything else (including this `docs/` folder) stays in GitHub only.

