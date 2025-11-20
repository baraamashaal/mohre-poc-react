# Modal
**Docs**: https://designsystem.gov.ae/docs/components/modal
**Purpose**: Displays focused dialog overlay for information, input, confirmations, or decisions
**JS Required**: ✅ Yes

## Dependent Components
- [Button](button.md) - For modal triggers and actions
- SVG Icons - For close buttons and visual indicators

## Description

The Modal component is a UI overlay element that displays content in a focused dialog box, preventing user interaction with background content. It's used to present information, capture user input, display confirmations, or prompt decisions without navigating away from the current page.

## Core Functionality

The Modal operates through data attributes controlling visibility:
- `data-modal-target="[ID]"` – identifies the modal to control
- `data-modal-toggle="[ID]"` – shows/hides the modal
- `data-modal-show="[ID]"` – explicitly displays the modal
- `data-modal-hide="[ID]"` – closes the modal

Users can close modals via ESC key, backdrop click (unless `data-modal-backdrop="static"`), or close buttons.

## Examples

### Example 1: Basic Modal

Simple hello modal with close button.

```html
<button data-modal-target="popup-modal" data-modal-toggle="popup-modal" class="aegov-btn" type="button">
	Toggle modal
</button>

<div id="popup-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="modal-title">
	<div class="relative p-4 w-full max-w-md max-h-full">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="popup-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<h3 id="modal-title" class="mb-5 text-lg font-normal text-aeblack-500">
					Hello! This is a basic modal.
				</h3>
			</div>
		</div>
	</div>
</div>
```

**Note:** Always include `role="dialog"` and `aria-labelledby` for accessibility. Close button needs `.modal-close` class and `data-modal-hide` attribute.

### Example 2: Language Selection Modal

Dropdown-style language picker with primary/secondary language options.

```html
<button data-modal-target="language-modal" data-modal-toggle="language-modal" class="aegov-btn" type="button">
	Select Language
</button>

<div id="language-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="language-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="language-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5">
				<h3 id="language-title" class="text-xl font-semibold mb-4">Choose Language</h3>
				<ul class="space-y-2">
					<li><a href="#" class="block p-3 hover:bg-aeblack-50 rounded">English</a></li>
					<li><a href="#" class="block p-3 hover:bg-aeblack-50 rounded">العربية</a></li>
				</ul>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use for language selection in government entities. Include both English and Arabic options.

### Example 3: Gold Star Rating Modal

Clickable rating badge modal with verification link.

```html
<button data-modal-target="rating-modal" data-modal-toggle="rating-modal" class="aegov-btn" type="button">
	View Rating
</button>

<div id="rating-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="rating-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="rating-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<div class="mb-4">
					<svg class="w-16 h-16 mx-auto text-aeyellow-500" fill="currentColor" viewBox="0 0 20 20">
						<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
					</svg>
				</div>
				<h3 id="rating-title" class="mb-2 text-xl font-semibold">5 Star Service</h3>
				<p class="mb-5 text-aeblack-500">This service has been verified and rated.</p>
				<a href="#" class="aegov-link">View verification details</a>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use for displaying service quality certifications. Include star icon and verification link.

### Example 4: Customer Pulse Modal

Feedback survey trigger modal.

```html
<button data-modal-target="feedback-modal" data-modal-toggle="feedback-modal" class="aegov-btn" type="button">
	Give Feedback
</button>

<div id="feedback-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="feedback-title">
	<div class="relative p-4 w-full max-w-lg">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="feedback-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5">
				<h3 id="feedback-title" class="text-xl font-semibold mb-4">How was your experience?</h3>
				<p class="mb-4 text-aeblack-500">We value your feedback to improve our services.</p>
				<div class="space-y-3">
					<button class="aegov-btn btn-outline w-full">Excellent</button>
					<button class="aegov-btn btn-outline w-full">Good</button>
					<button class="aegov-btn btn-outline w-full">Needs Improvement</button>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use for feedback collection. Include multiple response options as buttons.

### Example 5: Single Action Modal with Icon

Success confirmation with checkmark icon.

```html
<button data-modal-target="success-modal" data-modal-toggle="success-modal" class="aegov-btn" type="button">
	Show Success
</button>

<div id="success-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="success-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="success-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<div class="mb-4">
					<svg class="w-12 h-12 mx-auto text-aegreen-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
					</svg>
				</div>
				<h3 id="success-title" class="mb-5 text-lg font-normal text-aeblack-900">
					Your action was successful!
				</h3>
				<button data-modal-hide="success-modal" type="button" class="aegov-btn">
					Continue
				</button>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use green checkmark icon for success confirmations. Single action button to dismiss.

### Example 6: Single Action Modal without Icon

Payment confirmation without visual icon.

