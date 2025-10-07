---
version: 1.0.0
applies_to: all_code
purpose: General code style standards for FWD PRO projects
conditional_loading: true
---

# General Code Style Standards

## When to Load This

**Load this file ONLY when:**
- Writing or modifying code
- Reviewing code
- Setting up code standards for a project

**Do NOT load when:**
- Writing specs or documentation
- Creating non-code deliverables
- Working on content, marketing, legal, etc.

**Token efficiency:** Only load code standards when doing code work!

---

## Philosophy

**Code should be:**
- **Readable** - Easy for humans to understand
- **Maintainable** - Easy to modify and extend
- **Testable** - Easy to verify it works
- **Consistent** - Follows predictable patterns
- **Professional** - Production-quality standards

**NOT:**
- Clever at the expense of clarity
- Over-engineered
- Under-documented
- Inconsistent in style

---

## Universal Principles

### 1. Clarity Over Cleverness

```javascript
// ❌ Bad - Clever but unclear
const f = (x) => x.reduce((a,b) => a+b,0)/x.length;

// ✅ Good - Clear purpose
const calculateAverage = (numbers) => {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
};
```

### 2. Meaningful Names

**Good naming:**
- Use descriptive, searchable names
- Avoid abbreviations (unless universally known)
- Use consistent conventions
- Make intent clear

```javascript
// ❌ Bad
const d = new Date();
const yyyymmdd = d.toISOString();

// ✅ Good
const currentDate = new Date();
const timestamp = currentDate.toISOString();
```

### 3. Functions Do One Thing

**Single Responsibility:**
- Each function has one clear purpose
- Break complex functions into smaller ones
- Name describes what it does

```javascript
// ❌ Bad - Does too much
function processUser(user) {
  validateUser(user);
  saveToDatabase(user);
  sendWelcomeEmail(user);
  logActivity(user);
}

// ✅ Good - Orchestrates single-purpose functions
function registerNewUser(user) {
  validateUser(user);
  const savedUser = saveToDatabase(user);
  sendWelcomeEmail(savedUser);
  logUserRegistration(savedUser);
  return savedUser;
}
```

### 4. DRY (Don't Repeat Yourself)

**Avoid duplication:**
- Extract repeated logic into functions
- Use configuration over copy-paste
- Create reusable utilities

```javascript
// ❌ Bad - Repeated validation
if (!user.email || !user.email.includes('@')) {
  throw new Error('Invalid email');
}
if (!user.username || user.username.length < 3) {
  throw new Error('Invalid username');
}

// ✅ Good - Reusable validation
function validateField(value, rules, fieldName) {
  if (!value) throw new Error(`${fieldName} is required`);
  if (rules.minLength && value.length < rules.minLength) {
    throw new Error(`${fieldName} must be at least ${rules.minLength} characters`);
  }
  if (rules.pattern && !rules.pattern.test(value)) {
    throw new Error(`${fieldName} format is invalid`);
  }
}

validateField(user.email, { pattern: /@/ }, 'Email');
validateField(user.username, { minLength: 3 }, 'Username');
```

### 5. Comments Explain Why, Not What

**Good comments:**
- Explain business logic or decisions
- Clarify non-obvious behavior
- Document complex algorithms
- Warn about gotchas

**Bad comments:**
- Describe what the code obviously does
- Are outdated or wrong
- Replace clear naming

```javascript
// ❌ Bad - States the obvious
// Increment i
i++;

// ❌ Bad - Wrong/outdated
// Returns the user's email (actually returns username now)
return user.username;

// ✅ Good - Explains why
// Use 30-day timeout per founder's decision on 2025-10-03
// Balances security with user convenience
const SESSION_TIMEOUT = 30 * 24 * 60 * 60 * 1000;

// ✅ Good - Clarifies non-obvious behavior
// Must hash password before checking length 
// because hashing adds fixed-length output regardless of input
const hashedPassword = await hashPassword(password);
```

