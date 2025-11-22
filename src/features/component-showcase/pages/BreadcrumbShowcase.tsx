import { Breadcrumb } from '@/shared/components/ui';

export function BreadcrumbShowcase() {
  return (
    <main className="container mx-auto px-4 py-12 space-y-16">
      <header>
        <h1 className="text-4xl font-bold mb-4">Breadcrumb Component</h1>
        <p className="text-lg text-aeblack-600 mb-8">
          Navigational aid displaying the hierarchical path or location of the current page
          within the website.
        </p>
      </header>

      {/* Example 1: Default with Slash Separator */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example 1: Default with Slash Separator</h2>
        <p className="text-aeblack-600 mb-6">
          Basic breadcrumb with forward slash separators (auto-generated via CSS).
        </p>
        <Breadcrumb
          ariaLabel="Breadcrumb Example 1"
          items={[
            { href: '#', label: 'Home' },
            { href: '#', label: 'Media centre', title: 'Media centre' },
            { href: '#', label: 'News', title: 'News' },
            { href: '#', label: 'Special articles', title: 'Special' },
            {
              href: '#',
              label: 'Press release and features',
              title: 'Press release and features',
            },
            { label: 'A really long page name that must be affected.' },
          ]}
        />
      </section>

      {/* Example 2: With Home Icon */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example 2: With Home Icon</h2>
        <p className="text-aeblack-600 mb-6">
          Breadcrumb with home icon displayed on the first item.
        </p>
        <Breadcrumb
          ariaLabel="Breadcrumb Example 2"
          showHomeIcon
          items={[
            { href: '#', label: 'Home' },
            { href: '#', label: 'Media centre', title: 'Media centre' },
            { href: '#', label: 'News', title: 'News' },
            { href: '#', label: 'Press release', title: 'Press release' },
            { label: 'A really long page name that must be affected.' },
          ]}
        />
      </section>

      {/* Example 3: Caret Separator */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example 3: Custom Caret Separator</h2>
        <p className="text-aeblack-600 mb-6">
          Breadcrumb with right-facing caret icons as separators.
        </p>
        <Breadcrumb
          ariaLabel="Breadcrumb Example 3"
          separator="caret"
          showHomeIcon
          items={[
            { href: '#', label: 'Home' },
            { href: '#', label: 'Media centre', title: 'Media centre' },
            { href: '#', label: 'News', title: 'News' },
            { href: '#', label: 'Press release', title: 'Press release' },
            { label: 'A really long page name that must be affected.' },
          ]}
        />
      </section>

      {/* Example 4: With Microdata */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Example 4: With Schema.org Microdata</h2>
        <p className="text-aeblack-600 mb-6">
          Breadcrumb with structured data attributes for SEO enhancement.
        </p>
        <Breadcrumb
          ariaLabel="Breadcrumb Example 4"
          enableMicrodata
          items={[
            { href: '#', label: 'Home' },
            { href: '#', label: 'Products' },
            { href: '#', label: 'Electronics' },
            { label: 'Smartphones' },
          ]}
        />
      </section>

      {/* Additional Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Additional Examples</h2>

        <div className="space-y-8">
          {/* Short Path */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Short Path (2 items)</h3>
            <Breadcrumb
              ariaLabel="Short Path Breadcrumb"
              items={[{ href: '#', label: 'Home' }, { label: 'About Us' }]}
            />
          </div>

          {/* All Features Combined */}
          <div>
            <h3 className="text-xl font-semibold mb-4">All Features Combined</h3>
            <Breadcrumb
              ariaLabel="Combined Features Breadcrumb"
              showHomeIcon
              separator="caret"
              enableMicrodata
              items={[
                { href: '#', label: 'Home' },
                { href: '#', label: 'Products', title: 'All products' },
                { href: '#', label: 'Electronics', title: 'Electronics category' },
                { label: 'Smartphones' },
              ]}
            />
          </div>

          {/* Arabic/RTL */}
          <div dir="rtl">
            <h3 className="text-xl font-semibold mb-4">Arabic/RTL Support</h3>
            <Breadcrumb
              ariaLabel="Arabic RTL Breadcrumb"
              items={[
                { href: '#', label: 'الصفحة الرئيسة' },
                { href: '#', label: 'المركز الإعلامي', title: 'المركز الإعلامي' },
                { href: '#', label: 'التوعية و الإرشاد', title: 'التوعية و الإرشاد' },
                { label: 'عزيزي العامل – اعرف حقوقك' },
              ]}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
