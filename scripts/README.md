# Documentation Scripts

## fetch-aegov-docs.js

Automatically fetches documentation from AEGOV website and updates local markdown files.

### Usage

```bash
node scripts/fetch-aegov-docs.js
```

### Features

- Fetches all 28 components, 9 blocks, and 6 patterns
- Preserves existing file headers (docs links, JS info)
- Converts HTML to markdown
- Rate-limited requests to avoid blocking
- Progress reporting

### Requirements

- Node.js (built-in modules only, no npm install needed)
- Internet connection to designsystem.gov.ae

---

## update-docs-manual.js

Updates documentation files using pre-collected content (offline mode).

### Usage

```bash
node scripts/update-docs-manual.js
```

### Features

- No network requests required
- Updates files with pre-fetched documentation
- Preserves file structure and headers
- Faster execution

---

## Notes

- Both scripts preserve the header section of each file (title, docs link, JS requirements)
- Content is added after the `---` separator
- Files are written in UTF-8 encoding
- Backup your docs folder before running if needed
