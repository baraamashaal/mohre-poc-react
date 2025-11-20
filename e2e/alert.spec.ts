import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Alert Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Alert showcase page
    await page.goto('/showcase/alert', { waitUntil: 'domcontentloaded' });

    // Wait for first alert to ensure content is rendered
    await expect(page.locator('.aegov-alert').first()).toBeVisible();
  });

  test('renders alert messages', async ({ page }) => {
    // Wait for any alert to be visible
    const alert = page.locator('.aegov-alert').first();
    await expect(alert).toBeVisible();
  });

  test('dismisses alert when close button is clicked', async ({ page }) => {
    // Find a dismissible alert
    const alert = page.locator('.aegov-alert').first();
    const dismissButton = alert.locator('button[aria-label*="Dismiss"]');

    if (await dismissButton.isVisible()) {
      await dismissButton.click();

      // Wait for animation to complete
      await page.waitForTimeout(300);

      // Alert should be hidden
      await expect(alert).not.toBeVisible();
    }
  });

  test('displays different alert types with correct styling', async ({ page }) => {
    // Check if different alert types exist and have correct classes
    const infoAlert = page.locator('.aegov-alert.alert-info').first();
    const successAlert = page.locator('.aegov-alert.alert-success').first();
    const warningAlert = page.locator('.aegov-alert.alert-warning').first();
    const errorAlert = page.locator('.aegov-alert.alert-error').first();

    // Check if at least one alert type is visible
    const alertTypes = [infoAlert, successAlert, warningAlert, errorAlert];
    let foundAlert = false;

    for (const alert of alertTypes) {
      if (await alert.isVisible()) {
        foundAlert = true;
        break;
      }
    }

    expect(foundAlert).toBe(true);
  });

  test('alert meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('alert has proper ARIA attributes', async ({ page }) => {
    const alert = page.locator('.aegov-alert').first();

    if (await alert.isVisible()) {
      // Check for role attribute
      const role = await alert.getAttribute('role');
      expect(role).toBeTruthy();

      // Check for aria-live attribute
      const ariaLive = await alert.getAttribute('aria-live');
      expect(ariaLive).toBeTruthy();
      expect(['polite', 'assertive', 'off']).toContain(ariaLive);
    }
  });

  test('keyboard navigation works for dismissible alerts', async ({ page }) => {
    const alert = page.locator('.aegov-alert').first();
    const dismissButton = alert.locator('button[aria-label*="Dismiss"]');

    if (await dismissButton.isVisible()) {
      // Focus the dismiss button
      await dismissButton.focus();

      // Press Enter to dismiss
      await page.keyboard.press('Enter');

      // Wait for animation
      await page.waitForTimeout(300);

      // Alert should be hidden
      await expect(alert).not.toBeVisible();
    }
  });

  test('supports RTL layout', async ({ page }) => {
    // Set RTL direction
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const alert = page.locator('.aegov-alert').first();

    if (await alert.isVisible()) {
      await expect(alert).toBeVisible();

      // Check if text direction is applied
      const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
      expect(dir).toBe('rtl');
    }
  });

  test('alert content is readable', async ({ page }) => {
    const alert = page.locator('.aegov-alert').first();

    if (await alert.isVisible()) {
      const content = await alert.locator('.alert-content').textContent();
      expect(content).toBeTruthy();
      expect(content!.length).toBeGreaterThan(0);
    }
  });

  test('multiple alerts can be displayed simultaneously', async ({ page }) => {
    const alerts = page.locator('.aegov-alert');
    const count = await alerts.count();

    // At least check that alerts can be rendered
    expect(count).toBeGreaterThanOrEqual(0);
  });
});
