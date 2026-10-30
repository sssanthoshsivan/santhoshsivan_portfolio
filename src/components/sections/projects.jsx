"use client";

import { useState } from "react";
import Link from "next/link";
import { BarChart3, ChartNoAxesCombined, Sparkles, Layers, BriefcaseBusiness, Factory, Circle, ArrowUpRight, Terminal, Cpu, Database, CheckCircle2 } from "lucide-react";
import { allProjects } from "@/lib/projects";
import { motion, AnimatePresence } from "framer-motion";

const IconMap = {
  BarChart3,
  ChartNoAxesCombined,
  Sparkles,
  Layers,
  BriefcaseBusiness,
  Factory
};

const CATEGORIES = [
  { id: "all", label: "All Systems" },
  { id: "featured", label: "Featured Case Studies" },
  { id: "data", label: "Analytics & Data" },
  { id: "ai", label: "AI & Internal Tools" },
  { id: "saas", label: "SaaS Architecture" },
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = allProjects.filter(project => {
    if (activeTab === "all") return true;
    if (activeTab === "featured") return project.featured;
    if (activeTab === "data") return project.category.includes("REPORTING") || project.technologies.includes("Apache Superset");
    if (activeTab === "ai") return project.category.includes("AI") || project.technologies.includes("Google AI");
    if (activeTab === "saas") return project.category.includes("SYSTEM") || project.category.includes("OPERATIONS") || project.category.includes("WORKFLOW");
    return true;
  });

  return (
    <section id="projects" className="px-6 md:px-12 lg:px-16 py-12 md:py-20 max-w-[1280px] mx-auto w-full border-t border-border/80">
      {/* Header & Category Filters */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-2"
        >
          <div className="flex items-center gap-2">
            <span className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground font-[500]">
              PRODUCTION SYSTEMS & CASE STUDIES
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-beacon" />
          </div>
          <h2 className="text-[28px] md:text-[36px] font-[400] tracking-[-0.03em] text-foreground uppercase">
            Architected & Delivered
          </h2>
        </motion.div>

        {/* User-friendly Domain Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-muted/40 rounded-lg border border-border/60">
          {CATEGORIES.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3 py-1.5 text-[12px] font-medium rounded-md transition-all duration-200 ${
                  isActive 
                    ? "text-foreground bg-background shadow-xs font-semibold" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Flagship Case Study 1: Analytics & Reporting Platform */}
      {(activeTab === "all" || activeTab === "featured" || activeTab === "data") && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-6 md:p-8 rounded-xl border border-border/80 bg-muted/10 hover:border-border transition-colors group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Story & Context */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-xs bg-muted text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                  FLAGSHIP SYSTEM
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">RUNLOYAL · 2024</span>
              </div>

              <h3 className="text-[24px] md:text-[30px] font-[400] tracking-[-0.025em] text-foreground">
                Mission-Critical Analytics & Data Infrastructure
              </h3>

              <p className="text-[14px] md:text-[15px] text-foreground/80 leading-[1.7] max-w-[620px]">
                Architected an enterprise data platform transitioning mission-critical analytics from legacy monolithic bottlenecks into an isolated, high-performance data architecture. Designed tenant-aware Row-Level Security (RLS) for 50+ enterprise tenants, guest-token authentication, Saved Views APIs, and sub-second operational dashboards across financial, appointment, and revenue streams.
              </p>

              {/* Contributions list */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-2">
                {["Analytics Architecture", "Tenant-Isolated RLS", "Financial & Ops Telemetry", "Guest Token Auth", "Saved Views API", "Query Optimization"].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-[12px] text-muted-foreground">
                    <CheckCircle2 size={13} className="text-foreground/70 flex-shrink-0" />
                    <span className="truncate">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-3">
                <Link
                  href="/professionalProjects"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background text-[12px] font-medium hover:scale-105 active:scale-95 transition-all shadow-xs"
                >
                  <span>Read Full Technical Case Study</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>

            {/* Architecture & Performance Benchmark Widget */}
            <div className="lg:col-span-5 p-5 rounded-lg border border-border/80 bg-background/80 shadow-xs flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-border/60 pb-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground flex items-center gap-1.5">
                  <Cpu size={14} className="text-foreground" />
                  LATENCY BENCHMARK
                </span>
                <span className="text-[10px] font-mono text-emerald-600 bg-emerald-500/10 px-2 py-0.5 rounded-full font-semibold">
                  ~80% FASTER
                </span>
              </div>

              {/* Benchmark Bars */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-muted-foreground">Legacy myDBR (Weekly):</span>
                    <span className="text-red-500/80 font-medium">35s+ latency</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-full h-full bg-red-400/60 rounded-full" />
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-foreground font-medium">Apache Superset (Modernized):</span>
                    <span className="text-emerald-600 font-bold">2–4s response</span>
                  </div>
                  <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                    <div className="w-[12%] h-full bg-emerald-500 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Architecture Blueprint Pills */}
              <div className="pt-2 border-t border-border/60 flex flex-col gap-1.5">
                <span className="text-[10px] font-mono text-muted-foreground uppercase">Data Flow & Security</span>
                <div className="flex flex-wrap gap-1 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded-xs bg-muted text-foreground">Client App</span>
                  <span className="text-muted-foreground self-center">→</span>
                  <span className="px-2 py-0.5 rounded-xs bg-muted text-foreground">Guest Token</span>
                  <span className="text-muted-foreground self-center">→</span>
                  <span className="px-2 py-0.5 rounded-xs bg-muted text-foreground">RLS Filter</span>
                  <span className="text-muted-foreground self-center">→</span>
                  <span className="px-2 py-0.5 rounded-xs bg-muted text-foreground">Snowflake</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Flagship Case Study 2: Internal Analytics AI Assistant */}
      {(activeTab === "all" || activeTab === "featured" || activeTab === "ai") && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 p-6 md:p-8 rounded-xl border border-border/80 bg-muted/10 hover:border-border transition-colors group"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Live Terminal / Prompt Demo Box */}
            <div className="lg:col-span-5 p-5 rounded-lg border border-border/80 bg-background font-mono text-xs shadow-xs flex flex-col gap-3 order-2 lg:order-1">
              <div className="flex items-center justify-between border-b border-border/60 pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-400" />
                  <span className="text-[10px] text-muted-foreground ml-2">superset-mcp // debug_session</span>
                </div>
                <span className="text-[9px] text-emerald-600 bg-emerald-500/10 px-1.5 py-0.5 rounded-xs">CONNECTED</span>
              </div>

              <div className="flex flex-col gap-2 text-[11px] leading-relaxed">
                <div className="text-muted-foreground">
                  <span className="text-foreground font-bold">&gt;</span> Prompt: "Investigate reporting anomaly in tenant #418"
                </div>
                <div className="text-foreground/70 pl-2 border-l border-border">
                  [MCP Tool: Superset.InspectChart] executing query...
                </div>
                <div className="p-2 rounded-xs bg-muted/50 text-[10px] text-foreground">
                  ✓ Found 3 mismatched aggregated filters in Saved View schema.<br />
                  ✓ Generated corrective SQL stored procedure.
                </div>
              </div>
            </div>

            {/* Story & Context */}
            <div className="lg:col-span-7 flex flex-col gap-4 order-1 lg:order-2">
              <div className="flex items-center gap-3">
                <span className="px-2.5 py-0.5 rounded-xs bg-muted text-[10px] font-mono font-semibold uppercase tracking-wider text-muted-foreground">
                  AI TOOLING
                </span>
                <span className="text-[11px] font-mono text-muted-foreground">RUNLOYAL · 2024</span>
              </div>

              <h3 className="text-[24px] md:text-[30px] font-[400] tracking-[-0.025em] text-foreground">
                Internal Analytics AI Operational Agent
              </h3>

              <p className="text-[14px] md:text-[15px] text-foreground/80 leading-[1.7] max-w-[620px]">
                Engineered an internal AI agent that enables support and non-technical teams to investigate complex data anomalies, inspect telemetry pipelines, and triage production data tickets using natural language without writing manual SQL.
              </p>

              <div className="flex flex-wrap gap-2 pt-1">
                {["AI MCPs", "Google AI API", "LangChain", "Next.js", "Autonomous Tool Calling"].map((tech, i) => (
                  <span key={i} className="px-2 py-0.5 text-[11px] font-mono text-muted-foreground bg-muted/50 rounded-sm border border-border/50">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href="/professionalProjects"
                  className="inline-flex items-center gap-2 text-[13px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
                >
                  <span>Inspect AI Architecture</span>
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* Additional Engineering Systems Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        {filteredProjects
          .filter(p => !p.featured || (activeTab !== "all" && activeTab !== "featured"))
          .map((project, idx) => {
            const Icon = IconMap[project.icon] || Circle;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col p-6 rounded-lg border border-border/70 bg-card hover:bg-muted/30 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded-md bg-muted/60 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                    <Icon size={16} />
                  </div>
                  <span className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider">
                    {project.date}
                  </span>
                </div>

                <h4 className="text-[18px] font-[400] text-foreground mb-2 group-hover:translate-x-0.5 transition-transform">
                  {project.title}
                </h4>

                <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground mb-4">
                  {project.category}
                </p>

                <p className="text-[13px] text-muted-foreground leading-relaxed flex-1 mb-6">
                  {project.homepageDescription || project.description.split("\n\n")[0]}
                </p>

                <div className="pt-4 border-t border-border/60 flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span key={tIdx} className="px-2 py-0.5 text-[10px] font-mono text-muted-foreground bg-muted/50 rounded-xs">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.href}
                  className="inline-flex items-center gap-1.5 text-[12px] font-medium text-foreground group-hover:text-primary transition-colors"
                >
                  <span>View Details</span>
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </motion.div>
            );
          })}
      </div>

      <div className="flex justify-center pt-10">
        <Link
          href="/professionalProjects"
          className="group inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border hover:border-foreground text-[12px] font-mono uppercase tracking-wider transition-all"
        >
          <span>View Complete Architecture Index ({allProjects.length} Projects)</span>
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
