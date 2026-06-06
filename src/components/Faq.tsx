import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqsData = [
  {
    question: "What directorial services do you offer?",
    answer: "I specialize in directing brand commercials, corporate campaigns, music videos, short films, and stage plays. This includes treatment development, scriptwriting, set direction, and editing."
  },
  {
    question: "How long does a campaign take from treatment to lock?",
    answer: "A standard campaign takes between 2 to 6 weeks depending on scale, casting requirements, shooting schedule, and post-production complexity."
  },
  {
    question: "Do you handle casting and screenplay writing?",
    answer: "Yes. From initial treatments and scriptwriting to staging and actor direction, I manage the performance pipeline to ensure authentic storytelling."
  },
  {
    question: "Can we collaborate on scale-model or special visual shoots?",
    answer: "Absolutely. I have direct experience handling specialized macro-miniature setups and scaled models (like the Royal Enfield Motorverse campaign)."
  }
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="bg-black py-32 px-6 border-t border-white/5">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[40px] md:text-[56px] font-display font-bold text-center mb-16 leading-[1.1] tracking-tight uppercase text-primary">
          Common Enquiries
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-sm overflow-hidden transition-colors duration-300 ${activeFaq === i ? 'border-primary bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
            >
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-6"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className="text-lg font-display font-bold pr-8 uppercase tracking-tight text-primary">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-sm border flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'border-primary text-primary rotate-45' : 'border-white/20 text-white/50'}`}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
                </span>
              </button>
              <AnimatePresence>
                {activeFaq === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-8 pb-6 pt-2 text-white/60 font-light leading-[1.7] font-body">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
