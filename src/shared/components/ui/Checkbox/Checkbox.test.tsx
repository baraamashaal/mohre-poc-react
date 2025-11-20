import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  describe('Rendering', () => {
    it('renders checkbox element', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Checkbox label="Accept terms" />);
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Checkbox aria-label="checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeInTheDocument();
    });

    it('has aegov-check-item wrapper class', () => {
      const { container } = render(<Checkbox label="Test" />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).toBeInTheDocument();
    });

    it('checkbox has type="checkbox"', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('type', 'checkbox');
    });
  });

  describe('Sizes', () => {
    it('renders base size by default', () => {
      const { container } = render(<Checkbox />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).not.toHaveClass('check-sm');
      expect(wrapper).not.toHaveClass('check-lg');
    });

    it('renders small size', () => {
      const { container } = render(<Checkbox size="sm" />);
      const wrapper = container.querySelector('.check-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container} = render(<Checkbox size="lg" />);
      const wrapper = container.querySelector('.check-lg');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Checkbox />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).not.toHaveClass('check-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Checkbox variant="secondary" />);
      const wrapper = container.querySelector('.check-secondary');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('renders without error by default', () => {
      const { container } = render(<Checkbox />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).not.toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<Checkbox error errorMessage="This field is required" />);
      expect(screen.getByText(/This field is required/)).toBeInTheDocument();
    });

    it('error message has error-message class', () => {
      const { container } = render(<Checkbox error errorMessage="Error text" />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('renders helper text', () => {
      render(<Checkbox helperText="Please check to continue" />);
      expect(screen.getByText(/Please check to continue/)).toBeInTheDocument();
    });

    it('does not render helper text by default', () => {
      const { container } = render(<Checkbox />);
      const helperText = container.querySelector('.text-xs');
      expect(helperText).not.toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders unchecked by default', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();
    });

    it('renders checked state', () => {
      render(<Checkbox checked onChange={() => {}} />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('renders enabled by default', () => {
      render(<Checkbox />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeDisabled();
    });

    it('renders disabled state', () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeDisabled();
    });

    it('renders required field', () => {
      render(<Checkbox required />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeRequired();
    });

    it('supports indeterminate state', () => {
      render(<Checkbox indeterminate />);
      const checkbox = screen.getByRole('checkbox') as HTMLInputElement;
      expect(checkbox.indeterminate).toBe(true);
    });
  });

  describe('Interaction', () => {
    it('handles checkbox change', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Checkbox onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleChange).toHaveBeenCalled();
    });

    it('toggles checked state on click', async () => {
      const user = userEvent.setup();
      render(<Checkbox />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();

      await user.click(checkbox);
      expect(checkbox).not.toBeChecked();
    });

    it('handles checkbox focus', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<Checkbox onFocus={handleFocus} />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles checkbox blur', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<Checkbox onBlur={handleBlur} />);

      const checkbox = screen.getByRole('checkbox');
      await user.click(checkbox);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Attributes', () => {
    it('accepts id', () => {
      render(<Checkbox id="test-checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('id', 'test-checkbox');
    });

    it('accepts name', () => {
      render(<Checkbox name="terms" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('name', 'terms');
    });

    it('accepts value', () => {
      render(<Checkbox value="accepted" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('value', 'accepted');
    });

    it('accepts defaultChecked', () => {
      render(<Checkbox defaultChecked />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toBeChecked();
    });

    it('accepts aria-label', () => {
      render(<Checkbox aria-label="Accept terms" />);
      expect(screen.getByLabelText('Accept terms')).toBeInTheDocument();
    });

    it('accepts aria-describedby', () => {
      render(<Checkbox aria-describedby="helper-text" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-describedby', 'helper-text');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className for checkbox', () => {
      render(<Checkbox className="custom-checkbox" />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveClass('custom-checkbox');
    });

    it('accepts custom wrapperClassName', () => {
      const { container } = render(<Checkbox wrapperClassName="custom-wrapper" />);
      const wrapper = container.querySelector('.aegov-check-item.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with checkbox', () => {
      render(<Checkbox label="Accept" id="accept" />);
      const checkbox = screen.getByLabelText('Accept');
      expect(checkbox).toHaveAttribute('id', 'accept');
    });

    it('disabled checkbox has aria-disabled', () => {
      render(<Checkbox disabled />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-disabled', 'true');
    });

    it('checkbox with error has aria-invalid', () => {
      render(<Checkbox error />);
      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Label Click', () => {
    it('clicking label toggles checkbox', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Accept terms" />);

      const label = screen.getByText('Accept terms');
      const checkbox = screen.getByLabelText('Accept terms');

      expect(checkbox).not.toBeChecked();

      await user.click(label);
      expect(checkbox).toBeChecked();

      await user.click(label);
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports space key to toggle', async () => {
      const user = userEvent.setup();
      render(<Checkbox label="Accept" />);

      const checkbox = screen.getByRole('checkbox');
      checkbox.focus();

      expect(checkbox).not.toBeChecked();

      await user.keyboard(' ');
      expect(checkbox).toBeChecked();

      await user.keyboard(' ');
      expect(checkbox).not.toBeChecked();
    });
  });

  describe('Controlled vs Uncontrolled', () => {
    it('works as controlled component', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Checkbox checked={false} onChange={handleChange} />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(handleChange).toHaveBeenCalled();
    });

    it('works as uncontrolled component', async () => {
      const user = userEvent.setup();
      render(<Checkbox defaultChecked={false} />);

      const checkbox = screen.getByRole('checkbox');
      expect(checkbox).not.toBeChecked();

      await user.click(checkbox);
      expect(checkbox).toBeChecked();
    });
  });
});
