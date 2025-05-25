// pages/projects.tsx
"use client"
import React, { useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    title: "HTTP Server in C",
    description: "Built a lightweight, multithreaded HTTP server from scratch using C and POSIX threads. The server handles basic HTTP/1.1 requests and serves static files, mimicking core behavior of traditional web servers.",
    workDone: "Implemented low-level socket programming for TCP/IP communication, handled concurrent connections using POSIX threads, designed static file serving with appropriate MIME types, and added basic HTTP error handling with proper response headers.",
    technologies: ["C", "POSIX Threads", "TCP/IP", "HTTP/1.1"],
  },
  {
    title: "Blockchain Based Storage App",
    description: "A decentralized storage platform built on IPFS and Ethereum, enabling users to securely store and retrieve files. The app uses smart contracts for file ownership verification and permission control.",
    workDone: "Designed a responsive file upload interface in React, integrated IPFS nodes for decentralized storage and retrieval, developed Ethereum smart contracts for access control and ownership, and ensured secure file handling through hash-based encryption.",
    technologies: ["Solidity", "IPFS", "React.js", "ethers.js"],
  },
  {
    title: "AI Reply Generator for LinkedIn",
    description: "A productivity-focused Chrome extension that enhances LinkedIn chat by generating AI-powered responses via a command interface, seamlessly integrating into LinkedIn's messaging UI.",
    workDone: "Built the extension using React and TypeScript with the WXT framework, created a dynamic modal interface for AI input, integrated with LinkedIn’s DOM for real-time message enhancement, and automated reply insertion into the chat input field.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "WXT Framework"],
  },
];



export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div>
      <Header />
      <div className="text-5xl font-extrabold text-[#2c1e1e] px-14 mt-20 mb-8 screen-xs:px-7 screen-xs:text-3xl tracking-tight">
        Personal Projects
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