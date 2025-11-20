import type { InputHTMLAttributes } from 'react';

export type CheckboxSize = 'sm' | 'base' | 'lg';
export type CheckboxVariant = 'primary' | 'secondary';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Label text for the checkbox
   */
  label?: string;

  /**
   * Size variant
   * @default 'base'
   */
  size?: CheckboxSize;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: CheckboxVariant;

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
   * Helper text to display below the checkbox
   */
  helperText?: string;

  /**
   * Custom CSS class for the wrapper
   */
  wrapperClassName?: string;

  /**
   * Indeterminate state (for partial selection)
   * @default false
   */
  indeterminate?: boolean;
}
