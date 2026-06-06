import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { projectsData } from '../lib/projectsData';

const categories = ["All", "Commercial", "Documentary", "Corporate", "Short Film"];

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
    <main className="w-full bg-[#0d0d0d] text-white">
      {/* Projects Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#0d0d0d] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
          <motion.img 
            style={{ y, opacity }}
            src="/assets/cameraman_bg.png" 
            alt="Cameraman" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 pt-20">
          <div className="max-w-[700px] space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-[-0.03em] text-white"
            >
              Our Project<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px]"
            >
              From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!
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
          <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange"
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Grid Section */}
      <section className="py-20 px-6 max-w-[1200px] mx-auto">
        
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
              className={`px-6 py-3 rounded-full border transition-all duration-300 font-medium text-[14px] ${
                activeTab === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white/60 border-white/10 hover:border-white/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Catalog Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id} 
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden rounded-[24px] mb-6 relative bg-[#111] border border-white/5">
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-colors duration-500 z-10" />
                  
                  {/* Category Badge on hover */}
                  <div className="absolute top-6 left-6 z-20 opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    <span className="px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-xs font-bold uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <img 
                    src={`/assets/${project.img}.png`} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/portfolio_1.png";
                    }}
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="text-[24px] font-display font-bold group-hover:text-brand-orange transition-colors">{project.title}</h3>
                  <p className="text-white/50 text-[15px] font-light">{project.subtitle}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </main>
  );
}
