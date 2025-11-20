import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Select component based on AEGOV Design System. Used for dropdown selection from a list of options.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Select label text',
      control: 'text',
    },
    size: {
      description: 'Select size variant',
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
    variant: {
      description: 'Color variant',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    error: {
      description: 'Error state',
      control: 'boolean',
    },
    errorMessage: {
      description: 'Error message to display',
      control: 'text',
    },
    helperText: {
      description: 'Helper text to display below select',
      control: 'text',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    required: {
      description: 'Required field indicator',
      control: 'boolean',
    },
    multiple: {
      description: 'Allow multiple selections',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <option value="">Select an option</option>
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
      </>
    ),
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Country',
    children: (
      <>
        <option value="">Select a country</option>
        <option value="ae">United Arab Emirates</option>
        <option value="sa">Saudi Arabia</option>
        <option value="qa">Qatar</option>
      </>
    ),
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Language',
    helperText: 'Choose your preferred language',
    children: (
      <>
        <option value="">Select language</option>
        <option value="en">English</option>
        <option value="ar">Arabic</option>
      </>
    ),
  },
};

export const Required: Story = {
  args: {
    label: 'Country',
    required: true,
    children: (
      <>
        <option value="">Select a country</option>
        <option value="ae">United Arab Emirates</option>
      </>
    ),
  },
};

export const Small: Story = {
  args: {
    label: 'Size: Small',
    size: 'sm',
    children: (
      <>
        <option value="">Select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Base: Story = {
  args: {
    label: 'Size: Base (Default)',
    size: 'base',
    children: (
      <>
        <option value="">Select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Large: Story = {
  args: {
    label: 'Size: Large',
    size: 'lg',
    children: (
      <>
        <option value="">Select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary variant',
    variant: 'primary',
    children: (
      <>
        <option value="">Select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary variant',
    variant: 'secondary',
    children: (
      <>
        <option value="">Select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled select',
    disabled: true,
    children: (
      <>
        <option value="">Cannot select</option>
        <option value="1">Option 1</option>
      </>
    ),
  },
};

export const WithError: Story = {
  args: {
    label: 'Country',
    error: true,
    errorMessage: 'Please select a country',
    children: (
      <>
        <option value="">Select a country</option>
        <option value="ae">United Arab Emirates</option>
      </>
    ),
  },
};

export const Multiple: Story = {
  args: {
    label: 'Select multiple countries',
    multiple: true,
    helperText: 'Hold Ctrl/Cmd to select multiple options',
    children: (
      <>
        <option value="ae">United Arab Emirates</option>
        <option value="sa">Saudi Arabia</option>
        <option value="qa">Qatar</option>
        <option value="bh">Bahrain</option>
        <option value="om">Oman</option>
        <option value="kw">Kuwait</option>
      </>
    ),
  },
};

export const CountrySelector: Story = {
  render: () => (
    <div className="w-96">
      <Select label="Select your country" required>
        <option value="">Choose a country</option>
        <option value="ae">United Arab Emirates</option>
        <option value="sa">Saudi Arabia</option>
        <option value="qa">Qatar</option>
        <option value="bh">Bahrain</option>
        <option value="om">Oman</option>
        <option value="kw">Kuwait</option>
      </Select>
    </div>
  ),
};

export const CitySelector: Story = {
  render: () => (
    <div className="w-96">
      <Select label="Select your city" helperText="Choose the city where you reside">
        <option value="">Choose a city</option>
        <optgroup label="Abu Dhabi">
          <option value="auh">Abu Dhabi City</option>
          <option value="aln">Al Ain</option>
        </optgroup>
        <optgroup label="Dubai">
          <option value="dxb">Dubai City</option>
          <option value="hatta">Hatta</option>
        </optgroup>
        <optgroup label="Sharjah">
          <option value="shj">Sharjah City</option>
          <option value="khor">Khor Fakkan</option>
        </optgroup>
      </Select>
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div className="w-96 space-y-4">
      <Select label="Title" required>
        <option value="">Select</option>
        <option value="mr">Mr.</option>
        <option value="mrs">Mrs.</option>
        <option value="ms">Ms.</option>
        <option value="dr">Dr.</option>
      </Select>
      <Select label="Nationality" required helperText="Your country of citizenship">
        <option value="">Select nationality</option>
        <option value="ae">UAE National</option>
        <option value="other">Other</option>
      </Select>
      <Select label="Employment Status">
        <option value="">Select status</option>
        <option value="employed">Employed</option>
        <option value="self-employed">Self-Employed</option>
        <option value="unemployed">Unemployed</option>
        <option value="student">Student</option>
      </Select>
    </div>
  ),
};
