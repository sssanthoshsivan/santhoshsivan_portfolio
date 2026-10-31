"use client";
import React, { useState } from "react";
import NextImage from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Favourites() {
  const [hoveredKey, setHoveredKey] = useState(null);
  
  const images = {
    football: "/messi.jpg",
    music: "/music.webp",
    temples: "/temples.webp",
    myHome: "/myHome.webp",
    simpleLife: "/simpleLife.webp",
    travel: "/travel.webp",
    conversation: "/goodConversation.webp",
  };

  const items = [
    { key: "football", label: "Football" },
    { key: "music", label: "Music" },
    { key: "myHome", label: "My Home" },
    { key: "temples", label: "Temples" },
    { key: "simpleLife", label: "Simple Life" },
    { key: "travel", label: "Travel" },
    { key: "conversation", label: "A Good Conversation" },
  ];

  return (
    <main className="min-h-screen relative overflow-x-hidden font-sans bg-transparent">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-transparent relative z-10 transition-colors">
        <Header />

        {/* Hover image (desktop) - clean static display without spring/float motion */}
        <div className="hidden sm:flex fixed right-[max(0px,calc((100vw-1440px)/2))] top-0 bottom-0 w-[45%] pointer-events-none items-center justify-center z-0 px-12">
            {hoveredKey ? (
              <div className="relative w-full aspect-[4/5] max-h-[70vh] border border-border/50 shadow-2xl transition-transform duration-700">
                <NextImage
                  src={images[hoveredKey]}
                  alt=""
                  fill
                  className="object-cover transition-all duration-500"
                />
              </div>
            ) : (
                <div className="flex flex-col items-center justify-center opacity-10">
                    <span className="text-[120px] font-[400] tracking-[-0.04em] text-foreground/20 rotate-90">FAVS_</span>
                </div>
            )}
        </div>

        {/* Content */}
        <section className="relative z-10 px-6 md:px-12 lg:px-16 pt-[20vh] pb-32 max-w-[1280px] mx-auto w-full">
          <header className="mb-24 max-w-[800px]">
            <p className="text-[12px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-6">
                PERSONAL ARCHIVE
            </p>
            <h1 className="text-[clamp(42px,6vw,82px)] font-[400] tracking-[-0.045em] leading-[0.98] text-foreground mb-8">
                Curated Values
            </h1>
            <div className="flex flex-col gap-4 max-w-[640px]">
              <p className="text-[15px] md:text-[17px] text-muted-foreground leading-[1.7] font-[400]">
                Outside of work, these are the things I’m drawn to—moments, places, and values that quietly shape how I think and create.
              </p>
              <p className="text-[15px] md:text-[16px] text-foreground/90 leading-[1.75] font-[400] pl-4 border-l border-border/80">
                I'm happy when I try to learn music, how fast I solve a Rubik's cube, playing with a deck of cards, how far I run, or how my fishes are doing.
              </p>
            </div>
          </header>

          {/* Mobile Grid */}
          <div className="block sm:hidden grid grid-cols-1 gap-8 mb-12">
            {items.map((item) => (
              <div
                key={item.key}
                className="group relative aspect-[4/5] overflow-hidden border border-border rounded-sm"
              >
                <NextImage
                  src={images[item.key]}
                  alt={item.label}
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="text-white text-[18px] font-[500] tracking-[-0.02em]">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop List */}
          <ul className="hidden sm:block space-y-4">
            {items.map((item, idx) => (
              <li
                key={item.key}
                onMouseEnter={() => setHoveredKey(item.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`group flex items-baseline gap-8 cursor-none transition-all duration-300 ${
                  hoveredKey && hoveredKey !== item.key
                    ? "opacity-20 blur-[1px]"
                    : "opacity-100"
                }`}
              >
                <span className="text-[14px] font-[500] text-muted-foreground transition-colors group-hover:text-foreground">
                    {String(idx + 1).padStart(2, '0')}
                </span>
                <span className="text-5xl md:text-7xl font-[400] tracking-[-0.04em] text-foreground group-hover:translate-x-4 transition-transform duration-500">
                    {item.label}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default Favourites;
