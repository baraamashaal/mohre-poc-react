/**
 * Script to fetch AEGOV documentation and update component/block/pattern files
 * Usage: node scripts/fetch-aegov-docs.js
 */

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const DOCS_DIR = path.join(__dirname, '../docs');
const BASE_URL = 'https://designsystem.gov.ae/docs';

// Component list
const COMPONENTS = [
  'accordion', 'alert', 'avatar', 'badge', 'banner', 'blockquote',
  'breadcrumb', 'button', 'card', 'checkbox', 'dropdown', 'file-input',
  'hyperlink', 'input', 'modal', 'navigation', 'pagination', 'popover',
  'radio', 'range-slider', 'select', 'slider', 'steps', 'tabs',
  'textarea', 'toast', 'toggle', 'tooltip'
];

const BLOCKS = [
  'content', 'filter', 'footer', 'header', 'hero',
  'login', 'newsletter', 'page-rating', 'team'
];

const PATTERNS = [
  'address', 'name', 'contact-number', 'date', 'emirates-id', 'currency-symbol'
];

/**
 * Fetch HTML content from URL
 */
function fetchURL(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

/**
 * Extract main content from AEGOV docs HTML
 */
function extractContent(html) {
  // Simple extraction - gets content between main tags
  const match = html.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
  if (!match) return null;

  let content = match[1];

  // Remove script tags
  content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');

  // Remove nav/sidebar elements
  content = content.replace(/<nav\b[^<]*(?:(?!<\/nav>)<[^<]*)*<\/nav>/gi, '');

  // Basic HTML to markdown conversion
  content = content
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, '\n# $1\n')
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, '\n## $1\n')
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>(.*?)<\/h4>/gi, '\n#### $1\n')
    .replace(/<p[^>]*>(.*?)<\/p>/gi, '\n$1\n')
    .replace(/<strong[^>]*>(.*?)<\/strong>/gi, '**$1**')
    .replace(/<em[^>]*>(.*?)<\/em>/gi, '*$1*')
    .replace(/<code[^>]*>(.*?)<\/code>/gi, '`$1`')
    .replace(/<pre[^>]*>(.*?)<\/pre>/gi, '\n```\n$1\n```\n')
    .replace(/<li[^>]*>(.*?)<\/li>/gi, '- $1\n')
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, '[$2]($1)')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<[^>]+>/g, '') // Remove remaining HTML tags
    .replace(/\n{3,}/g, '\n\n') // Clean up excessive newlines
    .trim();

  return content;
}

/**
 * Read existing file header (docs link, JS info, etc.)
 */
function getFileHeader(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const lines = content.split('\n');
    const header = [];

    for (let i = 0; i < Math.min(10, lines.length); i++) {
      const line = lines[i];
      if (line.startsWith('**Docs**:') ||
          line.startsWith('**JS Required**:') ||
          line.startsWith('**JS Source**:') ||
          line.startsWith('**Purpose**:') ||
          line.startsWith('**Note**:') ||
          line.startsWith('#')) {
        header.push(line);
      }
      if (line === '---') break;
    }

    return header.join('\n');
  } catch (err) {
    return '';
  }
}

/**
 * Update a single documentation file
 */
async function updateDocFile(type, name) {
  const fileName = `${name}.md`;
  const filePath = path.join(DOCS_DIR, type, fileName);
  const url = `${BASE_URL}/${type}/${name}`;

  console.log(`Fetching ${type}/${name}...`);

  try {
    const html = await fetchURL(url);
    const content = extractContent(html);

    if (!content) {
      console.log(`  ⚠️  Could not extract content from ${url}`);
      return false;
    }

    // Get existing header
    const header = getFileHeader(filePath);

    // Combine header with new content
    const fullContent = `${header}\n\n---\n\n${content}`;

    // Write to file
    fs.writeFileSync(filePath, fullContent, 'utf8');
    console.log(`  ✓ Updated ${type}/${name}`);
    return true;

  } catch (err) {
    console.log(`  ✗ Error fetching ${url}: ${err.message}`);
    return false;
  }
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Starting AEGOV documentation fetch...\n');

  let totalSuccess = 0;
  let totalFailed = 0;

  // Process components
  console.log('📦 Updating Components...');
  for (const component of COMPONENTS) {
    const success = await updateDocFile('components', component);
    if (success) totalSuccess++;
    else totalFailed++;
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Process blocks
  console.log('\n🧱 Updating Blocks...');
  for (const block of BLOCKS) {
    const success = await updateDocFile('blocks', block);
    if (success) totalSuccess++;
    else totalFailed++;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Process patterns
  console.log('\n🎨 Updating Patterns...');
  for (const pattern of PATTERNS) {
    const success = await updateDocFile('patterns', pattern);
    if (success) totalSuccess++;
    else totalFailed++;
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  console.log('\n✅ Complete!');
  console.log(`   Success: ${totalSuccess}`);
  console.log(`   Failed: ${totalFailed}`);
}

// Run the script
main().catch(console.error);
