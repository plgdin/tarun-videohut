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
            "flex items-center justify-between px-8 py-5 rounded-none transition-all duration-500 w-full max-w-[1300px] bg-black/40 backdrop-blur-[12px] border-b-2 border-primary shadow-[0_8px_32px_rgba(0,0,0,0.6)]",
            scrolled && "bg-black/90 border-b-2 border-accent"
          )}
        >
          <Link to="/" className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-none bg-primary flex items-center justify-center shrink-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 22h20L12 2z" fill="black" />
              </svg>
            </div>
            <div className="flex flex-col">
               <span className="font-display font-bold text-[26px] tracking-wide text-primary text-shadow-cinematic leading-none">TARUN KAPOOR</span>
               <span className="font-display text-[11px] tracking-[0.25em] text-white/80 leading-none mt-1">FILMMAKER</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 text-[18px] font-display font-semibold tracking-wide text-white/90">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink 
                  to={item.to} 
                  end={item.to === "/"}
                  className={({ isActive }) => cn(
                    "transition-colors duration-300 pb-1 border-b-2 uppercase tracking-wider",
                    isActive ? "text-primary border-primary" : "hover:text-primary border-transparent"
                  )}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {/* Mobile Hamburger Menu */}
            <button 
              className="lg:hidden flex items-center justify-center w-12 h-12 rounded-none border border-primary bg-black text-primary hover:bg-primary hover:text-black transition-colors"
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
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[60] bg-black/80 lg:hidden"
              onClick={closeMobile}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-[70] w-[300px] bg-black border-l border-primary flex flex-col lg:hidden"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">
                <span className="font-display font-bold text-lg text-primary tracking-wider">MENU</span>
                <button 
                  onClick={closeMobile}
                  className="w-10 h-10 rounded-none border border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-black transition-colors"
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
                          "block py-3 px-4 rounded-none text-[18px] font-display font-semibold transition-all duration-300 uppercase tracking-wide",
                          isActive 
                            ? "text-black bg-primary font-bold" 
                            : "text-white/80 hover:text-primary hover:bg-white/5"
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