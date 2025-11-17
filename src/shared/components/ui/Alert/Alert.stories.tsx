import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from './Alert';

/**
 * Alert component based on UAE Government Design System.
 *
 * Displays important messages, notifications, and feedback to users.
 * Supports multiple types (info, error, success, warning) with solid and soft variants.
 */
const meta = {
  title: 'UI Components/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Accessible alert component for displaying notifications, warnings, and feedback messages. Features smooth animations, dismissible functionality, and multiple visual variants.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['info', 'error', 'success', 'warning'],
      description: 'Alert type determines the color and semantic meaning',
      table: {
        type: { summary: 'string' },
      },
    },
    variant: {
      control: 'select',
      options: ['solid', 'soft'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Shows dismiss button when true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    icon: {
      control: false,
      description: 'Custom icon element to display',
    },
    role: {
      control: 'select',
      options: ['alert', 'status'],
      description: 'ARIA role for accessibility',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'alert' },
      },
    },
    'aria-live': {
      control: 'select',
      options: ['polite', 'assertive', 'off'],
      description: 'ARIA live region behavior',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'polite (assertive for errors)' },
      },
    },
    onDismiss: {
      action: 'dismissed',
      description: 'Callback fired when alert is dismissed',
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Icon components for demonstrations
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

// Default story
export const Default: Story = {
  args: {
    type: 'info',
    children: 'This is an informational alert message.',
  },
};

// Types
export const Info: Story = {
  args: {
    type: 'info',
    children: 'This is an informational alert providing helpful context.',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    children: 'Operation completed successfully! Your changes have been saved.',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    children: 'Please review this important information before proceeding.',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    children: 'An error occurred while processing your request. Please try again.',
  },
};

// Variants
export const SolidVariant: Story = {
  args: {
    type: 'info',
    variant: 'solid',
    children: 'Solid variant with full color background.',
  },
};

export const SoftVariant: Story = {
  args: {
    type: 'info',
    variant: 'soft',
    children: 'Soft variant with subtle background color.',
  },
};

// Dismissible
export const Dismissible: Story = {
  args: {
    type: 'info',
    dismissible: true,
    children: 'This alert can be dismissed by clicking the × button.',
  },
};

export const DismissibleWithCallback: Story = {
  args: {
    type: 'success',
    dismissible: true,
    onDismiss: () => console.log('Alert dismissed!'),
    children: 'Check the console when you dismiss this alert.',
  },
};

// With Icons
export const WithInfoIcon: Story = {
  args: {
    type: 'info',
    icon: <InfoIcon />,
    children: 'Alert with custom info icon.',
  },
};

export const WithSuccessIcon: Story = {
  args: {
    type: 'success',
    icon: <SuccessIcon />,
    children: 'Alert with custom success icon.',
  },
};

export const WithWarningIcon: Story = {
  args: {
    type: 'warning',
    icon: <WarningIcon />,
    children: 'Alert with custom warning icon.',
  },
};

export const WithErrorIcon: Story = {
  args: {
    type: 'error',
    icon: <ErrorIcon />,
    children: 'Alert with custom error icon.',
  },
};

// Complex Content
export const ComplexContent: Story = {
  args: {
    type: 'info',
    dismissible: true,
    icon: <InfoIcon />,
    children: (
      <div>
        <strong className="font-bold">Update Available</strong>
        <p className="mt-1">
          A new version of the application is available. Please refresh your browser
          to get the latest features and improvements.
        </p>
      </div>
    ),
  },
};

export const WithLinks: Story = {
  args: {
    type: 'warning',
    dismissible: true,
    icon: <WarningIcon />,
    children: (
      <div>
        <strong className="font-bold">Action Required</strong>
        <p className="mt-1">
          Your session will expire in 5 minutes.{' '}
          <a href="#" className="underline font-medium">
            Extend session
          </a>
        </p>
      </div>
    ),
  },
};

// All Types Showcase
export const AllTypes: Story = {
  render: () => (
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
        <strong>Error:</strong> An error occurred.
      </Alert>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All alert types displayed together for comparison.',
      },
    },
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Solid Variant</h3>
        <Alert type="info" variant="solid">
          Solid info alert
        </Alert>
        <Alert type="success" variant="solid">
          Solid success alert
        </Alert>
        <Alert type="warning" variant="solid">
          Solid warning alert
        </Alert>
        <Alert type="error" variant="solid">
          Solid error alert
        </Alert>
      </div>

      <div className="space-y-4 mt-8">
        <h3 className="text-lg font-semibold">Soft Variant</h3>
        <Alert type="info" variant="soft">
          Soft info alert
        </Alert>
        <Alert type="success" variant="soft">
          Soft success alert
        </Alert>
        <Alert type="warning" variant="soft">
          Soft warning alert
        </Alert>
        <Alert type="error" variant="soft">
          Soft error alert
        </Alert>
      </div>
    </div>
  ),
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        story: 'All alert types in both solid and soft variants.',
      },
    },
  },
};

// Interactive Example - Extract to component to avoid React Hooks lint error
const InteractiveExample = () => {
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div className="space-y-4">
      {!showAlert && (
        <button
          onClick={() => setShowAlert(true)}
          className="aegov-btn btn-outline"
        >
          Show Alert
        </button>
      )}

      {showAlert && (
        <Alert
          type="success"
          dismissible
          onDismiss={() => setShowAlert(false)}
          icon={<SuccessIcon />}
        >
          <strong>Success!</strong> You can dismiss this alert and show it again.
        </Alert>
      )}
    </div>
  );
};

export const Interactive: Story = {
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story:
          'Interactive example demonstrating dismissible behavior with state management.',
      },
    },
  },
};

// Full Featured Example
export const FullFeatured: Story = {
  args: {
    type: 'warning',
    variant: 'soft',
    dismissible: true,
    icon: <WarningIcon />,
    children: (
      <div>
        <strong className="font-bold">System Maintenance</strong>
        <p className="mt-1">
          Scheduled maintenance will occur on Sunday, January 15th from 2:00 AM to 6:00
          AM UTC. Some services may be temporarily unavailable during this time.
        </p>
        <div className="mt-3 flex gap-3">
          <button className="aegov-btn btn-xs btn-outline">Learn More</button>
          <button className="aegov-btn btn-xs btn-link">Dismiss</button>
        </div>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Fully-featured alert with icon, complex content, action buttons, and dismissible functionality.',
      },
    },
  },
};
