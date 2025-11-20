import type {InputHTMLAttributes} from 'react';

/**
 * RangeSlider Variant
 * Based on AEGOV Design System
 */
export type RangeSliderVariant = 'primary' | 'secondary';

/**
 * RangeSlider Component Props
 */
export interface RangeSliderProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text for the range slider
   */
  label?: string;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: RangeSliderVariant;

  /**
   * Minimum value
   * @default 0
   */
  min?: number;

  /**
   * Maximum value
   * @default 100
   */
  max?: number;

  /**
   * Step increment
   * @default 1
   */
  step?: number;

  /**
   * Current value
   */
  value?: number;

  /**
   * Default value for uncontrolled component
   */
  defaultValue?: number;

  /**
   * Callback when value changes
   */
  onValueChange?: (value: number) => void;

  /**
   * Whether to show the output value
   * @default true
   */
  showOutput?: boolean;

  /**
   * Helper text to display below the range slider
   */
  helperText?: string;

  /**
   * Error state
   */
  error?: boolean;

  /**
   * Error message to display
   */
  errorMessage?: string;

  /**
   * Additional CSS classes for the wrapper
   */
  wrapperClassName?: string;

  /**
   * Additional CSS classes for the output element
   */
  outputClassName?: string;
}
