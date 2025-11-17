import type { Preview } from '@storybook/react-vite';
import '../src/index.css';

// Import AEGOV JavaScript for interactive components
import '@aegov/design-system/dist/aegov-scripts.min.js';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#f9fafb',
        },
        {
          name: 'white',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#1f2937',
        },
      ],
    },
    docs: {
      toc: true,
      source: {
        type: 'dynamic',
        excludeDecorators: true,
      },
    },
    a11y: {
      element: '#storybook-root',
      config: {},
      options: {},
      manual: false,
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },
  },
};

export default preview;