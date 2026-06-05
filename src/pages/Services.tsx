import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const services = [
  {
    title: "Pre-Production",
    desc: "Pre-production serves as the pivotal phase in any creative endeavor, encompassing planning, idea refinement, budgeting, schedule creation, and the meticulous organization of logistical details.",
    color: "bg-[#111111]",
    borderColor: "border-[#333333]"
  },
  {
    title: "Production",
    desc: "Production represents the dynamic phase of a creative project, where the plans from pre-production spring to life, with cameras rolling, actors delivering their performances, and the realization of the creative vision.",
    color: "bg-[#1a1a1a]",
    borderColor: "border-[#444444]"
  },
  {
    title: "Post-Production",
    desc: "Post-production emerges as the pivotal phase in creative projects, wherein raw content undergoes a transformation into its refined, polished state where editing, sound design, visual effects, and essential adjustments.",
    color: "bg-[#222222]",
    borderColor: "border-[#555555]"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 px-6 relative bg-[#0d0d0d]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-32 space-y-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-[13px] font-medium tracking-wide uppercase"
          >
            Services
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold max-w-[800px] mx-auto leading-[1.1] tracking-[-0.02em]"
          >
            From Concept To Completion: We've Got You Covered!
          </motion.h2>
          
          <motion.button 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="mt-4 px-8 py-4 rounded-full border border-white/20 hover:bg-white text-white hover:text-black transition-all duration-300 font-bold tracking-wide"
          >
            Explore Services
          </motion.button>
        </div>

        {/* Stacking Cards */}
        <div className="relative space-y-12 pb-32">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`sticky ${service.color} border ${service.borderColor} rounded-[40px] p-10 md:p-16 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] transition-all duration-500 will-change-transform`}
              style={{
                top: `calc(120px + ${index * 30}px)`,
                zIndex: index + 10
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-8 pr-0 md:pr-8">
                  <h3 className="text-[40px] lg:text-[48px] font-display font-bold tracking-tight">{service.title}</h3>
                  <p className="text-[18px] text-white/60 leading-[1.6] font-light">
                    {service.desc}
                  </p>
                  <button className="group text-brand-orange font-bold flex items-center gap-2 hover:text-brand-yellow transition-all text-[16px]">
                    Learn More 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </button>
                </div>
                
                <div className="aspect-[4/3] rounded-[24px] border border-white/5 overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                   <img 
                     src={`/assets/portfolio_${index + 1}.png`} 
                     className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                     alt={service.title} 
                   />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
