import React from 'react'
import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";

function Projects() {
  return (
    <div>
      <Header />
      <div className='font-extrabold flex text-7xl screen-xs:text-4xl px-14 screen-xs:px-7 my-5 font-sans w-full mt-20'>
        Web Developer
      </div>
      <div class="mb-4 text-2xl px-16 screen-xs:px-8 tracking-tight font-bold text-gray-900 dark:text-white">Jobin & Jismi <time class="font-medium text-lg">Thrissur, Kerala.</time></div>
      <section class="bg-white dark:bg-gray-900">
        <div class="px-16 screen-xs:px-8 lg:py-2">
            <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
                <p class="mb-4 font-light">As a <span className='font-medium'>Web Developer</span>, I bring visions to life by crafting user interfaces that are both visually compelling and highly intuitive. My focus is on bridging the gap between design and functionality, translating creative concepts into practical digital experiences that closely aligns with the business goals.</p>
                <p class="mb-4 font-medium">Whether it's enhancing user engagement, boosting conversion rates, or streamlining workflows, my work is all about creating meaningful impact and propelling the company forward.</p>
            </div>
        </div>
      </section>

      <h2 class="mb-4 text-4xl screen-xs:text-2xl tracking-tight font-bold px-16 screen-xs:px-8 text-gray-900 dark:text-white">Projects</h2>
      <section class="bg-white dark:bg-gray-900 px-16 screen-xs:px-8">
        <div class=" px-4  lg:py-2 lg:px-6 screen-xs:px-2">
            <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 dark:text-white">Work Management System <span className=' text-base'>(Sep 2023 - Present)</span></h2>
                <ul className='pl-8'>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>This project aimed to streamline employee management through extensive form handling and validation. Key functionalities included resource booking, invoice attachment management, and inventory tracking. I implemented dynamic forms to accommodate various user inputs and integrated time zone handling for seamless resource booking across different locations.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span> Developed UI components and integrated APIs for backend data retrieval.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span> Created pages for managing employee profiles, booking resources, handling invoice attachments, and managing inventory items through extensive form handling and validation. Ensured seamless time zone handling for accurate resource scheduling. </li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span> Next.js, Tailwind CSS, Sass.</li>
                </ul>
            </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900 px-16 screen-xs:px-8">
        <div class=" px-4  lg:py-2 lg:px-6 screen-xs:px-2">
            <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 dark:text-white">Banking Application <span className=' text-base'>(July 2024 - Aug 2024)</span></h2>
                <ul className='pl-8'>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>This application facilitated payment processing by displaying bills from Netsuite ERP and enabling users to manage bill statuses (e.g., on hold, processing, closed). I designed intuitive user interfaces that provided insights into multiple bank and credit accounts, along with associated invoices linked to vendors.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span>Frontend Developer specializing in UI/UX design and client-side validation.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span> Designed and developed intuitive UI components for bill management, including display, status tracking, and detailed financial account insights. </li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span>Vue.js, Tailwind CSS.</li>
                </ul>
            </div>
        </div>
      </section>

      <section class="bg-white dark:bg-gray-900 px-16 screen-xs:px-8">
        <div class=" px-4  lg:py-2 lg:px-6 screen-xs:px-2">
            <div class=" text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 class="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 dark:text-white">Work Management App <span className=' text-base'>(June 2024)</span></h2>
                <ul className='pl-8'>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Description: </span>Designed and developed a comprehensive work management application tailored for a construction company. Implemented role-based access control to restrict content visibility based on user roles, ensuring sensitive data and workflows were protected. Key features included dynamic task and project management, user profile administration, and streamlined approval workflows.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Role: </span>Full-stack Developer responsible for frontend (Next.js, TypeScript) and backend (Payload CMS, PostgreSQL) development.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Work Done: </span>Developed role-based access controls, dynamic content rendering, and streamlined approval workflows for task and project management.</li>
                  <li class="mb-4 list-disc text-base font-light"><span className='font-semibold'>Technologies Used: </span> Next.js, TypeScript, Payload CMS, PostgreSQL.</li>
                </ul>
            </div>
        </div>
      </section>
      

      <Footer />
    </div>
  )
}

export default Projects