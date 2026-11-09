# Lab 4: Dynamic Routing

A small blog app built with React, TypeScript, React Router, and (bonus) Framer Motion.

## What It Does

- A **home page** (`/`)
- A **blog index** (`/blog`) listing all posts
- A **dynamic blog post page** (`/blog/:slug`) that looks up a post by its slug
- A **login page** (`/login`) that simulates logging in (no real password)
- A **protected admin page** (`/admin`) that redirects you to `/login` if you're not logged in
- (Bonus) **Fade transitions** between pages using Motion (formerly known as framer-motion)

## Tech Stack

- React + TypeScript (Vite)
- React Router 
- Framer Motion (bonus)

## How to Run

1. Clone the repo.
2. Run `npm install`.
3. Run `npm run dev`.
4. Open the URL Vite prints (usually `http://localhost:5173`).

## How to Test

1. Go to `/blog` — you should see three post titles.
2. Click a post — the URL changes to `/blog/<slug>` and the post shows.
3. Try `/blog/does-not-exist` — you should see "Post not found."
4. Try to visit `/admin` while logged out — you should be redirected to `/login`.
5. Click "Log In" — you are sent to `/admin` and see the dashboard.
6. Click "Log Out" in the navbar — the Admin link disappears and you're logged out.

## Project Structure
```
src/
├── components/
│ ├── Navbar.tsx // top nav with login/logout + admin link
│ └── ProtectedRoute.tsx // "bouncer" that checks auth before rendering
├── context/
│ └── AuthContext.tsx // shared login state + useAuth hook
├── lib/
│ └── posts.ts // mock blog data + getPostBySlug helper
├── pages/
│ ├── Home.tsx
│ ├── BlogIndex.tsx // list of all posts
│ ├── BlogPost.tsx // one post, found by slug from URL
│ ├── Login.tsx
│ └── Admin.tsx
├── App.tsx // routes + providers
└── main.tsx // entry point
```


## What I Learned

- How to use `<BrowserRouter>`, `<Routes>`, and `<Route>` to set up routing.
- How dynamic routes work: `:slug` in the path becomes a variable I can read with `useParams()`.
- How to build a custom context (`AuthContext`) + custom hook (`useAuth`) so any component can read the login state.
- How a "protected route" works: a wrapper component that redirects with `<Navigate />` if the user isn't authenticated.
- How to read URL parameters and handle "not found" cases cleanly.
- (Bonus) How to wrap routes in `<AnimatePresence>` and `motion.div` to add fade transitions.

## Notes

- Authentication is **fake** — it's just a boolean in React state. Refreshing the page logs you out because state resets. That's expected for this lab.
- Blog posts are hard-coded in `src/lib/posts.ts`; no server or database is involved.