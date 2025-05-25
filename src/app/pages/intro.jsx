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
    const nameSplit = new SplitType('.reveal-name', {
        types: 'chars',
        tagName: 'span',
    });

    const subtitleSplit = new SplitType('.reveal-subtitle', {
        types: 'chars',
        tagName: 'span',
    });

    gsap.from('.reveal-name span', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.03,
    });

    gsap.from('.reveal-subtitle span', {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.02,
        delay: 0.3,
    });

    return () => {
        nameSplit.revert();
        subtitleSplit.revert();
    };
}, []);



    return ( 
        <div>
            <div className='grid grid-cols-1 items-center justify-center lg:grid-cols-2 lg:py-10 mt-24 screen-xs:mt-16'>
                <div className='text-center'>
                    <h2 className='text-4xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500'>
                        Hi, I'm
                    </h2>
                    <h2 className='reveal-name text-4xl sm:text-6xl md:text-7xl font-bold mt-3 text-black dark:text-white font-spaceMono'>
                        Santhosh Sivan
                    </h2>
                    <h3 className='reveal-subtitle mb-4 md:mb-10 text-xl py-2 md:text-2xl md:pb-5 text-slate-600'>
                        Engineer, Artist, Athlete
                    </h3>
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
                    <Link href="https://github.com/sssanthoshsivan" target='_blank' className='text-6xl hover:text-slate-900 hover:scale-110 transition-all duration-200 flex justify-center items-center'>
                        <AiFillGithub />
                    </Link>
                    <Link href="https://www.instagram.com/sssanthosh_sivan/" target='_blank' className='text-5xl mt-1 hover:text-pink-500 hover:scale-110 transition-all duration-200 flex justify-center items-center'>
                        <TfiInstagram />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sssanthoshsivan/" target='_blank' className='text-6xl hover:text-blue-700 hover:scale-110 transition-all duration-200 flex justify-center items-center'>
                        <GrLinkedinOption />
                    </Link>
                </div>
          </div>
        </div>
     );
}
 
export default Intro;

