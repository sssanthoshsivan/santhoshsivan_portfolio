"use client";
import React, { useState, useEffect } from "react";
import NextImage from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

function Favourites() {
  const [hoveredKey, setHoveredKey] = useState(null);
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [loadedCount, setLoadedCount] = useState(0);

  const images = {
    96: "/96.png",
    superstar: "/coolie.jpg",
    music: "/music.jpg",
    temples: "/temples.jpg",
    myHome: "/myHome.jpg",
    simpleLife: "/simpleLife.jpg",
    wildLife: "/img3.jpg",
    travel: "/travel.jpg",
    conversation: "/goodConversation.jpg",
  };

  const items = [
    { key: "96", label: "`96" },
    { key: "music", label: `MUSIC - "Raja Sir"` },
    { key: "myHome", label: "MY HOME" },
    { key: "superstar", label: "SUPER STAR" },
    { key: "temples", label: "TEMPLES" },
    { key: "simpleLife", label: "SIMPLE LIFE" },
    { key: "travel", label: "TRAVEL" },
    { key: "conversation", label: "A GOOD CONVERSATION" },
  ];

  useEffect(() => {
    const imageList = Object.values(images);
    const total = imageList.length;

    imageList.forEach((src) => {
      const img = new Image();
      img.src = src;

      const incrementOnce = (() => {
        let called = false;
        return () => {
          if (!called) {
            called = true;
            setLoadedCount((prev) => {
              const newCount = prev + 1;
              if (newCount === total) {
                setTimeout(() => setAllImagesLoaded(true), 300);
              }
              return newCount;
            });
          }
        };
      })();

      img.onload = incrementOnce;
      img.onerror = incrementOnce;
    });
  }, []);

  return (
    <div className="relative text-black bg-white min-h-screen overflow-x-hidden">
      {/* Loading Screen */}
      {!allImagesLoaded && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
          <div className="text-base sm:text-lg text-gray-600 font-mono tracking-tight animate-pulse">
            {Math.min(
              100,
              Math.floor((loadedCount / Object.keys(images).length) * 100)
            )}
            %
          </div>
        </div>
      )}

      {/* Hover Image on Desktop */}
      <div className="hidden sm:flex fixed top-0 bottom-0 right-0 z-0 w-1/2 pointer-events-none items-center py-20">
        {hoveredKey && (
          <div className="relative w-full h-full">
            <NextImage
              src={images[hoveredKey]}
              alt="background"
              fill
              className="object-contain rounded-lg transition-opacity duration-500 ease-in-out"
            />
          </div>
        )}
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 transition-opacity duration-700 ${
          allImagesLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Header />

        {/* Title */}
        <div className="text-4xl sm:text-6xl md:text-8xl font-black px-6 sm:px-10 pt-24 leading-tight sm:leading-none">
          I'M A LOVER OF :
        </div>

        {/* Mobile layout: stacked images with overlayed text */}
        <div className="block sm:hidden mt-10 px-4 space-y-6">
          {items.map((item) => (
            <div
              key={item.key}
              className="relative w-full aspect-video rounded-lg overflow-hidden"
            >
              <NextImage
                src={images[item.key]}
                alt={item.label}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center px-4">
                <p className="text-white text-center text-xl font-semibold">
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop layout: interactive hover list */}
        <ul className="hidden sm:block px-10 mt-10">
          {items.map((item) => (
            <li
              key={item.key}
              onMouseEnter={() => setHoveredKey(item.key)}
              onMouseLeave={() => setHoveredKey(null)}
              className={`text-[5rem] font-bold my-0 font-josefin cursor-default transition-opacity duration-300 ${
                hoveredKey && hoveredKey !== item.key
                  ? "opacity-100"
                  : "opacity-50"
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>

        <Footer />
      </div>
    </div>
  );
}

export default Favourites;
