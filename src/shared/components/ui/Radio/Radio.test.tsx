import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Radio } from './Radio';

describe('Radio Component', () => {
  describe('Rendering', () => {
    it('renders radio element', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });

    it('renders with label', () => {
      render(<Radio label="Option 1" />);
      expect(screen.getByLabelText('Option 1')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<Radio aria-label="radio" />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeInTheDocument();
    });

    it('has aegov-check-item wrapper class', () => {
      const { container } = render(<Radio label="Test" />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).toBeInTheDocument();
    });

    it('radio has type="radio"', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('type', 'radio');
    });
  });

  describe('Sizes', () => {
    it('renders base size by default', () => {
      const { container } = render(<Radio />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).not.toHaveClass('check-sm');
      expect(wrapper).not.toHaveClass('check-lg');
    });

    it('renders small size', () => {
      const { container } = render(<Radio size="sm" />);
      const wrapper = container.querySelector('.check-sm');
      expect(wrapper).toBeInTheDocument();
    });

    it('renders large size', () => {
      const { container } = render(<Radio size="lg" />);
      const wrapper = container.querySelector('.check-lg');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<Radio />);
      const wrapper = container.querySelector('.aegov-check-item');
      expect(wrapper).not.toHaveClass('check-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<Radio variant="secondary" />);
      const wrapper = container.querySelector('.check-secondary');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Error State', () => {
    it('renders without error by default', () => {
      const { container } = render(<Radio />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).not.toBeInTheDocument();
    });

    it('displays error message', () => {
      render(<Radio error errorMessage="This field is required" />);
      expect(screen.getByText(/This field is required/)).toBeInTheDocument();
    });

    it('error message has error-message class', () => {
      const { container } = render(<Radio error errorMessage="Error text" />);
      const errorMsg = container.querySelector('.error-message');
      expect(errorMsg).toBeInTheDocument();
    });
  });

  describe('Helper Text', () => {
    it('renders helper text', () => {
      render(<Radio helperText="Choose one option" />);
      expect(screen.getByText(/Choose one option/)).toBeInTheDocument();
    });

    it('does not render helper text by default', () => {
      const { container } = render(<Radio />);
      const helperText = container.querySelector('.text-xs');
      expect(helperText).not.toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('renders unchecked by default', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();
    });

    it('renders checked state', () => {
      render(<Radio checked onChange={() => {}} />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeChecked();
    });

    it('renders enabled by default', () => {
      render(<Radio />);
      const radio = screen.getByRole('radio');
      expect(radio).not.toBeDisabled();
    });

    it('renders disabled state', () => {
      render(<Radio disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeDisabled();
    });

    it('renders required field', () => {
      render(<Radio required />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeRequired();
    });
  });

  describe('Interaction', () => {
    it('handles radio change', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Radio onChange={handleChange} />);

      const radio = screen.getByRole('radio');
      await user.click(radio);

      expect(handleChange).toHaveBeenCalled();
    });

    it('becomes checked on click', async () => {
      const user = userEvent.setup();
      render(<Radio />);

      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();

      await user.click(radio);
      expect(radio).toBeChecked();
    });

    it('handles radio focus', async () => {
      const user = userEvent.setup();
      const handleFocus = vi.fn();
      render(<Radio onFocus={handleFocus} />);

      const radio = screen.getByRole('radio');
      await user.click(radio);

      expect(handleFocus).toHaveBeenCalled();
    });

    it('handles radio blur', async () => {
      const user = userEvent.setup();
      const handleBlur = vi.fn();
      render(<Radio onBlur={handleBlur} />);

      const radio = screen.getByRole('radio');
      await user.click(radio);
      await user.tab();

      expect(handleBlur).toHaveBeenCalled();
    });
  });

  describe('Radio Groups', () => {
    it('radio buttons with same name form a group', async () => {
      const user = userEvent.setup();
      render(
        <>
          <Radio name="option" value="1" label="Option 1" data-testid="radio1" />
          <Radio name="option" value="2" label="Option 2" data-testid="radio2" />
          <Radio name="option" value="3" label="Option 3" data-testid="radio3" />
        </>
      );

      const radio1 = screen.getByTestId('radio1');
      const radio2 = screen.getByTestId('radio2');
      const radio3 = screen.getByTestId('radio3');

      // Initially all unchecked
      expect(radio1).not.toBeChecked();
      expect(radio2).not.toBeChecked();
      expect(radio3).not.toBeChecked();

      // Click radio1
      await user.click(radio1);
      expect(radio1).toBeChecked();
      expect(radio2).not.toBeChecked();
      expect(radio3).not.toBeChecked();

      // Click radio2 - should uncheck radio1
      await user.click(radio2);
      expect(radio1).not.toBeChecked();
      expect(radio2).toBeChecked();
      expect(radio3).not.toBeChecked();
    });
  });

  describe('Attributes', () => {
    it('accepts id', () => {
      render(<Radio id="test-radio" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('id', 'test-radio');
    });

    it('accepts name', () => {
      render(<Radio name="choice" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('name', 'choice');
    });

    it('accepts value', () => {
      render(<Radio value="option1" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('value', 'option1');
    });

    it('accepts defaultChecked', () => {
      render(<Radio defaultChecked />);
      const radio = screen.getByRole('radio');
      expect(radio).toBeChecked();
    });

    it('accepts aria-label', () => {
      render(<Radio aria-label="Choose option" />);
      expect(screen.getByLabelText('Choose option')).toBeInTheDocument();
    });

    it('accepts aria-describedby', () => {
      render(<Radio aria-describedby="helper-text" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('aria-describedby', 'helper-text');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className for radio', () => {
      render(<Radio className="custom-radio" />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveClass('custom-radio');
    });

    it('accepts custom wrapperClassName', () => {
      const { container } = render(<Radio wrapperClassName="custom-wrapper" />);
      const wrapper = container.querySelector('.aegov-check-item.custom-wrapper');
      expect(wrapper).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('associates label with radio', () => {
      render(<Radio label="Option A" id="optionA" />);
      const radio = screen.getByLabelText('Option A');
      expect(radio).toHaveAttribute('id', 'optionA');
    });

    it('disabled radio has aria-disabled', () => {
      render(<Radio disabled />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('aria-disabled', 'true');
    });

    it('radio with error has aria-invalid', () => {
      render(<Radio error />);
      const radio = screen.getByRole('radio');
      expect(radio).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Label Click', () => {
    it('clicking label selects radio', async () => {
      const user = userEvent.setup();
      render(<Radio label="Select this option" />);

      const label = screen.getByText('Select this option');
      const radio = screen.getByLabelText('Select this option');

      expect(radio).not.toBeChecked();

      await user.click(label);
      expect(radio).toBeChecked();
    });
  });

  describe('Keyboard Navigation', () => {
    it('supports space key to select', async () => {
      const user = userEvent.setup();
      render(<Radio label="Option" />);

      const radio = screen.getByRole('radio');
      radio.focus();

      expect(radio).not.toBeChecked();

      await user.keyboard(' ');
      expect(radio).toBeChecked();
    });

    it('supports arrow keys in radio group', async () => {
      const user = userEvent.setup();
      render(
        <>
          <Radio name="option" value="1" label="Option 1" />
          <Radio name="option" value="2" label="Option 2" />
          <Radio name="option" value="3" label="Option 3" />
        </>
      );

      const radio1 = screen.getByLabelText('Option 1');
      const radio2 = screen.getByLabelText('Option 2');

      radio1.focus();
      await user.click(radio1);
      expect(radio1).toBeChecked();

      // Arrow down should move to next radio
      await user.keyboard('{ArrowDown}');
      expect(radio2).toHaveFocus();
    });
  });

  describe('Controlled vs Uncontrolled', () => {
    it('works as controlled component', async () => {
      const user = userEvent.setup();
      const handleChange = vi.fn();
      render(<Radio checked={false} onChange={handleChange} />);

      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();

      await user.click(radio);
      expect(handleChange).toHaveBeenCalled();
    });

    it('works as uncontrolled component', async () => {
      const user = userEvent.setup();
      render(<Radio defaultChecked={false} />);

      const radio = screen.getByRole('radio');
      expect(radio).not.toBeChecked();

      await user.click(radio);
      expect(radio).toBeChecked();
    });
  });
});
