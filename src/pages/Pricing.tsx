import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

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
    <section id="pricing" className="py-32 px-6 bg-[#0d0d0d] relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="text-center mb-24 space-y-6 flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 rounded-full border border-brand-orange/20 bg-brand-orange/5 text-brand-orange text-[13px] font-medium tracking-wide uppercase"
          >
            Pricing Plans
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-[-0.02em]"
          >
            Transparent Pricing <br className="hidden md:block"/>for Every Vision
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
              className={`relative p-10 rounded-[40px] border flex flex-col transition-all duration-300 ${
                plan.isPopular 
                  ? 'bg-brand-orange/5 border-brand-orange shadow-[0_0_80px_rgba(255,122,59,0.15)] md:-translate-y-4' 
                  : 'bg-[#111] border-white/5 hover:border-white/20 hover:bg-[#151515]'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange text-white px-6 py-2 rounded-full text-[12px] font-bold tracking-widest uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              <h3 className="text-[32px] font-display font-bold mb-4">{plan.name}</h3>
              <p className="text-white/50 mb-8 min-h-[48px] text-[15px] leading-[1.6] font-light">{plan.desc}</p>
              
              <div className="flex items-baseline mb-10">
                <span className="text-[56px] font-bold tracking-tight leading-none">{plan.price}</span>
              </div>
              
              <ul className="space-y-5 mb-12 flex-grow">
                {plan.features.map((feature, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-4">
                    <div className={`mt-1 p-1 rounded-full ${plan.isPopular ? 'bg-brand-orange/20 text-brand-orange' : 'bg-white/10 text-white/70'}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-[15px] text-white/70 font-light">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-5 rounded-full font-bold transition-all duration-300 transform active:scale-95 text-[15px] tracking-wide ${
                plan.isPopular 
                  ? 'bg-brand-orange hover:bg-brand-yellow text-white shadow-[0_10px_20px_rgba(255,122,59,0.3)]' 
                  : 'bg-white/10 hover:bg-white text-white hover:text-black'
              }`}>
                Choose Plan
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
