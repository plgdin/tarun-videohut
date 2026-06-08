import { motion } from 'framer-motion';
import tarunImg from '../assets/TARUN.jpeg';

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
               src={tarunImg} 
               alt="About Tarun Kapoor" 
               className="w-full h-full object-cover rounded-sm border border-white/10 shadow-2xl video-card"
             />
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
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
