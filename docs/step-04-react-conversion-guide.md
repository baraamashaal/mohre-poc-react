# Step 04: React Conversion Reference Guide

**Date:** 2025-11-17
**Status:** ✅ Completed
**Purpose:** Comprehensive guide for converting AEGOV vanilla HTML/CSS components to React components with TypeScript.

---

## Table of Contents

1. [Conversion Philosophy](#conversion-philosophy)
2. [General Conversion Patterns](#general-conversion-patterns)
3. [Data Attributes to Props](#data-attributes-to-props)
4. [Interactive Components](#interactive-components)
5. [Component-Specific Conversions](#component-specific-conversions)
6. [Block Conversions](#block-conversions)
7. [TypeScript Interfaces](#typescript-interfaces)
8. [Best Practices](#best-practices)

---

## Conversion Philosophy

### Core Principles

1. **Preserve AEGOV Classes**: Keep all AEGOV CSS classes exactly as documented
2. **Convert Data Attributes to Props**: Transform `data-*` attributes into React props
3. **Maintain Accessibility**: Preserve all ARIA attributes and semantic HTML
4. **Type Safety**: Use TypeScript interfaces for all props
5. **Controlled Components**: Use React state for interactive elements
6. **Ref Management**: Use refs for AEGOV JavaScript integration when needed

### What NOT to Change

- CSS class names (keep `.aegov-*` classes)
- HTML structure (maintain nesting and hierarchy)
- ARIA attributes (accessibility requirements)
- Semantic HTML elements

### What TO Change

- Static HTML → React components with props
- `data-*` attributes → Event handlers and props
- Inline event handlers → React event handlers
- Hardcoded content → Props and children
- IDs (make dynamic or use refs)

---

## General Conversion Patterns

### Pattern 1: Basic Component Structure

**HTML:**
```html
<button class="aegov-btn" type="button">
  Click me
</button>
```

**React:**
```tsx
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'solid' | 'outline' | 'soft' | 'link';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  disabled?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'solid',
  size = 'base',
  disabled = false,
  className = '',
}) => {
  const variantClass = variant !== 'solid' ? `btn-${variant}` : '';
  const sizeClass = size !== 'base' ? `btn-${size}` : '';

  return (
    <button
      type={type}
      className={`aegov-btn ${variantClass} ${sizeClass} ${className}`.trim()}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
```

### Pattern 2: Form Components with State

**HTML:**
```html
<div class="aegov-form-control">
  <label for="email">Email</label>
  <div class="form-control-input">
    <input type="email" id="email" placeholder="Enter email">
  </div>
</div>
```

**React:**
```tsx
interface InputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: string;
  placeholder?: string;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  size?: 'sm' | 'base' | 'lg';
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  variant?: 'primary' | 'secondary';
  id?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  error,
  helperText,
  required = false,
  disabled = false,
  size = 'base',
  prefix,
  suffix,
  variant = 'primary',
  id,
}) => {
  const inputId = id || `input-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hasError = !!error;

  return (
    <div className={`aegov-form-control ${size !== 'base' ? `form-control-${size}` : ''} ${hasError ? 'error' : ''} ${variant === 'secondary' ? 'secondary' : ''}`.trim()}>
      <label htmlFor={inputId}>
        {label}
        {required && <span className="required">*</span>}
      </label>

      <div className="form-control-input">
        {prefix && <span className="form-control-prefix">{prefix}</span>}

        <input
          type={type}
          id={inputId}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={hasError}
          aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        />

        {suffix && <span className="form-control-suffix">{suffix}</span>}
      </div>

      {error && (
        <p id={`${inputId}-error`} className="form-control-error">
          {error}
        </p>
      )}

      {!error && helperText && (
        <p id={`${inputId}-helper`} className="form-control-helper">
          {helperText}
        </p>
      )}
    </div>
  );
};
```

### Pattern 3: Components with Children

**HTML:**
```html
<div class="aegov-card">
  <div class="card-header">
    <h3>Card Title</h3>
  </div>
  <div class="card-body">
    <p>Card content</p>
  </div>
  <div class="card-footer">
    <button class="aegov-btn">Action</button>
  </div>
</div>
```

**React:**
```tsx
interface CardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children: React.ReactNode;
  variant?: 'default' | 'bordered' | 'glow';
  type?: 'default' | 'media' | 'news' | 'service' | 'creative';
  className?: string;
}

export const Card: React.FC<CardProps> = ({
  header,
  footer,
  children,
  variant = 'default',
  type = 'default',
  className = '',
}) => {
  const variantClass = variant !== 'default' ? `card-${variant}` : '';
  const typeClass = type !== 'default' ? `card-${type}` : '';

  return (
    <div className={`aegov-card ${variantClass} ${typeClass} ${className}`.trim()}>
      {header && <div className="card-header">{header}</div>}
      <div className="card-body">{children}</div>
      {footer && <div className="card-footer">{footer}</div>}
    </div>
  );
};
```

---

## Essential Custom Hooks

Before converting interactive components, implement these custom hooks that match AEGOV's JavaScript patterns:

### useClickOutside Hook

```tsx
import { useEffect, RefObject } from 'react';

export const useClickOutside = (
  refs: Array<RefObject<HTMLElement> | HTMLElement | null>,
  handler: () => void
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      const clickedOutside = refs.every(ref => {
        const element = ref && 'current' in ref ? ref.current : ref;
        return !element || !element.contains(target);
      });

      if (clickedOutside) {
        handler();
      }
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [refs, handler]);
};
```

### useEscapeKey Hook

```tsx
import { useEffect } from 'react';

export const useEscapeKey = (handler: () => void, isActive = true) => {
  useEffect(() => {
    if (!isActive) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handler();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [handler, isActive]);
};
```

### useBodyScrollLock Hook

```tsx
import { useEffect } from 'react';

export const useBodyScrollLock = (isLocked: boolean) => {
  useEffect(() => {
    if (isLocked) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
      };
    }
  }, [isLocked]);
};
```

---

## JavaScript Source File References

For components requiring JavaScript functionality, reference these AEGOV source files:

| Component | Source File | Dependencies | Key Features |
|-----------|-------------|--------------|--------------|
| **Accordion** | [accordion.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/accordion/index.ts) | None | Single/multi-expand modes, callbacks |
| **Collapse** | [collapse.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/collapse/index.ts) | None | Toggle visibility |
| **Dismiss** | [dismiss.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/dismiss/index.ts) | None | Fade-out animation |
| **Dropdown** | [dropdown.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/dropdown/index.ts) | Popper.js | Click/hover triggers, positioning |
| **Modal** | [modal.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/modal/index.ts) | None | 9 placements, backdrop, keyboard |
| **Drawer** | [drawer.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/drawer/index.ts) | None | 4 directions, edge mode |
| **Tabs** | [tabs.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/tabs/index.ts) | None | Active state management |
| **Popover** | [popover.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/popover/index.ts) | Popper.js | Instance management |
| **Tooltip** | [tooltip.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/tooltip/index.ts) | Popper.js | Simple positioning |

**Reference Document:** See `AEGOV_JavaScript_Components_Reference.md` for complete technical details of each component's implementation, including:
- TypeScript interfaces and types
- Constructor parameters
- Public/private methods
- Event listeners
- Data attributes
- Default configuration
- Accessibility features

---

## Data Attributes to Props

### Modal Component

**JavaScript Reference:** [modal.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/modal/index.ts)

**HTML Data Attributes:**
```html
<!-- Trigger -->
<button data-modal-target="my-modal" data-modal-toggle="my-modal">
  Open Modal
</button>

<!-- Modal -->
<div id="my-modal" class="hidden">
  <div class="modal-content">
    <button data-modal-hide="my-modal">Close</button>
  </div>
</div>
```

**React Conversion:**
```tsx
type ModalPlacement =
  | 'top-left' | 'top-center' | 'top-right'
  | 'center-left' | 'center' | 'center-right'
  | 'bottom-left' | 'bottom-center' | 'bottom-right';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  placement?: ModalPlacement;
  backdrop?: 'static' | 'dynamic';
  backdropClasses?: string;
  closable?: boolean;
  type?: 'default' | 'serious';
  showCloseButton?: boolean;
  onShow?: () => void;
  onHide?: () => void;
  onToggle?: () => void;
}

const getPlacementClasses = (placement: ModalPlacement): string => {
  const placementMap = {
    'top-left': 'justify-start items-start',
    'top-center': 'justify-center items-start',
    'top-right': 'justify-end items-start',
    'center-left': 'justify-start items-center',
    'center': 'justify-center items-center',
    'center-right': 'justify-end items-center',
    'bottom-left': 'justify-start items-end',
    'bottom-center': 'justify-center items-end',
    'bottom-right': 'justify-end items-end',
  };
  return placementMap[placement];
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  children,
  size = 'md',
  placement = 'center',
  backdrop = 'dynamic',
  backdropClasses = 'aegov-modal-backdrop',
  closable = true,
  type = 'default',
  showCloseButton = true,
  onShow,
  onHide,
  onToggle,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Body scroll lock
  useBodyScrollLock(isOpen);

  // Escape key handler
  useEscapeKey(() => {
    if (closable) {
      onClose();
      onHide?.();
    }
  }, isOpen);

  // Lifecycle callbacks
  useEffect(() => {
    if (isOpen) {
      onShow?.();
    } else {
      onHide?.();
    }
  }, [isOpen, onShow, onHide]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (backdrop === 'dynamic' && e.target === e.currentTarget) {
      onClose();
      onToggle?.();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex ${getPlacementClasses(placement)}`}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
    >
      <div className={backdropClasses} />

      <div
        ref={modalRef}
        className={`relative bg-white rounded-lg shadow-xl modal-${size} ${type === 'serious' ? 'modal-serious' : ''}`.trim()}
      >
        {(title || showCloseButton) && (
          <div className="modal-header">
            {title && <h3>{title}</h3>}
            {showCloseButton && closable && (
              <button
                type="button"
                onClick={() => {
                  onClose();
                  onHide?.();
                }}
                className="modal-close"
                aria-label="Close modal"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            )}
          </div>
        )}

        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

// Usage:
const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Open Modal</button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Modal Title"
        placement="center"
        backdrop="dynamic"
        closable={true}
        onShow={() => console.log('Modal shown')}
        onHide={() => console.log('Modal hidden')}
      >
        <p>Modal content here</p>
      </Modal>
    </>
  );
};
```

### Accordion Component

**JavaScript Reference:** [accordion.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/accordion/index.ts)

**HTML Data Attributes:**
```html
<div class="aegov-accordion" data-accordion="collapse">
  <div class="accordion-item">
    <div class="accordion-title">
      <button data-accordion-target="#accordion-1" aria-expanded="false">
        Question 1
      </button>
    </div>
    <div id="accordion-1" class="accordion-content hidden">
      <div class="accordion-content-body">Answer 1</div>
    </div>
  </div>
</div>
```

**React Conversion:**
```tsx
interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  active?: boolean;
}

interface AccordionProps {
  items: AccordionItem[];
  alwaysOpen?: boolean;
  defaultOpenItems?: string[];
  iconPosition?: 'start' | 'end';
  activeClasses?: string;
  inactiveClasses?: string;
  onOpen?: (item: AccordionItem) => void;
  onClose?: (item: AccordionItem) => void;
  onToggle?: (item: AccordionItem) => void;
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  alwaysOpen = false,
  defaultOpenItems = [],
  iconPosition = 'end',
  activeClasses = 'accordion-active',
  inactiveClasses = 'accordion-inactive',
  onOpen,
  onClose,
  onToggle,
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(
    new Set(defaultOpenItems)
  );

  const toggleItem = (id: string) => {
    const item = items.find(i => i.id === id);
    if (!item) return;

    setOpenItems((prev) => {
      const next = new Set(prev);
      const wasOpen = next.has(id);

      if (wasOpen) {
        next.delete(id);
        onClose?.(item);
      } else {
        if (!alwaysOpen) {
          // Close all other items
          next.clear();
        }
        next.add(id);
        onOpen?.(item);
      }

      onToggle?.(item);
      return next;
    });
  };

  return (
    <div
      className="aegov-accordion"
      data-accordion={alwaysOpen ? 'open' : 'collapse'}
    >
      {items.map((item) => {
        const isOpen = openItems.has(item.id);

        return (
          <div key={item.id} className="accordion-item">
            <div className="accordion-title">
              <button
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
                className={`${iconPosition === 'start' ? 'icon-start' : ''} ${isOpen ? activeClasses : inactiveClasses}`.trim()}
              >
                {item.title}
              </button>
            </div>

            <div
              id={item.id}
              className={`accordion-content ${isOpen ? '' : 'hidden'}`}
            >
              <div className="accordion-content-body">
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// Usage:
const accordionItems: AccordionItem[] = [
  { id: 'item-1', title: 'Question 1', content: 'Answer 1' },
  { id: 'item-2', title: 'Question 2', content: 'Answer 2' },
  { id: 'item-3', title: 'Question 3', content: 'Answer 3' },
];

<Accordion
  items={accordionItems}
  alwaysOpen={false}
  onOpen={(item) => console.log('Opened:', item.id)}
  onClose={(item) => console.log('Closed:', item.id)}
/>
```

### Tabs Component

**JavaScript Reference:** [tabs.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/tabs/index.ts)

**HTML Data Attributes:**
```html
<div class="aegov-tabs">
  <ul class="tab-list" role="tablist">
    <li role="presentation">
      <button data-tabs-target="#tab-1" role="tab" aria-selected="true">
        Tab 1
      </button>
    </li>
  </ul>

  <div class="tab-content">
    <div id="tab-1" role="tabpanel">Content 1</div>
  </div>
</div>
```

**React Conversion:**
```tsx
interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabId?: string;
  variant?: 'default' | 'pills' | 'compact';
  activeClasses?: string;
  inactiveClasses?: string;
  onChange?: (tabId: string) => void;
  onShow?: (tab: Tab) => void;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  defaultTabId,
  variant = 'default',
  activeClasses = 'tab-active',
  inactiveClasses = 'tab-inactive',
  onChange,
  onShow,
}) => {
  const [activeTab, setActiveTab] = useState(defaultTabId || tabs[0]?.id);

  const handleTabChange = (tabId: string, forceShow = false) => {
    if (tabId === activeTab && !forceShow) return;

    const tab = tabs.find((t) => t.id === tabId);
    if (!tab || tab.disabled) return;

    setActiveTab(tabId);
    onChange?.(tabId);
    onShow?.(tab);
  };

  const handleKeyDown = (e: React.KeyboardEvent, currentIndex: number) => {
    let newIndex = currentIndex;

    if (e.key === 'ArrowRight') {
      newIndex = (currentIndex + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      newIndex = currentIndex === 0 ? tabs.length - 1 : currentIndex - 1;
    } else if (e.key === 'Home') {
      newIndex = 0;
    } else if (e.key === 'End') {
      newIndex = tabs.length - 1;
    } else {
      return;
    }

    e.preventDefault();
    const targetTab = tabs[newIndex];
    if (!targetTab.disabled) {
      handleTabChange(targetTab.id);
    }
  };

  const activeContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div
      className={`aegov-tabs ${variant !== 'default' ? `tabs-${variant}` : ''}`.trim()}
      data-tabs-toggle
    >
      <ul className="tab-list" role="tablist">
        {tabs.map((tab, index) => {
          const isActive = activeTab === tab.id;

          return (
            <li key={tab.id} role="presentation">
              <button
                role="tab"
                aria-selected={isActive}
                aria-controls={`${tab.id}-panel`}
                onClick={() => handleTabChange(tab.id)}
                onKeyDown={(e) => handleKeyDown(e, index)}
                disabled={tab.disabled}
                className={`${isActive ? activeClasses : inactiveClasses}`.trim()}
                data-tabs-target={`#${tab.id}-panel`}
              >
                {tab.icon && <span className="tab-icon">{tab.icon}</span>}
                {tab.label}
              </button>
            </li>
          );
        })}
      </ul>

      <div className="tab-content">
        <div
          id={`${activeTab}-panel`}
          role="tabpanel"
          aria-labelledby={activeTab}
        >
          {activeContent}
        </div>
      </div>
    </div>
  );
};
```

### Dropdown Component

**JavaScript Reference:** [dropdown.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/dropdown/index.ts) (requires Popper.js)

**HTML Data Attributes:**
```html
<button data-dropdown-toggle="dropdown-1">
  Dropdown
