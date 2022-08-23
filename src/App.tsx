import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, BlogPost, BlogPosts, Category, Home, NotFound } from "./pages";
import { Footer, Navbar, NotificationModal } from "./components";
import { useUIStore } from "./state/store";

const modalContent = {
  message: "Thank You!",
  description: "You have subscribed to our newsletter. We will notify you soon.",
};

function App() {
  const { isNotificationModalOpen } = useUIStore((state) => state);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/post/:id" element={<BlogPost />} />
        <Route path="/posts" element={<BlogPosts />} />
        <Route path="/posts/:category" element={<Category />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      {isNotificationModalOpen && (
        <NotificationModal message={modalContent.message} description={modalContent.description} />
      )}
    </Router>
  );
}

export default App;
