# Navigation
**Docs**: https://designsystem.gov.ae/docs/components/navigation
**Purpose**: User-friendly accessible menu system for site navigation
**JS Required**: ✅ Yes

## Dependent Components
- [Dropdown](dropdown.md) - For desktop hover menus
- [Accordion](accordion.md) - For mobile responsive menus
- Tooltip - For secondary menu items
- Modal - For responsive menu triggers

## Description

The Navigation provides a "user-friendly and accessible menu system to facilitate smooth navigation throughout the website or application." It serves as the primary mechanism for users to move between sections and pages, with modular desktop and responsive implementations.

## Examples

### Example 1: Basic Navigation

Desktop and responsive two-section layout with main navigation (Home, Our services, About us) and secondary menu (Login, Accessibility, Switch language).

```html
<nav class="main-navigation">
	<div class="container flex items-center justify-between">
		<div class="logo">
			<a href="#">Logo</a>
		</div>
		<ul class="menu hidden lg:flex">
			<li><a href="#" class="active">Home</a></li>
			<li><a href="#">Our services</a></li>
			<li><a href="#">About us</a></li>
		</ul>
		<ul class="secondary-menu hidden lg:flex">
			<li><a href="#">Login</a></li>
			<li><a href="#">Accessibility</a></li>
			<li><a href="#">Switch language</a></li>
		</ul>
		<button class="menu-toggle lg:hidden" aria-label="Toggle menu">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-6 h-6">
				<rect width="256" height="256" fill="none"/>
				<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="40" y1="64" x2="216" y2="64" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				<line x1="40" y1="192" x2="216" y2="192" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			</svg>
		</button>
	</div>
</nav>
```

**Note:** Use `.main-navigation` wrapper, `.menu` for primary links, `.secondary-menu` for utility links. Hide menus on mobile with `hidden lg:flex`.

### Example 2: Navigation with Dropdown

Combines hover dropdowns for desktop with accordion functionality for mobile, featuring expandable "Our services" submenu.

```html
<nav class="main-navigation">
	<div class="container flex items-center justify-between">
		<div class="logo">
			<a href="#">Logo</a>
		</div>
		<ul class="menu hidden lg:flex">
			<li><a href="#">Home</a></li>
			<li>
				<button data-dropdown-toggle="services-dropdown" data-dropdown-trigger="hover" class="flex items-center">
					Our services
					<svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none"/>
						<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
				</button>
				<div id="services-dropdown" class="aegov-dropdown hidden w-52">
					<div class="dropdown-body">
						<ul role="menu">
							<li><a href="#" class="dropdown-item">Service 1</a></li>
							<li><a href="#" class="dropdown-item">Service 2</a></li>
							<li><a href="#" class="dropdown-item">Service 3</a></li>
						</ul>
					</div>
				</div>
			</li>
			<li><a href="#">About us</a></li>
		</ul>
	</div>

	<!-- Mobile Accordion Version -->
	<div class="mobile-menu lg:hidden hidden">
		<div class="aegov-accordion" data-accordion="collapse">
			<div class="accordion-item">
				<div class="accordion-title">
					<button data-accordion-target="#services-mobile" aria-expanded="false">
						Our services
					</button>
				</div>
				<div id="services-mobile" class="accordion-content hidden">
					<div class="accordion-content-body">
						<ul>
							<li><a href="#">Service 1</a></li>
							<li><a href="#">Service 2</a></li>
							<li><a href="#">Service 3</a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
```

**Note:** Desktop uses `data-dropdown-trigger="hover"` for hover activation. Mobile transforms to accordion with `data-accordion="collapse"`.

### Example 3: Multi-Column Dropdown

Displays multiple subcategories under main items with organized column layouts, showing "About us" with three titled sections.

