import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RangeSlider } from './RangeSlider';

describe('RangeSlider', () => {
  describe('Rendering', () => {
    it('renders range slider element', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toBeInTheDocument();
      expect(slider).toHaveAttribute('type', 'range');
    });

    it('renders with label', () => {
      render(<RangeSlider label="Volume" />);
      expect(screen.getByText('Volume')).toBeInTheDocument();
    });

    it('renders without label', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toBeInTheDocument();
    });

    it('applies aegov-form-control class to wrapper', () => {
      const { container } = render(<RangeSlider label="Test" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toBeInTheDocument();
    });

    it('shows output value by default', () => {
      render(<RangeSlider label="Test" value={50} />);
      expect(screen.getByText('50')).toBeInTheDocument();
    });

    it('hides output when showOutput is false', () => {
      const { container } = render(<RangeSlider label="Test" value={50} showOutput={false} />);
      const output = container.querySelector('output');
      expect(output).not.toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('renders primary variant by default', () => {
      const { container } = render(<RangeSlider label="Test" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).not.toHaveClass('control-secondary');
    });

    it('renders secondary variant', () => {
      const { container } = render(<RangeSlider label="Test" variant="secondary" />);
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toHaveClass('control-secondary');
    });
  });

  describe('Min/Max/Step', () => {
    it('uses default min value of 0', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('min', '0');
    });

    it('uses default max value of 100', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('max', '100');
    });

    it('uses default step value of 1', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('step', '1');
    });

    it('accepts custom min value', () => {
      render(<RangeSlider data-testid="test-slider" min={10} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('min', '10');
    });

    it('accepts custom max value', () => {
      render(<RangeSlider data-testid="test-slider" max={200} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('max', '200');
    });

    it('accepts custom step value', () => {
      render(<RangeSlider data-testid="test-slider" step={5} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('step', '5');
    });
  });

  describe('Value', () => {
    it('renders with initial value', () => {
      render(<RangeSlider data-testid="test-slider" value={50} />);
      const slider = screen.getByTestId('test-slider') as HTMLInputElement;
      expect(slider.value).toBe('50');
    });

    it('renders with default value for uncontrolled component', () => {
      render(<RangeSlider data-testid="test-slider" defaultValue={30} />);
      const slider = screen.getByTestId('test-slider') as HTMLInputElement;
      expect(slider.value).toBe('30');
    });

    it('displays value in output element', () => {
      render(<RangeSlider label="Test" value={75} />);
      expect(screen.getByText('75')).toBeInTheDocument();
    });
  });

  describe('States', () => {
    it('can be disabled', () => {
      render(<RangeSlider data-testid="test-slider" disabled />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toBeDisabled();
    });

    it('applies aria-disabled when disabled', () => {
      render(<RangeSlider data-testid="test-slider" disabled />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-disabled', 'true');
    });

    it('displays error state', () => {
      const { container } = render(
        <RangeSlider label="Test" error errorMessage="Value too high" />
      );
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toHaveClass('control-error');
    });

    it('displays error message', () => {
      render(<RangeSlider label="Test" error errorMessage="Value too high" />);
      expect(screen.getByText(/Value too high/)).toBeInTheDocument();
    });

    it('shows helper text when no error', () => {
      render(<RangeSlider label="Test" helperText="Adjust volume level" />);
      expect(screen.getByText('Adjust volume level')).toBeInTheDocument();
    });

    it('hides helper text when error exists', () => {
      render(
        <RangeSlider
          label="Test"
          helperText="Helper text"
          error
          errorMessage="Error message"
        />
      );
      expect(screen.queryByText('Helper text')).not.toBeInTheDocument();
      expect(screen.getByText(/Error message/)).toBeInTheDocument();
    });
  });

  describe('Interaction', () => {
    it('calls onValueChange when value changes', () => {
      const handleChange = vi.fn();
      render(
        <RangeSlider
          data-testid="test-slider"
          value={50}
          onValueChange={handleChange}
        />
      );
      const slider = screen.getByTestId('test-slider');

      fireEvent.change(slider, { target: { value: '60' } });
      expect(handleChange).toHaveBeenCalledWith(60);
    });

    it('calls onChange when provided', () => {
      const handleChange = vi.fn();
      render(<RangeSlider data-testid="test-slider" onChange={handleChange} />);
      const slider = screen.getByTestId('test-slider');

      fireEvent.change(slider, { target: { value: '25' } });
      expect(handleChange).toHaveBeenCalled();
    });

    it('updates output value when slider changes', async () => {
      const user = userEvent.setup();
      const { rerender } = render(
        <RangeSlider data-testid="test-slider" value={50} />
      );

      // Simulate value change
      rerender(<RangeSlider data-testid="test-slider" value={75} />);
      expect(screen.getByText('75')).toBeInTheDocument();
    });

    it('can be focused', async () => {
      const user = userEvent.setup();
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');

      await user.tab();
      expect(slider).toHaveFocus();
    });
  });

  describe('Attributes', () => {
    it('accepts custom id', () => {
      render(<RangeSlider id="custom-slider" data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('id', 'custom-slider');
    });

    it('auto-generates id from label', () => {
      render(<RangeSlider label="Volume Control" data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('id', 'range-volume-control');
    });

    it('accepts name attribute', () => {
      render(<RangeSlider name="volume" data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('name', 'volume');
    });

    it('accepts aria-label', () => {
      render(<RangeSlider aria-label="Volume slider" data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-label', 'Volume slider');
    });

    it('accepts aria-labelledby', () => {
      render(
        <RangeSlider aria-labelledby="slider-label" data-testid="test-slider" />
      );
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-labelledby', 'slider-label');
    });

    it('links output to input with for attribute', () => {
      const { container } = render(<RangeSlider label="Volume" value={50} />);
      const slider = screen.getByRole('slider');
      const output = container.querySelector('output');
      expect(output).toHaveAttribute('for', slider.id);
    });
  });

  describe('Custom Styling', () => {
    it('accepts wrapperClassName', () => {
      const { container } = render(
        <RangeSlider label="Test" wrapperClassName="custom-wrapper" />
      );
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toHaveClass('custom-wrapper');
    });

    it('accepts className for input', () => {
      render(<RangeSlider data-testid="test-slider" className="custom-input" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveClass('custom-input');
    });

    it('accepts outputClassName', () => {
      const { container } = render(
        <RangeSlider label="Test" value={50} outputClassName="custom-output" />
      );
      const output = container.querySelector('output');
      expect(output).toHaveClass('custom-output');
    });

    it('merges wrapperClassName with default classes', () => {
      const { container } = render(
        <RangeSlider
          label="Test"
          wrapperClassName="my-class"
          variant="secondary"
        />
      );
      const wrapper = container.querySelector('.aegov-form-control');
      expect(wrapper).toHaveClass('aegov-form-control');
      expect(wrapper).toHaveClass('control-secondary');
      expect(wrapper).toHaveClass('my-class');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = { current: null as HTMLInputElement | null };
      render(<RangeSlider ref={ref} data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(ref.current).toBe(slider);
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA role', () => {
      render(<RangeSlider data-testid="test-slider" />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('role', 'slider');
    });

    it('links label to input via htmlFor', () => {
      render(<RangeSlider label="Volume" />);
      const slider = screen.getByRole('slider');
      const label = screen.getByText('Volume');
      expect(label.closest('label')).toHaveAttribute('for', slider.id);
    });

    it('applies aria-valuemin attribute', () => {
      render(<RangeSlider data-testid="test-slider" min={10} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-valuemin', '10');
    });

    it('applies aria-valuemax attribute', () => {
      render(<RangeSlider data-testid="test-slider" max={200} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-valuemax', '200');
    });

    it('applies aria-valuenow attribute', () => {
      render(<RangeSlider data-testid="test-slider" value={50} />);
      const slider = screen.getByTestId('test-slider');
      expect(slider).toHaveAttribute('aria-valuenow', '50');
    });
  });

  describe('Edge Cases', () => {
    it('handles controlled component pattern', () => {
      const handleChange = vi.fn();
      const { rerender } = render(
        <RangeSlider
          data-testid="test-slider"
          value={50}
          onValueChange={handleChange}
        />
      );
      const slider = screen.getByTestId('test-slider') as HTMLInputElement;

      expect(slider.value).toBe('50');
      fireEvent.change(slider, { target: { value: '51' } });
      expect(handleChange).toHaveBeenCalledWith(51);

      // Simulate parent updating state
      rerender(
        <RangeSlider
          data-testid="test-slider"
          value={51}
          onValueChange={handleChange}
        />
      );
      expect(slider.value).toBe('51');
    });

    it('renders without errors when no props are provided', () => {
      expect(() => render(<RangeSlider />)).not.toThrow();
    });

    it('works with defaultValue for uncontrolled component', () => {
      render(<RangeSlider data-testid="test-slider" defaultValue={75} />);
      const slider = screen.getByTestId('test-slider') as HTMLInputElement;
      expect(slider.value).toBe('75');
    });

    it('handles min/max constraints', () => {
      render(<RangeSlider data-testid="test-slider" min={0} max={10} value={5} />);
      const slider = screen.getByTestId('test-slider') as HTMLInputElement;
      expect(slider.min).toBe('0');
      expect(slider.max).toBe('10');
      expect(slider.value).toBe('5');
    });

    it('displays required indicator when required', () => {
      render(<RangeSlider label="Volume" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });
});
