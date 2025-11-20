# Steps
**Docs**: https://designsystem.gov.ae/docs/components/steps
**Purpose**: Simplifies complex processes by breaking them into sequential steps
**JS Required**: ❌ No

## Dependent Components
None - works independently with CSS

## Description

The Steps component is "a user interface element that simplifies complex processes or forms by breaking them down into a series of sequential steps." It provides visual progress tracking through multi-step processes, forms, or procedures, offering "a clear and intuitive way for users to understand their current progress and navigate through different stages of a task."

## Size Variations

| Class | Height | Width | Font Size |
|-------|--------|-------|-----------|
| `.step-sm` | 2rem (32px) | 2rem (32px) | 0.85rem (14px) |
| `.step-base` | 2.5rem (40px) | 2.5rem (40px) | 1rem (16px) |
| `.step-lg` | 3rem (48px) | 3rem (48px) | 1.125rem (18px) |

## Examples

### Example 1: Basic Horizontal Steps

Basic 4-step horizontal progress indicator.

```html
<nav aria-label="Progress">
	<ol role="list" class="flex items-center">
		<li class="step-completed flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
				<span class="ml-3 text-sm font-medium text-primary-600">Step 1</span>
			</a>
		</li>
		<li class="step-current flex items-center">
			<span class="flex items-center px-6 text-sm font-medium" aria-current="step">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-primary-600">2</span>
				</span>
				<span class="ml-3 text-sm font-medium text-primary-600">Step 2</span>
			</span>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">3</span>
				</span>
				<span class="ml-3 text-sm font-medium text-aeblack-500">Step 3</span>
			</a>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">4</span>
				</span>
				<span class="ml-3 text-sm font-medium text-aeblack-500">Step 4</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Use `.step-completed` for finished steps (with checkmark icon), `.step-current` with `aria-current="step"` for active step, and `.step-upcoming` for future steps.

### Example 2: Multi-Step with 5 Steps

Extended horizontal steps with 5 stages.

```html
<nav aria-label="Multi-step Progress">
	<ol role="list" class="flex items-center">
		<li class="step-completed flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
			</a>
			<span class="connector" aria-hidden="true"></span>
		</li>
		<li class="step-completed flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
			</a>
			<span class="connector" aria-hidden="true"></span>
		</li>
		<li class="step-current flex items-center">
			<span class="flex items-center" aria-current="step">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-primary-600">3</span>
				</span>
			</span>
			<span class="connector" aria-hidden="true"></span>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">4</span>
				</span>
			</a>
			<span class="connector" aria-hidden="true"></span>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">5</span>
				</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Add `.connector` spans with `aria-hidden="true"` between steps for visual connecting lines.

### Example 3: Steps with Text Labels Below

Labels positioned below step indicators.

```html
<nav aria-label="Progress with labels">
	<ol role="list" class="flex items-center justify-between">
		<li class="step-completed flex flex-col items-center">
			<a href="#" class="flex flex-col items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
				<span class="mt-2 text-xs font-medium text-primary-600">Personal Info</span>
			</a>
		</li>
		<li class="step-current flex flex-col items-center">
			<span class="flex flex-col items-center" aria-current="step">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-primary-600">2</span>
				</span>
				<span class="mt-2 text-xs font-medium text-primary-600">Account</span>
			</span>
		</li>
		<li class="step-upcoming flex flex-col items-center">
			<a href="#" class="flex flex-col items-center">
				<span class="flex h-10 w-10 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">3</span>
				</span>
				<span class="mt-2 text-xs font-medium text-aeblack-500">Review</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Use `flex-col` layout with labels below indicators. Add `mt-2` for spacing between indicator and label.

### Example 4: Vertical Orientation

Vertical step progression for side panels.

```html
<nav aria-label="Vertical Progress">
	<ol role="list" class="flex flex-col space-y-4">
		<li class="step-completed">
			<a href="#" class="flex items-start">
				<span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
				<span class="ml-3 text-sm font-medium text-primary-600">Personal Information</span>
			</a>
		</li>
		<li class="step-current">
			<span class="flex items-start" aria-current="step">
				<span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-primary-600">2</span>
				</span>
				<span class="ml-3 text-sm font-medium text-primary-600">Account Setup</span>
			</span>
		</li>
		<li class="step-upcoming">
			<a href="#" class="flex items-start">
				<span class="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-aeblack-500">3</span>
				</span>
				<span class="ml-3 text-sm font-medium text-aeblack-500">Review & Submit</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Use `flex-col` with `space-y-4` for vertical layout. Add `flex-shrink-0` to indicators.

### Example 5: Small Size Variation

Compact steps using `step-sm` class.

