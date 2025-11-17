import { z } from 'zod';

/**
 * Common validation schemas for UAE/MOHRE forms
 */

// UAE Phone number validation
// Supports formats: +971-XX-XXXXXXX, 05X-XXX-XXXX, etc.
export const uaePhoneSchema = z
  .string()
  .regex(
    /^(?:\+971|00971|0)?(?:2|3|4|6|7|9|50|51|52|54|55|56|58)\d{7}$/,
    'Invalid UAE phone number'
  );

// Emirates ID validation
// Format: 784-YYYY-NNNNNNN-N
export const emiratesIdSchema = z
  .string()
  .regex(/^784-[0-9]{4}-[0-9]{7}-[0-9]$/, {
    message: 'Invalid Emirates ID format (784-YYYY-NNNNNNN-N)',
  });

// Email validation
export const emailSchema = z
  .string()
  .min(1, 'Email is required')
  .email('Invalid email address');

// Strong password validation
export const passwordSchema = z
  .string()
  .min(8, 'Password must be at least 8 characters')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9]/, 'Password must contain at least one number')
  .regex(/[^A-Za-z0-9]/, 'Password must contain at least one special character');

// Date validation
export const pastDateSchema = z
  .date()
  .max(new Date(), 'Date must be in the past');

export const futureDateSchema = z
  .date()
  .min(new Date(), 'Date must be in the future');

// File upload validation
export const fileSchema = z
  .instanceof(File)
  .refine((file) => file.size <= 5000000, 'File size must be less than 5MB')
  .refine(
    (file) => ['image/jpeg', 'image/png', 'application/pdf'].includes(file.type),
    'File must be JPEG, PNG, or PDF'
  );

// URL validation
export const urlSchema = z.string().url('Invalid URL');

// Optional URL (allows empty string)
export const optionalUrlSchema = z.union([z.string().url(), z.literal('')]);

// Arabic text validation
export const arabicTextSchema = z
  .string()
  .regex(/^[\u0600-\u06FF\s]+$/, 'Text must be in Arabic');

// English text validation
export const englishTextSchema = z
  .string()
  .regex(/^[A-Za-z\s]+$/, 'Text must be in English');

// Numeric string
export const numericStringSchema = z
  .string()
  .regex(/^\d+$/, 'Must contain only numbers');

// UAE PO Box
export const poBoxSchema = z
  .string()
  .regex(/^P\.?O\.?\s*Box\s*\d+$/i, 'Invalid PO Box format');

// Percentage (0-100)
export const percentageSchema = z
  .number()
  .min(0, 'Percentage must be at least 0')
  .max(100, 'Percentage must be at most 100');
