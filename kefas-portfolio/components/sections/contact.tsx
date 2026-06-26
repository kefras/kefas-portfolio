"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Loader2, MessageCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon, WhatsappIcon } from "@/components/ui/social-icons";
import { siteConfig } from "@/data";

const contactLinks = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone · Abuja, Nigeria", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
];

const socials = [
  { icon: GithubIcon, label: "GitHub", href: siteConfig.socials.github },
  { icon: LinkedinIcon, label: "LinkedIn", href: siteConfig.socials.linkedin },
  { icon: XIcon, label: "X", href: siteConfig.socials.twitter },
  { icon: WhatsappIcon, label: "WhatsApp", href: siteConfig.socials.whatsapp },
];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(
        "https://fpl6eii032.execute-api.us-east-1.amazonaws.com/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-kicker mb-3">FIG. 06 — CONTACT</p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
              Let&apos;s build something reliable.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Have a cloud migration, a pipeline that&apos;s misbehaving, or a full-stack idea you want shipped? Drop a message — I reply within 24 hours.
            </p>

            <div className="flex flex-col gap-3 mb-6">
              {contactLinks.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="bracket-card flex items-center gap-4 p-4 rounded-md border border-border bg-card hover:border-wire dark:hover:border-wire-dark transition-all"
                >
                  <div className="grid place-items-center w-10 h-10 rounded bg-muted text-wire dark:text-wire-dark flex-shrink-0">
                    <Icon size={17} />
                  </div>
                  <div>
                    <p className="font-mono-custom text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    <p className="font-semibold text-sm">{value}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex gap-2">
              {socials.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded border border-border hover:border-wire dark:hover:border-wire-dark text-muted-foreground hover:text-wire dark:hover:text-wire-dark transition-all"
                >
                  <Icon size={17} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="bracket-card rounded-md border border-border bg-card p-6 sm:p-8 flex flex-col gap-5"
          >
            {[
              { id: "name", label: "Name", type: "text", placeholder: "Your name" },
              { id: "email", label: "Email", type: "email", placeholder: "you@company.com" },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id} className="flex flex-col gap-1.5">
                <label htmlFor={id} className="font-mono-custom text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                  {label}
                </label>
                <input
                  id={id}
                  type={type}
                  required
                  placeholder={placeholder}
                  value={form[id as keyof typeof form]}
                  onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                  className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-wire dark:focus:border-wire-dark transition-colors text-sm"
                />
              </div>
            ))}

            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="font-mono-custom text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                className="w-full px-4 py-2.5 rounded border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-signal/30 focus:border-wire dark:focus:border-wire-dark transition-colors text-sm resize-vertical"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded bg-foreground text-background font-semibold text-sm shadow-[3px_3px_0_theme('colors.signal.DEFAULT')] hover:shadow-[5px_5px_0_theme('colors.signal.DEFAULT')] hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none transition-all"
            >
              {status === "loading" ? (
                <><Loader2 size={15} className="animate-spin" /> Sending...</>
              ) : (
                <><Send size={15} /> Send message</>
              )}
            </button>

            {status === "success" && (
              <p className="text-ok dark:text-ok-dark text-xs text-center font-mono-custom">
                ✓ Message sent — I&apos;ll reply within 24 hours.
              </p>
            )}
            {status === "error" && (
              <p className="text-signal text-xs text-center font-mono-custom">
                ✕ Something went wrong. Try emailing directly.
              </p>
            )}

            <p className="text-muted-foreground text-xs text-center font-mono-custom">
              We will reply to you within 24 hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
