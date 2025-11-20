import { forwardRef } from 'react';
import clsx from 'clsx';
import type { TextareaProps } from './Textarea.types';

/**
 * Textarea Component
 * Based on AEGOV Design System Textarea specifications
 *
 * @example
 * ```tsx
 * // Basic textarea
 * <Textarea label="Your message" placeholder="Leave a comment..." />
 *
 * // Textarea with error
 * <Textarea label="Message" error errorMessage="Message is required" />
 * ```
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      size = 'base',
      variant = 'primary',
      error = false,
      errorMessage,
      helperText,
      wrapperClassName,
      className,
      id,
      required,
      disabled,
      rows = 4,
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided and label exists
    const textareaId = id || (label ? `textarea-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    const wrapperClasses = clsx(
      'aegov-form-control',
      {
        'control-sm': size === 'sm',
        'control-lg': size === 'lg',
        'control-secondary': variant === 'secondary',
        'control-error': error,
      },
      wrapperClassName
    );

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={textareaId}>
            {label}
            {required && <span className="text-red-600 ms-1">*</span>}
          </label>
        )}

        <div className="form-control-input">
          <textarea
            ref={ref}
            id={textareaId}
            rows={rows}
            required={required}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={error}
            className={className}
            {...props}
          />
        </div>

        {helperText && !error && (
          <p className="mt-2 text-xs leading-6 text-aeblack-500">{helperText}</p>
        )}

        {error && errorMessage && (
          <p className="error-message">
            <strong>Error:</strong> {errorMessage}
          </p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
