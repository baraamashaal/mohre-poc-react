# Dropdown
**Docs**: https://designsystem.gov.ae/docs/components/dropdown
**Purpose**: Reveals collapsible menu upon interaction, providing organized access to options
**JS Required**: ✅ Yes

## Dependent Components
- [Button](button.md) - Trigger element
- [Checkbox](checkbox.md) - For checkbox dropdowns
- SVG Icons - Chevron/caret indicators

## Description

The dropdown component is a versatile UI element that reveals a collapsible menu upon interaction with a trigger element. It saves space while providing organized access to lists of options without cluttering the interface.

A dropdown attaches functionality to elements like buttons or links, distinguishing it from native HTML select elements. Upon click or hover, it displays a menu with configurable placement (top, bottom, left, right). The component supports grouped items, custom styling, icons, dividers, headers, and custom content. JavaScript handles visibility toggling; clicking outside closes the menu.

## Examples

### Example 1: Basic Dropdown

Standard dropdown with simple menu items.

```html
<button id="dropdownButton" data-dropdown-toggle="dropdown" class="aegov-btn" type="button">
	Dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdown" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1" aria-labelledby="dropdownButton" role="menu">
			<li><a href="#" class="dropdown-item">An item</a></li>
			<li><a href="#" class="dropdown-item">An item</a></li>
			<li><a href="#" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>
```

**Note:** Button uses `data-dropdown-toggle` attribute with matching dropdown `id`. Dropdown starts with `.hidden` class. Menu items use `.dropdown-item` class.

### Example 2: Language Selection Dropdown

Dropdown for language switching functionality.

```html
<button id="dropdownButton-lang" data-dropdown-toggle="dropdown-lang" class="aegov-btn" type="button">
	Select Language
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdown-lang" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1" aria-labelledby="dropdownButton-lang" role="menu">
			<li><a href="#" class="dropdown-item">English</a></li>
			<li><a href="#" class="dropdown-item">Arabic</a></li>
		</ul>
	</div>
</div>
```

**Note:** Practical example for language selector. Use descriptive button text and menu items.

### Example 3: Dropdown with Header, Divider & Icons

Enhanced dropdown with header section, dividers, and icon-labeled items.

```html
<button id="dropdownButton-2" data-dropdown-toggle="dropdownHeaderDividerIcon" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownHeaderDividerIcon" class="aegov-dropdown hidden w-52">
	<div class="dropdown-header">
		<div class="text-sm">Signed in as</div>
		<div class="font-bold truncate">john@example.com</div>
	</div>
	<div class="dropdown-body divide-y divide-aeblack-50 text-aeblack-600">
		<ul class="py-1" role="menu" aria-labelledby="dropdownButton-2">
			<li>
				<a href="#" class="dropdown-item">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
						<rect width="256" height="256" fill="none"/>
						<path d="M96,192a32,32,0,0,0,64,0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M184,24a102.71,102.71,0,0,1,36.29,40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M35.71,64A102.71,102.71,0,0,1,72,24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
						<path d="M56,112a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,192H48a8,8,0,0,1-6.88-12C47.71,168.6,56,147.81,56,112Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
					A menu item
				</a>
			</li>
		</ul>
	</div>
</div>
```

**Note:** Use `.dropdown-header` for header section with user info. Dividers created with `divide-y divide-aeblack-50` classes. Icons placed before item text with `aria-hidden="true"`.

### Example 4: Icons Only Dropdown

Dropdown menu items with only icons (no text labels).

```html
<button id="dropdownButton-3" data-dropdown-toggle="dropdownIcon" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownIcon" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1">
			<li>
				<a href="#" class="dropdown-item">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" aria-hidden="true">
						<rect width="256" height="256" fill="none"/>
						<line x1="8" y1="120" x2="248" y2="120" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
					A menu item
				</a>
			</li>
		</ul>
	</div>
</div>
```

**Note:** When using icons without text, ensure adequate accessibility with `aria-label` on links.

### Example 5: Divider Only Dropdown

Dropdown with section dividers separating related groups.

```html
<button id="dropdownButton-4" data-dropdown-toggle="dropdownDivider" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownDivider" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body divide-y divide-primary-100 text-primary-600">
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">Edit my profile</a></li>
			<li><a href="#" class="dropdown-item">My packages</a></li>
		</ul>
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">Account settings</a></li>
			<li><a href="#" class="dropdown-item">Email notifications</a></li>
			<li><a href="#" class="dropdown-item">Access tokens</a></li>
		</ul>
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">Logout</a></li>
		</ul>
	</div>
</div>
```

**Note:** Create separate `<ul>` lists for each section. Use `divide-y` utility to add dividers. Customize divider color with `divide-*` classes.

### Example 6: Checkbox Component Dropdown

Dropdown containing checkbox form elements.

```html
<button id="dropdownButton-5" data-dropdown-toggle="dropdownCheckboxes" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownCheckboxes" class="aegov-dropdown hidden w-80">
	<div class="dropdown-body mb-4">
		<div class="aegov-check-group rounded-md hover:bg-aeblack-50 px-5 pt-4 pb-2">
			<input id="comments" aria-describedby="comments-description" name="comments" type="checkbox">
			<div>
				<label for="comments">Comments</label>
				<p id="comments-description" class="text-sm">Get notified when someones posts a comment on a posting.</p>
			</div>
		</div>
	</div>
</div>
```

**Note:** Use wider dropdown (`w-80`) for checkbox content. Checkboxes use `.aegov-check-group` structure. Add hover state with `hover:bg-aeblack-50`.

### Example 7: Custom UI Menu Dropdown

Dropdown with custom styled content and hover effects.

