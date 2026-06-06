import { motion } from 'framer-motion';

const brands = [
  { name: "Budweiser", logo: "🍺" },
  { name: "Royal Enfield", logo: "🏍️" },
  { name: "OLA Electric", logo: "⚡" },
  { name: "Nykaa", logo: "💄" },
  { name: "Flipkart", logo: "🛍️" },
  { name: "Meesho", logo: "📦" }
];

export default function BrandPartners() {
  return (
    <section className="py-24 px-6 bg-black border-y border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/40 font-display font-bold text-[14px] uppercase tracking-[0.3em] mb-12"
        >
          Collaborating with Industry Leaders
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 px-8 py-8 rounded-sm border border-white/[0.08] bg-white/[0.02]"
        >
          {brands.map((brand, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 text-white/40 hover:text-primary transition-colors duration-500 cursor-default"
            >
              <span className="text-2xl filter grayscale opacity-60 hover:opacity-100 transition-opacity">{brand.logo}</span>
              <span className="font-display font-black text-[18px] uppercase tracking-wider">{brand.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
