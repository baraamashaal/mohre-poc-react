# Checkbox
**Docs**: https://designsystem.gov.ae/docs/components/checkbox
**Purpose**: Enables users to select one or multiple options from a set
**JS Required**: ❌ No

## Dependent Components
- [Hyperlink](hyperlink.md) - For links within checkbox labels
- Typography - Label and description text

## Description

The checkbox component enables users to select one or multiple options from a set, providing an intuitive interface for capturing preferences and toggling settings within forms and applications. The checkbox component allows users to select one or more options while maintaining accessibility standards and familiar interaction patterns.

## Core Structure

```html
<div class="aegov-check-item">
  <input id="checkbox_id" type="checkbox" value="value">
  <label for="checkbox_id">Label text</label>
</div>
```

**Critical Implementation Note:**
"Always make sure you add the `<label>` and the `for=""` attribute that corresponds to the ID of the checkbox field" for both accessibility compliance and improved user experience.

## Size Variations

| Class | Dimensions | Font Size |
|-------|-----------|-----------|
| `.check-sm` | 16px × 16px | 14px |
| `.check-base` | 20px × 20px | 16px (default) |
| `.check-lg` | 24px × 24px | 18px |

## Examples

### Example 1: Basic Checkbox Group

Simple checkbox group for selecting multiple preferences.

```html
<div class="aegov-check-item">
  <input id="checkbox1" type="checkbox" value="1">
  <label for="checkbox1">I would prefer option 1</label>
</div>
<div class="aegov-check-item">
  <input id="checkbox2" type="checkbox" value="2">
  <label for="checkbox2">I would prefer option 2</label>
</div>
<div class="aegov-check-item">
  <input id="checkbox3" type="checkbox" value="3">
  <label for="checkbox3">I would prefer option 3</label>
</div>
```

**Note:** Each checkbox uses `.aegov-check-item` wrapper with unique `id` and matching `for` attribute on label.

### Example 2: Checkbox with Inline Link

Checkbox label containing hyperlink for terms and conditions.

```html
<div class="aegov-check-item">
  <input id="link-checkbox" type="checkbox" value="0">
  <label for="link-checkbox">I agree with the <a href="#">terms and conditions.</a></label>
</div>
```

**Note:** Links within labels are accessible and clickable without triggering checkbox toggle.

### Example 3: Checkbox with Description

Checkboxes with additional descriptive text using `.aegov-check-group` layout.

```html
<div class="space-y-4">
  <div class="aegov-check-group">
    <input checked id="alert-checkbox" aria-describedby="alert-checkbox-description"
           name="alert-checkbox" value="1" type="checkbox">
    <div>
      <label for="alert-checkbox">Alerts</label>
      <p id="alert-checkbox-description">Get notified when there is a critical issue.</p>
    </div>
  </div>
  <div class="aegov-check-group">
    <input id="promo-checkbox" aria-describedby="promo-checkbox-description"
           name="promo-checkbox" value="2" type="checkbox">
    <div>
      <label for="promo-checkbox">Promotions</label>
      <p id="promo-checkbox-description">Get notified when there is an offer.</p>
    </div>
  </div>
  <div class="aegov-check-group">
    <input id="upgrade-checkbox" aria-describedby="upgrade-checkbox-description"
           name="upgrade-checkbox" value="3" type="checkbox">
    <div>
      <label for="upgrade-checkbox">Upgrades</label>
      <p id="upgrade-checkbox-description">Get notified about critical upgrades to the system.</p>
    </div>
  </div>
</div>
```

**Note:** Use `.aegov-check-group` when including description text. Link descriptions with `aria-describedby` attribute for accessibility.

### Example 4: Checkbox as List Element

Checkboxes formatted as selectable list items with dividers.

```html
<div class="divide-y divide-aeblack-100">
  <div class="aegov-check-group group-list">
    <label for="person-1" id="person-1-description">Abdullah Al Mehri</label>
    <input id="person-1" aria-describedby="person-1-description"
           name="person-1" value="1" type="checkbox">
  </div>
  <div class="aegov-check-group group-list">
    <label for="person-2" id="person-2-description">Maryam Al Kamali</label>
    <input id="person-2" aria-describedby="person-2-description"
           name="person-2" value="2" type="checkbox">
  </div>
  <div class="aegov-check-group group-list">
    <label for="person-3" id="person-3-description">Shehzad Obaid</label>
    <input id="person-3" aria-describedby="person-3-description"
           name="person-3" value="3" type="checkbox">
  </div>
  <div class="aegov-check-group group-list">
    <label for="person-4" id="person-4-description">Ramakrishnan Iyer</label>
    <input id="person-4" aria-describedby="person-4-description"
           name="person-4" value="4" type="checkbox">
  </div>
</div>
```

**Note:** Use `.group-list` class for list-style checkboxes with horizontal dividers. Checkbox appears on the right in this layout.

### Example 5: Size Variations

Demonstrates large, default (base), and small checkbox sizes.

```html
<div class="space-y-6">
  <div class="aegov-check-item check-lg">
    <input type="checkbox" id="checkbox-lg" value="">
    <label for="checkbox-lg">Checkbox large</label>
  </div>
  <div class="aegov-check-item check-base">
    <input type="checkbox" id="checkbox-base" value="">
    <label for="checkbox-base">Checkbox default</label>
  </div>
  <div class="aegov-check-item check-sm">
    <input type="checkbox" id="checkbox-sm" value="">
    <label for="checkbox-sm">Checkbox small</label>
  </div>
</div>
```

**Note:** Add size classes to `.aegov-check-item` wrapper. Default is `.check-base` (no class needed).

### Example 6: Secondary Color Variant

Checkboxes using secondary color scheme.

```html
<div class="space-y-4">
  <div class="aegov-check-item check-secondary">
    <input checked id="checkbox1-s" type="checkbox" value="1">
    <label for="checkbox1-s">I would prefer option 1</label>
  </div>
  <div class="aegov-check-item check-secondary">
    <input id="checkbox-s" type="checkbox" value="2">
    <label for="checkbox-s">I would prefer option 2</label>
  </div>
  <div class="aegov-check-item check-secondary">
    <input id="checkbox3-s" type="checkbox" value="3">
    <label for="checkbox3-s">I would prefer option 3</label>
  </div>
</div>
```

**Note:** Add `.check-secondary` class to use secondary color variant (typically aeblack color scheme).

## Notes

**Accessibility Requirements:**

- Always include `<label>` elements with matching `for=""` attributes to IDs
- Add `aria-describedby=""` when using description text
- Use `aria-disabled="true"` on disabled checkboxes
- Support keyboard navigation: Tab to focus, Spacebar to toggle
- Implement `aria-checked` attributes for assistive technologies

**Recommended Use Cases:**
- Multiple-selection form fields
- Toggling preferences and settings
- Consent agreements (terms and conditions)
- Filter components
- Survey and feedback options
- Dynamically affecting list elements

**Browser & Responsive Support:**
Components support responsive design through TailwindCSS breakpoint prefixes (e.g., `md:check-base`, `2xl:check-lg`) and full RTL layout support for Arabic and other right-to-left languages.

**React Implementation:**
```jsx
<Checkbox
  label="I agree with the terms"
  checked={agreed}
  onCheckedChange={setAgreed}
/>
```

React props: `label` (string), `checked` (boolean), `disabled` (boolean), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary"), `onCheckedChange` (function), `description` (string)
