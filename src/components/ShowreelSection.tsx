import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

export default function ShowreelSection() {
  return (
    <section className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
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
            className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
          >
            Showcase
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-tight uppercase text-primary"
          >
            Director's Showreel
          </motion.h2>
        </div>

        {/* Video Card Container */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full aspect-[16/9] rounded-sm border border-white/10 overflow-hidden relative group cursor-pointer shadow-2xl video-card"
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500 z-10" />
          
          <img 
            src="https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png" 
            alt="Production Showreel Preview" 
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />

          {/* Centered Play Button */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
            <div className="w-24 h-24 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 transform group-hover:scale-110 transition-transform duration-500 shadow-glow">
              <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-black">
                <Play className="w-8 h-8 ml-1.5 fill-current" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
