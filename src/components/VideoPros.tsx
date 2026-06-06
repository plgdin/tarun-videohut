import { motion } from 'framer-motion';

const industries = [
  {
    title: "Corporate Videos",
    size: "md:col-span-2 h-[320px]",
    image: "/assets/portfolio_1.png"
  },
  {
    title: "Documentaries",
    size: "md:col-span-1 h-[320px]",
    image: "/assets/portfolio_2.png"
  },
  {
    title: "Shorts & Reels",
    size: "md:col-span-1 h-[320px]",
    image: "/assets/portfolio_3.png"
  },
  {
    title: "Entertainment",
    size: "md:col-span-2 h-[320px]",
    image: "/assets/portfolio_4.png"
  },
  {
    title: "Commercials",
    size: "md:col-span-1 h-[320px]",
    image: "/assets/portfolio_5.png"
  },
  {
    title: "Event & Live Stream",
    size: "md:col-span-1 h-[320px]",
    image: "/assets/portfolio_1.png"
  },
  {
    title: "Animation & VFX",
    size: "md:col-span-2 h-[320px]",
    image: "/assets/portfolio_2.png"
  }
];

export default function VideoPros() {
  return (
    <section className="py-32 px-6 bg-[#0a0a0a]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-brand-teal/20 bg-brand-teal/5 text-brand-teal text-[13px] font-medium tracking-wide uppercase"
          >
            Expertise
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-tight"
          >
            Video Pros in Many Industries
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
              className={`${ind.size} rounded-[32px] overflow-hidden border border-white/5 relative group cursor-pointer`}
            >
              {/* Background image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={ind.image} 
                  alt={ind.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-[0.7]"
                  onError={(e) => {
                    e.currentTarget.src = "/assets/portfolio_1.png";
                  }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
              </div>

              {/* Title Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 z-20">
                <h3 className="text-2xl font-display font-bold text-white group-hover:text-brand-orange transition-colors">
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
