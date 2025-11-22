import type { ReactNode, HTMLAttributes } from 'react';

/**
 * Blockquote style variations
 * - soft: Default style with quotation icon and minimal styling
 * - colored: Distinct background color without icon
 */
export type BlockquoteStyle = 'soft' | 'colored';

/**
 * Props for the Blockquote component
 *
 * @see https://designsystem.gov.ae/docs/components/blockquote
 */
export interface BlockquoteProps extends Omit<HTMLAttributes<HTMLElement>, 'cite' | 'style'> {
  /** Quote content (children) */
  children: ReactNode;

  /** Author's full name */
  author: string;

  /** Author's title, position, or source name */
  authorTitle: string;

  /**
   * Citation URL - source of the quote
   * Required for semantic correctness and accessibility
   * Format: "https://example.com" or "https://example.com#element-id"
   */
  cite: string;

  /**
   * Visual style variant
   * @default 'soft'
   */
  style?: BlockquoteStyle;

  /**
   * Custom CSS classes
   */
  className?: string;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}
