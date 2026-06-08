import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Play, X, ArrowDown } from 'lucide-react';

export default function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax Scroll Effects
  const { scrollY } = useScroll();
  const yText = useTransform(scrollY, [0, 500], [0, 150]);
  const yVideo = useTransform(scrollY, [0, 500], [0, -50]);
  const scaleVideo = useTransform(scrollY, [0, 500], [1, 1.05]);
  const opacityText = useTransform(scrollY, [0, 400], [1, 0]);

  // Smooth Cursor Follower Physics
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX - 40); // center offset (width/2)
      cursorY.set(e.clientY - 40); // center offset (height/2)
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [cursorX, cursorY]);

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center select-none">
      
      {/* 1. BACKGROUND TEXT LAYER (Parallaxed) */}
      <motion.div 
        style={{ y: yText, opacity: opacityText }}
        className="absolute inset-0 flex flex-col items-center justify-center z-0 pointer-events-none"
      >
        <h1 className="text-[12vw] font-display font-black leading-none tracking-[-0.04em] text-white/[0.03] uppercase">
          TARUN
        </h1>
        <h1 className="text-[12vw] font-display font-black leading-none tracking-[-0.04em] text-white/[0.03] uppercase -mt-[2vw]">
          KAPOOR
        </h1>
      </motion.div>

      {/* Ambient background light leaks */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      {/* 2. CENTRAL LENS / CINEMATIC FRAME */}
      <motion.div 
        style={{ y: yVideo, scale: scaleVideo }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => setIsPlaying(true)}
        className="relative z-10 w-[85vw] md:w-[60vw] lg:w-[45vw] aspect-[16/9] md:aspect-[2.35/1] rounded-sm overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-pointer group"
      >
        {/* Film Frame corners overlay */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-white/20 z-20 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t-2 border-r-2 border-white/20 z-20 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b-2 border-l-2 border-white/20 z-20 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-white/20 z-20 pointer-events-none group-hover:border-primary/50 transition-colors duration-500" />

        {/* Video stream container */}
        <div className="absolute inset-0 bg-black">
          <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 z-10" />
          <video 
            src="https://vz-dadaa479-fe6.b-cdn.net/6a889e8c-7d03-44de-938d-1c5a7ddd2e0b/play_720p.mp4" 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-[1.5s] ease-out"
          />
        </div>

        {/* Floating cinematic category */}
        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
          <span className="text-[11px] font-display font-bold uppercase tracking-[0.25em] text-white/80 group-hover:text-primary transition-colors duration-300">
            Play Showreel
          </span>
        </div>
      </motion.div>

      {/* 3. FOREGROUND DYNAMIC METADATA */}
      <div className="absolute inset-x-0 bottom-16 z-20 px-8 md:px-16 flex flex-col md:flex-row md:items-end justify-between gap-8 pointer-events-none">
        <div className="space-y-2 max-w-[300px]">
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-primary">Status</span>
          <p className="text-[14px] text-white/50 font-body font-light leading-relaxed">
            Available for film directing, scripting, and brand campaign commissions globally.
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/40">Scroll to Explore</span>
          <motion.div 
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50"
          >
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </div>

        <div className="text-right hidden md:block">
          <span className="text-[10px] font-display font-bold uppercase tracking-[0.3em] text-white/40">Based In</span>
          <p className="text-[16px] text-white/80 font-display font-bold uppercase tracking-wider mt-1">
            Bangalore, India
          </p>
        </div>
      </div>

      {/* 4. CUSTOM MAGNETIC CURSOR EFFECT */}
      <motion.div
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          pointerEvents: 'none',
        }}
        animate={{
          scale: isHovered ? 1.2 : 0.8,
          opacity: isHovered ? 1 : 0,
        }}
        className="fixed top-0 left-0 w-20 h-20 rounded-full border-2 border-primary bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center text-primary font-display font-bold text-[11px] tracking-widest uppercase transition-all duration-300 pointer-events-none shadow-glow"
      >
        <Play className="w-4 h-4 fill-current ml-0.5" />
      </motion.div>

      {/* 5. CINEMATIC FULL SCREEN SHOWREEL PLAYER MODAL */}
      <AnimatePresence>
        {isPlaying && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black flex items-center justify-center p-4"
          >
            {/* Close Button overlay */}
            <button 
              onClick={() => setIsPlaying(false)}
              className="absolute top-6 right-6 z-50 w-14 h-14 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Canvas Container */}
            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-[1280px] aspect-video rounded-sm overflow-hidden border border-white/10 bg-[#070707] shadow-2xl relative"
            >
              <video 
                src="https://vz-dadaa479-fe6.b-cdn.net/6a889e8c-7d03-44de-938d-1c5a7ddd2e0b/play_720p.mp4"
                className="w-full h-full object-contain"
                controls
                autoPlay
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
