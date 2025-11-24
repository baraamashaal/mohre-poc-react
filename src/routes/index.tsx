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

// Component Showcase Index
const ShowcaseIndex = lazy(() =>
  import('../features/component-showcase/pages/ShowcaseIndex').then((module) => ({
    default: module.ShowcaseIndex,
  }))
);

// Component Showcase pages (for E2E testing and visual verification)
const AccordionShowcase = lazy(() =>
  import('../features/component-showcase/pages/AccordionShowcase').then((module) => ({
    default: module.AccordionShowcase,
  }))
);
const AlertShowcase = lazy(() =>
  import('../features/component-showcase/pages/AlertShowcase').then((module) => ({
    default: module.AlertShowcase,
  }))
);
const AvatarShowcase = lazy(() =>
  import('../features/component-showcase/pages/AvatarShowcase').then((module) => ({
    default: module.AvatarShowcase,
  }))
);
const BannerShowcase = lazy(() =>
  import('../features/component-showcase/pages/BannerShowcase').then((module) => ({
    default: module.BannerShowcase,
  }))
);
const BadgeShowcase = lazy(() =>
  import('../features/component-showcase/pages/BadgeShowcase').then((module) => ({
    default: module.BadgeShowcase,
  }))
);
const BlockquoteShowcase = lazy(() =>
  import('../features/component-showcase/pages/BlockquoteShowcase').then((module) => ({
    default: module.BlockquoteShowcase,
  }))
);
const BreadcrumbShowcase = lazy(() =>
  import('../features/component-showcase/pages/BreadcrumbShowcase').then((module) => ({
    default: module.BreadcrumbShowcase,
  }))
);
const InputShowcase = lazy(() =>
  import('../features/component-showcase/pages/InputShowcase').then((module) => ({
    default: module.InputShowcase,
  }))
);
const PaginationShowcase = lazy(() =>
  import('../features/component-showcase/pages/PaginationShowcase').then((module) => ({
    default: module.PaginationShowcase,
  }))
);
const TextareaShowcase = lazy(() =>
  import('../features/component-showcase/pages/TextareaShowcase').then((module) => ({
    default: module.TextareaShowcase,
  }))
);
const CheckboxShowcase = lazy(() =>
  import('../features/component-showcase/pages/CheckboxShowcase').then((module) => ({
    default: module.CheckboxShowcase,
  }))
);
const RadioShowcase = lazy(() =>
  import('../features/component-showcase/pages/RadioShowcase').then((module) => ({
    default: module.RadioShowcase,
  }))
);
const SelectShowcase = lazy(() =>
  import('../features/component-showcase/pages/SelectShowcase').then((module) => ({
    default: module.SelectShowcase,
  }))
);
const ToggleShowcase = lazy(() =>
  import('../features/component-showcase/pages/ToggleShowcase').then((module) => ({
    default: module.ToggleShowcase,
  }))
);
const RangeSliderShowcase = lazy(() =>
  import('../features/component-showcase/pages/RangeSliderShowcase').then((module) => ({
    default: module.RangeSliderShowcase,
  }))
);
const DropdownShowcase = lazy(() =>
  import('../features/component-showcase/pages/DropdownShowcase').then((module) => ({
    default: module.DropdownShowcase,
  }))
);
const CardShowcase = lazy(() =>
  import('../features/component-showcase/pages/CardShowcase').then((module) => ({
    default: module.CardShowcase,
  }))
);
const HyperlinkShowcase = lazy(() =>
  import('../features/component-showcase/pages/HyperlinkShowcase').then((module) => ({
    default: module.HyperlinkShowcase,
  }))
);
const FileInputShowcase = lazy(() =>
  import('../features/component-showcase/pages/FileInputShowcase').then((module) => ({
    default: module.FileInputShowcase,
  }))
);
const SliderShowcase = lazy(() =>
  import('../features/component-showcase/pages/SliderShowcase').then((module) => ({
    default: module.SliderShowcase,
  }))
);
const StepsShowcase = lazy(() =>
  import('../features/component-showcase/pages/StepsShowcase').then((module) => ({
    default: module.StepsShowcase,
  }))
);
const TabsShowcase = lazy(() =>
  import('../features/component-showcase/pages/TabsShowcase').then((module) => ({
    default: module.TabsShowcase,
  }))
);
const TooltipShowcase = lazy(() =>
  import('../features/component-showcase/pages/TooltipShowcase').then((module) => ({
    default: module.TooltipShowcase,
  }))
);
const PopoverShowcase = lazy(() =>
  import('../features/component-showcase/pages/PopoverShowcase').then((module) => ({
    default: module.PopoverShowcase,
  }))
);
const ModalShowcase = lazy(() =>
  import('../features/component-showcase/pages/ModalShowcase').then((module) => ({
    default: module.ModalShowcase,
  }))
);
const ToastShowcase = lazy(() =>
  import('../features/component-showcase/pages/ToastShowcase').then((module) => ({
    default: module.ToastShowcase,
  }))
);

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

  // Component Showcase Index
  {
    path: routes.showcases,
    element: (
      <Suspense fallback={<PageLoader />}>
        <ShowcaseIndex />
      </Suspense>
    ),
  },

  // Component Showcase routes (public - for E2E testing and visual verification)
  {
    path: routes.showcase.accordion,
    element: (
      <Suspense fallback={<PageLoader />}>
        <AccordionShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.alert,
    element: (
      <Suspense fallback={<PageLoader />}>
        <AlertShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.avatar,
    element: (
      <Suspense fallback={<PageLoader />}>
        <AvatarShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.banner,
    element: (
      <Suspense fallback={<PageLoader />}>
        <BannerShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.badge,
    element: (
      <Suspense fallback={<PageLoader />}>
        <BadgeShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.blockquote,
    element: (
      <Suspense fallback={<PageLoader />}>
        <BlockquoteShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.breadcrumb,
    element: (
      <Suspense fallback={<PageLoader />}>
        <BreadcrumbShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.input,
    element: (
      <Suspense fallback={<PageLoader />}>
        <InputShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.pagination,
    element: (
      <Suspense fallback={<PageLoader />}>
        <PaginationShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.textarea,
    element: (
      <Suspense fallback={<PageLoader />}>
        <TextareaShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.checkbox,
    element: (
      <Suspense fallback={<PageLoader />}>
        <CheckboxShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.radio,
    element: (
      <Suspense fallback={<PageLoader />}>
        <RadioShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.select,
    element: (
      <Suspense fallback={<PageLoader />}>
        <SelectShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.toggle,
    element: (
      <Suspense fallback={<PageLoader />}>
        <ToggleShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.rangeSlider,
    element: (
      <Suspense fallback={<PageLoader />}>
        <RangeSliderShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.dropdown,
    element: (
      <Suspense fallback={<PageLoader />}>
        <DropdownShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.card,
    element: (
      <Suspense fallback={<PageLoader />}>
        <CardShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.hyperlink,
    element: (
      <Suspense fallback={<PageLoader />}>
        <HyperlinkShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.fileInput,
    element: (
      <Suspense fallback={<PageLoader />}>
        <FileInputShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.steps,
    element: (
      <Suspense fallback={<PageLoader />}>
        <StepsShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.slider,
    element: (
      <Suspense fallback={<PageLoader />}>
        <SliderShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.tabs,
    element: (
      <Suspense fallback={<PageLoader />}>
        <TabsShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.tooltip,
    element: (
      <Suspense fallback={<PageLoader />}>
        <TooltipShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.popover,
    element: (
      <Suspense fallback={<PageLoader />}>
        <PopoverShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.modal,
    element: (
      <Suspense fallback={<PageLoader />}>
        <ModalShowcase />
      </Suspense>
    ),
  },
  {
    path: routes.showcase.toast,
    element: (
      <Suspense fallback={<PageLoader />}>
        <ToastShowcase />
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
