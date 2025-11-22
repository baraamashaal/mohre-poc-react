import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Blockquote } from './Blockquote';

describe('Blockquote', () => {
  const defaultProps = {
    author: 'John Doe',
    authorTitle: 'CEO, Example Corp',
    cite: 'https://example.com/article',
    children: 'This is a test quote',
  };

  // Happy Path Tests
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Blockquote {...defaultProps} />);

      expect(screen.getByText('This is a test quote')).toBeInTheDocument();
      expect(screen.getByText('John Doe')).toBeInTheDocument();
      expect(screen.getByText('CEO, Example Corp')).toBeInTheDocument();
    });

    it('should render as blockquote element', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toBeInTheDocument();
    });

    it('should have correct cite attribute', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toHaveAttribute('cite', 'https://example.com/article');
    });

    it('should apply base AEGOV class', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toHaveClass('aegov-quote');
    });

    it('should render quotation icon in soft style', () => {
      render(<Blockquote {...defaultProps} style="soft" />);

      const icon = document.querySelector('.quote-icon');
      expect(icon).toBeInTheDocument();
    });

    it('should not render icon in colored style', () => {
      render(<Blockquote {...defaultProps} style="colored" />);

      const icon = document.querySelector('.quote-icon');
      expect(icon).not.toBeInTheDocument();
    });

    it('should apply colored class for colored style', () => {
      render(<Blockquote {...defaultProps} style="colored" />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toHaveClass('quote-colored');
    });

    it('should not apply colored class for soft style', () => {
      render(<Blockquote {...defaultProps} style="soft" />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).not.toHaveClass('quote-colored');
    });

    it('should merge custom className', () => {
      render(<Blockquote {...defaultProps} className="custom-class" />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toHaveClass('custom-class');
      expect(blockquote).toHaveClass('aegov-quote');
    });

    it('should render author in quote-author div', () => {
      render(<Blockquote {...defaultProps} />);

      const authorElement = screen.getByText('John Doe');
      expect(authorElement).toHaveClass('quote-author');
    });

    it('should render authorTitle in quote-cite div', () => {
      render(<Blockquote {...defaultProps} />);

      const titleElement = screen.getByText('CEO, Example Corp');
      expect(titleElement).toHaveClass('quote-cite');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('should have semantic blockquote element', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = document.querySelector('blockquote');
      expect(blockquote).toBeInTheDocument();
    });

    it('should have cite attribute for screen readers', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      expect(blockquote).toHaveAttribute('cite');
    });

    it('should hide quote icon from screen readers', () => {
      render(<Blockquote {...defaultProps} style="soft" />);

      const icon = document.querySelector('.quote-icon');
      expect(icon).toHaveAttribute('aria-hidden', 'true');
    });

    it('should support data-testid', () => {
      render(<Blockquote {...defaultProps} data-testid="custom-quote" />);

      const blockquote = screen.getByTestId('custom-quote');
      expect(blockquote).toBeInTheDocument();
    });

    it('should support ref forwarding', () => {
      const ref = { current: null };
      render(<Blockquote {...defaultProps} ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLQuoteElement);
    });
  });

  // Content Tests
  describe('Content Handling', () => {
    it('should handle long quote text', () => {
      const longText = 'A'.repeat(500);
      render(<Blockquote {...defaultProps}>{longText}</Blockquote>);

      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('should handle special characters in quote', () => {
      render(
        <Blockquote {...defaultProps}>
          {'Quote with <>&"\' special chars'}
        </Blockquote>
      );

      expect(screen.getByText('Quote with <>&"\' special chars')).toBeInTheDocument();
    });

    it('should handle special characters in author name', () => {
      render(
        <Blockquote {...defaultProps} author="O'Brien & Co.">
          Test quote
        </Blockquote>
      );

      expect(screen.getByText("O'Brien & Co.")).toBeInTheDocument();
    });

    it('should handle URLs with fragments in cite', () => {
      render(
        <Blockquote
          {...defaultProps}
          cite="https://example.com/page#section-1"
        >
          Test quote
        </Blockquote>
      );

      const blockquote = screen.getByText('Test quote').closest('blockquote');
      expect(blockquote).toHaveAttribute('cite', 'https://example.com/page#section-1');
    });

    it('should handle empty authorTitle', () => {
      render(
        <Blockquote {...defaultProps} authorTitle="">
          Test quote
        </Blockquote>
      );

      const titleElement = document.querySelector('.quote-cite');
      expect(titleElement).toBeInTheDocument();
      expect(titleElement).toBeEmptyDOMElement();
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('should handle multiline content', () => {
      render(
        <Blockquote {...defaultProps}>
          {'Line 1\nLine 2\nLine 3'}
        </Blockquote>
      );

      expect(screen.getByText(/Line 1/)).toBeInTheDocument();
    });

    it('should handle Arabic/RTL text', () => {
      render(
        <Blockquote
          {...defaultProps}
          author="عبدالرحمن بن محمد العويس"
          authorTitle="وزير الصحة ووقاية المجتمع"
        >
          ثقة قيادتنا الرشيدة في الكوادر الصحية محل تقدير كبير
        </Blockquote>
      );

      expect(screen.getByText('عبدالرحمن بن محمد العويس')).toBeInTheDocument();
      expect(screen.getByText('وزير الصحة ووقاية المجتمع')).toBeInTheDocument();
    });

    it('should handle very long author names', () => {
      const longName = 'Dr. Professor ' + 'Name '.repeat(20) + 'Smith';
      render(
        <Blockquote {...defaultProps} author={longName}>
          Test quote
        </Blockquote>
      );

      expect(screen.getByText(longName)).toBeInTheDocument();
    });
  });

  // Style Variations
  describe('Style Variations', () => {
    it('should default to soft style when style prop is omitted', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      const icon = document.querySelector('.quote-icon');

      expect(blockquote).not.toHaveClass('quote-colored');
      expect(icon).toBeInTheDocument();
    });

    it('should explicitly support soft style', () => {
      render(<Blockquote {...defaultProps} style="soft" />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      const icon = document.querySelector('.quote-icon');

      expect(blockquote).not.toHaveClass('quote-colored');
      expect(icon).toBeInTheDocument();
    });

    it('should support colored style', () => {
      render(<Blockquote {...defaultProps} style="colored" />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      const icon = document.querySelector('.quote-icon');

      expect(blockquote).toHaveClass('quote-colored');
      expect(icon).not.toBeInTheDocument();
    });
  });

  // Structure Tests
  describe('Structure', () => {
    it('should have quote-footer div', () => {
      render(<Blockquote {...defaultProps} />);

      const footer = document.querySelector('.quote-footer');
      expect(footer).toBeInTheDocument();
    });

    it('should wrap content in paragraph', () => {
      render(<Blockquote {...defaultProps} />);

      const paragraph = screen.getByText('This is a test quote');
      expect(paragraph.tagName).toBe('P');
    });

    it('should maintain proper DOM hierarchy', () => {
      render(<Blockquote {...defaultProps} />);

      const blockquote = screen.getByText('This is a test quote').closest('blockquote');
      const footer = blockquote?.querySelector('.quote-footer');
      const author = footer?.querySelector('.quote-author');
      const cite = footer?.querySelector('.quote-cite');

      expect(blockquote).toContainElement(footer as HTMLElement | null);
      expect(footer).toContainElement(author as HTMLElement | null);
      expect(footer).toContainElement(cite as HTMLElement | null);
    });
  });
});
