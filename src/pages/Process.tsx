import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: "01", title: "Treatment", desc: "Crafting a visual treatment, blocking scenes, and developing the aesthetic blueprint." },
    { num: "02", title: "Pre-Production", desc: "Scriptwriting, storyboarding, character castings, and setting up schedules." },
    { num: "03", title: "On Set Shoot", desc: "Cinematography, staging, lighting design, and raw performance direction." },
    { num: "04", title: "Post-Production", desc: "Narrative editing, custom high-contrast color grading, and audio layering." }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
          >
            How I Work
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary"
          >
            Production Pipeline
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              key={index} 
              className="relative p-10 rounded-sm bg-[#0d0d0d] border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:bg-[#111] video-card"
            >
              <div className="text-[80px] font-display font-bold text-white/5 mb-8 group-hover:text-primary/25 transition-colors duration-500 leading-none">
                {step.num}
              </div>
              <h3 className="text-[24px] font-display font-bold mb-4 uppercase text-primary">{step.title}</h3>
              <p className="text-[16px] text-white/50 leading-[1.6] font-light font-body">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
