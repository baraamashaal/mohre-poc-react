import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toast } from './Toast';

describe('Toast', () => {
    it('renders correctly', () => {
        render(
            <Toast
                id="1"
                type="info"
                title="Test Title"
                message="Test Message"
                onDismiss={() => { }}
            />
        );

        expect(screen.getByText('Test Title')).toBeInTheDocument();
        expect(screen.getByText('Test Message')).toBeInTheDocument();
        expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('calls onDismiss when close button is clicked', async () => {
        const handleDismiss = vi.fn();
        const user = userEvent.setup();

        render(
            <Toast
                id="1"
                type="info"
                message="Test Message"
                onDismiss={handleDismiss}
            />
        );

        const closeButton = screen.getByRole('button', { name: /close/i });
        await user.click(closeButton);

        expect(handleDismiss).toHaveBeenCalledWith('1');
    });

    it('renders action button when provided', async () => {
        const handleAction = vi.fn();
        const user = userEvent.setup();

        render(
            <Toast
                id="1"
                type="info"
                message="Test Message"
                onDismiss={() => { }}
                action={{ label: 'Retry', onClick: handleAction }}
            />
        );

        const actionButton = screen.getByRole('button', { name: 'Retry' });
        await user.click(actionButton);

        expect(handleAction).toHaveBeenCalled();
    });

    it('renders correct variant styles', () => {
        const { rerender } = render(
            <Toast
                id="1"
                type="success"
                message="Success"
                onDismiss={() => { }}
            />
        );
        // Check for success icon color class (simplified check)
        expect(document.querySelector('.text-aegreen-600')).toBeInTheDocument();

        rerender(
            <Toast
                id="1"
                type="error"
                message="Error"
                onDismiss={() => { }}
            />
        );
        expect(document.querySelector('.text-aered-600')).toBeInTheDocument();

        rerender(
            <Toast
                id="1"
                type="info"
                message="Info"
                onDismiss={() => { }}
            />
        );
        expect(document.querySelector('.text-seablue-600')).toBeInTheDocument();
    });
});
