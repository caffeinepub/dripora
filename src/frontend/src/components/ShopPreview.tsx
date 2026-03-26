import { Skeleton } from "@/components/ui/skeleton";
import { ShoppingBag, Tag } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import type { Product } from "../backend.d";
import { useGetAllProducts } from "../hooks/useQueries";

const fallbackProducts: Product[] = [
  {
    id: BigInt(1),
    name: "Neon Phantom Hoodie",
    price: 89.99,
    category: "tops" as any,
    tag: "streetwear" as any,
    imageUrl: "/assets/generated/product-hoodie.dim_400x500.jpg",
    description:
      "Oversized hoodie with neon reflective details and back graphic print.",
  },
  {
    id: BigInt(2),
    name: "Cyber Cargo Pants",
    price: 119.99,
    category: "bottoms" as any,
    tag: "techwear" as any,
    imageUrl: "/assets/generated/collection-cyber.dim_600x800.jpg",
    description:
      "Multi-pocket utility cargo in matte black. Built for the urban grid.",
  },
  {
    id: BigInt(3),
    name: "Old School Windbreaker",
    price: 145.0,
    category: "outerwear" as any,
    tag: "old_school" as any,
    imageUrl: "/assets/generated/collection-oldschool.dim_600x800.jpg",
    description:
      "Vintage-inspired windbreaker with retro color blocking and logo embroidery.",
  },
  {
    id: BigInt(4),
    name: "Chrome Y2K Jacket",
    price: 199.0,
    category: "outerwear" as any,
    tag: "y2k" as any,
    imageUrl: "/assets/generated/collection-y2k.dim_600x800.jpg",
    description:
      "Metallic Y2K inspired bomber jacket. Turn heads every single drop.",
  },
  {
    id: BigInt(5),
    name: "Glitch Tee Vol.2",
    price: 55.0,
    category: "tops" as any,
    tag: "futuristic" as any,
    imageUrl: "/assets/generated/hero-bg.dim_1920x1080.jpg",
    description:
      "Oversized graphic tee featuring distorted glitch-art logo print.",
  },
  {
    id: BigInt(6),
    name: "Street Archive Cap",
    price: 48.0,
    category: "accessories" as any,
    tag: "streetwear" as any,
    imageUrl: "/assets/generated/story-collage.dim_600x600.jpg",
    description: "Structured 6-panel cap with embroidered DRIPORA wordmark.",
  },
];

const tagColors: Record<string, string> = {
  streetwear: "oklch(0.85 0.14 196)",
  techwear: "oklch(0.89 0.22 142)",
  futuristic: "oklch(0.85 0.14 196)",
  y2k: "oklch(0.78 0.11 196)",
  old_school: "oklch(0.89 0.22 142)",
};

const CATEGORIES = ["All", "Tops", "Bottoms", "Outerwear", "Accessories"];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const tagColor = tagColors[product.tag] ?? "oklch(0.85 0.14 196)";

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
      data-ocid={`shop.item.${index + 1}`}
      className="group flex flex-col overflow-hidden"
      style={{ background: "oklch(0.96 0.003 240)" }}
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={
            product.imageUrl ||
            "/assets/generated/product-hoodie.dim_400x500.jpg"
          }
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-110"
          loading="lazy"
        />
        {/* Tag */}
        <div
          className="absolute top-3 left-3 px-2 py-1 text-[9px] font-black tracking-widest uppercase"
          style={{ background: tagColor, color: "oklch(0.09 0.006 240)" }}
        >
          {product.tag.replace("_", " ")}
        </div>
        {/* Quick add overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button
            type="button"
            data-ocid={`shop.item.${index + 1}`}
            className="flex items-center gap-2 px-6 py-3 text-xs font-bold tracking-widest uppercase transition-transform hover:scale-105"
            style={{
              background: "oklch(0.85 0.14 196)",
              color: "oklch(0.09 0.006 240)",
            }}
          >
            <ShoppingBag size={14} /> QUICK ADD
          </button>
        </div>
      </div>

      {/* Info strip */}
      <div
        className="p-4 flex items-center justify-between"
        style={{ background: "oklch(0.09 0.006 240)" }}
      >
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-white truncate max-w-[160px]">
            {product.name}
          </p>
          <p
            className="text-xs flex items-center gap-1 mt-0.5"
            style={{ color: "oklch(0.62 0.008 240)" }}
          >
            <Tag size={10} /> {product.category}
          </p>
        </div>
        <p
          className="text-sm font-black"
          style={{ color: "oklch(0.85 0.14 196)" }}
        >
          ${product.price.toFixed(2)}
        </p>
      </div>
    </motion.div>
  );
}

export default function ShopPreview() {
  const { data: products, isLoading } = useGetAllProducts();
  const allProducts = (products?.length ? products : fallbackProducts).slice(
    0,
    6,
  );
  const [activeCategory, setActiveCategory] = useState("All");

  const displayProducts =
    activeCategory === "All"
      ? allProducts
      : allProducts.filter(
          (p) => p.category.toLowerCase() === activeCategory.toLowerCase(),
        );

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="shop"
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
          className="text-center mb-12"
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "oklch(0.89 0.22 142)" }}
          >
            LATEST DROPS
          </p>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
            SHOP PREVIEW
          </h2>
          <div
            className="mx-auto mt-4 h-px w-24"
            style={{
              background:
                "linear-gradient(90deg, transparent, oklch(0.89 0.22 142), transparent)",
            }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                data-ocid="shop.tab"
                onClick={() => setActiveCategory(cat)}
                className="px-5 py-2 text-[10px] font-black tracking-[0.25em] uppercase border transition-all duration-200 hover:scale-105"
                style={{
                  borderColor: isActive
                    ? "oklch(0.89 0.22 142)"
                    : "oklch(0.20 0.01 240)",
                  background: isActive
                    ? "oklch(0.89 0.22 142 / 0.12)"
                    : "transparent",
                  color: isActive
                    ? "oklch(0.89 0.22 142)"
                    : "oklch(0.62 0.008 240)",
                  boxShadow: isActive
                    ? "0 0 14px oklch(0.89 0.22 142 / 0.25)"
                    : "none",
                }}
              >
                {cat}
              </button>
            );
          })}
        </motion.div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              // biome-ignore lint/suspicious/noArrayIndexKey: skeleton placeholders
              <div key={i} data-ocid="shop.loading_state">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-12 w-full mt-1" />
              </div>
            ))}
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-20" data-ocid="shop.empty_state">
            <p
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "oklch(0.62 0.008 240)" }}
            >
              NO ITEMS IN THIS CATEGORY YET
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {displayProducts.map((p, i) => (
              <ProductCard key={String(p.id)} product={p} index={i} />
            ))}
          </div>
        )}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="#shop"
            data-ocid="shop.primary_button"
            className="inline-block px-12 py-4 text-sm font-bold tracking-[0.3em] uppercase border-2 transition-all duration-300 hover:scale-105"
            style={{
              color: "oklch(0.89 0.22 142)",
              borderColor: "oklch(0.89 0.22 142)",
              boxShadow: "0 0 20px oklch(0.89 0.22 142 / 0.2)",
            }}
          >
            VIEW ALL PRODUCTS
          </a>
        </motion.div>
      </div>
    </section>
  );
}
