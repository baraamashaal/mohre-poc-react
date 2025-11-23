import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Popover } from './Popover';

describe('Popover', () => {
  describe('Rendering', () => {
    it('should render trigger element', () => {
      render(
        <Popover content="Test content">
          <button>Trigger button</button>
        </Popover>
      );

      expect(screen.getByRole('button', { name: 'Trigger button' })).toBeInTheDocument();
    });

    it('should not show popover content initially', () => {
      render(
        <Popover content="Test content">
          <button>Trigger button</button>
        </Popover>
      );

      expect(screen.queryByText('Test content')).not.toBeInTheDocument();
    });

    it('should show popover content when defaultOpen is true', () => {
      render(
        <Popover content="Test content" defaultOpen>
          <button>Trigger button</button>
        </Popover>
      );

      expect(screen.getByText('Test content')).toBeInTheDocument();
    });

    it('should have displayName set', () => {
      expect(Popover.displayName).toBe('Popover');
    });
  });

  describe('Default Variant (with header)', () => {
    it('should render header with title in default variant', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Popover title" content="Test content" variant="default">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('Popover title')).toBeInTheDocument();
      });
    });

    it('should render content in body', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Title" content="Body content" variant="default">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('Body content')).toBeInTheDocument();
      });
    });

    it('should wrap string content in paragraph', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Title" content="Test content">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        const paragraph = screen.getByText('Test content');
        expect(paragraph.tagName).toBe('P');
        expect(paragraph).toHaveClass('mb-0');
      });
    });

    it('should apply header styles', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Title" content="Content">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        const header = screen.getByText('Title').closest('.popover-header');
        expect(header).toHaveClass('bg-aeblack-50');
        expect(header).toHaveClass('px-3');
        expect(header).toHaveClass('py-2');
      });
    });
  });

  describe('Flexible Variant (body only)', () => {
    it('should not render header in flexible variant', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Title" content="Body content" variant="flexible">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.queryByText('Title')).not.toBeInTheDocument();
        expect(screen.getByText('Body content')).toBeInTheDocument();
      });
    });

    it('should render only body content', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Flexible content" variant="flexible">
          <button>Open popover</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('Flexible content')).toBeInTheDocument();
      });
    });
  });

  describe('Click Interaction', () => {
    it('should open popover on click', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Click content">
          <button>Click me</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));

      await waitFor(() => {
        expect(screen.getByText('Click content')).toBeInTheDocument();
      });
    });

    it('should close popover on second click', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Toggle content">
          <button>Toggle</button>
        </Popover>
      );

      const button = screen.getByRole('button');

      // Open
      await user.click(button);
      await waitFor(() => {
        expect(screen.getByText('Toggle content')).toBeInTheDocument();
      });

      // Close
      await user.click(button);
      await waitFor(() => {
        expect(screen.queryByText('Toggle content')).not.toBeInTheDocument();
      });
    });

    it('should close popover when clicking outside', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Popover content="Click outside content">
            <button>Open</button>
          </Popover>
          <button>Outside button</button>
        </div>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await waitFor(() => {
        expect(screen.getByText('Click outside content')).toBeInTheDocument();
      });

      await user.click(screen.getByRole('button', { name: 'Outside button' }));
      await waitFor(() => {
        expect(screen.queryByText('Click outside content')).not.toBeInTheDocument();
      });
    });
  });

  describe('Keyboard Interaction', () => {
    it('should close popover on Escape key', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Escape to close">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('Escape to close')).toBeInTheDocument();
      });

      await user.keyboard('{Escape}');
      await waitFor(() => {
        expect(screen.queryByText('Escape to close')).not.toBeInTheDocument();
      });
    });

    it('should be keyboard accessible via Tab', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Keyboard accessible">
          <button>Tab to me</button>
        </Popover>
      );

      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();

      await user.keyboard('{Enter}');
      await waitFor(() => {
        expect(screen.getByText('Keyboard accessible')).toBeInTheDocument();
      });
    });
  });

  describe('Controlled Mode', () => {
    it('should work in controlled mode with open prop', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();
      const { rerender } = render(
        <Popover content="Controlled" open={false} onOpenChange={handleOpenChange}>
          <button>Controlled button</button>
        </Popover>
      );

      expect(screen.queryByText('Controlled')).not.toBeInTheDocument();

      await user.click(screen.getByRole('button'));
      expect(handleOpenChange).toHaveBeenCalledWith(true);

      rerender(
        <Popover content="Controlled" open={true} onOpenChange={handleOpenChange}>
          <button>Controlled button</button>
        </Popover>
      );

      expect(screen.getByText('Controlled')).toBeInTheDocument();
    });

    it('should call onOpenChange when opening', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();
      render(
        <Popover content="Test" onOpenChange={handleOpenChange}>
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(true);
      });
    });

    it('should call onOpenChange when closing', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();
      render(
        <Popover content="Test" onOpenChange={handleOpenChange}>
          <button>Toggle</button>
        </Popover>
      );

      const button = screen.getByRole('button');
      await user.click(button);
      await user.click(button);

      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });
  });

  describe('Content Types', () => {
    it('should render string content', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="String content">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('String content')).toBeInTheDocument();
      });
    });

    it('should render JSX content', async () => {
      const user = userEvent.setup();
      render(
        <Popover
          content={
            <div>
              <p>Paragraph 1</p>
              <p>Paragraph 2</p>
            </div>
          }
        >
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
        expect(screen.getByText('Paragraph 2')).toBeInTheDocument();
      });
    });

    it('should render content with links and images', async () => {
      const user = userEvent.setup();
      render(
        <Popover
          content={
            <div>
              <a href="#test">Test link</a>
              <img src="test.jpg" alt="Test image" />
            </div>
          }
        >
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByRole('link', { name: 'Test link' })).toBeInTheDocument();
        expect(screen.getByAltText('Test image')).toBeInTheDocument();
      });
    });
  });

  describe('Styling and Classes', () => {
    it('should apply default width class', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Width test" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('w-64');
      });
    });

    it('should apply custom width class', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Custom width" width="w-96" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('w-96');
      });
    });

    it('should apply aegov-popover class', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="AEGOV class" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('aegov-popover');
      });
    });

    it('should apply custom className', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Custom class" className="custom-class" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('custom-class');
      });
    });

    it('should apply custom header className', async () => {
      const user = userEvent.setup();
      render(
        <Popover title="Title" content="Content" headerClassName="custom-header">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const header = screen.getByText('Title').closest('.popover-header');
        expect(header).toHaveClass('custom-header');
      });
    });

    it('should apply custom body className', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Content" bodyClassName="custom-body">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const body = screen.getByText('Content').closest('.popover-body');
        expect(body).toHaveClass('custom-body');
      });
    });

    it('should apply default animation duration', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Animation" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('duration-200');
      });
    });

    it('should apply custom animation duration', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Custom animation" animationDuration="duration-500" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveClass('duration-500');
      });
    });

    it('should have body styling classes', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Body styles">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const body = screen.getByText('Body styles').closest('.popover-body');
        expect(body).toHaveClass('px-3');
        expect(body).toHaveClass('py-2');
        expect(body).toHaveClass('text-aeblack-600');
      });
    });
  });

  describe('ARIA and Accessibility', () => {
    it('should have role="tooltip"', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="ARIA test" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button', { name: 'Open' }));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toHaveAttribute('role', 'tooltip');
      });
    });

    it('should use asChild for trigger to preserve button semantics', () => {
      render(
        <Popover content="Trigger test">
          <button aria-label="Custom trigger">Click</button>
        </Popover>
      );

      expect(screen.getByRole('button', { name: 'Custom trigger' })).toBeInTheDocument();
    });

    it('should be accessible via keyboard navigation', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <button>Before</button>
          <Popover content="Keyboard nav">
            <button>Popover trigger</button>
          </Popover>
          <button>After</button>
        </div>
      );

      await user.tab();
      expect(screen.getByRole('button', { name: 'Before' })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: 'Popover trigger' })).toHaveFocus();

      await user.tab();
      expect(screen.getByRole('button', { name: 'After' })).toHaveFocus();
    });
  });

  describe('Arrow', () => {
    it('should render arrow by default', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Arrow test" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const popover = screen.getByTestId('popover');
        const arrow = popover.querySelector('svg');
        expect(arrow).toBeInTheDocument();
      });
    });

    it('should not render arrow when showArrow is false', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="No arrow" showArrow={false} data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        const popover = screen.getByTestId('popover');
        const arrow = popover.querySelector('svg');
        expect(arrow).not.toBeInTheDocument();
      });
    });
  });

  describe('Placement', () => {
    it('should support top placement (default)', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Top placement" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      });
    });

    it('should support right placement', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Right placement" side="right" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      });
    });

    it('should support bottom placement', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Bottom placement" side="bottom" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      });
    });

    it('should support left placement', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="Left placement" side="left" data-testid="popover">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      });
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty content gracefully', async () => {
      const user = userEvent.setup();
      render(
        <Popover content="">
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        expect(screen.getByTestId('popover')).toBeInTheDocument();
      });
    });

    it('should handle very long content', async () => {
      const user = userEvent.setup();
      const longContent = 'Lorem ipsum '.repeat(100);
      render(
        <Popover content={longContent}>
          <button>Open</button>
        </Popover>
      );

      await user.click(screen.getByRole('button'));
      await waitFor(() => {
        // Content is wrapped in paragraph, so use substring match
        expect(screen.getByText(/Lorem ipsum Lorem ipsum/)).toBeInTheDocument();
      });
    });

    it('should handle multiple popovers on same page', async () => {
      const user = userEvent.setup();
      render(
        <div>
          <Popover content="First popover">
            <button>First</button>
          </Popover>
          <Popover content="Second popover">
            <button>Second</button>
          </Popover>
        </div>
      );

      await user.click(screen.getByRole('button', { name: 'First' }));
      await waitFor(() => {
        expect(screen.getByText('First popover')).toBeInTheDocument();
      });

      await user.click(screen.getByRole('button', { name: 'Second' }));
      await waitFor(() => {
        expect(screen.queryByText('First popover')).not.toBeInTheDocument();
        expect(screen.getByText('Second popover')).toBeInTheDocument();
      });
    });
  });
});
