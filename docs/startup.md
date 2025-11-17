# MOHRE POC - Startup Documentation

## Project Overview
This is a proof-of-concept (POC) project for the Ministry of Human Resources and Emiratisation (MOHRE) using the UAE Government Design System (AEGOV).

## Tech Stack
- **Framework:** React 19.2.0 with TypeScript
- **Build Tool:** Vite 7.2.2
- **Styling:** TailwindCSS 3.4.18
- **Design System:** @aegov/design-system 2.3.0
- **Language:** TypeScript 5.9.3

## Quick Start
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run linter
npm run lint
```

## Project Structure
```
mohre-poc-from-scratch/
├── docs/                   # Documentation files
│   ├── startup.md         # This file - project overview
│   └── step-*.md          # Step-by-step progress documentation
├── src/
│   ├── main.tsx           # Entry point (includes AEGOV JS)
│   ├── index.css          # Tailwind directives
│   └── App.tsx            # Main app component
├── index.html             # HTML entry
├── tailwind.config.js     # Tailwind + AEGOV plugin config
├── postcss.config.js      # PostCSS config
└── package.json           # Dependencies
```

## AEGOV Design System Integration Status
✅ Package installed (`@aegov/design-system@2.3.0`)
✅ Tailwind plugin configured
✅ Required peer dependencies installed (`@tailwindcss/forms`, `@tailwindcss/typography`)
✅ JavaScript imported for interactive components
✅ Content paths configured correctly

## Documentation Steps
- **[Step 01](./step-01-aegov-study.md)** - AEGOV Design System Study & Analysis
- **[Step 02](./step-02-components-reference.md)** - Complete HTML Reference for All 28 Components
- **[Step 03](./step-03-blocks-reference.md)** - Complete HTML Reference for All 9 Blocks
- **[Step 04](./step-04-react-conversion-guide.md)** - React Conversion Reference Guide
- **[Step 04 Addendum](./step-04-react-conversion-addendum.md)** - Missing Components & Updated Implementations

## Additional References
- **[AEGOV JavaScript Components Reference](../AEGOV_JavaScript_Components_Reference.md)** - Detailed analysis of all 9 interactive JS components
- **[Component Development Workflow](./component-development-workflow.md)** - Complete TDD workflow for building components
- **[Libraries Guide](./libraries-guide.md)** - Complete guide for all helper libraries (Zustand, RHF, Zod, etc.)

## Testing Setup
✅ **Unit Testing:** Vitest + React Testing Library
✅ **E2E Testing:** Playwright with accessibility testing
✅ **Coverage:** Configured with V8 provider
✅ **Test Utilities:** Custom AEGOV helpers for both unit and E2E tests

## Important Notes
- **NOT using** `@aegov/design-system-react` as it's incomplete
- Using vanilla AEGOV HTML/CSS components with React
- All interactive components require the AEGOV JavaScript (loaded in main.tsx)

## Official Resources
- **AEGOV Docs:** https://designsystem.gov.ae
- **GitHub Repo:** https://github.com/TDRA-ae/aegov-dls
- **NPM Package:** https://www.npmjs.com/package/@aegov/design-system

## Next Steps
Refer to the step-by-step documentation files in this directory to continue development.
