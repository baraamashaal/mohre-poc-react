# Card
**Docs**: https://designsystem.gov.ae/docs/components/card
**Purpose**: Versatile container for displaying content in modern web interfaces
**JS Required**: ❌ No

## Dependent Components
- [Hyperlink](hyperlink.md) - Links within cards (`aegov-link`)
- SVG Icons - Icons and arrow graphics
- Images - Card media and backgrounds
- Typography - Headings, paragraphs

## Description

A Card is a popular UI design pattern used in modern web design. Cards serve as entry points to more detailed information and are defined as "an enclosure of content, which usually appears as a rectangular shape that elevates (through shadows or other visual cues) from the page or background."

## Key Specifications

**Border Radius Requirements:**
- Default: 1 rem (16px)
- Tablets/smaller desktops: 0.75 rem
- Small devices: 0.5 rem

**Internal Spacing:**
- Minimum padding: 1.5 rem (24px) when stacked without gaps
- Element spacing: minimum 1.5 rem to 2 rem (24-32px) between internal elements

**Stacking Rules:**
- Rounded corners only appear on outer edges of stacked groups
- Inner borders between joined cards remain unrounded
- Matrix layouts (grid) maintain rounded corners only on perimeter edges

## Size Variations

| Class | Use Case |
|-------|----------|
| `card-lg` | Container width "2xl" |
| `card-base` | Containers "md", "lg", "xl" (default) |
| `card-sm` | Containers below "md" |

Responsive sizing: `<div class="aegov-card card-sm md:card-base 2xl:card-lg">`

## Visual Effects

**Glow/Shadow Implementation:**
Basic glow class: `card-glow`

Custom colored glow:
```html
<div class="aegov-card card-bordered card-glow !border-aeblack-100 !shadow-aeblack-200/20"></div>
```

## Examples

### Example 1: Card with Icon, Title, Description, and Link

```html
<div class="aegov-card card-bordered">
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" class="w-8 h-8" aria-hidden="true"><rect width="256" height="256" fill="none"/><line x1="96" y1="96" x2="160" y2="96" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="128" x2="160" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><line x1="96" y1="160" x2="128" y2="160" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><path d="M156.69,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8V156.69a8,8,0,0,1-2.34,5.65l-51.32,51.32A8,8,0,0,1,156.69,216Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/><polyline points="215.28 159.99 160 159.99 160 215.27" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"/></svg>
	<h5>The title of the card</h5>
	<p>The description of a card, and this may be variable based on the device or width of the viewport.</p>
	<div class="block">
		<a href="#" class="aegov-link" title="Some link text related description">
		View details
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</a>
	</div>
</div>
```

### Example 2: Media Card

```html
<div class="aegov-card card-bordered card-glow !shadow-primary-500/30">
	<img src="/img/component_assets/card-Hackathon_logo.svg" class="w-full h-auto rounded-xl">
	<h5>The UAE Hackathon</h5>
	<p class="line-clamp-4">This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth. Youth will be able to analyse data and come up with solutions that will advance the UAE towards a prosperous and happy future.</p>
	<div class="block">
		<a href="#" class="aegov-link" title="Some link text related description">
		View details
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
		</a>
	</div>
</div>
```

### Example 3: News Media Card (Without Border)

```html
<div class="aegov-card card-news">
	<a href="#">
		<img src="/img/block_assets/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future">
	</a>
	<div class="card-content">
		<div class="custom-divide custom-divide-sm flex flex-wrap">
			<div class="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
			<a href="#" class="text-sm font-normal">Press release</a>
		</div>
		<h5 class="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future through "Digital Skills Forum" on International Youth Day</h5>
		<p class="line-clamp-3">In alignment with the UAE government's visionary theme for 2023, "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next generation of leaders and visionaries who will drive sustainable growth in the digital era.</p>
		<a href="#" class="aegov-link">
			View details
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
		</a>
	</div>
</div>
```

### Example 4: News Media Card (With Border)

```html
<div class="aegov-card card-news card-bordered card-glow !border-aeblack-100 !shadow-aeblack-500/30">
	<a href="#">
		<img src="/img/block_assets/news-sample-03.jpg" alt="TDRA empowers youth for a sustainable future">
	</a>
	<div class="card-content">
		<div class="custom-divide custom-divide-sm flex flex-wrap">
			<div class="text-aeblack-600 text-sm font-normal">11th Jun 20223</div>
			<a href="#" class="text-sm font-normal">Press release</a>
		</div>
		<h5 class="max-md:text-lg line-clamp-3">TDRA empowers youth for a sustainable future through "Digital Skills Forum" on International Youth Day</h5>
		<p class="line-clamp-3">In alignment with the UAE government's visionary theme for 2023, "Today for Tomorrow," the forum epitomized TDRA's dedication to fostering the next generation of leaders and visionaries who will drive sustainable growth in the digital era.</p>
		<a href="#" class="aegov-link">
			View details
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
		</a>
	</div>
</div>
```

