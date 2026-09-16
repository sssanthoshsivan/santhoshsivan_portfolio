export const allProjects = [
  {
    title: "Analytics & Reporting Platform",
    category: "REPORTING & ANALYTICS",
    featured: true,
    homepageDescription: "Built reporting infrastructure for a multi-tenant product, transitioning legacy reporting workflows toward custom Apache Superset dashboards integrated directly into the application. Worked across embedded dashboards, authentication, row-level security, server-side filtering, Saved Views APIs, and SQL/report debugging.",
    homepageContributions: [
      "Reporting migration",
      "Superset integration",
      "Embedded dashboards",
      "RLS",
      "Saved Views API",
      "SQL/report debugging"
    ],
    homepageTechnologies: ["SQL", "Apache Superset", "Next.js", "APIs", "Snowflake"],
    description: "Context & Problem:\nThe business relied on a legacy myDBR reporting setup that suffered from slow response times and tight coupling. We needed to transition to a modern, embedded Apache Superset architecture without disrupting existing workflows.\n\nTechnical Implementation:\nMy work included dashboard embedding, Guest Token authentication, Row-Level Security, server-side filtering, Saved Views APIs, SQL and stored-procedure debugging, and tenant-specific reporting workflows.\n\nMeasurable Outcomes:\n• Reduced report response times to 2–4s for weekly data, 6–8s for monthly data, and ~10s for yearly data.\n• Successfully migrated business-critical reports to the new stack.",
    role: "FULL STACK ENGINEER",
    architecture: "Multi-tenant · Superset · Snowflake",
    technologies: ["SQL", "Stored Procedures", "Apache Superset", "Next.js", "APIs", "Snowflake"],
    keyContributions: [
      "Reporting migration",
      "Superset integration",
      "Embedded dashboards",
      "Guest Token authentication",
      "RLS",
      "Server-side filtering",
      "Saved Views API",
      "SQL/report debugging",
      "Tenant-level reporting"
    ],
    date: "2024",
    type: "Professional",
    href: "/projects/analytics-platform",
    icon: "BarChart3"
  },
  {
    title: "Internal Analytics AI Assistant",
    category: "AI & INTERNAL TOOLING",
    featured: true,
    homepageDescription: "Built an internal tool that helps support and non-technical teams investigate reporting issues, inspect analytics data, and triage report-related tickets using AI-assisted workflows.",
    homepageContributions: [
      "Report investigation",
      "Data exploration",
      "Internal support tooling"
    ],
    homepageTechnologies: ["Superset MCP", "Google AI", "Next.js"],
    description: "Context:\nSupport and non-technical teams needed a faster way to investigate reporting issues and inspect analytics data without writing raw SQL or manually navigating dashboards.\n\nWhat I Built:\nI developed an internal tool that leverages AI to investigate reporting issues, inspect analytics data, and triage report-related tickets using AI-assisted workflows.\n\nTechnical Implementation:\nBuilt using the Superset MCP, LangChain, and Google AI to create a conversational interface for exploring data and identifying reporting anomalies.",
    role: "AI ENGINEER / FULL STACK",
    technologies: ["Superset MCP", "Google AI", "Next.js", "LangChain"],
    keyContributions: [
      "Report investigation",
      "Data exploration",
      "Internal support tooling",
      "AI integration"
    ],
    date: "2024",
    type: "Professional",
    href: "/projects/ai-assistant",
    icon: "Sparkles"
  },
  {
    title: "Multi-Tenant SaaS Platform",
    category: "SYSTEM DESIGN",
    featured: false,
    description: "Context & Problem:\nThe client required a scalable SaaS platform to support shareable catalog-to-approval workflows for sales teams, requiring strict tenant isolation and complex role management.\n\nTechnical Implementation:\nBuilt a multi-tenant SaaS platform supporting tenant-level isolation, hierarchical RBAC, approval workflows, and subscription-based feature access. I worked across frontend applications, backend APIs, database design, and system architecture.\n\nMetrics & Outcomes:\n• Supported tenant isolation for 50+ tenants.\n• Engineered hierarchical RBAC with 5+ roles and 20+ permissions.\n• Delivered an ephemeral album-sharing system with 24-hour expiration using Redis TTL.",
    role: "FULL STACK ENGINEER",
    architecture: "Multi-tenant · Microservices · Turborepo",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Microservices", "Turborepo", "Redis"],
    keyContributions: [
      "Tenant isolation",
      "Hierarchical RBAC",
      "Time-bound workflows",
      "System architecture"
    ],
    date: "2024",
    type: "Professional",
    href: "/projects/saas-platform",
    icon: "Layers"
  },
  {
    title: "Work Management System",
    category: "OPERATIONS",
    featured: false,
    description: "Problem:\nThe internal operations team in the German market needed a centralized platform to manage resource allocation, invoicing, and inventory tracking to replace fragmented tools.\n\nWhat I Built:\nCentralized internal operations platform featuring employee profile management, resource booking, and automated invoice generation.\n\nTechnical Implementation:\nBuilt the frontend using Next.js, React, Redux, and Tailwind CSS, focusing on complex state management for bookings and fast UI interactions.",
    role: "FRONTEND ENGINEER",
    technologies: ["Next.js", "React", "Redux", "Tailwind CSS"],
    keyContributions: [
      "Employee profile management",
      "Resource booking",
      "Automated invoice generation",
      "Frontend architecture"
    ],
    date: "2023",
    type: "Professional",
    href: "/projects/work-management",
    icon: "BriefcaseBusiness"
  },
  {
    title: "Jewelry Manufacturing App",
    category: "WORKFLOW",
    featured: false,
    description: "Context & Problem:\nJewelry manufacturing involves complex stages from initial sketches to final design approvals, which were previously managed manually, leading to poor traceability.\n\nWhat I Built:\nA multi-tenant workflow system managing the entire manufacturing lifecycle, including design lifecycle interfaces, role-based access control, and automated status updates.\n\nMetrics & Outcomes:\n• Achieved 82% faster reconciliation.\n• Ensured 100% material traceability across the manufacturing pipeline.",
    role: "FULL STACK ENGINEER",
    technologies: ["Next.js", "Payload CMS", "PostgreSQL"],
    keyContributions: [
      "Design lifecycle interfaces",
      "Role-based access control",
      "Automated status updates"
    ],
    date: "2023",
    type: "Professional",
    href: "/projects/jewelry-app",
    icon: "Factory"
  }
];
