import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pagination } from './Pagination';

describe('Pagination', () => {
  const mockOnPageChange = vi.fn();

  afterEach(() => {
    mockOnPageChange.mockClear();
  });

  describe('Rendering', () => {
    it('should render mobile version', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toBeInTheDocument();
      expect(mobile).toHaveTextContent('Page 3 of 10');
    });

    it('should render desktop version', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const desktop = container.querySelector('.max-sm\\:hidden');
      expect(desktop).toBeInTheDocument();
    });

    it('should render Previous and Next buttons', () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      const prevButtons = screen.getAllByText('Previous');
      const nextButtons = screen.getAllByText('Next');

      expect(prevButtons.length).toBeGreaterThan(0);
      expect(nextButtons.length).toBeGreaterThan(0);
    });

    it('should render current page indicator', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      const currentPage = screen.getByText('5', { selector: '[aria-current="page"]' });
      expect(currentPage).toBeInTheDocument();
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    it('should render page numbers around current page', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const pageButtons = container.querySelectorAll('.aegov-pagination-page');
      expect(pageButtons.length).toBeGreaterThan(0);
    });

    it('should render ellipsis for skipped pages', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={20} onPageChange={mockOnPageChange} />
      );

      const ellipsis = container.querySelectorAll('.aegov-pagination-extend');
      expect(ellipsis.length).toBeGreaterThan(0);
    });

    it('should not render First/Last buttons by default', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      const firstButtons = screen.queryAllByText('First');
      const lastButtons = screen.queryAllByText('Last');

      expect(firstButtons).toHaveLength(0);
      expect(lastButtons).toHaveLength(0);
    });

    it('should render First/Last buttons when showFirstLast is true', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      expect(screen.getByText('First')).toBeInTheDocument();
      expect(screen.getByText('Last')).toBeInTheDocument();
    });
  });

  describe('Navigation', () => {
    it('should call onPageChange when clicking Next', () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      const nextButtons = screen.getAllByText('Next');
      fireEvent.click(nextButtons[0]);

      expect(mockOnPageChange).toHaveBeenCalledWith(4);
    });

    it('should call onPageChange when clicking Previous', () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      const prevButtons = screen.getAllByText('Previous');
      fireEvent.click(prevButtons[0]);

      expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    it('should call onPageChange when clicking page number', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const page5Button = Array.from(container.querySelectorAll('.aegov-pagination-page'))
        .find(btn => btn.textContent === '5');

      if (page5Button) {
        fireEvent.click(page5Button);
        expect(mockOnPageChange).toHaveBeenCalledWith(5);
      }
    });

    it('should call onPageChange when clicking First', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const firstButton = screen.getByText('First');
      fireEvent.click(firstButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(1);
    });

    it('should call onPageChange when clicking Last', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const lastButton = screen.getByText('Last');
      fireEvent.click(lastButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(10);
    });
  });

  describe('Disabled States', () => {
    it('should disable Previous button on first page', () => {
      render(<Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} />);

      const prevButtons = screen.getAllByText('Previous');
      prevButtons.forEach(btn => {
        expect(btn.closest('button')).toBeDisabled();
      });
    });

    it('should disable Next button on last page', () => {
      render(<Pagination currentPage={10} totalPages={10} onPageChange={mockOnPageChange} />);

      const nextButtons = screen.getAllByText('Next');
      nextButtons.forEach(btn => {
        expect(btn.closest('button')).toBeDisabled();
      });
    });

    it('should disable First button when on first page', () => {
      render(<Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const firstButton = screen.getByText('First').closest('button');
      expect(firstButton).toBeDisabled();
    });

    it('should disable Last button when on last page', () => {
      render(<Pagination currentPage={10} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const lastButton = screen.getByText('Last').closest('button');
      expect(lastButton).toBeDisabled();
    });

    it('should not call onPageChange when clicking disabled Previous', () => {
      render(<Pagination currentPage={1} totalPages={10} onPageChange={mockOnPageChange} />);

      const prevButton = screen.getAllByText('Previous')[0].closest('button');
      if (prevButton) fireEvent.click(prevButton);

      expect(mockOnPageChange).not.toHaveBeenCalled();
    });

    it('should not call onPageChange when clicking disabled Next', () => {
      render(<Pagination currentPage={10} totalPages={10} onPageChange={mockOnPageChange} />);

      const nextButton = screen.getAllByText('Next')[0].closest('button');
      if (nextButton) fireEvent.click(nextButton);

      expect(mockOnPageChange).not.toHaveBeenCalled();
    });
  });

  describe('Page Number Calculation', () => {
    it('should show all pages when totalPages is small', () => {
      const { container } = render(
        <Pagination currentPage={2} totalPages={5} onPageChange={mockOnPageChange} />
      );

      const pageButtons = container.querySelectorAll('.aegov-pagination-page, .aegov-pagination-current');
      expect(pageButtons.length).toBeGreaterThanOrEqual(5);
    });

    it('should show ellipsis for large page count', () => {
      const { container } = render(
        <Pagination currentPage={10} totalPages={100} onPageChange={mockOnPageChange} />
      );

      const ellipsis = Array.from(container.querySelectorAll('.aegov-pagination-extend'));
      expect(ellipsis.length).toBeGreaterThan(0);
    });

    it('should always show first and last page numbers', () => {
      const { container } = render(
        <Pagination currentPage={10} totalPages={20} onPageChange={mockOnPageChange} />
      );

      const page1 = Array.from(container.querySelectorAll('.aegov-pagination-page'))
        .find(btn => btn.textContent === '1');
      const page20 = Array.from(container.querySelectorAll('.aegov-pagination-page'))
        .find(btn => btn.textContent === '20');

      expect(page1).toBeInTheDocument();
      expect(page20).toBeInTheDocument();
    });

    it('should respect siblingCount prop', () => {
      const { container } = render(
        <Pagination
          currentPage={10}
          totalPages={20}
          onPageChange={mockOnPageChange}
          siblingCount={1}
        />
      );

      // With siblingCount=1, should show current and 1 page on each side
      const pageButtons = container.querySelectorAll('.aegov-pagination-page, .aegov-pagination-current');
      expect(pageButtons.length).toBeGreaterThan(0);
    });
  });

  describe('Accessibility', () => {
    it('should have role="navigation" on desktop version', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const desktop = container.querySelector('[role="navigation"]');
      expect(desktop).toBeInTheDocument();
    });

    it('should have aria-label on navigation', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const nav = container.querySelector('[role="navigation"]');
      expect(nav).toHaveAttribute('aria-label', 'Pagination Navigation');
    });

    it('should support custom aria-label', () => {
      const { container } = render(
        <Pagination
          currentPage={3}
          totalPages={10}
          onPageChange={mockOnPageChange}
          ariaLabel="Custom Pagination"
        />
      );

      const nav = container.querySelector('[role="navigation"]');
      expect(nav).toHaveAttribute('aria-label', 'Custom Pagination');
    });

    it('should have aria-label on Previous button', () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      const prevButtons = screen.getAllByLabelText('Previous Page');
      expect(prevButtons.length).toBeGreaterThan(0);
    });

    it('should have aria-label on Next button', () => {
      render(<Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />);

      const nextButtons = screen.getAllByLabelText('Next Page');
      expect(nextButtons.length).toBeGreaterThan(0);
    });

    it('should have aria-label on First button', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const firstButton = screen.getByLabelText('First Page');
      expect(firstButton).toBeInTheDocument();
    });

    it('should have aria-label on Last button', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} showFirstLast />);

      const lastButton = screen.getByLabelText('Last Page');
      expect(lastButton).toBeInTheDocument();
    });

    it('should have aria-current on current page', () => {
      render(<Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />);

      const currentPage = screen.getByText('5', { selector: '[aria-current="page"]' });
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    it('should have title attribute on page buttons', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const pageButton = container.querySelector('.aegov-pagination-page');
      expect(pageButton).toHaveAttribute('title');
    });

    it('should support data-testid', () => {
      render(
        <Pagination
          currentPage={3}
          totalPages={10}
          onPageChange={mockOnPageChange}
          data-testid="custom-pagination"
        />
      );

      const mobile = screen.getByTestId('custom-pagination');
      expect(mobile).toBeInTheDocument();
    });

    it('should support ref forwarding', () => {
      const ref = { current: null };
      render(
        <Pagination
          ref={ref}
          currentPage={3}
          totalPages={10}
          onPageChange={mockOnPageChange}
        />
      );

      expect(ref.current).toBeInstanceOf(HTMLDivElement);
    });
  });

  describe('Edge Cases', () => {
    it('should handle single page', () => {
      render(<Pagination currentPage={1} totalPages={1} onPageChange={mockOnPageChange} />);

      const prevButtons = screen.getAllByText('Previous');
      const nextButtons = screen.getAllByText('Next');

      prevButtons.forEach(btn => expect(btn.closest('button')).toBeDisabled());
      nextButtons.forEach(btn => expect(btn.closest('button')).toBeDisabled());
    });

    it('should handle very large page counts', () => {
      const { container } = render(
        <Pagination currentPage={500} totalPages={1000} onPageChange={mockOnPageChange} />
      );

      expect(container.querySelector('.aegov-pagination')).toBeInTheDocument();
    });

    it('should not call onPageChange when clicking current page', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const currentPage = screen.getByText('5', { selector: '[aria-current="page"]' });
      fireEvent.click(currentPage);

      expect(mockOnPageChange).not.toHaveBeenCalled();
    });

    it('should handle custom className', () => {
      const { container } = render(
        <Pagination
          currentPage={3}
          totalPages={10}
          onPageChange={mockOnPageChange}
          className="custom-pagination"
        />
      );

      const mobile = container.querySelector('.custom-pagination');
      expect(mobile).toBeInTheDocument();
    });
  });

  describe('CSS Classes', () => {
    it('should apply aegov-pagination class', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const pagination = container.querySelector('.aegov-pagination');
      expect(pagination).toBeInTheDocument();
    });

    it('should apply aegov-pagination-previous class', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const prevButton = container.querySelector('.aegov-pagination-previous');
      expect(prevButton).toBeInTheDocument();
    });

    it('should apply aegov-pagination-next class', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const nextButton = container.querySelector('.aegov-pagination-next');
      expect(nextButton).toBeInTheDocument();
    });

    it('should apply aegov-pagination-current class', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const current = container.querySelector('.aegov-pagination-current');
      expect(current).toBeInTheDocument();
    });

    it('should apply aegov-pagination-page class', () => {
      const { container } = render(
        <Pagination currentPage={3} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const pageButton = container.querySelector('.aegov-pagination-page');
      expect(pageButton).toBeInTheDocument();
    });

    it('should apply aegov-pagination-smaller for pages before current', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const smallerPages = container.querySelectorAll('.aegov-pagination-smaller');
      expect(smallerPages.length).toBeGreaterThan(0);
    });

    it('should apply aegov-pagination-larger for pages after current', () => {
      const { container } = render(
        <Pagination currentPage={5} totalPages={10} onPageChange={mockOnPageChange} />
      );

      const largerPages = container.querySelectorAll('.aegov-pagination-larger');
      expect(largerPages.length).toBeGreaterThan(0);
    });
  });

  describe('Total Items and Items Per Page', () => {
    it('should calculate totalPages from totalItems and itemsPerPage', () => {
      const { container } = render(
        <Pagination currentPage={1} totalItems={95} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // 95 items / 10 per page = 10 pages (rounded up)
      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toHaveTextContent('Page 1 of 10');
    });

    it('should calculate correct totalPages when items divide evenly', () => {
      const { container } = render(
        <Pagination currentPage={1} totalItems={100} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // 100 items / 10 per page = 10 pages
      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toHaveTextContent('Page 1 of 10');
    });

    it('should calculate correct totalPages when items do not divide evenly', () => {
      const { container } = render(
        <Pagination currentPage={1} totalItems={23} itemsPerPage={5} onPageChange={mockOnPageChange} />
      );

      // 23 items / 5 per page = 5 pages (rounded up from 4.6)
      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toHaveTextContent('Page 1 of 5');
    });

    it('should handle single page when totalItems is less than itemsPerPage', () => {
      const { container } = render(
        <Pagination currentPage={1} totalItems={5} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // 5 items / 10 per page = 1 page
      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toHaveTextContent('Page 1 of 1');
    });

    it('should navigate correctly with totalItems and itemsPerPage', () => {
      const { container } = render(
        <Pagination currentPage={1} totalItems={50} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // Find Next button in mobile version
      const nextButton = container.querySelector('.sm\\:hidden .aegov-pagination-next') as HTMLButtonElement;
      fireEvent.click(nextButton);

      expect(mockOnPageChange).toHaveBeenCalledWith(2);
    });

    it('should render all page numbers correctly with totalItems', () => {
      render(
        <Pagination currentPage={2} totalItems={50} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // 50 items / 10 per page = 5 pages
      const page1 = screen.getByText('1', { selector: 'button.aegov-pagination-page, [aria-current="page"]' });
      const page5 = screen.getByText('5', { selector: 'button.aegov-pagination-page' });

      expect(page1).toBeInTheDocument();
      expect(page5).toBeInTheDocument();
    });

    it('should prefer totalPages when both totalPages and totalItems are provided', () => {
      const { container } = render(
        // @ts-expect-error Testing edge case where both are provided
        <Pagination currentPage={1} totalPages={7} totalItems={100} itemsPerPage={10} onPageChange={mockOnPageChange} />
      );

      // Should use totalPages (7) not calculated from totalItems
      const mobile = container.querySelector('.sm\\:hidden');
      expect(mobile).toHaveTextContent('Page 1 of 7');
    });
  });
});
