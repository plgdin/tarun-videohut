import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Camera } from 'lucide-react';
import { albumsData } from '../lib/albumsData';

export default function Albums() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = albumsData.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  };

  const handleWheel = (e: WheelEvent) => {
    if (e.cancelable) e.preventDefault();
    if (scrolling.current) return;
    scrolling.current = true;
    e.deltaY > 0 ? navigateDown() : navigateUp();
    setTimeout(() => (scrolling.current = false), animTime);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (scrolling.current) return;
    if (e.key === 'ArrowUp') {
      scrolling.current = true;
      navigateUp();
      setTimeout(() => (scrolling.current = false), animTime);
    } else if (e.key === 'ArrowDown') {
      scrolling.current = true;
      navigateDown();
      setTimeout(() => (scrolling.current = false), animTime);
    }
  };

  useEffect(() => {
    // Lock body scrolling when full-page slider is active
    document.body.style.overflow = 'hidden';
    
    // Add wheel event listener with passive: false to allow preventDefault
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <main className="relative overflow-hidden h-screen w-full bg-black">
      {albumsData.map((album, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        
        // Alternating split screen:
        // Even indices (0, 2, 4): Image on Left, Content on Right
        // Odd indices (1, 3): Content on Left, Image on Right
        const isLeftImage = i % 2 === 0;
        
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;
        const bgImage = album.image;

        return (
          <div 
            key={album.slug} 
            className={`absolute inset-0 w-full h-full flex transition-opacity duration-1000 ${
              isActive ? 'opacity-100 z-20 pointer-events-auto' : 'opacity-0 z-10 pointer-events-none'
            }`}
          >
            {/* Left Column */}
            <div
              className="absolute top-0 left-0 w-full md:w-1/2 h-1/2 md:h-full transition-transform duration-[1000ms] ease-in-out z-10"
              style={{ transform: leftTrans }}
            >
              {isLeftImage ? (
                // Image view
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative group"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                </div>
              ) : (
                // Content view
                <div className="w-full h-full bg-black flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-16 md:pt-0">
                  <div className="space-y-4 max-w-lg">
                    <div className="flex items-center gap-2 text-primary font-display font-bold text-xs md:text-sm tracking-[0.2em]">
                      <span>0{idx}</span>
                      <span className="w-8 h-[1px] bg-primary" />
                      <span>{album.projectType}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white leading-none">
                      {album.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-white/60 font-body font-light text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{album.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-primary" />
                        <span>{album.camera} | {album.lenses}</span>
                      </div>
                    </div>
                    <p className="hidden md:block text-white/70 font-body font-light leading-relaxed text-sm md:text-base pt-2">
                      Featuring highlights like: {album.highlights?.[0] || 'High contrast captures of scenery.'}
                    </p>
                    <div className="pt-4">
                      <Link
                        to={`/photo-albums/${album.slug}`}
                        className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-display font-bold text-sm tracking-wider hover:bg-primary hover:text-black transition-all duration-300 uppercase"
                      >
                        <span>View Album</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Column */}
            <div
              className="absolute md:top-0 top-1/2 left-0 md:left-1/2 w-full md:w-1/2 h-1/2 md:h-full transition-transform duration-[1000ms] ease-in-out z-10"
              style={{ transform: rightTrans }}
            >
              {!isLeftImage ? (
                // Image view
                <div
                  className="w-full h-full bg-cover bg-center bg-no-repeat relative group"
                  style={{ backgroundImage: `url(${bgImage})` }}
                >
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-700" />
                </div>
              ) : (
                // Content view
                <div className="w-full h-full bg-black flex flex-col justify-center px-6 md:px-16 lg:px-24 pt-16 md:pt-0">
                  <div className="space-y-4 max-w-lg">
                    <div className="flex items-center gap-2 text-primary font-display font-bold text-xs md:text-sm tracking-[0.2em]">
                      <span>0{idx}</span>
                      <span className="w-8 h-[1px] bg-primary" />
                      <span>{album.projectType}</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold uppercase tracking-tight text-white leading-none">
                      {album.title}
                    </h2>
                    <div className="flex flex-col gap-2 text-white/60 font-body font-light text-sm">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span>{album.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Camera className="w-4 h-4 text-primary" />
                        <span>{album.camera} | {album.lenses}</span>
                      </div>
                    </div>
                    <p className="hidden md:block text-white/70 font-body font-light leading-relaxed text-sm md:text-base pt-2">
                      Featuring highlights like: {album.highlights?.[0] || 'High contrast captures of scenery.'}
                    </p>
                    <div className="pt-4">
                      <Link
                        to={`/photo-albums/${album.slug}`}
                        className="inline-flex items-center gap-3 px-6 py-3 border-2 border-primary text-primary font-display font-bold text-sm tracking-wider hover:bg-primary hover:text-black transition-all duration-300 uppercase"
                      >
                        <span>View Album</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Progress Dots */}
      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {albumsData.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-3.5 h-3.5 rounded-none border border-primary transition-all duration-500 ${
              currentPage === i + 1 ? 'bg-primary scale-125 shadow-[0_0_15px_rgba(255,205,82,0.6)]' : 'bg-transparent hover:bg-primary/30'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter Indicator (Moved to top-24 on mobile to prevent overlap) */}
      <div className="absolute left-6 top-24 md:top-auto md:bottom-12 md:left-12 z-40 font-display font-bold text-2xl md:text-3xl text-primary tracking-widest">
        0{currentPage} <span className="text-white/30 text-xl font-light">/</span> 0{numOfPages}
      </div>
    </main>
  );
}
