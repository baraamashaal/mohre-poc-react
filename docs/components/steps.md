# Steps

**Docs**: https://designsystem.gov.ae/docs/components/steps
**Purpose**: Simplifies complex processes by breaking them into sequential steps
**JS Required**: ❌ No

## Dependent Components

None - works independently with CSS

## Description

The Steps component is "a user interface element that simplifies complex processes or forms by breaking them down into a series of sequential steps." It provides visual progress tracking through multi-step processes, forms, or procedures, offering "a clear and intuitive way for users to understand their current progress and navigate through different stages of a task."

## Size Variations

| Class | Height | Width | Font Size |
|-------|--------|-------|-----------|
| `.step-sm` | 2rem (32px) | 2rem (32px) | 0.875rem (14px) |
| Default | 2.5rem (40px) | 2.5rem (40px) | 1rem (16px) |
| `.step-lg` | 3rem (48px) | 3rem (48px) | 1.125rem (18px) |

## HTML Structure Rules

### Critical Structure Points

1. **Container**: `<nav class="aegov-step">` with `aria-label`
2. **List**: `<ol role="list">`
   - Horizontal: `class="flex items-center justify-between"`
   - Vertical: No flex classes
3. **List Items**: `<li class="relative">`
   - Horizontal non-last: Add `w-full`
   - Vertical non-last: Add `pb-10`
   - State class: `step-completed`, `step-current`, or `step-upcoming`
4. **Connectors** (all steps except last):
   - Horizontal: TWO divs - `<div class="step-connector" aria-hidden="true"><div class="step-connector-state"></div></div>`
   - Vertical: ONE div - `<div class="step-connector-state step-connector-vertical" aria-hidden="true"></div>`
5. **Badge**: `<a class="step-badge">` or `<span class="step-badge">`
   - Current step: Add `aria-current="step"`
6. **Labels**: When showing labels, add `pb-9` to nav and place label INSIDE badge with `step-text-below` class

## Examples

### Example 1: Basic Horizontal Steps (4 steps)

```html
<nav aria-label="Progress" class="aegov-step">
  <ol role="list" class="flex items-center justify-between">
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 1</span>
      </a>
    </li>
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative w-full step-current">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge" aria-current="step">
        3
        <span class="sr-only">Step 3</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <!-- Last step: NO connector div -->
      <a href="#" class="step-badge">
        4
        <span class="sr-only">Step 4</span>
      </a>
    </li>
  </ol>
</nav>
```

### Example 2: Multiple Steps (5 steps)

```html
<nav aria-label="Progress" class="aegov-step">
  <ol role="list" class="flex items-center justify-between">
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 1</span>
      </a>
    </li>
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 3</span>
      </a>
    </li>
    <li class="relative w-full step-current">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge" aria-current="step">
        4
        <span class="sr-only">Step 4</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <a href="#" class="step-badge">
        5
        <span class="sr-only">Step 5</span>
      </a>
    </li>
  </ol>
</nav>
```

### Example 3: With Labels Below (3 steps)

```html
<nav aria-label="Progress" class="aegov-step pb-9">
  <ol role="list" class="flex items-center justify-between">
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <!-- Label is INSIDE the badge -->
        <span class="step-text-below">Personal Info</span>
      </a>
    </li>
    <li class="relative w-full step-current">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge" aria-current="step">
        2
        <span class="step-text-below">Contact Details</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <a href="#" class="step-badge">
        3
        <span class="step-text-below">Review</span>
      </a>
    </li>
  </ol>
</nav>
```

**Important**:
- Add `pb-9` to nav when showing labels
- Label span goes INSIDE the `step-badge` anchor
- Use `step-text-below` class on the label span

### Example 4: Vertical Steps (3 steps)

```html
<nav aria-label="Progress" class="aegov-step inline-block">
  <ol role="list">
    <!-- NO flex classes on ol for vertical -->
    <li class="relative step-completed pb-10">
      <!-- ONE div with BOTH classes for vertical connector -->
      <div class="step-connector-state step-connector-vertical"
           aria-hidden="true"></div>
      <a href="#">
        <span class="step-badge"></span>
      </a>
    </li>
    <li class="relative step-current pb-10">
      <div class="step-connector-state step-connector-vertical"
           aria-hidden="true"></div>
      <a href="#" class="step-badge" aria-current="step">
        2
        <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <!-- Last step: NO connector, NO pb-10 -->
      <a href="#" class="step-badge">
        3
        <span class="sr-only">Step 3</span>
      </a>
    </li>
  </ol>
</nav>
```

**Key differences for vertical**:
- Nav has `inline-block` class
- OL has NO flex classes
- Connector is ONE div with BOTH classes: `step-connector-state step-connector-vertical`
- Non-last li elements have `pb-10`
- NO `w-full` on li elements

### Example 5: Small Size

```html
<nav aria-label="Progress" class="aegov-step step-sm">
  <ol role="list" class="flex items-center justify-between">
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 1</span>
      </a>
    </li>
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative w-full step-current">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge" aria-current="step">
        3
        <span class="sr-only">Step 3</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <a href="#" class="step-badge">
        4
        <span class="sr-only">Step 4</span>
      </a>
    </li>
  </ol>
</nav>
```

**Note**: Size class (`step-sm`) is applied to the `<nav>` element

### Example 6: Large Size

