# AEGOV Color System

**Reference**: https://designsystem.gov.ae/guidelines/colour-system
**Standard**: WCAG 2.1 AA Compliance
**Version**: UAE Design System 2.0
**Package**: @aegov/design-system v2.3.0

## ⚠️ CRITICAL: AEGOV Semantic Color Mapping

The AEGOV design system uses specific semantic mappings. Use these correctly:

| Purpose | AEGOV Alias | Maps To | Tailwind Class |
|---------|-------------|---------|----------------|
| **Primary/Brand** | `primary` | AE Gold | `text-primary-600` or `text-aegold-600` |
| **Information** | `secondary-support` | Sea Blue | `text-seablue-600` |
| **Warning** | `primary-support` | Camel Yellow | `text-camel-600` |
| **Success** | *(no alias)* | AE Green | `text-aegreen-600` |
| **Error** | *(no alias)* | AE Red | `text-aered-600` |

### ❌ Do NOT Use (These don't exist):
- `text-success-*`
- `text-error-*`
- `text-warning-*`

### ✅ Correct Usage:
- Primary/Brand actions → `text-primary-600` (AE Gold #92722A)
- Information → `text-seablue-600` (Sea Blue #0090D4)
- Warnings → `text-camel-600` (Camel Yellow #D67909)
- Success → `text-aegreen-600` (AE Green #3F8E50)
- Errors → `text-aered-600` (AE Red #D83731)

---

## Overview

The AEGOV Design System uses a comprehensive color palette designed for federal UAE government applications. The system ensures accessibility, brand consistency, and optimal readability across all digital interfaces.

---

## Color Palette Categories

### 1. Core Palette (Strength)

Represents UAE federal identity and is **mandatory for ministries**. Authorities may adapt these to their brand colors.

#### AEGold (Primary Brand Color)

The primary brand color representing UAE federal identity.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50 | `#F9F7ED` | `bg-aegold-50` / `text-aegold-50` | Lightest backgrounds |
| 100 | `#F0EACB` | `bg-aegold-100` / `text-aegold-100` | Light backgrounds |
| 200 | `#E1D59A` | `bg-aegold-200` / `text-aegold-200` | Subtle accents |
| 300 | `#D2BF68` | `bg-aegold-300` / `text-aegold-300` | Muted highlights |
| 400 | `#C3AA36` | `bg-aegold-400` / `text-aegold-400` | Medium highlights |
| 500 | `#B68A35` | `bg-aegold-500` / `text-aegold-500` | Standard brand |
| 600 | `#B68A35` | `bg-aegold-600` / `text-aegold-600` | **Default brand color** |
| 700 | `#92722A` | `bg-aegold-700` / `text-aegold-700` | **Accessible primary** |
| 800 | `#6E551F` | `bg-aegold-800` / `text-aegold-800` | Dark accents |
| 900 | `#4A3915` | `bg-aegold-900` / `text-aegold-900` | Darker accents |
| 950 | `#361E12` | `bg-aegold-950` / `text-aegold-950` | Darkest |

**⚠️ Critical Accessibility Note:**
The standard brand color `#B68A35` lacks sufficient contrast as a background color. **Use `#92722A` (aegold-700) as the primary color for components** to meet WCAG 2.1 AA accessibility standards.

#### AERed (Error/Alert)

Emergency and alert signaling color.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50 | `#FEF2F2` | `bg-aered-50` / `text-aered-50` | Error backgrounds |
| 100 | `#FEE2E2` | `bg-aered-100` / `text-aered-100` | Light error states |
| 200 | `#FECACA` | `bg-aered-200` / `text-aered-200` | Subtle error highlights |
| 300 | `#FCA5A5` | `bg-aered-300` / `text-aered-300` | Muted error states |
| 400 | `#F87171` | `bg-aered-400` / `text-aered-400` | Medium error emphasis |
| 500 | `#EF4444` | `bg-aered-500` / `text-aered-500` | Standard error |
| 600 | `#D83731` | `bg-aered-600` / `text-aered-600` | **Default error color** |
| 700 | `#B91C1C` | `bg-aered-700` / `text-aered-700` | Dark error |
| 800 | `#991B1B` | `bg-aered-800` / `text-aered-800` | Darker error |
| 900 | `#7F1D1D` | `bg-aered-900` / `text-aered-900` | Very dark error |
| 950 | `#430E0C` | `bg-aered-950` / `text-aered-950` | Darkest error |

**Usage**: Error messages, destructive actions, critical alerts, form validation errors.

#### AEGreen (Success/Positive)

Success and positive state indication.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50 | `#F3FAF4` | `bg-aegreen-50` / `text-aegreen-50` | Success backgrounds |
| 100 | `#DEF7E0` | `bg-aegreen-100` / `text-aegreen-100` | Light success states |
| 200 | `#BCF0C2` | `bg-aegreen-200` / `text-aegreen-200` | Subtle success |
| 300 | `#86E495` | `bg-aegreen-300` / `text-aegreen-300` | Muted success |
| 400 | `#4ACD5D` | `bg-aegreen-400` / `text-aegreen-400` | Medium success |
| 500 | `#22C55E` | `bg-aegreen-500` / `text-aegreen-500` | Standard success |
| 600 | `#3F8E50` | `bg-aegreen-600` / `text-aegreen-600` | **Default success color** |
| 700 | `#15803D` | `bg-aegreen-700` / `text-aegreen-700` | Dark success |
| 800 | `#166534` | `bg-aegreen-800` / `text-aegreen-800` | Darker success |
| 900 | `#14532D` | `bg-aegreen-900` / `text-aegreen-900` | Very dark success |
| 950 | `#0F2415` | `bg-aegreen-950` / `text-aegreen-950` | Darkest success |

**Usage**: Success messages, completed actions, positive feedback, checkmarks.

#### AEBlack (Layout Aesthetics)

Primary color for text, borders, and layout elements.

| Shade | Hex Code | Tailwind Class | Usage |
|-------|----------|----------------|-------|
| 50 | `#F7F7F7` | `bg-aeblack-50` / `text-aeblack-50` | Lightest gray |
| 100 | `#E3E3E3` | `bg-aeblack-100` / `text-aeblack-100` | Light borders |
| 200 | `#C8C8C8` | `bg-aeblack-200` / `text-aeblack-200` | Subtle borders |
| 300 | `#A4A4A4` | `bg-aeblack-300` / `text-aeblack-300` | Disabled states |
| 400 | `#818181` | `bg-aeblack-400` / `text-aeblack-400` | Placeholder text |
| 500 | `#666666` | `bg-aeblack-500` / `text-aeblack-500` | Secondary text |
| 600 | `#4B4F58` | `bg-aeblack-600` / `text-aeblack-600` | **Default gray** |
| 700 | `#515151` | `bg-aeblack-700` / `text-aeblack-700` | Dark gray |
| 800 | `#232528` | `bg-aeblack-800` / `text-aeblack-800` | **Recommended text color** |
| 900 | `#0D0D0D` | `bg-aeblack-900` / `text-aeblack-900` | Near black |
| 950 | `#0E0F12` | `bg-aeblack-950` / `text-aeblack-950` | Pure black |

**Usage**: Body text, headings, borders, dividers, icons.

---

### 2. Supporting Palette (Softness)

Provides contrast and human touch for enhanced readability and visual interest.

| Color Name | Hex Code (500) | Tailwind Class | Usage |
|------------|----------------|----------------|-------|
| **Tech Blue** | `#286CFF` | `bg-techblue-500` / `text-techblue-500` | Information, links, interactive elements |
| **Sea Blue** | `#00ABEB` | `bg-seablue-500` / `text-seablue-500` | Secondary information, highlights |
| **Camel Yellow** | `#F29F0E` | `bg-camel-500` / `text-camel-500` | Warnings, caution states |
| **Desert Orange** | `#EB5F24` | `bg-desert-500` / `text-desert-500` | Highlights, accents |
| **Fuchsia** | `#D946EF` | `bg-fuchsia-500` / `text-fuchsia-500` | Special highlights |
| **Slate** | `#64748B` | `bg-slate-500` / `text-slate-500` | Neutral elements |

**Note**: Each supporting color has shades from 50 to 950 following the same pattern as core colors.

---

### 3. Environment Colors

Neutral shades for backgrounds that create visual hierarchy and contrast.

#### White Shades (50-300)
Light backgrounds and subtle contrast areas.

#### Slate Neutrals
Subtle background definition for cards, sections, and containers.

#### AEBlack Neutrals
Dark mode applications and high-contrast interfaces.

---

## Functional Color Applications

### Post-Action Feedback (Primary Functions)

| Function | Color | Tailwind Classes | When to Use |
|----------|-------|------------------|-------------|
| **Success** | AEGreen | `text-aegreen-600`, `bg-aegreen-50`, `border-aegreen-600` | Completed actions, confirmations, positive outcomes |
| **Error** | AERed | `text-aered-600`, `bg-aered-50`, `border-aered-600` | Failures, validation errors, critical issues |

### Pre-Action Guidance (Secondary Functions)

| Function | Color | Tailwind Classes | When to Use |
|----------|-------|------------------|-------------|
| **Warning** | Camel Yellow | `text-camel-600`, `bg-camel-50`, `border-camel-600` | Caution states, alerts, important notices |
| **Information** | Sea Blue | `text-seablue-600`, `bg-seablue-50`, `border-seablue-600` | Informational messages, tips, helpful guidance |

### Brand/Primary Actions

| Function | Color | Tailwind Classes | When to Use |
|----------|-------|------------------|-------------|
| **Primary** | AE Gold | `text-primary-600`, `bg-primary-600`, `border-primary-600` | Brand actions, primary buttons, key CTAs |

---

## Usage Guidelines

### Text Colors

**Default Text:**
```css
/* Highest contrast and readability */
color: text-aeblack-800; /* #232528 on white backgrounds */
```

**Recommended Combinations:**
- Body text: `text-aeblack-800` on `bg-white`
- Headings: `text-aeblack-900` on `bg-white`
- Secondary text: `text-aeblack-600` on `bg-white`
- Placeholder text: `text-aeblack-400` on `bg-white`
- Links: `text-seablue-600` with `hover:text-seablue-700`
- Primary actions: `text-primary-600` (AE Gold) for brand-related actions

### Background Patterns

**Homepage:**
- Patterns allowed only before footer sections
- Maximum 8% darker than base background

**Inner Pages:**
- Require minimum 4.5:1 contrast ratio
- Use subtle patterns from environment colors

### Gradients

**Same-Tonality Gradients (Allowed):**
```css
/* Using same color family from 950 to 50 */
background: linear-gradient(to right, #0F2415, #F3FAF4); /* aegreen-950 to aegreen-50 */
```

**Cross-Palette Gradients:**
- ✅ **Allowed**: Contrasting tones (Tech Blue to Sea Blue)
- ❌ **Prohibited**: Clashing combinations (AEGreen to AEGold)

---

## Accessibility Requirements

### WCAG 2.1 AA Standards

All color combinations must meet these minimum contrast ratios:

| Element Type | Minimum Ratio | Example |
|--------------|---------------|---------|
| **Normal Text** (<18.66px) | 4.5:1 | `text-aeblack-800` on `bg-white` |
| **Large Text** (≥18.66px or ≥14px bold) | 3:1 | `text-aeblack-600` on `bg-white` |
| **Graphics & UI Elements** | 3:1 | Icons, borders, form controls |

### Contrast Checking Tools

Recommended tools for verifying accessibility:
- **GetStark** - Figma/Sketch plugin
- **UI Colors** - Web-based checker
- **WebAIM Contrast Checker** - Online tool
- Chrome DevTools - Built-in contrast checker

### Common Accessible Combinations

```html
<!-- Text on backgrounds -->
<div class="bg-white text-aeblack-800">Optimal readability (21:1)</div>
<div class="bg-primary-600 text-white">Brand primary (accessible)</div>
<div class="bg-seablue-600 text-white">Info background (7.2:1)</div>
<div class="bg-aegreen-50 text-aegreen-800">Success message (8.5:1)</div>
<div class="bg-aered-50 text-aered-800">Error message (9.1:1)</div>
<div class="bg-camel-50 text-camel-800">Warning message</div>

<!-- Buttons -->
<button class="bg-primary-600 text-white">Primary Brand Action</button>
<button class="bg-seablue-600 text-white">Info Action</button>
<button class="bg-camel-600 text-white">Warning Action</button>

<!-- Links -->
<a class="text-seablue-600 hover:text-seablue-700">Info Link</a>
<a class="text-primary-600 hover:text-primary-700">Brand Link</a>
```

---

## Color Naming Conventions

### Tailwind CSS Format

**Structure**: `{property}-{color}-{shade}`

```html
<!-- Background colors -->
<div class="bg-primary-600">Primary background</div>
<div class="bg-aeblack-50">Light gray background</div>

<!-- Text colors -->
<p class="text-error-600">Error text</p>
<p class="text-success-700">Success text</p>

<!-- Border colors -->
<div class="border border-aeblack-200">Subtle border</div>
<div class="border-2 border-primary-500">Primary border</div>
```

### Shade System

- **50**: Lightest shade (backgrounds, subtle highlights)
- **100-200**: Very light (hover states, disabled elements)
- **300-400**: Light-medium (borders, dividers)
- **500-600**: Standard shade (primary usage)
- **700-800**: Dark (text, emphasis)
- **900-950**: Darkest (headings, strong emphasis)

---

## Best Practices

### ✅ Do

- Use `text-aeblack-800` for optimal body text readability
- Use `#92722A` (aegold-700) for accessible primary components
- Check contrast ratios with tools during design
- Start wireframes with neutral palettes before applying brand colors
- Maintain 4.5:1 contrast for normal text
- Use AEGreen for success states
- Use AERed for error states
- Use Tech Blue for informational messages
- Use Camel Yellow for warnings

### ❌ Don't

- Use `#B68A35` (aegold-600) as background without checking contrast
- Pair AEBlack text on AEGold backgrounds (insufficient contrast)
- Create gradients with opposite color families (AEGreen to AEGold)
- Reduce contrast ratios below accessibility standards
- Use bright colors for large text areas
- Mix too many colors in a single interface
- Override color values without testing accessibility

---

## Implementation Examples

### React/Tailwind Components

```tsx
// Success Alert
<div className="bg-aegreen-50 border border-aegreen-600 text-aegreen-800 p-4 rounded">
  <p className="font-semibold">Success!</p>
  <p>Your changes have been saved.</p>
</div>

// Error Alert
<div className="bg-aered-50 border border-aered-600 text-aered-800 p-4 rounded">
  <p className="font-semibold">Error</p>
  <p>Please fix the validation errors.</p>
</div>

// Warning Alert
<div className="bg-camel-50 border border-camel-600 text-camel-800 p-4 rounded">
  <p className="font-semibold">Warning</p>
  <p>Your session will expire soon.</p>
</div>

// Info Alert
<div className="bg-seablue-50 border border-seablue-600 text-seablue-800 p-4 rounded">
  <p className="font-semibold">Information</p>
  <p>A new update is available.</p>
</div>

// Primary Brand Button (AE Gold)
<button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded">
  Primary Action
</button>

// Information Button (Sea Blue)
<button className="bg-seablue-600 hover:bg-seablue-700 text-white px-4 py-2 rounded">
  Learn More
</button>

// Warning Button (Camel Yellow)
<button className="bg-camel-600 hover:bg-camel-700 text-white px-4 py-2 rounded">
  Proceed with Caution
</button>

// Card with proper contrast
<div className="bg-white border border-aeblack-200 shadow-sm rounded-lg p-6">
  <h3 className="text-aeblack-900 text-xl font-semibold mb-2">Card Title</h3>
  <p className="text-aeblack-600">Card description with readable text.</p>
  <button className="bg-primary-600 text-white px-4 py-2 rounded mt-4">
    View Details
  </button>
</div>
```

### CSS Custom Properties

```css
:root {
  /* AEGOV Semantic Colors */
  --color-primary: #92722A;     /* AE Gold 600 (Brand/Primary) */
  --color-info: #0090D4;        /* Sea Blue 600 (Secondary Support) */
  --color-warning: #D67909;     /* Camel 600 (Primary Support) */
  --color-success: #3F8E50;     /* AE Green 600 */
  --color-error: #D83731;       /* AE Red 600 */

  /* Brand Colors */
  --color-brand: #92722A;       /* AE Gold 600 (Accessible) */
  --color-brand-light: #B68A35; /* AE Gold 500 */

  /* Text Colors */
  --color-text-primary: #232528;   /* AE Black 800 */
  --color-text-secondary: #4B4F58; /* AE Black 600 */
  --color-text-muted: #666666;     /* AE Black 500 */

  /* Background Colors */
  --color-bg-primary: #FFFFFF;
  --color-bg-secondary: #F7F7F7;  /* AE Black 50 */
  --color-bg-tertiary: #E3E3E3;   /* AE Black 100 */
}
```

---

## Customization

Organizations can customize colors via `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        // AEGOV already provides these colors:
        // - aegold, aered, aegreen, aeblack
        // - techblue, seablue, camel, desert, fuchsia, slate

        // The 'primary' alias maps to 'aegold' by default
        // You can override or add custom mappings if needed

        // Example: Add custom semantic aliases
        info: {
          DEFAULT: '#043DFF', // techblue-600
          light: '#286CFF',   // techblue-500
          dark: '#003CFF',    // techblue-700
        }
      }
    }
  }
}
```

---

## Quick Reference

### Most Common Color Classes

```html
<!-- Text -->
text-aeblack-800     /* Body text */
text-aeblack-900     /* Headings */
text-aeblack-600     /* Secondary text */
text-primary-600     /* Brand/Primary (AE Gold) */
text-seablue-600     /* Links / Info */

<!-- Backgrounds -->
bg-white             /* Primary background */
bg-aeblack-50        /* Secondary background */
bg-primary-50        /* Brand background (AE Gold) */
bg-seablue-50        /* Info background */
bg-aegreen-50        /* Success background */
bg-aered-50          /* Error background */
bg-camel-50          /* Warning background */

<!-- Borders -->
border-aeblack-200   /* Subtle border */
border-primary-600   /* Brand border (AE Gold) */
border-seablue-600   /* Info border */
border-aegreen-600   /* Success border */
border-aered-600     /* Error border */
border-camel-600     /* Warning border */
```

---

## Additional Resources

- **Official Docs**: https://designsystem.gov.ae/guidelines/colour-system
- **Accessibility Standard**: WCAG 2.1 AA
- **Contrast Checker**: https://webaim.org/resources/contrastchecker/
- **Color Palette Tool**: https://uicolors.app/
