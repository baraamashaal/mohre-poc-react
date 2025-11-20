import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Select } from './Select';

describe('Select Component', () => {
  describe('Rendering', () => {
    it('renders select element', () => {
      render(<Select />);
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Select label="Country" />);
      expect(screen.getByLabelText('Country')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(
        <Select aria-label="select">
          <option value="1">Option 1</option>
        </Select>
      );
      const select = screen.getByRole('combobox');
      expect(select).toBeInTheDocument();
    });

    it('has aegov-form-control wrapper class', () => {
      const { container } = render(<Select label="Test" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toBeInTheDocument();
    });

    it('has form-control-input container', () => {
      const { container } = render(<Select />);
      const inputContainer = container.querySelector('.form-control-input');
      expect(inputContainer).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('renders base size by default', () => {
      const { container } = render(<Select />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-sm');
      expect(wrapper).not.toHaveClass('control-lg');
    });

    it('renders small size', () => {
      const { container } = render(<Select size="sm" />);
      const wrapper = container.querySelector('.control-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container } = render(<Select size="lg" />);
      const wrapper = container.querySelector('.control-lg');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Select />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Select variant="secondary" />);
      const wrapper = container.querySelector('.control-secondary');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('renders without error by default', () => {
      const { container } = render(<Select />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-error');
    });

    it('renders error state', () => {
      const { container } = render(<Select error />);
      const wrapper = container.querySelector('.control-error');
      expect(wrapper).toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<Select error errorMessage="Please select an option" />);
      expect(screen.getByText(/Please select an option/)).toBeInTheDocument();
    });

    it('error message has error-message class', () => {
      const { container } = render(<Select error errorMessage="Error text" />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('renders helper text', () => {
      render(<Select helperText="Choose your country" />);
      expect(screen.getByText(/Choose your country/)).toBeInTheDocument();
    });

    it('does not render helper text by default', () => {
      const { container } = render(<Select />);
      const helperText = container.querySelector('.text-xs');
      expect(helperText).not.toBeInTheDocument();
    });
  });

  describe('Options', () => {
    it('renders options', () => {
      render(
        <Select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
      );

      expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument();
      expect(screen.getByRole('option', { name: 'Option 3' })).toBeInTheDocument();
    });

    it('renders placeholder option', () => {
      render(
        <Select>
          <option value="">Select an option</option>
          <option value="1">Option 1</option>
        </Select>
      );

      expect(screen.getByRole('option', { name: 'Select an option' })).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders enabled by default', () => {
      render(<Select />);
      const select = screen.getByRole('combobox');
      expect(select).not.toBeDisabled();
    });

    it('renders disabled state', () => {
      render(<Select disabled />);
      const select = screen.getByRole('combobox');
      expect(select).toBeDisabled();
    });

    it('renders required field', () => {
      render(<Select required />);
      const select = screen.getByRole('combobox');
      expect(select).toBeRequired();
    });
  });

  describe('Interaction', () => {
    it('handles select change', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(
        <Select onChange={handleChange}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      await user.selectOptions(select, '2');

      expect(handleChange).toHaveBeenCalled();
    });

    it('updates selected value', async () => {
      const user = userEvent.setup();
      render(
        <Select>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      );

      const select = screen.getByRole('combobox') as HTMLSelectElement;
      await user.selectOptions(select, '2');

      expect(select.value).toBe('2');
    });

    it('handles select focus', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(
        <Select onFocus={handleFocus}>
          <option value="1">Option 1</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      await user.click(select);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles select blur', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(
        <Select onBlur={handleBlur}>
          <option value="1">Option 1</option>
        </Select>
      );

      const select = screen.getByRole('combobox');
      await user.click(select);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Attributes', () => {
    it('accepts id', () => {
      render(<Select id="test-select" />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('id', 'test-select');
    });

    it('accepts name', () => {
      render(<Select name="country" />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('name', 'country');
    });

    it('accepts value', () => {
      render(
        <Select value="2" onChange={() => {}}>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      );
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('2');
    });

    it('accepts defaultValue', () => {
      render(
        <Select defaultValue="2">
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
        </Select>
      );
      const select = screen.getByRole('combobox') as HTMLSelectElement;
      expect(select.value).toBe('2');
    });

    it('accepts aria-label', () => {
      render(<Select aria-label="Country selector" />);
      expect(screen.getByLabelText('Country selector')).toBeInTheDocument();
    });

    it('accepts aria-describedby', () => {
      render(<Select aria-describedby="helper-text" />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-describedby', 'helper-text');
    });

    it('accepts multiple attribute', () => {
      render(<Select multiple />);
      const select = screen.getByRole('listbox');
      expect(select).toHaveAttribute('multiple');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className for select', () => {
      render(<Select className="custom-select" />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveClass('custom-select');
    });

    it('accepts custom wrapperClassName', () => {
      const { container } = render(<Select wrapperClassName="custom-wrapper" />);
      const wrapper = container.querySelector('.aegov-form-control.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with select', () => {
      render(<Select label="Country" id="country" />);
      const select = screen.getByLabelText('Country');
      expect(select).toHaveAttribute('id', 'country');
    });

    it('disabled select has aria-disabled', () => {
      render(<Select disabled />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-disabled', 'true');
    });

    it('error state has aria-invalid', () => {
      render(<Select error />);
      const select = screen.getByRole('combobox');
      expect(select).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Multiple Selection', () => {
    it('allows multiple selections', async () => {
      const user = userEvent.setup();
      render(
        <Select multiple>
          <option value="1">Option 1</option>
          <option value="2">Option 2</option>
          <option value="3">Option 3</option>
        </Select>
      );

      const select = screen.getByRole('listbox');
      await user.selectOptions(select, ['1', '2']);

      const option1 = screen.getByRole('option', { name: 'Option 1' }) as HTMLOptionElement;
      const option2 = screen.getByRole('option', { name: 'Option 2' }) as HTMLOptionElement;

      expect(option1.selected).toBe(true);
      expect(option2.selected).toBe(true);
    });
  });
});