```html
<nav aria-label="Progress" class="aegov-step step-lg">
  <ol role="list" class="flex items-center justify-between">
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 1</span>
      </a>
    </li>
    <li class="relative w-full step-completed">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge">
        <span class="sr-only">Step 2</span>
      </a>
    </li>
    <li class="relative w-full step-current">
      <div class="step-connector" aria-hidden="true">
        <div class="step-connector-state"></div>
      </div>
      <a href="#" class="step-badge" aria-current="step">
        3
        <span class="sr-only">Step 3</span>
      </a>
    </li>
    <li class="relative step-upcoming">
      <a href="#" class="step-badge">
        4
        <span class="sr-only">Step 4</span>
      </a>
    </li>
  </ol>
</nav>
```

**Note**: Size class (`step-lg`) is applied to the `<nav>` element

## CSS Classes Reference

### Container Classes (applied to `<nav>`)
| Class | Purpose |
|-------|---------|
| `aegov-step` | **Required** - Main wrapper class |
| `step-sm` | Small size variant (32px × 32px) |
| `step-lg` | Large size variant (48px × 48px) |
| `pb-9` | Bottom padding when labels are shown |
| `inline-block` | For vertical orientation |

### List Classes (applied to `<ol>`)
| Class | Purpose |
|-------|---------|
| `role="list"` | **Required** - Accessibility |
| `flex items-center justify-between` | Horizontal layout |
| (no classes) | Vertical layout |

### List Item Classes (applied to `<li>`)
| Class | Purpose |
|-------|---------|
| `relative` | **Required** - For connector positioning |
| `w-full` | Horizontal non-last steps |
| `pb-10` | Vertical non-last steps |
| `step-completed` | Completed step state |
| `step-current` | Current active step |
| `step-upcoming` | Future step state |
| `step-disabled` | Disabled step |

### Connector Classes

#### Horizontal (two divs)
| Class | Element | Purpose |
|-------|---------|---------|
| `step-connector` | Outer div | Connector wrapper |
| `step-connector-state` | Inner div | Colored line |

#### Vertical (one div)
| Class | Purpose |
|-------|---------|
| `step-connector-state step-connector-vertical` | Both classes on single div |

### Badge and Label Classes
| Class | Purpose |
|-------|---------|
| `step-badge` | **Required** - Step indicator circle |
| `step-text-below` | Label below badge (inside step-badge) |
| `sr-only` | Screen reader only text |

### ARIA Attributes
| Attribute | Element | Purpose |
|-----------|---------|---------|
| `aria-label="Progress"` | `<nav>` | Navigation landmark label |
| `aria-current="step"` | Current step badge | Mark active step |
| `aria-hidden="true"` | Connectors | Hide decorative elements |
| `aria-disabled="true"` | Disabled steps | Mark disabled state |

## Step States

### Completed Steps (`step-completed`)
- Display: Check icon (not step number)
- Background: Teal (`bg-teal-600`)
- Icon Color: White
- Connector: Teal

### Current Step (`step-current`)
- Display: Step number
- Border: Teal ring (`ring-2 ring-teal-600`)
- Background: White
- Text Color: Teal
- Attribute: `aria-current="step"`

### Upcoming Steps (`step-upcoming`)
- Display: Step number
- Border: Gray ring (`ring-2 ring-gray-300`)
- Background: White
- Text Color: Gray

### Disabled Steps (`step-disabled`)
- Opacity: 50% (`opacity-50`)
- Cursor: Not allowed
- Attribute: `aria-disabled="true"`
- Element: Always `<span>` (never `<a>`)

## Accessibility

- **Semantic HTML**: `<nav>`, `<ol>`, `<li>` elements
- **ARIA Labels**: `aria-label` on nav, `aria-current="step"` on current step
- **ARIA Hidden**: Decorative connectors use `aria-hidden="true"`
- **Screen Reader Text**: All steps have labels via `sr-only` class
- **Keyboard Navigation**: Clickable steps (links) are keyboard accessible
- **Role Attribute**: `role="list"` ensures list is announced properly

## React Component Usage

```tsx
import { Steps } from '@/shared/components/ui';

function MyComponent() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { label: 'Personal Info', href: '#step-1' },
    { label: 'Contact Details', href: '#step-2' },
    { label: 'Review', href: '#step-3' },
  ];

  return (
    <Steps
      steps={steps}
      currentStep={currentStep}
      showLabels
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `steps` | `Step[]` | - | Array of step objects |
| `currentStep` | `number` | - | Zero-indexed current step |
| `size` | `'sm' \| 'base' \| 'lg'` | `'base'` | Size variant |
| `orientation` | `'horizontal' \| 'vertical'` | `'horizontal'` | Layout direction |
| `showLabels` | `boolean` | `false` | Display step labels |
| `ariaLabel` | `string` | `'Progress'` | ARIA label for nav |
| `className` | `string` | - | Additional CSS classes |
| `data-testid` | `string` | - | Test ID |

### Step Object

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Yes | Step label text |
| `href` | `string` | No | URL for clickable steps |
| `disabled` | `boolean` | No | Disable the step |

## Best Practices

1. **Use meaningful labels** - Clearly describe each step's purpose
2. **Keep step count reasonable** - 3-7 steps work best
3. **Match step count to process** - Don't force artificial steps
4. **Use disabled judiciously** - Only when necessary for workflow
5. **Consider mobile** - Use vertical orientation for narrow screens
6. **Unique aria-labels** - When multiple Steps on one page
7. **Make steps clickable** - If users can navigate freely
8. **Keep labels concise** - Especially horizontal layouts
9. **Test with screen readers** - Ensure progression is clear
10. **Visual feedback** - Check icons indicate completion

## Design System Reference

Based on the AEGOV Design System Steps component:
https://designsystem.gov.ae/docs/components/steps
