import { forwardRef, useState } from 'react';
import clsx from 'clsx';
import type {RangeSliderProps} from './RangeSlider.types';

/**
 * RangeSlider Component
 *
 * A range slider component based on AEGOV Design System.
 * Used for selecting a value within a range using a slider control.
 *
 * @example
 * ```tsx
 * <RangeSlider label="Volume" min={0} max={100} value={volume} onValueChange={setVolume} />
 * ```
 */
export const RangeSlider = forwardRef<HTMLInputElement, RangeSliderProps>(
  (
    {
      label,
      variant = 'primary',
      min = 0,
      max = 100,
      step = 1,
      value,
      defaultValue,
      onValueChange,
      showOutput = true,
      helperText,
      error = false,
      errorMessage,
      wrapperClassName,
      className,
      outputClassName,
      id,
      required,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    // Auto-generate ID from label if not provided
    const sliderId =
      id || (label ? `range-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Track internal value for controlled/uncontrolled mode
    const [internalValue, setInternalValue] = useState(defaultValue ?? min);
    const currentValue = value !== undefined ? value : internalValue;

    // Handle change event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = Number(e.target.value);

      // Update internal state for uncontrolled mode
      if (value === undefined) {
        setInternalValue(newValue);
      }

      // Call onChange if provided
      if (onChange) {
        onChange(e);
      }

      // Call onValueChange if provided
      if (onValueChange) {
        onValueChange(newValue);
      }
    };

    // Wrapper classes
    const wrapperClasses = clsx(
      'aegov-form-control',
      {
        'control-secondary': variant === 'secondary',
        'control-error': error,
      },
      wrapperClassName
    );

    // Output classes
    const outputClasses = clsx(
      'w-[50px] text-sm text-end h-auto bg-transparent py-1',
      outputClassName
    );

    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={sliderId}>
            {label}
            {required && <span className="text-red-600 ms-1">*</span>}
          </label>
        )}
        <div className="form-control-input items-center">
          <input
            ref={ref}
            type="range"
            role="slider"
            id={sliderId}
            min={min}
            max={max}
            step={step}
            value={currentValue}
            disabled={disabled}
            aria-disabled={disabled}
            aria-valuemin={min}
            aria-valuemax={max}
            aria-valuenow={currentValue}
            onChange={handleChange}
            className={className}
            {...props}
          />
          {showOutput && (
            <output htmlFor={sliderId} className={outputClasses}>
              {currentValue}
            </output>
          )}
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

RangeSlider.displayName = 'RangeSlider';
