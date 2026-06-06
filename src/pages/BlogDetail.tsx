import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { blogsData } from '../lib/blogsData';

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogsData.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-display font-bold mb-4">Blog Post Not Found</h1>
        <p className="text-white/60 mb-8">The blog post you are looking for does not exist or has been moved.</p>
        <Link to="/blogs" className="px-6 py-3 bg-brand-orange text-black font-bold rounded-full hover:bg-brand-yellow transition-colors">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white pb-32">
      {/* Parallax Blurred Header Background */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-full object-cover filter blur-xl scale-110 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-[900px] mx-auto px-6 w-full pb-12">
          <Link 
            to="/blogs" 
            className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm tracking-wider uppercase mb-8 hover:text-brand-yellow transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blogs
          </Link>

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-[12px] font-semibold tracking-wide uppercase">
              {blog.category}
            </span>
            <h1 className="text-[36px] md:text-[56px] font-display font-bold leading-[1.2] tracking-[-0.02em] text-white">
              {blog.title}
            </h1>
            <div className="flex items-center gap-4 text-white/50 text-sm pt-2">
              <span className="font-semibold text-white/80">{blog.author}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
              <span>{blog.date}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Body Content */}
      <section className="px-6 pt-12">
        <div className="max-w-[800px] mx-auto">
          {/* Main Cover Image */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-[16/9] rounded-[32px] overflow-hidden border border-white/5 mb-16 shadow-2xl"
          >
            <img 
              src={blog.image} 
              alt={blog.title} 
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Formatted Text */}
          <div className="space-y-8 text-white/70 text-lg md:text-[20px] font-light leading-[1.8] tracking-wide">
            {blog.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
