# Tabs
**Docs**: https://designsystem.gov.ae/docs/components/tabs
**Purpose**: Organizes content in separate sections for easy navigation
**JS Required**: ✅ Yes

## Dependent Components
None - works independently with JavaScript library

## Description

The Tabs component provides "a user-friendly way to organize content and present it in separate sections" allowing users to switch between content without page navigation, reducing clutter and improving navigation. It uses `data-tabs-toggle` and `data-tabs-target` attributes to manage content switching when tabs are selected.

## Examples

### Example 1: Standard Tabs

Default variation with basic structure.

```html
<div class="aegov-tab">
    <ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto" data-tabs-toggle="#SampleLayout-Tabs-01" role="tablist">
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item1-sample-01" role="tab" id="tab-item1-sample-01" aria-controls="body-item1-sample-01" aria-selected="true" class="tab-link whitespace-nowrap tab-active">All services</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item2-sample-01" role="tab" id="tab-item2-sample-01" aria-controls="body-item2-sample-01" aria-selected="false" class="tab-link whitespace-nowrap tab-inactive">Category 1</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item3-sample-01" role="tab" id="tab-item3-sample-01" aria-controls="body-item3-sample-01" aria-selected="false" class="tab-link whitespace-nowrap tab-inactive">Category 2</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item4-sample-01" role="tab" id="tab-item4-sample-01" aria-controls="body-item4-sample-01" aria-selected="false" class="tab-link whitespace-nowrap tab-inactive">Category 3</a></li>
    </ul>
</div>
<div id="SampleLayout-Tabs-01" class="py-4">
    <div class="tab-content" role="tabpanel" id="body-item1-sample-01">
        <p>This is the content area for the tab "all services"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item2-sample-01">
        <p>This is the content area for the tab "category 1"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item3-sample-01">
        <p>This is the content area for the tab "category 2"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item4-sample-01">
        <p>This is the content area for the tab "category 3"</p>
    </div>
</div>
```

**Note:** Active tab has `aria-selected="true"` and `tab-active` class. Inactive tabs have `aria-selected="false"` and `tab-inactive` class. Inactive panels have `.hidden` class. Use `data-tabs-toggle` on list and `data-tabs-target` on links.

### Example 2: Compact Tabs

Uses `tab-sm` class on wrapper for smaller screens with reduced font size.

```html
<div class="aegov-tab tab-sm">
    <ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto" data-tabs-toggle="#SampleLayout-Tabs-01" role="tablist">
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item1-sample-01" role="tab" id="tab-item1-sample-01" aria-controls="body-item1-sample-01" class="tab-link whitespace-nowrap">All services</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item2-sample-01" role="tab" id="tab-item2-sample-01" aria-controls="body-item2-sample-01" class="tab-link whitespace-nowrap">Category 1</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item3-sample-01" role="tab" id="tab-item3-sample-01" aria-controls="body-item3-sample-01" class="tab-link whitespace-nowrap">Category 2</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item4-sample-01" role="tab" id="tab-item4-sample-01" aria-controls="body-item4-sample-01" class="tab-link whitespace-nowrap">Category 3</a></li>
    </ul>
</div>
<div id="SampleLayout-Tabs-01" class="py-4">
    <div class="tab-content" role="tabpanel" id="body-item1-sample-01">
        <p>This is the content area for the tab "all services"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item2-sample-01">
        <p>This is the content area for the tab "category 1"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item3-sample-01">
        <p>This is the content area for the tab "category 2"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item4-sample-01">
        <p>This is the content area for the tab "category 3"</p>
    </div>
</div>

```

**Note:** Add `.tab-sm` class to `.aegov-tab` wrapper for compact sizing. Designed to optimize space usage and visual presentation on smaller screens.

### Example 3: Tabs with Icons

SVG icons integrated before tab labels.

```html
<div class="aegov-tab">
    <ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto" data-tabs-toggle="#SampleLayout-Tabs-03" role="tablist">
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item1-sample-x03" role="tab" id="tab-item1-sample-01" aria-controls="body-item1-sample-x03" class="tab-link whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><path d="M180,40h28a8,8,0,0,1,8,8V76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M180,216h28a8,8,0,0,0,8-8V180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M76,216H48a8,8,0,0,1-8-8V180" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M76,40H48a8,8,0,0,0-8,8V76" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="112" r="32" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M80,168a60,60,0,0,1,96,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            My account</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item2-sample-x03" role="tab" id="tab-item2-sample-01" aria-controls="body-item2-sample-x03" class="tab-link whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            Settings</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item3-sample-x03" role="tab" id="tab-item3-sample-01" aria-controls="body-item3-sample-x03" class="tab-link whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><rect x="48" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="48" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="48" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><rect x="144" y="144" width="64" height="64" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            Notifications</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item4-sample-x03" role="tab" id="tab-item4-sample-01" aria-controls="body-item4-sample-x03" class="tab-link whitespace-nowrap">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="180" r="12"/><path d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><circle cx="128" cy="128" r="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
            Support</a></li>
    </ul>
</div>
<div id="SampleLayout-Tabs-03" class="py-4">
    <div class="tab-content" role="tabpanel" id="body-item1-sample-x03">
        <p>This is the content area for the tab "My account"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item2-sample-x03">
        <p>This is the content area for the tab "Settings"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item3-sample-x03">
        <p>This is the content area for the tab "Notifications"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item4-sample-x03">
        <p>This is the content area for the tab "Support"</p>
    </div>
</div>

```

