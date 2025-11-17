import { ButtonHTMLAttributes, ReactNode } from 'react';

export type ButtonVariant = 'solid' | 'outline' | 'soft' | 'link';
export type ButtonSize = 'xs' | 'sm' | 'base' | 'lg';
export type ButtonColor = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button content
   */
  children: ReactNode;

  /**
   * Visual variant of the button
   * @default 'solid'
   */
  variant?: ButtonVariant;

  /**
   * Size of the button
   * @default 'base'
   */
  size?: ButtonSize;

  /**
   * Color scheme
   * @default 'primary'
   */
  color?: ButtonColor;

  /**
   * Whether the button is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * Button type
   * @default 'button'
   */
  type?: 'button' | 'submit' | 'reset';

  /**
   * Whether this is an icon-only button
   * @default false
   */
  iconOnly?: boolean;

  /**
   * Icon to display before the text
   */
  leftIcon?: ReactNode;

  /**
   * Icon to display after the text
   */
  rightIcon?: ReactNode;

  /**
   * Loading state
   * @default false
   */
  loading?: boolean;

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Whether the button should take full width
   * @default false
   */
  fullWidth?: boolean;
}
