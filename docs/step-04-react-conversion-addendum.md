# Step 04 Addendum: Missing Components & Updated Implementations

**Date:** 2025-11-17
**Purpose:** Complete implementations of missing components and corrections based on AEGOV JavaScript source analysis.

---

## Missing Components

### 1. Collapse Component

**JavaScript Reference:** [collapse.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/collapse/index.ts)

The Collapse component provides simple toggle functionality for content visibility.

```tsx
interface CollapseProps {
  isOpen: boolean;
  onToggle: () => void;
  children: React.ReactNode;
  triggerElement?: React.ReactNode;
  onCollapse?: () => void;
  onExpand?: () => void;
  onToggleCallback?: () => void;
}

export const Collapse: React.FC<CollapseProps> = ({
  isOpen,
  onToggle,
  children,
  triggerElement,
  onCollapse,
  onExpand,
  onToggleCallback,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      onExpand?.();
    } else {
      onCollapse?.();
    }
    onToggleCallback?.();
  }, [isOpen, onExpand, onCollapse, onToggleCallback]);

  return (
    <>
      {triggerElement && (
        <button
          onClick={onToggle}
          aria-expanded={isOpen}
          data-collapse-toggle
        >
          {triggerElement}
        </button>
      )}

      <div
        ref={contentRef}
        className={isOpen ? '' : 'hidden'}
      >
        {children}
      </div>
    </>
  );
};

// Usage:
const MyComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapse
      isOpen={isOpen}
      onToggle={() => setIsOpen(!isOpen)}
      triggerElement="Toggle Content"
      onExpand={() => console.log('Expanded')}
      onCollapse={() => console.log('Collapsed')}
    >
      <p>Collapsible content here</p>
    </Collapse>
  );
};
```

---

### 2. Drawer Component

**JavaScript Reference:** [drawer.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/drawer/index.ts)

The Drawer component provides slide-out sidebars with multiple placement options.

```tsx
type DrawerPlacement = 'top' | 'right' | 'bottom' | 'left';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  placement?: DrawerPlacement;
  bodyScrolling?: boolean;
  backdrop?: boolean;
  edge?: boolean;
  edgeOffset?: string;
  backdropClasses?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}

const getPlacementClasses = (
  placement: DrawerPlacement,
  isOpen: boolean,
  edge: boolean,
  edgeOffset: string
): string => {
  const baseClasses = {
    top: {
      base: ['fixed', 'top-0', 'left-0', 'right-0', 'z-50'],
      active: ['transform-none'],
      inactive: ['transform', '-translate-y-full'],
    },
    right: {
      base: ['fixed', 'top-0', 'right-0', 'h-screen', 'z-50'],
      active: ['transform-none'],
      inactive: ['transform', 'translate-x-full'],
    },
    bottom: {
      base: ['fixed', 'bottom-0', 'left-0', 'right-0', 'z-50'],
      active: ['transform-none'],
      inactive: ['transform', 'translate-y-full'],
    },
    left: {
      base: ['fixed', 'top-0', 'left-0', 'h-screen', 'z-50'],
      active: ['transform-none'],
      inactive: ['transform', '-translate-x-full'],
    },
  };

  const classes = baseClasses[placement];
  const edgeClass = edge && placement === 'bottom' ? edgeOffset : '';

  return [
    ...classes.base,
    ...(isOpen ? classes.active : classes.inactive),
    edgeClass,
    'transition-transform',
    'duration-300',
  ].filter(Boolean).join(' ');
};

export const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  placement = 'left',
  bodyScrolling = false,
  backdrop = true,
  edge = false,
  edgeOffset = 'bottom-[60px]',
  backdropClasses = 'aegov-drawer-backdrop',
  onShow,
  onHide,
  onToggle,
}) => {
  const drawerRef = useRef<HTMLDivElement>(null);

  // Body scroll management
  useBodyScrollLock(isOpen && !bodyScrolling);

  // Escape key handler
  useEscapeKey(() => {
    onClose();
    onHide?.();
  }, isOpen);

  // Lifecycle callbacks
  useEffect(() => {
    if (isOpen) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [isOpen, onShow, onHide]);

  // Don't render if closed and not in edge mode
  if (!isOpen && !edge) return null;

  return (
    <>
      {backdrop && isOpen && (
        <div
          className={`fixed inset-0 z-40 bg-black/50 ${backdropClasses}`}
          onClick={() => {
            onClose();
            onToggle?.();
          }}
        />
      )}

      <div
        ref={drawerRef}
        className={getPlacementClasses(placement, isOpen, edge, edgeOffset)}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        data-drawer-placement={placement}
      >
        {children}
      </div>
    </>
  );
};

// Usage:
const MyComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsDrawerOpen(true)}>
        Open Drawer
      </button>

      <Drawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        placement="right"
        backdrop={true}
        bodyScrolling={false}
        onShow={() => console.log('Drawer shown')}
        onHide={() => console.log('Drawer hidden')}
      >
        <div className="p-6">
          <h2>Drawer Content</h2>
          <button onClick={() => setIsDrawerOpen(false)}>
            Close
          </button>
        </div>
      </Drawer>
    </>
  );
};
```