**Note:** Include SVG icons before tab labels. Use `mr-2` for spacing between icon and text.

### Example 4: Pills Tabs

Uses `tab-pills` class on wrapper for pill-shaped design with height and padding.

```html
<div class="aegov-tab tab-pills">
    <ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto" data-tabs-toggle="#SampleLayout-Tabs-07" role="tablist">
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item1-sample-07" role="tab" id="tab-item1-sample-01" aria-controls="body-item1-sample-07" class="tab-link whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6">All services</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item2-sample-07" role="tab" id="tab-item2-sample-01" aria-controls="body-item2-sample-07" class="tab-link whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6">Category 1</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item3-sample-07" role="tab" id="tab-item3-sample-01" aria-controls="body-item3-sample-07" class="tab-link whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6">Category 2</a></li>
        <li role="presentation"><a href="#" onclick="return false;" data-tabs-target="#body-item4-sample-07" role="tab" id="tab-item4-sample-01" aria-controls="body-item4-sample-07" class="tab-link whitespace-nowrap h-10 lg:h-12 px-4 lg:px-6">Category 3</a></li>
    </ul>
</div>
<div id="SampleLayout-Tabs-07" class="py-4">
    <div class="tab-content" role="tabpanel" id="body-item1-sample-07">
        <p>This is the content area for the tab "all services"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item2-sample-07">
        <p>This is the content area for the tab "category 1"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item3-sample-07">
        <p>This is the content area for the tab "category 2"</p>
    </div>
    <div class="tab-content" role="tabpanel" id="body-item4-sample-07">
        <p>This is the content area for the tab "category 3"</p>
    </div>
</div>

```

**Note:** Add `.tab-pills` class to `.aegov-tab` wrapper for rounded pill design. Pills variant links include `h-10 lg:h-12 px-4 lg:px-6` classes for proper height and padding.

## Size Variations

Only one documented variation exists beyond the default:
- **Compact Tabs** (`tab-sm`): "designed to optimize space usage and visual presentation on smaller screens" with "reduced font size to accommodate more content"

## Notes

**Usage Contexts:**

Deploy on homepages for service categorization, service landing pages, service cards, surveys, media sections, and open data displays for comparing tabular and visual information.

**Accessibility Requirements:**

- Use `role="tab"` and `role="tabpanel"` attributes
- Include `aria-selected="true"` for active tabs
- Add `aria-controls` linking tabs to content
- Implement keyboard navigation support
- Consider `role="navigation"` or `<nav>` for parent containers
- Screen readers recognize active tab state via ARIA attributes

**HTML Code Structure:**

- Wrapper: `.aegov-tab` class container (add `.tab-sm` for compact or `.tab-pills` for pills variant)
- Tab list: `<ul class="tab-items gap-4 md:gap-6 lg:gap-7 xl:gap-8 max-xl:overflow-auto">` with `data-tabs-toggle` attribute
- Active tab link: `<a class="tab-link whitespace-nowrap tab-active">` with `role="tab"`, `aria-selected="true"`, `data-tabs-target`, `aria-controls`, and `onclick="return false;"`
- Inactive tab links: `<a class="tab-link whitespace-nowrap tab-inactive">` with `role="tab"`, `aria-selected="false"`, `data-tabs-target`, `aria-controls`, and `onclick="return false;"`
- Pills variant links: Add `h-10 lg:h-12 px-4 lg:px-6` classes for proper height and padding
- Content panels: `<div role="tabpanel">` with matching IDs and `.hidden` class for inactive panels

**Keyboard Interactions:**

"Users can open the select menu by pressing the 'Enter' key or the 'Spacebar' key when focused. Navigation occurs via arrow keys with selection via 'Enter'."

**JavaScript Requirements:**

The component requires JavaScript for dynamic functionality. It uses `data-tabs-toggle` and `data-tabs-target` attributes to manage content switching when tabs are selected.

**RTL Support:**

Component supports RTL layouts. Requires enabling RTL via layout guidelines; example provided using Arabic text. Full RTL layout support for right-to-left languages.

**React Implementation:**

```jsx
<Tabs
	items={[
		{
			id: string,
			label: string,
			content: ReactNode,
			icon?: ReactNode,
			disabled?: boolean,
			ariaLabel?: string
		}
	]}
	size="default|compact"
	variant="default|pills"
	defaultActiveTab={string}
	activeTab={string}
	onChange={(tabId: string) => void}
	ariaLabel={string}
	className={string}
	data-testid={string}
/>
```

React props:
- `items`: Array of tab objects with `id`, `label`, `content`, and optional `icon`, `disabled`, `ariaLabel`
- `size`: "default" | "compact" (maps to `tab-sm` class)
- `variant`: "default" | "pills" (maps to `tab-pills` class)
- `defaultActiveTab`: Initial active tab ID (uncontrolled mode)
- `activeTab`: Current active tab ID (controlled mode)
- `onChange`: Callback when tab changes
- `ariaLabel`: Accessible label for the tab list
- `className`: Additional CSS classes
- `data-testid`: Test ID for E2E testing

**Note:** `size` and `variant` can be combined (e.g., `size="compact" variant="pills"`) to create compact pills tabs.
