import { Link } from 'react-router-dom';
import { Button } from '../ui';

/**
 * 404 Not Found Page
 *
 * Displayed when user navigates to a non-existent route
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-900">404</h1>
        <h2 className="text-4xl font-semibold text-gray-700 mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mt-4 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link to="/">
          <Button size="lg">Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
