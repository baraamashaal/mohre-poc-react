import { Accordion } from '@/shared/components/ui';
import type { AccordionItem } from '@/shared/components/ui';

/**
 * AccordionShowcase Component
 *
 * Comprehensive showcase and testing page for the Accordion component.
 * Demonstrates all variants, states, and use cases from the AEGOV Design System.
 */
export const AccordionShowcase = () => {
  const faqItems: AccordionItem[] = [
    {
      value: 'faq-1',
      title: 'What is the UAE Design System?',
      children: (
        <p>
          The UAE Design System is a comprehensive library of reusable components, patterns, and
          guidelines for building consistent digital services across UAE government entities.
        </p>
      ),
    },
    {
      value: 'faq-2',
      title: 'How do I get started?',
      children: (
        <p>
          To get started, install the design system package, import the components you need, and
          follow the implementation guidelines provided in the documentation.
        </p>
      ),
    },
    {
      value: 'faq-3',
      title: 'Is it accessible?',
      children: (
        <p>
          Yes, all components are built following WCAG 2 AA guidelines and include proper ARIA
          attributes, keyboard navigation, and screen reader support.
        </p>
      ),
    },
  ];

  const serviceItems: AccordionItem[] = [
    {
      value: 'service-1',
      title: 'Personal Information',
      children: (
        <div>
          <p className="mb-2">Please provide your personal details:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Full Name</li>
            <li>Emirates ID Number</li>
            <li>Date of Birth</li>
            <li>Contact Information</li>
          </ul>
        </div>
      ),
    },
    {
      value: 'service-2',
      title: 'Required Documents',
      children: (
        <div>
          <p className="mb-2">Upload the following documents:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Emirates ID (Front and Back)</li>
            <li>Passport Copy</li>
            <li>Proof of Residence</li>
          </ul>
        </div>
      ),
    },
    {
      value: 'service-3',
      title: 'Review and Submit',
      children: (
        <div>
          <p className="mb-2">Please review your information before submitting:</p>
          <p className="text-sm text-gray-600">
            Make sure all information is accurate and all required documents are uploaded.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Accordion Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Accordion component
          </p>
        </header>

        <div className="space-y-12">
          {/* Section 1: Default Accordion */}
          <section data-testid="default-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Default Accordion</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion items={faqItems} data-testid="accordion-default" />
            </div>
          </section>

          {/* Section 2: Default Expanded */}
          <section data-testid="default-expanded-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Default Expanded Item
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={faqItems}
                defaultValue="faq-2"
                data-testid="accordion-default-expanded"
              />
            </div>
          </section>

          {/* Section 3: Multiple Mode */}
          <section data-testid="multiple-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Multiple Items Open
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion items={faqItems} multiple data-testid="accordion-multiple" />
            </div>
          </section>

          {/* Section 4: Multiple Default Expanded */}
          <section data-testid="multiple-expanded-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Multiple Items Default Expanded
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={faqItems}
                multiple
                defaultValue={['faq-1', 'faq-3']}
                data-testid="accordion-multiple-expanded"
              />
            </div>
          </section>

          {/* Section 5: Icon Rotation 180 */}
          <section data-testid="rotation-180-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              180° Icon Rotation (Chevron)
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={faqItems.map((item) => ({ ...item }))}
                defaultValue="faq-1"
                data-testid="accordion-rotation-180"
              />
            </div>
          </section>

          {/* Section 6: Icon Rotation 45 */}
          <section data-testid="rotation-45-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              45° Icon Rotation (Plus)
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={faqItems.map((item) => ({ ...item, iconRotateDeg: 45 as const }))}
                defaultValue="faq-1"
                data-testid="accordion-rotation-45"
              />
            </div>
          </section>

          {/* Section 7: Service Form */}
          <section data-testid="service-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Service Application Form
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={serviceItems}
                defaultValue="service-1"
                data-testid="accordion-service"
              />
            </div>
          </section>

          {/* Section 8: Single Item */}
          <section data-testid="single-item-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Single Item</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={[
                  {
                    value: 'single-1',
                    title: 'Help Information',
                    children: (
                      <p>Contact support at support@uae.gov.ae or call 600-HELP.</p>
                    ),
                  },
                ]}
                data-testid="accordion-single"
              />
            </div>
          </section>

          {/* Section 9: Many Items */}
          <section data-testid="many-items-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Many Items</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={Array.from({ length: 5 }, (_, i) => ({
                  value: `item-${i + 1}`,
                  title: `Section ${i + 1}`,
                  children: <p>Content for section {i + 1}</p>,
                }))}
                data-testid="accordion-many"
              />
            </div>
          </section>

          {/* Section 10: Nested Content */}
          <section data-testid="nested-content-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Nested Content</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Accordion
                items={[
                  {
                    value: 'nested-1',
                    title: 'Account Settings',
                    children: (
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold mb-1">Profile</h3>
                          <p>Manage your profile information and preferences.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Privacy</h3>
                          <p>Control your privacy settings and data sharing options.</p>
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">Security</h3>
                          <p>Update password and enable two-factor authentication.</p>
                        </div>
                      </div>
                    ),
                  },
                  {
                    value: 'nested-2',
                    title: 'Notifications',
                    children: (
                      <div className="space-y-2">
                        <p className="mb-2">Choose your notification preferences:</p>
                        <div>Email notifications</div>
                        <div>SMS notifications</div>
                        <div>Push notifications</div>
                      </div>
                    ),
                  },
                ]}
                data-testid="accordion-nested"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
