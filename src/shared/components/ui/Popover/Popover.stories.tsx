import type { Meta, StoryObj } from '@storybook/react';
import { Popover } from './Popover';
import { Button } from '../Button';

/**
 * Popover displays contextual information or actions near a trigger element.
 * It appears on click and disappears when dismissed, enhancing user experience
 * while keeping interfaces clean.
 *
 * Based on AEGOV Design System 2.3.0 Popover component.
 */
const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A transient UI element displaying contextual information or actions near a trigger element. Click to open, click outside or press Escape to close.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display in the popover body',
    },
    title: {
      control: 'text',
      description: 'Optional title/header text (only for default variant)',
    },
    variant: {
      control: 'select',
      options: ['default', 'flexible'],
      description: 'Variant of the popover',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side to render the popover',
    },
    width: {
      control: 'text',
      description: 'Custom width class (e.g., w-64, w-96)',
    },
    showArrow: {
      control: 'boolean',
      description: 'Whether to show the arrow pointer',
    },
    defaultOpen: {
      control: 'boolean',
      description: 'Default open state (uncontrolled mode)',
    },
  },
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default popover with title and description.
 * Standard version for concise contextual information.
 */
export const Default: Story = {
  args: {
    title: 'Popover title',
    content: 'Engaging and insightful content for an enriching experience.',
    variant: 'default',
    side: 'top',
  },
  render: (args) => (
    <Popover {...args}>
      <Button>Default popover</Button>
    </Popover>
  ),
};

/**
 * Flexible popover without header.
 * Customizable variant for rich content like text, images, and links.
 */
export const Flexible: Story = {
  args: {
    content:
      'Add text, images, links, or any content to enhance the user experience and share extra details.',
    variant: 'flexible',
    side: 'top',
  },
  render: (args) => (
    <Popover {...args}>
      <Button>Flexible Popover</Button>
    </Popover>
  ),
};

/**
 * Popover with rich HTML content.
 * Demonstrates flexible variant with links, formatted text, and structured content.
 */
export const RichContent: Story = {
  args: {
    variant: 'flexible',
    content: (
      <div className="space-y-2">
        <p className="font-semibold mb-1">Quick Actions</p>
        <div className="flex flex-col gap-1">
          <a href="#edit" className="text-primary-600 hover:underline text-sm">
            Edit profile
          </a>
          <a href="#settings" className="text-primary-600 hover:underline text-sm">
            Settings
          </a>
          <a href="#logout" className="text-primary-600 hover:underline text-sm">
            Log out
          </a>
        </div>
      </div>
    ),
  },
  render: (args) => (
    <Popover {...args}>
      <Button>Quick Actions</Button>
    </Popover>
  ),
};

/**
 * All placement variations.
 * Shows popover positioning on all four sides.
 */
export const Placements: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-8 p-8">
      <Popover title="Top popover" content="Positioned on top" side="top">
        <Button>Top</Button>
      </Popover>

      <Popover title="Right popover" content="Positioned on right" side="right">
        <Button>Right</Button>
      </Popover>

      <Popover title="Bottom popover" content="Positioned on bottom" side="bottom">
        <Button>Bottom</Button>
      </Popover>

      <Popover title="Left popover" content="Positioned on left" side="left">
        <Button>Left</Button>
      </Popover>
    </div>
  ),
};

/**
 * Different width sizes.
 * Demonstrates custom width classes for various content needs.
 */
export const Widths: Story = {
  render: () => (
    <div className="flex gap-6">
      <Popover title="Small" content="Small width popover" width="w-48">
        <Button>Small (w-48)</Button>
      </Popover>

      <Popover title="Default" content="Default width popover" width="w-64">
        <Button>Default (w-64)</Button>
      </Popover>

      <Popover title="Large" content="Large width popover with more space" width="w-96">
        <Button>Large (w-96)</Button>
      </Popover>
    </div>
  ),
};

/**
 * Form guidance example.
 * Shows popover used for contextual help in form inputs.
 */
export const FormGuidance: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <div>
        <label htmlFor="username" className="block text-sm font-medium mb-1">
          Username
          <Popover
            variant="flexible"
            content="Username must be 3-20 characters and can only contain letters, numbers, and underscores."
            side="right"
          >
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-primary-600 rounded-full hover:bg-primary-700"
            >
              ?
            </button>
          </Popover>
        </label>
        <input
          id="username"
          type="text"
          className="w-full px-3 py-2 border border-aegreylight-100 rounded"
          placeholder="Enter username"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
          <Popover
            variant="flexible"
            content="We'll send a verification email to this address."
            side="right"
          >
            <button
              type="button"
              className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-primary-600 rounded-full hover:bg-primary-700"
            >
              ?
            </button>
          </Popover>
        </label>
        <input
          id="email"
          type="email"
          className="w-full px-3 py-2 border border-aegreylight-100 rounded"
          placeholder="Enter email"
        />
      </div>
    </div>
  ),
};

