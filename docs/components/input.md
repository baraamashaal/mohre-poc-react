# Input
**Docs**: https://designsystem.gov.ae/docs/components/input
**Purpose**: Fundamental form element for capturing text, numbers, and other data types
**JS Required**: ❌ No

## Dependent Components
- SVG Icons - For prefix/suffix icons
- [Dropdown](dropdown.md) - For combined dropdown inputs (phone number with country code)
- Typography - Label and helper text

## Description

The Input component is a fundamental form element enabling users to capture text, numbers, and other data types through a versatile interface supporting text fields, password fields, email inputs, and more. This component provides a crucial part of form interactions, allowing users to input various data types with proper accessibility considerations.

## Core Structure

```html
<div class="aegov-form-control">
  <label for="input_id">Label Text</label>
  <div class="form-control-input">
    <input type="text" id="input_id" placeholder="Placeholder text">
  </div>
</div>
```

## Size Variations

| Class | Height | Font Size |
|-------|--------|-----------|
| `.control-sm` | 40px | 14px |
| `.control-base` | 48px | 16px (default) |
| `.control-lg` | 56px | 18px |

## Examples

### Example 1: Basic Text Input

```html
<div class="aegov-form-control">
	<label for="first_name">First Name</label>
	<div class="form-control-input">
		<input type="text" id="first_name" placeholder="Your first name">
	</div>
</div>
```

### Example 2: Code Structure

```html
<div class="aegov-form-control">
	<label for="referenceID">...Label Text...</label>
	<div class="form-control-input">
		<input type="text" id="referenceID" placeholder="...Placeholder Text...">
	</div>
</div>
```

### Example 3: Input with Helper Text

```html
<div class="aegov-form-control">
	<label for="email_address">Email address</label>
	<div class="form-control-input">
		<input type="text" id="email_address" placeholder="Enter your email address">
	</div>
	<p class="mt-2 text-xs leading-6 text-aeblack-500">We require your email address to send you important updates. We will never share your email with anyone else.</p>
</div>
```

### Example 4: Input with Error State

```html
<div class="aegov-form-control control-error">
	<label for="error_input">First Name</label>
	<div class="form-control-input">
		<input type="text" id="error_input" placeholder="Error Input">
	</div>
	<p class="error-message"><strong>Error:</strong> We encountered a problem with your input.</p>
</div>
```

### Example 5: Input with Prefix/Suffix Icons

```html
<div class="aegov-form-control mb-4">
	<label for="search_prefix">Prefix</label>
	<div class="form-control-input">
		<span class="control-prefix">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none"/>
				<circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			</svg>
		</span>
		<input type="search" name="search_prefix" id="search_prefix" placeholder="Search for something">
	</div>
</div>
<div class="aegov-form-control">
	<label for="search_suffix">Suffix</label>
	<div class="form-control-input">
		<input type="search" name="search_suffix" id="search_suffix" placeholder="Search for something">
		<span class="control-suffix">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none"/>
				<circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			</svg>
		</span>
	</div>
</div>
```

### Example 6: Advanced Input Elements

