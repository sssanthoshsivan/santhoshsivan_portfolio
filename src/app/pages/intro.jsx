"use client";

import { TfiInstagram } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";
import Profile from "../../../public/profile.webp";

const Intro = ({ triggerAnimation }) => {
  useEffect(() => {
    if (!triggerAnimation) return;

    const nameSplit = new SplitType(".reveal-name", {
      types: "chars",
      tagName: "span",
    });

    const subtitleSplit = new SplitType(".reveal-subtitle", {
      types: "chars",
      tagName: "span",
    });

    gsap.from(".reveal-name span", {
      opacity: 0,
      y: 18,
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.025,
    });

    gsap.from(".reveal-subtitle span", {
      opacity: 0,
      y: 14,
      duration: 0.7,
      ease: "power3.out",
      stagger: 0.02,
      delay: 0.25,
    });

    return () => {
      nameSplit.revert();
      subtitleSplit.revert();
    };
  }, [triggerAnimation]);

  return (
    <section className="py-16 md:py-24 flex items-center" aria-label="Introduction">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full px-6 md:px-16 lg:px-24">
        
        {/* Text */}
        <div className="flex flex-col justify-center max-w-3xl">
          <p className="text-sm tracking-wide text-neutral-500 mb-3">
            Software Engineer from Tamil Nadu
          </p>

          <h1 className="reveal-name text-4xl sm:text-6xl lg:text-7xl font-semibold text-neutral-900">
            Building software for real-world systems
          </h1>

          <p className="mt-6 max-w-lg text-lg text-neutral-600 leading-relaxed">
            I work on production web applications building role-based
            interfaces, multi-step workflows, and software that scales 
            with real users and real data.
          </p>

          <h2 className="reveal-subtitle mt-6 text-lg sm:text-xl text-neutral-600 tracking-wide">
            Engineer · Artist · Athlete
          </h2>

          {/* Signature */}
          <p className="mt-3 text-sm text-neutral-400 tracking-wide">
            சந்தோஷ் சிவன்
          </p>

          {/* CTA */}
          <div className="mt-10 flex items-center gap-6">
            <Link
              href="/resume.pdf"
              className="inline-flex items-center rounded-md border border-neutral-300 px-5 py-2 text-sm font-medium text-neutral-900 transition-colors hover:bg-neutral-100 focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
            >
              View Resume
            </Link>

            <nav className="flex items-center gap-10" aria-label="Social links">
              <Link
                href="https://github.com/sssanthoshsivan"
                target="_blank"
                aria-label="GitHub"
                className="text-neutral-500 hover:text-neutral-900 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-400 rounded"
              >
                <AiFillGithub size={34} />
              </Link>

              <Link
                href="https://www.instagram.com/sssanthosh_sivan/"
                target="_blank"
                aria-label="Instagram"
                className="text-neutral-500 hover:text-pink-700 mt-1 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-400 rounded"
              >
                <TfiInstagram size={31} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/sssanthoshsivan/"
                target="_blank"
                aria-label="LinkedIn"
                className="text-neutral-500 mb-1 hover:text-blue-700 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-400 rounded"
              >
                <GrLinkedinOption size={37} />
              </Link>
            </nav>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center lg:justify-end">
          <figure className="relative w-72 sm:w-80 lg:w-96">
            <Image
              src={Profile}
              alt="Portrait of Santhosh Sivan"
              className="object-cover rounded-2xl transition-transform duration-700 hover:scale-[1.04]"
              priority
            />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Intro;
