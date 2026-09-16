"use client";

import Link from "next/link";
import { BarChart3, ChartNoAxesCombined, Sparkles, Layers, BriefcaseBusiness, Factory, Circle } from "lucide-react";
import { allProjects } from "@/lib/projects";

const IconMap = {
  BarChart3,
  ChartNoAxesCombined,
  Sparkles,
  Layers,
  BriefcaseBusiness,
  Factory
};

const Projects = () => {
  // Filter to show ONLY featured projects on the homepage
  const selectedProjects = allProjects.filter(project => project.featured);

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-16 py-8 max-w-[1280px] mx-auto w-full">
      <div className="mb-24">
        <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
          RECENT WORK
        </h2>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 md:gap-y-12 pb-8">
        {selectedProjects.map((project, idx) => {
          const Icon = IconMap[project.icon] || Circle;
          const displayDescription = project.homepageDescription || project.description;
          const displayContributions = project.homepageContributions || project.keyContributions;
          const displayTechnologies = project.homepageTechnologies || project.technologies;

          return (
            <div key={idx} className="flex flex-col gap-8">
              <div className="flex flex-col flex-grow">
                <p className="text-[14px] text-muted-foreground mb-4">
                  {String(idx + 1).padStart(2, '0')}
                </p>
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="w-[18px] h-[18px] text-muted-foreground stroke-[1.5]" />
                  <h3 className="text-[24px] md:text-[28px] tracking-[-0.02em] font-[400] text-foreground uppercase">
                    {project.title}
                  </h3>
                </div>
                <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-8">
                  {project.category}
                </p>
                
                <div className="text-[15px] text-foreground font-[400] leading-[1.7] whitespace-pre-line mb-8 flex-grow max-w-[500px]">
                  {displayDescription}
                </div>
                
                {displayContributions && (
                  <div className="mb-8 max-w-[500px]">
                    <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">CONTRIBUTION</p>
                    <p className="text-[14px] text-foreground font-[400] leading-[1.6]">
                      {displayContributions.join(" · ")}
                    </p>
                  </div>
                )}

                <div className="mb-12 border-t border-border pt-6 max-w-[500px]">
                  <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">STACK</p>
                  <p className="text-[14px] text-foreground font-[400] leading-[1.6]">
                    {displayTechnologies.join(" · ")}
                  </p>
                </div>

                <div>
                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-1 text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1"
                  >
                    View project <span className="transition-transform group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">↗</span>
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="pt-12 border-t border-border flex justify-start">
         <Link
            href="/professionalProjects"
            className="group inline-flex items-center gap-2 px-6 py-2 rounded-full bg-foreground text-background text-[13px] font-[500] hover:scale-105 active:scale-95 transition-all duration-300"
         >
            View all projects
            <span className="transition-transform group-hover:translate-x-1">→</span>
         </Link>
      </div>
    </section>
  );
};

export default Projects;
