import Link from "next/link";
import React from "react";

function WorkExperience() {
  return (
    <div className="screen-xs:py-0 mx-6 screen-xs:mx-0 py-8">
      <div className="relative pl-8 sm:pl-56 py-6 group screen-xs:pl-4 screen-xs:pt-0">
        <div className="font-caveat font-bold text-2xl text-slate-900 mb-1 sm:mb-0">
          Web Developer
        </div>

        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-8 sm:after:left-0 after:w-2 after:h-2 after:bg-orange-600 after:border-4 after:screen-xs:hidden after:box-content after:border-slate-50 after:rounded-full sm:after:ml-48 after:-translate-x-1/2 after:translate-y-1.5">
          <time className="sm:absolute sm:left-0 sm:translate-y-0.5 sm:w-40 inline-flex items-center justify-center text-xs font-semibold uppercase w-28 screen-xs:w-40 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">
            Sep 2023 - Present
          </time>
          <div className="text-xl font-medium text-slate-800 ">
            Jobin and Jismi <time className="font-normal text-sm">Thrissur, Kerala.</time>
          </div>
        </div>

        <div className="text-slate-500">
          I specialize in developing visually compelling and highly intuitive
          user interfaces by leveraging React, Next.js, and Tailwind CSS. My
          work bridges the gap between design and functionality, driving user
          engagement, increasing conversion rates, and streamlining workflows to
          create impactful digital experiences that support and enhance business
          goals.
        </div>

        <div className="mt-4 flex items-center space-x-2 group">
          <Link
            href="/professionalProjects"
            className="text-orange-600 hover:underline text-sm font-medium flex items-center"
          >
            Click here to view the projects
            <svg
              className="w-4 h-4 text-orange-600 ml-1 hover:ml-2 transition-transform duration-300 ease-in-out transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14m-7-7l7 7-7 7"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
