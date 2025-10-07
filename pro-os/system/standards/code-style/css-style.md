---
version: 1.0.0
applies_to: css_styling
conditional_loading: true
---

# CSS Style Guide

## When to Load

Load ONLY when writing or reviewing CSS/styling code.

---

## General Approach

**Modern CSS Stack:**
- **Tailwind CSS** (utility-first) - Recommended for new projects
- **CSS Modules** - For component-scoped styles
- **Vanilla CSS** - When appropriate
- **Sass/SCSS** - If project uses it

**Choose based on project needs, not personal preference.**

---

## Tailwind CSS (Recommended)

### Why Tailwind

**Benefits:**
- Rapid development
- Consistent design system
- No CSS bloat (unused styles purged)
- Responsive design built-in
- Good accessibility defaults

### Usage

```html
<!-- ✅ Good - Semantic classes, responsive -->
<button class="
  px-4 py-2 
  bg-blue-600 hover:bg-blue-700 
  text-white font-medium rounded-lg
  transition-colors duration-200
  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
  disabled:opacity-50 disabled:cursor-not-allowed
  sm:px-6 sm:py-3
">
  Click me
</button>

<!-- ❌ Bad - Inline styles -->
<button style="padding: 8px 16px; background: #2563eb;">
  Click me
</button>
```

### Custom Components

**Extract repeated patterns:**
```css
/* tailwind.css */
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200;
  }
  
  .card {
    @apply bg-white rounded-lg shadow-md p-6;
  }
}
```

---

## CSS Modules

**For component-specific styles:**

```css
/* Button.module.css */
.button {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
}

.button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.primary {
  background-color: var(--color-primary);
  color: white;
}
```

```javascript
// Button.jsx
import styles from './Button.module.css';

function Button({ children, variant = 'primary' }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  );
}
```

---

## Vanilla CSS

### Naming Conventions

**Use BEM (Block Element Modifier):**
```css
/* Block */
.card {
  background: white;
  border-radius: 8px;
  padding: 1rem;
}

/* Element (part of block) */
.card__title {
  font-size: 1.5rem;
  font-weight: bold;
}

.card__content {
  margin-top: 0.5rem;
}

/* Modifier (variant of block or element) */
.card--featured {
  border: 2px solid gold;
}

.card__title--large {
  font-size: 2rem;
}
```

### Organization

**Group related styles:**
```css
/* ===== Base ===== */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* ===== Layout ===== */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* ===== Components ===== */
.button {
  /* button styles */
}

.card {
  /* card styles */
}

/* ===== Utilities ===== */
.text-center {
  text-align: center;
}

.mt-4 {
  margin-top: 1rem;
}
```

---

## CSS Best Practices

### 1. Use CSS Custom Properties

```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #8b5cf6;
  --color-danger: #ef4444;
  --color-success: #10b981;
  
  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
  
  /* Typography */
  --font-sans: 'Inter', system-ui, sans-serif;
  --font-mono: 'Fira Code', monospace;
}

.button {
  background-color: var(--color-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  font-family: var(--font-sans);
}
```

### 2. Mobile-First Responsive Design

```css
/* ✅ Good - Mobile first */
.container {
  padding: 1rem;
}

@media (min-width: 768px) {
  .container {
    padding: 2rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding: 3rem;
  }
}

/* ❌ Bad - Desktop first */
.container {
  padding: 3rem;
}

@media (max-width: 1024px) {
  .container {
    padding: 2rem;
  }
}
```

### 3. Avoid !important

```css
/* ❌ Bad - Using !important
.button {
  color: blue !important;
}

/* ✅ Good - Use specificity correctly */
.button.button--primary {
  color: blue;
}

/* Or increase specificity */
.nav .button {
  color: blue;
}
```

### 4. Use Semantic Selectors

```css
/* ✅ Good - Class-based */
.nav-link {
  color: blue;
}

/* ❌ Bad - Tag-based (too generic) */
a {
  color: blue;
}

/* ❌ Bad - ID-based (too specific) */
#nav-link-1 {
  color: blue;
}
```

---

## Layout

### Flexbox

```css
/* ✅ Good - Flexbox for 1D layouts */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.card-actions {
  display: flex;
  justify-content: flex-end;
  gap: 0.5rem;
}
```

### Grid

```css
/* ✅ Good - Grid for 2D layouts */
.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1rem;
}

.dashboard {
  display: grid;
  grid-template-columns: 250px 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 1rem;
  height: 100vh;
}
```

---

## Accessibility

### Focus States

```css
/* ✅ Good - Visible focus */
.button:focus {
  outline: 2px solid var(--color-primary);
  outline-offset: 2px;
}

/* ❌ Bad - Removing focus */
.button:focus {
  outline: none; /* Don't do this without alternative! */
}

/* ✅ Good - Custom focus with outline */
.button:focus {
  outline: none; /* Okay if you add visible alternative */
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}
```

### Color Contrast

```css
/* ✅ Good - Sufficient contrast (WCAG AA: 4.5:1) */
.text {
  color: #333333; /* Dark gray on white = 12.6:1 */
  background: #ffffff;
}

/* ❌ Bad - Poor contrast */
.text {
  color: #cccccc; /* Light gray on white = 1.6:1 - fails! */
  background: #ffffff;
}
```

### Hidden Content

```css
/* ✅ Good - Screen reader accessible */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

/* ❌ Bad - Hidden from everyone */
.hidden {
  display: none; /* Screen readers can't access */
}
```

---

## Performance

### Optimize Animations

```css
/* ✅ Good - GPU-accelerated properties */
.box {
  transition: transform 0.3s, opacity 0.3s;
}

.box:hover {
  transform: translateY(-5px);
  opacity: 0.9;
}

/* ❌ Bad - Expensive properties */
.box {
  transition: width 0.3s, height 0.3s, top 0.3s;
}
```

### Reduce Specificity

```css
/* ✅ Good - Low specificity */
.button-primary {
  background: blue;
}

/* ❌ Bad - High specificity (harder to override) */
div.container nav.navigation ul.nav-list li.nav-item a.button-primary {
  background: blue;
}
```

---

## Common Patterns

### Center Content

```css
/* ✅ Horizontal center (block) */
.container {
  max-width: 1200px;
  margin: 0 auto;
}

/* ✅ Flexbox center */
.center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ Grid center */
.center-grid {
  display: grid;
  place-items: center;
}
```

### Aspect Ratio

```css
/* ✅ Good - Modern aspect-ratio */
.video {
  aspect-ratio: 16 / 9;
  width: 100%;
}

/* ✅ Good - Fallback for older browsers */
.video-fallback {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 = 9/16 = 56.25% */
}

.video-fallback iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
```

### Truncate Text

```css
/* ✅ Single line truncate */
.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ✅ Multi-line truncate (webkit only) */
.truncate-multi {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
```

---

## Dark Mode

```css
:root {
  --bg-color: #ffffff;
  --text-color: #1f2937;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1f2937;
    --text-color: #f9fafb;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* Or with class toggle */
.dark {
  --bg-color: #1f2937;
  --text-color: #f9fafb;
}
```

---

## Tools

### Recommended

- **PostCSS** - CSS transformations
- **Autoprefixer** - Browser prefixes automatically
- **PurgeCSS** - Remove unused CSS
- **StyleLint** - CSS linting

---

## Resources

- [CSS Tricks](https://css-tricks.com/)
- [MDN CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Can I Use](https://caniuse.com/) - Browser compatibility

---

**Remember:** Consistency and accessibility are more important than clever techniques.

