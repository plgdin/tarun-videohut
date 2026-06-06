import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0a0a] pt-32 pb-10 border-t border-white/5 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[300px] bg-brand-orange/5 blur-[100px] rounded-t-full pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          <div className="md:col-span-6 lg:col-span-5 space-y-10">
            <h2 className="text-[40px] md:text-[48px] font-display font-bold leading-[1.1] tracking-[-0.02em]">
              Not limited to video,<br/>we're your creative comrades.
            </h2>
            <p className="text-[16px] text-white/50 leading-[1.6] font-light max-w-[400px]">
              Got questions, project ideas, or just want to say hi? We're all ears!
            </p>
            <HashLink smooth to="/#contact" className="inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full text-[15px] font-bold hover:bg-brand-orange hover:text-white transition-all duration-300">
              Let's Collaborate
            </HashLink>
          </div>

          <div className="md:col-span-3 lg:col-span-3 lg:col-start-7 space-y-8">
            <h4 className="font-bold text-[18px] text-white">Quick Links</h4>
            <ul className="space-y-4">
              <li><HashLink smooth to="/#home" className="text-[15px] text-white/50 hover:text-white transition-colors">Home</HashLink></li>
              <li><Link to="/projects" className="text-[15px] text-white/50 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/about" className="text-[15px] text-white/50 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/services" className="text-[15px] text-white/50 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/blogs" className="text-[15px] text-white/50 hover:text-white transition-colors">Blogs</Link></li>
              <li><Link to="/contact" className="text-[15px] text-white/50 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3 lg:col-span-3 space-y-8">
            <h4 className="font-bold text-[18px] text-white">Social Medias</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[15px] text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                 <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Facebook
              </a></li>
              <li><a href="#" className="text-[15px] text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                 <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Vimeo
              </a></li>
              <li><a href="#" className="text-[15px] text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                 <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Twitter
              </a></li>
              <li><a href="#" className="text-[15px] text-white/50 hover:text-brand-orange transition-colors flex items-center gap-2 group">
                 <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-brand-orange transition-colors" /> Instagram
              </a></li>
            </ul>
          </div>
        </div>

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
