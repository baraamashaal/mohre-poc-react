import type { HTMLAttributes } from 'react';

/**
 * Breadcrumb separator style
 * - slash: Forward slash separator (default, requires `with-seperator` class)
 * - caret: Right-facing caret icon separator
 */
export type BreadcrumbSeparator = 'slash' | 'caret';

/**
 * Individual breadcrumb item
 */
export interface BreadcrumbItem {
  /** Navigation URL for the breadcrumb link. Omit for current page (last item) */
  href?: string;

  /** Display text for the breadcrumb item */
  label: string;

  /** Tooltip text shown on hover (recommended for accessibility) */
  title?: string;
}

/**
 * Props for the Breadcrumb component
 *
 * @see https://designsystem.gov.ae/docs/components/breadcrumbs
 */
export interface BreadcrumbProps extends Omit<HTMLAttributes<HTMLElement>, 'children'> {
  /** Array of breadcrumb items defining the navigation path */
  items: BreadcrumbItem[];

  /**
   * Visual separator style between breadcrumb items
   * @default 'slash'
   */
  separator?: BreadcrumbSeparator;

  /**
   * Display home icon on the first breadcrumb item
   * @default false
   */
  showHomeIcon?: boolean;

  /**
   * Custom CSS classes for the nav element
   */
  className?: string;

  /**
   * Enable Schema.org microdata attributes for SEO
   * Adds itemscope, itemtype, itemprop attributes
   * @default false
   */
  enableMicrodata?: boolean;

  /**
   * ARIA label for the navigation element
   * @default 'Breadcrumb'
   */
  ariaLabel?: string;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}
