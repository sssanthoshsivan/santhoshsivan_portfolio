"use client"

import React, { useState, useEffect } from "react"
import { Music, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

export default function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Natural rhythmic equalizer
  const [bars, setBars] = useState([8, 14, 18, 10])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBars([
        Math.floor(Math.sin(Date.now() / 200) * 8) + 12,
        Math.floor(Math.cos(Date.now() / 180) * 10) + 14,
        Math.floor(Math.sin(Date.now() / 240) * 7) + 11,
        Math.floor(Math.cos(Date.now() / 160) * 9) + 13,
      ])
    }, 120)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] z-[50]">
      <motion.div 
        layout
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
        className={`flex items-center bg-background/95 backdrop-blur-md border border-border shadow-md rounded-full overflow-hidden ${
          isExpanded ? 'w-[290px] md:w-[330px] p-2' : 'w-11 h-11 p-0 cursor-pointer hover:border-foreground/40 hover:scale-105 active:scale-95'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
        title={!isExpanded ? "Now Playing · Click to expand" : undefined}
      >
        {/* Collapsed Button with Micro-Equalizer */}
        {!isExpanded && (
          <div className="w-full h-full flex items-center justify-center relative group">
            <div className="flex items-center justify-center gap-[2px] h-3">
              {bars.map((height, i) => (
                <div 
                  key={i} 
                  className="w-[1.5px] bg-foreground/80 group-hover:bg-foreground rounded-full transition-[height] duration-150 ease-out" 
                  style={{ height: `${Math.max(4, height * 0.7)}px` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 w-full"
          >
            {/* Collapse toggle */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              className="flex-shrink-0 w-7 h-7 rounded-full bg-muted/60 flex items-center justify-center hover:bg-foreground hover:text-background active:scale-90 transition-all"
              aria-label="Collapse music player"
            >
              <X size={12} className="currentColor" />
            </button>
            
            <div className="flex items-center gap-2.5 flex-1 min-w-0">
              <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden flex-shrink-0 bg-muted/50 rounded-sm">
                 <div className="flex items-center justify-center gap-[1.5px] h-4">
                    {bars.map((height, i) => (
                      <div 
                        key={i} 
                        className="w-[2px] bg-foreground rounded-t-sm transition-[height] duration-150 ease-out" 
                        style={{ height: `${height}px` }}
                      />
                    ))}
                 </div>
              </div>

              <div className="flex flex-col flex-1 min-w-0 pr-1">
                <div className="text-[9px] font-mono font-[500] text-muted-foreground uppercase tracking-[0.1em] leading-none mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon" />
                  <span>Now Playing</span>
                </div>
                <div className="text-[12px] font-[500] text-foreground tracking-tight truncate">
                  Poo Maalae
                </div>
                <div className="text-[10px] text-muted-foreground truncate">
                  Ilaiyaraaja · Pagal Nilavu (1985)
                </div>
              </div>
            </div>
            
            <Link 
              href="https://open.spotify.com/track/5kKkjTrP4msU6NOWgCNUhR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:scale-110 active:scale-95 transition-all mr-1"
              title="Open on Spotify"
            >
              <ArrowUpRight size={15} />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}
