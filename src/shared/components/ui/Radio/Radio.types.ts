import type { InputHTMLAttributes } from 'react';

export type RadioSize = 'sm' | 'base' | 'lg';
export type RadioVariant = 'primary' | 'secondary';

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /**
   * Label text for the radio button
   */
  label?: string;

  /**
   * Size variant
   * @default 'base'
   */
  size?: RadioSize;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: RadioVariant;

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
   * Helper text to display below the radio button
   */
  helperText?: string;

  /**
   * Custom CSS class for the wrapper
   */
  wrapperClassName?: string;
}
