import { Card } from '@components/ui';

/**
 * Card Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const CardShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Card Component Showcase</h1>
          <p className="text-gray-600">Testing and demonstration page for Card component</p>
        </header>

        <div className="space-y-12">
          {/* Basic Cards */}
          <section data-testid="card-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Basic Cards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card data-testid="default-card">
                <h3 className="text-lg font-semibold mb-2">Default Card</h3>
                <p className="text-gray-600">
                  This is a basic card with default styling.
                </p>
              </Card>

              <Card bordered data-testid="bordered-card">
                <h3 className="text-lg font-semibold mb-2">Bordered Card</h3>
                <p className="text-gray-600">This card has a border applied.</p>
              </Card>
            </div>
          </section>

          {/* Glow Effect */}
          <section data-testid="card-glow-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Glow Effect</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Card bordered glow data-testid="glow-card">
                <h3 className="text-lg font-semibold mb-2">Card with Glow</h3>
                <p className="text-gray-600">Hover over this card to see the glow effect.</p>
              </Card>
            </div>
          </section>

          {/* Size Variants */}
          <section data-testid="card-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Size Variants</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card size="sm" bordered data-testid="small-card">
                <h3 className="text-base font-semibold mb-2">Small Card</h3>
                <p className="text-sm text-gray-600">Compact size variant.</p>
              </Card>

              <Card size="base" bordered data-testid="base-card">
                <h3 className="text-lg font-semibold mb-2">Base Card</h3>
                <p className="text-gray-600">Standard size (default).</p>
              </Card>

              <Card size="lg" bordered data-testid="large-card">
                <h2 className="text-xl font-semibold mb-2">Large Card</h2>
                <p className="text-gray-600">Large size variant.</p>
              </Card>
            </div>
          </section>

          {/* News Card Example */}
          <section data-testid="card-news-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">News Card Example</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="max-w-sm">
                <Card bordered glow data-testid="news-card">
                  <div className="text-xs text-gray-500 mb-2">Technology • March 15, 2024</div>
                  <h3 className="text-lg font-semibold mb-2">Breaking News Article</h3>
                  <p className="text-gray-600 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                    incididunt ut labore.
                  </p>
                  <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                    Read more →
                  </a>
                </Card>
              </div>
            </div>
          </section>

          {/* Service Card Example */}
          <section data-testid="card-service-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Service Card Example</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="max-w-sm">
                <Card bordered data-testid="service-card">
                  <h3 className="text-lg font-semibold mb-2">
                    <a href="#" className="text-primary-600 hover:text-primary-700">
                      Apply for Business License
                    </a>
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Submit your business license application online. Quick and easy process.
                  </p>
                  <div className="flex items-center justify-between">
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Start service →
                    </a>
                    <span className="text-xs text-gray-500">~15 min</span>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Complex Content */}
          <section data-testid="card-complex-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Complex Content</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="max-w-md">
                <Card bordered glow data-testid="complex-card">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                      <svg
                        className="w-6 h-6 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">Application Approved</h3>
                      <p className="text-sm text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Your business license application has been approved. You can now download your
                    certificate.
                  </p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 font-medium">
                      Download
                    </button>
                    <button className="flex-1 border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 font-medium">
                      View Details
                    </button>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* Card Stack */}
          <section data-testid="card-stack-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card Stack</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="space-y-4 max-w-md">
                <Card bordered data-testid="stack-card-1">
                  <h3 className="font-semibold mb-1">Step 1: Personal Information</h3>
                  <p className="text-sm text-gray-600">Complete your personal details</p>
                </Card>
                <Card bordered data-testid="stack-card-2">
                  <h3 className="font-semibold mb-1">Step 2: Documents Upload</h3>
                  <p className="text-sm text-gray-600">Upload required documents</p>
                </Card>
                <Card bordered data-testid="stack-card-3">
                  <h3 className="font-semibold mb-1">Step 3: Review & Submit</h3>
                  <p className="text-sm text-gray-600">Review and submit your application</p>
                </Card>
              </div>
            </div>
          </section>

          {/* Card Grid */}
          <section data-testid="card-grid-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Card Grid</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card bordered glow data-testid="grid-card-1">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-2">1,234</div>
                    <p className="text-gray-600">Applications</p>
                  </div>
                </Card>
                <Card bordered glow data-testid="grid-card-2">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-success-600 mb-2">567</div>
                    <p className="text-gray-600">Approved</p>
                  </div>
                </Card>
                <Card bordered glow data-testid="grid-card-3">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-warning-600 mb-2">89</div>
                    <p className="text-gray-600">Pending</p>
                  </div>
                </Card>
              </div>
            </div>
          </section>

          {/* AEGOV Structure */}
          <section data-testid="card-structure-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">AEGOV Structure</h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Uses .aegov-card base class</li>
                <li>✓ Supports card-bordered variant</li>
                <li>✓ Supports card-glow hover effect</li>
                <li>✓ Size variants: card-sm, card-base, card-lg</li>
                <li>✓ Flexible content support</li>
                <li>✓ Custom className support</li>
              </ul>
              <Card bordered data-testid="structure-card" className="custom-test-class">
                <p className="text-gray-600">Card with custom className</p>
              </Card>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
