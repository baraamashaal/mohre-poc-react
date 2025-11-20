import { useId, useState, ChangeEvent } from 'react';
import clsx from 'clsx';
import type { FileInputProps } from './FileInput.types';

/**
 * Upload Icon SVG
 */
const UploadIcon = () => (
  <svg
    className="w-5 h-5 mr-2"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
    />
  </svg>
);

/**
 * FileInput Component
 *
 * A file upload component following AEGOV Design System patterns.
 * Uses a hidden native file input with a styled label button.
 *
 * @example
 * ```tsx
 * // Basic file input
 * <FileInput label="Upload document" />
 *
 * // With file type restriction
 * <FileInput
 *   label="Upload PDF"
 *   accept=".pdf"
 *   onFilesChange={(files) => console.log(files)}
 * />
 *
 * // Multiple files
 * <FileInput
 *   label="Upload images"
 *   accept="image/*"
 *   multiple
 * />
 * ```
 */
export const FileInput = ({
  label = 'Upload file',
  size = 'base',
  variant = 'primary',
  showFileList = true,
  onFilesChange,
  className,
  disabled,
  'data-testid': dataTestId,
  id: providedId,
  ...rest
}: FileInputProps) => {
  const autoId = useId();
  const id = providedId || `file-input-${autoId}`;
  const [selectedFiles, setSelectedFiles] = useState<FileList | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setSelectedFiles(files);
    onFilesChange?.(files);
  };

  const handleRemoveFile = (index: number) => {
    if (!selectedFiles) return;

    const dt = new DataTransfer();
    for (let i = 0; i < selectedFiles.length; i++) {
      if (i !== index) {
        dt.items.add(selectedFiles[i]);
      }
    }

    const newFiles = dt.files.length > 0 ? dt.files : null;
    setSelectedFiles(newFiles);
    onFilesChange?.(newFiles);
  };

  const containerClasses = clsx(
    'aegov-form-control',
    'aegov-file-input-control',
    {
      'control-sm': size === 'sm',
      'control-base': size === 'base',
      'control-lg': size === 'lg',
    },
    className
  );

  const labelClasses = clsx('file-input-label', 'aegov-btn', {
    'btn-secondary': variant === 'secondary',
  });

  return (
    <div className={containerClasses} data-testid={dataTestId}>
      <label htmlFor={id} className={labelClasses}>
        <UploadIcon />
        {label}
      </label>
      <input
        type="file"
        id={id}
        disabled={disabled}
        aria-disabled={disabled}
        onChange={handleChange}
        {...rest}
      />

      {showFileList && selectedFiles && selectedFiles.length > 0 && (
        <div className="file-input-summary mt-2">
          {Array.from(selectedFiles).map((file, index) => (
            <div key={`${file.name}-${index}`} className="file-input-summary-item">
              <span className="text-sm text-gray-700">{file.name}</span>
              <button
                type="button"
                onClick={() => handleRemoveFile(index)}
                className="ml-2 text-sm text-red-600 hover:text-red-800"
                aria-label={`Remove ${file.name}`}
              >
                <span className="sr-only">remove file {file.name}</span>
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
