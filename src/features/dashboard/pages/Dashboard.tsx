/**
 * Dashboard Page
 *
 * Main dashboard page for authenticated users.
 * Shows overview of companies, employees, and sponsors.
 */

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-2 text-gray-600">
            Welcome to the MOHRE Dashboard
          </p>
        </header>

        <main>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder cards */}
            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Companies
              </h2>
              <p className="text-gray-600">Manage your companies</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Employees
              </h2>
              <p className="text-gray-600">Manage your employees</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Sponsors
              </h2>
              <p className="text-gray-600">Manage sponsors</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
