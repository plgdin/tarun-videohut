import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../lib/projectsData';

const categories = ["All", "Ad Films", "Music Videos", "Brand Films", "Short Films"];

export default function Projects() {
  const [activeTab, setActiveTab] = useState("All");
  const heroRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const filteredProjects = activeTab === "All" 
    ? projectsData 
    : projectsData.filter(p => p.category === activeTab);

  return (
    <main className="w-full bg-[#000000] text-white">
      {/* Projects Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-black overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-10" />
          <motion.img 
            style={{ y, opacity }}
            src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1600&q=80" 
            alt="Cameraman" 
            className="w-full h-full object-cover object-center opacity-40 select-none pointer-events-none absolute inset-0"
          />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 w-full relative z-20 pt-32 md:pt-40">
          <div className="max-w-[700px] space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-tight text-primary text-shadow-cinematic uppercase"
            >
              Our Project<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px] font-body"
            >
              Explore our full collection of cinematic commercial ads, high-energy music videos, documentary features, and narrative short films.
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute left-6 md:left-12 bottom-20 z-20 flex flex-col items-center gap-6"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3 font-display">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        
        {/* Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-3 mb-16"
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-3 rounded-sm border transition-all duration-300 font-display font-bold text-[14px] uppercase tracking-wider ${
                activeTab === cat 
                  ? 'bg-primary text-black border-primary' 
                  : 'bg-transparent text-white/60 border-white/10 hover:border-primary/50 hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Catalog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id} 
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-sm mb-6 relative bg-[#0d0d0d] border border-white/5 video-card shadow-lg">
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                  
                  {/* Category & Year Badge on hover */}
                  <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500 flex gap-2">
                    <span className="px-3 py-1.5 bg-black/85 text-primary rounded-sm border border-primary/20 text-[11px] font-display font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="px-3 py-1.5 bg-black/85 text-white rounded-sm border border-white/10 text-[11px] font-body font-medium">
                      {project.year}
                    </span>
                  </div>

                  <img 
                    src={project.img.startsWith('http') ? project.img : `/assets/${project.img}.png`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "https://mir-s3-cdn-cf.behance.net/projects/max_1200/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png";
                    }}
                  />
                </div>
                <div className="space-y-1 px-1">
                  <h3 className="text-[26px] font-display font-bold text-primary group-hover:text-accent transition-colors tracking-tight uppercase leading-tight">{project.title}</h3>
                  <p className="text-white/50 text-[14px] font-body font-light tracking-wide">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
