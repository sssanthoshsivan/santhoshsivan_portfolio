"use client";

import { useRef } from "react";
import { gsap, Circ } from "gsap";

const About = () => {
  const tamilnaduRef = useRef(null);
  const thankYouRef = useRef(null);

  const tamilTween = useRef(null);
  const thankYouTween = useRef(null);

  const scrambleText = (text) => {
    const chars =
      "கஙசஞடணதநலஜனறளரமஅஆஇஈஉஊஔஓஒஐஏஎக்ங்ச்ட்ண்த்ந்ப்ம்ய்ர்ல்வ்ள்ர்வழஷழ்ன்";
    return text
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const runScramble = (element, from, to) => {
    return gsap.to(
      {},
      {
        duration: 0.25,
        ease: Circ.easeOut,
        onUpdate() {
          if (this.progress() < 1) {
            element.textContent = scrambleText(from);
          } else {
            element.textContent = to;
          }
        },
      }
    );
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-10">
          About
        </h2>

        <p className="text-neutral-700 leading-relaxed md:leading-loose text-base md:text-lg">
          I’m Santhosh Sivan, a software engineer from
          <span
            ref={tamilnaduRef}
            onMouseEnter={() => {
              if (!tamilnaduRef.current) return;
              tamilTween.current?.kill();
              tamilTween.current = runScramble(
                tamilnaduRef.current,
                "Tamil Nadu",
                "தமிழ்நாடு"
              );
            }}
            onMouseLeave={() => {
              if (!tamilnaduRef.current) return;
              tamilTween.current?.kill();
              tamilTween.current = runScramble(
                tamilnaduRef.current,
                "தமிழ்நாடு",
                "Tamil Nadu"
              );
            }}
            className="inline-block mx-2 font-medium text-neutral-900 border-b border-neutral-300 cursor-pointer transition-colors hover:text-neutral-600"
          >
            Tamil Nadu
          </span>
          , India. I work on real-world software used daily by teams and users,
          where clarity, reliability, and long-term maintainability matter more
          than quick wins.
          <br />
          <br />
          Much of my work lives at the intersection of interface design and
          system thinking — building products that scale across users, roles,
          and workflows while remaining understandable and predictable. I often
          translate complex requirements into interfaces that feel deliberate
          and composed.
          <br />
          <br />
          While I think deeply about structure beneath the surface, my strongest
          focus remains on how software feels to use — intuitive, calm, and
          frictionless. If any of this resonates, feel free to connect —
          <span
            ref={thankYouRef}
            onMouseEnter={() => {
              if (!thankYouRef.current) return;
              thankYouTween.current?.kill();
              thankYouTween.current = runScramble(
                thankYouRef.current,
                "Thank you",
                "நன்றி"
              );
            }}
            onMouseLeave={() => {
              if (!thankYouRef.current) return;
              thankYouTween.current?.kill();
              thankYouTween.current = runScramble(
                thankYouRef.current,
                "நன்றி",
                "Thank you"
              );
            }}
            className="inline-block ml-2 font-medium text-neutral-900 border-b border-neutral-300 cursor-pointer transition-colors hover:text-neutral-600"
          >
            Thank you
          </span>
          .
        </p>
      </div>
    </section>
  );
};

export default About;
