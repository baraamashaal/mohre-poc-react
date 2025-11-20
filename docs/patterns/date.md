# Date Pattern
**Docs**: https://designsystem.gov.ae/docs/patterns/date
**Purpose**: Consistent and unambiguous date entry and display
**JS Required**: ⚠️ Yes (for date picker and validation)

## Description

The Date pattern ensures consistent and unambiguous date entry and display across UAE government digital services, preventing user confusion between day, month, and year values.

## Core Requirements

**Input Format:** "day month year" (DMY)

**Display Format:** The official UAE standard requires dates display in day-month-year order consistently.

## Display Variations

**1. Numeric Format:** `28/09/2023`
- Separator: forward slash `/`
- Two-digit day and month
- Four-digit year

**2. Human-Readable Format:** `28th Sep, 2023`
- Ordinal day (1st, 2nd, 3rd, etc.)
- Abbreviated month name (Jan, Feb, Mar, etc.)
- Comma separator
- Four-digit year

**3. Full Text Format:** `28 September 2023`
- Day without ordinal
- Full month name
- Four-digit year

## Key Specifications

**Input Validation:**
- Users must enter dates following DMY pattern
- System must enforce this ordering to prevent misinterpretation
- Both numeric and written-word formats acceptable for display
- Date picker components should default to DMY layout

**Display Guidelines:**
- Primary format: DMY order only
- Alternative representations must maintain this sequence
- No country-specific variations recommended by the design system
- Prioritize UAE standard formats exclusively

## ISO 8601 Compliance

For non-user-facing contexts, use: `YYYY-MM-DD hh:mm:ss TZ`

**Application contexts:**
- Log file entries
- Document timestamps (printed materials)
- Technical/OCR-compatible documentation
- Database storage
- API communication

## Validation Rules

**Date Range Validation:**
- Minimum date: typically 1900-01-01
- Maximum date: current date + reasonable future range
- Validate day exists in given month (e.g., no Feb 30)
- Handle leap years correctly

**Format Validation:**
- Reject MM/DD/YYYY format
- Enforce DD/MM/YYYY or DD-MM-YYYY
- Accept date picker selections only
- Prevent ambiguous inputs

## Accessibility Requirements

- Label date inputs clearly
- Use `type="date"` with proper formatting
- Provide format example in placeholder or helper text
- Ensure keyboard navigation support
- Include ARIA attributes for date pickers
- Announce selected dates to screen readers
- Support manual entry alongside picker

## Usage Examples

**Date Input Field:**
```html
<div class="aegov-form-control">
	<label for="dateInput">Date *</label>
	<div class="form-control-input">
		<input
			type="date"
			id="dateInput"
			name="dateInput"
			placeholder="DD/MM/YYYY"
			required
			data-date-format="dd/mm/yyyy"
		/>
	</div>
	<p class="helper-text">Format: Day/Month/Year (e.g., 28/09/2023)</p>
</div>
```

**Date Display (Numeric):**
```html
<span class="date-display">28/09/2023</span>
```

**Date Display (Human-Readable):**
```html
<span class="date-display">28th Sep, 2023</span>
```

**Date Display (Full Text):**
```html
<span class="date-display">28 September 2023</span>
```

**Date of Birth Example:**
```html
<div class="aegov-form-control">
	<label for="birthDate">Date of birth *</label>
	<div class="form-control-input">
		<input
			type="date"
			id="birthDate"
			name="birthDate"
			required
			data-date-format="dd/mm/yyyy"
			max="2024-12-31"
		/>
	</div>
	<p class="helper-text">Enter date in day/month/year format</p>
</div>
```

## Date Picker Component

When implementing a date picker:
- Calendar should display with Sunday or Monday as first day of week (configurable)
- Month/year dropdowns for easy navigation
- Today button for quick selection
- Clear button to reset selection
- Disable dates outside allowed range
- Highlight current date
- Show selected date clearly

## Date Range Selection

For selecting date ranges:
- Use two separate date inputs (From/To)
- Validate "To" date is after "From" date
- Display range clearly once selected
- Support preset ranges (Last 7 days, Last month, etc.)

**Date Range Example:**
```html
<div class="date-range-pattern">
	<div class="aegov-form-control">
		<label for="startDate">From date *</label>
		<div class="form-control-input">
			<input
				type="date"
				id="startDate"
				name="startDate"
				required
				data-date-format="dd/mm/yyyy"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="endDate">To date *</label>
		<div class="form-control-input">
			<input
				type="date"
				id="endDate"
				name="endDate"
				required
				data-date-format="dd/mm/yyyy"
			/>
		</div>
		<p class="helper-text">Must be after start date</p>
	</div>
</div>
```

## Common Use Cases

**Past Dates:**
- Date of birth (max: today)
- Document issue date (max: today)
- Historical records

**Future Dates:**
- Appointment booking (min: today)
- Expiry dates (min: today)
- Event scheduling

**Date Ranges:**
- Report generation periods
- Search filters
- Booking date ranges
- Leave applications

## Technical Notes

- Store dates in ISO 8601 format in database
- Convert to DMY for display in UI
- Use date libraries (date-fns, day.js) for manipulation
- Handle timezone conversions carefully
- Support both manual entry and picker selection
- Implement proper date localization
- Validate on both client and server side
- Consider Hijri calendar support for Islamic dates (optional)

## Error Messages

**Invalid Format:**
"Please enter date in DD/MM/YYYY format (e.g., 28/09/2023)"

**Invalid Date:**
"Please enter a valid date"

**Out of Range:**
"Date must be between [min date] and [max date]"

**Required Field:**
"Date is required"
