import { forwardRef } from 'react';
import clsx from 'clsx';
import { Quotes } from '@phosphor-icons/react';
import type { BlockquoteProps } from '@components/ui';

/**
 * AEGOV Blockquote Component
 *
 * Visually distinguishes and highlights quoted text or excerpts with proper attribution.
 * Commonly used in articles, blog posts, and content to highlight statements and
 * attribute them to original authors.
 *
 * @example
 * ```tsx
 * <Blockquote
 *   author="John Doe"
 *   authorTitle="CEO, Example Corp"
 *   cite="https://example.com/article"
 *   style="soft"
 * >
 *   This is a great quote that needs to be highlighted.
 * </Blockquote>
 * ```
 *
 * @see https://designsystem.gov.ae/docs/components/blockquote
 */
export const Blockquote = forwardRef<HTMLQuoteElement, BlockquoteProps>(
  (
    {
      children,
      author,
      authorTitle,
      cite,
      style = 'soft',
      className,
      'data-testid': dataTestId,
      ...rest
    },
    ref
  ) => {
    // Build CSS classes based on AEGOV design system
    const blockquoteClasses = clsx(
      // Base AEGOV class
      'aegov-quote',
      // Colored variant class
      {
        'quote-colored': style === 'colored',
      },
      // Custom className
      className
    );

    // Show icon only for soft/default style
    const showIcon = style === 'soft';

    return (
      <blockquote
        ref={ref}
        className={blockquoteClasses}
        cite={cite}
        data-testid={dataTestId}
        {...rest}
      >
        {/* Quotation icon - only shown in soft/default style */}
        {showIcon && (
          <Quotes
            className="quote-icon"
            size={48}
            weight="fill"
            aria-hidden="true"
          />
        )}

        {/* Quote content */}
        <p>{children}</p>

        {/* Author attribution footer */}
        <div className="quote-footer">
          <div className="quote-author">{author}</div>
          <div className="quote-cite">{authorTitle}</div>
        </div>
      </blockquote>
    );
  }
);

Blockquote.displayName = 'Blockquote';
