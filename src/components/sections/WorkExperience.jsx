"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

function WorkExperience() {
  const [selectedExp, setSelectedExp] = useState(0)

  const experiences = [
    {
      id: "runloyal",
      period: "2024 — PRESENT",
      isCurrent: true,
      company: "RunLoyal",
      title: "Full Stack Engineer",
      roleType: "Full-Time · Multi-Tenant SaaS & Mission-Critical Analytics",
      stats: [
        { label: "Query Latency", value: "2–4s", note: "Down from ~35s+ on legacy myDBR" },
        { label: "Multi-Tenancy", value: "50+ Tenants", note: "Row-Level Security isolated" },
        { label: "Core Systems", value: "Analytics + AI MCPs", note: "Mission-critical operational data" },
      ],
      skills: [
        "Full Stack Engineering",
        "Analytics Infrastructure",
        "PostgreSQL",
        "SQL Query Optimization",
        "Row-Level Security (RLS)",
        "SSO & RBAC",
        "AI Tooling (MCP)"
      ],
      bullets: [
        "Architected migration of business-critical analytics pipelines from legacy architecture to modern distributed analytics, slashing average query response latency to 2–4s for weekly data, 6–8s for monthly, and ~10s for multi-year rollups.",
        "Engineered mission-critical operational dashboards aggregating distributed API telemetry with persistent layout serialization and tenant-isolated Row-Level Security (RLS).",
        "Investigated and resolved single sign-on (SSO) access vulnerabilities, data isolation boundaries, and production latency bottlenecks across enterprise customer workflows.",
        "Built internal AI tooling utilizing the Model Context Protocol (MCP) to allow natural-language conversational queries directly into SQL & operational analytics."
      ],
      description: "Spearheading customer-facing SaaS feature development, mission-critical analytics infrastructure, and AI-assisted operational workflows.",
    },
    {
      id: "jobin-jismi",
      period: "2021 — 2024",
      isCurrent: false,
      company: "Jobin & Jismi",
      title: "Full Stack Engineer",
      roleType: "Full-Time · Enterprise Solutions & SaaS",
      stats: [
        { label: "Reconciliation", value: "82% Faster", note: "PMI Kerala Award 2025 winner" },
        { label: "ERP Extension", value: "28 Days", note: "Rapid enterprise NetSuite delivery" },
        { label: "Ephemeral TTL", value: "24h Expiry", note: "Automated Redis memory clearing" },
      ],
      skills: [
        "SaaS Architecture",
        "Next.js / TypeScript",
        "NestJS Microservices",
        "PostgreSQL & Redis",
        "NetSuite ERP",
        "Role-Based Access"
      ],
      bullets: [
        "Built a sales-driven B2B SaaS platform supporting shareable digital catalog-to-approval workflows with granular multi-tier role authorization.",
        "Engineered an ephemeral album-sharing architecture utilizing Redis TTL keys for automatic 24-hour expiration, eliminating manual media cleanup overhead.",
        "Delivered an enterprise-grade NetSuite ERP extension within an aggressive 28-day timeline, driving immediate customer adoption.",
        "Led Next.js + TypeScript frontend engineering, standardizing reusable component libraries, multi-step asynchronous forms, and end-to-end type safety."
      ],
      description: "Architected and delivered mission-critical business platforms, microservices, and enterprise integrations across varied industrial domains.",
    }
  ];

  const expertise = [
    {
      category: "FRONTEND & UI",
      skills: "React · Next.js · TypeScript · Vue · Tailwind CSS · Zustand · Redux",
      note: "Component ergonomics, SSR, client performance"
    },
    {
      category: "BACKEND & APIS",
      skills: "Node.js · NestJS · Express · RESTful APIs · Microservices",
      note: "Asynchronous handlers, RBAC, auth middleware"
    },
    {
      category: "DATA & STORAGE",
      skills: "PostgreSQL · MySQL · Redis · Analytics & BI · SQL Tuning",
      note: "Sub-second reporting, caching, multi-tenant RLS"
    },
    {
      category: "ARCHITECTURE & AI",
      skills: "AI MCPs · Multi-Tenancy & RLS · Docker · CI/CD · Vercel",
      note: "Tool-calling agents, container parity, deployment"
    }
  ];

  const achievements = [
    {
      category: "INDUSTRY AWARD / 2025",
      title: "Winner – PMI Kerala Award 2025",
      description: "Recognized for developing a jewelry manufacturing platform achieving 82% faster reconciliation and 100% material traceability across production workflows."
    },
    {
      category: "DELIVERY MILESTONE",
      title: "Enterprise NetSuite ERP Extension",
      description: "Delivered an enterprise-grade extension within an aggressive 28-day timeline, ensuring rapid client adoption and integration with zero regressions."
    }
  ];

  return (
    <>
      {/* Career Track & Experience Section */}
      <section id="experience" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full border-t border-border">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <h2 className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground font-[500] flex items-center gap-2 mb-2">
              <span>CAREER TRACK</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-foreground/70 font-mono text-[10px]">PRODUCTION EXPERIENCE</span>
            </h2>
            <h3 className="text-[clamp(24px,3vw,34px)] font-[400] tracking-[-0.025em] text-foreground">
              Systems Built In Production
            </h3>
          </div>
          <p className="text-[13px] md:text-[14px] text-muted-foreground font-mono max-w-[360px]">
            3+ years architecting scalable SaaS, mission-critical analytics infrastructure, and performant web applications.
          </p>
        </motion.div>

        {/* Interactive Experience Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Company Selector & Timeline Rail */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {experiences.map((exp, idx) => {
              const isSelected = selectedExp === idx;
              return (
                <button
                  key={exp.id}
                  onClick={() => setSelectedExp(idx)}
                  className={`group relative text-left p-5 rounded-lg border transition-all duration-200 ${
                    isSelected 
                      ? "bg-card border-foreground/30 shadow-sm" 
                      : "bg-muted/10 border-border/60 hover:border-border hover:bg-muted/20"
                  }`}
                  aria-selected={isSelected}
                >
                  {/* Active Indicator Bar */}
                  {isSelected && (
                    <motion.div 
                      layoutId="exp-active-indicator"
                      className="absolute left-0 top-3 bottom-3 w-1 bg-foreground rounded-r"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground">
                      {exp.period}
                    </span>
                    {exp.isCurrent && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        ACTIVE
                      </span>
                    )}
                  </div>

                  <h4 className="text-[20px] font-[500] text-foreground mb-1 group-hover:translate-x-0.5 transition-transform">
                    {exp.company}
                  </h4>
                  <p className="text-[13px] text-muted-foreground font-medium mb-3">
                    {exp.title}
                  </p>

                  <div className="text-[11px] font-mono text-muted-foreground/80 line-clamp-1">
                    {exp.roleType}
                  </div>
                </button>
              );
            })}

            {/* Quick Context Callout */}
            <div className="p-4 rounded-lg border border-dashed border-border/80 bg-muted/10 text-[12px] text-muted-foreground leading-[1.6]">
              <span className="font-semibold text-foreground">Role Focus:</span> End-to-end full stack ownership spanning UI ergonomics, distributed SQL query performance, and AI-assisted workflows.
            </div>
          </div>

          {/* Right Column: Detailed Impact Deep-Dive */}
          <div className="lg:col-span-8">
            <AnimatePresence mode="wait">
              {(() => {
                const current = experiences[selectedExp];
                return (
                  <motion.div
                    key={current.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                    className="p-6 md:p-8 rounded-xl border border-border bg-card/60 relative overflow-hidden"
                  >
                    {/* Role Header */}
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-6 border-b border-border/70 mb-6">
                      <div>
                        <div className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider mb-1">
                          {current.period} · {current.roleType}
                        </div>
                        <h3 className="text-[24px] md:text-[28px] font-[500] text-foreground tracking-tight">
                          {current.title} <span className="text-muted-foreground font-[400]">@ {current.company}</span>
                        </h3>
                      </div>
                    </div>

                    {/* Quantified Production Impact Numbers */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
                      {current.stats.map((stat, i) => (
                        <div key={i} className="p-3.5 rounded-lg border border-border/60 bg-muted/20">
                          <div className="text-[10px] font-mono uppercase text-muted-foreground tracking-wider mb-1">
                            {stat.label}
                          </div>
                          <div className="text-[20px] font-[600] text-foreground tracking-tight font-mono">
                            {stat.value}
                          </div>
                          <div className="text-[11px] text-muted-foreground/90 mt-0.5 leading-snug">
                            {stat.note}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Summary Paragraph */}
                    <p className="text-[15px] text-foreground/90 leading-[1.75] mb-6 font-[400]">
                      {current.description}
                    </p>

                    {/* Engineering Impact Bullets */}
                    <div className="space-y-3.5 mb-8">
                      <div className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground">
                        Key Engineering Responsibilities & Outcomes
                      </div>
                      <ul className="space-y-3">
                        {current.bullets.map((bullet, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-[14px] text-foreground/80 leading-[1.65]">
                            <span className="text-foreground/50 font-mono text-[12px] mt-1 select-none">▸</span>
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Production Tech Tags */}
                    <div>
                      <div className="text-[11px] font-mono uppercase tracking-[0.08em] text-muted-foreground mb-2.5">
                        Technologies Deployed
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {current.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-2.5 py-1 text-[11px] font-medium font-mono bg-muted/60 text-foreground/80 rounded-md border border-border/70 hover:border-foreground/40 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })()}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Technical Capabilities Section - Compact, Sleek, Scannable */}
      <section id="expertise" className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1280px] mx-auto w-full border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500] flex items-center gap-2">
            <span>TOOLING & CAPABILITIES</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-foreground/70 font-mono text-[10px]">TECHNICAL EXPERTISE</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {expertise.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col p-4 -m-4 rounded-lg hover:bg-muted/20 transition-colors"
            >
              <h3 className="text-[11px] font-mono font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground/40" />
                {item.category}
              </h3>
              <p className="text-[13px] md:text-[14px] text-foreground font-[400] leading-[1.65] mb-2">
                {item.skills}
              </p>
              <p className="text-[11px] font-mono text-muted-foreground/80">
                {item.note}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Achievements & Recognition Section - Calm, Typographic */}
      <section id="achievements" className="px-6 md:px-12 lg:px-16 py-12 md:py-18 max-w-[1280px] mx-auto w-full border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-10"
        >
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500] flex items-center gap-2">
            <span>ACHIEVEMENTS & RECOGNITION</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-foreground/70 font-mono text-[10px]">MILESTONES</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 max-w-[1000px]">
          {achievements.map((ach, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col p-4 -mx-4 rounded-lg hover:bg-muted/15 transition-colors"
            >
              <div className="text-[10px] font-mono text-muted-foreground mb-2 uppercase tracking-wider">
                {ach.category}
              </div>
              <h3 className="text-[17px] text-foreground font-[500] mb-2.5">
                {ach.title}
              </h3>
              <p className="text-[14px] text-muted-foreground font-[400] leading-[1.7]">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}

export default WorkExperience
