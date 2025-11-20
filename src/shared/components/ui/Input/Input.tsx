import { forwardRef } from 'react';
import clsx from 'clsx';
import type { InputProps } from './Input.types';

/**
 * Input Component
 * Based on AEGOV Design System Input specifications
 *
 * @example
 * ```tsx
 * // Basic input
 * <Input label="First Name" placeholder="Enter your name" />
 *
 * // Input with error
 * <Input label="Email" error errorMessage="Invalid email" />
 *
 * // Input with prefix
 * <Input label="Website" prefix="http://" />
 * ```
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      size = 'base',
      variant = 'primary',
      error = false,
      errorMessage,
      helperText,
      prefix,
      suffix,
      wrapperClassName,
      className,
      id,
      required,
      disabled,
      type = 'text',
      ...props
    },
    ref
  ) => {
    // Generate a unique ID if not provided and label exists
    const inputId = id || (label ? `input-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

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
          <label htmlFor={inputId}>
            {label}
            {required && <span className="text-red-600 ms-1">*</span>}
          </label>
        )}

        <div className="form-control-input">
          {prefix && <span className="control-prefix">{prefix}</span>}

          <input
            ref={ref}
            type={type}
            id={inputId}
            required={required}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={error}
            className={className}
            {...props}
          />

          {suffix && <span className="control-suffix">{suffix}</span>}
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

Input.displayName = 'Input';
