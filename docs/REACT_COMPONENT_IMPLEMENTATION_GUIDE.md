# React Component Implementation Guide

## 📋 Component Status Overview

### ✅ Already Implemented (17)
- Accordion (JS required)
- Alert (Partially JS)
- Avatar
- Badge
- Banner (Partially JS)
- Button
- Card
- Checkbox
- Dropdown (JS required)
- FileInput (Partially JS)
- Hyperlink
- Input
- Radio
- RangeSlider (Partially JS)
- Select (Partially JS)
- Textarea
- Toggle

### ❌ Missing Components (11)
- Blockquote (No JS)
- Breadcrumb (No JS)
- Modal (JS required)
- Navigation (JS required)
- Pagination (No JS)
- Popover (JS required)
- Slider (Partially JS)
- Steps (No JS)
- Tabs (JS required)
- Toast (JS required)
- Tooltip (JS required)

---

## 🎯 Implementation Priority Order

### Phase 1: No JS Required (Easiest)
1. **Blockquote** - Simple text styling
2. **Breadcrumb** - Navigation links
3. **Pagination** - Navigation links
4. **Steps** - Progress indicator

### Phase 2: Partially JS Required (Medium)
5. **Slider** - Range input wrapper
6. **Tabs** - Tab switching logic

### Phase 3: Fully JS Required (Complex)
7. **Tooltip** - Floating-UI positioning
8. **Popover** - Floating-UI positioning
9. **Modal** - Focus trap, escape handling
10. **Toast** - Auto-dismiss, stacking
11. **Navigation** - Mobile menu, dropdowns

---

## 📦 Required Dependencies

### Already Installed ✅
- `@floating-ui/react` - For tooltips, popovers, dropdowns
- `framer-motion` - For animations
- `clsx` - For className management
- `react-hook-form` - For form components
- `zustand` - For state management (toasts)

### Need to Install
```bash
npm install @phosphor-icons/react
npm install focus-trap-react
npm install react-transition-group
```

---

## 🏗️ Component Implementation Steps

### Step 1: Pre-Implementation Checklist
- [ ] Read component documentation in `docs/components/[component].md`
- [ ] Check official AEGOV docs: https://designsystem.gov.ae/docs/components/[component]
- [ ] Identify dependent components and verify they exist
- [ ] Check if component requires JavaScript libraries
- [ ] Determine component complexity (No JS / Partial JS / Full JS)

### Step 2: Create Component Structure
```bash
# Create component directory
mkdir -p src/shared/components/ui/ComponentName

# Create required files
touch src/shared/components/ui/ComponentName/ComponentName.tsx
touch src/shared/components/ui/ComponentName/ComponentName.types.ts
touch src/shared/components/ui/ComponentName/ComponentName.test.tsx
touch src/shared/components/ui/ComponentName/ComponentName.stories.tsx
touch src/shared/components/ui/ComponentName/index.ts
```

### Step 3: Define Types (`ComponentName.types.ts`)
```typescript
import type { ReactNode } from 'react';

// Base props that all AEGOV components should have
export interface BaseComponentProps {
  /** Custom CSS classes */
  className?: string;
  /** Component children */
  children?: ReactNode;
  /** Test ID for testing */
  'data-testid'?: string;
}

// Component-specific types
export type ComponentVariant = 'default' | 'primary' | 'secondary';
export type ComponentSize = 'sm' | 'base' | 'lg';

// Main component props
export interface ComponentNameProps extends BaseComponentProps {
  variant?: ComponentVariant;
  size?: ComponentSize;
  disabled?: boolean;
  // ... other props
}
```

### Step 4: Implement Component (`ComponentName.tsx`)

#### Template Structure:
```typescript
import { forwardRef } from 'react';
import clsx from 'clsx';
import type { ComponentNameProps } from './ComponentName.types';

/**
 * AEGOV ComponentName
 *
 * [Brief description from AEGOV docs]
 *
 * @example
 * ```tsx
 * <ComponentName variant="primary" size="base">
 *   Content
 * </ComponentName>
 * ```
 */
export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  (
    {
      variant = 'default',
      size = 'base',
      className,
      children,
      ...rest
    },
    ref
  ) => {
    // Build CSS classes based on AEGOV design system
    const componentClasses = clsx(
      // Base AEGOV class
      'aegov-component',
      // Variant classes
      {
        'component-primary': variant === 'primary',
        'component-secondary': variant === 'secondary',
      },
      // Size classes
      {
        'component-sm': size === 'sm',
        'component-lg': size === 'lg',
      },
      // Custom className
      className
    );

    return (
      <div ref={ref} className={componentClasses} {...rest}>
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

#### For Components with Icons:
```typescript
import { type Icon, CaretDown } from '@phosphor-icons/react';

