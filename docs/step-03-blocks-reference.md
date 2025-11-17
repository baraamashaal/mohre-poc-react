# Step 03: AEGOV Blocks - Complete HTML Reference

**Date:** 2025-11-17
**Status:** ✅ Completed
**Purpose:** Comprehensive HTML code examples for all 9 AEGOV blocks (pre-built page sections).

---

## Table of Contents

1. [Header](#1-header-block)
2. [Footer](#2-footer-block)
3. [Hero](#3-hero-block)
4. [Content](#4-content-block)
5. [Filter](#5-filter-block)
6. [Login](#6-login-block)
7. [Newsletter](#7-newsletter-block)
8. [Page Rating](#8-page-rating-block)
9. [Team](#9-team-block)

---

## What are Blocks?

**Blocks** are pre-built, reusable page sections that combine multiple components. They differ from components in that:
- Components are individual UI elements (buttons, inputs, cards)
- Blocks are complete sections (headers, footers, hero sections)
- Blocks utilize multiple components together
- Blocks follow specific UAE Government patterns and requirements

---

## 1. Header Block

The Header block is the top section containing logo, navigation, and secondary actions. Two variants exist: Ministry and Authority.

### Requirements

**Logo Placement:**
- Entity logo must be top-left corner
- Maximum height: 110px
- Format: SVG required
- Gold Star Rating logo adjacent to entity logo

**Navigation Structure:**
- Maximum 7 primary navigation elements
- First element: Homepage link
- Second element: Service catalogue with dropdown
- Last 4 elements (fixed order): "Digital participation", "Open data", "About", "More" (optional)

**Secondary Navigation:**
- Login access icon (with tooltip)
- Accessibility policy/settings icon
- Language selector

### Ministry Header Structure

**Desktop:**
```html
<header class="aegov-header">
  <div class="header-top">
    <div class="container">
      <div class="header-top-inner">
        <!-- Logo Section -->
        <div class="header-logo">
          <a href="/" aria-label="Go to homepage">
            <img src="/logo.svg" alt="Ministry Logo" class="max-h-[110px]">
          </a>
          <img src="/gsr-badge.svg" alt="Gold Star Rating" class="max-h-[110px]">
        </div>

        <!-- Search (Ministry only) -->
        <div class="header-search">
          <form action="/search" method="get" class="aegov-form-control">
            <div class="form-control-input">
              <input type="search" id="header-search" placeholder="Search..." name="q">
              <button type="submit" class="control-suffix">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Search icon -->
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Secondary Nav -->
        <div class="header-navs-right">
          <ul class="flex items-center gap-2">
            <li>
              <a href="/login" data-tooltip-placement="bottom" data-tooltip-target="tooltip-login"
                 class="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center justify-center">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- User icon -->
                </svg>
                <span class="sr-only">Login</span>
              </a>
              <div id="tooltip-login" role="tooltip" class="aegov-tooltip">
                Login
                <div class="tooltip-arrow" data-popper-arrow></div>
              </div>
            </li>
            <li>
              <button data-modal-target="language-modal" data-modal-toggle="language-modal"
                      class="lg:h-12 xl:h-14 lg:px-2 xl:px-3 flex items-center">
                <span class="font-medium">EN</span>
                <svg class="w-4 h-4 ms-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Chevron down -->
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Primary Navigation -->
  <div class="header-nav">
    <div class="container">
      <nav class="main-navigation" aria-label="Main navigation">
        <div class="menu-main-menu-container">
          <ul class="menu nav-menu lg:flex lg:items-center lg:gap-1 xl:gap-2">
            <li class="menu-item lg:inline-flex lg:items-center has-link-icon active-page">
              <a href="/" class="hover:!text-primary-800">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Home icon -->
                </svg>
                <span>Home</span>
              </a>
            </li>
            <li class="menu-item relative lg:inline-flex lg:items-center menu-item-has-children group">
              <a href="/services" data-dropdown-toggle="servicesDropdown" data-dropdown-trigger="hover"
                 class="group-hover:!text-primary-800">
                Our services
              </a>
              <button data-dropdown-toggle="servicesDropdown" class="submenu-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Chevron down -->
                </svg>
              </button>
              <div id="servicesDropdown" class="submenu hidden lg:py-4 xl:py-5">
                <ul class="space-y-1.5">
                  <li class="menu-item"><a href="/service-1">Service 1</a></li>
                  <li class="menu-item"><a href="/service-2">Service 2</a></li>
                </ul>
              </div>
            </li>
            <li class="menu-item"><a href="/digital-participation">Digital participation</a></li>
            <li class="menu-item"><a href="/open-data">Open data</a></li>
            <li class="menu-item"><a href="/about">About</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
```

**Mobile (Hamburger Menu):**
```html
<!-- Mobile Toggle Button -->
<button data-modal-target="mobileNav" data-modal-toggle="mobileNav"
        class="hamburger-icon lg:hidden">
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <!-- Hamburger icon -->
  </svg>
  <span class="sr-only">Toggle main menu</span>
</button>

<!-- Mobile Menu Modal -->
<div id="mobileNav" tabindex="-1" aria-hidden="true"
     class="responsive-menu hidden lg:hidden max-lg:fixed max-lg:inset-0 max-lg:w-full max-lg:z-50">
  <div class="bg-whitely-50 h-full overflow-auto">
    <!-- Mobile menu accordion structure -->
    <nav aria-label="Mobile navigation" class="aegov-accordion" data-accordion="collapse">
      <ul class="space-y-2">
        <li class="accordion-item">
          <a href="/" class="py-4 px-6 block">Home</a>
        </li>
        <li class="accordion-item">
          <div class="accordion-title">
            <button data-accordion-target="#mobile-services" aria-controls="mobile-services"
                    class="w-full flex justify-between items-center py-4 px-6">
              <span>Our services</span>
              <svg data-accordion-icon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <!-- Chevron -->
              </svg>
            </button>
          </div>
          <div id="mobile-services" class="accordion-content hidden">
            <ul class="ps-6">
              <li><a href="/service-1" class="py-2 block">Service 1</a></li>
              <li><a href="/service-2" class="py-2 block">Service 2</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  </div>
</div>
```

### Authority Header Differences

- UAE emblem positioned in top-right
- Search moved to secondary navigation (icon-triggered dropdown)
- Entity logo must not exceed emblem height

### Key Classes

- `.aegov-header` — Main header container
- `.header-top` — Top section with logo/search/icons
- `.header-nav` — Navigation section
- `.main-navigation` — Primary nav wrapper
- `.menu-item` — Individual menu item
- `.menu-item-has-children` — Parent with dropdown
- `.submenu` — Dropdown menu
- `.responsive-menu` — Mobile modal
- `.hamburger-icon` — Mobile toggle button

---

## 2. Footer Block

The Footer block contains navigation links, contact information, copyright, and social media.

### Complete Footer Structure

```html
<footer class="aegov-footer">
  <!-- Footer Top (Navigation & Contact) -->
  <div class="footer-top sm:py-6 md:py-12">
    <div class="container">
      <div class="footer-top-left sm:flex gap-3 xl:px-6">
        <!-- Footer Navigation (Accordion on Mobile) -->
        <nav aria-label="Footer navigation"
             class="aegov-accordion aegov-mobile-accordion [&_.accordion-active_svg]:rotate-45 flex-1"
             id="footer-accordion" data-accordion="collapse">
          <ul class="grid sm:gap-x-2.5 sm:grid-cols-2 lg:grid-cols-4 sm:gap-y-8 md:gap-y-12">
            <li class="accordion-item border-b border-aeblack-100 sm:border-none">
              <div class="accordion-title sm:mb-4" id="footer-section-1">
                <button class="max-sm:py-4 max-sm:flex justify-between sm:justify-start max-sm:items-center xl:cursor-default sm:pointer-events-none"
                        type="button" data-accordion-target="#footer-links-1"
                        aria-expanded="false" aria-controls="footer-links-1">
                  <span>The Ministry</span>
                  <svg class="sm:hidden" data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <!-- Plus icon -->
                  </svg>
                </button>
              </div>
              <div class="accordion-content hidden max-sm:py-4 sm:block"
                   id="footer-links-1" aria-labelledby="footer-section-1">
                <ul class="accordion-content-body space-y-2">
                  <li><a href="/about">About the ministry</a></li>
                  <li><a href="/minister">About the minister</a></li>
                  <li><a href="/charter">UAE charter for Future Services</a></li>
                  <li><a href="/happiness">Customer happiness charter</a></li>
                  <li><a href="/awards">Awards</a></li>
                  <li><a href="/careers">Careers</a></li>
                  <li><a href="/procurement">Procurement</a></li>
                </ul>
              </div>
            </li>

            <li class="accordion-item border-b border-aeblack-100 sm:border-none">
              <div class="accordion-title sm:mb-4" id="footer-section-2">
                <button class="max-sm:py-4 max-sm:flex justify-between sm:justify-start max-sm:items-center xl:cursor-default sm:pointer-events-none"
                        type="button" data-accordion-target="#footer-links-2">
                  <span>Services</span>
                  <svg class="sm:hidden" data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <!-- Plus icon -->
                  </svg>
                </button>
              </div>
              <div class="accordion-content hidden max-sm:py-4 sm:block" id="footer-links-2">
                <ul class="accordion-content-body space-y-2">
                  <li><a href="/services/1">Service catalogue</a></li>
                  <li><a href="/services/2">Popular services</a></li>
                  <li><a href="/track">Track your application</a></li>
                </ul>
              </div>
            </li>

            <li class="accordion-item border-b border-aeblack-100 sm:border-none">
              <div class="accordion-title sm:mb-4" id="footer-section-3">
                <button class="max-sm:py-4 max-sm:flex justify-between sm:justify-start max-sm:items-center xl:cursor-default sm:pointer-events-none"
                        type="button" data-accordion-target="#footer-links-3">
                  <span>Media</span>
                  <svg class="sm:hidden" data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <!-- Plus icon -->
                  </svg>
                </button>
              </div>
              <div class="accordion-content hidden max-sm:py-4 sm:block" id="footer-links-3">
                <ul class="accordion-content-body space-y-2">
                  <li><a href="/media/news">News</a></li>
                  <li><a href="/media/events">Events</a></li>
                  <li><a href="/media/gallery">Gallery</a></li>
                </ul>
              </div>
            </li>

            <li class="accordion-item border-b border-aeblack-100 sm:border-none">
              <div class="accordion-title sm:mb-4" id="footer-section-4">
                <button class="max-sm:py-4 max-sm:flex justify-between sm:justify-start max-sm:items-center xl:cursor-default sm:pointer-events-none"
                        type="button" data-accordion-target="#footer-links-4">
                  <span>Resources</span>
                  <svg class="sm:hidden" data-accordion-icon width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <!-- Plus icon -->
                  </svg>
                </button>
              </div>
              <div class="accordion-content hidden max-sm:py-4 sm:block" id="footer-links-4">
                <ul class="accordion-content-body space-y-2">
                  <li><a href="/open-data">Open data</a></li>
                  <li><a href="/policies">Policies</a></li>
                  <li><a href="/faq">FAQ</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </nav>

        <!-- Contact Section -->
        <div class="text-center footer-contact lg:w-48 xl:w-[277px]">
          <ul class="divide-y divide-aeblack-100">
            <li class="py-4">
              <a href="/contact">
                <img src="/img/tawasul.png" alt="Tawasul" class="inline-block w-36 lg:w-auto">
              </a>
            </li>
            <li class="py-4 custom-divide">
              <a href="tel:171" class="inline-flex items-center gap-2">
                <svg class="w-5 h-5 fill-aegreen-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Phone icon -->
                </svg>
                <span>171</span>
              </a>
              <a href="tel:+97147771777" class="inline-flex items-center gap-2 mt-2">
                <span>04-7771777</span>
              </a>
            </li>
            <li class="py-4">
              <span class="text-aeblack-500 text-sm">Toll free:</span>
              <a href="tel:80012" class="font-medium">800 12</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer Bottom (Copyright & Social) -->
  <div class="footer-bottom py-6 md:py-12">
    <div class="container">
      <div class="flex flex-wrap gap-y-6 items-center justify-between">
        <div class="w-full lg:w-7/12">
          <div class="text-aeblack-700 text-xs sm:text-sm">
            © 2023. Ministry of Human Resources & Emiratisation. All rights reserved.
            <span class="text-aeblack-500">Last updated on 24/04/2023 at 15:45</span>
          </div>
        </div>
        <div class="w-full lg:w-5/12 social-sharing flex items-center gap-4 justify-center lg:justify-end">
          <span class="text-sm text-aeblack-700 max-sm:hidden">Follow us on:</span>
          <ul class="flex items-center gap-6">
            <li>
              <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Facebook icon -->
                </svg>
                <span class="sr-only">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Instagram icon -->
                </svg>
                <span class="sr-only">Instagram</span>
              </a>
            </li>
            <li>
              <a href="https://linkedin.com" target="_blank" rel="noopener" aria-label="LinkedIn">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- LinkedIn icon -->
                </svg>
                <span class="sr-only">LinkedIn</span>
              </a>
            </li>
            <li>
              <a href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- Twitter icon -->
                </svg>
                <span class="sr-only">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube">
                <svg class="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                  <!-- YouTube icon -->
                </svg>
                <span class="sr-only">YouTube</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
```

### Key Classes

- `.aegov-footer` — Main footer container
- `.footer-top` — Navigation and contact section
- `.footer-bottom` — Copyright and social section
- `.footer-contact` — Contact information area
- `.aegov-accordion` — Mobile accordion for nav
- `.social-sharing` — Social media links container

### Requirements

- Footer must follow same color and pattern guidelines
- Dynamic copyright year implementation required
- Mobile accordion requires JavaScript
- Social media icons use SVG format

---

## 3. Hero Block

Hero sections are the primary visual messaging area, typically above-the-fold.

### Hero with Slider (Slick JS)

```html
<div class="mb-10">
  <div class="relative">
    <!-- Slider Container -->
    <div class="hero-slider [&_.slick-list]:rounded-xl [&_.slick-list]:overflow-hidden
                max-sm:[&_picture_img]:aspect-[4/4.88] sm:[&_picture_img]:aspect-[4/1.350]
                [&_picture_img]:object-cover [&_picture_img]:!w-full">

      <!-- Slide 1 -->
      <div>
        <a href="#" class="block">
          <picture>
            <source media="(min-width:650px)" srcset="/img/hero-desktop-1.jpg">
            <source media="(min-width:465px)" srcset="/img/hero-tablet-1.jpg">
            <img src="/img/hero-mobile-1.jpg" alt="Slider image" style="width:auto;">
          </picture>
        </a>
      </div>

      <!-- Slide 2 (with overlay content) -->
      <div>
        <div class="relative h-full w-full">
          <picture>
            <source media="(min-width:650px)" srcset="/img/hero-desktop-2.jpg">
            <source media="(min-width:465px)" srcset="/img/hero-tablet-2.jpg">
            <img src="/img/hero-mobile-2.jpg" alt="Slider image" style="width:auto;">
          </picture>
          <!-- Overlay Content -->
          <div class="absolute rtl:[direction:ltr] top-6 md:top-2/4 md:-translate-y-2/4
                      left-6 lg:left-12 xl:left-[4.25rem] space-y-4 md:space-y-5 xl:space-y-10">
            <h2 class="text-h6 md:text-h4 lg:text-h2 xl:text-h1 font-light text-whitely-50 sm:w-7/12">
              Ushering a new era of interaction
            </h2>
            <a href="/explore" class="max-lg:btn-sm aegov-btn btn-secondary">
              Explore in Virtual Reality
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Slider Controls -->
    <div class="aegovs-slider-style xl:absolute xl:bottom-10 left-6 lg:left-12 xl:left-[4.25rem]
                flex items-center gap-5 lg:gap-6 xl:gap-8 max-xl:justify-center max-xl:mt-4">
      <div class="aegov-slider-prev opacity-60 cursor-pointer hover:opacity-100">
        <svg class="w-5 h-5 rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="160 208 80 128 160 48" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </div>
      <div class="slick-slider-dots"></div>
      <div class="aegov-slider-next opacity-60 cursor-pointer hover:opacity-100">
        <svg class="w-5 h-5 rtl:-scale-x-100" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"/>
          <polyline points="96 48 176 128 96 208" fill="none" stroke="currentColor"
                    stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
        </svg>
      </div>
    </div>
  </div>
</div>

<!-- JavaScript Initialization -->
<script>
$('.hero-slider').slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 5000,
  appendDots: $('.slick-slider-dots'),
  prevArrow: $('.aegov-slider-prev'),
  nextArrow: $('.aegov-slider-next')
});
</script>
```

### Hero Full Width

```html
<div class="aegov-hero hero-slick hero-slick-full-width relative">
  <div class="hero-full-width">
    <div>
      <div class="relative w-full">
        <picture>
          <source media="(min-width:650px)" srcset="/img/hero-desktop.jpg" />
          <source media="(min-width:465px)" srcset="/img/hero-tablet.jpg" />
          <img src="/img/hero-mobile.jpg" alt="Hero image" />
        </picture>
        <div class="hero-hero-title-wrap">
          <div class="hero-hero-title">Ushering a new era of interaction</div>
          <a href="/learn-more" class="max-lg:btn-sm aegov-btn btn-secondary">Learn more</a>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-controls">
    <div class="hero-buttons">
      <button class="hero-button hero-prev-full-width" type="button">
        <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Left arrow icon -->
        </svg>
      </button>
      <button class="hero-play-full-width" type="button">
        <svg class="play-icon text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Play icon -->
        </svg>
      </button>
      <button class="hero-button hero-next-full-width" type="button">
        <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Right arrow icon -->
        </svg>
      </button>
    </div>
    <div class="hero-dots hero-dots-full-width"></div>
  </div>
</div>
```

### Hero Split Layout

```html
<div class="aegov-hero hero-slick hero-slick-split relative">
  <div class="hero-split">
    <div>
      <div class="hero-row">
        <div class="hero-col-left">
          <div class="hero-col-content">
            <div class="hero-title">Seniors retirement pension in UAE</div>
            <p class="hero-description">
              Comprehensive retirement benefits for UAE senior citizens
            </p>
            <a href="/pension" class="max-lg:btn-sm aegov-btn btn-secondary">Learn more</a>
          </div>
        </div>
        <div class="hero-col-right">
          <picture>
            <source media="(min-width:650px)" srcset="/img/hero-split-desktop.jpg" />
            <source media="(min-width:465px)" srcset="/img/hero-split-tablet.jpg" />
            <img src="/img/hero-split-mobile.jpg" alt="Hero image" />
          </picture>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-controls">
    <div class="hero-buttons">
      <button class="hero-button hero-prev-split" type="button">
        <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Left arrow -->
        </svg>
      </button>
      <button class="hero-play-split" type="button">
        <svg class="play-icon text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Play icon -->
        </svg>
      </button>
      <button class="hero-button hero-next-split" type="button">
        <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg"
             width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
          <!-- Right arrow -->
        </svg>
      </button>
    </div>
    <div class="hero-dots hero-dots-split"></div>
  </div>
</div>
```

### Hero Static Layout

```html
<div class="aegov-hero-static">
  <div class="container">
    <div class="hero-static-header mb-8 md:mb-10 lg:mb-12">
      <div class="hero-static-title-sm text-aeblack-600 text-sm font-medium uppercase mb-2">
        THE UNITED ARAB EMIRATES AUTHORITY ON
      </div>
      <h1 class="hero-static-title text-h3 md:text-h2 xl:text-h1 font-bold">
        Fostering transparency & investor confidence
      </h1>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="aegov-card card-bordered bg-whitely-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
             class="w-8 h-8 text-primary-600" aria-hidden="true">
          <!-- Icon SVG -->
        </svg>
        <h5 class="text-lg font-semibold mb-2">Transparency</h5>
        <p class="text-aeblack-600">Ensuring clear and open communication</p>
      </div>

      <div class="aegov-card card-bordered bg-whitely-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
             class="w-8 h-8 text-primary-600" aria-hidden="true">
          <!-- Icon SVG -->
        </svg>
        <h5 class="text-lg font-semibold mb-2">Innovation</h5>
        <p class="text-aeblack-600">Driving forward-thinking solutions</p>
      </div>

      <div class="aegov-card card-bordered bg-whitely-50">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"
             class="w-8 h-8 text-primary-600" aria-hidden="true">
          <!-- Icon SVG -->
        </svg>
        <h5 class="text-lg font-semibold mb-2">Excellence</h5>
        <p class="text-aeblack-600">Committed to the highest standards</p>
      </div>
    </div>
  </div>
</div>
```

### Key Classes

- `.aegov-hero`, `.aegov-hero-static` — Main hero containers
- `.hero-slider`, `.hero-full-width`, `.hero-split` — Layout variants
- `.hero-row`, `.hero-col-left`, `.hero-col-right` — Split layout structure
- `.hero-controls`, `.hero-buttons`, `.hero-dots` — Slider controls
- `.hero-static-header`, `.hero-static-title` — Static variant elements

### Dependencies

- **Slick Slider** library (jQuery plugin) for carousel functionality
- Responsive images with `<picture>` element
- Custom JavaScript initialization for each variant

---

## 4. Content Block

Content blocks encapsulate styled text, images, and CTA sections for page content.

### Text-Based Content

```html
<div class="content-block container py-12">
  <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
    About the minister
  </h2>
  <p class="text-base leading-7 mb-6">
    His Excellency Dr. Ahmad Belhoul Al Falasi was appointed Minister of Education in May 2022...
  </p>

  <h3 class="text-h5 md:text-h4 xl:text-h3 mb-4 xl:mb-6 leading-normal text-aeblack-600">
    Career highlights
  </h3>
  <p class="text-base leading-7 mb-6">
    Previously, His Excellency Dr. Al Falasi served as the Minister of State...
  </p>

  <h5 class="text-h6 xl:text-h5 mb-4 xl:mb-6 leading-normal text-primary-600">
    Served as the Minister of State for Higher Education
  </h5>
  <p class="text-base leading-7">
    Additional content details...
  </p>
</div>
```

### Full-Width Content with Columns

```html
<div class="container py-12">
  <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
    Sustainability at the core
  </div>
  <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
    A better sustainable workflow
  </h2>
  <div class="columns-1 lg:columns-2 gap-10">
    <p class="text-base leading-7 mb-6">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
      incididunt ut labore et dolore magna aliqua...
    </p>
    <p class="text-base leading-7">
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat...
    </p>
  </div>
</div>
```

### Image on Left

```html
<div class="container py-12">
  <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16
              sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <!-- Image Column -->
    <div class="lg:pe-4">
      <div class="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8
                  pt-64 md:pt-80 shadow-xl">
        <img class="absolute inset-0 h-full w-full object-cover"
             src="/img/museum-of-the-future.jpg"
             alt="Museum of the future - Dubai">
      </div>
    </div>

    <!-- Content Column -->
    <div>
      <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
        Sustainability at the core
      </div>
      <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
        A better sustainable workflow
      </h2>
      <p class="text-base leading-7">
        Innovative solutions for modern challenges...
      </p>
    </div>
  </div>
</div>
```

### Image on Right (Stacked on Mobile)

```html
<div class="container py-12">
  <div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16
              lg:mx-0 lg:max-w-none lg:grid-cols-2">
    <!-- Image Column (ordered last on desktop) -->
    <div class="lg:ps-4 lg:order-last">
      <div class="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8
                  pt-64 md:pt-80 shadow-xl lg:ms-auto">
        <img class="absolute inset-0 h-full w-full object-cover"
             src="/img/museum-of-the-future.jpg"
             alt="Museum of the future - Dubai">
      </div>
    </div>

    <!-- Content Column -->
    <div>
      <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
        Sustainability at the core
      </div>
      <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
        A better sustainable workflow
      </h2>
      <p class="text-base leading-7">
        Innovative solutions for modern challenges...
      </p>
    </div>
  </div>
</div>
```

### Left-Aligned CTA

```html
<div class="container px-6 py-24 sm:py-32">
  <h2 class="text-h4 lg:text-h3 xl:text-h3 text-primary-500 tracking-tight">
    Stay connected.<br>Download our mobile app.
  </h2>
  <div class="mt-10 flex items-center gap-x-6">
    <a href="/download" class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-secondary">
      Download now
    </a>
    <a href="/learn" class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-link btn-secondary">
      Learn more
    </a>
  </div>
</div>
```

### Center-Aligned CTA

```html
<div class="container px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-h4 lg:text-h3 xl:text-h3 text-primary-500">
      Stay connected.<br>Download our mobile app.
    </h2>
    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
      Access government services anytime, anywhere with our convenient mobile application.
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href="/download" class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-secondary">
        Download now
      </a>
      <a href="/learn" class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-link btn-secondary">
        Learn more
      </a>
    </div>
  </div>
</div>
```

### Key Classes

- `.content-block` — Main content wrapper
- `.columns-1`, `.lg:columns-2` — Multi-column text layout
- `.grid`, `.grid-cols-1`, `.lg:grid-cols-2` — Grid layouts for image/text
- `.rounded-2xl` — Rounded corners for images
- `.text-center` — Center alignment
- Typography: `.text-h*`, `.text-primary-500`, `.text-aeblack-600`

---

## 5. Filter Block

Filter blocks provide search and filtering interfaces for content (services, news, etc.).

### Filter Without Border

```html
<div class="lg:w-72 space-y-8">
  <!-- Search Section -->
  <section class="space-y-4">
    <h6 class="text-base font-semibold text-aeblack-800">Search and filter</h6>
    <div class="space-y-3">
      <div class="aegov-form-control">
        <div class="form-control-input">
          <input type="search" name="search" id="filter-search"
                 placeholder="Search for something">
          <span class="control-suffix">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <circle cx="112" cy="112" r="80" fill="none" stroke="currentColor"
                      stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></circle>
              <line x1="168.57" y1="168.57" x2="224" y2="224" fill="none"
                    stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Checkbox Filter Section -->
  <section class="space-y-4">
    <h6 class="text-base font-semibold text-aeblack-800">Directorate</h6>
    <div class="space-y-3">
      <div class="aegov-check-item">
        <input id="all-directorate" type="checkbox" value="all">
        <label for="all-directorate">All Directorate</label>
      </div>
      <div class="aegov-check-item">
        <input id="federal-crime" type="checkbox" value="federal-crime">
        <label for="federal-crime">Federal crime security</label>
      </div>
      <div class="aegov-check-item">
        <input id="vehicle-licensing" type="checkbox" value="vehicle-licensing">
        <label for="vehicle-licensing">Vehicle and driver licensing</label>
      </div>
      <div class="aegov-check-item">
        <input id="civil-defence" type="checkbox" value="civil-defence">
        <label for="civil-defence">Civil defence</label>
      </div>
    </div>
    <a href="#" class="text-sm text-primary-600 hover:text-primary-700 no-underline">
      See more
    </a>
  </section>

  <!-- Radio Filter Section -->
  <section class="space-y-4">
    <h6 class="text-base font-semibold text-aeblack-800">Beneficiary</h6>
    <div class="space-y-3">
      <div class="aegov-radio-item">
        <input id="all-beneficiaries" type="radio" name="beneficiary"
               value="all" checked>
        <label for="all-beneficiaries">All beneficiaries</label>
      </div>
      <div class="aegov-radio-item">
        <input id="citizen" type="radio" name="beneficiary" value="citizen">
        <label for="citizen">Citizen</label>
      </div>
      <div class="aegov-radio-item">
        <input id="resident" type="radio" name="beneficiary" value="resident">
        <label for="resident">Resident</label>
      </div>
      <div class="aegov-radio-item">
        <input id="visitor" type="radio" name="beneficiary" value="visitor">
        <label for="visitor">Visitor</label>
      </div>
    </div>
    <a href="#" class="text-sm text-primary-600 hover:text-primary-700 no-underline">
      See more
    </a>
  </section>

  <!-- Select Dropdown Section -->
  <section class="space-y-4">
    <h6 class="text-base font-semibold text-aeblack-800">Select an option</h6>
    <div class="space-y-3">
      <div class="aegov-form-control">
        <div class="form-control-input">
          <select id="country-filter" name="country">
            <option value="">Select country</option>
            <option value="uae">United Arab Emirates</option>
            <option value="india">India</option>
            <option value="uk">United Kingdom</option>
          </select>
        </div>
      </div>
    </div>
  </section>

  <!-- Range Slider Section -->
  <section class="space-y-4">
    <h6 class="text-base font-semibold text-aeblack-800">A range</h6>
    <div class="space-y-3">
      <div class="aegov-form-control">
        <div class="form-control-input flex items-center gap-2">
          <input type="range" min="0" max="100" name="range"
                 id="filter-range" value="20"
                 oninput="rangeOutput.innerHTML=this.value"
                 class="aegov-range flex-1">
          <output id="rangeOutput" class="w-[50px] text-sm text-end">20</output>
        </div>
      </div>
    </div>
  </section>
</div>
```

### Filter With Border

Wrap the same structure with border styling:

```html
<div class="lg:w-72 p-6 border border-primary-400 rounded-2xl space-y-8">
  <!-- Same sections as above -->
</div>
```

### Key Classes

- `.aegov-form-control`, `.form-control-input` — Form wrappers
- `.aegov-check-item`, `.aegov-radio-item` — Checkbox/radio wrappers
- `.control-suffix` — Icon container for search
- `.space-y-*` — Vertical spacing utilities
- `.lg:w-72` — Fixed width for sidebar
- `.border-primary-400`, `.rounded-2xl` — Border variant styling

---

## 6. Login Block

The Login block provides authentication interface with mandatory UAE Pass integration.

### UAE Pass Login

```html
<div class="login-block container py-12">
  <div class="max-w-md mx-auto">
    <div class="bg-whitely-50 p-6 md:p-8 lg:p-10 rounded-2xl border border-aeblack-100">
      <h2 class="text-h4 md:text-h3 mb-4 text-center">Login</h2>
      <p class="text-aeblack-600 text-center mb-8">
        Access government services securely with UAE Pass
      </p>

      <!-- UAE Pass Button (Primary) -->
      <a href="/auth/uae-pass"
         class="aegov-btn w-full justify-center mb-4 bg-[#1B5E20] hover:bg-[#145018] text-white">
        <svg class="w-6 h-6 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
          <!-- UAE Pass logo SVG -->
        </svg>
        Login with UAE Pass
      </a>

      <!-- Divider -->
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-aeblack-200"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="px-2 bg-whitely-50 text-aeblack-500">or</span>
        </div>
      </div>

      <!-- Alternative Login Form -->
      <form action="/auth/traditional" method="post" class="space-y-4">
        <div class="aegov-form-control">
          <label for="email">Email address</label>
          <div class="form-control-input">
            <input type="email" id="email" name="email" required
                   placeholder="your.email@example.com">
          </div>
        </div>

        <div class="aegov-form-control">
          <label for="password">Password</label>
          <div class="form-control-input">
            <input type="password" id="password" name="password" required
                   placeholder="Enter your password">
            <span class="control-suffix">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                <!-- Eye icon for show/hide password -->
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="aegov-check-item">
            <input id="remember" type="checkbox" value="1">
            <label for="remember">Remember me</label>
          </div>
          <a href="/forgot-password" class="text-sm text-primary-600 hover:text-primary-700">
            Forgot password?
          </a>
        </div>

        <button type="submit" class="aegov-btn w-full justify-center">
          Sign in
        </button>
      </form>

      <!-- Register Link -->
      <p class="mt-6 text-center text-sm text-aeblack-600">
        Don't have an account?
        <a href="/register" class="text-primary-600 hover:text-primary-700 font-medium">
          Register now
        </a>
      </p>
    </div>
  </div>
</div>
```

### Requirements

- **UAE Pass integration is mandatory** for government entities
- UAE Pass button must use official colors: `#1B5E20` (green)
- UAE Pass logo must be included
- Alternative login optional but UAE Pass must be primary
- Secure form handling required
- Password visibility toggle recommended

### Key Classes

- `.login-block` — Main login container
- `.bg-whitely-50` — Light background for form
- `.border-aeblack-100` — Subtle border
- `.w-full`, `.justify-center` — Full-width buttons
- Form components use standard AEGOV form classes

---

## 7. Newsletter Block

Newsletter blocks collect email subscriptions. Available in full-width, sidebar, and button-only variants.

### Full Width with Email Input

```html
<div class="aegov-newslette bg-aeblack-800 pt-10 md:pt-11 lg:pt-12 xl:pt-14 2xl:pt-16
            pb-8 md:pb-9 lg:pb-10 xl:pb-12 2xl:pb-14 px-4 md:px-6 lg:px-7 xl:px-9 2xl:px-11
            rounded-md md:rounded-lg xl:rounded-xl relative">
  <div class="md:w-7/12 xl:w-11/12 relative z-[1]">
    <div class="text-base leading-normal font-bold text-whitely-50/60 mb-2">
      Sign up for our newsletter
    </div>
    <div class="text-whitely-50 text-xl xl:text-2xl 2xl:text-3xl leading-normal
                font-bold font-inter rtl:font-alexandria mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
      To stay in touch with the latest information from the ministry
    </div>

    <form action="/newsletter/subscribe" method="post">
      <div class="flex">
        <div class="aegov-form-control 2xl:control-lg w-full md:w-72 xl:w-80">
          <div class="form-control-input 2xl:h-13 !rounded-e-none">
            <input type="email" id="newsletter-email" name="email" required
                   placeholder="Email address"
                   class="placeholder:!text-aeblack-500 !w-full">
          </div>
        </div>
        <button type="submit" class="aegov-btn btn-icon 2xl:btn-lg !rounded-s-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
               fill="#000000" viewBox="0 0 256 256">
            <path d="M227.32,28.68a16,16,0,0,0-15.66-4.08l-.15,0L19.57,82.84a16,16,0,0,0-2.49,29.8L102,154l41.3,84.87A15.86,15.86,0,0,0,157.74,248q.69,0,1.38-.06a15.88,15.88,0,0,0,14-11.51l58.2-191.94c0-.05,0-.1,0-.15A16,16,0,0,0,227.32,28.68ZM157.83,231.85l-.05.14,0-.07-40.06-82.3,48-48a8,8,0,0,0-11.31-11.31l-48,48L24.08,98.25l-.07,0,.14,0L216,40Z"></path>
          </svg>
          <span class="sr-only">Subscribe</span>
        </button>
      </div>
    </form>
  </div>
</div>
```

### Sidebar Variation

```html
<div class="aegov-newslette bg-aeblack-800 py-10 md:py-11 lg:py-12 xl:py-14 2xl:py-16
            px-4 2xl:px-6 rounded-md md:rounded-lg xl:rounded-xl relative">
  <div class="relative z-[1]">
    <div class="text-base leading-normal font-bold text-whitely-50/60 mb-2">
      Sign up for our newsletter
    </div>
    <div class="text-whitely-50 text-lg xl:text-xl leading-normal
                font-bold font-inter rtl:font-alexandria mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
      To stay in touch with the latest information from the ministry
    </div>

    <form action="/newsletter/subscribe" method="post">
      <div class="flex">
        <div class="aegov-form-control control-sm w-full flex">
          <div class="form-control-input !rounded-e-none w-full">
            <input type="email" id="newsletter-sidebar" name="email" required
                   placeholder="Email address"
                   class="placeholder:!text-aeblack-500 !w-full">
          </div>
        </div>
        <button type="submit" class="aegov-btn btn-icon btn-sm !rounded-s-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
               fill="#000000" viewBox="0 0 256 256">
            <!-- Send icon SVG -->
          </svg>
          <span class="sr-only">Subscribe</span>
        </button>
      </div>
    </form>
  </div>
</div>
```

### Button-Only Variation

```html
<div class="aegov-newslette bg-aeblack-800 pt-10 md:pt-11 lg:pt-12 xl:pt-14 2xl:pt-16
            pb-8 md:pb-9 lg:pb-10 xl:pb-12 2xl:pb-14 px-4 md:px-6 lg:px-7 xl:px-9 2xl:px-11
            rounded-md md:rounded-lg xl:rounded-xl relative">
  <div class="md:w-7/12 xl:w-11/12 relative z-[1]">
    <div class="text-base leading-normal font-bold text-whitely-50/60 mb-2">
      Sign up for our newsletter
    </div>
    <div class="text-whitely-50 text-xl xl:text-2xl 2xl:text-3xl leading-normal
                font-bold font-inter rtl:font-alexandria mb-6 lg:mb-7 xl:mb-8 2xl:mb-9">
      To stay in touch with the latest information from the ministry
    </div>
    <a href="/newsletter" class="aegov-btn btn-soft">Subscribe now</a>
  </div>
</div>
```

### Key Classes

- `.aegov-newslette` — Main newsletter container
- `.bg-aeblack-800` — Dark background
- `.text-whitely-50` — Light text color
- `.font-inter`, `.rtl:font-alexandria` — Font families
- `.control-sm`, `.2xl:control-lg` — Form size variants
- `.btn-icon`, `.btn-soft` — Button variants
- `.!rounded-e-none`, `.!rounded-s-none` — Joined input/button borders

---

## 8. Page Rating Block

Page rating blocks collect user feedback on content usefulness.

### Without Background

```html
<div class="page-rating-block container py-12">
  <div class="text-lg md:text-xl xl:text-2xl text-aeblack-950 font-bold
              font-inter leading-normal mb-3">
    Did you find this content useful?
  </div>
  <p class="text-aeblack-500 font-light mb-5 md:mb-7 xl:mb-9">
    You can help us improve by providing your feedback about your experience.
  </p>

  <div class="flex gap-6 flex-wrap">
    <button type="button" class="aegov-btn btn-outline"
            aria-label="Yes, this was useful" data-rating="positive">
      <svg aria-hidden="true" focusable="false"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M32,104H80a0,0,0,0,1,0,0V208a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V112A8,8,0,0,1,32,104Z"
              fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"/>
        <path d="M80,104l40-80a32,32,0,0,1,32,32V80h61.9a15.9,15.9,0,0,1,15.8,18l-12,96a16,16,0,0,1-15.8,14H80"
              fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"/>
      </svg>
      Yes
    </button>

    <button type="button" class="aegov-btn btn-outline"
            aria-label="No, this was not useful" data-rating="negative">
      <svg aria-hidden="true" focusable="false"
           xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
        <rect width="256" height="256" fill="none"/>
        <path d="M32,48H80a0,0,0,0,1,0,0V152a0,0,0,0,1,0,0H32a8,8,0,0,1-8-8V56A8,8,0,0,1,32,48Z"
              fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"/>
        <path d="M80,152l40,80a32,32,0,0,0,32-32V176h61.9a15.9,15.9,0,0,0,15.8-18l-12-96A16,16,0,0,0,201.9,48H80"
              fill="none" stroke="currentColor" stroke-linecap="round"
              stroke-linejoin="round" stroke-width="16"/>
      </svg>
      No
    </button>
  </div>
</div>
```

### With Primary Background

```html
<div class="page-rating-block container py-12">
  <div class="bg-primary-50 py-6 md:py-8 lg:py-10 xl:py-12 2xl:py-14
              px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12
              rounded-md md:rounded-lg xl:rounded-xl">
    <div class="text-lg md:text-xl xl:text-2xl text-aeblack-950 font-bold
                font-inter leading-normal mb-3">
      Did you find this content useful?
    </div>
    <p class="text-aeblack-500 font-light mb-5 md:mb-7 xl:mb-9">
      You can help us improve by providing your feedback about your experience.
    </p>

    <div class="flex gap-6 flex-wrap">
      <button type="button" class="aegov-btn btn-outline"
              aria-label="Yes, this was useful" data-rating="positive">
        <svg aria-hidden="true" focusable="false"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <!-- Thumbs up icon -->
        </svg>
        Yes
      </button>

      <button type="button" class="aegov-btn btn-outline"
              aria-label="No, this was not useful" data-rating="negative">
        <svg aria-hidden="true" focusable="false"
             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
          <!-- Thumbs down icon -->
        </svg>
        No
      </button>
    </div>
  </div>
</div>
```

### Key Classes

- `.page-rating-block` — Main rating container
- `.bg-primary-50` — Background variant
- `.text-aeblack-950` — Heading color
- `.text-aeblack-500` — Description color
- `.font-inter`, `.font-light`, `.font-bold` — Typography
- `.btn-outline` — Button style
- `.flex`, `.gap-6`, `.flex-wrap` — Layout utilities

---

## 9. Team Block

Team blocks showcase team members/leadership with images and titles.

### 4-Column Layout

```html
<div class="team-block container py-12">
  <h2 class="text-h4 md:text-h3 xl:text-h2 mb-8 md:mb-10 lg:mb-12">Our leadership</h2>

  <div class="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 lg:gap-8 xl:gap-10">
    <!-- Team Member Card -->
    <div>
      <img src="/img/team/member-1.jpg" alt="H.E. Mohammed Al Mansouri"
           class="rounded md:rounded-lg xl:rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          H.E. Mohammed Al Mansouri
        </div>
        <div class="text-sm xl:text-base text-aeblack-600">
          Chief Executive Officer
        </div>
      </div>
    </div>

    <!-- Additional Team Members -->
    <div>
      <img src="/img/team/member-2.jpg" alt="Dr. Fatima Al Kaabi"
           class="rounded md:rounded-lg xl:rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Dr. Fatima Al Kaabi
        </div>
        <div class="text-sm xl:text-base text-aeblack-600">
          Director of Operations
        </div>
      </div>
    </div>

    <div>
      <img src="/img/team/member-3.jpg" alt="Ahmed Al Suwaidi"
           class="rounded md:rounded-lg xl:rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Ahmed Al Suwaidi
        </div>
        <div class="text-sm xl:text-base text-aeblack-600">
          Head of Digital Transformation
        </div>
      </div>
    </div>

    <div>
      <img src="/img/team/member-4.jpg" alt="Sara Al Hashimi"
           class="rounded md:rounded-lg xl:rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Sara Al Hashimi
        </div>
        <div class="text-sm xl:text-base text-aeblack-600">
          Director of Communications
        </div>
      </div>
    </div>
  </div>
</div>
```

### 3-Column Layout

```html
<div class="team-block container py-12">
  <h2 class="text-h4 md:text-h3 xl:text-h2 mb-8 md:mb-10 lg:mb-12">Our team</h2>

  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 lg:gap-8 xl:gap-10">
    <!-- Team Member Card -->
    <div>
      <img src="/img/team/member-1.jpg" alt="Mohammed Al Mansouri"
           class="rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Mohammed Al Mansouri
        </div>
        <div class="text-base text-aeblack-600">
          Chief Executive Officer
        </div>
      </div>
    </div>

    <!-- Additional Team Members -->
    <div>
      <img src="/img/team/member-2.jpg" alt="Fatima Al Kaabi"
           class="rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Fatima Al Kaabi
        </div>
        <div class="text-base text-aeblack-600">
          Director of Operations
        </div>
      </div>
    </div>

    <div>
      <img src="/img/team/member-3.jpg" alt="Ahmed Al Suwaidi"
           class="rounded-xl w-full aspect-square object-cover mb-4">
      <div class="space-y-3 p-4 lg:p-5 xl:p-6 text-center">
        <div class="text-lg text-aeblack-800 font-medium">
          Ahmed Al Suwaidi
        </div>
        <div class="text-base text-aeblack-600">
          Head of Digital Transformation
        </div>
      </div>
    </div>
  </div>
</div>
```

### Key Classes

- `.team-block` — Main team container
- `.grid`, `.grid-cols-2`, `.lg:grid-cols-3`, `.lg:grid-cols-4` — Responsive grid
- `.aspect-square` — Square aspect ratio for images
- `.object-cover` — Image cropping
- `.rounded-xl` — Rounded corners
- `.space-y-3` — Vertical spacing in content
- `.text-center` — Centered text
- `.text-aeblack-800`, `.text-aeblack-600` — Text colors

---

## Summary

All 9 AEGOV blocks are now fully documented with complete HTML structures, variants, and styling patterns. These blocks combine multiple components to create complete, reusable page sections that follow UAE Government design standards.

### Key Takeaways

1. **Blocks are sections** — They combine multiple components
2. **Responsive by default** — All use Tailwind breakpoints
3. **Accessibility built-in** — ARIA attributes, semantic HTML
4. **RTL support** — Ready for Arabic/English
5. **Government standards** — Follow UAE visual identity

### Dependencies

- **Slick Slider** — Required for Hero slider variants
- **AEGOV JavaScript** — For accordions, dropdowns, modals
- **Tailwind CSS** — All styling uses Tailwind utilities
- **AEGOV Components** — Blocks use component classes

---

**Documentation completed:** 2025-11-17
**Source:** https://designsystem.gov.ae/docs/blocks/
**Next:** Create React component wrappers and conversion guide
