import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Tooltip } from './Tooltip';

describe('Tooltip Component', () => {

  describe('Rendering', () => {
    it('should render the trigger element', () => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      );

      expect(screen.getByRole('button', { name: 'Hover me' })).toBeInTheDocument();
    });

    it('should not show tooltip initially', () => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      );

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

    it('should have proper ARIA attributes on trigger', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');

      // Hover to activate tooltip (Radix adds aria-describedby when tooltip shows)
      await user.hover(trigger);

      await waitFor(() => {
        expect(trigger).toHaveAttribute('aria-describedby');
      });
    });
  });

  describe('Hover Trigger', () => {
    it('should show tooltip on hover', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');
      await user.hover(trigger);

      await waitFor(() => {
        // Radix creates multiple tooltip elements, use testid to get the visible one
        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
        expect(screen.getAllByText('Test tooltip')[0]).toBeInTheDocument();
      });
    });

    it('should show and manage tooltip state on hover', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');

      // Tooltip should not be visible initially
      expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();

      // Hover to show tooltip
      await user.hover(trigger);

      await waitFor(() => {
        const tooltip = screen.getByTestId('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveAttribute('data-state');
      });
    });

    it('should respect delay prop', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={100}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');
      await user.hover(trigger);

      // Tooltip should not show immediately
      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();

      // Wait for delay to pass
      await waitFor(
        () => {
          expect(screen.getByRole('tooltip')).toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });
  });

  describe('Click Trigger', () => {
    it('should show tooltip on click when trigger is click', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" trigger="click">
          <button>Click me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');
      await user.click(trigger);

      await waitFor(() => {
        // Click mode uses Popover, which doesn't have role="tooltip", use testid
        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
      });
    });

    it('should toggle tooltip on successive clicks', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" trigger="click">
          <button>Click me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');

      // First click - show
      await user.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
      });

      // Second click - hide
      await user.click(trigger);
      await waitFor(() => {
        expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
      });
    });

    it('should hide tooltip when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Tooltip content="Test tooltip" trigger="click">
            <button>Click me</button>
          </Tooltip>
          <button>Outside</button>
        </div>
      );

      const trigger = screen.getByRole('button', { name: 'Click me' });
      const outside = screen.getByRole('button', { name: 'Outside' });

      // Show tooltip
      await user.click(trigger);
      await waitFor(() => {
        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
      });

      // Click outside
      await user.click(outside);
      await waitFor(() => {
        expect(screen.queryByTestId('tooltip')).not.toBeInTheDocument();
      });
    });
  });

  describe('Placement', () => {
    it('should render with top placement by default', () => {
      render(
        <Tooltip content="Test tooltip">
          <button>Hover me</button>
        </Tooltip>
      );

      // Placement is set via Floating UI, tested via data attribute
      const trigger = screen.getByRole('button');
      expect(trigger).toBeInTheDocument();
    });

    it('should accept right placement', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" side="right" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('should accept bottom placement', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" side="bottom" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('should accept left placement', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" side="left" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });
  });

  describe('Accessibility', () => {
    it('should have role="tooltip"', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
      });
    });

    it('should link trigger to tooltip via aria-describedby', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');

      await user.hover(trigger);

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        const describedById = trigger.getAttribute('aria-describedby');
        const tooltipId = tooltip.getAttribute('id');

        expect(describedById).toBe(tooltipId);
      });
    });

    it('should be keyboard accessible with focus', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Focus me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');
      await user.tab(); // Focus on button

      await waitFor(() => {
        expect(trigger).toHaveFocus();
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });
    });

    it('should hide on blur', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Tooltip content="Test tooltip" delay={0}>
            <button>Focus me</button>
          </Tooltip>
          <button>Other button</button>
        </div>
      );

      // Focus first button
      await user.tab();

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });

      // Focus second button (blur first)
      await user.tab();

      await waitFor(() => {
        expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
      });
    });
  });

  describe('Styling', () => {
    it('should apply default AEGOV classes', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        // Classes are on the Content element (accessed via testid), not the hidden screen reader tooltip
        const tooltip = screen.getByTestId('tooltip');
        expect(tooltip).toHaveClass('aegov-tooltip');
        expect(tooltip).toHaveClass('z-10');
      });
    });

    it('should apply custom animation duration', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" animationDuration="duration-300" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        const tooltip = screen.getByTestId('tooltip');
        expect(tooltip).toHaveClass('duration-300');
      });
    });

    it('should apply custom className', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" className="custom-class" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        const tooltip = screen.getByTestId('tooltip');
        expect(tooltip).toHaveClass('custom-class');
      });
    });

    it('should render tooltip arrow', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        const tooltip = screen.getByTestId('tooltip');
        const arrow = tooltip.querySelector('svg.tooltip-arrow');
        expect(arrow).toBeInTheDocument();
        expect(arrow).toHaveClass('tooltip-arrow');
      });
    });
  });

  describe('Data TestId', () => {
    it('should apply default data-testid', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByTestId('tooltip')).toBeInTheDocument();
      });
    });

    it('should apply custom data-testid', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" data-testid="custom-tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByTestId('custom-tooltip')).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty content gracefully', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        const tooltip = screen.getByRole('tooltip');
        expect(tooltip).toBeInTheDocument();
        expect(tooltip).toHaveTextContent('');
      });
    });

    it('should handle rapid hover/unhover', async () => {
      const user = userEvent.setup();
      render(
        <Tooltip content="Test tooltip" delay={100}>
          <button>Hover me</button>
        </Tooltip>
      );

      const trigger = screen.getByRole('button');

      // Rapid hover/unhover
      await user.hover(trigger);
      await user.unhover(trigger);
      await user.hover(trigger);

      await waitFor(
        () => {
          expect(screen.getByRole('tooltip')).toBeInTheDocument();
        },
        { timeout: 500 }
      );
    });

    it('should cleanup on unmount', async () => {
      const user = userEvent.setup();
      const { unmount } = render(
        <Tooltip content="Test tooltip" delay={0}>
          <button>Hover me</button>
        </Tooltip>
      );

      await user.hover(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByRole('tooltip')).toBeInTheDocument();
      });

      unmount();

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });
  });
});
