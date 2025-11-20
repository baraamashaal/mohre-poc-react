import { Hyperlink } from '@components/ui';

/**
 * Hyperlink Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const HyperlinkShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Hyperlink Component Showcase</h1>
          <p className="text-gray-600">Testing and demonstration page for Hyperlink component</p>
        </header>

        <div className="space-y-12">
          {/* Default Links */}
          <section data-testid="hyperlink-default-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Default Links</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
              <div>
                <Hyperlink href="/test" data-testid="default-link">
                  This is a default hyperlink
                </Hyperlink>
              </div>
              <div className="max-w-md">
                <p className="text-gray-700">
                  This is a paragraph with an{' '}
                  <Hyperlink href="/test" data-testid="inline-link">
                    inline link
                  </Hyperlink>{' '}
                  embedded within the text. Links are underlined to distinguish them from regular
                  text.
                </p>
              </div>
            </div>
          </section>

          {/* CTA Links */}
          <section data-testid="hyperlink-cta-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Call-to-Action (CTA) Links</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
              <Hyperlink href="/services" variant="cta" icon data-testid="cta-link">
                Learn more
              </Hyperlink>
              <Hyperlink href="/about" variant="cta" icon data-testid="cta-link-2">
                Find out more
              </Hyperlink>
              <Hyperlink
                href="/contact"
                variant="cta"
                icon={<span data-testid="custom-icon">→</span>}
                data-testid="cta-custom-icon"
              >
                Contact us
              </Hyperlink>
            </div>
          </section>

          {/* Soft Variant */}
          <section data-testid="hyperlink-soft-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Soft Variant</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Hyperlink href="/test" variant="soft" data-testid="soft-link">
                Soft variant link with enhanced hover feedback
              </Hyperlink>
            </div>
          </section>

          {/* Button-styled Links */}
          <section data-testid="hyperlink-button-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Button-styled Links</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
              <div>
                <Hyperlink href="/test" variant="secondary" data-testid="secondary-link">
                  Secondary button link
                </Hyperlink>
              </div>
              <div>
                <Hyperlink href="/test" variant="secondary-soft" data-testid="secondary-soft-link">
                  Secondary soft link
                </Hyperlink>
              </div>
            </div>
          </section>

          {/* External Links */}
          <section data-testid="hyperlink-external-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">External Links</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
              <div>
                <Hyperlink
                  href="https://example.com"
                  external
                  data-testid="external-link"
                >
                  External link (opens in new tab)
                </Hyperlink>
              </div>
              <div>
                <Hyperlink
                  href="https://example.com/services"
                  variant="cta"
                  icon
                  external
                  data-testid="external-cta"
                >
                  External CTA link
                </Hyperlink>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="hyperlink-accessibility-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6 space-y-4">
              <div>
                <Hyperlink
                  href="/services"
                  title="View all available services"
                  data-testid="link-with-title"
                >
                  Link with title attribute
                </Hyperlink>
              </div>
              <div>
                <Hyperlink
                  href="/"
                  aria-label="Navigate to homepage"
                  data-testid="link-with-aria"
                >
                  Home
                </Hyperlink>
              </div>
            </div>
          </section>

          {/* Use Cases */}
          <section data-testid="hyperlink-usecases-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Common Use Cases</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              {/* Service Card Example */}
              <div className="mb-8 pb-8 border-b">
                <h3 className="text-xl font-semibold mb-3" data-testid="service-card-title">
                  Apply for Business License
                </h3>
                <p className="text-gray-600 mb-4">
                  Submit your business license application online. Quick and easy process with
                  step-by-step guidance.
                </p>
                <Hyperlink href="/services/license" variant="cta" icon data-testid="service-cta">
                  Start application
                </Hyperlink>
              </div>

              {/* Article with Links */}
              <div>
                <h3 className="text-xl font-semibold mb-3">Understanding Government Services</h3>
                <p className="text-gray-700 mb-4">
                  The UAE government offers a wide range of digital services to make your life
                  easier. Learn more about{' '}
                  <Hyperlink href="/services" data-testid="article-link-1">
                    available services
                  </Hyperlink>{' '}
                  and how they can help you. For more information, visit our{' '}
                  <Hyperlink href="/help" data-testid="article-link-2">
                    help center
                  </Hyperlink>
                  .
                </p>
                <Hyperlink href="/articles" variant="cta" icon data-testid="article-cta">
                  Read full article
                </Hyperlink>
              </div>
            </div>
          </section>

          {/* AEGOV Structure */}
          <section data-testid="hyperlink-structure-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AEGOV Structure</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Default links: Primary color with underline</li>
                <li>✓ CTA links: .aegov-link class with icon support</li>
                <li>✓ Soft variant: .link-soft class with enhanced hover</li>
                <li>✓ Button variants: .aegov-btn .btn-outline and .btn-soft</li>
                <li>✓ External links: target="_blank" and rel="noopener noreferrer"</li>
                <li>✓ RTL support: Icons flip with rtl:-scale-x-100</li>
                <li>✓ Accessibility: Title and aria-label support</li>
              </ul>
              <Hyperlink href="/test" data-testid="structure-link" className="custom-test-class">
                Link with custom className
              </Hyperlink>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
