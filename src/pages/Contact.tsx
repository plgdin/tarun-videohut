export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 text-white text-sm font-medium tracking-wider uppercase">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Ready to bring your vision to life?
          </h2>
          <p className="text-lg text-white/70">
            Got questions, project ideas, or just want to say hi? We're all ears! Reach out to us using the form or our contact details below.
          </p>
          
          <div className="space-y-6 pt-8 border-t border-white/10">
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  📍
               </div>
               <div>
                  <h4 className="font-bold text-lg">Address</h4>
                  <p className="text-white/60">123 Artistic Lane, Suite 302, NY, USA M5V 1A1</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  ✉️
               </div>
               <div>
                  <h4 className="font-bold text-lg">Email</h4>
                  <p className="text-white/60">contact@videohut.com</p>
               </div>
            </div>
            <div className="flex items-start gap-4">
               <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  📞
               </div>
               <div>
                  <h4 className="font-bold text-lg">Phone</h4>
                  <p className="text-white/60">(416) 555-1234</p>
               </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-8 md:p-12 rounded-3xl border border-white/10">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">First Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="John" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Last Name</label>
                <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Email Address</label>
              <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors" placeholder="john@example.com" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-white/80">Message</label>
              <textarea rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-brand-orange transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
            </div>
            <button type="button" className="w-full bg-brand-orange hover:bg-brand-yellow text-white font-bold py-4 rounded-xl transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
