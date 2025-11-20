import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toggle } from './Toggle';

const meta = {
  title: 'UI/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Toggle component based on AEGOV Design System. Used for binary on/off or true/false states.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: 'Toggle label text',
      control: 'text',
    },
    variant: {
      description: 'Color variant',
      control: 'select',
      options: ['primary', 'secondary', 'success', 'mode'],
    },
    checked: {
      description: 'Checked state',
      control: 'boolean',
    },
    disabled: {
      description: 'Disabled state',
      control: 'boolean',
    },
    showIcon: {
      description: 'Show icons',
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: 'Enable feature',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled',
    checked: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    'aria-label': 'Toggle setting',
  },
};

export const Primary: Story = {
  args: {
    label: 'Primary toggle',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Secondary toggle',
    variant: 'secondary',
  },
};

export const Success: Story = {
  args: {
    label: 'Success toggle',
    variant: 'success',
  },
};

export const Mode: Story = {
  args: {
    label: 'Dark mode',
    variant: 'mode',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled toggle',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: 'Disabled and checked',
    checked: true,
    disabled: true,
  },
};

export const WithIcons: Story = {
  args: {
    label: 'Toggle with icons',
    showIcon: true,
    checkedIcon: <span>✓</span>,
    uncheckedIcon: <span>✗</span>,
  },
};

export const Interactive: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div className="space-y-4">
        <Toggle
          label="Notifications"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p className="text-sm text-gray-600">
          Status: {checked ? 'Enabled' : 'Disabled'}
        </p>
      </div>
    );
  },
};

export const SettingsExample: Story = {
  render: () => {
    const [notifications, setNotifications] = useState(true);
    const [darkMode, setDarkMode] = useState(false);
    const [autoSave, setAutoSave] = useState(true);

    return (
      <div className="w-96 space-y-4 p-6 bg-white rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Settings</h3>

        <div className="flex items-center justify-between">
          <span>Enable Notifications</span>
          <Toggle
            label="Enable Notifications"
            checked={notifications}
            onCheckedChange={setNotifications}
            variant="success"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Dark Mode</span>
          <Toggle
            label="Dark Mode"
            checked={darkMode}
            onCheckedChange={setDarkMode}
            variant="mode"
          />
        </div>

        <div className="flex items-center justify-between">
          <span>Auto Save</span>
          <Toggle
            label="Auto Save"
            checked={autoSave}
            onCheckedChange={setAutoSave}
          />
        </div>
      </div>
    );
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Primary:</span>
        <Toggle label="Primary" variant="primary" defaultChecked />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Secondary:</span>
        <Toggle label="Secondary" variant="secondary" defaultChecked />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Success:</span>
        <Toggle label="Success" variant="success" defaultChecked />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-24 text-sm">Mode:</span>
        <Toggle label="Mode" variant="mode" defaultChecked />
      </div>
    </div>
  ),
};

export const AllStates: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Unchecked:</span>
        <Toggle label="Unchecked" />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Checked:</span>
        <Toggle label="Checked" defaultChecked />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Disabled Off:</span>
        <Toggle label="Disabled Off" disabled />
      </div>
      <div className="flex items-center gap-4">
        <span className="w-32 text-sm">Disabled On:</span>
        <Toggle label="Disabled On" disabled defaultChecked />
      </div>
    </div>
  ),
};
