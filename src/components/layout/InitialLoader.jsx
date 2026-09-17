"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const InitialLoader = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if the loader has already been shown in this session
    const hasLoadedBefore = sessionStorage.getItem("hasLoadedPortfolio")

    if (!hasLoadedBefore) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        sessionStorage.setItem("hasLoadedPortfolio", "true")
      }, 2500)
      return () => clearTimeout(timer)
    }
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-background"
        >
          <div className="flex flex-col items-center justify-center h-full relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
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
                  transition={{ duration: 1.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
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
