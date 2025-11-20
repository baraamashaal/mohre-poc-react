# Team Block
**Docs**: https://designsystem.gov.ae/docs/blocks/team
**Purpose**: Showcase organization members with clean, minimalistic design
**JS Required**: ❌ No

## Dependent Components
- Images - Team member photographs
- Typography - Names and designations
- [Card](../components/card.md) - Optional card wrapper for team members

## Description

The Team block presents individual team members with a clean, minimalistic design. Each member displays an image, name, and designation in a card-based layout. Displaying a team on the website is optional, however recommended to add key personnel on a leadership page.

## Key Requirements

**Image Standards:**
- Consistent background patterns across all images
- Front-facing, professional photographs
- Members must look directly at the camera
- Square aspect ratio maintained with `aspect-square`
- Rounded corners for visual softness

**Text Elements:**
- Full name is mandatory
- Designation/title is mandatory
- Optional: individual profile pages accessible via URL

## Layout Variations

### 1. 4-Column Grid
Uses responsive classes: `grid-cols-2 lg:grid-cols-4` with proportional gaps (5px to 10px) scaling across breakpoints.

### 2. 3-Column Grid
Responsive structure: `sm:grid-cols-2 lg:grid-cols-3` with matching gap scaling.

## Examples

### Example 1: Team 4-Column Grid

Four-column responsive grid layout for team members.

```html
<div class="py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-h4 md:text-h3 lg:text-h2 font-bold text-gray-900 mb-4">
        Meet Our Team
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Dedicated professionals committed to excellence in public service.
      </p>
    </div>

    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/member-1.jpg" alt="Ahmed Al Mansoori" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Ahmed Al Mansoori
        </h3>
        <p class="text-sm text-gray-600">
          Director General
        </p>
      </div>

      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/member-2.jpg" alt="Fatima Al Hashemi" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Fatima Al Hashemi
        </h3>
        <p class="text-sm text-gray-600">
          Deputy Director
        </p>
      </div>

      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/member-3.jpg" alt="Mohammed Al Zaabi" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Mohammed Al Zaabi
        </h3>
        <p class="text-sm text-gray-600">
          Head of Operations
        </p>
      </div>

      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/member-4.jpg" alt="Mariam Al Suwaidi" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Mariam Al Suwaidi
        </h3>
        <p class="text-sm text-gray-600">
          Chief Strategy Officer
        </p>
      </div>
    </div>
  </div>
</div>
```

**Note:** 4-column grid with responsive breakpoints: 2 columns mobile, 4 columns desktop.

### Example 2: Team 3-Column Grid

Three-column responsive grid layout.

```html
<div class="py-12 lg:py-16">
  <div class="container mx-auto px-4">
    <div class="text-center mb-12">
      <h2 class="text-h4 md:text-h3 lg:text-h2 font-bold text-gray-900 mb-4">
        Leadership Team
      </h2>
      <p class="text-lg text-gray-600 max-w-2xl mx-auto">
        Experienced leaders driving our mission forward.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/leader-1.jpg" alt="Khalid Al Nuaimi" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Khalid Al Nuaimi
        </h3>
        <p class="text-sm text-gray-600">
          Chief Executive Officer
        </p>
      </div>

      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/leader-2.jpg" alt="Noura Al Mazrouei" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Noura Al Mazrouei
        </h3>
        <p class="text-sm text-gray-600">
          Chief Financial Officer
        </p>
      </div>

      <div class="text-center">
        <div class="aspect-square overflow-hidden rounded-2xl mb-4">
          <img src="/img/team/leader-3.jpg" alt="Salem Al Falasi" class="w-full h-full object-cover">
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-1">
          Salem Al Falasi
        </h3>
        <p class="text-sm text-gray-600">
          Chief Technology Officer
        </p>
      </div>
    </div>
  </div>
</div>
```

**Note:** 3-column grid: 1 column mobile, 2 columns tablet, 3 columns desktop.

### Example 3: Team Member with Link

Individual team member card with link to profile page.

```html
<a href="/team/ahmed-al-mansoori" class="text-center block hover:opacity-80 transition-opacity">
  <div class="aspect-square overflow-hidden rounded-2xl mb-4">
    <img src="/img/team/member-1.jpg" alt="Ahmed Al Mansoori" class="w-full h-full object-cover">
  </div>
  <h3 class="text-lg font-semibold text-gray-900 mb-1">
    Ahmed Al Mansoori
  </h3>
  <p class="text-sm text-gray-600">
    Director General
  </p>
</a>
```

**Note:** Wrapping in anchor tag makes entire card clickable with hover effect.

## Notes

**Image Guidelines:**
- Use consistent background patterns across all team member photos
- Ensure professional, front-facing photographs
- Members should look directly at camera for engagement
- Maintain square aspect ratio (`aspect-square`) for consistency
- Apply rounded corners (`rounded-2xl`) for visual softness
- Use `object-cover` to fill container while maintaining aspect ratio

**Typography:**
- Name: Larger, darker weight (`text-lg font-semibold text-gray-900`)
- Designation: Smaller, lighter color (`text-sm text-gray-600`)
- Centered alignment for clean presentation

**Responsive Grid Behavior:**
- **4-Column**: `grid-cols-2 lg:grid-cols-4`
  - Mobile: 2 columns
  - Desktop (lg): 4 columns
  - Gap: `gap-4 md:gap-6 lg:gap-8`

- **3-Column**: `sm:grid-cols-2 lg:grid-cols-3`
  - Mobile: 1 column
  - Tablet (sm): 2 columns
  - Desktop (lg): 3 columns

**Accessibility:**
- All images include descriptive `alt` attributes with member names
- Sufficient color contrast between text and background
- If using links, entire card is clickable for better UX
- Keyboard navigation supported for linked profiles

**Best Practices:**
- Limit team showcase to key personnel (leadership page)
- Use consistent image dimensions and quality
- Include professional titles/designations
- Consider linking to detailed bio pages
- Update photos regularly to maintain current representation
- Order members by hierarchy or alphabetically

**Optional Enhancements:**
- Add social media links
- Include brief bio snippets
- Add hover effects for interactivity
- Display contact information
- Show credentials or certifications
