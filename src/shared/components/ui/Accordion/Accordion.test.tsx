import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Accordion } from './Accordion';
import type { AccordionItem } from './Accordion.types';

const mockItems: AccordionItem[] = [
  {
    value: 'item-1',
    title: 'First Item',
    children: <div>First item content</div>,
  },
  {
    value: 'item-2',
    title: 'Second Item',
    children: <div>Second item content</div>,
  },
  {
    value: 'item-3',
    title: 'Third Item',
    children: <div>Third item content</div>,
  },
];

describe('Accordion', () => {
  describe('Rendering', () => {
    it('renders accordion with all items', () => {
      render(<Accordion items={mockItems} />);
      expect(screen.getByText('First Item')).toBeInTheDocument();
      expect(screen.getByText('Second Item')).toBeInTheDocument();
      expect(screen.getByText('Third Item')).toBeInTheDocument();
    });

    it('renders with data-testid', () => {
      render(<Accordion items={mockItems} data-testid="accordion" />);
      expect(screen.getByTestId('accordion')).toBeInTheDocument();
    });

    it('renders with custom className', () => {
      render(<Accordion items={mockItems} className="custom-class" data-testid="accordion" />);
      expect(screen.getByTestId('accordion')).toHaveClass('custom-class');
    });
  });

  describe('Default State', () => {
    it('renders all items collapsed by default', () => {
      render(<Accordion items={mockItems} />);

      const content1 = screen.queryByText('First item content');
      const content2 = screen.queryByText('Second item content');
      const content3 = screen.queryByText('Third item content');

      expect(content1).not.toBeVisible();
      expect(content2).not.toBeVisible();
      expect(content3).not.toBeVisible();
    });

    it('renders with default expanded item', () => {
      render(<Accordion items={mockItems} defaultValue="item-2" />);

      expect(screen.queryByText('First item content')).not.toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
      expect(screen.queryByText('Third item content')).not.toBeVisible();
    });

    it('renders with multiple default expanded items', () => {
      render(<Accordion items={mockItems} defaultValue={['item-1', 'item-3']} multiple />);

      expect(screen.getByText('First item content')).toBeVisible();
      expect(screen.queryByText('Second item content')).not.toBeVisible();
      expect(screen.getByText('Third item content')).toBeVisible();
    });
  });

  describe('Single Mode Interaction', () => {
    it('expands item when clicked', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      await user.click(firstButton);

      expect(screen.getByText('First item content')).toBeVisible();
    });

    it('collapses expanded item when clicked again', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} defaultValue="item-1" />);

      expect(screen.getByText('First item content')).toBeVisible();

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      await user.click(firstButton);

      expect(screen.queryByText('First item content')).not.toBeVisible();
    });

    it('closes previously open item when opening another', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} defaultValue="item-1" />);

      expect(screen.getByText('First item content')).toBeVisible();

      const secondButton = screen.getByRole('button', { name: /Second Item/i });
      await user.click(secondButton);

      expect(screen.queryByText('First item content')).not.toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
    });
  });

  describe('Multiple Mode Interaction', () => {
    it('allows multiple items to be open simultaneously', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} multiple />);

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      const secondButton = screen.getByRole('button', { name: /Second Item/i });

      await user.click(firstButton);
      await user.click(secondButton);

      expect(screen.getByText('First item content')).toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
    });

    it('allows closing individual items without affecting others', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} multiple defaultValue={['item-1', 'item-2']} />);

      expect(screen.getByText('First item content')).toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      await user.click(firstButton);

      expect(screen.queryByText('First item content')).not.toBeVisible();
      expect(screen.getByText('Second item content')).toBeVisible();
    });
  });

  describe('Icon Rotation', () => {
    it('applies default 180 degree rotation', () => {
      const itemsWithDefaultIcon: AccordionItem[] = [
        {
          value: 'item-1',
          title: 'Item with default rotation',
          children: <div>Content</div>,
        },
      ];

      render(<Accordion items={itemsWithDefaultIcon} defaultValue="item-1" />);
      const button = screen.getByRole('button', { name: /Item with default rotation/i });
      const svg = button.querySelector('svg');

      expect(svg).toHaveClass('rotate-180');
    });

    it('applies 45 degree rotation when specified', () => {
      const itemsWith45Icon: AccordionItem[] = [
        {
          value: 'item-1',
          title: 'Item with 45 rotation',
          children: <div>Content</div>,
          iconRotateDeg: 45,
        },
      ];

      render(<Accordion items={itemsWith45Icon} defaultValue="item-1" />);
      const button = screen.getByRole('button', { name: /Item with 45 rotation/i });
      const svg = button.querySelector('svg');

      expect(svg).toHaveClass('rotate-45');
    });
  });

  describe('Custom Icons', () => {
    it('renders custom icon when provided', () => {
      const CustomIcon = () => <span data-testid="custom-icon">★</span>;
      const itemsWithCustomIcon: AccordionItem[] = [
        {
          value: 'item-1',
          title: 'Item with custom icon',
          children: <div>Content</div>,
          icon: <CustomIcon />,
        },
      ];

      render(<Accordion items={itemsWithCustomIcon} />);
      expect(screen.getByTestId('custom-icon')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('has proper ARIA attributes when collapsed', () => {
      render(<Accordion items={mockItems} />);
      const firstButton = screen.getByRole('button', { name: /First Item/i });

      expect(firstButton).toHaveAttribute('aria-expanded', 'false');
      expect(firstButton).toHaveAttribute('aria-controls');
    });

    it('has proper ARIA attributes when expanded', () => {
      render(<Accordion items={mockItems} defaultValue="item-1" />);
      const firstButton = screen.getByRole('button', { name: /First Item/i });

      expect(firstButton).toHaveAttribute('aria-expanded', 'true');
      expect(firstButton).toHaveAttribute('aria-controls');
    });

    it('has proper ARIA labelledby on content', () => {
      render(<Accordion items={mockItems} defaultValue="item-1" />);
      const content = screen.getByText('First item content').closest('[aria-labelledby]');

      expect(content).toHaveAttribute('aria-labelledby');
    });

    it('is keyboard navigable with Enter', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      firstButton.focus();

      await user.keyboard('{Enter}');

      expect(screen.getByText('First item content')).toBeVisible();
    });

    it('is keyboard navigable with Space', async () => {
      const user = userEvent.setup();
      render(<Accordion items={mockItems} />);

      const firstButton = screen.getByRole('button', { name: /First Item/i });
      firstButton.focus();

      await user.keyboard(' ');

      expect(screen.getByText('First item content')).toBeVisible();
    });
  });

  describe('Structure', () => {
    it('has proper AEGOV classes', () => {
      render(<Accordion items={mockItems} data-testid="accordion" />);
      const accordion = screen.getByTestId('accordion');

      expect(accordion).toHaveClass('aegov-accordion');
    });

    it('renders accordion items with proper classes', () => {
      render(<Accordion items={mockItems} />);
      const buttons = screen.getAllByRole('button');

      buttons.forEach((button) => {
        const item = button.closest('.accordion-item');
        expect(item).toBeInTheDocument();
      });
    });
  });
});
