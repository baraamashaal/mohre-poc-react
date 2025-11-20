# Currency Symbol Pattern
**Docs**: https://designsystem.gov.ae/docs/patterns/currency-symbol
**Purpose**: Guidelines for implementing the UAE Dirham symbol
**JS Required**: ⚠️ Currency formatting recommended

## Description

"The currency symbol should primarily appear in black or white to ensure clarity and consistency across applications." Brand color variations are permissible only in marketing contexts with maintained visibility. The symbol represents the nation's economic identity and digital transformation commitment.

**Official Launch:** The new Dirham symbol was unveiled by the Central Bank of UAE on March 27, 2025.

## Symbol Implementation

**Primary Colors:**
- Black (for light backgrounds)
- White (for dark backgrounds)

**Brand Colors:**
- Permitted only in marketing materials
- Must maintain visibility and clarity
- Cannot replace functional use

## Display Requirements

**Symbol Positioning:**
- Always position directly before numeric values
- Left-aligned with numerical amount
- Example: `د.إ 100.00` or `AED 100.00`

**Font Consistency:**
- Match price digit sizing
- Match font weight
- Match typeface
- Maintain baseline alignment with numerals

**Digital Interfaces:**
- Symbol displayed left of numerical value
- Consistent height with numbers
- No superscript or subscript forms

## Prohibited Uses

**Never:**
- Use as a logo or branding element
- Apply gradients or decorative effects
- Use on splash screens
- Place in superscript/subscript position
- Stylize beyond core structure
- Replace written "Dirhams" when amounts are spelled out

**Permitted:**
- Minor stroke weight adjustments for typeface harmony
- Serif adjustments to match font style
- Maintaining core structure consistency

## Usage Examples

**Price Tags (Physical/Digital):**
```html
<span class="price">د.إ 299.00</span>
```

**E-commerce Product Display:**
```html
<div class="product-price">
	<span class="currency">AED</span>
	<span class="amount">1,499.00</span>
</div>
```

**Financial Applications:**
```html
<div class="balance">
	<span class="label">Available Balance:</span>
	<span class="value">د.إ 15,250.00</span>
</div>
```

## Formatting Guidelines

**Decimal Places:**
- Always use 2 decimal places: `د.إ 100.00`
- Never: `د.إ 100` or `د.إ 100.0`

**Thousand Separators:**
- Use comma: `د.إ 1,000.00`
- For large amounts: `د.إ 1,000,000.00`

**Negative Amounts:**
- Use minus sign before symbol: `-د.إ 50.00`
- Alternative: `(د.إ 50.00)` for accounting

**Zero Amounts:**
- Display as: `د.إ 0.00`
- Not: `Free` or `د.إ 0`

## Currency Input Example

**Currency Input Field:**
```html
<div class="aegov-form-control">
	<label for="amount">Amount *</label>
	<div class="form-control-input">
		<div class="flex items-center gap-2">
			<span class="text-sm font-medium">د.إ</span>
			<input
				type="number"
				id="amount"
				name="amount"
				placeholder="0.00"
				min="0"
				step="0.01"
				required
			/>
		</div>
	</div>
	<p class="helper-text">Enter amount in AED</p>
</div>
```

## Currency Formatting Functions

**JavaScript/TypeScript:**
```typescript
function formatCurrency(amount: number, locale: string = 'ar-AE'): string {
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency: 'AED',
		minimumFractionDigits: 2,
		maximumFractionDigits: 2
	}).format(amount);
}

// Usage:
formatCurrency(299) // Returns: "د.إ 299.00"
formatCurrency(1500.5) // Returns: "د.إ 1,500.50"
```

## Accessibility Requirements

- Ensure symbol has proper color contrast (minimum 4.5:1 ratio)
- Include currency code in alt text for screen readers
- Use semantic HTML for prices
- Announce amounts correctly to assistive technology
- Support screen reader currency pronunciation

**Example:**
```html
<span class="price" aria-label="299 United Arab Emirates Dirhams">
	د.إ 299.00
</span>
```

## Multi-Currency Support

When displaying multiple currencies:
- Always show currency code or symbol
- Maintain consistent formatting
- Use conversion rates with timestamps
- Indicate primary vs secondary currency

**Example:**
```html
<div class="price-multi-currency">
	<div class="primary-price">د.إ 299.00</div>
	<div class="secondary-price">(approx. $81.50 USD)</div>
</div>
```

## Technical Notes

- Store amounts as decimal/numeric types in database
- Use appropriate data types to prevent rounding errors
- Always perform calculations in smallest unit (fils)
- Convert to dirham for display: `1 AED = 100 fils`
- Validate currency inputs on both client and server
- Support copy-paste of formatted amounts
- Handle international formats for tourists/expats

## Common Use Cases

**E-commerce:**
- Product prices
- Shopping cart totals
- Order summaries
- Refund amounts

**Financial Services:**
- Account balances
- Transaction amounts
- Investment values
- Loan amounts

**Government Services:**
- Fee payments
- Fine amounts
- Tax calculations
- Service charges

**Invoicing:**
- Line item prices
- Subtotals
- Tax amounts
- Grand totals

## Official Reference

Detailed guidelines available via Central Bank of UAE's official currency symbol guide: https://www.centralbank.ae/media/e4ebcgtb/the_guidelines_for_the_national_currency_symbol_uae_dirham_english.pdf

## Symbol Usage Checklist

✅ **Do:**
- Position symbol before numeric value
- Use black or white for primary colors
- Match font styling of numbers
- Maintain consistent baseline alignment
- Use for all price displays
- Include in digital and print materials

❌ **Don't:**
- Use as logo or branding
- Apply decorative effects
- Stylize beyond recognition
- Use in splash screens
- Replace written "Dirhams" text
- Use inconsistent positioning
