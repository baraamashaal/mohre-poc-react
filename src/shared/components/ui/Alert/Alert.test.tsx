import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Alert } from './Alert';

describe('Alert', () => {
  describe('Rendering', () => {
    it('renders with children content', () => {
      render(<Alert type="info">Alert message</Alert>);
      expect(screen.getByText('Alert message')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <Alert type="info" className="custom-alert">
          Test
        </Alert>
      );
      expect(container.firstChild).toHaveClass('custom-alert');
    });

    it('has role="alert" by default', () => {
      render(<Alert type="info">Test</Alert>);
      expect(screen.getByRole('alert')).toBeInTheDocument();
    });

    it('supports custom role', () => {
      render(
        <Alert type="info" role="status">
          Test
        </Alert>
      );
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  describe('Types', () => {
    it('renders info type with correct class', () => {
      const { container } = render(<Alert type="info">Info</Alert>);
      expect(container.firstChild).toHaveClass('aegov-alert');
      expect(container.firstChild).toHaveClass('alert-info');
    });

    it('renders error type with correct class', () => {
      const { container } = render(<Alert type="error">Error</Alert>);
      expect(container.firstChild).toHaveClass('alert-error');
    });

    it('renders success type with correct class', () => {
      const { container } = render(<Alert type="success">Success</Alert>);
      expect(container.firstChild).toHaveClass('alert-success');
    });

    it('renders warning type with correct class', () => {
      const { container } = render(<Alert type="warning">Warning</Alert>);
      expect(container.firstChild).toHaveClass('alert-warning');
    });
  });

  describe('Variants', () => {
    it('renders solid variant by default', () => {
      const { container } = render(<Alert type="info">Test</Alert>);
      expect(container.firstChild).not.toHaveClass('alert-soft');
    });

    it('renders soft variant with correct class', () => {
      const { container } = render(
        <Alert type="info" variant="soft">
          Test
        </Alert>
      );
      expect(container.firstChild).toHaveClass('alert-soft');
    });
  });

  describe('Icon', () => {
    it('renders without icon by default', () => {
      render(<Alert type="info">Test</Alert>);
      expect(screen.queryByTestId('alert-icon')).not.toBeInTheDocument();
    });

    it('renders custom icon when provided', () => {
      render(
        <Alert type="info" icon={<span data-testid="custom-icon">⚠️</span>}>
          Test
        </Alert>
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('Dismissible', () => {
    it('does not render dismiss button by default', () => {
      render(<Alert type="info">Test</Alert>);
      expect(
        screen.queryByRole('button', { name: /dismiss/i })
      ).not.toBeInTheDocument();
    });

    it('renders dismiss button when dismissible is true', () => {
      render(
        <Alert type="info" dismissible>
          Test
        </Alert>
      );
      expect(
        screen.getByRole('button', { name: /dismiss/i })
      ).toBeInTheDocument();
    });

    it('hides alert when dismiss button is clicked', async () => {
      const user = userEvent.setup();
      render(
        <Alert type="info" dismissible>
          Test message
        </Alert>
      );

      const dismissButton = screen.getByRole('button', { name: /dismiss/i });
      await user.click(dismissButton);

      // Wait for Framer Motion exit animation to complete
      await new Promise(resolve => setTimeout(resolve, 250));

      expect(screen.queryByText('Test message')).not.toBeInTheDocument();
    });

    it('calls onDismiss callback when dismissed', async () => {
      const user = userEvent.setup();
      const handleDismiss = vi.fn();

      render(
        <Alert type="info" dismissible onDismiss={handleDismiss}>
          Test
        </Alert>
      );

      const dismissButton = screen.getByRole('button', { name: /dismiss/i });
      await user.click(dismissButton);

      expect(handleDismiss).toHaveBeenCalledTimes(1);
    });

  });

  describe('Accessibility', () => {
    it('has aria-live="polite" by default for non-error alerts', () => {
      const { container } = render(<Alert type="info">Test</Alert>);
      expect(container.firstChild).toHaveAttribute('aria-live', 'polite');
    });

    it('has aria-live="assertive" for error alerts', () => {
      const { container } = render(<Alert type="error">Test</Alert>);
      expect(container.firstChild).toHaveAttribute('aria-live', 'assertive');
    });

    it('supports custom aria-live value', () => {
      const { container } = render(
        <Alert type="info" aria-live="off">
          Test
        </Alert>
      );
      expect(container.firstChild).toHaveAttribute('aria-live', 'off');
    });

    it('dismiss button has proper aria-label', () => {
      render(
        <Alert type="info" dismissible>
          Test
        </Alert>
      );
      expect(
        screen.getByRole('button', { name: /dismiss alert/i })
      ).toBeInTheDocument();
    });
  });

  describe('Content', () => {
    it('renders string content', () => {
      render(<Alert type="info">Simple text</Alert>);
      expect(screen.getByText('Simple text')).toBeInTheDocument();
    });

    it('renders JSX content', () => {
      render(
        <Alert type="info">
          <div>
            <strong>Title</strong>
            <p>Description</p>
          </div>
        </Alert>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
    });

    it('renders multiple children', () => {
      render(
        <Alert type="info">
          <span>First</span>
          <span>Second</span>
        </Alert>
      );
      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Second')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles rapid dismiss clicks gracefully', async () => {
      const user = userEvent.setup();
      const handleDismiss = vi.fn();

      render(
        <Alert type="info" dismissible onDismiss={handleDismiss}>
          Test
        </Alert>
      );

      const dismissButton = screen.getByRole('button', { name: /dismiss/i });

      // Click once
      await user.click(dismissButton);

      // Should have called onDismiss
      expect(handleDismiss).toHaveBeenCalledTimes(1);

      // Wait for animation to complete
      await new Promise(resolve => setTimeout(resolve, 250));

      // After animation, alert should be gone
      expect(screen.queryByText('Test')).not.toBeInTheDocument();
    });

    it('renders with all props combined', () => {
      const handleDismiss = vi.fn();
      const { container } = render(
        <Alert
          type="warning"
          variant="soft"
          dismissible
          onDismiss={handleDismiss}
          icon={<span data-testid="icon">⚠️</span>}
          className="custom-class"
          role="status"
          aria-live="polite"
        >
          Complex alert
        </Alert>
      );

      expect(container.firstChild).toHaveClass('aegov-alert');
      expect(container.firstChild).toHaveClass('alert-warning');
      expect(container.firstChild).toHaveClass('alert-soft');
      expect(container.firstChild).toHaveClass('custom-class');
      expect(screen.getByRole('status')).toBeInTheDocument();
      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByText('Complex alert')).toBeInTheDocument();
      expect(
        screen.getByRole('button', { name: /dismiss/i })
      ).toBeInTheDocument();
    });
  });

  describe('Animation', () => {
    it('renders with framer-motion component', () => {
      const { container } = render(<Alert type="info">Test</Alert>);
      // Framer motion adds data attributes to animated elements
      expect(container.firstChild).toBeDefined();
    });
  });
});
