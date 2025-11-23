import type { ReactNode } from 'react';

/**
 * Popover placement sides
 */
export type PopoverSide = 'top' | 'right' | 'bottom' | 'left';

/**
 * Popover variant types
 */
export type PopoverVariant = 'default' | 'flexible';

/**
 * Props for the Popover component
 */
export interface PopoverProps {
  /**
   * The element that triggers the popover (button, link, etc.)
   */
  children: ReactNode;

  /**
   * The content to display in the popover body
   */
  content: ReactNode;

  /**
   * Optional title/header text for the popover
   * Only used in 'default' variant
   */
  title?: string;

  /**
   * Variant of the popover
   * - 'default': Shows header with title and body with content
   * - 'flexible': Shows only body with content (no header)
   * @default 'default'
   */
  variant?: PopoverVariant;

  /**
   * Preferred side of the trigger to render the popover
   * @default 'top'
   */
  side?: PopoverSide;

  /**
   * Distance in pixels from the trigger element
   * @default 10
   */
  sideOffset?: number;

  /**
   * Whether the popover is open (controlled mode)
   */
  open?: boolean;

  /**
   * Default open state (uncontrolled mode)
   * @default false
   */
  defaultOpen?: boolean;

  /**
   * Callback when the open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Custom width class for the popover
   * @default 'w-64'
   */
  width?: string;

  /**
   * Additional CSS classes for the popover container
   */
  className?: string;

  /**
   * Additional CSS classes for the popover header
   */
  headerClassName?: string;

  /**
   * Additional CSS classes for the popover body
   */
  bodyClassName?: string;

  /**
   * Whether to show the arrow pointer
   * @default true
   */
  showArrow?: boolean;

  /**
   * Animation duration class
   * @default 'duration-200'
   */
  animationDuration?: string;

  /**
   * Test ID for testing purposes
   * @default 'popover'
   */
  'data-testid'?: string;

  /**
   * Whether to prevent scrolling on the body when popover is open
   * @default false
   */
  modal?: boolean;
}
