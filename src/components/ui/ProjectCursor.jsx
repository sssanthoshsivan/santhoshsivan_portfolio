"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function ProjectCursor({ active }) {
  const [isTouchDevice, setIsTouchDevice] = useState(true);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { stiffness: 220, damping: 26 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsTouchDevice('ontouchstart' in window || navigator.maxTouchPoints > 0);

    const moveCursor = (e) => {
      cursorX.set(e.clientX - 32);
      cursorY.set(e.clientY - 32);
    };

    if (!isTouchDevice) {
      window.addEventListener("mousemove", moveCursor);
    }

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center pointer-events-none z-50 text-[12px] font-normal tracking-wide mix-blend-difference"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
      }}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: active ? 1 : 0,
        scale: active ? 1 : 0.5,
      }}
      transition={{ duration: 0.2 }}
    >
      View
    </motion.div>
  );
}
