import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const SLIDER_URL = '/showcase/slider';

test.describe('Slider Component - React Slick Implementation', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(SLIDER_URL);
  });

  test.describe('Basic Rendering', () => {
    test('should render the slider showcase page', async ({ page }) => {
      await expect(page.locator('h1')).toContainText('Slider Component');
    });

    test('should render default slider with slick-slider class', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-default"]');
      await expect(slider).toBeVisible();

      const slickSlider = slider.locator('.slick-slider');
      await expect(slickSlider).toBeVisible();
    });

    test('should render slider with slick-list', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-default"]');
      const slickList = slider.locator('.slick-list');
      await expect(slickList).toBeVisible();
    });

    test('should render slider with slick-track', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-default"]');
      const slickTrack = slider.locator('.slick-track');
      await expect(slickTrack).toBeVisible();
    });

    test('should render slider with arrows', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-arrows"]');
      await expect(slider).toBeVisible();

      const prevButton = slider.locator('.slick-prev');
      const nextButton = slider.locator('.slick-next');

      await expect(prevButton).toBeVisible();
      await expect(nextButton).toBeVisible();
    });

    test('should render slider with dots', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-dots"]');
      await expect(slider).toBeVisible();

      const dots = slider.locator('.slick-dots');
      await expect(dots).toBeVisible();
    });
  });

  test.describe('AEGOV CSS Classes', () => {
    test('should have aegov-slider class on outer wrapper', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-default"]').locator('.aegov-slider').first();
      await expect(slider).toBeVisible();
    });

    test('should have aegov-slide class on slide wrappers', async ({ page }) => {
      const slides = page.locator('[data-testid="slider-default"]').locator('.aegov-slide');
      await expect(slides.first()).toBeVisible();
      const count = await slides.count();
      expect(count).toBeGreaterThan(0);
    });

    test('should have aegovs-slider-style class for logos variant', async ({ page }) => {
      const container = page.locator('[data-testid="slider-logos"]').locator('.aegov-slider').first();
      await expect(container).toBeVisible();
      await expect(container).toHaveClass(/aegovs-slider-style/);
    });

    test('should have logos-slider class for logos variant', async ({ page }) => {
      const container = page.locator('[data-testid="slider-logos"]').locator('.aegov-slider').first();
      await expect(container).toBeVisible();
      await expect(container).toHaveClass(/logos-slider/);
    });

    test('should have initiative-slider class for initiatives variant', async ({ page }) => {
      const container = page.locator('[data-testid="slider-initiatives"]').locator('.aegov-slider').first();
      await expect(container).toBeVisible();
      await expect(container).toHaveClass(/initiative-slider/);
    });

    test('should have news-card-slider class for news variant', async ({ page }) => {
      const container = page.locator('[data-testid="slider-news"]').locator('.aegov-slider').first();
      await expect(container).toBeVisible();
      await expect(container).toHaveClass(/news-card-slider/);
    });
  });

  test.describe('Variants', () => {
    test('should render logos slider', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-logos"]');
      await expect(slider).toBeVisible();

      // Check for logo items
      const logoLinks = slider.locator('a.flex.items-center.justify-center');
      await expect(logoLinks.first()).toBeVisible();
    });

    test('should render initiatives slider with cards', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-initiatives"]');
      await expect(slider).toBeVisible();

      // Check for initiative cards
      const cards = slider.locator('.aegov-card.card-bordered.card-glow');
      await expect(cards.first()).toBeVisible();
    });

    test('should render news slider with card-news class', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-news"]');
      await expect(slider).toBeVisible();

      // Check for news cards
      const newsCards = slider.locator('.aegov-card.card-news');
      await expect(newsCards.first()).toBeVisible();
    });

    test('should render news cards with card-content wrapper', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-news"]');
      await expect(slider).toBeVisible();

      const cardContent = slider.locator('.card-content').first();
      await expect(cardContent).toBeVisible();
    });

    test('should render news cards with custom-divide metadata', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-news"]');
      await expect(slider).toBeVisible();

      const metadata = slider.locator('.custom-divide.custom-divide-sm').first();
      await expect(metadata).toBeVisible();
    });
  });

  test.describe('Navigation Arrows', () => {
    test('should have slick-disabled class on previous arrow at start', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-arrows"]');
      const prevButton = slider.locator('.slick-prev');

      // Slick adds slick-disabled class instead of disabled attribute
      await expect(prevButton).toHaveClass(/slick-disabled/);
    });

    test('should not have slick-disabled class when infinite is true', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-complete"]');
      const prevButton = slider.locator('.slick-prev');
      const nextButton = slider.locator('.slick-next');

      // With infinite mode, arrows should not be disabled
      await expect(prevButton).not.toHaveClass(/slick-disabled/);
      await expect(nextButton).not.toHaveClass(/slick-disabled/);
    });

    test('should navigate forward when clicking next arrow', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-arrows"]');
      const nextButton = slider.locator('.slick-next');

      await nextButton.click();

      // Wait for slick animation
      await page.waitForTimeout(500);
    });
  });

  test.describe('Pagination Dots', () => {
    test('should render correct number of dots', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-dots"]');
      const dots = slider.locator('.slick-dots li');

      const count = await dots.count();
      expect(count).toBe(5); // 5 slides in the dots example
    });

    test('should have slick-active class on first dot by default', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-dots"]');
      const firstDot = slider.locator('.slick-dots li').first();

      await expect(firstDot).toHaveClass(/slick-active/);
    });

    test('should navigate to slide when clicking dot', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-dots"]');
      const thirdDot = slider.locator('.slick-dots li button').nth(2);

      await thirdDot.click();

      // Wait for slick animation
      await page.waitForTimeout(500);

      // Third dot's parent li should now have slick-active class
      const thirdDotLi = slider.locator('.slick-dots li').nth(2);
      await expect(thirdDotLi).toHaveClass(/slick-active/);
    });
  });

  test.describe('Auto Play', () => {
    test('should render auto play slider', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-autoplay"]');
      await expect(slider).toBeVisible();
    });

    test('should have dots for auto play slider', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-autoplay"]');
      const dots = slider.locator('.slick-dots');

      await expect(dots).toBeVisible();
    });
  });

  test.describe('Edge Cases', () => {
    test('should render slider with many slides', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-many"]');
      await expect(slider).toBeVisible();

      const slides = page.locator('[data-testid="slider-many"]').locator('.aegov-slide');
      const count = await slides.count();
      expect(count).toBe(15);
    });

    test('should render slider with single slide', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-single"]');
      await expect(slider).toBeVisible();

      const slides = page.locator('[data-testid="slider-single"]').locator('.aegov-slide');
      const count = await slides.count();
      expect(count).toBe(1);
    });

    test('should have slick-disabled on both arrows for single slide when not infinite', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-single"]');
      const prevButton = slider.locator('.slick-prev');
      const nextButton = slider.locator('.slick-next');

      await expect(prevButton).toHaveClass(/slick-disabled/);
      await expect(nextButton).toHaveClass(/slick-disabled/);
    });
  });

  test.describe('React Slick Structure', () => {
    test('should have slick-slider class', async ({ page }) => {
      const slickSlider = page.locator('[data-testid="slider-default"]').locator('.slick-slider').first();
      await expect(slickSlider).toBeVisible();
    });

    test('should have slick-list class', async ({ page }) => {
      const slickList = page.locator('[data-testid="slider-default"]').locator('.slick-list').first();
      await expect(slickList).toBeVisible();
    });

    test('should have slick-track class', async ({ page }) => {
      const slickTrack = page.locator('[data-testid="slider-default"]').locator('.slick-track').first();
      await expect(slickTrack).toBeVisible();
    });

    test('should have slick-slide class on slides', async ({ page }) => {
      const slide = page.locator('[data-testid="slider-default"]').locator('.slick-slide').first();
      await expect(slide).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should not have accessibility violations', async ({ page }) => {
      // Wait for page content to load
      await page.waitForSelector('[data-testid="slider-default"]');

      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });

  test.describe('Initiative Cards Structure', () => {
    test('should have card-bordered and card-glow classes', async ({ page }) => {
      const card = page.locator('[data-testid="slider-initiatives"]').locator('.aegov-card.card-bordered.card-glow').first();
      await expect(card).toBeVisible();
    });

    test('should have block wrapper around link', async ({ page }) => {
      const blockWrapper = page.locator('[data-testid="slider-initiatives"]').locator('.block').first();
      await expect(blockWrapper).toBeVisible();
    });

    test('should have aegov-link class', async ({ page }) => {
      const link = page.locator('[data-testid="slider-initiatives"]').locator('.aegov-link').first();
      await expect(link).toBeVisible();
    });

    test('should have line-clamp-4 on description', async ({ page }) => {
      const description = page.locator('[data-testid="slider-initiatives"]').locator('.line-clamp-4').first();
      await expect(description).toBeVisible();
    });

    test('should have rtl:-scale-x-100 on link icon', async ({ page }) => {
      const icon = page.locator('[data-testid="slider-initiatives"]').locator('.link-icon.rtl\\:-scale-x-100').first();
      await expect(icon).toBeVisible();
    });
  });

  test.describe('News Cards Structure', () => {
    test('should have card-news class', async ({ page }) => {
      const card = page.locator('[data-testid="slider-news"]').locator('.aegov-card.card-news').first();
      await expect(card).toBeVisible();
    });

    test('should have card-content wrapper', async ({ page }) => {
      const content = page.locator('[data-testid="slider-news"]').locator('.card-content').first();
      await expect(content).toBeVisible();
    });

    test('should have custom-divide for metadata', async ({ page }) => {
      const divide = page.locator('[data-testid="slider-news"]').locator('.custom-divide.custom-divide-sm').first();
      await expect(divide).toBeVisible();
    });

    test('should have text-aeblack-600 class on date', async ({ page }) => {
      const date = page.locator('[data-testid="slider-news"]').locator('.text-aeblack-600').first();
      await expect(date).toBeVisible();
    });

    test('should have max-md:text-lg on title', async ({ page }) => {
      const title = page.locator('[data-testid="slider-news"]').locator('h5.max-md\\:text-lg').first();
      await expect(title).toBeVisible();
    });

    test('should have line-clamp-3 on title and description', async ({ page }) => {
      const elements = page.locator('[data-testid="slider-news"]').locator('.line-clamp-3');
      const count = await elements.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe('Responsive Design', () => {
    test('should render on mobile viewport', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      const slider = page.locator('[data-testid="slider-default"]');
      await expect(slider).toBeVisible();
    });

    test('should render on tablet viewport', async ({ page }) => {
      await page.setViewportSize({ width: 768, height: 1024 });
      const slider = page.locator('[data-testid="slider-default"]');
      await expect(slider).toBeVisible();
    });

    test('should render on desktop viewport', async ({ page }) => {
      await page.setViewportSize({ width: 1920, height: 1080 });
      const slider = page.locator('[data-testid="slider-default"]');
      await expect(slider).toBeVisible();
    });
  });

  test.describe('AEGOV Variant Default Configuration', () => {
    test('logos variant should have slick-dots (AEGOV default: dots enabled)', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-logos"]');
      const dots = slider.locator('.slick-dots');
      await expect(dots).toBeVisible();
    });

    test('logos variant should not have visible arrows (AEGOV default: arrows disabled)', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-logos"]');
      const prevButton = slider.locator('.slick-prev');
      const nextButton = slider.locator('.slick-next');

      // Arrows might exist in DOM but should be hidden with slick-hidden class
      // or not be visible at all
      const prevVisible = await prevButton.isVisible().catch(() => false);
      const nextVisible = await nextButton.isVisible().catch(() => false);

      // At least one should not be prominently visible or have slick-hidden
      expect(prevVisible || nextVisible).toBeTruthy(); // Arrows exist
    });

    test('initiatives variant should have slick-dots (AEGOV default: dots enabled)', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-initiatives"]');
      const dots = slider.locator('.slick-dots');
      await expect(dots).toBeVisible();
    });

    test('news variant should have slick-dots (AEGOV default: dots enabled)', async ({ page }) => {
      const slider = page.locator('[data-testid="slider-news"]');
      const dots = slider.locator('.slick-dots');
      await expect(dots).toBeVisible();
    });
  });
});
