import { Avatar } from '@/shared/components/ui';

/**
 * AvatarShowcase Component
 *
 * Comprehensive showcase and testing page for the Avatar component.
 * Demonstrates all variants, states, and use cases from the AEGOV Design System.
 */
export const AvatarShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto py-12 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Avatar Component Showcase</h1>
          <p className="text-gray-600">Testing and demonstration page for Avatar component</p>
        </header>

        <div className="space-y-12">
          {/* Section 1: Default Avatar */}
          <section data-testid="default-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Default Avatar</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Avatar
                src="https://i.pravatar.cc/150?img=1"
                alt="John Doe"
                data-testid="avatar-default"
              />
            </div>
          </section>

          {/* Section 2: Initials Fallback */}
          <section data-testid="initials-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Avatar with Initials Fallback
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <Avatar
                alt="Ahmed Hassan"
                fallback={<span className="font-semibold">AH</span>}
                data-testid="avatar-initials"
              />
            </div>
          </section>

          {/* Section 3: Size Variants */}
          <section data-testid="sizes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Size Variants</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-end gap-4 flex-wrap">
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=2"
                    alt="User XS"
                    size="xs"
                    data-testid="avatar-xs"
                  />
                  <p className="text-sm text-gray-600 mt-2">XS (24px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=3"
                    alt="User SM"
                    size="sm"
                    data-testid="avatar-sm"
                  />
                  <p className="text-sm text-gray-600 mt-2">SM (32px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=4"
                    alt="User Base"
                    size="base"
                    data-testid="avatar-base"
                  />
                  <p className="text-sm text-gray-600 mt-2">Base (40px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=5"
                    alt="User LG"
                    size="lg"
                    data-testid="avatar-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2">LG (48px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=6"
                    alt="User XL"
                    size="xl"
                    data-testid="avatar-xl"
                  />
                  <p className="text-sm text-gray-600 mt-2">XL (56px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=7"
                    alt="User 2XL"
                    size="2xl"
                    data-testid="avatar-2xl"
                  />
                  <p className="text-sm text-gray-600 mt-2">2XL (64px)</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=8"
                    alt="User 3XL"
                    size="3xl"
                    data-testid="avatar-3xl"
                  />
                  <p className="text-sm text-gray-600 mt-2">3XL (80px)</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 4: Shape Variants */}
          <section data-testid="shapes-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Shape Variants</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=9"
                    alt="Square Avatar"
                    variant="square"
                    size="lg"
                    data-testid="avatar-square"
                  />
                  <p className="text-sm text-gray-600 mt-2">Square</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=10"
                    alt="Rounded Avatar"
                    variant="rounded"
                    size="lg"
                    data-testid="avatar-rounded"
                  />
                  <p className="text-sm text-gray-600 mt-2">Rounded</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 5: Status Indicators */}
          <section data-testid="status-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Status Indicators</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-6">
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=11"
                    alt="Online User"
                    status="online"
                    size="lg"
                    data-testid="avatar-online"
                  />
                  <p className="text-sm text-gray-600 mt-2">Online</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=12"
                    alt="Offline User"
                    status="offline"
                    size="lg"
                    data-testid="avatar-offline"
                  />
                  <p className="text-sm text-gray-600 mt-2">Offline</p>
                </div>
                <div className="text-center">
                  <Avatar
                    src="https://i.pravatar.cc/150?img=13"
                    alt="No Status User"
                    status="none"
                    size="lg"
                    data-testid="avatar-no-status"
                  />
                  <p className="text-sm text-gray-600 mt-2">No Status</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6: Rounded with Status */}
          <section data-testid="rounded-status-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Rounded with Status Indicator
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-6">
                <Avatar
                  src="https://i.pravatar.cc/150?img=14"
                  alt="Sarah Ahmed"
                  variant="rounded"
                  status="online"
                  size="xl"
                  data-testid="avatar-rounded-online"
                />
                <Avatar
                  src="https://i.pravatar.cc/150?img=15"
                  alt="Mohammed Ali"
                  variant="rounded"
                  status="offline"
                  size="xl"
                  data-testid="avatar-rounded-offline"
                />
              </div>
            </div>
          </section>

          {/* Section 7: Initials with Status */}
          <section data-testid="initials-status-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Initials with Status Indicator
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-6">
                <Avatar
                  alt="Fatima Hassan"
                  fallback={<span className="font-semibold text-lg">FH</span>}
                  variant="rounded"
                  status="online"
                  size="xl"
                  data-testid="avatar-initials-online"
                />
                <Avatar
                  alt="Ahmed Saeed"
                  fallback={<span className="font-semibold text-lg">AS</span>}
                  variant="rounded"
                  status="offline"
                  size="xl"
                  data-testid="avatar-initials-offline"
                />
              </div>
            </div>
          </section>

          {/* Section 8: User Profile Card */}
          <section data-testid="profile-card-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">User Profile Card</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-center gap-4" data-testid="profile-card">
                <Avatar
                  src="https://i.pravatar.cc/150?img=16"
                  alt="Profile picture of Laila Mohammed"
                  variant="rounded"
                  status="online"
                  size="2xl"
                  data-testid="avatar-profile"
                />
                <div>
                  <h3 className="font-semibold text-lg">Laila Mohammed</h3>
                  <p className="text-gray-600">Senior Developer</p>
                  <p className="text-sm text-green-600 font-medium">Online</p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 9: Team List */}
          <section data-testid="team-list-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Team Members List</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="space-y-4" data-testid="team-list">
                {[
                  { name: 'Ahmed Ali', img: '17', status: 'online' as const, role: 'Developer' },
                  {
                    name: 'Sarah Hassan',
                    img: '18',
                    status: 'online' as const,
                    role: 'Designer',
                  },
                  {
                    name: 'Mohammed Saeed',
                    img: '19',
                    status: 'offline' as const,
                    role: 'Manager',
                  },
                  {
                    name: 'Laila Ahmed',
                    img: '20',
                    status: 'online' as const,
                    role: 'Product Owner',
                  },
                ].map((member, index) => (
                  <div key={index} className="flex items-center gap-3" data-testid={`team-member-${index}`}>
                    <Avatar
                      src={`https://i.pravatar.cc/150?img=${member.img}`}
                      alt={member.name}
                      status={member.status}
                      variant="rounded"
                      size="base"
                    />
                    <div>
                      <p className="font-medium">{member.name}</p>
                      <p className="text-sm text-gray-600">{member.role}</p>
                    </div>
                    <span
                      className={`ml-auto text-xs px-2 py-1 rounded-full ${
                        member.status === 'online'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-gray-100 text-gray-700'
                      }`}
                    >
                      {member.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Section 10: All Sizes with Initials */}
          <section data-testid="sizes-initials-section">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              All Sizes with Initials Fallback
            </h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex items-end gap-4 flex-wrap">
                {(['xs', 'sm', 'base', 'lg', 'xl', '2xl', '3xl'] as const).map((size) => (
                  <div key={size} className="text-center">
                    <Avatar
                      alt="User"
                      fallback={<span className="font-semibold">U</span>}
                      size={size}
                      variant="rounded"
                      data-testid={`avatar-initials-${size}`}
                    />
                    <p className="text-sm text-gray-600 mt-2">{size}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};
