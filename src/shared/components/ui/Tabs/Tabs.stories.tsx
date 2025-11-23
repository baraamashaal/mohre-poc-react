import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs.types';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'The Tabs component organizes content in separate sections for easy navigation. Supports keyboard navigation, multiple variants, and icons.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of tab items to display',
      control: { type: 'object' },
    },
    size: {
      description: 'Size of the tabs',
      control: { type: 'select' },
      options: ['default', 'compact'],
    },
    variant: {
      description: 'Visual style of the tabs',
      control: { type: 'select' },
      options: ['default', 'pills'],
    },
    activeTab: {
      description: 'ID of the currently active tab (controlled mode)',
      control: { type: 'text' },
    },
    defaultActiveTab: {
      description: 'ID of the default active tab (uncontrolled mode)',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Callback when active tab changes',
      action: 'tab changed',
    },
    className: {
      description: 'Additional CSS classes',
      control: { type: 'text' },
    },
    ariaLabel: {
      description: 'ARIA label for the tab list',
      control: { type: 'text' },
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icon components for examples
const ProfileIcon = () => (
  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
    <circle cx="128" cy="96" r="64" opacity="0.2" />
    <circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" strokeMiterlimit="10" strokeWidth="16" />
    <path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
);

const DashboardIcon = () => (
  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
    <rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2" />
    <rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="32" y1="112" x2="224" y2="112" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <line x1="128" y1="112" x2="128" y2="208" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
);

const SettingsIcon = () => (
  <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
    <circle cx="128" cy="128" r="40" opacity="0.2" />
    <circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
    <path d="M130.05,206.11c-1.34,0-2.69,0-4,0L115.31,225a104.61,104.61,0,0,1-34.06-19.68l-.21-25.12a79.75,79.75,0,0,1-19.69-11.36L41.26,179.65a103.78,103.78,0,0,1-19.68-34.05l18.94-10.7A79.45,79.45,0,0,1,40.52,128c0-2.27.11-4.45.27-6.66L21.58,110.4a103.78,103.78,0,0,1,19.68-34l20.09,10.78a79.75,79.75,0,0,1,19.69-11.36l.21-25.12a104.61,104.61,0,0,1,34.06-19.68l10.74,18.89c1.33,0,2.67-.05,4-.05s2.69,0,4,.05l10.74-18.89a104.61,104.61,0,0,1,34.06,19.68l.21,25.12a79.59,79.59,0,0,1,19.69,11.36l20.09-10.78a103.78,103.78,0,0,1,19.68,34l-18.94,10.89a79.45,79.45,0,0,1,0,13.24l18.94,10.89a103.78,103.78,0,0,1-19.68,34l-20.09-10.78a79.59,79.59,0,0,1-19.69,11.36l-.21,25.12a104.61,104.61,0,0,1-34.06,19.68L130.05,206.11Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
  </svg>
);

const basicItems: TabItem[] = [
  {
    id: 'profile',
    label: 'Profile',
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Profile content goes here.</p>
      </div>
    ),
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Dashboard content goes here.</p>
      </div>
    ),
  },
  {
    id: 'settings',
    label: 'Settings',
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Settings content goes here.</p>
      </div>
    ),
  },
];

const itemsWithIcons: TabItem[] = [
  {
    id: 'profile-icon',
    label: 'Profile',
    icon: <ProfileIcon />,
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Profile content with icon.</p>
      </div>
    ),
  },
  {
    id: 'dashboard-icon',
    label: 'Dashboard',
    icon: <DashboardIcon />,
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Dashboard content with icon.</p>
      </div>
    ),
  },
  {
    id: 'settings-icon',
    label: 'Settings',
    icon: <SettingsIcon />,
    content: (
      <div className="p-4">
        <p className="text-sm text-aeblack-500">Settings content with icon.</p>
      </div>
    ),
  },
];

/**
 * Default tabs with standard styling.
 */
export const Default: Story = {
  args: {
    items: basicItems,
    defaultActiveTab: 'dashboard',
  },
};

/**
 * Compact tabs with reduced font size, optimized for smaller screens.
 */