// Accept icon as prop
export interface ComponentNameProps {
  icon?: Icon;
  iconSize?: number;
}

// Use in component
const IconComponent = icon || CaretDown;
<IconComponent size={iconSize || 16} weight="bold" />
```

### Step 5: Create Stories (`ComponentName.stories.tsx`)
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

const meta = {
  title: 'Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Description from AEGOV docs',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary'],
    },
    size: {
      control: 'select',
      options: ['sm', 'base', 'lg'],
    },
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

// Example 1: From AEGOV docs
export const Example1: Story = {
  args: {
    variant: 'default',
    size: 'base',
    children: 'Content',
  },
  parameters: {
    docs: {
      description: {
        story: 'Description of Example 1 from AEGOV docs',
      },
    },
  },
};

// Example 2: From AEGOV docs
export const Example2: Story = {
  args: {
    variant: 'primary',
    size: 'lg',
    children: 'Content',
  },
};

// Create one Story per AEGOV example
// Use exact example names from docs
```

### Step 6: Write Unit Tests (`ComponentName.test.tsx`)
```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  // Happy Path Tests
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<ComponentName>Test</ComponentName>);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('should apply correct variant class', () => {
      render(<ComponentName variant="primary">Test</ComponentName>);
      const element = screen.getByText('Test');
      expect(element).toHaveClass('component-primary');
    });

    it('should apply correct size class', () => {
      render(<ComponentName size="lg">Test</ComponentName>);
      const element = screen.getByText('Test');
      expect(element).toHaveClass('component-lg');
    });

    it('should merge custom className', () => {
      render(<ComponentName className="custom-class">Test</ComponentName>);
      const element = screen.getByText('Test');
      expect(element).toHaveClass('custom-class');
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('should have correct ARIA attributes', () => {
      render(<ComponentName>Test</ComponentName>);
      const element = screen.getByText('Test');
      expect(element).toBeInTheDocument();
      // Add specific ARIA checks based on component
    });

    it('should support keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<ComponentName>Test</ComponentName>);
      const element = screen.getByText('Test');

      await user.tab();
      expect(element).toHaveFocus();
    });
  });

  // Interaction Tests
  describe('Interactions', () => {
    it('should call onClick when clicked', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<ComponentName onClick={handleClick}>Test</ComponentName>);
      const element = screen.getByText('Test');

      await user.click(element);
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  // Unhappy Path Tests
  describe('Error Handling', () => {
    it('should not crash with undefined children', () => {
      expect(() => render(<ComponentName />)).not.toThrow();
    });

    it('should handle invalid variant gracefully', () => {
      // @ts-expect-error Testing invalid prop
      render(<ComponentName variant="invalid">Test</ComponentName>);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('should prevent interaction when disabled', async () => {
      const handleClick = vi.fn();
      const user = userEvent.setup();

      render(<ComponentName disabled onClick={handleClick}>Test</ComponentName>);
      const element = screen.getByText('Test');

      await user.click(element);
      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('should handle very long content', () => {
      const longText = 'A'.repeat(1000);
      render(<ComponentName>{longText}</ComponentName>);
      expect(screen.getByText(longText)).toBeInTheDocument();
    });

    it('should handle special characters', () => {
      render(<ComponentName>{'<>&"\''}</ComponentName>);
      expect(screen.getByText('<>&"\'')).toBeInTheDocument();
    });
  });
});
```

### Step 7: Create Showcase Page
```typescript
// src/features/component-showcase/pages/ComponentNameShowcase.tsx
import { ComponentName } from '@/shared/components/ui';

export function ComponentNameShowcase() {
  return (
    <div className="space-y-12">
      <section>
        <h2 className="text-2xl font-bold mb-4">Example 1: [Title from Docs]</h2>
        <div className="space-y-4">
          <ComponentName variant="default" size="base">
            Content from Example 1
          </ComponentName>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Example 2: [Title from Docs]</h2>
        <div className="space-y-4">
          <ComponentName variant="primary" size="lg">
            Content from Example 2
          </ComponentName>
        </div>
      </section>

      {/* Add all examples from AEGOV docs */}
    </div>
  );
}
```

