# Header Block
**Docs**: https://designsystem.gov.ae/docs/blocks/header
**Purpose**: Top section containing branding, navigation, and utility links
**JS Required**: ✅ Yes (for dropdowns, mobile menu, modals)

## Dependent Components
- [Dropdown](../components/dropdown.md) - For service catalogue and submenu items
- [Input](../components/input.md) - Search functionality
- [Modal](../components/modal.md) - Language selection and Gold Star Rating information
- [Tooltip](../components/tooltip.md) - Icon descriptions in secondary navigation
- [Accordion](../components/accordion.md) - Mobile submenu expansion/collapse
- SVG Icons - Search, user, accessibility, language, menu icons
- Images - Entity logo, UAE emblem, GSR logo

## Description

The header serves as the topmost section of a website, functioning as the primary navigation and branding area. It incorporates the organization's logo, navigation menus, search functionality, and utility links. Two distinct versions exist—one optimized for mobile devices and one for desktop—ensuring consistent user experience across all screen sizes.

## Key Requirements and Mandatory Elements

### Logo Specifications
- Entity logo must be positioned in the top left corner
- Must be SVG format
- Height cannot exceed 110px
- Gold Star Rating (GSR) logo should be placed adjacent to the main logo

### Navigation Structure
- Maximum of 7 navigation elements allowed
- First element must link to homepage
- Second element must feature service catalogue with dropdown
- Final four links must follow this sequence: "Digital participation," "Open data," "About," and optional "More"

### Entity-Specific Rules

**For Ministries:**
- Search element remains always visible in header

**For Authorities:**
- UAE emblem positioned on header's right section
- Entity logo must not exceed emblem height
- Search functionality converts to icon in secondary navigation
- Header colors and hover states adapt to custom color swatches

### Secondary Navigation Icons
The header includes three essential icon-based utilities with tooltips:
- Login link (modal or dedicated page)
- Accessibility page and policy information
- Language preference switcher with default modal

## Responsive Design

### Desktop Layout (hidden lg:block)
- Horizontal navigation with hover-triggered dropdowns
- Full-width search input visible
- Icon-based secondary navigation aligned right

### Mobile Layout (lg:hidden)
The mobile header implements:
- Hamburger menu icon triggering modal overlay
- Accordion-style submenu expansion
- Search dropdown accessible via icon
- Full-width responsive navigation drawer
- Logo and emblem repositioned for compact display

## Examples

### Example 1: Ministry Header - Desktop Structure

Complete header structure for Ministry websites with search always visible.

```html
<header class="aegov-header">
  <div class="header-desktop hidden lg:block">
    <div class="header-top py-3">
      <div class="container">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="header-logo logos">
            <div class="logo-item">
              <a href="#" class="logo block">
                <img src="/img/ministry-logo.svg" alt="Ministry Logo">
              </a>
            </div>
            <div class="logo-item">
              <a href="#" data-modal-target="modal-gold-star">
                <img src="/img/gold-star.svg" alt="Gold Star Rating" class="secondary-logo">
              </a>
            </div>
          </div>

          <form action="#" method="post">
            <div class="aegov-form-control w-64 xl:w-80">
              <div class="form-control-input">
                <input type="search" aria-label="search in site"
                       name="searchelem" placeholder="search for something">
                <button type="submit" class="control-suffix">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </form>

          <div class="header-navs-right">
            <ul class="flex items-center">
              <li>
                <a href="#" data-tooltip-placement="bottom"
                   data-tooltip-target="tooltip-login" class="flex items-center">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div id="tooltip-login" role="tooltip" class="aegov-tooltip">
                  Login
                </div>
              </li>
              <li>
                <a href="#" data-tooltip-placement="bottom"
                   data-tooltip-target="tooltip-accessibility" class="flex items-center">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z" />
                  </svg>
                </a>
                <div id="tooltip-accessibility" role="tooltip" class="aegov-tooltip">
                  Accessibility
                </div>
              </li>
              <li>
                <a href="#" data-modal-target="modal-lang"
                   data-tooltip-placement="bottom"
                   data-tooltip-target="tooltip-language" class="flex items-center">
                  <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                  </svg>
                </a>
                <div id="tooltip-language" role="tooltip" class="aegov-tooltip">
                  Language
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="header-bottom py-3">
      <div class="container">
        <nav class="main-navigation" aria-label="Main navigation">
          <ul class="menu nav-menu lg:flex lg:items-center">
            <li class="menu-item lg:inline-flex lg:items-center">
              <a href="#">Home</a>
            </li>
            <li class="menu-item menu-item-has-children group">
              <a href="#" data-dropdown-toggle="OurServicesHover"
                 data-dropdown-trigger="hover">Services</a>
              <button data-dropdown-toggle="OurServicesHover" class="submenu-btn">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
              <div id="OurServicesHover" class="submenu hidden">
                <ul>
                  <li><a href="#">Service Category 1</a></li>
                  <li><a href="#">Service Category 2</a></li>
                  <li><a href="#">All Services</a></li>
                </ul>
              </div>
            </li>
            <li class="menu-item lg:inline-flex lg:items-center">
              <a href="#">Digital participation</a>
            </li>
            <li class="menu-item lg:inline-flex lg:items-center">
              <a href="#">Open data</a>
            </li>
            <li class="menu-item lg:inline-flex lg:items-center">
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</header>
```

