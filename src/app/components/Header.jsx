"use client"
import { useState } from "react";
import Link from "next/link";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <nav className={`fixed w-full top-0 left-0 z-50 transition-transform duration-300 ${isMenuOpen ? 'bg-black' : 'bg-transparent'}`}>
                <div className="mx-auto">
                    <div className="flex justify-between h-16 items-center mx-5 screen-lg:mx-8">
                        <div className="flex-shrink-0 flex items-center">
                            <Link href="/" className={`text-xl mx-2 font-bold transition-colors duration-300 ${isMenuOpen ? 'text-white' : 'mix-blend-difference'}`} onClick={closeMenu}>
                                Santhosh Sivan
                            </Link>
                        </div>
                        <div className="flex items-center">
                            <button
                                onClick={toggleMenu}
                                className={`text-xl font-bold focus:outline-none ${isMenuOpen ? 'text-white' : 'text-orange-500'}`}
                                aria-label="Toggle Menu"
                            >
                                {isMenuOpen ? 'Close' : 'Menu'}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
            <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-100 ease-in-out ${isMenuOpen ? 'max-h-screen' : 'max-h-0'} overflow-hidden bg-black`}>
                <div className="px-2 pt-20 pb-3 space-y-1 sm:px-3 text-white">
                    <Link href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help you ?" className="block px-3 py-2 rounded-md text-3xl font-extrabold" onClick={closeMenu}>
                        Email
                    </Link>
                    <Link href="https://drive.google.com/uc?id=1-irmyvmn-rJRjSMCkPQD6cVdCYgQDD9W&export=download" className="block px-3 py-2 rounded-md text-3xl font-extrabold" onClick={closeMenu}>
                        Resume
                    </Link>
                    <Link href="/projects" className="block px-3 py-2 rounded-md text-3xl font-extrabold" onClick={closeMenu}>
                        Projects
                    </Link>
                    <Link href="/favourites" className="block px-3 py-2 rounded-md text-3xl font-extrabold" onClick={closeMenu}>
                        Favourites
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
