import { Textarea } from '@components/ui';

/**
 * Textarea Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const TextareaShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Textarea Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Textarea component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Textareas */}
          <section data-testid="textarea-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Textareas
            </h2>
            <div className="space-y-4">
              <Textarea placeholder="Leave a comment..." data-testid="basic-textarea" />
              <Textarea label="Your message" placeholder="Write your thoughts..." data-testid="labeled-textarea" />
              <Textarea
                label="Message"
                placeholder="Write here..."
                helperText="Please provide as much detail as possible."
                data-testid="textarea-with-helper"
              />
            </div>
          </section>

          {/* Textarea Sizes */}
          <section data-testid="textarea-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Textarea Sizes
            </h2>
            <div className="space-y-4">
              <Textarea label="Small" size="sm" placeholder="Small textarea" data-testid="small-textarea" />
              <Textarea label="Base" size="base" placeholder="Base textarea" data-testid="base-textarea" />
              <Textarea label="Large" size="lg" placeholder="Large textarea" data-testid="large-textarea" />
            </div>
          </section>

          {/* Variants */}
          <section data-testid="textarea-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants
            </h2>
            <div className="space-y-4">
              <Textarea label="Primary" variant="primary" placeholder="Primary variant" data-testid="primary-textarea" />
              <Textarea label="Secondary" variant="secondary" placeholder="Secondary variant" data-testid="secondary-textarea" />
            </div>
          </section>

          {/* States */}
          <section data-testid="textarea-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Textarea States
            </h2>
            <div className="space-y-4">
              <Textarea label="Normal" placeholder="Normal state" data-testid="normal-textarea" />
              <Textarea label="Required" placeholder="Required field" required data-testid="required-textarea" />
              <Textarea label="Disabled" placeholder="Disabled state" disabled data-testid="disabled-textarea" />
              <Textarea
                label="Error"
                error
                errorMessage="Message is required"
                placeholder="Error state"
                data-testid="error-textarea"
              />
            </div>
          </section>

          {/* Custom Rows */}
          <section data-testid="textarea-rows-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Custom Rows
            </h2>
            <div className="space-y-4">
              <Textarea label="2 Rows" rows={2} placeholder="2 rows" data-testid="textarea-2-rows" />
              <Textarea label="4 Rows (Default)" rows={4} placeholder="4 rows" data-testid="textarea-4-rows" />
              <Textarea label="8 Rows" rows={8} placeholder="8 rows" data-testid="textarea-8-rows" />
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="textarea-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Contact Form</h3>
                <div className="max-w-md">
                  <Textarea
                    label="Message"
                    placeholder="Tell us about your inquiry..."
                    required
                    helperText="Please be as detailed as possible."
                    rows={6}
                    data-testid="contact-message"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Feedback Form</h3>
                <div className="max-w-md">
                  <Textarea
                    label="Your Feedback"
                    size="lg"
                    placeholder="What do you think about our service?"
                    rows={8}
                    data-testid="feedback-message"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="textarea-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4">
              <Textarea
                label="Accessible Textarea"
                aria-label="Message field"
                placeholder="Enter your message"
                data-testid="accessible-textarea"
              />
              <Textarea
                label="With Description"
                aria-describedby="helper-text"
                placeholder="Textarea with description"
                helperText="This is helper text for screen readers"
                data-testid="textarea-with-description"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
