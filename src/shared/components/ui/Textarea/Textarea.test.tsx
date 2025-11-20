import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Textarea } from './Textarea';

describe('Textarea Component', () => {
  describe('Rendering', () => {
    it('renders textarea element', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Textarea label="Your message" />);
      expect(screen.getByLabelText('Your message')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Textarea placeholder="Leave a comment" />);
      const textarea = screen.getByPlaceholderText('Leave a comment');
      expect(textarea).toBeInTheDocument();
    });

    it('has aegov-form-control wrapper class', () => {
      const { container } = render(<Textarea label="Test" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toBeInTheDocument();
    });

    it('has form-control-input container', () => {
      const { container } = render(<Textarea />);
      const inputContainer = container.querySelector('.form-control-input');
      expect(inputContainer).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders base size by default', () => {
      const { container } = render(<Textarea />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-sm');
      expect(wrapper).not.toHaveClass('control-lg');
    });

    it('renders small size', () => {
      const { container } = render(<Textarea size="sm" />);
      const wrapper = container.querySelector('.control-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container } = render(<Textarea size="lg" />);
      const wrapper = container.querySelector('.control-lg');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Textarea />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Textarea variant="secondary" />);
      const wrapper = container.querySelector('.control-secondary');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('renders without error by default', () => {
      const { container } = render(<Textarea />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-error');
    });

    it('renders error state', () => {
      const { container } = render(<Textarea error />);
      const wrapper = container.querySelector('.control-error');
      expect(wrapper).toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<Textarea error errorMessage="Message is required" />);
      expect(screen.getByText(/Message is required/)).toBeInTheDocument();
    });

    it('error message has error-message class', () => {
      const { container } = render(<Textarea error errorMessage="Error text" />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('renders helper text', () => {
      render(<Textarea helperText="Please provide details" />);
      expect(screen.getByText(/Please provide details/)).toBeInTheDocument();
    });

    it('does not render helper text by default', () => {
      const { container } = render(<Textarea />);
      const helperText = container.querySelector('.text-xs');
      expect(helperText).not.toBeInTheDocument();
    });
  });

  describe('Rows Attribute', () => {
    it('renders with default rows (4)', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '4');
    });

    it('accepts custom rows', () => {
      render(<Textarea rows={6} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('rows', '6');
    });
  });

  describe('States', () => {
    it('renders enabled by default', () => {
      render(<Textarea />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).not.toBeDisabled();
    });

    it('renders disabled state', () => {
      render(<Textarea disabled />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeDisabled();
    });

    it('renders required field', () => {
      render(<Textarea required />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toBeRequired();
    });
  });

  describe('Interaction', () => {
    it('handles textarea change', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Textarea onChange={handleChange} />);

      const textarea = screen.getByRole('textbox');
      await user.type(textarea, 'Hello');

      expect(handleChange).toHaveBeenCalled();
    });

    it('handles textarea focus', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<Textarea onFocus={handleFocus} />);

      const textarea = screen.getByRole('textbox');
      await user.click(textarea);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles textarea blur', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<Textarea onBlur={handleBlur} />);

      const textarea = screen.getByRole('textbox');
      await user.click(textarea);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Attributes', () => {
    it('accepts placeholder', () => {
      render(<Textarea placeholder="Leave a comment..." />);
      expect(screen.getByPlaceholderText('Leave a comment...')).toBeInTheDocument();
    });

    it('accepts id', () => {
      render(<Textarea id="test-textarea" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('id', 'test-textarea');
    });

    it('accepts name', () => {
      render(<Textarea name="message" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('name', 'message');
    });

    it('accepts value', () => {
      render(<Textarea value="Test value" onChange={() => {}} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue('Test value');
    });

    it('accepts defaultValue', () => {
      render(<Textarea defaultValue="Default" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveValue('Default');
    });

    it('accepts aria-label', () => {
      render(<Textarea aria-label="Message field" />);
      expect(screen.getByLabelText('Message field')).toBeInTheDocument();
    });

    it('accepts aria-describedby', () => {
      render(<Textarea aria-describedby="helper-text" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-describedby', 'helper-text');
    });

    it('accepts maxLength', () => {
      render(<Textarea maxLength={100} />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('maxLength', '100');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className for textarea', () => {
      render(<Textarea className="custom-textarea" />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveClass('custom-textarea');
    });

    it('accepts custom wrapperClassName', () => {
      const { container } = render(<Textarea wrapperClassName="custom-wrapper" />);
      const wrapper = container.querySelector('.aegov-form-control.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with textarea', () => {
      render(<Textarea label="Message" id="message" />);
      const textarea = screen.getByLabelText('Message');
      expect(textarea).toHaveAttribute('id', 'message');
    });

    it('disabled textarea has aria-disabled', () => {
      render(<Textarea disabled />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-disabled', 'true');
    });

    it('error state has aria-invalid', () => {
      render(<Textarea error />);
      const textarea = screen.getByRole('textbox');
      expect(textarea).toHaveAttribute('aria-invalid', 'true');
    });
  });
});
