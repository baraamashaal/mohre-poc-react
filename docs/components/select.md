# Select
**Docs**: https://designsystem.gov.ae/docs/components/select
**Purpose**: Choose from predefined list of options within dropdown menu
**JS Required**: ❌ No

## Dependent Components
- Form control wrapper (`.aegov-form-control`)
- Label element
- Error message container (optional)

## Description

The Select component is a versatile input element that allows users to choose from a list of options in a select menu. It simplifies option selection, particularly valuable for scenarios with limited screen real estate or extensive choice lists.

## Size Variations

| Class | Properties |
|-------|-----------|
| `.control-sm` | Height 40px; font-size 14px (0.85rem); padding 2.5 |
| `.control-base` | Height 48px; font-size 16px (1rem); padding 3 |
| `.control-lg` | Height 56px; font-size 18px (1.125rem); padding 3.5 |

## Examples

### Example 1: Basic Select

```html
<div class="aegov-form-control">
	<label for="opt1">Select an option</label>
	<div class="form-control-input">
		<select id="opt1" name="opt1">
			<option>option 1</option>
			<option>option 2</option>
			<option>option 3</option>
		</select>
	</div>
</div>
```

**Note:** Always pair select with label using `for` attribute. Options go inside `<select>` tags.

### Example 2: Multi-Select

```html
<div class="aegov-form-control">
	<label for="country_multiple">Select options</label>
	<div class="form-control-input">
		<select multiple id="country_multiple" name="country_multiple">
			<option>United Arab Emirates</option>
			<option>India</option>
			<option>United Kingdom</option>
			<option>USA</option>
		</select>
	</div>
</div>
```

**Note:** Add `multiple` attribute to allow multiple selections. Users can Ctrl/Cmd+click to select multiple options.

### Example 3: Error State

```html
<div class="aegov-form-control control-error">
	<label for="error_select">Select an option</label>
	<div class="form-control-input">
		<select id="error_select" name="error_select">
			<option>Option 1</option>
			<option>Option 2</option>
			<option>Option 3</option>
		</select>
	</div>
	<p class="error-message"><strong>Error:</strong> We encountered a problem with your selection.</p>
</div>
```

**Note:** Add `.control-error` class to parent `.aegov-form-control` for error styling. Error message uses `.error-message` class.

### Example 4: Large Size Variant

```html
<div class="aegov-form-control control-lg">
	<label for="countryLg">Select an option</label>
	<div class="form-control-input">
		<select id="countryLg" name="countryLg">
			<option>United Arab Emirates</option>
			<option>India</option>
			<option>United Kingdom</option>
		</select>
	</div>
</div>
```

**Note:** Add `.control-lg` to parent for large size variant (56px height, 18px font).

### Example 5: Secondary Color Variant

```html
<div class="aegov-form-control control-secondary">
	<label for="sec-country">Select an option</label>
	<div class="form-control-input">
		<select id="sec-country" name="country">
			<option>United Arab Emirates</option>
			<option>India</option>
			<option>United Kingdom</option>
		</select>
	</div>
</div>
```

**Note:** Add `.control-secondary` class for secondary color variant (typically aeblack colors).

## Notes

**Usage Contexts:**

- Single selections: countries, states, cities
- Filter dropdowns: categories, brands
- Sorting options: relevance, date
- Grouped selections
- User preferences: timezone, language, date formats

**Accessibility Requirements:**

- Always include `<label>` with corresponding `for=""` attribute matching select `id`
- Support keyboard navigation: Tab to focus, Spacebar to toggle options, Arrow keys for navigation
- Apply `aria-disabled="true"` to disabled selects
- Incorporate standard ARIA and supporting attributes

**Keyboard Interactions:**

"Users can open the select menu by pressing the 'Enter' key or the 'Spacebar' key when focused. Navigation occurs via arrow keys with selection via 'Enter'."

**Disabled State:**

"Add the `disabled` attribute to render the select visually lighter and unusable by the browser."

**Responsive Design:**

Combine size classes with Tailwind breakpoint prefixes (e.g., `control-sm md:control-base 2xl:control-lg`) for adaptive sizing across screen sizes.

**RTL Support:**

Fully supported with Arabic text configuration. Reference layout and typography guidelines for RTL implementation.

**JavaScript Requirements:**

No specific JS library is explicitly required; native HTML5 select functionality is standard. Multi-select requires state management in React implementations.

**React Implementation:**

```jsx
<Select
	id="country"
	label="Select an option"
	options={[
		{ label: 'United Arab Emirates', value: 'uae' },
		{ label: 'India', value: 'india' }
	]}
	placeholder="Choose a country"
/>
```

React props: `label` (string), `placeholder` (string, default: 'Select an option'), `id` (string), `options` (array), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary"), `disabled` (boolean), `required` (boolean), `error` (string)
