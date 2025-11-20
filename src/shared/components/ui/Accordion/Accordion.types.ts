import { ReactNode } from 'react';

/**
 * Icon rotation degree for accordion items
 */
export type AccordionIconRotate = 45 | 180;

/**
 * Individual accordion item
 */
export interface AccordionItem {
  /** Unique identifier for the accordion item */
  value: string;
  /** Title/header text for the accordion item */
  title: string;
  /** Content to display when expanded */
  children: ReactNode;
  /** Optional custom icon component */
  icon?: ReactNode;
  /** Icon rotation angle when expanded (default: 180) */
  iconRotateDeg?: AccordionIconRotate;
}

/**
 * Props for the Accordion component
 * Following AEGOV Design System accordion patterns
 */
export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Value of initially expanded item(s) */
  defaultValue?: string | string[];
  /** Allow multiple items to be open simultaneously */
  multiple?: boolean;
  /** Additional CSS classes for the container */
  className?: string;
  /** Test ID for E2E testing */
  'data-testid'?: string;
}
