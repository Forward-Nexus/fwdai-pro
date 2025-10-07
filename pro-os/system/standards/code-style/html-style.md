---
version: 1.0.0
applies_to: html_markup
conditional_loading: true
---

# HTML Style Guide

## When to Load

Load ONLY when writing or reviewing HTML markup.

---

## Core Principle: Semantic HTML

**Use HTML elements for their intended purpose.**

```html
<!-- ✅ Good - Semantic -->
<header>
  <nav>
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Page Title</h1>
    <p>Content here...</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 Company Name</p>
</footer>

<!-- ❌ Bad - Non-semantic -->
<div class="header">
  <div class="nav">
    <div class="nav-item">
      <div class="link">Home</div>
    </div>
  </div>
</div>

<div class="content">
  <div class="title">Page Title</div>
  <div class="text">Content here...</div>
</div>
```

---

## Document Structure

### Basic Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Brief page description">
  <title>Page Title - Site Name</title>
  
  <!-- Styles -->
  <link rel="stylesheet" href="/css/styles.css">
  
  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico">
</head>
<body>
  <header>
    <!-- Site header -->
  </header>
  
  <main>
    <!-- Main content -->
  </main>
  
  <footer>
    <!-- Site footer -->
  </footer>
  
  <!-- Scripts at end of body -->
  <script src="/js/main.js"></script>
</body>
</html>
```

---

## Semantic Elements

### Page Structure

```html
<!-- ✅ Use semantic sectioning -->
<header>Site header with logo, nav</header>
<nav>Primary navigation</nav>
<main>Main content area (only one per page)</main>
<article>Self-contained composition (blog post, product, etc.)</article>
<section>Thematic grouping of content</section>
<aside>Tangentially related content (sidebar)</aside>
<footer>Footer with site info, links</footer>
```

### Content Elements

```html
<!-- ✅ Headings in order -->
<h1>Main page title (only one per page)</h1>
<h2>Major section</h2>
<h3>Subsection</h3>
<h4>Sub-subsection</h4>
<!-- Don't skip levels: h1 → h3 ❌ -->

<!-- ✅ Lists -->
<ul>Unordered list (bullets)</ul>
<ol>Ordered list (numbers)</ol>
<dl>Definition list (term-definition pairs)</dl>

<!-- ✅ Text semantics -->
<strong>Important text (bold)</strong>
<em>Emphasized text (italic)</em>
<mark>Highlighted text</mark>
<code>Inline code</code>
<pre>Preformatted text (preserves whitespace)</pre>
```

---

## Accessibility

### Alt Text for Images

```html
<!-- ✅ Good - Descriptive alt -->
<img src="graph.png" alt="Sales increased 45% from Q1 to Q2 2025">

<!-- ✅ Good - Decorative image (empty alt) -->
<img src="decorative-line.svg" alt="">

<!-- ❌ Bad - No alt -->
<img src="graph.png">

<!-- ❌ Bad - Useless alt -->
<img src="graph.png" alt="image">
```

### ARIA Labels

```html
<!-- ✅ Good - ARIA when needed -->
<button aria-label="Close dialog">
  <svg><!-- X icon --></svg>
</button>

<nav aria-label="Main navigation">
  <!-- nav items -->
</nav>

<!-- Multiple navigation menus -->
<nav aria-label="Primary navigation">...</nav>
<nav aria-label="Footer navigation">...</nav>
```

### Form Accessibility

```html
<!-- ✅ Good - Labeled inputs -->
<label for="email">Email Address</label>
<input 
  type="email" 
  id="email" 
  name="email" 
  required 
  aria-describedby="email-help"
>
<p id="email-help">We'll never share your email</p>

<!-- ✅ Good - Fieldset for related inputs -->
<fieldset>
  <legend>Contact Preferences</legend>
  <label>
    <input type="checkbox" name="email-updates">
    Email updates
  </label>
  <label>
    <input type="checkbox" name="sms-updates">
    SMS updates
  </label>
</fieldset>

<!-- ❌ Bad - No label -->
<input type="text" placeholder="Enter email">
```

### Keyboard Navigation

```html
<!-- ✅ Good - Focusable interactive elements -->
<button type="button">Click me</button>
<a href="/page">Link</a>

