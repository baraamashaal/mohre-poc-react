import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { RangeSlider } from './RangeSlider';

const meta = {
  title: 'UI/RangeSlider',
  component: RangeSlider,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'RangeSlider component based on AEGOV Design System. Used for selecting a value within a range using a slider control.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Range slider label text',
      control: 'text',
    },
    variant: {
      description: 'Color variant',
      control: 'select',
      options: ['primary', 'secondary'],
    },
    min: {
      description: 'Minimum value',
      control: 'number',
    },
    max: {
      description: 'Maximum value',
      control: 'number',
    },
    step: {
      description: 'Step increment',
      control: 'number',
    },
    value: {
      description: 'Current value',
      control: 'number',
    },
    showOutput: {
      description: 'Show output value',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    error: {
      description: 'Error state',
      control: 'boolean',
    },
    helperText: {
      description: 'Helper text',
      control: 'text',
    },
    errorMessage: {
      description: 'Error message',
      control: 'text',
    },
  },
} satisfies Meta<typeof RangeSlider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Volume',
    value: 50,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Brightness',
    value: 75,
  },
};

export const WithoutOutput: Story = {
  args: {
    label: 'Volume',
    value: 50,
    showOutput: false,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Volume',
    value: 50,
    helperText: 'Adjust the volume level from 0 to 100',
  },
};

export const CustomRange: Story = {
  args: {
    label: 'Temperature',
    min: 16,
    max: 30,
    value: 22,
    helperText: 'Set temperature in Celsius',
  },
};

export const CustomStep: Story = {
  args: {
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 50,
    value: 500,
    helperText: 'Adjust in increments of $50',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary variant',
    variant: 'primary',
    value: 60,
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary variant',
    variant: 'secondary',
    value: 60,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Volume',
    value: 50,
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Volume',
    value: 95,
    error: true,
    errorMessage: 'Volume is too high',
  },
};

export const Required: Story = {
  args: {
    label: 'Brightness',
    value: 50,
    required: true,
  },
};

export const Interactive: Story = {
  render: () => {
    const [value, setValue] = useState(50);
    return (
      <div className="w-96 space-y-4">
        <RangeSlider
          label="Volume"
          value={value}
          onValueChange={setValue}
        />
        <p className="text-sm text-gray-600">Current value: {value}</p>
      </div>
    );
  },
};

export const VolumeControl: Story = {
  render: () => {
    const [volume, setVolume] = useState(70);
    return (
      <div className="w-96">
        <RangeSlider
          label="Volume Control"
          min={0}
          max={100}
          value={volume}
          onValueChange={setVolume}
          helperText="Adjust audio volume"
        />
      </div>
    );
  },
};

export const TemperatureControl: Story = {
  render: () => {
    const [temp, setTemp] = useState(22);
    return (
      <div className="w-96">
        <RangeSlider
          label="Room Temperature"
          min={16}
          max={30}
          value={temp}
          onValueChange={setTemp}
          helperText={`Set to ${temp}°C`}
        />
      </div>
    );
  },
};

export const PriceFilter: Story = {
  render: () => {
    const [price, setPrice] = useState(500);
    return (
      <div className="w-96">
        <RangeSlider
          label="Max Price"
          min={0}
          max={2000}
          step={100}
          value={price}
          onValueChange={setPrice}
          helperText={`Filter products up to $${price}`}
        />
      </div>
    );
  },
};

export const MultipleSliders: Story = {
  render: () => {
    const [brightness, setBrightness] = useState(80);
    const [contrast, setContrast] = useState(50);
    const [saturation, setSaturation] = useState(60);

    return (
      <div className="w-96 space-y-6">
        <h3 className="text-lg font-semibold">Image Adjustments</h3>

        <RangeSlider
          label="Brightness"
          value={brightness}
          onValueChange={setBrightness}
        />

        <RangeSlider
          label="Contrast"
          value={contrast}
          onValueChange={setContrast}
          variant="secondary"
        />

        <RangeSlider
          label="Saturation"
          value={saturation}
          onValueChange={setSaturation}
        />
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <RangeSlider label="Primary" variant="primary" value={60} />
      <RangeSlider label="Secondary" variant="secondary" value={60} />
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="w-96 space-y-6">
      <RangeSlider label="Normal" value={50} />
      <RangeSlider label="With Helper" value={50} helperText="This is helper text" />
      <RangeSlider label="Disabled" value={50} disabled />
      <RangeSlider
        label="Error"
        value={95}
        error
        errorMessage="Value too high"
      />
      <RangeSlider label="Required" value={50} required />
    </div>
  ),
};
