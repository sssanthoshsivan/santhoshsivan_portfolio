import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
];

const Projects = () => {
  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div className="max-w-6xl">

        {/* Header */}
        <header className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-4">
            Selected Projects
          </h2>
          <p className="text-neutral-600 max-w-2xl leading-relaxed">
            A focused selection of production systems I’ve worked on — centered
            around workflows, permissions, and real-world constraints.
          </p>
        </header>

        {/* Featured projects */}
        <section className="mb-24">
          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, idx) => (
              <Card
                key={idx}
                className="border-neutral-200 hover:border-neutral-300 transition-colors"
              >
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl font-medium text-neutral-900">
                    {project.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-2">
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
        </section>

        {/* Navigation / categories */}
        <section>
          <div className="grid gap-8 md:grid-cols-2">
            <Card className="border-neutral-200 hover:border-neutral-300 transition-colors">
              <CardContent className="p-8">
                <h3 className="text-lg font-medium text-neutral-900 mb-2">
                  Professional Projects
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Production-grade platforms, internal tools, approval workflows,
                  and integration-heavy systems built for real teams.
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
                  Personal Projects
                </h3>
                <p className="text-neutral-600 mb-6 leading-relaxed">
                  Independent explorations driven by curiosity — focused on
                  fundamentals, systems, and tooling.
                </p>

                <Button asChild variant="link" className="px-0 text-neutral-900">
                  <Link href="/personalProjects">
                    Browse personal work →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Projects;
