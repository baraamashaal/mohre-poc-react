import { test, expect } from '@playwright/test';

test.describe('Popover Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/popover');
    await expect(page.locator('h1')).toContainText('Popover Component Showcase');
  });

  test.describe('Default Popover', () => {
    test('should show popover on click', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();

      await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Popover title')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Engaging and insightful content')).toBeVisible({ timeout: 2000 });
    });

    test('should hide popover on second click', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();
      await expect(page.getByText('Popover title')).toBeVisible({ timeout: 2000 });

      await button.click();
      await expect(page.getByText('Popover title')).not.toBeVisible({ timeout: 2000 });
    });

    test('should close popover when clicking outside', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();
      await expect(page.getByText('Popover title')).toBeVisible({ timeout: 2000 });

      await page.locator('h2').first().click();
      await expect(page.getByText('Popover title')).not.toBeVisible({ timeout: 2000 });
    });

    test('should have proper ARIA attributes', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();
      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });

      await expect(popover).toHaveAttribute('role', 'tooltip');
    });

    test('should have aegov-popover class', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      await expect(popover).toHaveClass(/aegov-popover/);
      await expect(popover).toHaveClass(/z-10/);
    });

    test('should display header and body', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();

      await expect(page.locator('.popover-header')).toBeVisible({ timeout: 2000 });
      await expect(page.locator('.popover-body')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Flexible Popover', () => {
    test('should not show header in flexible variant', async ({ page }) => {
      const section = page.getByTestId('flexible-section');
      const button = section.getByRole('button', { name: 'Flexible Popover' });

      await button.click();

      await expect(page.getByText(/Add text, images, links/)).toBeVisible({ timeout: 2000 });
      await expect(page.locator('.popover-header')).not.toBeVisible({ timeout: 2000 });
    });

    test('should display body content only', async ({ page }) => {
      const section = page.getByTestId('flexible-section');
      const button = section.getByRole('button', { name: 'Flexible Popover' });

      await button.click();

      await expect(page.locator('.popover-body')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Placement Variations', () => {
    test('should display popover on top', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Top' });

      await button.click();

      await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Top popover')).toBeVisible({ timeout: 2000 });
    });

    test('should display popover on right', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Right' });

      await button.click();

      await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Right popover')).toBeVisible({ timeout: 2000 });
    });

    test('should display popover on bottom', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Bottom' });

      await button.click();

      await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Bottom popover')).toBeVisible({ timeout: 2000 });
    });

    test('should display popover on left', async ({ page }) => {
      const section = page.getByTestId('placement-section');
      const button = section.getByRole('button', { name: 'Left' });

      await button.click();

      await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Left popover')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Rich Content', () => {
    test('should display rich content with links', async ({ page }) => {
      const section = page.getByTestId('rich-content-section');
      const button = section.getByRole('button', { name: 'Quick Actions' });

      await button.click();

      await expect(page.getByRole('link', { name: 'Edit profile' })).toBeVisible({ timeout: 2000 });
      await expect(page.getByRole('link', { name: 'Settings' })).toBeVisible({ timeout: 2000 });
      await expect(page.getByRole('link', { name: 'Log out' })).toBeVisible({ timeout: 2000 });
    });

    test('should display rich content with images', async ({ page }) => {
      const section = page.getByTestId('rich-content-section');
      const button = section.getByRole('button', { name: 'User Profile' });

      await button.click();

      await expect(page.getByAltText('User avatar')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('John Doe')).toBeVisible({ timeout: 2000 });
      await expect(page.getByText('john@example.com')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Width Variations', () => {
    test('should apply small width', async ({ page }) => {
      const section = page.getByTestId('width-section');
      const button = section.getByRole('button', { name: 'Small (w-48)' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      await expect(popover).toHaveClass(/w-48/);
    });

    test('should apply default width', async ({ page }) => {
      const section = page.getByTestId('width-section');
      const button = section.getByRole('button', { name: 'Default (w-64)' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      await expect(popover).toHaveClass(/w-64/);
    });

    test('should apply large width', async ({ page }) => {
      const section = page.getByTestId('width-section');
      const button = section.getByRole('button', { name: 'Large (w-96)' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      await expect(popover).toHaveClass(/w-96/);
    });
  });

  test.describe('Form Guidance', () => {
    test('should show guidance for username field', async ({ page }) => {
      const section = page.getByTestId('form-guidance-section');
      const helpButton = section.locator('label[for="username"] button').first();

      await helpButton.click();

      await expect(page.getByText(/Username must be 3-20 characters/)).toBeVisible({ timeout: 2000 });
    });

    test('should show guidance for email field', async ({ page }) => {
      const section = page.getByTestId('form-guidance-section');
      const helpButton = section.locator('label[for="email"] button').first();

      await helpButton.click();

      await expect(page.getByText(/We'll send a verification email/)).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Arrow', () => {
    test('should render arrow by default', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const button = section.getByRole('button', { name: 'Default popover' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      const arrow = popover.locator('svg').first();
      await expect(arrow).toBeVisible();
    });

    test('should not render arrow when showArrow is false', async ({ page }) => {
      const section = page.getByTestId('no-arrow-section');
      const button = section.getByRole('button', { name: 'No Arrow' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      const arrow = popover.locator('svg');
      await expect(arrow).not.toBeVisible();
    });
  });

  test.describe('Animation', () => {
    test('should animate popover appearance', async ({ page }) => {
      const section = page.getByTestId('animation-section');
      const button = section.getByRole('button', { name: 'Fast (100ms)' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toBeVisible({ timeout: 2000 });
      await expect(popover).toHaveClass(/animate-in/);
    });

    test('should respect custom animation duration', async ({ page }) => {
      const section = page.getByTestId('animation-section');
      const button = section.getByRole('button', { name: 'Fast (100ms)' });

      await button.click();

      const popover = page.getByTestId('popover');
      await expect(popover).toHaveClass(/duration-100/);
    });
  });

  test.describe('Icon Trigger', () => {
    test('should work with icon button trigger', async ({ page }) => {
      const section = page.getByTestId('icon-trigger-section');
      const iconButton = section.getByRole('button', { name: 'More information' });

      await iconButton.click();

      await expect(page.getByText('Additional information about this feature')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Multiple Popovers', () => {
    test('should only show one popover at a time', async ({ page }) => {
      const section = page.getByTestId('multiple-section');
      const firstButton = section.getByRole('button', { name: 'First Popover' });
      const secondButton = section.getByRole('button', { name: 'Second Popover' });

      await firstButton.click();
      await expect(page.getByText('First popover content')).toBeVisible({ timeout: 2000 });

      await secondButton.click();
      await expect(page.getByText('First popover content')).not.toBeVisible({ timeout: 2000 });
      await expect(page.getByText('Second popover content')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Keyboard Interaction', () => {
    // Keyboard tests are thoroughly covered in unit tests (Popover.test.tsx)
    // E2E keyboard tests with programmatic Tab/focus are unreliable across browsers

    test('should close popover on Escape key', async ({ page }) => {
      const section = page.getByTestId('keyboard-section');
      const button = section.getByRole('button', { name: 'First button' });

      await button.click();
      // Use more specific selector to avoid ambiguity
      const popover = page.getByTestId('popover');
      await expect(popover.getByText('First popover')).toBeVisible({ timeout: 2000 });

      await page.keyboard.press('Escape');
      await expect(popover.getByText('First popover')).not.toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Complex Layout', () => {
    test('should show popover on edit icon', async ({ page }) => {
      const section = page.getByTestId('complex-section');
      const editButton = section.locator('button').filter({ has: page.locator('svg path[d*="M11 5H6"]') }).first();

      await editButton.click();

      await expect(page.getByText('Edit settings')).toBeVisible({ timeout: 2000 });
    });

    test('should show popover on notification icon', async ({ page }) => {
      const section = page.getByTestId('complex-section');
      const notificationButton = section.locator('button').filter({ has: page.locator('svg path[d*="M15 17h5"]') }).first();

      await notificationButton.click();

      await expect(page.getByText('View notifications')).toBeVisible({ timeout: 2000 });
    });

    test('should show popovers on dashboard cards', async ({ page }) => {
      const section = page.getByTestId('complex-section');

      const tasksCard = section.locator('div').filter({ hasText: /^Tasks24$/ });
      await tasksCard.click();
      await expect(page.getByText('View all tasks')).toBeVisible({ timeout: 2000 });

      await page.mouse.move(0, 0);

      const projectsCard = section.locator('div').filter({ hasText: /^Projects24$/ });
      await projectsCard.click();
      await expect(page.getByText('View all projects')).toBeVisible({ timeout: 2000 });

      await page.mouse.move(0, 0);

      const reportsCard = section.locator('div').filter({ hasText: /^Reports24$/ });
      await reportsCard.click();
      await expect(page.getByText('View all reports')).toBeVisible({ timeout: 2000 });
    });
  });

  test.describe('Visual Regression', () => {
    test('should render popovers consistently', async ({ page }) => {
      const section = page.getByTestId('placement-section');

      for (const placement of ['Top', 'Right', 'Bottom', 'Left']) {
        const button = section.getByRole('button', { name: placement });
        await button.click();
        await expect(page.getByTestId('popover')).toBeVisible({ timeout: 2000 });
        await page.mouse.move(0, 0);
        await page.waitForTimeout(200);
      }
    });
  });
});
