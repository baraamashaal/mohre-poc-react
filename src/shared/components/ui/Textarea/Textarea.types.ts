/**
 * Textarea Component Types
 * Based on AEGOV Design System Textarea specifications
 */

import { TextareaHTMLAttributes } from 'react';

export type TextareaSize = 'sm' | 'base' | 'lg';
export type TextareaVariant = 'primary' | 'secondary';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Textarea label text
   */
  label?: string;

  /**
   * Textarea size variant
   * @default 'base'
   */
  size?: TextareaSize;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: TextareaVariant;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Helper text to display below textarea
   */
  helperText?: string;

  /**
   * Additional CSS classes for the wrapper
   */
  wrapperClassName?: string;

  /**
   * Required field indicator
   */
  required?: boolean;
}
