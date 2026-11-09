// The component that redirects the user when rendered
import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const { isAuthenticated } = useAuth();

    // If not logged in, redirect to /login
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    // If logged in, show what was passed to in as children
    return <>{children}</>
}