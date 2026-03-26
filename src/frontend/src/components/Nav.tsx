import { Menu, Search, ShoppingBag, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "NEW DROPS", href: "#shop" },
    { label: "MENS", href: "#shop" },
    { label: "WOMENS", href: "#shop" },
    { label: "COLLECTIONS", href: "#collections" },
    { label: "SIZE GUIDE", href: "#size-guide" },
    { label: "FAQ", href: "#faq" },
    { label: "COMMUNITY", href: "#story" },
    { label: "SALE", href: "#shop", sale: true },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          data-ocid="nav.link"
          className="text-2xl font-black tracking-[0.3em] text-neon-cyan hover:opacity-80 transition-opacity"
        >
          DRIPORA
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                data-ocid="nav.link"
                className={`text-xs font-700 tracking-widest transition-colors hover:text-neon-cyan ${
                  link.sale
                    ? "text-sale-red hover:text-red-400"
                    : "text-foreground"
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Utility Icons */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            aria-label="Search"
            data-ocid="nav.button"
            className="text-foreground hover:text-neon-cyan transition-colors"
          >
            <Search size={20} />
          </button>
          <button
            type="button"
            aria-label="Cart"
            data-ocid="nav.button"
            className="text-foreground hover:text-neon-cyan transition-colors relative"
          >
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary text-primary-foreground text-[9px] font-bold rounded-full flex items-center justify-center">
              0
            </span>
          </button>
          <button
            type="button"
            aria-label="Menu"
            data-ocid="nav.button"
            className="lg:hidden text-foreground hover:text-neon-cyan transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-card border-b border-border px-6 py-6"
          >
            <ul className="flex flex-col gap-4">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    data-ocid="nav.link"
                    onClick={() => setMenuOpen(false)}
                    className={`text-sm font-bold tracking-widest transition-colors hover:text-neon-cyan ${
                      link.sale ? "text-sale-red" : "text-foreground"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
