# MOHRE POC - React + AEGOV Design System

A production-ready proof-of-concept for the Ministry of Human Resources and Emiratisation (MOHRE) using the UAE Government Design System (AEGOV) with React 19, TypeScript, and comprehensive testing.

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Install Playwright browsers (first time only)
npm run playwright:install

# Start development server
npm run dev

# Run unit tests
npm run test

# Run E2E tests
npm run test:e2e

# Run all tests with coverage
npm run test:all
```

---

## 📚 Documentation

Complete documentation is available in the `docs/` directory:

### Core Documentation
1. **[Startup Guide](./docs/startup.md)** - Project overview and entry point
2. **[Step 01: AEGOV Study](./docs/step-01-aegov-study.md)** - Complete design system analysis
3. **[Step 02: Components Reference](./docs/step-02-components-reference.md)** - All 28 AEGOV components with HTML
4. **[Step 03: Blocks Reference](./docs/step-03-blocks-reference.md)** - All 9 AEGOV blocks with HTML
5. **[Step 04: React Conversion Guide](./docs/step-04-react-conversion-guide.md)** - React conversion patterns
6. **[Step 04 Addendum](./docs/step-04-react-conversion-addendum.md)** - Missing components implementations

### Development Guides
- **[Component Development Workflow](./docs/component-development-workflow.md)** - Complete TDD workflow
- **[AEGOV JavaScript Reference](./AEGOV_JavaScript_Components_Reference.md)** - JS implementation details
- **[Libraries Guide](./docs/libraries-guide.md)** - Complete guide for all helper libraries

---

## 🛠 Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 19.2.0 | UI Framework |
| **TypeScript** | 5.9.3 | Type Safety |
| **Vite** | 7.2.2 | Build Tool |
| **TailwindCSS** | 3.4.18 | Styling |
| **AEGOV Design System** | 2.3.0 | UI Components |
| **Vitest** | 4.0.9 | Unit Testing |
| **React Testing Library** | 16.3.0 | Component Testing |
| **Playwright** | 1.56.1 | E2E Testing |
| **Floating UI** | 0.27.16 | Positioning (Popper alternative) |
| **Zustand** | 5.0.8 | State Management |
| **React Hook Form** | 7.x | Form Management |
| **Zod** | 3.x | Schema Validation |
| **Framer Motion** | 12.x | Animations |
| **date-fns** | 4.x | Date Utilities |
| **clsx** | 2.x | Class Names |
| **nanoid** | 5.x | Unique IDs |
| **react-use** | 17.x | React Hooks |

---

## 🎯 Component Development Workflow

When you say **"make a mhr-button"**, here's what happens:

### 1. Research Phase
- ✅ Check HTML APIs in `docs/step-02-components-reference.md`
- ✅ Check JS dependencies in `AEGOV_JavaScript_Components_Reference.md`
- ✅ Review React patterns in `docs/step-04-react-conversion-guide.md`

### 2. Implementation Phase (TDD)
- ✅ Create component file structure
- ✅ Define TypeScript interfaces
- ✅ Write failing tests first
- ✅ Implement component to pass tests
- ✅ Refactor and optimize

### 3. Testing Phase
- ✅ Write comprehensive unit tests
  - Rendering
  - Props and variants
  - Event handlers
  - Accessibility (ARIA, keyboard)
  - Edge cases
- ✅ Write E2E tests
  - User interactions
  - Keyboard navigation
  - RTL support
  - Visual regression
  - Accessibility audit

### 4. Verification Phase
- ✅ Run all tests: `npm run test:all`
- ✅ Verify coverage
- ✅ Check accessibility
- ✅ Test RTL support

**See [Component Development Workflow](./docs/component-development-workflow.md) for detailed guide.**

---

## 🧪 Testing

### Unit Tests (Vitest + React Testing Library)

```bash
# Watch mode (recommended for development)
npm run test

# UI mode
npm run test:ui

# Coverage report
npm run test:coverage
```

**Features:**
- ✅ Fast testing with Vitest
- ✅ Component testing with React Testing Library
- ✅ Custom AEGOV test utilities
- ✅ Coverage reporting with V8
- ✅ ARIA attribute testing
- ✅ Keyboard navigation testing

### E2E Tests (Playwright)

```bash
# Headless mode
npm run test:e2e

# Interactive UI mode
npm run test:e2e:ui

# Debug mode
npm run test:e2e:debug
```

**Features:**
- ✅ Multi-browser testing (Chrome, Firefox, Safari)
- ✅ Mobile viewport testing
- ✅ RTL (Arabic) support testing
- ✅ Accessibility testing with axe-core
- ✅ Visual regression testing
- ✅ Keyboard navigation testing
- ✅ Custom AEGOV helpers

---

## 🎨 AEGOV Design System

### Components Available (28 Total)

**Form & Input (8):**
- Input, Textarea, Checkbox, Radio, Select, File Input, Toggle, Range Slider

**Navigation (6):**
- Navigation, Dropdown, Breadcrumbs, Pagination, Tabs, Steps

**Feedback (5):**
- Alert, Toast, Modal, Popover, Tooltip

**Content & Display (9):**
- Button, Card, Badge, Banner, Blockquote, Hyperlink, Avatar, Accordion, Slider

### Blocks Available (9 Total)

- Header, Footer, Hero, Content, Filter, Login, Newsletter, Page Rating, Team

---

## 📋 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests (watch mode) |
| `npm run test:ui` | Open Vitest UI |
| `npm run test:coverage` | Generate coverage report |
| `npm run test:e2e` | Run E2E tests |
| `npm run test:e2e:ui` | Open Playwright UI |
| `npm run test:e2e:debug` | Debug E2E tests |
| `npm run test:all` | Run all tests with coverage |
| `npm run playwright:install` | Install Playwright browsers |

---

## 🚦 Getting Started with Your First Component

Example: Creating a Button component

```bash
# 1. Create component structure
mkdir -p src/components/Button
touch src/components/Button/{Button.tsx,Button.test.tsx,Button.types.ts,index.ts}

# 2. Follow TDD workflow (see docs/component-development-workflow.md)

# 3. Run tests
npm run test

# 4. Run E2E tests
npm run test:e2e
```

**Complete example available in:** `docs/component-development-workflow.md#example-building-mhr-button`

---

## ♿ Accessibility

All components follow WCAG 2.2 standards:

- ✅ Proper ARIA attributes
- ✅ Keyboard navigation support
- ✅ Focus management
- ✅ Screen reader compatibility
- ✅ RTL support for Arabic
- ✅ Automated accessibility testing with axe-core

---

## 🔐 Important Notes

- ⚠️ **NOT using** `@aegov/design-system-react` (incomplete/not production-ready)
- ✅ **Using** vanilla AEGOV HTML/CSS with custom React wrappers
- ✅ **React 19** compatible (using Floating UI instead of react-popper)
- ✅ **TypeScript** for type safety
- ✅ **TDD approach** for all components
- ✅ **Accessibility-first** development

---

## 📝 License

MIT

---

**Built with ❤️ for UAE Federal Government Entities**
