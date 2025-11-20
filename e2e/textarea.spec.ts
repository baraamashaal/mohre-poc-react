import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Textarea Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Textarea showcase page
    await page.goto('/showcase/textarea', { waitUntil: 'domcontentloaded' });

    // Wait for first textarea to ensure content is rendered
    await expect(page.locator('.aegov-form-control').first()).toBeVisible();
  });

  test('renders textarea elements', async ({ page }) => {
    // Wait for any textarea to be visible
    const textarea = page.locator('.aegov-form-control').first();
    await expect(textarea).toBeVisible();
  });

  test('basic textareas render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="textarea-basic-section"]');
    await expect(basicSection).toBeVisible();

    // Check different basic textareas
    await expect(page.locator('[data-testid="basic-textarea"]')).toBeVisible();
    await expect(page.locator('[data-testid="labeled-textarea"]')).toBeVisible();
    await expect(page.locator('[data-testid="textarea-with-helper"]')).toBeVisible();
  });

  test('displays different textarea sizes', async ({ page }) => {
    const sizesSection = page.locator('[data-testid="textarea-sizes-section"]');
    await expect(sizesSection).toBeVisible();

    // Check for small size
    await expect(sizesSection.locator('.control-sm')).toBeVisible();

    // Check for large size
    await expect(sizesSection.locator('.control-lg')).toBeVisible();
  });

  test('displays variant textareas', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="textarea-variants-section"]');
    await expect(variantsSection).toBeVisible();

    // Check for secondary variant
    await expect(variantsSection.locator('.control-secondary')).toBeVisible();
  });

  test('displays textarea states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="textarea-states-section"]');
    await expect(statesSection).toBeVisible();

    // Check normal textarea
    await expect(page.locator('[data-testid="normal-textarea"]')).toBeVisible();

    // Check required textarea
    const requiredTextarea = page.locator('[data-testid="required-textarea"]');
    await expect(requiredTextarea).toHaveAttribute('required');

    // Check disabled textarea
    const disabledTextarea = page.locator('[data-testid="disabled-textarea"]');
    await expect(disabledTextarea).toBeDisabled();

    // Check error state
    await expect(statesSection.locator('.control-error')).toBeVisible();
    await expect(page.getByText(/Message is required/)).toBeVisible();
  });

  test('displays textareas with custom rows', async ({ page }) => {
    const rowsSection = page.locator('[data-testid="textarea-rows-section"]');
    await expect(rowsSection).toBeVisible();

    // Check 2 rows textarea
    const textarea2Rows = page.locator('[data-testid="textarea-2-rows"]');
    await expect(textarea2Rows).toHaveAttribute('rows', '2');

    // Check 4 rows textarea (default)
    const textarea4Rows = page.locator('[data-testid="textarea-4-rows"]');
    await expect(textarea4Rows).toHaveAttribute('rows', '4');

    // Check 8 rows textarea
    const textarea8Rows = page.locator('[data-testid="textarea-8-rows"]');
    await expect(textarea8Rows).toHaveAttribute('rows', '8');
  });

  test('handles text input', async ({ page }) => {
    const textarea = page.locator('[data-testid="basic-textarea"]');
    await textarea.fill('Hello World\nMultiline text');
    await expect(textarea).toHaveValue('Hello World\nMultiline text');
  });

  test('contact form example renders correctly', async ({ page }) => {
    const examplesSection = page.locator('[data-testid="textarea-examples-section"]');
    await expect(examplesSection).toBeVisible();

    const contactMessage = page.locator('[data-testid="contact-message"]');
    await expect(contactMessage).toBeVisible();
    await expect(contactMessage).toHaveAttribute('rows', '6');
    await expect(contactMessage).toHaveAttribute('required');
  });

  test('feedback form example renders correctly', async ({ page }) => {
    const feedbackMessage = page.locator('[data-testid="feedback-message"]');
    await expect(feedbackMessage).toBeVisible();
    await expect(feedbackMessage).toHaveAttribute('rows', '8');
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/Please provide as much detail as possible/)).toBeVisible();
    await expect(page.getByText(/Please be as detailed as possible/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
    await expect(errorMsg.first()).toContainText('Error:');
  });

  test('labels are associated with textareas', async ({ page }) => {
    const labeledTextarea = page.getByLabel('Your message');
    await expect(labeledTextarea).toBeVisible();

    // Can interact with textarea via label
    await labeledTextarea.fill('Test message');
    await expect(labeledTextarea).toHaveValue('Test message');
  });

  test('placeholder text is visible', async ({ page }) => {
    const textarea = page.getByPlaceholder('Leave a comment...');
    await expect(textarea).toBeVisible();
  });

  test('supports keyboard interaction', async ({ page }) => {
    const textarea = page.locator('[data-testid="basic-textarea"]');

    // Focus textarea
    await textarea.focus();

    // Type text with newlines
    await page.keyboard.type('Line 1');
    await page.keyboard.press('Enter');
    await page.keyboard.type('Line 2');
    await expect(textarea).toHaveValue('Line 1\nLine 2');

    // Tab to next field
    await page.keyboard.press('Tab');

    // Textarea should lose focus
    await expect(textarea).not.toBeFocused();
  });

  test('disabled textarea cannot be edited', async ({ page }) => {
    const disabledTextarea = page.locator('[data-testid="disabled-textarea"]');
    await expect(disabledTextarea).toBeDisabled();

    // Try to click - should not focus
    await disabledTextarea.click({ force: true });
    await expect(disabledTextarea).not.toBeFocused();
  });

  test('required indicator is visible', async ({ page }) => {
    const statesSection = page.locator('[data-testid="textarea-states-section"]');
    await expect(statesSection.getByText('*')).toBeVisible();
  });

  test('textarea meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('textarea has proper ARIA attributes', async ({ page }) => {
    // Check disabled textarea has aria-disabled
    const disabledTextarea = page.locator('[data-testid="disabled-textarea"]');
    await expect(disabledTextarea).toHaveAttribute('aria-disabled', 'true');

    // Check error textarea has aria-invalid
    const errorTextarea = page.locator('[data-testid="error-textarea"]');
    await expect(errorTextarea).toHaveAttribute('aria-invalid', 'true');
  });

  test('accessibility features section renders correctly', async ({ page }) => {
    const a11ySection = page.locator('[data-testid="textarea-a11y-section"]');
    await expect(a11ySection).toBeVisible();

    // Check accessible textarea
    const accessibleTextarea = page.locator('[data-testid="accessible-textarea"]');
    await expect(accessibleTextarea).toHaveAttribute('aria-label', 'Message field');

    // Check textarea with description
    const textareaWithDescription = page.locator('[data-testid="textarea-with-description"]');
    await expect(textareaWithDescription).toHaveAttribute('aria-describedby', 'helper-text');
  });

  test('supports RTL layout', async ({ page }) => {
    // Set RTL direction
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const textarea = page.locator('.aegov-form-control').first();
    await expect(textarea).toBeVisible();

    // Check if text direction is applied
    const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
    expect(dir).toBe('rtl');
  });

  test('multiple textareas can be displayed simultaneously', async ({ page }) => {
    const textareas = page.locator('.aegov-form-control');
    const count = await textareas.count();

    // Should have many textareas on the showcase page
    expect(count).toBeGreaterThan(10);
  });

  test('textarea maintains content on blur and focus', async ({ page }) => {
    const textarea = page.locator('[data-testid="basic-textarea"]');

    // Fill textarea
    await textarea.fill('Test content');

    // Blur
    await page.keyboard.press('Tab');

    // Focus again
    await textarea.focus();

    // Content should remain
    await expect(textarea).toHaveValue('Test content');
  });

  test('textarea supports multiline input', async ({ page }) => {
    const textarea = page.locator('[data-testid="basic-textarea"]');

    const multilineText = 'Line 1\nLine 2\nLine 3\nLine 4';
    await textarea.fill(multilineText);

    await expect(textarea).toHaveValue(multilineText);
  });
});
