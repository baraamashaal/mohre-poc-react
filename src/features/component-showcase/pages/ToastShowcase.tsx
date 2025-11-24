import { Toaster } from '../../../shared/components/ui';
import { useToastStore } from '../../../stores/useToastStore';

export const ToastShowcase = () => {
  const { addToast, clearAll } = useToastStore();

  const showSuccessToast = () => {
    addToast({
      type: 'success',
      title: 'Success!',
      message: 'Your changes have been saved successfully.',
    });
  };

  const showErrorToast = () => {
    addToast({
      type: 'error',
      title: 'Error',
      message: 'Something went wrong. Please try again.',
    });
  };

  const showWarningToast = () => {
    addToast({
      type: 'warning',
      title: 'Warning',
      message: 'Your session is about to expire in 5 minutes.',
    });
  };

  const showInfoToast = () => {
    addToast({
      type: 'info',
      title: 'Information',
      message: 'A new version of the application is available.',
    });
  };

  const showToastWithAction = () => {
    addToast({
      type: 'info',
      title: 'Update Available',
      message: 'A new version of the application is available.',
      action: {
        label: 'Update Now',
        onClick: () => alert('Update clicked!'),
      },
    });
  };

  const showSimpleToast = () => {
    addToast({
      type: 'info',
      message: 'This is a simple toast without a title.',
    });
  };

  const showPersistentToast = () => {
    addToast({
      type: 'warning',
      title: 'Important',
      message: 'This toast will not auto-dismiss. You must close it manually.',
      duration: 0, // 0 means persistent
    });
  };

  const showCustomDurationToast = () => {
    addToast({
      type: 'success',
      message: 'This toast will disappear in 2 seconds!',
      duration: 2000,
    });
  };

  const showMultipleToasts = () => {
    addToast({
      type: 'info',
      title: 'First Toast',
      message: 'This is the first toast.',
    });

    setTimeout(() => {
      addToast({
        type: 'success',
        title: 'Second Toast',
        message: 'This is the second toast.',
      });
    }, 500);

    setTimeout(() => {
      addToast({
        type: 'warning',
        title: 'Third Toast',
        message: 'This is the third toast.',
      });
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Toast Component Showcase</h1>
          <p className="text-lg text-gray-600">
            Interactive demonstrations of all Toast variants from the AEGOV Design System. Click buttons to
            trigger different types of toast notifications.
          </p>
        </header>

        {/* Basic Toast Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Basic Toast Types</h2>
          <p className="text-gray-600 mb-4">
            Standard toast notifications with different severity levels.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={showSuccessToast} className="aegov-btn btn-success">
              Show Success Toast
            </button>
            <button onClick={showErrorToast} className="aegov-btn btn-error">
              Show Error Toast
            </button>
            <button onClick={showWarningToast} className="aegov-btn btn-warning">
              Show Warning Toast
            </button>
            <button onClick={showInfoToast} className="aegov-btn">
              Show Info Toast
            </button>
          </div>
        </section>

        {/* Toast with Action */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Toast with Action Button</h2>
          <p className="text-gray-600 mb-4">
            Toast notification with an interactive action button.
          </p>
          <button onClick={showToastWithAction} className="aegov-btn">
            Show Toast with Action
          </button>
        </section>

        {/* Simple Toast */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Simple Toast (No Title)</h2>
          <p className="text-gray-600 mb-4">
            A minimal toast notification without a title.
          </p>
          <button onClick={showSimpleToast} className="aegov-btn btn-soft">
            Show Simple Toast
          </button>
        </section>

        {/* Duration Control */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Duration Control</h2>
          <p className="text-gray-600 mb-4">
            Control how long the toast appears on screen.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={showCustomDurationToast} className="aegov-btn">
              Show 2s Toast
            </button>
            <button onClick={showPersistentToast} className="aegov-btn btn-outline">
              Show Persistent Toast
            </button>
          </div>
        </section>

        {/* Multiple Toasts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Multiple Toasts</h2>
          <p className="text-gray-600 mb-4">
            Queue multiple toast notifications with staggered timing.
          </p>
          <div className="flex flex-wrap gap-3">
            <button onClick={showMultipleToasts} className="aegov-btn">
              Show Multiple Toasts
            </button>
            <button onClick={clearAll} className="aegov-btn btn-error btn-outline">
              Clear All Toasts
            </button>
          </div>
        </section>

        {/* API Reference */}
        <section className="mb-12 bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">API Reference</h2>
          <div className="space-y-4 text-gray-700">
            <div>
              <h3 className="font-semibold mb-2">addToast(toast)</h3>
              <p className="mb-2">Add a new toast notification to the queue.</p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <code className="text-sm">
                  <pre>{`const id = addToast({
  type: 'success' | 'error' | 'info' | 'warning',
  title?: string,
  message: string,
  duration?: number, // milliseconds (0 = persistent, default = 5000)
  action?: {
    label: string,
    onClick: () => void
  }
})`}</pre>
                </code>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">removeToast(id)</h3>
              <p className="mb-2">Remove a specific toast by its ID.</p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <code className="text-sm">removeToast(toastId)</code>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">clearAll()</h3>
              <p className="mb-2">Remove all active toasts.</p>
              <div className="bg-white p-4 rounded border border-gray-200">
                <code className="text-sm">clearAll()</code>
              </div>
            </div>
          </div>
        </section>

        {/* Usage Example */}
        <section className="mb-12 bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Usage Example</h2>
          <div className="bg-white p-4 rounded border border-gray-200">
            <code className="text-sm">
              <pre>{`import { Toaster } from '@components/ui';
import { useToastStore } from '@/stores/useToastStore';

function MyComponent() {
  const { addToast } = useToastStore();

  const handleSave = () => {
    // Your save logic here...

    addToast({
      type: 'success',
      title: 'Saved!',
      message: 'Your changes have been saved.',
    });
  };

  return (
    <div>
      <button onClick={handleSave}>Save Changes</button>
      <Toaster position="top-right" />
    </div>
  );
}`}</pre>
            </code>
          </div>
        </section>

        {/* Accessibility Info */}
        <section className="mb-12 bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Accessibility Features</h2>
          <ul className="list-disc ps-6 space-y-2 text-gray-700">
            <li>
              <strong>ARIA Role:</strong> Each toast has role="alert" for screen reader announcements
            </li>
            <li>
              <strong>Keyboard Navigation:</strong> Close button is keyboard accessible
            </li>
            <li>
              <strong>Color Contrast:</strong> All text meets WCAG 2.2 Level AA contrast requirements
            </li>
            <li>
              <strong>Focus Management:</strong> Close button and action buttons are focusable
            </li>
            <li>
              <strong>Screen Reader Labels:</strong> Close button has proper aria-label
            </li>
            <li>
              <strong>Animation:</strong> Smooth entrance/exit animations with Framer Motion
            </li>
          </ul>
        </section>
      </div>

      {/* Toaster container - positioned globally */}
      <Toaster position="top-right" />
    </main>
  );
};
