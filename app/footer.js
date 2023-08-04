import React from 'react'
import Link from 'next/link'
import {SiGmail} from 'react-icons/si';
import {TfiInstagram} from 'react-icons/tfi';
import {GrLinkedinOption} from 'react-icons/gr'
import {AiOutlineInstagram, 
        AiFillLinkedin, 
        AiFillGithub,
      } from "react-icons/ai"

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <AiFillLinkedin kind="mail" href="javascript:void(0)" size="6" />
          <AiFillLinkedin kind="github" href="javascript:void(0)" size="6" />
          <AiFillLinkedin kind="facebook" href="javascript:void(0)" size="6" />
          <AiFillLinkedin kind="youtube" href="javascript:void(0)" size="6" />
          <AiFillLinkedin kind="linkedin" href="javascript:void(0)" size="6" />
          <AiFillLinkedin kind="twitter" href="javascript:void(0)" size="6" />
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div></div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/"></Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/timlrx/tailwind-nextjs-starter-blog">
            Tailwind Nextjs Theme
          </Link>
        </div>
      </div>
    </footer>
  )
}