**Note:** This example shows the complete desktop header structure for ministries with search always visible.

### Example 2: Authority Header - With UAE Emblem

Header structure for Authority websites with UAE emblem on the right.

```html
<div class="header-top py-3">
  <div class="container">
    <div class="lg:flex lg:items-center lg:justify-between">
      <div class="header-logo logos">
        <div class="logo-item">
          <a href="#" class="logo block">
            <img src="/img/authority-logo.svg" alt="Authority Logo">
          </a>
        </div>
        <div class="logo-item">
          <a href="#" data-modal-target="modal-gold-star">
            <img src="/img/gold-star.svg" alt="Gold Star Rating" class="secondary-logo">
          </a>
        </div>
      </div>

      <div class="header-top-right flex items-center gap-4">
        <div class="header-navs-right">
          <ul class="flex items-center">
            <li>
              <a href="#" data-tooltip-placement="bottom"
                 data-tooltip-target="tooltip-search" class="flex items-center">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </a>
              <div id="tooltip-search" role="tooltip" class="aegov-tooltip">
                Search
              </div>
            </li>
            <li>
              <a href="#" data-tooltip-placement="bottom"
                 data-tooltip-target="tooltip-login" class="flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                </svg>
              </a>
              <div id="tooltip-login" role="tooltip" class="aegov-tooltip">
                Login
              </div>
            </li>
            <li>
              <a href="#" data-tooltip-placement="bottom"
                 data-tooltip-target="tooltip-accessibility" class="flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9 9a1 1 0 012 0v4a1 1 0 11-2 0V9zm1-4a1 1 0 100 2 1 1 0 000-2z" />
                </svg>
              </a>
              <div id="tooltip-accessibility" role="tooltip" class="aegov-tooltip">
                Accessibility
              </div>
            </li>
            <li>
              <a href="#" data-modal-target="modal-lang"
                 data-tooltip-placement="bottom"
                 data-tooltip-target="tooltip-language" class="flex items-center">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd" />
                </svg>
              </a>
              <div id="tooltip-language" role="tooltip" class="aegov-tooltip">
                Language
              </div>
            </li>
          </ul>
        </div>
        <a href="#">
          <img src="/img/uae-emblem.svg" alt="UAE Emblem" class="emblem-logo">
        </a>
      </div>
    </div>
  </div>
</div>
```

**Note:** For authorities, search converts to icon in secondary navigation, and UAE emblem is displayed on the right.

### Example 3: Mobile Header Structure

Mobile-optimized header with hamburger menu and responsive drawer.

