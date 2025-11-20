import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Badge } from './Badge';

describe('Badge Component', () => {
  describe('Rendering', () => {
    it('renders badge with children', () => {
      render(<Badge>Test Badge</Badge>);
      expect(screen.getByText('Test Badge')).toBeInTheDocument();
    });

    it('renders as a span element', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.querySelector('span');
      expect(badge).toBeInTheDocument();
    });

    it('has base aegov-badge class', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.querySelector('.aegov-badge');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Types', () => {
    it('renders info type by default', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.querySelector('.badge-info');
      expect(badge).toBeInTheDocument();
    });

    it('renders error type', () => {
      const { container } = render(<Badge type="error">Badge</Badge>);
      const badge = container.querySelector('.badge-error');
      expect(badge).toBeInTheDocument();
    });

    it('renders success type', () => {
      const { container } = render(<Badge type="success">Badge</Badge>);
      const badge = container.querySelector('.badge-success');
      expect(badge).toBeInTheDocument();
    });

    it('renders warning type', () => {
      const { container } = render(<Badge type="warning">Badge</Badge>);
      const badge = container.querySelector('.badge-warning');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders soft variant by default', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.querySelector('.aegov-badge');
      expect(badge).not.toHaveClass('badge-solid');
    });

    it('renders solid variant', () => {
      const { container } = render(<Badge variant="solid">Badge</Badge>);
      const badge = container.querySelector('.badge-solid');
      expect(badge).toBeInTheDocument();
    });

    it('renders soft variant explicitly', () => {
      const { container } = render(<Badge variant="soft">Badge</Badge>);
      const badge = container.querySelector('.aegov-badge');
      expect(badge).not.toHaveClass('badge-solid');
    });
  });

  describe('Sizes', () => {
    it('renders default size by default', () => {
      const { container } = render(<Badge>Badge</Badge>);
      const badge = container.querySelector('.aegov-badge');
      expect(badge).not.toHaveClass('badge-lg');
    });

    it('renders large size', () => {
      const { container } = render(<Badge size="lg">Badge</Badge>);
      const badge = container.querySelector('.badge-lg');
      expect(badge).toBeInTheDocument();
    });

    it('renders default size explicitly', () => {
      const { container } = render(<Badge size="default">Badge</Badge>);
      const badge = container.querySelector('.aegov-badge');
      expect(badge).not.toHaveClass('badge-lg');
    });
  });

  describe('Icons', () => {
    const TestIcon = () => (
      <svg data-testid="test-icon">
        <circle cx="12" cy="12" r="10" />
      </svg>
    );

    it('renders without icons by default', () => {
      render(<Badge>Badge</Badge>);
      expect(screen.queryByTestId('test-icon')).not.toBeInTheDocument();
    });

    it('renders with left icon', () => {
      render(<Badge leftIcon={<TestIcon />}>Badge</Badge>);
      const icon = screen.getByTestId('test-icon');
      expect(icon).toBeInTheDocument();
    });

    it('renders with right icon', () => {
      render(<Badge rightIcon={<TestIcon />}>Badge</Badge>);
      const icon = screen.getByTestId('test-icon');
      expect(icon).toBeInTheDocument();
    });

    it('renders with both left and right icons', () => {
      render(
        <Badge
          leftIcon={<TestIcon />}
          rightIcon={<svg data-testid="right-icon"><circle /></svg>}
        >
          Badge
        </Badge>
      );
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-icon')).toBeInTheDocument();
    });

    it('left icon has proper spacing class', () => {
      const { container } = render(<Badge leftIcon={<TestIcon />}>Badge</Badge>);
      const iconWrapper = container.querySelector('.me-1');
      expect(iconWrapper).toBeInTheDocument();
    });

    it('right icon has proper spacing class', () => {
      const { container } = render(<Badge rightIcon={<TestIcon />}>Badge</Badge>);
      const iconWrapper = container.querySelector('.ms-1');
      expect(iconWrapper).toBeInTheDocument();
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      const { container } = render(<Badge className="custom-class">Badge</Badge>);
      const badge = container.querySelector('.custom-class');
      expect(badge).toBeInTheDocument();
    });

    it('merges custom className with base classes', () => {
      const { container } = render(<Badge className="custom-class">Badge</Badge>);
      const badge = container.querySelector('.aegov-badge.custom-class');
      expect(badge).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('accepts aria-label', () => {
      render(<Badge aria-label="Status badge">Active</Badge>);
      const badge = screen.getByLabelText('Status badge');
      expect(badge).toBeInTheDocument();
    });

    it('is accessible without aria-label', () => {
      render(<Badge>Status: Active</Badge>);
      expect(screen.getByText('Status: Active')).toBeInTheDocument();
    });
  });

  describe('Combination Rendering', () => {
    const TestIcon = () => (
      <svg data-testid="combo-icon">
        <circle cx="12" cy="12" r="10" />
      </svg>
    );

    it('renders solid success badge with large size', () => {
      const { container } = render(
        <Badge type="success" variant="solid" size="lg">
          Success
        </Badge>
      );
      const badge = container.querySelector('.aegov-badge.badge-success.badge-solid.badge-lg');
      expect(badge).toBeInTheDocument();
    });

    it('renders error badge with left icon', () => {
      const { container } = render(
        <Badge type="error" leftIcon={<TestIcon />}>
          Error
        </Badge>
      );
      const badge = container.querySelector('.badge-error');
      expect(badge).toBeInTheDocument();
      expect(screen.getByTestId('combo-icon')).toBeInTheDocument();
    });

    it('renders large solid warning badge with both icons', () => {
      const { container } = render(
        <Badge
          type="warning"
          variant="solid"
          size="lg"
          leftIcon={<TestIcon />}
          rightIcon={<svg data-testid="right-combo-icon"><circle /></svg>}
          className="custom-warning"
        >
          Warning
        </Badge>
      );
      const badge = container.querySelector(
        '.aegov-badge.badge-warning.badge-solid.badge-lg.custom-warning'
      );
      expect(badge).toBeInTheDocument();
      expect(screen.getByTestId('combo-icon')).toBeInTheDocument();
      expect(screen.getByTestId('right-combo-icon')).toBeInTheDocument();
    });
  });

  describe('Content Rendering', () => {
    it('renders text content', () => {
      render(<Badge>Simple Text</Badge>);
      expect(screen.getByText('Simple Text')).toBeInTheDocument();
    });

    it('renders numeric content', () => {
      render(<Badge>42</Badge>);
      expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('renders complex content', () => {
      render(
        <Badge>
          <strong>Bold</strong> and <em>italic</em>
        </Badge>
      );
      expect(screen.getByText('Bold', { exact: false })).toBeInTheDocument();
      expect(screen.getByText('italic', { exact: false })).toBeInTheDocument();
    });
  });
});
