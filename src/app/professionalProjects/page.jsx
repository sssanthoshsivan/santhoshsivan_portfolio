"use client"

import React, { useState } from "react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import ProjectCard from "@/components/layout/ProjectCard"
import ProjectModal from "@/components/layout/ProjectModal"
import { allProjects } from "@/lib/projects"

export default function ProfessionalProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)
  
  // Filter for professional projects only
  const professionalProjects = allProjects.filter(p => p.tags.includes("Professional"))

  return (
    <main className="bg-hatch min-h-screen relative overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-background bg-dotted relative z-10 transition-colors">
        <Header />

        {/* Page intro */}
        <section className="px-6 md:px-16 lg:px-24 pt-32 pb-16">
          <header className="mb-20">
            <h1 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
              <span className="w-12 h-[1px] bg-border"></span>
              Full Stack // Professional
            </h1>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter text-foreground mb-8 uppercase leading-none">
              PRODUCTION_SYSTEMS
            </h2>
            <p className="text-muted-foreground max-w-2xl leading-relaxed font-mono text-sm uppercase tracking-wide">
              A selection of production-grade applications I’ve worked on in real teams — spanning multi-tenant SaaS platforms, role-based dashboards, and API-driven integrations.
            </p>
          </header>
        </section>

        {/* Projects grid */}
        <section className="px-6 md:px-16 lg:px-24 pb-24">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {professionalProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                title={project.title}
                description={project.description}
                meta={project.date}
                image={project.image}
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
