import { useState } from 'react';
import { RangeSlider } from '@components/ui';

/**
 * RangeSlider Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const RangeSliderShowcase = () => {
  const [volume, setVolume] = useState(70);
  const [brightness, setBrightness] = useState(80);
  const [temperature, setTemperature] = useState(22);
  const [price, setPrice] = useState(500);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            RangeSlider Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for RangeSlider component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Range Sliders */}
          <section data-testid="range-slider-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Range Sliders
            </h2>
            <div className="space-y-6 max-w-md">
              <RangeSlider
                label="Basic Slider"
                defaultValue={50}
                data-testid="basic-slider"
              />
              <RangeSlider
                label="With Default Value"
                defaultValue={75}
                data-testid="default-value-slider"
              />
              <RangeSlider
                label="Without Output"
                defaultValue={50}
                showOutput={false}
                data-testid="no-output-slider"
              />
            </div>
          </section>

          {/* Range and Steps */}
          <section data-testid="range-slider-ranges-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Custom Ranges and Steps
            </h2>
            <div className="space-y-6 max-w-md">
              <RangeSlider
                label="Custom Range (0-200)"
                min={0}
                max={200}
                defaultValue={100}
                data-testid="custom-range-slider"
              />
              <RangeSlider
                label="Temperature (16-30°C)"
                min={16}
                max={30}
                defaultValue={22}
                helperText="Set temperature in Celsius"
                data-testid="temperature-slider"
              />
              <RangeSlider
                label="Price ($0-$2000, step $100)"
                min={0}
                max={2000}
                step={100}
                defaultValue={1000}
                helperText="Adjust in increments of $100"
                data-testid="price-step-slider"
              />
            </div>
          </section>

          {/* Variants */}
          <section data-testid="range-slider-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Variants</h2>
            <div className="space-y-6 max-w-md">
              <RangeSlider
                label="Primary Variant"
                variant="primary"
                defaultValue={60}
                data-testid="primary-slider"
              />
              <RangeSlider
                label="Secondary Variant"
                variant="secondary"
                defaultValue={60}
                data-testid="secondary-slider"
              />
            </div>
          </section>

          {/* States */}
          <section data-testid="range-slider-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">States</h2>
            <div className="space-y-6 max-w-md">
              <RangeSlider
                label="Normal"
                defaultValue={50}
                data-testid="normal-slider"
              />
              <RangeSlider
                label="With Helper Text"
                defaultValue={50}
                helperText="This is helper text"
                data-testid="helper-slider"
              />
              <RangeSlider
                label="Disabled"
                defaultValue={50}
                disabled
                data-testid="disabled-slider"
              />
              <RangeSlider
                label="Error State"
                defaultValue={95}
                error
                errorMessage="Value is too high"
                data-testid="error-slider"
              />
              <RangeSlider
                label="Required"
                defaultValue={50}
                required
                data-testid="required-slider"
              />
            </div>
          </section>

          {/* Interactive Examples */}
          <section data-testid="range-slider-interactive-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Interactive Examples
            </h2>
            <div className="bg-white rounded-lg shadow p-6 max-w-md space-y-6">
              <div>
                <RangeSlider
                  label="Volume Control"
                  value={volume}
                  onValueChange={setVolume}
                  data-testid="volume-slider"
                />
                <p className="mt-2 text-sm text-gray-600" data-testid="volume-value">
                  Current volume: {volume}%
                </p>
              </div>

              <div>
                <RangeSlider
                  label="Brightness"
                  value={brightness}
                  onValueChange={setBrightness}
                  variant="secondary"
                  data-testid="brightness-slider"
                />
                <p className="mt-2 text-sm text-gray-600" data-testid="brightness-value">
                  Brightness level: {brightness}%
                </p>
              </div>

              <div>
                <RangeSlider
                  label="Room Temperature"
                  min={16}
                  max={30}
                  value={temperature}
                  onValueChange={setTemperature}
                  helperText={`Currently set to ${temperature}°C`}
                  data-testid="room-temp-slider"
                />
              </div>

              <div>
                <RangeSlider
                  label="Max Price Filter"
                  min={0}
                  max={2000}
                  step={50}
                  value={price}
                  onValueChange={setPrice}
                  helperText={`Show items up to $${price}`}
                  data-testid="price-filter-slider"
                />
              </div>
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="range-slider-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8 max-w-md">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Audio Controls
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <RangeSlider
                    label="Master Volume"
                    defaultValue={80}
                    data-testid="master-volume-slider"
                  />
                  <RangeSlider
                    label="Bass"
                    defaultValue={50}
                    data-testid="bass-slider"
                  />
                  <RangeSlider
                    label="Treble"
                    defaultValue={50}
                    data-testid="treble-slider"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Image Adjustments
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <RangeSlider
                    label="Brightness"
                    defaultValue={70}
                    data-testid="image-brightness-slider"
                  />
                  <RangeSlider
                    label="Contrast"
                    defaultValue={50}
                    data-testid="image-contrast-slider"
                  />
                  <RangeSlider
                    label="Saturation"
                    defaultValue={60}
                    data-testid="image-saturation-slider"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Product Filters
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <RangeSlider
                    label="Price Range"
                    min={0}
                    max={5000}
                    step={100}
                    defaultValue={2500}
                    helperText="Maximum price"
                    data-testid="product-price-slider"
                  />
                  <RangeSlider
                    label="Rating"
                    min={1}
                    max={5}
                    step={1}
                    defaultValue={3}
                    helperText="Minimum rating"
                    data-testid="product-rating-slider"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="range-slider-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-6 max-w-md">
              <RangeSlider
                label="With ARIA Label"
                aria-label="Volume control slider"
                defaultValue={50}
                data-testid="a11y-aria-slider"
              />
              <RangeSlider
                label="Keyboard Accessible"
                defaultValue={50}
                helperText="Use arrow keys to adjust"
                data-testid="a11y-keyboard-slider"
              />
              <RangeSlider
                label="With Min/Max Labels"
                min={0}
                max={100}
                defaultValue={50}
                helperText="Range: 0 to 100"
                data-testid="a11y-range-slider"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
