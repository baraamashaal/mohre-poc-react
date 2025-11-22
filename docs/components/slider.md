# Slider
**Docs**: https://designsystem.gov.ae/docs/components/slider
**Purpose**: Horizontal scrolling carousel for showcasing multiple items
**JS Required**: ✅ Yes (Slick Slider or similar)

**Note**: Different from Range Slider - this is for content carousels, not input controls.

## Dependent Components
- [Card](../blocks/card.md) - For content items (news, initiatives)
- jQuery - Slick Slider dependency
- Slick Slider library - For carousel functionality

## Description

The Slider component enables horizontal scrolling sections that display content partially, revealing additional information through auto-scroll or user interaction. It's ideal for showcasing partners, initiatives, news articles, or any card-based content that benefits from space-efficient presentation.

## Common Use Cases

- Partner logo galleries
- Initiative showcases
- News article or blog post carousels
- Horizontal scrolling card collections

## Implementation Guidelines

**Do's:**
- "Always allow for touch based gestures for scrolling elements"
- Provide manual pagination controls alongside auto-scroll features
- Maintain minimum 7-second intervals for auto-scroll transitions
- Display elements without scrollers on desktop; enable slider on mobile when appropriate

**Don'ts:**
- Avoid multiple auto-scrolling sections on single pages
- Don't change elements too rapidly

## Examples

### Example 1: Logo Slider

Horizontal carousel for partner logos with responsive breakpoints.

```html
<div class="logos-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
	<div>
		<a href="#" class="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
			<img src="images/logo1.png" alt="">
		</a>
	</div>
	<div>
		<a href="#" class="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
			<img src="images/logo2.png" alt="">
		</a>
	</div>
	<div>
		<a href="#" class="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4">
			<img src="images/logo3.png" alt="">
		</a>
	</div>
	<!-- Add more logo items -->
</div>

<script>
$(".logos-slider").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
		{ breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } }
	]
});
</script>
```

**Note:** Use `.aegovs-slider-style` base class with margin utilities. Configure Slick with `autoplay`, `dots`, and responsive breakpoints.

### Example 2: Initiative Slider

Carousel for initiative cards with glow effects.

```html
<div class="initiative-slider [&_.slick-list]:pb-8 aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
	<div>
		<div class="aegov-card card-bordered card-glow !shadow-primary-500/30">
			<img src="images/card-Hackathon_2.jpg" class="w-full h-auto rounded-xl">
			<h5>The UAE Hackathon</h5>
			<p class="line-clamp-4">This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth. Youth will be able to analyse data and come up with solutions that will advance the UAE towards a prosperous and happy future.</p>
			<div class="block">
				<a href="#" class="aegov-link" title="Some link text related description">
				View details
					<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
				</a>
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-card card-bordered card-glow !shadow-primary-500/30">
			<img src="images/card-Innovation.jpg" class="w-full h-auto rounded-xl">
			<h5>Innovation Week</h5>
			<p class="line-clamp-4">A week-long celebration of innovation and technology featuring exhibitions, workshops, and networking events.</p>
			<div class="block">
				<a href="#" class="aegov-link" title="Some link text related description">
				View details
					<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none" /><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16" /></svg>
				</a>
			</div>
		</div>
	</div>
	<!-- Add more initiative cards -->
</div>

<script>
$(".initiative-slider").slick({
	slidesToShow: 4,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3 } },
		{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
		{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
	]
});
</script>
```

**Note:** Add `[&_.slick-list]:pb-8` for bottom padding to accommodate dots. Use `.card-glow` for shadow effects.

### Example 3: News Slider

News article carousel with card-news styling.

