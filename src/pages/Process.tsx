import { motion } from 'framer-motion';

export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We start by understanding your vision, goals, and target audience to craft a tailored strategy." },
    { num: "02", title: "Pre-Production", desc: "Scripting, storyboarding, casting, and location scouting. We plan every detail before the cameras roll." },
    { num: "03", title: "Production", desc: "Our expert crew brings the storyboard to life using top-tier cinematic equipment." },
    { num: "04", title: "Post-Production", desc: "Editing, color grading, sound design, and VFX. The magic happens in the editing room." }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#0a0a0a] relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-teal/5 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-[13px] font-medium tracking-wide uppercase"
          >
            How We Work
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Our Video Production Process
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
              className="relative p-10 rounded-[32px] bg-[#111] border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-2 shadow-lg hover:shadow-2xl hover:bg-[#151515]"
            >
              <div className="text-[80px] font-display font-bold text-white/5 mb-8 group-hover:text-brand-teal/20 transition-colors duration-500 leading-none">
                {step.num}
              </div>
              <h3 className="text-[24px] font-display font-bold mb-4">{step.title}</h3>
              <p className="text-[16px] text-white/50 leading-[1.6] font-light">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
