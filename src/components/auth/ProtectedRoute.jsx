/**
 * ==========================================================
 * Protected Route
 * ==========================================================
 *
 * Purpose:
 * Prevents unauthenticated users from accessing
 * protected pages.
 *
 * Flow:
 *
 * User visits protected page
 *          ↓
 * Check currentUser
 *          ↓
 * If authenticated → render page
 * If not → redirect to Login
 * ==========================================================
 */

import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
// import { useAuth } from "../../hooks/useAuth";

function ProtectedRoute({ children }) {

    const { currentUser } = useAuth();

    if (!currentUser) {

        return <Navigate to="/login" replace />;

    }

    return children;

}

export default ProtectedRoute;