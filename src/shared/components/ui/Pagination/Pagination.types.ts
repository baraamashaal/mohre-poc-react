import type { HTMLAttributes } from 'react';

/**
 * Base props for the Pagination component
 */
interface BasePaginationProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Currently active page number (1-indexed) */
  currentPage: number;

  /**
   * Callback function triggered when page changes
   * @param page - The new page number (1-indexed)
   */
  onPageChange: (page: number) => void;

  /**
   * Display "First" and "Last" navigation buttons
   * @default false
   */
  showFirstLast?: boolean;

  /**
   * Number of page buttons to show before and after current page
   * @default 2
   */
  siblingCount?: number;

  /**
   * Custom CSS classes for the container
   */
  className?: string;

  /**
   * ARIA label for the navigation element
   * @default 'Pagination Navigation'
   */
  ariaLabel?: string;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}

/**
 * Props when using totalPages directly
 */
interface PaginationWithTotalPages extends BasePaginationProps {
  /** Total number of available pages */
  totalPages: number;
  totalItems?: never;
  itemsPerPage?: never;
}

/**
 * Props when using totalItems and itemsPerPage
 */
interface PaginationWithTotalItems extends BasePaginationProps {
  /** Total number of items across all pages */
  totalItems: number;
  /** Number of items to display per page */
  itemsPerPage: number;
  totalPages?: never;
}

/**
 * Props for the Pagination component
 *
 * You can use either:
 * - `totalPages` directly if you already know the number of pages
 * - `totalItems` and `itemsPerPage` to automatically calculate total pages
 *
 * @see https://designsystem.gov.ae/docs/components/pagination
 *
 * @example Using totalPages
 * ```tsx
 * <Pagination currentPage={1} totalPages={10} onPageChange={setPage} />
 * ```
 *
 * @example Using totalItems and itemsPerPage
 * ```tsx
 * <Pagination currentPage={1} totalItems={95} itemsPerPage={10} onPageChange={setPage} />
 * ```
 */
export type PaginationProps = PaginationWithTotalPages | PaginationWithTotalItems;