### 6. Error Handling

**Handle errors gracefully:**
- Use try/catch appropriately
- Provide helpful error messages
- Log errors with context
- Don't swallow errors silently

```javascript
// ❌ Bad - Silent failure
try {
  await saveUser(user);
} catch (e) {
  // Oops, lost the error
}

// ✅ Good - Proper error handling
try {
  await saveUser(user);
  logger.info(`User saved successfully: ${user.id}`);
} catch (error) {
  logger.error(`Failed to save user: ${user.id}`, {
    error: error.message,
    stack: error.stack,
    userId: user.id
  });
  throw new Error(`User registration failed: ${error.message}`);
}
```

### 7. Security Basics

**Always:**
- Validate all input
- Sanitize output
- Use parameterized queries (no SQL injection)
- Hash passwords (never store plain text)
- Use HTTPS
- Keep secrets out of code (use environment variables)

```javascript
// ❌ Bad - SQL injection risk
const query = `SELECT * FROM users WHERE email = '${email}'`;

// ✅ Good - Parameterized query
const query = 'SELECT * FROM users WHERE email = ?';
const users = await db.query(query, [email]);

// ❌ Bad - Hardcoded secret
const API_KEY = 'sk_live_abc123...';

// ✅ Good - Environment variable
const API_KEY = process.env.STRIPE_API_KEY;
if (!API_KEY) {
  throw new Error('STRIPE_API_KEY environment variable not set');
}
```

---

## Code Organization

### File Structure

**Good organization:**
- Group related functionality
- Keep files focused and reasonably sized
- Use clear, descriptive file names
- Follow project conventions

```
src/
  services/
    auth/
      authService.js         # Main auth logic
      tokenManager.js        # JWT token handling
      passwordUtils.js       # Password hashing/validation
  controllers/
    authController.js        # HTTP request handlers
  models/
    User.js                  # User data model
  middleware/
    authMiddleware.js        # Auth middleware
  utils/
    logger.js                # Logging utility
    validator.js             # Input validation
```

### Imports

**Organize imports:**
1. External dependencies first
2. Internal modules second
3. Group by type
4. Alphabetize within groups (optional but nice)

```javascript
// External dependencies
import express from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Internal modules
import { User } from '../models/User.js';
import { logger } from '../utils/logger.js';
import { validateEmail } from '../utils/validator.js';
```

---

## Testing Standards

### Test Structure

**Good tests:**
- Test one thing per test
- Use descriptive test names
- Follow Arrange-Act-Assert pattern
- Test happy path AND edge cases

```javascript
describe('calculateAverage', () => {
  test('returns correct average for positive numbers', () => {
    // Arrange
    const numbers = [1, 2, 3, 4, 5];
    
    // Act
    const result = calculateAverage(numbers);
    
    // Assert
    expect(result).toBe(3);
  });

  test('handles empty array gracefully', () => {
    const numbers = [];
    expect(() => calculateAverage(numbers)).toThrow('Cannot calculate average of empty array');
  });

  test('handles negative numbers correctly', () => {
    const numbers = [-5, -3, -1];
    expect(calculateAverage(numbers)).toBe(-3);
  });
});
```

### Test Coverage

**Aim for:**
- 80%+ code coverage (but quality > quantity)
- All critical paths tested
- Edge cases covered
- Error conditions tested

**Test:**
- ✅ Happy path (normal usage)
- ✅ Edge cases (boundaries, unusual inputs)
- ✅ Error conditions (what breaks, how it fails)
- ✅ Integration points (how pieces connect)

---

## Performance Considerations

### Be Aware Of:

**Database queries:**
- Avoid N+1 queries
- Use indexes appropriately
- Limit result sets
- Use eager loading when appropriate

**Loops:**
- Avoid unnecessary nested loops
- Consider algorithmic complexity
- Cache results when appropriate

