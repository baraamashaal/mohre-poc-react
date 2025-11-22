import { forwardRef } from 'react';
import clsx from 'clsx';
import { CaretLeft, CaretRight, CaretDoubleLeft, CaretDoubleRight } from '@phosphor-icons/react';
import type { PaginationProps } from './Pagination.types';

/**
 * Pagination Component
 *
 * Facilitates navigation through content distributed across multiple pages.
 * Provides organized way to handle large datasets by breaking them into manageable chunks.
 *
 * @see https://designsystem.gov.ae/docs/components/pagination
 *
 * @example Using totalPages directly
 * ```tsx
 * <Pagination
 *   currentPage={3}
 *   totalPages={17}
 *   onPageChange={(page) => console.log('Navigate to page:', page)}
 * />
 * ```
 *
 * @example Using totalItems and itemsPerPage
 * ```tsx
 * <Pagination
 *   currentPage={1}
 *   totalItems={95}
 *   itemsPerPage={10}
 *   onPageChange={(page) => console.log('Navigate to page:', page)}
 * />
 * ```
 *
 * @example With First and Last buttons
 * ```tsx
 * <Pagination
 *   currentPage={3}
 *   totalPages={17}
 *   showFirstLast
 *   onPageChange={(page) => console.log('Navigate to page:', page)}
 * />
 * ```
 */
export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const {
      currentPage,
      onPageChange,
      showFirstLast = false,
      siblingCount = 2,
      ariaLabel = 'Pagination Navigation',
      className,
      'data-testid': dataTestId,
      ...rest
    } = props;

    // Calculate totalPages based on props
    const totalPages =
      'totalPages' in props
        ? props.totalPages
        : Math.ceil(props.totalItems / props.itemsPerPage);

    // Remove pagination-specific props from rest
    const { totalPages: _, totalItems: __, itemsPerPage: ___, ...domProps } = rest as any;

    const isPreviousDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= totalPages;

    // Calculate which page numbers to display
    const getPageNumbers = (): (number | string)[] => {
      const pages: (number | string)[] = [];

      // Always show first page
      pages.push(1);

      // Calculate start and end of the range around current page
      const startPage = Math.max(2, currentPage - siblingCount);
      const endPage = Math.min(totalPages - 1, currentPage + siblingCount);

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push('...');
      }

      // Add pages around current page
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < totalPages - 1) {
        pages.push('...');
      }

      // Always show last page (if more than 1 page)
      if (totalPages > 1) {
        pages.push(totalPages);
      }

      return pages;
    };

    const pageNumbers = getPageNumbers();

    const handlePageClick = (page: number) => {
      if (page !== currentPage && page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    };

    const handlePrevious = () => {
      if (!isPreviousDisabled) {
        onPageChange(currentPage - 1);
      }
    };

    const handleNext = () => {
      if (!isNextDisabled) {
        onPageChange(currentPage + 1);
      }
    };

    const handleFirst = () => {
      if (currentPage !== 1) {
        onPageChange(1);
      }
    };

    const handleLast = () => {
      if (currentPage !== totalPages) {
        onPageChange(totalPages);
      }
    };

    return (
      <>
        {/* Mobile Version */}
        <div
          ref={ref}
          className={clsx('aegov-pagination flex flex-1 justify-between items-center sm:hidden', className)}
          data-testid={dataTestId}
          {...domProps}
        >
          <button
            type="button"
            className="aegov-pagination-previous"
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
            aria-label="Previous Page"
          >
            <CaretLeft
              className="rtl:rotate-180"
              size={20}
              weight="regular"
              aria-hidden="true"
            />
            <span>Previous</span>
          </button>
          <span className="pages">
            Page {currentPage} of {totalPages}
          </span>
          <button
            type="button"
            className="aegov-pagination-next"
            onClick={handleNext}
            disabled={isNextDisabled}
            aria-label="Next Page"
          >
            <span>Next</span>
            <CaretRight
              className="rtl:rotate-180"
              size={20}
              weight="regular"
              aria-hidden="true"
            />
          </button>
        </div>

        {/* Desktop Version */}
        <div
          className={clsx('aegov-pagination max-sm:hidden', className)}
          role="navigation"
          aria-label={ariaLabel}
          data-testid={dataTestId ? `${dataTestId}-desktop` : undefined}
        >
          {showFirstLast && (
            <button
              type="button"
              className="aegov-pagination-first"
              onClick={handleFirst}
              disabled={currentPage === 1}
              aria-label="First Page"
            >
              <CaretDoubleLeft
                className="rtl:rotate-180"
                size={20}
                weight="regular"
                aria-hidden="true"
              />
              <span>First</span>
            </button>
          )}

          <button
            type="button"
            className="aegov-pagination-previous"
            onClick={handlePrevious}
            disabled={isPreviousDisabled}
            rel="prev"
            aria-label="Previous Page"
          >
            <CaretLeft
              className="rtl:rotate-180"
              size={20}
              weight="regular"
              aria-hidden="true"
            />
            <span>Previous</span>
          </button>

          {pageNumbers.map((page, index) => {
            if (page === '...') {
              return (
                <span key={`ellipsis-${index}`} className="aegov-pagination-extend">
                  ...
                </span>
              );
            }

            const pageNum = page as number;
            const isCurrent = pageNum === currentPage;

            if (isCurrent) {
              return (
                <span
                  key={pageNum}
                  aria-current="page"
                  className="aegov-pagination-current"
                >
                  {pageNum}
                </span>
              );
            }

            const isSmaller = pageNum < currentPage;
            const pageClass = clsx('aegov-pagination-page', {
              'aegov-pagination-smaller': isSmaller,
              'aegov-pagination-larger': !isSmaller,
            });

            return (
              <button
                key={pageNum}
                type="button"
                className={pageClass}
                onClick={() => handlePageClick(pageNum)}
                title={`Page ${pageNum}`}
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </button>
            );
          })}

          <button
            type="button"
            className="aegov-pagination-next"
            onClick={handleNext}
            disabled={isNextDisabled}
            rel="next"
            aria-label="Next Page"
          >
            <span>Next</span>
            <CaretRight
              className="rtl:rotate-180"
              size={20}
              weight="regular"
              aria-hidden="true"
            />
          </button>

          {showFirstLast && (
            <button
              type="button"
              className="aegov-pagination-last"
              onClick={handleLast}
              disabled={currentPage === totalPages}
              aria-label="Last Page"
            >
              <span>Last</span>
              <CaretDoubleRight
                className="rtl:rotate-180"
                size={20}
                weight="regular"
                aria-hidden="true"
              />
            </button>
          )}
        </div>
      </>
    );
  }
);

Pagination.displayName = 'Pagination';
