/**
 * Input Component Types
 * Based on AEGOV Design System Input specifications
 */

import { InputHTMLAttributes } from 'react';

export type InputSize = 'sm' | 'base' | 'lg';
export type InputVariant = 'primary' | 'secondary';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /**
   * Input label text
   */
  label?: string;

  /**
   * Input size variant
   * @default 'base'
   */
  size?: InputSize;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: InputVariant;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Helper text to display below input
   */
  helperText?: string;

  /**
   * Prefix icon or text
   */
  prefix?: React.ReactNode;

  /**
   * Suffix icon or text
   */
  suffix?: React.ReactNode;

  /**
   * Additional CSS classes for the wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for the input element
   */
  className?: string;

  /**
   * Required field indicator
   */
  required?: boolean;
}
