# Hero Block
**Docs**: https://designsystem.gov.ae/docs/blocks/hero
**Purpose**: Primary method to deliver a visual message above the fold
**JS Required**: ⚠️ Optional (for slider functionality - Slick JS or Embla JS)

## Dependent Components
- Images - Background imagery with responsive picture elements
- [Button](../components/button.md) - Call-to-action buttons
- Typography - Headings and descriptive text
- SVG Icons - Navigation arrows, play/pause controls
- Slider Libraries - Slick JS (jQuery) or Embla JS (vanilla JS)

## Description

The Hero block is a prominent section positioned at the top of web pages to deliver captivating visual messages above the fold. It serves as the primary focal point for capturing visitor attention and conveying key information or brand identity.

## Key Characteristics

**Primary Elements:**
- Eye-catching imagery
- Concise text content
- Compelling calls to action

**Placement Flexibility:**
The hero banner can be placed creatively on any page. It may not be the first element after the header on certain pages.

## Technical Requirements

### Image Specifications
- Banner cannot exceed 500px height on largest desktop sizes
- Must use `<picture>` HTML attribute and `srcset` for responsive variations
- Landscape orientation on desktops (width > height)
- Portrait orientation on mobile devices < 640px viewport (height > width)
- Implement lazy loading
- Use `object-cover` for consistent image scaling

### Slider Constraints
- Maximum 4 slides per hero element
- Avoid rapid slide transitions to preserve First Contentful Paint (FCP) for SEO performance

## Slide Types

**Type 1: Solid Background with Right-Aligned Creative**
- Text and call-to-action placed on slide
- Creative element positioned on right

**Type 2: Full-Width Creative**
- Text embedded within creative element
- Entire slide becomes clickable

## Implementation Variations

### 1. Hero Full Width (with Slick JS)
Uses jQuery-based Slick Slider library with autoplay functionality, play/pause controls, dots, and arrow navigation.

### 2. Hero Split (with Slick JS)
Two-column layout with content on left, imagery on right. Supports manual slide control with optional autoplay.

### 3. Hero Full Width (with Embla JS)
Dependency-free Embla Carousel implementation. Requires CDN inclusion for Embla Carousel and autoplay plugin.

### 4. Hero Static
Non-sliding variant featuring header text and card grid layout below hero section.

## Examples

### Example 1: Static Hero (No Slider)

Simple hero block without slider functionality.

```html
<div class="relative bg-primary-500 overflow-hidden">
  <div class="mx-auto max-w-7xl">
    <div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
        <div class="sm:text-center lg:text-left">
          <h1 class="text-h4 tracking-tight text-white sm:text-h3 md:text-h2 lg:text-h1">
            Welcome to Our Service
          </h1>
          <p class="mt-3 text-base text-primary-50 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Providing excellent government services to enhance quality of life for all citizens and residents.
          </p>
          <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start gap-4">
            <button class="aegov-btn btn-secondary max-lg:btn-sm">
              Get started
            </button>
            <button class="aegov-btn btn-outline btn-whitely max-lg:btn-sm">
              Learn more
            </button>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
         src="/img/hero-image.jpg"
         alt="Government Services">
  </div>
</div>
```

**Note:** Static hero without slider, featuring responsive layout with image on right for desktop, stacked for mobile.

### Example 2: Hero Full Width with Slick Slider

Hero with automatic sliding using Slick JS library.

```html
<div class="hero-slider">
  <div class="hero-slide relative bg-primary-500 overflow-hidden">
    <div class="absolute inset-0">
      <picture>
        <source media="(max-width: 640px)" srcset="/img/hero-mobile-1.jpg">
        <source media="(min-width: 641px)" srcset="/img/hero-desktop-1.jpg">
        <img class="h-full w-full object-cover" src="/img/hero-desktop-1.jpg" alt="Slide 1" loading="lazy">
      </picture>
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="max-w-2xl">
        <h2 class="text-h4 font-bold tracking-tight text-white sm:text-h3 md:text-h2">
          Digital Government Services
        </h2>
        <p class="mt-6 text-lg leading-8 text-primary-50">
          Access all government services online, anytime, anywhere.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <button class="aegov-btn btn-secondary max-lg:btn-sm">
            Explore services
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="hero-slide relative bg-primary-600 overflow-hidden">
    <div class="absolute inset-0">
      <picture>
        <source media="(max-width: 640px)" srcset="/img/hero-mobile-2.jpg">
        <source media="(min-width: 641px)" srcset="/img/hero-desktop-2.jpg">
        <img class="h-full w-full object-cover" src="/img/hero-desktop-2.jpg" alt="Slide 2" loading="lazy">
      </picture>
    </div>
    <div class="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
      <div class="max-w-2xl">
        <h2 class="text-h4 font-bold tracking-tight text-white sm:text-h3 md:text-h2">
          Innovation and Excellence
        </h2>
        <p class="mt-6 text-lg leading-8 text-primary-50">
          Leading the way in digital transformation and service delivery.
        </p>
        <div class="mt-10 flex items-center gap-x-6">
          <button class="aegov-btn btn-secondary max-lg:btn-sm">
            Learn more
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Slider Controls -->
<div class="hero-controls flex items-center justify-center lg:justify-start gap-4 px-4 py-6 lg:absolute lg:bottom-10 lg:left-10">
  <button class="slider-prev" aria-label="Previous slide">
    <svg class="w-6 h-6 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>
  <button class="slider-play-pause" aria-label="Play/Pause">
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
    </svg>
  </button>
  <button class="slider-next" aria-label="Next slide">
    <svg class="w-6 h-6 rtl:-scale-x-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>
  <div class="slider-dots flex gap-2">
    <!-- Dots rendered by Slick JS -->
  </div>
</div>
```

