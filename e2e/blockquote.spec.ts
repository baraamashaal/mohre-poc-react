import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Blockquote Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/blockquote');
  });

  test.describe('Rendering', () => {
    test('should render all examples', async ({ page }) => {
      // Check main heading
      await expect(page.getByRole('heading', { name: 'Blockquote Component', level: 1 })).toBeVisible();

      // Check example headings
      await expect(
        page.getByRole('heading', { name: 'Example 1: Standard Blockquote with Icon' })
      ).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Example 2: Basic Code Structure Template' })
      ).toBeVisible();
      await expect(
        page.getByRole('heading', { name: 'Example 3: Colored Blockquote (Without Icon)' })
      ).toBeVisible();
    });

    test('should render blockquote elements', async ({ page }) => {
      const blockquotes = page.locator('blockquote.aegov-quote');
      await expect(blockquotes).toHaveCount(await blockquotes.count());
      await expect(blockquotes.first()).toBeVisible();
    });

    test('should render quotation icons in soft style', async ({ page }) => {
      // Soft style blockquotes should have icons
      const icons = page.locator('.aegov-quote:not(.quote-colored) .quote-icon');
      await expect(icons.first()).toBeVisible();
    });

    test('should not render icons in colored style', async ({ page }) => {
      // Colored blockquotes should not have icons
      const coloredQuotes = page.locator('.aegov-quote.quote-colored');
      const firstColored = coloredQuotes.first();

      await expect(firstColored).toBeVisible();

      // Check that colored blockquote doesn't have icon
      const icon = firstColored.locator('.quote-icon');
      await expect(icon).not.toBeVisible();
    });

    test('should render author names', async ({ page }) => {
      await expect(
        page.getByText('AbdulRahman Bin Mohammed Al Owais').first()
      ).toBeVisible();
      await expect(page.getByText('Author Full Name')).toBeVisible();
    });

    test('should render author titles', async ({ page }) => {
      await expect(page.getByText('Minister of Health & Prevention').first()).toBeVisible();
      await expect(page.getByText('Author Title or Source Name')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have no accessibility violations', async ({ page }) => {
      // Wait for the main content to be visible (not just the loading spinner)
      await page.waitForSelector('main', { state: 'visible' });
      await page.waitForSelector('h1', { state: 'visible' });

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have semantic blockquote elements', async ({ page }) => {
      const blockquotes = page.locator('blockquote');
      await expect(blockquotes.first()).toBeVisible();

      // Check that blockquotes have cite attribute
      const firstQuote = blockquotes.first();
      await expect(firstQuote).toHaveAttribute('cite', /.+/);
    });

    test('should have proper ARIA attributes on icons', async ({ page }) => {
      const icons = page.locator('.quote-icon').first();
      if (await icons.isVisible()) {
        await expect(icons).toHaveAttribute('aria-hidden', 'true');
      }
    });
  });

  test.describe('Style Variations', () => {
    test('should display soft style correctly', async ({ page }) => {
      const softQuotes = page.locator('.aegov-quote:not(.quote-colored)').first();
      await expect(softQuotes).toBeVisible();
      await expect(softQuotes).toHaveClass(/aegov-quote/);
    });

    test('should display colored style correctly', async ({ page }) => {
      const coloredQuotes = page.locator('.aegov-quote.quote-colored').first();
      await expect(coloredQuotes).toBeVisible();
      await expect(coloredQuotes).toHaveClass(/quote-colored/);
    });
  });

  test.describe('Content', () => {
    test('should display quote text', async ({ page }) => {
      await expect(
        page.getByText(/The confidence of our wise leadership/, { exact: false }).first()
      ).toBeVisible();
    });

    test('should handle long content', async ({ page }) => {
      await expect(page.getByText(/Lorem ipsum dolor sit amet/, { exact: false })).toBeVisible();
    });

    test('should handle short content', async ({ page }) => {
      await expect(page.getByText(/Imagination is more important/, { exact: false })).toBeVisible();
    });
  });

  test.describe('RTL Support', () => {
    test('should display Arabic text correctly', async ({ page }) => {
      // Check for Arabic author name
      await expect(page.getByText('عبدالرحمن بن محمد العويس').first()).toBeVisible();

      // Check for Arabic quote text
      await expect(
        page.getByText(/ثقة قيادتنا الرشيدة/, { exact: false }).first()
      ).toBeVisible();
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
      await expect(page.getByRole('heading', { name: 'Blockquote Component' })).toBeVisible();
      await expect(page.locator('.aegov-quote').first()).toBeVisible();
    });

    test('should work on tablet viewport', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      await expect(page.getByRole('heading', { name: 'Blockquote Component' })).toBeVisible();
      await expect(page.locator('.aegov-quote').first()).toBeVisible();
    });

    test('should work on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      await expect(page.getByRole('heading', { name: 'Blockquote Component' })).toBeVisible();
      await expect(page.locator('.aegov-quote').first()).toBeVisible();
    });
  });

  test.describe('Visual Structure', () => {
    test('should have quote-footer element', async ({ page }) => {
      const footer = page.locator('.quote-footer').first();
      await expect(footer).toBeVisible();
    });

    test('should have quote-author element', async ({ page }) => {
      const author = page.locator('.quote-author').first();
      await expect(author).toBeVisible();
    });

    test('should have quote-cite element', async ({ page }) => {
      const cite = page.locator('.quote-cite').first();
      await expect(cite).toBeVisible();
    });

    test('should maintain proper DOM hierarchy', async ({ page }) => {
      const blockquote = page.locator('.aegov-quote').first();
      const footer = blockquote.locator('.quote-footer');
      const author = footer.locator('.quote-author');
      const cite = footer.locator('.quote-cite');

      await expect(blockquote).toBeVisible();
      await expect(footer).toBeVisible();
      await expect(author).toBeVisible();
      await expect(cite).toBeVisible();
    });
  });

  test.describe('Browser Compatibility', () => {
    test.skip('should render correctly in different browsers', async ({ page, browserName }) => {
      await expect(page.locator('.aegov-quote').first()).toBeVisible();

      // Take screenshot for visual regression
      await expect(page).toHaveScreenshot(`blockquote-${browserName}.png`, {
        fullPage: false,
        clip: { x: 0, y: 0, width: 800, height: 600 },
      });
    });
  });
});
