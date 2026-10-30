export const allProjects = [
  {
    title: "Mission-Critical Analytics & Data Infrastructure",
    category: "ENTERPRISE DATA & ANALYTICS",
    featured: true,
    homepageDescription: "Architected high-throughput analytics infrastructure for a multi-tenant SaaS platform, migrating business-critical telemetry from legacy monolithic bottlenecks into an isolated, high-performance data architecture. Engineered guest-token authentication, tenant-aware Row-Level Security (RLS) for 50+ enterprise tenants, Saved Views APIs, and sub-second operational dashboards across financial, appointment, invoice, and revenue workflows.",
    homepageContributions: [
      "Analytics Architecture",
      "Tenant-Isolated RLS",
      "Financial & Ops Telemetry",
      "Guest Token Authentication",
      "Saved Views APIs",
      "Query Latency Optimization"
    ],
    homepageTechnologies: ["PostgreSQL", "SQL / Stored Procs", "Java (Spring)", "Apache Superset", "Next.js", "Microservices"],
    description: "Context & Critical Problem:\nThe business relied on legacy reporting infrastructure suffering from tight architectural coupling, query latencies exceeding 35s, and authentication vulnerabilities. We needed to architect a modern, tenant-isolated analytics engine without disrupting live mission-critical workflows.\n\nTechnical Architecture & Execution:\n• Analytics Architecture: Integrated Apache Superset into the SaaS portal using Superset APIs, secure guest-token authentication, and tenant-aware Row-Level Security (RLS) across 50+ enterprise tenants.\n• Core Data Engineering: Rebuilt and optimized complex SQL, stored procedures, database views, and analytics APIs powering high-stakes financial audits, invoice pipelines, appointment telemetry, and sales workflows.\n• Complex Domain Logic: Redesigned data aggregation logic for challenging multi-day stays, tenant-local timezone offsets, and appointment state machines.\n• Security & Legacy Auth: Investigated and eliminated myDBR single sign-on (SSO) access-control issues, preventing unauthorized report access.\n\nMeasurable Outcomes:\n• Slashed average query response times to 2–4s for weekly rollups, 6–8s for monthly aggregations, and ~10s for yearly historical data.\n• Successfully transitioned business-critical financial, operational, and appointment reporting with 100% data fidelity.",
    role: "FULL STACK ENGINEER",
    architecture: "Multi-Tenant SaaS · Distributed Analytics · PostgreSQL",
    technologies: ["PostgreSQL", "SQL / Stored Procedures", "Java (Spring Boot)", "Apache Superset", "Next.js", "Microservices", "Snowflake"],
    keyContributions: [
      "Analytics Architecture & Migration",
      "Tenant-Aware Row-Level Security (RLS)",
      "Guest Token Authentication",
      "Sub-Second Query Optimization (2–4s)",
      "Financial, Invoice & Operational Telemetry",
      "Saved Views APIs",
      "SSO Security Resolution",
      "Database Views & Stored Procedures"
    ],
    date: "2024",
    type: "Professional",
    href: "/professionalProjects",
    icon: "BarChart3"
  },
  {
    title: "Internal Analytics AI Operational Agent",
    category: "AI & OPERATIONAL AUTOMATION",
    featured: true,
    homepageDescription: "Engineered an internal AI agent that enables support and non-technical teams to investigate complex data anomalies, inspect analytics pipelines, and triage production data tickets using natural language without writing manual SQL.",
    homepageContributions: [
      "Automated Anomaly Triage",
      "Autonomous Tool Calling",
      "Production Data Sandboxing"
    ],
    homepageTechnologies: ["AI MCPs", "Google AI API", "LangChain", "Next.js"],
    description: "Context:\nSupport and operational teams needed an instant way to investigate telemetry anomalies and inspect analytics data without writing raw SQL queries or manually navigating multi-layered dashboards.\n\nWhat I Built:\nDeveloped an autonomous AI investigation agent utilizing the Model Context Protocol (MCP), LangChain, and Google AI to enable natural-language conversational queries directly into SQL & production analytics databases.\n\nTechnical Implementation:\nEngineered custom MCP tools connected to analytics endpoints, structured agent tool-calling loops, and provided safe query sandboxing for rapid ticket triaging.",
    role: "AI ENGINEER / FULL STACK",
    technologies: ["AI MCPs", "Google AI API", "LangChain", "Next.js", "SQL Sandboxing"],
    keyContributions: [
      "Autonomous Anomaly Investigation",
      "Model Context Protocol (MCP) Integration",
      "Safe SQL Query Sandboxing",
      "Support Ticket Triage Automation"
    ],
    date: "2024",
    type: "Professional",
    href: "/professionalProjects",
    icon: "Sparkles"
  },
  {
    title: "Multi-Tenant SaaS Digital Product Catalog Platform",
    category: "SYSTEM DESIGN & ARCHITECTURE",
    featured: false,
    description: "Context & Problem:\nThe client required a scalable SaaS platform to support shareable catalog-to-approval workflows for sales teams, requiring strict tenant isolation and complex role management.\n\nTechnical Architecture:\n• Multi-Tenant Isolation: Built a multi-tenant SaaS platform with tenant-level data isolation and hierarchical RBAC (5+ roles, 20+ permissions), onboarding 50+ enterprise tenants with secure access control.\n• SaaS Monetization: Implemented subscription and plan management with tier-based feature access.\n• Ephemeral Sharing Architecture: Developed an ephemeral album-sharing system with 24-hour expiration using Redis TTL, enabling customer views, likes, feedback, and approval tracking.\n• Turborepo & Docker: Structured the monorepo using Turborepo and Docker, reducing build times by 40% and ensuring consistent deployments across environments.",
    role: "FULL STACK ENGINEER",
    architecture: "Multi-Tenant · Microservices · Turborepo",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Docker", "Microservices", "Turborepo", "Redis", "RBAC"],
    keyContributions: [
      "Tenant-Level Data Isolation (50+ Tenants)",
      "Hierarchical RBAC (5+ Roles, 20+ Permissions)",
      "Tier-Based Subscription & Monetization",
      "Ephemeral Redis TTL Album System",
      "Turborepo Monorepo & Docker Optimization"
    ],
    date: "2024",
    type: "Professional",
    href: "/professionalProjects",
    icon: "Layers"
  },
  {
    title: "Jewelry Manufacturing Management Platform",
    category: "ENTERPRISE WORKFLOW & SUPPLY CHAIN",
    featured: false,
    description: "Context & Problem:\nJewelry manufacturing involves complex stages from initial sketches to casting and final design approvals, which were previously managed manually, causing material leakage and slow auditing.\n\nTechnical Architecture & Outcomes:\n• End-to-End Workflow: Built a full manufacturing management platform with integrated customer communication and production workflows.\n• Complex Forms & Approvals: Developed 30+ multi-step forms, approval flows, role-based access control, and real-time notification systems.\n• Measurable Business Impact: Achieved 100% material traceability across precious metals and gems, 82% faster reconciliation, and significantly reduced material loss.\n• Industry Recognition: Winner of the PMI Kerala Award 2025.",
    role: "FULL STACK ENGINEER",
    architecture: "Multi-Step Workflow · Headless CMS · PostgreSQL",
    technologies: ["React.js", "TypeScript", "Payload CMS", "PostgreSQL", "Tailwind CSS"],
    keyContributions: [
      "100% Precious Material Traceability",
      "82% Faster Financial Reconciliation",
      "30+ Multi-Step Forms & Approval Engines",
      "PMI Kerala Award 2025 Recognition",
      "Role-Based Access & Audit Logs"
    ],
    date: "2024",
    type: "Professional",
    href: "/professionalProjects",
    icon: "Factory"
  },
  {
    title: "Enterprise NetSuite ERP Extension",
    category: "ENTERPRISE INTEGRATIONS",
    featured: false,
    description: "Context & Problem:\nAn enterprise client needed a rapid extension to their NetSuite ERP deployment to streamline custom financial workflows, automated invoicing, and inventory tracking without disrupting existing operations.\n\nTechnical Implementation & Delivery:\n• Rapid 28-Day Delivery: Delivered an enterprise-grade NetSuite ERP extension within an aggressive 28-day timeline, driving immediate customer adoption.\n• Automated Invoicing & Reconciliation: Engineered custom SuiteScript handlers and REST APIs connecting ERP records directly to external reporting tools.\n• Role-Based Security: Enforced strict access boundaries ensuring audit compliance and secure data exchange across distributed enterprise accounts.",
    role: "FULL STACK ENGINEER",
    architecture: "ERP Cloud Extension · SuiteScript · REST APIs",
    technologies: ["NetSuite ERP", "SuiteScript", "JavaScript", "REST APIs", "Node.js"],
    keyContributions: [
      "28-Day Rapid Enterprise Delivery",
      "Custom SuiteScript Handlers",
      "Automated Invoicing & Accounting Pipelines",
      "Enterprise Compliance & Audit Security"
    ],
    date: "2023",
    type: "Professional",
    href: "/professionalProjects",
    icon: "BriefcaseBusiness"
  }
];
