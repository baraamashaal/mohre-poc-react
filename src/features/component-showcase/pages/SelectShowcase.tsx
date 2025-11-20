import { Select } from '@components/ui';

/**
 * Select Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const SelectShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Select Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Select component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Selects */}
          <section data-testid="select-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Selects
            </h2>
            <div className="space-y-4 max-w-md">
              <Select label="Basic Select" data-testid="basic-select">
                <option value="">Select an option</option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
              </Select>
              <Select label="Country Selection" data-testid="labeled-select">
                <option value="">Select a country</option>
                <option value="ae">United Arab Emirates</option>
                <option value="sa">Saudi Arabia</option>
              </Select>
              <Select
                label="Language"
                helperText="Choose your preferred language"
                data-testid="select-with-helper"
              >
                <option value="">Select language</option>
                <option value="en">English</option>
                <option value="ar">Arabic</option>
              </Select>
            </div>
          </section>

          {/* Select Sizes */}
          <section data-testid="select-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Select Sizes
            </h2>
            <div className="space-y-4 max-w-md">
              <Select label="Small" size="sm" data-testid="small-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select label="Base" size="base" data-testid="base-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select label="Large" size="lg" data-testid="large-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
            </div>
          </section>

          {/* Variants */}
          <section data-testid="select-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants
            </h2>
            <div className="space-y-4 max-w-md">
              <Select label="Primary" variant="primary" data-testid="primary-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select label="Secondary" variant="secondary" data-testid="secondary-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
            </div>
          </section>

          {/* States */}
          <section data-testid="select-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Select States
            </h2>
            <div className="space-y-4 max-w-md">
              <Select label="Normal" data-testid="normal-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select label="Required" required data-testid="required-select">
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select label="Disabled" disabled data-testid="disabled-select">
                <option value="">Cannot select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select
                label="Error"
                error
                errorMessage="Please select an option"
                data-testid="error-select"
              >
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
            </div>
          </section>

          {/* Multiple Selection */}
          <section data-testid="select-multiple-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Multiple Selection
            </h2>
            <div className="max-w-md">
              <Select
                label="Select multiple countries"
                multiple
                helperText="Hold Ctrl/Cmd to select multiple options"
                data-testid="multiple-select"
              >
                <option value="ae">United Arab Emirates</option>
                <option value="sa">Saudi Arabia</option>
                <option value="qa">Qatar</option>
                <option value="bh">Bahrain</option>
                <option value="om">Oman</option>
              </Select>
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="select-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8 max-w-md">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Country Selector</h3>
                <Select label="Select your country" required data-testid="country-select">
                  <option value="">Choose a country</option>
                  <option value="ae">United Arab Emirates</option>
                  <option value="sa">Saudi Arabia</option>
                  <option value="qa">Qatar</option>
                  <option value="bh">Bahrain</option>
                </Select>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">City Selector with Groups</h3>
                <Select
                  label="Select your city"
                  helperText="Choose the city where you reside"
                  data-testid="city-select"
                >
                  <option value="">Choose a city</option>
                  <optgroup label="Abu Dhabi">
                    <option value="auh">Abu Dhabi City</option>
                    <option value="aln">Al Ain</option>
                  </optgroup>
                  <optgroup label="Dubai">
                    <option value="dxb">Dubai City</option>
                    <option value="hatta">Hatta</option>
                  </optgroup>
                  <optgroup label="Sharjah">
                    <option value="shj">Sharjah City</option>
                    <option value="khor">Khor Fakkan</option>
                  </optgroup>
                </Select>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Form Example</h3>
                <div className="space-y-4">
                  <Select label="Title" required data-testid="title-select">
                    <option value="">Select</option>
                    <option value="mr">Mr.</option>
                    <option value="mrs">Mrs.</option>
                    <option value="ms">Ms.</option>
                    <option value="dr">Dr.</option>
                  </Select>
                  <Select
                    label="Nationality"
                    required
                    helperText="Your country of citizenship"
                    data-testid="nationality-select"
                  >
                    <option value="">Select nationality</option>
                    <option value="ae">UAE National</option>
                    <option value="other">Other</option>
                  </Select>
                  <Select label="Employment Status" data-testid="employment-select">
                    <option value="">Select status</option>
                    <option value="employed">Employed</option>
                    <option value="self-employed">Self-Employed</option>
                    <option value="unemployed">Unemployed</option>
                    <option value="student">Student</option>
                  </Select>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="select-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4 max-w-md">
              <Select
                label="Accessible Select"
                aria-label="Country selector"
                data-testid="accessible-select"
              >
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select
                label="With Description"
                aria-describedby="helper-text"
                helperText="This is helper text for screen readers"
                data-testid="select-with-description"
              >
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
              <Select
                label="Required Select"
                required
                aria-required="true"
                data-testid="required-aria-select"
              >
                <option value="">Select</option>
                <option value="1">Option 1</option>
              </Select>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
