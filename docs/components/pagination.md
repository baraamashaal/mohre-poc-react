# Pagination
**Docs**: https://designsystem.gov.ae/docs/components/pagination
**Purpose**: Navigate through content distributed across multiple pages
**JS Required**: ❌ No

## Dependent Components
None - works independently with standard navigation

## Description

The Pagination component enables navigation through content distributed across multiple pages, organizing large datasets into manageable sections without overwhelming users. It provides both mobile-optimized ("Page X of Y" format) and desktop views (individual page numbers with ellipsis).

## Examples

### Example 1: Basic Pagination

Mobile and desktop dual-layout with Previous/Next navigation.

```html
<nav role="navigation" aria-label="pagination">
	<!-- Mobile -->
	<div class="flex items-center justify-between border-t border-aeblack-200 px-4 sm:px-0 sm:hidden">
		<div class="-mt-px flex w-0 flex-1">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				<svg class="mr-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
				</svg>
				Previous
			</a>
		</div>
		<div class="text-sm text-aeblack-700">
			Page <span class="font-medium">3</span> of <span class="font-medium">17</span>
		</div>
		<div class="-mt-px flex w-0 flex-1 justify-end">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				Next
				<svg class="ml-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>

	<!-- Desktop -->
	<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between border-t border-aeblack-200 px-4 sm:px-0">
		<div class="-mt-px flex w-0 flex-1">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pr-1 pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="Previous Page">
				<svg class="mr-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
				</svg>
				Previous
			</a>
		</div>
		<div class="hidden md:-mt-px md:flex">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">1</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">2</a>
			<a href="#" class="inline-flex items-center border-t-2 border-primary-500 px-4 pt-4 text-sm font-medium text-primary-600" aria-current="page">3</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">4</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">5</a>
			<span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500">...</span>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">17</a>
		</div>
		<div class="-mt-px flex w-0 flex-1 justify-end">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pl-1 pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="Next Page">
				Next
				<svg class="ml-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>
</nav>
```

**Note:** Mobile shows simplified "Page X of Y" format. Desktop displays individual page numbers. Use `aria-current="page"` on active page. Icons use `rtl:rotate-180` for RTL support.

### Example 2: Pagination with First/Last Links

Enhanced version including First and Last page buttons.

```html
<nav role="navigation" aria-label="pagination with first and last">
	<!-- Mobile -->
	<div class="flex items-center justify-between border-t border-aeblack-200 px-4 sm:px-0 sm:hidden">
		<div class="-mt-px flex gap-3">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				<svg class="h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clip-rule="evenodd" />
				</svg>
				<span class="sr-only">First</span>
			</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				<svg class="h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
				</svg>
				<span class="sr-only">Previous</span>
			</a>
		</div>
		<div class="text-sm text-aeblack-700">
			Page <span class="font-medium">3</span> of <span class="font-medium">17</span>
		</div>
		<div class="-mt-px flex gap-3">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				<svg class="h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
				</svg>
				<span class="sr-only">Next</span>
			</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700">
				<svg class="h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M4.21 14.77a.75.75 0 001.06.02l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L8.168 10l-3.938 3.71a.75.75 0 00-.02 1.06zm6 0a.75.75 0 001.06.02l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L14.168 10l-3.938 3.71a.75.75 0 00-.02 1.06z" clip-rule="evenodd" />
				</svg>
				<span class="sr-only">Last</span>
			</a>
		</div>
	</div>

	<!-- Desktop -->
	<div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between border-t border-aeblack-200 px-4 sm:px-0">
		<div class="-mt-px flex gap-3">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="First Page">
				<svg class="mr-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M15.79 14.77a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L11.832 10l3.938 3.71a.75.75 0 01.02 1.06zm-6 0a.75.75 0 01-1.06.02l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 111.04 1.08L5.832 10l3.938 3.71a.75.75 0 01.02 1.06z" clip-rule="evenodd" />
				</svg>
				First
			</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="Previous Page">
				<svg class="mr-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z" clip-rule="evenodd" />
				</svg>
				Previous
			</a>
		</div>
		<div class="hidden md:-mt-px md:flex">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">1</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">2</a>
			<a href="#" class="inline-flex items-center border-t-2 border-primary-500 px-4 pt-4 text-sm font-medium text-primary-600" aria-current="page">3</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">4</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">5</a>
			<span class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500">...</span>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-aeblack-500 hover:text-aeblack-700 hover:border-aeblack-300">17</a>
		</div>
		<div class="-mt-px flex gap-3">
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="Next Page">
				Next
				<svg class="ml-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
				</svg>
			</a>
			<a href="#" class="inline-flex items-center border-t-2 border-transparent pt-4 text-sm font-medium text-aeblack-500 hover:border-aeblack-300 hover:text-aeblack-700" aria-label="Last Page">
				Last
				<svg class="ml-3 h-5 w-5 text-aeblack-400 rtl:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
					<path fill-rule="evenodd" d="M4.21 14.77a.75.75 0 001.06.02l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L8.168 10l-3.938 3.71a.75.75 0 00-.02 1.06zm6 0a.75.75 0 001.06.02l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L14.168 10l-3.938 3.71a.75.75 0 00-.02 1.06z" clip-rule="evenodd" />
				</svg>
			</a>
		</div>
	</div>
</nav>
```

**Note:** Adds First and Last buttons with double chevron icons. Mobile view uses icon-only buttons with `sr-only` text for accessibility.

## Notes

**Usage Contexts:**

Use pagination for search results, product listings, blog archives, data tables, and any content distributed across multiple pages requiring manageable navigation.

**Accessibility Requirements:**

- Links use semantic `<a>` tags for screen reader identification
- "Previous Page" / "Next Page" provided via `aria-label` attribute
- Current page marked with `aria-current="page"`
- Logical HTML reading order maintained
- Ellipsis (...) represents skipped pages

**Behavior:**

- Clicking Previous/Next navigates one page
- Direct page number links jump to specific pages
- Mobile displays compact format; desktop shows full pagination
- Component is fully responsive via TailwindCSS breakpoints

**Size Variations:**

No formal size variations table exists. Component uses TailwindCSS breakpoints:
- Mobile: `sm:hidden` (simplified Previous/Next only)
- Desktop: `max-sm:hidden` (full page number navigation)

**RTL Support:**

"This component is supported and configured to work for RTL layouts." SVG icons include `rtl:rotate-180` for automatic directional adjustment.

**JavaScript Requirements:**

Basic navigation requires anchor tag `href` attributes and event handling. React version handles state management internally.

**React Implementation:**

```jsx
<Pagination
	currentPage={3}
	onPageChange={() => {}}
	totalPages={17}
	showFirstLast={false}
/>
```

React props: `currentPage` (number), `totalPages` (number), `showFirstLast` (boolean, default: false), `onPageChange` (function)
