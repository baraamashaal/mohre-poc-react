import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

/**
 * Avatar Component Stories
 *
 * Showcases all variants and use cases for the Avatar component
 * following AEGOV Design System specifications.
 */
const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alternative text for the image (required for accessibility)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['square', 'rounded'],
      description: 'Shape variant',
    },
    status: {
      control: 'select',
      options: ['none', 'online', 'offline'],
      description: 'Status indicator',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

/**
 * Default Avatar
 */
export const Default: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'John Doe',
  },
};

/**
 * Avatar with Initials Fallback
 */
export const WithInitials: Story = {
  args: {
    alt: 'John Doe',
    fallback: <span className="font-semibold">JD</span>,
  },
};

/**
 * Size Variants
 */
export const SizeXS: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=2',
    alt: 'User',
    size: 'xs',
  },
};

export const SizeSM: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=3',
    alt: 'User',
    size: 'sm',
  },
};

export const SizeBase: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=4',
    alt: 'User',
    size: 'base',
  },
};

export const SizeLG: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=5',
    alt: 'User',
    size: 'lg',
  },
};

export const SizeXL: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=6',
    alt: 'User',
    size: 'xl',
  },
};

export const Size2XL: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=7',
    alt: 'User',
    size: '2xl',
  },
};

export const Size3XL: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=8',
    alt: 'User',
    size: '3xl',
  },
};

/**
 * Shape Variants
 */
export const Square: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=9',
    alt: 'User',
    variant: 'square',
    size: 'lg',
  },
};

export const Rounded: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=10',
    alt: 'User',
    variant: 'rounded',
    size: 'lg',
  },
};

/**
 * Status Indicators
 */
export const OnlineStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=11',
    alt: 'User',
    status: 'online',
    size: 'lg',
  },
};

export const OfflineStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=12',
    alt: 'User',
    status: 'offline',
    size: 'lg',
  },
};

/**
 * Combinations
 */
export const RoundedWithStatus: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=13',
    alt: 'Sarah Ahmed',
    variant: 'rounded',
    status: 'online',
    size: 'xl',
  },
};

export const InitialsWithStatus: Story = {
  args: {
    alt: 'Ahmed Hassan',
    fallback: <span className="font-semibold text-lg">AH</span>,
    variant: 'rounded',
    status: 'online',
    size: 'xl',
  },
};

/**
 * User Profile Example
 */
export const UserProfile: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=14',
    alt: 'Profile picture of Fatima Mohammed',
    variant: 'rounded',
    status: 'online',
    size: '2xl',
  },
  decorators: [
    (Story) => (
      <div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow">
        <Story />
        <div>
          <h3 className="font-semibold text-lg">Fatima Mohammed</h3>
          <p className="text-gray-600">Senior Developer</p>
          <p className="text-sm text-green-600 font-medium">Online</p>
        </div>
      </div>
    ),
  ],
};

/**
 * Team List Example
 */
export const TeamList: Story = {
  decorators: [
    () => (
      <div className="space-y-4 bg-white p-6 rounded-lg shadow">
        <h3 className="font-semibold text-lg mb-4">Team Members</h3>
        {[
          { name: 'Ahmed Ali', img: '15', status: 'online' as const },
          { name: 'Sarah Hassan', img: '16', status: 'online' as const },
          { name: 'Mohammed Saeed', img: '17', status: 'offline' as const },
          { name: 'Laila Ahmed', img: '18', status: 'online' as const },
        ].map((member, index) => (
          <div key={index} className="flex items-center gap-3">
            <Avatar
              src={`https://i.pravatar.cc/150?img=${member.img}`}
              alt={member.name}
              status={member.status}
              variant="rounded"
              size="base"
            />
            <div>
              <p className="font-medium">{member.name}</p>
              <p className="text-sm text-gray-600 capitalize">{member.status}</p>
            </div>
          </div>
        ))}
      </div>
    ),
  ],
};
