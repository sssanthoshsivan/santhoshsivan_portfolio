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
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="px-6 md:px-16 lg:px-24 h-16 flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
            onClick={() => setIsMenuOpen(false)}
          >
            Santhosh Sivan
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
            aria-label="Open menu"
          >
            Menu
          </button>
        </div>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white"
          role="dialog"
          aria-modal="true"
        >
          <div className="px-6 md:px-16 lg:px-24 py-24 h-full flex flex-col justify-between">
            {/* Close */}
            <div className="flex justify-end">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium tracking-wide text-neutral-600 hover:text-neutral-900 focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
                aria-label="Close menu"
              >
                Close
              </button>
            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-8">
              <Link
                href="mailto:santhoshkan205@gmail.com"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                Email
              </Link>

              <Link
                href="/resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                Resume
              </Link>

              <Link
                href="#projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                Projects
              </Link>

              <Link
                href="/favourites"
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl md:text-4xl font-semibold text-neutral-900 tracking-tight"
              >
                Favourites
              </Link>
            </nav>

            {/* Footer hint (optional, subtle identity) */}
            <div className="text-sm text-neutral-400 tracking-wide">
              சந்தோஷ் சிவன்
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
