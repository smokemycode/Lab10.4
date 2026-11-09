import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div style={{ padding: "2rem" }}>
            <h1>Welcome to My Blog</h1>
            <p>This is a small demo app for practicing React Router.</p>
            <Link to="/blog">Go to the blog</Link>
        </div>
    );
}