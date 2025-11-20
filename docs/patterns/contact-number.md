# Contact Number Pattern
**Docs**: https://designsystem.gov.ae/docs/patterns/contact-number
**Purpose**: Standardized format for collecting and displaying contact numbers
**JS Required**: ✅ Yes (for country code selection and verification)

## Description

The contact number serves as a primary contact method and often requires verification before service activation. This pattern addresses consistent collection of contact numbers by accounting for multiple contact number types, intelligent detection between mobile and non-mobile numbers, mobile number verification at profile level, and international format support.

## Key Requirements

**Collection Guidelines:**
- "Allow the user to store various contact touch points in their profile and label them"
- Enable users to reuse stored contact details when accessing services
- Separate country code from the number field
- "Always load the default country code based on the user's location or their profile preference"
- Prevent empty country dropdown selections

**Verification:**
- "Verify the number of a user when it is added to the system"
- Send verification codes via SMS or voice call
- Implement timeout and retry mechanisms
- Store verification status with contact number

## Field Structure

**Country Code Field:**
- Dropdown select with search functionality
- Default to UAE (+971) for UAE users
- Include flag icons for visual reference
- Support popular countries at top of list

**Number Input Field:**
- Numeric input only
- Auto-format as user types
- Clear placeholder showing expected format
- Real-time validation feedback

**Contact Type Labels:**
- Mobile (default)
- Home
- Work
- Other

## Display Requirements

**Format Standards:**
- Display with country code and space separation
- Use RegEx patterns to identify area codes and mobile prefixes
- Add space after identified codes for readability

**Example Display:**
- `+971 55 1234567` (UAE mobile with RegEx parsing)
- `+971 2 1234567` (UAE landline)
- `+44 7911 123456` (UK mobile)
- `+1 555 123 4567` (US number)

**Internal Format:**
- May use simple space after country code
- Store without spaces in database: `+971551234567`

## Validation Rules

**UAE Mobile Numbers:**
- Must start with 5 (followed by 0, 2, 4, 5, 6, or 8)
- Total 9 digits after country code
- Pattern: `^5[0245689]\d{7}$`

**UAE Landline Numbers:**
- Area codes: 2 (Abu Dhabi), 3 (Al Ain), 4 (Dubai), 6 (Sharjah), 7 (Ras Al Khaimah), 9 (other Emirates)
- 7 digits after area code
- Pattern: `^[23467 9]\d{6,7}$`

**International Numbers:**
- Validate based on country-specific rules
- Minimum 7 digits, maximum 15 digits
- Use libphonenumber for comprehensive validation

## Accessibility Requirements

- Clear labels with `for` attributes
- Autocomplete attribute: `tel`
- Separate country code for better screen reader support
- Error messages announced to assistive technology
- Keyboard navigation support between fields
- Large touch targets for mobile devices

## Usage Examples

```html
<div class="contact-number-pattern">
	<div class="aegov-form-control">
		<label for="contactNumber">Contact number *</label>
		<div class="form-control-input flex gap-2">
			<select
				id="countryCode"
				name="countryCode"
				class="w-32"
				aria-label="Country code">
				<option value="+971" selected>🇦🇪 +971</option>
				<option value="+1">🇺🇸 +1</option>
				<option value="+44">🇬🇧 +44</option>
				<option value="+91">🇮🇳 +91</option>
			</select>
			<input
				type="tel"
				id="contactNumber"
				name="contactNumber"
				placeholder="50 123 4567"
				required
				autocomplete="tel"
				pattern="[0-9\s]+"
			/>
		</div>
		<p class="helper-text">We'll send a verification code to this number</p>
	</div>

	<div class="aegov-form-control" id="verification-section" style="display: none;">
		<label for="verificationCode">Verification code *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="verificationCode"
				name="verificationCode"
				placeholder="Enter 6-digit code"
				maxlength="6"
				required
			/>
		</div>
		<p class="helper-text">Code sent to <span id="displayNumber"></span></p>
		<button type="button" class="aegov-btn btn-link" id="resendCode">Resend code</button>
	</div>
</div>
```

## Multiple Contact Numbers

When allowing multiple contact numbers:
- Provide "Add another number" button
- Allow labeling each number (Mobile, Home, Work)
- Mark one as primary contact
- Show verification status for each number
- Enable remove functionality for non-primary numbers

## Technical Notes

- Use international phone number libraries (libphonenumber)
- Implement rate limiting for verification codes
- Store numbers in E.164 format: `+[country code][number]`
- Support WhatsApp verification as alternative to SMS
- Implement spam protection for verification requests
- Cache country code preference for returning users
- Support paste functionality with auto-format
- Detect mobile vs landline automatically
