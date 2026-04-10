"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { triggerThemeTransition } from "./ThemeTransition"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : ""
  }, [isMenuOpen])

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-bold uppercase tracking-widest font-mono text-foreground"
            onClick={() => setIsMenuOpen(false)}
          >
            SANTHOSH SIVAN
          </Link>

          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={triggerThemeTransition}
              className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors hidden md:block"
              aria-label="Toggle theme"
            >
               <span className="block dark:hidden">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
               </span>
               <span className="hidden dark:block">
                 <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
               </span>
            </button>

            {/* Menu Button */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className="text-xs font-bold uppercase tracking-widest font-mono text-foreground border border-border px-3 py-1 hover:bg-foreground hover:text-background transition-colors"
              aria-label="Open menu"
            >
              MENU //
            </button>
          </div>
        </div>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Menu Header */}
          <div className="px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between border-b border-border">
            <span className="text-sm font-bold uppercase tracking-widest font-mono text-foreground">
              NAVIGATION
            </span>
            <div className="flex items-center gap-4">
              {/* Mobile Theme Toggle */}
              <button
                onClick={triggerThemeTransition}
                className="p-2 border border-border hover:bg-foreground hover:text-background transition-colors"
                aria-label="Toggle theme"
              >
                 <span className="block dark:hidden">
                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
                 </span>
                 <span className="hidden dark:block">
                   <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
                 </span>
              </button>

              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-xs font-bold uppercase tracking-widest font-mono text-foreground border border-border px-3 py-1 hover:bg-foreground hover:text-background transition-colors"
                aria-label="Close menu"
              >
                CLOSE [X]
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col md:flex-row">
            {/* Left Info Panel */}
            <div className="hidden md:flex flex-col justify-between p-16 border-r border-border w-1/3 font-mono text-xs text-muted-foreground uppercase tracking-[0.2em]">
              <div>
                 [ CONTACT_INFO ]<br /><br />
                 SANTHOSHKAN205@GMAIL.COM<br />
                 KERALA, INDIA
              </div>
              <div>
                 சந்தோஷ் சிவன்<br />
                 © {new Date().getFullYear()}
              </div>
            </div>

            {/* Main Nav Links */}
            <nav className="flex-1 flex flex-col justify-center px-6 md:px-16 lg:px-24 py-12 gap-8 md:gap-12 relative overflow-hidden">
               {/* Background grid markings for aesthetics */}
               <div className="absolute top-1/4 left-0 w-full h-[1px] bg-border/50"></div>
               <div className="absolute top-2/4 left-0 w-full h-[1px] bg-border/50"></div>
               <div className="absolute top-3/4 left-0 w-full h-[1px] bg-border/50"></div>

               {[
                 { label: "INDEX", href: "/" },
                 { label: "PROJECTS", href: "/projects" },
                 { label: "EXPERIENCE", href: "/#experience" },
                 { label: "FAVOURITES", href: "/favourites" },
                 { label: "RESUME", href: "/resume.pdf" }
               ].map((item, idx) => (
                 <Link
                   key={idx}
                   href={item.href}
                   onClick={() => setIsMenuOpen(false)}
                   className="group flex items-baseline gap-4 text-4xl md:text-7xl font-bold text-foreground tracking-tighter hover:text-muted-foreground transition-colors relative z-10"
                 >
                   <span className="text-sm font-mono text-muted-foreground group-hover:text-primary">0{idx + 1}</span>
                   {item.label}
                 </Link>
               ))}
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
