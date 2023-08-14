import Image from 'next/image'
import Link from 'next/link';
import {SiGmail} from 'react-icons/si';
import {TfiInstagram} from 'react-icons/tfi';
import {GrLinkedinOption} from 'react-icons/gr'
import { AiFillGithub } from "react-icons/ai"

import {SlSocialYoutube,
        SlSocialLinkedin,
        SlSocialInstagram,
        SlSocialSpotify,
        SlSocialGithub } from 'react-icons/sl'

import sq from "../public/sq.jpeg"



import Projects from '@/pages/projects';
import Photographs from '@/pages/photos';

import react from "../public/atom.png";
import bootstrap from "../public/bootstrap.png";
import css from "../public/css-3.png";
import git from "../public/Gitk.png";
import html from "../public/html.png";
import javascript from "../public/java-script-logo.png";





export default function Home() {
  return (
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-40'>

        <section className='min-h-screen'>

          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-sm font-medium md:text-lg md:font-normal text-slate-600'>Santhosh Sivan</h1>
            <ul className='flex'>
              <li>
                <Link href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help you ?"><SiGmail className=' text-slate-600 hover:text-slate-900 text-2xl -mr-3 md:text-3xl md:mx-5'/></Link>
              </li>
              <li className='mt-1'><Link className='bg-transparent border border-slate-700 hover:bg-slate-900 hover:text-white text-black px-4 py-2 rounded-lg ml-8' href="https://drive.google.com/uc?id=1peoLr2w4IzEY9DPy7k1DwHdfx9oKN-q5&export=download">Resume</Link></li>  
            </ul>          
          </nav>

          <div className='grid grid-cols-1 justify-center lg:grid-cols-2 lg:p-10'>
            <div className='text-center lg:text-left'>
              <h2 className='md:mb-8 text-5xl  md:text-7xl  font-bold tracking-tighter leading-tight'>Hi I'm</h2>
              <h2 className='m-4 md:mb-8 text-5xl lg:-ml-1 md:text-7xl font-bold tracking-tighter leading-tight'>Santhosh Sivan</h2>
              <h3 className='mb-4 md:mb-10 text-2xl py-2 md:text-3xl md:pb-5 text-slate-600'>Front-end Developer, Photographer, Football Athlete</h3>
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
        </section>
        

        <section>
          <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
            Projects
          </h2>

          <Projects />
          
        </section>
        
        <section>
        <h2 className="mb-8 text-3xl pt-10 md:text-5xl font-bold tracking-tighter leading-tight">
          My Photographs
        </h2>

        < Photographs />
          
        </section>
        
        <section>

          <div>
          <h2 className="mb-8 text-3xl pt-10 text-center md:text-5xl font-bold tracking-tighter leading-tight">
            About
          </h2>
          </div>
        <div>
            <p className=" text-black text-justify pb-10 leading-loose text-lg">
                Greetings! I&apos;m a passionate coder. My coding adventure kicked off with Python, where I tackled small projects, 
                and soon I found myself drawn into the world of web development through frameworks like Flask and Django along with HTML, CSS, and JavaScript. 
                Soon I built my very first webpage using plain HTML and Bootstrap, a modest achievement, and I even ventured into blockchain projects, 
                with a primary focus on Web 3.0 for my academics. Countless hours of self-guided learning prepared me for the transition to React. 
                This shift opened doors to dynamic website possibilities, and I further refined my skills using tools like Next.js and Tailwind CSS, 
                enhancing my ability to craft seamless user experiences. My current focus centres predominantly on front-end web development. 
                I relish the process of transforming concepts into captivating and interactive digital spaces. Feel free to connect, Thank you.
            </p>
        </div>
        </section>

        <footer>
          <div className="mt-16 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
              <Link target="_blank" href="https://github.com/sssanthoshsivan">
                <SlSocialGithub kind="github" />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/sssanthosh_sivan/">
                <SlSocialInstagram kind="instagram" />
              </Link>
              <Link target="_blank" href="https://www.youtube.com/channel/UCb3BUO7Y78L8kwj59b9L_EQ">
                <SlSocialYoutube kind="youtube" />
              </Link>
              <Link target="_blank" href="https://open.spotify.com/user/31sc2cwyyfou3apb5xjgeuugostq">
                <SlSocialSpotify kind="spotify" />
              </Link>
              <Link target="_blank" href="https://www.linkedin.com/in/sssanthoshsivan/">
                <SlSocialLinkedin kind="twitter" />
              </Link>
            </div>
            <div className="mb-8 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
              <div></div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Santhosh Sivan
              </div>
                <div>&bull;</div>
                <div>{`© 2023`}</div>
                <div>&bull;</div>
            </div>
          </div>
        </footer>
    
      </main>
    </div>
  )
}
