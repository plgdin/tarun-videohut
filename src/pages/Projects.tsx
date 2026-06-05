import { motion } from 'framer-motion';
import Work from './Work';

export default function Projects() {
  return (
    <main className="w-full">
      {/* Projects Hero Section */}
      <section className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#0d0d0d] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
          <img 
            src="/assets/cameraman_bg.png" 
            alt="Cameraman" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 pt-20">
          <div className="max-w-[700px] space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-[-0.03em] text-white"
            >
              Our Project<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px]"
            >
              From coming up with creative concepts to delivering outstanding campaigns, we're your friendly, fun-loving crew ready to turn your project dreams into reality!
            </motion.p>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute left-6 md:left-12 bottom-20 z-20 flex flex-col items-center gap-6"
        >
          <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange"
            />
          </div>
        </motion.div>
      </section>

      {/* Portfolio Grid */}
      <Work />
    </main>
  );
}
