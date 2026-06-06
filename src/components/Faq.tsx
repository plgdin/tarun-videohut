import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqsData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of video production services including corporate videos, commercials, event coverage, animations, VFX, scriptwriting, and color grading."
  },
  {
    question: "How much does video production cost?",
    answer: "Costs vary depending on the scope, duration, and complexity of the project. We provide custom quotes after an initial consultation."
  },
  {
    question: "How long does it take to produce a video?",
    answer: "A typical project can take anywhere from 2 to 6 weeks from pre-production to final delivery, depending on the scale and revisions."
  },
  {
    question: "Can you help with scriptwriting and storyboarding?",
    answer: "Absolutely! We have a dedicated creative team to help you conceptualize, script, and storyboard your vision from scratch."
  },
  {
    question: "What is the production process like?",
    answer: "Our process includes Discovery & Concept, Pre-Production (planning/scripting), Production (filming), and Post-Production (editing/VFX)."
  },
  {
    question: "Do you provide video marketing services?",
    answer: "While our core focus is production, we can optimize videos for specific platforms and advise on best practices for video marketing distribution."
  },
  {
    question: "Can you work with a specific budget?",
    answer: "Yes, we are flexible and can tailor our production approach to maximize the value within your specified budget constraints."
  }
];

export default function Faq() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  return (
    <section className="bg-[#0d0d0d] py-32 px-6">
      <div className="max-w-[800px] mx-auto">
        <h2 className="text-[40px] md:text-[56px] font-display font-bold text-center mb-16 leading-[1.1] tracking-tight">
          Curious? Check Out the Scoop! (FAQs)
        </h2>

        <div className="space-y-4">
          {faqsData.map((faq, i) => (
            <div 
              key={i} 
              className={`border rounded-2xl overflow-hidden transition-colors duration-300 ${activeFaq === i ? 'border-brand-orange/50 bg-white/5' : 'border-white/10 bg-transparent hover:border-white/20'}`}
            >
              <button 
                className="w-full px-8 py-6 text-left flex justify-between items-center gap-6"
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <span className="text-lg font-display font-bold pr-8">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${activeFaq === i ? 'border-brand-orange text-brand-orange rotate-45' : 'border-white/20 text-white/50'}`}>
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
                    <div className="px-8 pb-6 pt-2 text-white/60 font-light leading-[1.7]">
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