<!-- ❌ Bad - Div as button (not keyboard accessible) -->
<div onclick="doSomething()">Click me</div>

<!-- ✅ Good - If you must use div, add role and tabindex -->
<div 
  role="button" 
  tabindex="0" 
  onclick="doSomething()"
  onkeypress="handleKey(event)"
>
  Click me
</div>
```

---

## Forms

### Complete Form Example

```html
<form method="POST" action="/submit" novalidate>
  <div class="form-group">
    <label for="name">Full Name</label>
    <input 
      type="text" 
      id="name" 
      name="name" 
      required 
      autocomplete="name"
      aria-required="true"
    >
  </div>
  
  <div class="form-group">
    <label for="email">Email</label>
    <input 
      type="email" 
      id="email" 
      name="email" 
      required 
      autocomplete="email"
    >
  </div>
  
  <div class="form-group">
    <label for="message">Message</label>
    <textarea 
      id="message" 
      name="message" 
      rows="5" 
      required
    ></textarea>
  </div>
  
  <button type="submit">Send Message</button>
</form>
```

### Input Types

```html
<!-- Use appropriate input types -->
<input type="email">      <!-- Email validation -->
<input type="url">        <!-- URL validation -->
<input type="tel">        <!-- Phone number -->
<input type="number">     <!-- Numeric input -->
<input type="date">       <!-- Date picker -->
<input type="time">       <!-- Time picker -->
<input type="search">     <!-- Search box -->
<input type="password">   <!-- Password (obscured) -->
<input type="file">       <!-- File upload -->
```

---

## Links & Buttons

### When to Use What

```html
<!-- ✅ Links - Navigate to another page/location -->
<a href="/about">About Us</a>
<a href="#section">Jump to section</a>
<a href="mailto:contact@example.com">Email us</a>
<a href="document.pdf" download>Download PDF</a>

<!-- ✅ Buttons - Perform action on current page -->
<button type="button">Toggle menu</button>
<button type="submit">Submit form</button>
<button type="reset">Reset form</button>

<!-- ❌ Bad - Button styled as link -->
<button onclick="location.href='/about'">About</button>

<!-- ❌ Bad - Link that does button action -->
<a href="javascript:void(0)" onclick="toggleMenu()">Menu</a>
```

### Link Best Practices

```html
<!-- ✅ Good - Descriptive link text -->
<a href="/article">Read our complete guide to accessibility</a>

<!-- ❌ Bad - Generic link text -->
<a href="/article">Click here</a>

<!-- ✅ Good - External link indication -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">
  External site
  <span class="sr-only">(opens in new tab)</span>
</a>
```

---

## Tables

### Accessible Tables

```html
<!-- ✅ Good - Complete table structure -->
<table>
  <caption>Sales Report Q1 2025</caption>
  <thead>
    <tr>
      <th scope="col">Month</th>
      <th scope="col">Revenue</th>
      <th scope="col">Growth</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">January</th>
      <td>$50,000</td>
      <td>+12%</td>
    </tr>
    <tr>
      <th scope="row">February</th>
      <td>$55,000</td>
      <td>+10%</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row">Total</th>
      <td>$105,000</td>
      <td>+11%</td>
    </tr>
  </tfoot>
</table>

<!-- ❌ Bad - Div table (not accessible) -->
<div class="table">
  <div class="row">
    <div class="cell">January</div>
    <div class="cell">$50,000</div>
  </div>
</div>
```

---

## Media

### Images

```html
<!-- ✅ Good - Responsive image -->
<img 
  src="image-800.jpg" 
  srcset="image-400.jpg 400w, image-800.jpg 800w, image-1200.jpg 1200w"
  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"
  alt="Description of image"
  loading="lazy"
  width="800"
  height="600"
>

<!-- ✅ Good - Picture for art direction -->
<picture>
  <source media="(max-width: 600px)" srcset="mobile.jpg">
  <source media="(max-width: 1200px)" srcset="tablet.jpg">
  <img src="desktop.jpg" alt="Description">
</picture>
```

### Video

```html
<!-- ✅ Good - Accessible video -->
<video controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  <track kind="captions" src="captions.vtt" srclang="en" label="English">
  Your browser doesn't support video.
