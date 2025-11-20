import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Select Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/select', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('.aegov-form-control').first()).toBeVisible();
  });

  test('renders select elements', async ({ page }) => {
    const select = page.locator('.aegov-form-control').first();
    await expect(select).toBeVisible();
  });

  test('basic selects render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="select-basic-section"]');
    await expect(basicSection).toBeVisible();
    await expect(page.locator('[data-testid="basic-select"]')).toBeVisible();
    await expect(page.locator('[data-testid="labeled-select"]')).toBeVisible();
  });

  test('displays different select sizes', async ({ page }) => {
    const sizesSection = page.locator('[data-testid="select-sizes-section"]');
    await expect(sizesSection.locator('.control-sm')).toBeVisible();
    await expect(sizesSection.locator('.control-lg')).toBeVisible();
  });

  test('displays variant selects', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="select-variants-section"]');
    await expect(variantsSection.locator('.control-secondary')).toBeVisible();
  });

  test('displays select states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="select-states-section"]');
    await expect(page.locator('[data-testid="normal-select"]')).toBeVisible();
    await expect(page.locator('[data-testid="required-select"]')).toHaveAttribute('required');
    await expect(page.locator('[data-testid="disabled-select"]')).toBeDisabled();
    await expect(statesSection.locator('.control-error')).toBeVisible();
  });

  test('handles select option change', async ({ page }) => {
    const select = page.locator('[data-testid="basic-select"]');
    await select.selectOption('1');
    await expect(select).toHaveValue('1');
  });

  test('multiple selection works', async ({ page }) => {
    const multiSelect = page.locator('[data-testid="multiple-select"]');
    await expect(multiSelect).toHaveAttribute('multiple');
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/Choose your preferred language/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
  });

  test('labels are associated with selects', async ({ page }) => {
    const labeledSelect = page.getByLabel('Country Selection');
    await expect(labeledSelect).toBeVisible();
  });

  test('select has proper ARIA attributes', async ({ page }) => {
    await expect(page.locator('[data-testid="disabled-select"]')).toHaveAttribute('aria-disabled', 'true');
    await expect(page.locator('[data-testid="error-select"]')).toHaveAttribute('aria-invalid', 'true');
  });

  test('select meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('country selector renders correctly', async ({ page }) => {
    const countrySelect = page.locator('[data-testid="country-select"]');
    await expect(countrySelect).toBeVisible();
    await expect(countrySelect).toHaveAttribute('required');
  });

  test('city selector with groups renders', async ({ page }) => {
    const citySelect = page.locator('[data-testid="city-select"]');
    await expect(citySelect).toBeVisible();
  });

  test('form example selects work', async ({ page }) => {
    const titleSelect = page.locator('[data-testid="title-select"]');
    await titleSelect.selectOption('mr');
    await expect(titleSelect).toHaveValue('mr');
  });
});
