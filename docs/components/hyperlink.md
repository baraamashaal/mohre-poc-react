# Hyperlink
**Docs**: https://designsystem.gov.ae/docs/components/hyperlink
**Purpose**: Enables accessible navigation between pages and content sections
**JS Required**: ❌ No

## Dependent Components
- [Button](button.md) - For styled link-as-button variations
- SVG Icons - For directional arrows

## Description

The hyperlink is a navigation element that links to another location, allowing users to move between pages or to specific content within the same page. Anchor tags within content receive automatic styling using the primary color scheme with animated underline effects on hover.

## Link Types

| Type | Class | Use Case |
|------|-------|----------|
| **Inline** | (default) | Standard text links |
| **Block CTA** | `.aegov-link` | Call-to-action links with icons |
| **Soft** | `.aegov-link .link-soft` | Soft background variant |
| **Underline** | `.aegov-link .link-underline` | Force underline styling |
| **As Button** | `.aegov-btn` classes | Links styled as buttons |

## Examples

### Example 1: Standard Inline Link

```html
<a href="#">primary color</a>
```

**Note:** Basic link automatically styled with primary color and underline on hover.

### Example 2: External Link with Attributes

```html
<a href="https://www.moca.gov.ae/en/" rel="noopener noreferrer" target="_blank" title="The Ministry of Cabinet Affairs">
	The Ministry of Cabinet Affairs
</a>
```

**Note:** External links require `rel="noopener noreferrer"` and `target="_blank"`. Include descriptive `title` attribute.

### Example 3: URL Display Link

```html
<a href="https://u.ae/en/" target="_blank" title="The United Arab Emirates Governement Portal">
	https://u.ae/
</a>
```

**Note:** When displaying URL as link text, still use descriptive `title` attribute for accessibility.

### Example 4: Block CTA Link with Arrow Icon

```html
<div class="block">
	<a href="#" class="aegov-link" title="Some link text related description">
		A link with lengthy text
		<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none" />
			<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
		</svg>
	</a>
</div>
```

**Note:** Use `.aegov-link` class for block CTAs. Icons use `.link-icon` class and `rtl:-scale-x-100` for RTL support.

### Example 5: Learn More CTA Link

```html
<div class="block">
	<a href="#" class="aegov-link" title="Some link text related description">
		Learn more
		<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none" />
			<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
		</svg>
	</a>
</div>
```

**Note:** Common CTA pattern with arrow icon. Keep text concise (recommended 3 words maximum).

### Example 6: CTA Link with Chevron Icon

```html
<div class="block">
	<a href="#" class="aegov-link" title="Some link text related description">
		Find out more
		<svg xmlns="http://www.w3.org/2000/svg" class="link-icon rtl:-scale-x-100" aria-hidden="true" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none"/>
			<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
	</a>
</div>
```

**Note:** Alternative chevron icon style for directional indication.

### Example 7: Soft Button Link with Arrow

```html
<div class="block">
	<a href="#" class="aegov-link link-soft" title="Some link text related description">
		Learn more
		<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none" />
			<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
			<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
		</svg>
	</a>
</div>
```

**Note:** Add `.link-soft` class for soft background variant with padding.

### Example 8: Soft Button Link with Chevron

```html
<div class="block">
	<a href="#" class="aegov-link link-soft" title="Some link text related description">
		Find out more
		<svg xmlns="http://www.w3.org/2000/svg" class="link-icon rtl:-scale-x-100" aria-hidden="true" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none"/>
			<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
	</a>
</div>
```

**Note:** Soft variant with chevron icon alternative.

### Example 9: Link as Outline Button

```html
<a href="#" class="aegov-btn btn-outline" title="Some link text related description">
	Learn more
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
		<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</a>
```

**Note:** Use button classes on links for button appearance. Use `<a>` for navigation, `<button>` for actions.

### Example 10: Link as Soft Button

```html
<div class="block">
	<a href="#" class="aegov-btn btn-soft" title="Some link text related description">
		Find out more
		<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
			<rect width="256" height="256" fill="none"/>
			<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
	</a>
</div>
```

**Note:** Links can use full button styling with `.aegov-btn` and button modifier classes.

### Example 11: External Link with Screen Reader Text

```html
<a href="https://www.example.com" rel="noopener" target="_blank">
	The New Experience<span class="sr-only"> (opens in new tab)</span>
</a>
```

**Note:** Add `(opens in new tab)` text with `.sr-only` class for screen reader users.

### Example 12: Arabic RTL Example

```html
<a href="#">تواصل مع قيادات الهيئة</a>
```

**Note:** Hyperlinks fully support RTL layouts. Icons automatically flip with `rtl:-scale-x-100` class.

## Notes

**Usage Guidelines:**

- **Navigation purpose**: Use hyperlinks when directing users away from current content
- **Interactive actions**: Use `<button>` elements for triggering feedback or continuing actions
- **Block link text**: Aim for 3 words maximum (recommended, not required)

**External Link Security:**

"When placing an external link, it is advisable to add `rel="noopener noreferrer"`" to prevent security vulnerabilities. `target="_blank"` now implicitly provides noopener, but explicit inclusion is recommended. The `noreferrer` attribute masks referral information in destination analytics.

**Accessibility Requirements:**

- **Keyboard navigation**: Tab to links, Enter/Space to activate
- **Link text**: Must describe purpose or destination; avoid "click here"
- **Color alternative**: All non-icon hyperlinks must be underlined by default for color-blind users
- **External links**: Minimum `rel="noopener"` attribute required
- **New tab notification**: Add "(opens in new tab)" with `<span class="sr-only">` for screen readers

**State Styling:**

| State | Properties |
|-------|-----------|
| Default | text-primary-600, underlined |
| Hover | text-primary-500, underlined, 2px thickness |
| Active | text-primary-700, underlined |
| Visited | text-primary-600, underlined |
| Focus | Ring using lighter primary shade |

**RTL Support:**

Full RTL layout support. Icon class includes `rtl:-scale-x-100` for horizontal flipping in RTL contexts.

**React Implementation:**

```jsx
<Hyperlink href="https://example.com" variant="cta" icon external>
	Learn more
</Hyperlink>
```

React props: `href` (string), `variant` ("default" | "cta" | "soft" | "secondary" | "secondary-soft"), `asChild` (boolean), `external` (boolean), `icon` (ReactNode/boolean), `children` (string)
