import type {ReactNode} from 'react';

/**
 * Tooltip placement options
 */
export type TooltipPlacement = 'top' | 'right' | 'bottom' | 'left';

/**
 * Tooltip trigger type
 */
export type TooltipTrigger = 'hover' | 'click';

/**
 * Props for the Tooltip component
 */
export interface TooltipProps {
  /**
   * The content to display in the tooltip
   */
  content: string;

  /**
   * The element that triggers the tooltip
   */
  children: ReactNode;

  /**
   * Placement of the tooltip relative to the trigger element
   * @default 'top'
   */
  side?: TooltipPlacement;

  /**
   * How the tooltip is triggered
   * @default 'hover'
   */
  trigger?: TooltipTrigger;

  /**
   * Delay before showing the tooltip (in milliseconds)
   * @default 200
   */
  delay?: number;

  /**
   * Animation duration class (e.g., 'duration-500')
   * @default 'duration-500'
   */
  animationDuration?: string;

  /**
   * Additional CSS classes for the tooltip
   */
  className?: string;

  /**
   * Test ID for the tooltip
   * @default 'tooltip'
   */
  'data-testid'?: string;
}