### Step 8: Create E2E Tests (`e2e/component-name.spec.ts`)
```typescript
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('ComponentName', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to showcase page
    await page.goto('/showcase/component-name');
  });

  test('should render all examples', async ({ page }) => {
    // Check that all examples from AEGOV docs are present
    await expect(page.getByRole('heading', { name: 'Example 1' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Example 2' })).toBeVisible();
  });

  test('should be keyboard accessible', async ({ page }) => {
    // Test keyboard navigation
    await page.keyboard.press('Tab');
    const focusedElement = await page.locator(':focus');
    await expect(focusedElement).toBeVisible();
  });

  test('should have no accessibility violations', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should work on mobile viewport', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByText('Content from Example 1')).toBeVisible();
  });

  test('should work on tablet viewport', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await expect(page.getByText('Content from Example 1')).toBeVisible();
  });

  test('should work on desktop viewport', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await expect(page.getByText('Content from Example 1')).toBeVisible();
  });

  // Component-specific interaction tests
  test('should handle user interactions', async ({ page }) => {
    const component = page.locator('.aegov-component').first();
    await component.click();
    // Add assertions based on expected behavior
  });
});
```

### Step 9: Export Component
```typescript
// src/shared/components/ui/ComponentName/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

Update main index:
```typescript
// src/shared/components/ui/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

### Step 10: Add Showcase Route
```typescript
// src/routes/routes.config.ts
{
  path: '/showcase/component-name',
  element: <ComponentNameShowcase />,
}
```

---

## 🔧 Component-Specific Guidelines

### For JS Required Components

#### Using Floating UI (Tooltip, Popover, Dropdown)
```typescript
import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useHover,
  useFocus,
  useRole,
  useDismiss,
  useInteractions,
} from '@floating-ui/react';

export const Tooltip = ({ children, content }: TooltipProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context);
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: 'tooltip' });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return (
    <>
      <div ref={refs.setReference} {...getReferenceProps()}>
        {children}
      </div>
      {isOpen && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          {...getFloatingProps()}
        >
          {content}
        </div>
      )}
    </>
  );
};
```

#### Focus Trap (Modal, Navigation Mobile Menu)
```typescript
import FocusTrap from 'focus-trap-react';

export const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  return (
    <FocusTrap active={isOpen}>
      <div className="aegov-modal" role="dialog" aria-modal="true">
        {children}
      </div>
    </FocusTrap>
  );
};
```

#### Toast/Notification Stack (using Zustand)
```typescript
// stores/toastStore.ts
import { create } from 'zustand';

interface Toast {
  id: string;
  message: string;
  type: 'info' | 'success' | 'error' | 'warning';
}

interface ToastStore {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

export const useToastStore = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (toast) =>
    set((state) => ({
      toasts: [...state.toasts, { ...toast, id: nanoid() }],
    })),
  removeToast: (id) =>
    set((state) => ({
      toasts: state.toasts.filter((t) => t.id !== id),
    })),
}));
```

---

## ✅ Testing Checklist

### Unit Tests (Vitest + React Testing Library)
- [ ] Renders with default props
- [ ] Applies all variant classes correctly
- [ ] Applies all size classes correctly
- [ ] Merges custom className
- [ ] Handles all prop combinations
- [ ] Calls event handlers correctly
- [ ] Has correct ARIA attributes
- [ ] Supports keyboard navigation
- [ ] Handles disabled state
- [ ] Handles loading state (if applicable)
- [ ] Doesn't crash with undefined/null props
- [ ] Handles invalid props gracefully
- [ ] Handles edge cases (long content, special chars)

### Storybook Stories
- [ ] One story per AEGOV documentation example
- [ ] All variants documented
- [ ] All sizes documented
- [ ] Interactive controls for all props
- [ ] Accessibility addon enabled
- [ ] Docs page generated

### E2E Tests (Playwright)
- [ ] All examples render correctly
- [ ] Keyboard navigation works
- [ ] No accessibility violations (Axe)
- [ ] Works on mobile viewport (375x667)
- [ ] Works on tablet viewport (768x1024)
- [ ] Works on desktop viewport (1920x1080)
- [ ] Component-specific interactions work
- [ ] Visual regression tests (screenshots)

---

## 📝 Documentation Requirements

Each component must include:

