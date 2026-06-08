import { motion } from 'framer-motion';

const industries = [
  {
    title: "Ad Films",
    size: "md:col-span-2 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/83e80e235103957.Y3JvcCwxNDQxLDExMjcsMTI1Miw2MA.png"
  },
  {
    title: "Documentaries",
    size: "md:col-span-1 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/70f41a224737901.Y3JvcCwxNzg5LDE0MDAsNTU4LDA.png"
  },
  {
    title: "Stage Plays",
    size: "md:col-span-1 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/920176163540461.Y3JvcCw5MDksNzExLDE4NCww.jpg"
  },
  {
    title: "Brand Campaigns",
    size: "md:col-span-2 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png"
  },
  {
    title: "Cinematography",
    size: "md:col-span-1 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/40058f213299753.Y3JvcCwxODkyLDE0ODAsNDkxLDA.png"
  },
  {
    title: "Screenplay Writing",
    size: "md:col-span-1 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/50d2bf210324995.Y3JvcCwyMDUzLDE2MDYsNDE2LDA.png"
  },
  {
    title: "Concept Treatments",
    size: "md:col-span-2 h-[320px]",
    image: "https://mir-s3-cdn-cf.behance.net/projects/max_808/72f779210322387.Y3JvcCwxNjAwLDEyNTIsNjEwLDA.png"
  }
];

export default function VideoPros() {
  return (
    <section className="py-32 px-6 bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
          >
            Directorial Formats
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-tight uppercase text-primary"
          >
            Aesthetic Focus
          </motion.h2>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              className={`${ind.size} rounded-sm overflow-hidden border border-white/5 relative group cursor-pointer video-card`}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                  onError={(e) => {
                    e.currentTarget.src = "https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              </div>

              {/* Title Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  {ind.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
