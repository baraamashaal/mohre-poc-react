# AEGOV Design System - JavaScript Components Reference

This document provides a comprehensive technical reference for the interactive JavaScript components in the AEGOV Design Language System (aegov-dls). All components are implemented in TypeScript and follow consistent patterns for initialization, state management, and accessibility.

---

## Table of Contents

1. [Accordion](#1-accordion)
2. [Collapse](#2-collapse)
3. [Dismiss](#3-dismiss)
4. [Dropdown](#4-dropdown)
5. [Modal](#5-modal)
6. [Drawer](#6-drawer)
7. [Tabs](#7-tabs)
8. [Popover](#8-popover)
9. [Tooltip](#9-tooltip)

---

## 1. Accordion

### Overview
Manages expandable/collapsible sections with support for single or multi-expand modes.

### Main Initialization Function
```typescript
constructor(items: AccordionItem[] = [], options: AccordionOptions = Default)
```

### Type Definitions

**AccordionItem:**
```typescript
type AccordionItem = {
  id: string
  triggerEl: HTMLElement
  targetEl: HTMLElement
  active?: boolean
}
```

**AccordionOptions:**
```typescript
type AccordionOptions = {
  alwaysOpen?: boolean
  activeClasses?: string
  inactiveClasses?: string
  onOpen?: (accordion: AccordionInterface, item: AccordionItem) => void
  onClose?: (accordion: AccordionInterface, item: AccordionItem) => void
  onToggle?: (accordion: AccordionInterface, item: AccordionItem) => void
}
```

### Key Methods

- **`open(id: string)`** - Opens an accordion item by ID. If `alwaysOpen` is false, closes all other items.
- **`close(id: string)`** - Closes an accordion item by ID.
- **`toggle(id: string)`** - Toggles between open/closed states.
- **`getItem(id: string)`** - Returns the accordion item with the specified ID.

### Event Listeners
- Click events on trigger elements to toggle accordion items

### Data Attributes

- `[data-accordion]` - Marks the accordion container
  - Value: `"open"` = alwaysOpen mode, other values = single expand
- `[data-accordion-target]` - Links trigger to target panel (value is selector)
- `[data-active-classes]` - Custom classes for active state
- `[data-inactive-classes]` - Custom classes for inactive state
- `[aria-expanded]` - Initial state ("true" or "false")

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  alwaysOpen: false,
  activeClasses: "accordion-active",
  inactiveClasses: "accordion-inactive",
  onOpen: () => {},
  onClose: () => {},
  onToggle: () => {}
}
```

### Accessibility Features
- Uses `aria-expanded` attribute to indicate state
- Manages `hidden` class for content visibility

### Initialization
```typescript
initAccordions() // Auto-initializes all accordions with [data-accordion]
```

---

## 2. Collapse

### Overview
Simple collapsible content component with toggle functionality.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  triggerEl: HTMLElement | null = null,
  options: CollapseOptions = Default
)
```

### Type Definitions

**CollapseOptions:**
```typescript
type CollapseOptions = {
  onCollapse?: (collapse: CollapseInterface) => void
  onExpand?: (collapse: CollapseInterface) => void
  onToggle?: (collapse: CollapseInterface) => void
}
```

### Key Methods

- **`expand()`** - Shows the target element by removing the `hidden` class.
- **`collapse()`** - Hides the target element by adding the `hidden` class.
- **`toggle()`** - Toggles between collapsed/expanded states.

### Event Listeners
- Click event on trigger element to toggle collapse

### Data Attributes

- `[data-collapse-toggle]` - Value is the ID of the target element to collapse/expand

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  onCollapse: () => {},
  onExpand: () => {},
  onToggle: () => {}
}
```

### State Management
- `_visible` property tracks current state
- Checks `aria-expanded` attribute on initialization, falls back to checking if `hidden` class is present

### Accessibility Features
- Manages `aria-expanded` attribute on trigger element
- Uses `hidden` class for visibility control

### Initialization
```typescript
initCollapses() // Auto-initializes all collapses with [data-collapse-toggle]
```

---

## 3. Dismiss

### Overview
Handles dismissible elements (alerts, notifications, etc.) with fade-out animation.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  triggerEl: HTMLElement | null = null,
  options: DismissOptions = Default
)
```

### Type Definitions

**DismissOptions:**
```typescript
type DismissOptions = {
  transition?: string
  duration?: number
  timing?: string
  onHide?: (dismiss: DismissInterface, targetEl: HTMLElement) => void
}
```

### Key Methods

- **`hide()`** - Hides the target element with fade-out animation, then adds `hidden` class.

### Event Listeners
- Click event on trigger element to dismiss target

### Data Attributes

- `[data-dismiss-target]` - CSS selector of the element to dismiss

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  transition: 'transition-opacity',
  duration: 300,
  timing: 'ease-out',
  onHide: () => {}
}
```

### Animation Details
1. Applies transition classes: `transition-opacity`, `duration-{duration}`, timing function, and `opacity-0`
2. After duration completes, adds `hidden` class
3. Calls `onHide` callback

### Initialization
```typescript
initDismisses() // Auto-initializes all dismisses with [data-dismiss-target]
```

---

## 4. Dropdown

### Overview
Dropdown menus with Popper.js positioning, supporting click and hover triggers.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  triggerEl: HTMLElement | null = null,
  options: DropdownOptions = Default
)
```

### Type Definitions

**DropdownTriggerType:**
```typescript
type DropdownTriggerType = 'click' | 'hover' | 'none'
```

**DropdownTriggerEventTypes:**
```typescript
type DropdownTriggerEventTypes = {
  showEvents: string[]
  hideEvents: string[]
}
```

**DropdownOptions:**
```typescript
type DropdownOptions = {
  placement?: Placement // from @popperjs/core
  triggerType?: DropdownTriggerType
  offsetSkidding?: number
  offsetDistance?: number
  delay?: number
  onShow?: (dropdown: DropdownInterface) => void
  onHide?: (dropdown: DropdownInterface) => void
  onToggle?: (dropdown: DropdownInterface) => void
}
```

### Key Methods

- **`show()`** - Displays dropdown, enables Popper listeners, sets up click-outside detection.
- **`hide()`** - Hides dropdown, disables Popper listeners, removes event listeners.
- **`toggle()`** - Toggles visibility state.
- **`isVisible()`** - Returns current visibility state.

### Private Methods

- **`_createPopperInstance()`** - Initializes Popper.js with offset modifiers
- **`_setupEventListeners()`** - Configures click or hover trigger behaviors
- **`_getTriggerEvents()`** - Returns event mapping based on trigger type
- **`_setupClickOutsideListener()`** - Attaches document-level click handler
- **`_removeClickOutsideListener()`** - Removes click handler
- **`_handleClickOutside()`** - Closes dropdown when clicking outside

### Event Listeners

**Click Mode:**
- Click on trigger to toggle

**Hover Mode:**
- `mouseenter`/`focus` on trigger to show (with delay)
- `mouseleave`/`blur` on trigger to hide
- `mouseenter` on dropdown to keep open
- `mouseleave` on dropdown to hide

**Click Outside:**
- Document-level click to close when clicking outside

### Data Attributes

- `[data-dropdown-toggle]` - Element ID reference
- `[data-dropdown-placement]` - Popper placement option (e.g., "bottom", "top-start")
- `[data-dropdown-offset-skidding]` - Horizontal offset
- `[data-dropdown-offset-distance]` - Vertical offset
- `[data-dropdown-trigger]` - Type: "click", "hover", or "none"
- `[data-dropdown-delay]` - Milliseconds for hover delay

### Dependencies

**Popper.js:**
```typescript
import { createPopper } from '@popperjs/core'
import type { Options as PopperOptions, Instance as PopperInstance } from '@popperjs/core'
```

### Options/Configuration

**Default Configuration:**
```typescript
{
  placement: 'bottom',
  triggerType: 'click',
  offsetSkidding: 0,
  offsetDistance: 10,
  delay: 300,
  onShow: () => {},
  onHide: () => {},
  onToggle: () => {}
}
```

### Custom Submenu Logic
The implementation includes additional handling for `.submenu-btn` elements:
- Active/inactive state toggling via CSS classes
- Keyboard navigation support (Tab key detection)
- Focus and blur event handlers
- Hover state synchronization

### Initialization
```typescript
initDropdowns() // Auto-initializes all dropdowns with [data-dropdown-toggle]
```

---

## 5. Modal

### Overview
Modal dialog windows with backdrop, positioning, and keyboard support.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  options: ModalOptions = Default
)
```

### Type Definitions

**modalBackdrop:**
```typescript
type modalBackdrop = 'static' | 'dynamic'
```

**modalPlacement:**
```typescript
type modalPlacement =
  | 'top-left' | 'top-center' | 'top-right'
  | 'center-left' | 'center' | 'center-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right'
```

**ModalOptions:**
```typescript
type ModalOptions = {
  placement?: modalPlacement
  backdropClasses?: string
  backdrop?: modalBackdrop
  closable?: boolean
  onShow?: (modal: ModalInterface) => void
  onHide?: (modal: ModalInterface) => void
  onToggle?: (modal: ModalInterface) => void
}
```

**ModalInstance:**
```typescript
type ModalInstance = {
  id: string
  object: ModalInterface
}
```

### Key Methods

- **`show()`** - Displays modal, creates backdrop, prevents body scroll.
- **`hide()`** - Hides modal, removes backdrop, restores body scroll.
- **`toggle()`** - Toggles visibility state.
- **`isVisible()`** - Returns true if modal is visible.
- **`isHidden()`** - Returns true if modal is hidden.

### Private Methods

- **`_createBackdrop()`** - Creates backdrop element
- **`_destroyBackdropEl()`** - Removes backdrop from DOM
- **`_getPlacementClasses()`** - Returns Tailwind CSS classes for positioning
- **`_setupModalCloseEventListeners()`** - Attaches Escape key and click handlers
- **`_removeModalCloseEventListeners()`** - Removes event listeners
- **`_handleOutsideClick()`** - Manages backdrop click behavior

### Event Listeners

- Escape key to close (when `closable: true`)
- Click on backdrop to close (when `backdrop: 'dynamic'`)

### Data Attributes

- `[data-modal-target]` - Initial modal setup
- `[data-modal-toggle]` - Toggle functionality
- `[data-modal-show]` - Show action
- `[data-modal-hide]` - Hide action

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  placement: 'center',
  backdropClasses: 'aegov-modal-backdrop',
  backdrop: 'dynamic',
  closable: true,
  onHide: () => {},
  onShow: () => {},
  onToggle: () => {}
}
```

### Placement System
Maps nine positions to Tailwind flexbox classes:
- **top-left**: `justify-start items-start`
- **top-center**: `justify-center items-start`
- **top-right**: `justify-end items-start`
- **center-left**: `justify-start items-center`
- **center**: `justify-center items-center`
- **center-right**: `justify-end items-center`
- **bottom-left**: `justify-start items-end`
- **bottom-center**: `justify-center items-end`
- **bottom-right**: `justify-end items-end`

### Accessibility Features

- `aria-modal="true"` when shown
- `aria-hidden="false"` when shown, `"true"` when hidden
- `role="dialog"` on modal element
- Body scroll prevention when modal is open

### Initialization
```typescript
initModals() // Auto-initializes all modals with [data-modal-target]
```

---

## 6. Drawer

### Overview
Slide-out drawer/sidebar component with edge mode support.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  options: DrawerOptions = Default
)
```

### Type Definitions

**DrawerOptions:**
```typescript
type DrawerOptions = {
  placement?: string
  bodyScrolling?: boolean
  backdrop?: boolean
  edge?: boolean
  edgeOffset?: string
  backdropClasses?: string
  onShow?: (drawer: DrawerInterface) => void
  onHide?: (drawer: DrawerInterface) => void
  onToggle?: (drawer: DrawerInterface) => void
}
```

**PlacementClasses:**
```typescript
type PlacementClasses = {
  base: string[]
  active: string[]
  inactive: string[]
}
```

**DrawerInstance:**
```typescript
type DrawerInstance = {
  id: string
  object: DrawerInterface
}
```

### Key Methods

- **`show()`** - Displays drawer, applies active placement classes, manages body scroll, creates backdrop.
- **`hide()`** - Hides drawer, removes active classes, restores body scroll, removes backdrop.
- **`toggle()`** - Toggles visibility state.
- **`isVisible()`** - Returns true if drawer is visible.
- **`isHidden()`** - Returns true if drawer is hidden.

### Private Methods

- **`_createBackdrop()`** - Generates backdrop element with click-to-close functionality
- **`_destroyBackdropEl()`** - Removes backdrop from DOM
- **`_getPlacementClasses()`** - Returns positioning classes for placements

### Event Listeners

- Escape key to close drawer
- Click on backdrop to close (when backdrop is enabled)

### Data Attributes

- `[data-drawer-target]` - Links trigger to drawer element
- `[data-drawer-toggle]` - Toggles drawer visibility
- `[data-drawer-show]` - Opens drawer
- `[data-drawer-hide]` / `[data-drawer-dismiss]` - Closes drawer
- `[data-drawer-placement]` - Specifies position ("top", "right", "bottom", "left")
- `[data-drawer-body-scrolling]` - Controls background scroll behavior
- `[data-drawer-backdrop]` - Enables/disables backdrop
- `[data-drawer-edge]` - Activates edge mode
- `[data-drawer-edge-offset]` - Sets edge offset value

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  placement: 'left',
  bodyScrolling: false,
  backdrop: true,
  edge: false,
  edgeOffset: 'bottom-[60px]',
  backdropClasses: 'aegov-drawer-backdrop',
  onShow: () => {},
  onHide: () => {},
  onToggle: () => {}
}
```

### Placement Support
- **top** - Drawer slides from top
- **right** - Drawer slides from right
- **bottom** - Drawer slides from bottom
- **left** - Drawer slides from left
- **bottom-edge** - Partial visibility mode with custom offset

### Accessibility Features

- `aria-hidden` attribute management
- `aria-modal="true"` when shown
- `role="dialog"` on drawer element
- Keyboard support (Escape key)
- Body scroll lock option

### Initialization
```typescript
initDrawers() // Auto-initializes all drawers with [data-drawer-target]
```

---

## 7. Tabs

### Overview
Tab navigation component with active state management.

### Main Initialization Function
```typescript
constructor(items: TabItem[] = [], options: TabsOptions = Default)
```

### Type Definitions

**TabItem:**
```typescript
type TabItem = {
  id: string
  triggerEl: HTMLElement
  targetEl: HTMLElement
}
```

**TabsOptions:**
```typescript
type TabsOptions = {
  defaultTabId?: string
  activeClasses?: string
  inactiveClasses?: string
  onShow?: (tabs: TabsInterface, tab: TabItem) => void
}
```

### Key Methods

- **`show(id: string, forceShow = false)`** - Shows the tab with the specified ID. If not forced, won't re-show if already active.
- **`getActiveTab()`** - Returns the currently active tab.
- **`getTab(id: string)`** - Returns the tab with the specified ID.

### Private Methods

- **`_setActiveTab(tab: TabItem)`** - Updates the active tab reference

### Event Listeners

- Click events on tab triggers to show corresponding content

### Data Attributes

- `[data-tabs-toggle]` - Marks the tabs container
- `[data-tabs-target]` - Links trigger to target panel (value is selector)
- `[role="tab"]` - Identifies tab trigger elements
- `[aria-selected]` - Initial state ("true" or "false")

### Dependencies
None (pure JavaScript/TypeScript)

### Options/Configuration

**Default Configuration:**
```typescript
{
  defaultTabId: null,
  activeClasses: 'tab-active',
  inactiveClasses: 'tab-inactive',
  onShow: () => {}
}
```

### Behavior

- Only one tab can be active at a time
- If no `defaultTabId` is specified, first tab is active by default
- Active tab has `activeClasses` applied and `aria-selected="true"`
- Inactive tabs have `inactiveClasses` applied and content is hidden

### Accessibility Features

- Uses `aria-selected` attribute
- Uses `role="tab"` for tab triggers
- Manages `hidden` class for content visibility

### Initialization
```typescript
initTabs() // Auto-initializes all tabs with [data-tabs-toggle]
```

---

## 8. Popover

### Overview
Contextual popups with Popper.js positioning, supporting click and hover triggers.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  triggerEl: HTMLElement | null = null,
  options: PopoverOptions = Default,
  instanceOptions: InstanceOptions = defaultInstanceOptions
)
```

### Type Definitions

**PopoverTriggerType:**
```typescript
type PopoverTriggerType = 'click' | 'hover' | 'none'
```

**PopoverTriggerEventTypes:**
```typescript
type PopoverTriggerEventTypes = {
  showEvents: string[]
  hideEvents: string[]
}
```

**PopoverOptions:**
```typescript
type PopoverOptions = {
  placement?: Placement // from @popperjs/core
  offset?: number
  triggerType?: PopoverTriggerType
  onShow?: (popover: PopoverInterface) => void
  onHide?: (popover: PopoverInterface) => void
  onToggle?: (popover: PopoverInterface) => void
}
```

### Key Methods

- **`show()`** - Displays popover, enables Popper listeners, sets up click-outside and Escape handlers.
- **`hide()`** - Hides popover, disables listeners, removes event handlers.
- **`toggle()`** - Toggles visibility state.
- **`isVisible()`** - Returns current visibility state.
- **`init()`** - Initializes popover if elements exist.
- **`destroy()`** - Removes all event listeners and cleans up.
- **`removeInstance()`** - Unregisters from instance manager.
- **`destroyAndRemoveInstance()`** - Performs both cleanup operations.

### Callback Management Methods

- **`updateOnShow(callback)`** - Updates the onShow callback
- **`updateOnHide(callback)`** - Updates the onHide callback
- **`updateOnToggle(callback)`** - Updates the onToggle callback

### Private Methods

- **`_createPopperInstance()`** - Initializes Popper.js with offset modifier
- **`_setupEventListeners()`** - Configures trigger event handlers
- **`_getTriggerEvents()`** - Returns event mapping based on trigger type
- **`_setupKeydownListener()`** - Handles Escape key
- **`_setupClickOutsideListener()`** - Handles clicks outside popover
- **`_handleClickOutside()`** - Evaluates if click occurred outside

### Event Listeners

**Hover Mode:**
- `mouseenter`/`focus` on trigger to show
- `mouseleave`/`blur` on trigger to hide (100ms delay)

**Click Mode:**
- `click`/`focus` on trigger to show
- `focusout`/`blur` on trigger to hide

**Global Listeners:**
- Escape key to close
- Click outside to close

### Data Attributes

- `[data-popover-target]` - ID of popover element
- `[data-popover-trigger]` - Event type ("hover", "click", "none")
- `[data-popover-placement]` - Positioning direction
- `[data-popover-offset]` - Distance in pixels

### Dependencies

**Popper.js:**
```typescript
import { createPopper } from '@popperjs/core'
import type { Options as PopperOptions, Instance as PopperInstance } from '@popperjs/core'
```

**Instance Manager:**
```typescript
import instances from '../../dom/instances'
```

### Options/Configuration

**Default Configuration:**
```typescript
{
  placement: 'top',
  offset: 10,
  triggerType: 'hover',
  onShow: () => {},
  onHide: () => {},
  onToggle: () => {}
}
```

### Instance Management

Popovers are registered in a global instance manager, allowing:
- Retrieval by ID
- Cleanup and removal
- Preventing duplicate instances

### Initialization
```typescript
initPopovers() // Auto-initializes all popovers with [data-popover-target]
```

---

## 9. Tooltip

### Overview
Simple tooltips with Popper.js positioning, supporting click and hover triggers.

### Main Initialization Function
```typescript
constructor(
  targetEl: HTMLElement | null = null,
  triggerEl: HTMLElement | null = null,
  options: TooltipOptions = Default
)
```

### Type Definitions

**TooltipTriggerType:**
```typescript
type TooltipTriggerType = 'click' | 'hover' | 'none'
```

**TooltipTriggerEventTypes:**
```typescript
type TooltipTriggerEventTypes = {
  showEvents: string[]
  hideEvents: string[]
}
```

**TooltipOptions:**
```typescript
type TooltipOptions = {
  placement?: Placement // from @popperjs/core
  triggerType?: TooltipTriggerType
  onShow?: (tooltip: TooltipInterface) => void
  onHide?: (tooltip: TooltipInterface) => void
  onToggle?: (tooltip: TooltipInterface) => void
}
```

### Key Methods

- **`show()`** - Displays tooltip, enables Popper listeners, sets up click-outside and Escape handlers.
- **`hide()`** - Hides tooltip, disables listeners, removes event handlers.
- **`toggle()`** - Toggles visibility state.
- **`isVisible()`** - Returns current visibility state.

### Private Methods

- **`_createPopperInstance()`** - Initializes Popper.js with 8px offset
- **`_setupEventListeners()`** - Configures trigger event handlers
- **`_getTriggerEvents()`** - Returns event mapping based on trigger type
- **`_setupKeydownListener()`** - Handles Escape key
- **`_removeKeydownListener()`** - Removes Escape handler
- **`_setupClickOutsideListener()`** - Handles clicks outside tooltip
- **`_removeClickOutsideListener()`** - Removes outside-click handler
- **`_handleClickOutside()`** - Evaluates if click occurred outside

### Event Listeners

**Hover Mode:**
- `mouseenter`/`focus` on trigger to show
- `mouseleave`/`blur` on trigger to hide

**Click Mode:**
- `click`/`focus` on trigger to show
- `focusout`/`blur` on trigger to hide

**Global Listeners:**
- Escape key to close
- Click outside to close

### Data Attributes

- `[data-tooltip-target]` - CSS selector of tooltip element
- `[data-tooltip-trigger]` - Event type ("hover", "click", "none")
- `[data-tooltip-placement]` - Positioning direction

### Dependencies

**Popper.js:**
```typescript
import { createPopper } from '@popperjs/core'
import type { Options as PopperOptions, Instance as PopperInstance } from '@popperjs/core'
```

### Options/Configuration

**Default Configuration:**
```typescript
{
  placement: 'top',
  triggerType: 'hover',
  onShow: () => {},
  onHide: () => {},
  onToggle: () => {}
}
```

### Key Differences from Popover

- Simpler implementation (no instance management)
- Default placement is "top" (vs "top" for popover)
- Default offset is 8px (vs 10px for popover)
- No dynamic callback update methods
- No init/destroy/removeInstance methods

### Initialization
```typescript
initTooltips() // Auto-initializes all tooltips with [data-tooltip-target]
```

---

## Common Patterns Across Components

### 1. Initialization Pattern
All components follow a similar initialization pattern:
```typescript
export function initComponentName() {
  document.querySelectorAll('[data-component-attribute]').forEach(($el) => {
    // Extract configuration from data attributes
    // Create new component instance
  });
}
```

### 2. Options Merging
All components merge user options with defaults:
```typescript
this._options = { ...Default, ...options }
```

### 3. Event Listener Management
Most components have:
- Setup methods for attaching listeners
- Remove/cleanup methods for detaching listeners
- Click-outside detection for dismissible components

### 4. Accessibility
All components implement ARIA attributes:
- `aria-expanded` (Accordion, Collapse)
- `aria-selected` (Tabs)
- `aria-hidden` (Modal, Drawer)
- `aria-modal` (Modal, Drawer)

### 5. State Management
All components track visibility/state internally:
- `_visible` boolean property
- `_activeTab` / `_activeItem` references
- `_isHidden` boolean for modals

### 6. Callback Hooks
All components provide lifecycle callbacks:
- `onShow` - Fired when component becomes visible
- `onHide` - Fired when component becomes hidden
- `onToggle` - Fired when state changes

### 7. Dependencies
**Components using Popper.js:**
- Dropdown
- Popover
- Tooltip

**Pure JavaScript components:**
- Accordion
- Collapse
- Dismiss
- Modal
- Drawer
- Tabs

### 8. Global Window Exposure
All components expose themselves globally:
```typescript
if (typeof window !== 'undefined') {
  window.ComponentName = ComponentName
  window.initComponentName = initComponentName
}
```

---

## Implementation Notes for React Conversion

### Key Considerations:

1. **State Management**: Replace internal `_visible`, `_activeTab` properties with React state hooks

2. **Event Listeners**: Use `useEffect` hooks for adding/removing event listeners

3. **Refs**: Use `useRef` for DOM element references (replaces `_targetEl`, `_triggerEl`)

4. **Popper.js Integration**: Use `react-popper` or implement similar hook-based wrapper

5. **Callbacks**: Convert to props with proper TypeScript typing

6. **Data Attributes**: Convert to component props

7. **Initialization**: Not needed - React components initialize on mount

8. **Accessibility**: Maintain all ARIA attributes in JSX

9. **CSS Classes**: Use className prop and CSS modules/Tailwind

10. **Animation**: Consider using React animation libraries (framer-motion, react-spring) or CSS transitions

### Recommended React Hooks:

- `useState` - For visibility and active state
- `useEffect` - For event listeners and side effects
- `useRef` - For DOM element references
- `useCallback` - For memoized event handlers
- `useMemo` - For computed values
- Custom hooks for Popper.js integration

### Component Structure Template:

```typescript
interface ComponentProps {
  // Props based on original options
}

export const Component: React.FC<ComponentProps> = ({
  // Destructure props
}) => {
  // State hooks
  const [isVisible, setIsVisible] = useState(false)

  // Refs
  const targetRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)

  // Event handlers
  const handleShow = useCallback(() => {
    setIsVisible(true)
    onShow?.()
  }, [onShow])

  // Effects
  useEffect(() => {
    // Setup event listeners
    return () => {
      // Cleanup
    }
  }, [])

  return (
    // JSX
  )
}
```

---

## Summary

The AEGOV design system provides a comprehensive set of interactive JavaScript components with:

- **Consistent API patterns** across all components
- **Strong TypeScript typing** for type safety
- **Accessibility features** built-in (ARIA attributes)
- **Flexible configuration** via options objects
- **Lifecycle callbacks** for custom behavior
- **Declarative HTML initialization** via data attributes
- **Programmatic API** for JavaScript control

All components are production-ready and follow modern web development best practices. The implementation is clean, well-structured, and ready for adaptation to React or other frameworks.
