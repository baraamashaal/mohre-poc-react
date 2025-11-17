import { useState } from 'react';
import { Button } from '@components/ui';
import { CodeBlock } from '../components/CodeBlock';
import { PropsTable } from '../components/PropsTable';

/**
 * Button Component Documentation
 */
export default function ButtonDocs() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  const buttonProps = [
    {
      name: 'variant',
      type: "'solid' | 'outline' | 'soft' | 'link'",
      default: "'solid'",
      description: 'Visual style variant of the button',
    },
    {
      name: 'size',
      type: "'xs' | 'sm' | 'base' | 'lg'",
      default: "'base'",
      description: 'Size of the button',
    },
    {
      name: 'color',
      type: "'primary' | 'secondary'",
      default: "'primary'",
      description: 'Color scheme',
    },
    {
      name: 'disabled',
      type: 'boolean',
      default: 'false',
      description: 'Whether the button is disabled',
    },
    {
      name: 'loading',
      type: 'boolean',
      default: 'false',
      description: 'Shows loading spinner and disables the button',
    },
    {
      name: 'fullWidth',
      type: 'boolean',
      default: 'false',
      description: 'Makes the button take full width of container',
    },
    {
      name: 'iconOnly',
      type: 'boolean',
      default: 'false',
      description: 'For icon-only buttons without text',
    },
    {
      name: 'leftIcon',
      type: 'ReactNode',
      description: 'Icon to display before the button text',
    },
    {
      name: 'rightIcon',
      type: 'ReactNode',
      description: 'Icon to display after the button text',
    },
    {
      name: 'onClick',
      type: '(e: MouseEvent) => void',
      description: 'Click handler function',
    },
    {
      name: 'children',
      type: 'ReactNode',
      description: 'Button content',
      required: true,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Button</h1>
          <p className="text-xl text-gray-600">
            Accessible, animated button component based on UAE Government Design System.
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Example */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Basic Example</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap gap-4">
                <Button>Default Button</Button>
                <Button onClick={() => alert('Clicked!')}>Click Me</Button>
              </div>
            </div>
            <CodeBlock
              code={`import { Button } from '@components/ui';

function Example() {
  return (
    <>
      <Button>Default Button</Button>
      <Button onClick={() => alert('Clicked!')}>Click Me</Button>
    </>
  );
}`}
            />
          </section>

          {/* Variants */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Variants</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap gap-4">
                <Button variant="solid">Solid</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="soft">Soft</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>
            <CodeBlock
              code={`<Button variant="solid">Solid</Button>
<Button variant="outline">Outline</Button>
<Button variant="soft">Soft</Button>
<Button variant="link">Link</Button>`}
            />
          </section>

          {/* Sizes */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Sizes</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap items-center gap-4">
                <Button size="xs">Extra Small</Button>
                <Button size="sm">Small</Button>
                <Button size="base">Base</Button>
                <Button size="lg">Large</Button>
              </div>
            </div>
            <CodeBlock
              code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="base">Base</Button>
<Button size="lg">Large</Button>`}
            />
          </section>

          {/* Colors */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Colors</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap gap-4">
                <Button color="primary">Primary</Button>
                <Button color="secondary">Secondary</Button>
              </div>
            </div>
            <CodeBlock
              code={`<Button color="primary">Primary</Button>
<Button color="secondary">Secondary</Button>`}
            />
          </section>

          {/* States */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">States</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap gap-4">
                <Button onClick={() => setCount(count + 1)}>
                  Clicked {count} times
                </Button>
                <Button disabled>Disabled</Button>
                <Button loading={loading} onClick={handleLoadingClick}>
                  {loading ? 'Loading...' : 'Click to Load'}
                </Button>
              </div>
            </div>
            <CodeBlock
              code={`const [loading, setLoading] = useState(false);

<Button onClick={() => setCount(count + 1)}>
  Clicked {count} times
</Button>
<Button disabled>Disabled</Button>
<Button loading={loading} onClick={handleLoadingClick}>
  {loading ? 'Loading...' : 'Click to Load'}
</Button>`}
            />
          </section>

          {/* With Icons */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">With Icons</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="flex flex-wrap gap-4">
                <Button
                  leftIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
                    </svg>
                  }
                >
                  Left Icon
                </Button>
                <Button
                  rightIcon={
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                      <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
                    </svg>
                  }
                >
                  Right Icon
                </Button>
                <Button iconOnly aria-label="Icon Only">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                    <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
                  </svg>
                </Button>
              </div>
            </div>
            <CodeBlock
              code={`<Button leftIcon={<Icon />}>Left Icon</Button>
<Button rightIcon={<Icon />}>Right Icon</Button>
<Button iconOnly aria-label="Icon Only">
  <Icon />
</Button>`}
            />
          </section>

          {/* Full Width */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Full Width</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-4">
              <div className="max-w-md">
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>
            <CodeBlock
              code={`<Button fullWidth>Full Width Button</Button>`}
            />
          </section>

          {/* Props API */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Props</h2>
            <PropsTable props={buttonProps} />
          </section>

          {/* Accessibility */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Accessibility</h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Fully keyboard accessible (Tab, Enter, Space)</li>
                <li>Proper ARIA attributes (aria-disabled, aria-label)</li>
                <li>Focus visible states</li>
                <li>Loading state announced to screen readers</li>
                <li>RTL (Right-to-Left) support for Arabic</li>
                <li>WCAG 2.2 compliant</li>
              </ul>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
