---
version: 1.0.0
applies_to: javascript_typescript
conditional_loading: true
---

# JavaScript/TypeScript Style Guide

## When to Load

Load ONLY when writing or reviewing JavaScript/TypeScript code.

---

## General Principles

Follow `general-code-style.md` PLUS these JavaScript-specific standards.

---

## Syntax & Formatting

### Modern JavaScript

**Use modern ES6+ features:**
```javascript
// ✅ Good - Modern
const users = await User.findAll();
const activeUsers = users.filter(user => user.isActive);
const { email, name } = user;

// ❌ Bad - Outdated
var users = await User.findAll();
var activeUsers = users.filter(function(user) { return user.isActive; });
var email = user.email;
var name = user.name;
```

### Variable Declarations

```javascript
// ✅ Use const by default
const MAX_RETRIES = 3;
const user = await getUser(id);

// ✅ Use let when reassignment needed
let retryCount = 0;
while (retryCount < MAX_RETRIES) {
  retryCount++;
}

// ❌ Never use var
var x = 10; // NO!
```

### Functions

**Arrow functions for short operations:**
```javascript
// ✅ Good
const square = (x) => x * x;
const isEven = (n) => n % 2 === 0;
```

**Regular functions for complex logic:**
```javascript
// ✅ Good - More readable for complex functions
function calculateUserScore(user) {
  const baseScore = user.experience * 10;
  const bonus = user.achievements.length * 5;
  const penalty = user.violations * 3;
  return Math.max(0, baseScore + bonus - penalty);
}
```

### Async/Await

**Prefer async/await over .then():**
```javascript
// ✅ Good
async function getUser(id) {
  try {
    const user = await User.findById(id);
    return user;
  } catch (error) {
    logger.error(`Failed to get user ${id}:`, error);
    throw error;
  }
}

// ❌ Avoid - Harder to read
function getUser(id) {
  return User.findById(id)
    .then(user => user)
    .catch(error => {
      logger.error(`Failed to get user ${id}:`, error);
      throw error;
    });
}
```

---

## Naming Conventions

### Variables & Functions
```javascript
// camelCase for variables and functions
const userName = 'Ward';
function getUserById(id) { /* ... */ }
```

### Classes
```javascript
// PascalCase for classes
class UserService {
  constructor() { /* ... */ }
}
```

### Constants
```javascript
// UPPER_SNAKE_CASE for true constants
const MAX_LOGIN_ATTEMPTS = 5;
const API_BASE_URL = 'https://api.example.com';

// camelCase for objects that are "constant references"
const config = { maxRetries: 3, timeout: 5000 };
```

### Private/Internal
```javascript
// Prefix with _ for "private" (convention)
class User {
  constructor(name) {
    this.name = name;
    this._passwordHash = null; // Internal use
  }
  
  _hashPassword(password) {
    // Internal method
  }
}
```

---

## Arrays & Objects

### Array Methods

**Use functional array methods:**
```javascript
// ✅ Good - Functional and clear
const activeUsers = users.filter(u => u.isActive);
const userNames = users.map(u => u.name);
const totalScore = scores.reduce((sum, score) => sum + score, 0);

// ❌ Bad - Imperative
const activeUsers = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].isActive) {
    activeUsers.push(users[i]);
  }
}
```

### Destructuring

**Use destructuring for clarity:**
```javascript
// ✅ Good
const { name, email, id } = user;
const [first, second] = array;

// ✅ Good - With defaults
const { timeout = 5000, retries = 3 } = options;

// ❌ Bad
const name = user.name;
const email = user.email;
const id = user.id;
```

### Spread Operator

```javascript
// ✅ Good - Copying arrays/objects
const newArray = [...oldArray];
const newUser = { ...user, status: 'active' };

// ✅ Good - Function arguments
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
```

---

## Promises & Async

### Error Handling

**Always handle promise rejections:**
```javascript
// ✅ Good
try {
  const result = await someAsyncOperation();
  return result;
} catch (error) {
  logger.error('Operation failed:', error);
  throw new Error(`Failed: ${error.message}`);
}

// ❌ Bad - Unhandled rejection
const result = await someAsyncOperation(); // Can crash app!
```

### Parallel Promises

**Use Promise.all for parallel operations:**
```javascript
// ✅ Good - Parallel (faster)
const [users, posts, comments] = await Promise.all([
  User.findAll(),
  Post.findAll(),
  Comment.findAll()
]);

// ❌ Bad - Sequential (slower)
const users = await User.findAll();
const posts = await Post.findAll();
const comments = await Comment.findAll();
```

---

## TypeScript Specific

### Type Annotations

