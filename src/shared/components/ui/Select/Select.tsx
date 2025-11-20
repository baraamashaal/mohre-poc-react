import { forwardRef } from 'react';
import clsx from 'clsx';
import type { SelectProps } from './Select.types';

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
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
      children,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided and label exists
    const selectId = id || (label ? `select-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Wrapper classes
    const wrapperClasses = clsx(
      'aegov-form-control',
      {
        [`control-${size}`]: size && size !== 'base',
        'control-secondary': variant === 'secondary',
        'control-error': error,
      },
      wrapperClassName
    );

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={selectId}>
            {label}
            {required && <span className="text-red-600 ms-1">*</span>}
          </label>
        )}
        <div className="form-control-input">
          <select
            ref={ref}
            id={selectId}
            required={required}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={error}
            className={className}
            {...props}
          >
            {children}
          </select>
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

Select.displayName = 'Select';
