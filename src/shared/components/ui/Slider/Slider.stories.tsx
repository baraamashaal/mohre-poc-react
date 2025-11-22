import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';
import { Card } from '../Card';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A horizontal scrolling carousel for showcasing multiple items. Uses CSS scroll-snap for smooth scrolling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'logos', 'initiatives', 'news'],
      description: 'Visual variant of the slider',
    },
    showArrows: {
      control: 'boolean',
      description: 'Show navigation arrows',
    },
    showDots: {
      control: 'boolean',
      description: 'Show pagination dots',
    },
    infinite: {
      control: 'boolean',
      description: 'Enable infinite loop',
    },
    autoPlay: {
      control: 'boolean',
      description: 'Enable auto-play',
    },
    autoPlayInterval: {
      control: 'number',
      description: 'Auto-play interval in milliseconds',
    },
  },
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample logo component
const LogoItem = ({ name, color }: { name: string; color: string }) => (
  <a
    href="#"
    className="flex items-center justify-center hover:opacity-90 mx-auto h-40 w-40 sm:h-44 sm:w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 xl:h-56 xl:w-56 2xl:h-60 2xl:w-60 p-2 xl:p-4 rounded-lg border-2 border-gray-200"
    style={{ backgroundColor: color }}
  >
    <span className="text-white font-bold text-lg">{name}</span>
  </a>
);

// Sample card component for initiatives
const InitiativeCard = ({ title, description }: { title: string; description: string }) => (
  <div className="aegov-card card-bordered card-glow !shadow-primary-500/30">
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

// Sample news card
const NewsCard = ({ title, date, category }: { title: string; date: string; category: string }) => (
  <div className="aegov-card card-news">
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

export const Default: Story = {
  args: {
    children: (
      <>
        <Card>
          <h3>Slide 1</h3>
          <p>This is the first slide with some content.</p>
        </Card>
        <Card>
          <h3>Slide 2</h3>
          <p>This is the second slide with different content.</p>
        </Card>
        <Card>
          <h3>Slide 3</h3>
          <p>This is the third slide with more content.</p>
        </Card>
        <Card>
          <h3>Slide 4</h3>
          <p>This is the fourth slide with additional content.</p>
        </Card>
        <Card>
          <h3>Slide 5</h3>
          <p>This is the fifth slide with final content.</p>
        </Card>
      </>
    ),
  },
};

export const WithArrows: Story = {
  args: {
    showArrows: true,
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Content for slide {i + 1}</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const WithDots: Story = {
  args: {
    showDots: true,
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Content for slide {i + 1}</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const WithArrowsAndDots: Story = {
  args: {
    showArrows: true,
    showDots: true,
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Content for slide {i + 1}</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const Infinite: Story = {
  args: {
    showArrows: true,
    infinite: true,
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Infinite loop enabled - arrows never disable</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const AutoPlay: Story = {
  args: {
    autoPlay: true,
    autoPlayInterval: 3000,
    showDots: true,
    infinite: true,
    children: (
      <>
        {Array.from({ length: 5 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Auto-advancing every 3 seconds</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const LogosVariant: Story = {
  args: {
    variant: 'logos',
    children: (
      <>
        <LogoItem name="Partner 1" color="#0066cc" />
        <LogoItem name="Partner 2" color="#00994d" />
        <LogoItem name="Partner 3" color="#cc3300" />
        <LogoItem name="Partner 4" color="#9933cc" />
        <LogoItem name="Partner 5" color="#ff6600" />
        <LogoItem name="Partner 6" color="#009999" />
        <LogoItem name="Partner 7" color="#cc0066" />
      </>
    ),
  },
};

export const InitiativesVariant: Story = {
  args: {
    variant: 'initiatives',
    children: (
      <>
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
      </>
    ),
  },
};

export const NewsVariant: Story = {
  args: {
    variant: 'news',
    children: (
      <>
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
      </>
    ),
  },
};

export const ManySlides: Story = {
  args: {
    showArrows: true,
    showDots: true,
    children: (
      <>
        {Array.from({ length: 15 }, (_, i) => (
          <Card key={i}>
            <h3>Slide {i + 1}</h3>
            <p>Demonstrating behavior with many slides</p>
          </Card>
        ))}
      </>
    ),
  },
};

export const SingleSlide: Story = {
  args: {
    showArrows: true,
    showDots: true,
    children: (
      <Card>
        <h3>Only Slide</h3>
        <p>Demonstrating behavior with a single slide</p>
      </Card>
    ),
  },
};
