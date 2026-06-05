const services = [
  {
    title: "Pre-Production",
    desc: "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
    color: "bg-[#111]",
  },
  {
    title: "Production",
    desc: "Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.",
    color: "bg-[#1a1a1a]",
  },
  {
    title: "Post-Production",
    desc: "Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments.",
    color: "bg-[#222]",
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm font-medium tracking-wider uppercase">
            Services
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-bold max-w-3xl mx-auto leading-tight">
            From Concept To Completion:<br/>We've Got You Covered!
          </h2>
          <button className="mt-8 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors font-bold">
            Explore Services
          </button>
        </div>

        <div className="relative space-y-12 pb-32">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`sticky top-32 ${service.color} border border-white/10 rounded-3xl p-12 md:p-16 shadow-2xl transition-all duration-500`}
              style={{
                top: `calc(100px + ${index * 40}px)`,
                zIndex: index + 10
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">{service.title}</h3>
                  <p className="text-lg text-white/70 leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <button className="text-brand-orange font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    Learn More <span className="text-xl">→</span>
                  </button>
                </div>
                <div className="aspect-video bg-black/50 rounded-2xl border border-white/5 overflow-hidden">
                   <img src={`/assets/portfolio_${index + 1}.png`} className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" alt={service.title} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