**Use types for function parameters and returns:**
```typescript
// ✅ Good
function calculateTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.price, 0);
}

interface User {
  id: string;
  name: string;
  email: string;
  isActive: boolean;
}

// ✅ Good - Type inference
const count = 5; // TypeScript infers number
```

### Interfaces vs Types

**Prefer interfaces for objects:**
```typescript
// ✅ Good for objects
interface User {
  id: string;
  name: string;
}

// ✅ Good for unions/primitives
type Status = 'active' | 'inactive' | 'pending';
type ID = string | number;
```

### Avoid `any`

```typescript
// ❌ Bad - Defeats TypeScript purpose
function process(data: any) { }

// ✅ Good - Specific type
function process(data: UserData) { }

// ✅ Good - Generic if truly generic
function process<T>(data: T): T { }
```

---

## Common Patterns

### Optional Chaining

```javascript
// ✅ Good - Safe property access
const city = user?.address?.city;
const firstPost = user?.posts?.[0];

// ❌ Bad - Verbose null checking
const city = user && user.address && user.address.city;
```

### Nullish Coalescing

```javascript
// ✅ Good - Default only for null/undefined
const timeout = config.timeout ?? 5000;

// ❌ Bad - || treats 0 and '' as falsy
const timeout = config.timeout || 5000; // 0 would become 5000!
```

### Template Literals

```javascript
// ✅ Good - Readable
const message = `Hello, ${user.name}! You have ${count} new messages.`;

// ❌ Bad - Hard to read
const message = 'Hello, ' + user.name + '! You have ' + count + ' new messages.';
```

---

## Modules

### Imports/Exports

```javascript
// ✅ Good - Named exports
export function calculateTotal(items) { }
export const MAX_ITEMS = 100;

// ✅ Good - Default export for main thing
export default class UserService { }

// ✅ Good - Import
import UserService from './UserService.js';
import { calculateTotal, MAX_ITEMS } from './utils.js';
```

### Module Organization

```javascript
// file structure
src/
  services/
    auth/
      index.js         // Main export
      authService.js
      tokenManager.js
      
// index.js - Barrel export
export { AuthService } from './authService.js';
export { TokenManager } from './tokenManager.js';
```

---

## Testing

### Test File Naming

```
src/services/authService.js
tests/services/authService.test.js
// or
src/services/authService.spec.js
```

### Test Structure

```javascript
describe('AuthService', () => {
  describe('login', () => {
    test('returns token for valid credentials', async () => {
      const result = await authService.login('user@example.com', 'password');
      expect(result.token).toBeDefined();
      expect(typeof result.token).toBe('string');
    });

    test('throws error for invalid credentials', async () => {
      await expect(
        authService.login('user@example.com', 'wrong')
      ).rejects.toThrow('Invalid credentials');
    });
  });
});
```

---

## Common Mistakes to Avoid

### Don't Mutate Parameters

```javascript
// ❌ Bad - Mutates input
function addItem(cart, item) {
  cart.items.push(item);
  return cart;
}

// ✅ Good - Immutable
function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item]
  };
}
```

### Don't Leave Console Logs

```javascript
// ❌ Bad - Left in production code
function processData(data) {
  console.log('Processing:', data);
  // ...
}

// ✅ Good - Use proper logger
function processData(data) {
  logger.debug('Processing data', { dataSize: data.length });
  // ...
}
```

### Don't Ignore Errors

```javascript
// ❌ Bad
try {
  await riskyOperation();
} catch (e) {
  // Silent failure
}

// ✅ Good
try {
  await riskyOperation();
} catch (error) {
  logger.error('Risky operation failed:', error);
  throw new Error(`Operation failed: ${error.message}`);
}
```

---

## Performance Tips

### Avoid Unnecessary Work

```javascript
// ✅ Good - Early return
function processUser(user) {
  if (!user) return null;
  if (!user.isActive) return null;
  // Process active user
}

// ❌ Bad - Unnecessary nesting
function processUser(user) {
  if (user) {
    if (user.isActive) {
      // Process active user
    }
  }
}
```

### Debounce/Throttle

```javascript
// For frequently called functions
import { debounce } from 'lodash';

// ✅ Good - Debounce search
const handleSearch = debounce((query) => {
  searchAPI(query);
}, 300);
```

---

## Tools & Configuration

### Recommended

**ESLint** - Linting
```json
{
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module"
  }
}
```

**Prettier** - Formatting
```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "es5"
}
```

---

## Resources

**Official Docs:**
- [MDN JavaScript Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

**Style Guides:**
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
- [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

---

**Remember:** Consistency within the project is most important. Follow existing patterns when working in an established codebase.

