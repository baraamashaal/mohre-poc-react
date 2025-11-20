import { useState } from 'react';
import { Banner } from '@/shared/components/ui';

/**
 * BannerShowcase Component
 *
 * Comprehensive showcase and testing page for the Banner component.
 * Demonstrates all variants, states, and use cases from the AEGOV Design System.
 */
export const BannerShowcase = () => {
  const [showDismissible, setShowDismissible] = useState(true);
  const [showControlled, setShowControlled] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Banner Component Showcase</h1>
          <p className="text-gray-600">Testing and demonstration page for Banner component</p>
        </header>

        <div className="space-y-12">
          {/* Section 1: Default Banner */}
          <section data-testid="default-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Default Banner</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Banner data-testid="banner-default">
                This is a default banner with important information.
              </Banner>
            </div>
          </section>

          {/* Section 2: Banner with Title */}
          <section data-testid="title-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Banner with Title</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Banner title="Important Notice" data-testid="banner-title">
                Please review the updated terms and conditions.
              </Banner>
            </div>
          </section>

          {/* Section 3: Position Variants */}
          <section data-testid="position-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Position Variants</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Top Position (default)</p>
                <Banner position="top" data-testid="banner-top">
                  Banner at the top position
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Bottom Position</p>
                <Banner position="bottom" data-testid="banner-bottom">
                  Banner at the bottom position
                </Banner>
              </div>
            </div>
          </section>

          {/* Section 4: Color Variants */}
          <section data-testid="variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Color Variants</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">Default</p>
                <Banner variant="default" data-testid="banner-variant-default">
                  Default variant banner
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Camel</p>
                <Banner variant="camel" data-testid="banner-variant-camel">
                  Camel variant banner with golden theme
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Red</p>
                <Banner variant="red" data-testid="banner-variant-red">
                  Red variant banner for warnings
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Dark</p>
                <Banner variant="dark" data-testid="banner-variant-dark">
                  Dark variant banner for emphasis
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">Notice</p>
                <Banner variant="notice" data-testid="banner-variant-notice">
                  Notice variant banner for information
                </Banner>
              </div>
            </div>
          </section>

          {/* Section 5: Dismissible Banner */}
          <section data-testid="dismissible-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Dismissible Banner</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              {showDismissible ? (
                <Banner
                  isDismissible
                  onDismiss={() => setShowDismissible(false)}
                  data-testid="banner-dismissible"
                >
                  This banner can be dismissed. Click the X button.
                </Banner>
              ) : (
                <div className="text-center py-4">
                  <p className="text-gray-600 mb-2">Banner dismissed</p>
                  <button
                    onClick={() => setShowDismissible(true)}
                    className="text-blue-600 hover:underline"
                    data-testid="reset-dismissible"
                  >
                    Reset Banner
                  </button>
                </div>
              )}
            </div>
          </section>

          {/* Section 6: Banner with Action */}
          <section data-testid="action-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Banner with Action</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <Banner
                action={{
                  text: 'Learn More',
                  onClick: () => alert('Learn More clicked!'),
                }}
                data-testid="banner-action"
              >
                New features available in the latest update.
              </Banner>
              <Banner
                variant="camel"
                action={{
                  text: 'Subscribe Now',
                  onClick: () => alert('Subscribe clicked!'),
                }}
                data-testid="banner-action-camel"
              >
                Subscribe to our newsletter for updates.
              </Banner>
            </div>
          </section>

          {/* Section 7: Centered Content */}
          <section data-testid="centered-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Centered Content</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <Banner centered data-testid="banner-centered">
                Centered banner content
              </Banner>
              <Banner centered variant="dark" data-testid="banner-centered-dark">
                Centered dark banner content
              </Banner>
            </div>
          </section>

          {/* Section 8: With ARIA Roles */}
          <section data-testid="aria-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">ARIA Roles</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <div>
                <p className="text-sm text-gray-600 mb-2">role="region" (default)</p>
                <Banner role="region" data-testid="banner-role-region">
                  Default region banner
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">role="alert"</p>
                <Banner role="alert" variant="red" data-testid="banner-role-alert">
                  Alert banner for urgent messages
                </Banner>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-2">role="status"</p>
                <Banner role="status" data-testid="banner-role-status">
                  Status banner for updates
                </Banner>
              </div>
            </div>
          </section>

          {/* Section 9: Controlled Banner */}
          <section data-testid="controlled-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Controlled Banner</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <button
                  onClick={() => setShowControlled(!showControlled)}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                  data-testid="toggle-controlled"
                >
                  {showControlled ? 'Hide' : 'Show'} Banner
                </button>
              </div>
              {showControlled && (
                <Banner
                  variant="notice"
                  isDismissible
                  onDismiss={() => setShowControlled(false)}
                  title="System Update"
                  action={{
                    text: 'View Details',
                    onClick: () => alert('Details clicked!'),
                  }}
                  data-testid="banner-controlled"
                >
                  A new system update is available.
                </Banner>
              )}
            </div>
          </section>

          {/* Section 10: Combined Features */}
          <section data-testid="combined-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Combined Features</h2>
            <div className="bg-white p-6 rounded-lg shadow space-y-4">
              <Banner
                title="Welcome"
                variant="camel"
                centered
                isDismissible
                action={{
                  text: 'Get Started',
                  onClick: () => alert('Get Started clicked!'),
                }}
                ariaLabel="Welcome banner"
                data-testid="banner-combined"
              >
                Welcome to the platform! Get started by exploring our features.
              </Banner>
              <Banner
                position="top"
                variant="dark"
                isDismissible
                title="Maintenance Notice"
                action={{
                  text: 'Learn More',
                  onClick: () => alert('Learn More clicked!'),
                }}
                role="alert"
                data-testid="banner-combined-dark"
              >
                Scheduled maintenance on Sunday at 2:00 AM.
              </Banner>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
