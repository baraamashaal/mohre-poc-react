import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

// Icon components defined outside to avoid re-creation on each render
const SearchIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);

const meta = {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Input component based on AEGOV Design System. Used for text input fields with various types and states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Input label text',
      control: 'text',
    },
    size: {
      description: 'Input size variant',
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
      description: 'Helper text to display below input',
      control: 'text',
    },
    placeholder: {
      description: 'Input placeholder text',
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
    type: {
      description: 'Input type',
      control: 'select',
      options: ['text', 'email', 'password', 'url', 'search', 'tel', 'date', 'number'],
    },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic Examples
export const Default: Story = {
  args: {
    placeholder: 'Enter text',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'First Name',
    placeholder: 'Your first name',
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Email address',
    type: 'email',
    placeholder: 'Enter your email address',
    helperText: 'We require your email address to send you important updates.',
  },
};

export const Required: Story = {
  args: {
    label: 'Full Name',
    placeholder: 'John Doe',
    required: true,
  },
};

// Size Variations
export const Small: Story = {
  args: {
    label: 'Description',
    size: 'sm',
    placeholder: 'Enter text',
  },
};

export const Base: Story = {
  args: {
    label: 'Description',
    size: 'base',
    placeholder: 'Enter text',
  },
};

export const Large: Story = {
  args: {
    label: 'Description',
    size: 'lg',
    placeholder: 'Enter text',
  },
};

// Variants
export const Primary: Story = {
  args: {
    label: 'First Name',
    variant: 'primary',
    placeholder: 'Your First Name',
  },
};

export const Secondary: Story = {
  args: {
    label: 'First Name',
    variant: 'secondary',
    placeholder: 'Your First Name',
  },
};

// Error State
export const WithError: Story = {
  args: {
    label: 'Email',
    error: true,
    errorMessage: 'We encountered a problem with your input.',
    placeholder: 'email@example.com',
  },
};

// Disabled State
export const Disabled: Story = {
  args: {
    label: 'First Name',
    placeholder: 'Disabled',
    disabled: true,
  },
};

// With Icons
export const WithPrefixIcon: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for something',
    prefix: <SearchIcon />,
  },
};

export const WithSuffixIcon: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    suffix: <EyeIcon />,
  },
};

export const WithPrefixText: Story = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'www.example.com',
    prefix: 'http://',
  },
};

export const WithBothIcons: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search',
    prefix: <SearchIcon />,
    suffix: <SearchIcon />,
  },
};

// Input Types
export const EmailInput: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'email@example.com',
  },
};

export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter password',
    suffix: <EyeIcon />,
  },
};

export const DateInput: Story = {
  args: {
    label: 'Select a date',
    type: 'date',
  },
};

export const SearchInput: Story = {
  args: {
    label: 'Search',
    type: 'search',
    placeholder: 'Search for something',
    prefix: <SearchIcon />,
  },
};

export const UrlInput: Story = {
  args: {
    label: 'Website',
    type: 'url',
    placeholder: 'www.example.com',
    prefix: 'https://',
  },
};

export const NumberInput: Story = {
  args: {
    label: 'Age',
    type: 'number',
    placeholder: '25',
  },
};

// Showcase of all sizes
export const AllSizes: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Base (Default)" size="base" placeholder="Base input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
};

// Showcase of all variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Primary" variant="primary" placeholder="Primary variant" />
      <Input label="Secondary" variant="secondary" placeholder="Secondary variant" />
    </div>
  ),
};

// Showcase of all states
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <Input label="Normal" placeholder="Normal state" />
      <Input label="Disabled" placeholder="Disabled state" disabled />
      <Input label="Error" error errorMessage="This field is required" placeholder="Error state" />
      <Input label="With Helper" helperText="This is helper text" placeholder="With helper text" />
    </div>
  ),
};

// Real-world examples
export const LoginForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        required
      />
      <Input
        label="Password"
        type="password"
        placeholder="Enter password"
        required
        suffix={<EyeIcon />}
      />
    </div>
  ),
};

export const ContactForm: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <Input
        label="Full Name"
        placeholder="John Doe"
        required
      />
      <Input
        label="Email"
        type="email"
        placeholder="email@example.com"
        required
        helperText="We'll never share your email with anyone."
      />
      <Input
        label="Phone"
        type="tel"
        placeholder="+971 50 123 4567"
      />
      <Input
        label="Website"
        type="url"
        placeholder="www.example.com"
        prefix="https://"
      />
    </div>
  ),
};

export const SearchBar: Story = {
  render: () => (
    <div className="w-96">
      <Input
        type="search"
        size="lg"
        placeholder="Search for anything..."
        prefix={<SearchIcon />}
      />
    </div>
  ),
};
