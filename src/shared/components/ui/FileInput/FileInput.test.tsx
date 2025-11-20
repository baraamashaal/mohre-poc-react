import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FileInput } from './FileInput';

describe('FileInput', () => {
  describe('Rendering', () => {
    it('renders file input with label', () => {
      render(<FileInput label="Upload file" />);
      expect(screen.getByText('Upload file')).toBeInTheDocument();
    });

    it('renders with default label when not provided', () => {
      render(<FileInput />);
      expect(screen.getByText('Upload file')).toBeInTheDocument();
    });

    it('renders with data-testid', () => {
      render(<FileInput data-testid="file-upload" />);
      expect(screen.getByTestId('file-upload')).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size class', () => {
      render(<FileInput size="sm" data-testid="file-input" />);
      const container = screen.getByTestId('file-input');
      expect(container).toHaveClass('control-sm');
    });

    it('applies base size class', () => {
      render(<FileInput size="base" data-testid="file-input" />);
      const container = screen.getByTestId('file-input');
      expect(container).toHaveClass('control-base');
    });

    it('applies large size class', () => {
      render(<FileInput size="lg" data-testid="file-input" />);
      const container = screen.getByTestId('file-input');
      expect(container).toHaveClass('control-lg');
    });
  });

  describe('Variants', () => {
    it('applies primary variant', () => {
      render(<FileInput variant="primary" />);
      const label = screen.getByText('Upload file');
      expect(label).toHaveClass('aegov-btn');
      expect(label).not.toHaveClass('btn-secondary');
    });

    it('applies secondary variant', () => {
      render(<FileInput variant="secondary" />);
      const label = screen.getByText('Upload file');
      expect(label).toHaveClass('aegov-btn', 'btn-secondary');
    });
  });

  describe('File Selection', () => {
    it('calls onFilesChange when file is selected', async () => {
      const handleChange = vi.fn();
      const user = userEvent.setup();

      render(<FileInput onFilesChange={handleChange} data-testid="file-input" />);

      const file = new File(['content'], 'test.pdf', { type: 'application/pdf' });
      const input = screen.getByTestId('file-input').querySelector('input[type="file"]') as HTMLInputElement;

      await user.upload(input, file);

      expect(handleChange).toHaveBeenCalled();
    });
  });

  describe('Disabled State', () => {
    it('applies disabled attribute', () => {
      render(<FileInput disabled data-testid="file-input" />);
      const input = screen.getByTestId('file-input').querySelector('input[type="file"]') as HTMLInputElement;
      expect(input).toBeDisabled();
    });

    it('applies aria-disabled when disabled', () => {
      render(<FileInput disabled data-testid="file-input" />);
      const input = screen.getByTestId('file-input').querySelector('input[type="file"]') as HTMLInputElement;
      expect(input).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Custom Classes', () => {
    it('applies custom className', () => {
      render(<FileInput className="custom-class" data-testid="file-input" />);
      const container = screen.getByTestId('file-input');
      expect(container).toHaveClass('custom-class');
    });
  });

  describe('HTML Attributes', () => {
    it('forwards accept attribute', () => {
      render(<FileInput accept=".pdf,.doc" data-testid="file-input" />);
      const input = screen.getByTestId('file-input').querySelector('input[type="file"]') as HTMLInputElement;
      expect(input).toHaveAttribute('accept', '.pdf,.doc');
    });

    it('forwards multiple attribute', () => {
      render(<FileInput multiple data-testid="file-input" />);
      const input = screen.getByTestId('file-input').querySelector('input[type="file"]') as HTMLInputElement;
      expect(input).toHaveAttribute('multiple');
    });
  });
});
