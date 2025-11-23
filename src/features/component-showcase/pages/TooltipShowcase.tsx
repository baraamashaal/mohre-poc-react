import { Tooltip, Button } from '@/shared/components/ui';

/**
 * TooltipShowcase Component
 *
 * Comprehensive showcase and testing page for the Tooltip component.
 * Demonstrates all variants, placements, and use cases from the AEGOV Design System.
 */
export const TooltipShowcase = () => {
  return (
    <div className="p-8 space-y-12 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">Tooltip Component Showcase</h1>
        <p className="text-aeblack-600">
          Interactive showcase of all tooltip variants, placements, and states
        </p>
      </div>

      {/* Default Tooltip */}
      <section data-testid="default-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Default Tooltip (Hover)</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Basic tooltip that appears on hover with default top placement
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Tooltip content="This is a default tooltip">
            <Button>Hover me</Button>
          </Tooltip>
        </div>
      </section>

      {/* Placement Variations */}
      <section data-testid="placement-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Placement Variations</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Tooltips can be placed on any side of the trigger element
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Tooltip content="Top tooltip" side="top">
              <Button>Top</Button>
            </Tooltip>

            <Tooltip content="Right tooltip" side="right">
              <Button>Right</Button>
            </Tooltip>

            <Tooltip content="Bottom tooltip" side="bottom">
              <Button>Bottom</Button>
            </Tooltip>

            <Tooltip content="Left tooltip" side="left">
              <Button>Left</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Click Trigger */}
      <section data-testid="click-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Click Trigger</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Tooltip activated by clicking instead of hovering
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Tooltip
            content="Click to toggle tooltip"
            trigger="click"
          >
            <Button>Click me</Button>
          </Tooltip>
        </div>
      </section>

      {/* Custom Delay */}
      <section data-testid="delay-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Custom Delay</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Control the delay before the tooltip appears
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Tooltip content="No delay" delay={0}>
              <Button>No delay</Button>
            </Tooltip>

            <Tooltip content="500ms delay" delay={500}>
              <Button>Medium delay</Button>
            </Tooltip>

            <Tooltip content="1000ms delay" delay={1000}>
              <Button>Long delay</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Animation Duration */}
      <section data-testid="animation-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Animation Duration</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Customize the animation speed with Tailwind duration classes
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Tooltip
              content="Fast animation"
              animationDuration="duration-100"
             
            >
              <Button>Fast (100ms)</Button>
            </Tooltip>

            <Tooltip
              content="Default animation"
              animationDuration="duration-500"
             
            >
              <Button>Default (500ms)</Button>
            </Tooltip>

            <Tooltip
              content="Slow animation"
              animationDuration="duration-1000"
             
            >
              <Button>Slow (1000ms)</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Long Content */}
      <section data-testid="content-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Content Variations</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Tooltips with different content lengths
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Tooltip content="Short">
              <Button>Short content</Button>
            </Tooltip>

            <Tooltip
              content="This is a medium length tooltip with more details"
             
            >
              <Button>Medium content</Button>
            </Tooltip>

            <Tooltip
              content="This is a much longer tooltip that contains significantly more detailed information about the element and its purpose"
             
            >
              <Button>Long content</Button>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Different Triggers */}
      <section data-testid="triggers-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Different Trigger Elements</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Tooltips can be applied to various HTML elements
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex flex-col gap-6 items-start">
            <Tooltip content="Button tooltip">
              <Button>Button with tooltip</Button>
            </Tooltip>

            <Tooltip content="Link tooltip">
              <a
                href="#"
                className="text-primary-600 hover:underline"
                onClick={(e) => e.preventDefault()}
              >
                Link with tooltip
              </a>
            </Tooltip>

            <Tooltip content="Span tooltip">
              <span className="border border-aegreylight-100 px-4 py-2 rounded cursor-help">
                Hover over this text
              </span>
            </Tooltip>

            <Tooltip content="Icon tooltip">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center cursor-pointer">
                <svg
                  className="w-6 h-6 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </Tooltip>
          </div>
        </div>
      </section>

      {/* Keyboard Accessibility */}
      <section data-testid="keyboard-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Keyboard Accessibility</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Tooltips are keyboard accessible - tab to focus elements
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="space-y-4">
            <p className="text-sm font-medium">Try tabbing through these buttons:</p>
            <div className="flex gap-6">
              <Tooltip content="First tooltip">
                <Button>First button</Button>
              </Tooltip>

              <Tooltip content="Second tooltip">
                <Button>Second button</Button>
              </Tooltip>

              <Tooltip content="Third tooltip">
                <Button>Third button</Button>
              </Tooltip>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Layout */}
      <section data-testid="complex-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Complex Layout Example</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Multiple tooltips in a realistic UI layout
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">User Dashboard</h3>
              <div className="flex gap-2">
                <Tooltip content="Edit profile" side="bottom">
                  <button className="p-2 hover:bg-aegreylight-50 rounded">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                      />
                    </svg>
                  </button>
                </Tooltip>

                <Tooltip content="Settings" side="bottom">
                  <button className="p-2 hover:bg-aegreylight-50 rounded">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </button>
                </Tooltip>

                <Tooltip content="Help & Support" side="bottom">
                  <button className="p-2 hover:bg-aegreylight-50 rounded">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </Tooltip>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['Tasks', 'Projects', 'Reports'].map((item) => (
                <Tooltip key={item} content={`View ${item.toLowerCase()}`} side="top">
                  <div className="p-4 border border-aegreylight-100 rounded-lg cursor-pointer hover:shadow-sm transition-shadow">
                    <p className="font-medium">{item}</p>
                    <p className="text-2xl font-bold text-primary-600">24</p>
                  </div>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
