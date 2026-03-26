import { Mail, Phone } from "lucide-react";
import { SiInstagram, SiTiktok, SiX, SiYoutube } from "react-icons/si";

const footerLinks = {
  SHOP: [
    { label: "New Drops", href: "#shop" },
    { label: "Mens", href: "#shop" },
    { label: "Womens", href: "#shop" },
    { label: "Collections", href: "#collections" },
    { label: "Sale", href: "#shop" },
  ],
  ABOUT: [
    { label: "Our Story", href: "#story" },
    { label: "Brand Values", href: "#story" },
    { label: "Sustainability", href: "#story" },
    { label: "Careers", href: "#story" },
    { label: "Press", href: "#story" },
  ],
  HELP: [
    { label: "FAQ", href: "#hero" },
    { label: "Shipping & Returns", href: "#hero" },
    { label: "Size Guide", href: "#hero" },
    { label: "Track Order", href: "#hero" },
    { label: "Contact Us", href: "#hero" },
  ],
};

const socialLinks = [
  { icon: SiInstagram, label: "Instagram", href: "https://instagram.com" },
  { icon: SiX, label: "X (Twitter)", href: "https://x.com" },
  { icon: SiTiktok, label: "TikTok", href: "https://tiktok.com" },
  { icon: SiYoutube, label: "YouTube", href: "https://youtube.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "oklch(0.09 0.006 240)",
        borderTop: "1px solid oklch(0.20 0.01 240)",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-6 py-16">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="col-span-2">
            <h3
              className="text-3xl font-black tracking-[0.3em] mb-4"
              style={{
                color: "oklch(0.85 0.14 196)",
                textShadow: "0 0 20px oklch(0.85 0.14 196 / 0.4)",
              }}
            >
              DRIPORA
            </h3>
            <p
              className="text-sm leading-relaxed mb-5 max-w-xs"
              style={{ color: "oklch(0.62 0.008 240)" }}
            >
              Born from the streets of 2026. Where Gen Z energy meets old-school
              soul. No compromise, all drop.
            </p>

            {/* Contact Info */}
            <div className="flex flex-col gap-2 mb-6">
              <a
                href="tel:+918617203484"
                className="flex items-center gap-2 text-xs tracking-wide transition-colors hover:text-white"
                style={{ color: "oklch(0.62 0.008 240)" }}
              >
                <Phone size={13} style={{ color: "oklch(0.85 0.14 196)" }} />
                +91 8617203484
              </a>
              <a
                href="mailto:gsharma7lancer@gmail.com"
                className="flex items-center gap-2 text-xs tracking-wide transition-colors hover:text-white"
                style={{ color: "oklch(0.62 0.008 240)" }}
              >
                <Mail size={13} style={{ color: "oklch(0.85 0.14 196)" }} />
                gsharma7lancer@gmail.com
              </a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-ocid="footer.link"
                  className="w-9 h-9 flex items-center justify-center border transition-all hover:scale-110"
                  style={{
                    borderColor: "oklch(0.20 0.01 240)",
                    color: "oklch(0.62 0.008 240)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.85 0.14 196)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.85 0.14 196)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor =
                      "oklch(0.20 0.01 240)";
                    (e.currentTarget as HTMLElement).style.color =
                      "oklch(0.62 0.008 240)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-black tracking-[0.3em] uppercase mb-5 text-white">
                {title}
              </h4>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      data-ocid="footer.link"
                      className="text-xs tracking-wide transition-colors hover:text-white"
                      style={{ color: "oklch(0.62 0.008 240)" }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div
          className="mt-16 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderTop: "1px solid oklch(0.20 0.01 240)" }}
        >
          <p className="text-xs" style={{ color: "oklch(0.62 0.008 240)" }}>
            © {currentYear} DRIPORA. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "oklch(0.45 0.008 240)" }}>
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(window.location.hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              style={{ color: "oklch(0.85 0.14 196)" }}
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
