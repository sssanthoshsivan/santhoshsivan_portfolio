"use client";

import { useEffect, useState } from "react";
import Intro from "@/app/pages/intro";
import WorkExperience from "@/app/pages/WorkExperience";
import Projects from "@/app/pages/projects";
import Photographs from "@/app/pages/photos";
import About from "@/app/pages/about";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[999] flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-3">
          <span className="text-sm tracking-wide text-neutral-500">
            வணக்கம்
          </span>
          <span className="h-[1px] w-24 bg-neutral-300 animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <main className="bg-white">
      <Header />

      <Intro triggerAnimation />

      <WorkExperience />

      <Projects />

      <Photographs />

      <About />

      <Footer />
    </main>
  );
}
