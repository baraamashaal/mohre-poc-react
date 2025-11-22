import { Slider, Card } from '../../../shared/components/ui';

export const SliderShowcase = () => {
  // Logo items
  const LogoItem = ({ name, color }: { name: string; color: string }) => (
    <a
      href="#"
      className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4 rounded-lg border-2 border-gray-200"
      style={{ backgroundColor: color }}
    >
      <span className="text-white font-bold text-lg">{name}</span>
    </a>
  );

  // Initiative card
  const InitiativeCard = ({ title, description }: { title: string; description: string }) => (
    <div className="aegov-card card-bordered card-glow !shadow-primary-500/30 min-w-[280px] sm:min-w-[320px]">
      <div className="w-full h-48 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl mb-4"></div>
      <h5>{title}</h5>
      <p className="line-clamp-4">{description}</p>
      <div className="block">
        <a href="#" className="aegov-link" title="Some link text related description">
          View details
          <svg className="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none" />
            <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16" />
          </svg>
        </a>
      </div>
    </div>
  );

  // News card
  const NewsCard = ({ title, date, category }: { title: string; date: string; category: string }) => (
    <div className="aegov-card card-news min-w-[280px] sm:min-w-[320px]">
      <a href="#">
        <div className="w-full h-48 bg-gradient-to-r from-gray-300 to-gray-400 rounded-xl"></div>
      </a>
      <div className="card-content">
        <div className="custom-divide custom-divide-sm flex flex-wrap">
          <div className="text-aeblack-600 text-sm font-normal">{date}</div>
          <a href="#" className="text-sm font-normal">{category}</a>
        </div>
        <h5 className="max-md:text-lg line-clamp-3">{title}</h5>
        <p className="line-clamp-3">
          Sample description text for the news article. This provides context about the content.
        </p>
        <a href="#" className="aegov-link">
          View details
          <svg className="link-icon rtl:-scale-x-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
            <rect width="256" height="256" fill="none"></rect>
            <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></line>
            <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="16"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        <header>
          <h1 className="text-3xl font-bold mb-2">Slider Component</h1>
          <p className="text-gray-600">
            Horizontal scrolling carousel for showcasing multiple items.
          </p>
        </header>

        <section className="space-y-8">
          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Default Slider</h2>
            <p className="text-sm text-gray-600">Basic slider with card content</p>
            <div data-testid="slider-default">
              <Slider>
                {Array.from({ length: 5 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>This is slide {i + 1} with some content.</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">With Navigation Arrows</h2>
            <p className="text-sm text-gray-600">Slider with previous/next arrows</p>
            <div data-testid="slider-arrows">
              <Slider showArrows>
                {Array.from({ length: 5 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>Navigate using the arrow buttons.</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">With Pagination Dots</h2>
            <p className="text-sm text-gray-600">Slider with dot indicators</p>
            <div data-testid="slider-dots">
              <Slider showDots>
                {Array.from({ length: 5 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>Click dots below to navigate.</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Complete Controls</h2>
            <p className="text-sm text-gray-600">Slider with arrows, dots, and infinite loop</p>
            <div data-testid="slider-complete">
              <Slider showArrows showDots infinite>
                {Array.from({ length: 5 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>Full featured slider with all controls.</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Auto Play</h2>
            <p className="text-sm text-gray-600">Slider with automatic progression</p>
            <div data-testid="slider-autoplay">
              <Slider autoPlay autoPlayInterval={4000} showDots infinite>
                {Array.from({ length: 5 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>Auto-advancing every 4 seconds.</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Logos Slider (AEGOV Configuration)</h2>
            <p className="text-sm text-gray-600">Showcase partner logos with AEGOV default settings: 4 slides, autoplay, dots, no arrows</p>
            <div data-testid="slider-logos">
              <Slider variant="logos">
                <LogoItem name="Partner 1" color="#0066cc" />
                <LogoItem name="Partner 2" color="#00994d" />
                <LogoItem name="Partner 3" color="#cc3300" />
                <LogoItem name="Partner 4" color="#9933cc" />
                <LogoItem name="Partner 5" color="#ff6600" />
                <LogoItem name="Partner 6" color="#009999" />
                <LogoItem name="Partner 7" color="#cc0066" />
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Initiatives Slider (AEGOV Configuration)</h2>
            <p className="text-sm text-gray-600">Display government initiatives with AEGOV default settings: 4 slides, autoplay, dots, no arrows</p>
            <div data-testid="slider-initiatives">
              <Slider variant="initiatives">
                <InitiativeCard
                  title="The UAE Hackathon"
                  description="This initiative will create an opportunity for hundreds of young people to use open data as a tool for innovation and to boost economic growth."
                />
                <InitiativeCard
                  title="Digital Skills Forum"
                  description="Empowering youth for a sustainable future through digital skills development and innovation programs."
                />
                <InitiativeCard
                  title="Smart City Initiative"
                  description="Building the future of urban living through technology and sustainable practices for better quality of life."
                />
                <InitiativeCard
                  title="Green Economy Program"
                  description="Promoting sustainable economic growth through environmental conservation and renewable energy solutions."
                />
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">News Slider (AEGOV Configuration)</h2>
            <p className="text-sm text-gray-600">Display news articles with AEGOV default settings: 3 slides, autoplay, dots, no arrows</p>
            <div data-testid="slider-news">
              <Slider variant="news">
                <NewsCard
                  title="TDRA empowers youth for a sustainable future"
                  date="11th Jun 2022"
                  category="Press release"
                />
                <NewsCard
                  title="New digital transformation initiative launched"
                  date="15th Jun 2022"
                  category="News"
                />
                <NewsCard
                  title="Innovation summit brings together tech leaders"
                  date="20th Jun 2022"
                  category="Event"
                />
                <NewsCard
                  title="Smart government services reach new milestone"
                  date="25th Jun 2022"
                  category="Press release"
                />
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Many Slides</h2>
            <p className="text-sm text-gray-600">Slider with 15 items</p>
            <div data-testid="slider-many">
              <Slider showArrows showDots>
                {Array.from({ length: 15 }, (_, i) => (
                  <Card key={i} className="min-w-[280px] sm:min-w-[320px]">
                    <h3>Slide {i + 1}</h3>
                    <p>Item {i + 1} of 15</p>
                  </Card>
                ))}
              </Slider>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm space-y-4">
            <h2 className="text-xl font-semibold">Single Slide</h2>
            <p className="text-sm text-gray-600">Slider with only one item</p>
            <div data-testid="slider-single">
              <Slider showArrows showDots>
                <Card className="min-w-[280px] sm:min-w-[320px]">
                  <h3>Only Slide</h3>
                  <p>This slider contains just one item.</p>
                </Card>
              </Slider>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
