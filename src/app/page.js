"use client";
import { useEffect, useState } from "react";
import Projects from "@/app/pages/projects";
import Photographs from "@/app/pages/photos";
import Intro from "@/app/pages/intro";
import Footer from "@/app/components/Footer";
import About from "@/app/pages/about";
import WorkExperience from "@/app/pages/WorkExperience";
import Header from "@/app/components/Header";

export default function Home() {
  const [loadingPercent, setLoadingPercent] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 300); // smooth transition
          return 100;
        }
        return prev + 1;
      });
    }, 20); // 100% in ~2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
          <div className="text-base sm:text-lg text-gray-600 font-mono tracking-tight animate-pulse">
            {loadingPercent}%
          </div>
        </div>
      ) : (
        <main className="bg-white px-10 md:px-20 lg:px-40">
          <Header />
          <section>
            <Intro triggerAnimation={!isLoading} />
          </section>

          <section>
            <h2 className="text-3xl pt-6 md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
              Work Experience
            </h2>
            <WorkExperience />
          </section>

          <section id="projects">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
              Projects
            </h2>
            <Projects />
          </section>

          <section>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-tight text-black dark:text-black">
              My Photographs
            </h2>
            <Photographs />
          </section>

          <section>
            <About />
          </section>

          <Footer />
        </main>
      )}
    </div>
  );
}
