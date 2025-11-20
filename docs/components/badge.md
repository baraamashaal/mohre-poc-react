# Badge
**Docs**: https://designsystem.gov.ae/docs/components/badge
**Purpose**: Highlight key information such as statuses, categories, or counts
**JS Required**: ❌ No

## Dependent Components
- SVG Icons - For badge icons

## Description

Badges are compact UI elements that provide quick visual cues helping users identify important details instantly. They integrate seamlessly into interfaces for status indicators, categorization, notifications, and tagging without overwhelming the design. These small but effective visual indicators highlight key information such as statuses, categories, or counts.

## Badge Types

| Color | Class | Use Case |
|-------|-------|----------|
| **Default** | (no modifier) | Default state (aeblack colors) |
| **Info** | `.badge-info` | Informational badges (blue/tech colors) |
| **Error** | `.badge-error` | Error or negative states (red colors) |
| **Success** | `.badge-success` | Success or positive states (green colors) |
| **Warning** | `.badge-warning` | Warning or caution states (camel/orange colors) |

## Style Variations

| Style | Class | Description |
|-------|-------|-------------|
| **Soft** | (default) | Light background with colored text |
| **Solid** | `.badge-solid` | Solid background with inverted colors |

## Size Variations

| Class | Padding | Font Size |
|-------|---------|-----------|
| `.badge-base` | 0.125rem × 0.5rem | 14px (default) |
| `.badge-lg` | 0.25rem × 0.75rem | 16px |

## Examples

### Example 1: Visual Representation

```html
<span class="aegov-badge">Badge Default</span>
<span class="aegov-badge badge-info">Badge Info</span>
<span class="aegov-badge badge-error">Badge Error</span>
<span class="aegov-badge badge-success">Badge Success</span>
<span class="aegov-badge badge-warning">Badge Warning</span>
```

### Example 2: Badge Sizes

```html
<span class="aegov-badge badge-base">Badge default (base)</span>
<span class="aegov-badge badge-lg">Badge large (lg)</span>
```

### Example 3: Badge Solid

```html
<span class="aegov-badge badge-solid">Badge Default</span>
<span class="aegov-badge badge-solid badge-info">Badge Info</span>
<span class="aegov-badge badge-solid badge-error">Badge Error</span>
<span class="aegov-badge badge-solid badge-success">Badge Success</span>
<span class="aegov-badge badge-solid badge-warning">Badge Warning</span>
```

### Example 4: Badge with Icon

**Soft style:**
```html
<span class="aegov-badge">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
	</svg>
	Default
</span>
<span class="aegov-badge badge-info">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
	</svg>
	info
</span>
<span class="aegov-badge badge-error">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path>
	</svg>
	error
</span>
<span class="aegov-badge badge-success">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<path d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
	success
</span>
<span class="aegov-badge badge-warning">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<circle cx="128" cy="180" r="12"/>
	</svg>
	Warning
</span>
```

**Solid style:**
```html
<span class="aegov-badge badge-solid">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M176,232a8,8,0,0,1-8,8H88a8,8,0,0,1,0-16h80A8,8,0,0,1,176,232Zm40-128a87.55,87.55,0,0,1-33.64,69.21A16.24,16.24,0,0,0,176,186v6a16,16,0,0,1-16,16H96a16,16,0,0,1-16-16v-6a16,16,0,0,0-6.23-12.66A87.59,87.59,0,0,1,40,104.49C39.74,56.83,78.26,17.14,125.88,16A88,88,0,0,1,216,104Zm-16,0a72,72,0,0,0-73.74-72c-39,.92-70.47,33.39-70.26,72.39a71.65,71.65,0,0,0,27.64,56.3A32,32,0,0,1,96,186v6h64v-6a32.15,32.15,0,0,1,12.47-25.35A71.65,71.65,0,0,0,200,104Zm-16.11-9.34a57.6,57.6,0,0,0-46.56-46.55,8,8,0,0,0-2.66,15.78c16.57,2.79,30.63,16.85,33.44,33.45A8,8,0,0,0,176,104a9,9,0,0,0,1.35-.11A8,8,0,0,0,183.89,94.66Z"></path>
	</svg>
	Default
</span>
<span class="aegov-badge badge-solid badge-info">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path>
	</svg>
	info
</span>
<span class="aegov-badge badge-solid badge-error">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
		<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"></path>
	</svg>
	error
</span>
<span class="aegov-badge badge-solid badge-success">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<path d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
	success
</span>
<span class="aegov-badge badge-solid badge-warning">
	<svg class="badge-icon" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		<circle cx="128" cy="180" r="12"/>
	</svg>
	Warning
</span>
```

## Notes

**Usage Scenarios:**

- **Status indicators**: "Active," "Pending," "Completed"
- **Content categorization**: Topics, industries, or content types
- **Notification counts**: Unread messages or alerts
- **Tags**: "New," "Featured," "Trending," "Popular"

**Accessibility Requirements:**

- Maintain adequate color contrast ratios (WCAG 2.1 guidelines)
- Use meaningful text rather than relying on color alone
- Apply `aria-label` or `aria-labelledby` when necessary
- Set `aria-hidden="true"` on decorative icons

**Technical Details:**

- Base class: `.aegov-badge`
- Color modifiers: `.badge-info`, `.badge-error`, `.badge-success`, `.badge-warning`
- Style variants: `.badge-soft` (default), `.badge-solid`
- Size options: `.badge-base` (default), `.badge-lg`
- Icon class: `.badge-icon` on SVG elements
- Padding: vertical `.125rem`, horizontal `.5rem`
- Icon spacing: `.5rem` between icon and text content

**Responsive Design:**

Badges automatically scale with text size. Use responsive utility classes for context-specific sizing:
```html
<span class="aegov-badge badge-base md:badge-lg">Responsive Badge</span>
```

**RTL Support:**

Fully supports RTL layouts. Badge icons and text automatically adjust for right-to-left languages.

**React Implementation:**

```jsx
<Badge variant="info" size="base">
  Badge Text
</Badge>
```

React props: `variant` ("default" | "info" | "error" | "success" | "warning"), `size` ("base" | "lg"), `style` ("soft" | "solid"), `icon` (SVG element)
