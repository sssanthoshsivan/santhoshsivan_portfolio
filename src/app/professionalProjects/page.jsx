"use client"

import React from "react"
import Link from "next/link"
import { BarChart3, ChartNoAxesCombined, Sparkles, Layers, BriefcaseBusiness, Factory, Circle } from "lucide-react"
import Header from "@/components/layout/Header"
import Footer from "@/components/layout/Footer"
import { allProjects } from "@/lib/projects"

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
      <div className="mx-auto min-h-screen bg-background relative z-10 transition-colors">
        <Header />

        {/* Page intro */}
        <section className="px-6 md:px-12 lg:px-16 pt-[20vh] pb-16 max-w-[1280px] mx-auto w-full">
          <header className="mb-20 max-w-[800px]">
            <p className="text-[12px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-6">
              ALL WORK
            </p>
            <h1 className="text-[clamp(42px,6vw,82px)] font-[400] tracking-[-0.045em] leading-[0.98] text-foreground mb-8">
              Selected Projects
            </h1>
            <p className="text-[15px] md:text-[17px] text-muted-foreground leading-[1.7] font-[400] max-w-[600px]">
              A complete collection of selected professional and personal projects spanning SaaS platforms, internal tools, and system architecture.
            </p>
          </header>
        </section>

        {/* Projects grid */}
        <section className="px-6 md:px-12 lg:px-16 pb-32 max-w-[1280px] mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-24 md:gap-y-32">
            {allProjects.map((project, idx) => {
              const Icon = IconMap[project.icon] || Circle;
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
                      {project.category || project.type}
                    </p>
                    
                    <div className="text-[15px] text-foreground font-[400] leading-[1.7] whitespace-pre-line mb-8 flex-grow max-w-[500px]">
                      {project.description}
                    </div>
                    
                    {project.keyContributions && (
                      <div className="mb-8 max-w-[500px]">
                        <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">CONTRIBUTION</p>
                        <p className="text-[14px] text-foreground font-[400] leading-[1.6]">
                          {project.keyContributions.join(" · ")}
                        </p>
                      </div>
                    )}

                    <div className="mb-12 border-t border-border pt-6 max-w-[500px]">
                      <p className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2">STACK</p>
                      <p className="text-[14px] text-foreground font-[400] leading-[1.6]">
                        {project.technologies.join(" · ")}
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
        </section>

        <Footer />
      </div>
    </main>
  )
}
