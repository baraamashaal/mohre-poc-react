# Toggle
**Docs**: https://designsystem.gov.ae/docs/components/toggle
**Purpose**: Binary checkbox switch for toggling between two states
**JS Required**: ❌ No

## Dependent Components
None - works independently with CSS

## Description

The Toggle component is "a versatile checkbox switch that allows users to toggle between two states." It supports binary selections like on/off, yes/no, enable/disable, and is commonly used for settings, preferences, and feature control. The component uses the `role="switch"` ARIA attribute for accessibility.

## Examples

### Example 1: Basic Toggle

Simple checkbox with sr-only text.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle1" class="sr-only peer">
	<label for="toggle1" role="switch">
		<span class="toggle-item"></span>
		<span class="sr-only">Toggle basic</span>
	</label>
</div>
```

**Note:** Checkbox uses `.sr-only peer` class. Label includes `role="switch"` for accessibility. Toggle UI element uses `.toggle-item`.

### Example 2: Toggle with Text Label

Includes descriptive text via `toggle-text` class.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle2" class="sr-only peer">
	<label for="toggle2" role="switch">
		<span class="toggle-item"></span>
		<span class="toggle-text">Enable notifications</span>
	</label>
</div>
```

**Note:** Add descriptive text with `.toggle-text` class for visible labels.

### Example 3: Toggle with Icon

Uses `toggle-icon` class for dynamic icon changes.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle3" class="sr-only peer">
	<label for="toggle3" role="switch">
		<span class="toggle-item toggle-icon">
			<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
				<rect width="256" height="256" fill="none"/>
				<polyline points="216 72 104 184 48 128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"/>
			</svg>
		</span>
		<span class="sr-only">Toggle with icon</span>
	</label>
</div>
```

**Note:** Add `.toggle-icon` to `.toggle-item` and include SVG icon inside.

### Example 4: Toggle with Success Color

Applies `toggle-success` class for aegreen styling.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle4" class="sr-only peer" checked>
	<label for="toggle4" role="switch">
		<span class="toggle-item toggle-success"></span>
		<span class="toggle-text">Success state</span>
	</label>
</div>
```

**Note:** Add `.toggle-success` class for green color variant. Use `checked` attribute for default checked state.

### Example 5: Toggle with Mode

Uses `toggle-mode` class for dark/light mode switching.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle5" class="sr-only peer">
	<label for="toggle5" role="switch">
		<span class="toggle-item toggle-mode">
			<svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
				<rect width="256" height="256" fill="none"/>
				<circle cx="128" cy="128" r="60" opacity="0.2"/>
				<circle cx="128" cy="128" r="60" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			</svg>
		</span>
		<span class="toggle-text">Dark mode</span>
	</label>
</div>
```

**Note:** Add `.toggle-mode` class for mode-switching variant with icon support.

### Example 6: Toggle with Secondary Color

Applies `toggle-secondary` class for aeblack styling.

```html
<div class="aegov-toggle">
	<input type="checkbox" id="toggle6" class="sr-only peer">
	<label for="toggle6" role="switch">
		<span class="toggle-item toggle-secondary"></span>
		<span class="toggle-text">Secondary color</span>
	</label>
</div>
```

**Note:** Add `.toggle-secondary` class for secondary color variant (aeblack colors).

## Notes

**Usage Scenarios:**

- Recording True/False indications
- Enabling/disabling settings or preferences
- Dark/light mode switching
- Privacy control settings (location sharing, notifications, tracking)

**Accessibility Requirements:**

- Implements `role="switch"` for screen readers
- Uses `sr-only` class for hidden but accessible text
- Provides sufficient color contrast and focus states
- Supports clear text labels for context
- Aids users with visual impairments and motor disabilities

**Technical Details:**

- Base class: `.aegov-toggle`
- Input type: checkbox with `class="sr-only peer"`
- Contains span with `toggle-item` class
- Supports color variants through modifier classes

**RTL Support:**

Fully supported and configured for right-to-left layouts. Works with Arabic text and language-specific typography guidelines.

**JavaScript Requirements:**

The component uses CSS-only state management. State changes are handled through the `onCheckedChange` callback function in React implementations.

**React Implementation:**

```jsx
<Toggle
	checked={true}
	variant="success"
	label="Enable feature"
	onCheckedChange={(checked) => console.log(checked)}
/>
```

**React Props:**

| Prop | Type | Description |
|------|------|-------------|
| `checked` | boolean | Controls toggle state |
| `variant` | "default" \| "success" \| "mode" \| "secondary" | Visual style (default: "default") |
| `disabled` | boolean | Disables interaction (default: false) |
| `onCheckedChange` | (checked: boolean) => void | State change callback |
| `label` | string | Descriptive text |
| `checkedIcon` | ReactNode | Icon when checked |
| `uncheckedIcon` | ReactNode | Icon when unchecked |
| `mode` | string | Enables mode variant |
