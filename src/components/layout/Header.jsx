"use client"
 
import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { openCommandPalette } from "./CommandPalette"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const pathname = usePathname()

  // Track scroll position for dynamic header styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)

      // Active section spy on homepage
      if (window.location.pathname === "/") {
        const sections = ["contact", "about", "photography", "experience", "projects"]
        const scrollPosition = window.scrollY + 200

        for (const sectionId of sections) {
          const el = document.getElementById(sectionId)
          if (el && el.offsetTop <= scrollPosition) {
            setActiveSection(sectionId)
            return
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("")
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  return (
    <>
      {/* Dynamic Sticky Header */}
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-xs"
            : "bg-background/0 border-b border-transparent"
        }`}
      >
        <div className="px-6 md:px-12 lg:px-16 h-[76px] md:h-[84px] flex items-center justify-between max-w-[1280px] mx-auto">
          {/* Logo / Name & Status */}
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-[12px] font-normal uppercase tracking-[0.08em] text-foreground transition-opacity hover:opacity-70"
              onClick={() => setIsMenuOpen(false)}
            >
              Santhosh Sivan
            </Link>

            {/* Subtle Availability Badge */}
            <div className="hidden sm:inline-flex items-center gap-2 pl-3 border-l border-border/80 text-[11px] font-normal text-muted-foreground">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="tracking-wide text-[10px] uppercase">Available</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-8 text-[12px] uppercase tracking-[0.06em] text-foreground font-normal">
            <Link
              href="/professionalProjects"
              className={`animated-underline transition-colors ${
                pathname === "/professionalProjects" ? "text-foreground font-medium active" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Work
            </Link>
            <Link
              href="/#experience"
              className={`animated-underline transition-colors ${
                activeSection === "experience" ? "text-foreground font-medium active" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Experience
            </Link>
            <Link
              href="/#about"
              className={`animated-underline transition-colors ${
                activeSection === "about" ? "text-foreground font-medium active" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              About
            </Link>
            <Link
              href="/#contact"
              className={`animated-underline transition-colors ${
                activeSection === "contact" ? "text-foreground font-medium active" : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Contact
            </Link>
            <a
              href="/Santhosh%20Sivan%20Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="animated-underline text-foreground/80 hover:text-foreground transition-colors"
            >
              Resume
            </a>

            {/* Command Palette Trigger */}
            <button
              onClick={openCommandPalette}
              className="inline-flex items-center gap-1.5 px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted-foreground border border-border/70 rounded-md hover:border-foreground/30 hover:text-foreground active:scale-95 transition-all duration-150"
              title="Open Command Palette (Cmd+K)"
              aria-label="Open Command Palette"
            >
              <span className="text-[11px] leading-none">⌘</span>K
            </button>
          </nav>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={openCommandPalette}
              className="p-1.5 text-[11px] font-mono text-muted-foreground border border-border/70 rounded-md"
              aria-label="Search and Commands"
            >
              ⌘K
            </button>
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground p-1"
              aria-label="Open menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {/* Minimal Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background/98 backdrop-blur-lg flex flex-col md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="px-6 h-[76px] flex items-center justify-between border-b border-border/40">
            <Link
              href="/"
              className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground"
              onClick={() => setIsMenuOpen(false)}
            >
              Santhosh Sivan
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-[12px] font-normal uppercase tracking-[0.06em] text-foreground p-2"
              aria-label="Close menu"
            >
              Close
            </button>
          </div>

          {/* Mobile Nav Links with staggered feel */}
          <nav className="flex-1 flex flex-col justify-center items-center gap-10 text-sm uppercase tracking-[0.08em]">
            <Link href="/professionalProjects" onClick={() => setIsMenuOpen(false)} className="text-foreground text-lg active:scale-95 transition-transform">Work</Link>
            <Link href="/#experience" onClick={() => setIsMenuOpen(false)} className="text-foreground text-lg active:scale-95 transition-transform">Experience</Link>
            <Link href="/#about" onClick={() => setIsMenuOpen(false)} className="text-foreground text-lg active:scale-95 transition-transform">About</Link>
            <Link href="/#contact" onClick={() => setIsMenuOpen(false)} className="text-foreground text-lg active:scale-95 transition-transform">Contact</Link>
            <a href="/Santhosh%20Sivan%20Resume.pdf" target="_blank" rel="noreferrer" onClick={() => setIsMenuOpen(false)} className="text-foreground text-lg active:scale-95 transition-transform">Resume</a>
          </nav>

          <div className="p-6 border-t border-border/40 text-center">
            <span className="text-[11px] uppercase tracking-widest text-muted-foreground">Theni, IN · Available for work</span>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
