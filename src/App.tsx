import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "motion/react";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function AppRoutes() {
	const location = useLocation();

	return (
		<AnimatePresence mode="wait">
			<motion.div
				key={location.pathname}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ duration: 0.25 }}>
				<Routes location={location}>
					<Route path="/" element={<Home />} />
					<Route path="/blog" element={<BlogIndex />} />
					<Route path="/blog/:slug" element={<BlogPost />} />
					<Route path="/login" element={<Login />} />
					<Route
						path="/admin"
						element={
							<ProtectedRoute>
								<Admin />
							</ProtectedRoute>
						}
					/>
					<Route
						path="*"
						element={<p style={{ padding: "2rem" }}>Page not found</p>}
					/>
				</Routes>
			</motion.div>
		</AnimatePresence>
	);
}

function App() {
	return (
		<AuthProvider>
			<BrowserRouter>
				<Navbar />
				<AppRoutes />
			</BrowserRouter>
		</AuthProvider>
	);
}

export default App;
