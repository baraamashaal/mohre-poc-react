import { test, expect } from '@playwright/test';

test.describe('Avatar Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/avatar');
    await expect(page.locator('h1')).toContainText('Avatar Component Showcase');
  });

  test.describe('Default Avatar', () => {
    test('should render default avatar with image', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const avatar = section.getByTestId('avatar-default');

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/aegov-avatar/);
      await expect(avatar).toHaveClass(/avatar-base/);

      const img = avatar.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveAttribute('alt', 'John Doe');
    });
  });

  test.describe('Initials Fallback', () => {
    test('should render avatar with initials when no image', async ({ page }) => {
      const section = page.getByTestId('initials-section');
      const avatar = section.getByTestId('avatar-initials');

      await expect(avatar).toBeVisible();
      await expect(avatar.getByText('AH')).toBeVisible();

      // AEGOV spec: .no-user class on img element
      const img = avatar.locator('img');
      await expect(img).toBeVisible();
      await expect(img).toHaveClass(/no-user/);
    });
  });

  test.describe('Size Variants', () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const;

    sizes.forEach((size) => {
      test(`should render ${size} size variant`, async ({ page }) => {
        const section = page.getByTestId('sizes-section');
        const avatar = section.getByTestId(`avatar-${size}`);

        await expect(avatar).toBeVisible();
        await expect(avatar).toHaveClass(new RegExp(`avatar-${size}`));
      });
    });

    test('should display all size labels', async ({ page }) => {
      const section = page.getByTestId('sizes-section');

      await expect(section.getByText('XS (24px)')).toBeVisible();
      await expect(section.getByText('SM (32px)')).toBeVisible();
      await expect(section.getByText('Base (40px)')).toBeVisible();
      await expect(section.getByText('LG (48px)')).toBeVisible();
      await expect(section.getByText('XL (56px)')).toBeVisible();
      await expect(section.getByText('2XL (64px)')).toBeVisible();
      await expect(section.getByText('3XL (80px)')).toBeVisible();
    });
  });

  test.describe('Shape Variants', () => {
    test('should render square variant', async ({ page }) => {
      const section = page.getByTestId('shapes-section');
      const avatar = section.getByTestId('avatar-square');

      await expect(avatar).toBeVisible();
      await expect(avatar).not.toHaveClass(/avatar-rounded/);
    });

    test('should render rounded variant', async ({ page }) => {
      const section = page.getByTestId('shapes-section');
      const avatar = section.getByTestId('avatar-rounded');

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/avatar-rounded/);
    });
  });

  test.describe('Status Indicators', () => {
    test('should render online status indicator', async ({ page }) => {
      const section = page.getByTestId('status-section');
      const avatar = section.getByTestId('avatar-online');

      await expect(avatar).toBeVisible();

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-green-500/);
      await expect(indicator).toHaveAttribute('aria-label', 'online');
    });

    test('should render offline status indicator', async ({ page }) => {
      const section = page.getByTestId('status-section');
      const avatar = section.getByTestId('avatar-offline');

      await expect(avatar).toBeVisible();

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-gray-400/);
      await expect(indicator).toHaveAttribute('aria-label', 'offline');
    });

    test('should not render status indicator when status is none', async ({ page }) => {
      const section = page.getByTestId('status-section');
      const avatar = section.getByTestId('avatar-no-status');

      await expect(avatar).toBeVisible();

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).not.toBeVisible();
    });
  });

  test.describe('Rounded with Status', () => {
    test('should render rounded avatar with online status', async ({ page }) => {
      const section = page.getByTestId('rounded-status-section');
      const avatar = section.getByTestId('avatar-rounded-online');

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/avatar-rounded/);
      await expect(avatar).toHaveClass(/avatar-xl/);

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-green-500/);
    });

    test('should render rounded avatar with offline status', async ({ page }) => {
      const section = page.getByTestId('rounded-status-section');
      const avatar = section.getByTestId('avatar-rounded-offline');

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/avatar-rounded/);
      await expect(avatar).toHaveClass(/avatar-xl/);

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-gray-400/);
    });
  });

  test.describe('Initials with Status', () => {
    test('should render initials with online status', async ({ page }) => {
      const section = page.getByTestId('initials-status-section');
      const avatar = section.getByTestId('avatar-initials-online');

      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/avatar-rounded/);
      await expect(avatar.getByText('FH')).toBeVisible();

      // AEGOV spec: .no-user on img element
      const img = avatar.locator('img');
      await expect(img).toHaveClass(/no-user/);

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-green-500/);
    });

    test('should render initials with offline status', async ({ page }) => {
      const section = page.getByTestId('initials-status-section');
      const avatar = section.getByTestId('avatar-initials-offline');

      await expect(avatar).toBeVisible();
      await expect(avatar.getByText('AS')).toBeVisible();

      // AEGOV spec: .no-user on img element
      const img = avatar.locator('img');
      await expect(img).toHaveClass(/no-user/);

      const indicator = avatar.getByTestId('avatar-status');
      await expect(indicator).toBeVisible();
      await expect(indicator).toHaveClass(/bg-gray-400/);
    });
  });

  test.describe('User Profile Card', () => {
    test('should render profile card with avatar', async ({ page }) => {
      const section = page.getByTestId('profile-card-section');
      const card = section.getByTestId('profile-card');

      await expect(card).toBeVisible();

      const avatar = card.getByTestId('avatar-profile');
      await expect(avatar).toBeVisible();
      await expect(avatar).toHaveClass(/avatar-2xl/);
      await expect(avatar).toHaveClass(/avatar-rounded/);

      await expect(card.getByRole('heading', { name: 'Laila Mohammed' })).toBeVisible();
      await expect(card.getByText('Senior Developer')).toBeVisible();
      await expect(card.getByText('Online')).toBeVisible();
    });
  });

  test.describe('Team List', () => {
    test('should render team member list', async ({ page }) => {
      const section = page.getByTestId('team-list-section');
      const list = section.getByTestId('team-list');

      await expect(list).toBeVisible();

      for (let i = 0; i < 4; i++) {
        const member = list.getByTestId(`team-member-${i}`);
        await expect(member).toBeVisible();

        const avatar = member.locator('.aegov-avatar').first();
        await expect(avatar).toBeVisible();
        await expect(avatar).toHaveClass(/avatar-rounded/);
        await expect(avatar).toHaveClass(/avatar-base/);
      }
    });

    test('should display team member names and roles', async ({ page }) => {
      const section = page.getByTestId('team-list-section');

      await expect(section.getByText('Ahmed Ali')).toBeVisible();
      await expect(section.getByText('Developer')).toBeVisible();

      await expect(section.getByText('Sarah Hassan')).toBeVisible();
      await expect(section.getByText('Designer')).toBeVisible();

      await expect(section.getByText('Mohammed Saeed')).toBeVisible();
      await expect(section.getByText('Manager')).toBeVisible();

      await expect(section.getByText('Laila Ahmed')).toBeVisible();
      await expect(section.getByText('Product Owner')).toBeVisible();
    });

    test('should display status badges for team members', async ({ page }) => {
      const section = page.getByTestId('team-list-section');
      const statusBadges = section.locator('.text-xs.px-2.py-1.rounded-full');

      const count = await statusBadges.count();
      expect(count).toBe(4);

      // Check online status badges
      const onlineBadges = section.locator('.bg-green-100.text-green-700');
      const onlineCount = await onlineBadges.count();
      expect(onlineCount).toBe(3);

      // Check offline status badges
      const offlineBadges = section.locator('.bg-gray-100.text-gray-700');
      const offlineCount = await offlineBadges.count();
      expect(offlineCount).toBe(1);
    });
  });

  test.describe('All Sizes with Initials', () => {
    const sizes = ['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const;

    sizes.forEach((size) => {
      test(`should render initials with ${size} size`, async ({ page }) => {
        const section = page.getByTestId('sizes-initials-section');
        const avatar = section.getByTestId(`avatar-initials-${size}`);

        await expect(avatar).toBeVisible();
        await expect(avatar).toHaveClass(/avatar-rounded/);
        await expect(avatar).toHaveClass(new RegExp(`avatar-${size}`));
        await expect(avatar.getByText('U')).toBeVisible();

        // AEGOV spec: .no-user on img element
        const img = avatar.locator('img');
        await expect(img).toHaveClass(/no-user/);
      });
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA attributes on avatar', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const avatar = section.getByTestId('avatar-default');

      await expect(avatar).toHaveAttribute('role', 'img');
    });

    test('should have alt text on images', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const avatar = section.getByTestId('avatar-default');
      const img = avatar.locator('img');

      await expect(img).toHaveAttribute('alt');
      const altText = await img.getAttribute('alt');
      expect(altText).toBeTruthy();
      expect(altText?.length).toBeGreaterThan(0);
    });

    test('should have aria-label on status indicators', async ({ page }) => {
      const section = page.getByTestId('status-section');
      const avatar = section.getByTestId('avatar-online');
      const indicator = avatar.getByTestId('avatar-status');

      await expect(indicator).toHaveAttribute('aria-label');
      const ariaLabel = await indicator.getAttribute('aria-label');
      expect(ariaLabel).toBe('online');
    });
  });

  test.describe('Structure', () => {
    test('should have proper AEGOV classes', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const avatar = section.getByTestId('avatar-default');

      await expect(avatar).toHaveClass(/aegov-avatar/);
    });

    test('should have proper size classes', async ({ page }) => {
      const section = page.getByTestId('sizes-section');

      const xlAvatar = section.getByTestId('avatar-xl');
      await expect(xlAvatar).toHaveClass(/avatar-xl/);

      const baseAvatar = section.getByTestId('avatar-base');
      await expect(baseAvatar).toHaveClass(/avatar-base/);
    });

    test('should have proper variant classes', async ({ page }) => {
      const section = page.getByTestId('shapes-section');

      const roundedAvatar = section.getByTestId('avatar-rounded');
      await expect(roundedAvatar).toHaveClass(/avatar-rounded/);

      const squareAvatar = section.getByTestId('avatar-square');
      await expect(squareAvatar).not.toHaveClass(/avatar-rounded/);
    });
  });
});