</button>

<div id="dropdown-1" class="hidden">
  <ul>
    <li><a href="#">Item 1</a></li>
  </ul>
</div>
```

**React Conversion:**
```tsx
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
  placement?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';
  header?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  items,
  placement = 'bottom-start',
  header,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger}
      </div>

      {isOpen && (
        <div className={`dropdown-menu absolute z-50 ${placement}`}>
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
                    >
                      {item.icon && <span>{item.icon}</span>}
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        item.onClick?.();
                        setIsOpen(false);
                      }}
                      disabled={item.disabled}
                    >
                      {item.icon && <span>{item.icon}</span>}
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
```

---

## Interactive Components

### Toast Notification System

**HTML:**
```html
<div class="aegov-toast toast-success">
  <p>Success message</p>
  <button data-dismiss-target="#toast-1">×</button>
</div>
```

**React:**
```tsx
interface Toast {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
  duration?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, 'id'>) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };

    setToasts((prev) => [...prev, newToast]);

    if (toast.duration !== 0) {
      setTimeout(() => {
        removeToast(id);
      }, toast.duration || 5000);
    }
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}

      <div className="fixed top-4 right-4 z-50 space-y-4">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`aegov-toast toast-${toast.type} animate-slide-in`}
          >
            <p>{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="toast-close"
              aria-label="Close"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within ToastProvider');
  }
  return context;
};

