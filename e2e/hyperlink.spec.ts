import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Hyperlink Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/hyperlink', { waitUntil: 'domcontentloaded' });
  });

  test('renders all hyperlink sections', async ({ page }) => {
    await expect(page.locator('[data-testid="hyperlink-default-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-cta-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-soft-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-button-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-external-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-accessibility-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-usecases-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="hyperlink-structure-section"]')).toBeVisible();
  });

  test.describe('Default Links', () => {
    test('renders default link', async ({ page }) => {
      const link = page.locator('[data-testid="default-link"]');
      await expect(link).toBeVisible();
      await expect(link).toContainText('This is a default hyperlink');
      await expect(link).toHaveAttribute('href', '/test');
    });

    test('renders inline link within paragraph', async ({ page }) => {
      const link = page.locator('[data-testid="inline-link"]');
      await expect(link).toBeVisible();
      await expect(link).toContainText('inline link');
    });
  });

  test.describe('CTA Links', () => {
    test('renders CTA link with icon', async ({ page }) => {
      const link = page.locator('[data-testid="cta-link"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveClass(/aegov-link/);
      await expect(link).toContainText('Learn more');
      // Check for SVG icon
      const svg = link.locator('svg');
      await expect(svg).toBeVisible();
      await expect(svg).toHaveClass(/link-icon/);
    });

    test('renders CTA link with custom icon', async ({ page }) => {
      const link = page.locator('[data-testid="cta-custom-icon"]');
      await expect(link).toBeVisible();
      const customIcon = page.locator('[data-testid="custom-icon"]');
      await expect(customIcon).toBeVisible();
      await expect(customIcon).toContainText('→');
    });
  });

  test.describe('Variant Links', () => {
    test('renders soft variant link', async ({ page }) => {
      const link = page.locator('[data-testid="soft-link"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveClass(/link-soft/);
    });

    test('renders secondary button link', async ({ page }) => {
      const link = page.locator('[data-testid="secondary-link"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveClass(/aegov-btn/);
      await expect(link).toHaveClass(/btn-outline/);
    });

    test('renders secondary-soft link', async ({ page }) => {
      const link = page.locator('[data-testid="secondary-soft-link"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveClass(/aegov-btn/);
      await expect(link).toHaveClass(/btn-soft/);
    });
  });

  test.describe('External Links', () => {
    test('opens external link in new tab', async ({ page }) => {
      const link = page.locator('[data-testid="external-link"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('target', '_blank');
      await expect(link).toHaveAttribute('rel', 'noopener noreferrer');
      await expect(link).toHaveAttribute('href', 'https://example.com');
    });

    test('renders external CTA link with icon', async ({ page }) => {
      const link = page.locator('[data-testid="external-cta"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveClass(/aegov-link/);
      await expect(link).toHaveAttribute('target', '_blank');
      const svg = link.locator('svg');
      await expect(svg).toBeVisible();
    });
  });

  test.describe('Accessibility Features', () => {
    test('supports title attribute', async ({ page }) => {
      const link = page.locator('[data-testid="link-with-title"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('title', 'View all available services');
    });

    test('supports aria-label attribute', async ({ page }) => {
      const link = page.locator('[data-testid="link-with-aria"]');
      await expect(link).toBeVisible();
      await expect(link).toHaveAttribute('aria-label', 'Navigate to homepage');
    });
  });

  test.describe('Use Cases', () => {
    test('renders service card with CTA', async ({ page }) => {
      await expect(page.locator('[data-testid="service-card-title"]')).toContainText(
        'Apply for Business License'
      );
      const cta = page.locator('[data-testid="service-cta"]');
      await expect(cta).toBeVisible();
      await expect(cta).toHaveClass(/aegov-link/);
    });

    test('renders article with inline links', async ({ page }) => {
      const link1 = page.locator('[data-testid="article-link-1"]');
      const link2 = page.locator('[data-testid="article-link-2"]');
      await expect(link1).toBeVisible();
      await expect(link2).toBeVisible();
      await expect(link1).toContainText('available services');
      await expect(link2).toContainText('help center');
    });
  });

  test.describe('Structure', () => {
    test('supports custom className', async ({ page }) => {
      const link = page.locator('[data-testid="structure-link"]');
      await expect(link).toHaveClass(/custom-test-class/);
    });
  });

  test.describe('Accessibility', () => {
    test('meets accessibility standards', async ({ page }) => {
      // Wait for content to fully load
      await expect(page.locator('h1')).toContainText('Hyperlink Component Showcase');
      await checkAccessibility(page);
    });
  });
});
