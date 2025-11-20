# Banner
**Docs**: https://designsystem.gov.ae/docs/components/banner
**Purpose**: Display urgent or crucial information through adhesive, non-intrusive sections
**JS Required**: ⚠️ Partially (only for dismiss functionality)

## Dependent Components
- [Hyperlink](hyperlink.md) - For action links
- [Button](button.md) - For notice banner actions
- SVG Icons - For directional arrows and close buttons

## Description

Banners function as strategically positioned, sticky elements that deliver essential notifications, announcements, or interactions while maintaining user experience. They can be placed at header or footer positions and support dismissal functionality. The component is responsive, accessible, and supports both LTR and RTL layouts.

As the documentation states, banners are "adhesive sections that display urgent or crucial information, offering a non-intrusive method to convey messages without overshadowing the primary content."

## Banner Types

| Type | Class | Position | Use Case |
|------|-------|----------|----------|
| **Top** | `.banner-top` | Page header | Site-wide announcements |
| **Bottom** | `.banner-bottom` | Page footer | Cookie consent, notices |
| **Notice** | `.banner-notice` | Bottom/Overlay | Extended content with actions |

## Banner vs Alert

Key distinction: Banners are attached to pages without user action and deliver site-wide messages. Alerts are triggered by user actions and communicate contextual feedback.

## Examples

### Example 1: Default Banner with Action Link

Standard top banner for site-wide announcements.

```html
<div class="aegov-banner banner-top" role="region" aria-label="Account upgrade notice">
	<div class="container">
		<div class="banner-content flex flex-wrap md:flex-nowrap items-center md:justify-center gap-3">
			Upgrading your account to be used with UAE Pass is now active.
			<a href="#" class="banner-link aegov-link link-underline">
				Connect your account to UAE PASS
				<svg class="w-5 h-5 rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<rect width="256" height="256" fill="none"></rect>
					<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
				</svg>
			</a>
		</div>
	</div>
</div>
```

**Note:** Top banners use `role="region"` with descriptive `aria-label`. Action links include `.banner-link` class and RTL-aware arrow icons.

### Example 2: Colored Banner

Banner with custom dark camel background for visual emphasis.

```html
<div class="aegov-banner banner-top bg-camel-600 border-camel-500" role="region" aria-label="UAE Pass account connection">
	<div class="container">
		<div class="banner-content text-camel-50 flex flex-wrap md:flex-nowrap items-center md:justify-center gap-3">
			Upgrading your account to be used with UAE Pass is now active.
			<a href="#" class="aegov-link link-underline text-camel-50 hover:text-camel-100 focus-visible:ring-camel-400 focus-visible:ring-offset-camel-600">
				Connect your account to UAE PASS
				<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<rect width="256" height="256" fill="none"></rect>
					<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
				</svg>
			</a>
		</div>
	</div>
</div>
```

**Note:** Use Tailwind color classes (`bg-*`, `border-*`, `text-*`) for custom banner colors. Ensure text contrast meets WCAG standards. Adjust hover and focus states to match color scheme.

### Example 3: Header-Integrated Banner

Colored banner integrated with page header for announcements.

```html
<div class="aegov-banner banner-top bg-aered-50 border-aered-500" role="banner" aria-label="Government services announcement">
	<div class="container">
		<div class="banner-content text-aered-600 flex flex-wrap md:flex-nowrap items-center md:justify-center gap-3">
			Discover essential government services and stay informed about policies and initiatives. Your gateway to efficient governance.
			<a href="#" onclick="return false;" class="aegov-link link-underline text-aered-600 hover:text-aered-700 focus-visible:ring-aered-400 focus-visible:ring-offset-aered-50">
				Learn more
				<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
					<rect width="256" height="256" fill="none"></rect>
					<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
				</svg>
			</a>
		</div>
	</div>
</div>
```

**Note:** Use `role="banner"` for global site information at top of page. Light error color (aered-50) creates visual prominence without alarm.

### Example 4: Notice Banner - Secondary Light

Bottom notice banner for cookie consent with slate background.

```html
<div id="cookies-banner1" tabindex="-1" class="aegov-banner banner-notice banner-bottom bg-slate-50 border-slate-700" role="region" aria-label="Cookie consent banner">
	<div class="py-4 banner-content max-w-screen-lg">
		<h2 class="mb-4 text-xl font-bold text-aeblack-800">
			We use cookies to personalise this website
		</h2>
		<p class="font-normal text-aeblack-800 mb-0">
			Our site enables script (e.g. cookies) that is able to read, store, and write information on your browser and in your device. By using our website, you're agreeing to the collection of data as described in our Privacy Policy.
		</p>
	</div>
	<div class="flex items-center flex-shrink-0">
		<a href="" class="aegov-btn btn-secondary">Accept</a>
		<a href="" class="aegov-btn btn-secondary btn-link">Deny</a>
	</div>
</div>
```

