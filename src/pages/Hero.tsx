import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/20 blur-[120px] rounded-full -z-10 opacity-50 mix-blend-screen pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 z-10"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[13px] font-medium tracking-wide text-white/90">
              <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              Showreel 2026
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[56px] lg:text-[76px] font-display font-bold leading-[1.05] tracking-[-0.03em]"
          >
            Turning Video into <br className="hidden lg:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-yellow">
              Vibrant
            </span> Conversations.
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[18px] lg:text-[20px] text-white/60 max-w-[500px] leading-[1.6] font-light"
          >
            We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 pt-4">
            <HashLink smooth to="/#pricing" className="bg-brand-orange hover:bg-brand-yellow text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(255,122,59,0.3)]">
              Get the template
            </HashLink>
            <button className="group flex items-center gap-4 px-8 py-4 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 ml-1 fill-current" />
              </div>
              <span className="font-bold tracking-wide text-[14px]">PLAY SHOWREEL</span>
            </button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative aspect-[4/5] lg:aspect-square w-full max-w-[600px] mx-auto lg:ml-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-teal/20 rounded-[40px] blur-3xl -z-10 opacity-70"></div>
          <div className="w-full h-full rounded-[40px] border border-white/10 overflow-hidden relative group cursor-pointer shadow-2xl">
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
            <img 
              src="/assets/hero_showreel.png" 
              alt="Showreel Preview" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 transform group-hover:scale-110 transition-transform duration-500">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-black">
                   <Play className="w-6 h-6 ml-1 fill-current" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
