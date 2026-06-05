export default function Process() {
  const steps = [
    { num: "01", title: "Discovery", desc: "We start by understanding your vision, goals, and target audience to craft a tailored strategy." },
    { num: "02", title: "Pre-Production", desc: "Scripting, storyboarding, casting, and location scouting. We plan every detail before the cameras roll." },
    { num: "03", title: "Production", desc: "Our expert crew brings the storyboard to life using top-tier cinematic equipment." },
    { num: "04", title: "Post-Production", desc: "Editing, color grading, sound design, and VFX. The magic happens in the editing room." }
  ];

  return (
    <section id="process" className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-teal/10 to-transparent blur-3xl -z-10"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-brand-teal/30 bg-brand-teal/10 text-brand-teal text-sm font-medium tracking-wider uppercase">
            How We Work
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Our Video Production Process
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
              <div className="text-6xl font-display font-bold text-white/10 mb-6 group-hover:text-brand-teal/40 transition-colors">
                {step.num}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
