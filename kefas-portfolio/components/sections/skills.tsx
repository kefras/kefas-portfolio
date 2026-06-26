"use client";

import { motion } from "framer-motion";
import { skills } from "@/data";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
  transition: { duration: 0.5, delay, ease: [0.2, 0.8, 0.2, 1] as const },
});

export function SkillsSection() {
  return (
    <section id="stack" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <p className="section-kicker mb-3">FIG. 02 — STACK</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-3">Tools I build with</h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            A focused arsenal for designing, automating and operating production-grade cloud systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {skills.map((group, i) => (
            <motion.div
              key={group.category}
              {...fadeUp(0.05 * i)}
              className="bracket-card rounded-md border border-border bg-card p-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="grid place-items-center w-9 h-9 rounded bg-foreground text-background text-base flex-shrink-0">
                  {group.icon}
                </div>
                <h3 className="font-display font-semibold text-sm">{group.category}</h3>
              </div>
              <ul className="flex flex-col gap-2">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 font-mono-custom text-xs text-muted-foreground">
                    <span className="text-signal font-bold">›</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
