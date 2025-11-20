# Toast
**Docs**: https://designsystem.gov.ae/docs/components/toast
**Purpose**: Delivers short, non-intrusive notifications without disrupting user workflow
**JS Required**: ✅ Yes (for dismiss functionality)

## Dependent Components
- [Button](button.md) - Action button and close button
- SVG Icons - Status icons and close icon
- Typography - Title and message text

## Description

The Toast component delivers "short, non-intrusive notifications that appear temporarily to deliver messages, confirmations, or alerts without disrupting the user's workflow." These lightweight, auto-dismissable messages provide user feedback while maintaining interaction flow.

## Key Features

**Primary Elements:**
- Container with `role="alert"` for screen reader announcement
- Icon (visual indicator for message type)
- Message body (title and description text)
- Optional action button
- Close/dismiss button

**Required Attributes:**
- `id` — Unique identifier for targeting specific toasts
- `data-dismiss-target` — Specifies which toast dismisses on close button click; must match toast container `id`
- `role="alert"` — Announces to assistive technologies

## Examples

### Example 1: Complete Toast with Icon, Title, Description & Action

Full-featured toast notification with all elements.

```html
<div id="toast-message-cta" class="w-full max-w-xs aegov-toast relative z-10" role="alert">
	<div class="flex items-start">
		<div class="toast-icon text-primary-600">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
		</div>
		<div class="toast-body">
			<span class="mb-1 text-base font-semibold text-aeblack-900">John Doe</span>
			<div class="mb-2 font-normal">Hi John, thanks for sharing your feedback regarding TDRA.</div>
			<a href="" class="aegov-btn btn-xs">Replay</a>
		</div>
		<button type="button" class="toast-dismiss" data-dismiss-target="#toast-message-cta" aria-label="Close">
			<span class="sr-only">Close</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
		</button>
	</div>
</div>
```

**Note:** Complete toast structure with info icon (`toast-icon`), title, message, action button (`btn-xs`), and dismiss button with `data-dismiss-target` attribute matching the toast `id`.

### Example 2: Generic Toast Template

Reusable toast structure with placeholder content.

```html
<div id="toast-message-cta" class="w-full max-w-xs aegov-toast relative z-10" role="alert">
	<div class="flex items-start">
		<div class="toast-icon text-primary-600">
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm16-40a8,8,0,0,1-8,8,16,16,0,0,1-16-16V128a8,8,0,0,1,0-16,16,16,0,0,1,16,16v40A8,8,0,0,1,144,176ZM112,84a12,12,0,1,1,12,12A12,12,0,0,1,112,84Z"></path></svg>
		</div>
		<div class="toast-body">
			<span class="mb-1 text-base font-semibold text-aeblack-900">...Title...</span>
			<div class="mb-2 font-normal">...Text message...</div>
			<a href="" class="aegov-btn btn-xs">...Button Text...</a>
		</div>
		<button type="button" class="toast-dismiss" data-dismiss-target="#toast-message-cta" aria-label="Close">
			<span class="sr-only">Close</span>
			<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path></svg>
		</button>
	</div>
</div>
```

**Note:** Template showing structure with placeholder markers. "You can modify it as per your requirements by adding or removing elements like icons, titles, descriptions, and buttons."

## Notes

**Behavior & Interaction:**

Toasts can:
- Appear automatically on event trigger
- Require user action for dismissal via close button
- Persist until dismissed for critical messages
- Auto-dismiss after specified duration (requires custom JavaScript)

**JavaScript Requirement:**
"This component depends on the use of JavaScript when you want to use dismiss functionality." The AEGov bundled JavaScript library is recommended but optional for implementing custom dismiss logic.

**Customization:**
Toast components are flexible. You may:
- Add or remove icons based on message type
- Include or omit titles
- Add action buttons for user interaction
- Modify colors to indicate status (success, error, warning, info)

**Accessibility:**
- `role="alert"` for screen reader announcements
- Keyboard-focusable close button (Enter/Space for dismissal)
- Semantic HTML structure
- Screen reader support ensures content reads aloud upon appearance
- Include `sr-only` class for "Close" text to provide context to assistive technologies

**RTL Support:**
The component fully supports right-to-left layouts. All AEGOV components support RTL for Arabic language compatibility.

**Usage Guidelines:**

**Appropriate Use Cases:**
- Notifications confirming successful actions (form submission, save confirmation)
- Error messages and validation feedback
- Updates and status changes
- Brief reminders not requiring full modal/alert

**Spacing Requirements:**
- Maintain 1rem vertical/horizontal padding on container
- Retain border and shadow (color modifications acceptable)
- No content placement below icon
- Maximum width of `max-w-xs` (20rem / 320px) for consistent sizing

**Best Practices:**
- Keep messages brief and actionable
- Use appropriate icons for message type (info, success, error, warning)
- Position toasts in consistent location (typically top-right or bottom-right)
- Provide clear dismiss affordance
- Avoid multiple simultaneous toasts
- Set appropriate auto-dismiss timers (3-5 seconds for non-critical messages)
- Ensure toasts don't obscure critical UI elements

**Icon Color Conventions:**
- Info: `text-primary-600`
- Success: `text-success-600`
- Warning: `text-warning-600`
- Error: `text-error-600`
