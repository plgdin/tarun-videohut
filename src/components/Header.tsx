import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navItems = [
  { to: "/", label: "Home", isHash: false },
  { to: "/projects", label: "Projects", isHash: false },
  { to: "/albums", label: "Albums", isHash: false },
  { to: "/about", label: "About", isHash: false },
  { to: "/services", label: "Services", isHash: false },
  { to: "/blogs", label: "Blogs", isHash: false },
  { to: "/contact", label: "Contact", isHash: false },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-6"
      >
        <nav
          className={cn(
            "flex items-center justify-between px-8 py-5 rounded-[50px] transition-all duration-500 w-full max-w-[1300px] bg-[#0d0d0d]/40 backdrop-blur-[12px] border border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]",
            scrolled && "bg-[#0d0d0d]/80 border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.8)]"
          )}
        >
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-orange flex items-center justify-center shadow-[0_0_20px_rgba(255,122,59,0.3)] shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col">
               <span className="font-display font-bold text-[24px] tracking-tight text-white leading-none">StoryStream</span>
               <span className="font-display text-[12px] tracking-[0.15em] text-white/60 leading-none mt-1">STUDIOS</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-[18px] font-display font-semibold tracking-wide text-white/80">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink 
                  to={item.to} 
                  end={item.to === "/"}
                  className={({ isActive }) => cn(
                    "transition-colors duration-300 pb-1 border-b-2",
                    isActive ? "text-brand-orange border-brand-orange" : "hover:text-white border-transparent"
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Mobile Hamburger */}
            <button 
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/60 backdrop-blur-sm lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] bg-[#0d0d0d]/95 backdrop-blur-xl border-l border-white/10 flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
                <span className="font-display font-bold text-lg text-white">Menu</span>
                <button 
                  onClick={closeMobile}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Drawer Links */}
              <nav className="flex-1 px-6 py-8 overflow-y-auto">
                <ul className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.li 
                      key={item.to}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * i, duration: 0.3 }}
                    >
                      <NavLink
                        to={item.to}
                        end={item.to === "/"}
                        onClick={closeMobile}
                        className={({ isActive }) => cn(
                          "block py-3 px-4 rounded-xl text-[18px] font-display font-semibold transition-all duration-300",
                          isActive 
                            ? "text-brand-orange bg-brand-orange/10" 
                            : "text-white/70 hover:text-white hover:bg-white/5"
                        )}
                      >
                        {item.label}
                      </NavLink>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
