import Link from "next/link"
import React from "react"

function WorkExperience() {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div >

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-12">
          Work Experience
        </h2>

        <div className="relative pl-10 border-l border-neutral-300">

          {/* Timeline item */}
          <div className="relative pb-12">
            {/* Dot */}
            <span className="absolute -left-[2px] top-1 h-3 w-3 rounded-full bg-neutral-900" />

            {/* Content */}
            <div className="space-y-3">
              <p className="text-sm text-neutral-500 ml-5">
                Sep 2023 — Present
              </p>

              <h3 className="text-xl font-medium text-neutral-900">
                Web Developer · Jobin & Jismi
              </h3>

              <p className="text-sm text-neutral-500">
                Thrissur, Kerala
              </p>

              <p className="text-neutral-700 leading-relaxed">
                Working on production web applications with a strong focus on
                front-end engineering for internal and customer-facing systems.
                My work involves building role-based dashboards, multi-step
                workflows, and API-driven interfaces used in real operational
                environments.
              </p>

              <p className="text-neutral-700 leading-relaxed">
                I primarily work with React, Next.js, and Tailwind CSS, closely
                collaborating with backend systems to handle permissions, data
                flow, and reliability across multi-tenant applications.
              </p>

              <Link
                href="/professionalProjects"
                className="inline-flex items-center text-sm font-medium text-neutral-900 border-b border-neutral-300 w-fit hover:border-neutral-900 transition-colors focus:outline-none focus-visible:ring focus-visible:ring-neutral-400"
              >
                View related projects
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default WorkExperience
