import type { Meta, StoryObj } from '@storybook/react';
import { Blockquote } from './Blockquote';

const meta = {
  title: 'Components/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component:
          'Visually distinguishes and highlights quoted text or excerpts with proper attribution. Commonly used in articles, blog posts, and content to highlight statements and attribute them to original authors.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    style: {
      control: 'select',
      options: ['soft', 'colored'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'soft' },
      },
    },
    author: {
      control: 'text',
      description: "Author's full name",
    },
    authorTitle: {
      control: 'text',
      description: "Author's title, position, or source name",
    },
    cite: {
      control: 'text',
      description: 'Citation URL - source of the quote (required for semantic correctness)',
    },
    children: {
      control: 'text',
      description: 'Quote content',
    },
    className: {
      control: 'text',
      description: 'Custom CSS classes',
    },
  },
} satisfies Meta<typeof Blockquote>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Example 1: Standard Blockquote with Icon
 *
 * Default blockquote with quotation icon and attribution footer.
 */
export const Example1StandardWithIcon: Story = {
  args: {
    author: 'AbdulRahman Bin Mohammed Al Owais',
    authorTitle: 'Minister of Health & Prevention',
    cite: 'https://mohap.gov.ae/en/about-us/minister-message',
    style: 'soft',
    children:
      'The confidence of our wise leadership in healthcare professionals is highly appreciated. This confidence places a significant responsibility on our shoulders to continue providing excellent healthcare services to all residents of the UAE.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Standard style includes SVG quotation icon at top. Citation URL is mandatory for semantic correctness.',
      },
    },
  },
};

/**
 * Example 2: Basic Code Structure Template
 *
 * Template showing the required structure for blockquote component.
 */
export const Example2BasicStructure: Story = {
  args: {
    author: 'Author Full Name',
    authorTitle: 'Author Title or Source Name',
    cite: 'https://www.example.com',
    style: 'soft',
    children:
      'Quote text goes here. This should be the actual quoted content from the source.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Template showing minimal required elements. Replace placeholder text with actual quote content and attribution.',
      },
    },
  },
};

/**
 * Example 3: Colored Blockquote (Without Icon)
 *
 * Colored variant with background styling, SVG icon omitted.
 */
export const Example3ColoredWithoutIcon: Story = {
  args: {
    author: 'AbdulRahman Bin Mohammed Al Owais',
    authorTitle: 'Minister of Health & Prevention',
    cite: 'https://www.example.com',
    style: 'colored',
    children:
      'The confidence of our wise leadership in healthcare professionals is highly appreciated. This confidence places a significant responsibility on our shoulders to continue providing excellent healthcare services to all residents of the UAE.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Colored variant uses `quote-colored` class and omits the SVG icon. Background color provides visual distinction.',
      },
    },
  },
};

/**
 * Interactive Playground
 *
 * Experiment with different props and content.
 */
export const Playground: Story = {
  args: {
    author: 'John Doe',
    authorTitle: 'CEO, Example Corporation',
    cite: 'https://example.com/article',
    style: 'soft',
    children:
      'This is an example quote that demonstrates the blockquote component. You can customize this content and see how it looks with different styles.',
  },
};

/**
 * Long Content Example
 *
 * Blockquote with longer quote text to test layout.
 */
export const LongContent: Story = {
  args: {
    author: 'Jane Smith',
    authorTitle: 'Director of Communications',
    cite: 'https://example.com/long-article',
    style: 'soft',
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

/**
 * Short Content Example
 *
 * Blockquote with brief quote text.
 */
export const ShortContent: Story = {
  args: {
    author: 'Albert Einstein',
    authorTitle: 'Theoretical Physicist',
    cite: 'https://example.com/einstein-quotes',
    style: 'soft',
    children: 'Imagination is more important than knowledge.',
  },
};

/**
 * Arabic/RTL Example
 *
 * Blockquote with Arabic text demonstrating RTL support.
 */
export const ArabicRTL: Story = {
  args: {
    author: 'عبدالرحمن بن محمد العويس',
    authorTitle: 'وزير الصحة ووقاية المجتمع',
    cite: 'https://mohap.gov.ae/ar/about-us/minister-message',
    style: 'soft',
    children:
      'ثقة قيادتنا الرشيدة في الكوادر الصحية محل تقدير كبير. هذه الثقة تضع مسؤولية كبيرة على عاتقنا لمواصلة تقديم خدمات صحية متميزة لجميع سكان دولة الإمارات.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Full RTL support for Arabic and other right-to-left languages.',
      },
    },
  },
};

/**
 * Colored Style with Arabic
 *
 * Colored blockquote variant with Arabic text.
 */
export const ColoredArabic: Story = {
  args: {
    author: 'عبدالرحمن بن محمد العويس',
    authorTitle: 'وزير الصحة ووقاية المجتمع',
    cite: 'https://mohap.gov.ae/ar/about-us/minister-message',
    style: 'colored',
    children:
      'ثقة قيادتنا الرشيدة في الكوادر الصحية محل تقدير كبير. هذه الثقة تضع مسؤولية كبيرة على عاتقنا لمواصلة تقديم خدمات صحية متميزة لجميع سكان دولة الإمارات.',
  },
};

/**
 * With URL Fragment
 *
 * Blockquote citing a specific section of a webpage.
 */
export const WithURLFragment: Story = {
  args: {
    author: 'Technical Documentation Team',
    authorTitle: 'UAE Design System',
    cite: 'https://designsystem.gov.ae/docs/components/blockquote#examples',
    style: 'soft',
    children:
      'When quoting page content, include page URL plus element ID in cite attribute for precise attribution.',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When citing specific sections of a webpage, use URL#element-id format in the cite attribute.',
      },
    },
  },
};
