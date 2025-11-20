import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hyperlink } from './Hyperlink';

describe('Hyperlink', () => {
  describe('Rendering', () => {
    it('renders with children text', () => {
      render(<Hyperlink href="/test">Test Link</Hyperlink>);
      expect(screen.getByText('Test Link')).toBeInTheDocument();
    });

    it('renders with href attribute', () => {
      render(<Hyperlink href="/test">Test Link</Hyperlink>);
      const link = screen.getByText('Test Link');
      expect(link).toHaveAttribute('href', '/test');
    });

    it('renders with data-testid', () => {
      render(
        <Hyperlink href="/test" data-testid="test-link">
          Test Link
        </Hyperlink>
      );
      expect(screen.getByTestId('test-link')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders default variant with no additional classes', () => {
      render(<Hyperlink href="/test">Default Link</Hyperlink>);
      const link = screen.getByText('Default Link');
      expect(link).not.toHaveClass('aegov-link');
      expect(link).not.toHaveClass('link-soft');
    });

    it('renders CTA variant with aegov-link class', () => {
      render(
        <Hyperlink href="/test" variant="cta">
          CTA Link
        </Hyperlink>
      );
      const link = screen.getByText('CTA Link');
      expect(link).toHaveClass('aegov-link');
    });

    it('renders soft variant with link-soft class', () => {
      render(
        <Hyperlink href="/test" variant="soft">
          Soft Link
        </Hyperlink>
      );
      const link = screen.getByText('Soft Link');
      expect(link).toHaveClass('link-soft');
    });

    it('renders secondary variant correctly', () => {
      render(
        <Hyperlink href="/test" variant="secondary">
          Secondary Link
        </Hyperlink>
      );
      const link = screen.getByText('Secondary Link');
      expect(link).toHaveClass('aegov-btn', 'btn-outline');
    });

    it('renders secondary-soft variant correctly', () => {
      render(
        <Hyperlink href="/test" variant="secondary-soft">
          Secondary Soft Link
        </Hyperlink>
      );
      const link = screen.getByText('Secondary Soft Link');
      expect(link).toHaveClass('aegov-btn', 'btn-soft');
    });
  });

  describe('External Links', () => {
    it('adds target="_blank" for external links', () => {
      render(
        <Hyperlink href="https://example.com" external>
          External Link
        </Hyperlink>
      );
      const link = screen.getByText('External Link');
      expect(link).toHaveAttribute('target', '_blank');
    });

    it('adds rel="noopener noreferrer" for external links', () => {
      render(
        <Hyperlink href="https://example.com" external>
          External Link
        </Hyperlink>
      );
      const link = screen.getByText('External Link');
      expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    });

    it('does not add target or rel for non-external links', () => {
      render(<Hyperlink href="/internal">Internal Link</Hyperlink>);
      const link = screen.getByText('Internal Link');
      expect(link).not.toHaveAttribute('target');
      expect(link).not.toHaveAttribute('rel');
    });
  });

  describe('Icon Support', () => {
    it('renders with custom icon', () => {
      render(
        <Hyperlink href="/test" variant="cta" icon={<span data-testid="custom-icon">→</span>}>
          Link with Icon
        </Hyperlink>
      );
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });

    it('renders default SVG icon when icon prop is true', () => {
      render(
        <Hyperlink href="/test" variant="cta" icon={true}>
          Link with Default Icon
        </Hyperlink>
      );
      const link = screen.getByText('Link with Default Icon');
      const svg = link.querySelector('svg');
      expect(svg).toBeInTheDocument();
      expect(svg).toHaveClass('link-icon', 'rtl:-scale-x-100');
    });

    it('does not render icon when icon prop is false', () => {
      render(
        <Hyperlink href="/test" variant="cta" icon={false}>
          Link without Icon
        </Hyperlink>
      );
      const link = screen.getByText('Link without Icon');
      const svg = link.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });

    it('does not render icon for non-CTA variants by default', () => {
      render(<Hyperlink href="/test">Default Link</Hyperlink>);
      const link = screen.getByText('Default Link');
      const svg = link.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });
  });

  describe('Custom Classes', () => {
    it('applies custom className', () => {
      render(
        <Hyperlink href="/test" className="custom-class">
          Custom Link
        </Hyperlink>
      );
      const link = screen.getByText('Custom Link');
      expect(link).toHaveClass('custom-class');
    });

    it('combines variant classes with custom className', () => {
      render(
        <Hyperlink href="/test" variant="cta" className="custom-class">
          Combined Classes
        </Hyperlink>
      );
      const link = screen.getByText('Combined Classes');
      expect(link).toHaveClass('aegov-link', 'custom-class');
    });
  });

  describe('Accessibility', () => {
    it('forwards title attribute', () => {
      render(
        <Hyperlink href="/test" title="Descriptive title">
          Accessible Link
        </Hyperlink>
      );
      const link = screen.getByText('Accessible Link');
      expect(link).toHaveAttribute('title', 'Descriptive title');
    });

    it('forwards aria-label attribute', () => {
      render(
        <Hyperlink href="/test" aria-label="Custom label">
          Link
        </Hyperlink>
      );
      const link = screen.getByText('Link');
      expect(link).toHaveAttribute('aria-label', 'Custom label');
    });
  });
});
