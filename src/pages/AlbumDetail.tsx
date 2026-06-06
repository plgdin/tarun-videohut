import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { albumsData } from '../lib/albumsData';

export default function AlbumDetail() {
  const { slug } = useParams<{ slug: string }>();
  const album = albumsData.find((a) => a.slug === slug);

  if (!album) {
    return (
      <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-4xl font-display font-bold mb-4">Album Not Found</h1>
        <p className="text-white/60 mb-8">The photo album you are looking for does not exist or has been moved.</p>
        <Link to="/albums" className="px-6 py-3 bg-brand-orange text-black font-bold rounded-full hover:bg-brand-yellow transition-colors">
          Back to Albums
        </Link>
      </div>
    );
  }

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white pb-32">
      {/* Hero Header with Blurred Background Image */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-end justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={album.image} 
            alt={album.title} 
            className="w-full h-full object-cover filter blur-2xl scale-110 opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-[#0d0d0d]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full pb-16">
          <Link 
            to="/albums" 
            className="inline-flex items-center gap-2 text-brand-orange font-bold text-sm tracking-wider uppercase mb-8 hover:text-brand-yellow transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Albums
          </Link>

          <h1 className="text-[48px] md:text-[80px] font-display font-bold leading-[1.1] tracking-[-0.03em] max-w-[900px]">
            {album.title}
          </h1>
          <p className="text-white/60 text-lg md:text-xl font-light mt-4">
            {album.location}
          </p>
        </div>
      </section>

      {/* Main Info Grid Section */}
      <section className="px-6 py-12">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
          
          {/* Metadata Grid Panel */}
          <div className="bg-[#111] border border-white/5 rounded-[32px] p-8 md:p-10 space-y-8 lg:col-span-1 sticky top-32">
            <h3 className="text-xl font-display font-bold tracking-wide border-b border-white/10 pb-4">
              Project Details
            </h3>
            <div className="space-y-6">
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Project Type</p>
                <p className="text-white text-[16px] font-medium">{album.projectType}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Client</p>
                <p className="text-white text-[16px] font-medium">{album.client}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Camera</p>
                <p className="text-white text-[16px] font-medium">{album.camera}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Lenses</p>
                <p className="text-white text-[16px] font-medium">{album.lenses}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Location</p>
                <p className="text-white text-[16px] font-medium">{album.location}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Equipment</p>
                <p className="text-white text-[16px] font-medium">{album.equipment}</p>
              </div>
              <div>
                <p className="text-[12px] text-white/40 uppercase tracking-widest font-bold mb-1">Year</p>
                <p className="text-white text-[16px] font-medium">{album.year}</p>
              </div>
            </div>
          </div>

          {/* Photo Gallery Panel */}
          <div className="lg:col-span-2 space-y-12">
            {album.images.map((imgUrl, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full rounded-[40px] overflow-hidden border border-white/5 shadow-2xl relative aspect-[3/2] bg-white/5"
              >
                <img 
                  src={imgUrl} 
                  alt={`${album.title} gallery shot ${idx + 1}`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/portfolio_1.png";
                  }}
                />
              </motion.div>
            ))}

            {/* Highlights Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/[0.02] border border-white/5 rounded-[32px] p-8 md:p-10 space-y-6 mt-16"
            >
              <h3 className="text-2xl font-display font-bold tracking-tight text-brand-orange">
                Highlights & Notes
              </h3>
              <ul className="space-y-4">
                {album.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <span className="w-2 h-2 rounded-full bg-brand-orange mt-2.5 shrink-0" />
                    <p className="text-white/70 font-light leading-relaxed">{highlight}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

        </div>
      </section>
    </main>
  );
}
