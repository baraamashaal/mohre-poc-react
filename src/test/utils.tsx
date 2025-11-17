import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import type {ReactElement, ReactNode} from 'react';
import userEvent from '@testing-library/user-event';

/**
 * Custom render function that wraps components with common providers
 */
type CustomRenderOptions = Omit<RenderOptions, 'wrapper'> & {
  // Add any global providers here (e.g., ThemeProvider, I18nProvider)
};

export function render(
  ui: ReactElement,
  options?: CustomRenderOptions
) {
  const Wrapper = ({ children }: { children: ReactNode }) => {
    // Add providers here if needed
    return <>{children}</>;
  };

  return {
    user: userEvent.setup(),
    ...rtlRender(ui, { wrapper: Wrapper, ...options }),
  };
}

/**
 * Wait for element to be removed
 */
export async function waitForElementToBeRemoved(
  callback: () => HTMLElement | null,
  options?: { timeout?: number }
) {
  const { waitFor } = await import('@testing-library/react');
  return waitFor(() => {
    const element = callback();
    if (element) {
      throw new Error('Element is still in the document');
    }
  }, options);
}

/**
 * Simulate keyboard event
 */
export function createKeyboardEvent(
  key: string,
  options?: Partial<KeyboardEvent>
): KeyboardEvent {
  return new KeyboardEvent('keydown', {
    key,
    code: key,
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

/**
 * Simulate mouse event
 */
export function createMouseEvent(
  type: string,
  options?: Partial<MouseEvent>
): MouseEvent {
  return new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
    ...options,
  });
}

/**
 * Get computed styles of an element
 */
export function getComputedStyles(element: HTMLElement) {
  return window.getComputedStyle(element);
}

/**
 * Check if element has AEGOV class
 */
export function hasAegovClass(element: HTMLElement, className: string): boolean {
  return element.classList.contains(`aegov-${className}`);
}

/**
 * Check if element has proper ARIA attributes
 */
export function checkAriaAttributes(
  element: HTMLElement,
  expectedAttributes: Record<string, string | boolean | null>
) {
  const results: Record<string, boolean> = {};

  Object.entries(expectedAttributes).forEach(([attr, expectedValue]) => {
    const actualValue = element.getAttribute(attr);

    if (expectedValue === null) {
      results[attr] = actualValue === null;
    } else if (typeof expectedValue === 'boolean') {
      results[attr] = actualValue === String(expectedValue);
    } else {
      results[attr] = actualValue === expectedValue;
    }
  });

  return results;
}

/**
 * Mock callback function
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function createMockCallback<T extends (...args: any[]) => any>() {
  const calls: Parameters<T>[] = [];
  const fn = ((...args: Parameters<T>) => {
    calls.push(args);
  }) as T & { calls: Parameters<T>[] };

  fn.calls = calls;
  return fn;
}

/**
 * Get element by AEGOV class
 */
export function getByAegovClass(
  container: HTMLElement,
  className: string
): HTMLElement | null {
  return container.querySelector(`.aegov-${className}`);
}

/**
 * Get all elements by AEGOV class
 */
export function getAllByAegovClass(
  container: HTMLElement,
  className: string
): HTMLElement[] {
  return Array.from(container.querySelectorAll(`.aegov-${className}`));
}

// Re-export everything from React Testing Library
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { userEvent };
