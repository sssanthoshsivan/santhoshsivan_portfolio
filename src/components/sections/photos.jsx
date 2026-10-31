"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import PhotoLightbox from "@/components/ui/PhotoLightbox";

const photoArchive = [
  {
    src: "/travel.webp",
    title: "Ridge of the Western Ghats",
    location: "Meghamalai, Theni",
    category: "landscape",
    year: "2024",
    aspect: "16/10",
  },
  {
    src: "/temples.webp",
    title: "Periyakulam Temple Courtyard",
    location: "Periyakulam, Theni",
    category: "architecture",
    year: "2023",
    aspect: "3/4",
  },
  {
    src: "/img17.webp",
    title: "Arches of Thirumalai Nayakkar",
    location: "Thirumalai Nayakkar Mahal, Madurai",
    category: "architecture",
    year: "2024",
    aspect: "16/9",
  },
  {
    src: "/img4.webp",
    title: "Mountain Ridge from Home",
    location: "Theni",
    category: "landscape",
    year: "2023",
    aspect: "3/4",
  },
  {
    src: "/img12.webp",
    title: "Black Swan in Emerald Waters",
    location: "Mysuru Zoo",
    category: "landscape",
    year: "2024",
    aspect: "3/4",
  },
  {
    src: "/wildLife.webp",
    title: "Solitude on Bodi Mettu Ghats",
    location: "Bodi Mettu, Theni",
    category: "landscape",
    year: "2023",
    aspect: "1/1",
  },
  {
    src: "/img1.webp",
    title: "Indian Wolf in Golden Light",
    location: "Mysuru Zoo",
    category: "landscape",
    year: "2023",
    aspect: "3/4",
  },
  {
    src: "/img16.webp",
    title: "Canopy Wanderer on Banyan Roots",
    location: "Veerappa Ayyanar Temple, Theni",
    category: "landscape",
    year: "2024",
    aspect: "3/4",
  },
  {
    src: "/img5.webp",
    title: "Fishermen below Pamban Bridge",
    location: "Pamban Bridge, Rameswaram",
    category: "street",
    year: "2023",
    aspect: "16/10",
  },
  {
    src: "/simpleLife.webp",
    title: "Tea Pluckers of Meghamalai",
    location: "Meghamalai, Theni",
    category: "street",
    year: "2024",
    aspect: "1/1",
  },
  {
    src: "/img18.webp",
    title: "Sunlit Langur in Canopy Rim Light",
    location: "Meghamalai, Theni",
    category: "landscape",
    year: "2024",
    aspect: "16/10",
  },
  {
    src: "/myHome.webp",
    title: "Workspace & Window Daylight",
    location: "Home, Theni",
    category: "architecture",
    year: "2023",
    aspect: "3/4",
  },
  {
    src: "/goodConversation.webp",
    title: "Afternoon Laughter with Friends",
    location: "Theni",
    category: "street",
    year: "2024",
    aspect: "3/4",
  },
  {
    src: "/img13.webp",
    title: "Leopard in Dappled Sunlight",
    location: "Mysuru Zoo",
    category: "landscape",
    year: "2024",
    aspect: "3/4",
  },
  {
    src: "/img15.webp",
    title: "Flock in Flight over the Fields",
    location: "Theni",
    category: "landscape",
    year: "2023",
    aspect: "1/1",
  },
  {
    src: "/img3.webp",
    title: "Hairpin Turns in Mountain Mist",
    location: "Bodi Mettu, Theni",
    category: "landscape",
    year: "2023",
    aspect: "16/10",
  },
];

const categoryTabs = [
  { id: "all", label: "All Works" },
  { id: "street", label: "Street & People" },
  { id: "architecture", label: "Architecture & Stone" },
  { id: "landscape", label: "Journeys & Land" },
];

