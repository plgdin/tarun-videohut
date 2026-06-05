export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-24 px-6">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 z-10">
          <div className="inline-block px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-sm font-medium tracking-wider uppercase">
            Showreel
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight tracking-tight">
            Turning Video into <span className="text-brand-orange">Vibrant</span> Conversations.
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-lg leading-relaxed">
            We're your friendly video wizards creating fantastic commercials, corporate videos, social ads and many more.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button className="bg-brand-orange hover:bg-brand-yellow text-white px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105">
              Get the template
            </button>
            <button className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 hover:bg-white/10 transition-colors duration-300">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                <div className="w-0 h-0 border-t-[6px] border-t-transparent border-l-[10px] border-l-black border-b-[6px] border-b-transparent ml-1"></div>
              </div>
              <span className="font-bold">PLAY SHOWREEL</span>
            </button>
          </div>
        </div>
        
        <div className="relative aspect-video lg:aspect-square w-full max-w-2xl mx-auto lg:ml-auto">
          <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-teal/20 rounded-3xl blur-3xl -z-10"></div>
          <img 
            src="/assets/hero_showreel.png" 
            alt="Showreel Preview" 
            className="w-full h-full object-cover rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
