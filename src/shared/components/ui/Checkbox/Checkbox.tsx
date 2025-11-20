import { forwardRef, useEffect, useRef } from 'react';
import clsx from 'clsx';
import type { CheckboxProps } from './Checkbox.types';

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
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
      indeterminate = false,
      ...props
    },
    ref
  ) => {
    // Generate unique ID if not provided and label exists
    const checkboxId = id || (label ? `checkbox-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Create a local ref for the indeterminate property
    const internalRef = useRef<HTMLInputElement>(null);
    const checkboxRef = (ref as React.RefObject<HTMLInputElement>) || internalRef;

    // Set indeterminate state using useEffect
    useEffect(() => {
      if (checkboxRef && 'current' in checkboxRef && checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate, checkboxRef]);

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
          ref={checkboxRef}
          type="checkbox"
          id={checkboxId}
          required={required}
          disabled={disabled}
          aria-disabled={disabled}
          aria-invalid={error}
          className={className}
          {...props}
        />
        {label && <label htmlFor={checkboxId}>{label}</label>}
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

Checkbox.displayName = 'Checkbox';