**Note:** Requires Slick JS library initialization. Use maximum 4 slides. Includes play/pause, arrows, and dot navigation.

### Example 3: Hero Split Layout

Two-column hero with content on left, imagery on right.

```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center py-12 lg:py-24">
  <div class="px-4 sm:px-6 lg:px-8">
    <h1 class="text-h4 font-bold tracking-tight text-primary-600 sm:text-h3 md:text-h2">
      Empowering Our Community
    </h1>
    <p class="mt-6 text-lg leading-8 text-gray-600">
      Discover innovative solutions designed to improve your experience with government services.
    </p>
    <div class="mt-10 flex items-center gap-x-6">
      <button class="aegov-btn btn-secondary max-lg:btn-sm">
        Get started
      </button>
      <button class="aegov-btn btn-link btn-secondary max-lg:btn-sm">
        Learn more
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </div>
  </div>
  <div class="relative h-64 sm:h-80 lg:h-96">
    <picture>
      <source media="(max-width: 640px)" srcset="/img/hero-split-mobile.jpg">
      <source media="(min-width: 641px)" srcset="/img/hero-split-desktop.jpg">
      <img class="h-full w-full object-cover rounded-2xl"
           src="/img/hero-split-desktop.jpg"
           alt="Community Services"
           loading="lazy">
    </picture>
  </div>
</div>
```

**Note:** Split layout with responsive grid. Content and image side-by-side on desktop, stacked on mobile.

### Example 4: Hero Full Width with Embla JS

Full-width hero carousel using Embla Carousel library (dependency-free alternative to Slick JS).

```html
<div class="aegov-hero hero-embla hero-embla-full-width relative">
  <div class="hero-full-width">
    <div class="hero-viewport">
      <div class="hero-container">
        <div class="hero-slide">
          <div class="relative w-full">
            <picture>
              <source media="(min-width:650px)" srcset="/img/hero-desktop-1.jpg" />
              <source media="(min-width:465px)" srcset="/img/hero-mobile-1.jpg" />
              <img src="/img/hero-mobile-1.jpg" alt="slider image" />
            </picture>
            <div class="hero-hero-title-wrap">
              <div class="hero-hero-title">
                Ushering a new era of interaction
              </div>
              <a href="" class="max-lg:btn-sm aegov-btn btn-secondary">Learn more</a>
            </div>
          </div>
        </div>
        <div class="hero-slide">
          <a onclick="return false;" href="#" class="block" tabindex="0">
            <picture>
              <source media="(min-width:650px)" srcset="/img/hero-desktop-2.jpg" />
              <source media="(min-width:465px)" srcset="/img/hero-mobile-2.jpg" />
              <img src="/img/hero-mobile-2.jpg" alt="slider image" />
            </picture>
          </a>
        </div>
        <div class="hero-slide">
          <div class="relative w-full">
            <picture>
              <source media="(min-width:650px)" srcset="/img/hero-desktop-3.jpg" />
              <source media="(min-width:465px)" srcset="/img/hero-mobile-3.jpg" />
              <img src="/img/hero-mobile-3.jpg" alt="slider image" />
            </picture>
            <div class="hero-hero-title-wrap">
              <div class="hero-hero-title">
                Innovation and Excellence
              </div>
              <a href="" class="max-lg:btn-sm aegov-btn btn-secondary">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-controls">
      <div class="hero-buttons">
        <button class="hero-button hero-prev" type="button" disabled="">
          <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </button>
        <button class="hero-embla-play-full-width [&.start-sliding_.play-icon]:block [&.start-sliding_.pause-icon]:hidden * [&.stop-sliding_.pause-icon]:block [&.stop-sliding_.play-icon]:hidden" type="button">
          <svg class="play-icon text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"></path>
          </svg>
          <svg class="pause-icon text-aeblack-800 hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
        <button class="hero-button hero-next" type="button" disabled="">
          <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </button>
      </div>
      <div class="hero-dots"></div>
    </div>
  </div>
</div>
```

