import type { Meta, StoryObj } from '@storybook/react';
import { FileInput } from './FileInput';

const meta = {
  title: 'UI/FileInput',
  component: FileInput,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label text for the upload button',
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
      description: 'Size variant',
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Button color variant',
    },
    showFileList: {
      control: 'boolean',
      description: 'Whether to show uploaded file list',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
  },
} satisfies Meta<typeof FileInput>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default file input with primary variant
 */
export const Default: Story = {
  args: {
    label: 'Upload file',
  },
};

/**
 * Small size file input
 */
export const Small: Story = {
  args: {
    label: 'Upload file',
    size: 'sm',
  },
};

/**
 * Large size file input
 */
export const Large: Story = {
  args: {
    label: 'Upload file',
    size: 'lg',
  },
};

/**
 * Secondary variant file input
 */
export const Secondary: Story = {
  args: {
    label: 'Upload file',
    variant: 'secondary',
  },
};

/**
 * File input with PDF restriction
 */
export const PDFOnly: Story = {
  args: {
    label: 'Upload PDF',
    accept: '.pdf',
  },
};

/**
 * File input for images only
 */
export const ImagesOnly: Story = {
  args: {
    label: 'Upload images',
    accept: 'image/*',
  },
};

/**
 * Multiple file selection
 */
export const Multiple: Story = {
  args: {
    label: 'Upload files',
    multiple: true,
  },
};

/**
 * Disabled file input
 */
export const Disabled: Story = {
  args: {
    label: 'Upload file',
    disabled: true,
  },
};

/**
 * File input without file list display
 */
export const NoFileList: Story = {
  args: {
    label: 'Upload file',
    showFileList: false,
  },
};

/**
 * File input with custom label
 */
export const CustomLabel: Story = {
  args: {
    label: 'Attach document',
  },
};

/**
 * File input for multiple documents
 */
export const DocumentUpload: Story = {
  args: {
    label: 'Upload documents',
    accept: '.pdf,.doc,.docx',
    multiple: true,
  },
};

/**
 * Large secondary file input
 */
export const LargeSecondary: Story = {
  args: {
    label: 'Upload file',
    size: 'lg',
    variant: 'secondary',
  },
};
