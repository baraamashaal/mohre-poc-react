import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Radio Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Radio showcase page
    await page.goto('/showcase/radio', { waitUntil: 'domcontentloaded' });

    // Wait for first radio to ensure content is rendered
    await expect(page.locator('.aegov-check-item').first()).toBeVisible();
  });

  test('renders radio elements', async ({ page }) => {
    // Wait for any radio to be visible
    const radio = page.locator('.aegov-check-item').first();
    await expect(radio).toBeVisible();
  });

  test('basic radios render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="radio-basic-section"]');
    await expect(basicSection).toBeVisible();

    // Check different basic radios
    await expect(page.locator('[data-testid="basic-radio"]')).toBeVisible();
    await expect(page.locator('[data-testid="labeled-radio"]')).toBeVisible();
    await expect(page.locator('[data-testid="radio-with-helper"]')).toBeVisible();
  });

  test('displays different radio sizes', async ({ page }) => {
    const sizesSection = page.locator('[data-testid="radio-sizes-section"]');
    await expect(sizesSection).toBeVisible();

    // Check for small size
    await expect(sizesSection.locator('.check-sm')).toBeVisible();

    // Check for large size
    await expect(sizesSection.locator('.check-lg')).toBeVisible();
  });

  test('displays variant radios', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="radio-variants-section"]');
    await expect(variantsSection).toBeVisible();

    // Check for secondary variant
    await expect(variantsSection.locator('.check-secondary')).toBeVisible();
  });

  test('displays radio states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="radio-states-section"]');
    await expect(statesSection).toBeVisible();

    // Check normal radio
    await expect(page.locator('[data-testid="normal-radio"]')).toBeVisible();

    // Check checked radio
    const checkedRadio = page.locator('[data-testid="checked-radio"]');
    await expect(checkedRadio).toBeChecked();

    // Check required radio
    const requiredRadio = page.locator('[data-testid="required-radio"]');
    await expect(requiredRadio).toHaveAttribute('required');

    // Check disabled radio
    const disabledRadio = page.locator('[data-testid="disabled-radio"]');
    await expect(disabledRadio).toBeDisabled();

    // Check error message
    await expect(page.getByText(/This field is required/)).toBeVisible();
  });

  test('handles radio selection', async ({ page }) => {
    const radio = page.locator('[data-testid="basic-radio"]');

    // Initially unchecked
    await expect(radio).not.toBeChecked();

    // Click to select
    await radio.click();
    await expect(radio).toBeChecked();
  });

  test('clicking label selects radio', async ({ page }) => {
    const radio = page.locator('[data-testid="basic-radio"]');
    const label = page.getByText('Option 1', { exact: true });

    // Initially unchecked
    await expect(radio).not.toBeChecked();

    // Click label to select
    await label.click();
    await expect(radio).toBeChecked();
  });

  test('disabled radio cannot be selected', async ({ page }) => {
    const disabledRadio = page.locator('[data-testid="disabled-radio"]');

    // Verify it's disabled
    await expect(disabledRadio).toBeDisabled();

    // Try to click - should not change state
    await disabledRadio.click({ force: true });
    await expect(disabledRadio).not.toBeChecked();
  });

  test('radio groups render correctly', async ({ page }) => {
    const groupsSection = page.locator('[data-testid="radio-groups-section"]');
    await expect(groupsSection).toBeVisible();

    // Check payment method radios
    await expect(page.locator('[data-testid="payment-credit"]')).toBeVisible();
    await expect(page.locator('[data-testid="payment-debit"]')).toBeVisible();
    await expect(page.locator('[data-testid="payment-paypal"]')).toBeVisible();
    await expect(page.locator('[data-testid="payment-bank"]')).toBeVisible();

    // Check account type radios
    await expect(page.locator('[data-testid="account-personal"]')).toBeVisible();
    await expect(page.locator('[data-testid="account-business"]')).toBeVisible();
  });

  test('only one radio can be selected in a group', async ({ page }) => {
    const creditCard = page.locator('[data-testid="payment-credit"]');
    const debitCard = page.locator('[data-testid="payment-debit"]');
    const paypal = page.locator('[data-testid="payment-paypal"]');

    // Credit card should be checked by default
    await expect(creditCard).toBeChecked();
    await expect(debitCard).not.toBeChecked();
    await expect(paypal).not.toBeChecked();

    // Select debit card - should uncheck credit card
    await debitCard.click();
    await expect(creditCard).not.toBeChecked();
    await expect(debitCard).toBeChecked();
    await expect(paypal).not.toBeChecked();

    // Select paypal - should uncheck debit card
    await paypal.click();
    await expect(creditCard).not.toBeChecked();
    await expect(debitCard).not.toBeChecked();
    await expect(paypal).toBeChecked();
  });

  test('real-world examples render correctly', async ({ page }) => {
    const examplesSection = page.locator('[data-testid="radio-examples-section"]');
    await expect(examplesSection).toBeVisible();

    // Check shipping options
    await expect(page.locator('[data-testid="shipping-standard"]')).toBeVisible();
    await expect(page.locator('[data-testid="shipping-express"]')).toBeVisible();
    await expect(page.locator('[data-testid="shipping-same-day"]')).toBeVisible();

    // Check plan selection
    await expect(page.locator('[data-testid="plan-free"]')).toBeVisible();
    await expect(page.locator('[data-testid="plan-pro"]')).toBeVisible();
    await expect(page.locator('[data-testid="plan-enterprise"]')).toBeVisible();

    // Check satisfaction survey
    await expect(page.locator('[data-testid="satisfaction-5"]')).toBeVisible();
    await expect(page.locator('[data-testid="satisfaction-4"]')).toBeVisible();
    await expect(page.locator('[data-testid="satisfaction-3"]')).toBeVisible();
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/This option includes additional benefits/)).toBeVisible();
    await expect(page.getByText(/For individual use/)).toBeVisible();
    await expect(page.getByText(/For companies and organizations/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
    await expect(errorMsg.first()).toContainText('Error:');
  });

  test('labels are associated with radios', async ({ page }) => {
    const labeledRadio = page.getByLabel('Option 1');
    await expect(labeledRadio).toBeVisible();

    // Can interact with radio via label
    await labeledRadio.click();
    await expect(labeledRadio).toBeChecked();
  });

  test('supports keyboard interaction', async ({ page }) => {
    const radio1 = page.locator('[data-testid="basic-radio"]');
    const radio2 = page.locator('[data-testid="labeled-radio"]');

    // Focus first radio
    await radio1.focus();

    // Initially unchecked
    await expect(radio1).not.toBeChecked();

    // Press space to select
    await page.keyboard.press('Space');
    await expect(radio1).toBeChecked();

    // Arrow down to next radio
    await page.keyboard.press('ArrowDown');

    // Verify radio2 has focus by checking document.activeElement
    const focusedElement = await page.evaluate(() => document.activeElement?.getAttribute('data-testid'));
    expect(focusedElement).toBe('labeled-radio');

    // Tab to next group
    await page.keyboard.press('Tab');

    // Verify radios lost focus
    const newFocusedElement = await page.evaluate(() => document.activeElement?.getAttribute('data-testid'));
    expect(newFocusedElement).not.toBe('basic-radio');
    expect(newFocusedElement).not.toBe('labeled-radio');
  });

  test('radio has proper ARIA attributes', async ({ page }) => {
    // Check disabled radio has aria-disabled
    const disabledRadio = page.locator('[data-testid="disabled-radio"]');
    await expect(disabledRadio).toHaveAttribute('aria-disabled', 'true');

    // Check error radio has aria-invalid
    const errorRadio = page.locator('[data-testid="error-radio"]');
    await expect(errorRadio).toHaveAttribute('aria-invalid', 'true');

    // Check required radio
    const requiredRadio = page.locator('[data-testid="required-aria-radio"]');
    await expect(requiredRadio).toHaveAttribute('aria-required', 'true');
  });

  test('accessibility features section renders correctly', async ({ page }) => {
    const a11ySection = page.locator('[data-testid="radio-a11y-section"]');
    await expect(a11ySection).toBeVisible();

    // Check accessible radio
    const accessibleRadio = page.locator('[data-testid="accessible-radio"]');
    await expect(accessibleRadio).toHaveAttribute('aria-label', 'Radio with aria-label');

    // Check radio with description
    const radioWithDescription = page.locator('[data-testid="radio-with-description"]');
    await expect(radioWithDescription).toHaveAttribute('aria-describedby', 'helper-text');
  });

  test('radio meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('supports RTL layout', async ({ page }) => {
    // Set RTL direction
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const radio = page.locator('.aegov-check-item').first();
    await expect(radio).toBeVisible();

    // Check if text direction is applied
    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    expect(dir).toBe('rtl');
  });

  test('multiple radios can be displayed simultaneously', async ({ page }) => {
    const radios = page.locator('.aegov-check-item');
    const count = await radios.count();

    // Should have many radios on the showcase page
    expect(count).toBeGreaterThan(20);
  });

  test('shipping options have correct default selection', async ({ page }) => {
    const standard = page.locator('[data-testid="shipping-standard"]');
    const express = page.locator('[data-testid="shipping-express"]');
    const sameDay = page.locator('[data-testid="shipping-same-day"]');

    // Standard should be checked by default
    await expect(standard).toBeChecked();
    await expect(express).not.toBeChecked();
    await expect(sameDay).not.toBeChecked();
  });

  test('plan selection works correctly', async ({ page }) => {
    const freePlan = page.locator('[data-testid="plan-free"]');
    const proPlan = page.locator('[data-testid="plan-pro"]');
    const enterprisePlan = page.locator('[data-testid="plan-enterprise"]');

    // Free should be checked by default
    await expect(freePlan).toBeChecked();
    await expect(proPlan).not.toBeChecked();
    await expect(enterprisePlan).not.toBeChecked();

    // Select pro plan
    await proPlan.click();
    await expect(freePlan).not.toBeChecked();
    await expect(proPlan).toBeChecked();
    await expect(enterprisePlan).not.toBeChecked();

    // Select enterprise plan
    await enterprisePlan.click();
    await expect(freePlan).not.toBeChecked();
    await expect(proPlan).not.toBeChecked();
    await expect(enterprisePlan).toBeChecked();
  });

  test('satisfaction survey has correct default', async ({ page }) => {
    const satisfaction4 = page.locator('[data-testid="satisfaction-4"]');

    // Satisfaction level 4 should be checked by default
    await expect(satisfaction4).toBeChecked();
  });

  test('radio maintains state on blur and focus', async ({ page }) => {
    const radio = page.locator('[data-testid="basic-radio"]');

    // Select the radio
    await radio.click();
    await expect(radio).toBeChecked();

    // Blur
    await page.keyboard.press('Tab');

    // Focus again
    await radio.focus();

    // Should still be checked
    await expect(radio).toBeChecked();
  });

  test('account type radios work correctly', async ({ page }) => {
    const personal = page.locator('[data-testid="account-personal"]');
    const business = page.locator('[data-testid="account-business"]');

    // Personal should be checked by default
    await expect(personal).toBeChecked();
    await expect(business).not.toBeChecked();

    // Select business
    await business.click();
    await expect(personal).not.toBeChecked();
    await expect(business).toBeChecked();

    // Select personal again
    await personal.click();
    await expect(personal).toBeChecked();
    await expect(business).not.toBeChecked();
  });
});
