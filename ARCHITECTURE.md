# Architecture Documentation

## Table of Contents
- [Overview](#overview)
- [Architecture Pattern](#architecture-pattern)
- [Folder Structure](#folder-structure)
- [Design Decisions](#design-decisions)
- [Getting Started](#getting-started)

---

## Overview

This document outlines the architectural decisions for the UAE MOHRE application. The application follows an entity-based architecture where users with different roles (Company Owner/Authorizer, Sponsor) can perform actions and view enquiries related to various entities (Company, Employee, File/Sponsor).

### Core Requirements
- Entity-based structure (Company, Employee, Sponsor)
- Role-based access control
- UAE Pass authentication integration
- Scalable and maintainable codebase
- Support for future features (editable entities, user templates)

---

## Architecture Pattern

### Hybrid Feature-Based + Domain-Driven Architecture

We use a **hybrid approach** combining the best of Feature-Based and Domain-Driven patterns for optimal scalability and maintainability.

#### Why This Approach?

1. **Entity-Aligned**: Each feature folder matches domain entities (Company, Employee, Sponsor)
2. **Scalable**: Easy to add new actions/enquiries to entities
3. **Role-Based**: Features can check user roles and show relevant content
4. **Reusable**: Shared UAE Design System components in one place
5. **Maintainable**: Clear separation between features
6. **Future-Proof**: Easy to add templates feature later
7. **Team-Friendly**: Multiple teams can work independently on different entities

---

## Folder Structure

### Complete Directory Structure

```
src/
├── features/
│   ├── company/
│   │   ├── components/          # Company-specific components
│   │   ├── pages/               # Company pages (Dashboard, Details, List)
│   │   ├── hooks/               # Company-related hooks
│   │   ├── services/            # Company API services
│   │   ├── actions/             # Company actions (work permits, etc.)
│   │   ├── types/               # Company TypeScript types
│   │   └── index.ts             # Public API exports
│   │
│   ├── employee/
│   │   ├── components/          # Employee-specific components
│   │   ├── pages/               # Employee pages
│   │   ├── hooks/               # Employee-related hooks
│   │   ├── services/            # Employee API services
│   │   ├── actions/             # Employee actions (complaints, permits, payments)
│   │   ├── enquiries/           # Employee enquiries (contracts, insurance, etc.)
│   │   ├── types/               # Employee TypeScript types
│   │   └── index.ts             # Public API exports
│   │
│   ├── sponsor/
│   │   ├── components/          # Sponsor-specific components
│   │   ├── pages/               # Sponsor pages
│   │   ├── hooks/               # Sponsor-related hooks
│   │   ├── services/            # Sponsor API services
│   │   ├── types/               # Sponsor TypeScript types
│   │   └── index.ts             # Public API exports
│   │
│   ├── auth/
│   │   ├── components/          # Auth components (LoginButton, ProtectedRoute)
│   │   ├── pages/               # Auth pages (Login, Callback)
│   │   ├── hooks/               # Auth hooks (useAuth, useUAEPass)
│   │   ├── services/            # Auth services
│   │   ├── types/               # Auth TypeScript types
│   │   └── index.ts             # Public API exports
│   │
│   └── dashboard/
│       ├── components/          # Dashboard components
│       ├── pages/               # Dashboard pages
│       ├── hooks/               # Dashboard hooks
│       └── index.ts             # Public API exports
│
├── shared/
│   ├── components/
│   │   ├── ui/                  # UI components (Button, Card, Alert, Badge)
│   │   ├── forms/               # Form components (Input, Select, DatePicker)
│   │   ├── layouts/             # Layout components (Header, Footer, Sidebar)
│   │   └── index.ts
│   ├── hooks/                   # Shared hooks (usePermissions, useRole, useApi)
│   ├── services/                # Shared services (api.service, storage.service)
│   ├── types/                   # Shared TypeScript types
│   ├── utils/                   # Utilities (formatters, validators, helpers)
│   ├── constants/               # Constants (routes, config, roles)
│   └── lib/                     # Third-party library configs (axios)
│
├── layouts/
│   ├── AuthLayout.tsx           # Layout for auth pages
│   ├── MainLayout.tsx           # Main application layout
│   ├── DashboardLayout.tsx      # Dashboard layout
│   └── index.ts
│
├── routes/
│   ├── index.tsx                # Main routing configuration
│   ├── ProtectedRoute.tsx       # Protected route wrapper
│   └── routes.config.ts         # Route constants
│
├── styles/
│   ├── globals.css              # Global styles
│   └── themes.ts                # Theme configuration
│
├── App.tsx
├── main.tsx
└── vite-env.d.ts
```

---

## Design Decisions

### 1. State Management

**Strategy:** Start with Context API for auth state, then add Zustand if needed for complex state.

**Rationale:**
- Context API is sufficient for role-based access control
- Zustand can be added per-feature if needed
- Avoids over-engineering early on

---

### 2. API Layer

**Strategy:** Feature-based API services with shared HTTP client

**Structure:**
```typescript
// shared/lib/axios.ts - Centralized config
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' }
})

// features/company/services/company.service.ts
export const companyService = {
  getAll: () => apiClient.get('/companies'),
  getById: (id: string) => apiClient.get(`/companies/${id}`),
  create: (data: Company) => apiClient.post('/companies', data)
}
```

**Benefits:**
- Centralized error handling and interceptors
- Feature-specific API logic
- Easy to mock for testing

---

### 3. Routing Strategy

**Approach:** Feature-based nested routes with React Router

**Example:**
```typescript
// routes/routes.config.ts
export const routes = {
  dashboard: '/',
  company: {
    list: '/companies',
    details: '/companies/:id',
    addWorkPermit: '/companies/:id/work-permit/add'
  },
  employee: {
    list: '/employees',
    details: '/employees/:id',
    actions: {
      modifyPermit: '/employees/:id/actions/modify-permit',
      submitComplaint: '/employees/:id/actions/complaint'
    }
  }
}
```

---

### 4. Component Patterns

**Naming Conventions:**
- **Pages**: `CompanyDashboard.tsx`, `EmployeeDetails.tsx`
- **Components**: `CompanyCard.tsx`, `EmployeeList.tsx`
- **Hooks**: `useCompany.ts`, `useEmployeeActions.ts`
- **Services**: `company.service.ts`
- **Types**: `company.types.ts`

**Component Structure:**
```typescript
// Feature Component Example
import { useCompany } from '../hooks/useCompany'
import { CompanyCard } from '../components/CompanyCard'
import type { Company } from '../types/company.types'

export function CompanyList() {
  const { companies, loading } = useCompany()

  if (loading) return <Spinner />

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {companies.map(company => (
        <CompanyCard key={company.id} company={company} />
      ))}
    </div>
  )
}
```

---

### 5. TypeScript Conventions

**Type Organization:**
- Shared types in `shared/types/`
- Feature-specific types in feature's `types/` folder
- Export all types through `index.ts`

**Example:**
```typescript
// features/company/types/company.types.ts
export interface Company {
  id: string
  name: string
  tradeNumber: string
  employees: Employee[]
}

export interface CompanyAction {
  id: string
  type: 'ADD_WORK_PERMIT' | 'MODIFY_WORK_PERMIT'
  status: 'PENDING' | 'APPROVED' | 'REJECTED'
}
```

---

## Getting Started

### Creating a New Feature

1. Create feature folder: `src/features/new-feature/`
2. Add required subfolders: `components/`, `pages/`, `hooks/`, `services/`, `types/`
3. Create `index.ts` to export public API
4. Add routes to `routes/routes.config.ts`
5. Update role permissions if needed

### Creating a New Component

1. Create component file in appropriate location
2. Use TypeScript for props
3. Follow UAE Design System guidelines
4. Write tests before implementing complex logic

---

## References

- [React Architecture Patterns](https://www.developerway.com/posts/react-project-structure)
- [Feature-Based Architecture](https://profy.dev/article/react-folder-structure)
- [UAE Design System Documentation](https://designsystem.gov.ae/docs)
- [Bulletproof React](https://github.com/alan2207/bulletproof-react)

---

**Maintained by:** Development Team
**Last Updated:** 2025-01-17
