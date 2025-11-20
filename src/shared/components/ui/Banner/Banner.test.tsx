import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Banner } from './Banner';

describe('Banner', () => {
  describe('Rendering', () => {
    it('should render with children content', () => {
      render(<Banner data-testid="banner">Important announcement</Banner>);

      const banner = screen.getByTestId('banner');
      expect(banner).toBeInTheDocument();
      expect(banner).toHaveTextContent('Important announcement');
    });

    it('should render with default classes', () => {
      render(<Banner data-testid="banner">Content</Banner>);

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('aegov-banner');
    });

    it('should render with title', () => {
      render(
        <Banner title="Notice" data-testid="banner">
          Content here
        </Banner>
      );

      expect(screen.getByText('Notice')).toBeInTheDocument();
    });
  });

  describe('Position Variants', () => {
    it('should render with top position by default', () => {
      render(<Banner data-testid="banner">Content</Banner>);

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('banner-top');
    });

    it('should render with top position', () => {
      render(
        <Banner position="top" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('banner-top');
    });

    it('should render with bottom position', () => {
      render(
        <Banner position="bottom" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('banner-bottom');
    });
  });

  describe('Color Variants', () => {
    it('should render default variant', () => {
      render(
        <Banner variant="default" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('aegov-banner');
    });

    it('should render camel variant', () => {
      render(
        <Banner variant="camel" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('bg-camel-600');
    });

    it('should render red variant', () => {
      render(
        <Banner variant="red" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('bg-aered-50');
    });

    it('should render dark variant', () => {
      render(
        <Banner variant="dark" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('bg-slate-700');
    });

    it('should render notice variant', () => {
      render(
        <Banner variant="notice" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('banner-notice');
    });
  });

  describe('Dismissible', () => {
    it('should not show dismiss button by default', () => {
      render(<Banner data-testid="banner">Content</Banner>);

      const closeButton = screen.queryByRole('button', { name: /close/i });
      expect(closeButton).not.toBeInTheDocument();
    });

    it('should show dismiss button when isDismissible is true', () => {
      render(
        <Banner isDismissible data-testid="banner">
          Content
        </Banner>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toBeInTheDocument();
    });

    it('should call onDismiss when dismiss button is clicked', () => {
      const onDismiss = vi.fn();
      render(
        <Banner isDismissible onDismiss={onDismiss} data-testid="banner">
          Content
        </Banner>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      fireEvent.click(closeButton);

      expect(onDismiss).toHaveBeenCalledTimes(1);
    });

    it('should have aria-label on dismiss button', () => {
      render(
        <Banner isDismissible data-testid="banner">
          Content
        </Banner>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      expect(closeButton).toHaveAttribute('aria-label', 'Close');
    });
  });

  describe('Action Button', () => {
    it('should render action button when action prop is provided', () => {
      const action = {
        text: 'Learn More',
        onClick: vi.fn(),
      };

      render(
        <Banner action={action} data-testid="banner">
          Content
        </Banner>
      );

      const actionButton = screen.getByRole('button', { name: 'Learn More' });
      expect(actionButton).toBeInTheDocument();
    });

    it('should call action onClick when action button is clicked', () => {
      const onClick = vi.fn();
      const action = {
        text: 'Subscribe',
        onClick,
      };

      render(
        <Banner action={action} data-testid="banner">
          Content
        </Banner>
      );

      const actionButton = screen.getByRole('button', { name: 'Subscribe' });
      fireEvent.click(actionButton);

      expect(onClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Centered', () => {
    it('should not be centered by default', () => {
      render(<Banner data-testid="banner">Content</Banner>);

      const content = screen.getByTestId('banner').querySelector('.banner-content');
      expect(content).not.toHaveClass('justify-center');
    });

    it('should center content when centered is true', () => {
      render(
        <Banner centered data-testid="banner">
          Content
        </Banner>
      );

      const content = screen.getByTestId('banner').querySelector('.banner-content');
      expect(content).toHaveClass('md:justify-center');
    });
  });

  describe('Accessibility', () => {
    it('should have role="region" by default', () => {
      render(<Banner data-testid="banner">Content</Banner>);

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveAttribute('role', 'region');
    });

    it('should accept custom role', () => {
      render(
        <Banner role="alert" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveAttribute('role', 'alert');
    });

    it('should have aria-label when provided', () => {
      render(
        <Banner ariaLabel="Important notification" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveAttribute('aria-label', 'Important notification');
    });

    it('should be focusable for keyboard navigation', () => {
      render(
        <Banner isDismissible data-testid="banner">
          Content
        </Banner>
      );

      const closeButton = screen.getByRole('button', { name: /close/i });
      closeButton.focus();
      expect(closeButton).toHaveFocus();
    });
  });

  describe('Custom Classes', () => {
    it('should accept custom className', () => {
      render(
        <Banner className="custom-banner" data-testid="banner">
          Content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('custom-banner');
      expect(banner).toHaveClass('aegov-banner');
    });
  });

  describe('Combinations', () => {
    it('should render with all features together', () => {
      const onDismiss = vi.fn();
      const action = {
        text: 'Take Action',
        onClick: vi.fn(),
      };

      render(
        <Banner
          position="top"
          variant="camel"
          isDismissible
          centered
          title="Important"
          onDismiss={onDismiss}
          action={action}
          ariaLabel="Important banner"
          data-testid="banner"
        >
          Banner content
        </Banner>
      );

      const banner = screen.getByTestId('banner');
      expect(banner).toHaveClass('aegov-banner');
      expect(banner).toHaveClass('banner-top');
      expect(banner).toHaveClass('bg-camel-600');
      expect(banner).toHaveAttribute('aria-label', 'Important banner');

      expect(screen.getByText('Important')).toBeInTheDocument();
      expect(screen.getByText('Banner content')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Take Action' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: /close/i })).toBeInTheDocument();
    });
  });
});
