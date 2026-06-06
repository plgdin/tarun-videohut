import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Pre-Production",
    desc: "Every great film starts with a blueprint. Laying the foundations through visual treatments, screenplays, concept development, location scouting, and character casting direction.",
    color: "bg-[#0d0d0d]",
    borderColor: "border-white/10",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png"
  },
  {
    title: "Production",
    desc: "On set, translating visual concept into raw cinematic reality. Directing performances, lighting design, cinematography, macro miniature scale shoots, and high-energy camera movements.",
    color: "bg-[#111111]",
    borderColor: "border-white/10",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png"
  },
  {
    title: "Post-Production",
    desc: "Sculpting the final output. Bringing all takes together through narrative-driven video editing, high-contrast custom color grading, sound design, and musical pacing.",
    color: "bg-[#161616]",
    borderColor: "border-white/10",
    image: "https://mir-s3-cdn-cf.behance.net/projects/404/920176163540461.Y3JvcCw5MDksNzExLDE4NCww.jpg"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 px-6 relative bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-32 space-y-8 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
          >
            Services
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold max-w-[800px] mx-auto leading-[1.1] tracking-tight uppercase text-primary"
          >
            From Concept To Cinematic Screen
          </motion.h2>
          
          <Link 
            to="/services" 
            className="mt-4 px-8 py-4 rounded-sm border border-white/20 hover:bg-primary text-white hover:text-black transition-all duration-300 font-display font-bold tracking-widest text-[14px] uppercase"
          >
            Explore Services
          </Link>
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
              className={`sticky ${service.color} border ${service.borderColor} rounded-sm p-10 md:p-16 shadow-2xl transition-all duration-500 will-change-transform video-card`}
              style={{
                top: `calc(120px + ${index * 30}px)`,
                zIndex: index + 10
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="space-y-8 pr-0 md:pr-8">
                  <h3 className="text-[40px] lg:text-[48px] font-display font-bold tracking-tight uppercase text-primary">{service.title}</h3>
                  <p className="text-[18px] text-white/60 leading-[1.6] font-light font-body">
                    {service.desc}
                  </p>
                  <Link to="/services" className="group text-primary font-display font-bold flex items-center gap-2 hover:text-accent transition-all text-[15px] tracking-widest uppercase">
                    Learn More 
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  </Link>
                </div>
                
                <div className="aspect-[4/3] rounded-sm border border-white/5 overflow-hidden relative group">
                   <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
                   <img 
                     src={service.image} 
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