```html
<div class="news-card-slider aegovs-slider-style [&_.slick-slide]:mx-2.5 [&_.slick-list]:-mx-2.5 sm:[&_.slick-slide]:mx-3.5 sm:[&_.slick-list]:-mx-3.5">
	<div>
		<div class="aegov-card card-news">
			<a href="#"><img src="images/news-sample-03.jpg" alt="Title"></a>
			<div class="card-content">
				<div class="custom-divide custom-divide-sm flex flex-wrap">
					<div class="text-aeblack-600 text-sm font-normal">11th Jun 2022</div>
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
	</div>
	<div>
		<div class="aegov-card card-news">
			<a href="#"><img src="images/news-sample-02.jpg" alt="Title"></a>
			<div class="card-content">
				<div class="custom-divide custom-divide-sm flex flex-wrap">
					<div class="text-aeblack-600 text-sm font-normal">15th Jun 2022</div>
					<a href="#" class="text-sm font-normal">News</a>
				</div>
				<h5 class="max-md:text-lg line-clamp-3">Annual technology conference to showcase latest innovations in government services and digital transformation</h5>
				<p class="line-clamp-3">Join us for a comprehensive exploration of cutting-edge technologies and innovative solutions that are reshaping the future of government services across the UAE.</p>
				<a href="#" class="aegov-link">
					View details
					<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
				</a>
			</div>
		</div>
	</div>
	<div>
		<div class="aegov-card card-news">
			<a href="#"><img src="images/news-sample-01.jpg" alt="Title"></a>
			<div class="card-content">
				<div class="custom-divide custom-divide-sm flex flex-wrap">
					<div class="text-aeblack-600 text-sm font-normal">20th Jun 2022</div>
					<a href="#" class="text-sm font-normal">Press release</a>
				</div>
				<h5 class="max-md:text-lg line-clamp-3">New data protection guidelines ensure enhanced privacy and security for all digital government services</h5>
				<p class="line-clamp-3">The updated privacy policy reflects our commitment to protecting citizen data and maintaining the highest standards of information security across all government digital platforms.</p>
				<a href="#" class="aegov-link">
					View details
					<svg class="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
				</a>
			</div>
		</div>
	</div>
	<!-- Add more news cards -->
</div>

<script>
$(".news-card-slider").slick({
	slidesToShow: 3,
	slidesToScroll: 1,
	autoplay: true,
	dots: true,
	arrows: false,
	responsive: [
		{ breakpoint: 1024, settings: { slidesToShow: 3 } },
		{ breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
		{ breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
	]
});
</script>
```

**Note:** Use `.card-news` for news-specific card styling. Configure responsive breakpoints for optimal display at all screen sizes.

## Responsive Breakpoints

All variations implement TailwindCSS-based responsive design with breakpoints at:
- Mobile: 480px (1-2 slides)
- Tablet: 768px (2-3 slides)
- Desktop: 1024px+ (3-4 slides)

## Notes

**Technical Stack:**

- **Framework**: TailwindCSS for styling
- **Slider Library**: Slick Slider (jQuery-dependent for demos)
- **Responsive**: Mobile-first approach with customizable breakpoints
- **Styling Classes**: `aegovs-slider-style`, `card-bordered`, `card-glow`, `card-news`

**Accessibility & RTL Support:**

The component uses `rtl:-scale-x-100` utility classes for RTL language support on directional icons. Touch gestures and keyboard navigation should be tested per WCAG guidelines.

**Configuration Options:**

| Option | Description | Default |
|--------|-------------|---------|
| `slidesToShow` | Number of slides visible | 4 |
| `slidesToScroll` | Number of slides to scroll | 1 |
| `autoplay` | Enable auto-scrolling | true |
| `dots` | Show pagination dots | true |
| `arrows` | Show prev/next arrows | false |
| `responsive` | Array of breakpoint settings | See examples |

**Best Practices:**

- Always include `alt` attributes on images
- Maintain minimum 7-second autoplay speed
- Test touch gestures on mobile devices
- Provide manual controls (dots) for accessibility
- Limit auto-scrolling sections to one per page

**JavaScript Requirements:**

The component uses the Slick Slider library (bundled with jQuery) for demonstrations, though any compatible slider library works if proper element placement within the structure is maintained.

**React Implementation:**

Not documented in provided source material. Consider using react-slick or similar React-compatible carousel library.
