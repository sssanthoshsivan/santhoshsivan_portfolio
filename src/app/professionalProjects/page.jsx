import React from 'react'
import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import BankApp from '../../../public/BankApp.webp'
import BillSys from '../../../public/BillSys.webp'
import ResourceManage from '../../../public/ResourceManage.webp'
import ConstWork from '../../../public/WorkConst.webp'

function Projects() {
  return (
    <div>
      <Header />
      <div className='font-extrabold flex text-7xl screen-xs:text-4xl px-14 screen-xs:px-7 my-5 font-sans w-full mt-20'>
        Web Developer
      </div>
      <div className="mb-4 text-2xl px-16 screen-xs:px-8 tracking-tight font-bold text-gray-900 ">Jobin & Jismi <time className="font-medium text-lg">Thrissur, Kerala.</time></div>
      <section className="bg-white ">
        <div className="px-16 screen-xs:px-8 lg:py-2">
            <div className=" text-gray-500 sm:text-lg ">
                <p className="mb-4 font-light">As a <span className='font-medium'>Web Developer</span>, I bring visions to life by crafting user interfaces that are both visually compelling and highly intuitive. My focus is on bridging the gap between design and functionality, translating creative concepts into practical digital experiences that closely aligns with the business goals.</p>
                <p className="mb-4 font-medium">Whether it's enhancing user engagement, boosting conversion rates, or streamlining workflows, my work is all about creating meaningful impact and propelling the company forward.</p>
            </div>
        </div>
      </section>

      <h2 className="mb-4 text-5xl screen-xs:text-2xl tracking-tight font-bold px-16 screen-xs:px-8 text-gray-900 ">Projects</h2>

      <section className="bg-white  px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
            <Image src={ResourceManage} alt="hovered" width={1000} height={1000} 
                    className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg  lg:pl-6 flex flex-col justify-center">
                <h2 className="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 ">Resource Management System <span className=' text-base'>(Sep 2023 - Oct 2024)</span></h2>
                <ul className='px-8'>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>This project aimed to streamline employee management through extensive form handling and validation. Key functionalities included resource booking, invoice attachment management, and inventory tracking. I implemented dynamic forms to accommodate various user inputs and integrated time zone handling for seamless resource booking across different locations.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span> Developed UI components and integrated APIs for backend data retrieval.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span> Created pages for managing employee profiles, booking resources, handling invoice attachments, and managing inventory items through extensive form handling and validation. Ensured seamless time zone handling for accurate resource scheduling. </li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span> Next.js, Tailwind CSS, Sass.</li>
                </ul>
            </div>
        </div>
      </section>

      <div className="border mx-16 my-5 screen-xs:mx-10"></div>

      <section className="bg-white  px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
            <Image src={BankApp} alt="hovered" width={1000} height={1000} 
                  className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg  lg:pl-6 flex flex-col justify-center">
                <h2 className="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 ">Banking Application <span className=' text-base'>(July 2024 - Aug 2024)</span></h2>
                <ul className='px-8'>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>This application facilitated payment processing by displaying bills from Netsuite ERP and enabling users to manage bill statuses (e.g., on hold, processing, closed). I designed intuitive user interfaces that provided insights into multiple bank and credit accounts, along with associated invoices linked to vendors.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span>Frontend Developer specializing in UI/UX design and client-side validation.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span> Designed and developed intuitive UI components for bill management, including display, status tracking, and detailed financial account insights. </li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span>Vue.js, Tailwind CSS.</li>
                </ul>
            </div>
        </div>
      </section>

      <div className="border mx-16 my-5 screen-xs:mx-10"></div>

      <section className="bg-white  px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
          <Image src={ConstWork} alt="hovered" width={1000} height={1000} 
                  className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg  lg:pl-6 flex flex-col justify-center">
            <h2 className="my-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 ">
              Work Management App <span className="text-base">(June 2024)</span>
            </h2>
            <ul className="px-8">
              <li className="mb-4 list-disc text-base font-light">
                <span className="font-semibold">Description:</span> Designed and developed a comprehensive work management application tailored for a construction company. Implemented role-based access control to restrict content visibility based on user roles, ensuring sensitive data and workflows were protected. Key features included dynamic task and project management, user profile administration, and streamlined approval workflows.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className="font-semibold">Role:</span> Full-stack Developer responsible for frontend (Next.js, TypeScript) and backend (Payload CMS, PostgreSQL) development.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className="font-semibold">Work Done:</span> Developed role-based access controls, dynamic content rendering, and streamlined approval workflows for task and project management.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className="font-semibold">Technologies Used:</span> Next.js, TypeScript, Payload CMS, PostgreSQL.
              </li>
            </ul>
          </div>

        </div>
      </section>

      <div className="border mx-16 my-5 screen-xs:mx-10"></div>

      <section className="bg-white  px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
            <Image src={BillSys} alt="hovered" width={1000} height={1000} 
                  className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg  lg:pl-6 flex flex-col justify-center">
                <h2 className="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 ">Billing Portal <span className=' text-base'>(July 2024 - Present)</span></h2>
                <ul className='px-8'>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>This application facilitated payment processing by displaying bills from Netsuite ERP and enabling users to manage bill statuses (e.g., on hold, processing, closed). I designed intuitive user interfaces that provided insights into multiple bank and credit accounts, along with associated invoices linked to vendors.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span>Frontend Developer specializing in UI/UX design and client-side validation.</li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span> Designed and developed intuitive UI components for bill management, including display, status tracking, and detailed financial account insights. </li>
                  <li className="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span>Vite, Tailwind CSS.</li>
                </ul>
            </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Projects