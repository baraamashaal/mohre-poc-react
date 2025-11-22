# Component Implementation Quick Start 🚀

## Missing Components to Implement (11 Total)

### 🟢 Phase 1: No JS Required (Easiest) - Start Here!
1. **Blockquote** - Simple styled quote component
2. **Breadcrumb** - Navigation breadcrumbs
3. **Pagination** - Page navigation
4. **Steps** - Progress indicator

### 🟡 Phase 2: Partially JS Required (Medium)
5. **Slider** - Range slider wrapper
6. **Tabs** - Tab switching interface

### 🔴 Phase 3: Fully JS Required (Complex)
7. **Tooltip** - Hover/focus tooltips
8. **Popover** - Click/hover popovers
9. **Modal** - Dialog/overlay modals
10. **Toast** - Notification system
11. **Navigation** - Header/mobile nav

---

## 30-Second Checklist Per Component

### Before You Start
```bash
# 1. Check component docs
cat docs/components/[component-name].md

# 2. Check official AEGOV docs
# Visit: https://designsystem.gov.ae/docs/components/[component-name]

# 3. Check dependencies
# Read "Dependent Components" section in docs
```

### Create Files (2 minutes)
```bash
# Create component folder
mkdir -p src/shared/components/ui/ComponentName

# Create all files at once
cd src/shared/components/ui/ComponentName
touch ComponentName.tsx ComponentName.types.ts ComponentName.test.tsx ComponentName.stories.tsx index.ts
```

### Implement (20-60 minutes)
1. **Types** (`ComponentName.types.ts`) - 5 min
   - Copy from Button.types.ts as template
   - Add component-specific props

2. **Component** (`ComponentName.tsx`) - 15-30 min
   - Copy from Button.tsx as template
   - Replace with AEGOV HTML structure
   - Convert SVGs to @phosphor-icons/react
   - Add clsx for class management

3. **Stories** (`ComponentName.stories.tsx`) - 10 min
   - Copy from Button.stories.tsx
   - Create one story per AEGOV example
   - Match example names exactly

4. **Tests** (`ComponentName.test.tsx`) - 20-30 min
   - Copy from Button.test.tsx
   - Update assertions for your component
   - Add component-specific tests

5. **Export** (`index.ts`) - 1 min
```typescript
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

### Add to System (5 minutes)
```typescript
// 1. Update main export
// src/shared/components/ui/index.ts
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';

// 2. Create showcase page
// src/features/component-showcase/pages/ComponentNameShowcase.tsx

// 3. Add route
// src/routes/routes.config.ts
```

### E2E Tests (10 minutes)
```bash
# Create E2E test file
touch e2e/component-name.spec.ts

# Copy from existing spec as template
# Update selectors and assertions
```

### Verify (5 minutes)
```bash
# Run all tests
npm run test -- ComponentName
npm run test:e2e -- component-name

# Check Storybook
npm run storybook

