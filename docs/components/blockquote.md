# Blockquote
**Docs**: https://designsystem.gov.ae/docs/components/blockquote
**Purpose**: Visually distinguish and highlight quoted text or excerpts
**JS Required**: ❌ No

## Dependent Components
- SVG Icons - Quotation mark icon (for standard style)
- Typography - Paragraph and footer text

## Description

The Blockquote is a UI element that visually emphasizes quoted text or excerpts from specific sources. It's commonly used in articles, blog posts, and content to highlight statements and attribute them to original authors.

## Key Variations

**Soft Style (Default):** Uses a subtle quotation icon with minimal styling

**Solid/Colored Style:** Applies distinct background color; SVG icon is omitted, add `quote-colored` class

## Critical Requirements

- **Citation attribute is mandatory** for semantic correctness and accessibility
- Footer requires `quote-author` and `quote-cite` classes for proper structure
- When quoting page content, include page URL + element ID in cite attribute
- SVG icon omitted in colored variation

## Examples

### Example 1: Standard Blockquote with Icon

Default blockquote with quotation icon and attribution footer.

```html
<blockquote class="aegov-quote" cite="https://mohap.gov.ae/en/about-us/minister-message">
  <svg class="quote-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M29.25 10.5H40.5C41.2956 10.5 42.0587 10.8161 42.6213 11.3787C43.1839 11.9413 43.5 12.7044 43.5 13.5V25.5C43.5 26.2956 43.1839 27.0587 42.6213 27.6213C42.0587 28.1839 41.2956 28.5 40.5 28.5H29.25V30C29.25 31.5913 29.8821 33.1174 31.0074 34.2426C32.1326 35.3679 33.6587 36 35.25 36C35.6478 36 36.0294 36.158 36.3107 36.4393C36.592 36.7206 36.75 37.1022 36.75 37.5C36.75 37.8978 36.592 38.2794 36.3107 38.5607C36.0294 38.842 35.6478 39 35.25 39C32.8638 38.9975 30.5761 38.0485 28.8888 36.3612C27.2015 34.6739 26.2525 32.3862 26.25 30V13.5C26.25 12.7044 26.5661 11.9413 27.1287 11.3787C27.6913 10.8161 28.4544 10.5 29.25 10.5ZM29.25 25.5H40.5V13.5H29.25V25.5ZM7.5 10.5H18.75C19.5456 10.5 20.3087 10.8161 20.8713 11.3787C21.4339 11.9413 21.75 12.7044 21.75 13.5V25.5C21.75 26.2956 21.4339 27.0587 20.8713 27.6213C20.3087 28.1839 19.5456 28.5 18.75 28.5H7.5V30C7.5 31.5913 8.13214 33.1174 9.25736 34.2426C10.3826 35.3679 11.9087 36 13.5 36C13.8978 36 14.2794 36.158 14.5607 36.4393C14.842 36.7206 15 37.1022 15 37.5C15 37.8978 14.842 38.2794 14.5607 38.5607C14.2794 38.842 13.8978 39 13.5 39C11.1138 38.9975 8.82607 38.0485 7.13878 36.3612C5.45149 34.6739 4.50248 32.3862 4.5 30V13.5C4.5 12.7044 4.81607 11.9413 5.37868 11.3787C5.94129 10.8161 6.70435 10.5 7.5 10.5ZM7.5 25.5H18.75V13.5H7.5V25.5Z" fill="#343330"></path>
  </svg>
  <p>The confidence of our wise leadership in healthcare professionals is highly appreciated. This confidence places a significant responsibility on our shoulders to continue providing excellent healthcare services to all residents of the UAE.</p>
  <div class="quote-footer">
    <div class="quote-author">AbdulRahman Bin Mohammed Al Owais</div>
    <div class="quote-cite">Minister of Health & Prevention</div>
  </div>
</blockquote>
```

**Note:** Standard style includes SVG quotation icon at top. Citation URL is mandatory for semantic correctness.

### Example 2: Basic Code Structure Template

Template showing the required structure for blockquote component.

```html
<blockquote class="aegov-quote" cite="https://www.example.com">
  <svg class="quote-icon" width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- SVG path data -->
  </svg>
  <p>Quote text goes here. This should be the actual quoted content from the source.</p>
  <div class="quote-footer">
    <div class="quote-author">Author Full Name</div>
    <div class="quote-cite">Author Title or Source Name</div>
  </div>
</blockquote>
```

**Note:** Template showing minimal required elements. Replace placeholder text with actual quote content and attribution.

### Example 3: Colored Blockquote (Without Icon)

Colored variant with background styling, SVG icon omitted.

```html
<blockquote class="aegov-quote quote-colored" cite="https://www.example.com">
  <p>The confidence of our wise leadership in healthcare professionals is highly appreciated. This confidence places a significant responsibility on our shoulders to continue providing excellent healthcare services to all residents of the UAE.</p>
  <div class="quote-footer">
    <div class="quote-author">AbdulRahman Bin Mohammed Al Owais</div>
    <div class="quote-cite">Minister of Health & Prevention</div>
  </div>
</blockquote>
```

**Note:** Colored variant uses `quote-colored` class and omits the SVG icon. Background color provides visual distinction.

## Notes

**Spacing Guidelines:**
- Footer top margin: minimum 2.5rem
- Horizontal padding: 2.5rem
- Vertical padding: 1.5rem (adjustable per context)

**Semantic HTML:**
- Always include `cite` attribute with source URL
- When quoting page content: use `URL#element-id` format
- Footer must use `quote-author` and `quote-cite` classes

**Use Cases:**
Appropriate for news articles, blog posts, testimonials, research documents, whitepapers, and any content requiring external attribution.

**Accessibility & Localization:**
- Screen readers rely on `cite` attribute for source context
- Full RTL support for Arabic and right-to-left languages
- Consistent typography guidelines apply

**Style Variations:**
- **Soft/Default**: Include SVG quote icon, minimal background
- **Colored**: Add `quote-colored` class, remove SVG icon, distinct background color

**React Implementation:**
```jsx
<Blockquote
  author="Author Name"
  authorTitle="Title/Source"
  cite="https://source-url.com"
  style="soft"
>
  Quote content here
</Blockquote>
```

React props: `author`, `authorTitle`, `cite`, `style` ("soft" or "colored")
