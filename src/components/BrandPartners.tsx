import { motion } from 'framer-motion';

const logos = [
  "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum", "LogoIpsum"
];

export default function BrandPartners() {
  return (
    <section className="py-24 px-6 bg-[#0d0d0d]">
      <div className="max-w-[1200px] mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white/40 font-display font-semibold text-[15px] uppercase tracking-[0.2em] mb-12"
        >
          Trusted by industry leaders
        </motion.h3>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-12 px-8 py-8 rounded-full border border-white/[0.08] bg-white/[0.02]"
        >
          {logos.map((logo, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 text-white/30 hover:text-white/60 transition-colors duration-500 cursor-default"
            >
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="8" fill="currentColor" fillOpacity="0.15"/>
                <circle cx="20" cy="16" r="6" fill="currentColor" fillOpacity="0.4"/>
                <path d="M10 32c0-5.523 4.477-10 10-10s10 4.477 10 10" fill="currentColor" fillOpacity="0.2"/>
              </svg>
              <span className="font-display font-bold text-[16px] tracking-tight hidden sm:block">{logo}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
