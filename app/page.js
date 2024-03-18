import Projects from "@/pages/projects";
import Photographs from "@/pages/photos";
import Intro from "@/pages/intro";
import Footer from "@/pages/footer";
import About from "@/pages/about";
import WorkExperience from "@/pages/WorkExperience";

export default function Home() {
  return (
    <div>
      <main className="bg-white px-10 md:px-20 lg:px-40">

        <section className="min-h-screen">
          <Intro />
        </section>

        <section>
          <h2 className="mb-8 text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
            Projects
          </h2>
          <Projects />
        </section>

        <section>
          <h2 className="mb-8 text-3xl pt-6 md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
            Work Experience
          </h2>
          <WorkExperience />
        </section>

        <section>
          <h2 className="mb-8 text-3xl pt-10 md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
            My Photographs
          </h2>
          <Photographs />
        </section>

        <section>
          <About />
        </section>

        <Footer />
        
      </main>
    </div>
  );
}
