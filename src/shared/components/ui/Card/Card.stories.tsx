import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <h3 className="text-lg font-semibold mb-2">Card Title</h3>
        <p className="text-gray-600">
          This is a basic card with default styling. Cards are flexible containers for grouping related content.
        </p>
      </>
    ),
  },
};

export const Bordered: Story = {
  args: {
    bordered: true,
    children: (
      <>
        <h3 className="text-lg font-semibold mb-2">Bordered Card</h3>
        <p className="text-gray-600">
          This card has a border applied using the bordered prop.
        </p>
      </>
    ),
  },
};

export const WithGlow: Story = {
  args: {
    glow: true,
    bordered: true,
    children: (
      <>
        <h3 className="text-lg font-semibold mb-2">Card with Glow</h3>
        <p className="text-gray-600">
          Hover over this card to see the glow effect.
        </p>
      </>
    ),
  },
};

export const SmallSize: Story = {
  args: {
    size: 'sm',
    bordered: true,
    children: (
      <>
        <h4 className="text-base font-semibold mb-2">Small Card</h4>
        <p className="text-sm text-gray-600">Compact card for tight spaces.</p>
      </>
    ),
  },
};

export const BaseSize: Story = {
  args: {
    size: 'base',
    bordered: true,
    children: (
      <>
        <h3 className="text-lg font-semibold mb-2">Base Card</h3>
        <p className="text-gray-600">Standard sized card (default).</p>
      </>
    ),
  },
};

export const LargeSize: Story = {
  args: {
    size: 'lg',
    bordered: true,
    children: (
      <>
        <h2 className="text-xl font-semibold mb-2">Large Card</h2>
        <p className="text-gray-600">
          Larger card for more prominent content or when more space is needed.
        </p>
      </>
    ),
  },
};

export const NewsCard: Story = {
  args: {
    bordered: true,
    glow: true,
    className: 'max-w-sm',
    children: (
      <>
        <img
          src="https://via.placeholder.com/400x200"
          alt="News article"
          className="w-full h-48 object-cover rounded-t-lg -mt-6 -mx-6 mb-4"
        />
        <div className="text-xs text-gray-500 mb-2">Technology • March 15, 2024</div>
        <h3 className="text-lg font-semibold mb-2">
          Breaking News: New Technology Announcement
        </h3>
        <p className="text-gray-600 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.
        </p>
        <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
          Read more →
        </a>
      </>
    ),
  },
};

export const ServiceCard: Story = {
  args: {
    bordered: true,
    className: 'max-w-sm',
    children: (
      <>
        <h3 className="text-lg font-semibold mb-2">
          <a href="#" className="text-primary-600 hover:text-primary-700">
            Apply for Business License
          </a>
        </h3>
        <p className="text-gray-600 mb-4">
          Submit your business license application online. Quick and easy process with step-by-step guidance.
        </p>
        <div className="flex items-center justify-between">
          <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
            Start service →
          </a>
          <span className="text-xs text-gray-500">~15 min</span>
        </div>
      </>
    ),
  },
};

export const ComplexContent: Story = {
  args: {
    bordered: true,
    glow: true,
    className: 'max-w-md',
    children: (
      <>
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-3">
            <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Application Approved</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <p className="text-gray-600 mb-4">
          Your business license application has been approved. You can now download your certificate.
        </p>
        <div className="flex gap-2">
          <button className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-md hover:bg-primary-700">
            Download
          </button>
          <button className="flex-1 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50">
            View Details
          </button>
        </div>
      </>
    ),
  },
};

export const CardStack: Story = {
  render: () => (
    <div className="space-y-4 max-w-md">
      <Card bordered>
        <h4 className="font-semibold mb-1">Step 1: Personal Information</h4>
        <p className="text-sm text-gray-600">Complete your personal details</p>
      </Card>
      <Card bordered>
        <h4 className="font-semibold mb-1">Step 2: Documents Upload</h4>
        <p className="text-sm text-gray-600">Upload required documents</p>
      </Card>
      <Card bordered>
        <h4 className="font-semibold mb-1">Step 3: Review & Submit</h4>
        <p className="text-sm text-gray-600">Review and submit your application</p>
      </Card>
    </div>
  ),
};

export const CardGrid: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <Card bordered glow>
        <div className="text-center">
          <div className="text-4xl font-bold text-primary-600 mb-2">1,234</div>
          <p className="text-gray-600">Applications</p>
        </div>
      </Card>
      <Card bordered glow>
        <div className="text-center">
          <div className="text-4xl font-bold text-success-600 mb-2">567</div>
          <p className="text-gray-600">Approved</p>
        </div>
      </Card>
      <Card bordered glow>
        <div className="text-center">
          <div className="text-4xl font-bold text-warning-600 mb-2">89</div>
          <p className="text-gray-600">Pending</p>
        </div>
      </Card>
    </div>
  ),
};
