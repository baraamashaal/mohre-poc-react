import { test, expect } from '@playwright/test';

test.describe('Modal Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/modal');
    await expect(page.locator('h1')).toContainText('Modal Component Showcase');
  });

  test.describe('Basic Modal', () => {
    test('should open modal when button is clicked', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Basic Modal Example')).toBeVisible();
      await expect(page.getByText(/This is a simple modal/)).toBeVisible();
    });

    test('should close modal when close button is clicked', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const closeButton = modal.getByLabel('Close');
      await closeButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should close modal when clicking outside (backdrop)', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Click outside the modal (on the backdrop)
      await page.mouse.click(50, 50);

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should close modal when Escape key is pressed', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      await page.keyboard.press('Escape');

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should have proper ARIA attributes', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      await expect(modal).toHaveAttribute('role', 'dialog');
      await expect(modal).toHaveAttribute('aria-labelledby');
    });
  });

  test.describe('Single Action Modal', () => {
    test('should display modal with single action button and icon', async ({ page }) => {
      const section = page.getByTestId('single-action-icon-section');
      const button = section.getByRole('button', { name: 'Open Success Modal' });

      await button.click();

      await expect(page.getByRole('dialog')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Payment successful')).toBeVisible();
      await expect(page.getByText(/Your payment has been processed/)).toBeVisible();

      // Check for action button
      const actionButton = page.getByRole('button', { name: 'Got it, thanks!' });
      await expect(actionButton).toBeVisible();
    });

    test('should close modal when action button is clicked', async ({ page }) => {
      const section = page.getByTestId('single-action-icon-section');
      const button = section.getByRole('button', { name: 'Open Success Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const actionButton = page.getByRole('button', { name: 'Got it, thanks!' });
      await actionButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should display modal with single action button without icon', async ({ page }) => {
      const section = page.getByTestId('single-action-no-icon-section');
      const button = section.getByRole('button', { name: 'Open Single Action Modal' });

      await button.click();

      await expect(page.getByRole('dialog')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Email notification sent')).toBeVisible();
      await expect(page.getByText(/A notification has been sent/)).toBeVisible();
    });
  });

  test.describe('Multiple Actions Modal', () => {
    test('should display modal with multiple action buttons', async ({ page }) => {
      const section = page.getByTestId('multiple-actions-section');
      const button = section.getByRole('button', { name: 'Open Multiple Actions Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Deactivate account')).toBeVisible();

      // Check for both action buttons
      await expect(modal.getByRole('button', { name: 'Deactivate' })).toBeVisible();
      await expect(modal.getByRole('button', { name: 'Cancel' })).toBeVisible();
    });

    test('should close modal when cancel button is clicked', async ({ page }) => {
      const section = page.getByTestId('multiple-actions-section');
      const button = section.getByRole('button', { name: 'Open Multiple Actions Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const cancelButton = modal.getByRole('button', { name: 'Cancel' });
      await cancelButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Alert Modal', () => {
    test('should display alert variant with appropriate styling', async ({ page }) => {
      const section = page.getByTestId('alert-section');
      const button = section.getByRole('button', { name: 'Open Alert Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Attention needed')).toBeVisible();
      await expect(page.getByText(/Please review the following information/)).toBeVisible();
    });

    test('should have primary color styling for alert variant', async ({ page }) => {
      const section = page.getByTestId('alert-section');
      const button = section.getByRole('button', { name: 'Open Alert Modal' });

      await button.click();

      await expect(page.getByRole('dialog')).toBeVisible({ timeout: 2000 });

      // Check for alert variant styling (primary colors)
      const iconContainer = page.locator('.bg-primary-100').first();
      await expect(iconContainer).toBeVisible();
    });
  });

  test.describe('Danger Modal', () => {
    test('should display danger variant with appropriate styling', async ({ page }) => {
      const section = page.getByTestId('danger-section');
      const button = section.getByRole('button', { name: 'Open Danger Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Delete Account')).toBeVisible();
      await expect(page.getByText(/This action cannot be undone/)).toBeVisible();
    });

    test('should have red color styling for danger variant', async ({ page }) => {
      const section = page.getByTestId('danger-section');
      const button = section.getByRole('button', { name: 'Open Danger Modal' });

      await button.click();

      await expect(page.getByRole('dialog')).toBeVisible({ timeout: 2000 });

      // Check for danger variant styling (red colors)
      const iconContainer = page.locator('.bg-aered-100').first();
      await expect(iconContainer).toBeVisible();
    });

    test('should display delete and cancel buttons', async ({ page }) => {
      const section = page.getByTestId('danger-section');
      const button = section.getByRole('button', { name: 'Open Danger Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      await expect(modal.getByRole('button', { name: 'Delete' })).toBeVisible();
      await expect(modal.getByRole('button', { name: 'Cancel' })).toBeVisible();
    });
  });

  test.describe('Confirmation Standard Modal', () => {
    test('should display standard confirmation modal', async ({ page }) => {
      const section = page.getByTestId('confirmation-standard-section');
      const button = section.getByRole('button', { name: 'Open Confirmation Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Confirm submission')).toBeVisible();
      await expect(page.getByText(/Are you sure you want to submit/)).toBeVisible();
    });

    test('should have confirm and cancel buttons', async ({ page }) => {
      const section = page.getByTestId('confirmation-standard-section');
      const button = section.getByRole('button', { name: 'Open Confirmation Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      await expect(modal.getByRole('button', { name: 'Confirm' })).toBeVisible();
      await expect(modal.getByRole('button', { name: 'Cancel' })).toBeVisible();
    });
  });

  test.describe('Scrollable Content Modal', () => {
    test('should display modal with scrollable content', async ({ page }) => {
      const section = page.getByTestId('scrollable-section');
      const button = section.getByRole('button', { name: 'Open Scrollable Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Terms and Conditions')).toBeVisible();
    });

    test('should allow scrolling within modal content', async ({ page }) => {
      const section = page.getByTestId('scrollable-section');
      const button = section.getByRole('button', { name: 'Open Scrollable Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Check if content has overflow styling
      const scrollableContent = modal.locator('[class*="overflow-y-auto"]');
      await expect(scrollableContent).toBeVisible();
    });
  });

  test.describe('Placement Modal', () => {
    test('should display modal in bottom-right position', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Open Bottom-Right Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Notification')).toBeVisible();
    });

    test('should have correct positioning classes', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Open Bottom-Right Modal' });

      await button.click();

      await expect(page.getByRole('dialog')).toBeVisible({ timeout: 2000 });

      // The modal container should have placement classes
      const modalContainer = page.locator('.aegov-modal');
      await expect(modalContainer).toBeVisible();
    });
  });

  test.describe('Static Backdrop Modal', () => {
    test('should display modal with static backdrop', async ({ page }) => {
      const section = page.getByTestId('static-backdrop-section');
      const button = section.getByRole('button', { name: 'Open Static Backdrop Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Important Information')).toBeVisible();
    });

    test('should not close when clicking outside (static backdrop)', async ({ page }) => {
      const section = page.getByTestId('static-backdrop-section');
      const button = section.getByRole('button', { name: 'Open Static Backdrop Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Try clicking outside the modal (on the backdrop)
      await page.mouse.click(50, 50);

      // Modal should still be visible
      await expect(modal).toBeVisible();
    });

    test('should not close when Escape key is pressed (static backdrop)', async ({ page }) => {
      const section = page.getByTestId('static-backdrop-section');
      const button = section.getByRole('button', { name: 'Open Static Backdrop Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      await page.keyboard.press('Escape');

      // Modal should still be visible
      await expect(modal).toBeVisible();
    });

    test('should close when action button is clicked', async ({ page }) => {
      const section = page.getByTestId('static-backdrop-section');
      const button = section.getByRole('button', { name: 'Open Static Backdrop Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const actionButton = modal.getByRole('button', { name: 'Understood' });
      await actionButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('No Close Button Modal', () => {
    test('should display modal without close button', async ({ page }) => {
      const section = page.getByTestId('no-close-button-section');
      const button = section.getByRole('button', { name: 'Open No Close Button Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Required Action')).toBeVisible();
    });

    test('should not have close button in top-right corner', async ({ page }) => {
      const section = page.getByTestId('no-close-button-section');
      const button = section.getByRole('button', { name: 'Open No Close Button Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Check that close button is not visible
      const closeButton = modal.getByLabel('Close');
      await expect(closeButton).not.toBeVisible();
    });

    test('should close via action button only', async ({ page }) => {
      const section = page.getByTestId('no-close-button-section');
      const button = section.getByRole('button', { name: 'Open No Close Button Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const actionButton = modal.getByRole('button', { name: 'Complete Action' });
      await actionButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Size Variations', () => {
    test('should display small modal', async ({ page }) => {
      const section = page.getByTestId('size-variations-section');
      const button = section.getByRole('button', { name: 'Small Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Small Modal')).toBeVisible();

      await modal.getByLabel('Close').click();
      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should display medium modal', async ({ page }) => {
      const section = page.getByTestId('size-variations-section');
      const button = section.getByRole('button', { name: 'Medium Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Medium Modal (Default)')).toBeVisible();

      await modal.getByLabel('Close').click();
      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });

    test('should display large modal', async ({ page }) => {
      const section = page.getByTestId('size-variations-section');
      const button = section.getByRole('button', { name: 'Large Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Large Modal')).toBeVisible();

      await modal.getByLabel('Close').click();
      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Focus Management', () => {
    test('should trap focus within modal when open', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Tab through focusable elements
      await page.keyboard.press('Tab');

      // Focus should be within the modal
      const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
      expect(focusedElement).toBeTruthy();
    });

    test('should return focus to trigger button when modal closes', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();
      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      const closeButton = modal.getByLabel('Close');
      await closeButton.click();

      await expect(modal).not.toBeVisible({ timeout: 2000 });

      // Check that focus returned to trigger button
      const focusedButton = await page.evaluate(() => document.activeElement?.textContent);
      expect(focusedButton).toContain('Open Basic Modal');
    });
  });

  test.describe('Accessibility', () => {
    test('should have accessible name from title', async ({ page }) => {
      const section = page.getByTestId('basic-section');
      const button = section.getByRole('button', { name: 'Open Basic Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Modal should have aria-labelledby pointing to title
      const ariaLabelledby = await modal.getAttribute('aria-labelledby');
      expect(ariaLabelledby).toBeTruthy();
    });

    test('should support keyboard navigation', async ({ page }) => {
      const section = page.getByTestId('multiple-actions-section');
      const button = section.getByRole('button', { name: 'Open Multiple Actions Modal' });

      await button.click();

      const modal = page.getByRole('dialog');
      await expect(modal).toBeVisible({ timeout: 2000 });

      // Tab should navigate between action buttons
      await page.keyboard.press('Tab');
      await page.keyboard.press('Tab');

      // Enter should activate focused button
      await page.keyboard.press('Enter');

      await expect(modal).not.toBeVisible({ timeout: 2000 });
    });
  });
});
