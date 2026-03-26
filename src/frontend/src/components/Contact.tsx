import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send } from "lucide-react";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setName("");
      setEmail("");
      setMessage("");
      toast.success("MESSAGE SENT. WE'LL HIT YOU BACK SOON.");
    }, 900);
  };

  const inputStyle = {
    background: "oklch(0.07 0.006 240)",
    borderColor: "oklch(0.20 0.01 240)",
    color: "oklch(0.84 0.006 240)",
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 relative overflow-hidden"
      style={{ background: "oklch(0.09 0.006 240)" }}
    >
      {/* Neon glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 50% 50% at 80% 50%, oklch(0.85 0.14 196 / 0.04) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto relative z-10" ref={ref}>
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
              REACH OUT
            </p>
            <h2
              className="text-4xl md:text-5xl font-black uppercase tracking-widest"
              style={{ color: "oklch(0.85 0.14 196)" }}
            >
              GET IN TOUCH
            </h2>
            <div
              className="mt-4 h-[2px] w-20"
              style={{ background: "oklch(0.85 0.14 196)" }}
            />
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5"
              data-ocid="contact.modal"
            >
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs font-bold tracking-[0.25em] uppercase mb-2"
                  style={{ color: "oklch(0.62 0.008 240)" }}
                >
                  NAME
                </label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="YOUR NAME"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  data-ocid="contact.input"
                  className="placeholder:text-xs placeholder:tracking-widest placeholder:font-medium border-2 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.14_196)] transition-colors"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs font-bold tracking-[0.25em] uppercase mb-2"
                  style={{ color: "oklch(0.62 0.008 240)" }}
                >
                  EMAIL
                </label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="YOUR EMAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  data-ocid="contact.input"
                  className="placeholder:text-xs placeholder:tracking-widest placeholder:font-medium border-2 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.14_196)] transition-colors"
                  style={inputStyle}
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-xs font-bold tracking-[0.25em] uppercase mb-2"
                  style={{ color: "oklch(0.62 0.008 240)" }}
                >
                  MESSAGE
                </label>
                <Textarea
                  id="contact-message"
                  placeholder="WHAT'S ON YOUR MIND?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  data-ocid="contact.textarea"
                  className="placeholder:text-xs placeholder:tracking-widest placeholder:font-medium border-2 focus-visible:ring-0 focus-visible:border-[oklch(0.85_0.14_196)] transition-colors resize-none"
                  style={inputStyle}
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                data-ocid="contact.submit_button"
                className="mt-2 flex items-center justify-center gap-2 px-10 py-4 text-xs font-black tracking-[0.3em] uppercase border-2 transition-all hover:scale-105 disabled:opacity-60 disabled:cursor-not-allowed w-full sm:w-auto self-start"
                style={{
                  color: "oklch(0.09 0.006 240)",
                  background: "oklch(0.85 0.14 196)",
                  borderColor: "oklch(0.85 0.14 196)",
                  boxShadow: "0 0 20px oklch(0.85 0.14 196 / 0.35)",
                }}
              >
                {submitting ? (
                  <span className="animate-pulse">SENDING...</span>
                ) : (
                  <>
                    <Send size={13} /> SEND MESSAGE
                  </>
                )}
              </button>
            </form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col gap-8 justify-center"
            >
              <div>
                <p
                  className="text-xs tracking-[0.3em] uppercase font-black mb-6"
                  style={{ color: "oklch(0.62 0.008 240)" }}
                >
                  DIRECT CONTACT
                </p>

                <div className="flex flex-col gap-6">
                  <a
                    href="tel:+918617203484"
                    data-ocid="contact.link"
                    className="group flex items-center gap-5 transition-colors"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        borderColor: "oklch(0.85 0.14 196)",
                        background: "oklch(0.85 0.14 196 / 0.08)",
                      }}
                    >
                      <Phone
                        size={18}
                        style={{ color: "oklch(0.85 0.14 196)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "oklch(0.62 0.008 240)" }}
                      >
                        PHONE
                      </p>
                      <p
                        className="text-sm font-bold tracking-widest group-hover:text-white transition-colors"
                        style={{ color: "oklch(0.84 0.006 240)" }}
                      >
                        +91 8617203484
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:gsharma7lancer@gmail.com"
                    data-ocid="contact.link"
                    className="group flex items-center gap-5 transition-colors"
                  >
                    <div
                      className="w-12 h-12 flex items-center justify-center border-2 flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{
                        borderColor: "oklch(0.85 0.14 196)",
                        background: "oklch(0.85 0.14 196 / 0.08)",
                      }}
                    >
                      <Mail
                        size={18}
                        style={{ color: "oklch(0.85 0.14 196)" }}
                      />
                    </div>
                    <div>
                      <p
                        className="text-xs tracking-widest uppercase mb-1"
                        style={{ color: "oklch(0.62 0.008 240)" }}
                      >
                        EMAIL
                      </p>
                      <p
                        className="text-sm font-bold tracking-widest group-hover:text-white transition-colors break-all"
                        style={{ color: "oklch(0.84 0.006 240)" }}
                      >
                        gsharma7lancer@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div
                className="p-6 border-l-2"
                style={{
                  borderColor: "oklch(0.85 0.14 196)",
                  background: "oklch(0.85 0.14 196 / 0.04)",
                }}
              >
                <p
                  className="text-xs tracking-wide leading-relaxed"
                  style={{ color: "oklch(0.62 0.008 240)" }}
                >
                  Whether it's a collab, wholesale inquiry, or just vibes —
                  slide into our inbox. We respond within 24 hours.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
