"use client"
import { useState, useEffect } from "react";
import Link from "next/link";
import { SiGmail } from 'react-icons/si';

const Header = () => {
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setShow(false);
            } else { // if scroll up show the navbar
                setShow(true);
            }
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return (
        <div>
            <nav className={`fixed w-full top-0 left-0 z-50 bg-white bg-opacity-30 backdrop-blur-lg shadow-lg transition-transform duration-300 ${show ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <p className='text-xl mx-5 text-black font-semibold'>Santhosh Sivan</p>
                        </div>
                        <div className="flex items-center ">
                            <Link href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help you ?">
                                <SiGmail className=' text-slate-600 hover:text-slate-900 text-3xl'/>
                            </Link>
                            <Link className='bg-transparent text-black font-semibold px-4 py-2 rounded-md ml-8' href="https://drive.google.com/uc?id=1peoLr2w4IzEY9DPy7k1DwHdfx9oKN-q5&export=download">  Resume  </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;
