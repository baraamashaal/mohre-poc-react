import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Dropdown } from './Dropdown';
import type { DropdownItem } from './Dropdown.types';

describe('Dropdown', () => {
  const basicItems: DropdownItem[] = [
    { id: '1', label: 'Item 1', onClick: vi.fn() },
    { id: '2', label: 'Item 2', onClick: vi.fn() },
    { id: '3', label: 'Item 3', onClick: vi.fn() },
  ];

  const trigger = <button>Dropdown</button>;

  describe('Rendering', () => {
    it('renders trigger element', () => {
      render(<Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />);
      expect(screen.getByRole('button', { name: 'Dropdown' })).toBeInTheDocument();
    });

    it('renders dropdown menu with correct ID', () => {
      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />
      );
      const menu = container.querySelector('#test-dropdown');
      expect(menu).toBeInTheDocument();
    });

    it('dropdown menu is hidden by default', () => {
      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />
      );
      const menu = container.querySelector('#test-dropdown') as HTMLElement;
      expect(menu).toBeTruthy();
      expect(menu?.style.display).toBe('none');
    });

    it('renders all dropdown items', () => {
      render(<Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />);
      expect(screen.getByText('Item 1')).toBeInTheDocument();
      expect(screen.getByText('Item 2')).toBeInTheDocument();
      expect(screen.getByText('Item 3')).toBeInTheDocument();
    });

    it('renders items as links when href is provided', () => {
      const itemsWithHref: DropdownItem[] = [
        { id: '1', label: 'Link 1', href: '/link1' },
        { id: '2', label: 'Link 2', href: '/link2' },
      ];
      const { container } = render(<Dropdown id="test-dropdown" trigger={trigger} items={itemsWithHref} />);
      const link1 = container.querySelector('a[href="/link1"]');
      const link2 = container.querySelector('a[href="/link2"]');
      expect(link1).toBeInTheDocument();
      expect(link1).toHaveTextContent('Link 1');
      expect(link2).toBeInTheDocument();
      expect(link2).toHaveTextContent('Link 2');
    });

    it('renders items as buttons when onClick is provided', () => {
      render(<Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />);
      const item1 = screen.getByText('Item 1').closest('a');
      expect(item1).toHaveClass('dropdown-item');
    });
  });

  describe('AEGOV Structure', () => {
    it('renders aegov-dropdown class', () => {
      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />
      );
      const menu = container.querySelector('.aegov-dropdown');
      expect(menu).toBeInTheDocument();
    });

    it('renders dropdown-body container', () => {
      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />
      );
      const body = container.querySelector('.dropdown-body');
      expect(body).toBeInTheDocument();
    });

    it('applies dropdown-item class to items', () => {
      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />
      );
      const items = container.querySelectorAll('.dropdown-item');
      expect(items.length).toBe(3);
    });

    it('renders menu with role="menu"', () => {
      const { container } = render(<Dropdown id="test-dropdown" trigger={trigger} items={basicItems} />);
      const menu = container.querySelector('ul[role="menu"]');
      expect(menu).toBeInTheDocument();
    });
  });

  describe('Click Trigger', () => {
    it('shows dropdown on trigger click', async () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          triggerType="click"
        />
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;

      expect(menu?.style.display).toBe('none');

      await userEvent.click(triggerBtn);

      expect(menu?.style.display).toBe('block');
    });

    it('hides dropdown on second trigger click', async () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          triggerType="click"
        />
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;

      await userEvent.click(triggerBtn);
      expect(menu?.style.display).toBe('block');

      await userEvent.click(triggerBtn);
      expect(menu?.style.display).toBe('none');
    });

    it('closes dropdown when clicking outside', async () => {
      const { container } = render(
        <div>
          <Dropdown
            id="test-dropdown"
            trigger={trigger}
            items={basicItems}
            triggerType="click"
          />
          <div data-testid="outside">Outside</div>
        </div>
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;
      const outside = screen.getByTestId('outside');

      await userEvent.click(triggerBtn);
      expect(menu?.style.display).toBe('block');

      await userEvent.click(outside);
      await waitFor(() => {
        expect(menu?.style.display).toBe('none');
      });
    });
  });

  describe('Hover Trigger', () => {
    it('shows dropdown on trigger hover', async () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          triggerType="hover"
        />
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;

      expect(menu?.style.display).toBe('none');

      fireEvent.mouseEnter(triggerBtn);

      await waitFor(() => {
        expect(menu?.style.display).toBe('block');
      });
    });

    it('hides dropdown on mouse leave', async () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          triggerType="hover"
        />
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;

      fireEvent.mouseEnter(triggerBtn);

      await waitFor(() => {
        expect(menu?.style.display).toBe('block');
      });

      fireEvent.mouseLeave(triggerBtn);

      await waitFor(() => {
        expect(menu?.style.display).toBe('none');
      });
    });
  });

  describe('Item Actions', () => {
    it('calls onClick handler when item is clicked', async () => {
      const onClick = vi.fn();
      const items: DropdownItem[] = [{ id: '1', label: 'Click Me', onClick }];

      render(<Dropdown id="test-dropdown" trigger={trigger} items={items} />);

      const item = screen.getByText('Click Me');
      await userEvent.click(item);

      expect(onClick).toHaveBeenCalledTimes(1);
    });

    it('closes dropdown after item click', async () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          triggerType="click"
        />
      );

      const triggerBtn = screen.getByRole('button', { name: 'Dropdown' });
      const menu = container.querySelector('#test-dropdown') as HTMLElement;

      await userEvent.click(triggerBtn);
      expect(menu?.style.display).toBe('block');

      const item = screen.getByText('Item 1');
      await userEvent.click(item);

      await waitFor(() => {
        expect(menu?.style.display).toBe('none');
      });
    });
  });

  describe('Disabled Items', () => {
    it('renders disabled items with disabled styling', () => {
      const items: DropdownItem[] = [
        { id: '1', label: 'Enabled', onClick: vi.fn() },
        { id: '2', label: 'Disabled', onClick: vi.fn(), disabled: true },
      ];

      const { container } = render(
        <Dropdown id="test-dropdown" trigger={trigger} items={items} />
      );

      const disabledItem = screen.getByText('Disabled').closest('a');
      expect(disabledItem).toHaveClass('pointer-events-none');
      expect(disabledItem).toHaveClass('opacity-50');
    });

    it('does not call onClick for disabled items', async () => {
      const onClick = vi.fn();
      const items: DropdownItem[] = [
        { id: '1', label: 'Disabled', onClick, disabled: true },
      ];

      render(<Dropdown id="test-dropdown" trigger={trigger} items={items} />);

      const item = screen.getByText('Disabled');
      await userEvent.click(item);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  describe('Icons', () => {
    it('renders item icons', () => {
      const items: DropdownItem[] = [
        {
          id: '1',
          label: 'With Icon',
          icon: <svg data-testid="test-icon" />,
          onClick: vi.fn(),
        },
      ];

      render(<Dropdown id="test-dropdown" trigger={trigger} items={items} />);
      expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    });
  });

  describe('Custom Content', () => {
    it('renders custom content when provided', () => {
      const items: DropdownItem[] = [
        {
          id: '1',
          label: 'Item',
          content: <div data-testid="custom-content">Custom</div>,
        },
      ];

      render(<Dropdown id="test-dropdown" trigger={trigger} items={items} />);
      expect(screen.getByTestId('custom-content')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('applies aria-label when provided', () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          ariaLabel="Main menu"
        />
      );
      const menu = container.querySelector('ul[role="menu"]');
      expect(menu).toHaveAttribute('aria-labelledby');
    });

    it('applies data-testid', () => {
      render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          data-testid="dropdown-component"
        />
      );
      expect(screen.getByTestId('dropdown-component')).toBeInTheDocument();
    });
  });

  describe('Custom Props', () => {
    it('applies custom className', () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          className="custom-class"
        />
      );
      expect(container.firstChild).toHaveClass('custom-class');
    });

    it('applies custom menuClassName', () => {
      const { container } = render(
        <Dropdown
          id="test-dropdown"
          trigger={trigger}
          items={basicItems}
          menuClassName="custom-menu"
        />
      );
      const menu = container.querySelector('#test-dropdown');
      expect(menu).toHaveClass('custom-menu');
    });
  });
});
