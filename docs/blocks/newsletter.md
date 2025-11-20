# Newsletter Block
**Docs**: https://designsystem.gov.ae/docs/blocks/newsletter
**Purpose**: Collects email subscriptions from website visitors
**JS Required**: ⚠️ Form submission logic required

## Dependent Components
- [Input](../components/input.md) - Email address input field
- [Button](../components/button.md) - Submit button or subscribe link
- SVG Icons - Paper plane decorative graphics, send icon

## Description

The newsletter block is a UI component designed to collect email subscriptions from website visitors, enabling direct communication with audiences through regular updates and content delivery. It serves as an effective tool for websites to gather valuable information and data from users who wish to subscribe to content delivered via email.

## Critical Requirements

**Backend Integration:**
- This is a UI-only element—it does not connect to backend email collection systems
- Email validation must occur before data insertion into backend systems
- Consider implementing confirmation emails to verify subscriber intent
- Organize collected emails into preference-based lists

## Layout Variations

### 1. Full-Width Variation
- Spans larger content areas
- Includes prominent heading and descriptive text
- Features integrated email input field with submit button
- Decorative paper plane SVG graphics in the background

### 2. Sidebar Variation
- Compact design for narrower spaces (320px)
- Smaller typography and padding adjustments
- Identical functionality with space-optimized styling

### 3. Button-Only Variant
Both full-width and sidebar versions include alternatives using a standalone "Subscribe now" link button instead of an input field.

## Examples

### Example 1: Full-Width Newsletter with Input

Newsletter block spanning larger content areas with email input.

```html
<div class="aegov-newsletter bg-aeblack-800 text-whitely-50 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 md:py-16 lg:py-20 rounded-2xl relative overflow-hidden">
  <!-- Decorative Background SVGs -->
  <svg class="absolute top-0 right-0 w-64 h-64 opacity-10" viewBox="0 0 200 200" fill="currentColor">
    <path d="M100 10l30 70h75l-60 45 23 75-68-50-68 50 23-75-60-45h75z"/>
  </svg>
  <svg class="absolute bottom-0 left-0 w-48 h-48 opacity-10" viewBox="0 0 200 200" fill="currentColor">
    <path d="M100 10l30 70h75l-60 45 23 75-68-50-68 50 23-75-60-45h75z"/>
  </svg>

  <div class="relative z-10 max-w-3xl mx-auto text-center">
    <h2 class="text-h5 md:text-h4 lg:text-h3 font-bold mb-4">
      Subscribe to our newsletter
    </h2>
    <p class="text-base md:text-lg mb-8 text-whitely-100">
      Stay updated with the latest news, announcements, and exclusive content delivered directly to your inbox.
    </p>
    <form action="#" method="post" class="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
      <div class="aegov-form-control flex-1">
        <input type="email" name="email" placeholder="Email address" required
               class="w-full bg-white text-gray-900">
      </div>
      <button type="submit" class="aegov-btn btn-secondary">
        Subscribe
        <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
        </svg>
      </button>
    </form>
  </div>
</div>
```

**Note:** Full-width variation with decorative background elements and responsive padding.

### Example 2: Sidebar Newsletter Compact

Compact newsletter design for narrower sidebar spaces.

```html
<div class="aegov-newsletter bg-aeblack-800 text-whitely-50 p-6 rounded-2xl w-80">
  <h3 class="text-h6 md:text-h5 font-bold mb-3">
    Newsletter
  </h3>
  <p class="text-sm mb-6 text-whitely-100">
    Get the latest updates delivered to your inbox.
  </p>
  <form action="#" method="post" class="space-y-4">
    <div class="aegov-form-control">
      <input type="email" name="email" placeholder="Email address" required
             class="w-full bg-white text-gray-900">
    </div>
    <button type="submit" class="aegov-btn btn-secondary w-full">
      Subscribe
    </button>
  </form>
</div>
```

**Note:** Compact 320px width design optimized for sidebar placement with smaller typography.

### Example 3: Button-Only Newsletter (Full-Width)

Newsletter block using standalone subscribe button instead of input field.

```html
<div class="aegov-newsletter bg-aeblack-800 text-whitely-50 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-12 md:py-16 lg:py-20 rounded-2xl relative overflow-hidden">
  <div class="relative z-10 max-w-3xl mx-auto text-center">
    <h2 class="text-h5 md:text-h4 lg:text-h3 font-bold mb-4">
      Subscribe to our newsletter
    </h2>
    <p class="text-base md:text-lg mb-8 text-whitely-100">
      Stay informed about our latest services, announcements, and updates.
    </p>
    <a href="/subscribe" class="aegov-btn btn-secondary">
      Subscribe now
    </a>
  </div>
</div>
```

**Note:** Button-only variant linking to dedicated subscription page.

### Example 4: Sidebar Button-Only Variant

Compact sidebar version with subscribe button.

```html
<div class="aegov-newsletter bg-aeblack-800 text-whitely-50 p-6 rounded-2xl w-80">
  <h3 class="text-h6 md:text-h5 font-bold mb-3">
    Stay Updated
  </h3>
  <p class="text-sm mb-6 text-whitely-100">
    Subscribe for news and updates.
  </p>
  <a href="/subscribe" class="aegov-btn btn-secondary w-full">
    Subscribe now
  </a>
</div>
```

**Note:** Compact button-only version for sidebar placement.

## Notes

**Design Features:**
- Dark background (`bg-aeblack-800`) for visual contrast
- Light text (`text-whitely-50`, `text-whitely-100`) for readability
- Decorative SVG paper plane illustrations for visual interest
- Responsive padding and typography scaling
- Support for RTL (right-to-left) text with Alexandria font fallback

**Form Structure:**
- Email input with `type="email"` for browser validation
- `required` attribute for client-side validation
- Submit button with send icon
- Form control wrapper (`aegov-form-control`) for consistent styling

**Best Practices:**
- Implement server-side email validation before storing
- Send confirmation emails to verify subscriber intent
- Provide unsubscribe option in all communications
- Organize subscribers into preference-based mailing lists
- Comply with email marketing regulations (GDPR, CAN-SPAM, etc.)

**Responsive Behavior:**
- **Mobile**: Vertical form layout, smaller typography, reduced padding
- **Tablet**: Intermediate sizing
- **Desktop**: Horizontal form layout (full-width version), larger typography, maximum padding

**Accessibility:**
- Email input includes placeholder text
- Form includes proper label associations
- Submit button clearly labeled
- Keyboard navigation supported