// Usage:
const MyComponent = () => {
  const { addToast } = useToast();

  return (
    <button onClick={() => addToast({ message: 'Success!', type: 'success' })}>
      Show Toast
    </button>
  );
};
```

### Alert Component

**JavaScript Reference:** Uses [dismiss.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/dismiss/index.ts) for dismissible functionality

**HTML:**
```html
<div class="aegov-alert alert-info" role="alert">
  <p>Info message</p>
  <button data-dismiss-target="#alert-1">×</button>
</div>
```

**React:**
```tsx
interface AlertProps {
  type: 'info' | 'error' | 'success' | 'warning';
  variant?: 'solid' | 'soft';
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type,
  variant = 'solid',
  children,
  dismissible = false,
  onDismiss,
  icon,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div
      className={`aegov-alert alert-${type} ${variant === 'soft' ? 'alert-soft' : ''}`.trim()}
      role="alert"
    >
      {icon && <span className="alert-icon">{icon}</span>}

      <div className="alert-content">
        {children}
      </div>

      {dismissible && (
        <button
          onClick={handleDismiss}
          className="alert-dismiss"
          aria-label="Dismiss alert"
        >
          ×
        </button>
      )}
    </div>
  );
};
```

### Popover Component

**JavaScript Reference:** [popover.ts](https://github.com/TDRA-ae/aegov-dls/blob/master/js/src/components/popover/index.ts) (requires Popper.js)

**HTML:**
```html
<button data-popover-target="popover-1" data-popover-trigger="hover">
  Hover me
</button>

<div id="popover-1" class="hidden" role="tooltip">
  <div class="popover-header">Title</div>
  <div class="popover-body">Content</div>
</div>
```

**React (using Popper.js):**
```tsx
import { usePopper } from 'react-popper';

interface PopoverProps {
  trigger: React.ReactNode;
  title?: string;
  content: React.ReactNode;
  placement?: 'top' | 'bottom' | 'left' | 'right';
  triggerType?: 'hover' | 'click';
}

export const Popover: React.FC<PopoverProps> = ({
  trigger,
  title,
  content,
  placement = 'top',
  triggerType = 'hover',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [referenceElement, setReferenceElement] = useState<HTMLDivElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(null);

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
  });

  const showPopover = () => setIsVisible(true);
  const hidePopover = () => setIsVisible(false);

  const triggerProps = triggerType === 'hover'
    ? { onMouseEnter: showPopover, onMouseLeave: hidePopover }
    : { onClick: () => setIsVisible(!isVisible) };

  return (
    <>
      <div ref={setReferenceElement} {...triggerProps}>
        {trigger}
      </div>

      {isVisible && (
        <div
          ref={setPopperElement}
          style={styles.popper}
          {...attributes.popper}
          className="popover z-50"
          role="tooltip"
        >
          {title && <div className="popover-header">{title}</div>}
          <div className="popover-body">{content}</div>
        </div>
      )}
    </>
  );
};
```

---

## Component-Specific Conversions

### Checkbox Group

**HTML:**
```html
<div class="aegov-form-control-checkbox-group">
  <div class="form-control-checkbox-item">
    <input type="checkbox" id="checkbox-1" name="options">
    <label for="checkbox-1">Option 1</label>
  </div>
</div>
```

**React:**
```tsx
interface CheckboxOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface CheckboxGroupProps {
  label: string;
  options: CheckboxOption[];
  value: string[];
  onChange: (value: string[]) => void;
  size?: 'sm' | 'base' | 'lg';
  variant?: 'primary' | 'secondary';
  layout?: 'vertical' | 'horizontal';
}

