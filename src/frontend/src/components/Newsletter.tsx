import { Input } from "@/components/ui/input";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { useSubscribeNewsletter } from "../hooks/useQueries";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { mutate, isPending, isSuccess, isError } = useSubscribeNewsletter();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    mutate(email);
  };

  return (
    <section
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "oklch(0.11 0.008 240)" }}
    >
      {/* Neon background accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, oklch(0.85 0.14 196 / 0.06) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-2xl mx-auto text-center relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "oklch(0.85 0.14 196)" }}
          >
            EXCLUSIVE ACCESS
          </p>
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-widest text-white mb-4">
            STAY AHEAD.
            <br />
            <span style={{ color: "oklch(0.85 0.14 196)" }}>
              SIGN UP FOR DROPS.
            </span>
          </h2>
          <p
            className="text-sm mb-10"
            style={{ color: "oklch(0.62 0.008 240)" }}
          >
            Be the first to know about new drops, exclusive collabs, and early
            access. No spam — just culture.
          </p>

          {isSuccess ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              data-ocid="newsletter.success_state"
              className="flex flex-col items-center gap-3"
            >
              <CheckCircle2
                size={40}
                style={{ color: "oklch(0.89 0.22 142)" }}
              />
              <p
                className="text-sm font-bold tracking-widest uppercase"
                style={{ color: "oklch(0.89 0.22 142)" }}
              >
                YOU'RE IN. WELCOME TO DRIPORA.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            >
              <Input
                type="email"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                data-ocid="newsletter.input"
                className="flex-1 bg-transparent border-2 placeholder:text-xs placeholder:tracking-widest placeholder:font-medium text-white"
                style={{
                  borderColor: "oklch(0.85 0.14 196 / 0.5)",
                  background: "oklch(0.09 0.006 240)",
                }}
              />
              <button
                type="submit"
                disabled={isPending}
                data-ocid="newsletter.submit_button"
                className="flex items-center justify-center gap-2 px-8 py-3 text-xs font-bold tracking-widest uppercase border-2 transition-all hover:scale-105 disabled:opacity-60"
                style={{
                  color: "oklch(0.09 0.006 240)",
                  background: "oklch(0.85 0.14 196)",
                  borderColor: "oklch(0.85 0.14 196)",
                  boxShadow: "0 0 16px oklch(0.85 0.14 196 / 0.4)",
                }}
              >
                {isPending ? (
                  <Loader2 size={14} className="animate-spin" />
                ) : (
                  <>
                    <Send size={14} /> JOIN
                  </>
                )}
              </button>
            </form>
          )}

          {isError && (
            <p
              data-ocid="newsletter.error_state"
              className="mt-3 text-xs tracking-widest uppercase"
              style={{ color: "oklch(0.56 0.22 27)" }}
            >
              Something went wrong. Please try again.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
