// How we navigate without a full page reload
import { Link } from "react-router-dom";
// The whole list of posts to display
import { posts } from "../lib/posts";

export default function BlogIndex() {
	return (
		<div style={{ padding: "2rem" }}>
			<h1>Blog Posts</h1>

			{/* Only show a list if there are posts. Otherwise, show a friendly message. */}
			{posts.length === 0 ? (
				<p>No posts yet.</p>
			) : (
				<ul style={{ listStyle: "none", padding: 0 }}>
					{/* For each post, we make a list item with a link.
              		The `key` prop helps React keep track of which item is which */}
					{posts.map((post) => (
						<li key={post.id} style={{ marginBottom: "1rem" }}>
							{/* This link uses the post's slug to build the URL: /blog/my-first-post */}
							<Link to={`/blog/${post.slug}`} style={{ fontSize: "1.2rem" }}>
								{post.title}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
}