export const CheckboxGroup: React.FC<CheckboxGroupProps> = ({
  label,
  options,
  value,
  onChange,
  size = 'base',
  variant = 'primary',
  layout = 'vertical',
}) => {
  const handleChange = (optionValue: string, checked: boolean) => {
    if (checked) {
      onChange([...value, optionValue]);
    } else {
      onChange(value.filter((v) => v !== optionValue));
    }
  };

  return (
    <div className={`aegov-form-control-checkbox-group ${size !== 'base' ? `checkbox-${size}` : ''} ${variant === 'secondary' ? 'secondary' : ''}`.trim()}>
      <p className="form-control-checkbox-group-label">{label}</p>

      <div className={layout === 'horizontal' ? 'flex gap-4' : 'space-y-2'}>
        {options.map((option) => {
          const isChecked = value.includes(option.value);
          const id = `checkbox-${option.value}`;

          return (
            <div key={option.value} className="form-control-checkbox-item">
              <input
                type="checkbox"
                id={id}
                checked={isChecked}
                onChange={(e) => handleChange(option.value, e.target.checked)}
                disabled={option.disabled}
              />
              <label htmlFor={id}>
                {option.label}
                {option.description && (
                  <span className="checkbox-description">{option.description}</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

### Radio Group

**HTML:**
```html
<div class="aegov-form-control-radio-group">
  <div class="form-control-radio-item">
    <input type="radio" id="radio-1" name="radio-group">
    <label for="radio-1">Option 1</label>
  </div>
</div>
```

**React:**
```tsx
interface RadioOption {
  value: string;
  label: string;
  description?: string;
  disabled?: boolean;
}

interface RadioGroupProps {
  label: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  name: string;
  size?: 'sm' | 'base' | 'lg';
  variant?: 'primary' | 'secondary';
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  options,
  value,
  onChange,
  name,
  size = 'base',
  variant = 'primary',
}) => {
  return (
    <div className={`aegov-form-control-radio-group ${size !== 'base' ? `radio-${size}` : ''} ${variant === 'secondary' ? 'secondary' : ''}`.trim()}>
      <p className="form-control-radio-group-label">{label}</p>

      <div className="space-y-2">
        {options.map((option) => {
          const isChecked = value === option.value;
          const id = `${name}-${option.value}`;

          return (
            <div key={option.value} className="form-control-radio-item">
              <input
                type="radio"
                id={id}
                name={name}
                checked={isChecked}
                onChange={() => onChange(option.value)}
                disabled={option.disabled}
              />
              <label htmlFor={id}>
                {option.label}
                {option.description && (
                  <span className="radio-description">{option.description}</span>
                )}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

### Select Component

**HTML:**
```html
<div class="aegov-form-control">
  <label for="select-1">Select</label>
  <div class="form-control-input">
    <select id="select-1">
      <option>Option 1</option>
    </select>
  </div>
</div>
```

**React:**
```tsx
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  label: string;
  value: string | string[];
  onChange: (value: string | string[]) => void;
  options: SelectOption[];
  placeholder?: string;
  multiple?: boolean;
  size?: 'sm' | 'base' | 'lg';
  error?: string;
  helperText?: string;
  disabled?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Select: React.FC<SelectProps> = ({
  label,
  value,
  onChange,
  options,
  placeholder,
  multiple = false,
  size = 'base',
  error,
  helperText,
  disabled = false,
  variant = 'primary',
}) => {
  const id = `select-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hasError = !!error;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions).map((opt) => opt.value);
      onChange(selectedOptions);
    } else {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`aegov-form-control ${size !== 'base' ? `form-control-${size}` : ''} ${hasError ? 'error' : ''} ${variant === 'secondary' ? 'secondary' : ''}`.trim()}>
      <label htmlFor={id}>{label}</label>

      <div className="form-control-input">
        <select
          id={id}
          value={value}
          onChange={handleChange}
          multiple={multiple}
          disabled={disabled}
          aria-invalid={hasError}
        >
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="form-control-error">{error}</p>}
      {!error && helperText && <p className="form-control-helper">{helperText}</p>}
    </div>
  );
};
```

### Toggle (Switch) Component

**HTML:**
```html
<label class="aegov-toggle">
  <input type="checkbox">
  <span class="toggle-slider"></span>
  <span class="toggle-label">Enable feature</span>
</label>
```

**React:**
```tsx
interface ToggleProps {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  variant?: 'default' | 'success' | 'mode' | 'secondary';
  disabled?: boolean;
  labelPosition?: 'left' | 'right';
}

export const Toggle: React.FC<ToggleProps> = ({
  label,
  checked,
  onChange,
  variant = 'default',
  disabled = false,
  labelPosition = 'right',
}) => {
  return (
    <label className={`aegov-toggle ${variant !== 'default' ? `toggle-${variant}` : ''} ${disabled ? 'disabled' : ''}`.trim()}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
      />
      <span className="toggle-slider" />
      {label && (
        <span className={`toggle-label ${labelPosition === 'left' ? 'order-first' : ''}`}>
          {label}
        </span>
      )}
    </label>
  );
};
```

### File Input Component

**HTML:**
```html
<div class="aegov-form-control">
  <label for="file-upload">Upload file</label>
  <div class="form-control-file-input">
    <input type="file" id="file-upload">
  </div>
</div>
```

**React:**
```tsx
interface FileInputProps {
  label: string;
  onChange: (files: FileList | null) => void;
  accept?: string;
  multiple?: boolean;
  error?: string;
  helperText?: string;
  disabled?: boolean;
  placeholder?: string;
}

export const FileInput: React.FC<FileInputProps> = ({
  label,
  onChange,
  accept,
  multiple = false,
  error,
  helperText,
  disabled = false,
  placeholder = 'Choose file(s)',
}) => {
  const [fileNames, setFileNames] = useState<string[]>([]);
  const id = `file-${label.toLowerCase().replace(/\s+/g, '-')}`;
  const hasError = !!error;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    onChange(files);

    if (files) {
      setFileNames(Array.from(files).map((file) => file.name));
    } else {
      setFileNames([]);
    }
  };

  return (
    <div className={`aegov-form-control ${hasError ? 'error' : ''}`.trim()}>
      <label htmlFor={id}>{label}</label>

      <div className="form-control-file-input">
        <input
          type="file"
          id={id}
          onChange={handleChange}
          accept={accept}
          multiple={multiple}
          disabled={disabled}
          aria-invalid={hasError}
        />
        <label htmlFor={id}>
          {fileNames.length > 0 ? fileNames.join(', ') : placeholder}
        </label>
      </div>

      {error && <p className="form-control-error">{error}</p>}
      {!error && helperText && <p className="form-control-helper">{helperText}</p>}
    </div>
  );
};
```

### Breadcrumbs Component

**HTML:**
```html
<nav aria-label="Breadcrumb">
  <ol class="aegov-breadcrumbs" itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a href="/" itemprop="item">
        <span itemprop="name">Home</span>
      </a>
      <meta itemprop="position" content="1" />
    </li>
  </ol>
</nav>
```

**React:**
```tsx
interface BreadcrumbItem {
  label: string;
  href?: string;
  icon?: React.ReactNode;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  separator?: React.ReactNode;
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({
  items,
  separator,
}) => {
  return (
    <nav aria-label="Breadcrumb">
      <ol
        className="aegov-breadcrumbs"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li
              key={index}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {item.href && !isLast ? (
                <a href={item.href} itemProp="item">
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span itemProp="name">{item.label}</span>
                </a>
              ) : (
                <>
                  {item.icon && <span className="breadcrumb-icon">{item.icon}</span>}
                  <span itemProp="name" aria-current={isLast ? 'page' : undefined}>
                    {item.label}
                  </span>
                </>
              )}
              <meta itemProp="position" content={String(index + 1)} />

              {!isLast && (
                <span className="breadcrumb-separator" aria-hidden="true">
                  {separator || '/'}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
```

### Pagination Component

**HTML:**
```html
<nav class="aegov-pagination" aria-label="Pagination">
  <ul>
    <li><a href="#">Previous</a></li>
    <li><a href="#" class="active">1</a></li>
    <li><a href="#">Next</a></li>
  </ul>
</nav>
```

**React:**
```tsx
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  maxVisible?: number;
  showFirstLast?: boolean;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  maxVisible = 5,
  showFirstLast = true,
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const halfVisible = Math.floor(maxVisible / 2);

    let startPage = Math.max(1, currentPage - halfVisible);
    let endPage = Math.min(totalPages, currentPage + halfVisible);

    if (currentPage - halfVisible < 1) {
      endPage = Math.min(totalPages, endPage + (halfVisible - currentPage + 1));
    }

    if (currentPage + halfVisible > totalPages) {
      startPage = Math.max(1, startPage - (currentPage + halfVisible - totalPages));
    }

    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) pages.push('...');
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) pages.push('...');
      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <nav className="aegov-pagination" aria-label="Pagination">
      <ul>
        {showFirstLast && currentPage > 1 && (
          <li>
            <button onClick={() => onPageChange(1)} aria-label="Go to first page">
              First
            </button>
          </li>
        )}

        <li>
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            aria-label="Go to previous page"
          >
            Previous
          </button>
        </li>

        {getPageNumbers().map((page, index) => {
          if (page === '...') {
            return (
              <li key={`ellipsis-${index}`}>
                <span className="pagination-ellipsis">...</span>
              </li>
            );
          }

          const pageNum = page as number;
          const isActive = pageNum === currentPage;

          return (
            <li key={pageNum}>
              <button
                onClick={() => onPageChange(pageNum)}
                className={isActive ? 'active' : ''}
                aria-current={isActive ? 'page' : undefined}
                aria-label={`Go to page ${pageNum}`}
              >
                {pageNum}
              </button>
            </li>
          );
        })}

        <li>
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            aria-label="Go to next page"
          >
            Next
          </button>
        </li>

        {showFirstLast && currentPage < totalPages && (
          <li>
            <button onClick={() => onPageChange(totalPages)} aria-label="Go to last page">
              Last
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
};
```

### Steps Component

**HTML:**
```html
<ol class="aegov-steps">
  <li class="step-item active">
    <span class="step-number">1</span>
    <span class="step-title">Step 1</span>
  </li>
</ol>
```

**React:**
```tsx
interface Step {
  title: string;
  description?: string;
}

interface StepsProps {
  steps: Step[];
  currentStep: number;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'base' | 'lg';
}

export const Steps: React.FC<StepsProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  size = 'base',
}) => {
  return (
    <ol className={`aegov-steps ${orientation === 'vertical' ? 'steps-vertical' : ''} ${size !== 'base' ? `steps-${size}` : ''}`.trim()}>
      {steps.map((step, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;
        const isFuture = stepNumber > currentStep;

        return (
          <li
            key={index}
            className={`step-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''} ${isFuture ? 'future' : ''}`.trim()}
          >
            <span className="step-number">{stepNumber}</span>
            <div className="step-content">
              <span className="step-title">{step.title}</span>
              {step.description && (
                <span className="step-description">{step.description}</span>
              )}
            </div>
          </li>
        );
      })}
    </ol>
  );
};
```

### Badge Component

**HTML:**
```html
<span class="aegov-badge badge-soft badge-info">Info</span>
```

**React:**
```tsx
interface BadgeProps {
  children: React.ReactNode;
  variant?: 'soft' | 'solid';
  color?: 'primary' | 'success' | 'error' | 'info';
  size?: 'sm' | 'base' | 'lg';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'solid',
  color = 'primary',
  size = 'base',
  icon,
  className = '',
}) => {
  return (
    <span
      className={`aegov-badge badge-${variant} badge-${color} ${size !== 'base' ? `badge-${size}` : ''} ${className}`.trim()}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      {children}
    </span>
  );
};
```

### Avatar Component

**HTML:**
```html
<div class="aegov-avatar avatar-lg">
  <img src="avatar.jpg" alt="User name">
</div>
```

**React:**
```tsx
interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';
  shape?: 'square' | 'rounded';
  status?: 'online' | 'offline' | 'busy' | 'away';
  initials?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'base',
  shape = 'rounded',
  status,
  initials,
}) => {
  return (
    <div
      className={`aegov-avatar ${size !== 'base' ? `avatar-${size}` : ''} ${shape === 'square' ? 'avatar-square' : ''} ${status ? `status-${status}` : ''}`.trim()}
    >
      {src ? (
        <img src={src} alt={alt} />
      ) : initials ? (
        <span className="avatar-initials">{initials}</span>
      ) : (
        <span className="avatar-placeholder">
          <svg className="w-full h-full" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </span>
      )}
    </div>
  );
};
```

### Banner Component

**HTML:**
```html
<div class="aegov-banner banner-top">
  <p>Important announcement</p>
  <button data-dismiss-target="#banner-1">×</button>
</div>
```

**React:**
```tsx
interface BannerProps {
  children: React.ReactNode;
  position?: 'top' | 'bottom';
  color?: 'primary' | 'success' | 'error' | 'info' | 'warning';
  dismissible?: boolean;
  onDismiss?: () => void;
  icon?: React.ReactNode;
}

export const Banner: React.FC<BannerProps> = ({
  children,
  position = 'top',
  color = 'primary',
  dismissible = false,
  onDismiss,
  icon,
}) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
    onDismiss?.();
  };

  if (!isVisible) return null;

  return (
    <div className={`aegov-banner banner-${position} ${color !== 'primary' ? `banner-${color}` : ''}`.trim()}>
      {icon && <span className="banner-icon">{icon}</span>}

      <div className="banner-content">
        {children}
      </div>

      {dismissible && (
        <button
          onClick={handleDismiss}
          className="banner-dismiss"
          aria-label="Dismiss banner"
        >
          ×
        </button>
      )}
    </div>
  );
};
```

---

## Block Conversions

### Header Block

**HTML Structure:**
```html
<header class="aegov-header">
  <div class="header-top">
    <!-- Logo, language switcher -->
  </div>
  <nav class="header-nav">
    <!-- Primary and secondary navigation -->
  </nav>
</header>
```

**React:**
```tsx
interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

interface HeaderProps {
  logo: {
    src: string;
    alt: string;
    href: string;
  };
  emblem: {
    src: string;
    alt: string;
  };
  primaryNav: NavItem[];
  secondaryNav?: NavItem[];
  currentLang: 'en' | 'ar';
  onLangChange: (lang: 'en' | 'ar') => void;
  searchPlaceholder?: string;
  onSearch?: (query: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  logo,
  emblem,
  primaryNav,
  secondaryNav,
  currentLang,
  onLangChange,
  searchPlaceholder,
  onSearch,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch?.(searchQuery);
  };

  return (
    <header className="aegov-header">
      <div className="header-top">
        <div className="container flex items-center justify-between">
          <a href={logo.href} className="header-logo">
            <img src={logo.src} alt={logo.alt} />
          </a>

          <div className="header-emblem">
            <img src={emblem.src} alt={emblem.alt} />
          </div>

          <div className="header-actions">
            <button
              onClick={() => onLangChange(currentLang === 'en' ? 'ar' : 'en')}
              className="lang-switcher"
            >
              {currentLang === 'en' ? 'العربية' : 'English'}
            </button>

            {onSearch && (
              <form onSubmit={handleSearch} className="header-search">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                />
              </form>
            )}

            <button
              className="mobile-menu-toggle lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Toggle menu</span>
              ☰
            </button>
          </div>
        </div>
      </div>

      <nav className={`header-nav ${isMobileMenuOpen ? 'open' : ''}`.trim()}>
        <div className="container">
          <ul className="primary-nav">
            {primaryNav.map((item, index) => (
              <li key={index}>
                <a href={item.href}>{item.label}</a>
                {item.children && (
                  <ul className="dropdown-menu">
                    {item.children.map((child, childIndex) => (
                      <li key={childIndex}>
                        <a href={child.href}>{child.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {secondaryNav && (
            <ul className="secondary-nav">
              {secondaryNav.map((item, index) => (
                <li key={index}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};
```

### Footer Block

**HTML Structure:**
```html
<footer class="aegov-footer">
  <div class="footer-nav">
    <!-- Footer navigation links -->
  </div>
  <div class="footer-bottom">
    <!-- Copyright and social media -->
  </div>
</footer>
```

**React:**
```tsx
interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface SocialLink {
  platform: string;
  href: string;
  icon: React.ReactNode;
}

interface FooterProps {
  sections: FooterSection[];
  contact?: {
    phone: string;
    email: string;
  };
  social: SocialLink[];
  copyright: string;
  bottomLinks?: FooterLink[];
}

export const Footer: React.FC<FooterProps> = ({
  sections,
  contact,
  social,
  copyright,
  bottomLinks,
}) => {
  return (
    <footer className="aegov-footer">
      <div className="footer-nav">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sections.map((section, index) => (
              <div key={index} className="footer-section">
                <h3 className="footer-section-title">{section.title}</h3>
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.href}>{link.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {contact && (
              <div className="footer-section">
                <h3 className="footer-section-title">Contact Us</h3>
                <ul className="footer-contact">
                  <li>
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </li>
                  <li>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="footer-copyright">{copyright}</p>

          <div className="footer-social">
            {social.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {bottomLinks && (
            <ul className="footer-bottom-links">
              {bottomLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </footer>
  );
};
```

### Hero Block (Static Variant)

**HTML:**
```html
<section class="aegov-hero">
  <div class="hero-content">
    <h1>Hero Title</h1>
    <p>Hero description</p>
    <a href="#" class="aegov-btn">CTA Button</a>
  </div>
</section>
```

**React:**
```tsx
interface HeroProps {
  title: string;
  description?: string;
  cta?: {
    label: string;
    href: string;
    onClick?: () => void;
  };
  backgroundImage?: string;
  variant?: 'static' | 'split' | 'fullwidth';
  image?: string;
  imagePosition?: 'left' | 'right';
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  cta,
  backgroundImage,
  variant = 'static',
  image,
  imagePosition = 'right',
}) => {
  const style = backgroundImage
    ? { backgroundImage: `url(${backgroundImage})` }
    : undefined;

  return (
    <section
      className={`aegov-hero hero-${variant}`}
      style={style}
    >
      <div className="container">
        <div className={variant === 'split' ? `grid grid-cols-1 lg:grid-cols-2 gap-8 ${imagePosition === 'left' ? 'lg:flex-row-reverse' : ''}` : ''}>
          <div className="hero-content">
            <h1 className="hero-title">{title}</h1>
            {description && <p className="hero-description">{description}</p>}
            {cta && (
              <a
                href={cta.href}
                onClick={cta.onClick}
                className="aegov-btn btn-lg"
              >
                {cta.label}
              </a>
            )}
          </div>

          {variant === 'split' && image && (
            <div className="hero-image">
              <img src={image} alt="" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
```

### Filter Block

**HTML:**
```html
<div class="aegov-filter">
  <form>
    <div class="filter-group">
      <label>Category</label>
      <select>...</select>
    </div>
  </form>
</div>
```

**React:**
```tsx
interface FilterField {
  name: string;
  label: string;
  type: 'text' | 'select' | 'checkbox' | 'radio' | 'range';
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
}

interface FilterProps {
  fields: FilterField[];
  values: Record<string, any>;
  onChange: (name: string, value: any) => void;
  onSubmit: () => void;
  onReset: () => void;
  bordered?: boolean;
}

export const Filter: React.FC<FilterProps> = ({
  fields,
  values,
  onChange,
  onSubmit,
  onReset,
  bordered = false,
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className={`aegov-filter ${bordered ? 'filter-bordered' : ''}`.trim()}>
      <form onSubmit={handleSubmit}>
        <div className="filter-groups">
          {fields.map((field) => (
            <div key={field.name} className="filter-group">
              <label>{field.label}</label>

              {field.type === 'select' && (
                <select
                  value={values[field.name] || ''}
                  onChange={(e) => onChange(field.name, e.target.value)}
                >
                  <option value="">All</option>
                  {field.options?.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              )}

              {field.type === 'text' && (
                <input
                  type="text"
                  value={values[field.name] || ''}
                  onChange={(e) => onChange(field.name, e.target.value)}
                />
              )}

              {field.type === 'range' && (
                <input
                  type="range"
                  min={field.min}
                  max={field.max}
                  value={values[field.name] || field.min}
                  onChange={(e) => onChange(field.name, Number(e.target.value))}
                />
              )}

              {field.type === 'checkbox' && field.options && (
                <div className="space-y-2">
                  {field.options.map((opt) => (
                    <label key={opt.value} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={values[field.name]?.includes(opt.value) || false}
                        onChange={(e) => {
                          const current = values[field.name] || [];
                          const updated = e.target.checked
                            ? [...current, opt.value]
                            : current.filter((v: string) => v !== opt.value);
                          onChange(field.name, updated);
                        }}
                      />
                      {opt.label}
                    </label>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="filter-actions">
          <button type="submit" className="aegov-btn">
            Apply Filters
          </button>
          <button
            type="button"
            onClick={onReset}
            className="aegov-btn btn-outline"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
```

---

## TypeScript Interfaces

### Common Interfaces

```typescript
// Base component props
interface BaseComponentProps {
  className?: string;
  id?: string;
  'aria-label'?: string;
  'aria-describedby'?: string;
}

// Size variants
type Size = 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl';

// Color variants
type Color = 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info';

// Button variants
type ButtonVariant = 'solid' | 'outline' | 'soft' | 'link';

// Form control state
interface FormControlState {
  value: string;
  error?: string;
  touched: boolean;
  dirty: boolean;
}

// Form context
interface FormContextType {
  values: Record<string, any>;
  errors: Record<string, string>;
  touched: Record<string, boolean>;
  handleChange: (name: string, value: any) => void;
  handleBlur: (name: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
  resetForm: () => void;
}
```

### Component Prop Interfaces

```typescript
// All form components
interface FormControlProps extends BaseComponentProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  helperText?: string;
  required?: boolean;
  disabled?: boolean;
  size?: Extract<Size, 'sm' | 'base' | 'lg'>;
  variant?: 'primary' | 'secondary';
}

// Interactive components
interface InteractiveComponentProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  closeOnEscape?: boolean;
  closeOnBackdrop?: boolean;
}

// Navigation components
interface NavigationItemProps {
  label: string;
  href?: string;
  onClick?: () => void;
  active?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: NavigationItemProps[];
}
```

---

## Best Practices

### 1. Class Name Management

Use a helper function for conditional classes:

```typescript
const classNames = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};

// Usage:
<div className={classNames(
  'aegov-btn',
  variant !== 'solid' && `btn-${variant}`,
  size !== 'base' && `btn-${size}`,
  disabled && 'opacity-50',
  className
)} />
```

Or use the `clsx` library:

```typescript
import clsx from 'clsx';

<div className={clsx(
  'aegov-btn',
  {
    [`btn-${variant}`]: variant !== 'solid',
    [`btn-${size}`]: size !== 'base',
    'opacity-50': disabled,
  },
  className
)} />
```

### 2. Ref Forwarding

For components that need DOM access:

```typescript
export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, ...props }, ref) => {
    return (
      <div className="aegov-form-control">
        <label>{label}</label>
        <input ref={ref} {...props} />
      </div>
    );
  }
);

Input.displayName = 'Input';
```

### 3. Compound Components

For complex components like Card:

```typescript
interface CardComposition {
  Header: React.FC<{ children: React.ReactNode }>;
  Body: React.FC<{ children: React.ReactNode }>;
  Footer: React.FC<{ children: React.ReactNode }>;
}

export const Card: React.FC<CardProps> & CardComposition = ({ children, ...props }) => {
  return <div className="aegov-card" {...props}>{children}</div>;
};

Card.Header = ({ children }) => <div className="card-header">{children}</div>;
Card.Body = ({ children }) => <div className="card-body">{children}</div>;
Card.Footer = ({ children }) => <div className="card-footer">{children}</div>;

// Usage:
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### 4. Controlled vs Uncontrolled

Provide both patterns when appropriate:

```typescript
interface InputProps {
  // Controlled
  value?: string;
  onChange?: (value: string) => void;

  // Uncontrolled
  defaultValue?: string;
}

export const Input: React.FC<InputProps> = ({
  value: controlledValue,
  onChange,
  defaultValue,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue || '');

  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const handleChange = (newValue: string) => {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onChange?.(newValue);
  };

  return <input value={value} onChange={(e) => handleChange(e.target.value)} {...props} />;
};
```

### 5. Accessibility

Always include proper ARIA attributes:

```typescript
export const Modal: React.FC<ModalProps> = ({ isOpen, title, children, onClose }) => {
  const titleId = useId();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      hidden={!isOpen}
    >
      <h2 id={titleId}>{title}</h2>
      {children}
      <button onClick={onClose} aria-label="Close modal">×</button>
    </div>
  );
};
```

### 6. Event Handling

Combine native events with custom handlers:

```typescript
export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Custom logic here
    onClick?.(e);
  };

  return (
    <button onClick={handleClick} {...props}>
      {children}
    </button>
  );
};
```

### 7. RTL Support

Add RTL-aware styles using Tailwind's RTL utilities:

```typescript
export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="aegov-breadcrumbs" dir="auto">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span>{item.label}</span>
          {index < items.length - 1 && (
            <span className="mx-2 rtl:rotate-180">→</span>
          )}
        </li>
      ))}
    </nav>
  );
};
```

### 8. Custom Hooks

Extract reusable logic:

```typescript
// useToggle hook
export const useToggle = (initialValue = false) => {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => setValue((v) => !v), []);
  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse }] as const;
};

