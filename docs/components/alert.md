# Alert
**Docs**: https://designsystem.gov.ae/docs/components/alert
**Purpose**: Delivers important messages, notifications, and feedback to users in a visually prominent manner
**JS Required**: ⚠️ Partially (only for dismiss functionality)

## Dependent Components
- SVG Icons - For visual indicators
- [Hyperlink](hyperlink.md) - For action-based alerts

## Description

The Alert component is a versatile element that provides users with important messages, notifications, and feedback. It communicates essential information through four distinct types: info, error, success, and warning. Each type can be rendered in soft or solid variations depending on background context.

Key distinction: "An alert is triggered based on an action. A banner (although may look visually similar to an alert) is different and it is usually attached to a page without a user taking an action."

## Alert Types

| Type | Class | Use Case |
|------|-------|----------|
| **Info** | `.alert-info` | Informational messages (blue/tech color) |
| **Error** | `.alert-error` | Error messages and failures (red color) |
| **Success** | `.alert-success` | Success confirmations (green color) |
| **Warning** | `.alert-warning` | Warning messages (camel/orange color) |

## Style Variations

| Style | Class | Description |
|-------|-------|-------------|
| **Soft** | (default) | Light background with colored text |
| **Solid** | `.alert-solid` | Solid background with inverted colors |

## Examples

### Example 1: Basic Alert Variations

**Soft versions:**
```html
<div role="alert" class="aegov-alert alert-info">
	<div class="alert-content">
		<p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-error">
	<div class="alert-content">
		<p>Unable to connect to the server. Please try again later or contact support.</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-success">
	<div class="alert-content">
		<p>Your payment was processed successfully. Thank you!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-warning">
	<div class="alert-content">
		<p> Your password will expire in 3 days. Consider updating it now.</p>
	</div>
</div>
```

**Solid versions:**
```html
<div role="alert" class="aegov-alert alert-solid alert-info">
	<div class="alert-content">
		<p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-solid alert-error">
	<div class="alert-content">
		<p>Unable to connect to the server. Please try again later or contact support.</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-solid alert-success">
	<div class="alert-content">
		<p>Your payment was processed successfully. Thank you!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-solid alert-warning">
	<div class="alert-content">
		<p> Your password will expire in 3 days. Consider updating it now.</p>
	</div>
</div>
```

### Example 2: Alert with Icon

```html
<div role="alert" class="aegov-alert alert-info">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="124" cy="84" r="12"/></svg>
	</div>
	<div class="alert-content">
		<p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-error">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"/></svg>
	</div>
	<div class="alert-content">
		<p>Unable to connect to the server. Please try again later or contact support.</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-success">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
	</div>
	<div class="alert-content">
		<p>Your payment was processed successfully. Thank you!</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-warning">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="180" r="12"/></svg>
	</div>
	<div class="alert-content">
		<p> Your password will expire in 3 days. Consider updating it now.</p>
	</div>
</div>
```

### Example 3: Alert with Icon and Link

```html
<div role="alert" class="aegov-alert alert-info">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M120,120a8,8,0,0,1,8,8v40a8,8,0,0,0,8,8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="124" cy="84" r="12"/></svg>
	</div>
	<div class="alert-content alert-with-link">
		<div>
			<p>The conference starts at 10:00 AM in Hall B. Don't be late!</p>
		</div>
		<p class="alert-link">
			<a href="#">
			Remind me
			<svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</a>
		</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-error">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-8,56a8,8,0,0,1,16,0v56a8,8,0,0,1-16,0Zm8,104a12,12,0,1,1,12-12A12,12,0,0,1,128,184Z"/></svg>
	</div>
	<div class="alert-content alert-with-link">
		<div>
			<p>Unable to connect to the server. Please try again later or contact support.</p>
		</div>
		<p class="alert-link">
			<a href="#">
			Details
			<svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</a>
		</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-success">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,104l40-80a32,32,0,0,1,32,32V80h64a16,16,0,0,1,15.87,18l-12,96A16,16,0,0,1,204,208H80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
	</div>
	<div class="alert-content alert-with-link">
		<div>
			<p>Your payment was processed successfully. Thank you!</p>
		</div>
		<p class="alert-link">
			<a href="#">
			View invoice
			<svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</a>
		</p>
	</div>
</div>
<div role="alert" class="aegov-alert alert-warning">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" aria-hidden="true"/><path d="M142.41,40.22l87.46,151.87C236,202.79,228.08,216,215.46,216H40.54C27.92,216,20,202.79,26.13,192.09L113.59,40.22C119.89,29.26,136.11,29.26,142.41,40.22Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="128" y1="144" x2="128" y2="104" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="180" r="12"/></svg>
	</div>
	<div class="alert-content alert-with-link">
		<div>
			<p> Your password will expire in 3 days. Consider updating it now.</p>
		</div>
		<p class="alert-link">
			<a href="#">
			Change password
			<svg class="rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</a>
		</p>
	</div>
</div>
```

