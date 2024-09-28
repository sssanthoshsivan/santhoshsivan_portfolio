"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

function Favourites() {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const images = {
    cinema: "/movies.jpeg",
    superstar: "/superstar.jpg",
    music: "/music.jpeg",
    temples: "/temples.jpg",
    lalaLand: "/lalaLand.jpg",
    formulaOne: "/f1.jpg",
    wildLife: "/img3.jpg",
    earthTones: "/earthTones.jpg",
    conversation: "/goodConversation.jpg",
  };

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (imageKey) => {
    setHoveredImage(images[imageKey]);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  return (
    <div onMouseMove={handleMouseMove} className="relative">
      <Header />
      <div className='font-extrabold text-9xl screen-xs:text-6xl px-10 my-5 w-full mt-20'>
        I'M A LOVER OF :
      </div>
      <ul className='font-extrabold text-7xl screen-xs:text-4xl px-10 w-full'>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('cinema')} 
            onMouseLeave={handleMouseLeave}>
          CINEMA
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('superstar')} 
            onMouseLeave={handleMouseLeave}>
          SUPER STAR
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('music')} 
            onMouseLeave={handleMouseLeave}>
          MUSIC (CDS, MP3S & A GOOD PLAYLIST)
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('temples')} 
            onMouseLeave={handleMouseLeave}>
          TEMPLES 
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('formulaOne')} 
            onMouseLeave={handleMouseLeave}>
          FORMULA 1
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('earthTones')} 
            onMouseLeave={handleMouseLeave}>
          RAIN
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('lalaLand')} 
            onMouseLeave={handleMouseLeave}>
          LA LA LAND
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('wildLife')} 
            onMouseLeave={handleMouseLeave}>
          WILD LIFE
        </li>
        <li className=' cursor-default' 
            onMouseEnter={() => handleMouseEnter('conversation')} 
            onMouseLeave={handleMouseLeave}>
          A GOOD CONVERSATION
        </li>
      </ul>
      
      {/* Hovered Image */}
      {hoveredImage && (
        <div
          className="absolute pointer-events-none"
          style={{
            top: mousePosition.y + 20,
            left: mousePosition.x + 20,
            transform: "translate(-50%, -50%)",
            zIndex: 1000,
          }}
        >
          <Image
            src={hoveredImage}
            alt="hovered"
            width={150}
            height={150}
            className="object-cover"
          />
        </div>
      )}
      
      <Footer />
    </div>
  );
}

export default Favourites;
