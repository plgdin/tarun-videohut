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
    <main className="bg-[#0d0d0d] min-h-screen text-white pt-24">
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-[60vh] md:h-[80vh] flex items-center justify-center overflow-hidden rounded-b-[40px] md:rounded-b-[80px] mx-2 md:mx-4 mb-24 md:mb-32">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img 
            src="/assets/blogs_hero.png" 
            alt="Blogs Hero" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0d0d0d]" />
        </motion.div>

        <motion.div 
          style={{ opacity }}
          className="relative z-10 text-center px-6 max-w-[900px] mx-auto mt-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-block px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-[13px] font-medium tracking-wide uppercase mb-6">
              Blogs
            </div>
            <h1 className="text-[50px] md:text-[80px] lg:text-[100px] font-display font-bold leading-[1.1] tracking-[-0.02em] mb-8">
              Explore our <span className="text-brand-orange">blog hub</span>
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-[1.6] max-w-[600px] mx-auto font-light">
              Where we serve up a delightful mix of insightful articles, tips, and fun reads, tailored to spark your curiosity and inspire your creativity.
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
                <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden mb-6 border border-white/5">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="inline-block px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-white text-[12px] font-medium tracking-wide uppercase">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="space-y-4 px-2">
                  <h3 className="text-[22px] md:text-[24px] font-display font-bold leading-[1.3] group-hover:text-brand-orange transition-colors duration-300 line-clamp-3">
                    {blog.title}
                  </h3>
                  
                  <div className="flex items-center gap-3 text-white/50 text-[14px]">
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

      {/* CTA Section */}
      <section className="py-32 px-6">
        <div className="max-w-[800px] mx-auto text-center space-y-8">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-tight">
            Want to learn more?
          </h2>
          <p className="text-white/60 text-lg max-w-[600px] mx-auto font-light leading-relaxed">
            Subscribe to our newsletter to get the latest articles, tips, and tricks directly in your inbox.
          </p>
          <form className="max-w-[500px] mx-auto relative flex items-center">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white placeholder-white/40 focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button 
              type="button" 
              className="absolute right-2 px-6 py-2.5 bg-brand-orange text-black font-bold rounded-full hover:bg-brand-yellow transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
