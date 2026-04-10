"use client";

import { useRef } from "react";
import { gsap, Circ } from "gsap";

const About = () => {
  const tamilnaduRef = useRef(null);
  const thankYouRef = useRef(null);

  const tamilTween = useRef(null);
  const thankYouTween = useRef(null);

  const scrambleText = (text) => {
    const chars =
      "கஙசஞடணதநலஜனறளரமஅஆஇஈஉஊஔஓஒஐஏஎக்ங்ச்ட்ண்த்ந்ப்ம்ய்ர்ல்வ்ள்ர்வழஷழ்ன்";
    return text
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("");
  };

  const runScramble = (element, from, to) => {
    return gsap.to(
      {},
      {
        duration: 0.25,
        ease: Circ.easeOut,
        onUpdate() {
          if (this.progress() < 1) {
            element.textContent = scrambleText(from);
          } else {
            element.textContent = to;
          }
        },
      }
    );
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24 border-b border-border">
      <div>
        <h2 className="text-xs uppercase tracking-[0.2em] font-mono text-muted-foreground mb-12 flex items-center gap-4">
          <span className="w-12 h-[1px] bg-border"></span>
          Background // Philosophy
        </h2>

        <div className="brutalist-card">
          {/* Plus signs */}
          <div className="brutalist-plus brutalist-plus-tl">+</div>
          <div className="brutalist-plus brutalist-plus-tr">+</div>
          <div className="brutalist-plus brutalist-plus-bl">+</div>
          <div className="brutalist-plus brutalist-plus-br">+</div>

          <div className="max-w-4xl">
            <p className="text-foreground leading-relaxed md:leading-loose text-lg md:text-xl font-medium mb-8">
              I’m Santhosh Sivan, a Full Stack Engineer at Jobin & Jismi, where I’ve spent the last 2.7 years building scalable SaaS platforms and workflow-driven systems. I design solutions that solve real operational problems.
            </p>

            <div className="grid md:grid-cols-2 gap-12 text-muted-foreground font-mono text-sm leading-relaxed">
              <p>
                My entire tenure has been dedicated to engineering core systems at Jobin & Jismi, spanning frontend architecture (Next.js, Vue), backend ecosystems (Node.js, PostgreSQL), and microservices. I focus on multi-tenant architectures and RBAC-driven systems.
              </p>
              <p>
                I take ownership of products from design to deployment, always keeping a product-oriented mindset. I emphasize performance, maintainability, and the deliberate visualization of data. If any of this resonates, feel free to connect —
                <span
                  ref={thankYouRef}
                  onMouseEnter={() => {
                    if (!thankYouRef.current) return;
                    thankYouTween.current?.kill();
                    thankYouTween.current = runScramble(
                      thankYouRef.current,
                      "Thank you",
                      "நன்றி"
                    );
                  }}
                  onMouseLeave={() => {
                    if (!thankYouRef.current) return;
                    thankYouTween.current?.kill();
                    thankYouTween.current = runScramble(
                      thankYouRef.current,
                      "நன்றி",
                      "Thank you"
                    );
                  }}
                  className="inline-block ml-2 font-mono text-foreground border-b-2 border-primary cursor-pointer transition-colors px-1"
                >
                  Thank you
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
