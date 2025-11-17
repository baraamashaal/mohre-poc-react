export interface AlertProps {
  // Core props
  children: React.ReactNode;

  // Variants
  type: 'info' | 'error' | 'success' | 'warning';
  variant?: 'solid' | 'soft';

  // States
  dismissible?: boolean;
  onDismiss?: () => void;

  // Visual
  icon?: React.ReactNode;

  // Accessibility
  role?: 'alert' | 'status';
  'aria-live'?: 'polite' | 'assertive' | 'off';

  // Styling
  className?: string;
}
