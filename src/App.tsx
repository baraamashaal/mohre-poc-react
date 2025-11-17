import { useState } from 'react';
import { Button } from '@components/Button';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleLoadingClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">AEGOV Button Component</h1>

        {/* Variants */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Variants</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="solid">Solid Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="soft">Soft Button</Button>
            <Button variant="link">Link Button</Button>
          </div>
        </section>

        {/* Sizes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Sizes</h2>
          <div className="flex flex-wrap items-center gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="sm">Small</Button>
            <Button size="base">Base</Button>
            <Button size="lg">Large</Button>
          </div>
        </section>

        {/* Colors */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Colors</h2>
          <div className="flex flex-wrap gap-4">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
          </div>
        </section>

        {/* States */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">States</h2>
          <div className="flex flex-wrap gap-4">
            <Button onClick={() => setCount(count + 1)}>
              Clicked {count} times
            </Button>
            <Button disabled>Disabled Button</Button>
            <Button loading={loading} onClick={handleLoadingClick}>
              {loading ? 'Loading...' : 'Click to Load'}
            </Button>
          </div>
        </section>

        {/* Icons */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">With Icons</h2>
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
            <Button
              iconOnly
              aria-label="Icon Only"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 256 256" fill="currentColor">
                <path d="M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24Z"/>
              </svg>
            </Button>
          </div>
        </section>

        {/* Full Width */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Full Width</h2>
          <div className="max-w-md">
            <Button fullWidth>Full Width Button</Button>
          </div>
        </section>

        {/* Combinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Combinations</h2>
          <div className="flex flex-wrap gap-4">
            <Button variant="outline" size="lg" color="secondary">
              Large Secondary Outline
            </Button>
            <Button variant="soft" size="sm">
              Small Soft
            </Button>
            <Button variant="link" size="xs">
              Extra Small Link
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
