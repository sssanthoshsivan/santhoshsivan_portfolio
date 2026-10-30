"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function DynamicBackground() {
  const [mounted, setMounted] = useState(false);
  const [isInside, setIsInside] = useState(false);

  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Smooth physical spring physics for cursor spotlight (damping prevents abrupt snapping)
  const springX = useSpring(mouseX, { stiffness: 180, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 180, damping: 28 });

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e) => {
      setIsInside(true);
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseLeave = () => {
      setIsInside(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* 1. Underlying dynamic canvas (z-0) */}
      <div 
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden" 
        aria-hidden="true"
      >
        {/* Precision Engineering Dot Matrix with Smooth Radial Vignette Mask */}
        <div 
          className="absolute inset-0 opacity-[0.55]"
          style={{
            backgroundImage: "radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 80%)",
            WebkitMaskImage: "radial-gradient(ellipse 75% 65% at 50% 35%, black 20%, transparent 80%)",
          }}
        />

        {/* Interactive Dynamic Cursor Spotlight Glow (GPU transform accelerated) */}
        <motion.div
          className="absolute rounded-full pointer-events-none transition-opacity duration-500"
          style={{
            x: springX,
            y: springY,
            left: 0,
            top: 0,
            translateX: "-50%",
            translateY: "-50%",
            width: 650,
            height: 650,
            opacity: isInside ? 1 : 0,
            background: "radial-gradient(circle, rgba(0, 0, 0, 0.038) 0%, rgba(0, 0, 0, 0.012) 40%, transparent 70%)",
          }}
        />

        {/* Slow Ambient Floating Glow Spheres for Dynamic Living Feel */}
        <motion.div
          animate={{
            x: [0, 45, -35, 0],
            y: [0, -35, 25, 0],
            scale: [1, 1.08, 0.94, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[12%] right-[8%] w-[520px] h-[520px] rounded-full bg-gradient-to-br from-emerald-500/[0.025] to-sky-500/[0.015] blur-3xl"
        />

        <motion.div
          animate={{
            x: [0, -50, 35, 0],
            y: [0, 40, -30, 0],
            scale: [0.94, 1.06, 0.98, 0.94],
          }}
          transition={{
            duration: 26,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
          className="absolute bottom-[22%] left-[6%] w-[580px] h-[580px] rounded-full bg-gradient-to-tr from-amber-500/[0.02] to-indigo-500/[0.015] blur-3xl"
        />

        {/* Minimal Engineering Edge Grid Accents (Four corner crosshairs at margins) */}
        <div className="absolute top-6 left-8 font-mono text-[9px] text-foreground/20 select-none tracking-widest hidden lg:block">
          + [001 // CANVAS]
        </div>
        <div className="absolute top-6 right-8 font-mono text-[9px] text-foreground/20 select-none tracking-widest hidden lg:block">
          + [SYS // ACTIVE]
        </div>
      </div>

      {/* 2. Tactile Archival Paper Grain Overlay (z-30, pointer-events-none) */}
      <div 
        className="pointer-events-none fixed inset-0 z-30 opacity-[0.032] mix-blend-multiply"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </>
  );
}
