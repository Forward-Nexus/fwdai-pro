# Contributing to FWD PRO

Thank you for your interest in contributing to FWD PRO! 🎉

**FWD PRO** is a universal AI expert collaboration system that helps founders build ANY type of business - not just software. We're inspired by BMAD-METHOD and Agent-OS, but focused on making AI collaboration accessible to everyone.

---

## 🌟 Our Philosophy

- **Universal First** - Works for restaurants, law firms, telecom, ANY business
- **Non-Technical Friendly** - No coding knowledge required
- **ADHD-Aware** - Clear structure without overwhelming
- **Founder-Centric** - Built for solo founders and small teams
- **Attribution Matters** - We credit our inspirations, please credit us too

---

## 💬 Get Involved

Before contributing, please:

1. **Read our vision** - Check `ADA_REBOOT_GUIDE.md` and `FWD-PRO-IMPLEMENTATION-GUIDE.md`
2. **Discuss first** - Open an issue or discussion before big changes
3. **Keep it universal** - Avoid software-specific features in core system

---

## 🤝 Code of Conduct

**Be Respectful:**
- We're building for everyone - developers AND non-developers
- Assume good intent
- Be patient with beginners
- Keep discussions constructive

**Be Inclusive:**
- Use clear, accessible language
- Avoid jargon when simpler words work
- Remember: FWD PRO is for founders of ALL backgrounds
- Consider neurodivergent users (ADHD, autism, dyslexia)

**Be Collaborative:**
- Give credit where it's due
- Acknowledge prior work and inspirations
- Help others learn and grow
- Share knowledge generously

---

## 🐛 Reporting Bugs

1. **Check existing issues** first
2. **Provide details:**
   - What you were trying to do
   - What happened vs what you expected
   - Your setup (OS, AI tool, work type)
   - Steps to reproduce
3. **Be respectful** - We're all learning together!

---

## ✨ Suggesting Features

1. **Open a discussion** or issue first
2. **Explain the use case** - Who needs this and why?
3. **Keep it universal** - Will this work for non-software projects?
4. **Consider expansion packs** - Domain-specific features go in expansion packs

---

## 🔧 Pull Request Process

### Before You Start

- **Discuss first** for anything non-trivial
- **One feature/fix per PR** - Keep changes focused
- **Update documentation** if you change behavior
- **Test thoroughly** - Especially for non-software use cases

### Testing Your Changes

Before submitting a PR, please test:

```bash
# Run linter
npm run lint

# Run tests (if available)
npm run test

# Test installer locally
npm run dev

# Or test the full flow
npm link
cd /path/to/test-project
npx @fwdai/pro install
```

If you're adding features for non-software use cases, test with examples like:
- Restaurant/hospitality
- Consulting/services
- Legal/compliance
- Telecom/infrastructure

### PR Guidelines

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Make your changes
4. Run linter and tests: `npm run lint && npm run test`
5. Test locally (run `npm run dev` if touching installer)
6. Commit with clear messages: `feat: add X` or `fix: resolve Y`
7. Push and open a PR
8. Describe what, why, and how in PR description

### Commit Convention

Use conventional commits:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation only
- `refactor:` Code improvements
- `test:` Adding tests
- `chore:` Maintenance

---

## 📝 Code Style

- Follow existing patterns in the codebase
- Use clear variable names (we're accessible, not cryptic)
- Comment complex logic
- Format with Prettier: `npm run format`
- Lint with ESLint: `npm run lint`

---

## 🎯 What We're Looking For

**High Priority:**
- Universal examples (non-software use cases)
- Documentation improvements
- Accessibility enhancements
- Bug fixes
- Onboarding UX improvements

**Welcome:**
- New expert personalities (must be universal)
- Quick commands for common workflows
- IDE integrations (beyond Cursor/VS Code)
- Testing improvements

**Discuss First:**
- Major architectural changes
- New dependencies
- Breaking changes
- Domain-specific features (might be expansion pack)

---

## 🙏 Attribution

FWD PRO was inspired by:
- **BMAD-METHOD™** - Quality systems and workflows
- **Agent-OS** - Context management patterns

When contributing, please:
- Respect these inspirations
- Acknowledge the FWD AI vision for universal AI collaboration
- Credit FWD PRO if you build derivatives

---

## 📜 License

By contributing, you agree your contributions will be licensed under the MIT License with attribution requirements (see LICENSE file).

---

## ❤️ Thank You!

Every contribution makes FWD PRO better for founders everywhere. Whether you're fixing a typo or adding a major feature, we appreciate you!

**Let's democratize AI collaboration together!** 🚀

---

**Questions?** Open a discussion or issue - we're here to help!

