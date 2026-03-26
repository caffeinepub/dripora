import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const faqs = [
  {
    q: "When does DRIPORA officially launch?",
    a: "March 2026. The wait is almost over — be ready when the drop hits.",
  },
  {
    q: "Where do you ship?",
    a: "Worldwide shipping available. No matter where you are on the grid, we'll get your order to you.",
  },
  {
    q: "What is your return policy?",
    a: "We accept returns within 30 days of delivery on unworn items with original tags attached. Items must be in original condition.",
  },
  {
    q: "How do I know my size?",
    a: "Refer to our Size Guide above — we've broken down every measurement for Tops, Bottoms, and Outerwear so you get the perfect fit.",
  },
  {
    q: "What materials do you use?",
    a: "We use premium cotton and recycled polyester blends. Quality that hits different — built to last and built for the planet.",
  },
  {
    q: "Are the collections limited edition?",
    a: "Yes. Most DRIPORA drops are limited runs. Once they're gone, they're gone. Move fast or miss out.",
  },
  {
    q: "How do I stay updated on new drops?",
    a: "Subscribe to our newsletter below. You'll be first to know when new collections drop, plus early access deals exclusive to subscribers.",
  },
  {
    q: "How do I contact support?",
    a: "Use our contact form above or email us directly at gsharma7lancer@gmail.com. We respond within 24 hours.",
  },
];

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="py-24 px-6"
      style={{ background: "oklch(0.07 0.005 240)" }}
    >
      <div className="max-w-[900px] mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <div className="mb-14">
            <p
              className="text-xs tracking-[0.4em] uppercase mb-3"
              style={{ color: "oklch(0.85 0.14 196)" }}
            >
              GOT QUESTIONS?
            </p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-widest text-white">
              FAQ
            </h2>
            <div
              className="mt-4 h-[2px] w-20"
              style={{ background: "oklch(0.85 0.14 196)" }}
            />
          </div>

          <Accordion type="single" collapsible className="flex flex-col gap-2">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.07 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  data-ocid={`faq.item.${i + 1}`}
                  className="border px-6"
                  style={{
                    borderColor: "oklch(0.20 0.01 240)",
                    background: "oklch(0.12 0.008 240)",
                  }}
                >
                  <AccordionTrigger
                    className="text-sm font-bold tracking-wide uppercase text-left py-5 hover:no-underline transition-colors"
                    style={{ color: "oklch(0.84 0.006 240)" }}
                    data-ocid={`faq.toggle.${i + 1}` as string}
                  >
                    <span className="flex items-start gap-3">
                      <span
                        className="text-xs font-black mt-0.5 flex-shrink-0"
                        style={{ color: "oklch(0.85 0.14 196)" }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {faq.q}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent
                    className="pb-5 text-sm leading-relaxed pl-8"
                    style={{ color: "oklch(0.62 0.008 240)" }}
                  >
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
