import { InputHTMLAttributes } from 'react';

/**
 * Toggle Variants
 * Based on AEGOV Design System
 */
export type ToggleVariant = 'primary' | 'secondary' | 'success' | 'mode';

/**
 * Toggle Component Props
 */
export interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  /**
   * Label text for the toggle
   */
  label?: string;

  /**
   * Color variant
   * @default 'primary'
   */
  variant?: ToggleVariant;

  /**
   * Whether the toggle is checked
   */
  checked?: boolean;

  /**
   * Callback when toggle state changes
   */
  onCheckedChange?: (checked: boolean) => void;

  /**
   * Icon to display when checked (for toggle-icon variant)
   */
  checkedIcon?: React.ReactNode;

  /**
   * Icon to display when unchecked (for toggle-icon variant)
   */
  uncheckedIcon?: React.ReactNode;

  /**
   * Whether to show icons
   * @default false
   */
  showIcon?: boolean;

  /**
   * Additional CSS classes for the wrapper label
   */
  wrapperClassName?: string;
}
