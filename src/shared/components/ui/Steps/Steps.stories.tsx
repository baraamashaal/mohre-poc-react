import type { Meta, StoryObj } from '@storybook/react';
import { Steps } from './Steps';

const meta = {
  title: 'Components/Steps',
  component: Steps,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Steps component simplifies complex processes or forms by breaking them down into a series of sequential steps. Provides visual progress tracking for multi-step workflows.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicSteps = [
  { label: 'Personal Info', href: '#step-1' },
  { label: 'Contact Details', href: '#step-2' },
  { label: 'Review', href: '#step-3' },
];

const manySteps = [
  { label: 'Account Setup', href: '#step-1' },
  { label: 'Personal Information', href: '#step-2' },
  { label: 'Contact Details', href: '#step-3' },
  { label: 'Verification', href: '#step-4' },
  { label: 'Review & Submit', href: '#step-5' },
];

export const Default: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
  },
};

export const WithLabels: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    showLabels: true,
  },
};

export const FirstStep: Story = {
  args: {
    steps: basicSteps,
    currentStep: 0,
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress indicator on the first step of a multi-step process.',
      },
    },
  },
};

export const LastStep: Story = {
  args: {
    steps: basicSteps,
    currentStep: 2,
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Progress indicator on the final step, showing all previous steps as completed.',
      },
    },
  },
};

export const ManySteps: Story = {
  args: {
    steps: manySteps,
    currentStep: 2,
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps component handling a longer workflow with 5 steps.',
      },
    },
  },
};

export const SmallSize: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    size: 'sm',
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact version with smaller step indicators (32px × 32px).',
      },
    },
  },
};

export const LargeSize: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    size: 'lg',
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Large version with bigger step indicators (48px × 48px) for better visibility.',
      },
    },
  },
};

export const VerticalOrientation: Story = {
  args: {
    steps: basicSteps,
    currentStep: 1,
    orientation: 'vertical',
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Vertical layout orientation suitable for sidebar navigation or narrow spaces.',
      },
    },
  },
};

export const WithDisabledSteps: Story = {
  args: {
    steps: [
      { label: 'Completed Step', href: '#step-1' },
      { label: 'Current Step', href: '#step-2' },
      { label: 'Disabled Step', href: '#step-3', disabled: true },
      { label: 'Future Step', href: '#step-4' },
    ],
    currentStep: 1,
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps can be disabled to indicate temporarily unavailable sections.',
      },
    },
  },
};

export const WithoutLinks: Story = {
  args: {
    steps: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
    ],
    currentStep: 1,
    showLabels: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Steps without href attributes render as non-clickable indicators.',
      },
    },
  },
};
