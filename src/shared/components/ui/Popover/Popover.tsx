import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import type { PopoverProps } from './Popover.types';

/**
 * AEGOV Popover component
 *
 * Displays contextual information or actions near a trigger element.
 * Appears on click and can be dismissed by clicking outside or pressing Escape.
 * Built with Radix UI for reliable positioning and accessibility.
 *
 * @example
 * Basic usage (default variant with header):
 * ```tsx
 * <Popover title="Popover title" content="Engaging and insightful content">
 *   <button>Default popover</button>
 * </Popover>
 * ```
 *
 * @example
 * Flexible variant (body only):
 * ```tsx
 * <Popover
 *   variant="flexible"
 *   content="Add text, images, links, or any content"
 * >
 *   <button>Flexible Popover</button>
 * </Popover>
 * ```
 *
 * @example
 * With custom placement and controlled state:
 * ```tsx
 * <Popover
 *   title="Settings"
 *   content={<SettingsForm />}
 *   side="right"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 * >
 *   <button>Open Settings</button>
 * </Popover>
 * ```
 */
export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  title,
  variant = 'default',
  side = 'top',
  sideOffset = 10,
  open,
  defaultOpen = false,
  onOpenChange,
  width = 'w-64',
  className,
  headerClassName,
  bodyClassName,
  showArrow = true,
  animationDuration = 'duration-200',
  'data-testid': dataTestId = 'popover',
  modal = false,
}) => {
  const containerClasses = clsx(
    'z-10 aegov-popover',
    width,
    // Override AEGOV's default hidden state for open states
    '[&[data-state="open"]]:visible [&[data-state="open"]]:opacity-100',
    // Allow hiding when closed
    'data-[state=closed]:invisible data-[state=closed]:opacity-0',
    // Animations
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
    animationDuration,
    className
  );

  const headerClasses = clsx(
    'popover-header bg-aeblack-50 px-3 py-2',
    headerClassName
  );

  const bodyClasses = clsx(
    'popover-body px-3 py-2 text-aeblack-600',
    bodyClassName
  );

  // Only override display, not visibility (let Tailwind classes handle it)
  const contentStyle = { display: 'block' as const };

  const showHeader = variant === 'default' && title;

  return (
    <PopoverPrimitive.Root
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      modal={modal}
    >
      <PopoverPrimitive.Trigger asChild>
        {children}
      </PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content
          side={side}
          sideOffset={sideOffset}
          className={containerClasses}
          style={contentStyle}
          data-testid={dataTestId}
          role="tooltip"
        >
          {showHeader && (
            <div className={headerClasses}>
              <div className="font-semibold text-aeblack-900">{title}</div>
            </div>
          )}
          <div className={bodyClasses}>
            {typeof content === 'string' ? (
              <p className="mb-0">{content}</p>
            ) : (
              content
            )}
          </div>
          {showArrow && (
            <PopoverPrimitive.Arrow
              className="fill-current text-white"
              width={11}
              height={5}
            />
          )}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};

Popover.displayName = 'Popover';
