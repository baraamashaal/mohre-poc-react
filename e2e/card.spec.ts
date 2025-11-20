import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Card Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/card', { waitUntil: 'domcontentloaded' });
  });

  test('renders all card sections', async ({ page }) => {
    await expect(page.locator('[data-testid="card-basic-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-glow-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-sizes-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-news-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-service-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-complex-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-stack-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-grid-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="card-structure-section"]')).toBeVisible();
  });

  test.describe('Basic Cards', () => {
    test('renders default card', async ({ page }) => {
      const card = page.locator('[data-testid="default-card"]');
      await expect(card).toBeVisible();
      await expect(card).toContainText('Default Card');
    });

    test('renders bordered card', async ({ page }) => {
      const card = page.locator('[data-testid="bordered-card"]');
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/card-bordered/);
    });
  });

  test.describe('Glow Effect', () => {
    test('renders card with glow effect', async ({ page }) => {
      const card = page.locator('[data-testid="glow-card"]');
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/card-glow/);
    });
  });

  test.describe('Size Variants', () => {
    test('renders small card', async ({ page }) => {
      const card = page.locator('[data-testid="small-card"]');
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/card-sm/);
      await expect(card).toContainText('Small Card');
    });

    test('renders base card', async ({ page }) => {
      const card = page.locator('[data-testid="base-card"]');
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/card-base/);
      await expect(card).toContainText('Base Card');
    });

    test('renders large card', async ({ page }) => {
      const card = page.locator('[data-testid="large-card"]');
      await expect(card).toBeVisible();
      await expect(card).toHaveClass(/card-lg/);
      await expect(card).toContainText('Large Card');
    });
  });

  test.describe('News Card', () => {
    test('renders news card with content', async ({ page }) => {
      const card = page.locator('[data-testid="news-card"]');
      await expect(card).toBeVisible();
      await expect(card).toContainText('Breaking News Article');
      await expect(card).toContainText('Technology');
      await expect(card.locator('a')).toContainText('Read more');
    });
  });

  test.describe('Service Card', () => {
    test('renders service card with links', async ({ page }) => {
      const card = page.locator('[data-testid="service-card"]');
      await expect(card).toBeVisible();
      await expect(card).toContainText('Apply for Business License');
      await expect(card.locator('a').first()).toContainText('Apply for Business License');
      await expect(card).toContainText('Start service');
      await expect(card).toContainText('~15 min');
    });
  });

  test.describe('Complex Content', () => {
    test('renders complex card with buttons', async ({ page }) => {
      const card = page.locator('[data-testid="complex-card"]');
      await expect(card).toBeVisible();
      await expect(card).toContainText('Application Approved');
      await expect(card.getByRole('button', { name: 'Download' })).toBeVisible();
      await expect(card.getByRole('button', { name: 'View Details' })).toBeVisible();
    });
  });

  test.describe('Card Stack', () => {
    test('renders stacked cards', async ({ page }) => {
      const stack1 = page.locator('[data-testid="stack-card-1"]');
      const stack2 = page.locator('[data-testid="stack-card-2"]');
      const stack3 = page.locator('[data-testid="stack-card-3"]');

      await expect(stack1).toBeVisible();
      await expect(stack1).toContainText('Step 1');
      await expect(stack2).toBeVisible();
      await expect(stack2).toContainText('Step 2');
      await expect(stack3).toBeVisible();
      await expect(stack3).toContainText('Step 3');
    });
  });

  test.describe('Card Grid', () => {
    test('renders card grid', async ({ page }) => {
      const grid1 = page.locator('[data-testid="grid-card-1"]');
      const grid2 = page.locator('[data-testid="grid-card-2"]');
      const grid3 = page.locator('[data-testid="grid-card-3"]');

      await expect(grid1).toBeVisible();
      await expect(grid1).toContainText('1,234');
      await expect(grid1).toContainText('Applications');

      await expect(grid2).toBeVisible();
      await expect(grid2).toContainText('567');
      await expect(grid2).toContainText('Approved');

      await expect(grid3).toBeVisible();
      await expect(grid3).toContainText('89');
      await expect(grid3).toContainText('Pending');
    });
  });

  test.describe('Structure', () => {
    test('has correct AEGOV classes', async ({ page }) => {
      const card = page.locator('[data-testid="default-card"]');
      await expect(card).toHaveClass(/aegov-card/);
    });

    test('supports custom className', async ({ page }) => {
      const card = page.locator('[data-testid="structure-card"]');
      await expect(card).toHaveClass(/custom-test-class/);
    });
  });

  test.describe('Accessibility', () => {
    test('meets accessibility standards', async ({ page }) => {
      // Wait for content to fully load
      await expect(page.locator('h1')).toContainText('Card Component Showcase');
      await checkAccessibility(page);
    });
  });
});
