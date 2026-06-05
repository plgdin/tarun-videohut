import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <div className="space-y-6">
            <div className="inline-block px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/90 text-[13px] font-medium tracking-wide uppercase">
              Contact Us
            </div>
            <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]">
              Ready to bring your vision to life?
            </h2>
          </div>
          
          <p className="text-[18px] text-white/60 font-light leading-[1.6] max-w-[480px]">
            Got questions, project ideas, or just want to say hi? We're all ears! Reach out to us using the form or our contact details below.
          </p>
          
          <div className="space-y-8 pt-10 border-t border-white/5">
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-white/70 group-hover:text-white" />
               </div>
               <div>
                  <h4 className="font-bold text-[18px] mb-2">Address</h4>
                  <p className="text-white/50 text-[15px] font-light leading-[1.6]">123 Artistic Lane, Suite 302<br/>NY, USA M5V 1A1</p>
               </div>
            </div>
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <Mail className="w-6 h-6 text-white/70 group-hover:text-white" />
               </div>
               <div>
                  <h4 className="font-bold text-[18px] mb-2">Email</h4>
                  <p className="text-white/50 text-[15px] font-light">contact@videohut.com</p>
               </div>
            </div>
            <div className="flex items-start gap-6 group">
               <div className="w-14 h-14 rounded-full bg-[#111] border border-white/5 flex items-center justify-center shrink-0 group-hover:bg-brand-orange transition-colors duration-300">
                  <Phone className="w-6 h-6 text-white/70 group-hover:text-white" />
               </div>
               <div>
                  <h4 className="font-bold text-[18px] mb-2">Phone</h4>
                  <p className="text-white/50 text-[15px] font-light">(416) 555-1234</p>
               </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-[#111] p-10 md:p-14 rounded-[40px] border border-white/5"
        >
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">First Name</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="John" />
              </div>
              <div className="space-y-3">
                <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Last Name</label>
                <input type="text" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Email Address</label>
              <input type="email" className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 placeholder:text-white/20" placeholder="john@example.com" />
            </div>
            <div className="space-y-3">
              <label className="text-[13px] font-bold text-white/60 uppercase tracking-widest">Message</label>
              <textarea rows={4} className="w-full bg-[#1a1a1a] border border-transparent rounded-[16px] px-6 py-4 text-[15px] text-white focus:outline-none focus:border-brand-orange focus:bg-transparent transition-all duration-300 resize-none placeholder:text-white/20" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-brand-orange hover:bg-brand-yellow text-white font-bold py-5 rounded-[16px] transition-all duration-300 transform active:scale-95 text-[15px] tracking-wide shadow-[0_10px_20px_rgba(255,122,59,0.2)]">
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
