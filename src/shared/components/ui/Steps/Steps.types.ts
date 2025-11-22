import type { HTMLAttributes } from 'react';

/**
 * Individual step configuration
 */
export interface Step {
  /** Display label for the step */
  label: string;
  /** Optional href for navigation */
  href?: string;
  /** Whether this step is disabled */
  disabled?: boolean;
}

/**
 * Size variants for step indicators
 */
export type StepSize = 'sm' | 'base' | 'lg';

/**
 * Layout orientation
 */
export type StepOrientation = 'horizontal' | 'vertical';

/**
 * Props for the Steps component
 *
 * @see https://designsystem.gov.ae/docs/components/steps
 */
export interface StepsProps extends Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Array of step configurations */
  steps: Step[];

  /**
   * Currently active step (zero-based index)
   */
  currentStep: number;

  /**
   * Size of step indicators
   * @default 'base'
   */
  size?: StepSize;

  /**
   * Layout orientation
   * @default 'horizontal'
   */
  orientation?: StepOrientation;

  /**
   * Show labels below/beside steps
   * @default false
   */
  showLabels?: boolean;

  /**
   * Custom CSS classes for the container
   */
  className?: string;

  /**
   * ARIA label for the navigation
   * @default 'Progress'
   */
  ariaLabel?: string;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}