### Example 5: Service Card

```html
<div class="aegov-card card-bordered card-glow card-service">
	<h5 class="card-service-title line-clamp-2">
		<a href="#">Issuance of a vehicle registration</a>
	</h5>
	<p>Through this service, you may register a vehicle, the license for the vehicle and the number plate issued to the driver.</p>
	<div class="flex items-center justify-between gap-4">
		<a href="#" onclick="return false;" class="aegov-link">
			Start service
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
				<rect width="256" height="256" fill="none"></rect>
				<line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
				<polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
			</svg>
		</a>
		<a href="" class="text-primary-600 hover:text-primary-500">
		<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 256 256"><path d="M184,32H72A16,16,0,0,0,56,48V224a8,8,0,0,0,12.24,6.78L128,193.43l59.77,37.35A8,8,0,0,0,200,224V48A16,16,0,0,0,184,32Zm0,177.57-51.77-32.35a8,8,0,0,0-8.48,0L72,209.57V48H184Z"></path></svg>
		</a>
	</div>
</div>
```

### Example 6: Creative Card

```html
<div class="aegov-card card-creative">
<img src="http://designsystem.gov.ae/assets/documentation/components/card-cultural-representation--01.jpg" class="min-h-[33.5rem]">
	<div class="card-content">
		Empowering women in tech and science
	</div>
</div>
```

### Example 7: Image on Left Card

```html
<div class="aegov-card card-news card-bordered card-glow bg-whitely-50 !border-aeblack-100 !shadow-aeblack-500/30 sm:flex">
	<a href="#" class="sm:w-48 flex-shrink-0 relative">
		<img class="sm:absolute sm:inset-0 sm:h-full object-cover" src="https://designsystem.gov.ae/assets/series/sustainable-by-design/sbd-design-001.jpg" alt="TDRA empowers youth for a sustainable future">
	</a>
	<div class="card-content">
		<div class="custom-divide custom-divide-sm flex flex-wrap">
			<div class="text-aeblack-600 text-sm font-medium">What's new</div>
		</div>
		<h5 class="max-md:text-lg line-clamp-3">Sustainable by design</h5>
		<p class="line-clamp-2">Sustainable web design is the practice of designing and developing websites that have a low environmental impact.</p>
		<a href="#" class="aegov-link" aria-label="Read more about sustainable by design">
			Read More
			<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
		</a>
	</div>
</div>
```

## Notes

**Usage Guidelines:**
- Apply glow effects to media-heavy cards where majority of content is clickable
- Maintain rounded corners; reduce border radius on mobile displays
- Always include minimum 24px padding between internal elements
- Keep consistent element positioning within card stacks for visual uniformity

**Card Types:**
- **Basic Card**: Simple bordered container with optional glow
- **Media Card**: Features prominent imagery with text content
- **News Card**: Specialized for news articles and press releases with metadata
- **Service Card**: Government service cards with primary/secondary actions
- **Creative Card**: Full-bleed image with overlay text
- **Horizontal Card**: Image-on-left layout for compact content display

**Image Specifications:**
- Maintain consistent height/width across stacked card images
- Apply `rounded-xl` class to images within cards
- Use `line-clamp-3` or `line-clamp-4` for text truncation
- Use `object-cover` for maintaining aspect ratios

**Accessibility:**
- Include `aria-hidden="true"` on decorative SVG icons
- Provide meaningful `alt` text for images
- Use semantic heading hierarchy (h5 for card titles)
- Include descriptive `title` or `aria-label` attributes on links

**Technical Details:**
- Base class: `.aegov-card`
- Variant modifiers: `.card-news`, `.card-service`, `.card-creative`
- Border: `.card-bordered`
- Effect: `.card-glow`
- Size options: `.card-sm`, `.card-base` (default), `.card-lg`
- Content wrapper: `.card-content` (for news cards)

**RTL Support:**
Full RTL layout support for Arabic and other right-to-left languages. Arrow icons automatically flip with `.rtl:-scale-x-100` class.

**React Implementation:**
```jsx
<Card variant="service" bordered glow>
  <h5>Service Title</h5>
  <p>Description text</p>
</Card>
```

React props: `bordered` (boolean), `variant` ("default" | "news" | "service" | "creative"), `size` ("sm" | "base" | "lg"), `glow` (boolean), `children` (ReactNode)
