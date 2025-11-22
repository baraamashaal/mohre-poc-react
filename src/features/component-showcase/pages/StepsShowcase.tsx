import { Steps } from '../../../shared/components/ui';
import type { Step } from '../../../shared/components/ui';

export const StepsShowcase = () => {
  const basicSteps: Step[] = [
    { label: 'Personal Info', href: '#step-1' },
    { label: 'Contact Details', href: '#step-2' },
    { label: 'Review', href: '#step-3' },
  ];

  const manySteps: Step[] = [
    { label: 'Account Setup', href: '#step-1' },
    { label: 'Personal Information', href: '#step-2' },
    { label: 'Contact Details', href: '#step-3' },
    { label: 'Verification', href: '#step-4' },
    { label: 'Review & Submit', href: '#step-5' },
  ];

  const stepsWithDisabled: Step[] = [
    { label: 'Completed Step', href: '#step-1' },
    { label: 'Current Step', href: '#step-2' },
    { label: 'Disabled Step', href: '#step-3', disabled: true },
    { label: 'Future Step', href: '#step-4' },
  ];

  const stepsWithoutLinks: Step[] = [
    { label: 'Step 1' },
    { label: 'Step 2' },
    { label: 'Step 3' },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header>
          <h1 className="text-3xl font-bold mb-2">Steps Component</h1>
          <p className="text-gray-600">
            Simplifies complex processes by breaking them down into sequential steps.
          </p>
        </header>

        <section className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Default (Horizontal)</h2>
            <p className="text-sm text-gray-600">Basic horizontal steps on step 2 of 3</p>
            <div data-testid="steps-default">
              <Steps steps={basicSteps} currentStep={1} ariaLabel="Progress Example 1" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">With Labels</h2>
            <p className="text-sm text-gray-600">Steps with visible labels below indicators</p>
            <div data-testid="steps-with-labels">
              <Steps steps={basicSteps} currentStep={1} showLabels ariaLabel="Progress Example 2" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">First Step</h2>
            <p className="text-sm text-gray-600">Progress indicator on the first step</p>
            <div data-testid="steps-first">
              <Steps steps={basicSteps} currentStep={0} showLabels ariaLabel="Progress Example 3" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Last Step</h2>
            <p className="text-sm text-gray-600">All steps completed except the current (last)</p>
            <div data-testid="steps-last">
              <Steps steps={basicSteps} currentStep={2} showLabels ariaLabel="Progress Example 4" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Many Steps</h2>
            <p className="text-sm text-gray-600">Workflow with 5 steps, currently on step 3</p>
            <div data-testid="steps-many">
              <Steps steps={manySteps} currentStep={2} showLabels ariaLabel="Progress Example 5" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Small Size</h2>
            <p className="text-sm text-gray-600">Compact version with 32px indicators</p>
            <div data-testid="steps-small">
              <Steps steps={basicSteps} currentStep={1} size="sm" showLabels ariaLabel="Progress Example 6" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Large Size</h2>
            <p className="text-sm text-gray-600">Large version with 48px indicators</p>
            <div data-testid="steps-large">
              <Steps steps={basicSteps} currentStep={1} size="lg" showLabels ariaLabel="Progress Example 7" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Vertical Orientation</h2>
            <p className="text-sm text-gray-600">Stacked layout for sidebars or narrow spaces</p>
            <div data-testid="steps-vertical">
              <Steps
                steps={basicSteps}
                currentStep={1}
                orientation="vertical"
                showLabels
                ariaLabel="Progress Example 8"
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">With Disabled Steps</h2>
            <p className="text-sm text-gray-600">Step 3 is disabled and not accessible</p>
            <div data-testid="steps-with-disabled">
              <Steps steps={stepsWithDisabled} currentStep={1} showLabels ariaLabel="Progress Example 9" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Without Links</h2>
            <p className="text-sm text-gray-600">Non-clickable steps without href attributes</p>
            <div data-testid="steps-without-links">
              <Steps steps={stepsWithoutLinks} currentStep={1} showLabels ariaLabel="Progress Example 10" />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">All Completed</h2>
            <p className="text-sm text-gray-600">All steps shown as completed (currentStep beyond last)</p>
            <div data-testid="steps-all-completed">
              <Steps steps={basicSteps} currentStep={3} showLabels ariaLabel="Progress Example 11" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
