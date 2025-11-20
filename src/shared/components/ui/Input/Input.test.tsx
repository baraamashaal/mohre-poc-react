import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from './Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('renders input element', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Input label="First Name" />);
      expect(screen.getByLabelText('First Name')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Input placeholder="Enter text" />);
      const input = screen.getByPlaceholderText('Enter text');
      expect(input).toBeInTheDocument();
    });

    it('has aegov-form-control wrapper class', () => {
      const { container } = render(<Input label="Test" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toBeInTheDocument();
    });

    it('has form-control-input container', () => {
      const { container } = render(<Input />);
      const inputContainer = container.querySelector('.form-control-input');
      expect(inputContainer).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders base size by default', () => {
      const { container } = render(<Input />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-sm');
      expect(wrapper).not.toHaveClass('control-lg');
    });

    it('renders small size', () => {
      const { container } = render(<Input size="sm" />);
      const wrapper = container.querySelector('.control-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container } = render(<Input size="lg" />);
      const wrapper = container.querySelector('.control-lg');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Input />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Input variant="secondary" />);
      const wrapper = container.querySelector('.control-secondary');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('renders without error by default', () => {
      const { container } = render(<Input />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-error');
    });

    it('renders error state', () => {
      const { container } = render(<Input error />);
      const wrapper = container.querySelector('.control-error');
      expect(wrapper).toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<Input error errorMessage="This field is required" />);
      expect(screen.getByText(/This field is required/)).toBeInTheDocument();
    });

    it('error message has error-message class', () => {
      const { container } = render(<Input error errorMessage="Error text" />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('renders helper text', () => {
      render(<Input helperText="We require your email address" />);
      expect(screen.getByText(/We require your email address/)).toBeInTheDocument();
    });

    it('does not render helper text by default', () => {
      const { container } = render(<Input />);
      const helperText = container.querySelector('.text-xs');
      expect(helperText).not.toBeInTheDocument();
    });
  });

  describe('Prefix and Suffix', () => {
    const TestIcon = () => <svg data-testid="test-icon"><circle /></svg>;

    it('renders without prefix by default', () => {
      const { container } = render(<Input />);
      const prefix = container.querySelector('.control-prefix');
      expect(prefix).not.toBeInTheDocument();
    });

    it('renders with prefix icon', () => {
      const { container } = render(<Input prefix={<TestIcon />} />);
      const prefix = container.querySelector('.control-prefix');
      expect(prefix).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('renders with prefix text', () => {
      const { container } = render(<Input prefix="http://" />);
      const prefix = container.querySelector('.control-prefix');
      expect(prefix).toBeInTheDocument();
      expect(screen.getByText('http://')).toBeInTheDocument();
    });

    it('renders without suffix by default', () => {
      const { container } = render(<Input />);
      const suffix = container.querySelector('.control-suffix');
      expect(suffix).not.toBeInTheDocument();
    });

    it('renders with suffix icon', () => {
      const { container } = render(<Input suffix={<TestIcon />} />);
      const suffix = container.querySelector('.control-suffix');
      expect(suffix).toBeInTheDocument();
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });

    it('renders with both prefix and suffix', () => {
      const { container } = render(
        <Input
          prefix={<svg data-testid="prefix-icon"><circle /></svg>}
          suffix={<svg data-testid="suffix-icon"><circle /></svg>}
        />
      );
      expect(container.querySelector('.control-prefix')).toBeInTheDocument();
      expect(container.querySelector('.control-suffix')).toBeInTheDocument();
      expect(screen.getByTestId('prefix-icon')).toBeInTheDocument();
      expect(screen.getByTestId('suffix-icon')).toBeInTheDocument();
    });
  });

  describe('Input Types', () => {
    it('renders text input by default', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'text');
    });

    it('renders email input', () => {
      render(<Input type="email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'email');
    });

    it('renders password input', () => {
      render(<Input type="password" />);
      const input = document.querySelector('input[type="password"]');
      expect(input).toBeInTheDocument();
    });

    it('renders url input', () => {
      render(<Input type="url" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('type', 'url');
    });

    it('renders date input', () => {
      render(<Input type="date" />);
      const input = document.querySelector('input[type="date"]');
      expect(input).toBeInTheDocument();
    });

    it('renders search input', () => {
      render(<Input type="search" />);
      const input = screen.getByRole('searchbox');
      expect(input).toHaveAttribute('type', 'search');
    });
  });

  describe('States', () => {
    it('renders enabled by default', () => {
      render(<Input />);
      const input = screen.getByRole('textbox');
      expect(input).not.toBeDisabled();
    });

    it('renders disabled state', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toBeDisabled();
    });

    it('renders required field', () => {
      render(<Input required />);
      const input = screen.getByRole('textbox');
      expect(input).toBeRequired();
    });
  });

  describe('Interaction', () => {
    it('handles input change', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Input onChange={handleChange} />);

      const input = screen.getByRole('textbox');
      await user.type(input, 'Hello');

      expect(handleChange).toHaveBeenCalled();
    });

    it('handles input focus', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<Input onFocus={handleFocus} />);

      const input = screen.getByRole('textbox');
      await user.click(input);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles input blur', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<Input onBlur={handleBlur} />);

      const input = screen.getByRole('textbox');
      await user.click(input);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Attributes', () => {
    it('accepts placeholder', () => {
      render(<Input placeholder="Enter your name" />);
      expect(screen.getByPlaceholderText('Enter your name')).toBeInTheDocument();
    });

    it('accepts id', () => {
      render(<Input id="test-input" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('id', 'test-input');
    });

    it('accepts name', () => {
      render(<Input name="firstName" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('name', 'firstName');
    });

    it('accepts value', () => {
      render(<Input value="Test value" onChange={() => {}} />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('Test value');
    });

    it('accepts defaultValue', () => {
      render(<Input defaultValue="Default" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveValue('Default');
    });

    it('accepts aria-label', () => {
      render(<Input aria-label="Username field" />);
      expect(screen.getByLabelText('Username field')).toBeInTheDocument();
    });

    it('accepts aria-describedby', () => {
      render(<Input aria-describedby="helper-text" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby', 'helper-text');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className for input', () => {
      render(<Input className="custom-input" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('custom-input');
    });

    it('accepts custom wrapperClassName', () => {
      const { container } = render(<Input wrapperClassName="custom-wrapper" />);
      const wrapper = container.querySelector('.aegov-form-control.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with input', () => {
      render(<Input label="Email" id="email" />);
      const input = screen.getByLabelText('Email');
      expect(input).toHaveAttribute('id', 'email');
    });

    it('disabled input has aria-disabled', () => {
      render(<Input disabled />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-disabled', 'true');
    });

    it('error state has aria-invalid', () => {
      render(<Input error />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });
});
