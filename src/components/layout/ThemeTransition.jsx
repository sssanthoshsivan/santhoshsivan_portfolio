"use client"

import React, { useState, useEffect, useCallback } from "react"

/**
 * Global function to trigger the theme transition animation.
 * This can be called from anywhere in the app.
 */
export const triggerThemeTransition = () => {
  const event = new CustomEvent("theme-transition-trigger")
  window.dispatchEvent(event)
}

const ThemeTransition = () => {
  const [isAnimating, setIsAnimating] = useState(false)

  const handleTransition = useCallback(() => {
    if (isAnimating) return
    
    setIsAnimating(true)
    
    // Phase 1: Slide down (Covers screen)
    // After 400ms (curtain covers screen), we swap the theme
    setTimeout(() => {
      document.documentElement.classList.toggle("dark")
    }, 400)

    // Phase 2: Complete animation
    // Total duration matches the CSS animation
    setTimeout(() => {
      setIsAnimating(false)
    }, 1000)
  }, [isAnimating])

  useEffect(() => {
    window.addEventListener("theme-transition-trigger", handleTransition)
    return () => window.removeEventListener("theme-transition-trigger", handleTransition)
  }, [handleTransition])

  if (!isAnimating) return null

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none">
      <div className="absolute inset-0 bg-foreground animate-curtain-slide"></div>
      
      <style jsx>{`
        .animate-curtain-slide {
          animation: slide 1s cubic-bezier(0.76, 0, 0.24, 1) forwards;
        }

        @keyframes slide {
          0% {
            transform: translateY(-100%);
          }
          40%, 60% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(100%);
          }
        }
      `}</style>
    </div>
  )
}

export default ThemeTransition
