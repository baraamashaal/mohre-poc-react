/**
 * Route Constants
 *
 * Centralized route definitions for the application.
 * Following the architecture pattern from ARCHITECTURE.md
 */

export const routes = {
  // Public routes
  home: '/',

  // Component Showcase (for E2E testing and visual verification)
  showcase: {
    accordion: '/showcase/accordion',
    alert: '/showcase/alert',
    avatar: '/showcase/avatar',
    badge: '/showcase/badge',
    banner: '/showcase/banner',
    button: '/showcase/button',
    card: '/showcase/card',
    checkbox: '/showcase/checkbox',
    dropdown: '/showcase/dropdown',
    fileInput: '/showcase/file-input',
    hyperlink: '/showcase/hyperlink',
    input: '/showcase/input',
    radio: '/showcase/radio',
    rangeSlider: '/showcase/range-slider',
    select: '/showcase/select',
    textarea: '/showcase/textarea',
    toggle: '/showcase/toggle',
    // Add more component showcases here
  },

  // Dashboard
  dashboard: '/dashboard',

  // Company routes
  company: {
    list: '/companies',
    details: '/companies/:id',
    create: '/companies/new',
    actions: {
      addWorkPermit: '/companies/:id/work-permit/add',
      modifyWorkPermit: '/companies/:id/work-permit/modify',
    },
  },

  // Employee routes
  employee: {
    list: '/employees',
    details: '/employees/:id',
    create: '/employees/new',
    actions: {
      modifyPermit: '/employees/:id/actions/modify-permit',
      submitComplaint: '/employees/:id/actions/complaint',
      requestPayment: '/employees/:id/actions/payment',
    },
    enquiries: {
      contract: '/employees/:id/enquiries/contract',
      insurance: '/employees/:id/enquiries/insurance',
      permit: '/employees/:id/enquiries/permit',
    },
  },

  // Sponsor routes
  sponsor: {
    list: '/sponsors',
    details: '/sponsors/:id',
    create: '/sponsors/new',
  },

  // Auth routes
  auth: {
    login: '/login',
    callback: '/auth/callback',
    logout: '/logout',
  },

  // Error routes
  notFound: '/404',
  unauthorized: '/401',
  serverError: '/500',
} as const;

/**
 * Helper function to generate route with params
 *
 * @example
 * generatePath(routes.company.details, { id: '123' }) // '/companies/123'
 */
export function generatePath(path: string, params: Record<string, string>): string {
  let result = path;
  Object.entries(params).forEach(([key, value]) => {
    result = result.replace(`:${key}`, value);
  });
  return result;
}