export const Compact: Story = {
  args: {
    items: basicItems,
    size: 'compact',
    defaultActiveTab: 'dashboard',
  },
};

/**
 * Pills tabs with rounded pill-shaped design.
 */
export const Pills: Story = {
  args: {
    items: basicItems,
    variant: 'pills',
    defaultActiveTab: 'dashboard',
  },
};

/**
 * Compact pills variant combining both size and style modifiers.
 */
export const CompactPills: Story = {
  args: {
    items: basicItems,
    size: 'compact',
    variant: 'pills',
    defaultActiveTab: 'dashboard',
  },
};

/**
 * Tabs with SVG icons before labels.
 */
export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    defaultActiveTab: 'dashboard-icon',
  },
};

/**
 * Compact tabs with icons.
 */
export const CompactWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    size: 'compact',
    defaultActiveTab: 'dashboard-icon',
  },
};

/**
 * Pills tabs with icons.
 */
export const PillsWithIcons: Story = {
  args: {
    items: itemsWithIcons,
    variant: 'pills',
    defaultActiveTab: 'dashboard-icon',
  },
};

/**
 * Tabs with one disabled tab. Disabled tabs cannot be selected and are skipped during keyboard navigation.
 */
export const WithDisabledTab: Story = {
  args: {
    items: [
      {
        id: 'profile',
        label: 'Profile',
        content: <div className="p-4"><p className="text-sm text-aeblack-500">Profile content.</p></div>,
      },
      {
        id: 'dashboard',
        label: 'Dashboard',
        content: <div className="p-4"><p className="text-sm text-aeblack-500">Dashboard content.</p></div>,
        disabled: true,
      },
      {
        id: 'settings',
        label: 'Settings',
        content: <div className="p-4"><p className="text-sm text-aeblack-500">Settings content.</p></div>,
      },
    ],
    defaultActiveTab: 'profile',
  },
};

/**
 * Tabs with rich content including images, lists, and formatted text.
 */
export const RichContent: Story = {
  args: {
    items: [
      {
        id: 'overview',
        label: 'Overview',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Welcome to Dashboard</h3>
            <p className="text-sm text-aeblack-600 mb-4">
              Here you can manage your account, view statistics, and configure settings.
            </p>
            <ul className="list-disc list-inside text-sm text-aeblack-600 space-y-2">
              <li>View your activity</li>
              <li>Manage notifications</li>
              <li>Update preferences</li>
            </ul>
          </div>
        ),
      },
      {
        id: 'stats',
        label: 'Statistics',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Statistics</h3>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-aeblack-50 p-3 rounded">
                <div className="text-2xl font-bold">156</div>
                <div className="text-xs text-aeblack-500">Total Users</div>
              </div>
              <div className="bg-aeblack-50 p-3 rounded">
                <div className="text-2xl font-bold">89</div>
                <div className="text-xs text-aeblack-500">Active</div>
              </div>
              <div className="bg-aeblack-50 p-3 rounded">
                <div className="text-2xl font-bold">24</div>
                <div className="text-xs text-aeblack-500">New Today</div>
              </div>
            </div>
          </div>
        ),
      },
      {
        id: 'help',
        label: 'Help',
        content: (
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-3">Need Help?</h3>
            <p className="text-sm text-aeblack-600 mb-3">
              Contact our support team or check out the documentation.
            </p>
            <button className="aegov-btn btn-sm">Contact Support</button>
          </div>
        ),
      },
    ],
    variant: 'pills',
  },
};

/**
 * Controlled tabs where the active tab is managed by parent component state.
 * Use the controls to change the active tab programmatically.
 */
export const Controlled: Story = {
  args: {
    items: basicItems,
    activeTab: 'profile',
  },
};

/**
 * Demonstration of keyboard navigation:
 * - Arrow Left/Right: Navigate between tabs
 * - Arrow Up/Down: Navigate between tabs
 * - Home: Go to first tab
 * - End: Go to last tab
 * - Enter/Space: Activate focused tab
 */
export const KeyboardNavigation: Story = {
  args: {
    items: basicItems,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Click on a tab to focus it, then use keyboard arrows to navigate. Press Enter or Space to activate a tab.',
      },
    },
  },
};