/**
 * Without arrow.
 * Demonstrates popover without the arrow pointer.
 */
export const NoArrow: Story = {
  args: {
    title: 'No arrow',
    content: 'This popover has no arrow pointer',
    showArrow: false,
  },
  render: (args) => (
    <Popover {...args}>
      <Button>No Arrow</Button>
    </Popover>
  ),
};

/**
 * Custom styling.
 * Shows how to apply custom classes for header and body.
 */
export const CustomStyling: Story = {
  args: {
    title: 'Custom Styled',
    content: 'This popover has custom header and body styling',
    headerClassName: 'bg-primary-100',
    bodyClassName: 'text-primary-900 font-medium',
  },
  render: (args) => (
    <Popover {...args}>
      <Button>Custom Styling</Button>
    </Popover>
  ),
};

/**
 * Long content.
 * Demonstrates popover with longer text content.
 */
export const LongContent: Story = {
  args: {
    title: 'Extended Information',
    content:
      'This is a popover with much longer content to demonstrate how the component handles multiple lines of text. The popover will automatically adjust its height to fit the content while maintaining the specified width. You can scroll if needed for very long content.',
    width: 'w-80',
  },
  render: (args) => (
    <Popover {...args}>
      <Button>Long Content</Button>
    </Popover>
  ),
};

/**
 * Icon trigger.
 * Shows popover triggered by an icon button.
 */
export const IconTrigger: Story = {
  args: {
    variant: 'flexible',
    content: 'Additional information about this feature',
    side: 'right',
  },
  render: (args) => (
    <Popover {...args}>
      <button
        type="button"
        className="inline-flex items-center justify-center w-8 h-8 text-aeblack-600 hover:bg-aegreylight-50 rounded-full"
        aria-label="More information"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </Popover>
  ),
};

/**
 * Multiple popovers.
 * Demonstrates multiple independent popovers on the same page.
 */
export const MultiplePopovers: Story = {
  render: () => (
    <div className="flex gap-4">
      <Popover title="First" content="First popover content">
        <Button variant="primary">First Popover</Button>
      </Popover>

      <Popover title="Second" content="Second popover content">
        <Button variant="secondary">Second Popover</Button>
      </Popover>

      <Popover title="Third" content="Third popover content">
        <Button variant="tertiary">Third Popover</Button>
      </Popover>
    </div>
  ),
};

/**
 * Controlled popover.
 * Example of controlling popover state externally.
 */
export const Controlled: Story = {
  render: function ControlledExample() {
    const [open, setOpen] = React.useState(false);

    return (
      <div className="space-y-4">
        <div className="flex gap-4">
          <Button onClick={() => setOpen(true)}>Open Popover</Button>
          <Button variant="secondary" onClick={() => setOpen(false)}>
            Close Popover
          </Button>
        </div>

        <Popover
          title="Controlled Popover"
          content="This popover is controlled by external state"
          open={open}
          onOpenChange={setOpen}
        >
          <Button variant="tertiary">Toggle Target</Button>
        </Popover>
      </div>
    );
  },
};

/**
 * Animation speeds.
 * Demonstrates different animation duration options.
 */
export const AnimationSpeeds: Story = {
  render: () => (
    <div className="flex gap-6">
      <Popover
        title="Fast"
        content="Fast animation (100ms)"
        animationDuration="duration-100"
      >
        <Button>Fast (100ms)</Button>
      </Popover>

      <Popover
        title="Default"
        content="Default animation (200ms)"
        animationDuration="duration-200"
      >
        <Button>Default (200ms)</Button>
      </Popover>

      <Popover
        title="Slow"
        content="Slow animation (500ms)"
        animationDuration="duration-500"
      >
        <Button>Slow (500ms)</Button>
      </Popover>
    </div>
  ),
};

/**
 * Accessibility notes.
 * Demonstrates proper ARIA usage and keyboard navigation.
 */
export const Accessibility: Story = {
  args: {
    title: 'Accessible Popover',
    content: 'Tab to focus, Enter/Space to open, Escape to close, click outside to dismiss',
  },
  render: (args) => (
    <div className="space-y-4">
      <p className="text-sm text-aeblack-600">
        This popover demonstrates accessibility features:
      </p>
      <ul className="text-sm text-aeblack-600 list-disc list-inside space-y-1">
        <li>Keyboard accessible (Tab, Enter, Space, Escape)</li>
        <li>Proper ARIA role="tooltip"</li>
        <li>Focus management</li>
        <li>Click-outside dismissal</li>
      </ul>
      <Popover {...args}>
        <Button>Try Keyboard Navigation</Button>
      </Popover>
    </div>
  ),
};
