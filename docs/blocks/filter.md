# Filter Block
**Docs**: https://designsystem.gov.ae/docs/blocks/filter
**Purpose**: Comprehensive UI component integrating form elements for data refinement
**JS Required**: ✅ Yes (for range slider output updates)

## Dependent Components
- [Input](../components/input.md) - Search input with icon suffix
- [Checkbox](../components/checkbox.md) - Multi-select filter options
- [Radio](../components/radio.md) - Single-select filter options
- [Select](../components/select.md) - Dropdown option selection
- [Range Slider](../components/range-slider.md) - Numeric filtering
- SVG Icons - Search icon, other visual elements

## Description

The Filter block serves as a comprehensive UI component that integrates multiple form elements to enable data refinement. It helps users narrow down choices and locate relevant information more efficiently across diverse content sets by providing various filtering methods including search, checkboxes, radio buttons, dropdowns, and range sliders.

## Layout Variants

The filter block supports two layout variants:
1. **Borderless** - Clean layout without visual container
2. **Bordered** - Wrapped with border, padding, and rounded corners

## Examples

### Example 1: Filter Without Border

Clean filter layout without visual container borders.

```html
<div class="lg:w-72 space-y-8">
  <section class="space-y-4">
    <h6>Search and filter</h6>
    <div class="aegov-form-control">
      <input type="search" placeholder="Search for something">
      <span class="control-suffix">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
  </section>

  <section class="space-y-4">
    <h6>Directorate</h6>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-all" value="All Directorate">
      <label for="dir-all">All Directorate</label>
    </div>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-hr" value="Human Resources">
      <label for="dir-hr">Human Resources</label>
    </div>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-finance" value="Finance">
      <label for="dir-finance">Finance</label>
    </div>
    <a href="#" class="text-primary-500 text-sm">See more</a>
  </section>

  <section class="space-y-4">
    <h6>Beneficiary</h6>
    <div class="aegov-check-item">
      <input type="radio" id="ben-citizen" name="beneficiary" value="Citizen">
      <label for="ben-citizen">Citizen</label>
    </div>
    <div class="aegov-check-item">
      <input type="radio" id="ben-resident" name="beneficiary" value="Resident">
      <label for="ben-resident">Resident</label>
    </div>
    <div class="aegov-check-item">
      <input type="radio" id="ben-business" name="beneficiary" value="Business">
      <label for="ben-business">Business</label>
    </div>
  </section>

  <section class="space-y-4">
    <h6>Select an option</h6>
    <select name="country" class="aegov-select">
      <option>United Arab Emirates</option>
      <option>Saudi Arabia</option>
      <option>Bahrain</option>
      <option>Kuwait</option>
    </select>
  </section>

  <section class="space-y-4">
    <h6>A range</h6>
    <input type="range" min="0" max="100" value="20" oninput="rangeelemoutput.innerHTML=value">
    <output id="rangeelemoutput">20</output>
  </section>
</div>
```

**Note:** Container width defaults to `w-72` (288px) on larger screens. Search input includes SVG icon suffix.

### Example 2: Filter With Border

Bordered variant wraps the filter content with visual container styling.

