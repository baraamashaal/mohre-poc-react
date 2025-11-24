import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from './Toast';
import { Toaster } from './Toaster';
import { useToastStore } from '@/stores/useToastStore';
import { useEffect } from 'react';

const meta: Meta<typeof Toast> = {
    title: 'UI/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
    args: {
        id: '1',
        type: 'info',
        title: 'Notification',
        message: 'This is a basic toast notification.',
        onDismiss: () => { },
    },
};

export const Success: Story = {
    args: {
        id: '2',
        type: 'success',
        title: 'Success',
        message: 'Your changes have been saved successfully.',
        onDismiss: () => { },
    },
};

export const Error: Story = {
    args: {
        id: '3',
        type: 'error',
        title: 'Error',
        message: 'Something went wrong. Please try again.',
        onDismiss: () => { },
    },
};

export const Warning: Story = {
    args: {
        id: '4',
        type: 'warning',
        title: 'Warning',
        message: 'Your session is about to expire.',
        onDismiss: () => { },
    },
};

export const WithAction: Story = {
    args: {
        id: '5',
        type: 'info',
        title: 'Update Available',
        message: 'A new version of the application is available.',
        action: {
            label: 'Update Now',
            onClick: () => alert('Update clicked'),
        },
        onDismiss: () => { },
    },
};

// Interactive Example using the Store
const ToastDemo = () => {
    const { addToast } = useToastStore();

    return (
        <div className="flex flex-col gap-4 items-center p-8">
            <div className="flex gap-2">
                <button
                    className="aegov-btn"
                    onClick={() =>
                        addToast({
                            type: 'success',
                            title: 'Success',
                            message: 'Operation completed successfully',
                        })
                    }
                >
                    Show Success
                </button>
                <button
                    className="aegov-btn btn-soft"
                    onClick={() =>
                        addToast({
                            type: 'error',
                            title: 'Error',
                            message: 'An error occurred',
                        })
                    }
                >
                    Show Error
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export const Interactive: Story = {
    render: () => <ToastDemo />,
};
