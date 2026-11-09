import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
	const { login } = useAuth();
	const navigate = useNavigate();

	// When the user clicks Log In: isAuthenticated will be set to true and the user will be sent to the Admin page
	const handleLogin = () => {
		login();
		navigate("/admin");
	};

	return (
		<div style={{ padding: "2rem" }}>
			<h1>Log In</h1>
			<p>
				Click the button below to log in. (No real password needed - this is a
				simulation.)
			</p>
			<button
				onClick={handleLogin}
				style={{
					padding: "0.6rem 1.2rem",
					fontSize: "1rem",
					cursor: "pointer",
				}}>
				Log In
			</button>
		</div>
	);
}
