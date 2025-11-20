import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Input Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Input showcase page
    await page.goto('/showcase/input', { waitUntil: 'domcontentloaded' });

    // Wait for first input to ensure content is rendered
    await expect(page.locator('.aegov-form-control').first()).toBeVisible();
  });

  test('renders input elements', async ({ page }) => {
    // Wait for any input to be visible
    const input = page.locator('.aegov-form-control').first();
    await expect(input).toBeVisible();
  });

  test('basic inputs render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="input-basic-section"]');
    await expect(basicSection).toBeVisible();

    // Check different basic inputs
    await expect(page.locator('[data-testid="basic-input"]')).toBeVisible();
    await expect(page.locator('[data-testid="labeled-input"]')).toBeVisible();
    await expect(page.locator('[data-testid="input-with-helper"]')).toBeVisible();
  });

  test('displays different input sizes', async ({ page }) => {
    const sizesSection = page.locator('[data-testid="input-sizes-section"]');
    await expect(sizesSection).toBeVisible();

    // Check for small size
    await expect(sizesSection.locator('.control-sm')).toBeVisible();

    // Check for large size
    await expect(sizesSection.locator('.control-lg')).toBeVisible();
  });

  test('displays variant inputs', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="input-variants-section"]');
    await expect(variantsSection).toBeVisible();

    // Check for secondary variant
    await expect(variantsSection.locator('.control-secondary')).toBeVisible();
  });

  test('displays input states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="input-states-section"]');
    await expect(statesSection).toBeVisible();

    // Check normal input
    await expect(page.locator('[data-testid="normal-input"]')).toBeVisible();

    // Check required input
    const requiredInput = page.locator('[data-testid="required-input"]');
    await expect(requiredInput).toHaveAttribute('required');

    // Check disabled input
    const disabledInput = page.locator('[data-testid="disabled-input"]');
    await expect(disabledInput).toBeDisabled();

    // Check error state
    await expect(statesSection.locator('.control-error')).toBeVisible();
    await expect(page.getByText(/This field is required/)).toBeVisible();
  });

  test('displays inputs with icons and text', async ({ page }) => {
    const iconsSection = page.locator('[data-testid="input-icons-section"]');
    await expect(iconsSection).toBeVisible();

    // Check prefix icon
    const prefixIconWrapper = page.locator('[data-testid="input-with-prefix-icon"]').locator('..');
    await expect(prefixIconWrapper.locator('.control-prefix')).toBeVisible();

    // Check suffix icon
    const suffixIconWrapper = page.locator('[data-testid="input-with-suffix-icon"]').locator('..');
    await expect(suffixIconWrapper.locator('.control-suffix')).toBeVisible();

    // Check prefix text
    const prefixTextWrapper = page.locator('[data-testid="input-with-prefix-text"]').locator('..');
    await expect(prefixTextWrapper.locator('.control-prefix')).toBeVisible();
    await expect(prefixTextWrapper.getByText('https://')).toBeVisible();
  });

  test('handles text input', async ({ page }) => {
    const input = page.locator('[data-testid="basic-input"]');
    await input.fill('Hello World');
    await expect(input).toHaveValue('Hello World');
  });

  test('handles different input types', async ({ page }) => {
    const typesSection = page.locator('[data-testid="input-types-section"]');
    await expect(typesSection).toBeVisible();

    // Check email input
    const emailInput = page.locator('[data-testid="email-input"]');
    await expect(emailInput).toHaveAttribute('type', 'email');

    // Check password input
    const passwordInput = page.locator('[data-testid="password-input"]');
    await expect(passwordInput).toHaveAttribute('type', 'password');

    // Check search input
    const searchInput = page.locator('[data-testid="search-input"]');
    await expect(searchInput).toHaveAttribute('type', 'search');

    // Check date input
    const dateInput = page.locator('[data-testid="date-input"]');
    await expect(dateInput).toHaveAttribute('type', 'date');

    // Check number input
    const numberInput = page.locator('[data-testid="number-input"]');
    await expect(numberInput).toHaveAttribute('type', 'number');
  });

  test('login form example renders correctly', async ({ page }) => {
    const examplesSection = page.locator('[data-testid="input-examples-section"]');
    await expect(examplesSection).toBeVisible();

    await expect(page.locator('[data-testid="login-email"]')).toBeVisible();
    await expect(page.locator('[data-testid="login-password"]')).toBeVisible();
  });

  test('contact form example renders correctly', async ({ page }) => {
    await expect(page.locator('[data-testid="contact-name"]')).toBeVisible();
    await expect(page.locator('[data-testid="contact-email"]')).toBeVisible();
    await expect(page.locator('[data-testid="contact-phone"]')).toBeVisible();
    await expect(page.locator('[data-testid="contact-website"]')).toBeVisible();
  });

  test('search bar renders correctly', async ({ page }) => {
    const searchBar = page.locator('[data-testid="search-bar"]');
    await expect(searchBar).toBeVisible();

    // Check that it's in the examples section which should have control-lg
    const examplesSection = page.locator('[data-testid="input-examples-section"]');
    await expect(examplesSection.locator('.control-lg')).toBeVisible();
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/We require your email address/)).toBeVisible();
    await expect(page.getByText(/We'll never share your email/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
    await expect(errorMsg.first()).toContainText('Error:');
  });

  test('labels are associated with inputs', async ({ page }) => {
    const labeledInput = page.getByLabel('First Name');
    await expect(labeledInput).toBeVisible();

    // Can interact with input via label
    await labeledInput.fill('John');
    await expect(labeledInput).toHaveValue('John');
  });

  test('placeholder text is visible', async ({ page }) => {
    const input = page.getByPlaceholder('Enter text');
    await expect(input).toBeVisible();
  });

  test('supports keyboard interaction', async ({ page }) => {
    const input = page.locator('[data-testid="basic-input"]');

    // Focus input
    await input.focus();

    // Type text
    await page.keyboard.type('Test');
    await expect(input).toHaveValue('Test');

    // Tab to next field
    await page.keyboard.press('Tab');

    // Input should lose focus
    await expect(input).not.toBeFocused();
  });

  test('disabled input cannot be edited', async ({ page }) => {
    const disabledInput = page.locator('[data-testid="disabled-input"]');
    await expect(disabledInput).toBeDisabled();

    // Try to click - should not focus
    await disabledInput.click({ force: true });
    await expect(disabledInput).not.toBeFocused();
  });

  test('required indicator is visible', async ({ page }) => {
    const statesSection = page.locator('[data-testid="input-states-section"]');
    await expect(statesSection.getByText('*')).toBeVisible();
  });

  test('input meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('input has proper ARIA attributes', async ({ page }) => {
    // Check disabled input has aria-disabled
    const disabledInput = page.locator('[data-testid="disabled-input"]');
    await expect(disabledInput).toHaveAttribute('aria-disabled', 'true');

    // Check error input has aria-invalid
    const errorInput = page.locator('[data-testid="error-input"]');
    await expect(errorInput).toHaveAttribute('aria-invalid', 'true');
  });

  test('supports RTL layout', async ({ page }) => {
    // Set RTL direction
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const input = page.locator('.aegov-form-control').first();
    await expect(input).toBeVisible();

    // Check if text direction is applied
    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    expect(dir).toBe('rtl');
  });

  test('multiple inputs can be displayed simultaneously', async ({ page }) => {
    const inputs = page.locator('.aegov-form-control');
    const count = await inputs.count();

    // Should have many inputs on the showcase page
    expect(count).toBeGreaterThan(15);
  });
});
