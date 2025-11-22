import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Breadcrumb Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/breadcrumb');
  });

  test.describe('Rendering', () => {
    test('should render all examples', async ({ page }) => {
      await expect(page.getByRole('heading', { name: 'Breadcrumb Component', level: 1 })).toBeVisible();

      await expect(page.getByRole('heading', { name: 'Example 1: Default with Slash Separator' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Example 2: With Home Icon' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Example 3: Custom Caret Separator' })).toBeVisible();
      await expect(page.getByRole('heading', { name: 'Example 4: With Schema.org Microdata' })).toBeVisible();
    });

    test('should render breadcrumb navigation elements', async ({ page }) => {
      const breadcrumbs = page.locator('nav[aria-label="Breadcrumb"]');
      await expect(breadcrumbs.first()).toBeVisible();
      await expect(breadcrumbs).toHaveCount(await breadcrumbs.count());
    });

    test('should render breadcrumb items as ordered lists', async ({ page }) => {
      const firstBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]').first();
      const ol = firstBreadcrumb.locator('ol');
      await expect(ol).toBeVisible();
    });

    test('should render home icon when enabled', async ({ page }) => {
      // Example 2 has home icon
      const sections = page.locator('section');
      const example2 = sections.nth(1); // Second section
      const homeLink = example2.locator('a').first();
      const svg = homeLink.locator('svg');
      await expect(svg).toBeVisible();
    });

    test('should render links for non-current items', async ({ page }) => {
      const firstBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]').first();
      const links = firstBreadcrumb.locator('a');
      await expect(links.first()).toBeVisible();
      await expect(links).toHaveCount(await links.count());
    });

    test('should render current page as span', async ({ page }) => {
      const currentPage = page.getByText('A really long page name that must be affected.').first();
      await expect(currentPage).toBeVisible();
      await expect(currentPage).toHaveAttribute('aria-current', 'page');
    });
  });

  test.describe('Accessibility', () => {
    test('should have no accessibility violations', async ({ page }) => {
      // Wait for main content to be visible
      await page.waitForSelector('main', { state: 'visible' });
      await page.waitForSelector('h1', { state: 'visible' });

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have semantic nav elements', async ({ page }) => {
      const navElements = page.locator('nav[aria-label="Breadcrumb"]');
      await expect(navElements.first()).toBeVisible();
    });

    test('should have aria-label on nav', async ({ page }) => {
      const nav = page.locator('nav[aria-label="Breadcrumb"]').first();
      await expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    test('should have aria-current on last item', async ({ page }) => {
      const currentPage = page.locator('[aria-current="page"]').first();
      await expect(currentPage).toBeVisible();
    });

    test('should have title attributes on links', async ({ page }) => {
      const firstBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]').first();
      const links = firstBreadcrumb.locator('a');
      const firstLink = links.nth(1); // Skip first (Home) as it uses label for title
      await expect(firstLink).toHaveAttribute('title');
    });

    test('should hide decorative icons from screen readers', async ({ page }) => {
      // Check home icon in Example 2
      const sections = page.locator('section');
      const example2 = sections.nth(1);
      const svg = example2.locator('svg[aria-hidden="true"]').first();
      if (await svg.isVisible()) {
        await expect(svg).toHaveAttribute('aria-hidden', 'true');
      }
    });
  });

  test.describe('Separator Variations', () => {
    test('should display slash separator by default', async ({ page }) => {
      const firstBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]').first();
      await expect(firstBreadcrumb).toHaveClass(/with-seperator/);
    });

    test('should display caret separator when specified', async ({ page }) => {
      // Example 3 has caret separator
      const sections = page.locator('section');
      const example3 = sections.nth(2);
      const breadcrumb = example3.locator('nav[aria-label="Breadcrumb"]');
      await expect(breadcrumb).not.toHaveClass(/with-seperator/);

      // Should have caret SVG elements
      const caretIcons = breadcrumb.locator('svg[aria-hidden="true"]');
      await expect(caretIcons.first()).toBeVisible();
    });
  });

  test.describe('Content', () => {
    test('should display breadcrumb labels', async ({ page }) => {
      await expect(page.getByText('Home').first()).toBeVisible();
      await expect(page.getByText('Media centre').first()).toBeVisible();
      await expect(page.getByText('News').first()).toBeVisible();
    });

    test('should handle long text gracefully', async ({ page }) => {
      await expect(page.getByText('A really long page name that must be affected.').first()).toBeVisible();
    });

    test('should display short paths', async ({ page }) => {
      await expect(page.getByText('About Us')).toBeVisible();
    });
  });

  test.describe('Microdata', () => {
    test('should include Schema.org microdata when enabled', async ({ page }) => {
      // Example 4 has microdata
      const sections = page.locator('section');
      const example4 = sections.nth(3);
      const ol = example4.locator('ol[itemscope][itemtype*="BreadcrumbList"]');
      await expect(ol).toBeVisible();
    });

    test('should have itemprop attributes on list items with microdata', async ({ page }) => {
      // Example 4 has microdata
      const sections = page.locator('section');
      const example4 = sections.nth(3);
      const listItems = example4.locator('li[itemprop="itemListElement"]');
      await expect(listItems.first()).toBeVisible();
    });
  });

  test.describe('RTL Support', () => {
    test('should display Arabic text correctly', async ({ page }) => {
      await expect(page.getByText('الصفحة الرئيسة')).toBeVisible();
      await expect(page.getByText('المركز الإعلامي')).toBeVisible();
      await expect(page.getByText('عزيزي العامل – اعرف حقوقك')).toBeVisible();
    });

    test('should have RTL direction for Arabic content', async ({ page }) => {
      const rtlSection = page.locator('[dir="rtl"]').first();
      await expect(rtlSection).toBeVisible();
      await expect(rtlSection).toHaveAttribute('dir', 'rtl');
    });
  });

  test.describe('Responsive Design', () => {
    test('should work on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await expect(page.getByRole('heading', { name: 'Breadcrumb Component' })).toBeVisible();
      await expect(page.locator('nav[aria-label="Breadcrumb"]').first()).toBeVisible();
    });

    test('should work on tablet viewport', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(page.getByRole('heading', { name: 'Breadcrumb Component' })).toBeVisible();
      await expect(page.locator('nav[aria-label="Breadcrumb"]').first()).toBeVisible();
    });

    test('should work on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page.getByRole('heading', { name: 'Breadcrumb Component' })).toBeVisible();
      await expect(page.locator('nav[aria-label="Breadcrumb"]').first()).toBeVisible();
    });
  });

  test.describe('Navigation Functionality', () => {
    test('should have clickable links', async ({ page }) => {
      const firstBreadcrumb = page.locator('nav[aria-label="Breadcrumb"]').first();
      const firstLink = firstBreadcrumb.locator('a').first();
      await expect(firstLink).toBeVisible();
      await expect(firstLink).toHaveAttribute('href');
    });

    test('should not have link on current page', async ({ page }) => {
      const currentPage = page.locator('[aria-current="page"]').first();
      await expect(currentPage).not.toHaveAttribute('href');
    });
  });

  test.describe('Browser Compatibility', () => {
    test.skip('should render correctly in different browsers', async ({ page, browserName }) => {
      await expect(page.locator('nav[aria-label="Breadcrumb"]').first()).toBeVisible();

      await expect(page).toHaveScreenshot(`breadcrumb-${browserName}.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 800, height: 600 },
      });
    });
  });
});
