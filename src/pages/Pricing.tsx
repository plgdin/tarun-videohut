export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      desc: "Perfect for small businesses looking to establish a video presence.",
      features: [
        "1 Minute Promotional Video",
        "1 Day of Shooting",
        "Basic Color Grading",
        "Royalty-Free Background Music",
        "1 Revision Round"
      ]
    },
    {
      name: "Professional",
      price: "$5,000",
      desc: "Comprehensive video solution for growing brands and companies.",
      isPopular: true,
      features: [
        "Up to 3 Minutes Corporate Video",
        "2 Days of Shooting",
        "Advanced Color Grading",
        "Custom Sound Design",
        "Voiceover Recording",
        "3 Revision Rounds"
      ]
    },
    {
      name: "Cinematic",
      price: "Custom",
      desc: "High-end narrative and commercial productions.",
      features: [
        "Full Concept to Delivery",
        "Multi-Location Shooting",
        "Cinematic Lighting Setup",
        "VFX and Advanced Motion Graphics",
        "Original Music Score",
        "Unlimited Revisions"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-6">
          <div className="inline-block px-4 py-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 text-brand-orange text-sm font-medium tracking-wider uppercase">
            Pricing Plans
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight">
            Transparent Pricing for Every Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`relative p-8 rounded-3xl border flex flex-col ${
                plan.isPopular 
                  ? 'bg-brand-orange/5 border-brand-orange transform md:-translate-y-4 shadow-[0_0_40px_rgba(255,122,59,0.1)]' 
                  : 'bg-white/5 border-white/10'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-orange text-white px-4 py-1 rounded-full text-xs font-bold tracking-wider uppercase">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
              <p className="text-white/60 mb-6 min-h-[48px]">{plan.desc}</p>
              <div className="text-5xl font-bold mb-8">{plan.price}</div>
              
              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-full font-bold transition-colors ${
                plan.isPopular 
                  ? 'bg-brand-orange hover:bg-brand-yellow text-white' 
                  : 'bg-white/10 hover:bg-white/20 text-white'
              }`}>
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
