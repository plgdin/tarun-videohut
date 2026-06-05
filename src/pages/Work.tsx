import { useState } from 'react';

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
    <section id="work" className="py-32 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm font-medium tracking-wider uppercase">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Our Handpicked Featured Portfolio
            </h2>
          </div>
          <a href="#" className="flex-shrink-0 text-white font-bold border-b border-white hover:text-brand-orange hover:border-brand-orange transition-all pb-1">
            See All Projects
          </a>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
                activeTab === cat 
                  ? 'bg-white text-black border-white' 
                  : 'bg-transparent text-white/70 border-white/20 hover:border-white/50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl mb-6 relative">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all z-10"></div>
                <img 
                  src={`/assets/${project.img}.png`} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-brand-orange transition-colors">{project.title}</h3>
              <p className="text-white/60">{project.subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
