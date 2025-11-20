import { useState } from 'react';
import { Toggle } from '@components/ui';

/**
 * Toggle Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const ToggleShowcase = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Toggle Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Toggle component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Toggles */}
          <section data-testid="toggle-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Toggles
            </h2>
            <div className="space-y-4 max-w-md">
              <div className="flex items-center gap-4">
                <Toggle label="Basic toggle" data-testid="basic-toggle" />
                <span className="text-sm text-gray-600">Unchecked</span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  label="Checked toggle"
                  defaultChecked
                  data-testid="checked-toggle"
                />
                <span className="text-sm text-gray-600">Checked</span>
              </div>
              <div className="flex items-center gap-4">
                <Toggle
                  aria-label="Toggle without label"
                  data-testid="no-label-toggle"
                />
                <span className="text-sm text-gray-600">Without visible label</span>
              </div>
            </div>
          </section>

          {/* Variants */}
          <section data-testid="toggle-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Variants</h2>
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <span>Primary</span>
                <Toggle
                  label="Primary variant"
                  variant="primary"
                  defaultChecked
                  data-testid="primary-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Secondary</span>
                <Toggle
                  label="Secondary variant"
                  variant="secondary"
                  defaultChecked
                  data-testid="secondary-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Success</span>
                <Toggle
                  label="Success variant"
                  variant="success"
                  defaultChecked
                  data-testid="success-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Mode (Dark/Light)</span>
                <Toggle
                  label="Mode variant"
                  variant="mode"
                  defaultChecked
                  data-testid="mode-toggle"
                />
              </div>
            </div>
          </section>

          {/* States */}
          <section data-testid="toggle-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">States</h2>
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <span>Normal</span>
                <Toggle label="Normal toggle" data-testid="normal-toggle" />
              </div>
              <div className="flex items-center justify-between">
                <span>Disabled (Off)</span>
                <Toggle
                  label="Disabled toggle"
                  disabled
                  data-testid="disabled-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Disabled (On)</span>
                <Toggle
                  label="Disabled checked toggle"
                  disabled
                  defaultChecked
                  data-testid="disabled-checked-toggle"
                />
              </div>
            </div>
          </section>

          {/* Interactive Examples */}
          <section data-testid="toggle-interactive-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Interactive Examples
            </h2>
            <div className="bg-white rounded-lg shadow p-6 max-w-md space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Notifications</h3>
                  <p className="text-sm text-gray-500">
                    Status: {notifications ? 'Enabled' : 'Disabled'}
                  </p>
                </div>
                <Toggle
                  label="Enable notifications"
                  checked={notifications}
                  onCheckedChange={setNotifications}
                  variant="success"
                  data-testid="notifications-toggle"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Dark Mode</h3>
                  <p className="text-sm text-gray-500">
                    Status: {darkMode ? 'On' : 'Off'}
                  </p>
                </div>
                <Toggle
                  label="Dark mode"
                  checked={darkMode}
                  onCheckedChange={setDarkMode}
                  variant="mode"
                  data-testid="dark-mode-toggle"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Auto Save</h3>
                  <p className="text-sm text-gray-500">
                    Status: {autoSave ? 'Enabled' : 'Disabled'}
                  </p>
                </div>
                <Toggle
                  label="Auto save"
                  checked={autoSave}
                  onCheckedChange={setAutoSave}
                  data-testid="auto-save-toggle"
                />
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">Email Alerts</h3>
                  <p className="text-sm text-gray-500">
                    Status: {emailAlerts ? 'On' : 'Off'}
                  </p>
                </div>
                <Toggle
                  label="Email alerts"
                  checked={emailAlerts}
                  onCheckedChange={setEmailAlerts}
                  data-testid="email-alerts-toggle"
                />
              </div>
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="toggle-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8 max-w-md">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Privacy Settings
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Profile Visibility</span>
                    <Toggle
                      label="Profile visibility"
                      defaultChecked
                      data-testid="privacy-profile-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Activity Status</span>
                    <Toggle
                      label="Activity status"
                      defaultChecked
                      data-testid="privacy-activity-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Location Sharing</span>
                    <Toggle
                      label="Location sharing"
                      data-testid="privacy-location-toggle"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  Notification Preferences
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Push Notifications</span>
                    <Toggle
                      label="Push notifications"
                      variant="success"
                      defaultChecked
                      data-testid="notif-push-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Email Notifications</span>
                    <Toggle
                      label="Email notifications"
                      variant="success"
                      defaultChecked
                      data-testid="notif-email-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMS Alerts</span>
                    <Toggle
                      label="SMS alerts"
                      variant="success"
                      data-testid="notif-sms-toggle"
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">
                  System Preferences
                </h3>
                <div className="bg-white rounded-lg shadow p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Enable Analytics</span>
                    <Toggle
                      label="Enable analytics"
                      defaultChecked
                      data-testid="system-analytics-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Beta Features</span>
                    <Toggle
                      label="Beta features"
                      data-testid="system-beta-toggle"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Reduced Motion</span>
                    <Toggle
                      label="Reduced motion"
                      data-testid="system-motion-toggle"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="toggle-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4 max-w-md">
              <div className="flex items-center justify-between">
                <span>With aria-label</span>
                <Toggle
                  aria-label="Accessible toggle"
                  data-testid="a11y-aria-label-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>With visible label</span>
                <Toggle
                  label="Visible label toggle"
                  data-testid="a11y-visible-label-toggle"
                />
              </div>
              <div className="flex items-center justify-between">
                <span>Keyboard navigable</span>
                <Toggle
                  label="Keyboard toggle"
                  data-testid="a11y-keyboard-toggle"
                />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
