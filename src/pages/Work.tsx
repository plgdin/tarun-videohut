import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../lib/projectsData';

const categories = ["All", "Ad Films", "Music Videos", "Brand Films", "Short Films"];

// Only show first 6 projects on homepage featured section
const projects = projectsData.slice(0, 6);

export default function Work() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="py-32 px-6 bg-[#000000] relative overflow-hidden border-t border-white/5">
      {/* Decorative background light leaks */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-medium tracking-widest uppercase font-display"
            >
              Selected Works
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[48px] md:text-[64px] font-display font-bold leading-[1.1] tracking-tight text-primary text-shadow-cinematic uppercase"
            >
              Cinematic Portfolio
            </motion.h2>
          </div>
          
          <Link 
            to="/projects" 
            className="flex-shrink-0 text-primary font-display font-bold border-b border-primary hover:text-accent hover:border-accent transition-all pb-1 text-[15px] uppercase tracking-widest"
          >
            See All Projects
          </Link>
        </div>

        {/* Filter Tabs */}
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

        {/* Portfolio Grid */}
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
      </div>
    </section>
  );
}
