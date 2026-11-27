"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectModal from "@/components/layout/ProjectModal";
import { ArrowUpRight, CheckCircle2, ArrowLeft } from "lucide-react";
import { allProjects } from "@/lib/projects";
import { motion } from "framer-motion";

const filterTabs = [
  { id: "all", label: "All Projects", count: allProjects.length },
  {
    id: "featured",
    label: "Flagship",
    count: allProjects.filter((p) => p.featured).length,
  },
  {
    id: "data",
    label: "Analytics & Data",
    count: allProjects.filter((p) => p.filterGroup === "data").length,
  },
  {
    id: "ai",
    label: "AI Tooling",
    count: allProjects.filter((p) => p.filterGroup === "ai").length,
  },
  {
    id: "saas",
    label: "SaaS & Enterprise",
    count: allProjects.filter((p) => p.filterGroup === "saas").length,
  },
];

const summaryMetrics = [
  { value: "3+ Years", label: "Production software engineering" },
  { value: "50+ Tenants", label: "Multi-tenant SaaS isolation" },
  { value: "2–4s Weekly", label: "Observed Superset queries" },
  { value: "PMI 2025", label: "Kerala Manufacturing Award" },
];

export default function ProfessionalProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = allProjects.filter((project) => {
    if (activeTab === "all") return true;
    if (activeTab === "featured") return project.featured;
    return project.filterGroup === activeTab;
  });

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent">
      <div className="mx-auto max-w-[1440px] min-h-screen flex flex-col bg-transparent relative z-10">
        <Header />

        <div className="flex-1 pt-16 md:pt-24 px-6 md:px-12 lg:px-16 pb-24 w-full max-w-[1280px] mx-auto">
          {/* Header & Overview */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10 md:mb-12"
          >
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-[14px] font-medium text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft
                size={15}
                className="transition-transform group-hover:-translate-x-1"
                aria-hidden="true"
              />
              <span>Back to overview</span>
            </Link>

            <h1 className="text-[clamp(28px,4vw,48px)] font-[400] tracking-[-0.03em] text-foreground leading-[1.1] mb-4">
              Selected Projects
            </h1>

            <p className="text-[16px] md:text-[17px] text-muted-foreground font-[400] max-w-[66ch] leading-[1.65] mb-8">
              Five production and active engineering systems across multi-tenant SaaS, analytics infrastructure modernization, enterprise ERP workflows, and internal AI tooling.
            </p>

            {/* Summary Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-[960px]">
              {summaryMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="p-4 rounded-xl bg-card flex flex-col gap-1"
                >
                  <span className="text-[18px] md:text-[20px] font-mono font-medium text-foreground tabular-nums tracking-[-0.02em]">
                    {metric.value}
                  </span>
                  <span className="text-[13px] text-muted-foreground leading-snug">
                    {metric.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter Tabs (Same pattern as homepage) */}
          <div className="mb-10 flex items-center justify-between flex-wrap gap-4">
            <div
              className="flex flex-wrap items-center gap-1.5 p-1.5 bg-card rounded-lg"
              role="tablist"
              aria-label="Filter projects by domain"
            >
              {filterTabs.map((tab) => {
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex items-center gap-2 px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                      isActive
                        ? "bg-foreground text-background"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <span>{tab.label}</span>
                    <span
                      className={`text-[13px] tabular-nums ${
                        isActive ? "text-background/80" : "text-muted-foreground"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Uniform Editorial Project Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-8">
            {filteredProjects.map((project, idx) => {
              const isOngoing =
                project.slug === "internal-analytics-ai-assistant";

              return (
                <motion.article
                  id={project.slug}
                  key={project.slug}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => setSelectedProject(project)}
                  className="scroll-mt-28 flex flex-col justify-between p-6 md:p-8 rounded-xl bg-card/75 hover:bg-card transition-colors cursor-pointer"
                >
                  <div className="flex flex-col gap-4">
                    {/* Title & Company/Timeline */}
                    <div>
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                        <span className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground">
                          {project.company} · {project.date}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-[12px] font-mono text-muted-foreground">
                          <span
                            className={`w-2 h-2 rounded-full ${
                              isOngoing ? "bg-amber-500" : "bg-emerald-500"
                            }`}
                            aria-hidden="true"
                          />
                          <span>
                            {isOngoing
                              ? "Ongoing development"
                              : "Production system"}
                          </span>
                        </span>
                      </div>

                      <h2 className="text-[22px] md:text-[26px] font-[450] tracking-[-0.025em] text-foreground leading-[1.2]">
                        {project.title}
                      </h2>

                      {project.highlight && (
                        <p className="text-[13px] font-medium text-emerald-700 dark:text-emerald-400 mt-1.5">
                          {project.highlight}
                        </p>
                      )}
                    </div>

                    {/* Overview */}
                    <p className="text-[15px] text-foreground/90 leading-[1.65]">
                      {project.homepageDescription}
                    </p>

                    {/* Optional Architecture Summary */}
                    {project.architecture && (
                      <div className="p-3.5 rounded-lg bg-background text-[12px] font-mono text-muted-foreground leading-[1.5]">
                        <span className="font-semibold text-foreground">
                          Architecture:
                        </span>{" "}
                        {project.architecture}
                      </div>
                    )}

                    {/* Key Contributions */}
                    {project.keyContributions && (
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                        {project.keyContributions
                          .slice(0, 4)
                          .map((contrib, cIdx) => (
                            <li
                              key={cIdx}
                              className="flex items-start gap-2 text-[14px] text-foreground/85 leading-[1.5]"
                            >
                              <CheckCircle2
                                size={15}
                                className="text-foreground/70 flex-shrink-0 mt-1"
                                aria-hidden="true"
                              />
                              <span>{contrib}</span>
                            </li>
                          ))}
                      </ul>
                    )}
                  </div>

                  {/* Tech Stack & Action */}
                  <div className="flex flex-col gap-5 pt-6">
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 text-[12px] font-mono text-foreground/85 bg-background rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedProject(project);
                        }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:bg-foreground/90 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50"
                      >
                        <span>Inspect Technical Spec</span>
                        <ArrowUpRight size={15} aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Technical Specification Dialog Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            company={selectedProject.company}
            date={selectedProject.date}
            highlight={selectedProject.highlight}
            architecture={selectedProject.architecture}
            description={selectedProject.description}
            workDone={
              selectedProject.keyContributions || selectedProject.workDone || []
            }
            technologies={selectedProject.technologies || []}
            benchmarks={selectedProject.benchmarks}
          />
        )}

        <Footer />
      </div>
    </main>
  );
}
