import { useEffect, useRef, useState } from 'react';

function Counter({ end, suffix = "", duration = 2000 }: { end: number, suffix?: string, duration?: number }) {
  const [count, setCount] = useState(0);
  const counterRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Easing out function
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
      <div className="text-5xl md:text-7xl font-display font-bold text-brand-orange mb-4">
        {count}{suffix}
      </div>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-6 border-y border-white/10 bg-[#111]">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
        <div className="text-center">
          <Counter end={15} suffix="+" />
          <p className="text-white/60 font-medium uppercase tracking-wider text-sm">Years Experience</p>
        </div>
        <div className="text-center">
          <Counter end={200} suffix="+" />
          <p className="text-white/60 font-medium uppercase tracking-wider text-sm">Repeated Clients</p>
        </div>
        <div className="text-center">
          <Counter end={478} />
          <p className="text-white/60 font-medium uppercase tracking-wider text-sm">Projects Done</p>
        </div>
        <div className="text-center">
          <Counter end={350} suffix="+" />
          <p className="text-white/60 font-medium uppercase tracking-wider text-sm">Happy Clients</p>
        </div>
      </div>
    </section>
  );
}
