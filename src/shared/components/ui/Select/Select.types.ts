import type { SelectHTMLAttributes } from 'react';

export type SelectSize = 'sm' | 'base' | 'lg';
export type SelectVariant = 'primary' | 'secondary';

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /**
   * Label text for the select
   */
  label?: string;

  /**
   * Size variant
   * @default 'base'
   */
  size?: SelectSize;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: SelectVariant;

  /**
   * Error state
   * @default false
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Helper text to display below the select
   */
  helperText?: string;

  /**
   * Custom CSS class for the wrapper
   */
  wrapperClassName?: string;

  /**
   * Children (option elements)
   */
  children?: React.ReactNode;
}
