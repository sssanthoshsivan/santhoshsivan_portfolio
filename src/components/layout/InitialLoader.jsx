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
          {/* Simple grid background for the loader */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
               style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          </div>
          
          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="flex flex-col items-center gap-2">
              <span className="text-xl font-bold tracking-[0.3em] font-mono animate-pulse">
                [ INITIALIZING ]
              </span>
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-widest font-bold">
                வணக்கம் // WELCOME_SYSTEM
              </span>
            </div>
            
            <div className="w-48 h-px bg-border relative overflow-hidden">
              <div className="absolute inset-0 bg-foreground animate-loading-bar" 
                   style={{ width: '30%', left: '-30%' }}></div>
            </div>
            
            <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest opacity-50 space-y-1 text-center">
              <div>CONNECTING_TO_CORE... OK</div>
              <div>FETCHING_MOMENTS... OK</div>
            </div>
          </div>

          <style jsx>{`
            .animate-loading-bar {
              animation: loading 2s ease-in-out infinite;
            }
            @keyframes loading {
              0% { left: -30%; }
              50% { left: 100%; }
              100% { left: 100%; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default InitialLoader
