import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Pricing() {
  const plans = [
    {
      name: "Starter Campaign",
      price: "$2,500",
      desc: "Perfect for social films and brand kickstarters.",
      features: [
        "1 Minute Promotional Video",
        "1 Day of Shooting",
        "Directorial Treatment",
        "Basic Color Grading",
        "Royalty-Free Audio Score"
      ]
    },
    {
      name: "Commercial Film",
      price: "$5,000",
      desc: "Comprehensive cinematic production for growing brands.",
      isPopular: true,
      features: [
        "Up to 3 Minutes Film",
        "2 Days of Shooting",
        "Advanced Color Grading",
        "Custom Sound Design",
        "Full Cast Direction",
        "3 Revision Rounds"
      ]
    },
    {
      name: "Narrative & Scale",
      price: "Custom",
      desc: "High-end theatrical, short film, or macro scale model productions.",
      features: [
        "Full Concept development",
        "Multi-Location Shooting",
        "Cinematic Staging & Lighting",
        "Post-Production & VFX",
        "Original Score & Mixing",
        "Unlimited Revisions"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-32 px-6 bg-black relative overflow-hidden border-t border-white/5">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-sm border border-primary/20 bg-primary/5 text-primary text-[13px] font-display font-bold tracking-widest uppercase"
          >
            Engagement Models
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary"
          >
            Directorial Packages
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              key={idx} 
              className={`relative p-10 rounded-sm border flex flex-col transition-all duration-300 video-card ${
                plan.isPopular 
                  ? 'bg-primary/5 border-primary shadow-glow md:-translate-y-4' 
                  : 'bg-[#0d0d0d] border-white/5 hover:border-white/20 hover:bg-[#111]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-black px-6 py-2 rounded-sm text-[11px] font-display font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-[32px] font-display font-bold mb-4 uppercase text-primary">{plan.name}</h3>
              <p className="text-white/50 mb-8 min-h-[48px] text-[15px] leading-[1.6] font-light font-body">{plan.desc}</p>
              
              <div className="flex items-baseline mb-10">
                <span className="text-[56px] font-bold tracking-tight leading-none font-display text-white">{plan.price}</span>
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className={`mt-1 p-1 rounded-sm ${plan.isPopular ? 'bg-primary/20 text-primary' : 'bg-white/10 text-white/70'}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-white/70 font-light font-body">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-sm font-display font-bold transition-all duration-300 transform active:scale-95 text-[13px] tracking-widest uppercase ${
                plan.isPopular 
                  ? 'bg-primary hover:bg-accent text-black shadow-glow' 
                  : 'bg-white/10 hover:bg-white text-white hover:text-black'
              }`}>
                Inquire Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
