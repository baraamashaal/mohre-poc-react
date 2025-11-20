import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Textarea component based on AEGOV Design System. Used for multi-line text input fields.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Textarea label text',
      control: 'text',
    },
    size: {
      description: 'Textarea size variant',
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
      description: 'Helper text to display below textarea',
      control: 'text',
    },
    placeholder: {
      description: 'Textarea placeholder text',
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
    rows: {
      description: 'Number of rows',
      control: 'number',
    },
  },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: 'Leave a comment...',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Write your thoughts here...',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Write your thoughts here...',
    helperText: 'Please provide as much detail as possible.',
  },
};

export const Required: Story = {
  args: {
    label: 'Message',
    placeholder: 'Your message',
    required: true,
  },
};

export const Small: Story = {
  args: {
    label: 'Your message',
    size: 'sm',
    placeholder: 'Leave a comment...',
  },
};

export const Base: Story = {
  args: {
    label: 'Your message',
    size: 'base',
    placeholder: 'Leave a comment...',
  },
};

export const Large: Story = {
  args: {
    label: 'Your message',
    size: 'lg',
    placeholder: 'Leave a comment...',
  },
};

export const Primary: Story = {
  args: {
    label: 'Your message',
    variant: 'primary',
    placeholder: 'Leave a comment...',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Your message',
    variant: 'secondary',
    placeholder: 'Leave a comment...',
  },
};

export const WithError: Story = {
  args: {
    label: 'Message',
    error: true,
    errorMessage: 'Message is required.',
    placeholder: 'Leave a comment...',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Your message',
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const CustomRows: Story = {
  args: {
    label: 'Long message',
    rows: 8,
    placeholder: 'Write a longer message...',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <Textarea label="Small" size="sm" placeholder="Small textarea" />
      <Textarea label="Base (Default)" size="base" placeholder="Base textarea" />
      <Textarea label="Large" size="lg" placeholder="Large textarea" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <Textarea label="Primary" variant="primary" placeholder="Primary variant" />
      <Textarea label="Secondary" variant="secondary" placeholder="Secondary variant" />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-96">
      <Textarea label="Normal" placeholder="Normal state" />
      <Textarea label="Disabled" placeholder="Disabled state" disabled />
      <Textarea label="Error" error errorMessage="This field is required" placeholder="Error state" />
      <Textarea label="With Helper" helperText="This is helper text" placeholder="With helper text" />
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea
        label="Message"
        placeholder="Tell us about your inquiry..."
        required
        helperText="Please be as detailed as possible."
        rows={6}
      />
    </div>
  ),
};

export const FeedbackForm: Story = {
  render: () => (
    <div className="space-y-4 w-96">
      <Textarea
        label="Your Feedback"
        size="lg"
        placeholder="What do you think about our service?"
        rows={8}
      />
    </div>
  ),
};
