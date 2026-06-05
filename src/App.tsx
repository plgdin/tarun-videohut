import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './pages/Hero'
import Services from './pages/Services'
import Work from './pages/Work'
import WhyMe from './pages/WhyMe'
import Process from './pages/Process'
import Stats from './pages/Stats'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <Work />
        <WhyMe />
        <Process />
        <Stats />
        <Pricing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