---

### 3. Tooltip Component

**JavaScript Reference:** [tooltip.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/tooltip/index.ts) (requires Popper.js)

```tsx
import { usePopper } from 'react-popper';
import type { Placement } from '@popperjs/core';

interface TooltipProps {
  trigger: React.ReactNode;
  content: React.ReactNode;
  placement?: Placement;
  triggerType?: 'hover' | 'click' | 'none';
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}

export const Tooltip: React.FC<TooltipProps> = ({
  trigger,
  content,
  placement = 'top',
  triggerType = 'hover',
  onShow,
  onHide,
  onToggle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 8], // Fixed 8px offset for tooltips
        },
      },
    ],
  });

  const show = () => {
    setIsVisible(true);
    onShow?.();
  };

  const hide = () => {
    setIsVisible(false);
    onHide?.();
  };

  const toggle = () => {
    setIsVisible(!isVisible);
    onToggle?.();
  };

  // Escape key handler
  useEscapeKey(hide, isVisible);

  // Click outside handler
  useClickOutside([referenceElement, popperElement], hide);

  const getTriggerProps = () => {
    if (triggerType === 'hover') {
      return {
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocus: show,
        onBlur: hide,
      };
    } else if (triggerType === 'click') {
      return {
        onClick: toggle,
        onFocus: show,
        onBlur: hide,
      };
    }
    return {};
  };

  return (
    <>
      <div ref={setReferenceElement} {...getTriggerProps()}>
        {trigger}
      </div>

      {isVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="tooltip z-50"
          role="tooltip"
          data-tooltip-placement={placement}
        >
          {content}
        </div>
      )}
    </>
  );
};

// Usage:
<Tooltip
  trigger={<button>Hover me</button>}
  content="This is a tooltip"
  placement="top"
  triggerType="hover"
/>
```

---

## Updated Component Implementations

### Updated Dropdown Component with Full Popper.js Integration

