import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mail, MapPin, Phone, Clock, ArrowRight } from 'lucide-react';

const marqueeItems = [
  "VFX", "Filming", "Scriptwriting", "Sound Design", "Color Grading",
  "VFX", "Filming", "Scriptwriting", "Sound Design", "Color Grading"
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] pt-16 pb-10 border-t border-white/5 relative overflow-hidden">
      
      {/* 1. Scrolling Marquee Banner */}
      <div className="w-full border-b border-white/5 pb-16 mb-20 overflow-hidden relative">
        <div className="flex w-max animate-marquee gap-16 whitespace-nowrap">
          {marqueeItems.concat(marqueeItems).map((item, idx) => (
            <div key={idx} className="flex items-center gap-16">
              <span className="text-[32px] md:text-[48px] font-display font-black tracking-tighter uppercase text-white/20 hover:text-white/40 transition-colors duration-300">
                {item}
              </span>
              <div className="w-3 h-3 rounded-full bg-brand-orange" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        
        {/* 2. Large Collaborate CTA Card with Orange-Green Gradient */}
        <div className="relative rounded-[40px] p-8 md:p-16 mb-24 overflow-hidden bg-gradient-to-r from-brand-orange via-[#d45d27] to-brand-teal shadow-[0_20px_50px_rgba(255,122,59,0.15)] group">
          <div className="absolute inset-0 bg-black/10 mix-blend-overlay" />
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12">
            <div className="max-w-[600px] space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
                  </svg>
                </div>
                <span className="font-display font-bold text-2xl text-white tracking-tight">StoryStream Studios</span>
              </div>
              <h2 className="text-[36px] md:text-[56px] font-display font-bold leading-[1.1] text-white tracking-tight">
                Not limited to video, we're your creative comrades.
              </h2>
            </div>
            
            <HashLink 
              smooth 
              to="/#contact" 
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 rounded-full text-[16px] font-bold hover:bg-black hover:text-white transition-all duration-300 transform group-hover:scale-105"
            >
              Let's Collaborate
              <ArrowRight className="w-5 h-5" />
            </HashLink>
          </div>
        </div>

        {/* 3. Footer Columns: Contact/Newsletter left, Quick links & Socials right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Left Column: Contact info & Newsletter */}
          <div className="lg:col-span-6 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] text-white/60">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-white text-[18px]">Contact Info</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MapPin className="w-4 h-4 text-brand-orange mt-1 shrink-0" />
                    <span>Singel 542, 1017 AZ Amsterdam, Netherlands</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>contact@storystream.com</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                    <span>+31 20 123 4567</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-display font-bold text-white text-[18px]">Business Hours</h4>
                <div className="flex gap-3 items-start">
                  <Clock className="w-4 h-4 text-brand-orange mt-1 shrink-0" />
                  <span>
                    Monday - Friday: 9:00 AM - 6:00 PM <br />
                    Saturday - Sunday: Closed
                  </span>
                </div>
              </div>
            </div>

            {/* Newsletter form */}
            <div className="space-y-4 max-w-[500px]">
              <h4 className="font-display font-bold text-white text-[18px]">Subscribe to our newsletter</h4>
              <form className="relative flex items-center w-full">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-4 text-white text-sm placeholder-white/30 focus:outline-none focus:border-brand-orange transition-colors"
                />
                <button 
                  type="button" 
                  className="absolute right-2 px-6 py-2.5 bg-brand-orange text-black font-bold rounded-full hover:bg-brand-yellow transition-colors text-sm"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="lg:col-span-3 lg:col-start-8 space-y-8">
            <h4 className="font-display font-bold text-[18px] text-white">Quick Links</h4>
            <ul className="space-y-4 text-[15px]">
              <li><HashLink smooth to="/#home" className="text-white/50 hover:text-white transition-colors">Home</HashLink></li>
              <li><Link to="/projects" className="text-white/50 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/albums" className="text-white/50 hover:text-white transition-colors">Albums</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-white/50 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blogs" className="text-white/50 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-display font-bold text-[18px] text-white">Social Medias</h4>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="#" className="text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Facebook
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Vimeo
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Lower Copyrights portion */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[14px] text-white/40">
          <p>© 2026 VideoHut Portfolio Template</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
