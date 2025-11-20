import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from './Dropdown';
import type { DropdownItem } from './Dropdown.types';
import { Button } from '../Button';

const meta = {
  title: 'UI/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dropdown component based on AEGOV Design System. Uses Popper.js for intelligent positioning with click or hover triggers.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    id: {
      description: 'Unique identifier for the dropdown',
      control: 'text',
    },
    trigger: {
      description: 'Trigger element (button, link, etc.)',
      control: 'object',
    },
    items: {
      description: 'Dropdown menu items',
      control: 'object',
    },
    triggerType: {
      description: 'Trigger interaction type',
      control: 'select',
      options: ['click', 'hover', 'none'],
    },
    placement: {
      description: 'Dropdown placement relative to trigger',
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
    },
    offsetSkidding: {
      description: 'Horizontal offset in pixels',
      control: 'number',
    },
    offsetDistance: {
      description: 'Vertical offset in pixels',
      control: 'number',
    },
  },
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicItems: DropdownItem[] = [
  { id: '1', label: 'Dashboard', onClick: () => console.log('Dashboard') },
  { id: '2', label: 'Settings', onClick: () => console.log('Settings') },
  { id: '3', label: 'Profile', onClick: () => console.log('Profile') },
  { id: '4', label: 'Logout', onClick: () => console.log('Logout') },
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
    label: 'Dashboard',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    onClick: () => console.log('Dashboard'),
  },
  {
    id: '2',
    label: 'Settings',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    onClick: () => console.log('Settings'),
  },
  {
    id: '3',
    label: 'Logout',
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
    ),
    onClick: () => console.log('Logout'),
  },
];

const itemsWithDisabled: DropdownItem[] = [
  { id: '1', label: 'Edit', onClick: () => console.log('Edit') },
  { id: '2', label: 'Duplicate', onClick: () => console.log('Duplicate') },
  { id: '3', label: 'Archive', onClick: () => console.log('Archive'), disabled: true },
  { id: '4', label: 'Delete', onClick: () => console.log('Delete') },
];

export const Default: Story = {
  args: {
    id: 'default-dropdown',
    trigger: <Button variant="primary">Dropdown</Button>,
    items: basicItems,
    triggerType: 'click',
  },
};

export const WithHoverTrigger: Story = {
  args: {
    id: 'hover-dropdown',
    trigger: <Button variant="secondary">Hover Me</Button>,
    items: basicItems,
    triggerType: 'hover',
  },
};

export const WithLinks: Story = {
  args: {
    id: 'links-dropdown',
    trigger: <Button variant="primary">Navigation</Button>,
    items: itemsWithLinks,
    triggerType: 'click',
  },
};

export const WithIcons: Story = {
  args: {
    id: 'icons-dropdown',
    trigger: <Button variant="primary">Menu</Button>,
    items: itemsWithIcons,
    triggerType: 'click',
  },
};

export const WithDisabledItems: Story = {
  args: {
    id: 'disabled-dropdown',
    trigger: <Button variant="primary">Actions</Button>,
    items: itemsWithDisabled,
    triggerType: 'click',
  },
};

export const PlacementTop: Story = {
  args: {
    id: 'top-dropdown',
    trigger: <Button variant="primary">Open Top</Button>,
    items: basicItems,
    triggerType: 'click',
    placement: 'top',
  },
};

export const PlacementRight: Story = {
  args: {
    id: 'right-dropdown',
    trigger: <Button variant="primary">Open Right</Button>,
    items: basicItems,
    triggerType: 'click',
    placement: 'right',
  },
};

export const PlacementLeft: Story = {
  args: {
    id: 'left-dropdown',
    trigger: <Button variant="primary">Open Left</Button>,
    items: basicItems,
    triggerType: 'click',
    placement: 'left',
  },
};

export const CustomOffsets: Story = {
  args: {
    id: 'custom-offset-dropdown',
    trigger: <Button variant="primary">Custom Offset</Button>,
    items: basicItems,
    triggerType: 'click',
    offsetSkidding: 20,
    offsetDistance: 16,
  },
};

export const WithDelay: Story = {
  args: {
    id: 'delay-dropdown',
    trigger: <Button variant="secondary">Hover with Delay</Button>,
    items: basicItems,
    triggerType: 'hover',
    delay: 300,
  },
};

export const CustomTrigger: Story = {
  args: {
    id: 'custom-trigger-dropdown',
    trigger: (
      <button className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600">
        Custom Styled Trigger
      </button>
    ),
    items: itemsWithIcons,
    triggerType: 'click',
  },
};

export const LargeMenu: Story = {
  args: {
    id: 'large-dropdown',
    trigger: <Button variant="primary">Large Menu</Button>,
    items: [
      { id: '1', label: 'Item 1', onClick: () => {} },
      { id: '2', label: 'Item 2', onClick: () => {} },
      { id: '3', label: 'Item 3', onClick: () => {} },
      { id: '4', label: 'Item 4', onClick: () => {} },
      { id: '5', label: 'Item 5', onClick: () => {} },
      { id: '6', label: 'Item 6', onClick: () => {} },
      { id: '7', label: 'Item 7', onClick: () => {} },
      { id: '8', label: 'Item 8', onClick: () => {} },
    ],
    triggerType: 'click',
  },
};
