import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import heroBg from '../assets/hero-bg.webp';
import { CinematicFooter } from '../components/ui/motion-footer';

const brandsData = [
  { name: "Budweiser", logo: "🍺" },
  { name: "Royal Enfield", logo: "🏍️" },
  { name: "OLA Electric", logo: "⚡" },
  { name: "Nykaa", logo: "💄" },
  { name: "Flipkart", logo: "🛍️" },
  { name: "Asics", logo: "👟" }
];

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);

  // Typewriter effect variables
  const words = ["DIRECTOR", "ACTOR", "WRITER", "FILMMAKER"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), 1500);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 60 : 120);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    setText(words[index].substring(0, subIndex));
  }, [subIndex, index]);

  return (
    <div className="relative w-full bg-background min-h-screen overflow-x-hidden">
      <main className="relative z-10 w-full bg-background border-b border-border/20 shadow-2xl rounded-b-[2rem] text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full min-h-screen flex items-center bg-transparent overflow-hidden pt-36 md:pt-44 pb-20 px-6 border-b border-white/5">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.08)_0%,transparent_70%)] z-0" />
            <img 
              src={heroBg} 
              alt="Tarun Kapoor Director" 
              className="w-full h-full object-cover object-center opacity-20 select-none pointer-events-none absolute inset-0"
            />
          </div>

          <div className="max-w-[1200px] mx-auto w-full relative z-20">
            <div className="max-w-[800px] space-y-8">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
              >
                Director & Actor
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="text-[32px] sm:text-[52px] md:text-[72px] lg:text-[90px] xl:text-[104px] font-display font-black leading-[0.95] tracking-tight text-primary text-shadow-cinematic uppercase flex items-center gap-x-2 md:gap-x-4 whitespace-nowrap"
              >
                <span>{text}</span>
                <span className="border-r-[6px] border-primary h-[0.8em] animate-pulse -ml-1 md:-ml-2 shrink-0" />
                <span className="text-white">|</span>
                <span className="text-white">TARUN KAPOOR</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[18px] md:text-[22px] text-white/80 leading-[1.6] font-light max-w-[700px] font-body"
              >
                Director, Actor, and Writer for film and theatre based in Bangalore, India. Crafting bold, unapologetic visual stories for global brands and independent cinema.
              </motion.p>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        <section className="py-32 px-6 bg-transparent relative">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-none uppercase text-primary">
                Filmmaking Philosophy
              </h2>
              <div className="w-20 h-[2px] bg-primary" />
            </div>
            <div className="lg:col-span-7 space-y-8 text-[18px] text-white/70 font-body leading-[1.8]">
              <p>
                I believe in cinema that demands attention. My directorial work focuses on striking contrast, high-energy pacing, and raw human performance. From commercial campaigns to independent theatre monologues, my goal is to strip away the fluff and capture the absolute truth of the moment.
              </p>
              <p>
                Over the years, I have written and directed campaigns for world-renowned brands including <strong>Budweiser, Royal Enfield, OLA Electric, Nykaa, Flipkart, Asics, Meesho</strong>, and more. Each project is handled from concept to final cut with a dedicated eye for color, rhythm, and storytelling.
              </p>
              <div className="pt-6 grid grid-cols-2 md:grid-cols-3 gap-6">
                {brandsData.map((brand, i) => (
                  <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-sm hover:border-primary/50 transition-colors flex items-center gap-3">
                    <span className="text-2xl">{brand.logo}</span>
                    <span className="font-display font-bold text-[14px] uppercase tracking-wider">{brand.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <CinematicFooter />
    </div>
  );
}
