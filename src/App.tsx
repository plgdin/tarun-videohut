import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Albums from './pages/Albums'
import About from './pages/About'
import Services from './pages/Services'
import Blogs from './pages/Blogs'

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/photo-albums" element={<Albums />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
