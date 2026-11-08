import { createContext, useState, useContext, type ReactNode } from "react";

// Describes what the context will give to users
type AuthContextType = {
	isAuthenticated: boolean;
	login: () => void;
	logout: () => void;
};

// Where the context is created. 'Undefined' means one has not been made yet.
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// The Provider: where the value is broadcasted down to everyone inside.
export function AuthProvider({ children }: { children: ReactNode }) {
	// The starting point
	const [isAuthenticated, setIsAuthenticated] = useState(false);

	// Login function
	const login = () => setIsAuthenticated(true);

	// Logout function
	const logout = () => setIsAuthenticated(false);

	// Everything the context provides in one object
	const value = { isAuthenticated, login, logout };

	// The way the value is passed down to every child component
	return <AuthContext.Provider value={}>{children}</AuthContext.Provider>;
}

// Custom hook to login/logout
export function useAuth() {
    const context = useContext(AuthContext);

    // Safety check if useAuth is called outside of <AuthProvider>
    if (context === undefined) {
        throw new Error("useAuth must be used within an AuthProvider");
    }

    return context;
}