// useClickOutside hook
export const useClickOutside = (ref: RefObject<HTMLElement>, handler: () => void) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }
      handler();
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

// useDisclosure hook (for modals, drawers, etc.)
export const useDisclosure = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);
  const toggle = useCallback(() => setIsOpen((prev) => !prev), []);

  return { isOpen, open, close, toggle };
};

// Usage:
const MyComponent = () => {
  const modal = useDisclosure();

  return (
    <>
      <button onClick={modal.open}>Open Modal</button>
      <Modal isOpen={modal.isOpen} onClose={modal.close}>
        Content
      </Modal>
    </>
  );
};
```

### 9. Form Management

Create a reusable form context:

```typescript
interface FormConfig<T> {
  initialValues: T;
  validate?: (values: T) => Record<string, string>;
  onSubmit: (values: T) => void | Promise<void>;
}

export const useForm = <T extends Record<string, any>>({
  initialValues,
  validate,
  onSubmit,
}: FormConfig<T>) => {
  const [values, setValues] = useState<T>(initialValues);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name: string, value: any) => {
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when field changes
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleBlur = (name: string) => {
    setTouched((prev) => ({ ...prev, [name]: true }));

    // Validate on blur
    if (validate) {
      const fieldErrors = validate(values);
      if (fieldErrors[name]) {
        setErrors((prev) => ({ ...prev, [name]: fieldErrors[name] }));
      }
    }
  };

  const handleSubmit = async (e?: React.FormEvent) => {
    e?.preventDefault();

    // Validate all fields
    if (validate) {
      const validationErrors = validate(values);
      if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setTouched(
          Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {})
        );
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  };
};

