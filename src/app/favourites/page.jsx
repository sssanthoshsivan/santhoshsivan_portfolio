"use client";
import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

function Favourites() {
  const [hoveredKey, setHoveredKey] = useState(null);
  
  const images = {
    96: "/96.webp",
    superstar: "/coolie.webp",
    music: "/music.webp",
    temples: "/temples.webp",
    myHome: "/myHome.webp",
    simpleLife: "/simpleLife.webp",
    travel: "/travel.webp",
    conversation: "/goodConversation.webp",
  };

  const items = [
    { key: "96", label: "96" },
    { key: "music", label: "Music" },
    { key: "myHome", label: "My Home" },
    { key: "superstar", label: "Superstar" },
    { key: "temples", label: "Temples" },
    { key: "simpleLife", label: "Simple Life" },
    { key: "travel", label: "Travel" },
    { key: "conversation", label: "A Good Conversation" },
  ];

  return (
    <main className="bg-hatch min-h-screen relative overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-background bg-dotted relative z-10 transition-colors">
        <Header />

        {/* Hover image (desktop) */}
        <div className="hidden sm:flex fixed right-[max(0px,calc((100vw-1440px)/2))] top-0 bottom-0 w-[45%] pointer-events-none items-center justify-center z-0 px-12">
            {hoveredKey ? (
              <div className="relative w-full aspect-[4/5] max-h-[70vh] border border-border/50 shadow-2xl skew-y-1 transition-transform duration-700">
                <NextImage
                  src={images[hoveredKey]}
                  alt=""
                  fill
                  className="object-cover transition-all duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            ) : (
                <div className="flex flex-col items-center justify-center opacity-10">
                    <span className="text-[120px] font-bold tracking-tighter text-foreground/20 rotate-90">FAVS_</span>
                </div>
            )}
        </div>

        {/* Content */}
        <section className="relative z-10 px-6 md:px-16 lg:px-24 pt-48 pb-32 max-w-5xl">
          <header className="mb-24">
            <h1 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-border"></span>
                Personal Archive // 02
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                CURATED_VALUES
            </h2>
            <p className="text-muted-foreground max-w-xl leading-relaxed font-mono text-sm uppercase tracking-wide">
                Outside of work, these are the things I’m drawn to — moments, places,
                and values that quietly shape how I think and create.
            </p>
          </header>

          {/* Mobile Grid */}
          <div className="block sm:hidden grid grid-cols-1 gap-8 mb-12">
            {items.map((item) => (
              <div
                key={item.key}
                className="group relative aspect-[4/5] overflow-hidden border border-border"
              >
                <NextImage
                  src={images[item.key]}
                  alt={item.label}
                  fill
                  className="object-cover transition-all duration-700"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                  <span className="text-white text-xl font-bold uppercase tracking-tight">
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop List */}
          <ul className="hidden sm:block space-y-2">
            {items.map((item, idx) => (
              <li
                key={item.key}
                onMouseEnter={() => setHoveredKey(item.key)}
                onMouseLeave={() => setHoveredKey(null)}
                className={`group flex items-baseline gap-6 cursor-none transition-all duration-300 ${
                  hoveredKey && hoveredKey !== item.key
                    ? "opacity-20 blur-[1px]"
                    : "opacity-100"
                }`}
              >
                <span className="text-xs font-mono text-muted-foreground transition-colors group-hover:text-primary">
                    0{idx + 1}
                </span>
                <span className="text-5xl md:text-8xl font-bold tracking-tighter text-foreground uppercase group-hover:translate-x-4 transition-transform duration-500">
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
