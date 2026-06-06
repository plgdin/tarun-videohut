import Hero from './Hero';
import BrandPartners from '../components/BrandPartners';
import ShowreelSection from '../components/ShowreelSection';
import ServicesSection from './ServicesSection';
import Work from './Work';
import VideoPros from '../components/VideoPros';
import WhyMe from './WhyMe';
import Process from './Process';
import Stats from './Stats';
import Pricing from './Pricing';
import Testimonials from '../components/Testimonials';
import Faq from '../components/Faq';
import BlogsPreview from '../components/BlogsPreview';
import Contact from './Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <BrandPartners />
      <ShowreelSection />
      <ServicesSection />
      <Work />
      <VideoPros />
      <WhyMe />
      <Process />
      <Stats />
      <Pricing />
      <Testimonials />
      <Faq />
      <BlogsPreview />
      <Contact />
    </main>
  );
}
