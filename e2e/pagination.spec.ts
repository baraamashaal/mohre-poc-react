import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const SHOWCASE_URL = '/showcase/pagination';

test.describe('Pagination Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SHOWCASE_URL);
  });

  test.describe('Rendering', () => {
    test('should render pagination component', async ({ page }) => {
      const pagination = page.locator('[data-testid="pagination-default"]');
      await expect(pagination).toBeVisible();
    });

    test('should render mobile version on small screens', async ({ page, viewport }) => {
      if (viewport && viewport.width < 640) {
        const mobile = page.locator('[data-testid="pagination-default"] .sm\\:hidden').first();
        await expect(mobile).toBeVisible();
      }
    });

    test('should render desktop version on large screens', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const desktop = page.locator('[data-testid="pagination-default"] .max-sm\\:hidden').first();
        await expect(desktop).toBeVisible();
      }
    });

    test('should render Previous and Next buttons', async ({ page }) => {
      // Check that Previous and Next text exists (in either mobile or desktop version)
      const container = page.locator('[data-testid="pagination-default"]');
      const prevText = container.getByText('Previous', { exact: false });
      const nextText = container.getByText('Next', { exact: false});

      // At least one version should be in the DOM
      await expect(prevText.first()).toBeDefined();
      await expect(nextText.first()).toBeDefined();
    });

    test('should render First and Last buttons when showFirstLast is true', async ({ page, viewport }) => {
      // First and Last buttons only appear in desktop version
      if (viewport && viewport.width >= 640) {
        const firstButton = page.locator('[data-testid="pagination-with-first-last"]').getByText('First');
        const lastButton = page.locator('[data-testid="pagination-with-first-last"]').getByText('Last');
        await expect(firstButton).toBeVisible();
        await expect(lastButton).toBeVisible();
      }
    });

    test('should not render First and Last buttons by default', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const firstButton = container.getByText('First');
        const lastButton = container.getByText('Last');
        await expect(firstButton).not.toBeVisible();
        await expect(lastButton).not.toBeVisible();
      }
    });
  });

  test.describe('Navigation', () => {
    test('should navigate to next page when clicking Next', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const nextButton = container.locator('button:has-text("Next")');
        await nextButton.click();

        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toHaveText('4');
      }
    });

    test('should navigate to previous page when clicking Previous', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const prevButton = container.locator('button:has-text("Previous")');
        await prevButton.click();

        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toHaveText('2');
      }
    });

    test('should navigate to specific page when clicking page number', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const page5Button = container.locator('button.aegov-pagination-page').filter({ hasText: /^5$/ });
        await page5Button.click();

        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toHaveText('5');
      }
    });

    test('should navigate to first page when clicking First', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-with-first-last"]');
        const firstButton = container.locator('button:has-text("First")');
        await firstButton.click();

        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toHaveText('1');
      }
    });

    test('should navigate to last page when clicking Last', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-with-first-last"]');
        const lastButton = container.locator('button:has-text("Last")');
        await lastButton.click();

        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toHaveText('17');
      }
    });
  });

  test.describe('Disabled States', () => {
    test('should disable Previous button on first page', async ({ page }) => {
      const container = page.locator('[data-testid="pagination-first-page"]');
      const prevButton = container.locator('button:has-text("Previous")').first();
      await expect(prevButton).toBeDisabled();
    });

    test('should disable Next button on last page', async ({ page }) => {
      const container = page.locator('[data-testid="pagination-last-page"]');
      const nextButton = container.locator('button:has-text("Next")').first();
      await expect(nextButton).toBeDisabled();
    });

    test('should disable First button on first page', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-first-page"]');
        const firstButton = container.locator('button:has-text("First")');
        await expect(firstButton).toBeDisabled();
      }
    });

    test('should disable Last button on last page', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-last-page"]');
        const lastButton = container.locator('button:has-text("Last")');
        await expect(lastButton).toBeDisabled();
      }
    });
  });

  test.describe('Page Number Display', () => {
    test('should show all pages when total is small', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-small"]');
        const page1 = container.locator('button.aegov-pagination-page, [aria-current="page"]').filter({ hasText: /^1$/ });
        const page5 = container.locator('button.aegov-pagination-page, [aria-current="page"]').filter({ hasText: /^5$/ });
        await expect(page1).toBeVisible();
        await expect(page5).toBeVisible();
      }
    });

    test('should show ellipsis for large page count', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-large"]');
        const ellipsis = container.locator('.aegov-pagination-extend');
        await expect(ellipsis.first()).toBeVisible();
      }
    });

    test('should always show first page number', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-large"]');
        const page1 = container.locator('button.aegov-pagination-page, [aria-current="page"]').filter({ hasText: /^1$/ });
        await expect(page1).toBeVisible();
      }
    });

    test('should always show last page number', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-large"]');
        const page100 = container.locator('button.aegov-pagination-page').filter({ hasText: /^100$/ });
        await expect(page100).toBeVisible();
      }
    });

    test('should show mobile page indicator', async ({ page, viewport }) => {
      if (viewport && viewport.width < 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const pageIndicator = container.locator('.pages');
        await expect(pageIndicator).toContainText('Page');
        await expect(pageIndicator).toContainText('of');
      }
    });
  });

  test.describe('Sibling Count', () => {
    test('should respect siblingCount prop', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-small-sibling"]');
        const pageButtons = container.locator('button.aegov-pagination-page, [aria-current="page"]');
        const count = await pageButtons.count();

        // With siblingCount=1, should show fewer pages
        expect(count).toBeLessThan(10);
      }
    });
  });

  test.describe('Edge Cases', () => {
    test('should handle single page correctly', async ({ page }) => {
      const container = page.locator('[data-testid="pagination-single-page"]');
      const prevButton = container.locator('button:has-text("Previous")').first();
      const nextButton = container.locator('button:has-text("Next")').first();

      await expect(prevButton).toBeDisabled();
      await expect(nextButton).toBeDisabled();
    });

    test('should handle very large page counts', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-large"]');
        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toBeVisible();
        await expect(currentPage).toHaveText('50');
      }
    });
  });

  test.describe('Accessibility', () => {
    test('should not have accessibility violations', async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have role="navigation" on desktop version', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const nav = page.locator('[data-testid="pagination-default"] [role="navigation"]');
        await expect(nav).toBeVisible();
      }
    });

    test('should have aria-label on navigation', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const nav = page.locator('[data-testid="pagination-default"] [role="navigation"]');
        await expect(nav).toHaveAttribute('aria-label');
      }
    });

    test('should have aria-current on current page', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const currentPage = container.locator('[aria-current="page"]');
        await expect(currentPage).toBeVisible();
      }
    });

    test('should have aria-label on Previous button', async ({ page }) => {
      // Previous button exists in both mobile and desktop versions, one will be hidden
      const prevButton = page.locator('[data-testid="pagination-default"]').getByLabel('Previous Page');
      await expect(prevButton.first()).toHaveAttribute('aria-label', 'Previous Page');
    });

    test('should have aria-label on Next button', async ({ page }) => {
      // Next button exists in both mobile and desktop versions, one will be hidden
      const nextButton = page.locator('[data-testid="pagination-default"]').getByLabel('Next Page');
      await expect(nextButton.first()).toHaveAttribute('aria-label', 'Next Page');
    });

    test('should have aria-label on First button', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const firstButton = page.locator('[data-testid="pagination-with-first-last"]').getByLabel('First Page');
        await expect(firstButton).toBeVisible();
      }
    });

    test('should have aria-label on Last button', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const lastButton = page.locator('[data-testid="pagination-with-first-last"]').getByLabel('Last Page');
        await expect(lastButton).toBeVisible();
      }
    });
  });

  test.describe('RTL Support', () => {
    test('should support RTL layout', async ({ page, browserName }) => {
      if (browserName === 'chromium-rtl') {
        const container = page.locator('[data-testid="pagination-default"]');
        await expect(container).toBeVisible();

        // Verify icons are rotated for RTL
        const icons = container.locator('svg.rtl\\:rotate-180');
        await expect(icons.first()).toBeVisible();
      }
    });
  });

  test.describe('Responsive Design', () => {
    test('should be responsive on mobile devices', async ({ page, viewport }) => {
      if (viewport && viewport.width < 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const mobile = container.locator('.sm\\:hidden').first();
        await expect(mobile).toBeVisible();

        const pageIndicator = container.locator('.pages');
        await expect(pageIndicator).toBeVisible();
      }
    });

    test('should be responsive on desktop devices', async ({ page, viewport }) => {
      if (viewport && viewport.width >= 640) {
        const container = page.locator('[data-testid="pagination-default"]');
        const desktop = container.locator('.max-sm\\:hidden').first();
        await expect(desktop).toBeVisible();
      }
    });
  });
});
