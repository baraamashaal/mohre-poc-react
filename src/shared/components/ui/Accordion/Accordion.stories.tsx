import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from './Accordion';
import type { AccordionItem } from './Accordion.types';

const faqItems: AccordionItem[] = [
  {
    value: 'faq-1',
    title: 'What is the UAE Design System?',
    children: (
      <p>
        The UAE Design System is a comprehensive library of reusable components, patterns, and
        guidelines for building consistent digital services across UAE government entities.
      </p>
    ),
  },
  {
    value: 'faq-2',
    title: 'How do I get started?',
    children: (
      <p>
        To get started, install the design system package, import the components you need, and
        follow the implementation guidelines provided in the documentation.
      </p>
    ),
  },
  {
    value: 'faq-3',
    title: 'Is it accessible?',
    children: (
      <p>
        Yes, all components are built following WCAG 2 AA guidelines and include proper ARIA
        attributes, keyboard navigation, and screen reader support.
      </p>
    ),
  },
];

const serviceItems: AccordionItem[] = [
  {
    value: 'service-1',
    title: 'Personal Information',
    children: (
      <div>
        <p className="mb-2">Please provide your personal details:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Full Name</li>
          <li>Emirates ID Number</li>
          <li>Date of Birth</li>
          <li>Contact Information</li>
        </ul>
      </div>
    ),
  },
  {
    value: 'service-2',
    title: 'Required Documents',
    children: (
      <div>
        <p className="mb-2">Upload the following documents:</p>
        <ul className="list-disc list-inside space-y-1">
          <li>Emirates ID (Front and Back)</li>
          <li>Passport Copy</li>
          <li>Proof of Residence</li>
        </ul>
      </div>
    ),
  },
];

const meta = {
  title: 'UI/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      description: 'Array of accordion items',
    },
    defaultValue: {
      description: 'Value of initially expanded item(s)',
      control: 'text',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple items to be open simultaneously',
    },
  },
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default accordion with all items collapsed
 */
export const Default: Story = {
  args: {
    items: faqItems,
  },
};

/**
 * Accordion with first item expanded by default
 */
export const DefaultExpanded: Story = {
  args: {
    items: faqItems,
    defaultValue: 'faq-1',
  },
};

/**
 * Accordion allowing multiple items to be open
 */
export const Multiple: Story = {
  args: {
    items: faqItems,
    multiple: true,
  },
};

/**
 * Accordion with multiple items open by default
 */
export const MultipleDefaultExpanded: Story = {
  args: {
    items: faqItems,
    multiple: true,
    defaultValue: ['faq-1', 'faq-3'],
  },
};

/**
 * Accordion with 45-degree icon rotation (plus icon)
 */
export const With45DegreeRotation: Story = {
  args: {
    items: faqItems.map((item) => ({ ...item, iconRotateDeg: 45 as const })),
  },
};

/**
 * Service details accordion
 */
export const ServiceDetails: Story = {
  args: {
    items: serviceItems,
    defaultValue: 'service-1',
  },
};

/**
 * FAQ section
 */
export const FAQSection: Story = {
  args: {
    items: faqItems,
  },
};

/**
 * Nested content accordion
 */
export const NestedContent: Story = {
  args: {
    items: [
      {
        value: 'nested-1',
        title: 'Account Settings',
        children: (
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-1">Profile</h4>
              <p>Manage your profile information and preferences.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Privacy</h4>
              <p>Control your privacy settings and data sharing options.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Security</h4>
              <p>Update password and enable two-factor authentication.</p>
            </div>
          </div>
        ),
      },
      {
        value: 'nested-2',
        title: 'Notifications',
        children: (
          <div className="space-y-2">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              Email notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" defaultChecked />
              SMS notifications
            </label>
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Push notifications
            </label>
          </div>
        ),
      },
    ],
  },
};

/**
 * Long content accordion
 */
export const LongContent: Story = {
  args: {
    items: [
      {
        value: 'long-1',
        title: 'Terms and Conditions',
        children: (
          <div className="space-y-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
              qui officia deserunt mollit anim id est laborum.
            </p>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
          </div>
        ),
      },
    ],
  },
};

/**
 * Single item accordion
 */
export const SingleItem: Story = {
  args: {
    items: [
      {
        value: 'single-1',
        title: 'Help Information',
        children: <p>Contact support at support@uae.gov.ae or call 600-HELP.</p>,
      },
    ],
  },
};

/**
 * Many items accordion
 */
export const ManyItems: Story = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      value: `item-${i + 1}`,
      title: `Section ${i + 1}`,
      children: <p>Content for section {i + 1}</p>,
    })),
  },
};
