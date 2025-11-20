import { Radio } from '@components/ui';

/**
 * Radio Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const RadioShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Radio Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Radio component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Radio Buttons */}
          <section data-testid="radio-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Radio Buttons
            </h2>
            <div className="space-y-4">
              <Radio label="Option 1" name="basic" value="1" data-testid="basic-radio" />
              <Radio label="Option 2" name="basic" value="2" data-testid="labeled-radio" />
              <Radio
                label="Option 3"
                name="basic"
                value="3"
                helperText="This option includes additional benefits"
                data-testid="radio-with-helper"
              />
            </div>
          </section>

          {/* Radio Sizes */}
          <section data-testid="radio-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Radio Sizes
            </h2>
            <div className="space-y-4">
              <Radio label="Small" size="sm" name="sizes" value="1" data-testid="small-radio" />
              <Radio label="Base" size="base" name="sizes" value="2" data-testid="base-radio" />
              <Radio label="Large" size="lg" name="sizes" value="3" data-testid="large-radio" />
            </div>
          </section>

          {/* Variants */}
          <section data-testid="radio-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants
            </h2>
            <div className="space-y-4">
              <Radio label="Primary" variant="primary" name="variants" value="1" data-testid="primary-radio" />
              <Radio label="Secondary" variant="secondary" name="variants" value="2" data-testid="secondary-radio" />
            </div>
          </section>

          {/* States */}
          <section data-testid="radio-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Radio States
            </h2>
            <div className="space-y-4">
              <Radio label="Normal" name="state-1" value="1" data-testid="normal-radio" />
              <Radio label="Checked" name="state-2" value="1" defaultChecked data-testid="checked-radio" />
              <Radio label="Required" name="state-3" value="1" required data-testid="required-radio" />
              <Radio label="Disabled" name="state-4" value="1" disabled data-testid="disabled-radio" />
              <Radio
                label="Disabled Checked"
                name="state-5"
                value="1"
                disabled
                defaultChecked
                data-testid="disabled-checked-radio"
              />
              <Radio
                label="Error"
                name="state-6"
                value="1"
                error
                errorMessage="This field is required"
                data-testid="error-radio"
              />
            </div>
          </section>

          {/* Radio Groups */}
          <section data-testid="radio-groups-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Radio Groups
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Payment Method</h3>
                <div className="space-y-2">
                  <Radio
                    label="Credit Card"
                    name="payment"
                    value="credit"
                    defaultChecked
                    data-testid="payment-credit"
                  />
                  <Radio
                    label="Debit Card"
                    name="payment"
                    value="debit"
                    data-testid="payment-debit"
                  />
                  <Radio
                    label="PayPal"
                    name="payment"
                    value="paypal"
                    data-testid="payment-paypal"
                  />
                  <Radio
                    label="Bank Transfer"
                    name="payment"
                    value="bank"
                    data-testid="payment-bank"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Account Type</h3>
                <div className="space-y-2">
                  <Radio
                    label="Personal"
                    name="account"
                    value="personal"
                    defaultChecked
                    helperText="For individual use"
                    data-testid="account-personal"
                  />
                  <Radio
                    label="Business"
                    name="account"
                    value="business"
                    helperText="For companies and organizations"
                    data-testid="account-business"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="radio-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Shipping Options</h3>
                <div className="max-w-md space-y-3">
                  <Radio
                    label="Standard Delivery (3-5 days)"
                    helperText="Free"
                    name="shipping"
                    value="standard"
                    defaultChecked
                    data-testid="shipping-standard"
                  />
                  <Radio
                    label="Express Delivery (1-2 days)"
                    helperText="AED 25"
                    name="shipping"
                    value="express"
                    data-testid="shipping-express"
                  />
                  <Radio
                    label="Same Day Delivery"
                    helperText="AED 50"
                    name="shipping"
                    value="same-day"
                    data-testid="shipping-same-day"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Plan Selection</h3>
                <div className="max-w-md space-y-4">
                  <Radio
                    label="Free"
                    helperText="Basic features for personal use"
                    name="plan"
                    value="free"
                    defaultChecked
                    data-testid="plan-free"
                  />
                  <Radio
                    label="Pro"
                    helperText="Advanced features and priority support - AED 99/month"
                    name="plan"
                    value="pro"
                    data-testid="plan-pro"
                  />
                  <Radio
                    label="Enterprise"
                    helperText="Custom solutions for large teams - Contact us"
                    name="plan"
                    value="enterprise"
                    data-testid="plan-enterprise"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Satisfaction Survey</h3>
                <div className="max-w-md space-y-3">
                  <Radio
                    label="Very Satisfied"
                    name="satisfaction"
                    value="5"
                    data-testid="satisfaction-5"
                  />
                  <Radio
                    label="Satisfied"
                    name="satisfaction"
                    value="4"
                    defaultChecked
                    data-testid="satisfaction-4"
                  />
                  <Radio
                    label="Neutral"
                    name="satisfaction"
                    value="3"
                    data-testid="satisfaction-3"
                  />
                  <Radio
                    label="Dissatisfied"
                    name="satisfaction"
                    value="2"
                    data-testid="satisfaction-2"
                  />
                  <Radio
                    label="Very Dissatisfied"
                    name="satisfaction"
                    value="1"
                    data-testid="satisfaction-1"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="radio-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4">
              <Radio
                label="Accessible Radio"
                name="a11y-1"
                value="1"
                aria-label="Radio with aria-label"
                data-testid="accessible-radio"
              />
              <Radio
                label="With Description"
                name="a11y-2"
                value="1"
                aria-describedby="helper-text"
                helperText="This is helper text for screen readers"
                data-testid="radio-with-description"
              />
              <Radio
                label="Required Radio"
                name="a11y-3"
                value="1"
                required
                aria-required="true"
                data-testid="required-aria-radio"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
