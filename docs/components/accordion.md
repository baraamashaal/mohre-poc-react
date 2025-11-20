# Accordion
**Docs**: https://designsystem.gov.ae/docs/components/accordion
**Purpose**: Organizes content into collapsible sections for space-efficient presentation
**JS Required**: ✅ Yes (for interactive functionality)

## Dependent Components
- SVG Icons - Chevron or plus icons for expand/collapse indicators
- Typography - Title and content text
- [Button](button.md) - Accordion toggle buttons

## Description

The Accordion component is an interactive UI element that organizes content into collapsible sections. It enables users to expand and collapse content areas individually, making it particularly useful for managing information in space-constrained environments. Accordions "enable content to be collapsed into separate sections that can be expanded upon user interaction."

## Examples

### Example 1: Basic Accordion

Standard accordion with chevron icon rotating 180 degrees on expansion.

```html
<div class="aegov-accordion [&_.accordion-active_svg]:rotate-180" id="accordion-collapse" data-accordion="collapse">
	<div class="accordion-item">
		<div class="accordion-title" id="aegov-accordion-head-1">
			<button type="button" data-accordion-target="#aegov-accordion-body-1" aria-expanded="true" aria-controls="aegov-accordion-body-1">
				<span>What is the meaning of a design system?</span>
				<svg data-accordion-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</button>
		</div>
		<div class="accordion-content hidden" id="aegov-accordion-body-1" aria-labelledby="aegov-accordion-head-1">
			<div class="accordion-content-body">
				<p>A Design System is a comprehensive set of standards, documentation, principles, and components that guide the creation of a digital product's user interface (UI).</p>
			</div>
		</div>
	</div>
	<div class="accordion-item">
		<div class="accordion-title" id="aegov-accordion-head-2">
			<button type="button" data-accordion-target="#aegov-accordion-body-2" aria-expanded="false" aria-controls="aegov-accordion-body-2">
				<span>What are components?</span>
				<svg data-accordion-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</button>
		</div>
		<div class="accordion-content hidden" id="aegov-accordion-body-2" aria-labelledby="aegov-accordion-head-2">
			<div class="accordion-content-body">
				<p>Components are reusable parts of a UI, like buttons, form fields, or navigation menus.</p>
			</div>
		</div>
	</div>
</div>
```

**Note:** Chevron icon rotates 180° on expansion via `[&_.accordion-active_svg]:rotate-180`. First item shown as `aria-expanded="true"`.

### Example 2: Accordion with Plus Icon

Plus icon that rotates 45 degrees to form X when expanded.

```html
<div class="aegov-accordion [&_.accordion-active_svg]:rotate-45" id="accordion-collapse-1" data-accordion="collapse">
	<div class="accordion-item">
		<div class="accordion-title" id="acc-v2-head-1">
			<button type="button" data-accordion-target="#acc-v2-body-1" aria-expanded="true" aria-controls="acc-v2-body-1">
				<span>What is the meaning of a design system?</span>
				<svg data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="currentColor"/></svg>
			</button>
		</div>
		<div class="accordion-content" id="acc-v2-body-1" aria-labelledby="acc-v2-head-1">
			<div class="accordion-content-body">
				<p>A Design System is a comprehensive set of standards, documentation, principles, and components.</p>
			</div>
		</div>
	</div>
</div>
```

**Note:** Plus icon with `rotate-45` creates X shape when expanded.

### Example 3: Nested Accordion

Accordion containing child accordions within content.

```html
<div class="aegov-accordion [&_.accordion-active_svg]:rotate-180" id="accordion-collapse-2" data-accordion="collapse">
	<div class="accordion-item">
		<div class="accordion-title" id="acc-v3-head-1">
			<button type="button" data-accordion-target="#acc-v3-body-1" aria-expanded="true" aria-controls="acc-v3-body-1">
				<span>What is the meaning of a design system?</span>
				<svg data-accordion-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
			</button>
		</div>
		<div class="accordion-content" id="acc-v3-body-1" aria-labelledby="acc-v3-head-1">
			<div class="accordion-content-body">
				<p>A Design System is a comprehensive set of standards, documentation, principles, and components.</p>
				<!-- Nested accordion -->
				<div class="aegov-accordion [&_.accordion-active_svg]:rotate-45" id="accordion-nested-collapse" data-accordion="collapse">
					<div class="accordion-item">
						<div class="accordion-title" id="acc-v3-nested-head-1">
							<button type="button" data-accordion-target="#acc-v3-nested-body-1" aria-expanded="true" aria-controls="acc-v3-nested-body-1">
								<span>Why is it important to use?</span>
								<svg data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z" fill="currentColor"/></svg>
							</button>
						</div>
						<div class="accordion-content" id="acc-v3-nested-body-1" aria-labelledby="acc-v3-nested-head-1">
							<div class="accordion-content-body">
								<p>A design system provides consistency, accuracy and a clear path towards development.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
```

**Note:** Nested accordion within parent content. Parent uses chevron, nested uses plus icon for visual differentiation.

## Notes

**Usage:** FAQ sections, service details, multi-section forms, mobile navigation

**Technical Requirements:**
- JavaScript mandatory for interactivity
- ARIA attributes for accessibility (WCAG 2.0)
- Keyboard support: Tab navigation, Enter/Space activation
- Spacing: 1.5rem vertical padding for titles

**Accessibility:** Full keyboard navigation, ARIA attributes, visual focus indicators, RTL support

**React Implementation:**
```jsx
<Accordion items={items} defaultValue="1" multiple={true} />
```

React props: `items` (array), `defaultValue` (string), `multiple` (boolean)