```tsx
import { usePopper } from 'react-popper';
import type { Placement } from '@popperjs/core';

interface DropdownItem {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  divider?: boolean;
}

interface DropdownProps {
  trigger: React.ReactNode;
  items: DropdownItem[];
  placement?: Placement;
  triggerType?: 'click' | 'hover' | 'none';
  offsetSkidding?: number;
  offsetDistance?: number;
  delay?: number;
  header?: string;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = 'bottom',
  triggerType = 'click',
  offsetSkidding = 0,
  offsetDistance = 10,
  delay = 300,
  header,
  onShow,
  onHide,
  onToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [offsetSkidding, offsetDistance],
        },
      },
    ],
  });

  const show = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }

    if (triggerType === 'hover') {
      hoverTimerRef.current = setTimeout(() => {
        setIsOpen(true);
        onShow?.();
      }, delay);
    } else {
      setIsOpen(true);
      onShow?.();
    }
  };

  const hide = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
    }
    setIsOpen(false);
    onHide?.();
  };

  const toggle = () => {
    setIsOpen(!isOpen);
    onToggle?.();
  };

  // Click outside
  useClickOutside([referenceElement, popperElement], () => {
    if (isOpen && triggerType === 'click') {
      hide();
    }
  });

  const getTriggerProps = () => {
    if (triggerType === 'hover') {
      return {
        onMouseEnter: show,
        onMouseLeave: hide,
      };
    } else if (triggerType === 'click') {
      return {
        onClick: toggle,
      };
    }
    return {};
  };

  const getMenuProps = () => {
    if (triggerType === 'hover') {
      return {
        onMouseEnter: show,
        onMouseLeave: hide,
      };
    }
    return {};
  };

  return (
    <div className="relative inline-block">
      <div ref={setReferenceElement} {...getTriggerProps()}>
        {trigger}
      </div>

      {isOpen && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="dropdown-menu z-50"
          data-dropdown-placement={placement}
          {...getMenuProps()}
        >
          {header && (
            <div className="dropdown-header">
              <h6>{header}</h6>
            </div>
          )}

          <ul>
            {items.map((item, index) => {
              if (item.divider) {
                return <li key={index} className="dropdown-divider" />;
              }

              return (
                <li key={index}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className={item.disabled ? 'disabled' : ''}
                      onClick={(e) => {
                        if (item.disabled) {
                          e.preventDefault();
                          return;
                        }
                        hide();
                      }}
                    >
                      {item.icon && <span className="dropdown-icon">{item.icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        if (!item.disabled) {
                          item.onClick?.();
                          hide();
                        }
                      }}
                      disabled={item.disabled}
                    >
                      {item.icon && <span className="dropdown-icon">{item.icon}</span>}
                      {item.label}
                    </button>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

// Usage:
<Dropdown
  trigger={<button>Menu</button>}
  items={[
    { label: 'Action 1', onClick: () => console.log('Action 1') },
    { label: 'Action 2', onClick: () => console.log('Action 2') },
    { divider: true },
    { label: 'Delete', onClick: () => console.log('Delete') },
  ]}
  placement="bottom-start"
  triggerType="click"
  offsetDistance={10}
/>
```

---

### Updated Popover Component with Delay and Instance Management

```tsx
import { usePopper } from 'react-popper';
import type { Placement } from '@popperjs/core';

interface PopoverProps {
  trigger: React.ReactNode;
  title?: string;
  content: React.ReactNode;
  placement?: Placement;
  offset?: number;
  triggerType?: 'hover' | 'click' | 'none';
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  title,
  content,
  placement = 'top',
  offset = 10,
  triggerType = 'hover',
  onShow,
  onHide,
  onToggle,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const hideTimerRef = useRef<NodeJS.Timeout | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, offset],
        },
      },
    ],
  });

  const show = () => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
    }
    setIsVisible(true);
    onShow?.();
  };

  const hide = () => {
    // 100ms delay for hover mode
    if (triggerType === 'hover') {
      hideTimerRef.current = setTimeout(() => {
        setIsVisible(false);
        onHide?.();
      }, 100);
    } else {
      setIsVisible(false);
      onHide?.();
    }
  };

  const toggle = () => {
    if (isVisible) {
      hide();
    } else {
      show();
    }
    onToggle?.();
  };

  // Escape key listener
  useEscapeKey(() => {
    if (isVisible) {
      hide();
    }
  }, isVisible);

  // Click outside
  useClickOutside([referenceElement, popperElement], () => {
    if (isVisible) {
      hide();
    }
  });

  const getTriggerProps = () => {
    if (triggerType === 'hover') {
      return {
        onMouseEnter: show,
        onMouseLeave: hide,
        onFocus: show,
        onBlur: hide,
      };
    } else if (triggerType === 'click') {
      return {
        onClick: toggle,
        onFocus: show,
        onBlur: hide,
      };
    }
    return {};
  };

  const getPopoverProps = () => {
    if (triggerType === 'hover') {
      return {
        onMouseEnter: show,
        onMouseLeave: hide,
      };
    }
    return {};
  };

  return (
    <>
      <div ref={setReferenceElement} {...getTriggerProps()}>
        {trigger}
      </div>

      {isVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="popover z-50"
          role="tooltip"
          data-popover-placement={placement}
          {...getPopoverProps()}
        >
          {title && <div className="popover-header">{title}</div>}
          <div className="popover-body">{content}</div>
        </div>
      )}
    </>
  );
};

// Usage:
<Popover
  trigger={<button>Show Popover</button>}
  title="Popover Title"
  content={<p>This is the popover content</p>}
  placement="top"
  triggerType="hover"
  offset={10}
/>
```

