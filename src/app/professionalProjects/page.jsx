"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProjectModal from "@/components/layout/ProjectModal";
import { 
  BarChart3, 
  Sparkles, 
  Layers, 
  BriefcaseBusiness, 
  Factory, 
  Circle, 
  ArrowUpRight, 
  CheckCircle2, 
  ArrowLeft,
  Cpu,
  ShieldCheck,
  Award,
  Database
} from "lucide-react";
import { allProjects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

const IconMap = {
  BarChart3,
  Sparkles,
  Layers,
  BriefcaseBusiness,
  Factory
};

// Distinct verified milestone & impact highlights from resume
const highlightMap = {
  "Mission-Critical Analytics & Data Infrastructure": {
    badge: "~80% Latency Drop",
    metric: "2–4s Query Speed",
    categoryKey: "analytics"
  },
  "Internal Analytics AI Operational Agent": {
    badge: "Autonomous MCP",
    metric: "Zero-SQL Triage",
    categoryKey: "ai"
  },
  "Multi-Tenant SaaS Digital Product Catalog Platform": {
    badge: "50+ Enterprise Tenants",
    metric: "40% Faster Builds",
    categoryKey: "saas"
  },
  "Jewelry Manufacturing Management Platform": {
    badge: "PMI Kerala Award 2025",
    metric: "82% Faster Audits",
    categoryKey: "enterprise"
  },
  "Enterprise NetSuite ERP Extension": {
    badge: "28-Day Rapid Delivery",
    metric: "Automated Invoicing",
    categoryKey: "enterprise"
  }
};

const filterTabs = [
  { id: "all", label: "All Systems", count: 5 },
  { id: "analytics", label: "Data & Analytics", count: 1 },
  { id: "saas", label: "Multi-Tenant SaaS", count: 1 },
  { id: "enterprise", label: "Enterprise Workflows", count: 2 },
  { id: "ai", label: "AI & Automation", count: 1 },
];

export default function ProfessionalProjectsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = allProjects.filter((project) => {
    if (activeTab === "all") return true;
    const highlight = highlightMap[project.title];
    return highlight?.categoryKey === activeTab;
  });

  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen flex flex-col bg-transparent relative z-10 transition-colors">
        <Header />
        
        <div className="flex-1 pt-24 md:pt-32 px-6 md:px-12 lg:px-16 pb-24 w-full max-w-[1280px] mx-auto">
          {/* Header & Overview */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12 md:mb-16"
          >
            {/* Back link */}
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-[12px] font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
              <span>Back to Overview // System Index</span>
            </Link>

            <div className="flex items-center gap-3 mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <span className="w-8 h-[1px] bg-border"></span>
              <span>Production Systems Archive // 005 Entries</span>
            </div>

            <h1 className="text-[clamp(32px,4.5vw,56px)] font-[400] tracking-[-0.035em] text-foreground leading-[1.08] mb-4">
              Professional Engineering Systems
            </h1>

            <p className="text-[15px] md:text-[17px] text-muted-foreground font-[300] max-w-[720px] leading-[1.7] mb-8">
              A comprehensive technical archive of multi-tenant SaaS platforms, mission-critical analytics infrastructure, ERP integrations, and autonomous AI operational tooling delivered in production.
            </p>

            {/* Quick Metrics Summary Ribbon */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-border/80 bg-card/40 backdrop-blur-xs max-w-[960px]">
              <div className="flex flex-col gap-0.5">
                <span className="text-[18px] md:text-[20px] font-mono font-medium text-foreground tracking-tight flex items-center gap-1.5">
                  <Database size={15} className="text-muted-foreground" />
                  3+ Years
                </span>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">In Production SaaS</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[18px] md:text-[20px] font-mono font-medium text-foreground tracking-tight flex items-center gap-1.5">
                  <ShieldCheck size={15} className="text-muted-foreground" />
                  50+ Tenants
                </span>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Tenant-Level RLS</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[18px] md:text-[20px] font-mono font-medium text-foreground tracking-tight flex items-center gap-1.5">
                  <Cpu size={15} className="text-muted-foreground" />
                  2–4s Latency
                </span>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Sub-Second Queries</span>
              </div>

              <div className="flex flex-col gap-0.5">
                <span className="text-[18px] md:text-[20px] font-mono font-medium text-foreground tracking-tight flex items-center gap-1.5">
                  <Award size={15} className="text-muted-foreground" />
                  PMI 2025
                </span>
                <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">Kerala Award Winner</span>
              </div>
            </div>
          </motion.div>

          {/* Interactive Category Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-border/80 pb-4">
            {filterTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-mono uppercase tracking-wider transition-all duration-200 ${
                    isActive
                      ? "bg-foreground text-background font-medium shadow-xs"
                      : "bg-muted/40 text-muted-foreground hover:bg-muted hover:text-foreground"
                  }`}
                >
                  <span>{tab.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? "bg-background/20 text-background" : "bg-border text-muted-foreground"
                  }`}>
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Systems Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 pb-12"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, idx) => {
                const Icon = IconMap[project.icon] || Circle;
                const highlight = highlightMap[project.title] || { badge: "Production", metric: "Verified System" };

                return (
                  <motion.div 
                    layout
                    key={project.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="group relative flex flex-col justify-between p-6 sm:p-8 rounded-xl border border-border/80 bg-card/30 hover:bg-card/70 hover:border-foreground/30 transition-all duration-300 shadow-xs hover:shadow-md cursor-pointer"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div>
                      {/* Top Meta Row */}
                      <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-border/60">
                        <div className="flex items-center gap-2.5">
                          <span className="text-[12px] font-mono font-medium text-foreground">
                            {String(idx + 1).padStart(2, '0')} // ARCHIVE
                          </span>
                          <span className="text-border">·</span>
                          <span className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground">
                            {project.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium tracking-wide bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                            {highlight.badge}
                          </span>
                          <span className="text-[10px] font-mono uppercase text-muted-foreground/60 border border-border/50 px-2 py-0.5 rounded-sm">
                            {project.date || "2024"}
                          </span>
                        </div>
                      </div>

                      {/* Title & Icon Header */}
                      <div className="flex items-start gap-3.5 mb-3">
                        <div className="w-8 h-8 rounded-md bg-muted/60 border border-border/60 flex items-center justify-center text-foreground group-hover:scale-105 transition-all duration-300 flex-shrink-0 mt-0.5">
                          <Icon className="w-4 h-4 stroke-[1.75]" />
                        </div>
                        <div>
                          <h2 className="text-xl sm:text-2xl font-[400] text-foreground tracking-[-0.025em] leading-snug group-hover:text-primary transition-colors">
                            {project.title}
                          </h2>
                          {project.architecture && (
                            <p className="text-[11px] font-mono text-muted-foreground mt-1">
                              {project.architecture}
                            </p>
                          )}
                        </div>
                      </div>

                      {/* Narrative Overview */}
                      <p className="text-[14px] text-foreground/85 font-[300] leading-[1.7] mt-3">
                        {project.homepageDescription || project.description.split("\n\n")[0]}
                      </p>

                      {/* Key Architectural Highlights / Contributions */}
                      {project.keyContributions && (
                        <div className="pt-4 border-t border-border/60 my-4 flex flex-col gap-2">
                          <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/80">
                            KEY ARCHITECTURAL HIGHLIGHTS
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                            {project.keyContributions.slice(0, 4).map((contrib, cIdx) => (
                              <div key={cIdx} className="flex items-start gap-1.5 text-[12px] text-foreground/90">
                                <CheckCircle2 size={13} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                                <span className="leading-snug">{contrib}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      {/* Tech Stack Badges */}
                      {project.technologies && (
                        <div className="pt-3 border-t border-border/60 mb-5">
                          <div className="flex flex-wrap gap-1.5">
                            {project.technologies.map((tech, tIdx) => (
                              <span 
                                key={tIdx} 
                                className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/40 hover:bg-muted hover:text-foreground rounded-sm border border-border/50 transition-all duration-150 cursor-default"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Action Bar */}
                      <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                        <span className="text-[11px] font-mono text-muted-foreground flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span>Production Verified</span>
                        </span>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProject(project);
                          }}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-foreground text-background text-[12px] font-medium hover:bg-foreground/90 active:scale-95 transition-all shadow-xs cursor-pointer"
                          title="Inspect complete technical architecture spec"
                        >
                          <span>Inspect Technical Spec</span>
                          <ArrowUpRight size={13} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Technical Specification Dialog Modal */}
        {selectedProject && (
          <ProjectModal
            isOpen={!!selectedProject}
            onClose={() => setSelectedProject(null)}
            title={selectedProject.title}
            description={selectedProject.description}
            workDone={selectedProject.keyContributions || selectedProject.workDone || []}
            technologies={selectedProject.technologies || []}
          />
        )}

        <Footer />
      </div>
    </main>
  );
}
