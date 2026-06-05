import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { NavLink, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
    >
      <nav
        className="flex items-center justify-between px-6 py-4 rounded-[44px] transition-all duration-500 w-full max-w-[1200px] bg-[#0d0d0d]/40 backdrop-blur-[12px] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      >
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-brand-orange flex items-center justify-center shadow-[0_0_20px_rgba(255,122,59,0.3)]">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 22h20L12 2z" fill="black" />
            </svg>
          </div>
          <div className="flex flex-col">
             <span className="font-display font-bold text-[20px] tracking-tight text-white leading-none">StoryStream</span>
             <span className="font-display text-[10px] tracking-[0.15em] text-white/60 leading-none mt-1">STUDIOS</span>
          </div>
        </Link>

        <ul className="hidden lg:flex items-center gap-6 xl:gap-8 text-[15px] font-display font-semibold tracking-[-0.05em] text-white/80">
          <li>
             <NavLink to="/" className={({ isActive }) => cn("transition-colors duration-300 pb-1 border-b-2", isActive ? "text-brand-orange border-brand-orange" : "hover:text-white border-transparent")}>
                Home
             </NavLink>
          </li>
          <li>
             <NavLink to="/projects" className={({ isActive }) => cn("transition-colors duration-300 pb-1 border-b-2", isActive ? "text-brand-orange border-brand-orange" : "hover:text-white border-transparent")}>
                Projects
             </NavLink>
          </li>
          <li>
             <Link to="#" className="hover:text-white transition-colors duration-300 border-b-2 border-transparent pb-1">
                Albums
             </Link>
          </li>
          <li>
             <HashLink smooth to="/#about" className="hover:text-white transition-colors duration-300 border-b-2 border-transparent pb-1">
                About
             </HashLink>
          </li>
          <li>
             <HashLink smooth to="/#services" className="hover:text-white transition-colors duration-300 border-b-2 border-transparent pb-1">
                Services
             </HashLink>
          </li>
          <li>
             <Link to="#" className="hover:text-white transition-colors duration-300 border-b-2 border-transparent pb-1">
                Blogs
             </Link>
          </li>
          <li>
             <HashLink smooth to="/#contact" className="hover:text-white transition-colors duration-300 border-b-2 border-transparent pb-1">
                Contact
             </HashLink>
          </li>
        </ul>

        <HashLink 
          smooth
          to="/#pricing" 
          className="bg-white text-black px-6 py-3 rounded-full text-[15px] font-bold hover:bg-brand-orange hover:text-white transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_0_1px_rgba(255,255,255,0.1)_inset]"
        >
          Get Template
        </HashLink>
      </nav>
    </motion.header>
  );
}
