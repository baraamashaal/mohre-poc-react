# Page Rating Block
**Docs**: https://designsystem.gov.ae/docs/blocks/page-rating
**Purpose**: Gathers user feedback on content usefulness
**JS Required**: ⚠️ Custom logic required for rating submission

## Dependent Components
- [Button](../components/button.md) - Yes/No rating buttons
- SVG Icons - Thumbs up/down icons

## Description

The Page Rating block is a feedback component enabling users to rate content usefulness. It empowers users to share valuable insights about their experience with the content, helping organizations improve their services and information delivery.

## Mandatory Usage

Implementation is required on:
- Service card pages
- News articles, press releases, events, or blog articles

Optional placement on other high-interaction pages is encouraged to gather broader user feedback.

## Component Structure

**Primary Elements:**
- Heading: "Did you find this content useful?"
- Subtext: "You can help us improve by providing your feedback about your experience."
- Yes button with thumbs-up icon
- No button with thumbs-down icon

## Layout Variants

### 1. Without Background
Clean, minimal presentation without colored container.

### 2. With Background
Primary-50 colored container with responsive padding for visual emphasis.

## Examples

### Example 1: Page Rating Without Background

Minimal page rating component without background container.

```html
<div class="py-8">
  <div class="text-center max-w-2xl mx-auto">
    <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
      Did you find this content useful?
    </h3>
    <p class="text-sm md:text-base text-gray-600 mb-6">
      You can help us improve by providing your feedback about your experience.
    </p>
    <div class="flex items-center justify-center gap-4">
      <button class="aegov-btn btn-outline" aria-label="Yes, this content was useful">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        Yes
      </button>
      <button class="aegov-btn btn-outline" aria-label="No, this content was not useful">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
        </svg>
        No
      </button>
    </div>
  </div>
</div>
```

**Note:** Clean presentation without background, centered layout with responsive typography.

### Example 2: Page Rating With Background

Page rating with colored background container for visual emphasis.

```html
<div class="bg-primary-50 px-4 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-8 md:py-10 lg:py-12 rounded-2xl">
  <div class="text-center max-w-2xl mx-auto">
    <h3 class="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-3">
      Did you find this content useful?
    </h3>
    <p class="text-sm md:text-base text-gray-600 mb-6">
      You can help us improve by providing your feedback about your experience.
    </p>
    <div class="flex items-center justify-center gap-4">
      <button class="aegov-btn btn-outline" aria-label="Yes, this content was useful">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
        Yes
      </button>
      <button class="aegov-btn btn-outline" aria-label="No, this content was not useful">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14H5.236a2 2 0 01-1.789-2.894l3.5-7A2 2 0 018.736 3h4.018a2 2 0 01.485.06l3.76.94m-7 10v5a2 2 0 002 2h.096c.5 0 .905-.405.905-.904 0-.715.211-1.413.608-2.008L17 13V4m-7 10h2m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2h-2.5" />
        </svg>
        No
      </button>
    </div>
  </div>
</div>
```

**Note:** Background variant uses `bg-primary-50` with responsive padding scaling from mobile to desktop.

## Notes

**Backend Implementation:**
- The system provides UI only
- Backend data collection logic must be custom-implemented
- Best practice: confirm user feedback submission
- For negative responses: prompt users to report specific issues
- Track rating data to identify content improvement opportunities

**Responsive Design:**
- **Typography**: Scales from 18px mobile to 32px desktop
- **Spacing**: Padding scales from `px-4` to `2xl:px-12`
- **Buttons**: Maintain consistent sizing across breakpoints with `btn-outline` style

**User Experience Best Practices:**
- Provide visual feedback when button is clicked
- Display confirmation message after submission
- For "No" responses, optionally show follow-up form for detailed feedback
- Disable buttons after submission to prevent duplicate ratings
- Consider anonymizing feedback data for privacy

**Accessibility:**
- Buttons include `aria-label` for screen readers
- SVG icons include descriptive paths
- Clear, concise heading and subtext
- Sufficient color contrast between text and background
- Keyboard navigation supported

**Placement Guidelines:**
- Required on service pages and article content
- Position near end of content, before footer
- Ensure sufficient spacing from surrounding elements
- Consider sticky positioning for long-form content

**Data Collection:**
- Track yes/no ratio for each page
- Store timestamps for trend analysis
- Consider A/B testing different placements
- Use data to prioritize content improvements
