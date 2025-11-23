import { useState, useCallback, KeyboardEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import type { TabsProps } from './Tabs.types';

/**
 * AEGOV Tabs component
 *
 * Organizes content in separate sections for easy navigation.
 * Supports keyboard navigation and multiple visual variants.
 *
 * @example
 * Basic usage:
 * ```tsx
 * <Tabs
 *   items={[
 *     { id: 'profile', label: 'Profile', content: <div>Profile content</div> },
 *     { id: 'dashboard', label: 'Dashboard', content: <div>Dashboard content</div> }
 *   ]}
 * />
 * ```
 *
 * @example
 * With icons, pills style, and compact size:
 * ```tsx
 * <Tabs
 *   variant="pills"
 *   size="compact"
 *   items={[
 *     { id: 'home', label: 'Home', icon: <HomeIcon />, content: <div>Home</div> },
 *     { id: 'settings', label: 'Settings', icon: <SettingsIcon />, content: <div>Settings</div> }
 *   ]}
 * />
 * ```
 *
 * @example
 * Controlled mode:
 * ```tsx
 * const [activeTab, setActiveTab] = useState('profile');
 * <Tabs
 *   activeTab={activeTab}
 *   onChange={setActiveTab}
 *   items={[...]}
 * />
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  size = 'default',
  variant = 'default',
  activeTab: controlledActiveTab,
  defaultActiveTab,
  onChange,
  className,
  ariaLabel = 'Tabs',
  'data-testid': dataTestId = 'tabs',
}) => {
  // Determine if component is controlled
  const isControlled = controlledActiveTab !== undefined;

  // Internal state for uncontrolled mode
  const [internalActiveTab, setInternalActiveTab] = useState<string>(
    defaultActiveTab || items[0]?.id || ''
  );

  // Use controlled or uncontrolled value
  const activeTabId = isControlled ? controlledActiveTab : internalActiveTab;

  /**
   * Handle tab change
   */
  const handleTabChange = useCallback(
    (tabId: string) => {
      // Don't change if tab is disabled
      const tab = items.find((item) => item.id === tabId);
      if (tab?.disabled) return;

      // Update internal state if uncontrolled
      if (!isControlled) {
        setInternalActiveTab(tabId);
      }

      // Call onChange callback
      onChange?.(tabId);
    },
    [items, isControlled, onChange]
  );

  /**
   * Handle keyboard navigation
   */
  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLAnchorElement>, currentIndex: number) => {
      const enabledItems = items.filter((item) => !item.disabled);
      const currentEnabledIndex = enabledItems.findIndex((item) => item.id === items[currentIndex].id);

      let targetIndex = currentEnabledIndex;

      switch (event.key) {
        case 'ArrowRight':
        case 'ArrowDown':
          event.preventDefault();
          targetIndex = (currentEnabledIndex + 1) % enabledItems.length;
          break;

        case 'ArrowLeft':
        case 'ArrowUp':
          event.preventDefault();
          targetIndex = (currentEnabledIndex - 1 + enabledItems.length) % enabledItems.length;
          break;

        case 'Home':
          event.preventDefault();
          targetIndex = 0;
          break;

        case 'End':
          event.preventDefault();
          targetIndex = enabledItems.length - 1;
          break;

        case 'Enter':
        case ' ':
          event.preventDefault();
          handleTabChange(items[currentIndex].id);
          return;

        default:
          return;
      }

      // Focus and activate the target tab
      const targetTab = enabledItems[targetIndex];
      if (targetTab) {
        handleTabChange(targetTab.id);
        // Focus the new tab
        const tabElement = document.querySelector(
          `[data-tabs-target="#${targetTab.id}"]`
        ) as HTMLElement;
        tabElement?.focus();
      }
    },
    [items, handleTabChange]
  );

  /**
   * Get wrapper classes (size + style modifiers on wrapper)
   */
  const getWrapperClasses = () => {
    return clsx('aegov-tab', {
      'tab-sm': size === 'compact',
      'tab-pills': variant === 'pills',
    }, className);
  };

  /**
   * Get tab link classes (base classes + active/inactive + pills height/padding)
   */
  const getTabLinkClasses = (isActive: boolean) => {
    return clsx('tab-link whitespace-nowrap', {
      'tab-active': isActive,
      'tab-inactive': !isActive,
      'h-10 lg:h-12 px-4 lg:px-6': variant === 'pills',
    });
  };

  return (
    <div className={getWrapperClasses()} data-testid={dataTestId}>
      {/* Tab List */}
      <ul
        className="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto"
        role="tablist"
        aria-label={ariaLabel}
        data-testid={`${dataTestId}-list`}
      >
        {items.map((item, index) => {
          const isActive = item.id === activeTabId;

          return (
            <li key={item.id} role="presentation">
              <a
                href="#"
                role="tab"
                data-tabs-target={`#${item.id}`}
                aria-controls={item.id}
                aria-selected={isActive}
                aria-label={item.ariaLabel}
                aria-disabled={item.disabled}
                tabIndex={isActive ? 0 : -1}
                onClick={(e) => {
                  e.preventDefault();
                  handleTabChange(item.id);
                }}
                onKeyDown={(e) => handleKeyDown(e, index)}
                className={clsx(getTabLinkClasses(isActive), {
                  'pointer-events-none opacity-50': item.disabled,
                })}
                data-testid={`${dataTestId}-tab-${item.id}`}
              >
                {item.icon && (
                  <span className="w-4 h-4 mr-2 inline-flex items-center" aria-hidden="true">
                    {item.icon}
                  </span>
                )}
                {item.label}
              </a>
            </li>
          );
        })}
      </ul>

      {/* Tab Panels */}
      <div data-testid={`${dataTestId}-content`}>
        {items.map((item) => {
          const isActive = item.id === activeTabId;

          return (
            <AnimatePresence key={item.id} mode="wait">
              {isActive && (
                <motion.div
                  id={item.id}
                  role="tabpanel"
                  aria-labelledby={`${item.id}-tab`}
                  tabIndex={0}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  data-testid={`${dataTestId}-panel-${item.id}`}
                >
                  {item.content}
                </motion.div>
              )}
            </AnimatePresence>
          );
        })}
      </div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