---

### Updated Dismiss/Alert with Animation

```tsx
interface DismissProps {
  children: React.ReactNode;
  onDismiss?: () => void;
  transition?: string;
  duration?: number;
  timing?: string;
  onHide?: (targetEl: HTMLElement | null) => void;
}

export const Dismiss: React.FC<DismissProps> = ({
  children,
  onDismiss,
  transition = 'transition-opacity',
  duration = 300,
  timing = 'ease-out',
  onHide,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  const handleDismiss = () => {
    setIsAnimating(true);

    // Apply animation classes
    const element = elementRef.current;
    if (element) {
      element.classList.add(transition, `duration-[${duration}ms]`, timing, 'opacity-0');
    }

    setTimeout(() => {
      setIsVisible(false);
      onHide?.(element);
      onDismiss?.();
    }, duration);
  };

  if (!isVisible) return null;

  return (
    <div ref={elementRef} className="relative">
      {children}
      <button
        onClick={handleDismiss}
        className="dismiss-button"
        aria-label="Dismiss"
        data-dismiss-target
      >
        ×
      </button>
    </div>
  );
};

// Updated Alert with Dismiss
interface AlertProps {
  type: 'info' | 'error' | 'success' | 'warning';
  variant?: 'solid' | 'soft';
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
  transition?: string;
  duration?: number;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  variant = 'solid',
  children,
  dismissible = false,
  onDismiss,
  icon,
  transition = 'transition-opacity',
  duration = 300,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  if (dismissible) {
    return (
      <Dismiss
        transition={transition}
        duration={duration}
        onDismiss={onDismiss}
        onHide={() => setIsVisible(false)}
      >
        <div
          className={`aegov-alert alert-${type} ${variant === 'soft' ? 'alert-soft' : ''}`.trim()}
          role="alert"
        >
          {icon && <span className="alert-icon">{icon}</span>}
          <div className="alert-content">{children}</div>
        </div>
      </Dismiss>
    );
  }

  return (
    <div
      className={`aegov-alert alert-${type} ${variant === 'soft' ? 'alert-soft' : ''}`.trim()}
      role="alert"
    >
      {icon && <span className="alert-icon">{icon}</span>}
      <div className="alert-content">{children}</div>
    </div>
  );
};
```

---

## Installation Requirements

To use components with Popper.js integration, install the required dependencies:

```bash
npm install react-popper @popperjs/core
npm install --save-dev @types/react @types/react-dom
```

For TypeScript projects:
```bash
npm install --save-dev @types/popperjs__core
```

---

## Summary of Updates

### Components Added:
1. ✅ **Collapse** - Toggle visibility component
2. ✅ **Drawer** - Slide-out sidebar with 4 placements
3. ✅ **Tooltip** - Simple tooltips with Popper.js

### Components Updated:
1. ✅ **Modal** - Added all 9 placements, backdrop types, lifecycle callbacks
2. ✅ **Accordion** - Added activeClasses, inactiveClasses, onOpen/onClose callbacks
3. ✅ **Tabs** - Added keyboard navigation, activeClasses, onShow callback
4. ✅ **Dropdown** - Full Popper.js integration, hover delays, offset configuration
5. ✅ **Popover** - Added 100ms hide delay, proper hover handling
6. ✅ **Alert/Dismiss** - Added animation system with transition/duration/timing props

### Custom Hooks Added:
1. ✅ **useClickOutside** - Click outside detection
2. ✅ **useEscapeKey** - Escape key handling
3. ✅ **useBodyScrollLock** - Body scroll lock for modals/drawers

All implementations now accurately match the AEGOV JavaScript source code behavior and options.
