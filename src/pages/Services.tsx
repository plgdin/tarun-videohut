import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';

const preProduction = [
  { title: "Directorial Treatment", desc: "Crafting a unique aesthetic vision, mood boards, and thematic treatments that define the look, feel, and pacing of the campaign." },
  { title: "Scriptwriting & Adapting", desc: "Writing screenplays, ad copy, and dialogue that hit emotional beats and deliver clear brand messages with absolute precision." },
  { title: "Storyboarding & Blocking", desc: "Translating script action into frame-by-frame visual maps, specifying camera movements, lenses, and character staging." }
];

const production = [
  { title: "Cinematography & Framing", desc: "Directing lighting, composition, and lens choices to create striking contrasts, raw atmospheres, and immersive visuals." },
  { title: "Actor & Performance Direction", desc: "Working closely with talent on set to strip away artificiality, drawing out raw, authentic, and emotionally charged performances." },
  { title: "Scale Model & Creative Shoots", desc: "Orchestrating complex product shoots, macro miniature scale modeling (e.g. Royal Enfield Motorverse), and custom setups." }
];

const postProduction = [
  { title: "Narrative Editing", desc: "Meticulously assembling takes to control pacing, rhythm, tension, and emotional build-up across the entire edit." },
  { title: "High-Contrast Color Grading", desc: "Crafting custom color maps to give each film a distinct, premium, and cinematic tone (from golden warm to cold steel)." },
  { title: "Sound Design & Pacing", desc: "Layering ambient soundscapes, sound effects, and rhythmic pacing that blend with the music score to guide the viewer's attention." }
];

const categories = [
  "Ad Films", "Brand Commercials", "Music Videos", "Short Films", 
  "Theatre Monologues", "Directorial Consultation", "Screenplay Writing", "Creative Treatments"
];

const ProcessCard = ({ title, desc }: { title: string, desc: string }) => (
  <div className="p-8 rounded-sm border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors duration-300">
    <h4 className="text-[20px] font-bold font-display uppercase tracking-tight text-primary mb-4">{title}</h4>
    <p className="text-white/60 leading-relaxed font-light text-[15px] font-body">{desc}</p>
  </div>
);

export default function Services() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-black min-h-screen text-white pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden mx-2 md:mx-4 mb-24 md:mb-32 border-b border-white/5">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/projects/max_808/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png" 
            alt="Video Production Services" 
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-[900px] mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase mb-6">
              Services
            </div>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-display font-bold leading-[1.1] tracking-tight mb-8 uppercase text-primary">
              Directorial craft
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-[1.6] max-w-[600px] mx-auto font-light font-body">
              From treatment to final screen, offering complete directorial solutions for commercials, brands, and narratives.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Services Subtitle Banner */}
      <section className="py-24 overflow-hidden border-y border-white/5 bg-[#0a0a0a]">
        <div className="max-w-[1200px] mx-auto px-6 text-center space-y-6">
          <h2 className="text-[32px] md:text-[48px] font-display font-bold uppercase text-primary">
            From Script to Screen: Complete Directorial Control
          </h2>
          <p className="text-white/60 max-w-[600px] mx-auto font-light leading-relaxed mb-8 font-body">
            I lead projects from scriptwriting to color-grading to ensure a cohesive, striking, and high-energy final cut.
          </p>
          <Link to="/contact" className="inline-block px-8 py-4 bg-primary text-black font-display font-bold rounded-sm hover:bg-accent transition-colors duration-300 tracking-wider uppercase">
            Let's Discuss Your Project
          </Link>
        </div>
      </section>

      {/* Pre-Production */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-primary" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight uppercase text-primary">Pre-Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg font-body">
                The blueprint of the film. Laying the foundations through visual treatment, casting direction, script development, and shot scheduling.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preProduction.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 order-2 lg:order-1">
              {production.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
            <div className="space-y-6 order-1 lg:order-2 lg:text-right flex flex-col lg:items-end">
              <div className="w-16 h-[2px] bg-primary" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight uppercase text-primary">Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg font-body lg:text-right max-w-[400px]">
                On set, translating visual theory into cinematic reality. Directing performances, orchestrating camera setups, and crafting raw atmospheres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Production */}
      <section className="py-32 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16">
            <div className="space-y-6">
              <div className="w-16 h-[2px] bg-primary" />
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight uppercase text-primary">Post-Production</h2>
              <p className="text-white/60 leading-relaxed font-light text-lg font-body">
                Bringing the puzzle pieces together. Sculpting the final output through narrative-driven editing, high-contrast color grading, and sonic rhythm.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {postProduction.map((item, idx) => (
                <ProcessCard key={idx} title={item.title} desc={item.desc} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-32 px-6 bg-[#0a0a0a] border-t border-white/5">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-[40px] md:text-[56px] font-display font-bold uppercase text-primary">
              Directorial Formats
            </h2>
            <p className="text-white/60 max-w-[600px] mx-auto font-light text-lg font-body">
              Working across multiple formatting layers to bring visual energy to brands, musicians, and stages.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {categories.map((category, idx) => (
              <div 
                key={idx} 
                className="group p-8 rounded-sm bg-[#0d0d0d] border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col justify-between h-[180px] video-card"
              >
                <div className="text-primary/30 font-display font-bold text-2xl group-hover:text-primary transition-colors">
                  {(idx + 1).toString().padStart(2, '0')}
                </div>
                <h3 className="text-xl font-display font-bold group-hover:translate-x-2 transition-transform duration-300 uppercase">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
