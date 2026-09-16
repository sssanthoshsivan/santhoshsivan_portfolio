"use client";

const principles = [
  {
    title: "01 — BUILD FOR THE PRODUCT",
    desc: "Engineering decisions should solve real product problems, not simply demonstrate technical complexity."
  },
  {
    title: "02 — KEEP SYSTEMS UNDERSTANDABLE",
    desc: "Good architecture should make future development easier, not make the system impressive on a diagram."
  },
  {
    title: "03 — AUTOMATE REPETITIVE WORK",
    desc: "If a recurring workflow can be simplified through APIs, automation, or AI, I look for a better system."
  },
  {
    title: "04 — CARE ABOUT THE DETAILS",
    desc: "Performance, usability, edge cases, and maintainability matter just as much as getting the feature working."
  }
];

const About = () => {
  return (
    <>
      <section className="px-6 md:px-12 lg:px-16 py-8 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="mb-24">
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
            HOW I WORK
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 max-w-[900px]">
          {principles.map((p, idx) => (
            <div key={idx} className="flex flex-col gap-4">
              <h3 className="text-[13px] font-[500] uppercase tracking-[0.04em] text-foreground">
                {p.title}
              </h3>
              <p className="text-[15px] text-muted-foreground font-[400] leading-[1.7]">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-6 md:px-12 lg:px-16 py-8 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="mb-24">
          <h2 className="text-[12px] uppercase tracking-[0.08em] text-muted-foreground font-[500]">
            ABOUT
          </h2>
        </div>

        <div className="max-w-[600px] flex flex-col gap-6 text-[16px] text-foreground font-[400] leading-[1.8]">
          <p>
            I'm a Full Stack Engineer interested in building products from interface to backend systems.
          </p>
          <p>
            My work spans frontend engineering, APIs, databases, SaaS architecture, reporting infrastructure, and AI-assisted internal tools.
          </p>
          <p>
            I enjoy working on problems where product requirements and technical complexity meet.
          </p>
        </div>
      </section>

      <section id="contact" className="px-6 md:px-12 lg:px-16 py-8 max-w-[1280px] mx-auto w-full border-t border-border">
        <div className="flex flex-col gap-8 max-w-[600px]">
          <h2 className="text-[clamp(32px,4vw,48px)] font-[400] tracking-[-0.03em] leading-[1.1] text-foreground mb-4">
            LET'S BUILD SOMETHING.
          </h2>
          <p className="text-[16px] text-muted-foreground font-[400] leading-[1.8] mb-8">
            I'm open to interesting engineering problems, product-focused teams, and opportunities to build useful software.
          </p>
          <div className="flex flex-col gap-4 items-start">
            <a href="mailto:santhoshkan205@gmail.com" className="text-link text-[15px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1">
              Email →
            </a>
            <a href="https://www.linkedin.com/in/sssanthoshsivan/" target="_blank" rel="noreferrer" className="text-link text-[15px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1">
              LinkedIn →
            </a>
            <a href="https://github.com/sssanthoshsivan" target="_blank" rel="noreferrer" className="text-link text-[15px] font-[500] text-foreground border-b border-border hover:border-foreground transition-colors pb-1">
              GitHub →
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
