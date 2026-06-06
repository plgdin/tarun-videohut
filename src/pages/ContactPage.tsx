import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import Faq from '../components/Faq';

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <main className="bg-[#0d0d0d] min-h-screen text-white">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-[80vh] min-h-[600px] flex items-center bg-[#0d0d0d] overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-[#0d0d0d]/80 to-transparent z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0d0d0d] z-10" />
          <motion.img 
            style={{ y, opacity }}
            src="/assets/services_hero.png" 
            alt="Contact Us background" 
            className="w-full h-full object-cover object-right opacity-60"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 w-full relative z-20 pt-20">
          <div className="max-w-[700px] space-y-6">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[64px] md:text-[96px] font-display font-bold leading-[1] tracking-[-0.03em] text-white"
            >
              Contact U<span className="text-white/40">s</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
              className="text-[18px] md:text-[20px] text-white/70 leading-[1.6] font-light max-w-[600px]"
            >
              Got questions, project ideas, or just want to say hi? We're all ears! Reach out to us and let's start a conversation.
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
          <span className="text-[11px] font-bold tracking-[0.3em] text-white uppercase rotate-90 origin-left translate-x-3">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden mt-6">
            <motion.div 
              animate={{ y: [0, 64] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 w-full h-1/2 bg-brand-orange"
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
              <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]">
                Visit Us
              </h2>
              <p className="text-[18px] text-white/60 font-light leading-[1.6] max-w-[480px]">
                We'd love to meet you in person. Drop by our studio or reach out through any of the channels below.
              </p>
            </div>
            
            <div className="space-y-8 pt-10 border-t border-white/5">
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                   <MapPin className="w-6 h-6 text-white/70 group-hover:text-white" />
                 </div>
                 <div>
                   <h4 className="font-bold text-[18px] mb-2">Address</h4>
                   <p className="text-white/50 text-[15px] font-light leading-[1.6]">Singel 542, 1017 AZ<br/>Amsterdam, Netherlands</p>
                 </div>
              </div>
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                   <Clock className="w-6 h-6 text-white/70 group-hover:text-white" />
                 </div>
                 <div>
                   <h4 className="font-bold text-[18px] mb-2">Business Hours</h4>
                   <p className="text-white/50 text-[15px] font-light leading-[1.6]">Mon - Fri: 9:00 AM - 6:00 PM<br/>Sat - Sun: Closed</p>
                 </div>
              </div>
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                   <Mail className="w-6 h-6 text-white/70 group-hover:text-white" />
                 </div>
                 <div>
                   <h4 className="font-bold text-[18px] mb-2">Email</h4>
                   <p className="text-white/50 text-[15px] font-light">contact@storystream.com</p>
                 </div>
              </div>
              <div className="flex items-start gap-6 group">
                 <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                   <Phone className="w-6 h-6 text-white/70 group-hover:text-white" />
                 </div>
                 <div>
                   <h4 className="font-bold text-[18px] mb-2">Phone</h4>
                   <p className="text-white/50 text-[15px] font-light">+31 20 123 4567</p>
                 </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#111] p-10 md:p-14 rounded-[40px] border border-white/5"
          >
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Name</label>
                  <input type="text" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="John Doe" />
                </div>
                <div className="space-y-3">
                  <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Email</label>
                  <input type="email" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="john@example.com" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Phone</label>
                <input type="tel" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="+1 (555) 000-0000" />
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Message</label>
                <textarea rows={5} className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 resize-none placeholder:text-white/20" placeholder="Tell us about your project..."></textarea>
              </div>
              <button type="button" className="w-full bg-brand-orange hover:bg-brand-yellow text-white font-bold py-5 rounded-[16px] transition-all duration-300 transform active:scale-95 text-[15px] tracking-wide shadow-[0_10px_20px_rgba(255,122,59,0.2)]">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="px-6 pb-20">
        <div className="max-w-[1200px] mx-auto">
          <div className="rounded-[30px] overflow-hidden border border-white/5 h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2435.910895924819!2d4.889969776870775!3d52.37021744720723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609c6922b1c25%3A0x3b1a66f49d5e2735!2sSingel%2C%20Amsterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="StoryStream Studios Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <Faq />
    </main>
  );
}
