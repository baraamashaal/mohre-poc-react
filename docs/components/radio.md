# Radio
**Docs**: https://designsystem.gov.ae/docs/components/radio
**Purpose**: Enables users to select a single option from mutually exclusive choices
**JS Required**: ❌ No

## Dependent Components
- Typography - Label and description text

## Description

The Radio component enables users to select a single option from a set of mutually exclusive choices. It provides a list of options where only one can be selected at a time, making it ideal for forms requiring single-choice selections like gender, payment method, or plan selection.

## Core Structure

```html
<div class="aegov-check-item">
  <input id="option_id" type="radio" name="group_name" value="value">
  <label for="option_id">Label text</label>
</div>
```

**Critical Note:** All radio buttons in the same group must share the same `name` attribute to ensure mutual exclusivity.

## Size Variations

| Class | Dimensions | Font Size |
|-------|-----------|-----------| |
| `.check-sm` | 16px × 16px | 14px |
| `.check-base` | 20px × 20px | 14px (default) |
| `.check-lg` | 24px × 24px | 18px |

## Examples

### Example 1: Basic Radio Button

```html
<div class="flex space-x-8">
	<div class="aegov-check-item">
		<input checked id="option_01" type="radio" name="options" value="">
		<label for="option_01">Option #1</label>
	</div>
	<div class="aegov-check-item">
		<input id="option_02" type="radio" name="options" value="">
		<label for="option_02">Option #2</label>
	</div>
</div>
```

### Example 2: Radio with Additional Description

```html
<div class="space-y-6">
	<div class="aegov-check-group">
		<input id="plan01" aria-describedby="plan01-description" name="plan" type="radio">
		<div>
			<label for="plan01">Starter plan</label>
			<p id="plan01-description">The basic usage plan, starting at $9.99 per month</p>
		</div>
	</div>
	<div class="aegov-check-group">
		<input id="plan02" aria-describedby="plan02-description" name="plan" type="radio">
		<div>
			<label for="plan02">Professional plan</label>
			<p id="plan02-description">For teams and organization, starting at $29.99 per month</p>
		</div>
	</div>
	<div class="aegov-check-group">
		<input id="plan03" aria-describedby="plan03-description" name="plan" type="radio">
		<div>
			<label for="plan03">Enterprise plan</label>
			<p id="plan03-description">For large organisation with SAML support, starting at $99.99 per month</p>
		</div>
	</div>
</div>
```

### Example 3: Radio as List Element

```html
<div class="divide-y divide-aeblack-100 sm:w-80">
	<div class="aegov-check-group group-list">
		<label for="card-1" id="card-1-description">Visa - XXXX XXXX XXXX 3456</label>
		<input id="card-1" aria-describedby="card-1-description" name="card" type="radio">
	</div>
	<div class="aegov-check-group group-list">
		<label for="card-2" id="card-2-description">Visa - XXXX XXXX XXXX 1345</label>
		<input id="card-2" aria-describedby="card-2-description" name="card" type="radio">
	</div>
	<div class="aegov-check-group group-list">
		<label for="card-3" id="card-3-description">Mastercard - XXXX XXXX XXXX 4453</label>
		<input id="card-3" aria-describedby="card-3-description" name="card" type="radio">
	</div>
</div>
```

### Example 4: Size Variations

```html
<div class="space-y-6">
	<div class="aegov-check-item check-lg">
		<input type="radio" aria-describedby="opt-description_01" name="opt" id="opt_01">
		<label for="opt_01" id="opt-description_01">Option #1</label>
	</div>
	<div class="aegov-check-item">
		<input type="radio" aria-describedby="opt-description_02" name="opt" id="opt_02">
		<label for="opt_02" id="opt-description_02">Option #2</label>
	</div>
	<div class="aegov-check-item check-sm">
		<input type="radio" aria-describedby="opt-description_03" name="opt" id="opt_03">
		<label for="opt_03" id="opt-description_03">Option #3</label>
	</div>
</div>
```

### Example 5: Secondary Color Variant

```html
<div class="aegov-check-item check-secondary">
	<input checked id="secondary-radio" type="radio" value="">
	<label for="secondary-radio">Secondary radio</label>
</div>
```

### Example 6: Disabled State

```html
<div class="aegov-check-item">
	<input disabled id="disabled-radio" type="radio" name="disabled" aria-disabled="true">
	<label for="disabled-radio">Disabled radio</label>
</div>
```

### Example 7: Disabled Checked State

```html
<div class="aegov-check-item">
	<input disabled checked id="disabled-checked-radio" type="radio" name="disabled" aria-disabled="true">
	<label for="disabled-checked-radio">Disabled checked radio</label>
</div>
```

### Example 8: RTL Support (Arabic)

```html
<div class="flex space-x-8">
	<div class="aegov-check-item">
		<input checked id="rtl_option_01" type="radio" name="rtl-options" value="">
		<label for="rtl_option_01">الخيار 1</label>
	</div>
	<div class="aegov-check-item">
		<input id="rtl_option_02" type="radio" name="rtl-options" value="">
		<label for="rtl_option_02">الخيار 2</label>
	</div>
</div>
```

## Notes

**Behavior:**
- Only one radio button can be selected within a group (defined by matching `name` attributes)
- Selecting a new option automatically deselects the previously selected one
- Once a radio button is selected, it cannot be deselected by clicking it again (use checkbox for that behavior)

**Usage Contexts:**
- Single-choice questions (gender, yes/no, agree/disagree)
- Plan or pricing tier selection
- Payment method selection
- Shipping option selection
- Survey responses with mutually exclusive options

**Accessibility Requirements:**
- Use `<label>` elements with matching `for` attributes
- Include `aria-describedby` when descriptions are present
- Add `aria-disabled="true"` for disabled states
- Ensure sufficient color contrast for all states
- Support keyboard navigation (arrow keys to move between options in a group)
- Provide clear, descriptive labels

**Technical Details:**
- Base wrapper: `.aegov-check-item` (inline layout) or `.aegov-check-group` (block layout with descriptions)
- Size modifiers: `.check-sm`, `.check-base` (default), `.check-lg`
- Color variant: `.check-secondary`
- List variant: `.group-list` (for list-style layouts)
- Disabled state: `disabled` attribute and `aria-disabled="true"`

**Best Practices:**
- Use radio buttons when there are 2-7 options (use dropdown for more)
- Keep labels short and clear
- Arrange options vertically for better readability
- Pre-select a default option when appropriate
- Ensure all options in a group have the same `name` attribute
- Use descriptions for complex choices requiring explanation

**RTL Support:**
Full RTL layout support for Arabic and other right-to-left languages. Radio buttons automatically adjust position in RTL layouts.

**React Implementation:**
```jsx
<RadioGroup value={selected} onChange={setSelected}>
  <Radio value="option1" label="Option 1" />
  <Radio value="option2" label="Option 2" />
</RadioGroup>
```

React props: `value` (string), `name` (string), `label` (string), `description` (string), `disabled` (boolean), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary")
