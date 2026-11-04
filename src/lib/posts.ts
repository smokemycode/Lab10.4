// The shape of our data
export type Post = {
    id: number;
    slug: string;
    title: string;
    content: string;
}

// The mock "Fake" database
export const posts: Post[] = [
    {
        id: 1,
        slug: "my-first-post",
        title: "My First Post",
        content: "Welcome to my blog! This is my very first post. I am React router and this post exists to prove the dynamic route works.",
    },
    {
        id: 2,
        slug: "react-router-basics",
        title: "React Router Basics",
        content: "React Router lets us change what's on screen based on the URL. <BrowserRouter> wraps the app, <Routes> holds the rules, and <Route> is one rule saying 'this URL shows this component'.",
    },
    {
        id: 3,
        slug: "why-typescript",
        title: "Why TypeScript?",
        content: "TypeScript adds types to JavaScript. Types help us catch mistakes before we run the code.",
    }
]

// Helper function to find one post by its slug.
export function getPostBySlug(slug: string): Post | undefined {
    return posts.find((post) => post.slug === slug);
}