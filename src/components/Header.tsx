import { useState, useEffect } from 'react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <nav
        className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 w-full max-w-5xl ${
          scrolled ? 'bg-black/80 backdrop-blur-md border border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="flex items-center gap-2">
          {/* Logo Placeholder */}
          <div className="w-8 h-8 rounded-full bg-brand-orange flex items-center justify-center font-display font-bold text-black">
            V
          </div>
          <span className="font-display font-bold text-lg tracking-tight">VideoHut</span>
        </div>

        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-white/80">
          <li><a href="#home" className="hover:text-brand-orange transition-colors">Home</a></li>
          <li><a href="#services" className="hover:text-brand-orange transition-colors">Services</a></li>
          <li><a href="#work" className="hover:text-brand-orange transition-colors">Work</a></li>
          <li><a href="#about" className="hover:text-brand-orange transition-colors">About</a></li>
        </ul>

        <a href="#contact" className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-orange hover:text-white transition-colors duration-300">
          Get Template
        </a>
      </nav>
    </header>
  );
}