```html
<nav aria-label="Small Progress" class="step-sm">
	<ol role="list" class="flex items-center">
		<li class="step-completed flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
			</a>
		</li>
		<li class="step-current flex items-center px-4">
			<span class="flex items-center" aria-current="step">
				<span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-sm text-primary-600">2</span>
				</span>
			</span>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-sm text-aeblack-500">3</span>
				</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Add `.step-sm` to container for small size (32px height/width, 14px font). Adjust h/w classes accordingly (h-8 w-8 instead of h-10 w-10).

### Example 6: Large Size Variation

Large steps using `step-lg` class.

```html
<nav aria-label="Large Progress" class="step-lg">
	<ol role="list" class="flex items-center">
		<li class="step-completed flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-600 bg-primary-600">
					<svg class="h-6 w-6 text-white" viewBox="0 0 20 20" fill="currentColor">
						<path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
					</svg>
				</span>
			</a>
		</li>
		<li class="step-current flex items-center px-6">
			<span class="flex items-center" aria-current="step">
				<span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary-600">
					<span class="text-lg text-primary-600">2</span>
				</span>
			</span>
		</li>
		<li class="step-upcoming flex items-center">
			<a href="#" class="flex items-center">
				<span class="flex h-12 w-12 items-center justify-center rounded-full border-2 border-aeblack-300">
					<span class="text-lg text-aeblack-500">3</span>
				</span>
			</a>
		</li>
	</ol>
</nav>
```

**Note:** Add `.step-lg` to container for large size (48px height/width, 18px font). Adjust h/w classes (h-12 w-12 instead of h-10 w-10).

### Example 7: Base Size (Default)

Default size steps using `.aegov-step` class without size modifier.

```html
<nav aria-label="Progress" class="aegov-step">
	<ol role="list" class="flex items-center justify-between">
		<li class="relative w-full step-completed">
			<div class="step-connector" aria-hidden="true">
				<div class="step-connector-state"></div>
			</div>
			<a href="#" class="step-badge">
				<span class="sr-only">Step 1</span>
			</a>
		</li>
		<li class="relative w-full step-completed">
			<div class="step-connector" aria-hidden="true">
				<div class="step-connector-state"></div>
			</div>
			<a href="#" class="step-badge">
				<span class="sr-only">Step 2</span>
			</a>
		</li>
		<li class="relative w-full step-current">
			<div class="step-connector" aria-hidden="true">
				<div class="step-connector-state"></div>
			</div>
			<a href="#" class="step-badge" aria-current="step">
				3<span class="sr-only">Step 3</span>
			</a>
		</li>
		<li class="relative step-upcoming">
			<div class="step-connector" aria-hidden="true">
				<div class="step-connector-state"></div>
			</div>
			<a href="#" class="step-badge">4<span class="sr-only">Step 4</span></a>
		</li>
	</ol>
</nav>
```

**Note:** Base size is the default (40px height/width, 16px font). No size class needed - this is `.step-base` or default.

## Notes

**Usage Contexts:**

Steps work effectively for multi-step processes and complex forms, data input and submission workflows, progressive disclosure of options, sequential task execution, and user engagement and progress visualization.

**Accessibility Requirements:**

- Semantic HTML with `<nav>`, `<ol>`, `<li>` elements
- `aria-label` on navigation
- `aria-current="step"` on active step
- `aria-hidden="true"` on decorative connectors
- Keyboard accessibility via Tab key
- Screen reader compatibility testing
- Focus management consistency

**Technical Details:**

**Special Classes:**
- `step-completed`: Finished steps
- `step-current`: Active step
- `step-upcoming`: Future steps
- `step-disabled`: Unavailable steps (use with `aria-disabled="true"`)

**States:** Hover and focus states defined by default; disabled state renders visually lighter.

**HTML Code Structure:**

Core HTML uses `<nav>`, `<ol>`, and `<li>` elements with step state classes applied to list items.

**RTL Support:**

"This component is supported and configured to work for RTL layouts." The component adapts for right-to-left languages and integrates with the system's layout guidelines.

**JavaScript Requirements:**

No explicit JavaScript library is required for basic functionality. The component uses HTML semantic elements and CSS classes for styling and state management.

**React Implementation:**

```jsx
<Steps
	currentStep={1}
	steps={[
		{ href: '#1', label: 'Personal Info' },
		{ href: '#2', label: 'Account Setup' },
		{ href: '#3', label: 'Review' }
	]}
	size="base"
	orientation="horizontal"
	showLabels={false}
/>
```

**React Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | array | — | Step objects with `href` and `label` properties |
| `currentStep` | number | — | Index of active step (0-based) |
| `size` | string | 'base' | Options: `sm`, `base`, `lg` |
| `orientation` | string | 'horizontal' | Options: `horizontal`, `vertical` |
| `showLabels` | boolean | false | Display labels for each step |
