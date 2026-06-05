import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = ["All", "Commercial", "Documentary", "Corporate", "Short Film"];

const projects = [
  { id: 1, title: "GreenWaves", subtitle: "Eco-Warriors", category: "Documentary", img: "portfolio_1" },
  { id: 2, title: "Mystic Horizons", subtitle: "ModeElite", category: "Commercial", img: "portfolio_2" },
  { id: 3, title: "Pixel Fusion", subtitle: "Techno", category: "Corporate", img: "portfolio_3" },
  { id: 4, title: "EcoExplorer", subtitle: "GreenEarth", category: "Documentary", img: "portfolio_1" },
  { id: 5, title: "Urban Uplift", subtitle: "MetroScape", category: "Short Film", img: "portfolio_2" },
  { id: 6, title: "Sonic Waves", subtitle: "AudioTech", category: "Commercial", img: "portfolio_3" },
];

export default function Work() {
  const [activeTab, setActiveTab] = useState("All");

  const filteredProjects = activeTab === "All" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="work" className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-brand-teal/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-[13px] font-medium tracking-wide uppercase"
            >
              Portfolio
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]"
            >
              Our Handpicked <br className="hidden md:block"/>Featured Portfolio
            </motion.h2>
          </div>
          
          <Link 
            to="/projects" 
            className="flex-shrink-0 text-white font-bold border-b-2 border-white hover:text-brand-orange hover:border-brand-orange transition-all pb-1 text-[15px] uppercase tracking-wider"
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

        {/* Portfolio Grid */}
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
                <div className="aspect-[4/5] overflow-hidden rounded-[24px] mb-6 relative bg-[#111]">
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
      </div>
    </section>
  );
}
