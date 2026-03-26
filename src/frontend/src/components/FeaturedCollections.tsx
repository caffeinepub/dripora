import { ArrowRight } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const collections = [
  {
    id: 1,
    title: "OLD SCHOOL REVIVAL",
    subtitle: "Vintage Reborn",
    description:
      "Classic cuts, throwback graphics, and the raw energy of 90s streetwear — reimagined for the next generation. Oversized fits, retro colorways, timeless drip.",
    image: "/assets/generated/collection-oldschool.dim_600x800.jpg",
    glow: "neon-cyan",
    tag: "HERITAGE DROP",
  },
  {
    id: 2,
    title: "CYBER DRIP",
    subtitle: "Tech Meets Street",
    description:
      "Techwear for the urban explorer. Utility pockets, reflective details, and designs built for the intersection of function and form in the city grid.",
    image: "/assets/generated/collection-cyber.dim_600x800.jpg",
    glow: "neon-green",
    tag: "FUTURISTIC",
  },
  {
    id: 3,
    title: "Y2K RELOADED",
    subtitle: "2000s Nostalgia",
    description:
      "Low-rise, chrome, butterfly clips and that irresistible millennial nostalgia. We took the Y2K fever and turned it up — chrome finishes meet fresh silhouettes.",
    image: "/assets/generated/collection-y2k.dim_600x800.jpg",
    glow: "neon-cyan",
    tag: "NOSTALGIA TRIP",
  },
];

function CollectionCard({
  collection,
  index,
}: {
  collection: (typeof collections)[0];
  index: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const isGreenGlow = collection.glow === "neon-green";
  const glowColor = isGreenGlow
    ? "oklch(0.89 0.22 142)"
    : "oklch(0.85 0.14 196)";
  const glowShadow = isGreenGlow
    ? "0 0 16px oklch(0.89 0.22 142 / 0.6), 0 0 40px oklch(0.89 0.22 142 / 0.2)"
    : "0 0 16px oklch(0.85 0.14 196 / 0.6), 0 0 40px oklch(0.85 0.14 196 / 0.2)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      className="group relative flex flex-col overflow-hidden border-2 transition-all duration-500 hover:scale-[1.02]"
      style={{
        borderColor: glowColor,
        boxShadow: "0 0 0 0 transparent",
        background: "oklch(0.12 0.008 240)",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow = glowShadow;
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "0 0 0 0 transparent";
      }}
    >
      {/* Tag */}
      <div
        className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold tracking-widest"
        style={{ background: glowColor, color: "oklch(0.09 0.006 240)" }}
      >
        {collection.tag}
      </div>

      {/* Image */}
      <div className="h-72 overflow-hidden">
        <img
          src={collection.image}
          alt={collection.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <p
          className="text-xs tracking-widest mb-2"
          style={{ color: glowColor }}
        >
          {collection.subtitle}
        </p>
        <h3 className="text-xl font-black uppercase tracking-wider text-white mb-3">
          {collection.title}
        </h3>
        <p
          className="text-sm leading-relaxed mb-6"
          style={{ color: "oklch(0.62 0.008 240)" }}
        >
          {collection.description}
        </p>
        <button
          type="button"
          data-ocid={`collections.item.${index + 1}`}
          className="mt-auto flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all group/btn"
          style={{ color: glowColor }}
        >
          VIEW COLLECTION
          <ArrowRight
            size={14}
            className="transition-transform group-hover/btn:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
}

export default function FeaturedCollections() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="collections"
      className="py-24 px-6"
      style={{ background: "oklch(0.09 0.006 240)" }}
    >
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "oklch(0.85 0.14 196)" }}
          >
            WHAT WE DROP
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
            FEATURED COLLECTIONS
          </h2>
          <div
            className="mx-auto mt-4 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.85 0.14 196), transparent)",
            }}
          />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collections.map((col, i) => (
            <CollectionCard key={col.id} collection={col} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
