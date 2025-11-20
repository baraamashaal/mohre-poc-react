import { test, expect } from '@playwright/test';

test.describe('FileInput Component', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/showcase/file-input');
    await expect(page.locator('h1')).toContainText('FileInput Component Showcase');
  });

  test.describe('Sizes', () => {
    test('should render small size file input', async ({ page }) => {
      const section = page.getByTestId('sizes-section');
      const fileInput = section.getByTestId('file-input-sm');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-sm/);
    });

    test('should render base size file input', async ({ page }) => {
      const section = page.getByTestId('sizes-section');
      const fileInput = section.getByTestId('file-input-base');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-base/);
    });

    test('should render large size file input', async ({ page }) => {
      const section = page.getByTestId('sizes-section');
      const fileInput = section.getByTestId('file-input-lg');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-lg/);
    });
  });

  test.describe('Variants', () => {
    test('should render primary variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const fileInput = section.getByTestId('file-input-primary');
      await expect(fileInput).toBeVisible();
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/aegov-btn/);
      await expect(label).not.toHaveClass(/btn-secondary/);
    });

    test('should render secondary variant', async ({ page }) => {
      const section = page.getByTestId('variants-section');
      const fileInput = section.getByTestId('file-input-secondary');
      await expect(fileInput).toBeVisible();
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/aegov-btn/);
      await expect(label).toHaveClass(/btn-secondary/);
    });
  });

  test.describe('File Type Restrictions', () => {
    test('should accept only PDF files', async ({ page }) => {
      const section = page.getByTestId('file-types-section');
      const fileInput = section.getByTestId('file-input-pdf');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', '.pdf');
    });

    test('should accept only image files', async ({ page }) => {
      const section = page.getByTestId('file-types-section');
      const fileInput = section.getByTestId('file-input-images');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', 'image/*');
    });

    test('should accept document files', async ({ page }) => {
      const section = page.getByTestId('file-types-section');
      const fileInput = section.getByTestId('file-input-documents');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', '.pdf,.doc,.docx');
    });
  });

  test.describe('Multiple Files', () => {
    test('should allow multiple file selection', async ({ page }) => {
      const section = page.getByTestId('multiple-section');
      const fileInput = section.getByTestId('file-input-multiple');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('multiple');
    });

    test('should allow multiple image selection', async ({ page }) => {
      const section = page.getByTestId('multiple-section');
      const fileInput = section.getByTestId('file-input-multiple-images');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('multiple');
      await expect(input).toHaveAttribute('accept', 'image/*');
    });
  });

  test.describe('File List Display', () => {
    test('should have file list display by default', async ({ page }) => {
      const section = page.getByTestId('file-list-section');
      const fileInput = section.getByTestId('file-input-with-list');
      await expect(fileInput).toBeVisible();
    });

    test('should hide file list when showFileList is false', async ({ page }) => {
      const section = page.getByTestId('file-list-section');
      const fileInput = section.getByTestId('file-input-no-list');
      await expect(fileInput).toBeVisible();
    });
  });

  test.describe('States', () => {
    test('should render enabled state', async ({ page }) => {
      const section = page.getByTestId('states-section');
      const fileInput = section.getByTestId('file-input-enabled');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toBeEnabled();
    });

    test('should render disabled state', async ({ page }) => {
      const section = page.getByTestId('states-section');
      const fileInput = section.getByTestId('file-input-disabled');
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toBeDisabled();
      await expect(input).toHaveAttribute('aria-disabled', 'true');
    });
  });

  test.describe('Custom Labels', () => {
    test('should render default label', async ({ page }) => {
      const section = page.getByTestId('labels-section');
      const fileInput = section.getByTestId('file-input-default-label');
      await expect(fileInput.getByText('Upload file')).toBeVisible();
    });

    test('should render custom label', async ({ page }) => {
      const section = page.getByTestId('labels-section');
      const fileInput = section.getByTestId('file-input-custom-label');
      await expect(fileInput.getByText('Attach document')).toBeVisible();
    });
  });

  test.describe('Use Cases', () => {
    test('should render profile picture upload', async ({ page }) => {
      const section = page.getByTestId('use-cases-section');
      const fileInput = section.getByTestId('file-input-profile');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-lg/);
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', 'image/png,image/jpeg');
    });

    test('should render document submission', async ({ page }) => {
      const section = page.getByTestId('use-cases-section');
      const fileInput = section.getByTestId('file-input-submission');
      await expect(fileInput).toBeVisible();
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', '.pdf,.doc,.docx');
      await expect(input).toHaveAttribute('multiple');
    });

    test('should render CSV import', async ({ page }) => {
      const section = page.getByTestId('use-cases-section');
      const fileInput = section.getByTestId('file-input-csv');
      await expect(fileInput).toBeVisible();
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/btn-secondary/);
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('accept', '.csv');
    });
  });

  test.describe('Variant Combinations', () => {
    test('should render small secondary combination', async ({ page }) => {
      const section = page.getByTestId('combinations-section');
      const fileInput = section.getByTestId('file-input-sm-secondary');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-sm/);
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/btn-secondary/);
    });

    test('should render large primary combination', async ({ page }) => {
      const section = page.getByTestId('combinations-section');
      const fileInput = section.getByTestId('file-input-lg-primary');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-lg/);
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/aegov-btn/);
    });

    test('should render large secondary multiple combination', async ({ page }) => {
      const section = page.getByTestId('combinations-section');
      const fileInput = section.getByTestId('file-input-lg-secondary-multiple');
      await expect(fileInput).toBeVisible();
      await expect(fileInput).toHaveClass(/control-lg/);
      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/btn-secondary/);
      const input = fileInput.locator('input[type="file"]');
      await expect(input).toHaveAttribute('multiple');
    });
  });

  test.describe('Structure', () => {
    test('should have proper AEGOV structure', async ({ page }) => {
      const fileInput = page.getByTestId('file-input-base');
      await expect(fileInput).toHaveClass(/aegov-form-control/);
      await expect(fileInput).toHaveClass(/aegov-file-input-control/);

      const label = fileInput.locator('label');
      await expect(label).toHaveClass(/file-input-label/);
      await expect(label).toHaveClass(/aegov-btn/);

      const input = fileInput.locator('input[type="file"]');
      await expect(input).toBeAttached();
    });

    test('should have upload icon', async ({ page }) => {
      const fileInput = page.getByTestId('file-input-base');
      const label = fileInput.locator('label');
      const icon = label.locator('svg');
      await expect(icon).toBeVisible();
    });
  });

  test.describe('Accessibility', () => {
    test('should pass accessibility checks', async ({ page }) => {
      const section = page.getByTestId('sizes-section');
      await expect(section).toBeVisible();

      // Check for proper label association
      const fileInput = section.getByTestId('file-input-base');
      const input = fileInput.locator('input[type="file"]');
      const inputId = await input.getAttribute('id');
      expect(inputId).toBeTruthy();

      const label = fileInput.locator('label');
      const labelFor = await label.getAttribute('for');
      expect(labelFor).toBe(inputId);

      // Check disabled state has aria-disabled
      const disabledSection = page.getByTestId('states-section');
      const disabledInput = disabledSection
        .getByTestId('file-input-disabled')
        .locator('input[type="file"]');
      await expect(disabledInput).toHaveAttribute('aria-disabled', 'true');
    });
  });
});
