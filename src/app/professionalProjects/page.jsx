"use client";

import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
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

export default function ProfessionalProjectsPage() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-background">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen flex flex-col bg-background relative z-10 transition-colors">
        <Header />
        
        <div className="flex-1 pt-[120px] md:pt-[140px] lg:pt-[160px] px-6 md:px-12 lg:px-16 pb-16 w-full max-w-[1280px] mx-auto">
          <div className="mb-12 md:mb-16">
             <Link
                href="/"
                className="group inline-flex items-center gap-2 text-[13px] font-[500] text-muted-foreground hover:text-foreground transition-colors mb-8"
              >
                <span className="transition-transform group-hover:-translate-x-1">←</span>
                Back to Home
              </Link>
             <h1 className="text-[32px] md:text-[48px] font-[400] tracking-[-0.02em] text-foreground uppercase">
               Professional Projects
             </h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 md:gap-y-20 pb-8">
            {allProjects.map((project, idx) => {
              const Icon = IconMap[project.icon] || Circle;
              const displayDescription = project.description;
              const displayContributions = project.keyContributions;
              const displayTechnologies = project.technologies;

              return (
                <div key={idx} className="flex flex-col gap-6 md:gap-8">
                  <div className="flex flex-col flex-grow">
                    <p className="text-[13px] md:text-[14px] text-muted-foreground mb-3 md:mb-4">
                      {String(idx + 1).padStart(2, '0')}
                    </p>
                    <div className="flex items-center gap-2 md:gap-3 mb-2">
                      <Icon className="w-[16px] h-[16px] md:w-[18px] md:h-[18px] text-muted-foreground stroke-[1.5]" />
                      <h3 className="text-[22px] md:text-[28px] tracking-[-0.02em] font-[400] text-foreground uppercase">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-[10px] md:text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-6 md:mb-8">
                      {project.category}
                    </p>
                    
                    <div className="text-[14px] md:text-[15px] text-foreground font-[400] leading-[1.6] md:leading-[1.7] whitespace-pre-line mb-6 md:mb-8 flex-grow max-w-[500px]">
                      {displayDescription}
                    </div>
                    
                    {displayContributions && (
                      <div className="mb-6 md:mb-8 max-w-[500px]">
                        <p className="text-[10px] md:text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">CONTRIBUTION</p>
                        <p className="text-[13px] md:text-[14px] text-foreground font-[400] leading-[1.6]">
                          {displayContributions.join(" · ")}
                        </p>
                      </div>
                    )}

                    <div className="mb-8 md:mb-12 border-t border-border pt-4 md:pt-6 max-w-[500px]">
                      <p className="text-[10px] md:text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">STACK</p>
                      <p className="text-[13px] md:text-[14px] text-foreground font-[400] leading-[1.6]">
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

        </div>

        <Footer />
      </div>
    </main>
  );
}