```html
<nav class="main-navigation">
	<div class="container flex items-center justify-between">
		<div class="logo">
			<a href="#">Logo</a>
		</div>
		<ul class="menu hidden lg:flex">
			<li><a href="#">Home</a></li>
			<li>
				<button data-dropdown-toggle="about-dropdown" data-dropdown-trigger="hover">
					About us
					<svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none"/>
						<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
				</button>
				<div id="about-dropdown" class="aegov-dropdown hidden w-auto">
					<div class="dropdown-body grid grid-cols-3 gap-4 p-4">
						<div>
							<h3 class="font-semibold mb-2">Our Vision</h3>
							<ul role="menu">
								<li><a href="#" class="dropdown-item">Mission</a></li>
								<li><a href="#" class="dropdown-item">Values</a></li>
								<li><a href="#" class="dropdown-item">Goals</a></li>
							</ul>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Our Team</h3>
							<ul role="menu">
								<li><a href="#" class="dropdown-item">Leadership</a></li>
								<li><a href="#" class="dropdown-item">Departments</a></li>
								<li><a href="#" class="dropdown-item">Careers</a></li>
							</ul>
						</div>
						<div>
							<h3 class="font-semibold mb-2">Resources</h3>
							<ul role="menu">
								<li><a href="#" class="dropdown-item">Reports</a></li>
								<li><a href="#" class="dropdown-item">Documents</a></li>
								<li><a href="#" class="dropdown-item">Media</a></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

**Note:** Use `grid grid-cols-3` for multi-column layout. Add headings with `font-semibold` for section titles.

### Example 4: Mega Menu

Advanced navigation displaying "four columns" of content with categories like Cities, Foods, Landmarks, Activities, customizable via grid-column classes.

```html
<nav class="main-navigation">
	<div class="container flex items-center justify-between">
		<div class="logo">
			<a href="#">Logo</a>
		</div>
		<ul class="menu hidden lg:flex">
			<li><a href="#">Home</a></li>
			<li>
				<button data-dropdown-toggle="mega-menu" data-dropdown-trigger="hover">
					Explore UAE
					<svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
						<rect width="256" height="256" fill="none"/>
						<polyline points="208 96 128 176 48 96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					</svg>
				</button>
				<div id="mega-menu" class="aegov-dropdown hidden w-full max-w-screen-xl">
					<div class="dropdown-body grid grid-cols-4 gap-6 p-6">
						<div>
							<h3 class="text-lg font-bold mb-3">Cities</h3>
							<ul role="menu" class="space-y-2">
								<li><a href="#" class="dropdown-item">Abu Dhabi</a></li>
								<li><a href="#" class="dropdown-item">Dubai</a></li>
								<li><a href="#" class="dropdown-item">Sharjah</a></li>
								<li><a href="#" class="dropdown-item">Ajman</a></li>
							</ul>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-3">Foods</h3>
							<ul role="menu" class="space-y-2">
								<li><a href="#" class="dropdown-item">Traditional Cuisine</a></li>
								<li><a href="#" class="dropdown-item">Modern Restaurants</a></li>
								<li><a href="#" class="dropdown-item">Street Food</a></li>
								<li><a href="#" class="dropdown-item">Cafes</a></li>
							</ul>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-3">Landmarks</h3>
							<ul role="menu" class="space-y-2">
								<li><a href="#" class="dropdown-item">Burj Khalifa</a></li>
								<li><a href="#" class="dropdown-item">Sheikh Zayed Mosque</a></li>
								<li><a href="#" class="dropdown-item">Dubai Frame</a></li>
								<li><a href="#" class="dropdown-item">Louvre Abu Dhabi</a></li>
							</ul>
						</div>
						<div>
							<h3 class="text-lg font-bold mb-3">Activities</h3>
							<ul role="menu" class="space-y-2">
								<li><a href="#" class="dropdown-item">Desert Safari</a></li>
								<li><a href="#" class="dropdown-item">Water Sports</a></li>
								<li><a href="#" class="dropdown-item">Shopping</a></li>
								<li><a href="#" class="dropdown-item">Cultural Tours</a></li>
							</ul>
						</div>
					</div>
				</div>
			</li>
		</ul>
	</div>
</nav>
```

**Note:** Mega menus use `grid-cols-4` (3-5 columns supported). Add large headings with `text-lg font-bold`. Use `max-w-screen-xl` for width control.

## Notes

**Usage Contexts:**

Navigation facilitates user exploration through intuitive menu systems, enhancing accessibility and site navigation across digital interfaces.

**Accessibility Requirements:**

- **ARIA Implementation**: Use appropriate ARIA roles and attributes for screen readers
- **Keyboard Navigation**: Tab for menu interaction, Spacebar/Enter to toggle submenus
- **Focus Management**: Set focus on first focusable element when mega menu opens; return focus to trigger element on close
- **Clear Instructions**: Provide concise guidance for available options
- **Responsive Testing**: Verify accessibility across all device sizes

**Technical Details:**

- Structure: `<nav class="main-navigation">` with `<ul class="menu">` and `<li>` elements
- Uses TailwindCSS for styling (flex, gap, hidden, lg:block utilities)
- Dropdown toggle via data attributes: `data-dropdown-toggle`, `data-dropdown-trigger="hover"`
- Accordion implementation for mobile with `data-accordion="collapse"`
- Icon support with SVG elements

**Behavior Notes:**

- **Hover**: Desktop submenus open automatically on hover
- **Mobile**: Transforms to accordion-style with click interaction
- **Keyboard**: Arrow keys navigate menu items; Space/Enter toggles submenus
- **Mega Menu Columns**: Customizable via `.grid-cols-*` classes (3-5 columns supported)

**JavaScript Requirements:**

This component depends on JavaScript functionality. While the bundled AEGov-Design-System library works out-of-box, alternative libraries may be used provided styling matches the specifications.

**RTL Support:**

"All components that are part of the UAE Design System support RTL and have been designed to work for languages that require RTL layout." Arabic implementation example provided with Arabic menu labels and text.

**React Implementation:**

```jsx
const { MainMenu, SecondaryMenu, NavItem, useWindowSize } = Navigation;
const { isMobile } = useWindowSize();

<Navigation isMobile={isMobile} logo={<Logo />}>
	<MainMenu>
		<NavItem icon={House} href="#" isActive>Home</NavItem>
		<NavItem href="#">Our services</NavItem>
	</MainMenu>
	<SecondaryMenu>
		<NavItem type="secondary" icon={User} tooltipText="Login">
			Login
		</NavItem>
	</SecondaryMenu>
</Navigation>
```

React components: `Navigation` wrapper, `MainMenu`, `SecondaryMenu`, `NavItem`. Props include `icon`, `href`, `isActive`, `type`, `tooltipText`, `isMobile` detection
