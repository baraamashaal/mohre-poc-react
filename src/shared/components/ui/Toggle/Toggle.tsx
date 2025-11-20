import { forwardRef } from 'react';
import clsx from 'clsx';
import type {ToggleProps} from './Toggle.types';

/**
 * Toggle Component
 *
 * A toggle switch component based on AEGOV Design System.
 * Used for binary on/off or true/false states.
 *
 * @example
 * ```tsx
 * <Toggle label="Enable notifications" checked={enabled} onCheckedChange={setEnabled} />
 * ```
 */
export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    {
      label,
      variant = 'primary',
      checked,
      onCheckedChange,
      checkedIcon,
      uncheckedIcon,
      showIcon = false,
      wrapperClassName,
      className,
      id,
      disabled,
      onChange,
      ...props
    },
    ref
  ) => {
    // Auto-generate ID from label if not provided
    const toggleId = id || (label ? `toggle-${label.toLowerCase().replace(/\s+/g, '-')}` : undefined);

    // Handle change event
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      // Call onChange if provided
      if (onChange) {
        onChange(e);
      }

      // Call onCheckedChange if provided
      if (onCheckedChange) {
        onCheckedChange(e.target.checked);
      }
    };

    // Wrapper label classes
    const wrapperClasses = clsx(
      'aegov-toggle',
      {
        'toggle-secondary': variant === 'secondary',
        'toggle-success': variant === 'success',
        'toggle-mode': variant === 'mode',
        'toggle-icon': showIcon,
      },
      wrapperClassName
    );

    // Input classes (sr-only for screen reader only, peer for Tailwind peer styling)
    const inputClasses = clsx('sr-only peer', className);

    return (
      <label htmlFor={toggleId} className={wrapperClasses}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={toggleId}
          checked={checked}
          disabled={disabled}
          aria-disabled={disabled}
          aria-checked={checked ?? false}
          onChange={handleChange}
          className={inputClasses}
          {...props}
        />
        <span className="toggle-item">
          {/* Render icons if provided */}
          {checked && checkedIcon}
          {!checked && uncheckedIcon}
        </span>
        {label && <span className="sr-only">{label}</span>}
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