// Usage:
const MyForm = () => {
  const form = useForm({
    initialValues: { email: '', password: '' },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email) errors.email = 'Email is required';
      if (!values.password) errors.password = 'Password is required';
      return errors;
    },
    onSubmit: async (values) => {
      console.log('Submit:', values);
    },
  });

  return (
    <form onSubmit={form.handleSubmit}>
      <Input
        label="Email"
        value={form.values.email}
        onChange={(value) => form.handleChange('email', value)}
        error={form.touched.email ? form.errors.email : undefined}
      />
      <button type="submit" disabled={form.isSubmitting}>
        Submit
      </button>
    </form>
  );
};
```

### 10. Component Documentation

Use JSDoc for better IDE support:

```typescript
/**
 * AEGOV Button component
 *
 * @example
 * ```tsx
 * <Button variant="solid" size="lg" onClick={() => alert('Clicked')}>
 *   Click me
 * </Button>
 * ```
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'solid',
  size = 'base',
  ...props
}) => {
  // Implementation
};
```

---

## Conversion Checklist

When converting an AEGOV component to React:

- [ ] Identify all HTML elements and their classes
- [ ] List all data attributes and their purposes
- [ ] Define TypeScript interface for props
- [ ] Convert static content to props
- [ ] Convert data attributes to event handlers
- [ ] Add state management for interactive elements
- [ ] Preserve all ARIA attributes
- [ ] Handle keyboard navigation (if applicable)
- [ ] Add proper TypeScript types
- [ ] Test with various prop combinations
- [ ] Verify accessibility (screen reader, keyboard)
- [ ] Test RTL support (for bilingual components)
- [ ] Add JSDoc documentation
- [ ] Create usage examples

---

## Next Steps

1. Start converting components one by one
2. Create a component library structure (`src/components/`)
3. Build a component showcase (Storybook or similar)
4. Create unit tests for each component
5. Document component APIs
6. Build example pages using AEGOV blocks

---

## Creating New Components: Step-by-Step Workflow

When adding a new AEGOV component to the project, follow this TDD (Test-Driven Development) workflow:

### Step 1: Create Component Structure

Create the component files in the appropriate directory based on the component type:

**UI Components:**
```
src/shared/components/ui/ComponentName/
├── ComponentName.tsx          # Component implementation
├── ComponentName.types.ts     # TypeScript interfaces
├── ComponentName.test.tsx     # Unit tests
├── ComponentName.stories.tsx  # Storybook stories
└── index.ts                   # Barrel export
```

**Form Components:**
```
src/shared/components/forms/ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
├── ComponentName.test.tsx
├── ComponentName.stories.tsx
└── index.ts
```

### Step 2: Define TypeScript Types

**ComponentName.types.ts:**
```typescript
export interface ComponentNameProps {
  // Core props
  children?: React.ReactNode;

  // Variants
  variant?: 'solid' | 'outline' | 'soft';
  size?: 'xs' | 'sm' | 'base' | 'lg';
  color?: 'primary' | 'secondary';

  // States
  disabled?: boolean;
  loading?: boolean;

  // Callbacks
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  onChange?: (value: string) => void;

  // Accessibility
  'aria-label'?: string;
  'aria-describedby'?: string;

  // Styling
  className?: string;
}
```

### Step 3: Write Unit Tests (TDD)

**ComponentName.test.tsx:**
```typescript
import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './ComponentName';

describe('ComponentName', () => {
  describe('Rendering', () => {
    it('renders with default props', () => {
      render(<ComponentName>Test</ComponentName>);
      expect(screen.getByText('Test')).toBeInTheDocument();
    });

    it('applies custom className', () => {
      const { container } = render(
        <ComponentName className="custom-class">Test</ComponentName>
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });
  });

  describe('Variants', () => {
    it('renders solid variant (default)', () => {
      const { container } = render(<ComponentName>Test</ComponentName>);
      expect(container.firstChild).toHaveClass('aegov-component-name');
    });

    it('renders outline variant', () => {
      const { container } = render(
        <ComponentName variant="outline">Test</ComponentName>
      );
      expect(container.firstChild).toHaveClass('component-outline');
    });
  });

  describe('Sizes', () => {
    it('renders base size (default)', () => {
      const { container } = render(<ComponentName>Test</ComponentName>);
      expect(container.firstChild).not.toHaveClass('component-xs');
    });

    it('renders lg size', () => {
      const { container } = render(
        <ComponentName size="lg">Test</ComponentName>
      );
      expect(container.firstChild).toHaveClass('component-lg');
    });
  });

  describe('States', () => {
    it('handles disabled state', () => {
      render(<ComponentName disabled>Test</ComponentName>);
      expect(screen.getByText('Test')).toBeDisabled();
    });

    it('handles loading state', () => {
      render(<ComponentName loading>Test</ComponentName>);
      expect(screen.getByRole('status')).toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('handles click events', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ComponentName onClick={handleClick}>Test</ComponentName>);
      await user.click(screen.getByText('Test'));

      expect(handleClick).toHaveBeenCalledTimes(1);
    });

    it('does not fire click when disabled', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(
        <ComponentName onClick={handleClick} disabled>Test</ComponentName>
      );
      await user.click(screen.getByText('Test'));

      expect(handleClick).not.toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes', () => {
      render(
        <ComponentName aria-label="Test component">Test</ComponentName>
      );
      expect(screen.getByLabelText('Test component')).toBeInTheDocument();
    });

    it('supports keyboard navigation', async () => {
      const user = userEvent.setup();
      const handleClick = vi.fn();

      render(<ComponentName onClick={handleClick}>Test</ComponentName>);

      const element = screen.getByText('Test');
      element.focus();
      await user.keyboard('{Enter}');

      expect(handleClick).toHaveBeenCalled();
    });
  });
});
```

### Step 4: Implement Component

**ComponentName.tsx:**
```typescript
import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ComponentNameProps } from './ComponentName.types';

export const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  (
    {
      children,
      variant = 'solid',
      size = 'base',
      color = 'primary',
      disabled = false,
      loading = false,
      className,
      onClick,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const classes = clsx(
      'aegov-component-name',
      {
        'component-outline': variant === 'outline',
        'component-soft': variant === 'soft',
      },
      {
        'component-xs': size === 'xs',
        'component-sm': size === 'sm',
        'component-lg': size === 'lg',
      },
      {
        'component-secondary': color === 'secondary',
      },
      className
    );

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      if (isDisabled) {
        e.preventDefault();
        return;
      }
      onClick?.(e);
    };

    return (
      <motion.div
        ref={ref}
        className={classes}
        onClick={handleClick}
        aria-disabled={isDisabled}
        whileHover={isDisabled ? undefined : { scale: 1.02 }}
        whileTap={isDisabled ? undefined : { scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
        {...rest}
      >
        {loading && (
          <span role="status" aria-label="Loading">
            {/* Loading spinner */}
          </span>
        )}
        {children}
      </motion.div>
    );
  }
);

