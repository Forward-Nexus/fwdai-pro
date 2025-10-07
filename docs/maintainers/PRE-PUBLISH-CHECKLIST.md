# FWD PRO - Pre-Publish Checklist ✅

Use this checklist before publishing to npm to ensure everything is ready.

## 📋 Repository Setup

- [ ] **.gitignore created** - Excludes node_modules, logs, etc.
- [ ] **.npmignore created** - Additional npm-specific exclusions
- [ ] **Git initialized** - `git init` completed
- [ ] **All files staged** - `git add .` completed
- [ ] **Initial commit made** - Clean commit message
- [ ] **GitHub repo created** - `Forward-Nexus/fwdai-pro` exists
- [ ] **Remote added** - `git remote add origin` completed
- [ ] **Code pushed** - `git push -u origin main` successful

## 🔍 Package Verification

- [ ] **package.json correct**
  - [ ] Name: `@fwdai/pro`
  - [ ] Version: `1.0.0`
  - [ ] Repository URL: `https://github.com/Forward-Nexus/fwdai-pro.git`
  - [ ] Homepage: `https://fwdai.com`
  - [ ] Author info correct
  - [ ] License: MIT
  - [ ] All dependencies listed
  
- [ ] **README.md complete**
  - [ ] Clear installation instructions
  - [ ] GitHub URLs point to Forward-Nexus (not wardbox)
  - [ ] All sections complete
  - [ ] Examples work
  
- [ ] **Other docs complete**
  - [ ] LICENSE file exists
  - [ ] CHANGELOG.md exists
  - [ ] CONTRIBUTING.md exists
  - [ ] ACKNOWLEDGMENTS.md exists

## 🧪 Testing

- [ ] **Local test #1 - From package directory**
  ```bash
  cd /Volumes/Transcend/GitHub/fwdai-pro
  pnpm install  # Ensure dependencies are installed
  node bin/cli.js help  # Test CLI works
  ```

- [ ] **Local test #2 - In test project**
  ```bash
  mkdir -p ~/fwdpro-test-1
  cd ~/fwdpro-test-1
  npx /Volumes/Transcend/GitHub/fwdai-pro install
  # Complete onboarding and verify:
  # - Files created in correct locations
  # - .fwdpro/config.yaml generated
  # - roundtable/ directory created
  # - pro-os/ copied correctly
  ```

- [ ] **Local test #3 - Different project types**
  Test with at least 2 different project types:
  - [ ] Software project
  - [ ] Non-software project (restaurant, consulting, etc.)

## 📦 NPM Setup

- [ ] **NPM account created** - https://www.npmjs.com/signup
- [ ] **Logged in locally** - `npm login` successful
- [ ] **Organization created** - `@fwdai` exists on npm
- [ ] **Added as member** - Your account has publish permissions

## 🚀 Pre-Publish Final Checks

- [ ] **Version correct** - `1.0.0` for initial release
- [ ] **No uncommitted changes** - `git status` clean
- [ ] **No node_modules in repo** - Excluded by .gitignore
- [ ] **Files array correct** - Only shipping what's needed
- [ ] **Bin entry works** - CLI executable tested
- [ ] **Dependencies installed** - `pnpm install` successful
- [ ] **No linter errors** - `pnpm lint` passes (or fix them)

## 📤 Publishing Steps

### 1. Dry Run (SAFE - doesn't publish)
```bash
cd /Volumes/Transcend/GitHub/fwdai-pro
npm publish --dry-run --access public
```
Review the output - it shows exactly what would be published.

### 2. Actual Publish
```bash
npm publish --access public
```

### 3. Verify Published Package
```bash
# Wait 1-2 minutes for npm to propagate
npm info @fwdai/pro

# Test installation in fresh directory
mkdir -p ~/fwdpro-test-published
cd ~/fwdpro-test-published
npx @fwdai/pro install
```

## ✅ Post-Publish

- [ ] **Package visible on npm** - https://www.npmjs.com/package/@fwdai/pro
- [ ] **README displays correctly** - On npm package page
- [ ] **Installation works** - `npx @fwdai/pro install` successful
- [ ] **GitHub release created** - Tag v1.0.0
- [ ] **Announcement ready** - Blog post, social media, etc.

## 🔄 For Future Updates

When publishing updates:

```bash
# Patch (1.0.0 → 1.0.1) - Bug fixes
npm version patch

# Minor (1.0.0 → 1.1.0) - New features, backwards compatible
npm version minor

# Major (1.0.0 → 2.0.0) - Breaking changes
npm version major

# Then publish
git push --follow-tags
npm publish --access public
```

## 🆘 Troubleshooting

### "Package name already exists"
- The `@fwdai/pro` name might be taken
- Try a different name or contact npm support

### "Not authorized"
- Run `npm login` again
- Verify you're a member of @fwdai organization
- Check organization permissions

### "Files not included"
- Check `package.json` "files" array
- Run `npm publish --dry-run` to preview
- Update .npmignore if needed

### Installation fails for users
- Verify bin entry is executable
- Check that tools/ directory is included
- Test in completely fresh directory

---

## 🎉 Ready to Publish?

Once all checkboxes are complete, you're ready to publish FWD PRO to the world! 🚀

**Remember:** Publishing is permanent for each version number. You can't republish the same version. Always test thoroughly before publishing.

