import { forwardRef } from 'react';
import clsx from 'clsx';
import { House, CaretRight } from '@phosphor-icons/react';
import type { BreadcrumbProps } from './Breadcrumb.types';

/**
 * Breadcrumb Component
 *
 * Navigational aid displaying the hierarchical path of the current page.
 * Enables users to understand their position within the site structure.
 *
 * @see https://designsystem.gov.ae/docs/components/breadcrumbs
 *
 * @example
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { href: '/', label: 'Home' },
 *     { href: '/products', label: 'Products', title: 'All products' },
 *     { label: 'Smartphones' }
 *   ]}
 * />
 * ```
 *
 * @example With home icon
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { href: '/', label: 'Home' },
 *     { href: '/about', label: 'About Us' },
 *     { label: 'Our Mission' }
 *   ]}
 *   showHomeIcon
 * />
 * ```
 *
 * @example With caret separator
 * ```tsx
 * <Breadcrumb
 *   items={[
 *     { href: '/', label: 'Home' },
 *     { href: '/news', label: 'News' },
 *     { label: 'Article Title' }
 *   ]}
 *   separator="caret"
 * />
 * ```
 */
export const Breadcrumb = forwardRef<HTMLElement, BreadcrumbProps>(
  (
    {
      items,
      separator = 'slash',
      showHomeIcon = false,
      enableMicrodata = false,
      ariaLabel = 'Breadcrumb',
      className,
      'data-testid': dataTestId,
      ...rest
    },
    ref
  ) => {
    const navClasses = clsx(
      'aegov-breadcrumb',
      {
        'with-seperator': separator === 'slash',
      },
      className
    );

    // Determine if first item should show home icon
    const shouldShowHomeIcon = showHomeIcon && items.length > 0;

    const renderSeparator = () => {
      if (separator === 'caret') {
        return (
          <CaretRight
            className="w-4 h-4 inline-block mx-2"
            aria-hidden="true"
            weight="regular"
          />
        );
      }
      return null; // Slash separator handled by CSS with 'with-seperator' class
    };

    const renderItem = (item: typeof items[number], index: number) => {
      const isLastItem = index === items.length - 1;
      const isFirstItem = index === 0;

      // Microdata attributes
      const microdataProps = enableMicrodata
        ? {
            itemProp: 'itemListElement',
            itemScope: true,
            itemType: 'https://schema.org/ListItem',
          }
        : {};

      if (isLastItem) {
        // Current page (no link)
        return (
          <li key={index} {...microdataProps}>
            <span aria-current="page" {...(enableMicrodata && { itemProp: 'name' })}>
              {item.label}
            </span>
          </li>
        );
      }

      // Linked breadcrumb item
      return (
        <li key={index} {...microdataProps}>
          <a
            href={item.href}
            title={item.title || item.label}
            {...(enableMicrodata && { itemProp: 'item' })}
          >
            {isFirstItem && shouldShowHomeIcon && (
              <House
                className="inline-block"
                size={16}
                weight="regular"
                aria-hidden="true"
              />
            )}
            {enableMicrodata ? (
              <span itemProp="name">{item.label}</span>
            ) : (
              item.label
            )}
          </a>
          {separator === 'caret' && renderSeparator()}
        </li>
      );
    };

    const olProps = enableMicrodata
      ? {
          itemScope: true,
          itemType: 'https://schema.org/BreadcrumbList',
        }
      : {};

    return (
      <nav
        ref={ref}
        aria-label={ariaLabel}
        className={navClasses}
        data-testid={dataTestId}
        {...rest}
      >
        <ol {...olProps}>{items.map((item, index) => renderItem(item, index))}</ol>
      </nav>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';
