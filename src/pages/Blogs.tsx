import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogsData } from '../lib/blogsData';

export default function Blogs() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-black min-h-screen text-white pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden mx-2 md:mx-4 mb-24 md:mb-32 border-b border-white/5">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png" 
            alt="Blogs Hero" 
            className="w-full h-full object-cover opacity-30 select-none pointer-events-none absolute inset-0"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-[900px] mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase mb-6">
              Director's Log
            </div>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-display font-bold leading-[1.1] tracking-tight mb-8 uppercase text-primary">
              Cinematic Notes
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-[1.6] max-w-[600px] mx-auto font-light font-body">
              Director notes, actor monologues, post-production secrets, and thoughts on visual rhythm.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Blogs Grid */}
      <section className="py-20 px-6 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/blogs/${blog.slug}`} className="group block h-full">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden mb-6 border border-white/5 bg-[#0d0d0d] video-card">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 text-white text-[11px] font-display font-bold tracking-wider uppercase">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 px-2">
                  <h3 className="text-[22px] md:text-[24px] font-display font-bold leading-[1.3] text-primary group-hover:text-accent transition-colors duration-300 line-clamp-3 uppercase tracking-tight">
                    {blog.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-white/50 text-[14px] font-body">
                    <span className="font-medium text-white/80">{blog.author}</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span>{blog.date}</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
