import { ReactNode } from 'react';

/**
 * Dropdown trigger type
 */
export type DropdownTrigger = 'click' | 'hover' | 'none';

/**
 * Dropdown placement
 */
export type DropdownPlacement = 'top' | 'right' | 'bottom' | 'left';

/**
 * Dropdown item configuration
 */
export interface DropdownItem {
  /** Unique identifier */
  id: string;
  /** Display label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Optional href for link items */
  href?: string;
  /** Optional icon element */
  icon?: ReactNode;
  /** Whether item is disabled */
  disabled?: boolean;
  /** Custom content instead of label */
  content?: ReactNode;
}

/**
 * Dropdown component props
 */
export interface DropdownProps {
  /** Unique ID for the dropdown */
  id: string;
  /** Trigger element (button, link, etc.) */
  trigger: ReactNode;
  /** Dropdown menu items */
  items: DropdownItem[];
  /** Trigger type: click, hover, or none */
  triggerType?: DropdownTrigger;
  /** Dropdown placement relative to trigger */
  placement?: DropdownPlacement;
  /** Horizontal offset (skidding) */
  offsetSkidding?: number;
  /** Vertical offset (distance) */
  offsetDistance?: number;
  /** Delay in milliseconds before showing/hiding */
  delay?: number;
  /** Custom className for dropdown container */
  className?: string;
  /** Custom className for dropdown menu */
  menuClassName?: string;
  /** ARIA label */
  ariaLabel?: string;
  /** Data attribute for testing */
  'data-testid'?: string;
}