ComponentName.displayName = 'ComponentName';
```

### Step 5: Create Barrel Export

**index.ts:**
```typescript
export { ComponentName } from './ComponentName';
export type { ComponentNameProps } from './ComponentName.types';
```

### Step 6: Update Parent Barrel Exports

**src/shared/components/ui/index.ts:**
```typescript
export * from './Button';
export * from './ComponentName'; // Add new component
```

**src/shared/components/index.ts:**
```typescript
export * from './ui';
export * from './forms';
export * from './layout';
```

### Step 7: Create Storybook Stories

**ComponentName.stories.tsx:**
```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { ComponentName } from './ComponentName';

/**
 * ComponentName based on UAE Government Design System.
 *
 * Brief description of what this component does and when to use it.
 */
const meta = {
  title: 'UI Components/ComponentName',
  component: ComponentName,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Detailed description of the component, its features, and usage guidelines.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'soft'],
      description: 'Visual style variant',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'solid' },
      },
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'base', 'lg'],
      description: 'Component size',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'base' },
      },
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary'],
      description: 'Color scheme',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
  },
} satisfies Meta<typeof ComponentName>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story
export const Default: Story = {
  args: {
    children: 'Component Name',
  },
};

// Variants
export const Solid: Story = {
  args: {
    variant: 'solid',
    children: 'Solid Variant',
  },
};

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline Variant',
  },
};

