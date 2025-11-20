import type { Meta, StoryObj } from '@storybook/react';
import { Hyperlink } from './Hyperlink';

const meta = {
  title: 'UI/Hyperlink',
  component: Hyperlink,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'cta', 'soft', 'secondary', 'secondary-soft'],
    },
  },
} satisfies Meta<typeof Hyperlink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: '#',
    children: 'This is a default hyperlink',
  },
};

export const CTA: Story = {
  args: {
    href: '#',
    variant: 'cta',
    icon: true,
    children: 'Learn more',
  },
};

export const CTAWithCustomIcon: Story = {
  args: {
    href: '#',
    variant: 'cta',
    icon: <span>→</span>,
    children: 'Find out more',
  },
};

export const Soft: Story = {
  args: {
    href: '#',
    variant: 'soft',
    children: 'Soft variant link',
  },
};

export const Secondary: Story = {
  args: {
    href: '#',
    variant: 'secondary',
    children: 'Secondary button link',
  },
};

export const SecondarySoft: Story = {
  args: {
    href: '#',
    variant: 'secondary-soft',
    children: 'Secondary soft link',
  },
};

export const External: Story = {
  args: {
    href: 'https://example.com',
    external: true,
    children: 'External link (opens in new tab)',
  },
};

export const ExternalCTA: Story = {
  args: {
    href: 'https://example.com',
    variant: 'cta',
    icon: true,
    external: true,
    children: 'External CTA link',
  },
};

export const WithTitle: Story = {
  args: {
    href: '#',
    title: 'This is a descriptive title for accessibility',
    children: 'Link with title attribute',
  },
};

export const WithAriaLabel: Story = {
  args: {
    href: '#',
    'aria-label': 'Navigate to homepage',
    children: 'Home',
  },
};

export const InlineUsage: Story = {
  render: () => (
    <p className="max-w-md text-gray-700">
      This is a paragraph with an{' '}
      <Hyperlink href="#" variant="default">
        inline link
      </Hyperlink>{' '}
      embedded within the text. The link is underlined to distinguish it from regular text.
    </p>
  ),
};

export const CTAList: Story = {
  render: () => (
    <div className="space-y-4">
      <Hyperlink href="#" variant="cta" icon>
        View all services
      </Hyperlink>
      <Hyperlink href="#" variant="cta" icon>
        Contact support
      </Hyperlink>
      <Hyperlink href="#" variant="cta" icon>
        Read documentation
      </Hyperlink>
    </div>
  ),
};