</video>
```

---

## Common Patterns

### Skip to Content

```html
<!-- ✅ Good - Skip link for keyboard users -->
<a href="#main-content" class="skip-link">
  Skip to main content
</a>

<nav>
  <!-- Navigation -->
</nav>

<main id="main-content">
  <!-- Content starts here -->
</main>

<!-- CSS -->
<style>
.skip-link {
  position: absolute;
  top: -40px;
  left: 0;
  background: #000;
  color: #fff;
  padding: 8px;
  z-index: 100;
}

.skip-link:focus {
  top: 0;
}
</style>
```

### Modal Dialog

```html
<!-- ✅ Good - Accessible modal -->
<div 
  role="dialog" 
  aria-labelledby="dialog-title" 
  aria-describedby="dialog-description"
  aria-modal="true"
>
  <h2 id="dialog-title">Confirm Action</h2>
  <p id="dialog-description">Are you sure you want to delete this item?</p>
  
  <button type="button">Cancel</button>
  <button type="button">Delete</button>
</div>
```

---

## HTML Formatting

### Indentation

```html
<!-- ✅ Good - Consistent indentation (2 or 4 spaces) -->
<div class="container">
  <header>
    <h1>Title</h1>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
      </ul>
    </nav>
  </header>
</div>

<!-- ❌ Bad - Inconsistent indentation -->
<div class="container">
<header>
      <h1>Title</h1>
  <nav>
<ul>
<li><a href="/">Home</a></li>
```

### Attributes

```html
<!-- ✅ Good - Quotes, lowercase, logical order -->
<input 
  type="email" 
  id="email" 
  name="email" 
  class="form-input" 
  required 
  autocomplete="email"
>

<!-- Order: type/role, id, name, class, data-*, aria-*, other -->

<!-- ✅ Good - Boolean attributes -->
<input type="checkbox" checked>
<button disabled>Click</button>
```

---

## Performance

### Lazy Loading

```html
<!-- ✅ Good - Lazy load off-screen images -->
<img src="image.jpg" alt="Description" loading="lazy">

<!-- ✅ Good - Eager load important images -->
<img src="hero.jpg" alt="Hero" loading="eager">
```

### Preloading

```html
<head>
  <!-- ✅ Good - Preload critical resources -->
  <link rel="preload" href="font.woff2" as="font" type="font/woff2" crossorigin>
  <link rel="preload" href="critical.css" as="style">
</head>
```

---

## Security

### External Links

```html
<!-- ✅ Good - Secure external links -->
<a href="https://external.com" target="_blank" rel="noopener noreferrer">
  External site
</a>

<!-- rel="noopener" - Prevents window.opener access -->
<!-- rel="noreferrer" - Doesn't send referrer info -->
```

---

## Validation

### Check Your HTML

Use these tools:
- [W3C HTML Validator](https://validator.w3.org/)
- Browser DevTools
- Lighthouse (accessibility, performance)

---

## Common Mistakes to Avoid

```html
<!-- ❌ Bad - Inline styles (use CSS) -->
<div style="color: red; font-size: 20px;">Text</div>

<!-- ❌ Bad - Inline JavaScript (use external JS) -->
<button onclick="alert('hi')">Click</button>

<!-- ❌ Bad - Empty elements -->
<div></div>
<p></p>

<!-- ❌ Bad - Presentational markup -->
<br><br><br>  <!-- Use CSS margin instead -->
<center>      <!-- Deprecated, use CSS -->
<font>        <!-- Deprecated, use CSS -->

<!-- ❌ Bad - Divitis (too many divs) -->
<div class="container">
  <div class="wrapper">
    <div class="content">
      <div class="text">Hello</div>
    </div>
  </div>
</div>

<!-- ✅ Good - Semantic, minimal -->
<section class="container">
  <p>Hello</p>
</section>
```

---

## Resources

- [MDN HTML Reference](https://developer.mozilla.org/en-US/docs/Web/HTML)
- [HTML5 Doctor](http://html5doctor.com/)
- [WebAIM (Accessibility)](https://webaim.org/)
- [WCAG Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

**Remember:** Semantic, accessible HTML is the foundation of great web experiences. Take the time to do it right!

