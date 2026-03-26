import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

export default function OurStory() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      className="py-24 px-6"
      style={{ background: "oklch(0.11 0.008 240)" }}
    >
      <div className="max-w-[1400px] mx-auto" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo Collage */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="grid grid-cols-2 gap-3"
          >
            <img
              src="/assets/generated/story-collage.dim_600x600.jpg"
              alt="DRIPORA story"
              className="col-span-2 w-full object-cover h-72 border-2"
              style={{ borderColor: "oklch(0.85 0.14 196)" }}
            />
            <div
              className="h-36 flex items-center justify-center border-2 font-black text-4xl tracking-widest"
              style={{
                borderColor: "oklch(0.89 0.22 142)",
                background: "oklch(0.09 0.006 240)",
                color: "oklch(0.89 0.22 142)",
                textShadow: "0 0 20px oklch(0.89 0.22 142 / 0.5)",
              }}
            >
              EST.
            </div>
            <div
              className="h-36 flex items-center justify-center border-2 font-black text-3xl tracking-widest"
              style={{
                borderColor: "oklch(0.85 0.14 196)",
                background: "oklch(0.09 0.006 240)",
                color: "oklch(0.85 0.14 196)",
                textShadow: "0 0 20px oklch(0.85 0.14 196 / 0.5)",
              }}
            >
              MAR 2026
            </div>
          </motion.div>

          {/* Right: Text */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          >
            <p
              className="text-xs tracking-[0.4em] uppercase mb-4"
              style={{ color: "oklch(0.85 0.14 196)" }}
            >
              WHO WE ARE
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-wide text-white mb-6 leading-tight">
              OUR
              <br />
              <span style={{ color: "oklch(0.85 0.14 196)" }}>STORY</span>
            </h2>
            <div
              className="h-px w-16 mb-8"
              style={{ background: "var(--neon-cyan)" }}
            />

            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.84 0.006 240)" }}
            >
              DRIPORA was born in March 2026 from a simple question:{" "}
              <em className="not-italic" style={{ color: "white" }}>
                what happens when the past and future collide on the street?
              </em>{" "}
              We found the answer in culture — the raw energy of 90s hip-hop,
              the Y2K metallic glow, and the relentless forward-drive of Gen Z.
            </p>
            <p
              className="text-sm leading-relaxed mb-5"
              style={{ color: "oklch(0.62 0.008 240)" }}
            >
              Our founders grew up between two worlds: parents who had the
              flyest fits in the 80s and 90s, and a generation that grew up on
              TikTok drops and limited collabs. DRIPORA is where those worlds
              merge — no compromise, no filter, all drop.
            </p>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{ color: "oklch(0.62 0.008 240)" }}
            >
              Every piece we make carries a story. Every stitch pays homage to
              the old school while pushing into territory no brand has claimed.
              This isn't fashion — it's a movement.
            </p>

            <a
              href="#shop"
              data-ocid="story.primary_button"
              className="inline-flex items-center gap-3 text-xs font-bold tracking-[0.3em] uppercase px-8 py-4 border-2 transition-all hover:scale-105"
              style={{
                color: "oklch(0.09 0.006 240)",
                background: "oklch(0.85 0.14 196)",
                borderColor: "oklch(0.85 0.14 196)",
                boxShadow: "0 0 20px oklch(0.85 0.14 196 / 0.4)",
              }}
            >
              SHOP THE STORY <ArrowRight size={14} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
