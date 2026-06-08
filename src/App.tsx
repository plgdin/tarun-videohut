import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Albums from './pages/Albums';
import About from './pages/About';
import AlbumDetail from './pages/AlbumDetail';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';

function AppContent() {
  const location = useLocation();
  
  // Design pattern: No footer on home page, detail pages and full-screen album pages
  const isDetailPage = 
    location.pathname === '/' ||
    location.pathname === '/about' ||
    location.pathname === '/contact' ||
    location.pathname.startsWith('/photo-albums/') ||
    location.pathname === '/albums' ||
    location.pathname === '/photo-albums';

  return (
    <div className="min-h-screen bg-black text-white flex flex-col justify-between">
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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      {!isDetailPage && <Footer />}
    </div>
  );
}

import SmoothScroll from './components/ui/smooth-scroll';

function App() {
  return (
    <SmoothScroll>
      <AppContent />
    </SmoothScroll>
  );
}

export default App;
