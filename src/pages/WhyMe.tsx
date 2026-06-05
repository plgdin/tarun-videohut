import { motion } from 'framer-motion';

export default function WhyMe() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-[500px] mx-auto lg:mx-0 w-full"
          >
             <div className="absolute inset-0 bg-brand-yellow/20 blur-[100px] rounded-full -z-10 mix-blend-screen"></div>
             <img 
               src="/assets/portfolio_1.png" 
               alt="About Us" 
               className="w-full h-full object-cover rounded-[40px] border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
             />
             
             {/* Floating Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="absolute -bottom-10 -right-10 bg-[#111111] p-10 rounded-[32px] border border-white/10 hidden md:block shadow-2xl"
             >
                <p className="text-[64px] font-display font-bold text-brand-yellow leading-none mb-2">15+</p>
                <p className="text-[13px] text-white/60 font-bold uppercase tracking-widest leading-[1.6]">Years of<br/>Experience</p>
             </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], staggerChildren: 0.2 }}
            className="space-y-10"
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 rounded-full border border-brand-yellow/20 bg-brand-yellow/5 text-brand-yellow text-[13px] font-medium tracking-wide uppercase">
                About Us
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]">
                Know More About Us
              </h2>
            </div>
            
            <div className="space-y-6 text-[18px] text-white/60 leading-[1.6] font-light">
              <p>
                Established in 2015, we have dedicated ourselves to crafting captivating visual narratives defined by creativity, innovation, and an unwavering commitment to excellence in video production.
              </p>
              <p>
                Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
               <div>
                  <p className="text-[48px] font-display font-bold mb-2">200+</p>
                  <p className="text-[13px] text-white/50 uppercase tracking-widest font-bold">Repeated Clients</p>
               </div>
               <div>
                  <p className="text-[48px] font-display font-bold mb-2">478</p>
                  <p className="text-[13px] text-white/50 uppercase tracking-widest font-bold">Completed Projects</p>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