**Note:** Requires Embla Carousel library (dependency-free). Includes previous/next buttons, play/pause control with icon toggle, and dot navigation. Maximum 4 slides recommended.

### Example 5: Hero Split with Embla JS

Split-layout hero carousel using Embla Carousel with content on left and images on right.

```html
<div class="aegov-hero hero-embla hero-embla-split relative">
  <div class="hero-split">
    <div class="hero-viewport">
      <div class="hero-container">
        <div class="hero-slide">
          <div class="hero-row">
            <div class="hero-col-left">
              <div class="hero-col-content">
                <div class="hero-title">Seniors retirement pension in United Arab Emirates</div>
                <p class="hero-description">Calculating retirement pension in accordance with Federal law No. (57) of 2023 explained</p>
                <a href="" class="max-lg:btn-sm aegov-btn btn-secondary">Learn more</a>
              </div>
            </div>
            <div class="hero-col-right has-ratio-image">
              <picture>
                <source media="(min-width:650px)" srcset="/img/split-slider-image.jpg" />
                <source media="(min-width:465px)" srcset="/img/split-slider-image.jpg" />
                <img src="/img/split-slider-image.jpg" alt="slider image" />
              </picture>
            </div>
          </div>
        </div>
        <div class="hero-slide">
          <div class="hero-row">
            <div class="hero-col-left">
              <div class="hero-col-content">
                <div class="hero-title">Innovation in Government Services</div>
                <p class="hero-description">Transforming public services through digital innovation and excellence</p>
                <a href="" class="max-lg:btn-sm aegov-btn btn-secondary">Discover more</a>
              </div>
            </div>
            <div class="hero-col-right has-ratio-image">
              <picture>
                <source media="(min-width:650px)" srcset="/img/split-slider-image-2.jpg" />
                <source media="(min-width:465px)" srcset="/img/split-slider-image-2.jpg" />
                <img src="/img/split-slider-image-2.jpg" alt="slider image" />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="hero-controls">
      <div class="hero-buttons">
        <button class="hero-button hero-prev" type="button" disabled="">
          <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M165.66,202.34a8,8,0,0,1-11.32,11.32l-80-80a8,8,0,0,1,0-11.32l80-80a8,8,0,0,1,11.32,11.32L91.31,128Z"></path>
          </svg>
        </button>
        <button class="hero-embla-play-split [&.start-sliding_.play-icon]:block [&.start-sliding_.pause-icon]:hidden * [&.stop-sliding_.pause-icon]:block [&.stop-sliding_.play-icon]:hidden" type="button">
          <svg class="play-icon text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm48.24-94.78-64-40A8,8,0,0,0,100,88v80a8,8,0,0,0,12.24,6.78l64-40a8,8,0,0,0,0-13.56ZM116,153.57V102.43L156.91,128Z"></path>
          </svg>
          <svg class="pause-icon text-aeblack-800 hidden" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM112,96v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Zm48,0v64a8,8,0,0,1-16,0V96a8,8,0,0,1,16,0Z"></path>
          </svg>
        </button>
        <button class="hero-button hero-next" type="button" disabled="">
          <svg class="rtl:-scale-x-100 text-aeblack-800" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256">
            <path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path>
          </svg>
        </button>
      </div>
      <div class="hero-dots"></div>
    </div>
  </div>
</div>
```

**Note:** Split layout using Embla Carousel. Content on left (`hero-col-left`) with title, description, and CTA button. Images on right (`hero-col-right`) with responsive picture elements.

## Notes

**Responsive Behavior:**
- **Mobile (<640px)**: Portrait-oriented images, single-column layout, smaller typography (h6 → h4), smaller buttons
- **Tablet (640px-1024px)**: Intermediate sizing, may maintain two-column layout
- **Desktop (>1024px)**: Landscape images, full two-column layouts, largest typography (h2 → h1), full-size buttons
- **Control Positioning**: Below hero on mobile (centered), bottom-left on desktop (xl breakpoint)

**Typography Scaling:**
- Text sizing reduces via typography scale: h6 → h4 → h2 → h1 across breakpoints
- Button sizing adjusts with `max-lg:btn-sm` utility

**Image Best Practices:**
- Use `<picture>` element with `srcset` for responsive images
- Implement lazy loading for performance
- Banner height max 500px on largest screens
- Use clear backgrounds and solid colors for text readability
- Landscape on desktop, portrait on mobile < 640px

**Slider Performance:**
- Maximum 4 slides to preserve SEO and FCP
- Avoid rapid transitions
- Provide play/pause controls for accessibility

**Accessibility Features:**
- SVG controls include `rtl:-scale-x-100` for right-to-left language support
- Navigation buttons clearly labeled as previous/next
- Play/pause button states managed via class toggles
- Alt text required for all images

**JavaScript Libraries:**
- **Slick JS**: jQuery-based, feature-rich slider
- **Embla JS**: Dependency-free, lightweight alternative
- Both support autoplay, manual navigation, and responsive behavior
