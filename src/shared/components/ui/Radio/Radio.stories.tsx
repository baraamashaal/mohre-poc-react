import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'UI/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Radio button component based on AEGOV Design System. Used for single-select options within a group.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Radio button label text',
      control: 'text',
    },
    size: {
      description: 'Radio button size variant',
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
      description: 'Helper text to display below radio',
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
    checked: {
      description: 'Controlled checked state',
      control: 'boolean',
    },
    defaultChecked: {
      description: 'Default checked state (uncontrolled)',
      control: 'boolean',
    },
    name: {
      description: 'Group name for radio buttons',
      control: 'text',
    },
    value: {
      description: 'Value of the radio button',
      control: 'text',
    },
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Option 1',
    name: 'default',
    value: '1',
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Radio without label',
    name: 'no-label',
    value: '1',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Subscribe to emails',
    helperText: 'You will receive updates weekly',
    name: 'helper',
    value: '1',
  },
};

export const Required: Story = {
  args: {
    label: 'I agree to the terms',
    required: true,
    name: 'required',
    value: '1',
  },
};

export const Small: Story = {
  args: {
    label: 'Small radio',
    size: 'sm',
    name: 'small',
    value: '1',
  },
};

export const Base: Story = {
  args: {
    label: 'Base radio (default)',
    size: 'base',
    name: 'base',
    value: '1',
  },
};

export const Large: Story = {
  args: {
    label: 'Large radio',
    size: 'lg',
    name: 'large',
    value: '1',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary variant',
    variant: 'primary',
    name: 'primary',
    value: '1',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary variant',
    variant: 'secondary',
    name: 'secondary',
    value: '1',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked radio',
    defaultChecked: true,
    name: 'checked',
    value: '1',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled radio',
    disabled: true,
    name: 'disabled',
    value: '1',
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled checked radio',
    disabled: true,
    defaultChecked: true,
    name: 'disabled-checked',
    value: '1',
  },
};

export const WithError: Story = {
  args: {
    label: 'Select an option',
    error: true,
    errorMessage: 'You must select an option to continue.',
    name: 'error',
    value: '1',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Small" size="sm" name="sizes" value="1" />
      <Radio label="Base (Default)" size="base" name="sizes" value="2" />
      <Radio label="Large" size="lg" name="sizes" value="3" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Primary" variant="primary" name="variants" value="1" />
      <Radio label="Secondary" variant="secondary" name="variants" value="2" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <Radio label="Normal" name="state-1" value="1" />
      <Radio label="Checked" defaultChecked name="state-2" value="1" />
      <Radio label="Disabled" disabled name="state-3" value="1" />
      <Radio label="Disabled Checked" disabled defaultChecked name="state-4" value="1" />
      <Radio label="Error" error errorMessage="This field is required" name="state-5" value="1" />
      <Radio label="With Helper" helperText="This is helper text" name="state-6" value="1" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div className="space-y-3">
      <p className="font-semibold text-aeblack-800 mb-2">Select your payment method:</p>
      <Radio label="Credit Card" name="payment" value="credit" defaultChecked />
      <Radio label="Debit Card" name="payment" value="debit" />
      <Radio label="PayPal" name="payment" value="paypal" />
      <Radio label="Bank Transfer" name="payment" value="bank" />
    </div>
  ),
};

export const ShippingOptions: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">Select shipping method:</p>
      <div className="space-y-3">
        <Radio
          label="Standard Delivery (3-5 days)"
          helperText="Free"
          name="shipping"
          value="standard"
          defaultChecked
        />
        <Radio
          label="Express Delivery (1-2 days)"
          helperText="AED 25"
          name="shipping"
          value="express"
        />
        <Radio
          label="Same Day Delivery"
          helperText="AED 50"
          name="shipping"
          value="same-day"
        />
      </div>
    </div>
  ),
};

export const AccountType: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">Choose account type:</p>
      <div className="space-y-3">
        <Radio
          label="Personal"
          helperText="For individual use"
          name="account"
          value="personal"
          defaultChecked
        />
        <Radio
          label="Business"
          helperText="For companies and organizations"
          name="account"
          value="business"
        />
      </div>
    </div>
  ),
};

export const PlanSelection: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">Select your plan:</p>
      <div className="space-y-4">
        <Radio
          label="Free"
          helperText="Basic features for personal use"
          name="plan"
          value="free"
          defaultChecked
        />
        <Radio
          label="Pro"
          helperText="Advanced features and priority support - AED 99/month"
          name="plan"
          value="pro"
        />
        <Radio
          label="Enterprise"
          helperText="Custom solutions for large teams - Contact us"
          name="plan"
          value="enterprise"
        />
      </div>
    </div>
  ),
};

export const Survey: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">How satisfied are you with our service?</p>
      <div className="space-y-3">
        <Radio label="Very Satisfied" name="satisfaction" value="5" />
        <Radio label="Satisfied" name="satisfaction" value="4" defaultChecked />
        <Radio label="Neutral" name="satisfaction" value="3" />
        <Radio label="Dissatisfied" name="satisfaction" value="2" />
        <Radio label="Very Dissatisfied" name="satisfaction" value="1" />
      </div>
    </div>
  ),
};

export const ContactPreference: Story = {
  render: () => (
    <div className="max-w-md">
      <p className="font-semibold text-aeblack-800 mb-4">
        Preferred contact method: <span className="text-aered-600">*</span>
      </p>
      <div className="space-y-3">
        <Radio label="Email" name="contact" value="email" required defaultChecked />
        <Radio label="Phone" name="contact" value="phone" required />
        <Radio label="SMS" name="contact" value="sms" required />
      </div>
    </div>
  ),
};
