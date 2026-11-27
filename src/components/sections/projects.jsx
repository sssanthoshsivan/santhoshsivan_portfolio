"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { allProjects } from "@/lib/projects";
import { motion } from "framer-motion";
import ProjectModal from "@/components/layout/ProjectModal";

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "featured", label: "Flagship" },
  { id: "data", label: "Analytics & Data" },
  { id: "ai", label: "AI Tooling" },
  { id: "saas", label: "SaaS & Enterprise" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const analyticsProject = allProjects.find(
    (p) => p.slug === "analytics-infrastructure-modernization"
  );
  const aiProject = allProjects.find(
    (p) => p.slug === "internal-analytics-ai-assistant"
  );
  const listProjects = allProjects.filter((p) => !p.featured);

  const showAnalytics =
    activeTab === "all" || activeTab === "featured" || activeTab === "data";
  const showAI =
    activeTab === "all" || activeTab === "featured" || activeTab === "ai";
  const showList = activeTab === "all" || activeTab === "saas";

  return (
    <section
      id="projects"
      className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full"
    >
      {/* Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <h2 className="text-[28px] md:text-[36px] font-[400] tracking-[-0.03em] leading-[1.15] text-foreground">
            Selected Projects
          </h2>
          <p className="text-[15px] text-muted-foreground max-w-[540px] leading-[1.6]">
            Five production and active engineering systems across multi-tenant SaaS, analytics modernization, ERP integrations, and internal AI workflows.
          </p>
        </motion.div>

        <div
          className="flex flex-wrap items-center gap-1.5 p-1.5 bg-card rounded-lg"
          role="tablist"
          aria-label="Filter projects by domain"
        >
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
                className={`px-3.5 py-2 text-[13px] font-medium rounded-md transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40 ${
                  isActive
                    ? "text-background bg-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 1. Analytics Infrastructure Modernization (Flagship) */}
      {showAnalytics && analyticsProject && (
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 p-6 md:p-10 rounded-xl bg-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Narrative & Contributions */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div>
                <h3 className="text-[24px] md:text-[30px] font-[450] tracking-[-0.025em] text-foreground leading-[1.2]">
                  {analyticsProject.title}
                </h3>
                <p className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground mt-2">
                  {analyticsProject.company} · {analyticsProject.date}
                </p>
              </div>

              <p className="text-[16px] text-foreground leading-[1.65] max-w-[62ch]">
                {analyticsProject.homepageDescription}
              </p>

              {/* Individual Contributions */}
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {analyticsProject.homepageContributions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[14px] text-foreground/85 leading-[1.5]"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-foreground/70 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Labels */}
              <div className="flex flex-wrap gap-2 pt-2">
                {analyticsProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[12px] font-mono text-foreground/85 bg-background rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(analyticsProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:bg-foreground/90 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2"
                >
                  <span>Inspect Technical Spec</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right: Verified Benchmarks & Architecture Scope */}
            <div className="lg:col-span-5 p-6 rounded-lg bg-background flex flex-col gap-5">
              <div>
                <h4 className="text-[14px] font-medium text-foreground mb-3">
                  Observed reporting benchmarks
                </h4>
                <div className="grid grid-cols-3 gap-2.5">
                  {analyticsProject.benchmarks.map((item) => (
                    <div
                      key={item.label}
                      className="p-3 rounded-md bg-card"
                    >
                      <div className="text-[12px] font-mono text-muted-foreground leading-tight whitespace-nowrap">
                        {item.label.replace(" reports", "")}
                      </div>
                      <div className="text-[15px] font-mono font-medium text-foreground tabular-nums mt-1 whitespace-nowrap">
                        {item.value.replace(" seconds", "s")}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-2.5 pt-1">
                <h4 className="text-[14px] font-medium text-foreground">
                  Architecture &amp; ownership
                </h4>
                <div className="flex flex-wrap items-center gap-1.5 text-[12px] font-mono text-foreground">
                  <span className="px-2.5 py-1 rounded-md bg-card">RDS</span>
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-card">DMS</span>
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-card">Snowflake</span>
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-foreground text-background">Superset</span>
                  <span className="text-muted-foreground" aria-hidden="true">→</span>
                  <span className="px-2.5 py-1 rounded-md bg-foreground text-background">Portal</span>
                </div>
                <p className="text-[13px] text-muted-foreground leading-[1.6]">
                  Team maintains core RDS → DMS → Snowflake ingestion; my focus covered Superset migration, portal embedding, SSO/guest tokens, tenant RLS, and saved views.
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* 2. Internal Analytics AI Assistant (Flagship) */}
      {showAI && aiProject && (
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 p-6 md:p-10 rounded-xl bg-card"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left: Narrative */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div>
                <h3 className="text-[24px] md:text-[30px] font-[450] tracking-[-0.025em] text-foreground leading-[1.2]">
                  {aiProject.title}
                </h3>
                <p className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground mt-2">
                  {aiProject.company} · {aiProject.date}
                </p>
              </div>

              <p className="text-[16px] text-foreground leading-[1.65] max-w-[62ch]">
                {aiProject.homepageDescription}
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {aiProject.homepageContributions.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[14px] text-foreground/85 leading-[1.5]"
                  >
                    <CheckCircle2
                      size={15}
                      className="text-foreground/70 flex-shrink-0 mt-1"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 pt-2">
                {aiProject.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 text-[12px] font-mono text-foreground/85 bg-background rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedProject(aiProject)}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-[14px] font-medium hover:bg-foreground/90 transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/50 focus-visible:ring-offset-2"
                >
                  <span>Inspect Technical Spec</span>
                  <ArrowUpRight size={15} aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Right: Implemented vs Ongoing Scope */}
            <div className="lg:col-span-5 p-6 rounded-lg bg-background flex flex-col gap-5">
              <div className="flex items-center justify-between gap-3">
                <h4 className="text-[14px] font-medium text-foreground">
                  Implemented capabilities
                </h4>
                <span className="px-2.5 py-1 rounded-md bg-card text-[12px] font-mono text-muted-foreground">
                  Active development
                </span>
              </div>

              <ul className="space-y-2.5 text-[14px] text-foreground/85 leading-[1.55]">
                {aiProject.implementedCapabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-muted-foreground mt-0.5" aria-hidden="true">•</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>

              <div className="p-3.5 rounded-md bg-card">
                <h4 className="text-[13px] font-medium text-foreground mb-1">
                  Ongoing scope
                </h4>
                <p className="text-[13px] text-muted-foreground leading-[1.6]">
                  {aiProject.ongoingWork}
                </p>
              </div>
            </div>
          </div>
        </motion.article>
      )}

      {/* 3, 4, 5: Structured Editorial Rows (Distinct from flagship split cards) */}
      {showList && (
        <div className="flex flex-col gap-4">
          {listProjects.map((project, idx) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: idx * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="p-6 md:p-8 rounded-xl bg-card/65 hover:bg-card transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
                {/* Identity & Verified Outcome */}
                <div className="lg:col-span-4 flex flex-col gap-2">
                  <h3 className="text-[20px] md:text-[22px] font-[450] tracking-[-0.02em] text-foreground leading-[1.25]">
                    {project.title}
                  </h3>
                  <p className="text-[12px] font-mono uppercase tracking-wider text-muted-foreground">
                    {project.company} · {project.date}
                  </p>
                  <p className="text-[13px] font-medium text-emerald-700 dark:text-emerald-400 leading-[1.45] pt-0.5">
                    {project.highlight}
                  </p>
                </div>

                {/* Business Description, Contribution & Technologies */}
                <div className="lg:col-span-6 flex flex-col gap-3">
                  <p className="text-[15px] text-foreground leading-[1.65]">
                    {project.homepageDescription}
                  </p>
                  <p className="text-[14px] text-muted-foreground leading-[1.6]">
                    <span className="font-medium text-foreground">Contribution:</span>{" "}
                    {project.homepageContribution}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 text-[12px] font-mono text-foreground/85 bg-background rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Spec Popup Trigger */}
                <div className="lg:col-span-2 flex lg:justify-end items-start">
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-1.5 py-2 text-[14px] font-medium text-foreground hover:opacity-70 transition-opacity cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
                  >
                    <span>Inspect Technical Spec</span>
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      )}

      <div className="flex justify-start md:justify-center pt-10">
        <Link
          href="/professionalProjects"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-card text-[14px] font-medium text-foreground hover:bg-foreground hover:text-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/40"
        >
          <span>View all {allProjects.length} case studies</span>
          <ArrowUpRight size={15} aria-hidden="true" />
        </Link>
      </div>

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
          workDone={selectedProject.keyContributions || []}
          technologies={selectedProject.technologies || []}
          benchmarks={selectedProject.benchmarks}
        />
      )}
    </section>
  );
};

export default Projects;
