import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { albumsData } from '../lib/albumsData';

export default function Albums() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#0d0d0d] overflow-hidden mb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
          <motion.img 
            style={{ y, opacity }}
            src="/assets/albums_bg.png" 
            alt="Albums background" 
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
              Photo Album<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px]"
            >
              Explore our portfolio of compelling photo stories in the albums, showcasing our expertise.
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

      {/* Grid Section */}
      <section className="w-full max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {albumsData.map((album, i) => (
            <motion.div
              key={album.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: "easeOut" }}
            >
              <Link to={`/photo-albums/${album.slug}`} className="group cursor-pointer block">
                <div className="w-full rounded-[30px] overflow-hidden mb-6 aspect-[4/3] bg-white/5 relative">
                  <img 
                    src={album.image} 
                    alt={album.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.src = "/assets/portfolio_1.png";
                    }}
                  />
                  {/* Hover Overlay with VIEW FULL ALBUM Badge */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center z-20">
                    <div className="w-28 h-28 rounded-full bg-white text-black font-display font-bold text-[12px] tracking-wider flex items-center justify-center text-center p-4 border border-white/20 transform scale-75 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      VIEW FULL ALBUM
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="px-2">
                  <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-brand-orange transition-colors">
                    {album.title}
                  </h3>
                  <p className="text-white/60 font-body font-light">
                    {album.location}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
