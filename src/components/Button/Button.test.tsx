import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@test/utils';
import { Button } from './Button';

describe('Button Component', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });

      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('aegov-btn');
    });

    it('should render children', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByText('Test Button')).toBeInTheDocument();
    });

    it('should render with complex children', () => {
      render(
        <Button>
          <span>Complex</span> content
        </Button>
      );
      expect(screen.getByText(/complex/i)).toBeInTheDocument();
      expect(screen.getByText(/content/i)).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply solid variant (default)', () => {
      render(<Button variant="solid">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('aegov-btn');
      expect(button).not.toHaveClass('btn-outline', 'btn-soft', 'btn-link');
    });

    it('should apply outline variant', () => {
      render(<Button variant="outline">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-outline');
    });

    it('should apply soft variant', () => {
      render(<Button variant="soft">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-soft');
    });

    it('should apply link variant', () => {
      render(<Button variant="link">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-link');
    });
  });

  describe('Sizes', () => {
    it('should apply base size (default)', () => {
      render(<Button size="base">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('aegov-btn');
      expect(button).not.toHaveClass('btn-xs', 'btn-sm', 'btn-lg');
    });

    it('should apply xs size', () => {
      render(<Button size="xs">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-xs');
    });

    it('should apply sm size', () => {
      render(<Button size="sm">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-sm');
    });

    it('should apply lg size', () => {
      render(<Button size="lg">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-lg');
    });
  });

  describe('Colors', () => {
    it('should apply primary color (default)', () => {
      render(<Button color="primary">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).not.toHaveClass('btn-secondary');
    });

    it('should apply secondary color', () => {
      render(<Button color="secondary">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-secondary');
    });
  });

  describe('States', () => {
    it('should handle disabled state', () => {
      render(<Button disabled>Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
      expect(button).toHaveAttribute('aria-disabled', 'true');
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const { user } = render(
        <Button disabled onClick={handleClick}>
          Button
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });

    it('should show loading state', () => {
      render(<Button loading>Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toBeDisabled();
      expect(screen.getByRole('status')).toBeInTheDocument();
    });

    it('should not call onClick when loading', async () => {
      const handleClick = vi.fn();
      const { user } = render(
        <Button loading onClick={handleClick}>
          Button
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Events', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Button</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('should call onClick with event parameter', async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Button</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledWith(expect.any(Object));
    });
  });

  describe('Button Types', () => {
    it('should have type="button" by default', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should support type="submit"', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('should support type="reset"', () => {
      render(<Button type="reset">Reset</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'reset');
    });
  });

  describe('Icons', () => {
    it('should render with left icon', () => {
      render(
        <Button leftIcon={<span data-testid="left-icon">←</span>}>
          Button
        </Button>
      );

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByText('Button')).toBeInTheDocument();
    });

    it('should render with right icon', () => {
      render(
        <Button rightIcon={<span data-testid="right-icon">→</span>}>
          Button
        </Button>
      );

      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
      expect(screen.getByText('Button')).toBeInTheDocument();
    });

    it('should render with both icons', () => {
      render(
        <Button
          leftIcon={<span data-testid="left-icon">←</span>}
          rightIcon={<span data-testid="right-icon">→</span>}
        >
          Button
        </Button>
      );

      expect(screen.getByTestId('left-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('should render icon-only button', () => {
      render(
        <Button iconOnly aria-label="Search">
          <span data-testid="icon">🔍</span>
        </Button>
      );

      expect(screen.getByTestId('icon')).toBeInTheDocument();
      expect(screen.getByRole('button')).toHaveClass('btn-icon');
    });
  });

  describe('Accessibility', () => {
    it('should be keyboard accessible', async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Button</Button>);

      const button = screen.getByRole('button');
      button.focus();

      expect(button).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });

    it('should support aria-label', () => {
      render(<Button aria-label="Custom label">Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-label', 'Custom label');
    });

    it('should have aria-disabled when disabled', () => {
      render(<Button disabled>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });

    it('should have aria-disabled when loading', () => {
      render(<Button loading>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('aegov-btn');
      expect(button).toHaveClass('custom-class');
    });

    it('should not override default classes', () => {
      render(<Button className="custom-class" variant="outline">Button</Button>);
      const button = screen.getByRole('button');

      expect(button).toHaveClass('aegov-btn', 'btn-outline', 'custom-class');
    });
  });

  describe('Full Width', () => {
    it('should apply full width class', () => {
      render(<Button fullWidth>Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('w-full');
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined children gracefully', () => {
      render(<Button>{undefined}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should handle null children gracefully', () => {
      render(<Button>{null}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should combine all props correctly', () => {
      render(
        <Button
          variant="outline"
          size="lg"
          color="secondary"
          disabled
          className="test-class"
          fullWidth
        >
          Button
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveClass(
        'aegov-btn',
        'btn-outline',
        'btn-lg',
        'btn-secondary',
        'w-full',
        'test-class'
      );
      expect(button).toBeDisabled();
    });

    it('should handle very long text', () => {
      const longText = 'This is a very long button text that might overflow';
      render(<Button>{longText}</Button>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });
  });

  describe('Native Button Props', () => {
    it('should forward native button props', () => {
      render(
        <Button
          id="test-button"
          name="testButton"
          value="testValue"
          data-testid="custom-test-id"
        >
          Button
        </Button>
      );

      const button = screen.getByRole('button');
      expect(button).toHaveAttribute('id', 'test-button');
      expect(button).toHaveAttribute('name', 'testButton');
      expect(button).toHaveAttribute('value', 'testValue');
      expect(button).toHaveAttribute('data-testid', 'custom-test-id');
    });

    it('should support onMouseEnter and onMouseLeave', async () => {
      const handleMouseEnter = vi.fn();
      const handleMouseLeave = vi.fn();
      const { user } = render(
        <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          Button
        </Button>
      );

      const button = screen.getByRole('button');
      await user.hover(button);
      expect(handleMouseEnter).toHaveBeenCalled();

      await user.unhover(button);
      expect(handleMouseLeave).toHaveBeenCalled();
    });
  });
});
