"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
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
      const scrollAmount = direction === "left" ? -460 : 460;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const featurePhoto = filteredPhotos[0] || photoArchive[0];
  const sidePhotos = filteredPhotos.slice(1, 3);
  const streamPhotos = filteredPhotos.slice(3);

  return (
    <section id="photography" className="px-6 md:px-12 lg:px-16 py-20 md:py-32 max-w-[1280px] mx-auto w-full">
      {/* Editorial Header */}
      <div className="mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8">
          <div className="max-w-[680px]">
            <h2 className="text-[clamp(30px,4vw,52px)] font-[400] text-foreground tracking-[-0.035em] leading-[1.08] mb-4">
              Visual Observations
            </h2>
            <p className="text-[15px] md:text-[17px] text-muted-foreground font-[300] leading-[1.7]">
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
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {categoryTabs.map((tab) => {
            const isActive = activeCategory === tab.id;
            const count = tab.id === "all" 
              ? photoArchive.length 
              : photoArchive.filter(p => p.category === tab.id).length;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[13px] font-[400] transition-[background-color,color] duration-200 cursor-pointer ${
                  isActive
                    ? "bg-foreground text-background font-medium"
                    : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <span>{tab.label}</span>
                <span className={`text-[11px] px-1.5 py-0.2 rounded-full ${
                  isActive ? "bg-background/20 text-background" : "bg-muted text-muted-foreground"
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Curator Diptych Presentation */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-12 md:space-y-16"
        >
          {/* Main Exhibition Stage: Large Feature + Paired Stack */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* Grand Focus Image */}
            <div 
              onClick={() => handleOpenPhoto(featurePhoto.src)}
              className="lg:col-span-7 group relative bg-muted/30 rounded-lg overflow-hidden cursor-zoom-in"
            >
              <div className="relative aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] w-full overflow-hidden">
                <Image
                  src={featurePhoto.src}
                  alt={featurePhoto.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              </div>

              {/* Museum Label Under Image */}
              <div className="p-4 sm:p-5 flex items-center justify-between gap-4 bg-card/90">
                <div>
                  <h3 className="text-[15px] sm:text-[16px] font-[400] text-foreground tracking-[-0.01em]">
                    {featurePhoto.title}
                  </h3>
                  <p className="text-[12px] text-muted-foreground font-[300] mt-0.5">
                    {featurePhoto.location} · {featurePhoto.year}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-[12px] text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                  <span className="hidden sm:inline font-[300]">Inspect full frame</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>

            {/* Paired Side Frames */}
            <div className="lg:col-span-5 flex flex-col gap-6 md:gap-8">
              {sidePhotos.map((photo, sIdx) => (
                <div
                  key={sIdx}
                  onClick={() => handleOpenPhoto(photo.src)}
                  className="group relative bg-muted/30 rounded-lg overflow-hidden cursor-zoom-in"
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-4 flex items-center justify-between gap-4 bg-card/90">
                    <div>
                      <h4 className="text-[14px] font-[400] text-foreground tracking-[-0.01em]">
                        {photo.title}
                      </h4>
                      <p className="text-[12px] text-muted-foreground font-[300] mt-0.5">
                        {photo.location} · {photo.year}
                      </p>
                    </div>

                    <ArrowUpRight size={13} className="text-muted-foreground group-hover:text-foreground transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Horizontal Filmstrip Reel (gallery-drag-row-mixed-modules) */}
          {streamPhotos.length > 0 && (
            <div className="pt-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[14px] font-[400] text-foreground">
                  Archive Stream
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => scrollFilmstrip("left")}
                    aria-label="Scroll left in photography strip"
                    className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted text-foreground flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => scrollFilmstrip("right")}
                    aria-label="Scroll right in photography strip"
                    className="w-8 h-8 rounded-full bg-muted/40 hover:bg-muted text-foreground flex items-center justify-center transition-colors duration-150 cursor-pointer"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              {/* Horizontal Scroll Track */}
              <div
                ref={scrollRef}
                className="flex gap-4 md:gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {streamPhotos.map((photo, pIdx) => (
                  <div
                    key={pIdx}
                    onClick={() => handleOpenPhoto(photo.src)}
                    className="group relative flex-none w-[240px] sm:w-[300px] md:w-[340px] bg-muted/30 rounded-lg overflow-hidden cursor-zoom-in snap-start"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.title}
                        fill
                        sizes="340px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                      />
                    </div>

                    <div className="p-3.5 bg-card/90">
                      <h4 className="text-[13px] font-[400] text-foreground truncate">
                        {photo.title}
                      </h4>
                      <p className="text-[11px] text-muted-foreground font-[300] mt-0.5 truncate">
                        {photo.location} · {photo.year}
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
      <div className="mt-16 md:mt-24 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-[14px] text-muted-foreground font-[300]">
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
