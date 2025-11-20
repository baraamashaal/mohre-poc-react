import { Checkbox } from '@components/ui';

/**
 * Checkbox Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const CheckboxShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Checkbox Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Checkbox component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Checkboxes */}
          <section data-testid="checkbox-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Checkboxes
            </h2>
            <div className="space-y-4">
              <Checkbox label="Accept terms" data-testid="basic-checkbox" />
              <Checkbox label="Subscribe to newsletter" data-testid="labeled-checkbox" />
              <Checkbox
                label="Send me updates"
                helperText="You can unsubscribe at any time"
                data-testid="checkbox-with-helper"
              />
            </div>
          </section>

          {/* Checkbox Sizes */}
          <section data-testid="checkbox-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checkbox Sizes
            </h2>
            <div className="space-y-4">
              <Checkbox label="Small" size="sm" data-testid="small-checkbox" />
              <Checkbox label="Base" size="base" data-testid="base-checkbox" />
              <Checkbox label="Large" size="lg" data-testid="large-checkbox" />
            </div>
          </section>

          {/* Variants */}
          <section data-testid="checkbox-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants
            </h2>
            <div className="space-y-4">
              <Checkbox label="Primary" variant="primary" data-testid="primary-checkbox" />
              <Checkbox label="Secondary" variant="secondary" data-testid="secondary-checkbox" />
            </div>
          </section>

          {/* States */}
          <section data-testid="checkbox-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checkbox States
            </h2>
            <div className="space-y-4">
              <Checkbox label="Normal" data-testid="normal-checkbox" />
              <Checkbox label="Checked" defaultChecked data-testid="checked-checkbox" />
              <Checkbox label="Required" required data-testid="required-checkbox" />
              <Checkbox label="Disabled" disabled data-testid="disabled-checkbox" />
              <Checkbox
                label="Disabled Checked"
                disabled
                defaultChecked
                data-testid="disabled-checked-checkbox"
              />
              <Checkbox label="Indeterminate" indeterminate data-testid="indeterminate-checkbox" />
              <Checkbox
                label="Error"
                error
                errorMessage="This field is required"
                data-testid="error-checkbox"
              />
            </div>
          </section>

          {/* Checkbox Groups */}
          <section data-testid="checkbox-groups-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Checkbox Groups
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Select Interests</h3>
                <div className="space-y-2">
                  <Checkbox
                    label="Technology"
                    name="interests"
                    value="technology"
                    data-testid="interest-technology"
                  />
                  <Checkbox
                    label="Sports"
                    name="interests"
                    value="sports"
                    data-testid="interest-sports"
                  />
                  <Checkbox
                    label="Music"
                    name="interests"
                    value="music"
                    data-testid="interest-music"
                  />
                  <Checkbox
                    label="Travel"
                    name="interests"
                    value="travel"
                    data-testid="interest-travel"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Notification Preferences</h3>
                <div className="space-y-2">
                  <Checkbox
                    label="Email notifications"
                    name="notifications"
                    defaultChecked
                    data-testid="notify-email"
                  />
                  <Checkbox
                    label="SMS notifications"
                    name="notifications"
                    data-testid="notify-sms"
                  />
                  <Checkbox
                    label="Push notifications"
                    name="notifications"
                    data-testid="notify-push"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="checkbox-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Terms and Conditions</h3>
                <div className="max-w-md">
                  <Checkbox
                    label="I have read and accept the terms and conditions"
                    required
                    helperText="Required to proceed with registration"
                    data-testid="accept-terms"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Newsletter Subscription</h3>
                <div className="max-w-md space-y-3">
                  <Checkbox
                    label="Subscribe to weekly newsletter"
                    defaultChecked
                    helperText="Get updates about new features"
                    data-testid="subscribe-weekly"
                  />
                  <Checkbox
                    label="Receive promotional emails"
                    helperText="Exclusive offers and discounts"
                    data-testid="subscribe-promo"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Select All</h3>
                <div className="max-w-md">
                  <Checkbox
                    label="Select all items"
                    indeterminate
                    helperText="2 of 4 items selected"
                    data-testid="select-all"
                  />
                  <div className="ml-6 mt-3 space-y-2">
                    <Checkbox label="Item 1" defaultChecked data-testid="item-1" />
                    <Checkbox label="Item 2" defaultChecked data-testid="item-2" />
                    <Checkbox label="Item 3" data-testid="item-3" />
                    <Checkbox label="Item 4" data-testid="item-4" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="checkbox-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4">
              <Checkbox
                label="Accessible Checkbox"
                aria-label="Checkbox with aria-label"
                data-testid="accessible-checkbox"
              />
              <Checkbox
                label="With Description"
                aria-describedby="helper-text"
                helperText="This is helper text for screen readers"
                data-testid="checkbox-with-description"
              />
              <Checkbox
                label="Required Checkbox"
                required
                aria-required="true"
                data-testid="required-aria-checkbox"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
