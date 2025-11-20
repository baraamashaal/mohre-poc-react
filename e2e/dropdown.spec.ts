import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('Dropdown Component E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/dropdown', { waitUntil: 'domcontentloaded' });
  });

  test('renders all dropdown sections', async ({ page }) => {
    await expect(page.locator('[data-testid="dropdown-click-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-hover-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-links-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-icons-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-disabled-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-placement-section"]')).toBeVisible();
    await expect(page.locator('[data-testid="dropdown-a11y-section"]')).toBeVisible();
  });

  test.describe('Click Trigger', () => {
    test('opens dropdown on button click', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      const dropdown = page.locator('#click-dropdown');

      // Initially hidden
      await expect(dropdown).not.toBeVisible();

      // Click to open
      await trigger.click();
      await expect(dropdown).toBeVisible();
    });

    test('closes dropdown on second click', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      const dropdown = page.locator('#click-dropdown');

      // Open
      await trigger.click();
      await expect(dropdown).toBeVisible();

      // Close
      await trigger.click();
      await expect(dropdown).not.toBeVisible();
    });

    test('closes dropdown when clicking outside', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      const dropdown = page.locator('#click-dropdown');

      // Open
      await trigger.click();
      await expect(dropdown).toBeVisible();

      // Click outside
      await page.locator('h1').click();
      await expect(dropdown).not.toBeVisible();
    });

    test('displays all menu items', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      await trigger.click();

      await expect(page.getByText('Dashboard').first()).toBeVisible();
      await expect(page.getByText('Settings').first()).toBeVisible();
      await expect(page.getByText('Profile').first()).toBeVisible();
      await expect(page.getByText('Logout').first()).toBeVisible();
    });
  });

  test.describe('Hover Trigger', () => {
    test('opens dropdown on hover', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Hover Me' });
      const dropdown = page.locator('#hover-dropdown');

      // Initially hidden
      await expect(dropdown).not.toBeVisible();

      // Hover to open
      await trigger.hover();
      await page.waitForTimeout(100);
      await expect(dropdown).toBeVisible();
    });

    test('closes dropdown on mouse leave', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Hover Me' });
      const dropdown = page.locator('#hover-dropdown');

      // Hover to open
      await trigger.hover();
      await page.waitForTimeout(100);
      await expect(dropdown).toBeVisible();

      // Move mouse away
      await page.locator('h1').hover();
      await page.waitForTimeout(100);
      await expect(dropdown).not.toBeVisible();
    });
  });

  test.describe('Links', () => {
    test('renders dropdown with link items', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Navigation' });
      await trigger.click();

      const homeLink = page.getByRole('link', { name: 'Home' }).first();
      await expect(homeLink).toBeVisible();
      await expect(homeLink).toHaveAttribute('href', '/');

      const aboutLink = page.getByRole('link', { name: 'About' }).first();
      await expect(aboutLink).toHaveAttribute('href', '/about');
    });
  });

  test.describe('Icons', () => {
    test('renders dropdown items with icons', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Actions' });
      await trigger.click();

      await expect(page.getByText('Edit').first()).toBeVisible();
      await expect(page.getByText('Duplicate').first()).toBeVisible();
      await expect(page.getByText('Delete').first()).toBeVisible();

      // Check that SVG icons are present
      const dropdown = page.locator('#icons-dropdown');
      const icons = dropdown.locator('svg');
      await expect(icons.first()).toBeVisible();
    });
  });

  test.describe('Disabled Items', () => {
    test('renders disabled items with correct styling', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Options' });
      await trigger.click();

      const disabledItem = page.getByText('Archive');
      await expect(disabledItem).toBeVisible();
      await expect(disabledItem).toHaveClass(/opacity-50/);
      await expect(disabledItem).toHaveClass(/pointer-events-none/);
    });
  });

  test.describe('Placement', () => {
    test('renders dropdown in top placement', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Top' });
      const dropdown = page.locator('#top-dropdown');

      await trigger.click();
      await expect(dropdown).toBeVisible();
    });

    test('renders dropdown in right placement', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Right' });
      const dropdown = page.locator('#right-dropdown');

      await trigger.click();
      await expect(dropdown).toBeVisible();
    });

    test('renders dropdown in bottom placement', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Bottom' });
      const dropdown = page.locator('#bottom-dropdown');

      await trigger.click();
      await expect(dropdown).toBeVisible();
    });

    test('renders dropdown in left placement', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Left' });
      const dropdown = page.locator('#left-dropdown');

      await trigger.click();
      await expect(dropdown).toBeVisible();
    });
  });

  test.describe('Structure', () => {
    test('has correct AEGOV classes', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      await trigger.click();

      const dropdown = page.locator('#click-dropdown');
      await expect(dropdown).toHaveClass(/aegov-dropdown/);

      const dropdownBody = dropdown.locator('.dropdown-body');
      await expect(dropdownBody).toBeVisible();

      const dropdownItems = dropdown.locator('.dropdown-item');
      expect(await dropdownItems.count()).toBeGreaterThan(0);
    });

    test('has role="menu" on menu list', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });
      await trigger.click();

      const menu = page.getByRole('menu').first();
      await expect(menu).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('trigger has correct ARIA attributes', async ({ page }) => {
      const trigger = page.getByRole('button', { name: 'Click Me' });

      // Initially not expanded
      await expect(trigger).toHaveAttribute('aria-expanded', 'false');
      await expect(trigger).toHaveAttribute('aria-haspopup', 'menu');

      // After clicking
      await trigger.click();
      await expect(trigger).toHaveAttribute('aria-expanded', 'true');
    });

    test('meets accessibility standards', async ({ page }) => {
      // Open a dropdown first
      const trigger = page.getByRole('button', { name: 'Click Me' });
      await trigger.click();

      await checkAccessibility(page);
    });
  });

  test.describe('Multiple Instances', () => {
    test('multiple dropdowns work independently', async ({ page }) => {
      const clickTrigger = page.getByRole('button', { name: 'Click Me' });
      const hoverTrigger = page.getByRole('button', { name: 'Hover Me' });

      const clickDropdown = page.locator('#click-dropdown');
      const hoverDropdown = page.locator('#hover-dropdown');

      // Open click dropdown
      await clickTrigger.click();
      await expect(clickDropdown).toBeVisible();
      await expect(hoverDropdown).not.toBeVisible();

      // Hover on hover dropdown
      await hoverTrigger.hover();
      await page.waitForTimeout(100);
      await expect(hoverDropdown).toBeVisible();
      // Click dropdown should still be open
      await expect(clickDropdown).toBeVisible();
    });
  });
});
