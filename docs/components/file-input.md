# File Input
**Docs**: https://designsystem.gov.ae/docs/components/file-input
**Purpose**: Enables file selection and upload functionality
**JS Required**: ⚠️ Optional (for drag-drop and file preview features)

## Dependent Components
- [Button](button.md) - For styled upload buttons
- SVG Icons - For upload icons and file type indicators

## Description

The File Input component enables users to select and upload files from their devices. It supports multiple interaction methods including button-triggered file selection and drag-and-drop functionality. The component can display uploaded file names, sizes, and provide options for removing files before final submission.

## Size Variations

| Class | Height | Font Size |
|-------|--------|-----------|
| `.control-sm` | 40px (2.5rem) | 14px |
| `.control-base` | 48px (3rem) | 16px |
| `.control-lg` | 56px (3.5rem) | 18px |

## Examples

### Example 1: Basic File Input

```html
<div class="aegov-form-control aegov-file-input-control">
	<label for="file-uploader-01" class="file-input-label aegov-btn">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="file-summary w-5 h-5">
			<rect width="256" height="256" fill="none"/>
			<line x1="128" y1="152" x2="128" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<polyline points="88 80 128 40 168 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
		Upload file
	</label>
	<input type="file" name="file-uploader-01" id="file-uploader-01">
</div>
```

### Example 2: With Single Image Feedback

```html
<div class="aegov-form-control aegov-file-input-control">
	<div class="flex items-center gap-x-3">
		<svg class="h-12 w-12 text-slate-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd"></path>
		</svg>
		<div>
			<label for="file-uploader-02" class="file-input-label aegov-btn">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="file-summary w-5 h-5">
					<rect width="256" height="256" fill="none"/>
					<line x1="128" y1="152" x2="128" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
					<polyline points="88 80 128 40 168 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
				</svg>
				Upload an image
			</label>
			<input type="file" name="file-uploader-02" id="file-uploader-02">
		</div>
	</div>
</div>
```

### Example 3: With Drag/Drop UI

```html
<div class="aegov-form-control">
	<label>Cover photo</label>
	<div class="form-control-dropbox px-6 py-10">
		<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
			<path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clip-rule="evenodd" />
		</svg>
		<label for="fileDragDrop">
			<span>Upload a file</span>
			<input id="fileDragDrop" name="fileDragDrop" type="file" class="sr-only" accept=".png, .jpg, .gif">
		</label>
		<span class="pl-1">or drag and drop</span>
		<p class="text-xs leading-5 text-slate-600">PNG, JPG, GIF up to 10MB</p>
	</div>
</div>
```

### Example 4: Default UI (Small)

```html
<div class="aegov-form-control control-sm">
	<label for="fileInput-sm">Upload a file</label>
	<div class="form-control-input">
		<input id="fileInput-sm" type="file" name="fileInput-sm">
	</div>
</div>
```

### Example 5: Default UI (Base)

```html
<div class="aegov-form-control">
	<label for="fileInput-base">Upload a file</label>
	<div class="form-control-input">
		<input id="fileInput-base" type="file" name="fileInput-base">
	</div>
</div>
```

### Example 6: Default UI (Large)

```html
<div class="aegov-form-control control-lg">
	<label for="fileInput-lg">Upload a file</label>
	<div class="form-control-input">
		<input id="fileInput-lg" type="file" name="fileInput-lg">
	</div>
</div>
```

### Example 7: Secondary Colour Variation

```html
<div class="aegov-form-control aegov-file-input-control">
	<label for="file-secondary" class="file-input-label aegov-btn btn-secondary">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="file-summary w-5 h-5">
			<rect width="256" height="256" fill="none"/>
			<line x1="128" y1="152" x2="128" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<polyline points="88 80 128 40 168 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
		Upload file
	</label>
	<input type="file" name="file-secondary" id="file-secondary">
</div>
```

### Example 8: RTL Support (Arabic)

```html
<div class="aegov-form-control aegov-file-input-control">
	<label for="file-rtl" class="file-input-label aegov-btn">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="file-summary w-5 h-5">
			<rect width="256" height="256" fill="none"/>
			<line x1="128" y1="152" x2="128" y2="40" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<path d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
			<polyline points="88 80 128 40 168 80" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/>
		</svg>
		تحميل ملف
	</label>
	<input type="file" name="file-rtl" id="file-rtl">
</div>
```

## Notes

**Usage Contexts:**
- Document uploads (PDFs, Word documents)
- Image uploads (profile photos, gallery images)
- Form attachments (resumes, certificates)
- Bulk file uploads (multiple images, documents)

**Accessibility Requirements:**
- Clear label text describing expected file types
- Helper text for file size limits and allowed formats
- Keyboard accessible file selection
- Screen reader announcements for file selection
- Visual feedback on successful upload

**Technical Details:**
- Base class: `.aegov-file-input-control`
- Button label: `.file-input-label` with `.aegov-btn`
- Drag-drop area: `.form-control-dropbox`
- Size modifiers: `.control-sm`, `.control-base` (default), `.control-lg`
- Color variant: `.btn-secondary` on label button
- Multiple files: Add `multiple` attribute to input

**File Validation:**
- Use `accept` attribute to restrict file types: `accept=".pdf,.doc,.docx"` or `accept="image/*"`
- Validate file size on client and server side
- Display clear error messages for invalid files
- Provide file type icons for uploaded files

**Best Practices:**
- Indicate maximum file size clearly
- Show upload progress for large files
- Allow file removal before submission
- Display file name and size after selection
- Support both button click and drag-drop
- Provide clear visual feedback during upload

**RTL Support:**
Full RTL layout support for Arabic and other right-to-left languages.

**React Implementation:**
```jsx
<FileInput
  label="Upload file"
  accept="image/*"
  multiple={false}
  onChange={(files) => handleFileChange(files)}
/>
```

React props: `label` (string), `accept` (string), `multiple` (boolean), `size` ("sm" | "base" | "lg"), `variant` ("primary" | "secondary"), `onChange` (function)
