# Textarea
**Docs**: https://designsystem.gov.ae/docs/components/textarea
**Purpose**: Captures substantial multiline text content in forms
**JS Required**: ❌ No

## Dependent Components
- Form control wrapper (`.aegov-form-control`)
- Label element
- Error message container (optional)

## Description

Textarea is an input element enabling users to enter and edit multiline text across a larger input area suitable for messages, comments, or user-generated content. The component supports various states (hover, focus, disabled), size variations, and color variants.

## Size Variations

| Class | Font Size |
|-------|-----------|
| `.control-sm` | 14px |
| `.control-base` | 16px (default) |
| `.control-lg` | 18px |

## Examples

### Example 1: Basic Textarea with Label

```html
<div class="aegov-form-control">
	<label for="description">Description</label>
	<div class="form-control-input">
		<textarea id="description" name="description" rows="4" placeholder="Enter your description"></textarea>
	</div>
</div>
```

**Note:** Always pair textarea with label using `for` attribute. Use `rows` attribute to set initial height (default: 4).

### Example 2: Textarea with Error State

```html
<div class="aegov-form-control control-error">
	<label for="error_description">Description</label>
	<div class="form-control-input">
		<textarea id="error_description" name="error_description" rows="4" placeholder="Enter your description"></textarea>
	</div>
	<p class="error-message"><strong>Error:</strong> We encountered a problem with your field.</p>
</div>
```

**Note:** Add `.control-error` class to parent `.aegov-form-control` for error styling. Error message uses `.error-message` class.

### Example 3: Small Size Textarea

```html
<div class="aegov-form-control control-sm">
	<label for="description-sm">Description</label>
	<div class="form-control-input">
		<textarea id="description-sm" name="description-sm" rows="4" placeholder="Enter your description"></textarea>
	</div>
</div>
```

**Note:** Add `.control-sm` to parent for small size variant (14px font).

### Example 4: Base Size Textarea

```html
<div class="aegov-form-control">
	<label for="description-base">Description</label>
	<div class="form-control-input">
		<textarea id="description-base" name="description-base" rows="4" placeholder="Enter your description"></textarea>
	</div>
</div>
```

**Note:** Default size is `control-base` (16px font, no class needed).

### Example 5: Large Size Textarea

```html
<div class="aegov-form-control control-lg">
	<label for="description-lg">Description</label>
	<div class="form-control-input">
		<textarea id="description-lg" name="description-lg" rows="4" placeholder="Enter your description"></textarea>
	</div>
</div>
```

**Note:** Add `.control-lg` to parent for large size variant (18px font).

### Example 6: Secondary Color Variant

```html
<div class="aegov-form-control control-secondary">
	<label for="description_sec">Description_sec</label>
	<div class="form-control-input">
		<textarea id="description_sec" name="description_sec" rows="4" placeholder="Enter your description"></textarea>
	</div>
</div>
```

**Note:** Add `.control-secondary` class for secondary color variant (typically aeblack colors).

### Example 7: Disabled State

```html
<textarea disabled aria-disabled="true"></textarea>
```

**Note:** Use both `disabled` attribute and `aria-disabled="true"` for proper accessibility.

## Notes

**Usage Contexts:**

Contact forms for detailed messages, blog comments/reviews, content management systems, messaging applications, and note-taking tools requiring extended text input.

**Accessibility Requirements:**

- "Associate the `<label>` element with Textarea using the for attribute. This aids screen readers."
- Placeholder should provide optional hints only, not critical instructions
- Error messages require proper ARIA attributes for assistive technology notification
- Implement distinguishable focus states for keyboard navigation
- Maintain sufficient text-to-background contrast for readability

**Technical Details:**

- Supports TailwindCSS responsive design with breakpoint prefixes
- Example: `control-sm md:control-base 2xl:control-lg` for responsive sizing
- Hover and focus states defined by default
- Disabled state requires both `disabled` attribute and JavaScript handling
- Size classes control label font size and textarea dimensions

**Validation States:**

- **Default**: Standard appearance
- **Focus**: Border/shadow changes indicate active input
- **Disabled**: Add `disabled` attribute
- **Error**: Add `.control-error` class to parent `.aegov-form-control`

**Responsive Design:**

Combine size classes with breakpoint prefixes:
```html
<div class="aegov-form-control control-sm md:control-base 2xl:control-lg">
```

**RTL Support:**

Full RTL layout support for Arabic and other right-to-left languages. Text direction automatically adjusts based on language.

**React Implementation:**

```jsx
<Textarea
  id="description"
  label="Description"
  placeholder="Enter your description"
  rows={4}
  size="base"
/>
```

React props: `label` (string), `placeholder` (string), `id` (string), `rows` (number, default: 4), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary"), `disabled` (boolean), `required` (boolean), `error` (string)
