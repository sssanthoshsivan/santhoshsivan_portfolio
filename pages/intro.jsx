"use client"
import {SiGmail} from 'react-icons/si';
import {TfiInstagram} from 'react-icons/tfi';
import {GrLinkedinOption} from 'react-icons/gr'
import { AiFillGithub } from "react-icons/ai"
import sq from "../public/sq.jpeg"
import Image from 'next/image'
import Link from 'next/link';
import gsap from 'gsap';
import SplitType from 'split-type';
import { useEffect } from 'react';

const Intro = () => {

    useEffect(() => {
        let typeSplit = new SplitType('.reveal-text', {
            types: 'lines, words, chars',
            tagName: 'span'
        });

        gsap.from('h2 span', {
            opacity: 0.3,
            duration: 0.20,
            ease: 'power3.inOut',
            stagger: 0.05,
        });
    }, []);


    return ( 
        <div>
            <nav className='py-10 mb-12 flex justify-between'>
                <h1 className='text-sm font-medium md:text-lg md:font-normal text-slate-600'>Santhosh Sivan</h1>
                <ul className='flex'>
                <li>
                    <Link href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help you ?"><SiGmail className=' text-slate-600 hover:text-slate-900 text-2xl -mr-3 md:text-3xl md:mx-5'/></Link>
                </li>
                <li className='mt-1'><Link className='bg-transparent border border-slate-700 hover:bg-slate-900 hover:text-white text-black font-semibold px-4 py-2 rounded-md ml-8' href="https://drive.google.com/uc?id=1peoLr2w4IzEY9DPy7k1DwHdfx9oKN-q5&export=download">Resume</Link></li>  
                </ul>          
            </nav>

            <div className='grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:py-10'>
                <div className='text-center lg:text-left'>
                    <h2 className='reveal-text md:mb-8 text-5xl  md:text-7xl  font-bold tracking-tighter leading-tight text-black dark:text-black'>Hi I'm</h2>
                    <h2 className='reveal-text m-4 md:mb-8 text-5xl lg:-ml-1 md:text-7xl font-bold tracking-tighter leading-tight text-black dark:text-black'>Santhosh Sivan</h2>
                    <h3 className='reveal-text mb-4 md:mb-10 text-2xl py-2 md:text-3xl md:pb-5 text-slate-600'>Front-end Developer, Photographer, Football Athlete</h3>
                </div>
                
                <div className='md:grid-flow-row md:m-20 xl:ml-56 lg:h-auto lg:w-96 lg:m-0 lg:mx-10 md:mx-10 sm:mx-10'>
                <Image src={sq} alt="image" className='rounded-3xl object-cover hover:rounded-full transition-all duration-200' />
                </div>
                <div className='text-gray-600 grid grid-cols-3 gap-10 p-10 lg:-ml-14 md:pb-20 xl:-ml-32'>
                    <Link href="https://github.com/sssanthoshsivan" className='text-6xl hover:text-slate-900 flex justify-center items-center' target='_blank'>
                        <AiFillGithub />
                    </Link>
                    <Link href="https://www.instagram.com/sssanthosh_sivan/" className='text-5xl mt-1 hover:text-slate-900 flex justify-center items-center' target='_blank'>
                        <TfiInstagram />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sssanthoshsivan/" className='text-6xl hover:text-slate-900 flex justify-center items-center' target='_blank'>
                        <GrLinkedinOption />
                    </Link>
                </div>
          </div>
        </div>
     );
}
 
export default Intro;

