import { ReactNode } from 'react';

/**
 * Tab size types
 */
export type TabSize = 'default' | 'compact';

/**
 * Tab style types
 */
export type TabStyle = 'default' | 'pills';

/**
 * Individual tab item configuration
 */
export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Label text displayed on the tab
   */
  label: string;

  /**
   * Content to display when tab is active
   */
  content: ReactNode;

  /**
   * Optional icon to display before the label
   */
  icon?: ReactNode;

  /**
   * Whether the tab is disabled
   * @default false
   */
  disabled?: boolean;

  /**
   * ARIA label for the tab
   */
  ariaLabel?: string;
}

/**
 * Props for the Tabs component
 */
export interface TabsProps {
  /**
   * Array of tab items to display
   */
  items: TabItem[];

  /**
   * Size of the tabs
   * - 'default': Regular size
   * - 'compact': Smaller size with reduced font (tab-sm class)
   * @default 'default'
   */
  size?: TabSize;

  /**
   * Visual style of the tabs
   * - 'default': Standard underline style
   * - 'pills': Rounded pill-shaped style (tab-pills class)
   * @default 'default'
   */
  variant?: TabStyle;

  /**
   * ID of the currently active tab (controlled mode)
   */
  activeTab?: string;

  /**
   * ID of the default active tab (uncontrolled mode)
   * @default first tab's id
   */
  defaultActiveTab?: string;

  /**
   * Callback when active tab changes
   */
  onChange?: (tabId: string) => void;

  /**
   * Additional CSS classes for the tabs container
   */
  className?: string;

  /**
   * ARIA label for the tab list
   */
  ariaLabel?: string;

  /**
   * Test ID for testing
   */
  'data-testid'?: string;
}
