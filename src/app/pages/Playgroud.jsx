"use client"
import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'tailwindcss/tailwind.css';

export default function Playground() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
      
        // Set z-index for panels
        gsap.set('.panel', { zIndex: (i, target, targets) => targets.length - i });
      
        const images = gsap.utils.toArray('.panel:not(.purple)');
      
        images.forEach((image, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: 'section.black',
              start: () => 'top -' + window.innerHeight * i, // Adjusted start point
              end: () => '+=' + window.innerHeight / 2, // Adjusted end point
              scrub: true,
              toggleActions: 'play none reverse none',
              invalidateOnRefresh: true,
              markers: true 
            },
          });
      
          tl.to(image, { height: 0 });
        });
      
        gsap.set('.panel-text', { zIndex: (i, target, targets) => targets.length - i });
      
        const texts = gsap.utils.toArray('.panel-text');
      
        texts.forEach((text, i) => {
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: 'section.black',
              start: () => 'top -' + window.innerHeight * (i + 0.5), // Adjusted start point
              end: () => '+=' + window.innerHeight / 2, // Adjusted end point
              scrub: true,
              toggleActions: 'play none reverse none',
              invalidateOnRefresh: true,
            },
          });
      
          tl.to(text, { duration: 0.33, opacity: 1, y: '50%' }).to(
            text,
            { duration: 0.33, opacity: 0, y: '0%' },
            0.66
          );
        });
      
        // Initial setup for scroll triggers
        ScrollTrigger.create({
          trigger: 'section.black',
          scrub: true,
          pin: true,
          start: 'top top',
          end: () => '+=' + (images.length * window.innerHeight),
          invalidateOnRefresh: true,
        });
      }, []);
      
      

  return (
    <div className="scroller">
      <section className="orange flex items-center justify-center h-screen bg-orange-800">
        <div className="text text-white">This is some text inside of a div block.</div>
      </section>

      <section className="black flex items-center justify-around h-screen bg-black">
        <div className="text-wrap relative overflow-hidden w-[450px] h-[80vh]">
          <div className="panel-text blue-text absolute inset-0 z-10 text-blue-500">Blue</div>
          <div className="panel-text red-text absolute inset-0 z-10 text-red-500">Red</div>
          <div className="panel-text orange-text absolute inset-0 z-10 text-orange-500">Orange</div>
          <div className="panel-text purple-text absolute inset-0 z-10 text-purple-500">Purple</div>
        </div>
        <div className="p-wrap relative overflow-hidden w-[450px] h-[80vh]">
          <div className="panel blue absolute inset-0 z-auto bg-blue-900"></div>
          <div className="panel red absolute inset-0 z-auto bg-red-500"></div>
          <div className="panel orange absolute inset-0 z-auto bg-orange-600"></div>
          <div className="panel purple absolute inset-0 z-auto bg-purple-800"></div>
        </div>
      </section>

      <section className="blue h-screen bg-blue-900"></section>
    </div>
  );
}

