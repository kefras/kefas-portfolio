"use client";

import { motion } from "framer-motion";
import { MapPin, GraduationCap, Cloud } from "lucide-react";
import { cn } from "@/lib/utils";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

const infoCards = [
  { icon: MapPin, label: "Based in", value: "Abuja, Nigeria" },
  { icon: GraduationCap, label: "Education", value: "B.Sc. Computer Science — Miva Open University" },
  { icon: Cloud, label: "Focus", value: "Cloud-Native & Automation" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="section-kicker mb-3">FIG. 01 — ABOUT</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight">Who I Am</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-6 max-w-5xl mx-auto">
          {/* Summary */}
          <motion.div
            {...fadeUp(0.1)}
            className="bracket-card rounded-md border border-border bg-card p-6 lg:p-8"
          >
            <p className="font-mono-custom text-xs uppercase tracking-widest text-wire dark:text-wire-dark mb-4 font-semibold">
              Professional Summary
            </p>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I&apos;m an entry-level{" "}
                <span className="text-wire dark:text-wire-dark font-semibold">DevOps and Cloud Engineer</span>{" "}
                with hands-on experience in AWS, Linux, Docker and Kubernetes — built through practical projects and intensive cloud labs.
              </p>
              <p>
                I specialize in deploying scalable applications, managing cloud infrastructure and working with containerized environments. Focus areas:{" "}
                <span className="text-wire dark:text-wire-dark font-semibold">CI/CD</span>,{" "}
                <span className="text-wire dark:text-wire-dark font-semibold">infrastructure automation</span> and{" "}
                <span className="text-wire dark:text-wire-dark font-semibold">cloud-native systems</span>.
              </p>
              <p>
                A fast learner with strong analytical skills, I thrive in remote teams and stay deeply committed to continuous learning and solving real-world problems through automation. Currently seeking internship and entry-level roles at leading technology companies.
              </p>
            </div>
          </motion.div>

          {/* Info cards */}
          <div className="flex flex-col gap-4">
            {infoCards.map(({ icon: Icon, label, value }, i) => (
              <motion.div
                key={label}
                {...fadeUp(0.15 + i * 0.05)}
                className="bracket-card rounded-md border border-border bg-card p-4 flex items-center gap-4"
              >
                <div className="grid place-items-center w-11 h-11 rounded bg-foreground text-background flex-shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className="font-mono-custom text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="font-display font-semibold text-sm mt-0.5">{value}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
