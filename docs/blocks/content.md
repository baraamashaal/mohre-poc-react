# Content Block
**Docs**: https://designsystem.gov.ae/docs/blocks/content
**Purpose**: Sections used on web pages to encapsulate content styles
**JS Required**: ❌ No

## Dependent Components
- Typography - Heading classes (text-h2, text-h3, text-h4, text-h5, text-h6), paragraph styles
- [Button](../components/button.md) - CTA buttons with variants and sizes
- Images - Standard img elements with alt text
- SVG Icons - For link indicators and visual elements

## Description

The Content block provides flexible layouts for presenting information within website templates using text, media, or hybrid combinations. It serves pages like about sections, privacy policies, blog articles, and other content-heavy areas.

## Block Types

### 1. Text-Based Content Blocks
Content blocks focused on textual information with optional sidebar navigation or full-width layouts.

### 2. Media-Based Content Blocks
Layouts pairing imagery with text content side-by-side, supporting left or right image placement.

### 3. Call-to-Action Blocks
Blocks designed to grab attention with headings and action buttons, available in left or center alignment.

## Examples

### Example 1: Text Content (Full-Screen Layout)

Full-screen content blocks span the entire page width and automatically divide content into two columns on larger screens. Best used when content has no other headings within it.

```html
<div class="text-base font-semibold leading-7 text-primary-500 mb-2">
  Sustainability at the core
</div>
<h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
  A better sustainable workflow
</h2>
<div class="columns-1 lg:columns-2 gap-10">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
  <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
```

**Note:** Uses `columns-1 lg:columns-2` to auto-divide text into two columns on larger screens.

### Example 2: Content with Fixed Width

Presents text-only information with optional sidebar navigation using a 60% width container.

```html
<div class="w-3/5">
  <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
    Our Mission
  </div>
  <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
    Building a better future
  </h2>
  <p class="text-lg leading-8 text-gray-600">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  </p>
</div>
```

**Note:** Container width set to `w-3/5` (60%) for main content.

### Example 3: Media + Content (Image Left)

Pairs imagery with text content side-by-side, with the image on the left.

```html
<div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
  <div class="lg:pe-4">
    <div class="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8 pt-64 md:pt-80 shadow-xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
      <img class="absolute inset-0 h-full w-full object-cover" src="/img/example.jpg" alt="Description of image">
    </div>
  </div>
  <div>
    <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
      Our approach
    </div>
    <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
      Innovation through technology
    </h2>
    <p class="text-lg leading-8 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
```

**Note:** Image height controlled via container padding: `pt-80` (tablets/desktop), `pt-64` (mobile). Image uses `object-cover` to maintain proportions.

### Example 4: Media + Content (Image Right, Mobile Stack)

Places media on right side for desktop viewers, stacks vertically on mobile devices.

```html
<div class="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
  <div class="lg:ps-4 lg:order-last">
    <div class="relative overflow-hidden rounded-2xl bg-gray-900 px-6 pb-8 pt-64 md:pt-80 shadow-xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 lg:ms-auto">
      <img class="absolute inset-0 h-full w-full object-cover" src="/img/example.jpg" alt="Description of image">
    </div>
  </div>
  <div>
    <div class="text-base font-semibold leading-7 text-primary-500 mb-2">
      Our values
    </div>
    <h2 class="text-h4 md:text-h3 xl:text-h2 mb-4 xl:mb-6 leading-normal">
      Excellence in every detail
    </h2>
    <p class="text-lg leading-8 text-gray-600">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  </div>
</div>
```

**Note:** Uses `lg:order-last` to reorder elements responsively, placing image on right for desktop.

### Example 5: Left-Aligned Call-to-Action

Heading plus action buttons, useful for grabbing attention.

```html
<div class="mx-auto max-w-7xl px-6 py-24 sm:py-32">
  <h2 class="text-h4 lg:text-h3 xl:text-h3 text-primary-500 tracking-tight">
    Stay connected.<br>Download our mobile app.
  </h2>
  <div class="mt-10 flex items-center gap-x-6">
    <button class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-secondary">
      Download now
    </button>
    <button class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-link btn-secondary">
      Learn more
      <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
      </svg>
    </button>
  </div>
</div>
```

**Note:** Buttons use responsive sizing classes (`btn-sm lg:btn-base 2xl:btn-lg`).

### Example 6: Center-Aligned Call-to-Action

Centered heading, descriptive text, and button group with max-width constraint for readability.

```html
<div class="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
  <div class="mx-auto max-w-2xl text-center">
    <h2 class="text-h4 lg:text-h3 xl:text-h3 text-primary-500 tracking-tight">
      Stay connected.<br>Download our mobile app.
    </h2>
    <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
      Access our services on the go with our mobile application. Available for iOS and Android devices.
    </p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <button class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-secondary">
        Download now
      </button>
      <button class="aegov-btn btn-sm lg:btn-base 2xl:btn-lg btn-link btn-secondary">
        Learn more
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
        </svg>
      </button>
    </div>
  </div>
</div>
```

**Note:** Uses `max-w-2xl` constraint on container and `max-w-xl` on paragraph for optimal readability.

## Notes

**Image Aspect Ratio Control:**
- Image containers use padding-top for aspect ratio control
- Adjust `pt-64`/`pt-80` values to change image heights
- `object-cover` ensures images fill containers while maintaining proportions

**Layout Structure:**
- Column layouts use TailwindCSS grid utilities (`grid-cols-1`, `lg:grid-cols-2`)
- Full-screen blocks auto-divide text using `columns-1 lg:columns-2`
- Mobile-first approach: desktop-only features use `lg:` prefix

**Responsive Spacing:**
- Margins scale with breakpoints (`mb-4 xl:mb-6`)
- Padding adapts for different screen sizes (`py-24 sm:py-32`)

**Responsive Behavior:**
- **Mobile**: Single-column layouts, smaller typography, reduced padding
- **Tablet (md:)**: Intermediate text sizes, two-column text blocks
- **Desktop (lg:)**: Two-column grids, full-width CTAs
- **XL (xl:)**: Largest typography scales, optimized spacing
