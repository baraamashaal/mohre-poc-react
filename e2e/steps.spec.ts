import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const SHOWCASE_URL = '/showcase/steps';

test.describe('Steps Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SHOWCASE_URL);
  });

  test.describe('Rendering', () => {
    test('should render steps component', async ({ page }) => {
      const steps = page.locator('[data-testid="steps-default"]');
      await expect(steps).toBeVisible();
    });

    test('should render correct number of steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const stepItems = container.locator('li');
      await expect(stepItems).toHaveCount(3);
    });

    test('should render step numbers', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      await expect(container).toContainText('1');
      await expect(container).toContainText('2');
      await expect(container).toContainText('3');
    });

    test('should render labels when showLabels is true', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-labels"]');
      const labels = container.locator('.step-text-below');
      await expect(labels.nth(0)).toContainText('Personal Info');
      await expect(labels.nth(1)).toContainText('Contact Details');
      await expect(labels.nth(2)).toContainText('Review');
      await expect(labels).toHaveCount(3);
    });

    test('should not render labels by default', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      // Labels with step-text-below class should not exist when showLabels is false
      const visibleLabels = container.locator('.step-text-below');
      await expect(visibleLabels).toHaveCount(0);
    });
  });

  test.describe('Step States', () => {
    test('should mark completed steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-last"]');
      const completedSteps = container.locator('.step-completed');
      await expect(completedSteps).toHaveCount(2);
    });

    test('should mark current step', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-labels"]');
      const currentStep = container.locator('.step-current');
      await expect(currentStep).toHaveCount(1);
    });

    test('should mark upcoming steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-first"]');
      const upcomingSteps = container.locator('.step-upcoming');
      await expect(upcomingSteps).toHaveCount(2);
    });

    test('should show check icon for completed steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-last"]');
      // steps-last has currentStep=2 (3 steps total), so steps 0 and 1 should be completed
      const completedSteps = container.locator('.step-completed');
      const checkIcons = completedSteps.locator('svg[aria-hidden="true"]');
      // Should have 2 completed steps with check icons
      await expect(checkIcons).toHaveCount(2);
    });

    test('should show number for current step', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-labels"]');
      const currentBadge = container.locator('.step-current .step-badge');
      await expect(currentBadge).toContainText('2');
    });
  });

  test.describe('Size Variants', () => {
    test('should render small size', async ({ page }) => {
      const container = page.locator('[data-testid="steps-small"]');
      const nav = container.locator('nav.aegov-step');
      await expect(nav).toHaveClass(/step-sm/);
    });

    test('should render large size', async ({ page }) => {
      const container = page.locator('[data-testid="steps-large"]');
      const nav = container.locator('nav.aegov-step');
      await expect(nav).toHaveClass(/step-lg/);
    });
  });

  test.describe('Orientation', () => {
    test('should render horizontal orientation by default', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const list = container.locator('ol');
      await expect(list).toHaveClass(/justify-between/);
    });

    test('should render vertical orientation', async ({ page }) => {
      const container = page.locator('[data-testid="steps-vertical"]');
      const list = container.locator('ol');
      await expect(list).toHaveClass(/flex-col/);
    });

    test('should show connectors in horizontal layout', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      // Horizontal connectors use two-div structure: .step-connector > .step-connector-state
      const connectorWrappers = container.locator('.step-connector');
      const connectorStates = container.locator('.step-connector .step-connector-state');
      // Wait for at least one connector to be visible
      await expect(connectorWrappers.first()).toBeVisible();
      // Then verify count
      await expect(connectorWrappers).toHaveCount(2); // 3 steps = 2 connectors
      await expect(connectorStates).toHaveCount(2);
    });

    test('should show vertical connectors in vertical layout', async ({ page }) => {
      const container = page.locator('[data-testid="steps-vertical"]');
      // Vertical connectors use single div with both classes
      const connectors = container.locator('.step-connector-state.step-connector-vertical');
      // Wait for at least one connector to be visible
      await expect(connectors.first()).toBeVisible();
      // Then verify count
      await expect(connectors).toHaveCount(2); // 3 steps = 2 connectors
    });
  });

  test.describe('Navigation', () => {
    test('should render anchors for steps with href', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const links = container.locator('a.step-badge');
      await expect(links).toHaveCount(3);
    });

    test('should set correct href attributes', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const links = container.locator('a.step-badge');

      await expect(links.nth(0)).toHaveAttribute('href', '#step-1');
      await expect(links.nth(1)).toHaveAttribute('href', '#step-2');
      await expect(links.nth(2)).toHaveAttribute('href', '#step-3');
    });

    test('should render spans for steps without href', async ({ page }) => {
      const container = page.locator('[data-testid="steps-without-links"]');
      const spans = container.locator('span.step-badge');
      await expect(spans).toHaveCount(3);
    });

    test('should not render anchors for steps without href', async ({ page }) => {
      const container = page.locator('[data-testid="steps-without-links"]');
      const links = container.locator('a.step-badge');
      await expect(links).toHaveCount(0);
    });
  });

  test.describe('Disabled State', () => {
    test('should mark disabled steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-disabled"]');
      const disabledSteps = container.locator('.step-disabled');
      await expect(disabledSteps).toHaveCount(1);
    });

    test('should render span for disabled steps with href', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-disabled"]');
      // Should have 3 non-disabled links and 1 disabled span
      const allBadges = container.locator('.step-badge');
      await expect(allBadges).toHaveCount(4);
    });

    test('should set aria-disabled on disabled steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-disabled"]');
      const disabledBadge = container.locator('.step-disabled .step-badge');
      await expect(disabledBadge).toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('Accessibility', () => {
    test('should not have accessibility violations', async ({ page }) => {
      // Wait for page content to load before running accessibility scan
      await page.waitForSelector('[data-testid="steps-default"]');
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });

    test('should have nav element as navigation landmark', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const nav = container.locator('nav');
      await expect(nav).toBeVisible();
    });

    test('should have aria-label on navigation', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const nav = container.locator('nav');
      await expect(nav).toHaveAttribute('aria-label');
    });

    test('should have unique aria-labels for multiple instances', async ({ page }) => {
      const nav1 = page.locator('[data-testid="steps-default"] nav');
      const nav2 = page.locator('[data-testid="steps-with-labels"] nav');

      const label1 = await nav1.getAttribute('aria-label');
      const label2 = await nav2.getAttribute('aria-label');

      expect(label1).not.toEqual(label2);
    });

    test('should have aria-current on current step', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-labels"]');
      const currentStepBadge = container.locator('[aria-current="step"]');
      await expect(currentStepBadge).toBeVisible();
    });

    test('should have screen reader text for steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-first"]');
      await expect(container).toContainText('Current: Step 1');
      await expect(container).toContainText('Upcoming: Step 2');
      await expect(container).toContainText('Upcoming: Step 3');
    });

    test('should have aria-hidden on connectors', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const connector = container.locator('.step-connector').first();
      await expect(connector).toHaveAttribute('aria-hidden', 'true');
    });

    test('should have ordered list with role="list"', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const list = container.locator('ol');
      await expect(list).toHaveAttribute('role', 'list');
    });
  });

  test.describe('Edge Cases', () => {
    test('should handle first step', async ({ page }) => {
      const container = page.locator('[data-testid="steps-first"]');
      const currentStep = container.locator('.step-current');
      await expect(currentStep).toHaveCount(1);

      const completedSteps = container.locator('.step-completed');
      await expect(completedSteps).toHaveCount(0);
    });

    test('should handle last step', async ({ page }) => {
      const container = page.locator('[data-testid="steps-last"]');
      const currentStep = container.locator('.step-current');
      await expect(currentStep).toHaveCount(1);

      const upcomingSteps = container.locator('.step-upcoming');
      await expect(upcomingSteps).toHaveCount(0);
    });

    test('should handle many steps', async ({ page }) => {
      const container = page.locator('[data-testid="steps-many"]');
      const stepItems = container.locator('li');
      await expect(stepItems).toHaveCount(5);
    });

    test('should handle all steps completed', async ({ page }) => {
      const container = page.locator('[data-testid="steps-all-completed"]');
      const currentSteps = container.locator('.step-current');
      // When currentStep is beyond the last step, all steps are completed
      await expect(currentSteps).toHaveCount(0);
    });
  });

  test.describe('CSS Classes', () => {
    test('should apply aegov-step class', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const nav = container.locator('.aegov-step');
      await expect(nav).toBeVisible();
    });

    test('should apply step-badge class', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const badge = container.locator('.step-badge');
      await expect(badge.first()).toBeVisible();
    });

    test('should apply step-connector class for horizontal', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const connector = container.locator('.step-connector');
      await expect(connector.first()).toBeVisible();
    });

    test('should apply step-connector-vertical class for vertical', async ({ page }) => {
      const container = page.locator('[data-testid="steps-vertical"]');
      const connector = container.locator('.step-connector-vertical');
      await expect(connector.first()).toBeVisible();
    });

    test('should apply step-connector-state class', async ({ page }) => {
      const container = page.locator('[data-testid="steps-default"]');
      const connectorState = container.locator('.step-connector-state');
      await expect(connectorState.first()).toBeVisible();
    });

    test('should apply step-text-below class for horizontal labels', async ({ page }) => {
      const container = page.locator('[data-testid="steps-with-labels"]');
      const textBelow = container.locator('.step-text-below');
      await expect(textBelow.first()).toBeVisible();
    });
  });
});
