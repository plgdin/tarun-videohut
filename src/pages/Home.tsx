import Hero from './Hero'
import ServicesSection from './ServicesSection'
import Work from './Work'
import WhyMe from './WhyMe'
import Process from './Process'
import Stats from './Stats'
import Pricing from './Pricing'
import Contact from './Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesSection />
      <Work />
      <WhyMe />
      <Process />
      <Stats />
      <Pricing />
      <Contact />
    </main>
  )
}
