import { InputHTMLAttributes } from 'react';

/**
 * File input size variants based on AEGOV Design System
 */
export type FileInputSize = 'sm' | 'base' | 'lg';

/**
 * File input button variant
 */
export type FileInputVariant = 'primary' | 'secondary';

/**
 * Props for the FileInput component
 * Following AEGOV Design System file input patterns
 */
export interface FileInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Label text for the upload button */
  label?: string;
  /** Size variant */
  size?: FileInputSize;
  /** Button color variant */
  variant?: FileInputVariant;
  /** Whether to show uploaded file list */
  showFileList?: boolean;
  /** Callback when files are selected */
  onFilesChange?: (files: FileList | null) => void;
  /** Additional CSS classes for the container */
  className?: string;
  /** Test ID for E2E testing */
  'data-testid'?: string;
}
