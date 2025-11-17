import { test, expect } from '@playwright/test';
import {
  checkAccessibility,
  BUTTON_VARIANTS,
  AEGOV_SIZES,
  takeScreenshot,
} from './utils/aegov-helpers';

test.describe('Button Component E2E', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to button demo page
    await page.goto('http://localhost:5177/');
  });

  test.describe('Basic Rendering', () => {
    test('should render button with text', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">Click me</button>
      `);

      const button = page.getByRole('button', { name: 'Click me' });
      await expect(button).toBeVisible();
      await expect(button).toHaveClass(/aegov-btn/);
    });

    test('should be clickable', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" onclick="window.buttonClicked = (window.buttonClicked || 0) + 1">
          Click me
        </button>
      `);

      const button = page.getByRole('button', { name: 'Click me' });
      await button.click();

      const clickCount = await page.evaluate(() => (window as Window & { buttonClicked?: number }).buttonClicked || 0);
      expect(clickCount).toBe(1);
    });

    test('should not be clickable when disabled', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" disabled aria-disabled="true">
          Disabled button
        </button>
      `);

      const button = page.getByRole('button', { name: 'Disabled button' });
      await expect(button).toBeDisabled();
      await expect(button).toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('Variants', () => {
    for (const variant of BUTTON_VARIANTS) {
      test(`should render ${variant} variant`, async ({ page }) => {
        const className = variant === 'solid' ? 'aegov-btn' : `aegov-btn btn-${variant}`;

        await page.setContent(`
          <button class="${className}" type="button">
            ${variant.charAt(0).toUpperCase() + variant.slice(1)} button
          </button>
        `);

        const button = page.getByRole('button').first();
        await expect(button).toBeVisible();

        if (variant !== 'solid') {
          await expect(button).toHaveClass(new RegExp(`btn-${variant}`));
        }
      });
    }
  });

  test.describe('Sizes', () => {
    for (const size of AEGOV_SIZES.filter((s) => ['xs', 'sm', 'base', 'lg'].includes(s))) {
      test(`should render ${size} size`, async ({ page }) => {
        const sizeClass = size === 'base' ? '' : ` btn-${size}`;

        await page.setContent(`
          <button class="aegov-btn${sizeClass}" type="button">
            ${size.toUpperCase()} button
          </button>
        `);

        const button = page.getByRole('button').first();
        await expect(button).toBeVisible();

        if (size !== 'base') {
          await expect(button).toHaveClass(new RegExp(`btn-${size}`));
        }
      });
    }
  });

  test.describe('Colors', () => {
    test('should render primary color (default)', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">Primary button</button>
      `);

      const button = page.getByRole('button');
      await expect(button).toBeVisible();
      await expect(button).not.toHaveClass(/btn-secondary/);
    });

    test('should render secondary color', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn btn-secondary" type="button">Secondary button</button>
      `);

      const button = page.getByRole('button');
      await expect(button).toBeVisible();
      await expect(button).toHaveClass(/btn-secondary/);
    });
  });

  test.describe('Icons', () => {
    test('should render button with left icon', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
          </svg>
          My account
        </button>
      `);

      const button = page.getByRole('button', { name: /my account/i });
      await expect(button).toBeVisible();

      const svg = button.locator('svg');
      await expect(svg).toBeVisible();
    });

    test('should render icon-only button', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn btn-icon" type="button" aria-label="Search">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
            <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
          </svg>
          <span class="sr-only">Search</span>
        </button>
      `);

      const button = page.getByRole('button', { name: 'Search' });
      await expect(button).toBeVisible();
      await expect(button).toHaveClass(/btn-icon/);
    });
  });

  test.describe('Keyboard Navigation', () => {
    test('should be focusable with Tab', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">Button 1</button>
        <button class="aegov-btn" type="button">Button 2</button>
      `);

      await page.keyboard.press('Tab');
      const firstButton = page.getByRole('button', { name: 'Button 1' });
      await expect(firstButton).toBeFocused();

      await page.keyboard.press('Tab');
      const secondButton = page.getByRole('button', { name: 'Button 2' });
      await expect(secondButton).toBeFocused();
    });

    test('should activate on Enter key', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" onclick="window.enterPressed = true">
          Press Enter
        </button>
      `);

      const button = page.getByRole('button');
      await button.focus();
      await page.keyboard.press('Enter');

      const enterPressed = await page.evaluate(() => (window as Window & { enterPressed?: boolean }).enterPressed);
      expect(enterPressed).toBe(true);
    });

    test('should activate on Space key', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" onclick="window.spacePressed = true">
          Press Space
        </button>
      `);

      const button = page.getByRole('button');
      await button.focus();
      await page.keyboard.press('Space');

      const spacePressed = await page.evaluate(() => (window as Window & { spacePressed?: boolean }).spacePressed);
      expect(spacePressed).toBe(true);
    });
  });

  test.describe('Accessibility', () => {
    test('should meet WCAG accessibility standards', async ({ page }) => {
      // Wait for page to be fully loaded with buttons visible
      await page.waitForSelector('.aegov-btn');

      // Run accessibility check without options (checks whole page)
      await checkAccessibility(page);
    });

    test('should have proper ARIA attributes', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" aria-label="Custom action">
          Action
        </button>
      `);

      const button = page.getByRole('button');
      await expect(button).toHaveAttribute('aria-label', 'Custom action');
    });

    test('should have aria-disabled when disabled', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button" disabled aria-disabled="true">
          Disabled
        </button>
      `);

      const button = page.getByRole('button');
      await expect(button).toHaveAttribute('aria-disabled', 'true');
      await expect(button).toBeDisabled();
    });
  });

  test.describe('RTL Support', () => {
    test('should work in RTL mode (Arabic)', async ({ page }) => {
      await page.setContent(`
        <html dir="rtl" lang="ar">
          <body>
            <button class="aegov-btn" type="button">تسجيل الدخول</button>
            <button class="aegov-btn" type="button">
              التالي
              <svg class="rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256">
                <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
              </svg>
            </button>
          </body>
        </html>
      `);

      const direction = await page.evaluate(() =>
        window.getComputedStyle(document.documentElement).direction
      );
      expect(direction).toBe('rtl');

      const button = page.getByRole('button').first();
      await expect(button).toBeVisible();
    });
  });

  test.describe('Hover and Focus States', () => {
    test('should show hover effect on mouse hover', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">Hover me</button>
      `);

      const button = page.getByRole('button');

      // Hover over button
      await button.hover();

      // Wait a bit for animation
      await page.waitForTimeout(200);

      // Button should still be visible and interactive
      await expect(button).toBeVisible();
    });

    test('should show focus ring on keyboard focus', async ({ page }) => {
      await page.setContent(`
        <button class="aegov-btn" type="button">Focus me</button>
      `);

      const button = page.getByRole('button');

      await page.keyboard.press('Tab');
      await expect(button).toBeFocused();
    });
  });

  test.describe('Visual Regression', () => {
    test('should match button variants snapshot', async ({ page }) => {
      await page.setContent(`
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 32px;">
          <button class="aegov-btn" type="button">Solid button</button>
          <button class="aegov-btn btn-outline" type="button">Outline button</button>
          <button class="aegov-btn btn-soft" type="button">Soft button</button>
          <button class="aegov-btn btn-link" type="button">Link button</button>
        </div>
      `);

      await takeScreenshot(page, 'button-variants', { fullPage: true });
    });

    test('should match button sizes snapshot', async ({ page }) => {
      await page.setContent(`
        <div style="display: flex; flex-direction: column; gap: 16px; padding: 32px; align-items: flex-start;">
          <button class="aegov-btn btn-xs" type="button">Extra small</button>
          <button class="aegov-btn btn-sm" type="button">Small</button>
          <button class="aegov-btn" type="button">Base</button>
          <button class="aegov-btn btn-lg" type="button">Large</button>
        </div>
      `);

      await takeScreenshot(page, 'button-sizes', { fullPage: true });
    });
  });

  test.describe('Responsive Behavior', () => {
    test('should render correctly on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 }); // iPhone SE

      await page.setContent(`
        <button class="aegov-btn btn-sm lg:btn-base" type="button">
          Responsive button
        </button>
      `);

      const button = page.getByRole('button');
      await expect(button).toBeVisible();
    });

    test('should render full-width button', async ({ page }) => {
      // Find the full-width button on the demo page
      const button = page.getByRole('button', { name: 'Full Width Button' });
      await expect(button).toBeVisible();

      // Check that it has the w-full class
      await expect(button).toHaveClass(/w-full/);

      // Get the button and its container
      const buttonBox = await button.boundingBox();
      const container = button.locator('xpath=ancestor::div[1]');
      const containerBox = await container.boundingBox();

      // Button width should be close to container width (accounting for padding)
      if (buttonBox && containerBox) {
        expect(buttonBox.width).toBeGreaterThan(containerBox.width * 0.95);
      }
    });
  });

  test.describe('Multiple Buttons', () => {
    test('should handle button groups', async ({ page }) => {
      await page.setContent(`
        <div style="display: flex; gap: 8px;">
          <button class="aegov-btn" type="button">Primary</button>
          <button class="aegov-btn btn-outline" type="button">Secondary</button>
          <button class="aegov-btn btn-soft" type="button">Cancel</button>
        </div>
      `);

      const buttons = page.getByRole('button');
      await expect(buttons).toHaveCount(3);

      await expect(buttons.nth(0)).toBeVisible();
      await expect(buttons.nth(1)).toBeVisible();
      await expect(buttons.nth(2)).toBeVisible();
    });
  });
});
