"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

const Intro = ({ triggerAnimation }) => {
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (triggerAnimation) {
      const timer = setTimeout(() => setOpacity(1), 100);
      return () => clearTimeout(timer);
    }
  }, [triggerAnimation]);

  return (
    <section 
      className="pt-[120px] md:pt-[140px] lg:pt-[160px] pb-8 lg:pb-16 transition-opacity duration-1000 ease-out max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16" 
      aria-label="Introduction"
      style={{ opacity }}
    >
      <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between gap-8 lg:gap-16">
        <div className="max-w-[800px] flex-1">
          <p className="text-[12px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-6">
            SOFTWARE ENGINEER
          </p>

          <h1 className="text-[clamp(42px,6vw,82px)] font-[400] tracking-[-0.045em] leading-[0.98] text-foreground mb-8">
            Santhosh Sivan
          </h1>

          <div className="text-[15px] md:text-[17px] text-foreground leading-[1.7] font-[400] max-w-[600px] flex flex-col gap-4 mb-10">
            <p>
              I build scalable web products, SaaS applications, data-driven systems, and AI-enabled tools.
            </p>
            <p>
              Currently working across frontend, backend, databases, reporting, and product engineering.
            </p>
          </div>

          <div className="flex items-center gap-8 mb-16">
            <Link
              href="#projects"
              className="text-link text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1"
            >
              View recent work →
            </Link>
            <Link
              href="#contact"
              className="text-link text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1"
            >
              Get in touch →
            </Link>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground">
            <span>3+ YEARS EXPERIENCE</span>
            <span>·</span>
            <span>FULL STACK</span>
          </div>
        </div>

        <div className="relative w-full max-w-[240px] mx-auto lg:mx-0 lg:max-w-none lg:w-[280px] aspect-[4/5] rounded-sm overflow-hidden flex-shrink-0">
          <Image
            src="/Profile.webp"
            alt="Santhosh Sivan"
            fill
            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
