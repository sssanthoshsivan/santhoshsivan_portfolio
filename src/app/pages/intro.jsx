"use client"
import {TfiInstagram} from 'react-icons/tfi';
import {GrLinkedinOption} from 'react-icons/gr'
import { AiFillGithub } from "react-icons/ai"
import Profile from "../../../public/profile.jpg"
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
            delay: 0.2
        });
    }, []);


    return ( 
        <div>
            <div className='grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:py-10 mt-24 screen-xs:mt-16'>
                <div className='text-center'>
                    <h2 className='reveal-text md:mb-8 text-5xl  md:text-7xl  font-bold tracking-tighter leading-tight text-black dark:text-black'>Hi I'm</h2>
                    <h2 className='reveal-text m-4 md:mb-8 text-5xl lg:-ml-1 md:text-7xl font-bold tracking-tighter leading-tight text-black dark:text-black'>Santhosh Sivan</h2>
                    <h3 className='reveal-text mb-4 md:mb-10 text-xl py-2 md:text-2xl md:pb-5 text-slate-600'>Engineer, Artist, Athlete</h3>
                </div>
                
                <div className='relative md:m-20 xl:ml-56 lg:h-auto lg:w-96 lg:m-0 lg:mx-10 md:mx-10 sm:mx-10'>
                    <div className='overflow-hidden rounded-3xl hover:rounded-full transition-all duration-200'>
                        <Image 
                            src={Profile} 
                            alt="image" 
                            className='object-cover transition-transform duration-500 hover:scale-110' 
                        />
                    </div>
                </div>
                <div className='text-gray-600 grid grid-cols-3 gap-10 p-10 md:pb-20 screen-xs:p-6'>
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

