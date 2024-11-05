import React from 'react'
import Image from 'next/image'
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import chromeExtension from '../../../public/chromeExtension.webp'
import BillSys from '../../../public/BillSys.webp'
import dApp from '../../../public/dApp.webp'
import ConstWork from '../../../public/WorkConst.webp'

function Projects() {
  return (
    <div>
      <Header />
      <div className='font-extrabold flex text-7xl screen-xs:text-4xl px-14 screen-xs:px-7 my-5 font-sans w-full mt-20'>
        Personal Projects
      </div>

      <section className="bg-white ">
        <div className="px-16 screen-xs:px-8 lg:py-2">
          <div className="text-gray-500 sm:text-lg">
              <p className="mb-4 font-light">My <span className="font-medium">personal projects</span> are a blend of academic work, explorations into new technologies, and creative endeavors I built just for fun. Each project has allowed me to deepen my understanding of different tech stacks, from blockchain and AI integrations to web development frameworks.</p>
              <p className="mb-4 font-medium">These experiences have enriched my skills and showcase my curiosity and commitment to learning in the tech field.</p>
          </div>
        </div>
      </section>

      <h2 className="mb-4 text-5xl screen-xs:text-2xl tracking-tight font-bold px-16 screen-xs:px-8 text-gray-900 ">Projects</h2>

      <section className="bg-white px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
            <Image src={chromeExtension} alt="LinkedIn AI Reply Generator" width={1000} height={1000} 
                  className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg lg:pl-6 flex flex-col justify-center">
            <h2 className="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900">AI Reply Generator for LinkedIn (Chrome Extension)</h2>
            <ul className='px-8'>
              <li className="mb-4 list-disc text-base font-light">
                <span className='font-semibold'>Description: </span>
                This Chrome extension assists users in generating quick replies for LinkedIn messages. With a simple command interface, users can click the AI icon in the message input field, enter a command, and have the extension generate a response directly in the chat.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className='font-semibold'>Role: </span>
                Developed the entire UI and UX for the extension, including icon animations, modal design, and seamless integration with LinkedIn’s messaging interface.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className='font-semibold'>Work Done: </span>
                Created core components like the AI icon toggle, command modal, and response generator. Added smooth focus and blur effects, and ensured responses could be instantly inserted into the message field.
              </li>
              <li className="mb-4 list-disc text-base font-light">
                <span className='font-semibold'>Technologies Used: </span> 
                React.js, TypeScript, Tailwind CSS, WXT Framework.
              </li>
            </ul>
          </div>
        </div>
      </section>


      <div className="border mx-16 my-5 screen-xs:mx-10"></div>

      <section className="bg-white  px-16 screen-xs:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center px-4 lg:py-2 lg:px-6 screen-xs:px-2">
          <div className="flex-shrink-0 w-full lg:w-1/3 mb-4 lg:mb-0 items-center">
            <Image src={dApp} alt="hovered" width={1000} height={1000} 
                  className="w-full max-h-80 rounded-lg object-cover" />
          </div>
          <div className="w-full lg:w-2/3 text-gray-500 sm:text-lg  lg:pl-6 flex flex-col justify-center">
                <h2 className="mb-4 text-2xl screen-xs:text-lg tracking-tight font-bold text-gray-900 ">Blockchain Based Storage App </h2>
                <ul className='px-8'>
                <li className="mb-4 list-disc text-base font-light">
          <span className='font-semibold'>Description: </span>
          This decentralized storage DApp combines blockchain technology with IPFS (InterPlanetary File System) to provide secure, scalable data storage. Data is encrypted and stored across IPFS nodes, ensuring redundancy and accessibility. Only authorized users with an IPFS hash can retrieve the data, maintaining high security.
        </li>
        <li className="mb-4 list-disc text-base font-light">
          <span className='font-semibold'>Role: </span>
          Built the front-end interface in React.js, integrated blockchain interactions with ethers.js, and implemented storage functionality using IPFS. Developed smart contracts in Solidity to manage data integrity and access control.
        </li>
        <li className="mb-4 list-disc text-base font-light">
          <span className='font-semibold'>Work Done: </span>
          Designed user-friendly pages for uploading and accessing files. Configured IPFS storage nodes, implemented secure data retrieval with blockchain verification, and created smart contracts to authenticate access permissions.
        </li>
        <li className="mb-4 list-disc text-base font-light">
          <span className='font-semibold'>Technologies Used: </span> 
          Solidity, Brownie, React.js, ethers.js, IPFS.
        </li>
                </ul>
            </div>
        </div>
      </section>

      {/* <div className="border mx-16 my-5 screen-xs:mx-10"></div>

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
      </section> */}

      <Footer />
    </div>
  )
}

export default Projects