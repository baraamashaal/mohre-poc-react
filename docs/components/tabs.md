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
	<ul class="tab-items" data-tabs-toggle="#tab-content" role="tablist">
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#profile" aria-controls="profile" aria-selected="false">Profile</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#dashboard" aria-controls="dashboard" aria-selected="true">Dashboard</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#settings" aria-controls="settings" aria-selected="false">Settings</a>
		</li>
	</ul>
</div>
<div id="tab-content">
	<div class="hidden" id="profile" role="tabpanel" aria-labelledby="profile-tab">
		<p class="text-sm text-aeblack-500">Profile content goes here.</p>
	</div>
	<div id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
		<p class="text-sm text-aeblack-500">Dashboard content goes here.</p>
	</div>
	<div class="hidden" id="settings" role="tabpanel" aria-labelledby="settings-tab">
		<p class="text-sm text-aeblack-500">Settings content goes here.</p>
	</div>
</div>
```

**Note:** Active tab has `aria-selected="true"`. Inactive panels have `.hidden` class. Use `data-tabs-toggle` on list and `data-tabs-target` on links.

### Example 2: Compact Tabs

Uses `tab-sm` class for smaller screens with reduced font size.

```html
<div class="aegov-tab">
	<ul class="tab-items tab-sm" data-tabs-toggle="#compact-tab-content" role="tablist">
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#profile-sm" aria-controls="profile-sm" aria-selected="false">Profile</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#dashboard-sm" aria-controls="dashboard-sm" aria-selected="true">Dashboard</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#settings-sm" aria-controls="settings-sm" aria-selected="false">Settings</a>
		</li>
	</ul>
</div>
<div id="compact-tab-content">
	<div class="hidden" id="profile-sm" role="tabpanel" aria-labelledby="profile-sm-tab">
		<p class="text-sm text-aeblack-500">Profile content in compact view.</p>
	</div>
	<div id="dashboard-sm" role="tabpanel" aria-labelledby="dashboard-sm-tab">
		<p class="text-sm text-aeblack-500">Dashboard content in compact view.</p>
	</div>
	<div class="hidden" id="settings-sm" role="tabpanel" aria-labelledby="settings-sm-tab">
		<p class="text-sm text-aeblack-500">Settings content in compact view.</p>
	</div>
</div>
```

**Note:** Add `.tab-sm` class to `.tab-items` for compact sizing. Designed to optimize space usage and visual presentation on smaller screens.

### Example 3: Tabs with Icons

SVG icons integrated before tab labels.

```html
<div class="aegov-tab">
	<ul class="tab-items" data-tabs-toggle="#icon-tab-content" role="tablist">
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#profile-icon" aria-controls="profile-icon" aria-selected="false">
				<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
					<rect width="256" height="256" fill="none"/>
					<circle cx="128" cy="96" r="64" opacity="0.2"/>
					<circle cx="128" cy="96" r="64" fill="none" stroke="currentColor" stroke-miterlimit="10" stroke-width="16"/>
					<path d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				</svg>
				Profile
			</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#dashboard-icon" aria-controls="dashboard-icon" aria-selected="true">
				<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
					<rect width="256" height="256" fill="none"/>
					<rect x="32" y="48" width="192" height="160" rx="8" opacity="0.2"/>
					<rect x="32" y="48" width="192" height="160" rx="8" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<line x1="32" y1="112" x2="224" y2="112" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<line x1="128" y1="112" x2="128" y2="208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				</svg>
				Dashboard
			</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#settings-icon" aria-controls="settings-icon" aria-selected="false">
				<svg class="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor">
					<rect width="256" height="256" fill="none"/>
					<circle cx="128" cy="128" r="40" opacity="0.2"/>
					<circle cx="128" cy="128" r="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<path d="M130.05,206.11c-1.34,0-2.69,0-4,0L115.31,225a104.61,104.61,0,0,1-34.06-19.68l-.21-25.12a79.75,79.75,0,0,1-19.69-11.36L41.26,179.65a103.78,103.78,0,0,1-19.68-34.05l18.94-10.7A79.45,79.45,0,0,1,40.52,128c0-2.27.11-4.45.27-6.66L21.58,110.4a103.78,103.78,0,0,1,19.68-34l20.09,10.78a79.75,79.75,0,0,1,19.69-11.36l.21-25.12a104.61,104.61,0,0,1,34.06-19.68l10.74,18.89c1.33,0,2.67-.05,4-.05s2.69,0,4,.05l10.74-18.89a104.61,104.61,0,0,1,34.06,19.68l.21,25.12a79.59,79.59,0,0,1,19.69,11.36l20.09-10.78a103.78,103.78,0,0,1,19.68,34l-18.94,10.89a79.45,79.45,0,0,1,0,13.24l18.94,10.89a103.78,103.78,0,0,1-19.68,34l-20.09-10.78a79.59,79.59,0,0,1-19.69,11.36l-.21,25.12a104.61,104.61,0,0,1-34.06,19.68L130.05,206.11Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				</svg>
				Settings
			</a>
		</li>
	</ul>
</div>
<div id="icon-tab-content">
	<div class="hidden" id="profile-icon" role="tabpanel" aria-labelledby="profile-icon-tab">
		<p class="text-sm text-aeblack-500">Profile content with icon.</p>
	</div>
	<div id="dashboard-icon" role="tabpanel" aria-labelledby="dashboard-icon-tab">
		<p class="text-sm text-aeblack-500">Dashboard content with icon.</p>
	</div>
	<div class="hidden" id="settings-icon" role="tabpanel" aria-labelledby="settings-icon-tab">
		<p class="text-sm text-aeblack-500">Settings content with icon.</p>
	</div>
</div>
```

**Note:** Include SVG icons before tab labels. Use `mr-2` for spacing between icon and text.

### Example 4: Pills Tabs

Uses `tab-pills` class for pill-shaped design.

```html
<div class="aegov-tab">
	<ul class="tab-items tab-pills" data-tabs-toggle="#pills-tab-content" role="tablist">
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#profile-pills" aria-controls="profile-pills" aria-selected="false">Profile</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#dashboard-pills" aria-controls="dashboard-pills" aria-selected="true">Dashboard</a>
		</li>
		<li role="presentation">
			<a href="#" role="tab" data-tabs-target="#settings-pills" aria-controls="settings-pills" aria-selected="false">Settings</a>
		</li>
	</ul>
</div>
<div id="pills-tab-content">
	<div class="hidden" id="profile-pills" role="tabpanel" aria-labelledby="profile-pills-tab">
		<p class="text-sm text-aeblack-500">Profile content in pill style.</p>
	</div>
	<div id="dashboard-pills" role="tabpanel" aria-labelledby="dashboard-pills-tab">
		<p class="text-sm text-aeblack-500">Dashboard content in pill style.</p>
	</div>
	<div class="hidden" id="settings-pills" role="tabpanel" aria-labelledby="settings-pills-tab">
		<p class="text-sm text-aeblack-500">Settings content in pill style.</p>
	</div>
</div>
```

**Note:** Add `.tab-pills` class to `.tab-items` for rounded pill design.

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

- Wrapper: `.aegov-tab` class container
- Tab list: `<ul class="tab-items">` with `data-tabs-toggle` attribute
- Each tab: `<a>` with `role="tab"`, `data-tabs-target`, and `aria-controls`
- Content panels: `<div role="tabpanel">` with matching IDs

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
			label: string,
			value: string,
			content: ReactNode,
			icon?: Component
		}
	]}
	variant="default|compact|pills"
/>
```

React props: `items` (array of objects with label, value, content, icon), `variant` ("default" | "compact" | "pills")
