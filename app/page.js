import Link from 'next/link';
import Image from 'next/image'
import Head from 'next/head';
import {SiGmail} from 'react-icons/si';
import {TfiInstagram} from 'react-icons/tfi';
import {GrLinkedinOption} from 'react-icons/gr'
import {AiOutlineInstagram, 
        AiFillLinkedin, 
        AiFillGithub,
      } from "react-icons/ai"

import Blockchain from "../public/Blockchain.webp"
import Shop from "../public/Shop.jpg"
import sq from "../public/sq.jpeg"
import code from "../public/code.png";
import design from "../public/design.png";
import consulting from "../public/consulting.png";

import img1 from "../public/img1.jpeg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img8 from "../public/img8.jpg";
import img9 from "../public/img9.jpg";
import img12 from "../public/img12.jpeg";
import img13 from "../public/img13.jpg";
import img15 from "../public/img15.jpg";
import img16 from "../public/img16.jpeg";
import About from './about';
import Footer from './footer';





export default function Home() {
  return (
    <div>
      <main className='bg-white px-10 md:px-20 lg:px-40'>

        <section className='min-h-screen'>

          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-lg text-slate-600'>Santhosh Sivan</h1>
            <ul className='flex'>
              <li>
                <a href="mailto:santhoshkan205@gmail.com?subject=Hi, How can I help You ?"><SiGmail className='cursor-pointer text-3xl -mt-1 text-slate-600 hover:text-slate-900'/></a>
              </li>
              <li><a className='bg-transparent border font-medium border-slate-700 hover:bg-slate-900 hover:text-white text-black px-4 py-2 rounded-lg ml-8' href="https://drive.google.com/uc?id=1peoLr2w4IzEY9DPy7k1DwHdfx9oKN-q5&export=download">Resume</a></li>  
            </ul>          
          </nav>

          <div className='grid grid-cols-1 justify-center lg:grid-cols-2 lg:p-10'>
            <div className='text-center lg:text-left'>
              <h2 className='mb-8 text-5xl  md:text-7xl font-bold tracking-tighter leading-tight'>Hi I'm</h2>
              <h2 className='mb-8 text-5xl  md:text-7xl font-bold tracking-tighter leading-tight '>Santhosh Sivan</h2>
              <h3 className='mb-10 text-2xl py-2 md:text-3xl md:pb-5 text-slate-600'>Front-end Developer, Photographer, Football Athlete</h3>
            </div>
            
            <div className='md:grid-flow-row md:m-20 lg:h-auto lg:w-96 lg:m-0 lg:ml-32 lg:-mt-6 lg:px-5'>
              <Image src={sq} alt="image" className='rounded-3xl object-cover hover:rounded-full transition-all duration-200' />
            </div>
            <div className='text-gray-600 grid items-center grid-cols-3 p-14 gap-14 lg:-mt-16 lg:-ml-14 md:-mr-20'>
              <a href="https://github.com/sssanthoshsivan" className='text-6xl hover:text-slate-900 ' target='_blank'><AiFillGithub /></a> 
              <a href="https://www.instagram.com/sssanthosh_sivan/" className='text-5xl ml-2 mt-2 hover:text-slate-900' target='_blank'><TfiInstagram/></a>
              <a href="https://www.linkedin.com/in/sssanthoshsivan/" className='text-6xl hover:text-slate-900' target='_blank'><GrLinkedinOption /></a>
            </div>
          </div>
        </section>
        

        <section>
          <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight">
            Projects
          </h2>
          <section class=" pt-5 lg:pt-10 pb-10 lg:pb-20 bg-white">
            <div class="container">
                <div class="flex flex-wrap -mx-4">
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <Image
                            src={Shop}
                            alt="image"
                            class="w-full"
                            />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              UI Design for an e-Commerece Website
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                            EarthlyShop is a front-end design project aimed at improving creativity and showcasing web design skills. 
                            The project is built using HTML, CSS, and Bootstrap.
                            </p>
                            <a
                              href="https://sssanthoshsivan.github.io/earthlyshop.github.io/"
                              target='_blank'
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            Live Demo
                            </a>
                        </div>
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <Image
                            src={Blockchain}
                            alt="image"
                            class="w-full"
                            />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              D' Storage
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                            Blockchain-based decentralized storage using IPFS and blockchain technology to provide secure and scalable data storage, 
                            with data distributed across multiple nodes for redundancy and protected by encryption for authorized access.
                            </p>
                            <a
                              href="https://github.com/sssanthoshsivan/D-Storage"
                              target='_blank'
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              text-base text-body-color
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            View Details
                            </a>
                        </div>
                      </div>
                  </div>
                  <div class="w-full md:w-1/2 xl:w-1/3 px-4">
                      <div class="bg-white rounded-lg overflow-hidden mb-10">
                        <img
                            src="https://cdn.tailgrids.com/1.0/assets/images/cards/card-01/image-03.jpg"
                            alt="image"
                            class="w-full"
                            />
                        <div class="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                            <h3>
                              <a
                                  href="javascript:void(0)"
                                  class="
                                  font-semibold
                                  text-dark text-xl
                                  sm:text-[22px]
                                  md:text-xl
                                  lg:text-[22px]
                                  xl:text-xl
                                  2xl:text-[22px]
                                  mb-4
                                  block
                                  hover:text-primary
                                  "
                                  >
                              Upcoming Project
                              </a>
                            </h3>
                            <p class="text-slate-600 leading-relaxed mb-7">
                              Working on Some New Stuffs on the Market.
                            </p>
                            <a
                              href="javascript:void(0)"
                              class="
                              inline-block
                              py-2
                              px-7
                              border border-[#E5E7EB]
                              rounded-xl
                              text-base text-body-color
                              font-medium
                              hover:bg-black hover:text-white
                              transition
                              "
                              >
                            Soon....
                            </a>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </section>
        </section>
        
        <section>
        <h2 className="mb-8 text-3xl pt-10 md:text-5xl font-bold tracking-tighter leading-tight">
            My Photographs
          </h2>

          <div className='py-10'>

            <div className='grid grid-cols-2 gap-5 lg:grid-cols-5 md:grid-cols-3'>
              <Image src={img3} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img9} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img15} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img13} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img8} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img12} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img1} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img4} alt="image" className='rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img16} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
              <Image src={img5} alt="image" className=' rounded-xl hover:scale-125 hover:rounded-md transition-all duration-150 '/>
            </div>

          </div>
        </section>

        <section>

          <div>
          <h2 className="mb-8 text-3xl pt-10 text-center md:text-5xl font-bold tracking-tighter leading-tight">
            About
          </h2>
          </div>

        </section>  

        <section>
          <div>
            <About/>
          </div>
        </section>

        <footer>
          <Footer />
        </footer>
    
      </main>
    </div>
  )
}
