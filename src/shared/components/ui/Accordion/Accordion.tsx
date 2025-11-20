import { useState, useId } from 'react';
import clsx from 'clsx';
import type { AccordionProps, AccordionItem } from './Accordion.types';

/**
 * Default Chevron Icon for Accordion (AEGOV Design System)
 */
const ChevronIcon = ({ className }: { className?: string }) => (
  <svg
    className={className || 'w-5 h-5 transition-transform duration-200'}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 256 256"
    data-accordion-icon
  >
    <rect width="256" height="256" fill="none" />
    <polyline
      points="208 96 128 176 48 96"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="16"
    />
  </svg>
);

/**
 * Plus Icon for Alternative Accordion Style (AEGOV Design System)
 */
const PlusIcon = ({ className }: { className?: string }) => (
  <svg
    className={className || 'w-6 h-6 transition-transform duration-200'}
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    data-accordion-icon
  >
    <path
      d="M21.375 12C21.375 12.2984 21.2565 12.5845 21.0455 12.7955C20.8345 13.0065 20.5484 13.125 20.25 13.125H13.125V20.25C13.125 20.5484 13.0065 20.8345 12.7955 21.0455C12.5845 21.2565 12.2984 21.375 12 21.375C11.7016 21.375 11.4155 21.2565 11.2045 21.0455C10.9935 20.8345 10.875 20.5484 10.875 20.25V13.125H3.75C3.45163 13.125 3.16548 13.0065 2.9545 12.7955C2.74353 12.5845 2.625 12.2984 2.625 12C2.625 11.7016 2.74353 11.4155 2.9545 11.2045C3.16548 10.9935 3.45163 10.875 3.75 10.875H10.875V3.75C10.875 3.45163 10.9935 3.16548 11.2045 2.9545C11.4155 2.74353 11.7016 2.625 12 2.625C12.2984 2.625 12.5845 2.74353 12.7955 2.9545C13.0065 3.16548 13.125 3.45163 13.125 3.75V10.875H20.25C20.5484 10.875 20.8345 10.9935 21.0455 11.2045C21.2565 11.4155 21.375 11.7016 21.375 12Z"
      fill="currentColor"
    />
  </svg>
);

/**
 * Individual Accordion Item Component
 */
interface AccordionItemComponentProps {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
  headerId: string;
  contentId: string;
}

const AccordionItemComponent = ({
  item,
  isOpen,
  onToggle,
  headerId,
  contentId,
}: AccordionItemComponentProps) => {
  const iconRotateDeg = item.iconRotateDeg || 180;
  const iconRotationClass = iconRotateDeg === 45 ? 'rotate-45' : 'rotate-180';

  // Render icon with rotation class
  const renderIcon = () => {
    if (item.icon) {
      return item.icon;
    }

    const DefaultIconComponent = iconRotateDeg === 45 ? PlusIcon : ChevronIcon;
    const iconClassName = isOpen
      ? clsx('w-5 h-5 transition-transform duration-200 accordion-active', iconRotationClass)
      : 'w-5 h-5 transition-transform duration-200';

    return <DefaultIconComponent className={iconClassName} />;
  };

  return (
    <div className="accordion-item">
      <div className="accordion-title" id={headerId}>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={contentId}
          data-accordion-target={`#${contentId}`}
        >
          <span>{item.title}</span>
          <span>{renderIcon()}</span>
        </button>
      </div>
      <div
        id={contentId}
        className={clsx('accordion-content', { hidden: !isOpen })}
        aria-labelledby={headerId}
        style={{ display: isOpen ? 'block' : 'none' }}
      >
        <div className="accordion-content-body">{item.children}</div>
      </div>
    </div>
  );
};

/**
 * Accordion Component
 *
 * A collapsible content component that organizes information into expandable sections.
 * Follows AEGOV Design System patterns for accordions.
 *
 * @example
 * ```tsx
 * // Basic accordion
 * <Accordion items={[
 *   { value: '1', title: 'Section 1', children: <div>Content 1</div> },
 *   { value: '2', title: 'Section 2', children: <div>Content 2</div> }
 * ]} />
 *
 * // With default expanded item
 * <Accordion
 *   items={items}
 *   defaultValue="item-1"
 * />
 *
 * // Multiple items can be open
 * <Accordion
 *   items={items}
 *   multiple
 *   defaultValue={['item-1', 'item-2']}
 * />
 *
 * // Custom icon rotation
 * <Accordion items={[
 *   { value: '1', title: 'Section 1', children: <div>Content</div>, iconRotateDeg: 45 }
 * ]} />
 * ```
 */
export const Accordion = ({
  items,
  defaultValue,
  multiple = false,
  className,
  'data-testid': dataTestId,
}: AccordionProps) => {
  const autoId = useId();

  // Initialize open items based on defaultValue
  const initialOpenItems = (() => {
    if (!defaultValue) return [];
    if (Array.isArray(defaultValue)) return defaultValue;
    return [defaultValue];
  })();

  const [openItems, setOpenItems] = useState<string[]>(initialOpenItems);

  const handleToggle = (value: string) => {
    if (multiple) {
      // In multiple mode, toggle the item in the array
      setOpenItems((prev) =>
        prev.includes(value) ? prev.filter((item) => item !== value) : [...prev, value]
      );
    } else {
      // In single mode, only one item can be open
      setOpenItems((prev) => (prev.includes(value) ? [] : [value]));
    }
  };

  return (
    <div
      className={clsx('aegov-accordion [&_.accordion-active_svg]:rotate-180', className)}
      data-accordion="collapse"
      data-testid={dataTestId}
    >
      {items.map((item, index) => {
        const headerId = `accordion-header-${autoId}-${index}`;
        const contentId = `accordion-content-${autoId}-${index}`;
        const isOpen = openItems.includes(item.value);

        return (
          <AccordionItemComponent
            key={item.value}
            item={item}
            isOpen={isOpen}
            onToggle={() => handleToggle(item.value)}
            headerId={headerId}
            contentId={contentId}
          />
        );
      })}
    </div>
  );
};
