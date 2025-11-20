# Name Pattern
**Docs**: https://designsystem.gov.ae/docs/patterns/name
**Purpose**: Standardized format for collecting personal names
**JS Required**: ❌ No (basic), ⚠️ Custom validation recommended

## Description

"A name pattern refers to a standardized format or template for collecting the name of person." This pattern provides consistent name collection within service portals and forms across UAE government digital services.

## Use Cases

- Authenticated users entering names of dependents
- Non-UAE citizens applying without UAE Pass authentication
- Company users adding employee information
- General forms without authentication requirements

## Pattern Variations

The Name pattern provides **2 primary field configurations**:

### Primary Pattern (Recommended)
Three separate fields:
- **First name** (mandatory)
- **Middle name** (optional but recommended)
- **Last name/Surname** (mandatory)

### Secondary Pattern (Alternative)
Two fields:
- **First and middle name combined** (optional middle)
- **Last name** (mandatory)

## Field Requirements

**First Name:**
- Mandatory in all implementations
- Should accept letters, spaces, and common name characters
- Character limit: typically 50-100 characters

**Middle Name:**
- Optional but recommended for accuracy
- Provides cultural naming convention support
- Same character requirements as first name

**Last Name/Surname:**
- Mandatory in all implementations
- Should accept letters, spaces, hyphens, and apostrophes
- Character limit: typically 50-100 characters

## Display Guidelines

**Formal contexts** (email/letter openings):
- "Dear Abdullah Al Shamsi"
- With gender information: "Dear Mr. Abdullah Al Shamsi"

**Informal contexts** (dashboard/welcome):
- First name only: "Hello, Abdulla"

**Third-person references:**
- Include first and last name only
- "Abdullah Al Shamsi submitted the application"

## Validation Rules

While not explicitly detailed in official documentation, best practices include:
- Minimum 2 characters per name field
- Allow Unicode characters for international names
- Accept spaces within names
- Prevent leading/trailing spaces
- Allow hyphens and apostrophes (O'Brien, Al-Shamsi)
- Restrict special characters and numbers
- Case-insensitive validation

## Accessibility Requirements

- Label each field clearly with `for` attribute
- Use `autocomplete` attributes: `given-name`, `additional-name`, `family-name`
- Provide clear error messages for validation failures
- Support keyboard navigation between fields
- Ensure sufficient color contrast for labels and inputs
- Include required field indicators (asterisk or "required" text)

## Usage Examples

**Primary Pattern - Three Fields (Recommended):**
```html
<div class="name-pattern-group">
	<div class="aegov-form-control">
		<label for="firstName">First name *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="firstName"
				name="firstName"
				placeholder="Enter first name"
				required
				autocomplete="given-name"
				maxlength="50"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="middleName">Middle name</label>
		<div class="form-control-input">
			<input
				type="text"
				id="middleName"
				name="middleName"
				placeholder="Enter middle name"
				autocomplete="additional-name"
				maxlength="50"
			/>
		</div>
		<p class="helper-text">Optional but recommended</p>
	</div>

	<div class="aegov-form-control">
		<label for="lastName">Last name *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Enter last name"
				required
				autocomplete="family-name"
				maxlength="50"
			/>
		</div>
	</div>
</div>
```

**Secondary Pattern - Two Fields (Alternative):**
```html
<div class="name-pattern-group">
	<div class="aegov-form-control">
		<label for="firstMiddleName">First and middle name *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="firstMiddleName"
				name="firstMiddleName"
				placeholder="Enter first and middle name"
				required
				autocomplete="given-name"
				maxlength="100"
			/>
		</div>
		<p class="helper-text">Middle name is optional</p>
	</div>

	<div class="aegov-form-control">
		<label for="lastName">Last name *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="lastName"
				name="lastName"
				placeholder="Enter last name"
				required
				autocomplete="family-name"
				maxlength="50"
			/>
		</div>
	</div>
</div>
```

## Cultural Considerations

**Arabic Names:**
- Support full Arabic character set
- Allow multiple middle names (common in Arabic naming)
- Respect cultural naming conventions

**International Names:**
- Support Unicode characters
- Allow single-word names (mononyms)
- Accommodate hyphenated last names
- Support name prefixes (van, de, etc.)

## Technical Notes

- Store names in separate fields in database for flexibility
- Implement proper Unicode support (UTF-8)
- Consider name normalization for search
- Provide clear guidance on name entry
- Support copy-paste functionality
- Avoid autocorrect/autocapitalize on mobile for name fields
