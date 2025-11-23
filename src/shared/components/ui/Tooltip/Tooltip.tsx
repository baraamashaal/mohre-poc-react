import React from 'react';
import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';
import type { TooltipProps } from './Tooltip.types';

/**
 * AEGOV Tooltip component
 *
 * Provides contextual information when users hover over or click on an element.
 * Built with Radix UI for reliable positioning and accessibility.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Tooltip content="This is helpful information">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 *
 * @example
 * With custom placement and delay:
 * ```tsx
 * <Tooltip content="Tooltip on right" side="right" delay={500}>
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */
export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  side = 'top',
  trigger = 'hover',
  delay = 200,
  animationDuration = 'duration-500',
  className,
  'data-testid': dataTestId = 'tooltip',
}) => {
  const isClickMode = trigger === 'click';

  const contentClasses = clsx(
    'z-10 aegov-tooltip relative',
    // Override AEGOV's default hidden state for all open states
    '[&[data-state="open"]]:visible [&[data-state="open"]]:opacity-100',
    '[&[data-state="delayed-open"]]:visible [&[data-state="delayed-open"]]:opacity-100',
    '[&[data-state="instant-open"]]:visible [&[data-state="instant-open"]]:opacity-100',
    // Allow hiding when closed
    'data-[state=closed]:invisible data-[state=closed]:opacity-0',
    'animate-in fade-in-0 zoom-in-95',
    'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95',
    'data-[side=bottom]:slide-in-from-top-2',
    'data-[side=left]:slide-in-from-right-2',
    'data-[side=right]:slide-in-from-left-2',
    'data-[side=top]:slide-in-from-bottom-2',
    animationDuration,
    className
  );

  // Only override display, not visibility (let Tailwind classes handle it)
  const contentStyle = { display: 'block' as const };

  // Use Popover for click mode (click-to-toggle)
  if (isClickMode) {
    return (
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          {children}
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            side={side}
            sideOffset={10}
            className={contentClasses}
            style={contentStyle}
            data-testid={dataTestId}
          >
            {content}
            <PopoverPrimitive.Arrow
              className="tooltip-arrow fill-current"
              width={11}
              height={5}
            />
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    );
  }

  // Use Tooltip for hover mode (default)
  return (
    <TooltipPrimitive.Provider delayDuration={delay}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          {children}
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Portal>
          <TooltipPrimitive.Content
            side={side}
            sideOffset={10}
            className={contentClasses}
            style={contentStyle}
            data-testid={dataTestId}
          >
            {content}
            <TooltipPrimitive.Arrow
              className="tooltip-arrow fill-current"
              width={11}
              height={5}
            />
          </TooltipPrimitive.Content>
        </TooltipPrimitive.Portal>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
};

Tooltip.displayName = 'Tooltip';
