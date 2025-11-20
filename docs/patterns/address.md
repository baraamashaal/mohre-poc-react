# Address Pattern
**Docs**: https://designsystem.gov.ae/docs/patterns/address
**Purpose**: Standardized format for collecting and displaying address information
**JS Required**: ⚠️ Yes (for auto-loading cities/areas based on emirate selection)

## Description

"An address pattern refers to a standardized format or template for collecting or displaying address information." This approach facilitates seamless operations across sectors by maintaining unified structure and clarity, ensuring efficient data processing and clear communication across government entities and services.

## Pattern Variations

The Address pattern provides **2 primary form variations** plus **1 display pattern**:

1. **Domestic Address Collection** (within UAE)
2. **International Address Collection** (outside UAE)
3. **Address Card Display** (formatted address output)

## Domestic Address Fields (UAE)

- **Emirate** (select dropdown) - required
- **City** (auto-loaded based on emirate) - required
- **Area** (auto-loaded based on city) - required
- **Apartment/Villa number** - optional
- **Building/Community name** - optional
- **Street address** - optional
- **P.O. box** - optional
- **Additional landmarks** - optional

## International Address Fields

- **Address details** - required
- **P.O. box/ZIP code** - optional
- **Additional landmarks** - optional
- **City** - required
- **State** - optional
- **Country** (comprehensive dropdown list) - required

## Field Requirements

**Core Requirements:**
- Emirate and City selections must use dropdowns with auto-loading functionality
- Default city should auto-select when emirate is chosen
- Area options dynamically update upon city selection

**Optional Enhancements:**
- Makani (geographic addressing system) field for applicable emirates
- Address type designation (primary, secondary, home, office, etc.)
- Map integration for precise location marking

## Usage Guidelines

**Critical UX Principle:** "Selection of data that causes an affect must always flow downwards in order"—placing broader categories (Emirate) before dependent fields (City, Area).

**Recommended Contexts:**
- User profile address management
- Company profile information
- Service workflow requirements
- Multi-address scenarios
- Third-party location entry

## Accessibility Requirements

Map integration "may have an accessibility impact, hence it must not be the first choice" for address entry. Keyboard navigation support is essential, requiring proper field ordering to prevent users from needing to skip and return to fields.

**Key Accessibility Features:**
- Logical field order supporting keyboard Tab navigation
- Clear labels with `for` attributes linking to inputs
- Error messages associated with fields
- Dropdown selections accessible via keyboard
- ARIA attributes for auto-loading dependent fields

## Validation Rules

While no explicit validation rules are documented, best practices include:
- Required field validation (Emirate, City, Area for domestic; Country for international)
- Format validation for P.O. box numbers
- Character limits for text fields
- Prevention of special characters in address fields where appropriate

## Usage Examples

**Domestic Address Form:**
```html
<div class="address-form-domestic">
	<div class="aegov-form-control">
		<label for="emirate">Emirate *</label>
		<div class="form-control-input">
			<select id="emirate" name="emirate" required onchange="loadCities(this.value)">
				<option value="">Select emirate</option>
				<option value="abu-dhabi">Abu Dhabi</option>
				<option value="dubai">Dubai</option>
				<option value="sharjah">Sharjah</option>
				<option value="ajman">Ajman</option>
				<option value="umm-al-quwain">Umm Al Quwain</option>
				<option value="ras-al-khaimah">Ras Al Khaimah</option>
				<option value="fujairah">Fujairah</option>
			</select>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="city">City *</label>
		<div class="form-control-input">
			<select id="city" name="city" required disabled onchange="loadAreas(this.value)">
				<option value="">Select city</option>
			</select>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="area">Area *</label>
		<div class="form-control-input">
			<select id="area" name="area" required disabled>
				<option value="">Select area</option>
			</select>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="building">Building/Community name</label>
		<div class="form-control-input">
			<input
				type="text"
				id="building"
				name="building"
				placeholder="Enter building or community name"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="street">Street address</label>
		<div class="form-control-input">
			<input
				type="text"
				id="street"
				name="street"
				placeholder="Enter street address"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="pobox">P.O. box</label>
		<div class="form-control-input">
			<input
				type="text"
				id="pobox"
				name="pobox"
				placeholder="Enter P.O. box number"
			/>
		</div>
	</div>
</div>
```

**International Address Form:**
```html
<div class="address-form-international">
	<div class="aegov-form-control">
		<label for="addressDetails">Address details *</label>
		<div class="form-control-input">
			<textarea
				id="addressDetails"
				name="addressDetails"
				rows="3"
				placeholder="Enter full address"
				required
			></textarea>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="zip">P.O. box/ZIP code</label>
		<div class="form-control-input">
			<input
				type="text"
				id="zip"
				name="zip"
				placeholder="Enter postal code"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="city">City *</label>
		<div class="form-control-input">
			<input
				type="text"
				id="city"
				name="city"
				placeholder="Enter city name"
				required
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="state">State</label>
		<div class="form-control-input">
			<input
				type="text"
				id="state"
				name="state"
				placeholder="Enter state/province"
			/>
		</div>
	</div>

	<div class="aegov-form-control">
		<label for="country">Country *</label>
		<div class="form-control-input">
			<select id="country" name="country" required>
				<option value="">Select country</option>
				<option value="ae">United Arab Emirates</option>
				<option value="sa">Saudi Arabia</option>
				<option value="us">United States</option>
				<option value="uk">United Kingdom</option>
				<option value="in">India</option>
			</select>
		</div>
	</div>
</div>
```

## Display Pattern

When displaying addresses, use consistent formatting:

**Domestic Address Display:**
```
Apartment 501, Building A
Street 23, Area Name
City Name, Emirate
P.O. Box: 12345
```

**International Address Display:**
```
123 Main Street
City Name, State
ZIP Code
Country Name
```

## Technical Notes

- Implement cascading dropdowns with AJAX/API calls for city and area loading
- Store Makani codes separately for applicable emirates
- Support multiple addresses per user with type designation
- Consider geocoding integration for map-based address selection
- Ensure data persistence across form sessions
