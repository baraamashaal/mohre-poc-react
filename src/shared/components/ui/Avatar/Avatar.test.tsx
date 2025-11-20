import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  describe('Rendering', () => {
    it('should render with image when src is provided', () => {
      render(<Avatar src="/test-avatar.jpg" alt="John Doe" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      const img = avatar.querySelector('img');

      expect(avatar).toBeInTheDocument();
      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('src', '/test-avatar.jpg');
      expect(img).toHaveAttribute('alt', 'John Doe');
    });

    it('should render fallback when no src is provided', () => {
      render(
        <Avatar alt="John Doe" fallback={<span>JD</span>} data-testid="avatar" />
      );

      const avatar = screen.getByTestId('avatar');
      const img = avatar.querySelector('img');

      expect(avatar).toBeInTheDocument();
      expect(screen.getByText('JD')).toBeInTheDocument();
      // AEGOV spec: img with .no-user class
      expect(img).toBeInTheDocument();
      expect(img).toHaveClass('no-user');
    });

    it('should render with default classes', () => {
      render(<Avatar src="/test.jpg" alt="User" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('aegov-avatar');
    });
  });

  describe('Size Variants', () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const;

    sizes.forEach((size) => {
      it(`should render with ${size} size`, () => {
        render(
          <Avatar
            src="/test.jpg"
            alt="User"
            size={size}
            data-testid="avatar"
          />
        );

        const avatar = screen.getByTestId('avatar');
        expect(avatar).toHaveClass(`avatar-${size}`);
      });
    });

    it('should use base as default size', () => {
      render(<Avatar src="/test.jpg" alt="User" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('avatar-base');
    });
  });

  describe('Shape Variants', () => {
    it('should render square variant by default', () => {
      render(<Avatar src="/test.jpg" alt="User" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).not.toHaveClass('avatar-rounded');
    });

    it('should render rounded variant', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          variant="rounded"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('avatar-rounded');
    });

    it('should render square variant explicitly', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          variant="square"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).not.toHaveClass('avatar-rounded');
    });
  });

  describe('Status Indicator', () => {
    it('should not render status indicator by default', () => {
      render(<Avatar src="/test.jpg" alt="User" data-testid="avatar" />);

      const indicator = screen.queryByTestId('avatar-status');
      expect(indicator).not.toBeInTheDocument();
    });

    it('should not render status indicator when status is none', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          status="none"
          data-testid="avatar"
        />
      );

      const indicator = screen.queryByTestId('avatar-status');
      expect(indicator).not.toBeInTheDocument();
    });

    it('should render online status indicator', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          status="online"
          data-testid="avatar"
        />
      );

      const indicator = screen.getByTestId('avatar-status');
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveClass('alert-indicator');
      expect(indicator).toHaveClass('bg-green-500');
    });

    it('should render offline status indicator', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          status="offline"
          data-testid="avatar"
        />
      );

      const indicator = screen.getByTestId('avatar-status');
      expect(indicator).toBeInTheDocument();
      expect(indicator).toHaveClass('alert-indicator');
      expect(indicator).toHaveClass('bg-gray-400');
    });

    it('should have proper accessibility for status indicator', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          status="online"
          data-testid="avatar"
        />
      );

      const indicator = screen.getByTestId('avatar-status');
      expect(indicator).toHaveAttribute('aria-label', 'online');
    });
  });

  describe('Custom Classes', () => {
    it('should accept custom className', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          className="custom-class"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('custom-class');
      expect(avatar).toHaveClass('aegov-avatar');
    });

    it('should merge custom className with default classes', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="User"
          size="lg"
          variant="rounded"
          className="my-avatar"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('aegov-avatar');
      expect(avatar).toHaveClass('avatar-lg');
      expect(avatar).toHaveClass('avatar-rounded');
      expect(avatar).toHaveClass('my-avatar');
    });
  });

  describe('Accessibility', () => {
    it('should have role="img" on container', () => {
      render(<Avatar src="/test.jpg" alt="User" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveAttribute('role', 'img');
    });

    it('should have alt text on image', () => {
      render(<Avatar src="/test.jpg" alt="Profile picture of John Doe" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      const img = avatar.querySelector('img');

      expect(img).toBeInTheDocument();
      expect(img).toHaveAttribute('alt', 'Profile picture of John Doe');
    });

    it('should have aria-label on status indicator', () => {
      render(<Avatar src="/test.jpg" alt="User" status="online" />);

      const indicator = screen.getByTestId('avatar-status');
      expect(indicator).toHaveAttribute('aria-label');
    });
  });

  describe('Fallback Content', () => {
    it('should render text fallback', () => {
      render(<Avatar alt="John Doe" fallback="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveTextContent('JD');
    });

    it('should render ReactNode fallback', () => {
      render(
        <Avatar
          alt="John Doe"
          fallback={<span className="initials">JD</span>}
          data-testid="avatar"
        />
      );

      const initials = screen.getByText('JD');
      expect(initials).toHaveClass('initials');
    });

    it('should add no-user class to img when using fallback', () => {
      render(<Avatar alt="John Doe" fallback="JD" data-testid="avatar" />);

      const avatar = screen.getByTestId('avatar');
      const img = avatar.querySelector('img');

      expect(img).toHaveClass('no-user');
    });
  });

  describe('Combinations', () => {
    it('should render all features together', () => {
      render(
        <Avatar
          src="/test.jpg"
          alt="John Doe"
          size="xl"
          variant="rounded"
          status="online"
          className="profile-avatar"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      expect(avatar).toHaveClass('aegov-avatar');
      expect(avatar).toHaveClass('avatar-xl');
      expect(avatar).toHaveClass('avatar-rounded');
      expect(avatar).toHaveClass('profile-avatar');

      const img = avatar.querySelector('img');
      expect(img).toHaveAttribute('alt', 'John Doe');

      const indicator = screen.getByTestId('avatar-status');
      expect(indicator).toBeInTheDocument();
    });

    it('should render fallback with size and variant', () => {
      render(
        <Avatar
          alt="John Doe"
          size="2xl"
          variant="rounded"
          fallback="JD"
          data-testid="avatar"
        />
      );

      const avatar = screen.getByTestId('avatar');
      const img = avatar.querySelector('img');

      expect(avatar).toHaveClass('aegov-avatar');
      expect(avatar).toHaveClass('avatar-2xl');
      expect(avatar).toHaveClass('avatar-rounded');
      // AEGOV spec: .no-user on img tag
      expect(img).toHaveClass('no-user');
      expect(avatar).toHaveTextContent('JD');
    });
  });
});
