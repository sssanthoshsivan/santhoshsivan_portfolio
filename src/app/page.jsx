"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Intro from "@/components/sections/intro";
import WorkExperience from "@/components/sections/WorkExperience";
import Photographs from "@/components/sections/photos";
import About from "@/components/sections/about";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { allProjects } from "@/lib/projects";

export default function Home() {
  return (
    <main className="bg-hatch min-h-screen relative overflow-x-hidden">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-background bg-dotted relative z-10 transition-colors">
        <Header />

        <div id="index">
          <Intro triggerAnimation />
        </div>

        <div id="experience">
          <WorkExperience />
        </div>

        <div id="projects" className="px-6 md:px-16 lg:px-24 py-28 border-b border-border">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-xl">
              <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
                <span className="w-12 h-[1px] bg-border"></span>
                Selected Work // Feature
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tighter text-foreground uppercase">
                ENGINEERED_SOLUTIONS
              </h3>
            </div>
            <Link 
              href="/projects"
              className="text-xs font-mono font-bold uppercase tracking-widest px-6 py-3 border border-border hover:bg-foreground hover:text-background transition-all"
            >
              VIEW_ALL_ARCHIVE [↗]
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {allProjects.slice(0, 2).map((project, idx) => (
              <Link 
                key={idx}
                href="/projects" 
                className="group relative flex flex-col"
              >
                <div className="relative aspect-[16/9] overflow-hidden border border-border bg-muted mb-6">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-background border border-border px-2 py-1 text-[10px] font-mono font-bold uppercase tracking-widest">
                    {project.date}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-mono text-primary font-bold uppercase tracking-widest">
                      {project.tags[0]}
                    </span>
                    <span className="w-4 h-[1px] bg-border"></span>
                    <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:underline underline-offset-4">
                      {project.title}
                    </h4>
                  </div>
                  <p className="text-sm text-muted-foreground font-mono line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <Photographs />

        <About />

        <Footer />
      </div>
    </main>
  );
}
