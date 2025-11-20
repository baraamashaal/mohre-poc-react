import { test, expect } from '@playwright/test';

test.describe('Banner Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/banner');
    await expect(page.locator('h1')).toContainText('Banner Component Showcase');
  });

  test.describe('Default Banner', () => {
    test('should render default banner', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const banner = section.getByTestId('banner-default');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/aegov-banner/);
      await expect(banner).toHaveClass(/banner-top/);
      await expect(banner).toHaveAttribute('role', 'region');
    });
  });

  test.describe('Banner with Title', () => {
    test('should render banner with title', async ({ page }) => {
      const section = page.getByTestId('title-section');
      const banner = section.getByTestId('banner-title');

      await expect(banner).toBeVisible();
      await expect(section.getByText('Important Notice')).toBeVisible();
    });
  });

  test.describe('Position Variants', () => {
    test('should render top position banner', async ({ page }) => {
      const section = page.getByTestId('position-section');
      const banner = section.getByTestId('banner-top');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/banner-top/);
    });

    test('should render bottom position banner', async ({ page }) => {
      const section = page.getByTestId('position-section');
      const banner = section.getByTestId('banner-bottom');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/banner-bottom/);
    });
  });

  test.describe('Color Variants', () => {
    test('should render default variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const banner = section.getByTestId('banner-variant-default');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/aegov-banner/);
    });

    test('should render camel variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const banner = section.getByTestId('banner-variant-camel');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-camel-600/);
    });

    test('should render red variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const banner = section.getByTestId('banner-variant-red');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-aered-50/);
    });

    test('should render dark variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const banner = section.getByTestId('banner-variant-dark');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-slate-700/);
    });

    test('should render notice variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const banner = section.getByTestId('banner-variant-notice');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/banner-notice/);
    });
  });

  test.describe('Dismissible Banner', () => {
    test('should show dismiss button', async ({ page }) => {
      const section = page.getByTestId('dismissible-section');
      const banner = section.getByTestId('banner-dismissible');

      await expect(banner).toBeVisible();
      const closeButton = banner.getByRole('button', { name: /close/i });
      await expect(closeButton).toBeVisible();
    });

    test('should dismiss banner when close button is clicked', async ({ page }) => {
      const section = page.getByTestId('dismissible-section');
      const banner = section.getByTestId('banner-dismissible');

      await expect(banner).toBeVisible();
      const closeButton = banner.getByRole('button', { name: /close/i });
      await closeButton.click();

      await expect(banner).not.toBeVisible();
      await expect(section.getByText('Banner dismissed')).toBeVisible();
    });

    test('should reset banner when reset button is clicked', async ({ page }) => {
      const section = page.getByTestId('dismissible-section');
      const banner = section.getByTestId('banner-dismissible');

      // Dismiss banner
      const closeButton = banner.getByRole('button', { name: /close/i });
      await closeButton.click();
      await expect(banner).not.toBeVisible();

      // Reset banner
      const resetButton = section.getByTestId('reset-dismissible');
      await resetButton.click();

      await expect(banner).toBeVisible();
    });
  });

  test.describe('Banner with Action', () => {
    test('should render action button', async ({ page }) => {
      const section = page.getByTestId('action-section');
      const banner = section.getByTestId('banner-action');

      await expect(banner).toBeVisible();
      const actionButton = banner.getByRole('button', { name: 'Learn More' });
      await expect(actionButton).toBeVisible();
    });

    test('should trigger action on click', async ({ page }) => {
      const section = page.getByTestId('action-section');
      const banner = section.getByTestId('banner-action');

      const actionButton = banner.getByRole('button', { name: 'Learn More' });

      // Set up dialog handler before clicking
      page.once('dialog', async (dialog) => {
        expect(dialog.message()).toBe('Learn More clicked!');
        await dialog.accept();
      });

      await actionButton.click();
    });

    test('should render camel variant with action', async ({ page }) => {
      const section = page.getByTestId('action-section');
      const banner = section.getByTestId('banner-action-camel');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-camel-600/);
      const actionButton = banner.getByRole('button', { name: 'Subscribe Now' });
      await expect(actionButton).toBeVisible();
    });
  });

  test.describe('Centered Content', () => {
    test('should render centered banner', async ({ page }) => {
      const section = page.getByTestId('centered-section');
      const banner = section.getByTestId('banner-centered');

      await expect(banner).toBeVisible();
      const content = banner.locator('.banner-content');
      await expect(content).toHaveClass(/md:justify-center/);
    });

    test('should render centered dark banner', async ({ page }) => {
      const section = page.getByTestId('centered-section');
      const banner = section.getByTestId('banner-centered-dark');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-slate-700/);
      const content = banner.locator('.banner-content');
      await expect(content).toHaveClass(/md:justify-center/);
    });
  });

  test.describe('ARIA Roles', () => {
    test('should have default region role', async ({ page }) => {
      const section = page.getByTestId('aria-section');
      const banner = section.getByTestId('banner-role-region');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveAttribute('role', 'region');
    });

    test('should have alert role', async ({ page }) => {
      const section = page.getByTestId('aria-section');
      const banner = section.getByTestId('banner-role-alert');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveAttribute('role', 'alert');
    });

    test('should have status role', async ({ page }) => {
      const section = page.getByTestId('aria-section');
      const banner = section.getByTestId('banner-role-status');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveAttribute('role', 'status');
    });
  });

  test.describe('Controlled Banner', () => {
    test('should toggle banner visibility', async ({ page }) => {
      const section = page.getByTestId('controlled-section');
      const banner = section.getByTestId('banner-controlled');
      const toggleButton = section.getByTestId('toggle-controlled');

      // Banner should be visible initially
      await expect(banner).toBeVisible();

      // Hide banner
      await toggleButton.click();
      await expect(banner).not.toBeVisible();

      // Show banner again
      await toggleButton.click();
      await expect(banner).toBeVisible();
    });

    test('should have all features in controlled banner', async ({ page }) => {
      const section = page.getByTestId('controlled-section');
      const banner = section.getByTestId('banner-controlled');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/banner-notice/);

      // Check title
      await expect(banner.getByText('System Update', { exact: true })).toBeVisible();

      // Check action button
      await expect(banner.getByRole('button', { name: 'View Details' })).toBeVisible();

      // Check dismiss button
      await expect(banner.getByRole('button', { name: /close/i })).toBeVisible();
    });
  });

  test.describe('Combined Features', () => {
    test('should render banner with all features', async ({ page }) => {
      const section = page.getByTestId('combined-section');
      const banner = section.getByTestId('banner-combined');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-camel-600/);
      await expect(banner).toHaveAttribute('aria-label', 'Welcome banner');

      // Check title
      await expect(banner.getByText('Welcome', { exact: true })).toBeVisible();

      // Check action button
      await expect(banner.getByRole('button', { name: 'Get Started' })).toBeVisible();

      // Check dismiss button
      await expect(banner.getByRole('button', { name: /close/i })).toBeVisible();

      // Check centered content
      const content = banner.locator('.banner-content');
      await expect(content).toHaveClass(/md:justify-center/);
    });

    test('should render dark combined banner with alert role', async ({ page }) => {
      const section = page.getByTestId('combined-section');
      const banner = section.getByTestId('banner-combined-dark');

      await expect(banner).toBeVisible();
      await expect(banner).toHaveClass(/bg-slate-700/);
      await expect(banner).toHaveAttribute('role', 'alert');

      // Check title
      await expect(banner.getByText('Maintenance Notice')).toBeVisible();

      // Check action button
      await expect(banner.getByRole('button', { name: 'Learn More' })).toBeVisible();

      // Check dismiss button
      await expect(banner.getByRole('button', { name: /close/i })).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have accessible dismiss button', async ({ page }) => {
      const section = page.getByTestId('dismissible-section');
      const banner = section.getByTestId('banner-dismissible');
      const closeButton = banner.getByRole('button', { name: /close/i });

      await expect(closeButton).toHaveAttribute('aria-label', 'Close');
    });

    test('should be keyboard navigable', async ({ page }) => {
      const section = page.getByTestId('dismissible-section');
      const banner = section.getByTestId('banner-dismissible');
      const closeButton = banner.getByRole('button', { name: /close/i });

      await closeButton.focus();
      await expect(closeButton).toBeFocused();
    });

    test('should have aria-label when provided', async ({ page }) => {
      const section = page.getByTestId('combined-section');
      const banner = section.getByTestId('banner-combined');

      await expect(banner).toHaveAttribute('aria-label', 'Welcome banner');
    });
  });
});