```html
<button id="dropdownButton-6" data-dropdown-toggle="dropdownDescMenu" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownDescMenu" class="aegov-dropdown hidden w-80">
	<div class="dropdown-body">
		<div class="group hover:bg-primary-500 p-4">
			<a href="#" onclick="return false;" class="no-underline">
				<div class="font-bold text-aeblack-950 uppercase mb-2 group-hover:text-primary-50">PUBLISHED</div>
				<p class="text-sm text-aeblack-300 group-hover:text-whitely-50 !mb-0">by publishing an item, the content will be pushed on the production version of the site.</p>
			</a>
		</div>
	</div>
</div>
```

**Note:** Use `group` class for parent hover effects. Child elements use `group-hover:*` classes to change on hover. Custom content doesn't require standard `.dropdown-item` structure.

### Example 8: Hover-Triggered Dropdown

Dropdown that opens on hover instead of click.

```html
<button id="dropdownButton-8" data-dropdown-trigger="hover" data-dropdown-toggle="dropdownHover" class="aegov-btn" type="button">
	Open dropdown
	<svg class="w-4 h-4 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none" />
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" />
	</svg>
</button>

<div id="dropdownHover" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1" aria-labelledby="dropdownButton-8">
			<li><a href="#" onclick="return false;" class="dropdown-item">An item</a></li>
			<li><a href="#" onclick="return false;" class="dropdown-item">An item</a></li>
			<li><a href="#" onclick="return false;" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>
```

**Note:** Add `data-dropdown-trigger="hover"` attribute to button to enable hover behavior. Default is click.

### Example 9: Placement Variations

Dropdowns positioned at different sides relative to trigger button.

```html
<!-- Top Placement -->
<button id="dropdownButton-top" data-dropdown-placement="top" data-dropdown-toggle="dropdownPlacementTop" class="aegov-btn" type="button">
	Top
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<polyline points="48 160 128 80 208 160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>

<div id="dropdownPlacementTop" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">An item</a></li>
			<li><a href="#" class="dropdown-item">An item</a></li>
			<li><a href="#" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>

<!-- Right Placement -->
<button id="dropdownButton-right" data-dropdown-placement="right" data-dropdown-toggle="dropdownPlacementRight" class="aegov-btn" type="button">
	Right
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>

<div id="dropdownPlacementRight" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>

<!-- Bottom Placement (default) -->
<button id="dropdownButton-bottom" data-dropdown-placement="bottom" data-dropdown-toggle="dropdownPlacementBottom" class="aegov-btn" type="button">
	Bottom
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>

<div id="dropdownPlacementBottom" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>

<!-- Left Placement -->
<button id="dropdownButton-left" data-dropdown-placement="left" data-dropdown-toggle="dropdownPlacementLeft" class="aegov-btn" type="button">
	Left
	<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
		<rect width="256" height="256" fill="none"/>
		<polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
	</svg>
</button>

<div id="dropdownPlacementLeft" class="aegov-dropdown hidden w-52">
	<div class="dropdown-body text-aeblack-600">
		<ul class="py-1">
			<li><a href="#" class="dropdown-item">An item</a></li>
		</ul>
	</div>
</div>
```

**Note:** Use `data-dropdown-placement` attribute with values: `top`, `right`, `bottom` (default), `left`. Auto-placement switches to opposite side if insufficient viewport space.

## Notes

**Usage Guidance:**

The dropdown enhances user experience through space-efficient menus. Appropriate use cases include:
- Website navigation menus
- User profile access and account settings
- Language/region selection
- Search filters and sorting options
- Form alternatives to select elements
- Action menus for item-specific operations

**Accessibility Features:**

- **Semantic HTML**: Uses `<div>`, `<ul>`, `<li>` elements for structure
- **ARIA Attributes**: Implements `aria-labelledby` linking triggers to menus and `role="menu"` on lists
- **Keyboard Support**: Activated via Enter or Space keys; navigate with Tab and arrow keys
- **Meaningful Text**: Descriptive labels aid screen reader users
- **Focus Management**: Maintains focus state for keyboard users

**Technical Details:**

- **Core Dependency**: JavaScript (AEGOV-scripts library or custom implementation)
- **Key Attributes**:
  - `data-dropdown-toggle="id"` - Links button to dropdown (required)
  - `data-dropdown-trigger="hover|click"` - Activation method (default: click)
  - `data-dropdown-placement="top|right|bottom|left"` - Position relative to button (default: bottom)
- **Auto-Placement**: Defaults to bottom; automatically switches to top if insufficient viewport space
- **Close Behavior**: Closes on outside click or hover exit
- **Initial State**: Dropdown starts hidden with `.hidden` class

**Structure Classes:**

- `.aegov-dropdown` - Base dropdown container
- `.dropdown-header` - Optional header section (user info, titles)
- `.dropdown-body` - Main content area containing menu items
- `.dropdown-item` - Individual menu item links
- `divide-y divide-*` - Horizontal dividers between sections

**RTL Support:**

Fully configured for right-to-left languages. Aligns with layout and typography guidelines. Chevron icons automatically adjust direction.

**React Implementation:**

```jsx
<Dropdown
  groups={[{
    items: [{
      label: 'An Item',
      value: 'item1'
    }, {
      label: 'An Item',
      value: 'item2'
    }]
  }]}
  side="bottom"
  align="start"
  trigger="click">
  <Button variant="solid" styleType="secondary">
    Open dropdown
    <svg>...</svg>
  </Button>
</Dropdown>
```

React props: `groups` (array of item groups), `side` ("top" | "right" | "bottom" | "left"), `align` ("start" | "center" | "end"), `trigger` ("click" | "hover"), `content` (custom JSX content)
