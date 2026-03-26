import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/generated/hero-bg.dim_1920x1080.jpg')",
        }}
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background/90" />

      {/* Scanline effect */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.5) 2px, rgba(255,255,255,0.5) 4px)",
        }}
      />

      {/* Neon edge glow */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, oklch(0.85 0.14 196), transparent)",
        }}
      />

      {/* Content Panel */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center px-6 max-w-4xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-3 mb-8"
        >
          <span
            className="h-px w-12 bg-neon-cyan"
            style={{ background: "var(--neon-cyan)" }}
          />
          <span
            className="text-xs font-bold tracking-[0.4em] uppercase px-4 py-2 border"
            style={{
              color: "var(--neon-cyan)",
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 12px oklch(0.85 0.14 196 / 0.4)",
            }}
          >
            EST. MARCH 2026
          </span>
          <span
            className="h-px w-12"
            style={{ background: "var(--neon-cyan)" }}
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-[0.9] tracking-tight text-white mb-6"
        >
          BORN FROM
          <br />
          <span
            className="text-neon-cyan"
            style={{
              color: "var(--neon-cyan)",
              textShadow: "0 0 30px oklch(0.85 0.14 196 / 0.6)",
            }}
          >
            THE STREETS.
          </span>
          <br />
          BUILT FOR
          <br />
          THE FUTURE.
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-muted-foreground text-sm md:text-base font-medium tracking-widest uppercase mb-10 max-w-xl mx-auto"
        >
          Where Gen Z energy meets old-school soul.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#shop"
            data-ocid="hero.primary_button"
            className="inline-block px-10 py-4 text-sm font-bold tracking-[0.3em] uppercase border-2 transition-all duration-300 hover:scale-105"
            style={{
              color: "oklch(0.09 0.006 240)",
              background: "var(--neon-cyan)",
              borderColor: "var(--neon-cyan)",
              boxShadow: "0 0 20px oklch(0.85 0.14 196 / 0.5)",
            }}
          >
            SHOP NEW DROPS
          </a>
          <a
            href="#collections"
            data-ocid="hero.secondary_button"
            className="inline-block px-10 py-4 text-sm font-bold tracking-[0.3em] uppercase border-2 transition-all duration-300 hover:bg-white/5"
            style={{ color: "white", borderColor: "rgba(255,255,255,0.4)" }}
          >
            EXPLORE COLLECTIONS
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: "oklch(0.62 0.008 240)" }}
        >
          SCROLL
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-px h-8"
          style={{ background: "var(--neon-cyan)" }}
        />
      </motion.div>
    </section>
  );
}
