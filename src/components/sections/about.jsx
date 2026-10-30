"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Copy, Check, ArrowDownToLine, ExternalLink, MapPin, Clock, Terminal, Mail, FileText, CheckCircle2 } from "lucide-react";

const principles = [
  {
    num: "01",
    title: "BUILD FOR THE PRODUCT",
    desc: "Engineering decisions should solve real user and business bottlenecks, not merely demonstrate technical complexity or follow industry hype."
  },
  {
    num: "02",
    title: "KEEP ARCHITECTURES UNDERSTANDABLE",
    desc: "Good architecture makes future development seamless and onboarding painless, rather than making the system impressive on an abstract architectural diagram."
  },
  {
    num: "03",
    title: "AUTOMATE REPETITIVE WORKFLOWS",
    desc: "If a recurring workflow can be streamlined through APIs, background jobs, or AI tool-calling via MCPs, engineer a permanent automated system."
  },
  {
    num: "04",
    title: "OBSESS OVER SYSTEM DETAILS",
    desc: "Performance budgets, edge cases, SQL index coverage, and keyboard ergonomics matter just as much as getting the initial happy path to render."
  }
];

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "santhoshsivansenthilkumar@gmail.com";

  const handleCopyEmail = (e) => {
    e.preventDefault();
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <>
      {/* Engineering Philosophy Section */}
      <section id="philosophy" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 md:mb-12"
        >
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500] flex items-center gap-2">
            <span>ENGINEERING PHILOSOPHY</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-foreground/70 font-mono text-[10px]">HOW I WORK</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 max-w-[960px]">
          {principles.map((p, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-2.5 p-4 -mx-4 rounded-lg hover:bg-muted/15 transition-colors group"
            >
              <div className="flex items-center gap-2.5">
                <span className="text-[11px] font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                  {p.num}
                </span>
                <span className="text-[10px] text-border">/</span>
                <h3 className="text-[13px] font-[500] uppercase tracking-[0.05em] text-foreground">
                  {p.title}
                </h3>
              </div>
              <p className="text-[14px] md:text-[15px] text-muted-foreground font-[400] leading-[1.7] pl-5 border-l border-border/60">
                {p.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Me & Executive Profile Section */}
      <section id="about" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full border-t border-border">
        <motion.div 
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 md:mb-14"
        >
          <h2 className="text-[12px] uppercase tracking-[0.1em] text-muted-foreground font-[500] flex items-center gap-2 mb-2">
            <span>ABOUT ME</span>
            <span className="w-1 h-1 rounded-full bg-border" />
            <span className="text-foreground/70 font-mono text-[10px]">BACKGROUND & PROFILE</span>
          </h2>
          <h3 className="text-[clamp(24px,3vw,34px)] font-[400] tracking-[-0.025em] text-foreground">
            Full Stack Engineer & Systems Builder
          </h3>
        </motion.div>

        {/* Balanced 2-Column Grid eliminating empty holes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Engineer Narrative */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-5 text-[15px] md:text-[16px] text-foreground font-[400] leading-[1.8]"
          >
            <p>
              I'm an engineer who enjoys understanding software systems from the ground up—from browser rendering ergonomics down to distributed database query execution plans.
            </p>
            <p className="text-muted-foreground">
              Over 3+ years in production environments, I have shipped customer-facing SaaS features, high-throughput analytics pipelines, multi-tenant databases with Row-Level Security, and internal AI tooling utilizing the Model Context Protocol (MCP).
            </p>
            <p className="text-muted-foreground">
              I am happiest when working at the intersection of complex constraints: untangling legacy data bottlenecks into sub-second operational dashboards, designing resilient authorization models, and building clean interfaces that feel immediate under human interaction.
            </p>
            <p className="text-muted-foreground">
              Outside of work, you'll find me exploring street and landscape photography, studying low-level systems architectures in C, or tinkering with new AI workflows.
            </p>

            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <a 
                href="/Santhosh%20Sivan%20Resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                download 
                className="inline-flex items-center gap-2 px-4 py-2 text-[13px] font-[500] rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors shadow-xs"
              >
                <ArrowDownToLine size={14} />
                <span>Download Resume (PDF)</span>
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-1.5 px-4 py-2 text-[13px] font-[500] rounded-md border border-border text-foreground hover:bg-muted/30 transition-colors"
              >
                <span>Get In Touch</span>
                <span>↓</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Engineering Snapshot & Operational Card */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 p-6 rounded-xl border border-border bg-card/50 flex flex-col gap-5"
          >
            <div className="flex items-center justify-between pb-4 border-b border-border/70">
              <span className="text-[11px] font-mono uppercase text-muted-foreground tracking-wider">
                ENGINEERING PROFILE
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                AVAILABLE FOR HIRE
              </span>
            </div>

            <div className="space-y-3.5 text-[13px]">
              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">LOCATION</span>
                <span className="text-foreground font-medium text-right flex items-center gap-1">
                  <MapPin size={13} className="text-muted-foreground" />
                  Theni, India (UTC +5:30)
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">EXPERIENCE</span>
                <span className="text-foreground font-medium text-right">
                  3+ Years In Production
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">EDUCATION</span>
                <span className="text-foreground font-medium text-right">
                  B.E. Computer Science (84.3%)
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">HONORS</span>
                <span className="text-foreground font-medium text-right">
                  PMI Kerala Award 2025
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">PRIMARY STACK</span>
                <span className="text-foreground font-medium text-right max-w-[220px]">
                  TypeScript · Next.js · Node.js · PostgreSQL · Redis · Java
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">CORE DOMAINS</span>
                <span className="text-foreground font-medium text-right max-w-[220px]">
                  Multi-Tenant SaaS · Analytics Infrastructure · Systems
                </span>
              </div>

              <div className="flex justify-between items-start">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">WORK PREFERENCE</span>
                <span className="text-foreground font-medium text-right">
                  Remote / Hybrid · Full-Time
                </span>
              </div>

              <div className="flex justify-between items-start pt-1">
                <span className="text-muted-foreground font-mono text-[11px] uppercase">BEYOND CODE</span>
                <Link 
                  href="/favourites" 
                  className="group inline-flex items-center gap-1 text-foreground font-medium text-right hover:text-foreground transition-colors"
                >
                  <span className="border-b border-border/80 group-hover:border-foreground">Personal Favourites</span>
                  <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
                </Link>
              </div>
            </div>

            {/* Quick 1-Click Email Action Inside Card */}
            <div className="pt-4 border-t border-border/70 flex items-center justify-between">
              <div className="text-[11px] font-mono text-muted-foreground truncate max-w-[180px]">
                {email}
              </div>
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono text-foreground border border-border rounded-md hover:bg-muted/50 active:scale-95 transition-all"
                title="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-500" />
                    <span className="text-emerald-600 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 md:px-12 lg:px-16 py-16 md:py-24 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="max-w-[720px] flex flex-col gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="text-[11px] font-mono uppercase tracking-[0.1em] text-muted-foreground mb-3 flex items-center gap-2">
              <span>GET IN TOUCH</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="text-foreground/70">OPEN FOR OPPORTUNITIES</span>
            </div>
            <h2 className="text-[clamp(32px,4vw,52px)] font-[400] tracking-[-0.035em] leading-[1.08] text-foreground mb-4">
              LET'S BUILD SOMETHING SOLID.
            </h2>
            <p className="text-[15px] md:text-[16px] text-muted-foreground font-[400] leading-[1.75]">
              I'm actively open to product-focused software teams, high-throughput engineering challenges, and senior full stack roles.
            </p>
          </motion.div>

          <div className="flex flex-col gap-3.5 pt-2 relative">
            {/* Email with One-Click Copy */}
            <div className="flex flex-wrap items-center gap-3">
              <a 
                href={`mailto:${email}`} 
                className="group inline-flex items-center gap-2 text-[15px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
              >
                <Mail size={15} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>{email}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-mono text-muted-foreground border border-border/80 rounded-md hover:border-foreground hover:text-foreground active:scale-95 transition-all duration-150"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? (
                  <>
                    <Check size={12} className="text-emerald-500" />
                    <span className="text-emerald-600 font-semibold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              {/* Animated Floating Confirmation Toast */}
              <AnimatePresence>
                {copied && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="px-3 py-1 bg-foreground text-background text-[11px] font-mono rounded-md shadow-md whitespace-nowrap z-10 pointer-events-none"
                  >
                    Email copied to clipboard! ✓
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Social & Code Links */}
            <div className="flex flex-wrap items-center gap-6 pt-2">
              <a 
                href="https://www.linkedin.com/in/sssanthoshsivan/" 
                target="_blank" 
                rel="noreferrer" 
                className="group inline-flex items-center gap-1.5 text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
              >
                <span>LinkedIn</span>
                <ExternalLink size={13} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a 
                href="https://github.com/sssanthoshsivan" 
                target="_blank" 
                rel="noreferrer" 
                className="group inline-flex items-center gap-1.5 text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
              >
                <span>GitHub</span>
                <ExternalLink size={13} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>

              <a 
                href="/Santhosh%20Sivan%20Resume.pdf" 
                target="_blank" 
                rel="noreferrer" 
                download 
                className="group inline-flex items-center gap-1.5 text-[14px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-0.5"
              >
                <span>Resume (PDF)</span>
                <ArrowDownToLine size={13} className="text-muted-foreground group-hover:text-foreground transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
