import { Input } from '@components/ui';

// Icon components defined outside component to avoid re-creation on each render
const SearchIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
      clipRule="evenodd"
    />
  </svg>
);

const EyeIcon = () => (
  <svg
    className="w-4 h-4"
    fill="currentColor"
    viewBox="0 0 20 20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
    <path
      fillRule="evenodd"
      d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
      clipRule="evenodd"
    />
  </svg>
);

/**
 * Input Component Showcase Page
 * Used for visual testing and E2E tests
 */
export const InputShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Input Component Showcase
          </h1>
          <p className="text-gray-600">
            Testing and demonstration page for Input component
          </p>
        </header>

        <main className="space-y-12">
          {/* Basic Inputs */}
          <section data-testid="input-basic-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Basic Inputs
            </h2>
            <div className="space-y-4">
              <Input placeholder="Enter text" data-testid="basic-input" />
              <Input label="First Name" placeholder="Your first name" data-testid="labeled-input" />
              <Input
                label="Email address"
                type="email"
                placeholder="Enter your email address"
                helperText="We require your email address to send you important updates."
                data-testid="input-with-helper"
              />
            </div>
          </section>

          {/* Input Sizes */}
          <section data-testid="input-sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Input Sizes
            </h2>
            <div className="space-y-4">
              <Input label="Small" size="sm" placeholder="Small input" data-testid="small-input" />
              <Input label="Base (Default)" size="base" placeholder="Base input" data-testid="base-input" />
              <Input label="Large" size="lg" placeholder="Large input" data-testid="large-input" />
            </div>
          </section>

          {/* Variants */}
          <section data-testid="input-variants-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Variants
            </h2>
            <div className="space-y-4">
              <Input label="Primary" variant="primary" placeholder="Primary variant" data-testid="primary-input" />
              <Input label="Secondary" variant="secondary" placeholder="Secondary variant" data-testid="secondary-input" />
            </div>
          </section>

          {/* States */}
          <section data-testid="input-states-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Input States
            </h2>
            <div className="space-y-4">
              <Input label="Normal" placeholder="Normal state" data-testid="normal-input" />
              <Input label="Required" placeholder="Required field" required data-testid="required-input" />
              <Input label="Disabled" placeholder="Disabled state" disabled data-testid="disabled-input" />
              <Input
                label="Error"
                error
                errorMessage="This field is required"
                placeholder="Error state"
                data-testid="error-input"
              />
            </div>
          </section>

          {/* With Icons/Prefix/Suffix */}
          <section data-testid="input-icons-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              With Icons and Text
            </h2>
            <div className="space-y-4">
              <Input
                label="Search"
                type="search"
                placeholder="Search for something"
                prefix={<SearchIcon />}
                data-testid="input-with-prefix-icon"
              />
              <Input
                label="Password"
                type="password"
                placeholder="Enter password"
                suffix={<EyeIcon />}
                data-testid="input-with-suffix-icon"
              />
              <Input
                label="Website"
                type="url"
                placeholder="www.example.com"
                prefix="https://"
                data-testid="input-with-prefix-text"
              />
              <Input
                label="Search with both"
                type="search"
                placeholder="Search"
                prefix={<SearchIcon />}
                suffix={<SearchIcon />}
                data-testid="input-with-both-icons"
              />
            </div>
          </section>

          {/* Input Types */}
          <section data-testid="input-types-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Input Types
            </h2>
            <div className="space-y-4">
              <Input label="Text" type="text" placeholder="Text input" data-testid="text-input" />
              <Input label="Email" type="email" placeholder="email@example.com" data-testid="email-input" />
              <Input label="Password" type="password" placeholder="Password" data-testid="password-input" />
              <Input label="Search" type="search" placeholder="Search" data-testid="search-input" />
              <Input label="URL" type="url" placeholder="https://example.com" data-testid="url-input" />
              <Input label="Date" type="date" data-testid="date-input" />
              <Input label="Number" type="number" placeholder="123" data-testid="number-input" />
            </div>
          </section>

          {/* Real-World Examples */}
          <section data-testid="input-examples-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Real-World Examples
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Login Form</h3>
                <div className="space-y-4 max-w-md">
                  <Input
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    data-testid="login-email"
                  />
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    required
                    suffix={<EyeIcon />}
                    data-testid="login-password"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Contact Form</h3>
                <div className="space-y-4 max-w-md">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    required
                    data-testid="contact-name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    helperText="We'll never share your email with anyone."
                    data-testid="contact-email"
                  />
                  <Input
                    label="Phone"
                    type="tel"
                    placeholder="+971 50 123 4567"
                    data-testid="contact-phone"
                  />
                  <Input
                    label="Website"
                    type="url"
                    placeholder="www.example.com"
                    prefix="https://"
                    data-testid="contact-website"
                  />
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-700 mb-3">Search Bar</h3>
                <div className="max-w-2xl">
                  <Input
                    type="search"
                    size="lg"
                    placeholder="Search for anything..."
                    prefix={<SearchIcon />}
                    data-testid="search-bar"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Accessibility Features */}
          <section data-testid="input-a11y-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Accessibility Features
            </h2>
            <div className="space-y-4">
              <Input
                label="Accessible Input"
                aria-label="Username field"
                placeholder="Enter username"
                data-testid="accessible-input"
              />
              <Input
                label="With Description"
                aria-describedby="helper-text"
                placeholder="Input with description"
                helperText="This is helper text for screen readers"
                data-testid="input-with-description"
              />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
