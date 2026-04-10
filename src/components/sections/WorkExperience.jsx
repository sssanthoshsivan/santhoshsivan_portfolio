import Link from "next/link"
import React from "react"

function WorkExperience() {
  const platforms = [
    {
      name: "SaaS Digital Catalogue Platform",
      desc: "Multi-tenant B2B platform with microservices architecture, onboarding 50+ tenants and improving dev efficiency by 40%.",
      tech: "Next.js, Node.js, Prisma, Docker"
    },
    {
      name: "German Resource Management System",
      desc: "Internal operations platform for employee allocation and automated invoicing for the German market.",
      tech: "Next.js, Redux, Context API"
    },
    {
      name: "Construction Workflow Application",
      desc: "RBAC-driven platform with complex approval pipelines and dynamic content rendering via Payload CMS.",
      tech: "Next.js, TypeScript, PostgreSQL"
    },
    {
      name: "Banking & Financial Dashboard",
      desc: "Secure ERP-linked UI for bill processing and account insights with high-usability standards.",
      tech: "Vue.js, Tailwind CSS"
    }
  ];

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 border-b border-border">
      <div>
        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-border"></span>
          Experience // 2.7 Years Tenure
        </h2>

        <div className="brutalist-card">
          {/* Plus signs */}
          <div className="brutalist-plus brutalist-plus-tl">+</div>
          <div className="brutalist-plus brutalist-plus-tr">+</div>
          <div className="brutalist-plus brutalist-plus-bl">+</div>
          <div className="brutalist-plus brutalist-plus-br">+</div>

          <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8 md:gap-16">
            <div className="font-mono text-sm space-y-4">
              <div className="text-muted-foreground uppercase tracking-widest">[ SEP_2021 — PRESENT ]</div>
              <div className="text-[10px] text-primary font-bold uppercase tracking-widest leading-relaxed">
                Single Company Tenure // <br />
                Full Stack Specialist
              </div>
            </div>

            <div className="space-y-10">
              <header className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-bold tracking-tighter text-foreground uppercase">
                  Full Stack Developer<br/>
                  <span className="text-muted-foreground outline-text">· Jobin & Jismi</span>
                </h3>
                <p className="text-sm font-mono text-muted-foreground uppercase tracking-[0.2em]">
                  Thrissur, Kerala // Enterprise Platform Engineering
                </p>
              </header>

              <div className="space-y-6 max-w-3xl">
                <p className="text-muted-foreground leading-loose text-sm font-mono uppercase tracking-wide">
                  During my 2.7-year tenure at Jobin & Jismi, I have been responsible for architecting and delivering critical business systems for diverse industrial domains. My role evolved from frontend engineering to full-stack system design, focusing on scalability, multi-tenancy, and operational automation.
                </p>

                <div className="grid gap-6 py-8 border-y border-border border-dashed">
                  <h4 className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Key Platforms Developed:</h4>
                  {platforms.map((p, i) => (
                    <div key={i} className="group relative pl-6 border-l border-border hover:border-primary transition-colors">
                       <h5 className="text-sm font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{p.name}</h5>
                       <p className="text-xs text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                       <span className="text-[9px] font-mono font-bold bg-muted px-2 py-0.5 rounded-sm text-foreground uppercase tracking-wider">{p.tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/professionalProjects"
                className="inline-flex items-center text-xs font-mono font-bold text-foreground hover:text-primary transition-all group border-b border-foreground pb-1"
              >
                EXPLORE_PROJECT_ARCHIVE
                <span className="ml-2 transition-transform group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .outline-text {
          -webkit-text-stroke: 1px currentColor;
          color: transparent;
        }
        .outline-text:hover {
          color: var(--muted-foreground);
          -webkit-text-stroke: 0;
        }
      `}</style>
    </section>
  )
}

export default WorkExperience
