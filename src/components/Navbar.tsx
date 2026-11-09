// Link is the tag that uses useNavigate (hook) to move the user
import { Link, useNavigate } from "react-router-dom";
// Custom hook to rad the login state and call the right function
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
	const { isAuthenticated, logout } = useAuth();
	const navigate = useNavigate();

	// Will be called when the user clicks logout and sends the user to the home page so they will not be sitting on a protected page
	const handleLogout = () => {
		logout();
		navigate("/");
	};

	return (
		<nav style={navStyle}>
			{/* The brand/logo always links to the home page */}
			<Link to="/" style={linkStyle}>
				My Blog
			</Link>

			<div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
				{/* Always show a link to the blog list */}
				<Link to="/blog" style={linkStyle}>
					Blog
				</Link>

				{/* If logged in, show Admin link and Logout button.
                If NOT logged in, show Login link.
                This is "conditional rendering" — showing UI based on a condition. */}
				{isAuthenticated ? (
					<>
						<Link to="/admin" style={linkStyle}>
							Admin
						</Link>
						<button onClick={handleLogout} style={buttonStyle}>
							Log Out
						</button>
					</>
				) : (
					<Link to="/login" style={linkStyle}>
						Log In
					</Link>
				)}
			</div>
		</nav>
	);
}

// Inline styles so the app is not plain and keeps the lab independent
const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  borderBottom: "1px solid #ccc",
};

const linkStyle: React.CSSProperties = {
  textDecoration: "none",
  color: "#333",
  fontWeight: "bold",
};

const buttonStyle: React.CSSProperties = {
  padding: "0.4rem 0.8rem",
  border: "1px solid #ccc",
  borderRadius: "4px",
  background: "#fff",
  cursor: "pointer",
};