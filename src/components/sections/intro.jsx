"use client";

import { TfiInstagram } from "react-icons/tfi";
import { GrLinkedinOption } from "react-icons/gr";
import { AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import SplitType from "split-type";
import { useEffect } from "react";

const profile = "/Profile.webp";

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
    <section className="py-16 md:py-24 border-b border-border" aria-label="Introduction">
      <div className="w-full px-6 md:px-16 lg:px-24">
        <div className="brutalist-card min-h-[400px] flex flex-col lg:flex-row gap-16">
          {/* Plus signs */}
          <div className="brutalist-plus brutalist-plus-tl">+</div>
          <div className="brutalist-plus brutalist-plus-tr">+</div>
          <div className="brutalist-plus brutalist-plus-bl">+</div>
          <div className="brutalist-plus brutalist-plus-br">+</div>

          {/* Text */}
          <div className="flex flex-col justify-center max-w-3xl flex-1">
            <p className="text-xs uppercase tracking-widest font-mono text-muted-foreground mb-4">
              [ Software Engineer // Tamil Nadu ]
            </p>

            <h1 className="reveal-name text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
              Building software for <br />
              <span className="text-muted-foreground">real-world systems</span>
            </h1>

            <p className="mt-8 max-w-lg text-lg text-muted-foreground leading-relaxed font-mono">
              I work on production web applications building role-based
              interfaces, multi-step workflows, and software that scales 
              with real users and real data.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="px-2 py-1 bg-muted text-xs font-mono border border-border">Engineer</span>
              <span className="px-2 py-1 bg-muted text-xs font-mono border border-border">Artist</span>
              <span className="px-2 py-1 bg-muted text-xs font-mono border border-border">Athlete</span>
            </div>

            {/* Signature */}
            <p className="mt-6 text-sm text-muted-foreground/60 font-mono italic">
              — சந்தோஷ் சிவன்
            </p>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap items-center gap-8">
              <Link
                href="/resume.pdf"
                className="inline-flex items-center border border-foreground bg-foreground px-6 py-3 text-sm font-mono font-bold text-background transition-all hover:bg-background hover:text-foreground focus:outline-none"
              >
                VIEW_RESUME
              </Link>

              <nav className="flex items-center gap-6" aria-label="Social links">
                <Link
                  href="https://github.com/sssanthoshsivan"
                  target="_blank"
                  aria-label="GitHub"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <AiFillGithub size={28} />
                </Link>

                <Link
                  href="https://www.instagram.com/sssanthosh_sivan/"
                  target="_blank"
                  aria-label="Instagram"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <TfiInstagram size={24} />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/sssanthoshsivan/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <GrLinkedinOption size={28} />
                </Link>
              </nav>
            </div>
          </div>

          {/* Image */}
          <div className="lg:w-1/3 flex items-center justify-center">
            <div className="glitch-container relative w-full aspect-square transition-all duration-700 border border-border p-2">
              <div className="glitch-image w-full h-full relative">
                <Image
                  src={profile}
                  fill
                  alt="Portrait of Santhosh Sivan"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
