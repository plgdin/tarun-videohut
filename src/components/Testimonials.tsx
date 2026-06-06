import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonialsData = [
  {
    id: 1,
    quote: "We are thrilled with our new campaign films. Tarun was incredibly focused, creative, and fostered an inspiring directorial atmosphere on set. Everything came together seamlessly!",
    author: "Sarah Adams",
    role: "Brand Marketing Lead"
  },
  {
    id: 2,
    quote: "Working with Tarun on our Budweiser commercial was outstanding! His unique directorial eye and patience with framing resulted in exactly the high-energy output we wanted.",
    author: "Michael Lee",
    role: "Agency Director"
  },
  {
    id: 3,
    quote: "After multiple commercial collaborations with Tarun, I'm consistently amazed by his bold visual signature and raw directorial instinct. A master of pacing.",
    author: "Emily Rodriguez",
    role: "Creative Director"
  }
];

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(0);

  const goTo = (index: number) => {
    setDirection(index > active ? 1 : -1);
    setActive(index);
  };

  const goNext = () => {
    setDirection(1);
    setActive((prev) => (prev + 1) % testimonialsData.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setActive((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return (
    <section className="bg-black py-32 px-6 border-y border-white/5 overflow-hidden">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <h2 className="text-[40px] md:text-[56px] font-display font-bold leading-[1.1] tracking-tight uppercase text-primary">
            Director Chronicles
          </h2>
          <div className="flex gap-3 shrink-0">
            <button 
              onClick={goPrev}
              className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button 
              onClick={goNext}
              className="w-14 h-14 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:text-primary hover:border-primary/50 hover:bg-white/5 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto min-h-[280px]">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <svg className="w-16 h-16 mx-auto mb-8 text-primary/20" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z"></path>
              </svg>
              <p className="text-2xl md:text-3xl font-display font-light leading-relaxed mb-10 text-white/90 italic">
                "{testimonialsData[active].quote}"
              </p>
              <div>
                <h4 className="text-xl font-bold font-display text-primary mb-1">{testimonialsData[active].author}</h4>
                <p className="text-white/50 text-sm">{testimonialsData[active].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-3 mt-12">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-none transition-all duration-300 ${i === active ? 'bg-primary scale-125' : 'bg-white/20 hover:bg-white/40'}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
