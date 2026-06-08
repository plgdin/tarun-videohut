import { motion } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="pt-40 md:pt-48 pb-32 px-6 bg-transparent border-t border-border/20 relative overflow-hidden">
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
          
          <div className="space-y-8 pt-10 border-t border-border/20">
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white/70 group-hover:text-black" />
               </div>
               <div>
                  <h4 className="font-display font-bold text-[16px] tracking-wider uppercase mb-1">Location</h4>
                  <p className="text-white/50 text-[15px] font-body">Bangalore, India</p>
               </div>
            </div>
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-muted border border-border flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors duration-300">
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
          className="bg-card p-10 md:p-14 rounded-sm border border-border shadow-2xl flex flex-col justify-center space-y-8"
        >
          <div className="space-y-4">
            <span className="text-primary font-display font-bold text-[12px] tracking-[0.2em] uppercase">Representative & Booking</span>
            <h3 className="text-[32px] md:text-[40px] font-display font-bold leading-tight uppercase text-white">Let's Collaborate</h3>
            <p className="text-white/60 font-body font-light leading-relaxed">
              For script submissions, treatment pitches, and commercial availability, please contact directly.
            </p>
          </div>

          <div className="space-y-6 pt-6 border-t border-border">
            <div>
              <h4 className="font-display font-bold text-[14px] text-white/50 tracking-wider uppercase mb-1">Direct Inquiries</h4>
              <a href="mailto:contact@tarunkapoor.com" className="text-primary hover:text-accent text-[20px] md:text-[24px] font-display font-bold transition-colors">
                contact@tarunkapoor.com
              </a>
            </div>

            <div>
              <h4 className="font-display font-bold text-[14px] text-white/50 tracking-wider uppercase mb-1">Commercial Representation</h4>
              <p className="text-white text-[16px] font-body font-medium">videohut Media Agencies</p>
              <a href="mailto:representation@tarunkapoor.com" className="text-primary hover:text-accent text-[16px] font-body transition-colors">
                representation@tarunkapoor.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
