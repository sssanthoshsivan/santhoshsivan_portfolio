"use client";
import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

function Favourites() {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [ready, setReady] = useState(false);

  const images = {
    96: "/96.png",
    superstar: "/coolie.jpg",
    music: "/music.jpg",
    temples: "/temples.jpg",
    myHome: "/myHome.jpg",
    simpleLife: "/simpleLife.jpg",
    travel: "/travel.jpg",
    conversation: "/goodConversation.jpg",
  };

  //  More to add

  // Early Mornings

  // Old Things That Still Work

  // Writing Things Down

  // Things Built Slowly

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

  useEffect(() => {
    const imageList = Object.values(images);
    let loaded = 0;

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loaded++;
        if (loaded === imageList.length) {
          setTimeout(() => setReady(true), 400);
        }
      };
    });
  }, []);

  if (!ready) {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
        <span className="text-sm tracking-wide text-neutral-500">
          Loading moments…
        </span>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      <Header />

      {/* Hover image (desktop) */}
      <div className="hidden sm:flex fixed top-0 bottom-0 right-0 w-1/2 pointer-events-none items-center py-24">
        {hoveredKey && (
          <div className="relative w-full h-full">
            <NextImage
              src={images[hoveredKey]}
              alt=""
              fill
              className="object-contain opacity-90 transition-opacity duration-500"
            />
          </div>
        )}
      </div>

      {/* Content */}
      <section className="relative z-10 px-6 md:px-16 lg:px-24 pt-32 pb-24 max-w-5xl">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-6">
          A few things that matter to me
        </h1>

        <p className="text-neutral-600 max-w-xl mb-16 leading-relaxed">
          Outside of work, these are the things I’m drawn to — moments, places,
          and values that quietly shape how I think and create.
        </p>

        {/* Mobile */}
        <div className="block sm:hidden space-y-6">
          {items.map((item) => (
            <div
              key={item.key}
              className="relative aspect-video overflow-hidden rounded-xl"
            >
              <NextImage
                src={images[item.key]}
                alt={item.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white text-lg font-medium">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop */}
        <ul className="hidden sm:block space-y-4">
          {items.map((item) => (
            <li
              key={item.key}
              onMouseEnter={() => setHoveredKey(item.key)}
              onMouseLeave={() => setHoveredKey(null)}
              className={`text-4xl md:text-5xl font-medium cursor-default transition-opacity duration-300 ${
                hoveredKey && hoveredKey !== item.key
                  ? "opacity-40"
                  : "opacity-100"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </section>

      <Footer />
    </main>
  );
}

export default Favourites;
