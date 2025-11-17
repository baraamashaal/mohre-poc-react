import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

/**
 * Button component based on UAE Government Design System.
 *
 * Fully accessible, animated button with multiple variants, sizes, and states.
 */
const meta = {
  title: 'UI Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Accessible, animated button component based on AEGOV Design System with Framer Motion animations.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft', 'link'],
      description: 'Visual style variant',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg'],
      description: 'Button size',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color scheme',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state with spinner',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Full width button',
    },
    iconOnly: {
      control: 'boolean',
      description: 'Icon-only button',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Button',
  },
};

// Variants
export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Button',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Button',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Soft Button',
  },
};

export const Link: Story = {
  args: {
    variant: 'link',
    children: 'Link Button',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

// Colors
export const Secondary: Story = {
  args: {
    color: 'secondary',
    children: 'Secondary',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

// With Icons
const Icon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    viewBox="0 0 256 256"
    fill="currentColor"
  >
    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z" />
  </svg>
);

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <Icon />,
    children: 'Left Icon',
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <Icon />,
    children: 'Right Icon',
  },
};

export const IconOnly: Story = {
  args: {
    iconOnly: true,
    'aria-label': 'Icon Only Button',
    children: <Icon />,
  },
};

// Full Width
export const FullWidth: Story = {
  args: {
    fullWidth: true,
    children: 'Full Width',
  },
  parameters: {
    layout: 'padded',
  },
};

// All Variants Showcase
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: '300px' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="link">Link</Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'All button variants displayed together.',
      },
    },
  },
};

// All Sizes Showcase
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="base">Base</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        story: 'All button sizes displayed together.',
      },
    },
  },
};
