import { test, expect } from '@playwright/test';

test.describe('Tabs Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/tabs');
    await expect(page.locator('h1')).toContainText('Tabs Component Showcase');
  });

  test.describe('Default Tabs', () => {
    test('should render all tab items', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      await expect(tabs.getByRole('tab', { name: 'Profile' })).toBeVisible();
      await expect(tabs.getByRole('tab', { name: 'Dashboard' })).toBeVisible();
      await expect(tabs.getByRole('tab', { name: 'Settings' })).toBeVisible();
    });

    test('should have Dashboard tab active by default', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
      await expect(dashboardTab).toHaveClass(/tab-active/);
      await expect(tabs.getByText('Dashboard content goes here')).toBeVisible();
    });

    test('should apply tab-active and tab-inactive classes correctly', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });

      // Dashboard is active by default
      await expect(dashboardTab).toHaveClass(/tab-active/);
      await expect(dashboardTab).not.toHaveClass(/tab-inactive/);

      // Profile and Settings are inactive
      await expect(profileTab).toHaveClass(/tab-inactive/);
      await expect(profileTab).not.toHaveClass(/tab-active/);
      await expect(settingsTab).toHaveClass(/tab-inactive/);
      await expect(settingsTab).not.toHaveClass(/tab-active/);
    });

    test('should switch tabs on click', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      // Click on Settings tab
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await settingsTab.click();

      // Settings should be active
      await expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.getByText('Settings content goes here')).toBeVisible();
    });

    test('should toggle tab-active and tab-inactive classes on click', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });

      // Initially Dashboard is active
      await expect(dashboardTab).toHaveClass(/tab-active/);
      await expect(settingsTab).toHaveClass(/tab-inactive/);

      // Click Settings tab
      await settingsTab.click();

      // Now Settings should be active
      await expect(settingsTab).toHaveClass(/tab-active/);
      await expect(settingsTab).not.toHaveClass(/tab-inactive/);
      await expect(dashboardTab).toHaveClass(/tab-inactive/);
      await expect(dashboardTab).not.toHaveClass(/tab-active/);
    });

    test('should have correct ARIA attributes', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const tablist = tabs.getByRole('tablist');
      await expect(tablist).toHaveAttribute('aria-label', 'Tabs');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-controls', 'profile');
    });
  });

  test.describe('Compact Tabs', () => {
    test('should render with compact size class', async ({ page }) => {
      const section = page.getByTestId('compact-section');
      const tabs = section.getByTestId('tabs-compact');

      await expect(tabs).toHaveClass(/tab-sm/);
    });

    test('should have Profile tab active by default', async ({ page }) => {
      const section = page.getByTestId('compact-section');
      const tabs = section.getByTestId('tabs-compact');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('Pills Tabs', () => {
    test('should render with pills variant class', async ({ page }) => {
      const section = page.getByTestId('pills-section');
      const tabs = section.getByTestId('tabs-pills');

      await expect(tabs).toHaveClass(/tab-pills/);
    });

    test('should have Settings tab active by default', async ({ page }) => {
      const section = page.getByTestId('pills-section');
      const tabs = section.getByTestId('tabs-pills');

      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('Compact Pills Tabs', () => {
    test('should have both compact and pills classes', async ({ page }) => {
      const section = page.getByTestId('compact-pills-section');
      const tabs = section.getByTestId('tabs-compact-pills');

      await expect(tabs).toHaveClass(/tab-sm/);
      await expect(tabs).toHaveClass(/tab-pills/);
    });
  });

  test.describe('Tabs with Icons', () => {
    test('should render tabs with icons', async ({ page }) => {
      const section = page.getByTestId('icons-section');
      const tabs = section.getByTestId('tabs-icons');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await expect(dashboardTab).toBeVisible();

      // Check if icon is present (SVG element)
      const icon = dashboardTab.locator('svg').first();
      await expect(icon).toBeVisible();
    });

    test('should switch tabs with icons', async ({ page }) => {
      const section = page.getByTestId('icons-section');
      const tabs = section.getByTestId('tabs-icons');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await profileTab.click();

      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.getByText('User Profile')).toBeVisible();
    });
  });

  test.describe('Tabs with Icons (Pills Style)', () => {
    test('should render icons with pills variant', async ({ page }) => {
      const section = page.getByTestId('icons-pills-section');
      const tabs = section.getByTestId('tabs-icons-pills');

      await expect(tabs).toHaveClass(/tab-pills/);

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      const icon = profileTab.locator('svg').first();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Disabled Tabs', () => {
    test('should render disabled tab with correct attributes', async ({ page }) => {
      const section = page.getByTestId('disabled-section');
      const tabs = section.getByTestId('tabs-disabled');

      const disabledTab = tabs.getByRole('tab', { name: 'Disabled' });
      await expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
      await expect(disabledTab).toHaveClass(/opacity-50/);
    });

    test('should not activate disabled tab on click', async ({ page }) => {
      const section = page.getByTestId('disabled-section');
      const tabs = section.getByTestId('tabs-disabled');

      const disabledTab = tabs.getByRole('tab', { name: 'Disabled', exact: true });
      const availableTab = tabs.getByRole('tab', { name: 'Available', exact: true });

      // Available should be active initially
      await expect(availableTab).toHaveAttribute('aria-selected', 'true');

      // Try to click disabled tab
      await disabledTab.click({ force: true });

      // Available should still be active
      await expect(availableTab).toHaveAttribute('aria-selected', 'true');
      await expect(disabledTab).toHaveAttribute('aria-selected', 'false');
    });
  });

  test.describe('Keyboard Navigation', () => {
    test('should navigate tabs with Arrow Right key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await profileTab.focus();

      // Press Arrow Right
      await page.keyboard.press('ArrowRight');

      // Dashboard should be active
      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should navigate tabs with Arrow Left key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      // Start with Dashboard (second tab)
      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await dashboardTab.click();
      await dashboardTab.focus();

      // Press Arrow Left
      await page.keyboard.press('ArrowLeft');

      // Profile should be active
      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should navigate tabs with Arrow Down key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await profileTab.focus();

      // Press Arrow Down
      await page.keyboard.press('ArrowDown');

      // Dashboard should be active
      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should navigate tabs with Arrow Up key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      // Start with Dashboard
      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await dashboardTab.click();
      await dashboardTab.focus();

      // Press Arrow Up
      await page.keyboard.press('ArrowUp');

      // Profile should be active
      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should wrap to first tab when Arrow Right on last tab', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      // Go to Settings (last tab)
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await settingsTab.click();
      await settingsTab.focus();

      // Press Arrow Right
      await page.keyboard.press('ArrowRight');

      // Should wrap to Profile (first tab)
      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should wrap to last tab when Arrow Left on first tab', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await profileTab.focus();

      // Press Arrow Left
      await page.keyboard.press('ArrowLeft');

      // Should wrap to Settings (last tab)
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should jump to first tab with Home key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      // Start with Settings
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await settingsTab.click();
      await settingsTab.focus();

      // Press Home
      await page.keyboard.press('Home');

      // Should jump to Profile (first tab)
      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should jump to last tab with End key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await profileTab.focus();

      // Press End
      await page.keyboard.press('End');

      // Should jump to Settings (last tab)
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await expect(settingsTab).toHaveAttribute('aria-selected', 'true');
    });

    test('should activate tab with Enter key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await dashboardTab.focus();

      // Press Enter
      await page.keyboard.press('Enter');

      await expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.getByText(/View your statistics/)).toBeVisible();
    });

    test('should activate tab with Space key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const tabs = section.getByTestId('tabs-keyboard');

      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await settingsTab.focus();

      // Press Space
      await page.keyboard.press('Space');

      await expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      await expect(tabs.getByText(/Configure your preferences/)).toBeVisible();
    });

    test('should skip disabled tabs in keyboard navigation', async ({ page }) => {
      const section = page.getByTestId('disabled-section');
      const tabs = section.getByTestId('tabs-disabled');

      const availableTab = tabs.getByRole('tab', { name: 'Available', exact: true });
      await availableTab.focus();

      // Press Arrow Right (should skip disabled tab)
      await page.keyboard.press('ArrowRight');

      // Should go to "Also Available" (skipping "Disabled")
      const alsoAvailableTab = tabs.getByRole('tab', { name: 'Also Available', exact: true });
      await expect(alsoAvailableTab).toHaveAttribute('aria-selected', 'true');
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA roles', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const tablist = tabs.getByRole('tablist');
      await expect(tablist).toBeVisible();

      const tabElements = tabs.getByRole('tab');
      await expect(tabElements).toHaveCount(3);
    });

    test('should set tabIndex correctly', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      const profileTab = tabs.getByRole('tab', { name: 'Profile' });

      // Active tab should have tabIndex="0"
      await expect(dashboardTab).toHaveAttribute('tabindex', '0');

      // Inactive tabs should have tabIndex="-1"
      await expect(profileTab).toHaveAttribute('tabindex', '-1');
    });

    test('should link tabs to panels with aria-controls', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      const profileTab = tabs.getByRole('tab', { name: 'Profile' });
      await expect(profileTab).toHaveAttribute('aria-controls', 'profile');

      const dashboardTab = tabs.getByRole('tab', { name: 'Dashboard' });
      await expect(dashboardTab).toHaveAttribute('aria-controls', 'dashboard');
    });
  });

  test.describe('Animations', () => {
    test('should animate content when switching tabs', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const tabs = section.getByTestId('tabs-default');

      // Initial state: Dashboard active
      await expect(tabs.getByText('Dashboard content goes here')).toBeVisible();

      // Click Settings tab
      const settingsTab = tabs.getByRole('tab', { name: 'Settings' });
      await settingsTab.click();

      // Content should change (with animation)
      await expect(tabs.getByText('Settings content goes here')).toBeVisible();
      await expect(tabs.getByText('Dashboard content goes here')).not.toBeVisible();
    });
  });
});
