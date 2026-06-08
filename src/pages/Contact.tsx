import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-40 md:pt-48 pb-32 px-6 bg-black border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase">
              Get in Touch
            </div>
            <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary">
              Let's craft the next story.
            </h2>
          </div>
          
          <p className="text-[18px] text-white/60 font-light leading-[1.6] max-w-[480px] font-body">
            Have a project in mind, a screenplay to discuss, or want to collaborate on a commercial shoot? Reach out directly.
          </p>
          
          <div className="space-y-8 pt-10 border-t border-white/5">
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white/70 group-hover:text-black" />
               </div>
               <div>
                  <h4 className="font-display font-bold text-[16px] tracking-wider uppercase mb-1">Location</h4>
                  <p className="text-white/50 text-[15px] font-body">Bangalore, India</p>
               </div>
            </div>
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white/70 group-hover:text-black" />
               </div>
               <div>
                  <h4 className="font-display font-bold text-[16px] tracking-wider uppercase mb-1">Email</h4>
                  <p className="text-white/50 text-[15px] font-body">contact@tarunkapoor.com</p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#0b0b0b] p-10 md:p-14 rounded-sm border border-white/5 shadow-2xl"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-[#151515] border border-white/10 rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="John" />
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-[#151515] border border-white/10 rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-[#151515] border border-white/10 rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="john@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-[#151515] border border-white/10 rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 resize-none placeholder:text-white/20" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-primary hover:bg-accent text-black font-display font-bold py-5 rounded-sm transition-all duration-300 transform active:scale-95 text-[14px] tracking-widest uppercase shadow-glow">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
