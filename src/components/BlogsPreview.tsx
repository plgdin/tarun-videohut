import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogsData } from '../lib/blogsData';

export default function BlogsPreview() {
  return (
    <section className="py-32 px-6 bg-[#000000] border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
            >
              Blog Logs
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary"
            >
              Cinematic Insights
            </motion.h2>
          </div>
          
          <Link 
            to="/blogs" 
            className="flex-shrink-0 text-white font-display font-bold border-b-2 border-white hover:text-primary hover:border-primary transition-all pb-1 text-[14px] uppercase tracking-wider"
          >
            Read All Logs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.slice(0, 3).map((blog, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link to={`/blogs/${blog.slug}`} className="group block">
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
                  <h3 className="text-[22px] md:text-[24px] font-display font-bold leading-[1.3] text-primary group-hover:text-accent transition-colors duration-300 line-clamp-2 uppercase tracking-tight">
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
      </div>
    </section>
  );
}
