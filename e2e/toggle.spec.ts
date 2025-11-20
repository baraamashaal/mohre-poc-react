import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Toggle Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/toggle', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.aegov-toggle').first()).toBeVisible();
  });

  test('renders toggle elements', async ({ page }) => {
    const toggle = page.locator('.aegov-toggle').first();
    await expect(toggle).toBeVisible();
  });

  test('basic toggles render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="toggle-basic-section"]');
    await expect(basicSection).toBeVisible();
    await expect(page.locator('[data-testid="basic-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="checked-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="no-label-toggle"]')).toBeVisible();
  });

  test('displays different toggle variants', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="toggle-variants-section"]');
    await expect(variantsSection).toBeVisible();
    await expect(page.locator('[data-testid="primary-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="secondary-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="success-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="mode-toggle"]')).toBeVisible();
  });

  test('displays toggle states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="toggle-states-section"]');
    await expect(statesSection).toBeVisible();
    await expect(page.locator('[data-testid="normal-toggle"]')).toBeVisible();
    await expect(page.locator('[data-testid="disabled-toggle"]')).toBeDisabled();
    await expect(page.locator('[data-testid="disabled-checked-toggle"]')).toBeDisabled();
  });

  test('handles toggle click', async ({ page }) => {
    const toggle = page.locator('[data-testid="basic-toggle"]');
    const isCheckedBefore = await toggle.isChecked();
    // Click the label wrapper since the input is hidden
    await toggle.locator('..').click();
    const isCheckedAfter = await toggle.isChecked();
    expect(isCheckedBefore).not.toBe(isCheckedAfter);
  });

  test('interactive toggles update state', async ({ page }) => {
    const notificationsToggle = page.locator('[data-testid="notifications-toggle"]');
    const interactiveSection = page.locator('[data-testid="toggle-interactive-section"]');

    // Check initial state
    const initialState = await notificationsToggle.isChecked();

    // Click toggle (click the label wrapper since input is hidden)
    await notificationsToggle.locator('..').click();

    // Verify state changed
    const newState = await notificationsToggle.isChecked();
    expect(newState).not.toBe(initialState);

    // Verify status text updated
    const statusText = await interactiveSection.locator('p').filter({ hasText: /Status:/ }).first().textContent();
    expect(statusText).toContain(newState ? 'Enabled' : 'Disabled');
  });

  test('checked toggle has correct initial state', async ({ page }) => {
    const checkedToggle = page.locator('[data-testid="checked-toggle"]');
    await expect(checkedToggle).toBeChecked();
  });

  test('unchecked toggle has correct initial state', async ({ page }) => {
    const basicToggle = page.locator('[data-testid="basic-toggle"]');
    const isChecked = await basicToggle.isChecked();
    expect(isChecked).toBe(false);
  });

  test('disabled toggles cannot be toggled', async ({ page }) => {
    const disabledToggle = page.locator('[data-testid="disabled-toggle"]');
    const initialState = await disabledToggle.isChecked();

    // Try to click (should not work)
    await disabledToggle.click({ force: true });

    const newState = await disabledToggle.isChecked();
    expect(newState).toBe(initialState);
  });

  test('toggle has proper ARIA attributes', async ({ page }) => {
    await expect(page.locator('[data-testid="disabled-toggle"]')).toHaveAttribute('aria-disabled', 'true');
    await expect(page.locator('[data-testid="disabled-checked-toggle"]')).toHaveAttribute('aria-disabled', 'true');

    const basicToggle = page.locator('[data-testid="basic-toggle"]');
    await expect(basicToggle).toHaveAttribute('role', 'switch');

    const isChecked = await basicToggle.isChecked();
    await expect(basicToggle).toHaveAttribute('aria-checked', isChecked ? 'true' : 'false');
  });

  test('toggle meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('privacy settings toggles work', async ({ page }) => {
    const profileToggle = page.locator('[data-testid="privacy-profile-toggle"]');
    const activityToggle = page.locator('[data-testid="privacy-activity-toggle"]');
    const locationToggle = page.locator('[data-testid="privacy-location-toggle"]');

    await expect(profileToggle).toBeVisible();
    await expect(activityToggle).toBeVisible();
    await expect(locationToggle).toBeVisible();

    // Test toggling
    const initialState = await locationToggle.isChecked();
    await locationToggle.locator('..').click();
    const newState = await locationToggle.isChecked();
    expect(newState).not.toBe(initialState);
  });

  test('notification preferences toggles work', async ({ page }) => {
    const pushToggle = page.locator('[data-testid="notif-push-toggle"]');
    const emailToggle = page.locator('[data-testid="notif-email-toggle"]');
    const smsToggle = page.locator('[data-testid="notif-sms-toggle"]');

    await expect(pushToggle).toBeVisible();
    await expect(emailToggle).toBeVisible();
    await expect(smsToggle).toBeVisible();
  });

  test('system preferences toggles work', async ({ page }) => {
    const analyticsToggle = page.locator('[data-testid="system-analytics-toggle"]');
    const betaToggle = page.locator('[data-testid="system-beta-toggle"]');
    const motionToggle = page.locator('[data-testid="system-motion-toggle"]');

    await expect(analyticsToggle).toBeVisible();
    await expect(betaToggle).toBeVisible();
    await expect(motionToggle).toBeVisible();
  });

  test('toggles are keyboard accessible', async ({ page }) => {
    const toggle = page.locator('[data-testid="a11y-keyboard-toggle"]');

    // Focus the toggle with keyboard
    await toggle.focus();

    // Check it has focus
    const focusedElement = await page.evaluate(() => {
      const activeEl = document.activeElement;
      return activeEl?.getAttribute('data-testid');
    });
    expect(focusedElement).toBe('a11y-keyboard-toggle');

    // Toggle with space key
    const initialState = await toggle.isChecked();
    await page.keyboard.press('Space');
    const newState = await toggle.isChecked();
    expect(newState).not.toBe(initialState);
  });

  test('toggle with visible label is accessible', async ({ page }) => {
    const toggle = page.locator('[data-testid="a11y-visible-label-toggle"]');
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveAttribute('role', 'switch');
  });

  test('multiple interactive toggles work independently', async ({ page }) => {
    const notificationsToggle = page.locator('[data-testid="notifications-toggle"]');
    const darkModeToggle = page.locator('[data-testid="dark-mode-toggle"]');
    const autoSaveToggle = page.locator('[data-testid="auto-save-toggle"]');
    const emailAlertsToggle = page.locator('[data-testid="email-alerts-toggle"]');

    // Get initial states
    const notifInitial = await notificationsToggle.isChecked();
    const darkInitial = await darkModeToggle.isChecked();
    const autoInitial = await autoSaveToggle.isChecked();
    const emailInitial = await emailAlertsToggle.isChecked();

    // Toggle one
    await darkModeToggle.locator('..').click();

    // Verify only one changed
    expect(await notificationsToggle.isChecked()).toBe(notifInitial);
    expect(await darkModeToggle.isChecked()).not.toBe(darkInitial);
    expect(await autoSaveToggle.isChecked()).toBe(autoInitial);
    expect(await emailAlertsToggle.isChecked()).toBe(emailInitial);
  });

  test('variant classes are applied correctly', async ({ page }) => {
    // Check if variant classes are present in the DOM
    const secondaryToggle = page.locator('[data-testid="secondary-toggle"]').locator('..');
    await expect(secondaryToggle).toHaveClass(/toggle-secondary/);

    const successToggle = page.locator('[data-testid="success-toggle"]').locator('..');
    await expect(successToggle).toHaveClass(/toggle-success/);

    const modeToggle = page.locator('[data-testid="mode-toggle"]').locator('..');
    await expect(modeToggle).toHaveClass(/toggle-mode/);
  });
});
