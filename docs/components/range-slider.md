# Range Slider
**Docs**: https://designsystem.gov.ae/docs/components/range-slider
**Purpose**: Select values from continuous range through draggable interface
**JS Required**: ❌ No (basic), ⚠️ Custom JS for value display

## Dependent Components
- Form control wrapper (`.aegov-form-control`)
- Label element
- Output element (for value display)

## Description

The Range Slider enables users to select a value from a continuous range through an interactive draggable interface, commonly used for price ranges, volume control, and numeric preferences. It features a horizontal bar with a draggable thumb and provides real-time feedback by displaying the selected value alongside the slider.

## Examples

### Example 1: Basic Range Slider

```html
<div class="aegov-form-control">
	<label for="rangelem">A range</label>
	<div class="form-control-input items-center">
		<input type="range" min="0" max="100" name="rangelem" id="rangelem" value="20" oninput="rangeelemoutput.innerHTML=value">
		<output class="w-[50px] text-sm text-end h-auto bg-transparent py-1" id="rangeelemoutput">20</output>
	</div>
</div>
```

**Note:** Use `oninput` event to update output element. Output element shows current value. Set `min`, `max`, and initial `value` attributes.

### Example 2: Secondary Color Variant

```html
<div class="aegov-form-control control-secondary">
	<label for="rangeSliderSeondary">A range</label>
	<div class="form-control-input items-center">
		<input type="range" min="0" max="100" name="rangeSliderSeondary" id="rangeSlider" value="20" oninput="rangeelemoutputSecondary.innerHTML=value">
		<output class="w-[50px] text-sm text-end h-auto bg-transparent py-1" id="rangeelemoutputSecondary">20</output>
	</div>
</div>
```

**Note:** Add `.control-secondary` to parent for secondary color (aeblack colors).

## HTML Attributes Reference

| Attribute | Purpose |
|-----------|---------|
| `min` | Specifies minimum range value |
| `max` | Specifies maximum range value |
| `name` | Form submission identifier |
| `value` | Initial slider value |
| `oninput` | Triggers JavaScript update of displayed value |
| `disabled` | Disables slider interaction |
| `aria-disabled="true"` | Accessibility attribute for assistive tech |

## Notes

**Usage Contexts:**

Optimal for selecting from large value iterations, filter preferences, user settings, and scenarios requiring single visual interaction feedback (price minimums, day counts).

**Accessibility Requirements:**

- Semantic HTML with associated labels using the `for` attribute
- ARIA attributes for assistive technology context
- Sufficient color contrast and visible focus states
- Support for keyboard and screen reader navigation

**States:**

- **Default:** Interactive draggable state
- **Disabled:** "visually lighter" rendering; requires `disabled` attribute and `aria-disabled="true"`

**Technical Details:**

- Uses native HTML5 `<input type="range">` element
- Output element dynamically updates via `oninput` event
- Supports secondary color theming via `control-secondary` class
- Part of UAE Design System using TailwindCSS

**RTL Support:**

Full RTL layout support for right-to-left languages like Arabic. Component automatically adapts directional behavior and layout.

**React Implementation:**

```jsx
const [value, setValue] = useState(75);
<RangeSlider
	label="Price Range"
	defaultValue={75}
	value={value}
	onValueChange={setValue}
	className="w-[500px] custom-slider"
/>
```

**React Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `label` | string | — | Accessibility label |
| `defaultValue` | number | — | Initial value |
| `helperText` | string | — | Contextual guidance text |
| `size` | string | `'base'` | Options: `sm`, `base`, `lg` |
| `variant` | string | `'primary'` | Options: `primary`, `secondary` |
| `disabled` | boolean | `false` | Disables interaction |
| `required` | boolean | `false` | Marks as required |
| `value` | number | — | Controlled component value |
| `onValueChange` | function | — | Callback on value change |
