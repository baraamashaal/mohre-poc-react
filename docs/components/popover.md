# Popover
**Docs**: https://designsystem.gov.ae/docs/components/popover
**Purpose**: Displays contextual information or actions near trigger element
**JS Required**: ✅ Yes

## Dependent Components
None - works independently with JavaScript library

## Description

The Popover is a transient UI element displaying contextual information or actions near a trigger element. It appears on user interaction and disappears when dismissed, enhancing user experience while keeping interfaces clean. This floating UI component provides additional context without cluttering the main interface.

## Examples

### Example 1: Default Popover

Standard version with title and description for concise contextual information.

```html
<button data-popover-target="popover-default" type="button" class="aegov-btn">Default popover</button>

<div data-popover id="popover-default" role="tooltip" class="aegov-popover w-64">
	<div class="popover-header bg-aeblack-50 px-3 py-2">
		<div class="font-semibold text-aeblack-900">Popover title</div>
	</div>
	<div class="popover-body px-3 py-2 text-aeblack-600">
		<p class="mb-0">Engaging and insightful content for an enriching experience.</p>
	</div>
	<div data-popper-arrow></div>
</div>

```

**Note:** Use `data-popover-target` on button and matching `data-popover` ID on popover. Include `role="tooltip"` for accessibility. Arrow pointer uses `data-popper-arrow`.

### Example 2: Flexible Popover

Customizable variant accommodating text, images, links, and rich content.

```html
<button data-popover-target="popover-flexible" type="button" class="aegov-btn">Flexible Popover</button>

<div data-popover id="popover-flexible" role="tooltip" class="aegov-popover w-64">
	<div class="popover-body px-3 py-2 text-aeblack-600">
		<p class="mb-0">Add text, images, links, or any content to enhance the user experience and share extra details.</p>
	</div>
	<div data-popper-arrow></div>
</div>
```

**Note:** Flexible popovers omit header for simpler content. Can include any HTML content in body.

## Notes

**Usage Contexts:**

Use popovers for form guidance and input explanations, additional details without cluttering interface, and compact quick actions.

**Accessibility Requirements:**

- **Semantic HTML**: Button element ensures keyboard focusability
- **ARIA Role**: `role="tooltip"` assists technology recognition
- **Keyboard Navigation**: Tab key activation and focus management supported

**Technical Details:**

**Key Attributes:**
- `data-popover-target` - Links button to popover ID
- `data-popover` - Identifies popover container
- `role="tooltip"` - Accessibility semantic role
- `class="aegov-popover"` - Applies necessary styling

**Structure:**
- Popover header (optional): `.popover-header`
- Popover body: `.popover-body`
- Arrow pointer: `<div data-popper-arrow></div>`

**Behavior Requirements:**

**Triggering:**
- Clicking trigger button opens popover
- Clicking outside closes it
- Escape key dismisses popover

**Focus Management:**
- Focus moves inside popover when opened
- Tab key enables content navigation
- Focus returns to trigger when closed

**Dismissal:**
- Clicking outside or pressing Escape closes popover
- Popover remains open when interacting with internal elements

**Content Adaptability:**
- Flexible popovers support rich content
- Scrolling enabled for overflow content

**Best Practices:**

- Use for short, relevant information only
- Avoid critical content inside dismissible popovers
- Test positioning across device orientations
- Ensure responsive behavior across screen sizes

**JavaScript Requirements:**

This is a JavaScript-required HTML component with interactive functionality for triggering and dismissing behavior.

**React Implementation:**

```jsx
<PopoverRoot>
	<PopoverTrigger asChild>
		<button className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2">
			Open Popover
		</button>
	</PopoverTrigger>
	<PopoverContent>
		<div className="flex flex-col gap-4">
			<h4 className="text-lg font-semibold text-gray-900">Popover Title</h4>
			<p className="text-sm text-gray-500">Description text content</p>
			<button className="rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500">Action</button>
		</div>
	</PopoverContent>
</PopoverRoot>
```

React props: `asChild` (boolean), component-based structure with `PopoverRoot`, `PopoverTrigger`, and `PopoverContent` wrappers
