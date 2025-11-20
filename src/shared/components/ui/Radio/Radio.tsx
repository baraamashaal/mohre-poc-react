import { forwardRef } from 'react';
import clsx from 'clsx';
import type { RadioProps } from './Radio.types';

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
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
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided and label exists
    const radioId = id || (label ? `radio-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Wrapper classes
    const wrapperClasses = clsx(
      'aegov-check-item',
      {
        [`check-${size}`]: size && size !== 'base',
        'check-secondary': variant === 'secondary',
      },
      wrapperClassName
    );

    return (
      <div className={wrapperClasses}>
        <input
          ref={ref}
          type="radio"
          id={radioId}
          required={required}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={error}
          className={className}
          {...props}
        />
        {label && <label htmlFor={radioId}>{label}</label>}
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

Radio.displayName = 'Radio';
