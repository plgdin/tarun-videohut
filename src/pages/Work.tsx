import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { projectsData } from '../lib/projectsData';
import { VideoPlayer } from '../components/ui/video-thumbnail-player';

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

      <div className="max-w-[1200px] mx-auto relative z-10">
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

        {/* Portfolio Grid — VideoPlayer cards */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                key={project.id} 
              >
                <VideoPlayer
                  thumbnailUrl={project.img}
                  videoUrl={project.videoUrl || "https://vz-dadaa479-fe6.b-cdn.net/6a889e8c-7d03-44de-938d-1c5a7ddd2e0b/play_720p.mp4"}
                  title={project.title}
                  description={`${project.subtitle} · ${project.year}`}
                  className="border border-white/5 rounded-sm"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
