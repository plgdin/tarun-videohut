import Hero from './Hero';
import Work from './Work';
import Testimonials from '../components/Testimonials';
import Contact from './Contact';
import { CinematicFooter } from '../components/ui/motion-footer';

export default function Home() {
  return (
    <div className="relative w-full bg-background min-h-screen overflow-x-hidden">
      {/* 
        MAIN CONTENT AREA 
        We use a high z-index to allow the user to scroll down 
        and reveal the footer securely underneath.
      */}
      <main className="relative z-10 w-full bg-background border-b border-border/20 shadow-2xl rounded-b-[2rem]">
        <Hero />
        <Work />
        <Testimonials />
        <Contact />
      </main>

      {/* The Cinematic Footer is injected here */}
      <CinematicFooter />
    </div>
  );
}
