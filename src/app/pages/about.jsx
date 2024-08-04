"use client"
import { useEffect, useRef, useState } from 'react';
import { gsap, Circ } from 'gsap';


const About = () => {
  const tamilnaduRef = useRef(null);
  const thankYouRef = useRef(null);

  const scrambleText = (text) => {
    const chars = "கஙசஞடணதநலஜனறளரமஅஆஇஈஉஊஔஓஒஐஏஎக்ங்ச்ட்ண்த்ந்ப்ம்ய்ர்ல்வ்ள்ர்வழஷழ்ன்";
    return text
      .split('')
      .map(char => chars[Math.floor(Math.random() * chars.length)])
      .join('');
  };

  useEffect(() => {
    const applyScrambleEffect = (element, originalText, hoverText) => {
      let tween;

      const scramble = (targetText) => {
        let progress = 0;
        const duration = 0.2; // Adjust duration as needed
      
        return gsap.to({}, {
          duration: duration,
          ease: Circ.easeOut, // Easing function
          onUpdate: function () {
            progress = this.progress();
            if (progress < 1) {
              element.textContent = scrambleText(originalText);
            } else {
              element.textContent = targetText;
            }
          }
        });
      };
      

      const handleMouseEnter = () => {
        if (tween) tween.kill();
        tween = scramble(hoverText);
      };

      const handleMouseLeave = () => {
        if (tween) tween.kill();
        tween = scramble(originalText);
      };

      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
        if (tween) tween.kill();
      };
    };

    const cleanupTamilnadu = applyScrambleEffect(tamilnaduRef.current, "Tamilnadu", "தமிழ்நாடு");
    const cleanupThankYou = applyScrambleEffect(thankYouRef.current, "Thank you", "நன்றி");

    return () => {
      cleanupTamilnadu();
      cleanupThankYou();
    };
  }, []);

  return (
    <div>
      <h2 className="mb-8 text-3xl pt-16 text-center md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
        About
      </h2>
      <div>
        <p className="text-black text-justify pb-10 leading-extra-loose text-lg screen-xs:mx-2 screen-xs:leading-loose">
          Greetings! I&apos;m Santhosh Sivan from 
          <span 
            ref={tamilnaduRef} 
            className="inline-block max-w-36 min-w-36 hover:overflow-hidden hover:-mb-3 hover:pb-1 text-center text-orange-500 font-semibold mx-2 hover:text-2xl"
          >
            Tamilnadu
          </span>, India,
          currently serving as a Junior Web Developer at a startup. After
          completing my degree in computer science, I tackled small projects
          and soon found myself drawn into the world of web development
          through frameworks like Flask and Django along with HTML, CSS, and
          JavaScript. I built my first webpage using plain HTML and Bootstrap,
          a modest achievement that set the foundation for my journey. In my
          current role, I primarily leverage technologies such as React,
          Next.js, Tailwind CSS, Vue.js, Payload CMS, TypeScript, and GraphQL.
          Over the past year, I have contributed to several projects, each
          presenting unique challenges and learning opportunities. My current
          focus is predominantly on front-end web development. I relish the
          process of transforming concepts into captivating and interactive
          digital spaces. Feel free to connect.
          <span 
            ref={thankYouRef} 
            className="inline-block max-w-24 min-w-24 hover:overflow-hidden hover:-mb-2 text-left text-orange-500 font-semibold mx-2 hover:text-2xl"
          >
            Thank you
          </span>.
        </p>
      </div>
    </div>
  );
}
 
export default About;