```html
<div class="header-mobile lg:hidden">
  <div class="py-3">
    <div class="container">
      <div class="flex items-center justify-between">
        <a href="#" class="logo block">
          <img src="/img/ministry-logo.svg" alt="Ministry Logo" class="h-16">
        </a>
        <button data-modal-target="openMenu" data-modal-toggle="openMenu" type="button">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  <div id="openMenu" tabindex="-1"
       class="responsive-menu hidden max-lg:fixed max-lg:inset-0 max-lg:z-50 max-lg:bg-white">
    <div class="max-lg:p-4">
      <div class="w-full flex justify-between mb-4">
        <a href="#">
          <img src="/img/ministry-logo.svg" alt="Ministry Logo" class="h-16">
        </a>
        <div class="flex gap-4">
          <button id="dropdownButtonSearch" data-dropdown-toggle="dropdownSearchMobile">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button data-modal-hide="openMenu">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <nav class="main-navigation" aria-label="Main navigation">
        <ul id="responsive-header-collapse"
            data-accordion="collapse" class="menu aegov-accordion">
          <li class="menu-item accordion-item">
            <a href="#">Home</a>
          </li>
          <li class="menu-item menu-item-has-children accordion-item">
            <div class="accordion-title" id="mobile-accordion-heading-services">
              <button class="flex justify-between items-center w-full"
                      aria-label="Services" type="button"
                      data-accordion-target="#mobile-accordion-body-services"
                      aria-expanded="false"
                      aria-controls="mobile-accordion-body-services">
                <span>Services</span>
                <svg data-accordion-icon class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
            <div class="accordion-content hidden"
                 id="mobile-accordion-body-services"
                 aria-labelledby="mobile-accordion-heading-services">
              <ul class="accordion-content-body">
                <li><a href="#">Service Category 1</a></li>
                <li><a href="#">Service Category 2</a></li>
                <li><a href="#">All Services</a></li>
              </ul>
            </div>
          </li>
          <li class="menu-item accordion-item">
            <a href="#">Digital participation</a>
          </li>
          <li class="menu-item accordion-item">
            <a href="#">Open data</a>
          </li>
          <li class="menu-item accordion-item">
            <a href="#">About</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</div>
```

**Note:** Mobile menu uses accordion for submenu expansion and modal overlay for full-screen navigation.

### Example 4: Language Selection Modal

Modal for language preference selection.

```html
<div id="modal-lang" class="aegov-modal hidden" role="dialog" aria-modal="true">
  <div class="aegov-modal-wrapper">
    <button class="aegov-modal-close" data-modal-hide="modal-lang" aria-label="Close modal">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="lang-header">
      <a href="#" class="lang-primary active">English</a>
      <span class="lang-primary-divider"></span>
      <a href="#" class="lang-primary">عربي</a>
    </div>
    <div class="lang-other">
      <p class="lang-other-title">Other languages</p>
      <ul class="divide-y">
        <li><a href="#">French</a></li>
        <li><a href="#">Spanish</a></li>
        <li><a href="#">Hindi</a></li>
        <li><a href="#">Urdu</a></li>
      </ul>
    </div>
  </div>
</div>
```

**Note:** Language modal provides primary languages (English/Arabic) and optional additional languages.

### Example 5: Gold Star Rating Modal

Modal displaying Gold Star Rating information.

```html
<div id="modal-gold-star" class="aegov-modal hidden" role="dialog" aria-modal="true">
  <div class="aegov-modal-wrapper">
    <button class="aegov-modal-close" data-modal-hide="modal-gold-star" aria-label="Close modal">
      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    <div class="text-center">
      <img class="inline-block w-28 mb-6" src="/img/gold-star.svg" alt="Gold Star Rating">
    </div>
    <div class="text-center">
      <p class="text-lg mb-6">
        We are proud to be a Gold Star rated entity, reflecting our commitment to excellence in government services.
      </p>
      <a href="#" class="aegov-btn btn-secondary">Learn more</a>
    </div>
  </div>
</div>
```

**Note:** GSR modal provides information about the entity's Gold Star Rating and link to learn more.

## Notes

**JavaScript Requirements:**
The component requires JavaScript for:
- Dropdown menu toggle functionality
- Mobile responsive menu state management
- Modal window controls for language and GSR modals
- Tooltip positioning and visibility
- Accordion expansion/collapse on mobile

The design system provides a bundled JavaScript library supporting these features out-of-box, though alternative libraries may be substituted while maintaining the documented styling approach.

**Logo Requirements:**
- Entity logo height cannot exceed 110px
- Must be SVG format for scalability
- Entity logo must not exceed UAE emblem height (for authorities)

**Navigation Limits:**
- Maximum 7 navigation elements
- First element: Homepage link
- Second element: Services catalogue with dropdown
- Last four: Digital participation, Open data, About, More (optional)

**Responsive Behavior:**
- Desktop (lg:): Horizontal navigation with dropdowns
- Mobile (<lg:): Hamburger menu with accordion submenu
- Search visibility changes between ministry/authority layouts
