import { useState, useEffect, useRef, cloneElement, isValidElement } from 'react';
import { createPopper } from '@popperjs/core';
import type { Instance as PopperInstance } from '@popperjs/core';
import clsx from 'clsx';
import type { DropdownProps } from './Dropdown.types';

/**
 * Dropdown Component
 *
 * AEGOV Design System dropdown with Popper.js positioning.
 * Supports click and hover triggers with proper accessibility.
 *
 * @example
 * ```tsx
 * <Dropdown
 *   id="my-dropdown"
 *   trigger={<button>Menu</button>}
 *   items={[
 *     { id: '1', label: 'Item 1', onClick: () => {} },
 *     { id: '2', label: 'Link', href: '/link' }
 *   ]}
 *   triggerType="click"
 * />
 * ```
 */
export const Dropdown = ({
  id,
  trigger,
  items,
  triggerType = 'click',
  placement = 'bottom',
  offsetSkidding = 0,
  offsetDistance = 8,
  delay = 0,
  className,
  menuClassName,
  ariaLabel,
  'data-testid': dataTestId,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const popperInstanceRef = useRef<PopperInstance | null>(null);

  // Initialize Popper.js instance
  useEffect(() => {
    if (isOpen && triggerRef.current && dropdownRef.current) {
      popperInstanceRef.current = createPopper(
        triggerRef.current,
        dropdownRef.current,
        {
          placement,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [offsetSkidding, offsetDistance],
              },
            },
            {
              name: 'preventOverflow',
              options: {
                padding: 8,
              },
            },
          ],
        }
      );

      // Update position
      popperInstanceRef.current.update();
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [isOpen, placement, offsetSkidding, offsetDistance]);

  // Click outside handler
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        dropdownRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle trigger click
  const handleTriggerClick = () => {
    if (triggerType === 'click') {
      setIsOpen((prev) => !prev);
    }
  };

  // Handle trigger hover
  const handleTriggerMouseEnter = () => {
    if (triggerType === 'hover') {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      if (delay > 0) {
        const timeout = setTimeout(() => setIsOpen(true), delay);
        setHoverTimeout(timeout);
      } else {
        setIsOpen(true);
      }
    }
  };

  const handleTriggerMouseLeave = () => {
    if (triggerType === 'hover') {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
      }
      if (delay > 0) {
        const timeout = setTimeout(() => setIsOpen(false), delay);
        setHoverTimeout(timeout);
      } else {
        setIsOpen(false);
      }
    }
  };

  // Handle dropdown hover (keep open when hovering dropdown)
  const handleDropdownMouseEnter = () => {
    if (triggerType === 'hover' && hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleDropdownMouseLeave = () => {
    if (triggerType === 'hover') {
      if (delay > 0) {
        const timeout = setTimeout(() => setIsOpen(false), delay);
        setHoverTimeout(timeout);
      } else {
        setIsOpen(false);
      }
    }
  };

  // Handle item click
  const handleItemClick = (item: typeof items[0]) => {
    if (item.disabled) return;

    if (item.onClick) {
      item.onClick();
    }

    // Close dropdown after click
    setIsOpen(false);
  };

  // Clone trigger element and attach ARIA attributes
  const clonedTrigger = isValidElement(trigger)
    ? cloneElement(trigger as React.ReactElement<any>, {
        'data-dropdown-toggle': id,
        'data-dropdown-trigger': triggerType,
        'aria-expanded': isOpen,
        'aria-haspopup': 'menu',
      })
    : trigger;

  return (
    <div className={className} data-testid={dataTestId}>
      {/* Trigger - wrap in container to handle clicks */}
      <div
        ref={triggerRef}
        onClick={handleTriggerClick}
        onMouseEnter={handleTriggerMouseEnter}
        onMouseLeave={handleTriggerMouseLeave}
      >
        {clonedTrigger}
      </div>

      {/* Dropdown Menu - Following exact AEGOV HTML structure */}
      <div
        id={id}
        ref={dropdownRef}
        className={clsx('aegov-dropdown w-52', menuClassName)}
        style={{ display: isOpen ? 'block' : 'none' }}
        onMouseEnter={handleDropdownMouseEnter}
        onMouseLeave={handleDropdownMouseLeave}
      >
        <div className="dropdown-body text-aeblack-600">
          <ul className="py-1" aria-labelledby={ariaLabel || id} role="menu">
            {items.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href || '#'}
                  onClick={(e) => {
                    if (!item.href) {
                      e.preventDefault();
                      handleItemClick(item);
                    }
                  }}
                  className={clsx('dropdown-item', {
                    'pointer-events-none opacity-50': item.disabled,
                  })}
                >
                  {item.content || (
                    <>
                      {item.icon && (
                        <span className="inline-flex items-center mr-2">{item.icon}</span>
                      )}
                      {item.label}
                    </>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