### Example 4: Alert with List

```html
<div role="alert" class="aegov-alert alert-error">
	<div class="alert-icon">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
			<rect width="256" height="256" fill="none"/>
			<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-4,48a12,12,0,1,1-12,12A12,12,0,0,1,124,72Zm12,112a16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40a8,8,0,0,1,0,16Z"/>
		</svg>
	</div>
	<div class="alert-content">
		<div class="alert-title">There were 3 error that were encountered regarding your registration</div>
		<ul class="list-disc mt-3 space-y-2 ps-4">
			<li>Your password must be at least 8 characters</li>
			<li>Your password must include at least 1 numeric value</li>
			<li>Your last name is blank. Kindly add your last name to proceed with the registration.</li>
		</ul>
	</div>
</div>
```

### Example 5: Alert with Additional Content

```html
<div role="alert" class="aegov-alert alert-error">
    <div class="alert-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
            <rect width="256" height="256" fill="none"/>
            <path d="M236.8,188.09,149.35,36.22h0a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.35,24.35,0,0,0,40.55,224h174.9a24.35,24.35,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM120,104a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Zm8,88a12,12,0,1,1,12-12A12,12,0,0,1,128,192Z"/>
        </svg>
    </div>
    <div class="alert-content">
        <div class="alert-title">Oh snap! there seems to be a road block</div>
        <p>So this is embarrassing, but looks that we have come across an unexpected situation causing a system error. We have logged this event and will be looking into fixing this.</p>
        <p>In the meantime, you may also report this as an error using our feedback system.</p>
        <div class="alert-footer">
            <a href="#">
                Report this error
            </a>
            <a href="#">
                Capture a screenshot
            </a>
        </div>
    </div>
</div>
```

### Example 6: Dismissing an Alert

```html
<div role="alert" id="alert-1" class="aegov-alert alert-info">
    <div class="alert-content">
        <p>This is a warning that can be closed. Please take necessary action if required.</p>
    </div>
    <div class="alert-dismiss">
        <button data-dismiss-target="#alert-1" aria-label="Close">
            <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
        </button>
    </div>
</div>
```

## Notes

**Usage Guidelines:**

- "Alerts should be used judiciously. Overusing them may desensitize users, leading them to ignore important alerts."
- Use after form submission, button clicks, state changes, or before user actions
- "Always maintain a vertical padding of 1 rem on the alert container"
- "Always maintain a horizontal padding of 1.5 rem on the alert container"
- When using icons, spacing between icon and content must be 1 rem

**Accessibility Requirements:**

- Use `role="alert"` on container element
- Add `aria-hidden="true"` to SVG icons
- Use semantic HTML (`<div>`, `<p>`)
- Ensure keyboard operability for all interactive elements
- Add `aria-label="Close"` to dismiss buttons
- Test with screen readers

**JavaScript Dependency:**

Dismissible alerts require JavaScript. The bundled AEGov-Design-System library supports this out-of-box. Custom implementations must handle dismiss functionality via `data-dismiss-target` attribute.

**Technical Details:**

- Base class: `.aegov-alert`
- Type modifiers: `.alert-info`, `.alert-error`, `.alert-success`, `.alert-warning`
- Style variant: `.alert-solid`
- Content wrapper: `.alert-content`
- Icon container: `.alert-icon`
- Link modifier: `.alert-with-link`
- Link styling: `.alert-link`
- Title: `.alert-title`
- Footer: `.alert-footer`
- Dismiss button: `.alert-dismiss`

**Alert vs Banner:**

"An alert is triggered based on an action. A banner (although may look visually similar to an alert) is different and it is usually attached to a page without a user taking an action."

**RTL Support:**

Fully supports RTL layouts. Use `.rtl:rotate-180` on directional icons (arrows) for proper RTL behavior. Arabic language examples provided in official documentation.

**React Implementation:**

```jsx
<Alert
  variant="info"
  showIcon={true}
  style="soft">
  Your content
</Alert>
```

React props: `variant` ("info" | "error" | "success" | "warning"), `style` ("soft" | "solid"), `showIcon` (boolean, default: true), `title` (string), `action` (object with href and text), `onDismiss` (function)
