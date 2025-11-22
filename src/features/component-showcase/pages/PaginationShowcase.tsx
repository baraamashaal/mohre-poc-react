import { useState } from 'react';
import { Pagination } from '../../../shared/components/ui';

export const PaginationShowcase = () => {
  const [page1, setPage1] = useState(3);
  const [page2, setPage2] = useState(5);
  const [page3, setPage3] = useState(2);
  const [page4, setPage4] = useState(50);
  const [page5, setPage5] = useState(1);
  const [page6, setPage6] = useState(10);
  const [page7, setPage7] = useState(10);
  const [page8, setPage8] = useState(1);
  const [page9, setPage9] = useState(1);
  const [page10, setPage10] = useState(3);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-12">
        <header>
          <h1 className="text-3xl font-bold mb-2">Pagination Component</h1>
          <p className="text-gray-600">
            Facilitates navigation through content distributed across multiple pages.
            Supports both direct totalPages or automatic calculation from totalItems and itemsPerPage.
          </p>
        </header>

        <section className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Default Pagination</h2>
            <p className="text-sm text-gray-600">Basic pagination with 10 pages</p>
            <div data-testid="pagination-default">
              <Pagination
                currentPage={page1}
                totalPages={10}
                onPageChange={setPage1}
                ariaLabel="Pagination Example 1"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">With First and Last Buttons</h2>
            <p className="text-sm text-gray-600">Pagination with First and Last navigation buttons</p>
            <div data-testid="pagination-with-first-last">
              <Pagination
                currentPage={page2}
                totalPages={17}
                onPageChange={setPage2}
                showFirstLast
                ariaLabel="Pagination Example 2"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Small Page Count</h2>
            <p className="text-sm text-gray-600">Pagination with only 5 pages</p>
            <div data-testid="pagination-small">
              <Pagination
                currentPage={page3}
                totalPages={5}
                onPageChange={setPage3}
                ariaLabel="Pagination Example 3"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Large Page Count</h2>
            <p className="text-sm text-gray-600">Pagination with 100 pages showing ellipsis</p>
            <div data-testid="pagination-large">
              <Pagination
                currentPage={page4}
                totalPages={100}
                onPageChange={setPage4}
                showFirstLast
                ariaLabel="Pagination Example 4"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">On First Page</h2>
            <p className="text-sm text-gray-600">Previous and First buttons should be disabled</p>
            <div data-testid="pagination-first-page">
              <Pagination
                currentPage={page5}
                totalPages={10}
                onPageChange={setPage5}
                showFirstLast
                ariaLabel="Pagination Example 5"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">On Last Page</h2>
            <p className="text-sm text-gray-600">Next and Last buttons should be disabled</p>
            <div data-testid="pagination-last-page">
              <Pagination
                currentPage={page6}
                totalPages={10}
                onPageChange={setPage6}
                showFirstLast
                ariaLabel="Pagination Example 6"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Small Sibling Count</h2>
            <p className="text-sm text-gray-600">siblingCount=1 shows fewer page numbers</p>
            <div data-testid="pagination-small-sibling">
              <Pagination
                currentPage={page7}
                totalPages={20}
                onPageChange={setPage7}
                siblingCount={1}
                showFirstLast
                ariaLabel="Pagination Example 7"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Single Page</h2>
            <p className="text-sm text-gray-600">Edge case: only 1 page total</p>
            <div data-testid="pagination-single-page">
              <Pagination
                currentPage={page8}
                totalPages={1}
                onPageChange={setPage8}
                ariaLabel="Pagination Example 8"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Using Total Items and Items Per Page</h2>
            <p className="text-sm text-gray-600">
              Automatically calculates total pages: 95 items ÷ 10 per page = 10 pages
            </p>
            <div data-testid="pagination-with-total-items">
              <Pagination
                currentPage={page9}
                totalItems={95}
                itemsPerPage={10}
                onPageChange={setPage9}
                ariaLabel="Pagination Example 9"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Total Items with First and Last</h2>
            <p className="text-sm text-gray-600">
              247 items ÷ 20 per page = 13 pages (rounded up)
            </p>
            <div data-testid="pagination-items-with-first-last">
              <Pagination
                currentPage={page10}
                totalItems={247}
                itemsPerPage={20}
                onPageChange={setPage10}
                showFirstLast
                ariaLabel="Pagination Example 10"
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
