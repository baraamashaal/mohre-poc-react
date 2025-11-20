import { useState } from 'react';
import { Alert } from '@components/ui';

// Icon components defined outside component to avoid re-creation on each render
const InfoIcon = () => (
    <svg
      className="w-5 h-5"
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

const SuccessIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );

const WarningIcon = () => (
    <svg
      className="w-5 h-5"
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

const ErrorIcon = () => (
    <svg
      className="w-5 h-5"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  );

/**
 * Alert Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const AlertShowcase = () => {
  const [showDismissible, setShowDismissible] = useState(true);
  const [showInteractive, setShowInteractive] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Alert Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Alert component
          </p>
        </header>

        <main className="space-y-12">
          {/* Alert Types */}
          <section data-testid="alert-types-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Alert Types
            </h2>
            <div className="space-y-4">
              <Alert type="info">
                <strong>Info:</strong> This is an informational message.
              </Alert>

              <Alert type="success">
                <strong>Success:</strong> Operation completed successfully!
              </Alert>

              <Alert type="warning">
                <strong>Warning:</strong> Please review before proceeding.
              </Alert>

              <Alert type="error">
                <strong>Error:</strong> An error occurred while processing your request.
              </Alert>
            </div>
          </section>

          {/* Alert Variants */}
          <section data-testid="alert-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants (Solid vs Soft)
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Solid</h3>
                <div className="space-y-4">
                  <Alert type="info" variant="solid">
                    Solid info alert
                  </Alert>
                  <Alert type="success" variant="solid">
                    Solid success alert
                  </Alert>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Soft</h3>
                <div className="space-y-4">
                  <Alert type="info" variant="soft">
                    Soft info alert
                  </Alert>
                  <Alert type="success" variant="soft">
                    Soft success alert
                  </Alert>
                </div>
              </div>
            </div>
          </section>

          {/* With Icons */}
          <section data-testid="alert-icons-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Alerts with Icons
            </h2>
            <div className="space-y-4">
              <Alert type="info" icon={<InfoIcon />}>
                Info alert with custom icon
              </Alert>

              <Alert type="success" icon={<SuccessIcon />}>
                Success alert with custom icon
              </Alert>

              <Alert type="warning" icon={<WarningIcon />}>
                Warning alert with custom icon
              </Alert>

              <Alert type="error" icon={<ErrorIcon />}>
                Error alert with custom icon
              </Alert>
            </div>
          </section>

          {/* Dismissible Alerts */}
          <section data-testid="alert-dismissible-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dismissible Alerts
            </h2>
            <div className="space-y-4">
              {showDismissible && (
                <Alert
                  type="info"
                  dismissible
                  onDismiss={() => setShowDismissible(false)}
                  data-testid="dismissible-alert"
                >
                  This alert can be dismissed. Click the × button to close it.
                </Alert>
              )}

              {!showDismissible && (
                <button
                  onClick={() => setShowDismissible(true)}
                  className="aegov-btn btn-outline"
                  data-testid="show-alert-button"
                >
                  Show Dismissible Alert
                </button>
              )}

              <Alert
                type="success"
                dismissible
                icon={<SuccessIcon />}
                data-testid="dismissible-with-icon"
              >
                <strong>Success!</strong> This dismissible alert has an icon.
              </Alert>
            </div>
          </section>

          {/* Interactive Demo */}
          <section data-testid="alert-interactive-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Interactive Demo
            </h2>
            <div className="space-y-4">
              {showInteractive ? (
                <Alert
                  type="warning"
                  variant="soft"
                  dismissible
                  onDismiss={() => setShowInteractive(false)}
                  icon={<WarningIcon />}
                  data-testid="interactive-alert"
                >
                  <strong>Interactive Alert</strong>
                  <p className="mt-1">
                    This alert demonstrates interactive behavior. You can dismiss it and
                    show it again.
                  </p>
                </Alert>
              ) : (
                <button
                  onClick={() => setShowInteractive(true)}
                  className="aegov-btn"
                  data-testid="show-interactive-button"
                >
                  Show Interactive Alert
                </button>
              )}
            </div>
          </section>

          {/* Complex Content */}
          <section data-testid="alert-complex-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Complex Content
            </h2>
            <div className="space-y-4">
              <Alert
                type="info"
                dismissible
                icon={<InfoIcon />}
                data-testid="complex-alert"
              >
                <div>
                  <strong className="font-bold">System Update Available</strong>
                  <p className="mt-1">
                    A new version of the application is available. Please refresh your
                    browser to get the latest features and improvements.
                  </p>
                  <div className="mt-3 flex gap-3">
                    <button className="aegov-btn btn-xs">Update Now</button>
                    <button className="aegov-btn btn-xs btn-outline">
                      Remind Me Later
                    </button>
                  </div>
                </div>
              </Alert>
            </div>
          </section>

          {/* Accessibility Tests */}
          <section data-testid="alert-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4">
              <Alert type="info" role="status" aria-live="polite">
                Alert with role="status" and aria-live="polite"
              </Alert>

              <Alert type="error" role="alert" aria-live="assertive">
                Error alert with role="alert" and aria-live="assertive"
              </Alert>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