```html
<button data-modal-target="payment-modal" data-modal-toggle="payment-modal" class="aegov-btn" type="button">
	Confirm Payment
</button>

<div id="payment-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="payment-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="payment-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<h3 id="payment-title" class="mb-5 text-lg font-normal text-aeblack-900">
					Payment of AED 150.00 will be processed
				</h3>
				<button data-modal-hide="payment-modal" type="button" class="aegov-btn">
					Confirm
				</button>
			</div>
		</div>
	</div>
</div>
```

**Note:** Simple text-only confirmation without icons. Use for straightforward actions.

### Example 7: Multiple Actions Modal

Two-button confirmation dialog.

```html
<button data-modal-target="confirm-modal" data-modal-toggle="confirm-modal" class="aegov-btn" type="button">
	Delete Item
</button>

<div id="confirm-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="confirm-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="confirm-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<h3 id="confirm-title" class="mb-5 text-lg font-normal text-aeblack-900">
					Are you sure you want to delete this item?
				</h3>
				<div class="flex justify-center gap-3">
					<button data-modal-hide="confirm-modal" type="button" class="aegov-btn">
						Yes, delete
					</button>
					<button data-modal-hide="confirm-modal" type="button" class="aegov-btn btn-outline">
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use two buttons for binary choices. Primary action on left, cancel on right.

### Example 8: Simple Alert Modal

Warning modal with deactivation confirmation.

```html
<button data-modal-target="alert-modal" data-modal-toggle="alert-modal" class="aegov-btn" type="button">
	Deactivate Account
</button>

<div id="alert-modal" class="aegov-modal hidden z-50" role="alertdialog" aria-labelledby="alert-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="alert-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<div class="mb-4">
					<svg class="w-12 h-12 mx-auto text-aeyellow-500" fill="currentColor" viewBox="0 0 20 20">
						<path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd"/>
					</svg>
				</div>
				<h3 id="alert-title" class="mb-5 text-lg font-semibold text-aeblack-900">
					Warning: This action cannot be undone
				</h3>
				<p class="mb-5 text-aeblack-500">Deactivating your account will permanently remove all your data.</p>
				<div class="flex justify-center gap-3">
					<button data-modal-hide="alert-modal" type="button" class="aegov-btn">
						I understand, deactivate
					</button>
					<button data-modal-hide="alert-modal" type="button" class="aegov-btn btn-outline">
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use `role="alertdialog"` for warning modals. Include warning icon (yellow triangle).

### Example 9: Bottom-Right Placement Modal

Alert positioned via `data-modal-placement="bottom-right"`.

```html
<button data-modal-target="placement-modal" data-modal-toggle="placement-modal" class="aegov-btn" type="button">
	Show Notification
</button>

<div id="placement-modal" data-modal-placement="bottom-right" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="placement-title">
	<div class="relative p-4 w-full max-w-sm">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="placement-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4">
				<h3 id="placement-title" class="text-lg font-semibold mb-2">New notification</h3>
				<p class="text-aeblack-500">You have a new message waiting.</p>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use `data-modal-placement` attribute with values: `{top|center|bottom}-{left|center|right}`.

### Example 10: Scrollable Content Modal

Terms/conditions modal with overflow handling using `max-h-80` and `md:max-h-[450px]`.

```html
<button data-modal-target="terms-modal" data-modal-toggle="terms-modal" class="aegov-btn" type="button">
	View Terms
</button>

<div id="terms-modal" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="terms-title">
	<div class="relative p-4 w-full max-w-2xl">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="terms-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5">
				<h3 id="terms-title" class="text-xl font-semibold mb-4">Terms and Conditions</h3>
				<div class="max-h-80 md:max-h-[450px] overflow-y-auto mb-4">
					<p class="mb-4 text-aeblack-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
					<p class="mb-4 text-aeblack-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p class="mb-4 text-aeblack-500">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
					<p class="text-aeblack-500">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<button data-modal-hide="terms-modal" type="button" class="aegov-btn">
					I Accept
				</button>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use `max-h-*` classes with `overflow-y-auto` for long content. Responsive max-height with breakpoints.

### Example 11: Confirmation Standard Modal

Standard confirmation with checkbox and dual action buttons.

