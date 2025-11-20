# Tooltip
**Docs**: https://designsystem.gov.ae/docs/components/tooltip
**Purpose**: Provides supplementary information when users interact with specific elements
**JS Required**: ✅ Yes (for positioning and interaction)

## Dependent Components
- [Button](button.md) - Common tooltip trigger element
- Typography - Tooltip text content

## Description

The Tooltip component enhances user experience by providing supplementary information when users interact with specific elements. It appears as a small pop-up box offering contextual help without cluttering the interface. Tooltips display "when users hover over or focus on an element," appearing near the target and supporting various positioning options based on design needs.

## Key Attributes

| Attribute | Purpose |
|-----------|---------|
| `data-tooltip-target="{id}"` | Links trigger element to tooltip element |
| `data-tooltip-trigger="hover\|click"` | Specifies activation event (default: hover) |
| `data-tooltip-placement="top\|right\|bottom\|left"` | Controls position relative to trigger |
| `role="tooltip"` | Accessibility semantic role for screen readers |

## Examples

### Example 1: Default Tooltip

```html
<button data-tooltip-target="tooltip-default" type="button" class="aegov-btn">Default tooltip</button>
<div id="tooltip-default" role="tooltip" class="z-10 aegov-tooltip">
	tooltip default
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 2: Tooltip Hover

```html
<button data-tooltip-target="tooltip-hover" data-tooltip-trigger="hover" type="button" class="aegov-btn">Tooltip hover</button>
<div id="tooltip-hover" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip content
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 3: Tooltip Click

```html
<button data-tooltip-target="tooltip-click" data-tooltip-trigger="click" type="button" class="aegov-btn">Tooltip click</button>
<div id="tooltip-click" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip content
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 4: Animated Tooltip

```html
<button data-tooltip-target="tooltip-animation" type="button" class="aegov-btn">Animated tooltip</button>
<div id="tooltip-animation" role="tooltip" class="z-10 aegov-tooltip transition-all duration-500">
	Tooltip content
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 5: Tooltip Top

```html
<button data-tooltip-target="tooltip-top" data-tooltip-placement="top" type="button" class="aegov-btn">Tooltip top</button>
<div id="tooltip-top" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip on top
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 6: Tooltip Right

```html
<button data-tooltip-target="tooltip-right" data-tooltip-placement="right" type="button" class="aegov-btn">Tooltip right</button>
<div id="tooltip-right" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip on right
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 7: Tooltip Bottom

```html
<button data-tooltip-target="tooltip-bottom" data-tooltip-placement="bottom" type="button" class="aegov-btn">Tooltip bottom</button>
<div id="tooltip-bottom" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip on bottom
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

### Example 8: Tooltip Left

```html
<button data-tooltip-target="tooltip-left" data-tooltip-placement="left" type="button" class="aegov-btn">Tooltip left</button>
<div id="tooltip-left" role="tooltip" class="z-10 aegov-tooltip">
	Tooltip on left
	<div class="tooltip-arrow" data-popper-arrow></div>
</div>
```

## Notes

**Behavior:**
- Appears on hover or focus; disappears when interaction ends
- Auto-placement fallback detects viewport space, prioritizing top placement
- Keyboard accessible via Tab navigation
- Supports both mouse hover and keyboard focus triggers

**JavaScript Requirement:**
Requires JavaScript functionality for positioning and interaction logic. The bundled AEGov-Design-System library is recommended but not mandatory. Uses Popper.js positioning engine under the hood.

**Accessibility:**
- Requires `role="tooltip"` for screen reader identification
- Supports keyboard interaction (Tab + hover/click)
- Provides ARIA compliance for assistive technologies
- Tooltip content is announced to screen readers when triggered

**Usage Contexts:**
Tooltips benefit:
- Data visualization hover states
- Accessibility shortcuts and keyboard hints
- Navigation menu explanations
- Mapping applications and interactive elements
- Icon-only buttons requiring text descriptions

**Best Practices:**
- Keep tooltip text concise (1-2 sentences maximum)
- Avoid interactive content inside tooltips
- Ensure tooltip doesn't obscure critical UI elements
- Use click triggers on touch devices
- Provide fallback for users who cannot trigger tooltips

**React Implementation:**
```jsx
<Tooltip content="This is a basic tooltip">
  <Button>Hover me</Button>
</Tooltip>
```

React props: `children` (ReactNode), `content` (string), `side` ("top" | "right" | "bottom" | "left"; default: "top")