1. **JSDoc comments** on component and all props
2. **Usage examples** in JSDoc
3. **Storybook stories** for all AEGOV examples
4. **README** section in component folder (optional but recommended)
5. **Accessibility notes** in docs

---

## 🚀 Implementation Workflow

```bash
# 1. Install dependencies if needed
npm install @phosphor-icons/react focus-trap-react

# 2. Create component files
npm run create-component ComponentName  # If script exists, or manually

# 3. Implement component
# - Follow AEGOV HTML/CSS structure exactly
# - Convert inline SVGs to @phosphor-icons/react
# - Add TypeScript types
# - Add proper accessibility attributes

# 4. Write tests
npm run test -- ComponentName.test

# 5. Create Storybook stories
npm run storybook

# 6. Create showcase page
# Add to routes and verify navigation

# 7. Write E2E tests
npm run test:e2e -- component-name.spec.ts

# 8. Run full test suite
npm run test:all

# 9. Check test coverage
npm run test:coverage

# 10. Commit changes
git add .
git commit -m "feat: implement ComponentName component"
```

---

## 🎨 Design System Compliance

### AEGOV Class Naming Convention
- Base class: `.aegov-[component]`
- Variants: `.[component]-[variant]`
- Sizes: `.[component]-[size]`
- States: `.[component]-[state]`

### Example:
```html
<!-- Button Component -->
<button class="aegov-btn btn-outline btn-lg btn-secondary">
  Click me
</button>

<!-- Alert Component -->
<div class="aegov-alert alert-error alert-solid">
  Error message
</div>
```

### Always Use AEGOV Classes
Never create custom utility classes that conflict with AEGOV design system. Use TailwindCSS utilities for spacing/layout only.

---

## 📚 Additional Resources

- **AEGOV Design System**: https://designsystem.gov.ae/
- **Floating UI Docs**: https://floating-ui.com/
- **Phosphor Icons**: https://phosphoricons.com/
- **React Testing Library**: https://testing-library.com/react
- **Playwright Docs**: https://playwright.dev/
- **Storybook Docs**: https://storybook.js.org/

---

## ⚠️ Common Pitfalls

1. **Don't modify AEGOV CSS classes** - Use them as-is
2. **Don't inline all SVG icons** - Use @phosphor-icons/react
3. **Don't skip accessibility attributes** - Always add ARIA labels
4. **Don't forget RTL support** - Test with `dir="rtl"`
5. **Don't skip E2E tests** - They catch integration issues
6. **Don't hardcode colors** - Use AEGOV CSS variables
7. **Don't forget responsive design** - Test all breakpoints
8. **Don't skip keyboard navigation** - Always test with keyboard

---

## 🎯 Quality Gates

Before marking a component as complete:

- [ ] All unit tests pass with 100% coverage
- [ ] All E2E tests pass
- [ ] No accessibility violations in Axe
- [ ] All Storybook stories render correctly
- [ ] Component works in all browsers (Chrome, Firefox, Safari, Edge)
- [ ] Component works on all viewports (mobile, tablet, desktop)
- [ ] Component matches AEGOV design exactly
- [ ] TypeScript has no errors
- [ ] ESLint has no warnings
- [ ] Code reviewed by another developer

---

## 📊 Progress Tracking

Use this checklist to track implementation progress:

### Phase 1: No JS (Due: Week 1)
- [ ] Blockquote
- [ ] Breadcrumb
- [ ] Pagination
- [ ] Steps

### Phase 2: Partial JS (Due: Week 2)
- [ ] Slider
- [ ] Tabs

### Phase 3: Full JS (Due: Week 3-4)
- [ ] Tooltip
- [ ] Popover
- [ ] Modal
- [ ] Toast
- [ ] Navigation

---

## 🆘 Getting Help

If you encounter issues:

1. Check AEGOV official docs first
2. Look at existing implemented components for patterns
3. Check GitHub issues for similar problems
4. Ask in team chat/stand-up
5. Create a spike/POC to test approach

---

## ✨ Best Practices Summary

1. **Start simple** - Implement basic functionality first
2. **Test early** - Write tests as you build
3. **Follow patterns** - Look at existing components
4. **Be consistent** - Use same patterns across all components
5. **Document well** - Future you will thank you
6. **Accessibility first** - Don't add it as afterthought
7. **Performance matters** - Use React.memo, useCallback when needed
8. **Type everything** - TypeScript is your friend

Good luck! 🚀
