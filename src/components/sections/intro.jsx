"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

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
        setTime("12:00 PM IST");
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
    setRotateX(-(y / rect.height) * 8);
    setRotateY((x / rect.width) * 8);
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
        staggerChildren: 0.1,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1], // expo out
      },
    },
  };

  return (
    <section 
      className="min-h-[calc(100vh-76px)] md:min-h-[calc(100vh-84px)] min-h-[calc(100svh-76px)] md:min-h-[calc(100svh-84px)] flex flex-col justify-center max-w-[1280px] mx-auto w-full px-6 md:px-12 lg:px-16 py-8 md:py-12" 
      aria-label="Introduction"
    >
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-14"
      >
        {/* Main Content (Left) */}
        <div className="max-w-[720px] flex-1">
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="mb-4">
            <span className="text-[11px] font-mono font-[500] uppercase tracking-[0.12em] text-muted-foreground">
              FULL STACK & AI SOFTWARE ENGINEER
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-[clamp(44px,6.2vw,80px)] font-[400] tracking-[-0.045em] leading-[0.96] text-foreground mb-5"
          >
            Santhosh Sivan
          </motion.h1>

          {/* Paragraphs */}
          <motion.div 
            variants={itemVariants}
            className="text-[15px] md:text-[17px] text-foreground/90 leading-[1.7] font-[400] max-w-[620px] flex flex-col gap-2.5 mb-8"
          >
            <p>
              I architect and build scalable web platforms, multi-tenant SaaS systems, mission-critical analytics infrastructure, and AI operational tools.
            </p>
            <p className="text-muted-foreground text-[14px] md:text-[15px] leading-relaxed">
              Specializing in high-throughput analytics engines, database query optimization, complex workflow orchestration, and resilient multi-tenant architecture.
            </p>
          </motion.div>

          {/* CTAs & Quick Recruiter Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-5 sm:gap-7">
            <Link
              href="#projects"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-[13px] font-[500] hover:scale-105 active:scale-95 transition-all shadow-xs"
            >
              <span>Explore Featured Work</span>
              <span className="text-[11px]">↓</span>
            </Link>

            <Link
              href="#experience"
              className="group inline-flex items-center gap-1.5 text-[13px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
            >
              <span>Experience & Impact</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="#contact"
              className="group inline-flex items-center gap-1.5 text-[13px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
            >
              <span>Get in touch</span>
              <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
            </Link>
          </motion.div>
        </div>

        {/* Right Column: Portrait & Balanced Status */}
        <motion.div 
          variants={itemVariants}
          className="w-full sm:w-auto lg:w-[260px] flex flex-col gap-2.5 flex-shrink-0 items-start self-start"
        >
          {/* Interactive Portrait */}
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
              className="relative w-full h-full rounded-sm overflow-hidden border border-border shadow-xs group"
            >
              <Image
                src="/Profile.webp"
                alt="Santhosh Sivan"
                fill
                sizes="(max-width: 640px) 240px, (max-width: 1024px) 220px, 260px"
                className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-700 ease-out"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-2.5 left-2.5 right-2.5 px-2 py-1 bg-background/85 backdrop-blur-xs rounded-xs text-[9px] font-mono uppercase tracking-wider text-foreground flex items-center justify-between border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Santhosh Sivan</span>
                <span>Theni, IN</span>
              </div>
            </div>
          </div>

          {/* Balanced Presence Bar under photo */}
          <div className="w-[240px] sm:w-[220px] lg:w-[260px] flex items-center justify-between text-[11px] font-mono text-muted-foreground px-0.5 pt-1">
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              Full Stack @ RunLoyal
            </span>
            {time && <span className="opacity-70">{time}</span>}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Intro;
