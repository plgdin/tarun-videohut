import React, { useState, useEffect, useRef } from 'react';

interface PageContent {
  heading: string;
  description: React.ReactNode;
}

interface Page {
  leftBgImage: string | null;
  rightBgImage: string | null;
  leftContent: PageContent | null;
  rightContent: PageContent | null;
}

const pages: Page[] = [
  {
    leftBgImage: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Welcome Aboard!',
      description: 'Hold on to your mouse, things are about to get wild!',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1200&auto=format&fit=crop',
    leftContent: {
      heading: 'Page 2',
      description: 'Spoiler alert: it’s still empty. Keep that scroll finger limber!',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1200&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Page 3',
      description: 'Plot twist: You’ve reached the midpoint. Bravo!',
    },
  },
  {
    leftBgImage: null,
    rightBgImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1200&auto=format&fit=crop',
    leftContent: {
      heading: 'Page 4',
      description: 'One more scroll, I promise—almost there!',
    },
    rightContent: null,
  },
  {
    leftBgImage: 'https://images.unsplash.com/photo-1498038432885-c6f3f1b912ee?q=80&w=1200&auto=format&fit=crop',
    rightBgImage: null,
    leftContent: null,
    rightContent: {
      heading: 'Epic Finale!',
      description: (
        <>
         :)
        </>
      ),
    },
  },
];

export default function ScrollAdventure() {
  const [currentPage, setCurrentPage] = useState(1);
  const numOfPages = pages.length;
  const animTime = 1000;
  const scrolling = useRef(false);

  const navigateUp = () => {
    if (currentPage > 1) setCurrentPage(p => p - 1);
  };

  const navigateDown = () => {
    if (currentPage < numOfPages) setCurrentPage(p => p + 1);
  };

  const handleWheel = (e: WheelEvent) => {
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
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage]);

  return (
    <div className="relative overflow-hidden h-screen w-full bg-black">
      {pages.map((page, i) => {
        const idx = i + 1;
        const isActive = currentPage === idx;
        const upOff = 'translateY(-100%)';
        const downOff = 'translateY(100%)';
        const leftTrans = isActive ? 'translateY(0)' : downOff;
        const rightTrans = isActive ? 'translateY(0)' : upOff;

        return (
          <div key={idx} className="absolute inset-0">
            {/* Left Half */}
            <div
              className="absolute top-0 left-0 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: leftTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: page.leftBgImage ? `url(${page.leftBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8 bg-black/40">
                  {page.leftContent && (
                    <>
                      <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-center text-primary text-shadow-cinematic">
                        {page.leftContent.heading}
                      </h2>
                      <p className="text-lg text-center font-light text-white/80 max-w-md">
                        {page.leftContent.description}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>

            {/* Right Half */}
            <div
              className="absolute top-0 left-1/2 w-1/2 h-full transition-transform duration-[1000ms]"
              style={{ transform: rightTrans }}
            >
              <div
                className="w-full h-full bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: page.rightBgImage ? `url(${page.rightBgImage})` : undefined }}
              >
                <div className="flex flex-col items-center justify-center h-full text-white p-8 bg-black/40">
                  {page.rightContent && (
                    <>
                      <h2 className="text-4xl md:text-5xl font-display font-bold uppercase mb-4 text-center text-primary text-shadow-cinematic">
                        {page.rightContent.heading}
                      </h2>
                      {typeof page.rightContent.description === 'string' ? (
                        <p className="text-lg text-center font-light text-white/80 max-w-md">
                          {page.rightContent.description}
                        </p>
                      ) : (
                        <div className="text-lg text-center font-light text-white/80 max-w-md">
                          {page.rightContent.description}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Progress Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-3">
        {pages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentPage === i + 1 ? 'bg-primary scale-125 shadow-glow' : 'bg-white/40 hover:bg-white/80'
            }`}
            aria-label={`Go to page ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
