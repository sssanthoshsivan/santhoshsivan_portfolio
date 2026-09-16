"use client"

import React, { useState, useEffect } from "react"
import { Music, X, ArrowUpRight } from "lucide-react"
import Link from "next/link"

export default function SpotifyWidget() {
  const [isExpanded, setIsExpanded] = useState(false)
  
  // Mock heartbeat for the "equalizer" animation
  const [bars, setBars] = useState([10, 15, 8, 20])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBars([
        Math.floor(Math.random() * 12) + 4,
        Math.floor(Math.random() * 16) + 4,
        Math.floor(Math.random() * 10) + 4,
        Math.floor(Math.random() * 14) + 4,
      ])
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-6 left-[max(1.5rem,calc((100vw-1440px)/2+1.5rem))] z-[50]">
      <div 
        className={`flex items-center bg-background border border-border shadow-sm rounded-full transition-all duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${
          isExpanded ? 'w-[280px] md:w-[320px] p-2' : 'w-12 h-12 p-0 cursor-pointer hover:border-foreground/30'
        }`}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        {/* Collapsed Button */}
        {!isExpanded && (
          <div className="w-full h-full flex items-center justify-center">
            <Music size={18} className="text-foreground" />
          </div>
        )}

        {/* Expanded Content */}
        {isExpanded && (
          <div className="flex items-center gap-3 w-full animate-in fade-in zoom-in-95 duration-300">
            {/* Collapse toggle */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsExpanded(false); }}
              className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-foreground hover:text-background transition-colors"
            >
              <X size={14} className="currentColor" />
            </button>
            
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="relative w-8 h-8 flex items-center justify-center overflow-hidden flex-shrink-0 bg-muted/50 rounded-sm">
                 <Music size={14} className="text-muted-foreground absolute opacity-20" />
                 <div className="absolute inset-0 flex items-center justify-center gap-[1.5px]">
                    {bars.map((height, i) => (
                      <div 
                        key={i} 
                        className="w-[1.5px] bg-foreground rounded-t-sm" 
                        style={{ height: `${height}px`, transition: 'height 0.15s ease' }}
                      />
                    ))}
                 </div>
              </div>

              <div className="flex flex-col flex-1 min-w-0 pr-1">
                <div className="text-[9px] font-[500] text-muted-foreground uppercase tracking-[0.1em] leading-none mb-1">
                  Now Playing
                </div>
                <div className="text-[12px] font-[500] text-foreground tracking-tight truncate">
                  Poo Maalae
                </div>
                <div className="text-[10px] text-muted-foreground mt-0.5 truncate">
                  Ilaiyaraaja · Pagal Nilavu (1985)
                </div>
              </div>
            </div>
            
            <Link 
              href="https://open.spotify.com/track/5kKkjTrP4msU6NOWgCNUhR" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex-shrink-0 w-8 h-8 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors mr-1"
            >
              <ArrowUpRight size={16} />
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
