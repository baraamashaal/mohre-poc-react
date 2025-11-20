# Avatar
**Docs**: https://designsystem.gov.ae/docs/components/avatar
**Purpose**: Visual representation of users in web applications through profile images
**JS Required**: ❌ No

## Dependent Components
None - operates as standalone component

## Description

The Avatar component provides circular or square containers for user profile images or placeholders. It enhances user experience through recognizable visual indicators and supports various styling options including size variations (7 levels), shape variants (square/rounded), and status indicators (online/offline states).

## Style Variations

| Style | Class | Description |
|-------|-------|-------------|
| **Square** | (default) | Square avatar with rounded corners |
| **Rounded** | `.avatar-rounded` | Fully circular avatar |

## Size Variations

| Class | Dimensions | Use Case |
|-------|-----------|----------|
| `.avatar-xs` | 24px × 24px | Extra small (inline text) |
| `.avatar-sm` | 32px × 32px | Small (compact lists) |
| `.avatar-base` | 40px × 40px | Default size (recommended) |
| `.avatar-lg` | 48px × 48px | Large (prominent display) |
| `.avatar-xl` | 56px × 56px | Extra large (profile headers) |
| `.avatar-2xl` | 64px × 64px | 2X large (user profiles) |
| `.avatar-3xl` | 72px × 72px | 3X large (hero sections) |

## Examples

### Example 1: Visual Representation

```html
<div class="aegov-avatar" role="img">
  <img src="/img/user-thumbnail-01.jpg" alt="The user's full name">
</div>
```

### Example 2: Style Variation

```html
<div class="flex items-center gap-4">
  <div class="aegov-avatar">
    <img src="/img/user-thumbnail-01.jpg" alt="User Avatar">
  </div>
  <div class="aegov-avatar avatar-rounded">
    <img src="/img/user-thumbnail-01.jpg" alt="User Avatar">
  </div>
</div>
```

### Example 3: Size Variation

```html
<div class="aegov-avatar avatar-xs">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar avatar-sm">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar avatar-lg">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar avatar-xl">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar avatar-2xl">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
<div class="aegov-avatar avatar-3xl">
  <img src="/img/user-thumbnail-01.jpg" alt="person name">
</div>
```

### Example 4: Avatar with Indicator

```html
<div class="aegov-avatar">
  <img src="/img/user-thumbnail-01.jpg" alt="User Avatar">
  <span class="alert-indicator bg-aered-500 ring-whitely-50"></span>
</div>
<div class="aegov-avatar avatar-rounded">
  <img src="/img/user-thumbnail-01.jpg" alt="User Avatar">
  <span class="alert-indicator bg-aegreen-500 ring-whitely-50"></span>
</div>
```

### Example 5: Placeholder Avatars

```html
<div class="aegov-avatar">
  <img class="no-user" src="" alt="Image Not Found">
</div>
<div class="aegov-avatar avatar-rounded">
  <img class="no-user" src="" alt="Image Not Found">
</div>
```

## Notes

**Usage Guidelines:**

- Display avatars only after user authentication
- Use with UAE Pass integration; manage user images separately
- Default recommended size: `.avatar-base` (40px)
- Maintain equal height/width proportions
- Minimum 1rem margin from adjacent components

**Accessibility Requirements:**

- Always include `alt` attribute with user's full name
- Optionally add `role="img"` to container div
- Include `aria-label` for status indicator states
- Ensure sufficient color contrast for status indicators

**Technical Details:**

- Base class: `.aegov-avatar`
- Style variants: `.avatar-rounded` (default is square with rounded corners)
- Size options: `.avatar-xs`, `.avatar-sm`, `.avatar-base` (default), `.avatar-lg`, `.avatar-xl`, `.avatar-2xl`, `.avatar-3xl`
- Status indicator: `.alert-indicator` with background colors
- Placeholder: `.no-user` class on `<img>` element

**Status Indicator Colors:**

- **Online**: `bg-aegreen-500` (green)
- **Offline**: `bg-aered-500` (red)
- **Border**: `ring-whitely-50` (white ring around indicator)

**Placeholder Behavior:**

When image source is empty or fails to load, adding `.no-user` class to `<img>` element displays default user icon placeholder.

**Responsive Design:**

Combine size classes with breakpoint prefixes for responsive avatars:
```html
<div class="aegov-avatar avatar-sm md:avatar-base lg:avatar-lg">
  <img src="/img/user.jpg" alt="User Name">
</div>
```

**RTL Support:**

Fully supports RTL layouts. Avatar and status indicator positions automatically adjust for right-to-left languages.

**React Implementation:**

```jsx
<Avatar
  alt="Abdulmalik"
  size="base"
  src="/img/user-thumbnail-01.jpg"
  status="none"
  variant="square"
/>
```

React props: `src` (string), `alt` (string, required), `size` ("xs" | "sm" | "base" | "lg" | "xl" | "2xl" | "3xl"), `variant` ("square" | "rounded"), `status` ("online" | "offline" | "none")