```html
<div class="md:col-span-2 grid grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2">
	<div>
		<div class="aegov-form-control">
			<label for="website">Website</label>
			<div class="form-control-input">
				<span class="control-prefix">http://</span>
				<input type="url" name="website" id="website" placeholder="www.example.com">
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="search_input">Search</label>
			<div class="form-control-input">
				<span class="control-prefix">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none" />
						<circle cx="112" cy="112" r="80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
						<line x1="168.57" y1="168.57" x2="224" y2="224" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
					</svg>
				</span>
				<input type="search" name="search_input" id="search_input" placeholder="search for something">
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="date_input">Select a date</label>
			<div class="form-control-input">
				<input type="date" name="date_input" id="date_input">
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="date_time">Select a date and time</label>
			<div class="form-control-input">
				<input type="datetime-local" name="date_time" id="date_time">
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="month_input">Select a month</label>
			<div class="form-control-input">
				<input type="month" name="month_input" id="month_input">
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="password_input">Password</label>
			<div class="form-control-input">
				<input type="password" name="password_input" id="password_input" placeholder="">
				<span class="control-suffix">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none" />
						<path d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
						<circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
					</svg>
				</span>
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="range_input">A range</label>
			<div class="form-control-input items-center">
				<input type="range" min="0" max="100" name="range_input" id="range_input" value="20" oninput="rangeelemoutput.innerHTML=value">
				<output class="w-[50px] text-sm text-end h-auto bg-transparent py-1" id="rangeelemoutput">20</output>
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="number_input">Emirates ID</label>
			<div class="form-control-input">
				<input type="number" name="number_input" id="number_input" placeholder="000-0000-0000000-0">
				<span class="control-suffix">
					<svg class="text-primary-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none" />
						<path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,168a12,12,0,1,1,12-12A12,12,0,0,1,128,192Zm8-48.72V144a8,8,0,0,1-16,0v-8a8,8,0,0,1,8-8c13.23,0,24-9,24-20s-10.77-20-24-20-24,9-24,20v4a8,8,0,0,1-16,0v-4c0-19.85,17.94-36,40-36s40,16.15,40,36C168,125.38,154.24,139.93,136,143.28Z" />
					</svg>
				</span>
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-form-control">
			<label for="dropdown_input">Mobile number</label>
			<div class="form-control-input">
				<span class="control-prefix">
					<select class="w-[100px]" id="country_code" name="country_code" autocomplete="tel-country-code" aria-label="Country code">
						<option value="00971">+971</option>
						<option value="0091">+91</option>
						<option value="0044">+44</option>
					</select>
				</span>
				<input type="tel" name="dropdown_input" id="dropdown_input" placeholder="xx xxxxxxx" aria-describedby="country_code">
			</div>
		</div>
	</div>
</div>
```

### Example 7: Secondary Color Variant

```html
<div class="aegov-form-control control-secondary">
	<label for="first_name_sec">First Name</label>
	<div class="form-control-input">
		<input type="text" id="first_nam_sece" placeholder="Your First Name">
	</div>
</div>
```

## Notes

**Supported Input Types:**
- text, email, password, number
- date, datetime-local, month
- url, search, tel, range

**Validation States:**
- **Default:** Standard appearance
- **Focus:** Border/shadow changes indicate active input
- **Disabled:** Add `disabled` attribute
- **Error:** Add `.control-error` class to parent `.aegov-form-control`

**Accessibility Guidelines:**
- "Associate the label element with the input using the for attribute" to aid screen readers
- Use placeholder sparingly; avoid as sole instruction method
- Display error messages with proper ARIA attributes
- Implement clear focus states for keyboard users
- Ensure sufficient text-to-background contrast

**Best Practices:**
- Always include labels (don't rely on placeholders alone)
- Provide helpful error messages that explain how to fix issues
- Use appropriate input types for better mobile keyboards
- Consider prefix/suffix icons for visual clarity
- Use helper text for complex requirements

**Technical Details:**
- Base class: `.aegov-form-control`
- Input wrapper: `.form-control-input`
- Size modifiers: `.control-sm`, `.control-base` (default), `.control-lg`
- Color variant: `.control-secondary`
- Error state: `.control-error`
- Prefix: `.control-prefix`
- Suffix: `.control-suffix`
- Error message: `.error-message`

**RTL Support:**
Full RTL layout support for Arabic and other right-to-left languages.

**React Implementation:**
```jsx
<Input
  label="Email address"
  type="email"
  placeholder="Enter your email"
  helperText="We'll never share your email"
  required
/>
```

React props: `label` (string), `placeholder` (string), `id` (string), `type` (string), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary"), `disabled` (boolean), `required` (boolean), `helperText` (string), `error` (string), `prefix` (element), `suffix` (element)
