import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail } from 'lucide-react';
import { CinematicFooter } from '../components/ui/motion-footer';

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <div className="relative w-full bg-background min-h-screen overflow-x-hidden">
      <main className="relative z-10 w-full bg-background border-b border-border/20 shadow-2xl rounded-b-[2rem] text-white">
        {/* Hero Section */}
        <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-transparent overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-transparent z-10" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background z-10" />
            <motion.img 
              style={{ y, opacity }}
              src="https://mir-s3-cdn-cf.behance.net/projects/max_1200/df6a62220266293.Y3JvcCwxNjY3LDEzMDQsMzI2LDA.png" 
              alt="Contact Us background" 
              className="w-full h-full object-cover object-center opacity-30 select-none pointer-events-none absolute inset-0"
            />
          </div>

          <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 pt-20">
            <div className="max-w-[700px] space-y-6">
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-tight text-primary text-shadow-cinematic uppercase"
              >
                Contact Me
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
                className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px] font-body"
              >
                Have a script, campaign briefing, or directorial opportunity? Reach out and let's craft the next vision together.
              </motion.p>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute left-6 md:left-12 bottom-20 z-20 flex flex-col items-center gap-6"
          >
            <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3 font-display">Scroll</span>
            <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
              <motion.div 
                animate={{ y: [0, 64] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="absolute top-0 left-0 w-full h-1/2 bg-primary"
              />
            </div>
          </motion.div>
        </section>

        {/* Contact Content */}
        <section className="py-32 px-6">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left: Contact Info */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-6">
                <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary">
                  Reach Out
                </h2>
                <p className="text-[18px] text-white/60 font-light leading-[1.6] max-w-[480px] font-body">
                  I'm available for commercial directorial bookings, theatre consultations, and creative writing projects globally.
                </p>
              </div>
              
              <div className="space-y-8 pt-10 border-t border-white/5">
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
                      <p className="text-white/50 text-[15px] font-light">contact@tarunkapoor.com</p>
                   </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card p-10 md:p-14 rounded-sm border border-border shadow-2xl"
            >
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Name</label>
                    <input type="text" className="w-full bg-muted border border-border rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="John Doe" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Email</label>
                    <input type="email" className="w-full bg-muted border border-border rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="john@example.com" />
                  </div>
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Phone</label>
                  <input type="tel" className="w-full bg-muted border border-border rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="+91 99000 00000" />
                </div>
                <div className="space-y-3">
                  <label className="text-[11px] font-display font-bold text-white/60 uppercase tracking-widest">Message</label>
                  <textarea rows={5} className="w-full bg-muted border border-border rounded-sm px-6 py-4 text-[15px] text-white focus:outline-none focus:border-primary focus:bg-transparent transition-all duration-300 resize-none placeholder:text-white/20" placeholder="Tell us about your project..."></textarea>
                </div>
                <button type="button" className="w-full bg-primary hover:bg-accent text-black font-display font-bold py-5 rounded-sm transition-all duration-300 transform active:scale-95 text-[14px] tracking-widest uppercase shadow-glow">
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <CinematicFooter />
    </div>
  );
}
