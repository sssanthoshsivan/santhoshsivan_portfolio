"use client"
import { useEffect, useRef } from "react"
import { gsap, Circ } from "gsap"

const About = () => {
  const tamilnaduRef = useRef(null)
  const thankYouRef = useRef(null)

  const scrambleText = (text) => {
    const chars =
      "கஙசஞடணதநலஜனறளரமஅஆஇஈஉஊஔஓஒஐஏஎக்ங்ச்ட்ண்த்ந்ப்ம்ய்ர்ல்வ்ள்ர்வழஷழ்ன்"
    return text
      .split("")
      .map(() => chars[Math.floor(Math.random() * chars.length)])
      .join("")
  }

  useEffect(() => {
    const applyScrambleEffect = (element, originalText, hoverText) => {
      if (!element) return () => {}

      let tween = null

      const scramble = (targetText) => {
        return gsap.to({}, {
          duration: 0.25,
          ease: Circ.easeOut,
          onUpdate() {
            if (this.progress() < 1) {
              element.textContent = scrambleText(originalText)
            } else {
              element.textContent = targetText
            }
          },
        })
      }

      const handleMouseEnter = () => {
        if (tween) tween.kill()
        tween = scramble(hoverText)
      }

      const handleMouseLeave = () => {
        if (tween) tween.kill()
        tween = scramble(originalText)
      }

      element.addEventListener("mouseenter", handleMouseEnter)
      element.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        element.removeEventListener("mouseenter", handleMouseEnter)
        element.removeEventListener("mouseleave", handleMouseLeave)
        if (tween) tween.kill()
      }
    }

    const cleanupTamilnadu = applyScrambleEffect(
      tamilnaduRef.current,
      "Tamil Nadu",
      "தமிழ்நாடு"
    )

    const cleanupThankYou = applyScrambleEffect(
      thankYouRef.current,
      "Thank you",
      "நன்றி"
    )

    return () => {
      cleanupTamilnadu()
      cleanupThankYou()
    }
  }, [])

  return (
    <section className="px-6 md:px-16 lg:px-24 py-24">
      <div>

        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-neutral-900 mb-10">
          About
        </h2>

<p className="text-neutral-700 leading-relaxed md:leading-loose text-base md:text-lg">
  I’m Santhosh Sivan, a software engineer from
  <span
    ref={tamilnaduRef}
    className="inline-block mx-2 font-medium text-neutral-900 border-b border-neutral-300 cursor-pointer transition-colors hover:text-neutral-600"
  >
    Tamil Nadu
  </span>
  , India, currently working at a startup building production web applications
  used by real teams and users.

  <br /><br />

  My work spans front-end engineering and system-oriented features — including
  multi-tenant application design, role- and permission-based access control,
  webhook-driven workflows, and integrations that require reliability and clear
  data flow. I’ve contributed to applications built with React, Next.js,
  Tailwind CSS, Vue.js, Payload CMS, TypeScript, GraphQL, and PostgreSQL, often
  working close to both product and backend boundaries.

  <br /><br />

  While I enjoy thinking in terms of architecture and systems, my strongest
  focus remains on the front end — crafting interfaces that are predictable,
  performant, and easy to reason about. I care about how systems feel to use,
  not just how they work internally. If any of this resonates, feel free to
  connect —
  <span
    ref={thankYouRef}
    className="inline-block ml-2 font-medium text-neutral-900 border-b border-neutral-300 cursor-pointer transition-colors hover:text-neutral-600"
  >
    Thank you
  </span>.
</p>


      </div>
    </section>
  )
}

export default About
