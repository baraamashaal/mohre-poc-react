import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

// Icon components defined outside to avoid re-creation on each render
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

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Badge component based on AEGOV Design System. Used to display status, labels, or counts.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      description: 'Badge content',
      control: 'text',
    },
    type: {
      description: 'Badge color type',
      control: 'select',
      options: ['info', 'error', 'success', 'warning'],
    },
    variant: {
      description: 'Badge style variant',
      control: 'select',
      options: ['soft', 'solid'],
    },
    size: {
      description: 'Badge size',
      control: 'select',
      options: ['default', 'lg'],
    },
    leftIcon: {
      description: 'Icon to display on the left',
      control: false,
    },
    rightIcon: {
      description: 'Icon to display on the right',
      control: false,
    },
    className: {
      description: 'Additional CSS classes',
      control: 'text',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    children: 'Info',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Success',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Warning',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'Error',
  },
};

// Variant Examples
export const SolidInfo: Story = {
  args: {
    type: 'info',
    variant: 'solid',
    children: 'Solid Info',
  },
};

export const SolidSuccess: Story = {
  args: {
    type: 'success',
    variant: 'solid',
    children: 'Solid Success',
  },
};

export const SolidWarning: Story = {
  args: {
    type: 'warning',
    variant: 'solid',
    children: 'Solid Warning',
  },
};

export const SolidError: Story = {
  args: {
    type: 'error',
    variant: 'solid',
    children: 'Solid Error',
  },
};

// Size Examples
export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large Badge',
  },
};

export const LargeSolid: Story = {
  args: {
    type: 'success',
    variant: 'solid',
    size: 'lg',
    children: 'Large Solid',
  },
};

// Icon Examples
export const WithLeftIcon: Story = {
  args: {
    type: 'success',
    leftIcon: <CheckIcon />,
    children: 'Approved',
  },
};

export const WithRightIcon: Story = {
  args: {
    type: 'error',
    rightIcon: <XIcon />,
    children: 'Rejected',
  },
};

export const WithBothIcons: Story = {
  args: {
    type: 'info',
    leftIcon: <InfoIcon />,
    rightIcon: <InfoIcon />,
    children: 'Info',
  },
};

export const SolidWithIcon: Story = {
  args: {
    type: 'warning',
    variant: 'solid',
    leftIcon: <WarningIcon />,
    children: 'Warning',
  },
};

export const LargeWithIcon: Story = {
  args: {
    type: 'success',
    variant: 'solid',
    size: 'lg',
    leftIcon: <CheckIcon />,
    children: 'Verified',
  },
};

// Showcase of all types
export const AllTypes: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3">
      <Badge type="info">Info</Badge>
      <Badge type="success">Success</Badge>
      <Badge type="warning">Warning</Badge>
      <Badge type="error">Error</Badge>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Soft (Default)</h3>
        <div className="flex flex-wrap gap-3">
          <Badge type="info">Info</Badge>
          <Badge type="success">Success</Badge>
          <Badge type="warning">Warning</Badge>
          <Badge type="error">Error</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Solid</h3>
        <div className="flex flex-wrap gap-3">
          <Badge type="info" variant="solid">
            Info
          </Badge>
          <Badge type="success" variant="solid">
            Success
          </Badge>
          <Badge type="warning" variant="solid">
            Warning
          </Badge>
          <Badge type="error" variant="solid">
            Error
          </Badge>
        </div>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Default Size</h3>
        <div className="flex flex-wrap gap-3">
          <Badge type="info">Default</Badge>
          <Badge type="success">Default</Badge>
        </div>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-medium">Large</h3>
        <div className="flex flex-wrap gap-3">
          <Badge type="info" size="lg">
            Large
          </Badge>
          <Badge type="success" size="lg">
            Large
          </Badge>
        </div>
      </div>
    </div>
  ),
};

// Real-world use cases
export const StatusBadges: Story = {
  render: () => (
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
  ),
};

export const CountBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-3 items-center">
      <div className="flex items-center gap-2">
        <span className="text-sm">Messages</span>
        <Badge type="error" variant="solid">
          5
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Notifications</span>
        <Badge type="warning" variant="solid">
          12
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">Updates</span>
        <Badge type="info" variant="solid">
          3
        </Badge>
      </div>
    </div>
  ),
};

export const CategoryBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge type="info">Technology</Badge>
      <Badge type="success">Environment</Badge>
      <Badge type="warning">Finance</Badge>
      <Badge type="error">Security</Badge>
      <Badge type="info" size="lg">
        Featured
      </Badge>
    </div>
  ),
};
