import { Navigate, Outlet } from 'react-router-dom';

/**
 * Protected Route Component
 *
 * Wrapper for routes that require authentication.
 * Redirects to login if user is not authenticated.
 *
 * @example
 * <Route element={<ProtectedRoute />}>
 *   <Route path="/dashboard" element={<Dashboard />} />
 * </Route>
 */

interface ProtectedRouteProps {
  /**
   * Redirect path if user is not authenticated
   * @default '/login'
   */
  redirectTo?: string;

  /**
   * Optional role-based access control
   * @example ['company-owner', 'sponsor']
   */
  allowedRoles?: string[];
}

export function ProtectedRoute({
  redirectTo = '/login',
  allowedRoles,
}: ProtectedRouteProps = {}) {
  // TODO: Replace with actual auth hook from features/auth
  // const { isAuthenticated, user } = useAuth();
  const isAuthenticated = false; // Placeholder
  const userRole = 'company-owner'; // Placeholder

  // Check authentication
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} replace />;
  }

  // Check role-based access if roles are specified
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/401" replace />;
  }

  // Render child routes
  return <Outlet />;
}
