/**
 * Manual update script using pre-fetched documentation
 * This avoids rate limiting by using documentation we already have
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs');

// Documentation content collected
const DOCS_CONTENT = {
  alert: `# Alert Component Documentation

## Introduction

The Alert component communicates essential information through visually distinctive notifications. It differs from banners in that "an alert is triggered based on an action" while "a banner is usually attached to a page without a user taking an action."

## Code Structure

### HTML Implementation
\`\`\`html
<div role="alert" class="aegov-alert alert-error">
  <div class="alert-content">
    <p>Your message here</p>
  </div>
</div>
\`\`\`

**Alert Type Classes:**
- \`.alert-info\` — techblue colors
- \`.alert-error\` — red colors
- \`.alert-success\` — green colors
- \`.alert-warning\` — camel/orange colors

**Style Variations:**
- \`.alert-soft\` — subtle background (default)
- \`.alert-solid\` — stronger, inverted colors

## Variations

### 1. Alert with Icon
Displays an icon alongside text, providing visual cues about message type.

### 2. Alert with Icon and Link
Includes an action link with arrow icon.

### 3. Alert with List
Presents multiple related items or errors using bullet points.

### 4. Alert with Additional Content
Supports title, description, and footer action links.

### 5. Dismissable Alert
Requires JavaScript. Close button uses \`data-dismiss-target\` attribute.

## Accessibility

- Use \`role="alert"\` on container elements
- Add \`aria-hidden="true"\` to decorative SVG icons
- Include \`aria-label="Close"\` on dismiss buttons
- Ensure keyboard navigation support
- Test with screen readers

## RTL Support

✅ Full RTL support for Arabic and other RTL languages

## Usage

**Use for**: Form submissions, button responses, state changes, warnings`,

  avatar: `# Avatar Component Documentation

## Introduction

The Avatar component displays user profile images with customizable styles and sizes.

## Code Structure

**HTML:**
\`\`\`html
<div class="aegov-avatar {avatar-size} {avatar-style}">
  <img src="/img/user.jpg" alt="User Avatar">
</div>
\`\`\`

## Style Variations

- **Squared Avatar** (default): Standard state
- **Rounded Avatar**: Apply \`.avatar-rounded\` class

## Size Variations

| Class | Dimensions |
|-------|-----------|
| \`.avatar-xs\` | 24px (1.5rem) |
| \`.avatar-sm\` | 32px (2rem) |
| \`.avatar-base\` | 40px (2.5rem) - **recommended** |
| \`.avatar-lg\` | 48px (3rem) |
| \`.avatar-xl\` | 56px (3.5rem) |
| \`.avatar-2xl\` | 64px (4rem) |
| \`.avatar-3xl\` | 80px (5rem) |

## Avatar with Indicator

Add status indicators (online/offline) using \`.alert-indicator\` class.

## Placeholder Avatars

Use \`.no-user\` class when no user image exists.

## Accessibility

- Always include descriptive \`alt=""\` text
- Optionally add \`role="img"\`
- Include \`aria-label=""\` for user states`
};

/**
 * Update file with content
 */
function updateFile(type, name, content) {
  const filePath = path.join(DOCS_DIR, type, `${name}.md`);

  try {
    // Read existing file to preserve header
    const existing = fs.readFileSync(filePath, 'utf8');
    const lines = existing.split('\n');

    // Find the separator
    const separatorIndex = lines.findIndex(line => line === '---');

    if (separatorIndex === -1) {
      // No separator, add content after header
      const header = lines.slice(0, 5).join('\n');
      const newContent = `${header}\n\n---\n\n${content}`;
      fs.writeFileSync(filePath, newContent, 'utf8');
    } else {
      // Replace content after separator
      const header = lines.slice(0, separatorIndex + 1).join('\n');
      const newContent = `${header}\n\n${content}`;
      fs.writeFileSync(filePath, newContent, 'utf8');
    }

    console.log(`✓ Updated ${type}/${name}.md`);
    return true;
  } catch (err) {
    console.log(`✗ Error updating ${type}/${name}.md: ${err.message}`);
    return false;
  }
}

// Execute updates
console.log('📝 Updating documentation files...\n');

Object.entries(DOCS_CONTENT).forEach(([name, content]) => {
  updateFile('components', name, content);
});

console.log('\n✅ Done!');
