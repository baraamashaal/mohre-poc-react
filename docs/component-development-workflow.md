# Component Development Workflow

**Date:** 2025-11-17
**Purpose:** Complete workflow for developing AEGOV React components with TDD approach

---

## Table of Contents

1. [Overview](#overview)
2. [Pre-Development Checklist](#pre-development-checklist)
3. [Development Steps](#development-steps)
4. [Testing Strategy](#testing-strategy)
5. [Example: Building `mhr-button`](#example-building-mhr-button)
6. [Component Template](#component-template)
7. [Test Template](#test-template)
8. [E2E Test Template](#e2e-test-template)

---

## Overview

When you say **"make a mhr-button"**, this workflow is followed:

1. ✅ **Check HTML APIs** from `step-02-components-reference.md`
2. ✅ **Check JS dependencies** from `AEGOV_JavaScript_Components_Reference.md`
3. ✅ **Implement React component** based on `step-04-react-conversion-guide.md`
4. ✅ **Write unit tests** with all scenarios
5. ✅ **Write E2E tests** with all user interactions
6. ✅ **Verify accessibility** (ARIA, keyboard navigation, RTL)
7. ✅ **Test all variants and states**

---

## Pre-Development Checklist

Before creating any component, verify:

### 1. Component Research
- [ ] Read component section in `docs/step-02-components-reference.md`
- [ ] Check if component requires JavaScript (check `AEGOV_JavaScript_Components_Reference.md`)
- [ ] Review React conversion patterns in `docs/step-04-react-conversion-guide.md`
- [ ] Note all variants, sizes, states from HTML reference

### 2. Identify Component Features
- [ ] List all props from HTML data attributes
- [ ] List all CSS variants and modifiers
- [ ] List all ARIA attributes required
- [ ] Identify keyboard interactions
- [ ] Note RTL support requirements

### 3. Plan Test Scenarios
- [ ] List all prop combinations to test
- [ ] List all user interactions (click, hover, keyboard)
- [ ] List all accessibility requirements
- [ ] List all edge cases

---

## Development Steps

### Step 1: Create Component File Structure

```bash
src/components/
  └── Button/
      ├── Button.tsx          # Component implementation
      ├── Button.test.tsx     # Unit tests
      ├── Button.types.ts     # TypeScript interfaces
      └── index.ts            # Barrel export
```

### Step 2: Define TypeScript Interfaces

Based on AEGOV HTML APIs and data attributes:

```typescript
// Button.types.ts
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'solid' | 'outline' | 'soft' | 'link';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  // Add lifecycle callbacks if component uses JS
  onShow?: () => void;
  onHide?: () => void;
}
```

### Step 3: Implement Component (TDD Approach)

1. Write failing tests first
2. Implement minimum code to pass tests
3. Refactor and optimize
4. Repeat

### Step 4: Write Unit Tests

Test categories:
1. **Rendering** - Component renders correctly
2. **Props** - All props work as expected
3. **Variants** - All visual variants render
4. **States** - All states (disabled, active, etc.)
5. **Events** - All event handlers fire
6. **Accessibility** - ARIA attributes, keyboard nav
7. **Edge Cases** - Null values, extreme inputs

### Step 5: Write E2E Tests

Test user workflows:
1. **User interactions** - Click, hover, type
2. **Navigation** - Keyboard, focus management
3. **Responsive** - Different viewports
4. **RTL** - Arabic language support
5. **Visual regression** - Screenshots
6. **Accessibility** - axe-core scan

---

## Testing Strategy

### Unit Tests (Vitest + React Testing Library)

**Purpose:** Test component logic and rendering

**Test Structure:**
```typescript
describe('ComponentName', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {});
    it('should render children', () => {});
  });

  describe('Props', () => {
    it('should apply variant classes', () => {});
    it('should handle size prop', () => {});
  });

  describe('Events', () => {
    it('should call onClick when clicked', () => {});
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {});
    it('should be keyboard accessible', () => {});
  });

  describe('Edge Cases', () => {
    it('should handle missing props gracefully', () => {});
  });
});
```

### E2E Tests (Playwright)

**Purpose:** Test real user interactions

**Test Structure:**
```typescript
test.describe('ComponentName E2E', () => {
  test('user can interact with component', async ({ page }) => {});
  test('keyboard navigation works', async ({ page }) => {});
  test('component is accessible', async ({ page }) => {});
  test('RTL support works', async ({ page }) => {});
});
```

---

## Example: Building `mhr-button`

### Step 1: Research

**From `step-02-components-reference.md`:**
- Component: Button (aegov-btn)
- Variants: solid, outline, soft, link
- Sizes: xs, sm, base, lg
- States: default, disabled
- No JavaScript dependencies (static component)

### Step 2: Create Files

```bash
mkdir -p src/components/Button
touch src/components/Button/Button.tsx
touch src/components/Button/Button.test.tsx
touch src/components/Button/Button.types.ts
touch src/components/Button/index.ts
```

### Step 3: Define Types

```typescript
// src/components/Button/Button.types.ts
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'solid' | 'outline' | 'soft' | 'link';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  disabled?: boolean;
  className?: string;
}
```

### Step 4: Write Tests (TDD)

```typescript
// src/components/Button/Button.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@test/utils';
import { Button } from './Button';

describe('Button', () => {
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Button>Click me</Button>);
      const button = screen.getByRole('button', { name: /click me/i });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass('aegov-btn');
    });

    it('should render children', () => {
      render(<Button>Test Button</Button>);
      expect(screen.getByText('Test Button')).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should apply solid variant (default)', () => {
      render(<Button variant="solid">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('aegov-btn');
      expect(button).not.toHaveClass('btn-outline');
    });

    it('should apply outline variant', () => {
      render(<Button variant="outline">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-outline');
    });

    it('should apply soft variant', () => {
      render(<Button variant="soft">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-soft');
    });

    it('should apply link variant', () => {
      render(<Button variant="link">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-link');
    });
  });

  describe('Sizes', () => {
    it('should apply base size (default)', () => {
      render(<Button size="base">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('aegov-btn');
      expect(button).not.toHaveClass('btn-xs', 'btn-sm', 'btn-lg');
    });

    it('should apply xs size', () => {
      render(<Button size="xs">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-xs');
    });

    it('should apply sm size', () => {
      render(<Button size="sm">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-sm');
    });

    it('should apply lg size', () => {
      render(<Button size="lg">Button</Button>);
      expect(screen.getByRole('button')).toHaveClass('btn-lg');
    });
  });

  describe('States', () => {
    it('should handle disabled state', () => {
      render(<Button disabled>Button</Button>);
      expect(screen.getByRole('button')).toBeDisabled();
    });

    it('should not call onClick when disabled', async () => {
      const handleClick = vi.fn();
      const { user } = render(
        <Button disabled onClick={handleClick}>
          Button
        </Button>
      );

      await user.click(screen.getByRole('button'));
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Events', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Button</Button>);

      await user.click(screen.getByRole('button'));
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  describe('Accessibility', () => {
    it('should have type="button" by default', () => {
      render(<Button>Button</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'button');
    });

    it('should support type="submit"', () => {
      render(<Button type="submit">Submit</Button>);
      expect(screen.getByRole('button')).toHaveAttribute('type', 'submit');
    });

    it('should be keyboard accessible', async () => {
      const handleClick = vi.fn();
      const { user } = render(<Button onClick={handleClick}>Button</Button>);

      const button = screen.getByRole('button');
      button.focus();
      await user.keyboard('{Enter}');
      expect(handleClick).toHaveBeenCalled();
    });
  });

  describe('Custom className', () => {
    it('should merge custom className with default classes', () => {
      render(<Button className="custom-class">Button</Button>);
      const button = screen.getByRole('button');
      expect(button).toHaveClass('aegov-btn');
      expect(button).toHaveClass('custom-class');
    });
  });

  describe('Edge Cases', () => {
    it('should handle undefined children gracefully', () => {
      render(<Button>{undefined}</Button>);
      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('should combine all props correctly', () => {
      render(
        <Button variant="outline" size="lg" disabled className="test">
          Button
        </Button>
      );
      const button = screen.getByRole('button');
      expect(button).toHaveClass('aegov-btn', 'btn-outline', 'btn-lg', 'test');
      expect(button).toBeDisabled();
    });
  });
});
```

### Step 5: Implement Component

```typescript
// src/components/Button/Button.tsx
import { ButtonProps } from './Button.types';

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  size = 'base',
  disabled = false,
  type = 'button',
  className = '',
  ...rest
}) => {
  const variantClass = variant !== 'solid' ? `btn-${variant}` : '';
  const sizeClass = size !== 'base' ? `btn-${size}` : '';

  const classNames = [
    'aegov-btn',
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      type={type}
      className={classNames}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};
```

### Step 6: Create Barrel Export

```typescript
// src/components/Button/index.ts
export { Button } from './Button';
export type { ButtonProps } from './Button.types';
```

### Step 7: Write E2E Tests

```typescript
// e2e/button.spec.ts
import { test, expect } from '@playwright/test';
import { getByAegovClass, checkAccessibility, BUTTON_VARIANTS, AEGOV_SIZES } from './utils/aegov-helpers';

test.describe('Button Component E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/button');
  });

  test('should render button with text', async ({ page }) => {
    const button = page.getByRole('button', { name: 'Click me' });
    await expect(button).toBeVisible();
    await expect(button).toHaveClass(/aegov-btn/);
  });

  test('should be clickable', async ({ page }) => {
    let clickCount = 0;
    await page.exposeFunction('onButtonClick', () => clickCount++);

    await page.evaluate(() => {
      const button = document.querySelector('button');
      button?.addEventListener('click', () => (window as any).onButtonClick());
    });

    const button = page.getByRole('button').first();
    await button.click();

    expect(clickCount).toBe(1);
  });

  test('should not be clickable when disabled', async ({ page }) => {
    const button = page.getByRole('button', { disabled: true });
    await expect(button).toBeDisabled();
  });

  test.describe('Variants', () => {
    for (const variant of BUTTON_VARIANTS) {
      test(`should render ${variant} variant`, async ({ page }) => {
        const button = page.locator(`button.btn-${variant === 'solid' ? '' : variant}`);
        await expect(button.first()).toBeVisible();
      });
    }
  });

  test.describe('Sizes', () => {
    for (const size of AEGOV_SIZES.filter(s => s !== 'xl')) {
      test(`should render ${size} size`, async ({ page }) => {
        const button = page.locator(`button.btn-${size === 'base' ? '' : size}`);
        await expect(button.first()).toBeVisible();
      });
    }
  });

  test('should be keyboard accessible', async ({ page }) => {
    const button = page.getByRole('button').first();
    await button.focus();
    await expect(button).toBeFocused();

    await page.keyboard.press('Enter');
    // Verify button was activated
  });

  test('should meet accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('should work in RTL mode', async ({ page }) => {
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    });

    const button = page.getByRole('button').first();
    await expect(button).toBeVisible();

    const direction = await page.evaluate(() =>
      window.getComputedStyle(document.documentElement).direction
    );
    expect(direction).toBe('rtl');
  });

  test('should take screenshot', async ({ page }) => {
    await page.screenshot({
      path: 'playwright-report/screenshots/button-variants.png',
      fullPage: true,
    });
  });
});
```

### Step 8: Run Tests

```bash
# Unit tests
npm run test

# E2E tests
npm run test:e2e

# All tests with coverage
npm run test:all
```

---

## Component Template

```typescript
// src/components/ComponentName/ComponentName.tsx
import { ComponentNameProps } from './ComponentName.types';
import { useState, useEffect, useRef } from 'react';

export const ComponentName: React.FC<ComponentNameProps> = ({
  children,
  variant = 'default',
  size = 'base',
  className = '',
  onShow,
  onHide,
  ...rest
}) => {
  // State management
  const [isActive, setIsActive] = useState(false);

  // Refs for DOM access
  const componentRef = useRef<HTMLDivElement>(null);

  // Lifecycle effects
  useEffect(() => {
    if (isActive) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [isActive, onShow, onHide]);

  // Class name construction
  const variantClass = variant !== 'default' ? `component-${variant}` : '';
  const sizeClass = size !== 'base' ? `component-${size}` : '';

  const classNames = [
    'aegov-component',
    variantClass,
    sizeClass,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div
      ref={componentRef}
      className={classNames}
      {...rest}
    >
      {children}
    </div>
  );
};
```

---

## Test Template

```typescript
// src/components/ComponentName/ComponentName.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@test/utils';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  describe('Rendering', () => {
    it('should render correctly', () => {
      render(<ComponentName>Test</ComponentName>);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should handle all props', () => {
      const { container } = render(
        <ComponentName variant="outline" size="lg">
          Test
        </ComponentName>
      );
      expect(container.firstChild).toHaveClass('aegov-component');
    });
  });

  describe('Events', () => {
    it('should call callbacks', () => {
      const onShow = vi.fn();
      render(<ComponentName onShow={onShow}>Test</ComponentName>);
      // Trigger event
      expect(onShow).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA attributes', () => {
      render(<ComponentName>Test</ComponentName>);
      // Check ARIA attributes
    });
  });
});
```

---

## E2E Test Template

```typescript
// e2e/component-name.spec.ts
import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('ComponentName E2E', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/components/component-name');
  });

  test('should render and be interactive', async ({ page }) => {
    // Test user interaction
  });

  test('should meet accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('should support keyboard navigation', async ({ page }) => {
    // Test keyboard interaction
  });

  test('should work in RTL mode', async ({ page }) => {
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
    });
    // Test RTL behavior
  });
});
```

---

## Quick Command Reference

```bash
# Start development
npm run dev

# Run unit tests in watch mode
npm run test

# Run unit tests with UI
npm run test:ui

# Run unit tests with coverage
npm run test:coverage

# Install Playwright browsers
npm run playwright:install

# Run E2E tests
npm run test:e2e

# Run E2E tests with UI
npm run test:e2e:ui

# Debug E2E tests
npm run test:e2e:debug

# Run all tests
npm run test:all
```

---

## Workflow Summary

When building **mhr-button** (or any component):

1. ✅ Check `docs/step-02-components-reference.md` for HTML structure
2. ✅ Check `AEGOV_JavaScript_Components_Reference.md` for JS dependencies
3. ✅ Create component files (`Button.tsx`, `Button.types.ts`, `Button.test.tsx`)
4. ✅ Write failing tests first (TDD approach)
5. ✅ Implement component to pass tests
6. ✅ Write E2E tests for user interactions
7. ✅ Verify accessibility with axe-core
8. ✅ Test all variants, sizes, and states
9. ✅ Test keyboard navigation
10. ✅ Test RTL support
11. ✅ Run all tests: `npm run test:all`

**Result:** Production-ready, fully-tested, accessible React component matching AEGOV specifications!