**Note:** Notice banners combine `.banner-notice` and `.banner-bottom` classes. Use `tabindex="-1"` for programmatic focus. Include both heading and detailed text. Actions use secondary button style.

### Example 5: Notice Banner - Primary Light

Bottom notice banner with primary color scheme.

```html
<div id="cookies-banner2" tabindex="-1" class="aegov-banner banner-bottom banner-notice bg-primary-50 border-primary-700" role="region" aria-label="Cookie consent banner">
	<div class="py-4 banner-content max-w-screen-lg">
		<h2 class="mb-4 text-xl font-bold text-primary-800">
			We use cookies to personalise this website
		</h2>
		<p class="font-normal text-primary-800 mb-0">
			Our site enables script (e.g. cookies) that is able to read, store, and write information on your browser and in your device. By using our website, you're agreeing to the collection of data as described in our Privacy Policy.
		</p>
	</div>
	<div class="flex items-center flex-shrink-0">
		<a href="" class="aegov-btn btn-primary">Accept</a>
		<a href="" class="aegov-btn btn-primary btn-link">Deny</a>
	</div>
</div>
```

**Note:** Use primary color scheme for higher emphasis notice banners. Button styles should match banner color variant.

### Example 6: Dismissible Banner

Banner with close button for user dismissal.

```html
<div>
	<div class="container">
		<div id="toast-default" class="aegov-banner bg-slate-700 rounded-xl" role="status" aria-live="polite">
			<div class="flex items-center justify-between gap-3">
				<div class="banner-content text-slate-50 flex flex-col md:flex-row md:items-center gap-3">
					We are participating at World Government Summit 2023
					<a href="#" onclick="return false;" class="aegov-link link-underline text-slate-50 hover:text-slate-100 focus-visible:ring-slate-400 focus-visible:ring-offset-slate-700">
						Come join us
						<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
							<rect width="256" height="256" fill="none"></rect>
							<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
						</svg>
					</a>
				</div>
				<button class="banner-dismiss text-slate-50" data-dismiss-target="#toast-default" aria-label="Close">
					<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
						<path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z"></path>
					</svg>
				</button>
			</div>
		</div>
	</div>
</div>
```

**Note:** Requires JavaScript for dismiss functionality. Use unique `id` on banner and matching `data-dismiss-target` on button. Include `role="status"` with `aria-live="polite"` for non-critical updates. Close button needs `.banner-dismiss` class and `aria-label="Close"`.

## Notes

**Usage Guidelines:**

Appropriate use cases include:
- **Urgent notifications** for maintenance or service disruptions
- **Cookie consent** compliance with privacy regulations
- **Important announcements** for feature releases or policy changes
- **Call-to-action initiatives** prompting user engagement
- **Policy changes** informing users of updated terms

**Accessibility Requirements:**

The documentation emphasizes: "Use semantic HTML elements such as `<div>` for the overall container and `<p>` for banner content to provide meaningful structure to assistive technologies."

Key accessibility attributes:
- `role="banner"` for global site information (top of page)
- `role="region"` with descriptive `aria-label` for informational banners
- `role="status"` with `aria-live="polite"` for non-critical updates
- `role="alert"` for critical issues
- `aria-label="Close"` for dismissible buttons
- Keyboard navigation support required
- `tabindex="-1"` for programmatic focus on notice banners

**Spacing Requirements:**

- Vertical padding: `1 rem` on banner container
- Horizontal padding: `0.75 rem` on banner container
- Content-to-action spacing: `0.75 rem`
- Gap between elements: `0.75rem` (gap-3)

**Behavior Characteristics:**

Banners exhibit: visibility at strategic page locations, sticky positioning during scroll, interactive elements (buttons/links), dismissal options, responsive design adaptation, and optional timed display with close functionality.

**JavaScript Dependency:**

Dismissible banners require JavaScript. The bundled AEGov-Design-System library supports this out-of-box. Custom implementations must handle dismiss functionality via `data-dismiss-target` attribute.

**RTL Support:**

Full support for right-to-left layouts. Use `.rtl:-scale-x-100` on directional SVG icons (arrows) for proper RTL behavior.

**Responsive Design:**

Banners use flex layouts that adapt from vertical (mobile) to horizontal (desktop). Content wraps with `flex-wrap` on small screens, switches to `flex-nowrap` at md breakpoint.

**React Implementation:**

```jsx
<Banner
  position="top"
  variant="default"
  onDismiss={() => {}}
  action={{
    onClick: () => {},
    text: "Connect your account to UAE PASS"
  }}>
  Upgrading your account to be used with UAE Pass is now active.
</Banner>
```

React props: `position` ("top" | "bottom"), `variant` ("default" | "camel" | "red" | "notice" | "dark"), `isDismissible` (boolean), `centered` (boolean), `title` (string), `onDismiss` (function), `action` (object with onClick and text), `children` (content)
