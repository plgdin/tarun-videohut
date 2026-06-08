import * as React from "react";
import { cn } from "@/lib/utils";
import { Play, X } from "lucide-react";

// Interface for component props
interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  thumbnailUrl: string;
  videoUrl: string;
  title: string;
  description?: string;
  aspectRatio?: "16/9" | "4/3" | "1/1";
}

const VideoPlayer = React.forwardRef<HTMLDivElement, VideoPlayerProps>(
  (
    {
      className,
      thumbnailUrl,
      videoUrl,
      title,
      description,
      aspectRatio = "16/9",
      ...props
    },
    ref
  ) => {
    // State to manage the visibility of the video modal
    const [isModalOpen, setIsModalOpen] = React.useState(false);

    // Effect to handle the 'Escape' key press for closing the modal
    React.useEffect(() => {
      const handleEsc = (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          setIsModalOpen(false);
        }
      };
      window.addEventListener("keydown", handleEsc);
      return () => {
        window.removeEventListener("keydown", handleEsc);
      };
    }, []);

    // Prevent body scroll when modal is open
    React.useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);


    return (
      <>
        <div
          ref={ref}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-lg shadow-lg",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            className
          )}
          style={{ aspectRatio }}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setIsModalOpen(true)}
          tabIndex={0}
          aria-label={`Play video: ${title}`}
          {...props}
        >
          {/* Thumbnail Image */}
          <img
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            referrerPolicy="no-referrer"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

          {/* Play Button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:bg-primary/30 group-hover:border-primary/40 shadow-glow">
              <Play className="h-7 w-7 fill-white text-white ml-0.5" />
            </div>
          </div>

          {/* Title and Description */}
          <div className="absolute bottom-0 left-0 p-5">
            <h3 className="text-lg font-display font-bold text-white uppercase tracking-wide leading-tight">{title}</h3>
            {description && (
              <p className="mt-1 text-[13px] text-white/60 font-body font-light">{description}</p>
            )}
          </div>
        </div>

        {/* Video Modal */}
        {isModalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            aria-modal="true"
            role="dialog"
            onClick={(e) => { if (e.target === e.currentTarget) setIsModalOpen(false); }}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute right-6 top-6 z-50 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-all duration-300 hover:scale-110 active:scale-95"
              aria-label="Close video player"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Video Container */}
            <div className="w-full max-w-[1280px] aspect-video p-4">
               <video
                    src={videoUrl}
                    className="h-full w-full rounded-sm object-contain border border-white/10"
                    controls
                    autoPlay
                />
            </div>
          </div>
        )}
      </>
    );
  }
);
VideoPlayer.displayName = "VideoPlayer";

export { VideoPlayer };
