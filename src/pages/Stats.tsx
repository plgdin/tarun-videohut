import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          window.requestAnimationFrame(step);
          if (counterRef.current) {
            observer.unobserve(counterRef.current);
          }
        }
      },
      { threshold: 0.5 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-[64px] md:text-[80px] font-display font-black text-primary mb-2 leading-none">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-32 px-6 bg-black border-y border-white/5 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 relative z-10">
        <div className="text-center space-y-4">
          <Counter end={8} suffix="+" />
          <p className="text-white/50 font-display font-bold uppercase tracking-widest text-[11px]">Years Experience</p>
        </div>
        <div className="text-center space-y-4">
          <Counter end={12} suffix="+" />
          <p className="text-white/50 font-display font-bold uppercase tracking-widest text-[11px]">Major Brands</p>
        </div>
        <div className="text-center space-y-4">
          <Counter end={50} suffix="+" />
          <p className="text-white/50 font-display font-bold uppercase tracking-widest text-[11px]">Films Directed</p>
        </div>
        <div className="text-center space-y-4">
          <Counter end={20} suffix="+" />
          <p className="text-white/50 font-display font-bold uppercase tracking-widest text-[11px]">Stage Plays</p>
        </div>
      </div>
    </section>
  );
}
