import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Albums from './pages/Albums';
import About from './pages/About';
import Services from './pages/Services';
import Blogs from './pages/Blogs';
import BlogDetail from './pages/BlogDetail';
import AlbumDetail from './pages/AlbumDetail';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  
  // Design pattern: No footer on detail pages
  const isDetailPage = 
    location.pathname.startsWith('/blogs/') || 
    location.pathname.startsWith('/photo-albums/');

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white flex flex-col justify-between">
      <ScrollToTop />
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/photo-albums" element={<Albums />} />
          <Route path="/photo-albums/:slug" element={<AlbumDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      {!isDetailPage && <Footer />}
    </div>
  );
}

function App() {
  return <AppContent />;
}

export default App;
