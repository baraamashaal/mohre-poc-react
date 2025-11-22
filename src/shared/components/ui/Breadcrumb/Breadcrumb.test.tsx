import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Breadcrumb } from './Breadcrumb';

describe('Breadcrumb', () => {
  const defaultItems = [
    { href: '/', label: 'Home' },
    { href: '/products', label: 'Products', title: 'All products' },
    { label: 'Smartphones' },
  ];

  // Happy Path Tests
  describe('Rendering', () => {
    it('should render with default props', () => {
      render(<Breadcrumb items={defaultItems} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Products')).toBeInTheDocument();
      expect(screen.getByText('Smartphones')).toBeInTheDocument();
    });

    it('should render as nav element', () => {
      render(<Breadcrumb items={defaultItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should render ol element', () => {
      const { container } = render(<Breadcrumb items={defaultItems} />);

      const ol = container.querySelector('ol');
      expect(ol).toBeInTheDocument();
    });

    it('should apply base AEGOV class', () => {
      render(<Breadcrumb items={defaultItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('aegov-breadcrumb');
    });

    it('should apply with-seperator class for slash separator', () => {
      render(<Breadcrumb items={defaultItems} separator="slash" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('with-seperator');
    });

    it('should not apply with-seperator class for caret separator', () => {
      render(<Breadcrumb items={defaultItems} separator="caret" />);

      const nav = screen.getByRole('navigation');
      expect(nav).not.toHaveClass('with-seperator');
    });

    it('should merge custom className', () => {
      render(<Breadcrumb items={defaultItems} className="custom-class" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('custom-class');
      expect(nav).toHaveClass('aegov-breadcrumb');
    });

    it('should render correct number of list items', () => {
      const { container } = render(<Breadcrumb items={defaultItems} />);

      const listItems = container.querySelectorAll('li');
      expect(listItems).toHaveLength(3);
    });

    it('should render links for all items except last', () => {
      render(<Breadcrumb items={defaultItems} />);

      const links = screen.getAllByRole('link');
      expect(links).toHaveLength(2); // First two items
    });

    it('should render last item as span without link', () => {
      render(<Breadcrumb items={defaultItems} />);

      const currentPage = screen.getByText('Smartphones');
      expect(currentPage.tagName).toBe('SPAN');
      expect(currentPage).not.toHaveAttribute('href');
    });

    it('should apply href to linked items', () => {
      render(<Breadcrumb items={defaultItems} />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toHaveAttribute('href', '/');

      const productsLink = screen.getByRole('link', { name: 'Products' });
      expect(productsLink).toHaveAttribute('href', '/products');
    });

    it('should apply title attribute to links', () => {
      render(<Breadcrumb items={defaultItems} />);

      const productsLink = screen.getByRole('link', { name: 'Products' });
      expect(productsLink).toHaveAttribute('title', 'All products');
    });

    it('should fallback to label for title when not provided', () => {
      render(<Breadcrumb items={defaultItems} />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      expect(homeLink).toHaveAttribute('title', 'Home');
    });
  });

  // Home Icon Tests
  describe('Home Icon', () => {
    it('should not render home icon by default', () => {
      const { container } = render(<Breadcrumb items={defaultItems} />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const svg = homeLink.querySelector('svg');
      expect(svg).not.toBeInTheDocument();
    });

    it('should render home icon when showHomeIcon is true', () => {
      const { container } = render(<Breadcrumb items={defaultItems} showHomeIcon />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const svg = homeLink.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should only render home icon on first item', () => {
      const { container } = render(<Breadcrumb items={defaultItems} showHomeIcon />);

      const links = screen.getAllByRole('link');
      const firstLinkSvg = links[0].querySelector('svg');
      const secondLinkSvg = links[1].querySelector('svg');

      expect(firstLinkSvg).toBeInTheDocument();
      expect(secondLinkSvg).not.toBeInTheDocument();
    });

    it('should hide home icon from screen readers', () => {
      const { container } = render(<Breadcrumb items={defaultItems} showHomeIcon />);

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const svg = homeLink.querySelector('svg');
      expect(svg).toHaveAttribute('aria-hidden', 'true');
    });
  });

  // Separator Tests
  describe('Separators', () => {
    it('should default to slash separator', () => {
      render(<Breadcrumb items={defaultItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveClass('with-seperator');
    });

    it('should render caret icons with caret separator', () => {
      const { container } = render(<Breadcrumb items={defaultItems} separator="caret" />);

      // Caret icons should be present (2 for 3 items, not on last item)
      const carets = container.querySelectorAll('svg[aria-hidden="true"]');
      expect(carets.length).toBeGreaterThan(0);
    });

    it('should hide caret separator icons from screen readers', () => {
      const { container } = render(<Breadcrumb items={defaultItems} separator="caret" />);

      const carets = container.querySelectorAll('svg[aria-hidden="true"]');
      carets.forEach((caret) => {
        expect(caret).toHaveAttribute('aria-hidden', 'true');
      });
    });

    it('should not render caret on last item', () => {
      const { container } = render(<Breadcrumb items={defaultItems} separator="caret" />);

      const listItems = container.querySelectorAll('li');
      const lastItem = listItems[listItems.length - 1];
      const caretInLastItem = lastItem.querySelector('svg[aria-hidden="true"]');

      expect(caretInLastItem).not.toBeInTheDocument();
    });
  });

  // Accessibility Tests
  describe('Accessibility', () => {
    it('should have semantic nav element', () => {
      render(<Breadcrumb items={defaultItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toBeInTheDocument();
    });

    it('should have default aria-label', () => {
      render(<Breadcrumb items={defaultItems} />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Breadcrumb');
    });

    it('should support custom aria-label', () => {
      render(<Breadcrumb items={defaultItems} ariaLabel="Page navigation" />);

      const nav = screen.getByRole('navigation');
      expect(nav).toHaveAttribute('aria-label', 'Page navigation');
    });

    it('should have aria-current on last item', () => {
      render(<Breadcrumb items={defaultItems} />);

      const currentPage = screen.getByText('Smartphones');
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    it('should have title attributes on all links', () => {
      render(<Breadcrumb items={defaultItems} />);

      const links = screen.getAllByRole('link');
      links.forEach((link) => {
        expect(link).toHaveAttribute('title');
      });
    });

    it('should support data-testid', () => {
      render(<Breadcrumb items={defaultItems} data-testid="custom-breadcrumb" />);

      const nav = screen.getByTestId('custom-breadcrumb');
      expect(nav).toBeInTheDocument();
    });

    it('should support ref forwarding', () => {
      const ref = { current: null };
      render(<Breadcrumb items={defaultItems} ref={ref} />);

      expect(ref.current).toBeInstanceOf(HTMLElement);
      expect(ref.current?.tagName).toBe('NAV');
    });
  });

  // Microdata Tests
  describe('Microdata (Schema.org)', () => {
    it('should not have microdata attributes by default', () => {
      const { container } = render(<Breadcrumb items={defaultItems} />);

      const ol = container.querySelector('ol');
      expect(ol).not.toHaveAttribute('itemscope');
      expect(ol).not.toHaveAttribute('itemtype');
    });

    it('should add microdata to ol when enabled', () => {
      const { container } = render(<Breadcrumb items={defaultItems} enableMicrodata />);

      const ol = container.querySelector('ol');
      expect(ol).toHaveAttribute('itemscope');
      expect(ol).toHaveAttribute('itemtype', 'https://schema.org/BreadcrumbList');
    });

    it('should add microdata to list items when enabled', () => {
      const { container } = render(<Breadcrumb items={defaultItems} enableMicrodata />);

      const listItems = container.querySelectorAll('li[itemprop="itemListElement"]');
      expect(listItems).toHaveLength(3);
    });

    it('should add microdata to links when enabled', () => {
      const { container } = render(<Breadcrumb items={defaultItems} enableMicrodata />);

      const links = container.querySelectorAll('a[itemprop="item"]');
      expect(links).toHaveLength(2); // Not on last item
    });

    it('should wrap link text in span with itemprop when microdata enabled', () => {
      const { container } = render(<Breadcrumb items={defaultItems} enableMicrodata />);

      const nameSpans = container.querySelectorAll('span[itemprop="name"]');
      expect(nameSpans.length).toBeGreaterThan(0);
    });

    it('should add itemprop to current page span when microdata enabled', () => {
      render(<Breadcrumb items={defaultItems} enableMicrodata />);

      const currentPage = screen.getByText('Smartphones');
      expect(currentPage).toHaveAttribute('itemprop', 'name');
    });
  });

  // Edge Cases
  describe('Edge Cases', () => {
    it('should handle empty items array', () => {
      const { container } = render(<Breadcrumb items={[]} />);

      const ol = container.querySelector('ol');
      expect(ol).toBeInTheDocument();
      expect(ol?.children).toHaveLength(0);
    });

    it('should handle single item', () => {
      render(<Breadcrumb items={[{ label: 'Home' }]} />);

      expect(screen.getByText('Home')).toBeInTheDocument();
      expect(screen.getByText('Home')).toHaveAttribute('aria-current', 'page');
      expect(screen.queryByRole('link')).not.toBeInTheDocument();
    });

    it('should handle very long labels', () => {
      const longLabel = 'A'.repeat(200);
      render(<Breadcrumb items={[{ href: '/', label: 'Home' }, { label: longLabel }]} />);

      expect(screen.getByText(longLabel)).toBeInTheDocument();
    });

    it('should handle special characters in labels', () => {
      const items = [
        { href: '/', label: 'Home' },
        { href: '/test', label: 'Test & Co.' },
        { label: '<Special> "Chars"' },
      ];
      render(<Breadcrumb items={items} />);

      expect(screen.getByText('Test & Co.')).toBeInTheDocument();
      expect(screen.getByText('<Special> "Chars"')).toBeInTheDocument();
    });

    it('should handle Arabic/RTL text', () => {
      const items = [
        { href: '/', label: 'الصفحة الرئيسة' },
        { href: '/media', label: 'المركز الإعلامي' },
        { label: 'عزيزي العامل – اعرف حقوقك' },
      ];
      render(<Breadcrumb items={items} />);

      expect(screen.getByText('الصفحة الرئيسة')).toBeInTheDocument();
      expect(screen.getByText('المركز الإعلامي')).toBeInTheDocument();
      expect(screen.getByText('عزيزي العامل – اعرف حقوقك')).toBeInTheDocument();
    });

    it('should handle items with only label (no href)', () => {
      const items = [
        { href: '/', label: 'Home' },
        { label: 'Current Page' },
      ];
      render(<Breadcrumb items={items} />);

      const currentPage = screen.getByText('Current Page');
      expect(currentPage.tagName).toBe('SPAN');
      expect(currentPage).toHaveAttribute('aria-current', 'page');
    });

    it('should handle all items having hrefs', () => {
      const items = [
        { href: '/', label: 'Home' },
        { href: '/about', label: 'About', title: 'About Us' },
      ];
      render(<Breadcrumb items={items} />);

      // Last item should still be span without href
      const aboutText = screen.getByText('About');
      expect(aboutText.tagName).toBe('SPAN');
      expect(aboutText).toHaveAttribute('aria-current', 'page');
    });

    it('should handle URLs with query parameters', () => {
      const items = [
        { href: '/', label: 'Home' },
        { href: '/search?q=test', label: 'Search Results', title: 'Search: test' },
        { label: 'Product' },
      ];
      render(<Breadcrumb items={items} />);

      const searchLink = screen.getByRole('link', { name: 'Search Results' });
      expect(searchLink).toHaveAttribute('href', '/search?q=test');
    });

    it('should handle URLs with fragments', () => {
      const items = [
        { href: '/', label: 'Home' },
        { href: '/docs#section', label: 'Documentation', title: 'Docs Section' },
        { label: 'API' },
      ];
      render(<Breadcrumb items={items} />);

      const docsLink = screen.getByRole('link', { name: 'Documentation' });
      expect(docsLink).toHaveAttribute('href', '/docs#section');
    });
  });

  // Combinations
  describe('Feature Combinations', () => {
    it('should support home icon with caret separator', () => {
      const { container } = render(
        <Breadcrumb items={defaultItems} showHomeIcon separator="caret" />
      );

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const homeIcon = homeLink.querySelector('svg');
      expect(homeIcon).toBeInTheDocument();

      // Should also have caret separators
      const nav = screen.getByRole('navigation');
      expect(nav).not.toHaveClass('with-seperator');
    });

    it('should support home icon with microdata', () => {
      const { container } = render(
        <Breadcrumb items={defaultItems} showHomeIcon enableMicrodata />
      );

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const homeIcon = homeLink.querySelector('svg');
      expect(homeIcon).toBeInTheDocument();

      const ol = container.querySelector('ol');
      expect(ol).toHaveAttribute('itemscope');
    });

    it('should support all features combined', () => {
      const { container } = render(
        <Breadcrumb
          items={defaultItems}
          showHomeIcon
          separator="caret"
          enableMicrodata
          ariaLabel="Custom navigation"
          className="custom-breadcrumb"
          data-testid="full-featured"
        />
      );

      const nav = screen.getByTestId('full-featured');
      expect(nav).toHaveClass('custom-breadcrumb');
      expect(nav).toHaveAttribute('aria-label', 'Custom navigation');
      expect(nav).not.toHaveClass('with-seperator');

      const homeLink = screen.getByRole('link', { name: 'Home' });
      const homeIcon = homeLink.querySelector('svg');
      expect(homeIcon).toBeInTheDocument();

      const ol = container.querySelector('ol');
      expect(ol).toHaveAttribute('itemscope');
    });
  });
});
