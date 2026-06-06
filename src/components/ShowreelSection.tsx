import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ShowreelSection() {
  return (
    <section className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      {/* Background Watermark Heading */}
      <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-0 overflow-hidden">
        <span className="text-[12vw] md:text-[18vw] font-display font-black text-white/[0.01] tracking-widest uppercase leading-none">
          SHOWREEL
        </span>
      </div>

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-[13px] font-medium tracking-wide uppercase"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-tight"
          >
            Our Production Showreel
          </motion.h2>
        </div>

        {/* Video Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/9] rounded-[40px] border border-white/10 overflow-hidden relative group cursor-pointer shadow-2xl"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          
          <img 
            src="/assets/hero_showreel.png" 
            alt="Production Showreel Preview" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-24 h-24 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 transform group-hover:scale-110 transition-transform duration-500">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                <Play className="w-8 h-8 ml-1.5 fill-current" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
