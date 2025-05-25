"use client";
import React, { useState } from "react";
import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

function Favourites() {
  const [hoveredKey, setHoveredKey] = useState(null);

  const images = {
    96: "/96.png",
    superstar: "/coolie.jpg",
    music: "/music.jpg",
    temples: "/temples.jpg",
    myHome: "/myHome.jpg",
    lalaLand: "/lalaLand.jpg",
    simpleLife: "/simpleLife.jpg",
    wildLife: "/img3.jpg",
    travel: "/travel.jpg",
    conversation: "/goodConversation.jpg",
  };

  const items = [

    { key: "96", label: "`96" },
    { key: "music", label: "MUSIC (CDS, MP3S & A GOOD PLAYLIST)" },
    { key: "myHome", label: "MY HOME" },
    { key: "superstar", label: "SUPER STAR" },
    { key: "temples", label: "TEMPLES" },
    { key: "simpleLife", label: "SIMPLE LIFE" },
    { key: "travel", label: "TRAVEL" },
    { key: "conversation", label: "A GOOD CONVERSATION" },
  ];

  return (
    <div className="relative text-black bg-white min-h-screen overflow-x-hidden">
      {/* Fixed right-aligned background image on hover */}
      <div className="fixed top-0 bottom-0 right-0 z-0 w-1/2 pointer-events-none flex items-center py-20">
        {hoveredKey && (
            <div className="relative w-full h-full">
          <Image
            src={images[hoveredKey]}
            alt="background"
            fill
            className="object-contain rounded-lg transition-opacity duration-500 ease-in-out"
          />
            </div>

        )}
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        <Header />
        <div className="text-[8rem] font-black px-10 pt-24 leading-none">
          I'M A LOVER OF :
        </div>

        <ul className="px-10 mt-10">
          {items.map((item) => (
            <li
              key={item.key}
              onMouseEnter={() => setHoveredKey(item.key)}
              onMouseLeave={() => setHoveredKey(null)}
              className={`text-[5rem] font-bold my-0 font-josefin cursor-default transition-opacity duration-300 ${
                hoveredKey && hoveredKey !== item.key ? "opacity-100" : "opacity-50"
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
