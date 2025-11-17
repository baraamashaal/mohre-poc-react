# Libraries Guide

**Date:** 2025-11-17
**Purpose:** Complete guide for all helper libraries installed in the MOHRE POC project

---

## Table of Contents

1. [State Management - Zustand](#state-management---zustand)
2. [Form Management - React Hook Form](#form-management---react-hook-form)
3. [Schema Validation - Zod](#schema-validation---zod)
4. [Utility Libraries](#utility-libraries)
5. [Animation - Framer Motion](#animation---framer-motion)
6. [Positioning - Floating UI](#positioning---floating-ui)

---

## State Management - Zustand

**Version:** 5.0.8
**Purpose:** Lightweight, fast state management with minimal boilerplate

### Why Zustand?

- ✅ **Simple API** - Less boilerplate than Redux
- ✅ **No providers** - Use state anywhere without context
- ✅ **TypeScript-first** - Excellent type inference
- ✅ **DevTools support** - Redux DevTools compatible
- ✅ **Middleware support** - Persist, Immer, etc.
- ✅ **Small bundle** - Only ~1KB gzipped

### Basic Store Setup

```typescript
// src/stores/useAppStore.ts
import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface AppState {
  // UI State
  sidebarOpen: boolean;
  language: 'en' | 'ar';
  theme: 'light' | 'dark';

  // Actions
  toggleSidebar: () => void;
  setLanguage: (lang: 'en' | 'ar') => void;
  setTheme: (theme: 'light' | 'dark') => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      immer((set) => ({
        // Initial State
        sidebarOpen: false,
        language: 'en',
        theme: 'light',

        // Actions
        toggleSidebar: () =>
          set((state) => {
            state.sidebarOpen = !state.sidebarOpen;
          }),

        setLanguage: (lang) =>
          set((state) => {
            state.language = lang;
            document.documentElement.setAttribute('lang', lang);
            document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
          }),

        setTheme: (theme) =>
          set((state) => {
            state.theme = theme;
          }),
      })),
      {
        name: 'mohre-app-storage',
        partialize: (state) => ({
          language: state.language,
          theme: state.theme,
        }),
      }
    )
  )
);
```

### Modal Management Store

```typescript
// src/stores/useModalStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface ModalState {
  modals: Record<string, boolean>;
  openModal: (id: string) => void;
  closeModal: (id: string) => void;
  toggleModal: (id: string) => void;
  isModalOpen: (id: string) => boolean;
}

export const useModalStore = create<ModalState>()(
  immer((set, get) => ({
    modals: {},

    openModal: (id) =>
      set((state) => {
        state.modals[id] = true;
      }),

    closeModal: (id) =>
      set((state) => {
        state.modals[id] = false;
      }),

    toggleModal: (id) =>
      set((state) => {
        state.modals[id] = !state.modals[id];
      }),

    isModalOpen: (id) => get().modals[id] || false,
  }))
);
```

### Toast Notification Store

```typescript
// src/stores/useToastStore.ts
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { nanoid } from 'nanoid';

interface Toast {
  id: string;
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
  duration?: number;
}

interface ToastState {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export const useToastStore = create<ToastState>()(
  immer((set) => ({
    toasts: [],

    addToast: (toast) => {
      const id = nanoid();
      set((state) => {
        state.toasts.push({ ...toast, id });
      });

      // Auto-remove after duration
      if (toast.duration !== 0) {
        setTimeout(() => {
          set((state) => {
            state.toasts = state.toasts.filter((t) => t.id !== id);
          });
        }, toast.duration || 5000);
      }

      return id;
    },

    removeToast: (id) =>
      set((state) => {
        state.toasts = state.toasts.filter((t) => t.id !== id);
      }),

    clearAll: () =>
      set((state) => {
        state.toasts = [];
      }),
  }))
);
```

### Usage in Components

```tsx
import { useAppStore } from '@/stores/useAppStore';
import { useToastStore } from '@/stores/useToastStore';

const MyComponent = () => {
  // Select only what you need
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  // Or select multiple
  const { sidebarOpen, toggleSidebar } = useAppStore((state) => ({
    sidebarOpen: state.sidebarOpen,
    toggleSidebar: state.toggleSidebar,
  }));

  // Toast usage
  const addToast = useToastStore((state) => state.addToast);

  const handleSubmit = () => {
    // Success toast
    addToast({
      type: 'success',
      message: 'Form submitted successfully!',
      duration: 3000,
    });
  };

  return (
    <div>
      <button onClick={() => setLanguage(language === 'en' ? 'ar' : 'en')}>
        {language === 'en' ? 'العربية' : 'English'}
      </button>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
    </div>
  );
};
```

---

## Form Management - React Hook Form

**Version:** 7.x
**Purpose:** Performant, flexible forms with easy validation

### Why React Hook Form?

- ✅ **Performance** - Minimizes re-renders
- ✅ **Easy validation** - Works with Zod, Yup, etc.
- ✅ **Small bundle** - ~9KB gzipped
- ✅ **TypeScript support** - Full type safety
- ✅ **Less code** - Minimal boilerplate
- ✅ **DevTools** - Integrated with browser devtools

### Basic Form Example

```tsx
// src/components/ContactForm/ContactForm.tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

// Schema with Zod
const contactSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().regex(/^[0-9]{10}$/, 'Phone must be 10 digits'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      alert('Form submitted successfully!');
      reset();
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Full Name"
        {...register('fullName')}
        error={errors.fullName?.message}
      />

      <Input
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />

      <Input
        label="Phone"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
      />

      <div className="aegov-form-control">
        <label>Message</label>
        <textarea
          {...register('message')}
          className={errors.message ? 'error' : ''}
        />
        {errors.message && (
          <p className="form-control-error">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Submit'}
      </Button>
    </form>
  );
};
```

### AEGOV Form Component Integration

```tsx
// src/components/Input/Input.tsx
import { forwardRef } from 'react';
import { InputProps } from './Input.types';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, ...props }, ref) => {
    return (
      <div className={`aegov-form-control ${error ? 'error' : ''}`}>
        <label htmlFor={props.id}>{label}</label>
        <div className="form-control-input">
          <input ref={ref} {...props} />
        </div>
        {error && <p className="form-control-error">{error}</p>}
        {!error && helperText && (
          <p className="form-control-helper">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
```

---

## Schema Validation - Zod

**Version:** 3.x
**Purpose:** TypeScript-first schema validation

### Why Zod?

- ✅ **TypeScript-first** - Infer types from schemas
- ✅ **Composable** - Build complex schemas from simple ones
- ✅ **Zero dependencies** - Small bundle size
- ✅ **Error messages** - Customizable validation messages
- ✅ **Works with RHF** - Perfect integration

### Common Validation Schemas

```typescript
// src/schemas/common.ts
import { z } from 'zod';

// UAE Phone number
export const uaePhoneSchema = z
  .string()
  .regex(/^(?:\+971|00971|0)?(?:2|3|4|6|7|9|50|51|52|54|55|56|58)\d{7}$/, {
    message: 'Invalid UAE phone number',
  });

// Emirates ID
export const emiratesIdSchema = z
  .string()
  .regex(/^784-[0-9]{4}-[0-9]{7}-[0-9]$/, {
    message: 'Invalid Emirates ID format (784-YYYY-NNNNNNN-N)',
  });

// Email
export const emailSchema = z.string().email('Invalid email address');

// Password (strong)
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Date in the past
export const pastDateSchema = z.date().max(new Date(), 'Date must be in the past');

// File upload
export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5000000, 'File size must be less than 5MB')
  .refine(
    (file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type),
    'File must be JPEG, PNG, or PDF'
  );
```

### User Registration Schema Example

```typescript
// src/schemas/user.ts
import { z } from 'zod';
import { emailSchema, passwordSchema, uaePhoneSchema } from './common';

export const userRegistrationSchema = z
  .object({
    fullName: z.string().min(2, 'Name must be at least 2 characters'),
    email: emailSchema,
    phone: uaePhoneSchema,
    password: passwordSchema,
    confirmPassword: z.string(),
    emiratesId: z.string().optional(),
    dateOfBirth: z.date(),
    nationality: z.string().min(1, 'Nationality is required'),
    termsAccepted: z.literal(true, {
      errorMap: () => ({ message: 'You must accept terms and conditions' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type UserRegistration = z.infer<typeof userRegistrationSchema>;
```

---

## Utility Libraries

### clsx - Conditional Classes

**Version:** 2.x
**Purpose:** Utility for constructing className strings conditionally

```typescript
import clsx from 'clsx';

// Basic usage
<button className={clsx('aegov-btn', isActive && 'active', className)} />

// With objects
<div className={clsx({
  'aegov-btn': true,
  'btn-outline': variant === 'outline',
  'btn-lg': size === 'lg',
  'opacity-50': disabled,
})} />

// Helper function for AEGOV components
export const aegovClass = (
  baseClass: string,
  variant?: string,
  size?: string,
  className?: string
) => {
  return clsx(
    `aegov-${baseClass}`,
    variant && `${baseClass}-${variant}`,
    size && `${baseClass}-${size}`,
    className
  );
};

// Usage:
<button className={aegovClass('btn', variant, size, className)} />
```

### date-fns - Date Manipulation

**Version:** 4.x
**Purpose:** Modern date utility library

```typescript
import { format, formatDistance, isAfter, addDays, parseISO } from 'date-fns';
import { ar, enUS } from 'date-fns/locale';

// Format dates
const formatted = format(new Date(), 'dd/MM/yyyy'); // "17/11/2025"
const arabicDate = format(new Date(), 'PPP', { locale: ar });

// Relative time
const timeAgo = formatDistance(new Date(2024, 0, 1), new Date(), {
  addSuffix: true,
}); // "about 1 year ago"

// Date calculations
const futureDate = addDays(new Date(), 7);
const isInFuture = isAfter(futureDate, new Date());

// Parse ISO strings
const date = parseISO('2025-11-17T12:00:00Z');

// Helper for AEGOV date inputs
export const formatAegov Date = (date: Date, language: 'en' | 'ar') => {
  return format(date, 'PPP', { locale: language === 'ar' ? ar : enUS });
};
```

### nanoid - Unique ID Generator

**Version:** 5.x
**Purpose:** Tiny, secure, URL-friendly unique string ID generator

```typescript
import { nanoid } from 'nanoid';

// Generate unique ID
const id = nanoid(); // "V1StGXR8_Z5jdHi6B-myT"

// Custom length
const shortId = nanoid(10); // "4f90d13a42"

// Use cases
const modalId = `modal-${nanoid()}`;
const toastId = `toast-${nanoid()}`;
const formId = `form-${nanoid(8)}`;

// Component example
const MyComponent = () => {
  const [id] = useState(() => nanoid());

  return <div id={id}>Content</div>;
};
```

### react-use - React Hooks Collection

**Version:** 17.x
**Purpose:** Collection of essential React hooks

```typescript
import {
  useToggle,
  useLocalStorage,
  useDebounce,
  useWindowSize,
  useMedia,
  usePrevious,
  useClickAway,
  useKey,
} from 'react-use';

// Toggle state
const [isOpen, toggleOpen] = useToggle(false);

// Local storage
const [value, setValue, remove] = useLocalStorage('key', 'default');

// Debounce
const [searchTerm, setSearchTerm] = useState('');
const debouncedSearch = useDebounce(searchTerm, 500);

// Window size
const { width, height } = useWindowSize();
const isMobile = width < 768;

// Media query
const isWide = useMedia('(min-width: 1024px)');

// Previous value
const [count, setCount] = useState(0);
const prevCount = usePrevious(count);

// Click away
const ref = useRef(null);
useClickAway(ref, () => console.log('Clicked outside'));

// Keyboard shortcuts
useKey('Escape', () => console.log('Escape pressed'));
useKey('ctrl+s', (e) => {
  e.preventDefault();
  console.log('Save shortcut');
});
```

---

## Animation - Framer Motion

**Version:** 12.x
**Purpose:** Production-ready animation library for React

### Why Framer Motion?

- ✅ **Declarative API** - Animate with props
- ✅ **Gestures** - Drag, tap, hover built-in
- ✅ **Layout animations** - Animate layout changes
- ✅ **Performance** - Hardware-accelerated
- ✅ **TypeScript** - Full type safety
- ✅ **Variants** - Reusable animation sets

### Basic Animations

```tsx
import { motion } from 'framer-motion';

// Fade in
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>

// Slide in
<motion.div
  initial={{ x: -100, opacity: 0 }}
  animate={{ x: 0, opacity: 1 }}
  transition={{ type: 'spring', stiffness: 100 }}
>
  Content
</motion.div>

// Scale on hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me
</motion.button>
```

### AEGOV Modal Animation

```tsx
// src/components/Modal/Modal.tsx
import { motion, AnimatePresence } from 'framer-motion';

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring',
      damping: 25,
      stiffness: 300,
    },
  },
  exit: {
    opacity: 0,
    y: 50,
    scale: 0.95,
    transition: {
      duration: 0.2,
    },
  },
};

export const Modal = ({ isOpen, onClose, children }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={onClose}
          />

          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center"
            onClick={onClose}
          >
            <motion.div
              className="bg-white rounded-lg p-6 max-w-md w-full"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {children}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
```

### AEGOV Toast Animation

```tsx
// src/components/Toast/Toast.tsx
import { motion } from 'framer-motion';

const toastVariants = {
  initial: {
    opacity: 0,
    y: -50,
    x: 100,
    scale: 0.3,
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: [0.4, 0.0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    x: 100,
    scale: 0.5,
    transition: {
      duration: 0.2,
    },
  },
};

export const Toast = ({ message, type, onDismiss }) => {
  return (
    <motion.div
      className={`aegov-toast toast-${type}`}
      variants={toastVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      layout
    >
      <p>{message}</p>
      <button onClick={onDismiss}>×</button>
    </motion.div>
  );
};
```

### List Animations

```tsx
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const MyList = ({ items }) => (
  <motion.ul variants={container} initial="hidden" animate="show">
    {items.map((item) => (
      <motion.li key={item.id} variants={item}>
        {item.text}
      </motion.li>
    ))}
  </motion.ul>
);
```

---

## Positioning - Floating UI

**Version:** 0.27.16
**Purpose:** Positioning library for tooltips, popovers, dropdowns (replaces Popper.js)

### Basic Usage

```tsx
import { useFloating, offset, flip, shift } from '@floating-ui/react';

export const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { refs, floatingStyles } = useFloating({
    placement: 'bottom-start',
    middleware: [offset(10), flip(), shift()],
    open: isOpen,
  });

  return (
    <>
      <button ref={refs.setReference} onClick={() => setIsOpen(!isOpen)}>
        Toggle
      </button>

      {isOpen && (
        <div ref={refs.setFloating} style={floatingStyles}>
          Dropdown content
        </div>
      )}
    </>
  );
};
```

See AEGOV components documentation for full integration examples.

---

## Summary

All libraries are installed and ready to use:

| Library | Version | Purpose |
|---------|---------|---------|
| **Zustand** | 5.0.8 | State management |
| **Immer** | 10.2.0 | Immutable state updates |
| **React Hook Form** | 7.x | Form management |
| **Zod** | 3.x | Schema validation |
| **@hookform/resolvers** | 3.x | RHF + Zod integration |
| **clsx** | 2.x | Conditional classes |
| **date-fns** | 4.x | Date manipulation |
| **nanoid** | 5.x | Unique ID generator |
| **react-use** | 17.x | React hooks collection |
| **Framer Motion** | 12.x | Animation library |
| **Floating UI** | 0.27.16 | Positioning library |

All examples use TypeScript and follow AEGOV design patterns!