**Memory:**
- Clean up resources
- Avoid memory leaks
- Be careful with closures

```javascript
// ❌ Bad - N+1 query problem
const users = await User.findAll();
for (const user of users) {
  user.posts = await Post.findByUserId(user.id); // Separate query each time!
}

// ✅ Good - Single query with join
const users = await User.findAll({
  include: [Post]  // Eager load posts
});
```

---

## Accessibility (If User-Facing)

**For UI code:**
- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Test with screen readers (if possible)
- Maintain sufficient color contrast
- Don't rely solely on color

See `html-style.md` for more HTML/accessibility standards.

---

## Version Control

### Commit Messages

**Good commit format:**
```
[Expert]: Brief summary of what was done

- Bullet point detail 1
- Bullet point detail 2

Refs: [workspace or deliverable]
```

**Examples:**
```
Ada: Implement JWT authentication

- Add token generation and validation
- Implement refresh token rotation
- Add rate limiting on auth endpoints
- Tests passing (47/47)

Refs: roundtable/workspace/auth-feature.md
```

### Commit Frequency

- Commit logical units of work
- Don't commit half-finished features (unless WIP branch)
- Commit working code (tests passing)
- Commit frequently enough to preserve progress

---

## Documentation

### Code Documentation

**Document:**
- Complex algorithms or business logic
- Public APIs (functions, classes, modules)
- Non-obvious behavior
- Configuration requirements

**Use:**
- JSDoc for JavaScript/TypeScript
- Docstrings for Python
- XML comments for C#
- JavaDoc for Java

```javascript
/**
 * Calculates the average of an array of numbers
 * @param {number[]} numbers - Array of numbers to average
 * @returns {number} The arithmetic mean
 * @throws {Error} If array is empty
 * @example
 * calculateAverage([1, 2, 3, 4, 5]) // returns 3
 */
function calculateAverage(numbers) {
  if (numbers.length === 0) {
    throw new Error('Cannot calculate average of empty array');
  }
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}
```

---

## Language-Specific Standards

**For specific languages, also load:**
- `javascript-style.md` - JavaScript/TypeScript
- `css-style.md` - CSS styling
- `html-style.md` - HTML structure
- (Add more as needed: python-style.md, etc.)

---

## Project-Specific Standards

**Always check:**
- `project/project-kb.md` for project-specific conventions
- Existing codebase patterns (when brownfield)
- Tech stack decisions
- Team preferences

**Follow existing patterns:**
- If project uses tabs, use tabs
- If project uses single quotes, use single quotes
- Match existing naming conventions
- Respect existing architecture patterns

**Consistency within a project > personal preference**

---

## Linting & Formatting

### Use Tools

**Recommended:**
- **ESLint** (JavaScript/TypeScript)
- **Prettier** (Code formatting)
- **Black** (Python)
- **StyleCop** (C#)

**Benefits:**
- Automatic style consistency
- Catches common errors
- Reduces code review friction
- Saves time

### Configuration

**If project has linter config:**
- Use it
- Don't override without reason
- Fix linter errors before committing

**If project doesn't have linter:**
- Suggest adding one
- Use reasonable defaults
- Document in project-kb.md

---

## Code Review Checklist

**When reviewing code:**
- [ ] Follows these general standards
- [ ] Follows language-specific standards
- [ ] Follows project-specific conventions
- [ ] Tests are included and passing
- [ ] No obvious bugs or security issues
- [ ] No linter errors
- [ ] Readable and maintainable
- [ ] Appropriately documented

---

## Remember

**Good code is:**
1. **Correct** - Does what it should
2. **Readable** - Others (and future you) can understand it
3. **Maintainable** - Easy to modify and extend
4. **Testable** - Can verify it works
5. **Consistent** - Follows predictable patterns

**Perfection isn't the goal. Professional quality is.**

---

**Standards adapted from:** Industry best practices, Clean Code principles, and real-world experience.

