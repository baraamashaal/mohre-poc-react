import { forwardRef } from 'react';
import clsx from 'clsx';
import { Check } from '@phosphor-icons/react';
import type { StepsProps } from './Steps.types';

/**
 * Steps Component
 *
 * A user interface element that simplifies complex processes or forms by
 * breaking them down into a series of sequential steps.
 *
 * @see https://designsystem.gov.ae/docs/components/steps
 *
 * @example
 * ```tsx
 * <Steps
 *   steps={[
 *     { label: 'Personal Info', href: '#step-1' },
 *     { label: 'Contact Details', href: '#step-2' },
 *     { label: 'Review', href: '#step-3' }
 *   ]}
 *   currentStep={1}
 * />
 * ```
 *
 * @example With labels
 * ```tsx
 * <Steps
 *   steps={steps}
 *   currentStep={0}
 *   showLabels
 * />
 * ```
 *
 * @example Vertical orientation
 * ```tsx
 * <Steps
 *   steps={steps}
 *   currentStep={2}
 *   orientation="vertical"
 * />
 * ```
 */
export const Steps = forwardRef<HTMLElement, StepsProps>(
  (
    {
      steps,
      currentStep,
      size = 'base',
      orientation = 'horizontal',
      showLabels = false,
      ariaLabel = 'Progress',
      className,
      'data-testid': dataTestId,
      ...rest
    },
    ref
  ) => {
    const isHorizontal = orientation === 'horizontal';

    const getStepState = (index: number): 'completed' | 'current' | 'upcoming' => {
      if (index < currentStep) return 'completed';
      if (index === currentStep) return 'current';
      return 'upcoming';
    };

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={clsx(
          'aegov-step',
          {
            'pb-9': showLabels && isHorizontal,
            'inline-block': !isHorizontal,
            [`step-${size}`]: size !== 'base',
          },
          className
        )}
        data-testid={dataTestId}
        {...rest}
      >
        <ol
          role="list"
          className={clsx(
            'flex',
            {
              'items-center justify-between': isHorizontal,
              'flex-col space-y-4': !isHorizontal,
            }
          )}
        >
          {steps.map((step, index) => {
            const state = getStepState(index);
            const isCompleted = state === 'completed';
            const isCurrent = state === 'current';
            const isUpcoming = state === 'upcoming';
            const isDisabled = step.disabled || false;
            const isLast = index === steps.length - 1;

            const StepElement = step.href && !isDisabled ? 'a' : 'span';

            return (
              <li
                key={index}
                className={clsx('relative', {
                  'w-full': isHorizontal && !isLast,
                  'pb-10': !isHorizontal && !isLast,
                  'step-completed': isCompleted,
                  'step-current': isCurrent,
                  'step-upcoming': isUpcoming,
                  'step-disabled': isDisabled,
                })}
              >
                {/* Horizontal connector - TWO divs as per AEGOV */}
                {!isLast && isHorizontal && (
                  <div className="step-connector" aria-hidden="true">
                    <div
                      className={clsx('step-connector-state', {
                        'bg-teal-600': isCompleted,
                        'bg-gray-200': !isCompleted,
                      })}
                    />
                  </div>
                )}

                {/* Vertical connector - ONE div with both classes as per AEGOV */}
                {!isLast && !isHorizontal && (
                  <div
                    className={clsx('step-connector-state step-connector-vertical', {
                      'bg-teal-600': isCompleted,
                      'bg-gray-200': !isCompleted,
                    })}
                    aria-hidden="true"
                  />
                )}

                {/* Step indicator */}
                <StepElement
                  {...(step.href && !isDisabled ? { href: step.href } : {})}
                  className={clsx(
                    'step-badge relative flex items-center justify-center rounded-full font-medium transition-colors',
                    {
                      // Completed state
                      'bg-teal-600 text-white': isCompleted && !isDisabled,
                      // Current state
                      'bg-white text-teal-600 ring-2 ring-teal-600': isCurrent && !isDisabled,
                      // Upcoming state
                      'bg-white text-gray-900 ring-2 ring-gray-300': isUpcoming && !isDisabled,
                      // Disabled state
                      'opacity-50 cursor-not-allowed': isDisabled,
                      'hover:bg-teal-700': isCompleted && step.href && !isDisabled,
                      'hover:ring-teal-700': isCurrent && step.href && !isDisabled,
                    }
                  )}
                  {...(isCurrent ? { 'aria-current': 'step' as const } : {})}
                  {...(isDisabled ? { 'aria-disabled': 'true' } : {})}
                >
                  <span className="sr-only">
                    {isCompleted && 'Completed: '}
                    {isCurrent && 'Current: '}
                    {isUpcoming && 'Upcoming: '}
                    {isDisabled && 'Disabled: '}
                    Step {index + 1}: {step.label}
                  </span>
                  {isCompleted ? (
                    <Check size={size === 'sm' ? 16 : size === 'lg' ? 24 : 20} weight="bold" aria-hidden="true" />
                  ) : (
                    <span aria-hidden="true">{index + 1}</span>
                  )}
                  {/* Label INSIDE step-badge as per AEGOV */}
                  {showLabels && (
                    <span className="step-text-below">
                      {step.label}
                    </span>
                  )}
                </StepElement>
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Steps.displayName = 'Steps';
