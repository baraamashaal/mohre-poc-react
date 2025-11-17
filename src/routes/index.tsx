/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ProtectedRoute } from './ProtectedRoute';
import { routes } from './routes.config';

// Lazy load pages for better performance
import { lazy, Suspense } from 'react';

// Import App as the home page (Button demo)
import App from '../App';

// Placeholder pages - to be created later
const Dashboard = lazy(() => import('../features/dashboard/pages/Dashboard'));
const NotFound = lazy(() => import('../shared/components/errors/NotFound'));

// Documentation pages
const DocsHome = lazy(() => import('../features/docs/pages/DocsHome'));
const ButtonDocs = lazy(() => import('../features/docs/pages/ButtonDocs'));

/**
 * Loading fallback component
 */
function PageLoader() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="inline-block w-12 h-12 border-4 border-current border-t-transparent rounded-full animate-spin text-primary-600" />
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    </div>
  );
}

/**
 * Main Router Configuration
 *
 * Following the architecture pattern from ARCHITECTURE.md
 */
export const router = createBrowserRouter([
  // Public routes
  {
    path: routes.home,
    element: <App />, // Button demo page
  },

  // Documentation routes (public)
  {
    path: routes.docs.home,
    element: (
      <Suspense fallback={<PageLoader />}>
        <DocsHome />
      </Suspense>
    ),
  },
  {
    path: routes.docs.button,
    element: (
      <Suspense fallback={<PageLoader />}>
        <ButtonDocs />
      </Suspense>
    ),
  },

  // Protected routes
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: routes.dashboard,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      // Add more protected routes here as features are built
      // Company routes will go here
      // Employee routes will go here
      // Sponsor routes will go here
    ],
  },

  // Auth routes (public)
  {
    path: routes.auth.login,
    element: <div>Login Page - To be implemented</div>,
  },

  // Error routes
  {
    path: routes.notFound,
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<PageLoader />}>
        <NotFound />
      </Suspense>
    ),
  },
]);

/**
 * Router Component
 *
 * Wraps the entire application with routing
 */
export function AppRouter() {
  return <RouterProvider router={router} />;
}
