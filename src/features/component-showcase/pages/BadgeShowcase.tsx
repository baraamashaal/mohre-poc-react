import { Badge } from '@components/ui';

// Icon components defined outside component to avoid re-creation on each render
const CheckIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const XIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
      clipRule="evenodd"
    />
  </svg>
);

const InfoIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);

const WarningIcon = () => (
  <svg
    className="w-3 h-3"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Badge Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const BadgeShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Badge Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Badge component
          </p>
        </header>

        <main className="space-y-12">
          {/* Badge Types */}
          <section data-testid="badge-types-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Badge Types
            </h2>
            <div className="flex flex-wrap gap-3">
              <Badge type="info">Info</Badge>
              <Badge type="success">Success</Badge>
              <Badge type="warning">Warning</Badge>
              <Badge type="error">Error</Badge>
            </div>
          </section>

          {/* Badge Variants */}
          <section data-testid="badge-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants (Soft vs Solid)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Soft</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info" variant="soft">
                    Soft Info
                  </Badge>
                  <Badge type="success" variant="soft">
                    Soft Success
                  </Badge>
                  <Badge type="warning" variant="soft">
                    Soft Warning
                  </Badge>
                  <Badge type="error" variant="soft">
                    Soft Error
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Solid</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info" variant="solid">
                    Solid Info
                  </Badge>
                  <Badge type="success" variant="solid">
                    Solid Success
                  </Badge>
                  <Badge type="warning" variant="solid">
                    Solid Warning
                  </Badge>
                  <Badge type="error" variant="solid">
                    Solid Error
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Badge Sizes */}
          <section data-testid="badge-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Badge Sizes
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Default</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info">Default Size</Badge>
                  <Badge type="success">Default Size</Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Large</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info" size="lg">
                    Large Size
                  </Badge>
                  <Badge type="success" size="lg">
                    Large Size
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Badges with Icons */}
          <section data-testid="badge-icons-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Badges with Icons
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Left Icon</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info" leftIcon={<InfoIcon />}>
                    Info
                  </Badge>
                  <Badge type="success" leftIcon={<CheckIcon />}>
                    Success
                  </Badge>
                  <Badge type="warning" leftIcon={<WarningIcon />}>
                    Warning
                  </Badge>
                  <Badge type="error" leftIcon={<XIcon />}>
                    Error
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Right Icon</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="info" rightIcon={<InfoIcon />}>
                    Info
                  </Badge>
                  <Badge type="success" rightIcon={<CheckIcon />}>
                    Success
                  </Badge>
                  <Badge type="warning" rightIcon={<WarningIcon />}>
                    Warning
                  </Badge>
                  <Badge type="error" rightIcon={<XIcon />}>
                    Error
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Both Icons</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge
                    type="info"
                    leftIcon={<InfoIcon />}
                    rightIcon={<InfoIcon />}
                  >
                    Info
                  </Badge>
                  <Badge
                    type="success"
                    leftIcon={<CheckIcon />}
                    rightIcon={<CheckIcon />}
                  >
                    Success
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Complex Combinations */}
          <section data-testid="badge-combinations-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Complex Combinations
            </h2>
            <div className="flex flex-wrap gap-3">
              <Badge type="success" variant="solid" size="lg" leftIcon={<CheckIcon />}>
                Large Solid Success
              </Badge>
              <Badge type="error" variant="solid" size="lg" leftIcon={<XIcon />}>
                Large Solid Error
              </Badge>
              <Badge
                type="warning"
                variant="solid"
                leftIcon={<WarningIcon />}
                rightIcon={<WarningIcon />}
              >
                Warning with Both Icons
              </Badge>
            </div>
          </section>

          {/* Real-World Use Cases */}
          <section data-testid="badge-use-cases-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Use Cases
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Status Badges</h3>
                <div className="flex flex-wrap gap-3">
                  <Badge type="success" leftIcon={<CheckIcon />}>
                    Active
                  </Badge>
                  <Badge type="warning" leftIcon={<WarningIcon />}>
                    Pending
                  </Badge>
                  <Badge type="error" leftIcon={<XIcon />}>
                    Inactive
                  </Badge>
                  <Badge type="info" leftIcon={<InfoIcon />}>
                    Draft
                  </Badge>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Count Badges</h3>
                <div className="flex flex-wrap gap-3 items-center">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Messages</span>
                    <Badge type="error" variant="solid">
                      <span data-testid="count-messages">5</span>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Notifications</span>
                    <Badge type="warning" variant="solid">
                      <span data-testid="count-notifications">12</span>
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">Updates</span>
                    <Badge type="info" variant="solid">
                      <span data-testid="count-updates">3</span>
                    </Badge>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Category Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge type="info">Technology</Badge>
                  <Badge type="success">Environment</Badge>
                  <Badge type="warning">Finance</Badge>
                  <Badge type="error">Security</Badge>
                  <Badge type="info" size="lg">
                    Featured
                  </Badge>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="badge-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="flex flex-wrap gap-3">
              <Badge type="info" aria-label="Information badge">
                Info
              </Badge>
              <Badge type="success" aria-label="Success status">
                Success
              </Badge>
              <Badge type="warning" aria-label="Warning notification">
                Warning
              </Badge>
              <Badge type="error" aria-label="Error state">
                Error
              </Badge>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