```html
<button data-modal-target="modal-confirm-standard" data-modal-toggle="modal-confirm-standard" class="aegov-btn" type="button">
	Confirm Standard
</button>

<div id="modal-confirm-standard" tabindex="-1" aria-hidden="true" class="aegov-modal hidden z-50" role="dialog" aria-labelledby="modal-confirm-standard-title">
	<div class="relative w-full md:max-w-2xl max-h-full">
		<div class="aegov-modal-wrapper p-4 md:p-5 xl:p-6">
			<div>
				<div class="sm:flex sm:items-start">
					<div class="bg-aegreen-100 mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full sm:mx-0">
						<svg class="h-8 w-8 text-aegreen-600 fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#000000" viewBox="0 0 256 256">
							<path d="M173.66,98.34a8,8,0,0,1,0,11.32l-56,56a8,8,0,0,1-11.32,0l-24-24a8,8,0,0,1,11.32-11.32L112,148.69l50.34-50.35A8,8,0,0,1,173.66,98.34ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z"></path>
						</svg>
					</div>
					<div class="mt-4 text-center sm:ms-8 sm:mt-0 sm:text-left">
						<h3 class="text-lg font-bold text-aeblack-950" id="modal-confirm-standard-title">Are you sure you want to submit this application?</h3>
						<div class="mt-4">
							<p class="text-base font-normal text-aeblack-800 mb-0">You are about to submit the application to process a medical fitness examination at the Nadd Al Sheeba Medical Centre, Dubai. Are you sure you want to proceed?</p>
						</div>
					</div>
				</div>
				<div class="mt-6 md:mt-7 xl:mt-8 sm:flex items-center">
					<div class="aegov-check-item sm:pl-20 mb-4 sm:mb-0 justify-center sm:justify-start">
						<input id="modal-standard-checkbox" type="checkbox" value="0">
						<label for="modal-standard-checkbox" class="text-aeblack-400">Don't show me this message again</label>
					</div>
					<div class="sm:flex sm:flex-row-reverse sm:gap-3 sm:ml-auto">
						<button type="button" class="aegov-btn w-full sm:w-auto">Confirm</button>
						<button data-modal-hide="modal-confirm-standard" type="button" class="aegov-btn btn-soft mt-3 sm:mt-0 w-full sm:w-auto">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Includes checkbox for "Don't show again" option and responsive layout for confirm/cancel buttons.

### Example 12: Confirmation Serious Modal

High-stakes action modal with red icon styling.

```html
<button data-modal-target="serious-modal" data-modal-toggle="serious-modal" class="aegov-btn" type="button">
	Delete Account
</button>

<div id="serious-modal" class="aegov-modal hidden z-50" role="alertdialog" aria-labelledby="serious-title">
	<div class="relative p-4 w-full max-w-md">
		<div class="aegov-modal-wrapper">
			<button type="button" class="modal-close" data-modal-hide="serious-modal">
				<svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
					<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
				</svg>
				<span class="sr-only">Close modal</span>
			</button>
			<div class="p-4 md:p-5 text-center">
				<div class="mb-4">
					<svg class="w-12 h-12 mx-auto text-aered-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
					</svg>
				</div>
				<h3 id="serious-title" class="mb-5 text-lg font-semibold text-aeblack-900">
					This action is permanent and cannot be reversed
				</h3>
				<p class="mb-5 text-aeblack-500">All your data, settings, and content will be permanently deleted. This cannot be undone.</p>
				<div class="flex justify-center gap-3">
					<button data-modal-hide="serious-modal" type="button" class="aegov-btn" style="background-color: #dc2626;">
						Yes, delete permanently
					</button>
					<button data-modal-hide="serious-modal" type="button" class="aegov-btn btn-outline">
						Cancel
					</button>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use red icon and serious language for destructive actions. Include explicit consequences.

## Size Variations

The component supports responsive sizing via max-width classes:
- Small: `sm:max-w-sm`
- Medium: `lg:max-w-xl`
- Large: `xl:max-w-2xl` / `2xl:max-w-3xl`

## Placement Options

`data-modal-placement` accepts: `{top|center|bottom}-{left|center|right}` combinations (e.g., `bottom-right`).

## Notes

**Usage Contexts:**

Use modals for critical information requiring immediate attention, user input forms without page navigation, confirmation dialogs for important actions, displaying detailed information without leaving current context, and showcasing media content like images or videos.

**Accessibility Requirements:**

- **Focus Management**: Focus shifts to first interactive element on open
- **ARIA Attributes**: Include `role="dialog"`, `aria-labelledby`, `aria-hidden`
- **Keyboard Navigation**: ESC closes; Tab cycles through interactive elements
- **Screen Reader Support**: Semantic HTML and descriptive text required

**Behavioral Features:**

**Opening:** Click trigger element with `data-modal-show` or `data-modal-toggle`

**Closing Mechanisms:**
1. Click backdrop (unless static)
2. Press ESC key
3. Click element with `data-modal-hide="[ID]"`

**Toggle:** `data-modal-toggle` shows hidden modals and hides visible ones

**JavaScript Dependency:**

"This component depends on Javascript" for out-of-the-box functionality. The bundled AEGov-Design-System JavaScript library provides modal behavior automatically, though alternative libraries may be substituted with proper styling implementation.

**RTL Support:**

Full RTL layout support for Arabic and other right-to-left languages.

**React Implementation:**

```jsx
<Modal
	trigger={<Button>Open</Button>}
	title="Modal Title"
	variant="danger"
	size="xl">
	<div>Modal content goes here</div>
</Modal>
```

React props: `trigger` (ReactNode), `title` (string, optional), `children` (ReactNode), `className` (string), `variant` ("danger" for alert styling), `size` ("sm" | "xl")
