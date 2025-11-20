import { Dropdown, Button } from '@components/ui';
import type { DropdownItem } from '@components/ui';

/**
 * Dropdown Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const DropdownShowcase = () => {
  const basicItems: DropdownItem[] = [
    { id: '1', label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
    { id: '2', label: 'Settings', onClick: () => alert('Settings clicked') },
    { id: '3', label: 'Profile', onClick: () => alert('Profile clicked') },
    { id: '4', label: 'Logout', onClick: () => alert('Logout clicked') },
  ];

  const itemsWithLinks: DropdownItem[] = [
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'About', href: '/about' },
    { id: '3', label: 'Services', href: '/services' },
    { id: '4', label: 'Contact', href: '/contact' },
  ];

  const itemsWithIcons: DropdownItem[] = [
    {
      id: '1',
      label: 'Edit',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          />
        </svg>
      ),
      onClick: () => alert('Edit'),
    },
    {
      id: '2',
      label: 'Duplicate',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
          />
        </svg>
      ),
      onClick: () => alert('Duplicate'),
    },
    {
      id: '3',
      label: 'Delete',
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          />
        </svg>
      ),
      onClick: () => alert('Delete'),
    },
  ];

  const itemsWithDisabled: DropdownItem[] = [
    { id: '1', label: 'Edit', onClick: () => alert('Edit') },
    { id: '2', label: 'Duplicate', onClick: () => alert('Duplicate') },
    { id: '3', label: 'Archive', onClick: () => alert('Archive'), disabled: true },
    { id: '4', label: 'Delete', onClick: () => alert('Delete') },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Dropdown Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Dropdown component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Click Dropdown */}
          <section data-testid="dropdown-click-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Click Dropdown
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Dropdown
                id="click-dropdown"
                trigger={<Button variant="primary">Click Me</Button>}
                items={basicItems}
                triggerType="click"
                data-testid="click-dropdown"
              />
            </div>
          </section>

          {/* Hover Dropdown */}
          <section data-testid="dropdown-hover-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Hover Dropdown
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Dropdown
                id="hover-dropdown"
                trigger={<Button variant="secondary">Hover Me</Button>}
                items={basicItems}
                triggerType="hover"
                data-testid="hover-dropdown"
              />
            </div>
          </section>

          {/* Dropdown with Links */}
          <section data-testid="dropdown-links-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dropdown with Links
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Dropdown
                id="links-dropdown"
                trigger={<Button variant="primary">Navigation</Button>}
                items={itemsWithLinks}
                triggerType="click"
                data-testid="links-dropdown"
              />
            </div>
          </section>

          {/* Dropdown with Icons */}
          <section data-testid="dropdown-icons-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dropdown with Icons
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Dropdown
                id="icons-dropdown"
                trigger={<Button variant="primary">Actions</Button>}
                items={itemsWithIcons}
                triggerType="click"
                data-testid="icons-dropdown"
              />
            </div>
          </section>

          {/* Dropdown with Disabled Items */}
          <section data-testid="dropdown-disabled-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dropdown with Disabled Items
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <Dropdown
                id="disabled-dropdown"
                trigger={<Button variant="primary">Options</Button>}
                items={itemsWithDisabled}
                triggerType="click"
                data-testid="disabled-dropdown"
              />
            </div>
          </section>

          {/* Placement Variations */}
          <section data-testid="dropdown-placement-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Placement Variations
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="flex items-center justify-center gap-4 min-h-[300px]">
                <Dropdown
                  id="top-dropdown"
                  trigger={<Button variant="outline">Top</Button>}
                  items={basicItems}
                  triggerType="click"
                  placement="top"
                  data-testid="top-dropdown"
                />
                <Dropdown
                  id="right-dropdown"
                  trigger={<Button variant="outline">Right</Button>}
                  items={basicItems}
                  triggerType="click"
                  placement="right"
                  data-testid="right-dropdown"
                />
                <Dropdown
                  id="bottom-dropdown"
                  trigger={<Button variant="outline">Bottom</Button>}
                  items={basicItems}
                  triggerType="click"
                  placement="bottom"
                  data-testid="bottom-dropdown"
                />
                <Dropdown
                  id="left-dropdown"
                  trigger={<Button variant="outline">Left</Button>}
                  items={basicItems}
                  triggerType="click"
                  placement="left"
                  data-testid="left-dropdown"
                />
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="dropdown-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ ARIA attributes (aria-expanded, aria-haspopup)</li>
                <li>✓ Role="menu" for dropdown lists</li>
                <li>✓ Keyboard support (Enter/Space to trigger)</li>
                <li>✓ Click outside to close</li>
                <li>✓ Focus management</li>
                <li>✓ Disabled state support</li>
              </ul>
              <Dropdown
                id="a11y-dropdown"
                trigger={<Button variant="primary">Accessible Dropdown</Button>}
                items={basicItems}
                triggerType="click"
                ariaLabel="Example menu"
                data-testid="a11y-dropdown"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
