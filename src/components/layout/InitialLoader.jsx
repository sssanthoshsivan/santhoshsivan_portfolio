"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      // Check if the loader has already been shown in this session
      const hasLoadedBefore = sessionStorage.getItem("hasLoadedPortfolio")

      if (!hasLoadedBefore) {
        // Mark as loaded immediately so rapid reloads/clicks never re-trigger
        sessionStorage.setItem("hasLoadedPortfolio", "true")
        setIsVisible(true)

        const timer = setTimeout(() => {
          setIsVisible(false)
        }, 1400)

        const handleKeyDown = (e) => {
          if (e.key === "Escape") {
            clearTimeout(timer)
            setIsVisible(false)
          }
        }

        window.addEventListener("keydown", handleKeyDown)

        return () => {
          clearTimeout(timer)
          window.removeEventListener("keydown", handleKeyDown)
        }
      }
    } catch (e) {
      // Graceful fallback if storage is restricted
      setIsVisible(false)
    }
  }, [])

  // Lock body scroll only while loader is active
  useEffect(() => {
    if (isVisible) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [isVisible])

  // Allow replaying from Command Palette or developer testing
  useEffect(() => {
    const handleReplay = () => {
      try {
        sessionStorage.removeItem("hasLoadedPortfolio")
      } catch (e) {}
      setIsVisible(true)
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
      const timer = setTimeout(() => {
        setIsVisible(false)
      }, 1400)
      return () => clearTimeout(timer)
    }

    window.addEventListener("replay-initial-loader", handleReplay)
    return () => window.removeEventListener("replay-initial-loader", handleReplay)
  }, [])

  const handleExitComplete = () => {
    document.body.style.overflow = ""
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          key="initial-portfolio-loader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.65, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background select-none cursor-default"
          onClick={() => setIsVisible(false)}
          title="Click or press Esc to skip"
        >
          <div className="flex flex-col items-center justify-center h-full relative z-10 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="flex flex-col items-center gap-4"
            >
              <span className="text-[14px] font-[500] uppercase tracking-[0.08em] text-foreground">
                Santhosh Sivan
              </span>
              <span className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground flex items-center gap-3">
                <span>Software Engineer</span>
                <span className="w-1 h-1 bg-border rounded-full"></span>
                <span className="tracking-normal font-sans text-[13px] opacity-60 capitalize">வணக்கம்</span>
              </span>
              
              <div className="mt-8 w-[160px] h-[1px] bg-border relative overflow-hidden">
                <motion.div 
                  className="absolute inset-y-0 left-0 bg-foreground"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialLoader
