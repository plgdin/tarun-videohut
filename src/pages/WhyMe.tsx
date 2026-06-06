import { motion } from 'framer-motion';

export default function WhyMe() {
  return (
    <section id="about" className="py-32 px-6 overflow-hidden bg-black border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-square max-w-[500px] mx-auto lg:mx-0 w-full"
          >
             <div className="absolute inset-0 bg-primary/5 blur-[100px] rounded-full -z-10 mix-blend-screen"></div>
             <img 
               src="https://mir-s3-cdn-cf.behance.net/projects/404/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png" 
               alt="About Tarun Kapoor" 
               className="w-full h-full object-cover rounded-sm border border-white/10 shadow-2xl video-card"
             />
             
             {/* Floating Badge */}
             <motion.div 
               initial={{ opacity: 0, scale: 0.8 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.4, duration: 0.6 }}
               className="absolute -bottom-10 -right-10 bg-[#0d0d0d] p-10 rounded-sm border border-white/10 hidden md:block shadow-2xl"
             >
                <p className="text-[64px] font-display font-bold text-primary leading-none mb-2">8+</p>
                <p className="text-[11px] text-white/60 font-display font-bold uppercase tracking-widest leading-[1.6]">Years of<br/>Directing</p>
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
              <div className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase">
                Director & Writer
              </div>
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary">
                About Tarun Kapoor
              </h2>
            </div>
            
            <div className="space-y-6 text-[18px] text-white/60 leading-[1.6] font-light font-body">
              <p>
                Based in Bangalore, India, I specialize in crafting bold, cinematic campaigns for brands looking to disrupt the visual noise. My directorial treatments combine stylized cinematography, rich colors, and raw actor performance to deliver high-energy films.
              </p>
              <p>
                I handle projects from directorial treatment through scriptwriting, set direction, color grading, and edit lock. My goal is to capture the absolute visual truth of every script.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-12 pt-10 border-t border-white/10">
               <div>
                  <p className="text-[48px] font-display font-bold mb-2 text-white">12+</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-widest font-display font-bold">Major Brands</p>
               </div>
               <div>
                  <p className="text-[48px] font-display font-bold mb-2 text-white">50+</p>
                  <p className="text-[11px] text-white/50 uppercase tracking-widest font-display font-bold">Films Directed</p>
               </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
