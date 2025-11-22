import { Link } from 'react-router-dom';
import { routes } from '../../../routes/routes.config';

interface ShowcaseItem {
  name: string;
  path: string;
  available: boolean;
}

export const ShowcaseIndex = () => {
  const showcases: ShowcaseItem[] = [
    { name: 'Accordion', path: routes.showcase.accordion, available: true },
    { name: 'Alert', path: routes.showcase.alert, available: true },
    { name: 'Avatar', path: routes.showcase.avatar, available: true },
    { name: 'Badge', path: routes.showcase.badge, available: true },
    { name: 'Banner', path: routes.showcase.banner, available: true },
    { name: 'Blockquote', path: routes.showcase.blockquote, available: true },
    { name: 'Breadcrumb', path: routes.showcase.breadcrumb, available: true },
    { name: 'Button', path: routes.showcase.button, available: false }, // Coming Soon
    { name: 'Card', path: routes.showcase.card, available: true },
    { name: 'Checkbox', path: routes.showcase.checkbox, available: true },
    { name: 'Dropdown', path: routes.showcase.dropdown, available: true },
    { name: 'File Input', path: routes.showcase.fileInput, available: true },
    { name: 'Hyperlink', path: routes.showcase.hyperlink, available: true },
    { name: 'Input', path: routes.showcase.input, available: true },
    { name: 'Pagination', path: routes.showcase.pagination, available: true },
    { name: 'Radio', path: routes.showcase.radio, available: true },
    { name: 'Range Slider', path: routes.showcase.rangeSlider, available: true },
    { name: 'Select', path: routes.showcase.select, available: true },
    { name: 'Slider', path: routes.showcase.slider, available: true },
    { name: 'Steps', path: routes.showcase.steps, available: true },
    { name: 'Textarea', path: routes.showcase.textarea, available: true },
    { name: 'Toggle', path: routes.showcase.toggle, available: true },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AEGOV Component Showcases
          </h1>
          <p className="text-lg text-gray-600">
            Interactive demonstrations of all UAE Government Design System components.
            These showcases are used for E2E testing and visual verification.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {showcases.map((showcase) => (
            <div
              key={showcase.path}
              className={`
                bg-white rounded-lg shadow-sm border-2 transition-all
                ${
                  showcase.available
                    ? 'border-gray-200 hover:border-primary-500 hover:shadow-md'
                    : 'border-gray-100 bg-gray-50'
                }
              `}
            >
              {showcase.available ? (
                <Link
                  to={showcase.path}
                  className="block p-6 h-full group"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {showcase.name}
                  </h2>
                  <p className="text-sm text-gray-500">
                    View showcase →
                  </p>
                </Link>
              ) : (
                <div className="p-6 h-full cursor-not-allowed">
                  <h2 className="text-xl font-semibold text-gray-400 mb-2">
                    {showcase.name}
                  </h2>
                  <p className="text-sm text-gray-400 inline-flex items-center gap-2">
                    <span className="inline-block px-2 py-1 bg-gray-200 text-gray-600 text-xs font-medium rounded">
                      Coming Soon
                    </span>
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <footer className="mt-12 pt-8 border-t border-gray-200">
          <div className="text-center text-sm text-gray-500">
            <p>
              <strong>{showcases.filter((s) => s.available).length}</strong> of{' '}
              <strong>{showcases.length}</strong> components available
            </p>
            <p className="mt-2">
              Based on the{' '}
              <a
                href="https://designsystem.gov.ae"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline"
              >
                UAE Government Design System (AEGOV)
              </a>
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
};