export default function Photographs() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const scrollRef = useRef(null);

  const filteredPhotos = photoArchive.filter(
    (photo) => activeCategory === "all" || photo.category === activeCategory
  );

  const allImages = photoArchive.map((p) => p.src);

  const handleOpenPhoto = (photoSrc) => {
    const idx = allImages.indexOf(photoSrc);
    if (idx !== -1) setLightboxIndex(idx);
  };

  const scrollFilmstrip = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -420 : 420;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const featuredPhotos = filteredPhotos.slice(0, 3);
  const streamPhotos = filteredPhotos.slice(3);

  return (
    <section id="photography" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full">
      {/* Editorial Header */}
      <div className="mb-8 md:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
          <div className="max-w-[680px]">
            <h2 className="text-[clamp(28px,3.5vw,46px)] font-[400] text-foreground tracking-[-0.035em] leading-[1.08] mb-3">
              Visual Observations
            </h2>
            <p className="text-[14px] md:text-[16px] text-muted-foreground font-[300] leading-[1.6]">
              A quiet visual archive of street life, temple stone, and mountain atmospheres across Theni, the Western Ghats, and travel routes. Candid frames made between software builds.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[13px] text-muted-foreground font-[400]">
              {filteredPhotos.length} curated frames
            </span>
          </div>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap items-center gap-2 pt-1">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count = tab.id === "all" 
              ? photoArchive.length 
              : photoArchive.filter(p => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] md:text-[13px] font-[400] transition-[background-color,color] duration-200 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background font-medium"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[10px] md:text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Curator Exhibition Stage */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-8 md:space-y-10"
        >
          {/* 3-Image Featured Grid: All 3 visible side-by-side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
            {featuredPhotos.map((photo, idx) => (
              <div
                key={idx}
                onClick={() => handleOpenPhoto(photo.src)}
                className="group relative cursor-zoom-in"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted/20">
                  <Image
                    src={photo.src}
                    alt={photo.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={idx === 0}
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                </div>

                {/* Minimal Editorial Caption — Zero Slop, Space-Efficient */}
                <div className="pt-2 px-0.5">
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="text-[13px] md:text-[14px] font-[450] text-foreground tracking-[-0.01em] truncate">
                      {photo.title}
                    </h3>
                    <span className="shrink-0 text-[11px] text-muted-foreground/75 font-[350]">
                      {photo.year}
                    </span>
                  </div>
                  <p className="text-[11px] md:text-[12px] text-muted-foreground/70 font-[350] truncate mt-0.5">
                    {photo.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Horizontal Archive Stream Reel */}
          {streamPhotos.length > 0 && (
            <div className="pt-4 md:pt-6 border-t border-border/40">
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] md:text-[14px] font-[450] text-foreground">
                    Archive Stream
                  </span>
                  <span className="text-[11px] text-muted-foreground/70 font-[350]">
                    ({streamPhotos.length} frames)
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollFilmstrip("left")}
                    aria-label="Scroll left in photography strip"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-muted/40 hover:bg-muted text-foreground flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    onClick={() => scrollFilmstrip("right")}
                    aria-label="Scroll right in photography strip"
                    className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-muted/40 hover:bg-muted text-foreground flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Track */}
              <div
                ref={scrollRef}
                className="flex gap-3.5 md:gap-4 overflow-x-auto pb-2 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {streamPhotos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => handleOpenPhoto(photo.src)}
                    className="group relative flex-none w-[220px] sm:w-[250px] md:w-[270px] cursor-zoom-in snap-start"
                  >
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-lg bg-muted/20">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="270px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    {/* Stream Minimal Caption */}
                    <div className="pt-2 px-0.5">
                      <div className="flex items-baseline justify-between gap-2">
                        <h4 className="text-[12px] sm:text-[13px] font-[450] text-foreground tracking-[-0.01em] truncate">
                          {photo.title}
                        </h4>
                        <span className="shrink-0 text-[10px] sm:text-[11px] text-muted-foreground/75 font-[350]">
                          {photo.year}
                        </span>
                      </div>
                      <p className="text-[11px] text-muted-foreground/70 font-[350] truncate mt-0.5">
                        {photo.location}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Understated Personal Archive Link Bridge */}
      <div className="mt-12 md:mt-16 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border/40">
        <p className="text-[13px] md:text-[14px] text-muted-foreground font-[300]">
          Cinema, music, temples, and everyday personal reflections.
        </p>

        <Link
          href="/favourites"
          className="group inline-flex items-center gap-2 text-[13px] text-foreground font-[400] hover:text-primary transition-colors duration-150"
        >
          <span>Personal Archive & Favourites</span>
          <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
        </Link>
      </div>

      {/* Full-Screen Darkroom Lightbox */}
      <PhotoLightbox
        isOpen={lightboxIndex !== null}
        activeIndex={lightboxIndex ?? 0}
        images={allImages}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