```html
<div class="lg:w-72 p-6 border border-primary-400 rounded-2xl space-y-8">
  <section class="space-y-4">
    <h6>Search and filter</h6>
    <div class="aegov-form-control">
      <input type="search" placeholder="Search for something">
      <span class="control-suffix">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </span>
    </div>
  </section>

  <section class="space-y-4">
    <h6>Directorate</h6>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-all-2" value="All Directorate">
      <label for="dir-all-2">All Directorate</label>
    </div>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-hr-2" value="Human Resources">
      <label for="dir-hr-2">Human Resources</label>
    </div>
    <div class="aegov-check-item">
      <input type="checkbox" id="dir-finance-2" value="Finance">
      <label for="dir-finance-2">Finance</label>
    </div>
    <a href="#" class="text-primary-500 text-sm">See more</a>
  </section>

  <section class="space-y-4">
    <h6>Beneficiary</h6>
    <div class="aegov-check-item">
      <input type="radio" id="ben-citizen-2" name="beneficiary2" value="Citizen">
      <label for="ben-citizen-2">Citizen</label>
    </div>
    <div class="aegov-check-item">
      <input type="radio" id="ben-resident-2" name="beneficiary2" value="Resident">
      <label for="ben-resident-2">Resident</label>
    </div>
    <div class="aegov-check-item">
      <input type="radio" id="ben-business-2" name="beneficiary2" value="Business">
      <label for="ben-business-2">Business</label>
    </div>
  </section>

  <section class="space-y-4">
    <h6>Select an option</h6>
    <select name="country" class="aegov-select">
      <option>United Arab Emirates</option>
      <option>Saudi Arabia</option>
      <option>Bahrain</option>
      <option>Kuwait</option>
    </select>
  </section>

  <section class="space-y-4">
    <h6>A range</h6>
    <input type="range" min="0" max="100" value="20" oninput="rangeelemoutput2.innerHTML=value">
    <output id="rangeelemoutput2">20</output>
  </section>
</div>
```

**Note:** Uses `p-6 border border-primary-400 rounded-2xl` classes to add padding, border, and rounded corners.

### Example 3: Checkbox Section

Multi-select filter options using checkboxes.

```html
<section class="space-y-4">
  <h6>Categories</h6>
  <div class="aegov-check-item">
    <input type="checkbox" id="cat-all" value="All Categories">
    <label for="cat-all">All Categories</label>
  </div>
  <div class="aegov-check-item">
    <input type="checkbox" id="cat-services" value="Services">
    <label for="cat-services">Services</label>
  </div>
  <div class="aegov-check-item">
    <input type="checkbox" id="cat-news" value="News">
    <label for="cat-news">News</label>
  </div>
  <div class="aegov-check-item">
    <input type="checkbox" id="cat-events" value="Events">
    <label for="cat-events">Events</label>
  </div>
  <a href="#" class="text-primary-500 text-sm">See more</a>
</section>
```

**Note:** "See more" links can expand additional filter options.

### Example 4: Radio Button Section

Single-select filter options using radio buttons.

```html
<section class="space-y-4">
  <h6>Sort by</h6>
  <div class="aegov-check-item">
    <input type="radio" id="sort-recent" name="sorting" value="Most Recent">
    <label for="sort-recent">Most Recent</label>
  </div>
  <div class="aegov-check-item">
    <input type="radio" id="sort-popular" name="sorting" value="Most Popular">
    <label for="sort-popular">Most Popular</label>
  </div>
  <div class="aegov-check-item">
    <input type="radio" id="sort-alpha" name="sorting" value="Alphabetical">
    <label for="sort-alpha">Alphabetical</label>
  </div>
</section>
```

**Note:** Radio buttons enforce single selection per group (same `name` attribute).

### Example 5: Range Slider Section

Numeric filtering using range slider with output display.

```html
<section class="space-y-4">
  <h6>Price Range</h6>
  <input type="range" min="0" max="1000" value="500" step="10" oninput="priceoutput.innerHTML=value">
  <output id="priceoutput">500</output>
</section>
```

**Note:** The `oninput` attribute updates the output element in real-time as users adjust the slider.

## Notes

**Component Structure:**
- Each filter section wrapped in `<section class="space-y-4">` for consistent spacing
- Headings use `<h6>` elements
- Form controls use AEGOV design system classes

**JavaScript Requirement:**
The range slider requires inline JavaScript to update output values:
```javascript
oninput="outputElementId.innerHTML=value"
```
This displays the current numeric value as users adjust the slider.

**Responsive Design:**
- Container width adapts for mobile viewing
- Defaults to `lg:w-72` (288px) on larger screens
- Responsive design ensures usability across all screen sizes

**Accessibility:**
- All form inputs have associated labels
- Labels use `for` attribute matching input `id`
- Radio buttons grouped with same `name` attribute
- Search input includes appropriate `type="search"`
