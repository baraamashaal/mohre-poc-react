import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Toggle } from './Toggle';

describe('Toggle', () => {
  describe('Rendering', () => {
    it('renders toggle element', () => {
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toBeInTheDocument();
      expect(toggle).toHaveAttribute('type', 'checkbox');
      expect(toggle).toHaveAttribute('role', 'switch');
    });

    it('renders with label', () => {
      render(<Toggle label="Enable notifications" />);
      expect(screen.getByText('Enable notifications')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toBeInTheDocument();
    });

    it('applies aegov-toggle class to wrapper', () => {
      const { container } = render(<Toggle label="Test" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('aegov-toggle');
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Toggle label="Test" />);
      const label = container.querySelector('label');
      expect(label).not.toHaveClass('toggle-secondary');
      expect(label).not.toHaveClass('toggle-success');
      expect(label).not.toHaveClass('toggle-mode');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Toggle label="Test" variant="secondary" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('toggle-secondary');
    });

    it('renders success variant', () => {
      const { container } = render(<Toggle label="Test" variant="success" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('toggle-success');
    });

    it('renders mode variant', () => {
      const { container } = render(<Toggle label="Test" variant="mode" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('toggle-mode');
    });
  });

  describe('States', () => {
    it('renders unchecked by default', () => {
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;
      expect(toggle.checked).toBe(false);
    });

    it('renders checked when checked prop is true', () => {
      render(<Toggle data-testid="test-toggle" checked />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;
      expect(toggle.checked).toBe(true);
    });

    it('can be disabled', () => {
      render(<Toggle data-testid="test-toggle" disabled />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toBeDisabled();
    });

    it('applies aria-disabled when disabled', () => {
      render(<Toggle data-testid="test-toggle" disabled />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Interaction', () => {
    it('handles toggle on click', async () => {
      const user = userEvent.setup();
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;

      expect(toggle.checked).toBe(false);
      await user.click(toggle);
      expect(toggle.checked).toBe(true);
    });

    it('calls onCheckedChange when toggled', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Toggle data-testid="test-toggle" onCheckedChange={handleChange} />);
      const toggle = screen.getByTestId('test-toggle');

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);
    });

    it('calls onChange when provided', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Toggle data-testid="test-toggle" onChange={handleChange} />);
      const toggle = screen.getByTestId('test-toggle');

      await user.click(toggle);
      expect(handleChange).toHaveBeenCalled();
    });

    it('does not trigger events when disabled', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Toggle data-testid="test-toggle" disabled onCheckedChange={handleChange} />);
      const toggle = screen.getByTestId('test-toggle');

      await user.click(toggle);
      expect(handleChange).not.toHaveBeenCalled();
    });

    it('can be focused', async () => {
      const user = userEvent.setup();
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');

      await user.tab();
      expect(toggle).toHaveFocus();
    });

    it('can be toggled with space key', async () => {
      const user = userEvent.setup();
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;

      await user.tab();
      expect(toggle).toHaveFocus();

      await user.keyboard(' ');
      expect(toggle.checked).toBe(true);
    });
  });

  describe('Attributes', () => {
    it('accepts custom id', () => {
      render(<Toggle id="custom-toggle" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('id', 'custom-toggle');
    });

    it('auto-generates id from label', () => {
      render(<Toggle label="Enable Feature" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('id', 'toggle-enable-feature');
    });

    it('accepts name attribute', () => {
      render(<Toggle name="settings" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('name', 'settings');
    });

    it('accepts value attribute', () => {
      render(<Toggle value="enabled" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('value', 'enabled');
    });

    it('accepts aria-label', () => {
      render(<Toggle aria-label="Toggle setting" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('aria-label', 'Toggle setting');
    });

    it('accepts aria-labelledby', () => {
      render(<Toggle aria-labelledby="toggle-label" data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('aria-labelledby', 'toggle-label');
    });

    it('has role="switch" for accessibility', () => {
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('role', 'switch');
    });
  });

  describe('Icons', () => {
    it('applies toggle-icon class when showIcon is true', () => {
      const { container } = render(<Toggle label="Test" showIcon />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('toggle-icon');
    });

    it('does not apply toggle-icon class by default', () => {
      const { container } = render(<Toggle label="Test" />);
      const label = container.querySelector('label');
      expect(label).not.toHaveClass('toggle-icon');
    });

    it('renders checkedIcon when provided', () => {
      render(<Toggle label="Test" checkedIcon={<span>✓</span>} checked />);
      expect(screen.getByText('✓')).toBeInTheDocument();
    });

    it('renders uncheckedIcon when provided', () => {
      render(<Toggle label="Test" uncheckedIcon={<span>✗</span>} />);
      expect(screen.getByText('✗')).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts wrapperClassName', () => {
      const { container } = render(<Toggle label="Test" wrapperClassName="custom-wrapper" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('custom-wrapper');
    });

    it('accepts className for input', () => {
      render(<Toggle data-testid="test-toggle" className="custom-input" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveClass('custom-input');
    });

    it('merges wrapperClassName with default classes', () => {
      const { container } = render(<Toggle label="Test" wrapperClassName="my-class" variant="secondary" />);
      const label = container.querySelector('label');
      expect(label).toHaveClass('aegov-toggle');
      expect(label).toHaveClass('toggle-secondary');
      expect(label).toHaveClass('my-class');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = { current: null as HTMLInputElement | null };
      render(<Toggle ref={ref} data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(ref.current).toBe(toggle);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA role', () => {
      render(<Toggle data-testid="test-toggle" />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('role', 'switch');
    });

    it('applies aria-checked attribute based on checked state', () => {
      const { rerender } = render(<Toggle data-testid="test-toggle" checked={false} />);
      const toggle = screen.getByTestId('test-toggle');
      expect(toggle).toHaveAttribute('aria-checked', 'false');

      rerender(<Toggle data-testid="test-toggle" checked={true} />);
      expect(toggle).toHaveAttribute('aria-checked', 'true');
    });

    it('links label to input via htmlFor', () => {
      render(<Toggle label="Enable feature" />);
      const toggle = screen.getByRole('switch');
      const label = screen.getByText('Enable feature');
      expect(label.closest('label')).toHaveAttribute('for', toggle.id);
    });

    it('provides screen reader accessible label text', () => {
      render(<Toggle label="Dark mode" />);
      expect(screen.getByText('Dark mode')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('handles controlled component pattern', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      const { rerender } = render(<Toggle data-testid="test-toggle" checked={false} onCheckedChange={handleChange} />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;

      expect(toggle.checked).toBe(false);
      await user.click(toggle);
      expect(handleChange).toHaveBeenCalledWith(true);

      // Simulate parent updating state
      rerender(<Toggle data-testid="test-toggle" checked={true} onCheckedChange={handleChange} />);
      expect(toggle.checked).toBe(true);
    });

    it('handles rapid toggle clicks', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Toggle data-testid="test-toggle" onCheckedChange={handleChange} />);
      const toggle = screen.getByTestId('test-toggle');

      await user.click(toggle);
      await user.click(toggle);
      await user.click(toggle);

      expect(handleChange).toHaveBeenCalledTimes(3);
      expect(handleChange).toHaveBeenNthCalledWith(1, true);
      expect(handleChange).toHaveBeenNthCalledWith(2, false);
      expect(handleChange).toHaveBeenNthCalledWith(3, true);
    });

    it('renders without errors when no props are provided', () => {
      expect(() => render(<Toggle />)).not.toThrow();
    });

    it('works with defaultChecked for uncontrolled component', () => {
      render(<Toggle data-testid="test-toggle" defaultChecked />);
      const toggle = screen.getByTestId('test-toggle') as HTMLInputElement;
      expect(toggle.checked).toBe(true);
    });
  });
});