export const Soft: Story = {
  args: {
    variant: 'soft',
    children: 'Soft Variant',
  },
};

// Sizes
export const ExtraSmall: Story = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
};

export const Small: Story = {
  args: {
    size: 'sm',
    children: 'Small',
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Large',
  },
};

// States
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    children: 'Loading...',
  },
};

// Showcase - All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4" style={{ width: '300px' }}>
      <ComponentName variant="solid">Solid</ComponentName>
      <ComponentName variant="outline">Outline</ComponentName>
      <ComponentName variant="soft">Soft</ComponentName>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All component variants displayed together for comparison.',
      },
    },
  },
};

// Showcase - All Sizes
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <ComponentName size="xs">XS</ComponentName>
      <ComponentName size="sm">SM</ComponentName>
      <ComponentName size="base">Base</ComponentName>
      <ComponentName size="lg">LG</ComponentName>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'All component sizes displayed together for comparison.',
      },
    },
  },
};

// Interactive Example
export const Interactive: Story = {
  render: () => {
    const [count, setCount] = useState(0);

    return (
      <ComponentName onClick={() => setCount(count + 1)}>
        Clicked {count} times
      </ComponentName>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Interactive example demonstrating component behavior.',
      },
    },
  },
};
```

### Step 8: Create E2E Tests

**e2e/component-name.spec.ts:**
```typescript
import { test, expect } from '@playwright/test';
import { checkAccessibility } from './utils/aegov-helpers';

test.describe('ComponentName E2E Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/'); // Update with actual route
  });

  test('renders correctly', async ({ page }) => {
    const component = page.locator('.aegov-component-name').first();
    await expect(component).toBeVisible();
  });

  test('handles click interactions', async ({ page }) => {
    const component = page.locator('.aegov-component-name').first();
    await component.click();
    // Assert expected behavior
  });

  test('meets accessibility standards', async ({ page }) => {
    await checkAccessibility(page);
  });

  test('supports keyboard navigation', async ({ page }) => {
    const component = page.locator('.aegov-component-name').first();
    await component.focus();
    await page.keyboard.press('Enter');
    // Assert expected behavior
  });

  test('supports RTL layout', async ({ page }) => {
    await page.evaluate(() => {
      document.documentElement.setAttribute('dir', 'rtl');
    });

    const component = page.locator('.aegov-component-name').first();
    await expect(component).toBeVisible();
  });
});
```

### Step 9: Run Tests and Verify

Run the following commands to ensure everything works:

```bash
# Run linter
npm run lint

# Run unit tests
npm run test

# Run E2E tests (when needed)
npm run test:e2e

# Run Storybook to verify documentation
npm run storybook
```

### Step 10: Document Usage

Add a usage example in the component file or README:

```typescript
/**
 * @example
 * Basic usage:
 * ```tsx
 * <ComponentName variant="solid" size="lg">
 *   Click me
 * </ComponentName>
 * ```
 *
 * @example
 * With loading state:
 * ```tsx
 * <ComponentName loading onClick={handleClick}>
 *   Loading...
 * </ComponentName>
 * ```
 *
 * @example
 * Disabled state:
 * ```tsx
 * <ComponentName disabled>
 *   Cannot click
 * </ComponentName>
 * ```
 */
```

### Workflow Summary

1. ✅ Create component file structure
2. ✅ Define TypeScript types
3. ✅ Write unit tests (TDD approach)
4. ✅ Implement component to pass tests
5. ✅ Create barrel exports
6. ✅ Update parent barrel exports
7. ✅ Create Storybook stories
8. ✅ Create E2E tests
9. ✅ Run all tests and linter
10. ✅ Document component usage

### Quick Reference Checklist

- [ ] Component files created in correct directory
- [ ] TypeScript interfaces defined
- [ ] Unit tests written and passing
- [ ] Component implementation complete
- [ ] Barrel exports updated
- [ ] Storybook stories created
- [ ] E2E tests created
- [ ] Accessibility verified
- [ ] RTL support tested
- [ ] ESLint passing
- [ ] All tests passing
- [ ] Documentation complete

---

**Conversion Guide Completed:** 2025-11-17
**Updated:** 2025-11-17 (Added Storybook workflow)
**Ready for:** React component implementation
**Reference:** Steps 01, 02, 03 for AEGOV system details
