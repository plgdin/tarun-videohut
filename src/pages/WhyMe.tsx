export default function WhyMe() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative aspect-square max-w-md mx-auto lg:mx-0 w-full">
             <div className="absolute inset-0 bg-brand-orange/20 blur-3xl rounded-full -z-10"></div>
             <img 
               src="/assets/portfolio_1.png" 
               alt="About Us" 
               className="w-full h-full object-cover rounded-[2rem] border border-white/10"
             />
             <div className="absolute -bottom-8 -right-8 bg-[#111] p-8 rounded-3xl border border-white/10 hidden md:block">
                <p className="text-5xl font-display font-bold text-brand-yellow mb-2">15+</p>
                <p className="text-sm text-white/70 font-medium uppercase tracking-wider">Years of<br/>Experience</p>
             </div>
          </div>
          
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 rounded-full border border-brand-yellow/30 bg-brand-yellow/10 text-brand-yellow text-sm font-medium tracking-wider uppercase">
              About Us
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
              Know More About Us
            </h2>
            <div className="space-y-6 text-lg text-white/70 leading-relaxed">
              <p>
                Established in 2015, we have dedicated ourselves to crafting captivating visual narratives defined by creativity, innovation, and an unwavering commitment to excellence in video production.
              </p>
              <p>
                Our mission is clear: to transform ideas into compelling visual stories. We believe that every project is an opportunity to create something extraordinary. Whether it's a corporate video, a commercial, an event coverage, or an animation, we approach each endeavor with creativity, enthusiasm, and a commitment to exceeding our clients' expectations.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-white/10">
               <div>
                  <p className="text-4xl font-display font-bold mb-2">200+</p>
                  <p className="text-sm text-white/70 uppercase tracking-wider">Repeated Clients</p>
               </div>
               <div>
                  <p className="text-4xl font-display font-bold mb-2">478</p>
                  <p className="text-sm text-white/70 uppercase tracking-wider">Completed Projects</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
