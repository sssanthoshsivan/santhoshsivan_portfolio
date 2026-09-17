import React from "react"

function WorkExperience() {
  const experiences = [
    {
      period: "2024 — PRESENT",
      company: "RunLoyal",
      title: "Full Stack Engineer",
      skills: [
        "Product engineering",
        "Reporting & analytics",
        "Superset",
        "SQL",
        "AI tooling"
      ],
      bullets: [
        "Migrated business-critical reports from myDBR to Apache Superset, reducing report response times to 2–4s for weekly data, 6–8s for monthly data, and ~10s for yearly data.",
        "Built custom dashboards for reports by aggregating API data, with persistent layouts and tenant-aware RLS, while resolving SSO and production reporting issues across workflows."
      ],
      description: "Driving the development of complex SaaS features, reporting infrastructure, and AI-enabled internal tools.",
    },
    {
      period: "2021 — 2024",
      company: "Jobin & Jismi",
      title: "Full Stack Engineer",
      skills: [
        "SaaS architecture",
        "Microservices",
        "Frontend engineering",
        "PostgreSQL",
        "RBAC"
      ],
      bullets: [
        "Built a sales-driven SaaS platform supporting shareable catalog-to-approval workflows for sales teams.",
        "Developed data-driven dashboards by integrating multiple APIs and engineered an ephemeral album-sharing system with a 24-hour expiration using Redis TTL.",
        "Owned Next.js + TypeScript frontend development, delivering reusable components, complex multi-step workflows, API integrations, deployment, and production support."
      ],
      description: "Responsible for architecting and delivering critical business systems for diverse industrial domains.",
    }
  ];

  const expertise = [
    {
      category: "FRONTEND",
      skills: "React · Next.js · Vue · TypeScript · JavaScript\nTailwind CSS · Redux · Zustand"
    },
    {
      category: "BACKEND",
      skills: "Node.js · NestJS · Express"
    },
    {
      category: "DATABASES",
      skills: "PostgreSQL · MySQL · MongoDB · Supabase · Prisma"
    },
    {
      category: "DATA & REPORTING",
      skills: "SQL · Apache Superset · Snowflake"
    },
    {
      category: "ARCHITECTURE",
      skills: "Multi-tenancy · RBAC · Microservices · APIs"
    },
    {
      category: "INFRASTRUCTURE",
      skills: "Docker · Vercel · AWS · CI/CD"
    },
    {
      category: "AI",
      skills: "MCPs · Google APIs · LangChain"
    }
  ];

  return (
    <>
      <section id="experience" className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[14px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
            EXPERIENCE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="md:col-span-6 flex flex-col">
              <p className="text-[12px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-4">
                {exp.period}
              </p>
              <h3 className="text-[20px] font-[400] text-foreground mb-1">{exp.company}</h3>
              <p className="text-[15px] font-[400] text-muted-foreground mb-8">{exp.title}</p>
              
              <div className="flex flex-wrap gap-2 mb-8 mt-2">
                {exp.skills.map((skill, i) => (
                  <span key={i} className="px-3 py-1 text-[12px] font-[500] bg-muted/50 text-muted-foreground rounded-full border border-border/50">
                    {skill}
                  </span>
                ))}
              </div>

              <p className="text-[15px] text-muted-foreground font-[400] leading-[1.7] max-w-[500px] mb-6">
                {exp.description}
              </p>

              {exp.bullets && (
                <ul className="list-disc list-outside ml-4 flex flex-col gap-3 max-w-[500px]">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-[14px] text-muted-foreground font-[400] leading-[1.6]">
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="expertise" className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[14px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
            TECHNICAL EXPERTISE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
          {expertise.map((item, idx) => (
            <div key={idx} className="flex flex-col">
              <h3 className="text-[11px] font-[500] uppercase tracking-[0.08em] text-muted-foreground mb-4">
                {item.category}
              </h3>
              <p className="text-[14px] text-foreground font-[400] leading-[1.7] whitespace-pre-line">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="achievements" className="px-6 md:px-12 lg:px-16 py-12 md:py-16 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="mb-8 md:mb-10">
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
            ACHIEVEMENTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-12 max-w-[1000px]">
           <div className="flex flex-col">
             <h3 className="text-[16px] text-foreground font-[400] mb-3">Winner – PMI Kerala Award 2024</h3>
             <p className="text-[15px] text-muted-foreground font-[400] leading-[1.7]">
               Recognized for developing a jewelry manufacturing platform achieving 82% faster reconciliation and 100% material traceability.
             </p>
           </div>
           <div className="flex flex-col">
             <h3 className="text-[16px] text-foreground font-[400] mb-3">Enterprise-grade NetSuite ERP Extension</h3>
             <p className="text-[15px] text-muted-foreground font-[400] leading-[1.7]">
               Delivered an enterprise-grade extension within a 28-day timeline, ensuring rapid client adoption and seamless integration.
             </p>
           </div>
        </div>
      </section>
    </>
  )
}

export default WorkExperience
