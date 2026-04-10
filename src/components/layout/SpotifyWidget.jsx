"use client"

import React, { useState, useEffect } from "react"
import { Music } from "lucide-react"

export default function SpotifyWidget() {
  const [isPlaying, setIsPlaying] = useState(true)
  
  // Mock heartbeat for the "equalizer" animation
  const [bars, setBars] = useState([10, 15, 8, 20])
  
  useEffect(() => {
    const interval = setInterval(() => {
      setBars(bars.map(() => Math.floor(Math.random() * 15) + 5))
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed bottom-8 left-8 z-[50] hidden md:block">
      <div className="brutalist-card !p-3 flex items-center gap-4 bg-background/80 backdrop-blur-md border border-border group hover:border-foreground/20 transition-all duration-500 rounded-lg">
        {/* Album Art / Icon */}
        <div className="relative w-10 h-10 bg-muted flex items-center justify-center overflow-hidden rounded">
           <Music size={18} className="text-muted-foreground group-hover:text-primary transition-colors" />
           {/* Equalizer animation */}
           <div className="absolute bottom-1 right-1 flex items-end gap-[1px] h-3">
              {bars.map((height, i) => (
                <div 
                  key={i} 
                  className="w-[2px] bg-primary animate-pulse" 
                  style={{ height: `${height}px`, transition: 'height 0.15s ease' }}
                />
              ))}
           </div>
        </div>

        {/* Track Info */}
        <div className="flex flex-col pr-4">
          <div className="text-[10px] font-bold font-mono text-muted-foreground uppercase tracking-widest leading-none mb-1 text-primary">
            NOW_PLAYING
          </div>
          <div className="text-xs font-bold text-foreground tracking-tight max-w-[150px] truncate">
            Moonlight in Vermont
          </div>
          <div className="text-[10px] font-mono text-muted-foreground uppercase opacity-80">
            Stan Getz, Bob Brookmeyer
          </div>
        </div>

        {/* Plus marks for the widget */}
        <div className="brutalist-plus -top-1 -left-1 text-[10px] opacity-40">+</div>
        <div className="brutalist-plus -top-1 -right-1 text-[10px] opacity-40">+</div>
      </div>
    </div>
  )
}
