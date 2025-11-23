import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button';

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The Tooltip component provides contextual information when users hover over or click on an element. It appears as a small pop-up box near the target element.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'The content to display in the tooltip',
    },
    side: {
      control: 'select',
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Placement of the tooltip relative to the trigger element',
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click'],
      description: 'How the tooltip is triggered',
    },
    delay: {
      control: 'number',
      description: 'Delay before showing the tooltip (in milliseconds)',
    },
    animationDuration: {
      control: 'text',
      description: 'Animation duration class (e.g., duration-500)',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default tooltip with hover trigger and top placement
 */
export const Default: Story = {
  args: {
    content: 'This is a helpful tooltip',
    side: 'top',
    trigger: 'hover',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover me</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip positioned to the right of the trigger
 */
export const PlacementRight: Story = {
  args: {
    content: 'Tooltip on the right',
    side: 'right',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Right tooltip</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip positioned at the bottom of the trigger
 */
export const PlacementBottom: Story = {
  args: {
    content: 'Tooltip at the bottom',
    side: 'bottom',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Bottom tooltip</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip positioned to the left of the trigger
 */
export const PlacementLeft: Story = {
  args: {
    content: 'Tooltip on the left',
    side: 'left',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Left tooltip</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip activated by clicking instead of hovering
 */
export const ClickTrigger: Story = {
  args: {
    content: 'Click the button to show this tooltip',
    trigger: 'click',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Click me</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with custom delay before showing
 */
export const CustomDelay: Story = {
  args: {
    content: 'This tooltip has a 1 second delay',
    delay: 1000,
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Hover (1s delay)</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with faster animation
 */
export const FastAnimation: Story = {
  args: {
    content: 'Fast animation tooltip',
    animationDuration: 'duration-100',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Fast animation</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with slower animation
 */
export const SlowAnimation: Story = {
  args: {
    content: 'Slow animation tooltip',
    animationDuration: 'duration-1000',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Slow animation</Button>
    </Tooltip>
  ),
};

/**
 * Tooltip with long text content
 */
export const LongContent: Story = {
  args: {
    content:
      'This is a much longer tooltip that contains more detailed information about the element',
    side: 'top',
  },
  render: (args) => (
    <Tooltip {...args}>
      <Button>Detailed info</Button>
    </Tooltip>
  ),
};

/**
 * Multiple tooltips demonstrating different placements
 */
export const MultiplePlacements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Tooltip content="Top tooltip" side="top">
        <Button>Top</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" side="right">
        <Button>Right</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" side="bottom">
        <Button>Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" side="left">
        <Button>Left</Button>
      </Tooltip>
    </div>
  ),
};

/**
 * Tooltip on different trigger elements
 */
export const DifferentTriggers: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column', alignItems: 'flex-start' }}>
      <Tooltip content="Button tooltip">
        <Button>Button with tooltip</Button>
      </Tooltip>
      <Tooltip content="Link tooltip">
        <a href="#" style={{ textDecoration: 'underline', color: '#0066cc' }}>
          Link with tooltip
        </a>
      </Tooltip>
      <Tooltip content="Span tooltip">
        <span style={{ border: '1px solid #ccc', padding: '0.5rem', cursor: 'help' }}>
          Hover over me
        </span>
      </Tooltip>
    </div>
  ),
};

/**
 * Accessibility example showing keyboard interaction
 */
export const KeyboardAccessible: Story = {
  args: {
    content: 'Tab to focus, tooltip will appear',
  },
  render: (args) => (
    <div>
      <p style={{ marginBottom: '1rem' }}>
        <strong>Try tabbing to the button:</strong> The tooltip should appear on focus.
      </p>
      <Tooltip {...args}>
        <Button>Keyboard accessible</Button>
      </Tooltip>
    </div>
  ),
};
