"use client"

import React, { useState } from "react"
import Header from "@/app/components/Header"
import Footer from "@/app/components/Footer"
import ProjectCard from "../components/ProjectCard"
import ProjectModal from "../components/ProjectModal"

const projects = [
  {
    title: "Jewelry Manufacturing Management App",
    description:
      "Multi-tenant workflow system managing sketches, CADs, renders, and design approvals.",
    workDone:
      "Designed and built complex multi-step interfaces covering the entire jewelry design lifecycle. Implemented role-based access control for sketchers, designers, and supervisors, along with approval workflows at each stage. Modeled backend relationships using Payload CMS and PostgreSQL, optimized data fetching with Next.js SSR, and integrated email notifications for customer updates. Architected reusable components for performance and maintainability.",
    technologies: ["Next.js", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Work Management App",
    description:
      "Role-based task and project workflows with multi-level approvals for construction teams.",
    workDone:
      "Built task and project management modules with role-based access control and multi-level approval flows, enabling structured collaboration across teams and supervisors.",
    technologies: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL"],
  },
  {
    title: "Resource Management System",
    description:
      "Employee and inventory management with time zone–aware booking and dynamic validation.",
    workDone:
      "Created employee profiles, booking systems, and inventory workflows with robust validation and time zone handling to support distributed operations.",
    technologies: ["Next.js", "Tailwind CSS", "Sass"],
  },
  {
    title: "Banking Application",
    description:
      "ERP-linked UI for bill processing and multi-account financial visibility.",
    workDone:
      "Developed interfaces for managing bill statuses and visualizing vendor invoices across multiple accounts, improving financial transparency.",
    technologies: ["Vue.js", "Tailwind CSS"],
  },
  {
    title: "Billing Portal",
    description:
      "Internal portal for bill tracking and vendor invoice visualization.",
    workDone:
      "Built financial UI components for tracking bill states and linking credit and bank accounts to vendor invoices.",
    technologies: ["Vite", "Tailwind CSS"],
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <main className="bg-white">
      <Header />

      {/* Page intro */}
      <section className="px-6 md:px-16 lg:px-24 pt-32 pb-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Professional Projects
          </h1>

          <p className="text-neutral-600 leading-relaxed">
            A selection of production-grade applications I’ve worked on in real
            teams — spanning multi-tenant SaaS platforms, role-based dashboards,
            approval workflows, and API-driven integrations.
          </p>
        </div>
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
    </main>
  )
}
