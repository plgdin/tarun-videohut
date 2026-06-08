import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section id="home" className="min-h-screen flex items-center justify-center pt-32 pb-24 px-6 relative overflow-hidden bg-black">
      {/* Background radial soft light map to simulate film aura */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] hero-synced-aura-left pointer-events-none opacity-30 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] hero-synced-aura-right pointer-events-none opacity-30 -z-10" />
      
      <div className="max-w-[1200px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8 text-left"
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-md text-[13px] font-medium tracking-widest text-primary uppercase">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Featured Film
            </div>
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-[56px] lg:text-[80px] font-display font-bold leading-[1.05] tracking-tight text-primary text-shadow-cinematic uppercase"
          >
            Scooter AD - Ola
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-[18px] lg:text-[20px] text-white/70 max-w-[500px] leading-[1.6] font-light font-body"
          >
            this is an ola ad test
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 pt-4">
            <button className="group flex items-center gap-4 px-8 py-4 rounded-md border-0 bg-primary hover:bg-accent text-black font-bold tracking-wider transition-all duration-300 transform hover:scale-105 shadow-glow">
              <div className="w-10 h-10 rounded-full bg-black text-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-4 h-4 ml-1 fill-current" />
              </div>
              <span className="font-display text-[15px] tracking-widest uppercase">View Reel</span>
            </button>
            
            <Link 
              to="/projects" 
              className="flex items-center justify-center border border-white/20 bg-white/5 hover:bg-white/10 text-white px-8 py-5 rounded-md font-display tracking-widest text-[14px] uppercase transition-all duration-300 hover:scale-105"
            >
              Full Portfolio
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative aspect-[4/5] lg:aspect-square w-full max-w-[600px] mx-auto lg:ml-auto"
        >
          <div className="w-full h-full rounded-md border border-white/10 overflow-hidden relative group cursor-pointer shadow-2xl video-card">
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-500 z-10" />
            <img 
              src="https://mir-s3-cdn-cf.behance.net/projects/max_808/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png" 
              alt="Ola Electric Scooter Showreel Preview" 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              onError={(e) => {
                e.currentTarget.src = "https://mir-s3-cdn-cf.behance.net/projects/max_808/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png";
              }}
            />
            
            {/* Center Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
              <div className="w-20 h-20 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center border border-primary/30 transform group-hover:scale-110 transition-transform duration-500 shadow-glow">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-black">
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
