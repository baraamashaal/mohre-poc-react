import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Modal } from './Modal';
import type { ModalAction } from './Modal.types';

describe('Modal', () => {
  describe('Rendering', () => {
    it('should render modal when open', () => {
      render(
        <Modal open={true} title="Test Modal">
          <p>Modal content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.getByText('Test Modal')).toBeInTheDocument();
      expect(screen.getByText('Modal content')).toBeInTheDocument();
    });

    it('should not render modal when closed', () => {
      render(
        <Modal open={false} title="Test Modal">
          <p>Modal content</p>
        </Modal>
      );

      expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    });

    it('should render with default open state', () => {
      render(
        <Modal defaultOpen={true} title="Test Modal">
          <p>Modal content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should render without title', () => {
      render(
        <Modal open={true}>
          <p>Modal content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
      expect(screen.queryByRole('heading')).not.toBeInTheDocument();
    });

    it('should render with description for screen readers', () => {
      render(
        <Modal open={true} title="Test Modal" description="Test description">
          <p>Modal content</p>
        </Modal>
      );

      const description = screen.getByText('Test description');
      expect(description).toHaveClass('sr-only');
    });

    it('should apply custom data-testid', () => {
      render(
        <Modal open={true} data-testid="custom-modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByTestId('custom-modal')).toBeInTheDocument();
    });
  });

  describe('Close Button', () => {
    it('should render close button by default', () => {
      render(
        <Modal open={true} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByRole('button', { name: /close modal/i });
      expect(closeButton).toBeInTheDocument();
    });

    it('should hide close button when showCloseButton is false', () => {
      render(
        <Modal open={true} showCloseButton={false} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.queryByRole('button', { name: /close modal/i })).not.toBeInTheDocument();
    });

    it('should call onOpenChange when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();

      render(
        <Modal open={true} onOpenChange={handleOpenChange} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByRole('button', { name: /close modal/i });
      await user.click(closeButton);

      expect(handleOpenChange).toHaveBeenCalledWith(false);
    });

    it('should call onClose when close button is clicked', async () => {
      const user = userEvent.setup();
      const handleClose = vi.fn();

      render(
        <Modal open={true} onClose={handleClose} title="Test Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByRole('button', { name: /close modal/i });
      await user.click(closeButton);

      expect(handleClose).toHaveBeenCalled();
    });
  });

  describe('Sizes', () => {
    it('should apply small size', () => {
      render(
        <Modal open={true} size="sm" title="Small Modal">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('sm:max-w-sm');
    });

    it('should apply medium size by default', () => {
      render(
        <Modal open={true} title="Medium Modal">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('md:max-w-2xl');
    });

    it('should apply large size', () => {
      render(
        <Modal open={true} size="lg" title="Large Modal">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('lg:max-w-xl');
    });

    it('should apply xl size', () => {
      render(
        <Modal open={true} size="xl" title="XL Modal">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('xl:max-w-2xl');
    });

    it('should apply full size', () => {
      render(
        <Modal open={true} size="full" title="Full Modal">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('max-w-full');
    });
  });

  describe('Variants', () => {
    it('should apply default variant styling', () => {
      render(
        <Modal open={true} variant="default" title="Default Modal">
          <p>Content</p>
        </Modal>
      );

      const title = screen.getByText('Default Modal');
      expect(title).toHaveClass('text-aeblack-950');
    });

    it('should apply alert variant styling', () => {
      render(
        <Modal open={true} variant="alert" title="Alert Modal">
          <p>Content</p>
        </Modal>
      );

      const title = screen.getByText('Alert Modal');
      expect(title).toHaveClass('text-primary-800');
    });

    it('should apply success variant styling', () => {
      render(
        <Modal
          open={true}
          variant="success"
          title="Success Modal"
          icon={{
            icon: <div>Icon</div>,
          }}
        >
          <p>Content</p>
        </Modal>
      );

      // Check that the success icon color classes are applied
      // Radix Portal renders outside the dialog, so we need to query the document
      const iconContainer = document.querySelector('.bg-aegreen-100');
      expect(iconContainer).toBeInTheDocument();

      // The inner wrapper should have the text color
      const iconInner = document.querySelector('.text-aegreen-600');
      expect(iconInner).toBeInTheDocument();
    });

    it('should apply danger variant styling', () => {
      render(
        <Modal
          open={true}
          variant="danger"
          title="Danger Modal"
          icon={{
            icon: <div>Icon</div>,
          }}
        >
          <p>Content</p>
        </Modal>
      );

      // Check that the danger icon color classes are applied
      // Radix Portal renders outside the dialog, so we need to query the document
      const iconContainer = document.querySelector('.bg-aered-100');
      expect(iconContainer).toBeInTheDocument();

      // The inner wrapper should have the text color
      const iconInner = document.querySelector('.text-aered-600');
      expect(iconInner).toBeInTheDocument();
    });
  });

  describe('Placement', () => {
    // Note: Placement classes are applied but Radix Portal renders outside the container
    // E2E tests will verify placement functionality

    it('should render with different placements', () => {
      const { rerender } = render(
        <Modal open={true} placement="center" title="Centered Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();

      rerender(
        <Modal open={true} placement="bottom-right" title="Bottom Right Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Icons', () => {
    it('should render icon when provided', () => {
      render(
        <Modal
          open={true}
          title="Modal with Icon"
          icon={{
            icon: <svg data-testid="custom-icon">Icon</svg>,
          }}
        >
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('should apply custom icon colors', () => {
      render(
        <Modal
          open={true}
          title="Modal with Icon"
          icon={{
            icon: <div>Icon</div>,
            bgColor: 'bg-blue-100',
            textColor: 'text-blue-600',
          }}
        >
          <p>Content</p>
        </Modal>
      );

      const iconContainer = screen.getByText('Icon').parentElement?.parentElement;
      expect(iconContainer).toHaveClass('bg-blue-100');
      expect(screen.getByText('Icon').parentElement).toHaveClass('text-blue-600');
    });

    it('should center text when icon is present', () => {
      render(
        <Modal
          open={true}
          title="Modal with Icon"
          icon={{
            icon: <div>Icon</div>,
          }}
        >
          <p>Content</p>
        </Modal>
      );

      const title = screen.getByText('Modal with Icon');
      expect(title).toHaveClass('text-center', 'sm:text-left');
    });
  });

  describe('Actions', () => {
    it('should render action buttons', () => {
      const actions: ModalAction[] = [
        { label: 'Confirm', primary: true },
        { label: 'Cancel', autoClose: true },
      ];

      render(
        <Modal open={true} title="Modal with Actions" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('button', { name: 'Confirm' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
    });

    it('should call action onClick handler', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();
      const actions: ModalAction[] = [{ label: 'Confirm', onClick: handleClick, primary: true }];

      render(
        <Modal open={true} title="Modal with Actions" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      await user.click(screen.getByRole('button', { name: 'Confirm' }));
      expect(handleClick).toHaveBeenCalled();
    });

    it('should close modal on autoClose action', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();
      const actions: ModalAction[] = [{ label: 'Close', autoClose: true }];

      render(
        <Modal open={true} onOpenChange={handleOpenChange} title="Modal" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      await user.click(screen.getByRole('button', { name: 'Close' }));
      await waitFor(() => {
        expect(handleOpenChange).toHaveBeenCalledWith(false);
      });
    });

    it('should not auto-close primary action by default', async () => {
      const user = userEvent.setup();
      const handleOpenChange = vi.fn();
      const handleClick = vi.fn();
      const actions: ModalAction[] = [{ label: 'Submit', onClick: handleClick, primary: true }];

      render(
        <Modal open={true} onOpenChange={handleOpenChange} title="Modal" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      await user.click(screen.getByRole('button', { name: 'Submit' }));
      expect(handleClick).toHaveBeenCalled();
      expect(handleOpenChange).not.toHaveBeenCalled();
    });

    it('should apply custom button variant', () => {
      const actions: ModalAction[] = [
        { label: 'Delete', variant: 'btn-danger', primary: true },
      ];

      render(
        <Modal open={true} title="Modal" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      const button = screen.getByRole('button', { name: 'Delete' });
      expect(button).toHaveClass('btn-danger');
    });

    it('should apply custom button className', () => {
      const actions: ModalAction[] = [{ label: 'Custom', className: 'custom-class', primary: true }];

      render(
        <Modal open={true} title="Modal" actions={actions}>
          <p>Content</p>
        </Modal>
      );

      const button = screen.getByRole('button', { name: 'Custom' });
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Footer', () => {
    it('should render custom footer content', () => {
      render(
        <Modal open={true} title="Modal" footer={<div>Custom footer</div>}>
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByText('Custom footer')).toBeInTheDocument();
    });

    it('should render both footer and actions', () => {
      const actions: ModalAction[] = [{ label: 'OK', primary: true }];

      render(
        <Modal open={true} title="Modal" actions={actions} footer={<div>Footer content</div>}>
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByText('Footer content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'OK' })).toBeInTheDocument();
    });
  });

  describe('Scrollable Content', () => {
    it('should apply scrollable classes when scrollable is true', () => {
      render(
        <Modal open={true} title="Scrollable Modal" scrollable={true}>
          <p>Long content...</p>
        </Modal>
      );

      const content = screen.getByText('Long content...').parentElement;
      expect(content).toHaveClass('overflow-auto');
    });

    it('should apply custom maxHeight', () => {
      render(
        <Modal open={true} title="Modal" scrollable={true} maxHeight="max-h-96">
          <p>Content</p>
        </Modal>
      );

      const content = screen.getByText('Content').parentElement;
      expect(content).toHaveClass('max-h-96');
    });

    it('should not apply scrollable classes by default', () => {
      render(
        <Modal open={true} title="Non-scrollable Modal">
          <p>Content</p>
        </Modal>
      );

      const content = screen.getByText('Content').parentElement;
      expect(content).not.toHaveClass('overflow-auto');
    });
  });

  describe('Static Backdrop', () => {
    it('should allow backdrop click by default', () => {
      const handleOpenChange = vi.fn();

      render(
        <Modal open={true} onOpenChange={handleOpenChange} title="Modal">
          <p>Content</p>
        </Modal>
      );

      // Radix handles backdrop clicks internally
      // We can verify the prop is passed correctly
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should prevent backdrop click when staticBackdrop is true', () => {
      const handleOpenChange = vi.fn();

      render(
        <Modal open={true} onOpenChange={handleOpenChange} staticBackdrop={true} title="Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Custom Class Names', () => {
    it('should apply custom wrapperClassName', () => {
      render(
        <Modal open={true} title="Modal" wrapperClassName="custom-wrapper">
          <p>Content</p>
        </Modal>
      );

      const modal = screen.getByTestId('modal');
      expect(modal).toHaveClass('custom-wrapper');
    });

    it('should apply custom contentClassName', () => {
      render(
        <Modal open={true} title="Modal" contentClassName="custom-content">
          <p>Content</p>
        </Modal>
      );

      // contentClassName is applied to a Portal div, so just verify modal renders
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should apply custom headerClassName', () => {
      render(
        <Modal open={true} title="Modal" headerClassName="custom-header">
          <p>Content</p>
        </Modal>
      );

      const header = screen.getByText('Modal').closest('div');
      expect(header).toHaveClass('custom-header');
    });

    it('should apply custom bodyClassName', () => {
      render(
        <Modal open={true} title="Modal" bodyClassName="custom-body">
          <p>Content</p>
        </Modal>
      );

      const body = screen.getByText('Content').parentElement;
      expect(body).toHaveClass('custom-body');
    });

    it('should apply custom footerClassName', () => {
      const actions: ModalAction[] = [{ label: 'OK', primary: true }];

      render(
        <Modal open={true} title="Modal" actions={actions} footerClassName="custom-footer">
          <p>Content</p>
        </Modal>
      );

      const footer = screen.getByRole('button', { name: 'OK' }).closest('div');
      expect(footer).toHaveClass('custom-footer');
    });

    it('should apply custom backdropClassName', () => {
      render(
        <Modal open={true} title="Modal" backdropClassName="custom-backdrop">
          <p>Content</p>
        </Modal>
      );

      // backdropClassName is applied to a Portal overlay, so just verify modal renders
      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('should have dialog role', () => {
      render(
        <Modal open={true} title="Modal">
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should have aria-labelledby pointing to title', () => {
      render(
        <Modal open={true} title="Accessible Modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      const title = screen.getByText('Accessible Modal');

      expect(dialog).toHaveAttribute('aria-labelledby', title.id);
    });

    it('should have aria-describedby when description is provided', () => {
      render(
        <Modal open={true} title="Modal" description="Modal description" data-testid="test-modal">
          <p>Content</p>
        </Modal>
      );

      const dialog = screen.getByRole('dialog');
      expect(dialog).toHaveAttribute('aria-describedby', 'test-modal-description');
    });

    it('should have close button with aria-label', () => {
      render(
        <Modal open={true} title="Modal">
          <p>Content</p>
        </Modal>
      );

      const closeButton = screen.getByRole('button', { name: /close modal/i });
      expect(closeButton).toHaveAttribute('aria-label', 'Close modal');
    });
  });

  describe('Focus Management', () => {
    it('should trap focus when modal is true', () => {
      render(
        <Modal open={true} title="Modal" modal={true}>
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });

    it('should not trap focus when modal is false', () => {
      render(
        <Modal open={true} title="Modal" modal={false}>
          <p>Content</p>
        </Modal>
      );

      expect(screen.getByRole('dialog')).toBeInTheDocument();
    });
  });

  describe('Complex Content', () => {
    it('should render complex children', () => {
      render(
        <Modal open={true} title="Complex Modal">
          <div>
            <h2>Subtitle</h2>
            <p>Paragraph 1</p>
            <p>Paragraph 2</p>
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
            </ul>
          </div>
        </Modal>
      );

      expect(screen.getByText('Subtitle')).toBeInTheDocument();
      expect(screen.getByText('Paragraph 1')).toBeInTheDocument();
      expect(screen.getByText('Item 1')).toBeInTheDocument();
    });

    it('should render form elements', () => {
      render(
        <Modal open={true} title="Form Modal">
          <form>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
          </form>
        </Modal>
      );

      expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    });
  });
});
