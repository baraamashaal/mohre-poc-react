# Component Development Guide

## Implementation Steps

1. **Check AEGOV docs** for component HTML/CSS
2. **Create files** in `src/shared/components/ui/ComponentName/`
3. **Run tests** and verify

## File Structure (per component)

```
src/shared/components/ui/ComponentName/
├── ComponentName.tsx
├── ComponentName.types.ts
├── ComponentName.test.tsx
├── ComponentName.stories.tsx
└── index.ts

src/features/component-showcase/pages/
└── ComponentNameShowcase.tsx

e2e/
└── component-name.spec.ts
```

## Components (28 total)

| Component | API Docs | JS |
|-----------|----------|-----|
| [Accordion](./components/accordion.md) | [Docs](https://designsystem.gov.ae/docs/components/accordion) | ✅ |
| [Alert](./components/alert.md) | [Docs](https://designsystem.gov.ae/docs/components/alert) | ⚠️ |
| [Avatar](./components/avatar.md) | [Docs](https://designsystem.gov.ae/docs/components/avatar) | ❌ |
| [Badge](./components/badge.md) | [Docs](https://designsystem.gov.ae/docs/components/badge) | ❌ |
| [Banner](./components/banner.md) | [Docs](https://designsystem.gov.ae/docs/components/banner) | ⚠️ |
| [Blockquote](./components/blockquote.md) | [Docs](https://designsystem.gov.ae/docs/components/blockquote) | ❌ |
| [Breadcrumb](./components/breadcrumb.md) | [Docs](https://designsystem.gov.ae/docs/components/breadcrumb) | ❌ |
| [Button](./components/button.md) | [Docs](https://designsystem.gov.ae/docs/components/button) | ❌ |
| [Card](./components/card.md) | [Docs](https://designsystem.gov.ae/docs/components/card) | ❌ |
| [Checkbox](./components/checkbox.md) | [Docs](https://designsystem.gov.ae/docs/components/checkbox) | ❌ |
| [Dropdown](./components/dropdown.md) | [Docs](https://designsystem.gov.ae/docs/components/dropdown) | ✅ |
| [File Input](./components/file-input.md) | [Docs](https://designsystem.gov.ae/docs/components/file-input) | ⚠️ |
| [Hyperlink](./components/hyperlink.md) | [Docs](https://designsystem.gov.ae/docs/components/hyperlink) | ❌ |
| [Input](./components/input.md) | [Docs](https://designsystem.gov.ae/docs/components/input) | ❌ |
| [Modal](./components/modal.md) | [Docs](https://designsystem.gov.ae/docs/components/modal) | ✅ |
| [Navigation](./components/navigation.md) | [Docs](https://designsystem.gov.ae/docs/components/navigation) | ✅ |
| [Pagination](./components/pagination.md) | [Docs](https://designsystem.gov.ae/docs/components/pagination) | ❌ |
| [Popover](./components/popover.md) | [Docs](https://designsystem.gov.ae/docs/components/popover) | ✅ |
| [Radio](./components/radio.md) | [Docs](https://designsystem.gov.ae/docs/components/radio) | ❌ |
| [Range Slider](./components/range-slider.md) | [Docs](https://designsystem.gov.ae/docs/components/range-slider) | ⚠️ |
| [Select](./components/select.md) | [Docs](https://designsystem.gov.ae/docs/components/select) | ⚠️ |
| [Slider](./components/slider.md) | [Docs](https://designsystem.gov.ae/docs/components/slider) | ✅ |
| [Steps](./components/steps.md) | [Docs](https://designsystem.gov.ae/docs/components/steps) | ❌ |
| [Tabs](./components/tabs.md) | [Docs](https://designsystem.gov.ae/docs/components/tabs) | ✅ |
| [Textarea](./components/textarea.md) | [Docs](https://designsystem.gov.ae/docs/components/textarea) | ❌ |
| [Toast](./components/toast.md) | [Docs](https://designsystem.gov.ae/docs/components/toast) | ⚠️ |
| [Toggle](./components/toggle.md) | [Docs](https://designsystem.gov.ae/docs/components/toggle) | ❌ |
| [Tooltip](./components/tooltip.md) | [Docs](https://designsystem.gov.ae/docs/components/tooltip) | ✅ |

**Legend**: ✅ JS Required | ⚠️ Partial/Optional | ❌ CSS Only

## Blocks (9 total)

| Block | API Docs |
|-------|----------|
| [Content](./blocks/content.md) | [Docs](https://designsystem.gov.ae/docs/blocks#content) |
| [Filter](./blocks/filter.md) | [Docs](https://designsystem.gov.ae/docs/blocks#filter) |
| [Footer](./blocks/footer.md) | [Docs](https://designsystem.gov.ae/docs/blocks#footer) |
| [Header](./blocks/header.md) | [Docs](https://designsystem.gov.ae/docs/blocks#header) |
| [Hero](./blocks/hero.md) | [Docs](https://designsystem.gov.ae/docs/blocks#hero) |
| [Login](./blocks/login.md) | [Docs](https://designsystem.gov.ae/docs/blocks#login) |
| [Newsletter](./blocks/newsletter.md) | [Docs](https://designsystem.gov.ae/docs/blocks#newsletter) |
| [Page Rating](./blocks/page-rating.md) | [Docs](https://designsystem.gov.ae/docs/blocks#page-rating) |
| [Team](./blocks/team.md) | [Docs](https://designsystem.gov.ae/docs/blocks#team) |

## Patterns (6 total)

| Pattern | API Docs |
|---------|----------|
| [Address](./patterns/address.md) | [Docs](https://designsystem.gov.ae/docs/patterns#address) |
| [Name](./patterns/name.md) | [Docs](https://designsystem.gov.ae/docs/patterns#name) |
| [Contact Number](./patterns/contact-number.md) | [Docs](https://designsystem.gov.ae/docs/patterns#contact-number) |
| [Date](./patterns/date.md) | [Docs](https://designsystem.gov.ae/docs/patterns#date) |
| [Emirates ID](./patterns/emirates-id.md) | [Docs](https://designsystem.gov.ae/docs/patterns#emirates-id) |
| [Currency Symbol](./patterns/currency-symbol.md) | [Docs](https://designsystem.gov.ae/docs/patterns#currency-symbol) |

## Libraries Quick Reference

| Library | Use For | Example |
|---------|---------|---------|
| `clsx` | Class names | `clsx('btn', disabled && 'disabled')` |
| `framer-motion` | Animation | `<motion.div whileHover={{ scale: 1.05 }}>` |
| `zustand` | State | `const count = useStore(s => s.count)` |
| `react-hook-form` | Forms | `const { register } = useForm()` |
| `zod` | Validation | `z.string().email()` |

## Test Commands

```bash
npm run test -- ComponentName --run  # Unit test
npm run test:e2e -- component-name   # E2E test
```