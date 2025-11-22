import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Navigational aid displaying the hierarchical path or location of the current page within the website. Enables users to understand their position and navigate backward through previously visited pages.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of breadcrumb items defining the navigation path',
      control: 'object',
    },
    separator: {
      description: 'Visual separator style between breadcrumb items',
      control: 'select',
      options: ['slash', 'caret'],
    },
    showHomeIcon: {
      description: 'Display home icon on the first breadcrumb item',
      control: 'boolean',
    },
    enableMicrodata: {
      description: 'Enable Schema.org microdata attributes for SEO',
      control: 'boolean',
    },
    ariaLabel: {
      description: 'ARIA label for the navigation element',
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

const defaultItems = [
  { href: '/', label: 'Home' },
  { href: '/media', label: 'Media centre', title: 'Media centre' },
  { href: '/news', label: 'News', title: 'News' },
  { href: '/special', label: 'Special articles', title: 'Special' },
  { href: '/press', label: 'Press release and features', title: 'Press release and features' },
  { label: 'A really long page name that must be affected.' },
];

export const Default: Story = {
  args: {
    items: defaultItems,
  },
};

export const WithHomeIcon: Story = {
  args: {
    items: defaultItems,
    showHomeIcon: true,
  },
};

export const CaretSeparator: Story = {
  args: {
    items: defaultItems,
    separator: 'caret',
  },
};

export const CaretWithHomeIcon: Story = {
  args: {
    items: defaultItems,
    separator: 'caret',
    showHomeIcon: true,
  },
};

export const WithMicrodata: Story = {
  args: {
    items: [
      { href: '/', label: 'Home' },
      { href: '/products', label: 'Products' },
      { href: '/electronics', label: 'Electronics' },
      { label: 'Smartphones' },
    ],
    enableMicrodata: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Breadcrumb with Schema.org microdata for improved SEO',
      },
    },
  },
};

export const ShortPath: Story = {
  args: {
    items: [
      { href: '/', label: 'Home' },
      { label: 'About Us' },
    ],
  },
};

export const ArabicRTL: Story = {
  args: {
    items: [
      { href: '/', label: 'الصفحة الرئيسة' },
      { href: '/media', label: 'المركز الإعلامي', title: 'المركز الإعلامي' },
      { href: '/guidance', label: 'التوعية و الإرشاد', title: 'التوعية و الإرشاد' },
      { label: 'عزيزي العامل – اعرف حقوقك' },
    ],
  },
  decorators: [
    (Story) => (
      <div dir="rtl">
        <Story />
      </div>
    ),
  ],
};

export const Playground: Story = {
  args: {
    items: defaultItems,
    separator: 'slash',
    showHomeIcon: false,
    enableMicrodata: false,
    ariaLabel: 'Breadcrumb',
  },
};
