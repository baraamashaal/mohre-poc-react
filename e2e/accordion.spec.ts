import { test, expect } from '@playwright/test';

test.describe('Accordion Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/accordion');
    await expect(page.locator('h1')).toContainText('Accordion Component Showcase');
  });

  test.describe('Default Accordion', () => {
    test('should render all accordion items', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      await expect(accordion.getByText('What is the UAE Design System?')).toBeVisible();
      await expect(accordion.getByText('How do I get started?')).toBeVisible();
      await expect(accordion.getByText('Is it accessible?')).toBeVisible();
    });

    test('should have all items collapsed by default', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const buttons = accordion.getByRole('button');
      const count = await buttons.count();

      for (let i = 0; i < count; i++) {
        const button = buttons.nth(i);
        await expect(button).toHaveAttribute('aria-expanded', 'false');
      }
    });

    test('should expand item when clicked', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const firstButton = accordion.getByRole('button').first();
      await firstButton.click();

      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');
      await expect(
        accordion.getByText(/comprehensive library of reusable components/)
      ).toBeVisible();
    });

    test('should collapse expanded item when clicked again', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const firstButton = accordion.getByRole('button').first();

      // Expand
      await firstButton.click();
      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      // Collapse
      await firstButton.click();
      await expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    });

    test('should close previously open item when opening another', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const buttons = accordion.getByRole('button');
      const firstButton = buttons.nth(0);
      const secondButton = buttons.nth(1);

      // Open first item
      await firstButton.click();
      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      // Open second item
      await secondButton.click();
      await expect(secondButton).toHaveAttribute('aria-expanded', 'true');
      await expect(firstButton).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test.describe('Default Expanded', () => {
    test('should have second item expanded by default', async ({ page }) => {
      const section = page.getByTestId('default-expanded-section');
      const accordion = section.getByTestId('accordion-default-expanded');

      const buttons = accordion.getByRole('button');
      await expect(buttons.nth(0)).toHaveAttribute('aria-expanded', 'false');
      await expect(buttons.nth(1)).toHaveAttribute('aria-expanded', 'true');
      await expect(buttons.nth(2)).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test.describe('Multiple Mode', () => {
    test('should allow multiple items to be open simultaneously', async ({ page }) => {
      const section = page.getByTestId('multiple-section');
      const accordion = section.getByTestId('accordion-multiple');

      const buttons = accordion.getByRole('button');
      const firstButton = buttons.nth(0);
      const secondButton = buttons.nth(1);

      await firstButton.click();
      await secondButton.click();

      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');
      await expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('should allow closing individual items without affecting others', async ({ page }) => {
      const section = page.getByTestId('multiple-section');
      const accordion = section.getByTestId('accordion-multiple');

      const buttons = accordion.getByRole('button');
      const firstButton = buttons.nth(0);
      const secondButton = buttons.nth(1);

      // Open both
      await firstButton.click();
      await secondButton.click();

      // Close first
      await firstButton.click();

      await expect(firstButton).toHaveAttribute('aria-expanded', 'false');
      await expect(secondButton).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Multiple Default Expanded', () => {
    test('should have first and third items expanded by default', async ({ page }) => {
      const section = page.getByTestId('multiple-expanded-section');
      const accordion = section.getByTestId('accordion-multiple-expanded');

      const buttons = accordion.getByRole('button');
      await expect(buttons.nth(0)).toHaveAttribute('aria-expanded', 'true');
      await expect(buttons.nth(1)).toHaveAttribute('aria-expanded', 'false');
      await expect(buttons.nth(2)).toHaveAttribute('aria-expanded', 'true');
    });
  });

  test.describe('Icon Rotation', () => {
    test('should apply 180 degree rotation for chevron icon', async ({ page }) => {
      const section = page.getByTestId('rotation-180-section');
      const accordion = section.getByTestId('accordion-rotation-180');

      const firstButton = accordion.getByRole('button').first();
      const svg = firstButton.locator('svg').first();

      // When expanded, should have rotate-180 class
      await expect(svg).toHaveClass(/rotate-180/);
    });

    test('should apply 45 degree rotation for plus icon', async ({ page }) => {
      const section = page.getByTestId('rotation-45-section');
      const accordion = section.getByTestId('accordion-rotation-45');

      const firstButton = accordion.getByRole('button').first();
      const svg = firstButton.locator('svg').first();

      // When expanded, should have rotate-45 class
      await expect(svg).toHaveClass(/rotate-45/);
    });
  });

  test.describe('Service Form', () => {
    test('should render service application form', async ({ page }) => {
      const section = page.getByTestId('service-section');
      const accordion = section.getByTestId('accordion-service');

      await expect(accordion.getByRole('button', { name: 'Personal Information' })).toBeVisible();
      await expect(accordion.getByRole('button', { name: 'Required Documents' })).toBeVisible();
      await expect(accordion.getByRole('button', { name: 'Review and Submit' })).toBeVisible();
    });

    test('should have first item expanded by default', async ({ page }) => {
      const section = page.getByTestId('service-section');
      const accordion = section.getByTestId('accordion-service');

      const firstButton = accordion.getByRole('button').first();
      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');
      await expect(accordion.getByText(/Please provide your personal details/)).toBeVisible();
    });
  });

  test.describe('Single Item', () => {
    test('should render single accordion item', async ({ page }) => {
      const section = page.getByTestId('single-item-section');
      const accordion = section.getByTestId('accordion-single');

      const buttons = accordion.getByRole('button');
      await expect(buttons).toHaveCount(1);
      await expect(accordion.getByText('Help Information')).toBeVisible();
    });
  });

  test.describe('Many Items', () => {
    test('should render multiple accordion items', async ({ page }) => {
      const section = page.getByTestId('many-items-section');
      const accordion = section.getByTestId('accordion-many');

      const buttons = accordion.getByRole('button');
      const count = await buttons.count();
      expect(count).toBe(5);
    });
  });

  test.describe('Nested Content', () => {
    test('should render nested content accordion', async ({ page }) => {
      const section = page.getByTestId('nested-content-section');
      const accordion = section.getByTestId('accordion-nested');

      await expect(accordion.getByRole('button', { name: 'Account Settings' })).toBeVisible();
      await expect(accordion.getByRole('button', { name: 'Notifications' })).toBeVisible();
    });

    test('should expand and show nested content', async ({ page }) => {
      const section = page.getByTestId('nested-content-section');
      const accordion = section.getByTestId('accordion-nested');

      const firstButton = accordion.getByRole('button').first();
      await firstButton.click();

      await expect(accordion.getByRole('heading', { name: 'Profile' })).toBeVisible();
      await expect(accordion.getByRole('heading', { name: 'Privacy' })).toBeVisible();
      await expect(accordion.getByRole('heading', { name: 'Security' })).toBeVisible();
    });
  });

  test.describe('Structure', () => {
    test('should have proper AEGOV classes', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      await expect(accordion).toHaveClass(/aegov-accordion/);
    });

    test('should have proper accordion item structure', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const items = accordion.locator('.accordion-item');
      const count = await items.count();
      expect(count).toBeGreaterThan(0);

      const firstItem = items.first();
      await expect(firstItem.locator('.accordion-title')).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should have proper ARIA attributes', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const firstButton = accordion.getByRole('button').first();

      // Check aria-expanded
      await expect(firstButton).toHaveAttribute('aria-expanded', 'false');

      // Check aria-controls
      const ariaControls = await firstButton.getAttribute('aria-controls');
      expect(ariaControls).toBeTruthy();

      // Expand item
      await firstButton.click();
      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');

      // Check content has aria-labelledby
      const contentId = ariaControls!;
      const content = page.locator(`#${contentId}`);
      const ariaLabelledBy = await content.getAttribute('aria-labelledby');
      expect(ariaLabelledBy).toBeTruthy();
    });

    test('should be keyboard navigable with Enter', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const firstButton = accordion.getByRole('button').first();
      await firstButton.focus();
      await page.keyboard.press('Enter');

      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('should be keyboard navigable with Space', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const firstButton = accordion.getByRole('button').first();
      await firstButton.focus();
      await page.keyboard.press('Space');

      await expect(firstButton).toHaveAttribute('aria-expanded', 'true');
    });

    test('should be keyboard navigable with Tab', async ({ page }) => {
      const section = page.getByTestId('default-section');
      const accordion = section.getByTestId('accordion-default');

      const buttons = accordion.getByRole('button');
      const firstButton = buttons.first();
      const secondButton = buttons.nth(1);

      await firstButton.focus();
      await page.keyboard.press('Tab');

      await expect(secondButton).toBeFocused();
    });
  });
});
