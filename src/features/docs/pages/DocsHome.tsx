import { Link } from 'react-router-dom';
import { Button } from '@components/ui';

/**
 * Documentation Home Page
 *
 * Lists all available component documentation
 */
export default function DocsHome() {
  const components = [
    {
      name: 'Button',
      description: 'Accessible, animated button component with multiple variants and sizes',
      path: '/docs/button',
      category: 'UI Components',
    },
    // Add more components as they are created
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Component Documentation
          </h1>
          <p className="text-xl text-gray-600">
            Browse documentation for all AEGOV Design System components
          </p>
        </header>

        <main>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              UI Components
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components
                .filter((c) => c.category === 'UI Components')
                .map((component) => (
                  <Link
                    key={component.path}
                    to={component.path}
                    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:border-primary-500 hover:shadow-md transition-all group"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {component.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{component.description}</p>
                    <Button variant="link" className="p-0">
                      View Documentation →
                    </Button>
                  </Link>
                ))}
            </div>
          </section>

          {/* Placeholder for Form Components */}
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">
              Form Components
            </h2>
            <p className="text-gray-600">Coming soon...</p>
          </section>
        </main>
      </div>
    </div>
  );
}
