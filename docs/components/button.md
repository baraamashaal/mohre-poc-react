# Button
**Docs**: https://designsystem.gov.ae/docs/components/button
**Purpose**: Clickable UI component designed to trigger specific actions or events
**JS Required**: ❌ No

## Dependent Components
- SVG Icons - For button icons
- Typography - Button text styling

## Description

The Button component is "a clickable UI component, designed to trigger a specific action or event." It forms the foundation of interactive user interfaces for form submissions, navigation, and user guidance. Buttons communicate actions and enable user interactions, and should be used when triggering actions on the page, never for navigation between pages (use hyperlinks instead).

## Button Types

**4 Core Variations:**

| Type | Class | Use Case |
|------|-------|----------|
| **Solid** | `.aegov-btn` (default) | Primary actions (form submissions, confirmations) |
| **Outline** | `.btn-outline` | Secondary actions (filters, sorting) |
| **Soft** | `.btn-soft` | Tertiary actions (modal secondary choices) |
| **Link** | `.btn-link` | Minimal emphasis (third choice with multiple actions) |

## Size Variations

| Size Class | Height | Padding (L/R) | Font Size |
|-----------|--------|---------------|-----------|
| `.btn-xs` | 32px (2rem) | 1rem | 14px |
| `.btn-sm` | 40px (2.5rem) | 1.25rem | 14px |
| `.btn-base` | 48px (3rem) | 1.5rem | 16px |
| `.btn-lg` | 52px (3.25rem) | 1.75rem | 18px |

## Examples

### Example 1: Solid, Outline, Soft, and Link Button

```html
<button class="aegov-btn" type="button">Solid button</button>
<button class="aegov-btn btn-outline" type="button">Outline button</button>
<button class="aegov-btn btn-soft" type="button">Soft button</button>
<button class="aegov-btn btn-link" type="button">Link button</button>
```

### Example 2: Size Variations

```html
<button class="aegov-btn btn-lg" type="button">Large button</button>
<button class="aegov-btn" type="button">Base button</button>
<button class="aegov-btn btn-sm" type="button">Small button</button>
<button class="aegov-btn btn-xs" type="button">Extra small button</button>
```

### Example 3: Button with Left Icon

```html
<button class="aegov-btn" type="button">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" aria-hidden="true"/>
		<circle cx="84" cy="108" r="52" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<path d="M10.23,200a88,88,0,0,1,147.54,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
	My account
</button>
```

### Example 4: Button with Right Icon

```html
<button class="aegov-btn" type="button">
	Register
	<svg class="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>
```

### Example 5: Button with Dual Icons

```html
<button class="aegov-btn" type="button">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<path d="M50.69,184.92A127.52,127.52,0,0,0,64,128a63.85,63.85,0,0,1,24-50" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
	Login now
	<svg class="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>
```

### Example 6: Icon-Only Button

```html
<button class="aegov-btn btn-icon" type="button">
	<svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"></rect>
		<circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
		<line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
	</svg>
	<span class="sr-only">Search</span>
</button>
```

### Example 7: Secondary Color

```html
<button class="aegov-btn btn-secondary" type="button">Solid button</button>
<button class="aegov-btn btn-outline btn-secondary" type="button">Outline button</button>
<button class="aegov-btn btn-soft btn-secondary" type="button">Soft button</button>
<button class="aegov-btn btn-link btn-secondary" type="button">Link button</button>
```

### Example 8: Disabled State

```html
<button class="aegov-btn" type="button" disabled aria-disabled="true">
	Solid button
</button>
<button class="aegov-btn btn-outline" type="button" disabled aria-disabled="true">
	Outline button
</button>
<button class="aegov-btn btn-soft" type="button" disabled aria-disabled="true">
	Soft button
</button>
<button class="aegov-btn btn-link" type="button" disabled aria-disabled="true">
	Link button
</button>
```

### Example 9: RTL Support (Arabic Text)

```html
<button class="aegov-btn" type="button" dir="rtl">تسجيل الدخول</button>
```

## Notes

**Usage Contexts:**

When to use buttons:
- Form submissions
- Opening modals or dialogs
- Triggering actions on current page
- Confirming or canceling operations
- Starting processes or workflows

When NOT to use buttons:
- Navigation between pages (use hyperlinks)
- External links (use hyperlinks with appropriate attributes)

**Accessibility Requirements:**

- Include descriptive text or `aria-label` for icon-only buttons
- Use `aria-disabled="true"` along with `disabled` attribute
- Ensure buttons are keyboard navigable (Tab key)
- Maintain sufficient color contrast ratios
- Provide clear focus states
- Use semantic `<button>` elements, not `<div>` or `<span>`

**Technical Details:**

- Base class: `.aegov-btn`
- Style modifiers: `.btn-outline`, `.btn-soft`, `.btn-link`
- Size options: `.btn-xs`, `.btn-sm`, `.btn-base` (default), `.btn-lg`
- Color variant: `.btn-secondary`
- Icon-only: `.btn-icon`
- RTL support: Icons with `.rtl:-scale-x-100` automatically flip in RTL layouts
- Disabled state: Add `disabled` attribute and `aria-disabled="true"`

**Icon Guidelines:**

- SVG icons should be sized appropriately within buttons
- Use `.rtl:-scale-x-100` on directional icons (arrows) for RTL support
- Add `aria-hidden="true"` to decorative icons
- Include `<span class="sr-only">` text for icon-only buttons
- Icons automatically inherit button color

**Best Practices:**

- Use solid buttons for primary actions (one per page section)
- Use outline buttons for secondary actions
- Use soft buttons for tertiary actions
- Limit button text to 2-3 words when possible
- Maintain consistent button sizing within a context
- Provide clear visual feedback on hover and focus
- Never use multiple primary (solid) buttons for conflicting actions

**RTL Support:**

Full RTL layout support for Arabic and other right-to-left languages. Directional icons (arrows) automatically flip using `.rtl:-scale-x-100` class.

**React Implementation:**

```jsx
<Button variant="solid" size="base">
  Click me
</Button>
```

React props: `variant` ("solid" | "outline" | "soft" | "link"), `size` ("xs" | "sm" | "base" | "lg"), `disabled` (boolean), `icon` (JSX element), `iconPosition` ("left" | "right" | "both"), `secondary` (boolean)
