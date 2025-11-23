import { Tabs } from '@/shared/components/ui';
import type { TabItem } from '@/shared/components/ui';

/**
 * TabsShowcase Component
 *
 * Comprehensive showcase and testing page for the Tabs component.
 * Demonstrates all variants, states, and use cases from the AEGOV Design System.
 */
export const TabsShowcase = () => {
  // Basic tabs for default section
  const basicTabs: TabItem[] = [
    {
      id: 'profile',
      label: 'Profile',
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">
            Profile content goes here. This is the user profile section.
          </p>
        </div>
      ),
    },
    {
      id: 'dashboard',
      label: 'Dashboard',
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">
            Dashboard content goes here. View your statistics and activity.
          </p>
        </div>
      ),
    },
    {
      id: 'settings',
      label: 'Settings',
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">
            Settings content goes here. Configure your preferences.
          </p>
        </div>
      ),
    },
  ];

  // Icons for tabs
  const ProfileIcon = () => (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeWidth="16" />
      <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    </svg>
  );

  const DashboardIcon = () => (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeWidth="16" />
      <line x1="32" y1="112" x2="224" y2="112" stroke="currentColor" strokeWidth="16" />
      <line x1="128" y1="112" x2="128" y2="208" stroke="currentColor" strokeWidth="16" />
    </svg>
  );

  const SettingsIcon = () => (
    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
      <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeWidth="16" />
      <path d="M130.05,206.11c-1.34,0-2.69,0-4,0L115.31,225a104.61,104.61,0,0,1-34.06-19.68l-.21-25.12a79.75,79.75,0,0,1-19.69-11.36L41.26,179.65a103.78,103.78,0,0,1-19.68-34.05l18.94-10.7A79.45,79.45,0,0,1,40.52,128c0-2.27.11-4.45.27-6.66L21.58,110.4a103.78,103.78,0,0,1,19.68-34l20.09,10.78a79.75,79.75,0,0,1,19.69-11.36l.21-25.12a104.61,104.61,0,0,1,34.06-19.68l10.74,18.89c1.33,0,2.67-.05,4-.05s2.69,0,4,.05l10.74-18.89a104.61,104.61,0,0,1,34.06,19.68l.21,25.12a79.59,79.59,0,0,1,19.69,11.36l20.09-10.78a103.78,103.78,0,0,1,19.68,34l-18.94,10.89a79.45,79.45,0,0,1,0,13.24l18.94,10.89a103.78,103.78,0,0,1-19.68,34l-20.09-10.78a79.59,79.59,0,0,1-19.69,11.36l-.21,25.12a104.61,104.61,0,0,1-34.06,19.68L130.05,206.11Z" fill="none" stroke="currentColor" strokeWidth="16" />
    </svg>
  );

  // Tabs with icons
  const tabsWithIcons: TabItem[] = [
    {
      id: 'profile-icon',
      label: 'Profile',
      icon: <ProfileIcon />,
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">User Profile</h3>
          <p className="text-sm text-aeblack-600">Profile content with icon.</p>
        </div>
      ),
    },
    {
      id: 'dashboard-icon',
      label: 'Dashboard',
      icon: <DashboardIcon />,
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">Dashboard Overview</h3>
          <p className="text-sm text-aeblack-600">Dashboard content with icon.</p>
        </div>
      ),
    },
    {
      id: 'settings-icon',
      label: 'Settings',
      icon: <SettingsIcon />,
      content: (
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">System Settings</h3>
          <p className="text-sm text-aeblack-600">Settings content with icon.</p>
        </div>
      ),
    },
  ];

  // Tabs with disabled state
  const tabsWithDisabled: TabItem[] = [
    {
      id: 'available-1',
      label: 'Available',
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">This tab is available.</p>
        </div>
      ),
    },
    {
      id: 'disabled-1',
      label: 'Disabled',
      disabled: true,
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">This tab is disabled.</p>
        </div>
      ),
    },
    {
      id: 'available-2',
      label: 'Also Available',
      content: (
        <div className="p-4">
          <p className="text-sm text-aeblack-500">This tab is also available.</p>
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto py-8 space-y-12">
      <header>
        <h1 className="text-4xl font-bold mb-2">Tabs Component Showcase</h1>
        <p className="text-lg text-aeblack-600">
          Comprehensive demonstration of the AEGOV Tabs component with all variants and states.
        </p>
      </header>

      {/* Default Tabs */}
      <section data-testid="default-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Default Tabs</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Standard tabs with default styling and active state.
          </p>
        </div>
        <Tabs
          items={basicTabs}
          defaultActiveTab="dashboard"
          data-testid="tabs-default"
        />
      </section>

      {/* Compact Tabs */}
      <section data-testid="compact-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Compact Tabs</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Tabs with reduced size using the <code>tab-sm</code> class.
          </p>
        </div>
        <Tabs
          items={basicTabs}
          size="compact"
          defaultActiveTab="profile"
          data-testid="tabs-compact"
        />
      </section>

      {/* Pills Tabs */}
      <section data-testid="pills-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Pills Tabs</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Tabs with pill-shaped design using the <code>tab-pills</code> class.
          </p>
        </div>
        <Tabs
          items={basicTabs}
          variant="pills"
          defaultActiveTab="settings"
          data-testid="tabs-pills"
        />
      </section>

      {/* Compact Pills Tabs */}
      <section data-testid="compact-pills-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Compact Pills Tabs</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Combining both <code>tab-sm</code> and <code>tab-pills</code> classes.
          </p>
        </div>
        <Tabs
          items={basicTabs}
          size="compact"
          variant="pills"
          defaultActiveTab="dashboard"
          data-testid="tabs-compact-pills"
        />
      </section>

      {/* Tabs with Icons */}
      <section data-testid="icons-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tabs with Icons</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            SVG icons integrated before tab labels.
          </p>
        </div>
        <Tabs
          items={tabsWithIcons}
          defaultActiveTab="dashboard-icon"
          data-testid="tabs-icons"
        />
      </section>

      {/* Tabs with Icons + Pills */}
      <section data-testid="icons-pills-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tabs with Icons (Pills Style)</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Icons combined with pills variant.
          </p>
        </div>
        <Tabs
          items={tabsWithIcons}
          variant="pills"
          defaultActiveTab="profile-icon"
          data-testid="tabs-icons-pills"
        />
      </section>

      {/* Disabled Tabs */}
      <section data-testid="disabled-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Tabs with Disabled State</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            Demonstration of disabled tabs that cannot be activated.
          </p>
        </div>
        <Tabs
          items={tabsWithDisabled}
          defaultActiveTab="available-1"
          data-testid="tabs-disabled"
        />
      </section>

      {/* Keyboard Navigation Info */}
      <section data-testid="keyboard-section" className="space-y-4">
        <div>
          <h2 className="text-2xl font-semibold mb-2">Keyboard Navigation</h2>
          <p className="text-sm text-aeblack-600 mb-4">
            All tabs support full keyboard navigation:
          </p>
          <ul className="list-disc list-inside space-y-2 text-sm text-aeblack-600">
            <li><kbd className="px-2 py-1 bg-aeblack-100 rounded">←</kbd> / <kbd className="px-2 py-1 bg-aeblack-100 rounded">→</kbd> - Navigate between tabs</li>
            <li><kbd className="px-2 py-1 bg-aeblack-100 rounded">↑</kbd> / <kbd className="px-2 py-1 bg-aeblack-100 rounded">↓</kbd> - Navigate between tabs</li>
            <li><kbd className="px-2 py-1 bg-aeblack-100 rounded">Home</kbd> - Jump to first tab</li>
            <li><kbd className="px-2 py-1 bg-aeblack-100 rounded">End</kbd> - Jump to last tab</li>
            <li><kbd className="px-2 py-1 bg-aeblack-100 rounded">Enter</kbd> / <kbd className="px-2 py-1 bg-aeblack-100 rounded">Space</kbd> - Activate focused tab</li>
          </ul>
        </div>
        <Tabs
          items={basicTabs}
          data-testid="tabs-keyboard"
        />
      </section>
    </div>
  );
};
