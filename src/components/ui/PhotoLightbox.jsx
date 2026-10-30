"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export default function PhotoLightbox({ isOpen, onClose, images, activeIndex, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowRight") {
        onNavigate((activeIndex + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        onNavigate((activeIndex - 1 + images.length) % images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, images.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          style={{ backgroundColor: "rgba(8, 8, 8, 0.96)" }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8 select-none"
          onClick={onClose}
        >
          {/* Top bar controls */}
          <div 
            className="absolute top-0 inset-x-0 h-20 px-6 md:px-12 flex items-center justify-between z-10 text-white/90"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="text-[13px] text-white/70 font-[400] tracking-wide">
              Frame {activeIndex + 1} of {images.length}
            </div>

            <button
              onClick={onClose}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-[13px] font-[400] transition-[background-color,color] duration-150 cursor-pointer"
              aria-label="Close Lightbox"
            >
              <span>Close</span>
              <X size={15} />
            </button>
          </div>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex - 1 + images.length) % images.length);
            }}
            className="absolute left-4 md:left-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-[background-color,transform] active:scale-95 duration-150 cursor-pointer"
            aria-label="Previous photograph"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Active photograph container */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl h-[70vh] md:h-[82vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`Curated photograph ${activeIndex + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </motion.div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex + 1) % images.length);
            }}
            className="absolute right-4 md:right-8 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-[background-color,transform] active:scale-95 duration-150 cursor-pointer"
            aria-label="Next photograph"
          >
            <ChevronRight size={20} />
          </button>

          {/* Bottom hint */}
          <div className="absolute bottom-6 inset-x-0 text-center text-[12px] text-white/50 tracking-wide font-[300]">
            Use arrow keys [← →] to navigate · Esc to close
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
