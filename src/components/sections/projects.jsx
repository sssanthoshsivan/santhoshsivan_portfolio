import Link from "next/link";

const featuredProjects = [
  {
    title: "Jewelry Manufacturing Management App",
    description:
      "Multi-tenant workflow system with role-based approvals for sketches, CADs, and final designs.",
    date: "01.2026",
    tags: ["React", "Next.js", "Node.js", "PostgreSQL"],
    href: "/professionalProjects",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Work Management App",
    description:
      "Role-based task and project workflows with multi-level approvals for construction teams.",
    date: "05.2025",
    tags: ["TypeScript", "Prisma", "AWS", "Zustand"],
    href: "/professionalProjects",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop"
  },
  {
    title: "Resource Management System",
    description:
      "Employee and inventory management with time zone–aware booking and dynamic validation.",
    date: "11.2024",
    tags: ["Go", "Docker", "Redis", "gRPC"],
    href: "/professionalProjects",
    github: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop"
  },
];

const Projects = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-28 relative">
      {/* Signature Plus Signs at section corners */}
      <div className="brutalist-plus -top-2.5 -left-2.5">+</div>
      <div className="brutalist-plus -top-2.5 -right-2.5">+</div>

      <div className="mb-20">
        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-4 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-border"></span>
          Selected Projects // 01
        </h2>
        <h3 className="text-4xl md:text-6xl font-bold tracking-tighter text-foreground mb-8">
          PRODUCTION_LOGS
        </h3>
        <p className="text-muted-foreground max-w-2xl leading-relaxed font-mono text-sm uppercase tracking-wide">
          A focused selection of production systems I’ve architected — centered around workflows, complex permissions, and real-world scalability.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
        {/* Row Crossings Plus Marks (Visual only) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 brutalist-plus text-border/40 z-0 hidden md:flex">+</div>

        {featuredProjects.map((project, idx) => (
          <div
            key={idx}
            className="group flex flex-col bg-card border border-border rounded-xl overflow-hidden hover:border-foreground/20 transition-all duration-300 active:scale-[0.98]"
          >
            {/* Project Image */}
            <div className="relative aspect-video w-full overflow-hidden border-b border-border bg-muted">
              <img
                src={project.image}
                alt={project.title}
                className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
              />
            </div>

            {/* Project Info */}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex justify-between items-baseline mb-4">
                <h4 className="text-lg font-bold text-foreground tracking-tight">
                  {project.title}
                </h4>
                <span className="text-[10px] font-mono text-muted-foreground uppercase">
                  {project.date}
                </span>
              </div>

              <p className="text-sm text-muted-foreground leading-relaxed font-mono mb-6 line-clamp-3">
                {project.description}
              </p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mt-auto mb-6">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-[9px] font-bold font-mono tracking-widest px-2 py-0.5 border border-border text-muted-foreground uppercase rounded-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="grid grid-cols-2 border-t border-border border-dotted -mx-6 -mb-6">
                <Link
                  href={project.href}
                  className="flex items-center justify-center py-4 text-[10px] font-bold font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors border-r border-border border-dotted"
                >
                  LIVE_PREVIEW_↗
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  className="flex items-center justify-center py-4 text-[10px] font-bold font-mono tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                >
                  SOURCE_CODE_⚯
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-20 flex justify-center">
         <Link
            href="/professionalProjects"
            className="group flex items-center gap-4 text-xs font-mono font-bold tracking-[0.3em] uppercase text-muted-foreground hover:text-foreground transition-all"
         >
            [ VIEW_ALL_ARCHIVE ]
            <span className="w-12 h-[1px] bg-border group-hover:w-20 group-hover:bg-foreground transition-all"></span>
         </Link>
      </div>
    </section>
  );
};

export default Projects;
