"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDownToLine } from "lucide-react";

const Intro = ({ triggerAnimation = true }) => {
  const [time, setTime] = useState("");
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const portraitRef = useRef(null);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("en-US", {
          timeZone: "Asia/Kolkata",
          hour: "numeric",
          minute: "numeric",
          hour12: true,
        }).format(now);
        setTime(formatted);
      } catch (e) {
        setTime("");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Subtle 3D portrait tilt on mouse move
  const handleMouseMove = (e) => {
    if (!portraitRef.current) return;
    const rect = portraitRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-(y / rect.height) * 6);
    setRotateY((x / rect.width) * 6);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section
      className="min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-84px)] flex flex-col justify-center max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16 py-10 md:py-14"
      aria-label="Introduction"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-14"
      >
        {/* Main Content (Left) */}
        <div className="max-w-[740px] flex-1">
          {/* Primary Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(26px,4.2vw,54px)] font-[400] tracking-[-0.035em] leading-[1.1] text-foreground mb-5 max-w-[660px]"
          >
            I build software that solves real-world problems.
          </motion.h1>

          {/* Identity & Positioning */}
          <motion.p
            variants={itemVariants}
            className="text-[15px] md:text-[16px] font-medium text-foreground mb-4"
          >
            Santhosh Sivan — Full Stack Engineer | Backend &amp; AI
          </motion.p>

          {/* Introduction Copy */}
          <motion.div
            variants={itemVariants}
            className="text-[16px] md:text-[17px] text-foreground leading-[1.65] font-[400] max-w-[62ch] flex flex-col gap-3 mb-6"
          >
            <p>
              I&apos;m a Full Stack Engineer with 3+ years of experience building production-grade software across frontend, backend, databases and AI.
            </p>
            <p className="text-muted-foreground text-[15px] md:text-[16px] leading-[1.65]">
              I&apos;ve worked on multi-tenant SaaS platforms, enterprise applications, analytics infrastructure and AI-powered internal tools. I enjoy understanding complex business workflows, solving engineering problems and turning them into reliable software.
            </p>
          </motion.div>

          {/* Technology Summary */}
          <motion.div variants={itemVariants} className="mb-8">
            <p className="text-[13px] font-mono text-muted-foreground">
              React · Next.js · TypeScript · Node.js · Java · SQL · Snowflake · MCP
            </p>
          </motion.div>

          {/* Primary Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-[14px] font-[500] hover:bg-foreground/90 active:scale-[0.98] transition-[transform,background-color] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2"
            >
              <span>View My Work</span>
              <span className="text-[12px]" aria-hidden="true">↓</span>
            </Link>

            <a
              href="/Santhosh%20Sivan%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-card text-[14px] font-[500] text-foreground hover:bg-foreground hover:text-background transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
            >
              <ArrowDownToLine size={15} aria-hidden="true" />
              <span>Download Resume</span>
            </a>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-[14px] font-[500] text-foreground hover:opacity-70 transition-opacity py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
            >
              <span>Contact Me</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Portrait & Presence */}
        <motion.div
          variants={itemVariants}
          className="w-full sm:w-auto lg:w-[260px] flex flex-col gap-2.5 flex-shrink-0 items-start"
        >
          <div
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1000 }}
            className="relative w-[240px] sm:w-[220px] lg:w-[260px] aspect-[4/5] rounded-sm flex-shrink-0 cursor-pointer"
          >
            <div
              style={{
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
                transition: "transform 0.25s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
              className="relative w-full h-full rounded-sm overflow-hidden bg-card group"
            >
              <Image
                src="/Profile.webp"
                alt="Portrait of Santhosh Sivan, Full Stack Engineer"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 220px, 260px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.02] transition-[filter,transform] duration-700 ease-out"
                priority
              />
            </div>
          </div>

          <div className="w-[240px] sm:w-[220px] lg:w-[260px] flex items-center justify-between text-[12px] font-mono text-muted-foreground px-0.5 pt-0.5">
            <span className="flex items-center gap-2 text-foreground font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
              Full Stack @ RunLoyal
            </span>
            {time && <span className="tabular-nums">{time}</span>}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
