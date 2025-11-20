import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Card } from './Card';

describe('Card', () => {
  describe('Rendering', () => {
    it('renders children content', () => {
      render(
        <Card>
          <h2>Card Title</h2>
          <p>Card content</p>
        </Card>
      );
      expect(screen.getByText('Card Title')).toBeInTheDocument();
      expect(screen.getByText('Card content')).toBeInTheDocument();
    });

    it('applies aegov-card base class', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('aegov-card');
    });

    it('applies data-testid when provided', () => {
      render(<Card data-testid="test-card">Content</Card>);
      expect(screen.getByTestId('test-card')).toBeInTheDocument();
    });
  });

  describe('Bordered variant', () => {
    it('applies card-bordered class when bordered=true', () => {
      const { container } = render(<Card bordered>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-bordered');
    });

    it('does not apply card-bordered class by default', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass('card-bordered');
    });
  });

  describe('Glow variant', () => {
    it('applies card-glow class when glow=true', () => {
      const { container } = render(<Card glow>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-glow');
    });

    it('does not apply card-glow class by default', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).not.toHaveClass('card-glow');
    });
  });

  describe('Size variants', () => {
    it('applies card-sm class when size="sm"', () => {
      const { container } = render(<Card size="sm">Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-sm');
    });

    it('applies card-base class when size="base"', () => {
      const { container } = render(<Card size="base">Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-base');
    });

    it('applies card-lg class when size="lg"', () => {
      const { container } = render(<Card size="lg">Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-lg');
    });

    it('applies card-base class by default when no size specified', () => {
      const { container } = render(<Card>Content</Card>);
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('card-base');
    });
  });

  describe('Combined props', () => {
    it('applies multiple classes when bordered and glow are both true', () => {
      const { container } = render(
        <Card bordered glow>
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('aegov-card');
      expect(card).toHaveClass('card-bordered');
      expect(card).toHaveClass('card-glow');
    });

    it('combines size, bordered, and glow classes', () => {
      const { container } = render(
        <Card size="lg" bordered glow>
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('aegov-card');
      expect(card).toHaveClass('card-lg');
      expect(card).toHaveClass('card-bordered');
      expect(card).toHaveClass('card-glow');
    });
  });

  describe('Custom className', () => {
    it('applies custom className alongside default classes', () => {
      const { container } = render(
        <Card className="custom-class">Content</Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('aegov-card');
      expect(card).toHaveClass('custom-class');
    });

    it('preserves custom className with other props', () => {
      const { container } = render(
        <Card className="custom-class" bordered glow size="sm">
          Content
        </Card>
      );
      const card = container.firstChild as HTMLElement;
      expect(card).toHaveClass('aegov-card');
      expect(card).toHaveClass('card-sm');
      expect(card).toHaveClass('card-bordered');
      expect(card).toHaveClass('card-glow');
      expect(card).toHaveClass('custom-class');
    });
  });

  describe('Complex content', () => {
    it('renders complex nested content', () => {
      render(
        <Card>
          <div className="card-header">
            <h3>Title</h3>
          </div>
          <div className="card-body">
            <p>Description</p>
          </div>
          <div className="card-footer">
            <button>Action</button>
          </div>
        </Card>
      );
      expect(screen.getByText('Title')).toBeInTheDocument();
      expect(screen.getByText('Description')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: 'Action' })).toBeInTheDocument();
    });
  });
});
