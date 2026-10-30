"use client";

import Intro from "@/components/sections/intro";
import WorkExperience from "@/components/sections/WorkExperience";
import About from "@/components/sections/about";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Projects from "@/components/sections/projects";
import Photographs from "@/components/sections/photos";

export default function Home() {
  return (
    <main className="min-h-screen relative overflow-x-hidden bg-transparent">
      <div className="mx-auto max-w-[1440px] border-x border-border min-h-screen bg-transparent relative z-10 transition-colors">
        <Header />

        <div id="index">
          <Intro triggerAnimation />
        </div>

        <Projects />

        <WorkExperience />

        <Photographs />

        <About />

        <Footer />
      </div>
    </main>
  );
}
