import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Checkbox component based on AEGOV Design System. Used for multi-select options and toggle states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Checkbox label text',
      control: 'text',
    },
    size: {
      description: 'Checkbox size variant',
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
    variant: {
      description: 'Color variant',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    error: {
      description: 'Error state',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below checkbox',
      control: 'text',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    required: {
      description: 'Required field indicator',
      control: 'boolean',
    },
    indeterminate: {
      description: 'Indeterminate state (partial selection)',
      control: 'boolean',
    },
    checked: {
      description: 'Controlled checked state',
      control: 'boolean',
    },
    defaultChecked: {
      description: 'Default checked state (uncontrolled)',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Accept terms and conditions',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Checkbox without label',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Send me newsletters',
    helperText: 'You can unsubscribe at any time.',
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms',
    required: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Small checkbox',
    size: 'sm',
  },
};

export const Base: Story = {
  args: {
    label: 'Base checkbox (default)',
    size: 'base',
  },
};

export const Large: Story = {
  args: {
    label: 'Large checkbox',
    size: 'lg',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary variant',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary variant',
    variant: 'secondary',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked checkbox',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled checkbox',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked checkbox',
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Accept terms',
    error: true,
    errorMessage: 'You must accept the terms to continue.',
  },
};

export const Indeterminate: Story = {
  args: {
    label: 'Indeterminate checkbox',
    indeterminate: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Small" size="sm" />
      <Checkbox label="Base (Default)" size="base" />
      <Checkbox label="Large" size="lg" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Primary" variant="primary" />
      <Checkbox label="Secondary" variant="secondary" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Checkbox label="Normal" />
      <Checkbox label="Checked" defaultChecked />
      <Checkbox label="Disabled" disabled />
      <Checkbox label="Disabled Checked" disabled defaultChecked />
      <Checkbox label="Indeterminate" indeterminate />
      <Checkbox label="Error" error errorMessage="This field is required" />
      <Checkbox label="With Helper" helperText="This is helper text" />
    </div>
  ),
};

export const CheckboxGroup: Story = {
  render: () => (
    <div className="space-y-3">
      <p className="font-semibold text-aeblack-800 mb-2">Select your interests:</p>
      <Checkbox label="Technology" name="interests" value="technology" />
      <Checkbox label="Sports" name="interests" value="sports" />
      <Checkbox label="Music" name="interests" value="music" />
      <Checkbox label="Travel" name="interests" value="travel" />
    </div>
  ),
};

export const TermsAndConditions: Story = {
  render: () => (
    <div className="max-w-md">
      <Checkbox
        label="I have read and accept the terms and conditions"
        required
        helperText="Required to proceed with registration"
      />
    </div>
  ),
};

export const NewsletterSubscription: Story = {
  render: () => (
    <div className="max-w-md space-y-4">
      <Checkbox
        label="Subscribe to weekly newsletter"
        defaultChecked
        helperText="Get updates about new features and releases"
      />
      <Checkbox
        label="Receive promotional emails"
        helperText="Exclusive offers and discounts"
      />
    </div>
  ),
};

export const FormPreferences: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">Notification Preferences</p>
      <div className="space-y-3">
        <Checkbox label="Email notifications" defaultChecked />
        <Checkbox label="SMS notifications" />
        <Checkbox label="Push notifications" />
        <Checkbox label="Weekly digest" defaultChecked />
      </div>
    </div>
  ),
};

export const SelectAll: Story = {
  render: () => (
    <div className="max-w-md">
      <Checkbox
        label="Select all"
        indeterminate
        helperText="2 of 4 items selected"
      />
      <div className="ml-6 mt-3 space-y-2">
        <Checkbox label="Item 1" defaultChecked />
        <Checkbox label="Item 2" defaultChecked />
        <Checkbox label="Item 3" />
        <Checkbox label="Item 4" />
      </div>
    </div>
  ),
};
