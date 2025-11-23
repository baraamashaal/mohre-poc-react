import { Popover, Button } from '@/shared/components/ui';

/**
 * PopoverShowcase Component
 *
 * Comprehensive showcase and testing page for the Popover component.
 * Demonstrates all variants, placements, and use cases from the AEGOV Design System.
 */
export const PopoverShowcase = () => {
  return (
    <div className="p-8 space-y-12 max-w-7xl mx-auto">
      <div>
        <h1 className="text-3xl font-bold mb-4">Popover Component Showcase</h1>
        <p className="text-aeblack-600">
          Interactive showcase of all popover variants, placements, and states
        </p>
      </div>

      {/* Default Popover (with header) */}
      <section data-testid="default-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Default Popover</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Standard version with title and description for concise contextual information
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Popover
            title="Popover title"
            content="Engaging and insightful content for an enriching experience."
            variant="default"
          >
            <Button>Default popover</Button>
          </Popover>
        </div>
      </section>

      {/* Flexible Popover (body only) */}
      <section data-testid="flexible-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Flexible Popover</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Customizable variant accommodating text, images, links, and rich content
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Popover
            content="Add text, images, links, or any content to enhance the user experience and share extra details."
            variant="flexible"
          >
            <Button>Flexible Popover</Button>
          </Popover>
        </div>
      </section>

      {/* Placement Variations */}
      <section data-testid="placement-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Placement Variations</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Popovers can be placed on any side of the trigger element
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <Popover title="Top popover" content="Positioned on top" side="top">
              <Button>Top</Button>
            </Popover>

            <Popover title="Right popover" content="Positioned on right" side="right">
              <Button>Right</Button>
            </Popover>

            <Popover title="Bottom popover" content="Positioned on bottom" side="bottom">
              <Button>Bottom</Button>
            </Popover>

            <Popover title="Left popover" content="Positioned on left" side="left">
              <Button>Left</Button>
            </Popover>
          </div>
        </div>
      </section>

      {/* Rich Content */}
      <section data-testid="rich-content-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Rich Content</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Popovers can contain links, images, and formatted content
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Popover
              variant="flexible"
              content={
                <div className="space-y-2">
                  <p className="font-semibold mb-1">Quick Actions</p>
                  <div className="flex flex-col gap-1">
                    <a href="#edit" className="text-primary-600 hover:underline text-sm">
                      Edit profile
                    </a>
                    <a href="#settings" className="text-primary-600 hover:underline text-sm">
                      Settings
                    </a>
                    <a href="#logout" className="text-primary-600 hover:underline text-sm">
                      Log out
                    </a>
                  </div>
                </div>
              }
            >
              <Button>Quick Actions</Button>
            </Popover>

            <Popover
              variant="flexible"
              content={
                <div className="space-y-2">
                  <p className="font-semibold mb-1">User Profile</p>
                  <div className="flex items-center gap-3">
                    <img
                      src="https://via.placeholder.com/40"
                      alt="User avatar"
                      className="w-10 h-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium text-sm">John Doe</p>
                      <p className="text-xs text-aeblack-500">john@example.com</p>
                    </div>
                  </div>
                </div>
              }
              width="w-72"
            >
              <Button>User Profile</Button>
            </Popover>
          </div>
        </div>
      </section>

      {/* Width Variations */}
      <section data-testid="width-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Width Variations</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Customize popover width for different content needs
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Popover title="Small" content="Small width popover" width="w-48">
              <Button>Small (w-48)</Button>
            </Popover>

            <Popover title="Default" content="Default width popover" width="w-64">
              <Button>Default (w-64)</Button>
            </Popover>

            <Popover title="Large" content="Large width popover with more space" width="w-96">
              <Button>Large (w-96)</Button>
            </Popover>
          </div>
        </div>
      </section>

      {/* Form Guidance Example */}
      <section data-testid="form-guidance-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Guidance</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Use popovers to provide contextual help for form inputs
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="space-y-4 w-full max-w-md">
            <div>
              <label htmlFor="username" className="block text-sm font-medium mb-1">
                Username
                <Popover
                  variant="flexible"
                  content="Username must be 3-20 characters and can only contain letters, numbers, and underscores."
                  side="right"
                >
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-primary-600 rounded-full hover:bg-primary-700"
                  >
                    ?
                  </button>
                </Popover>
              </label>
              <input
                id="username"
                type="text"
                className="w-full px-3 py-2 border border-aegreylight-100 rounded"
                placeholder="Enter username"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
                <Popover
                  variant="flexible"
                  content="We'll send a verification email to this address."
                  side="right"
                >
                  <button
                    type="button"
                    className="ml-2 inline-flex items-center justify-center w-4 h-4 text-xs text-white bg-primary-600 rounded-full hover:bg-primary-700"
                  >
                    ?
                  </button>
                </Popover>
              </label>
              <input
                id="email"
                type="email"
                className="w-full px-3 py-2 border border-aegreylight-100 rounded"
                placeholder="Enter email"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Without Arrow */}
      <section data-testid="no-arrow-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Without Arrow</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Popovers can be displayed without the arrow pointer
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Popover
            title="No arrow"
            content="This popover has no arrow pointer"
            showArrow={false}
          >
            <Button>No Arrow</Button>
          </Popover>
        </div>
      </section>

      {/* Animation Speeds */}
      <section data-testid="animation-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Animation Duration</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Customize the animation speed with Tailwind duration classes
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-6">
            <Popover
              title="Fast"
              content="Fast animation (100ms)"
              animationDuration="duration-100"
            >
              <Button>Fast (100ms)</Button>
            </Popover>

            <Popover
              title="Default"
              content="Default animation (200ms)"
              animationDuration="duration-200"
            >
              <Button>Default (200ms)</Button>
            </Popover>

            <Popover
              title="Slow"
              content="Slow animation (500ms)"
              animationDuration="duration-500"
            >
              <Button>Slow (500ms)</Button>
            </Popover>
          </div>
        </div>
      </section>

      {/* Icon Trigger */}
      <section data-testid="icon-trigger-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Icon Trigger</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Popovers can be triggered by icon buttons
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <Popover
            variant="flexible"
            content="Additional information about this feature"
            side="right"
          >
            <button
              type="button"
              className="inline-flex items-center justify-center w-8 h-8 text-aeblack-600 hover:bg-aegreylight-50 rounded-full"
              aria-label="More information"
            >
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
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </Popover>
        </div>
      </section>

      {/* Multiple Popovers */}
      <section data-testid="multiple-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Multiple Popovers</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Multiple independent popovers on the same page
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="flex gap-4">
            <Popover title="First" content="First popover content">
              <Button variant="primary">First Popover</Button>
            </Popover>

            <Popover title="Second" content="Second popover content">
              <Button variant="secondary">Second Popover</Button>
            </Popover>

            <Popover title="Third" content="Third popover content">
              <Button variant="tertiary">Third Popover</Button>
            </Popover>
          </div>
        </div>
      </section>

      {/* Keyboard Accessibility */}
      <section data-testid="keyboard-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Keyboard Accessibility</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Popovers are keyboard accessible - tab to focus, Enter/Space to open, Escape to close
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="space-y-4">
            <p className="text-sm font-medium">Try tabbing through these buttons:</p>
            <div className="flex gap-6">
              <Popover title="First" content="First popover">
                <Button>First button</Button>
              </Popover>

              <Popover title="Second" content="Second popover">
                <Button>Second button</Button>
              </Popover>

              <Popover title="Third" content="Third popover">
                <Button>Third button</Button>
              </Popover>
            </div>
          </div>
        </div>
      </section>

      {/* Complex Layout Example */}
      <section data-testid="complex-section" className="space-y-4">
        <h2 className="text-2xl font-semibold">Complex Layout Example</h2>
        <p className="text-sm text-aeblack-600 mb-4">
          Multiple popovers in a realistic UI layout
        </p>
        <div className="p-8 border border-aegreylight-100 rounded-lg">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium">Dashboard</h3>
              <div className="flex gap-2">
                <Popover variant="flexible" content="Edit settings" side="bottom">
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
                </Popover>

                <Popover variant="flexible" content="View notifications" side="bottom">
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
                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                      />
                    </svg>
                  </button>
                </Popover>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {['Tasks', 'Projects', 'Reports'].map((item) => (
                <Popover key={item} title={item} content={`View all ${item.toLowerCase()}`} side="top">
                  <div className="p-4 border border-aegreylight-100 rounded-lg cursor-pointer hover:shadow-sm transition-shadow">
                    <p className="font-medium">{item}</p>
                    <p className="text-2xl font-bold text-primary-600">24</p>
                  </div>
                </Popover>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
