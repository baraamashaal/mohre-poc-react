import { Page, Locator, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * AEGOV E2E Testing Helpers
 */

/**
 * Get element by AEGOV class
 */
export function getByAegovClass(page: Page, className: string): Locator {
  return page.locator(`.aegov-${className}`);
}

/**
 * Check accessibility with axe-core
 */
export async function checkAccessibility(
  page: Page,
  options?: {
    exclude?: string[];
    include?: string[];
  }
) {
  const builder = new AxeBuilder({ page });

  if (options?.exclude && options.exclude.length > 0) {
    builder.exclude(options.exclude);
  }

  if (options?.include && options.include.length > 0) {
    builder.include(options.include);
  }

  const accessibilityScanResults = await builder.analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
}

/**
 * Check if element has AEGOV class
 */
export async function hasAegovClass(
  locator: Locator,
  className: string
): Promise<boolean> {
  const classes = await locator.getAttribute('class');
  return classes?.includes(`aegov-${className}`) || false;
}

/**
 * Wait for modal to be visible
 */
export async function waitForModal(page: Page, modalId?: string) {
  const selector = modalId
    ? `#${modalId}`
    : '[role="dialog"][aria-modal="true"]';
  await page.waitForSelector(selector, { state: 'visible' });
}

/**
 * Wait for modal to be hidden
 */
export async function waitForModalToClose(page: Page, modalId?: string) {
  const selector = modalId ? `#${modalId}` : '[role="dialog"]';
  await page.waitForSelector(selector, { state: 'hidden' });
}

/**
 * Press Escape key
 */
export async function pressEscape(page: Page) {
  await page.keyboard.press('Escape');
}

/**
 * Click outside element
 */
export async function clickOutside(page: Page, element: Locator) {
  const box = await element.boundingBox();
  if (box) {
    await page.mouse.click(box.x + box.width + 10, box.y);
  } else {
    // Fallback: click on body
    await page.locator('body').click({ position: { x: 0, y: 0 } });
  }
}

/**
 * Check ARIA attributes
 */
export async function checkAriaAttributes(
  locator: Locator,
  attributes: Record<string, string | boolean>
) {
  for (const [attr, expectedValue] of Object.entries(attributes)) {
    const actualValue = await locator.getAttribute(attr);

    if (typeof expectedValue === 'boolean') {
      expect(actualValue).toBe(String(expectedValue));
    } else {
      expect(actualValue).toBe(expectedValue);
    }
  }
}

/**
 * Get active element
 */
export async function getActiveElement(page: Page) {
  return page.evaluateHandle(() => document.activeElement);
}

/**
 * Check if element is focused
 */
export async function isElementFocused(locator: Locator): Promise<boolean> {
  return locator.evaluate((el) => el === document.activeElement);
}

/**
 * Hover with delay (for testing hover triggers)
 */
export async function hoverWithDelay(
  locator: Locator,
  delayMs: number = 300
) {
  await locator.hover();
  await new Promise((resolve) => setTimeout(resolve, delayMs + 100));
}

/**
 * Test keyboard navigation for tabs
 */
export async function testTabKeyboardNavigation(
  page: Page,
  tabListLocator: Locator,
  expectedTabCount: number
) {
  const tabs = tabListLocator.locator('[role="tab"]');
  await expect(tabs).toHaveCount(expectedTabCount);

  // Focus first tab
  await tabs.first().focus();

  // Test ArrowRight navigation
  for (let i = 0; i < expectedTabCount - 1; i++) {
    await page.keyboard.press('ArrowRight');
    const activeTab = tabs.nth(i + 1);
    await expect(activeTab).toBeFocused();
    await expect(activeTab).toHaveAttribute('aria-selected', 'true');
  }

  // Test ArrowLeft navigation
  await page.keyboard.press('ArrowLeft');
  const secondLastTab = tabs.nth(expectedTabCount - 2);
  await expect(secondLastTab).toBeFocused();

  // Test Home key
  await page.keyboard.press('Home');
  await expect(tabs.first()).toBeFocused();

  // Test End key
  await page.keyboard.press('End');
  await expect(tabs.last()).toBeFocused();
}

/**
 * Test RTL support
 */
export async function testRTLSupport(page: Page) {
  // Set RTL direction
  await page.evaluate(() => {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  });

  // Wait for layout to update
  await page.waitForTimeout(100);

  // Check computed direction
  const direction = await page.evaluate(
    () => window.getComputedStyle(document.documentElement).direction
  );
  expect(direction).toBe('rtl');
}

/**
 * Get all AEGOV color variants for testing
 */
export const AEGOV_COLORS = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
] as const;

/**
 * Get all AEGOV sizes for testing
 */
export const AEGOV_SIZES = ['xs', 'sm', 'base', 'lg', 'xl'] as const;

/**
 * Get all button variants for testing
 */
export const BUTTON_VARIANTS = ['solid', 'outline', 'soft', 'link'] as const;

/**
 * Screenshot with name
 */
export async function takeScreenshot(
  page: Page,
  name: string,
  options?: { fullPage?: boolean }
) {
  await page.screenshot({
    path: `playwright-report/screenshots/${name}.png`,
    fullPage: options?.fullPage || false,
  });
}

/**
 * Wait for animation to complete
 */
export async function waitForAnimation(page: Page, durationMs: number = 300) {
  await page.waitForTimeout(durationMs + 100);
}

/**
 * Check if backdrop is visible
 */
export async function isBackdropVisible(page: Page): Promise<boolean> {
  const backdrop = page.locator('.aegov-modal-backdrop, .aegov-drawer-backdrop');
  return backdrop.isVisible();
}

/**
 * Get body scroll state
 */
export async function isBodyScrollLocked(page: Page): Promise<boolean> {
  const overflow = await page.evaluate(() =>
    window.getComputedStyle(document.body).overflow
  );
  return overflow === 'hidden';
}

/**
 * Test all placements for positioned components (Modal, Dropdown, etc.)
 */
export const MODAL_PLACEMENTS = [
  'top-left',
  'top-center',
  'top-right',
  'center-left',
  'center',
  'center-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
] as const;

export const DROPDOWN_PLACEMENTS = [
  'top',
  'top-start',
  'top-end',
  'bottom',
  'bottom-start',
  'bottom-end',
  'left',
  'left-start',
  'left-end',
  'right',
  'right-start',
  'right-end',
] as const;
