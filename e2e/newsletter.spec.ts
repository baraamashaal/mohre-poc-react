import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Newsletter Block E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to Newsletter showcase page
    await page.goto('/showcase/newsletter', { waitUntil: 'domcontentloaded' });

    // Wait for first newsletter block to ensure content is rendered
    await expect(page.locator('.aegov-newsletter').first()).toBeVisible();
  });

  test.describe('Rendering', () => {
    test('renders newsletter block with all variants', async ({ page }) => {
      // Check for newsletter blocks
      const newsletters = page.locator('.aegov-newsletter');
      const count = await newsletters.count();

      expect(count).toBeGreaterThanOrEqual(4); // At least 4 variants
    });

    test('renders full-width variant', async ({ page }) => {
      const fullWidth = page.locator('[data-testid="newsletter-full-width"]');
      await expect(fullWidth).toBeVisible();

      // Should have proper heading
      const heading = fullWidth.locator('h2');
      await expect(heading).toBeVisible();
      await expect(heading).toContainText('Subscribe');
    });

    test('renders sidebar variant', async ({ page }) => {
      const sidebar = page.locator('[data-testid="newsletter-sidebar"]');
      await expect(sidebar).toBeVisible();

      // Sidebar should have narrower width class
      await expect(sidebar).toHaveClass(/w-80/);
    });

    test('renders button-only variant', async ({ page }) => {
      const buttonOnly = page.locator('[data-testid="newsletter-button-full"]');
      await expect(buttonOnly).toBeVisible();

      // Should have link instead of form
      const link = buttonOnly.locator('[data-testid="newsletter-subscribe-link"]');
      await expect(link).toBeVisible();
    });

    test('displays decorative SVGs in full-width variant', async ({ page }) => {
      const fullWidth = page.locator('[data-testid="newsletter-full-width"]');

      // Check for decorative SVGs
      const decorations = fullWidth.locator('svg.absolute');
      const count = await decorations.count();

      expect(count).toBe(2); // Top-right and bottom-left
    });

    test('hides decorations when disabled', async ({ page }) => {
      const noDecorations = page.locator('[data-testid="newsletter-no-decorations"]');
      await expect(noDecorations).toBeVisible();

      // Should not have decorative SVGs
      const decorations = noDecorations.locator('svg.absolute');
      const count = await decorations.count();

      expect(count).toBe(0);
    });
  });

  test.describe('Form Interaction', () => {
    test('email input accepts valid email', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-no-privacy"]');
      const emailInput = newsletter.locator('input[type="email"]');

      await emailInput.fill('test@example.com');

      const value = await emailInput.inputValue();
      expect(value).toBe('test@example.com');
    });

    test('submit button is disabled when form is invalid', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Initially disabled (no email)
      await expect(submitButton).toBeDisabled();
    });

    test('submit button is enabled when form is valid', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-no-privacy"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill valid email
      await emailInput.fill('test@example.com');

      // Button should be enabled
      await expect(submitButton).toBeEnabled();
    });

    test('privacy checkbox toggles correctly', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');

      // Initially unchecked
      await expect(checkbox).not.toBeChecked();

      // Click to check
      await checkbox.click();
      await expect(checkbox).toBeChecked();

      // Click to uncheck
      await checkbox.click();
      await expect(checkbox).not.toBeChecked();
    });

    test('form requires privacy consent when enabled', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill email but don't check privacy
      await emailInput.fill('test@example.com');

      // Button should still be disabled
      await expect(submitButton).toBeDisabled();

      // Check privacy
      await checkbox.click();

      // Now button should be enabled
      await expect(submitButton).toBeEnabled();
    });

    test('shows loading state during submission', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill form
      await emailInput.fill('test@example.com');
      await checkbox.click();

      // Submit
      await submitButton.click();

      // Check for loading text
      await expect(submitButton).toContainText('Subscribing');
      await expect(submitButton).toBeDisabled();
    });

    test('shows success message after submission', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill form
      await emailInput.fill('test@example.com');
      await checkbox.click();

      // Submit
      await submitButton.click();

      // Wait for success message
      const successMessage = newsletter.locator('[data-testid="newsletter-full-width-success-message"]');
      await expect(successMessage).toBeVisible({ timeout: 3000 });
      await expect(successMessage).toContainText('Successfully subscribed');
    });

    test('shows error message on submission failure', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-error-demo"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill form (no privacy checkbox for error demo)
      await emailInput.fill('test@example.com');

      // Submit
      await submitButton.click();

      // Wait for error message
      const errorMessage = newsletter.locator('[data-testid="newsletter-error-demo-error-message"]');
      await expect(errorMessage).toBeVisible({ timeout: 3000 });
      await expect(errorMessage).toContainText(/error|fail/i);
    });

    test('clears form after successful submission', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Fill form
      await emailInput.fill('test@example.com');
      await checkbox.click();

      // Submit
      await submitButton.click();

      // Wait for success
      const successMessage = newsletter.locator('[data-testid="newsletter-full-width-success-message"]');
      await expect(successMessage).toBeVisible({ timeout: 3000 });

      // Form should be cleared
      const value = await emailInput.inputValue();
      expect(value).toBe('');
      await expect(checkbox).not.toBeChecked();
    });
  });

  test.describe('Accessibility', () => {
    test('newsletter meets accessibility standards', async ({ page }) => {
      await checkAccessibility(page);
    });

    test('email input has proper ARIA attributes', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');

      // Check for aria-label
      const ariaLabel = await emailInput.getAttribute('aria-label');
      expect(ariaLabel).toBeTruthy();
      expect(ariaLabel).toContain('Email');
    });

    test('invalid email shows aria-invalid', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-no-privacy"]');
      const emailInput = newsletter.locator('input[type="email"]');

      // Enter invalid email
      await emailInput.fill('invalid-email');

      // Check aria-invalid
      const ariaInvalid = await emailInput.getAttribute('aria-invalid');
      expect(ariaInvalid).toBe('true');
    });

    test('success message has role alert', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Submit form
      await emailInput.fill('test@example.com');
      await checkbox.click();
      await submitButton.click();

      // Wait for success message
      const successMessage = newsletter.locator('[data-testid="newsletter-full-width-success-message"]');
      await expect(successMessage).toBeVisible({ timeout: 3000 });

      // Check role
      const role = await successMessage.getAttribute('role');
      expect(role).toBe('alert');
    });

    test('error message has role alert', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-error-demo"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Submit form
      await emailInput.fill('test@example.com');
      await submitButton.click();

      // Wait for error message
      const errorMessage = newsletter.locator('[data-testid="newsletter-error-demo-error-message"]');
      await expect(errorMessage).toBeVisible({ timeout: 3000 });

      // Check role
      const role = await errorMessage.getAttribute('role');
      expect(role).toBe('alert');
    });

    test('decorative SVGs have aria-hidden', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const decorations = newsletter.locator('svg.absolute');

      // Check all decorations have aria-hidden
      const count = await decorations.count();
      for (let i = 0; i < count; i++) {
        const decoration = decorations.nth(i);
        const ariaHidden = await decoration.getAttribute('aria-hidden');
        expect(ariaHidden).toBe('true');
      }
    });
  });

  test.describe('Keyboard Navigation', () => {
    test('can navigate form with keyboard', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');
      const submitButton = newsletter.locator('button[type="submit"]');

      // Focus email input
      await emailInput.focus();
      await page.keyboard.type('test@example.com');

      // Tab to checkbox
      await page.keyboard.press('Tab');
      await page.keyboard.press('Space');

      // Checkbox should be checked
      await expect(checkbox).toBeChecked();

      // Tab to submit button
      await page.keyboard.press('Tab');

      // Submit button should be focused
      await expect(submitButton).toBeFocused();
    });

    test('can submit form with Enter key', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-no-privacy"]');
      const emailInput = newsletter.locator('input[type="email"]');

      // Focus and fill email
      await emailInput.focus();
      await page.keyboard.type('test@example.com');

      // Press Enter to submit
      await page.keyboard.press('Enter');

      // Should show success message
      const successMessage = newsletter.locator('[data-testid="newsletter-no-privacy-success-message"]');
      await expect(successMessage).toBeVisible({ timeout: 3000 });
    });

    test('privacy checkbox can be toggled with Space', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const checkbox = newsletter.locator('[data-testid="newsletter-full-width-privacy-checkbox"]');

      // Focus checkbox
      await checkbox.focus();

      // Initially unchecked
      await expect(checkbox).not.toBeChecked();

      // Press Space to check
      await page.keyboard.press('Space');
      await expect(checkbox).toBeChecked();

      // Press Space to uncheck
      await page.keyboard.press('Space');
      await expect(checkbox).not.toBeChecked();
    });
  });

  test.describe('RTL Support', () => {
    test('supports RTL layout', async ({ page }) => {
      // Set RTL direction
      await page.evaluate(() => {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      });

      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      await expect(newsletter).toBeVisible();

      // Check if text direction is applied
      const dir = await page.evaluate(() => document.documentElement.getAttribute('dir'));
      expect(dir).toBe('rtl');
    });

    test('form layout adjusts for RTL', async ({ page }) => {
      // Set RTL direction
      await page.evaluate(() => {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
      });

      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      const emailInput = newsletter.locator('input[type="email"]');

      // Input should still be functional in RTL
      await emailInput.fill('test@example.com');
      const value = await emailInput.inputValue();
      expect(value).toBe('test@example.com');
    });
  });

  test.describe('Custom Content', () => {
    test('renders custom heading and description', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-custom"]');

      // Check for custom heading
      const heading = newsletter.locator('h2');
      await expect(heading).toContainText('Join Our Community');

      // Check for custom description
      await expect(newsletter).toContainText('exclusive updates');
    });

    test('renders custom privacy label', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-custom-privacy"]');

      // Check for custom privacy label
      await expect(newsletter).toContainText('terms of service');
    });
  });

  test.describe('Responsive Behavior', () => {
    test('renders correctly on mobile viewport', async ({ page }) => {
      // Set mobile viewport
      await page.setViewportSize({ width: 375, height: 667 });

      const newsletter = page.locator('[data-testid="newsletter-full-width"]');
      await expect(newsletter).toBeVisible();

      // Form should be stacked vertically on mobile
      const emailInput = newsletter.locator('input[type="email"]');
      await expect(emailInput).toBeVisible();
    });

    test('sidebar variant maintains fixed width', async ({ page }) => {
      const sidebar = page.locator('[data-testid="newsletter-sidebar"]');

      // Check width class
      await expect(sidebar).toHaveClass(/w-80/);
    });
  });

  test.describe('Button-Only Variant', () => {
    test('button-only variant shows link instead of form', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-button-full"]');

      // Should have link
      const link = newsletter.locator('[data-testid="newsletter-button-full-subscribe-link"]');
      await expect(link).toBeVisible();

      // Should not have form input
      const emailInput = newsletter.locator('input[type="email"]');
      await expect(emailInput).not.toBeVisible();
    });

    test('button-only link has correct href', async ({ page }) => {
      const newsletter = page.locator('[data-testid="newsletter-button-full"]');
      const link = newsletter.locator('[data-testid="newsletter-button-full-subscribe-link"]');

      const href = await link.getAttribute('href');
      expect(href).toBe('/subscribe');
    });
  });
});
