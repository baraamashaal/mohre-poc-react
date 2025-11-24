# Newsletter Block - Detailed Implementation Plan

**Status:** Ready to Implement
**Complexity:** Low-Medium
**Estimated Time:** 3-4 hours
**Priority:** #1 (Easiest block)

---

## 📋 Overview

**Purpose:** Collect email subscriptions from website visitors

**Key Features:**
- Email input with validation
- Submit button with loading state
- Privacy consent checkbox
- Success/error messaging
- GDPR compliance
- Multiple layout variants

---

## 🎯 Design Specifications

### Color Scheme
- Background: `bg-aeblack-800` (dark)
- Text: `text-whitely-50` (light)
- Secondary text: `text-whitely-100`
- Input: `bg-white text-gray-900`

### Typography
- Full-width heading: `text-h3` (desktop) → `text-h5` (mobile)
- Sidebar heading: `text-h5` → `text-h6` (mobile)
- Description: `text-lg` (full-width) / `text-sm` (sidebar)

### Spacing
- Full-width: `py-12 md:py-16 lg:py-20`
- Sidebar: `p-6`
- Rounded corners: `rounded-2xl`

---

## 🏗️ Component Architecture

### File Structure
```
src/shared/blocks/
└── Newsletter/
    ├── Newsletter.tsx           # Main component
    ├── Newsletter.types.ts      # TypeScript interfaces
    ├── Newsletter.test.tsx      # Unit tests
    ├── Newsletter.stories.tsx   # Storybook stories
    └── index.ts                 # Exports
```

### Component Hierarchy
```
Newsletter (main container)
├── DecorationSVG (optional, full-width only)
├── Container (centered content)
│   ├── Heading
│   ├── Description
│   └── Form (or Button-only variant)
│       ├── EmailInput (with validation)
│       ├── PrivacyCheckbox
│       ├── SubmitButton (with loading state)
│       └── StatusAlert (success/error)
```

---

## 📐 Component Variants

### 1. Full-Width with Form
- Width: `100%` with max-width container
- Layout: Horizontal form on desktop, vertical on mobile
- Decorative SVG backgrounds
- Use case: Hero sections, main content areas

### 2. Sidebar with Form
- Width: `320px` (w-80)
- Layout: Always vertical
- No decorative SVGs
- Use case: Sidebars, widget areas

### 3. Full-Width Button-Only
- No input field
- Links to dedicated subscription page
- Use case: Simple call-to-action

### 4. Sidebar Button-Only
- Compact button version
- Links to subscription page
- Use case: Sidebar CTAs

---

## 💾 Props Interface

```typescript
export type NewsletterVariant = 'full-width' | 'sidebar';
export type NewsletterFormType = 'inline' | 'button-only';

export interface NewsletterProps {
  // Variant
  variant?: NewsletterVariant;
  formType?: NewsletterFormType;

  // Content
  heading?: string;
  description?: string;

  // Form
  emailPlaceholder?: string;
  submitButtonText?: string;
  subscribeButtonLink?: string; // For button-only variant

  // Privacy
  showPrivacyCheckbox?: boolean;
  privacyLabel?: string | React.ReactNode;

  // Callbacks
  onSubmit?: (email: string, agreedToPrivacy: boolean) => Promise<void>;

  // Decorations
  showDecorations?: boolean; // Full-width only

  // Styling
  className?: string;

  // Testing
  'data-testid'?: string;
}
```

---

## 🔧 Implementation Details

### State Management
```typescript
const [email, setEmail] = useState('');
const [agreedToPrivacy, setAgreedToPrivacy] = useState(false);
const [isSubmitting, setIsSubmitting] = useState(false);
const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
const [errorMessage, setErrorMessage] = useState('');
```

### Email Validation
- Browser native: `type="email"` + `required`
- Custom validation: Check for valid email format
- Server-side: Parent component handles via `onSubmit` callback

### Form Submission Flow
1. Validate email format
2. Check privacy checkbox (if enabled)
3. Set loading state
4. Call `onSubmit` callback
5. Handle success/error response
6. Display appropriate message
7. Reset form on success

### Decorative SVGs
- Paper plane icon variations
- Positioned absolutely with low opacity
- Only shown in full-width variant
- Responsive sizing

---

## ✅ Acceptance Criteria

### Functionality
- [ ] Email input validates email format
- [ ] Privacy checkbox works (if enabled)
- [ ] Submit button shows loading state
- [ ] Form submission calls onSubmit callback
- [ ] Success message displays after successful submit
- [ ] Error message displays on failure
- [ ] Form resets after successful submission
- [ ] Button-only variant links to correct URL

### Responsive Design
- [ ] Mobile: Vertical layout, smaller typography
- [ ] Tablet: Intermediate sizing
- [ ] Desktop: Horizontal layout (full-width), optimal spacing
- [ ] Sidebar: Always compact (320px width)

### Accessibility
- [ ] Email input has proper label/aria-label
- [ ] Submit button is keyboard accessible
- [ ] Privacy checkbox is keyboard accessible
- [ ] Success/error messages use role="alert"
- [ ] Focus management works correctly
- [ ] Screen reader announcements work

### AEGOV Compliance
- [ ] Uses AEGOV color classes
- [ ] Follows AEGOV spacing scale
- [ ] Uses AEGOV typography scale
- [ ] Matches AEGOV border radius
- [ ] Supports RTL layout

---

## 🧪 Test Coverage

### Unit Tests
1. **Rendering Tests**
   - Renders with default props
   - Renders full-width variant
   - Renders sidebar variant
   - Renders inline form type
   - Renders button-only type
   - Shows decorations when enabled
   - Hides decorations when disabled

