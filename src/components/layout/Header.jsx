"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  return (
    <>
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50 bg-background">
        <div className="px-6 md:px-12 lg:px-16 h-[88px] flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            SANthosh Sivan
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-[12px] uppercase tracking-[0.06em] text-foreground font-normal">
            <Link href="/projects" className="text-link">Work</Link>
            <Link href="/#experience" className="text-link">Experience</Link>
            <Link href="/favourites" className="text-link">Favorites</Link>
            <Link href="/#about" className="text-link">About</Link>
            <Link href="/#contact" className="text-link">Contact</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-[12px] font-normal uppercase tracking-[0.06em] text-foreground"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Minimal Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background flex flex-col md:hidden"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="px-6 h-[88px] flex items-center justify-between">
            <Link
              href="/"
              className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              SANthosh Sivan
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Mobile Nav Links */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-12 text-sm uppercase tracking-[0.06em]">
            <Link href="/projects" onClick={() => setIsMenuOpen(false)} className="text-link">Work</Link>
            <Link href="/#experience" onClick={() => setIsMenuOpen(false)} className="text-link">Experience</Link>
            <Link href="/favourites" onClick={() => setIsMenuOpen(false)} className="text-link">Favorites</Link>
            <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-link">About</Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-link">Contact</Link>
          </nav>
        </div>
      )}
    </>
  )
}

export default Header

