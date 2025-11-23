import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@test/utils';
import userEvent from '@testing-library/user-event';
import { Tabs } from './Tabs';
import type { TabItem } from './Tabs.types';

describe('Tabs Component', () => {
  const mockItems: TabItem[] = [
    { id: 'profile', label: 'Profile', content: <div>Profile content</div> },
    { id: 'dashboard', label: 'Dashboard', content: <div>Dashboard content</div> },
    { id: 'settings', label: 'Settings', content: <div>Settings content</div> },
  ];

  describe('Rendering', () => {
    it('should render tabs with correct structure', () => {
      render(<Tabs items={mockItems} />);

      expect(screen.getByTestId('tabs')).toBeInTheDocument();
      expect(screen.getByTestId('tabs-list')).toBeInTheDocument();
      expect(screen.getByTestId('tabs-content')).toBeInTheDocument();
    });

    it('should render all tab labels', () => {
      render(<Tabs items={mockItems} />);

      expect(screen.getByRole('tab', { name: 'Profile' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Dashboard' })).toBeInTheDocument();
      expect(screen.getByRole('tab', { name: 'Settings' })).toBeInTheDocument();
    });

    it('should render tab list with correct ARIA attributes', () => {
      render(<Tabs items={mockItems} ariaLabel="Main navigation" />);

      const tablist = screen.getByRole('tablist');
      expect(tablist).toHaveAttribute('aria-label', 'Main navigation');
    });

    it('should render first tab as active by default', () => {
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      expect(profileTab).toHaveAttribute('aria-selected', 'true');
      expect(profileTab).toHaveAttribute('tabIndex', '0');
      expect(screen.getByText('Profile content')).toBeInTheDocument();
    });

    it('should render with custom default active tab', () => {
      render(<Tabs items={mockItems} defaultActiveTab="settings" />);

      const settingsTab = screen.getByRole('tab', { name: 'Settings' });
      expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByText('Settings content')).toBeInTheDocument();
    });

    it('should apply custom className', () => {
      render(<Tabs items={mockItems} className="custom-class" />);

      expect(screen.getByTestId('tabs')).toHaveClass('aegov-tab', 'custom-class');
    });

    it('should apply custom data-testid', () => {
      render(<Tabs items={mockItems} data-testid="custom-tabs" />);

      expect(screen.getByTestId('custom-tabs')).toBeInTheDocument();
      expect(screen.getByTestId('custom-tabs-list')).toBeInTheDocument();
    });
  });

  describe('Tab Icons', () => {
    const itemsWithIcons: TabItem[] = [
      {
        id: 'home',
        label: 'Home',
        icon: <svg data-testid="home-icon">Home Icon</svg>,
        content: <div>Home</div>,
      },
      {
        id: 'settings',
        label: 'Settings',
        icon: <svg data-testid="settings-icon">Settings Icon</svg>,
        content: <div>Settings</div>,
      },
    ];

    it('should render tabs with icons', () => {
      render(<Tabs items={itemsWithIcons} />);

      expect(screen.getByTestId('home-icon')).toBeInTheDocument();
      expect(screen.getByTestId('settings-icon')).toBeInTheDocument();
    });

    it('should render icon before label', () => {
      render(<Tabs items={itemsWithIcons} />);

      const homeTab = screen.getByRole('tab', { name: 'Home' });
      const icon = screen.getByTestId('home-icon');
      expect(homeTab).toContainElement(icon);
    });
  });

  describe('Size Variants', () => {
    it('should render default size without tab-sm class', () => {
      render(<Tabs items={mockItems} size="default" />);

      const wrapper = screen.getByTestId('tabs');
      expect(wrapper).toHaveClass('aegov-tab');
      expect(wrapper).not.toHaveClass('tab-sm');
    });

    it('should render compact size with tab-sm class', () => {
      render(<Tabs items={mockItems} size="compact" />);

      const wrapper = screen.getByTestId('tabs');
      expect(wrapper).toHaveClass('aegov-tab', 'tab-sm');
    });
  });

  describe('Style Variants', () => {
    it('should render default variant without tab-pills class', () => {
      render(<Tabs items={mockItems} variant="default" />);

      const wrapper = screen.getByTestId('tabs');
      expect(wrapper).toHaveClass('aegov-tab');
      expect(wrapper).not.toHaveClass('tab-pills');
    });

    it('should render pills variant with tab-pills class', () => {
      render(<Tabs items={mockItems} variant="pills" />);

      const wrapper = screen.getByTestId('tabs');
      expect(wrapper).toHaveClass('aegov-tab', 'tab-pills');
    });
  });

  describe('Combined Size and Style', () => {
    it('should support compact size with pills variant', () => {
      render(<Tabs items={mockItems} size="compact" variant="pills" />);

      const wrapper = screen.getByTestId('tabs');
      expect(wrapper).toHaveClass('aegov-tab', 'tab-sm', 'tab-pills');
    });
  });

  describe('Tab Switching', () => {
    it('should switch tabs on click', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      // Initially first tab is active
      expect(screen.getByText('Profile content')).toBeInTheDocument();

      // Click dashboard tab
      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      await user.click(dashboardTab);

      // Dashboard content should be visible
      await waitFor(() => {
        expect(screen.getByText('Dashboard content')).toBeInTheDocument();
      });

      // Dashboard tab should be active
      expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });

    it('should call onChange callback when tab changes', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Tabs items={mockItems} onChange={onChange} />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      await user.click(dashboardTab);

      expect(onChange).toHaveBeenCalledWith('dashboard');
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('should work in controlled mode', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();

      const { rerender } = render(
        <Tabs items={mockItems} activeTab="profile" onChange={onChange} />
      );

      expect(screen.getByText('Profile content')).toBeInTheDocument();

      // Click dashboard tab
      await user.click(screen.getByRole('tab', { name: 'Dashboard' }));
      expect(onChange).toHaveBeenCalledWith('dashboard');

      // Manually update activeTab (simulating parent state change)
      rerender(<Tabs items={mockItems} activeTab="dashboard" onChange={onChange} />);

      await waitFor(() => {
        expect(screen.getByText('Dashboard content')).toBeInTheDocument();
      });
    });
  });

  describe('Keyboard Navigation', () => {
    it('should navigate tabs with ArrowRight key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      profileTab.focus();

      await user.keyboard('{ArrowRight}');

      await waitFor(() => {
        const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
        expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should navigate tabs with ArrowLeft key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} defaultActiveTab="dashboard" />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      dashboardTab.focus();

      await user.keyboard('{ArrowLeft}');

      await waitFor(() => {
        const profileTab = screen.getByRole('tab', { name: 'Profile' });
        expect(profileTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should navigate tabs with ArrowDown key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      profileTab.focus();

      await user.keyboard('{ArrowDown}');

      await waitFor(() => {
        const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
        expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should navigate tabs with ArrowUp key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} defaultActiveTab="dashboard" />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      dashboardTab.focus();

      await user.keyboard('{ArrowUp}');

      await waitFor(() => {
        const profileTab = screen.getByRole('tab', { name: 'Profile' });
        expect(profileTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should wrap to first tab when ArrowRight on last tab', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} defaultActiveTab="settings" />);

      const settingsTab = screen.getByRole('tab', { name: 'Settings' });
      settingsTab.focus();

      await user.keyboard('{ArrowRight}');

      await waitFor(() => {
        const profileTab = screen.getByRole('tab', { name: 'Profile' });
        expect(profileTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should wrap to last tab when ArrowLeft on first tab', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      profileTab.focus();

      await user.keyboard('{ArrowLeft}');

      await waitFor(() => {
        const settingsTab = screen.getByRole('tab', { name: 'Settings' });
        expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should go to first tab with Home key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} defaultActiveTab="settings" />);

      const settingsTab = screen.getByRole('tab', { name: 'Settings' });
      settingsTab.focus();

      await user.keyboard('{Home}');

      await waitFor(() => {
        const profileTab = screen.getByRole('tab', { name: 'Profile' });
        expect(profileTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should go to last tab with End key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      profileTab.focus();

      await user.keyboard('{End}');

      await waitFor(() => {
        const settingsTab = screen.getByRole('tab', { name: 'Settings' });
        expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      });
    });

    it('should activate tab with Enter key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      dashboardTab.focus();

      await user.keyboard('{Enter}');

      await waitFor(() => {
        expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('Dashboard content')).toBeInTheDocument();
      });
    });

    it('should activate tab with Space key', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      dashboardTab.focus();

      await user.keyboard(' ');

      await waitFor(() => {
        expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
        expect(screen.getByText('Dashboard content')).toBeInTheDocument();
      });
    });
  });

  describe('Disabled State', () => {
    const itemsWithDisabled: TabItem[] = [
      { id: 'profile', label: 'Profile', content: <div>Profile</div> },
      { id: 'dashboard', label: 'Dashboard', content: <div>Dashboard</div>, disabled: true },
      { id: 'settings', label: 'Settings', content: <div>Settings</div> },
    ];

    it('should render disabled tab with correct attributes', () => {
      render(<Tabs items={itemsWithDisabled} />);

      const disabledTab = screen.getByRole('tab', { name: 'Dashboard' });
      expect(disabledTab).toHaveAttribute('aria-disabled', 'true');
      expect(disabledTab).toHaveClass('pointer-events-none', 'opacity-50');
    });

    it('should not activate disabled tab on click', async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      render(<Tabs items={itemsWithDisabled} onChange={onChange} />);

      const disabledTab = screen.getByRole('tab', { name: 'Dashboard' });
      await user.click(disabledTab);

      expect(onChange).not.toHaveBeenCalled();
      // Profile should still be the active tab
      expect(screen.getByRole('tab', { name: 'Profile' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByTestId('tabs-panel-profile')).toBeInTheDocument();
    });

    it('should skip disabled tabs in keyboard navigation', async () => {
      const user = userEvent.setup();
      render(<Tabs items={itemsWithDisabled} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      profileTab.focus();

      await user.keyboard('{ArrowRight}');

      await waitFor(() => {
        const settingsTab = screen.getByRole('tab', { name: 'Settings' });
        expect(settingsTab).toHaveAttribute('aria-selected', 'true');
      });
    });
  });

  describe('Tab State Classes', () => {
    it('should apply tab-active class to active tab', () => {
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      expect(profileTab).toHaveClass('tab-active');
      expect(profileTab).not.toHaveClass('tab-inactive');
    });

    it('should apply tab-inactive class to inactive tabs', () => {
      render(<Tabs items={mockItems} />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });
      const settingsTab = screen.getByRole('tab', { name: 'Settings' });

      expect(dashboardTab).toHaveClass('tab-inactive');
      expect(dashboardTab).not.toHaveClass('tab-active');

      expect(settingsTab).toHaveClass('tab-inactive');
      expect(settingsTab).not.toHaveClass('tab-active');
    });

    it('should toggle tab-active and tab-inactive classes when tab changes', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });

      // Initially, Profile is active
      expect(profileTab).toHaveClass('tab-active');
      expect(dashboardTab).toHaveClass('tab-inactive');

      // Click Dashboard tab
      await user.click(dashboardTab);

      await waitFor(() => {
        expect(dashboardTab).toHaveClass('tab-active');
        expect(dashboardTab).not.toHaveClass('tab-inactive');
        expect(profileTab).toHaveClass('tab-inactive');
        expect(profileTab).not.toHaveClass('tab-active');
      });
    });
  });

  describe('Accessibility', () => {
    it('should have proper ARIA roles', () => {
      render(<Tabs items={mockItems} />);

      expect(screen.getByRole('tablist')).toBeInTheDocument();
      expect(screen.getAllByRole('tab')).toHaveLength(3);
      expect(screen.getAllByRole('tabpanel')).toHaveLength(1); // Only active panel
    });

    it('should set tabIndex correctly for active and inactive tabs', () => {
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });

      expect(profileTab).toHaveAttribute('tabIndex', '0');
      expect(dashboardTab).toHaveAttribute('tabIndex', '-1');
    });

    it('should link tab to panel with aria-controls', () => {
      render(<Tabs items={mockItems} />);

      const profileTab = screen.getByRole('tab', { name: 'Profile' });
      expect(profileTab).toHaveAttribute('aria-controls', 'profile');
    });

    it('should set aria-labelledby on tab panel', () => {
      render(<Tabs items={mockItems} />);

      const panel = screen.getByRole('tabpanel');
      expect(panel).toHaveAttribute('aria-labelledby', 'profile-tab');
    });

    it('should use custom ariaLabel on tab items', () => {
      const itemsWithAriaLabel: TabItem[] = [
        { id: 'profile', label: 'Profile', content: <div>Profile</div>, ariaLabel: 'User profile section' },
      ];

      render(<Tabs items={itemsWithAriaLabel} />);

      const tab = screen.getByRole('tab', { name: 'User profile section' });
      expect(tab).toBeInTheDocument();
    });
  });

  describe('Edge Cases', () => {
    it('should handle empty items array gracefully', () => {
      render(<Tabs items={[]} />);

      expect(screen.getByTestId('tabs')).toBeInTheDocument();
      expect(screen.queryByRole('tab')).not.toBeInTheDocument();
    });

    it('should handle single tab', () => {
      const singleItem: TabItem[] = [
        { id: 'only', label: 'Only Tab', content: <div>Only content</div> },
      ];

      render(<Tabs items={singleItem} />);

      expect(screen.getByRole('tab', { name: 'Only Tab' })).toHaveAttribute('aria-selected', 'true');
      expect(screen.getByText('Only content')).toBeInTheDocument();
    });

    it('should prevent default on tab click', async () => {
      const user = userEvent.setup();
      render(<Tabs items={mockItems} />);

      const dashboardTab = screen.getByRole('tab', { name: 'Dashboard' });

      await user.click(dashboardTab);

      // If default wasn't prevented, clicking would navigate (test passes if no error)
      expect(dashboardTab).toHaveAttribute('aria-selected', 'true');
    });
  });
});
