import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('RangeSlider Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/range-slider', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('input[type="range"]').first()).toBeVisible();
  });

  test('renders range slider elements', async ({ page }) => {
    const slider = page.locator('input[type="range"]').first();
    await expect(slider).toBeVisible();
    await expect(slider).toHaveAttribute('role', 'slider');
  });

  test('basic sliders render correctly', async ({ page }) => {
    const basicSection = page.locator('[data-testid="range-slider-basic-section"]');
    await expect(basicSection).toBeVisible();
    await expect(page.locator('[data-testid="basic-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="default-value-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="no-output-slider"]')).toBeVisible();
  });

  test('displays different ranges and steps', async ({ page }) => {
    const rangesSection = page.locator('[data-testid="range-slider-ranges-section"]');
    await expect(rangesSection).toBeVisible();
    await expect(page.locator('[data-testid="custom-range-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="temperature-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="price-step-slider"]')).toBeVisible();
  });

  test('displays variant sliders', async ({ page }) => {
    const variantsSection = page.locator('[data-testid="range-slider-variants-section"]');
    await expect(variantsSection).toBeVisible();
    await expect(page.locator('[data-testid="primary-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="secondary-slider"]')).toBeVisible();
  });

  test('displays slider states correctly', async ({ page }) => {
    const statesSection = page.locator('[data-testid="range-slider-states-section"]');
    await expect(statesSection).toBeVisible();
    await expect(page.locator('[data-testid="normal-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="helper-slider"]')).toBeVisible();
    await expect(page.locator('[data-testid="disabled-slider"]')).toBeDisabled();
    await expect(page.locator('[data-testid="required-slider"]')).toBeVisible();
  });

  test('displays output value', async ({ page }) => {
    const slider = page.locator('[data-testid="basic-slider"]');
    const output = slider.locator('..').locator('..').locator('output');
    await expect(output).toBeVisible();
    await expect(output).toHaveText('50');
  });

  test('hides output when showOutput is false', async ({ page }) => {
    const slider = page.locator('[data-testid="no-output-slider"]');
    const container = slider.locator('..').locator('..');
    const output = container.locator('output');
    await expect(output).not.toBeVisible();
  });

  test('handles slider value change', async ({ page }) => {
    const slider = page.locator('[data-testid="volume-slider"]');
    const valueDisplay = page.locator('[data-testid="volume-value"]');

    // Get initial value
    const initialText = await valueDisplay.textContent();
    expect(initialText).toContain('70');

    // Change slider value
    await slider.fill('85');

    // Verify value updated
    const newText = await valueDisplay.textContent();
    expect(newText).toContain('85');
  });

  test('interactive sliders update state', async ({ page }) => {
    const brightnessSlider = page.locator('[data-testid="brightness-slider"]');
    const brightnessValue = page.locator('[data-testid="brightness-value"]');

    await brightnessSlider.fill('60');
    const text = await brightnessValue.textContent();
    expect(text).toContain('60');
  });

  test('respects min and max values', async ({ page }) => {
    const tempSlider = page.locator('[data-testid="temperature-slider"]');
    await expect(tempSlider).toHaveAttribute('min', '16');
    await expect(tempSlider).toHaveAttribute('max', '30');
  });

  test('respects step value', async ({ page }) => {
    const priceSlider = page.locator('[data-testid="price-step-slider"]');
    await expect(priceSlider).toHaveAttribute('step', '100');
  });

  test('helper text is displayed', async ({ page }) => {
    await expect(page.getByText(/Adjust in increments of \$100/)).toBeVisible();
  });

  test('error message is displayed', async ({ page }) => {
    const errorMsg = page.locator('.error-message');
    await expect(errorMsg.first()).toBeVisible();
    await expect(errorMsg.first()).toContainText('Value is too high');
  });

  test('labels are associated with sliders', async ({ page }) => {
    const labeledSlider = page.getByLabel('Basic Slider');
    await expect(labeledSlider).toBeVisible();
  });

  test('slider has proper ARIA attributes', async ({ page }) => {
    await expect(page.locator('[data-testid="disabled-slider"]')).toHaveAttribute('aria-disabled', 'true');

    const normalSlider = page.locator('[data-testid="normal-slider"]');
    await expect(normalSlider).toHaveAttribute('role', 'slider');
    await expect(normalSlider).toHaveAttribute('aria-valuemin');
    await expect(normalSlider).toHaveAttribute('aria-valuemax');
    await expect(normalSlider).toHaveAttribute('aria-valuenow');
  });

  test('slider meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('audio controls sliders work', async ({ page }) => {
    const masterVolume = page.locator('[data-testid="master-volume-slider"]');
    const bass = page.locator('[data-testid="bass-slider"]');
    const treble = page.locator('[data-testid="treble-slider"]');

    await expect(masterVolume).toBeVisible();
    await expect(bass).toBeVisible();
    await expect(treble).toBeVisible();
  });

  test('image adjustment sliders work', async ({ page }) => {
    const brightness = page.locator('[data-testid="image-brightness-slider"]');
    const contrast = page.locator('[data-testid="image-contrast-slider"]');
    const saturation = page.locator('[data-testid="image-saturation-slider"]');

    await expect(brightness).toBeVisible();
    await expect(contrast).toBeVisible();
    await expect(saturation).toBeVisible();
  });

  test('product filter sliders work', async ({ page }) => {
    const priceSlider = page.locator('[data-testid="product-price-slider"]');
    const ratingSlider = page.locator('[data-testid="product-rating-slider"]');

    await expect(priceSlider).toBeVisible();
    await expect(ratingSlider).toBeVisible();
  });

  test('sliders are keyboard accessible', async ({ page }) => {
    const slider = page.locator('[data-testid="a11y-keyboard-slider"]');

    // Focus the slider
    await slider.focus();

    // Check it has focus
    const focusedElement = await page.evaluate(() => {
      const activeEl = document.activeElement;
      return activeEl?.getAttribute('data-testid');
    });
    expect(focusedElement).toBe('a11y-keyboard-slider');

    // Get initial value
    const initialValue = await slider.inputValue();

    // Use arrow key to change value
    await page.keyboard.press('ArrowRight');

    // Verify value changed
    const newValue = await slider.inputValue();
    expect(Number(newValue)).toBeGreaterThan(Number(initialValue));
  });

  test('multiple sliders work independently', async ({ page }) => {
    const volumeSlider = page.locator('[data-testid="volume-slider"]');
    const brightnessSlider = page.locator('[data-testid="brightness-slider"]');

    // Get initial values
    const volumeInitial = await volumeSlider.inputValue();
    const brightnessInitial = await brightnessSlider.inputValue();

    // Change one slider
    await volumeSlider.fill('55');

    // Verify only one changed
    expect(await volumeSlider.inputValue()).toBe('55');
    expect(await brightnessSlider.inputValue()).toBe(brightnessInitial);
  });

  test('slider value updates output element', async ({ page }) => {
    const slider = page.locator('[data-testid="basic-slider"]');
    const output = slider.locator('..').locator('..').locator('output');

    // Change slider value
    await slider.fill('65');

    // Verify output updated
    await expect(output).toHaveText('65');
  });

  test('required indicator is displayed', async ({ page }) => {
    const requiredSlider = page.locator('[data-testid="required-slider"]');
    const label = requiredSlider.locator('..').locator('..').locator('label');
    await expect(label).toContainText('*');
  });

  test('custom step increments work correctly', async ({ page }) => {
    const priceFilter = page.locator('[data-testid="price-filter-slider"]');

    // Verify step attribute
    await expect(priceFilter).toHaveAttribute('step', '50');

    // Set to a value
    await priceFilter.fill('450');
    const value = await priceFilter.inputValue();

    // Verify value is a multiple of step
    expect(Number(value) % 50).toBe(0);
  });
});
