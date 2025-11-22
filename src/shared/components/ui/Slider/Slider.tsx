import React from 'react';
import Slider from 'react-slick';
import clsx from 'clsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import type { Settings } from 'react-slick';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Visual variant of the slider
   * @default 'default'
   */
  variant?: 'default' | 'logos' | 'initiatives' | 'news';

  /**
   * Show navigation arrows
   * @default false
   */
  showArrows?: boolean;

  /**
   * Show pagination dots
   * @default false
   */
  showDots?: boolean;

  /**
   * Enable infinite loop
   * @default false
   */
  infinite?: boolean;

  /**
   * Enable auto-play
   * @default false
   */
  autoPlay?: boolean;

  /**
   * Auto-play interval in milliseconds
   * @default 3000
   */
  autoPlayInterval?: number;

  /**
   * Number of slides to show
   */
  slidesToShow?: number;

  /**
   * Number of slides to scroll
   */
  slidesToScroll?: number;

  /**
   * Custom responsive breakpoints
   */
  responsive?: Settings['responsive'];

  /**
   * Slider children
   */
  children: React.ReactNode;

  /**
   * Data test id for testing
   */
  dataTestId?: string;
}

/**
 * Slider Component
 *
 * A carousel component for showcasing multiple items using Slick Slider.
 * Matches the UAE Government Design System (AEGOV) specifications exactly.
 *
 * @see https://designsystem.gov.ae/docs/components/slider
 *
 * @example
 * ```tsx
 * // Logo Slider (AEGOV default configuration)
 * <Slider variant="logos">
 *   <LogoItem />
 *   <LogoItem />
 *   <LogoItem />
 * </Slider>
 *
 * // Initiative Slider (AEGOV default configuration)
 * <Slider variant="initiatives">
 *   <InitiativeCard />
 *   <InitiativeCard />
 * </Slider>
 *
 * // News Slider (AEGOV default configuration)
 * <Slider variant="news">
 *   <NewsCard />
 *   <NewsCard />
 * </Slider>
 *
 * // Custom configuration
 * <Slider showArrows showDots infinite autoPlay>
 *   <Card />
 *   <Card />
 * </Slider>
 * ```
 */
export const AegovSlider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      variant = 'default',
      showArrows = false,
      showDots = false,
      infinite = false,
      autoPlay = false,
      autoPlayInterval = 3000,
      slidesToShow,
      slidesToScroll,
      responsive,
      children,
      className,
      dataTestId,
      ...rest
    },
    ref
  ) => {
    // Get AEGOV configuration based on variant
    const getAegovSettings = (): Settings => {
      switch (variant) {
        case 'logos':
          return {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: autoPlayInterval,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
              { breakpoint: 480, settings: { slidesToShow: 2, slidesToScroll: 2 } }
            ]
          };

        case 'initiatives':
          return {
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: autoPlayInterval,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
          };

        case 'news':
          return {
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            dots: true,
            arrows: false,
            infinite: true,
            autoplaySpeed: autoPlayInterval,
            responsive: [
              { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 1 } },
              { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
              { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } }
            ]
          };

        default:
          return {
            slidesToShow: slidesToShow || 1,
            slidesToScroll: slidesToScroll || 1,
            autoplay: autoPlay,
            dots: showDots,
            arrows: showArrows,
            infinite,
            autoplaySpeed: autoPlayInterval,
            responsive: responsive || []
          };
      }
    };

    // Merge AEGOV settings with custom overrides
    const sliderSettings: Settings = {
      ...getAegovSettings(),
      // Allow custom overrides for non-AEGOV variants
      ...(variant === 'default' && {
        arrows: showArrows,
        dots: showDots,
        infinite,
        autoplay: autoPlay,
        slidesToShow: slidesToShow || 1,
        slidesToScroll: slidesToScroll || 1,
        ...(responsive && { responsive })
      })
    };

    // Get container class based on variant
    const getContainerClass = () => {
      const baseClasses = 'aegov-slider';

      switch (variant) {
        case 'logos':
          return clsx(baseClasses, 'logos-slider aegovs-slider-style');
        case 'initiatives':
          return clsx(baseClasses, 'initiative-slider aegovs-slider-style');
        case 'news':
          return clsx(baseClasses, 'news-card-slider aegovs-slider-style');
        default:
          return baseClasses;
      }
    };

    return (
      <div
        ref={ref}
        className={clsx(getContainerClass(), className)}
        data-testid={dataTestId}
        {...rest}
      >
        <Slider {...sliderSettings}>
          {React.Children.map(children, (child) => (
            <div className="aegov-slide">{child}</div>
          ))}
        </Slider>
      </div>
    );
  }
);

AegovSlider.displayName = 'AegovSlider';

// Export as default for backwards compatibility
export { AegovSlider as Slider };
export default AegovSlider;
