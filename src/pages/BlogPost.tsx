// useParams reads the slug
import { useParams, Link } from "react-router-dom";
// The helper that searches mock data by slug
import { getPostBySlug } from "../lib/posts";

export default function BlogPost() {
    const { slug } = useParams<{ slug: string}>();
    // If slug is undefined
    if (!slug) {
        return <p>No post specified.</p>;
    }

    // Look up post in mock data
    const post = getPostBySlug(slug);

    // If slug doesnt match any post, a "not found" message is shown
    if (!post) {
        return (
            <div style={{ padding: "2rem" }}>
                <h1>Post not found</h1>
                <p>We couldn't find a post with the slug "{slug}".</p>
                <Link to="/blog">Back to all posts</Link>
            </div>
        );
    }

    return (
        <div style={{ padding: "2rem", maxWidth: "700px" }}>
            <Link to="/blog">← Back to all posts</Link>
            <h1>{post.title}</h1>
            <p style={{ lineHeight: "1.6" }}>{post.content}</p>
        </div>
    );
}