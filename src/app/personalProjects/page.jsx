"use client"

import React, { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ProjectCard from "@/components/layout/ProjectCard"
import ProjectModal from "@/components/layout/ProjectModal"

const projects = [
  {
    title: "HTTP Server in C",
    description: "Built a lightweight, multithreaded HTTP server from scratch using C and POSIX threads.",
    workDone: "Implemented low-level socket programming for TCP/IP communication, handled concurrent connections using POSIX threads, designed static file serving with appropriate MIME types, and added basic HTTP error handling with proper response headers.",
    technologies: ["C", "POSIX Threads", "TCP/IP", "HTTP/1.1"],
  },
  {
    title: "Blockchain Based Storage App",
    description: "A decentralized storage platform built on IPFS and Ethereum with smart contracts.",
    workDone: "Designed a responsive file upload interface in React, integrated IPFS nodes for decentralized storage and retrieval, developed Ethereum smart contracts for access control and ownership, and ensured secure file handling through hash-based encryption.",
    technologies: ["Solidity", "IPFS", "React.js", "ethers.js"],
  },
  {
    title: "AI Reply Generator for LinkedIn",
    description: "A productivity-focused Chrome extension that enhances LinkedIn chat via AI command interface.",
    workDone: "Built the extension using React and TypeScript with the WXT framework, created a dynamic modal interface for AI input, integrated with LinkedIn’s DOM for real-time message enhancement, and automated reply insertion into the chat input field.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "WXT Framework"],
  },
]

export default function PersonalProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-transparent relative z-10 transition-colors">
        <Header />

        {/* Page intro */}
        <section className="px-6 md:px-16 lg:px-24 pt-32 pb-16">
          <header className="mb-20">
            <h1 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-border"></span>
              Engineering // Explorations
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 uppercase">
              PERSONAL_STACK
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed font-mono text-sm uppercase tracking-wide">
              Low-level systems, decentralized storage experiments, and productivity tools built to explore new technologies and solve personal challenges.
            </p>
          </header>
        </section>

        {/* Projects grid */}
        <section className="px-6 md:px-16 lg:px-24 pb-24">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
        </section>

        {/* Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            workDone={selectedProject.workDone}
            technologies={selectedProject.technologies}
          />
        )}

        <Footer />
      </div>
    </main>
  )
}