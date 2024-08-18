"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

export default function Playground() {

  const textRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    textRefs.current.forEach((text) => {
      gsap.to(text, {
        backgroundSize: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: text,
          start: 'center 80%',
          end: 'center 20%',
          scrub: true,
        },
      });
    });
  }, []);

  return (
    <div className="flex flex-col justify-center items-start h-[200vh]">
      {["TEXT EFFECT", "GSAP", "CRAZYYY", "HOVER ON ME", "LIKE THIS?"].map((text, index) => (
        <h1
          key={index}
          className="relative w-full text-[10vw] leading-none text-gray-400 border-b border-gray-700 overflow-hidden group"
          ref={(el) => textRefs.current[index] = el}
          style={{
            backgroundImage: 'linear-gradient(to right, #b6b6b6, #b6b6b6)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            backgroundSize: '0%',
            transition: 'background-size 0.5s cubic-bezier(.1,.5,.5,1)',
          }}
        >
          {text}
          <span
            className="absolute inset-0 bg-blue-600 text-gray-900 flex justify-center items-center group-hover:clip-path group-hover:bg-red-600"
            style={{
              clipPath: 'polygon(0 50%, 100% 50%, 100% 50%, 0 50%)',
              transformOrigin: 'center',
              transition: 'clip-path 0.4s cubic-bezier(.1,.5,.5,1)',
            }}
          >
            {index === 3 ? (
              <a href="https://stacksorted.com/text-effects/minh-pham" target="_blank" rel="noopener noreferrer">
                SOURCE
              </a>
            ) : index === 4 ? (
              <a href="https://twitter.com/juxtopposed" target="_blank" rel="noopener noreferrer">
                LET'S CONNECT
              </a>
            ) : (
              "WOAH"
            )}
          </span>
        </h1>
      ))}
    </div>
  );
}
