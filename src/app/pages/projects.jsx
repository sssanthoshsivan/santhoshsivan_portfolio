import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const featuredProjects = [
  {
    title: "Jewelry Manufacturing Management App",
    description:
      "Multi-tenant workflow system with role-based approvals for sketches, CADs, and final designs.",
    href: "/professionalProjects",
  },
  {
    title: "Work Management App",
    description:
      "Role-based task and project workflows with multi-level approvals for construction teams.",
    href: "/professionalProjects",
  },
  {
    title: "Resource Management System",
    description:
      "Employee and inventory management with time zone–aware booking and dynamic validation.",
    href: "/professionalProjects",
  },
]

const Projects = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div >

        {/* Section header */}
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed">
            A small selection of production systems I’ve worked on — focused on
            workflows, permissions, and real-world constraints.
          </p>
        </div>

        {/* Featured projects */}
        <div className="grid gap-8 md:grid-cols-2 mb-20">
          {featuredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="border-neutral-200 hover:border-neutral-300 transition-colors"
            >
              <CardHeader>
                <CardTitle className="text-xl font-medium text-neutral-900">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-neutral-600 leading-relaxed mb-6">
                  {project.description}
                </p>

                <Button
                  asChild
                  variant="link"
                  className="px-0 text-neutral-900"
                >
                  <Link href={project.href}>
                    View details →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Category navigation */}
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="border-neutral-200 hover:border-neutral-300 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                All Professional Projects
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Production-grade SaaS platforms, admin dashboards, approval
                workflows, and API-driven integrations.
              </p>

              <Button asChild variant="link" className="px-0 text-neutral-900">
                <Link href="/professionalProjects">
                  Browse professional work →
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-neutral-200 hover:border-neutral-300 transition-colors">
            <CardContent className="p-8">
              <h3 className="text-lg font-medium text-neutral-900 mb-2">
                All Personal Projects
              </h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Explorations in systems programming, networking, blockchain,
                and developer tooling.
              </p>

              <Button asChild variant="link" className="px-0 text-neutral-900">
                <Link href="/personalProjects">
                  Browse personal work →
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>

      </div>
    </section>
  )
}

export default Projects
