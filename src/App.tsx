import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import BlogIndex from "./pages/BlogIndex";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogIndex />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<ProtectedRoute><Admin /></ProtectedRoute>} />
          <Route path="*" element={<p style={{ padding: "2rem" }}>Page not found</p>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;