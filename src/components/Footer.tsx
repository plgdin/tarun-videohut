import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Mail, MapPin } from 'lucide-react';

const marqueeItems = [
  "Directing", "Acting", "Scriptwriting", "Color Grading", "Production",
  "Directing", "Acting", "Scriptwriting", "Color Grading", "Production"
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
              <div className="w-3 h-3 rounded-full bg-primary" />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        

        {/* 3. Footer Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 mb-24">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-6 space-y-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-[15px] text-white/60">
              <div className="space-y-4">
                <h4 className="font-display font-bold text-white text-[18px] uppercase tracking-wider">Contact Info</h4>
                <ul className="space-y-3">
                  <li className="flex gap-3 items-start">
                    <MapPin className="w-4 h-4 text-primary mt-1 shrink-0" />
                    <span>Bangalore, India</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <span>contact@tarunkapoor.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Links */}
          <div className="lg:col-span-3 lg:col-start-8 space-y-8">
            <h4 className="font-display font-bold text-[18px] text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-4 text-[15px]">
              <li><HashLink smooth to="/#home" className="text-white/50 hover:text-white transition-colors">Home</HashLink></li>
              <li><Link to="/projects" className="text-white/50 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/contact" className="text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-2 space-y-8">
            <h4 className="font-display font-bold text-[18px] text-white uppercase tracking-wider">Social Medias</h4>
            <ul className="space-y-4 text-[15px]">
              <li>
                <a href="https://www.behance.net/tarunkapoor2" target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" /> Behance
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" /> Instagram
                </a>
              </li>
              <li>
                <a href="#" className="text-white/50 hover:text-primary transition-colors flex items-center gap-2 group">
                  <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-primary transition-colors" /> YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 4. Lower Copyrights portion */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-[14px] text-white/40">
          <p>© 2026 Tarun Kapoor. All Rights Reserved.</p>
          <div className="flex gap-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
