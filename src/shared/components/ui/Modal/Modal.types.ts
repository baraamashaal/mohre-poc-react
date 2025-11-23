import { ReactNode } from 'react';

/**
 * Modal size variants
 */
export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | 'full';

/**
 * Modal placement positions
 * Format: {vertical}-{horizontal}
 */
export type ModalPlacement =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'center-left'
  | 'center'
  | 'center-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right';

/**
 * Modal variant types for different use cases
 */
export type ModalVariant =
  | 'default' // Basic modal with standard styling
  | 'alert' // Warning/alert modal with primary icon
  | 'danger' // Serious/destructive action modal with red styling
  | 'success' // Success confirmation with green styling
  | 'language' // Language selection modal
  | 'gold-star' // Service rating modal
  | 'customer-pulse'; // Feedback survey modal

/**
 * Icon configuration for modals
 */
export interface ModalIcon {
  /** Icon element (SVG or component) */
  icon: ReactNode;
  /** Icon background color class */
  bgColor?: string;
  /** Icon text color class */
  textColor?: string;
}

/**
 * Action button configuration
 */
export interface ModalAction {
  /** Button label */
  label: string;
  /** Click handler */
  onClick?: () => void;
  /** Button variant class */
  variant?: string;
  /** Whether to close modal on click (default: false for primary, true for secondary) */
  autoClose?: boolean;
  /** Whether this is the primary action */
  primary?: boolean;
  /** Custom className for button */
  className?: string;
}

/**
 * Modal props interface
 */
export interface ModalProps {
  /** Whether modal is open */
  open?: boolean;
  /** Default open state (for uncontrolled) */
  defaultOpen?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Modal title */
  title?: string;
  /** Modal description (for screen readers) */
  description?: string;
  /** Modal content */
  children: ReactNode;
  /** Modal variant */
  variant?: ModalVariant;
  /** Modal size */
  size?: ModalSize;
  /** Modal placement on screen */
  placement?: ModalPlacement;
  /** Whether backdrop is static (prevents closing on backdrop click) */
  staticBackdrop?: boolean;
  /** Whether to show close button (default: true) */
  showCloseButton?: boolean;
  /** Icon configuration */
  icon?: ModalIcon;
  /** Action buttons */
  actions?: ModalAction[];
  /** Custom className for modal wrapper */
  wrapperClassName?: string;
  /** Custom className for modal content */
  contentClassName?: string;
  /** Custom className for modal header */
  headerClassName?: string;
  /** Custom className for modal body */
  bodyClassName?: string;
  /** Custom className for modal footer */
  footerClassName?: string;
  /** Custom className for backdrop */
  backdropClassName?: string;
  /** Whether modal content is scrollable */
  scrollable?: boolean;
  /** Max height for scrollable content */
  maxHeight?: string;
  /** Additional footer content */
  footer?: ReactNode;
  /** Callback when modal is closed */
  onClose?: () => void;
  /** Test ID for testing */
  'data-testid'?: string;
  /** Whether to trap focus within modal */
  modal?: boolean;
}
