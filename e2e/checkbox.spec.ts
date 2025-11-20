import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Checkbox Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Checkbox showcase page
    await page.goto('/showcase/checkbox', { waitUntil: 'domcontentloaded' });

    // Wait for first checkbox to ensure content is rendered
    await expect(page.locator('.aegov-check-item').first()).toBeVisible();
  });

  test('renders checkbox elements', async ({ page }) => {
    // Wait for any checkbox to be visible
    const checkbox = page.locator('.aegov-check-item').first();
    await expect(checkbox).toBeVisible();
  });

  test('basic checkboxes render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="checkbox-basic-section"]');
    await expect(basicSection).toBeVisible();

    // Check different basic checkboxes
    await expect(page.locator('[data-testid="basic-checkbox"]')).toBeVisible();
    await expect(page.locator('[data-testid="labeled-checkbox"]')).toBeVisible();
    await expect(page.locator('[data-testid="checkbox-with-helper"]')).toBeVisible();
  });

  test('displays different checkbox sizes', async ({ page }) => {
    const sizesSection = page.locator('[data-testid="checkbox-sizes-section"]');
    await expect(sizesSection).toBeVisible();

    // Check for small size
    await expect(sizesSection.locator('.check-sm')).toBeVisible();

    // Check for large size
    await expect(sizesSection.locator('.check-lg')).toBeVisible();
  });

  test('displays variant checkboxes', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="checkbox-variants-section"]');
    await expect(variantsSection).toBeVisible();

    // Check for secondary variant
    await expect(variantsSection.locator('.check-secondary')).toBeVisible();
  });

  test('displays checkbox states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="checkbox-states-section"]');
    await expect(statesSection).toBeVisible();

    // Check normal checkbox
    await expect(page.locator('[data-testid="normal-checkbox"]')).toBeVisible();

    // Check checked checkbox
    const checkedCheckbox = page.locator('[data-testid="checked-checkbox"]');
    await expect(checkedCheckbox).toBeChecked();

    // Check required checkbox
    const requiredCheckbox = page.locator('[data-testid="required-checkbox"]');
    await expect(requiredCheckbox).toHaveAttribute('required');

    // Check disabled checkbox
    const disabledCheckbox = page.locator('[data-testid="disabled-checkbox"]');
    await expect(disabledCheckbox).toBeDisabled();

    // Check indeterminate checkbox
    const indeterminateCheckbox = page.locator('[data-testid="indeterminate-checkbox"]');
    const isIndeterminate = await indeterminateCheckbox.evaluate((el: HTMLInputElement) => el.indeterminate);
    expect(isIndeterminate).toBe(true);

    // Check error message
    await expect(page.getByText(/This field is required/)).toBeVisible();
  });

  test('handles checkbox toggling', async ({ page }) => {
    const checkbox = page.locator('[data-testid="basic-checkbox"]');

    // Initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Click to check
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    // Click to uncheck
    await checkbox.click();
    await expect(checkbox).not.toBeChecked();
  });

  test('clicking label toggles checkbox', async ({ page }) => {
    const checkbox = page.locator('[data-testid="basic-checkbox"]');
    const label = page.getByText('Accept terms');

    // Initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Click label to check
    await label.click();
    await expect(checkbox).toBeChecked();

    // Click label to uncheck
    await label.click();
    await expect(checkbox).not.toBeChecked();
  });

  test('disabled checkbox cannot be toggled', async ({ page }) => {
    const disabledCheckbox = page.locator('[data-testid="disabled-checkbox"]');

    // Verify it's disabled
    await expect(disabledCheckbox).toBeDisabled();

    // Try to click - should not change state
    await disabledCheckbox.click({ force: true });
    await expect(disabledCheckbox).not.toBeChecked();
  });

  test('checkbox groups render correctly', async ({ page }) => {
    const groupsSection = page.locator('[data-testid="checkbox-groups-section"]');
    await expect(groupsSection).toBeVisible();

    // Check interest checkboxes
    await expect(page.locator('[data-testid="interest-technology"]')).toBeVisible();
    await expect(page.locator('[data-testid="interest-sports"]')).toBeVisible();
    await expect(page.locator('[data-testid="interest-music"]')).toBeVisible();
    await expect(page.locator('[data-testid="interest-travel"]')).toBeVisible();

    // Check notification checkboxes
    await expect(page.locator('[data-testid="notify-email"]')).toBeVisible();
    await expect(page.locator('[data-testid="notify-sms"]')).toBeVisible();
    await expect(page.locator('[data-testid="notify-push"]')).toBeVisible();
  });

  test('multiple checkboxes in group can be selected', async ({ page }) => {
    const tech = page.locator('[data-testid="interest-technology"]');
    const sports = page.locator('[data-testid="interest-sports"]');

    // Select both
    await tech.click();
    await sports.click();

    // Both should be checked
    await expect(tech).toBeChecked();
    await expect(sports).toBeChecked();
  });

  test('real-world examples render correctly', async ({ page }) => {
    const examplesSection = page.locator('[data-testid="checkbox-examples-section"]');
    await expect(examplesSection).toBeVisible();

    // Check terms and conditions
    await expect(page.locator('[data-testid="accept-terms"]')).toBeVisible();

    // Check newsletter subscription
    await expect(page.locator('[data-testid="subscribe-weekly"]')).toBeVisible();
    await expect(page.locator('[data-testid="subscribe-promo"]')).toBeVisible();

    // Check select all
    await expect(page.locator('[data-testid="select-all"]')).toBeVisible();
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/You can unsubscribe at any time/)).toBeVisible();
    await expect(page.getByText(/Required to proceed with registration/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
    await expect(errorMsg.first()).toContainText('Error:');
  });

  test('labels are associated with checkboxes', async ({ page }) => {
    const labeledCheckbox = page.getByLabel('Accept terms');
    await expect(labeledCheckbox).toBeVisible();

    // Can interact with checkbox via label
    await labeledCheckbox.click();
    await expect(labeledCheckbox).toBeChecked();
  });

  test('supports keyboard interaction', async ({ page }) => {
    const checkbox = page.locator('[data-testid="basic-checkbox"]');

    // Focus checkbox
    await checkbox.focus();

    // Initially unchecked
    await expect(checkbox).not.toBeChecked();

    // Press space to check
    await page.keyboard.press('Space');
    await expect(checkbox).toBeChecked();

    // Press space to uncheck
    await page.keyboard.press('Space');
    await expect(checkbox).not.toBeChecked();

    // Tab to next field
    await page.keyboard.press('Tab');

    // Checkbox should lose focus
    await expect(checkbox).not.toBeFocused();
  });

  test('checkbox has proper ARIA attributes', async ({ page }) => {
    // Check disabled checkbox has aria-disabled
    const disabledCheckbox = page.locator('[data-testid="disabled-checkbox"]');
    await expect(disabledCheckbox).toHaveAttribute('aria-disabled', 'true');

    // Check error checkbox has aria-invalid
    const errorCheckbox = page.locator('[data-testid="error-checkbox"]');
    await expect(errorCheckbox).toHaveAttribute('aria-invalid', 'true');

    // Check required checkbox
    const requiredCheckbox = page.locator('[data-testid="required-aria-checkbox"]');
    await expect(requiredCheckbox).toHaveAttribute('aria-required', 'true');
  });

  test('accessibility features section renders correctly', async ({ page }) => {
    const a11ySection = page.locator('[data-testid="checkbox-a11y-section"]');
    await expect(a11ySection).toBeVisible();

    // Check accessible checkbox
    const accessibleCheckbox = page.locator('[data-testid="accessible-checkbox"]');
    await expect(accessibleCheckbox).toHaveAttribute('aria-label', 'Checkbox with aria-label');

    // Check checkbox with description
    const checkboxWithDescription = page.locator('[data-testid="checkbox-with-description"]');
    await expect(checkboxWithDescription).toHaveAttribute('aria-describedby', 'helper-text');
  });

  test('checkbox meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('supports RTL layout', async ({ page }) => {
    // Set RTL direction
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const checkbox = page.locator('.aegov-check-item').first();
    await expect(checkbox).toBeVisible();

    // Check if text direction is applied
    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    expect(dir).toBe('rtl');
  });

  test('multiple checkboxes can be displayed simultaneously', async ({ page }) => {
    const checkboxes = page.locator('.aegov-check-item');
    const count = await checkboxes.count();

    // Should have many checkboxes on the showcase page
    expect(count).toBeGreaterThan(20);
  });

  test('indeterminate state renders correctly', async ({ page }) => {
    const selectAll = page.locator('[data-testid="select-all"]');

    // Check indeterminate state
    const isIndeterminate = await selectAll.evaluate((el: HTMLInputElement) => el.indeterminate);
    expect(isIndeterminate).toBe(true);

    // Helper text should indicate partial selection
    await expect(page.getByText(/2 of 4 items selected/)).toBeVisible();
  });

  test('select all example works correctly', async ({ page }) => {
    const item1 = page.locator('[data-testid="item-1"]');
    const item2 = page.locator('[data-testid="item-2"]');
    const item3 = page.locator('[data-testid="item-3"]');
    const item4 = page.locator('[data-testid="item-4"]');

    // Items 1 and 2 should be checked by default
    await expect(item1).toBeChecked();
    await expect(item2).toBeChecked();
    await expect(item3).not.toBeChecked();
    await expect(item4).not.toBeChecked();

    // Can toggle individual items
    await item3.click();
    await expect(item3).toBeChecked();
  });

  test('checkbox maintains state on blur and focus', async ({ page }) => {
    const checkbox = page.locator('[data-testid="basic-checkbox"]');

    // Check the checkbox
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    // Blur
    await page.keyboard.press('Tab');

    // Focus again
    await checkbox.focus();

    // Should still be checked
    await expect(checkbox).toBeChecked();
  });

  test('newsletter subscription example has correct default states', async ({ page }) => {
    const weeklyNewsletter = page.locator('[data-testid="subscribe-weekly"]');
    const promoEmails = page.locator('[data-testid="subscribe-promo"]');

    // Weekly should be checked by default
    await expect(weeklyNewsletter).toBeChecked();

    // Promo should be unchecked by default
    await expect(promoEmails).not.toBeChecked();
  });
});