2. **Form Tests**
   - Email input updates on change
   - Privacy checkbox toggles correctly
   - Submit button is disabled when form invalid
   - Submit button is enabled when form valid
   - Form submission calls onSubmit
   - Loading state shows during submission
   - Success message displays after submission
   - Error message displays on failure

3. **Validation Tests**
   - Validates email format
   - Shows error for invalid email
   - Requires privacy consent (if enabled)
   - Prevents submission without valid email

4. **Accessibility Tests**
   - Has proper ARIA attributes
   - Keyboard navigation works
   - Focus management is correct
   - Alert messages are announced

5. **Variant Tests**
   - Full-width has correct classes
   - Sidebar has correct classes
   - Button-only shows link instead of form
   - Decorations only show in full-width

---

## 📚 Storybook Stories

### Stories to Create
1. **Default** - Full-width with form
2. **Sidebar** - Compact sidebar version
3. **Button Only Full Width** - CTA button variant
4. **Button Only Sidebar** - Compact button variant
5. **With Privacy Checkbox** - Shows privacy consent
6. **Loading State** - Submitting state
7. **Success State** - After successful submission
8. **Error State** - After failed submission
9. **Custom Content** - Custom heading and description
10. **No Decorations** - Without SVG backgrounds

### Interactive Controls
- Variant selector (full-width / sidebar)
- Form type selector (inline / button-only)
- Show decorations toggle
- Show privacy checkbox toggle
- Editable heading text
- Editable description text
- Editable button text

---

## 🎨 Visual States

### Idle State
- Empty email input
- Unchecked privacy checkbox
- Default submit button

### Focused State
- Email input focused with border highlight
- Keyboard outline visible

### Validating State
- Input shows validation feedback
- Error message if invalid email

### Submitting State
- Submit button shows loading spinner
- Form inputs disabled
- "Submitting..." text

### Success State
- Green success alert appears
- "Successfully subscribed!" message
- Form resets after 3 seconds

### Error State
- Red error alert appears
- Error message from server/callback
- Form remains filled for retry

---

## 🔐 Security & Privacy

### GDPR Compliance
- [ ] Privacy checkbox with clear consent text
- [ ] Link to privacy policy
- [ ] Ability to unsubscribe
- [ ] Data processing disclosure

### Security Measures
- [ ] Email validation to prevent injection
- [ ] Rate limiting (handled by backend)
- [ ] CSRF protection (handled by backend)
- [ ] No sensitive data in frontend state
- [ ] Secure HTTPS submission

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Vertical form layout
- Full-width inputs
- Full-width button
- Smaller typography (h5 → h6)
- Reduced padding (py-12)

### Tablet (640px - 1024px)
- Intermediate sizing
- Optional horizontal layout
- Medium typography (h4)
- Medium padding (py-16)

### Desktop (> 1024px)
- Horizontal form layout (full-width)
- Optimal spacing
- Large typography (h3)
- Maximum padding (py-20)
- Show decorative SVGs

---

## 🌐 RTL Support

- Text direction reverses
- Form layout mirrors
- Icons flip horizontally
- Padding/margins mirror
- Decorative SVGs mirror

---

## 🚀 Implementation Steps

### Phase 1: Setup (15 mins)
1. Create folder structure
2. Create TypeScript types
3. Set up basic component skeleton

### Phase 2: Component (60 mins)
4. Implement main Newsletter component
5. Add variant logic (full-width/sidebar)
6. Add form type logic (inline/button-only)
7. Implement form state management
8. Add email validation
9. Add submission handling
10. Add success/error messaging

### Phase 3: Styling (30 mins)
11. Apply AEGOV classes
12. Add decorative SVGs
13. Implement responsive styles
14. Add animations (Framer Motion)

### Phase 4: Testing (60 mins)
15. Write unit tests
16. Test all variants
17. Test form submission
18. Test validation
19. Test accessibility

### Phase 5: Documentation (30 mins)
20. Create Storybook stories
21. Add JSDoc comments
22. Create usage examples
23. Document props

### Phase 6: Integration (15 mins)
24. Export from blocks index
25. Create showcase page
26. Update routes
27. Update BLOCKS_STATUS.md

**Total: ~3.5 hours**

---

## 📦 Dependencies

### Already Available ✅
- Input component
- Button component
- Checkbox component
- Alert component (for success/error)
- Framer Motion (animations)

### Need to Create
- Decorative SVG components (simple)
- Email validation utility (simple regex)

---

## 🎯 Success Metrics

- [ ] All 4 variants render correctly
- [ ] Form submission works
- [ ] Email validation works
- [ ] Privacy checkbox works
- [ ] Success/error states work
- [ ] Responsive on all devices
- [ ] Accessible (WCAG 2.2 AA)
- [ ] Test coverage > 80%
- [ ] Storybook stories complete
- [ ] Documentation complete

---

## 📝 Notes

**Keep It Simple:**
- This is a UI-only component
- Backend integration via `onSubmit` callback
- Parent component handles actual API calls
- Focus on UI/UX and validation

**Reusability:**
- Should work in any page layout
- Configurable via props
- No hard-coded content
- Flexible styling via className

**Best Practices:**
- Follow existing component patterns
- Use AEGOV color system
- Maintain accessibility
- Comprehensive tests
- Clear documentation

---

**Ready to implement! 🚀**

This plan provides:
✅ Clear requirements
✅ Technical specifications
✅ Visual states
✅ Test coverage plan
✅ Step-by-step implementation guide
✅ Time estimates

Let's build it!