# Manual check
npm run dev
# Navigate to /showcase/component-name
```

---

## File Templates

### 1. ComponentName.types.ts
```typescript
export interface ComponentNameProps {
  className?: string;
  children?: React.ReactNode;
  variant?: 'default' | 'primary' | 'secondary';
  size?: 'sm' | 'base' | 'lg';
}
```

### 2. ComponentName.tsx
```typescript
import { forwardRef } from 'react';
import clsx from 'clsx';
import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName = forwardRef<HTMLDivElement, ComponentNameProps>(
  ({ variant = 'default', size = 'base', className, children, ...rest }, ref) => {
    const classes = clsx(
      'aegov-component',
      {
        'component-primary': variant === 'primary',
        'component-sm': size === 'sm',
        'component-lg': size === 'lg',
      },
      className
    );

    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### 3. index.ts
```typescript
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

---

## Icon Conversion Guide

### Old Way (HTML inline SVG)
```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
  <rect width="256" height="256" fill="none"/>
  <polyline points="208 96 128 176 48 96" fill="none"
    stroke="currentColor" stroke-linecap="round"
    stroke-linejoin="round" stroke-width="16"/>
</svg>
```

### New Way (@phosphor-icons/react)
```typescript
import { CaretDown } from '@phosphor-icons/react';

// In component
<CaretDown size={16} weight="bold" />

// Find icon: https://phosphoricons.com/
// Search for similar shape, or check AEGOV docs for icon name
```

### Common Icon Mappings
- Chevron Down → `CaretDown`
- Arrow Right → `ArrowRight`
- Check → `Check`
- X/Close → `X`
- Info → `Info`
- Warning → `Warning`
- User → `User`
- Search → `MagnifyingGlass`
- Menu → `List`

---

## Component Dependencies Reference

Check this before implementing:

| Component | Depends On |
|-----------|------------|
| Accordion | Button, Icons |
| Alert | Icons, Hyperlink |
| Banner | Button, Hyperlink, Icons |
| Breadcrumb | Hyperlink, Icons |
| Card | Hyperlink, Icons |
| Checkbox | - |
| Dropdown | Button, Icons |
| Modal | Button, Icons |
| Navigation | Button, Dropdown, Hyperlink, Icons |
| Pagination | Button, Icons |
| Popover | Icons |
| Steps | Icons |
| Tabs | Icons |
| Toast | Icons, Button |
| Tooltip | Icons |

✅ = Already implemented
❌ = Need to implement first

---

## Quick Command Reference

```bash
# Development
npm run dev                    # Start dev server
npm run storybook             # Start Storybook

# Testing
npm run test                  # Run unit tests
npm run test:ui               # Run tests with UI
npm run test:coverage         # Check coverage
npm run test:e2e              # Run E2E tests
npm run test:e2e:ui           # Run E2E with UI

# Build
npm run build                 # Build for production
npm run lint                  # Check linting

# Full validation
npm run test:all              # Run all tests
```

---

## Common Issues & Solutions

### Issue: Icons not displaying
**Solution:**
```typescript
// ❌ Wrong
import CaretDown from '@phosphor-icons/react';

// ✅ Correct
import { CaretDown } from '@phosphor-icons/react';
```

### Issue: Classes not applying
**Solution:** Check AEGOV class names exactly match docs
```typescript
// ❌ Wrong
'btn btn-primary'

// ✅ Correct
'aegov-btn btn-primary'
```

### Issue: TypeScript errors
**Solution:** Make sure props extend base interface
```typescript
import type { HTMLAttributes } from 'react';

export interface ComponentProps extends HTMLAttributes<HTMLDivElement> {
  // your props
}
```

### Issue: Tests failing
**Solution:** Import jest-dom matchers
```typescript
import '@testing-library/jest-dom';
```

### Issue: Storybook not showing component
**Solution:** Check meta export and file naming
```typescript
// Must be default export
export default meta;
```

---

## Time Estimates

| Complexity | Component | Time |
|------------|-----------|------|
| 🟢 Easy | Blockquote, Breadcrumb | 30-45 min |
| 🟢 Easy | Pagination, Steps | 45-60 min |
| 🟡 Medium | Slider, Tabs | 1-2 hours |
| 🔴 Complex | Tooltip, Popover | 2-3 hours |
| 🔴 Complex | Modal, Toast | 3-4 hours |
| 🔴 Complex | Navigation | 4-6 hours |

**Total estimated time: 20-30 hours**

---

## Today's Goal

**Start with Phase 1 (No JS Required):**

1. Blockquote (30 min)
2. Breadcrumb (45 min)
3. Pagination (60 min)
4. Steps (60 min)

**Total: ~3-4 hours of focused work**

Good luck! 🎯

For detailed implementation guide, see: [REACT_COMPONENT_IMPLEMENTATION_GUIDE.md](./REACT_COMPONENT_IMPLEMENTATION_GUIDE.md)
