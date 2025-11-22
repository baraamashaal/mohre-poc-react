import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Steps } from './Steps';
import type { Step } from './Steps.types';

describe('Steps', () => {
  const defaultSteps: Step[] = [
    { label: 'Personal Info', href: '#step-1' },
    { label: 'Contact Details', href: '#step-2' },
    { label: 'Review', href: '#step-3' },
  ];

  describe('Rendering', () => {
    it('should render steps component', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
      expect(nav).toHaveClass('aegov-step');
    });

    it('should render correct number of steps', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const steps = container.querySelectorAll('li');
      expect(steps).toHaveLength(3);
    });

    it('should render step numbers', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container).toHaveTextContent('1');
      expect(container).toHaveTextContent('2');
      expect(container).toHaveTextContent('3');
    });

    it('should render ordered list with role="list"', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const list = container.querySelector('ol');
      expect(list).toBeInTheDocument();
      expect(list).toHaveAttribute('role', 'list');
    });

    it('should render with custom className', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} className="custom-class" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveClass('custom-class');
    });

    it('should render with data-testid', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} data-testid="test-steps" />
      );
      const nav = container.querySelector('[data-testid="test-steps"]');
      expect(nav).toBeInTheDocument();
    });
  });

  describe('Step States', () => {
    it('should mark completed steps with step-completed class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={2} />);
      const completedSteps = container.querySelectorAll('.step-completed');
      expect(completedSteps).toHaveLength(2); // Steps 0 and 1
    });

    it('should mark current step with step-current class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={1} />);
      const currentStep = container.querySelector('.step-current');
      expect(currentStep).toBeInTheDocument();
    });

    it('should mark upcoming steps with step-upcoming class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const upcomingSteps = container.querySelectorAll('.step-upcoming');
      expect(upcomingSteps).toHaveLength(2); // Steps 1 and 2
    });

    it('should show check icon for completed steps', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={2} />);
      const checkIcons = container.querySelectorAll('svg');
      expect(checkIcons.length).toBeGreaterThan(0);
    });

    it('should show number for current step', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={1} />);
      const currentStepBadge = container.querySelector('.step-current .step-badge');
      expect(currentStepBadge).toHaveTextContent('2');
    });

    it('should show number for upcoming steps', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const upcomingSteps = container.querySelectorAll('.step-upcoming');
      expect(upcomingSteps[0].querySelector('.step-badge')).toHaveTextContent('2');
      expect(upcomingSteps[1].querySelector('.step-badge')).toHaveTextContent('3');
    });
  });

  describe('Size Variants', () => {
    it('should render with default base size', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const nav = container.querySelector('.aegov-step');
      // Base size has no additional class
      expect(nav).not.toHaveClass('step-sm');
      expect(nav).not.toHaveClass('step-lg');
    });

    it('should render with small size', () => {
      const { container} = render(<Steps steps={defaultSteps} currentStep={0} size="sm" />);
      const nav = container.querySelector('.aegov-step');
      expect(nav).toHaveClass('step-sm');
    });

    it('should render with large size', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} size="lg" />);
      const nav = container.querySelector('.aegov-step');
      expect(nav).toHaveClass('step-lg');
    });
  });

  describe('Orientation', () => {
    it('should render horizontal orientation by default', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const list = container.querySelector('ol');
      expect(list).toHaveClass('justify-between');
    });

    it('should render vertical orientation', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} orientation="vertical" />
      );
      const list = container.querySelector('ol');
      expect(list).toHaveClass('flex-col');
    });

    it('should show horizontal connectors by default', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const connector = container.querySelector('.step-connector');
      expect(connector).toBeInTheDocument();
    });

    it('should show vertical connectors for vertical orientation', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} orientation="vertical" />
      );
      const connector = container.querySelector('.step-connector-vertical');
      expect(connector).toBeInTheDocument();
    });
  });

  describe('Labels', () => {
    it('should not show labels by default', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      // Labels should not be visibly displayed, but can exist in sr-only text for accessibility
      const visibleLabelSpan = container.querySelector('.step-text-below');
      expect(visibleLabelSpan).not.toBeInTheDocument();
    });

    it('should show labels when showLabels is true', () => {
      render(<Steps steps={defaultSteps} currentStep={0} showLabels />);
      expect(screen.getByText('Personal Info')).toBeInTheDocument();
      expect(screen.getByText('Contact Details')).toBeInTheDocument();
      expect(screen.getByText('Review')).toBeInTheDocument();
    });

    it('should apply step-text-below class for horizontal labels', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} showLabels orientation="horizontal" />
      );
      const labels = container.querySelectorAll('.step-text-below');
      expect(labels.length).toBeGreaterThan(0);
    });
  });

  describe('Navigation', () => {
    it('should render anchors for steps with href', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const links = container.querySelectorAll('a.step-badge');
      expect(links).toHaveLength(3);
    });

    it('should set correct href values', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const links = container.querySelectorAll('a.step-badge');
      expect(links[0]).toHaveAttribute('href', '#step-1');
      expect(links[1]).toHaveAttribute('href', '#step-2');
      expect(links[2]).toHaveAttribute('href', '#step-3');
    });

    it('should render span for steps without href', () => {
      const stepsWithoutHref: Step[] = [
        { label: 'Step 1' },
        { label: 'Step 2' },
        { label: 'Step 3' },
      ];
      const { container } = render(<Steps steps={stepsWithoutHref} currentStep={0} />);
      const spans = container.querySelectorAll('span.step-badge');
      expect(spans).toHaveLength(3);
    });
  });

  describe('Disabled State', () => {
    it('should mark disabled steps with step-disabled class', () => {
      const stepsWithDisabled: Step[] = [
        { label: 'Step 1', href: '#step-1' },
        { label: 'Step 2', href: '#step-2', disabled: true },
        { label: 'Step 3', href: '#step-3' },
      ];
      const { container } = render(<Steps steps={stepsWithDisabled} currentStep={0} />);
      const disabledStep = container.querySelector('.step-disabled');
      expect(disabledStep).toBeInTheDocument();
    });

    it('should render span instead of anchor for disabled steps', () => {
      const stepsWithDisabled: Step[] = [
        { label: 'Step 1', href: '#step-1' },
        { label: 'Step 2', href: '#step-2', disabled: true },
      ];
      const { container } = render(<Steps steps={stepsWithDisabled} currentStep={0} />);
      const allBadges = container.querySelectorAll('.step-badge');
      const links = container.querySelectorAll('a.step-badge');
      const spans = container.querySelectorAll('span.step-badge');

      expect(allBadges).toHaveLength(2);
      expect(links).toHaveLength(1); // Only first step
      expect(spans).toHaveLength(1); // Second step is disabled
    });

    it('should set aria-disabled on disabled steps', () => {
      const stepsWithDisabled: Step[] = [
        { label: 'Step 1', href: '#step-1' },
        { label: 'Step 2', href: '#step-2', disabled: true },
      ];
      const { container } = render(<Steps steps={stepsWithDisabled} currentStep={0} />);
      const disabledBadge = container.querySelector('.step-disabled .step-badge');
      expect(disabledBadge).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Accessibility', () => {
    it('should have nav element as navigation landmark', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const nav = container.querySelector('nav');
      expect(nav).toBeInTheDocument();
      expect(nav?.tagName).toBe('NAV');
    });

    it('should have default aria-label', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const nav = container.querySelector('nav');
      expect(nav).toHaveAttribute('aria-label', 'Progress');
    });

    it('should have custom aria-label', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} ariaLabel="Checkout Process" />
      );
      const nav = container.querySelector('nav');
      expect(nav).toHaveAttribute('aria-label', 'Checkout Process');
    });

    it('should have aria-current="step" on current step', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={1} />);
      const currentStepBadge = container.querySelector('[aria-current="step"]');
      expect(currentStepBadge).toBeInTheDocument();
    });

    it('should have screen reader text for completed steps', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={2} />);
      expect(container).toHaveTextContent('Completed: Step 1');
      expect(container).toHaveTextContent('Completed: Step 2');
    });

    it('should have screen reader text for current step', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={1} />);
      expect(container).toHaveTextContent('Current: Step 2');
    });

    it('should have screen reader text for upcoming steps', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container).toHaveTextContent('Upcoming: Step 2');
      expect(container).toHaveTextContent('Upcoming: Step 3');
    });

    it('should have aria-hidden on connector elements', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const connectors = container.querySelectorAll('.step-connector, .step-connector-vertical');
      connectors.forEach((connector) => {
        expect(connector).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('should have aria-hidden on decorative icons and numbers', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={1} />);
      const badges = container.querySelectorAll('.step-badge');
      badges.forEach((badge) => {
        const ariaHidden = badge.querySelector('[aria-hidden="true"]');
        expect(ariaHidden).toBeInTheDocument();
      });
    });
  });

  describe('CSS Classes', () => {
    it('should apply aegov-step class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container.querySelector('.aegov-step')).toBeInTheDocument();
    });

    it('should apply step-badge class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container.querySelector('.step-badge')).toBeInTheDocument();
    });

    it('should apply step-connector class for horizontal', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container.querySelector('.step-connector')).toBeInTheDocument();
    });

    it('should apply step-connector-vertical class for vertical', () => {
      const { container } = render(
        <Steps steps={defaultSteps} currentStep={0} orientation="vertical" />
      );
      expect(container.querySelector('.step-connector-vertical')).toBeInTheDocument();
    });

    it('should apply step-connector-state class', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      expect(container.querySelector('.step-connector-state')).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle single step', () => {
      const singleStep: Step[] = [{ label: 'Only Step', href: '#step-1' }];
      const { container } = render(<Steps steps={singleStep} currentStep={0} />);
      const steps = container.querySelectorAll('li');
      expect(steps).toHaveLength(1);
    });

    it('should handle many steps', () => {
      const manySteps: Step[] = Array.from({ length: 10 }, (_, i) => ({
        label: `Step ${i + 1}`,
        href: `#step-${i + 1}`,
      }));
      const { container } = render(<Steps steps={manySteps} currentStep={5} />);
      const steps = container.querySelectorAll('li');
      expect(steps).toHaveLength(10);
    });

    it('should handle currentStep being first step', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={0} />);
      const currentStep = container.querySelector('.step-current');
      expect(currentStep).toBeInTheDocument();
      const completedSteps = container.querySelectorAll('.step-completed');
      expect(completedSteps).toHaveLength(0);
    });

    it('should handle currentStep being last step', () => {
      const { container } = render(<Steps steps={defaultSteps} currentStep={2} />);
      const currentStep = container.querySelector('.step-current');
      expect(currentStep).toBeInTheDocument();
      const upcomingSteps = container.querySelectorAll('.step-upcoming');
      expect(upcomingSteps).toHaveLength(0);
    });
  });
});
