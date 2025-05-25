"use client"
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectCard from "../components/projectCard";
import ProjectModal from "../components/projectModal";

const projects = [
{
  title: "Jewelry Manufacturing Management App",
  description: "A comprehensive app for managing customer requests through detailed product design workflows including sketches, CAD models, renders, and design approvals.",
  workDone:
    "Worked throughout the project from start to finish, designing intuitive UIs and complex multi-step forms for each stage of the design process — from metal details and sizing to stones and renderings. Implemented supervisor approval workflows for sketches, CADs, and designs with role-based access control for employees such as sketchers and designers. Developed backend collections and relations using Payload CMS and PostgreSQL, optimized data fetching with SSR in Next.js, and integrated email notifications to keep customers informed. Architected the system with reusable components to enhance performance and maintainability.",
  technologies: ["Next.js", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
},
  {
    title: "Resource Management System",
    description: "Streamlined employee and inventory workflows using dynamic forms and time zone-aware booking.",
    workDone:
      "Created employee profile pages, booking systems, and inventory management features with dynamic form validation and comprehensive time zone handling to ensure accuracy across regions.",
    technologies: ["Next.js", "Tailwind CSS", "Sass"],
  },
  {
    title: "Banking Application",
    description: "UI for processing ERP bills and showing multi-account financial data.",
    workDone:
      "Built user interfaces to efficiently manage bill statuses and display vendor invoices linked to multiple accounts, enhancing financial transparency and workflow.",
    technologies: ["Vue.js", "Tailwind CSS"],
  },
  {
    title: "Work Management App",
    description: "Construction-focused app with role-based task/project workflows and approvals.",
    workDone:
      "Implemented task and project management modules with role-based access control and multi-level approval workflows to streamline construction operations.",
    technologies: ["Next.js", "TypeScript", "Payload CMS", "PostgreSQL"],
  },
  {
    title: "Billing Portal",
    description: "ERP-integrated portal for bill tracking and vendor invoice visualization.",
    workDone:
      "Developed financial UI components featuring bill status tracking and linked views for credit and bank accounts, improving vendor invoice transparency.",
    technologies: ["Vite", "Tailwind CSS"],
  },
];


export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <Header />
      <div className="text-5xl font-extrabold text-[#2c1e1e] px-14 mt-20 mb-8 screen-xs:px-7 screen-xs:text-3xl tracking-tight">
        Professional Projects
      </div>

      <section className="px-16 screen-xs:px-8 pb-20">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, idx) => (
            <ProjectCard
              key={idx}
              title={proj.title}
              description={proj.description}
              onClick={() => setSelectedProject(proj)}
            />
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          workDone={selectedProject.workDone}
          technologies={selectedProject.technologies}
        />
      )}

      <Footer />
    </div>
  );
}
